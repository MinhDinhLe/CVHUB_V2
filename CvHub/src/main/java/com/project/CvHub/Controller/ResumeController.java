package com.project.CvHub.Controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.project.CvHub.Controller.model.CvDTO;
import com.project.CvHub.Entity.*;
import com.project.CvHub.Repository.CvRepository;
import com.project.CvHub.Repository.JobRoleRepository;
import com.project.CvHub.Repository.LocationRepository;
import com.project.CvHub.Repository.UserRepository;
import com.project.CvHub.Service.*;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {
	public final Logger logger = LoggerFactory.getLogger(this.getClass());


	public final ParsingCVService parsingCVService;
	@Autowired
	CvService cvService;
	@Autowired
	CvRepository cvRepository;
	@Autowired
	JobRoleService jobRoleService;
	@Autowired
	JobRoleRepository jobRoleRepository;
	@Autowired
	LocationService locationService;
	@Autowired
	LocationRepository locationRepository;
	@Autowired
	UserService userService;
	@Autowired
	UserRepository userRepository;

	@GetMapping("/upload-form")
	public ResponseEntity<Map<String, Object>> getUploadForm() {
		// Check if user is authenticated
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal())) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");
			response.put("shouldLogin", true);

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		Map<String, Object> response = new HashMap<>();
		response.put("message", "Ready to upload CV");

		return ResponseEntity.ok(response);
	}

	@PostMapping("/upload")
	public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated()) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		User currentUser = userService.findUserByEmail(auth.getName());

		try {
			String content = parsingCVService.extractTextFromPdfOrWord(file);
			Map<String, String> parsedInfo = parsingCVService.parseContent(content, currentUser);

			List<JobRole> jobRoles = jobRoleRepository.findAll();
			List<Location> locations = locationRepository.findAll();

			Map<String, Object> response = new HashMap<>();
			response.put("cvData", parsedInfo);
			response.put("jobRoles", jobRoles);
			response.put("locations", locations);

			return ResponseEntity.ok(response);
		} catch (IOException e) {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("error", "Cannot process file: " + e.getMessage());

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		}
	}

	@PostMapping("/save")
	public ResponseEntity<?> saveCV(@RequestBody CvDTO cvDTO) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated()) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		User currentUser = userService.findUserByEmail(auth.getName());
		if (currentUser == null) {
			Map<String, Object> response = new HashMap<>();
			response.put("error", "User not found");

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}

		try {
			CV cvNew = cvService.saveCV(
					cvDTO.getFullName(),
					cvDTO.getLocationCode(),
					cvDTO.getJobRoleId(),
					cvDTO.getEmail(),
					cvDTO.getPhone(),
					cvDTO.getEducation(),
					cvDTO.getSkills(),
					cvDTO.getExperience(),
					cvDTO.getProjects(),
					cvDTO.getCertifications(),
					cvDTO.getActivities(),
					cvDTO.getLogoFile(),
					currentUser
			);

			CV savedCV = cvRepository.save(cvNew);

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "CV saved successfully");
			response.put("cv", savedCV);

			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception e) {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("success", false);
			errorResponse.put("error", "Error saving CV: " + e.getMessage());

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		}
	}

	@GetMapping(value = "/images/{logoId}", produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> getCVImage(@PathVariable("logoId") UUID logoId) {
		byte[] image = cvRepository.getImageByLogoId(logoId);

		if (image == null || image.length == 0) {
			logger.warn("CV image not found or empty for logoId: " + logoId);
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(image);
	}

	@GetMapping("/manage")
	public ResponseEntity<?> manageCV() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated()) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		User currentUser = userService.findUserByEmail(auth.getName());
		if (currentUser == null) {
			Map<String, Object> response = new HashMap<>();
			response.put("error", "User not found");

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}

		List<CV> userCVs = cvService.findCVsByUserId(currentUser.getId());
		Long selectedCount = cvService.getSelectedCVCount(currentUser.getId());

		Map<String, Object> response = new HashMap<>();
		response.put("user", currentUser);
		response.put("cvList", userCVs);
		response.put("selectedCvCount", selectedCount);

		return ResponseEntity.ok(response);
	}

	@PostMapping("/{id}/setPrimary")
	public ResponseEntity<?> setPrimaryCV(@PathVariable Long id) {
		try {
			// Get current user
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			User currentUser = userService.findUserByEmail(auth.getName());

			if (currentUser == null) {
				Map<String, Object> response = new HashMap<>();
				response.put("error", "User not found");

				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			// Find and check CV
			CV cv = cvRepository.findById(id).orElse(null);
			if (cv == null) {
				Map<String, Object> response = new HashMap<>();
				response.put("error", "CV not found");

				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			if (!cv.getUser().getId().equals(currentUser.getId())) {
				Map<String, Object> response = new HashMap<>();
				response.put("error", "You don't have permission to modify this CV");

				return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
			}

			// Set primary CV
			cvService.setPrimaryCV(id, currentUser.getId());

			// Load user CVs
			List<CV> userCVs = cvRepository.findByUserId(currentUser.getId());
			Long selectedCount = cvService.getSelectedCVCount(currentUser.getId());

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "CV set as primary successfully");
			response.put("user", currentUser);
			response.put("cvList", userCVs);
			response.put("selectedCvCount", selectedCount);

			return ResponseEntity.ok(response);
		} catch (Exception e) {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("success", false);
			errorResponse.put("error", "Error setting primary CV: " + e.getMessage());

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getCV(@PathVariable Long id) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated()) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		User currentUser = userService.findUserByEmail(auth.getName());
		CV cv = cvRepository.findById(id).orElse(null);

		if (cv == null) {
			Map<String, Object> response = new HashMap<>();
			response.put("error", "CV not found");

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}

		if (!cv.getUser().getId().equals(currentUser.getId())) {
			Map<String, Object> response = new HashMap<>();
			response.put("error", "You don't have permission to view this CV");

			return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
		}

		return ResponseEntity.ok(cv);
	}
}