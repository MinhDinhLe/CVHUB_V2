package com.project.CvHub.Entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cvhub_jobrole", uniqueConstraints = @UniqueConstraint(columnNames = "id"))
public class JobRole {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	public JobRole(String title, String description) {
		super();
		this.title = title;
		this.description = description;
	}

	@CreationTimestamp
	@Column(name = "created_dte", updatable = false)
	Date createdDate;

	@Column(name = "modified_dte")
	@UpdateTimestamp
	Date modified;
}
