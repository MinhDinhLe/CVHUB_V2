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
    private byte[] logoFile;
    private String website;
    private String summary;
    private String detail;
    private String location;

    public OrganizationDTO(Long id, String title, String website, String summary, String detail, String location) {
        this.id = id;
        this.title = title;
        this.website = website;
        this.summary = summary;
        this.detail = detail;
        this.location = location;
    }
}

