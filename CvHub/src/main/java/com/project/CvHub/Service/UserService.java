package com.project.CvHub.Service;

import com.project.CvHub.DTO.UserDTO;
import com.project.CvHub.Model.User;
import com.project.CvHub.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements IUserService
{
    private final UserRepository userRepository;

    @Override
    public User createUser(UserDTO userDTO) throws Exception
    {
        String email = userDTO.getEmail();
        if(userRepository.existsByEmail(email))
        {
            throw new Exception("Email already exists");
        }

        User newUser = User.builder()
                .email(userDTO.getEmail())
                .fullName(userDTO.getFullName())
                .phone(userDTO.getPhone())
                .password(userDTO.getPassword())
                .role("ROLE_USER")
                .build();

        return userRepository.save(newUser);
    }

    @Override
    public User login(String email, String password)
    {
        return userRepository.findByEmail(email)
                .filter(user -> password.equals(user.getPassword()))
                .orElse(null);
    }

    @Override
    public UserDTO userInfo(Long id) throws Exception {
        if (id < 1)
            return null;

        User user = userRepository.findById(id).orElseThrow();
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setPhone(user.getPhone());
        userDTO.setFullName(user.getFullName());

        return userDTO;
    }
}
