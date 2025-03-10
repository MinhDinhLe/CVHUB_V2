package com.project.CvHub.Entity;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.*;


import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="cvhub_jobrequest", uniqueConstraints=@UniqueConstraint(columnNames = "id"))
public class JobRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;
    @ManyToOne
    @JoinColumn(name = "jobrole_id")
    private JobRole jobRole;
    private Integer experience;
    private Integer salary;
    @Column(columnDefinition = "TEXT")
    private String detailsJob;
    @Column(columnDefinition = "TEXT")
    private String requirementsCandidate;
    @Column(columnDefinition = "TEXT")
    private String benefitCandidate;
    @ManyToOne
    @JoinColumn(name = "organization_id", nullable = false)
    private Organization organization;
    private LocalDate deadlineApplication;
	


	@CreationTimestamp
    @Column(name="created_dte",updatable = false)
    Date createdDate;
    
    @Column(name="modified_dte")
    @UpdateTimestamp
    Date modified;


}
