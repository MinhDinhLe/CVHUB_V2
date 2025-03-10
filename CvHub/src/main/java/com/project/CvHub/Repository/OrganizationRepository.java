package com.project.CvHub.Repository;

import java.util.List;
import java.util.UUID;

import com.project.CvHub.Entity.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface OrganizationRepository extends JpaRepository<Organization,Long> {
	@Query("SELECT o.logo FROM Organization o WHERE o.logoID = :logoId")
	byte[] getImageByLogoId(@Param("logoId") UUID logoId);
	@Query("SELECT o.id From Organization o WHERE o.title = :title")
	Long getIdByTitle(@Param("title") String title);
	@Query("SELECT o FROM Organization o WHERE o.user.id = :userId")
	Organization findByUserId(@Param("userId") Long userId);
}
