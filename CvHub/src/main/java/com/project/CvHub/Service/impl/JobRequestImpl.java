package com.project.CvHub.Service.impl;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.project.CvHub.Entity.JobRequest;
import com.project.CvHub.Entity.JobRole;
import com.project.CvHub.Entity.Location;
import com.project.CvHub.Entity.Organization;
import com.project.CvHub.Repository.*;
import com.project.CvHub.Service.JobRequestService;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class JobRequestImpl implements JobRequestService {
	public final LocationRepository locationRepository;
	public final OrganizationRepository organizationRepository;
	public final JobRoleRepository jobRoleRepository;
	public final JobRequestRepository jobRequestRepository;

	public final Logger logger = LoggerFactory.getLogger(this.getClass());;

	@Override
	public JobRequest createJobRequest(String title, int locationCode, Long jobRoleId, Integer experience,
									   Integer salary, Long organizationId, String jobDescription, String requirementsCandidate,
									   String benefitCandidate, LocalDate deadlineApplication) {
		// Kiểm tra tính hợp lệ của các tham số đầu vào
		if (title == null || title.isEmpty() || organizationId == null) {
			throw new IllegalArgumentException("Title and Organization ID must not be null or empty.");
		}

		// Tìm kiếm đối tượng Location và JobRole từ mã tương ứng
		Location location = locationRepository.findById(locationCode)
				.orElseThrow(() -> new IllegalArgumentException("Invalid location code"));

		JobRole jobRole = jobRoleRepository.findById(jobRoleId).orElse(null); // Có thể là null nếu không tìm
																						// thấy

		// Tìm kiếm đối tượng Organization từ organizationId
		Organization organization = organizationRepository.findById(organizationId)
				.orElseThrow(() -> new IllegalArgumentException("Invalid organization ID"));

		// Tạo một đối tượng JobRequest mới
		JobRequest jobRequest = new JobRequest();
		jobRequest.setTitle(title);
		jobRequest.setLocation(location);
		jobRequest.setJobRole(jobRole);
		jobRequest.setExperience(experience);
		jobRequest.setSalary(salary);
		jobRequest.setOrganization(organization);
		jobRequest.setDetailsJob(jobDescription);
		jobRequest.setRequirementsCandidate(requirementsCandidate);
		jobRequest.setBenefitCandidate(benefitCandidate);
		jobRequest.setDeadlineApplication(deadlineApplication);

		// Trả về đối tượng JobRequest đã tạo
		return jobRequest;
	}

	@Override
	public JobRequest updateJobRequest( JobRequest jobRequest, String title, int locationCode, Long jobRoleId,
			Integer experience, Integer salary, String jobDescription, String requirementsCandidate,
			String benefitCandidate, LocalDate deadlineApplication) {


// Validate input parameters
		if (title == null || title.isEmpty()) {
			throw new IllegalArgumentException("Title must not be null or empty.");
		}

// Find Location and JobRole objects from their respective codes
		Location location = locationRepository.findById(locationCode)
				.orElseThrow(() -> new IllegalArgumentException("Invalid location code"));

		JobRole jobRole = jobRoleRepository.findById(jobRoleId).orElse(null); // Can be null if not found

// Update the existing JobRequest object
		jobRequest.setTitle(title);
		jobRequest.setLocation(location);
		jobRequest.setJobRole(jobRole);
		jobRequest.setExperience(experience);
		jobRequest.setSalary(salary);
		jobRequest.setDetailsJob(jobDescription);
		jobRequest.setRequirementsCandidate(requirementsCandidate);
		jobRequest.setBenefitCandidate(benefitCandidate);
		jobRequest.setDeadlineApplication(deadlineApplication);

// Save and return the updated JobRequest
		return jobRequestRepository.save(jobRequest);
	}

	@Override
	public void deleteJobRequest(JobRequest jobRequest) {
		if (jobRequest == null) {
	        throw new IllegalArgumentException("JobRequest must not be null.");
	    }
		jobRequestRepository.delete(jobRequest);
		
	}
}