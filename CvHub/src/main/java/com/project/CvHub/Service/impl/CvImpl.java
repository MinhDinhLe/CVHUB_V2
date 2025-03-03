package com.project.CvHub.Service.impl;

import com.project.CvHub.Entity.CV;
import com.project.CvHub.Entity.JobRole;
import com.project.CvHub.Entity.Location;
import com.project.CvHub.Entity.User;
import com.project.CvHub.Repository.CvRepository;
import com.project.CvHub.Repository.JobRequestRepository;
import com.project.CvHub.Repository.JobRoleRepository;
import com.project.CvHub.Repository.LocationRepository;
import com.project.CvHub.Service.CvService;
import com.project.CvHub.Service.JobRoleService;
import com.project.CvHub.Service.LocationService;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;


@Data
@Service
@AllArgsConstructor
public class CvImpl implements CvService {

	public final LocationRepository locationRepository;
	public final CvRepository cvRepository;
	public final JobRoleRepository jobRoleRepository;

	@Override
	public CV saveCV(String fullName, int locationCode, Long jobRoleId, String email, String phone, String education,
					 String skills, String experience, String projects, String certifications, String activities,
					 MultipartFile logoFile, User user) {
		try {
			byte[] logo = downloadImage(logoFile);
			UUID logoID = UUID.randomUUID(); // Tạo một UUID ngẫu nhiên
			Location location = locationRepository.findById(locationCode)
					.orElseThrow(() -> new IllegalArgumentException("Invalid location code"));

			JobRole jobRole = jobRoleRepository.findById(jobRoleId).orElse(null); // Có thể là null nếu không tìm
																							// thấy
			CV cv = new CV(fullName, jobRole, email, phone, location, education, skills, experience, projects,
					certifications, activities, logoID, logo);

			// Set the user
			cv.setUser(user);

			return cv;
		} catch (IOException e) {
			e.printStackTrace();
			// Create CV without logo but with user in case of logo processing error
			CV cv = new CV(fullName, null, email, phone, null, education, skills, experience, projects, certifications,
					activities, null, null);
			cv.setUser(user);
			return cv;
		}

	}

	public byte[] downloadImage(MultipartFile logoFile) throws IOException {
		if (logoFile != null && !logoFile.isEmpty()) {
			return logoFile.getBytes();
		}
		throw new IOException("Logo file is null or empty");
	}

	@Override
	public long getSelectedCVCount(Long userId) {

		 return cvRepository.getSelectedCVCount(userId);
	}



	@Override
	public List<CV> findCVsByUserId(Long id) {
		return cvRepository.findCVsByUserId(id);
	}

	@Override
	public void setPrimaryCV(Long id, Long id2) {
		List<CV> userCVs = cvRepository.findByUserId(id2);
        userCVs.forEach(cv -> cv.setIsprimary(false));
		cvRepository.saveAll(userCVs);
        
        // Đặt CV được chọn thành primary
        CV selectedCV = cvRepository.findById(id).orElse(null);
        if (selectedCV != null && selectedCV.getUser().getId().equals(id2)) {
            selectedCV.setIsprimary(true);
			cvRepository.save(selectedCV);
        }
	}

	

	
}