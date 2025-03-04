package com.project.CvHub.Controller.model;

import com.project.CvHub.Entity.JobRequest;
import lombok.*;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobRequest2DTO {
    private Long id;
    private String title;
    private Integer salary;
    private String location;
    private String organization;

    public class JobRequestMapper {
        public static List<JobRequest2DTO> mapToDTO(Page<JobRequest> jobRequestPage) {
            return jobRequestPage.getContent().stream()
                    .map(jobRequest -> new JobRequest2DTO(
                            jobRequest.getId(),
                            jobRequest.getTitle(),
                            jobRequest.getSalary(),
                            jobRequest.getLocation().getName(), // Assuming Location has a getName() method
                            jobRequest.getOrganization().getTitle() // Assuming Organization has a getName() method
                    ))
                    .collect(Collectors.toList());
        }
    }
}
