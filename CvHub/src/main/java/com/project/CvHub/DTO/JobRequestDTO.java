package com.project.CvHub.DTO;


import com.project.CvHub.Entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class JobRequestDTO {
	private String title;
    private int locationCode;
    private Long jobRoleId;
    private Integer experience;
    private Integer salary;
    private Long organizationId;
    private String jobDescription;
    private String requirementsCandidate;
    private String benefitCandidate;
    private Organization organization;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate deadlineApplication;
}