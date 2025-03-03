package com.project.CvHub.Service;

import java.io.IOException;

import com.project.CvHub.Entity.Organization;
import com.project.CvHub.Repository.OrganizationRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;



@Service
public interface OrganizationService {
	Organization createOrganization(String title, MultipartFile logoFile, String website, String summary, String detail, String location);
	byte[] downloadImage(MultipartFile logoFile) throws IOException ;
	 boolean isOwner(Long organizationId, String userEmail);
	 Organization findByUserId(Long id);
}
