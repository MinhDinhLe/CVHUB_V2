package com.project.CvHub.Entity;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
	@Table(name="cvhub_location", uniqueConstraints=@UniqueConstraint(columnNames = "code"))
	
	public class Location {
		@Id
	    private int code;
	    private String name;
	    private String division_type;
	    
}