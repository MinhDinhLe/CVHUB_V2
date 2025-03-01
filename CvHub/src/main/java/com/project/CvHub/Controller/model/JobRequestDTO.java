package com.project.CvHub.Controller.model;


import java.time.LocalDate;
import java.util.Date;

import com.project.CvHub.Entity.Organization;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

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