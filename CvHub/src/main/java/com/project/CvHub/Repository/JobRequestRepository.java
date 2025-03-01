package com.project.CvHub.Repository;

import java.util.List;
import java.util.Optional;

import com.project.CvHub.Entity.JobRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface JobRequestRepository extends JpaRepository<JobRequest, Long> {

	  @Query("SELECT jr FROM JobRequest jr WHERE jr.organization.id = :organizationId")
	    Page<JobRequest> findByOrganizationId(@Param("organizationId") Long organizationId,Pageable pageable);
	@Query("SELECT jr FROM JobRequest jr WHERE jr.organization.id = :organizationId")
	List<JobRequest> findByOrganizationId(@Param("organizationId") Long organizationId);
//	  @Query("SELECT jr FROM JobRequest jr WHERE jr.id = :id")
	    Optional<JobRequest> findById(@Param("id") Long id);
	    Page<JobRequest> findAll(@Param("pageRequest") Pageable pageRequest );
	    JobRequest findByTitle(@Param("title") String title);

	@Query("SELECT j FROM JobRequest j " +
			"WHERE (:keyword IS NULL OR " +
			"      LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
			"      LOWER(j.detailsJob) LIKE LOWER(CONCAT('%', :keyword, '%'))) " +
			"AND (:locationCode IS NULL OR j.location.code = :locationCode) " +
			"AND (:jobRoleId IS NULL OR j.jobRole.id = :jobRoleId)")
	Page<JobRequest> search(@Param("keyword") String keyword,
							@Param("locationCode") Integer locationCode,
							@Param("jobRoleId") Long jobRoleId,
							Pageable pageable);

	// Thêm query để search theo nhiều tiêu chí hơn
	@Query("SELECT j FROM JobRequest j " +
			"WHERE (:keyword IS NULL OR " +
			"      LOWER(j.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
			"      LOWER(j.detailsJob) LIKE LOWER(CONCAT('%', :keyword, '%'))) " +
			"AND (:locationCode IS NULL OR j.location.code = :locationCode) " +
			"AND (:jobRoleId IS NULL OR j.jobRole.id = :jobRoleId) " +
			"AND (:minSalary IS NULL OR j.salary >= :minSalary) " +
			"AND (:maxSalary IS NULL OR j.salary <= :maxSalary) " +
			"AND (:experience IS NULL OR j.experience <= :experience)")
	Page<JobRequest> advancedSearch(@Param("keyword") String keyword,
									@Param("locationCode") Integer locationCode,
									@Param("jobRoleId") Long jobRoleId,
									@Param("minSalary") Integer minSalary,
									@Param("maxSalary") Integer maxSalary,
									@Param("experience") Integer experience,
									Pageable pageable);
}
