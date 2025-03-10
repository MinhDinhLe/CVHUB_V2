package com.project.CvHub.Entity;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.*;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name="cvhub_organization", uniqueConstraints=@UniqueConstraint(columnNames = "id"))
	public class Organization	{
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	@Column(name = "logo_id", columnDefinition = "BINARY(16)")
	private UUID logoID;
	@Lob
	private byte[] logo;
    private String website;
    private String summary;
    private String detail;
    private String location;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
	public Organization( String title, UUID logoID, byte[] logo, String website, String summary, String detail,
			String location) {
		super();
		this.title = title;
		this.logoID = logoID;
		this.logo = logo;
		this.website = website;
		this.summary = summary;
		this.detail = detail;
		this.location = location;
	}

	@CreationTimestamp
	@Column(name = "created_dte", updatable = false)
	Date createdDate;

	@Column(name = "modified_dte")
	@UpdateTimestamp
	Date modified;
}