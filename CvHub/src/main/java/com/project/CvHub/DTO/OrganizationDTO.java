package com.project.CvHub.DTO;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class OrganizationDTO {
    private Long id;
    private String title;
    private String logoID;
    private MultipartFile logoFile;
    private String logoUrl;
    private String website;
    private String summary;
    private String detail;
    private String location;



    public OrganizationDTO(Long id, String title, UUID logoID) {
        this.title = title;
        this.id = id;
        this.logoID = String.valueOf(logoID);
    }
}

