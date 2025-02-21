package com.project.CvHub.Service;

import java.util.List;

import com.project.CvHub.Entity.CV;
import com.project.CvHub.Entity.User;
import com.project.CvHub.Repository.CvRepository;
import org.springframework.web.multipart.MultipartFile;



public interface CvService{
	CV saveCV(String fullName, int locationCode, Long jobRoleId, String email, String phone, String education, String skills, String experience, String projects, String certifications, String activities, MultipartFile logoFile, User user);
	long getSelectedCVCount(Long userId);
	List<CV> findCVsByUserId(Long id);
	void setPrimaryCV(Long id, Long id2);



}
