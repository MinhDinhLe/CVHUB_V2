package com.project.CvHub.Service;

import com.project.CvHub.Entity.JobRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface SearchJobService {
 List<JobRequest> searchJobRequest(String keyword, int locationCD, Long industryCD);
}
