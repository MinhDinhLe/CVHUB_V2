/**
 * Licensed to MKS Group under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * MKS Group licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package com.project.CvHub.Controller;

import java.nio.ByteBuffer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import com.project.CvHub.Controller.model.JobRequest2DTO;
import com.project.CvHub.Controller.model.JobSearchDTO;
import com.project.CvHub.DTO.JobRequestResponseDTO;
import com.project.CvHub.DTO.JobRoleDTO;
import com.project.CvHub.DTO.LocationDTO;
import com.project.CvHub.DTO.OrganizationDTO;
import com.project.CvHub.Entity.JobRequest;
import com.project.CvHub.Entity.JobRole;
import com.project.CvHub.Entity.Location;
import com.project.CvHub.Entity.Organization;
import com.project.CvHub.Repository.JobRequestRepository;
import com.project.CvHub.Repository.JobRoleRepository;
import com.project.CvHub.Repository.LocationRepository;
import com.project.CvHub.Repository.OrganizationRepository;
import com.project.CvHub.Service.JobRoleService;
import com.project.CvHub.Service.LocationService;
import com.project.CvHub.Service.OrganizationService;
import com.project.CvHub.Service.SearchJobService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HomeController {
	@Autowired
	OrganizationService organizationService;
	@Autowired
	JobRoleService jobRoleService;
	@Autowired
	LocationService locationService;
	@Autowired
	SearchJobService searchjobService;
	@Autowired
	OrganizationRepository organizationRepository;
	@Autowired
	private JobRequestRepository jobRequestRepository;

	public final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private JobRoleRepository jobRoleRepository;
    @Autowired
    private LocationRepository locationRepository;

	/**
	 * This method is called when binding the HTTP parameter to bean (or model).
	 *
	 * @param binder
	 */
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		// Sample init of Custom Editor
		// Class<List<ItemKine>> collectionType = (Class<List<ItemKine>>)(Class<?>)List.class;
		// PropertyEditor orderNoteEditor = new MotionRuleEditor(collectionType);
		// binder.registerCustomEditor((Class<List<ItemKine>>)(Class<?>)List.class, orderNoteEditor);
	}

	/**
	 * Homepage data endpoint
	 */
	@GetMapping(value = {"/home"})
	public ResponseEntity<Map<String, Object>> getHomeData(
			@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "limit", defaultValue = "3") int limit) {

		PageRequest pageRequest = PageRequest.of(
				page, limit,
				Sort.by("createdDate").descending()
		);

		Page<JobRequest> jobRequestPage = jobRequestRepository.findAll(pageRequest);
		int totalPages = jobRequestPage.getTotalPages();
		List<JobRequest2DTO> jobRequestDTOs = JobRequest2DTO.JobRequestMapper.mapToDTO(jobRequestPage);

		List<Location> locations = locationRepository.findAll();
		List<JobRole> jobRoles = jobRoleRepository.findAll(); // Lấy danh sách tất cả ngành nghề

		Map<String, Object> response = new HashMap<>();
		response.put("jobrequests", jobRequestDTOs);
		response.put("totalPages", totalPages);
		response.put("currentPage", page);
		response.put("locations", locations); // Thêm danh sách địa điểm
		response.put("jobRoles", jobRoles); // Thêm danh sách ngành nghề

		return ResponseEntity.ok(response);
	}


	@GetMapping("/job-roles")
	public ResponseEntity<List<JobRole>> getAllJobRoles() {
		return ResponseEntity.ok(jobRoleRepository.findAll());
	}

	@GetMapping("/search")
	public ResponseEntity<Map<String, Object>> searchJobs(
			@RequestParam(value = "keyword", required = false) String keyword,
			@RequestParam(value = "location", required = false) String location,
			@RequestParam(value = "industry", required = false) String industry) {

		JobSearchDTO jobSearchDTO = new JobSearchDTO();
		jobSearchDTO.setKeyword(keyword);
		jobSearchDTO.setLocation(Integer.parseInt(location));
		jobSearchDTO.setIndustry(Long.valueOf(industry));

		List<JobRequest> searchResults = searchjobService.searchJobRequest(
				jobSearchDTO.getKeyword(),
				jobSearchDTO.getLocation(),
				jobSearchDTO.getIndustry()
		);
		List<JobRequestResponseDTO> jobs = searchResults
				.stream()
				.map(this::convertToDTO)
				.toList();
		Map<String, Object> response = new HashMap<>();
		response.put("searchResults", jobs);

		return ResponseEntity.ok(response);
	}

	@GetMapping(value = "/images/{logoId}", produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> getImage(@PathVariable("logoId") UUID logoId) {
		byte[] image = organizationRepository.getImageByLogoId(logoId);

		if (image == null || image.length == 0) {
			logger.warn("Image not found or empty for logoId: " + logoId);
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(image);
	}

	@GetMapping("/jobs/{jobId}")
	public ResponseEntity<JobRequest> getJobDetails(@PathVariable("jobId") Long jobId) {
		JobRequest jobRequest = jobRequestRepository.findById(jobId).orElse(null);

		if (jobRequest == null) {
			return ResponseEntity.notFound().build();
		}

		return ResponseEntity.ok(jobRequest);
	}

	// Phương thức hỗ trợ - cần triển khai


	public byte[] uuidToBytes(UUID uuid) {
		ByteBuffer byteBuffer = ByteBuffer.wrap(new byte[16]); // Chỉ cần 16 byte cho UUID
		byteBuffer.putLong(uuid.getMostSignificantBits());
		byteBuffer.putLong(uuid.getLeastSignificantBits());
		return byteBuffer.array();
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
				organization.getWebsite() != null ? organization.getWebsite() : "",
				organization.getSummary() != null ? organization.getSummary() : "",
				organization.getDetail() != null ? organization.getDetail() : "",
				organization.getLocation() != null ? organization.getLocation() : ""
		);
	}
}