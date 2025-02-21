package com.project.CvHub.Service;

import com.project.CvHub.Entity.JobRequest;

import java.util.List;


public interface SearchJobService {
 List<JobRequest> searchJobRequest(String keyword, int locationCD, Long industryCD);
}
