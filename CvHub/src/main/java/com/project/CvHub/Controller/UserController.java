package com.project.CvHub.Controller;

import java.util.HashMap;
import java.util.Map;

import com.project.CvHub.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.project.CvHub.Entity.User;
import com.project.CvHub.Controller.model.UserDTO;
import com.project.CvHub.Service.CvService;
import com.project.CvHub.Service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CvService cvService;

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile() {
        // Get current userz
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not authenticated");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

//        User currentUser = userService.findUserByEmail(auth.getName());
        User currentUser = userService.findUserByEmail(((User) auth.getPrincipal()).getEmail());
        if (currentUser == null) {
            Map<String, Object> response = new HashMap<>();
            response.put("error", "User not found");

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        // Create settings object
        UserDTO settings = new UserDTO();
        settings.setFullName(currentUser.getFullName());
        settings.setEmail(currentUser.getEmail());
        settings.setPhone(currentUser.getPhone());

        // Prepare response
        Map<String, Object> response = new HashMap<>();
        response.put("user", currentUser);
        response.put("userSettings", settings);
        response.put("selectedCvCount", cvService.getSelectedCVCount(currentUser.getId()));

        return ResponseEntity.ok(response);
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateUserProfile(@RequestBody UserDTO settings) {
        // Get current user
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !auth.isAuthenticated()) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "User not authenticated");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

        User currentUser = userService.findUserByEmail(((User) auth.getPrincipal()).getEmail());
        if (currentUser == null) {
            Map<String, Object> response = new HashMap<>();
            response.put("error", "User not found");

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        try {
            // Update only fields that are not null or empty
            if (settings.getFullName() != null && !settings.getFullName().trim().isEmpty()) {
                currentUser.setFullName(settings.getFullName());
            }

            if (settings.getPhone() != null && !settings.getPhone().trim().isEmpty()) {
                // Check phone length
                if (settings.getPhone().length() > 15) {
                    throw new IllegalArgumentException("Phone number cannot exceed 15 characters");
                }
                // Check phone contains only numbers
                if (!settings.getPhone().matches("\\d+")) {
                    throw new IllegalArgumentException("Phone number must contain only digits");
                }
                currentUser.setPhone(settings.getPhone());
            }

            // Save updates
            userRepository.save(currentUser);

            // Refresh user data for response
            UserDTO updatedSettings = new UserDTO();
            updatedSettings.setFullName(currentUser.getFullName());
            updatedSettings.setEmail(currentUser.getEmail());
            updatedSettings.setPhone(currentUser.getPhone());

            // Prepare response
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Profile updated successfully");
            response.put("user", currentUser);
            response.put("userSettings", updatedSettings);
            response.put("selectedCvCount", cvService.getSelectedCVCount(currentUser.getId()));

            return ResponseEntity.ok(response);

        } catch (IllegalArgumentException e) {
            // Handle validation errors
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            // Handle other errors
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", "Error updating profile: " + e.getMessage());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}