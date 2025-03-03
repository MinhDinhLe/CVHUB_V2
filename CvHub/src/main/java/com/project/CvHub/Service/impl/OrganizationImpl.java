package com.project.CvHub.Service.impl;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.UUID;

import com.project.CvHub.Entity.Organization;
import com.project.CvHub.Repository.OrganizationRepository;
import com.project.CvHub.Service.OrganizationService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.Getter;


@Service
public class OrganizationImpl implements OrganizationService {

	@Getter
	@Autowired
	OrganizationRepository repo;

	@Override
	public Organization createOrganization(String title, MultipartFile logoFile, String website, String summary, String detail, String location) {
	    try {
	        byte[] logo = downloadImage(logoFile);
	        UUID logoID = UUID.randomUUID(); // Tạo một UUID ngẫu nhiên
	        return new Organization(title, logoID, logo, website, summary, detail, location);
	    } catch (IOException e) {
	        e.printStackTrace();
	        return new Organization(title, null, null, website, summary, detail, location); // Trả về tổ chức mà không có logo nếu xảy ra lỗi
	    }
	}

	@Override
	public byte[] downloadImage(MultipartFile logoFile) throws IOException {
	    if (logoFile != null && !logoFile.isEmpty()) {
	        return logoFile.getBytes();
	    }
	    throw new IOException("Logo file is null or empty");
	}

	@Override
	public boolean isOwner(Long organizationId, String userEmail) {
		        Organization org = repo.findById(organizationId).orElse(null);
		        if (org == null || org.getUser() == null) {
		            return false;
		        }
		        return org.getUser().getEmail().equals(userEmail);
	}

	@Override
	public Organization findByUserId(Long id) {
		return repo.findByUserId(id);
	}
}
