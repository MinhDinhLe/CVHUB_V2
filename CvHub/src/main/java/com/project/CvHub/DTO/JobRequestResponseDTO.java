package com.project.CvHub.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobRequestResponseDTO {
    private Long id;
    private String title;
    private LocationDTO location;
    private JobRoleDTO jobRole;
    private Integer experience;
    private Integer salary;
    private String jobDescription;
    private String requirementsCandidate;
    private String benefitCandidate;
    private LocalDate deadlineApplication;
    private OrganizationDTO organization;
}
