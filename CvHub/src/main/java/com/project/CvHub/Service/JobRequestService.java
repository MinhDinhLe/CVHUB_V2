package com.project.CvHub.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import com.project.CvHub.Entity.JobRequest;
import com.project.CvHub.Repository.JobRequestRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;


@Service
public interface JobRequestService {
	JobRequest createJobRequest(String title, int locationCode, Long jobRoleId, Integer experience,
								Integer salary, Long organizationId, String jobDescription, String requirementsCandidate, String benefitCandidate, LocalDate deadlineApplication);
	JobRequest updateJobRequest( JobRequest jobRequest,String title, int locationCode, Long jobRoleId,
			Integer experience, Integer salary, String jobDescription, String requirementsCandidate,
			String benefitCandidate, LocalDate deadlineApplication);
	void deleteJobRequest(JobRequest jobRequest);
}