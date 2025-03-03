package com.project.CvHub.Service.impl;

import com.project.CvHub.Entity.User;
import com.project.CvHub.Repository.UserRepository;
import com.project.CvHub.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.Getter;

@Service
@AllArgsConstructor
public class UserImpl implements UserService {

	public final UserRepository repo;
//	 @Autowired
//	private PasswordEncoder passwordEncoder;
	@Override
	@Transactional
	public User createUser(String fullName, String email, String password, String phone) throws Exception {
		if (isEmailExists(email)) {
            throw new Exception("Email already exists");
        }
        

        User user = new User();
        user.setFullName(fullName);
        user.setEmail(email);

        user.setPassword(password);
        user.setPhone(phone);
        user.setRole("ROLE_USER");
        return repo.save(user);
	}

	@Override
	public boolean isEmailExists(String email) {
		return repo.existsByEmail(email);
	}

	@Override
	public User findUserByEmail(String email) {
		return repo.findUserByEmail(email);
	}
}