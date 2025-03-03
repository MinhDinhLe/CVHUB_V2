package com.project.CvHub.Controller;

import com.project.CvHub.Config.ResourceNotFoundException;
import com.project.CvHub.Controller.model.JobRequestDTO;
import com.project.CvHub.DTO.*;
import com.project.CvHub.Entity.JobRequest;
import com.project.CvHub.Entity.JobRole;
import com.project.CvHub.Entity.Location;
import com.project.CvHub.Entity.Organization;
import com.project.CvHub.Repository.JobRequestRepository;
import com.project.CvHub.Repository.JobRoleRepository;
import com.project.CvHub.Repository.LocationRepository;
import com.project.CvHub.Service.JobRequestService;
import com.project.CvHub.Service.JobRoleService;
import com.project.CvHub.Service.LocationService;
import com.project.CvHub.Service.OrganizationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/jobrequests")
public class JobRequestController {
	@Autowired
	private JobRequestService jobRequestService;
	@Autowired
	private JobRequestRepository jobRequestRepository;
	@Autowired
	private OrganizationService organizationService;
	@Autowired
	private JobRoleService jobRoleService;
	@Autowired
	private JobRoleRepository jobRoleRepository;
	@Autowired
	private LocationService locationService;
	@Autowired
	private LocationRepository locationRepository;

	// Get all jobs with pagination
	@GetMapping("")
	public ResponseEntity<Map<String, Object>> getAllJobRequests(
			@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "limit", defaultValue = "10") int limit) {

		PageRequest pageRequest = PageRequest.of(page, limit, Sort.by("createdDate").descending());
		Page<JobRequest> jobRequestPage = jobRequestRepository.findAll(pageRequest);

		List<JobRequestResponseDTO> jobRequests = jobRequestPage.getContent()
				.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());

		Map<String, Object> response = new HashMap<>();
		response.put("jobrequests", jobRequests);
		response.put("totalPages", jobRequestPage.getTotalPages());
		response.put("currentPage", page);
		response.put("totalItems", jobRequestPage.getTotalElements());

		return ResponseEntity.ok(response);
	}

	// Search jobs with filters
	@GetMapping("/search")
	public ResponseEntity<Map<String, Object>> searchJobs(
			@RequestParam(required = false) String keyword,
			@RequestParam(required = false) Integer locationCode,
			@RequestParam(required = false) Long jobRoleId,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size) {

		PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdDate").descending());
		Page<JobRequest> jobRequestPage = jobRequestRepository.search(keyword, locationCode, jobRoleId, pageRequest);

		List<JobRequestResponseDTO> jobs = jobRequestPage.getContent()
				.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());

		Map<String, Object> response = new HashMap<>();
		response.put("jobs", jobs);
		response.put("currentPage", jobRequestPage.getNumber());
		response.put("totalItems", jobRequestPage.getTotalElements());
		response.put("totalPages", jobRequestPage.getTotalPages());

		return ResponseEntity.ok(response);
	}

	// Advanced search với nhiều tiêu chí hơn
	@GetMapping("/advanced-search")
	public ResponseEntity<Map<String, Object>> advancedSearchJobs(
			@RequestParam(required = false) String keyword,
			@RequestParam(required = false) Integer locationCode,
			@RequestParam(required = false) Long jobRoleId,
			@RequestParam(required = false) Integer minSalary,
			@RequestParam(required = false) Integer maxSalary,
			@RequestParam(required = false) Integer experience,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size) {

		PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdDate").descending());
		Page<JobRequest> jobRequestPage = jobRequestRepository.advancedSearch(
				keyword, locationCode, jobRoleId, minSalary, maxSalary, experience, pageRequest);

		List<JobRequestResponseDTO> jobs = jobRequestPage.getContent()
				.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());

		Map<String, Object> response = new HashMap<>();
		response.put("jobs", jobs);
		response.put("currentPage", jobRequestPage.getNumber());
		response.put("totalItems", jobRequestPage.getTotalElements());
		response.put("totalPages", jobRequestPage.getTotalPages());

		return ResponseEntity.ok(response);
	}

	// Get job detail
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> getDetailJob(@PathVariable Long id) {
		JobRequest jobRequest = jobRequestRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

		List<JobRole> allJobRoles = jobRoleRepository.findAll();
		List<Location> locations = locationRepository.findAll();

		Map<String, Object> response = new HashMap<>();
		response.put("jobRequest", convertToDTO(jobRequest));
//		response.put("locations", locations.stream().map(this::convertToLocationDTO).collect(Collectors.toList()));
		response.put("allJobRoles", allJobRoles.stream().map(this::convertToJobRoleDTO).collect(Collectors.toList()));

		return ResponseEntity.ok(response);
	}

	// Get support data (locations and job roles)
	@GetMapping("/support-data")
	public ResponseEntity<Map<String, Object>> getSupportData() {
		Map<String, Object> response = new HashMap<>();
		response.put("locations", locationRepository.findAll().stream()
				.map(this::convertToLocationDTO)
				.collect(Collectors.toList()));
		response.put("jobRoles", jobRoleRepository.findAll().stream()
				.map(this::convertToJobRoleDTO)
				.collect(Collectors.toList()));
		return ResponseEntity.ok(response);
	}

	// Get jobs by organization
	@GetMapping("/organization/{organizationId}")
	public ResponseEntity<Map<String, Object>> getJobsByOrganization(
			@PathVariable Long organizationId,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size) {

		PageRequest pageRequest = PageRequest.of(page, size);
		Page<JobRequest> jobPage = jobRequestRepository.findByOrganizationId(organizationId, pageRequest);

		List<JobRequestResponseDTO> jobs = jobPage.getContent()
				.stream()
				.map(this::convertToDTO)
				.collect(Collectors.toList());

		Map<String, Object> response = new HashMap<>();
		response.put("jobs", jobs);
		response.put("totalPages", jobPage.getTotalPages());
		response.put("currentPage", jobPage.getNumber());
		response.put("totalItems", jobPage.getTotalElements());

		return ResponseEntity.ok(response);
	}

	// Create new job
	@PostMapping("/createJob")
	public ResponseEntity<?> createJob(@RequestBody JobRequestDTO jobRequestDTO) {
		try {
			JobRequest jobRequest = jobRequestService.createJobRequest(
					jobRequestDTO.getTitle(),
					jobRequestDTO.getLocationCode(),
					jobRequestDTO.getJobRoleId(),
					jobRequestDTO.getExperience(),
					jobRequestDTO.getSalary(),
					jobRequestDTO.getOrganizationId(),
					jobRequestDTO.getJobDescription(),
					jobRequestDTO.getRequirementsCandidate(),
					jobRequestDTO.getBenefitCandidate(),
					jobRequestDTO.getDeadlineApplication()
			);
			jobRequest = jobRequestRepository.save(jobRequest);

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "Job created successfully");
			response.put("jobRequest", convertToDTO(jobRequest));

			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception e) {
			Map<String, Object> errorResponse = new HashMap<>();
			errorResponse.put("success", false);
			errorResponse.put("message", "Error creating job: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
		}
	}

	// Update job
	@PutMapping("/{id}")
	public ResponseEntity<?> updateJob(@PathVariable Long id, @RequestBody JobRequestDTO jobRequestDTO) {
		try {
			JobRequest jobRequest = jobRequestRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

			JobRequest updatedJobRequest = jobRequestService.updateJobRequest(
					jobRequest,
					jobRequestDTO.getTitle(),
					jobRequestDTO.getLocationCode(),
					jobRequestDTO.getJobRoleId(),
					jobRequestDTO.getExperience(),
					jobRequestDTO.getSalary(),
					jobRequestDTO.getJobDescription(),
					jobRequestDTO.getRequirementsCandidate(),
					jobRequestDTO.getBenefitCandidate(),
					jobRequestDTO.getDeadlineApplication()
			);

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "Job updated successfully");
			response.put("jobRequest", convertToDTO(updatedJobRequest));

			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse(false, e.getMessage()));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(false, "Error updating job: " + e.getMessage()));
		}
	}

	// Delete job
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable Long id) {
		try {
			JobRequest jobRequest = jobRequestRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

			jobRequestService.deleteJobRequest(jobRequest);

			Map<String, Object> response = new HashMap<>();
			response.put("success", true);
			response.put("message", "Job deleted successfully");

			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse(false, e.getMessage()));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(false, "Error deleting job: " + e.getMessage()));
		}
	}

	// Helper methods for DTO conversion
	private JobRequestResponseDTO convertToDTO(JobRequest jobRequest) {
		return new JobRequestResponseDTO(
				jobRequest.getId(),
				jobRequest.getTitle(),
				convertToLocationDTO(jobRequest.getLocation()),
				convertToJobRoleDTO(jobRequest.getJobRole()),
				jobRequest.getExperience(),
				jobRequest.getSalary(),
				jobRequest.getDetailsJob(),
				jobRequest.getRequirementsCandidate(),
				jobRequest.getBenefitCandidate(),
				jobRequest.getDeadlineApplication(),
				convertToOrganizationDTO(jobRequest.getOrganization())
		);
	}

	private LocationDTO convertToLocationDTO(Location location) {
		return new LocationDTO(
				location.getCode(),
				location.getName()
		);
	}

	private JobRoleDTO convertToJobRoleDTO(JobRole jobRole) {
		return new JobRoleDTO(
				jobRole.getId(),
				jobRole.getTitle()
		);
	}

	private OrganizationDTO convertToOrganizationDTO(Organization organization) {
		return new OrganizationDTO(
				organization.getId(),
				organization.getTitle(),
				organization.getLogoID()
		);
	}
}