package com.project.CvHub.Service;

import com.project.CvHub.Entity.User;
import com.project.CvHub.Repository.UserRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;



@Service
public interface UserService {
	User createUser(String fullName, String email, String password, String phone) throws Exception;
	boolean isEmailExists(String email);
	User findUserByEmail(String email);
}