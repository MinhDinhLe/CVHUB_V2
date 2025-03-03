package com.project.CvHub.Repository;

import com.project.CvHub.Entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface LocationRepository extends JpaRepository<Location,Integer> {
	
}