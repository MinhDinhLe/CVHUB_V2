package com.project.CvHub.DTO;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CvDTO {
    private String fullName;
    private Long jobRoleId;
    private int locationCode;
    private String email;
    private String phone;
    private String education;
    private String skills;
    private String experience;
    private String projects;
    private String certifications;
    private String activities;
    private MultipartFile logoFile;
}