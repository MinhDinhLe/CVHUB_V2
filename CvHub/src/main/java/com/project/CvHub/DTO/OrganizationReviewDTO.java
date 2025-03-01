package com.project.CvHub.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@AllArgsConstructor
public class OrganizationReviewDTO {
	private Integer rating;
	private String reviewText;
	private Date createdDate;
	private Date modifiedDate;
}
