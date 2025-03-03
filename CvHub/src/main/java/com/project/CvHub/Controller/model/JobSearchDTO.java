package com.project.CvHub.Controller.model;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobSearchDTO {
    private String keyword;
    private int location;
    private Long industry;


}