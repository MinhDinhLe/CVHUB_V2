package com.project.CvHub.Repository;



import com.project.CvHub.Entity.JobRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface JobRoleRepository extends JpaRepository<JobRole, Long> {

}
