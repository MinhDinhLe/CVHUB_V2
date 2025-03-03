package com.project.CvHub.Controller;

import com.project.CvHub.Config.JwtTokenProvider;
import com.project.CvHub.DTO.ApiResponse;
import com.project.CvHub.DTO.AuthResponseDTO;
import com.project.CvHub.DTO.UserDTO;
import com.project.CvHub.DTO.UserRegistrationDTO;
import com.project.CvHub.Entity.User;
import com.project.CvHub.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class SignController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO loginRequest) {
        try {
            // Authenticate user through Spring Security
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );

            // Set authentication in Security Context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Get user details
            User user = userService.findUserByEmail(loginRequest.getEmail());

            // Generate JWT token
            String token = tokenProvider.generateToken(user);

            // Create response
            AuthResponseDTO authResponse = new AuthResponseDTO();
            authResponse.setToken(token);
            authResponse.setType("Bearer");
            authResponse.setEmail(user.getEmail());
            authResponse.setRole(user.getRole());

            return ResponseEntity.ok(authResponse);

        } catch (AuthenticationException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse(false, "Invalid email or password"));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, "Login failed: " + e.getMessage()));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> processRegistration(@RequestBody UserDTO userDTO) {
        try {
            // Validate email existence
            if (userService.isEmailExists(userDTO.getEmail())) {
                return ResponseEntity
                        .badRequest()
                        .body(new ApiResponse(false, "Email already exists in the system"));
            }

            // Validate password match
            if (!userDTO.getPassword().equals(userDTO.getConfirmPassword())) {
                return ResponseEntity
                        .badRequest()
                        .body(new ApiResponse(false, "Password confirmation does not match"));
            }

            // Register user
            User user = userService.createUser(
                    userDTO.getFullName(),
                    userDTO.getEmail(),
                    passwordEncoder.encode(userDTO.getPassword()),
                    userDTO.getPhone()
            );

            // Generate token for auto login after registration
            String token = tokenProvider.generateToken(user);

            // Create response with token
            AuthResponseDTO authResponse = new AuthResponseDTO();
            authResponse.setToken(token);
            authResponse.setType("Bearer");
            authResponse.setEmail(user.getEmail());
            authResponse.setRole(user.getRole());

            return ResponseEntity.status(HttpStatus.CREATED).body(authResponse);

        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, e.getMessage()));
        }
    }

    @GetMapping("/current-user")
    public ResponseEntity<?> getCurrentUser() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated() ||
                    "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body(new ApiResponse(false, "User not authenticated"));
            }

            User currentUser = userService.findUserByEmail(authentication.getName());
            if (currentUser == null) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse(false, "User not found"));
            }

            // Create DTO to avoid sending sensitive information
            UserDTO userDTO = new UserDTO();
            userDTO.setEmail(currentUser.getEmail());
            userDTO.setFullName(currentUser.getFullName());
            userDTO.setPhone(currentUser.getPhone());
            // Add any other necessary fields

            return ResponseEntity.ok(userDTO);
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, e.getMessage()));
        }
    }

    // Remove /register-form endpoint as it's not needed in REST API
    // Remove /logout endpoint as JWT is stateless
}