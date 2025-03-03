package com.project.CvHub.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.project.CvHub.Controller.model.OrganizationDTO;
import com.project.CvHub.Entity.*;
import com.project.CvHub.Repository.*;
import com.project.CvHub.Service.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/organization")
public class OrganizationController {
	@Autowired
	OrganizationService organizationService;
	@Autowired
	OrganizationRepository organizationRepository;
	@Autowired
	JobRequestRepository jobRequestRepository;
	@Autowired
	JobRoleService jobRoleService;
	@Autowired
	LocationService locationService;
	@Autowired
	JobRequestService jobRequestService;
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;

	@Autowired
	LocationRepository locationRepository;

	@Autowired
	JobRoleRepository jobRoleRepository;

	public final Logger logger = LoggerFactory.getLogger(this.getClass());

	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getOrganizationDetails(@PathVariable("id") Long id) {
		Organization organization = organizationRepository.findById(id).orElse(null);

		if (organization == null) {
			return ResponseEntity.notFound().build();
		}

		List<JobRequest> jobByOrganization = jobRequestRepository.findByOrganizationId(id);
		List<JobRole> allJobRoles = jobRoleRepository.findAll();
		List<Location> locations = locationRepository.findAll();

		// Check if current user is owner
		boolean isOwner = false;
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null && auth.isAuthenticated()) {
			isOwner = organizationService.isOwner(id, auth.getName());
		}

		Map<String, Object> response = new HashMap<>();
		response.put("organization", organization);
		response.put("jobByOrganization", jobByOrganization);
		response.put("allJobRoles", allJobRoles);
		response.put("locations", locations);
		response.put("isOwner", isOwner);

		return ResponseEntity.ok(response);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN') and @organizationService.isOwner(#id, principal.username)")
	@GetMapping("/current")
	public ResponseEntity<?> getCurrentUserOrganization() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User currentUser = userService.findUserByEmail(auth.getName());

		Organization org = organizationService.findByUserId(currentUser.getId());

		if (org != null) {
			return ResponseEntity.ok(org);
		}

		Map<String, Object> response = new HashMap<>();
		response.put("message", "No organization found for this user");
		response.put("shouldRegister", true);

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
	}

	@GetMapping("/register-form")
	public ResponseEntity<Map<String, Object>> getRegistrationForm() {
		// Check if user is logged in
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getPrincipal())) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User not authenticated");
			response.put("shouldLogin", true);

			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
		}

		// Check if user already has an organization
		User currentUser = userService.findUserByEmail(auth.getName());
		Organization existingOrg = organizationService.findByUserId(currentUser.getId());

		if (existingOrg != null) {
			Map<String, Object> response = new HashMap<>();
			response.put("message", "User already has an organization");
			response.put("organizationId", existingOrg.getId());

			return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
		}

		// Prepare form data
		List<JobRole> jobRoles = jobRoleRepository.findAll();
		List<Location> locations = locationRepository.findAll();

		Map<String, Object> response = new HashMap<>();
		response.put("jobRoles", jobRoles);
		response.put("locations", locations);

		return ResponseEntity.ok(response);
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerOrganization(@RequestBody OrganizationDTO organizationDTO) {
		try {
			// Get current logged in user
			Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			User currentUser = userService.findUserByEmail(auth.getName());

			// Check if user already has an organization
			Organization existingOrg = organizationService.findByUserId(currentUser.getId());
			if (existingOrg != null) {
				Map<String, Object> response = new HashMap<>();
				response.put("success", false);
				response.put("message", "User already has an organization");
				response.put("organizationId", existingOrg.getId());

				return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
			}

			// Create and save organization
			Organization organization = organizationService.createOrganization(
					organizationDTO.getTitle(),
					organizationDTO.getLogoFile(),
					organizationDTO.getWebsite(),
					organizationDTO.getSummary(),
					organizationDTO.getDetail(),
					organizationDTO.getLocation()
			);

			// Link organization with user
			organization.setUser(currentUser);
			organization = organizationRepository.save(organization);

			// Update user role to ROLE_ADMIN
			currentUser.setRole("ROLE_ADMIN");
			userRepository.save(currentUser);

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "Organization registered successfully");
			response.put("organization", organization);

			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception e) {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("success", false);
			errorResponse.put("message", "Error registering organization: " + e.getMessage());

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		}
	}
}