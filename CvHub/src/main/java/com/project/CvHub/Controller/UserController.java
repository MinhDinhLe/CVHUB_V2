package com.project.CvHub.Controller;

import com.project.CvHub.DTO.UserDTO;
import com.project.CvHub.Model.User;
import com.project.CvHub.Service.IUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("api/v1/users")
@RequiredArgsConstructor
public class UserController
{
    private final IUserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> createUser (@Valid @RequestBody UserDTO userDTO, BindingResult result)
    {
        try
        {
            if (result.hasErrors())
            {
                List<String> errorsMessages = result.getFieldErrors()
                        .stream()
                        .map(FieldError::getDefaultMessage)
                        .toList();
                return ResponseEntity.badRequest().body(errorsMessages);
            }

            if (!Objects.equals(userDTO.getPassword(), userDTO.getRetypePassword()))
            {
                return ResponseEntity.badRequest().body("password does not match");
            }

            userService.createUser(userDTO);
            return ResponseEntity.ok(userDTO);
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody User userLoginDTO) throws Exception
    {
        User token = userService.login(userLoginDTO.getEmail(), userLoginDTO.getPassword());
        if (token == null)
            return ResponseEntity.badRequest().body("user does not exist");
        return ResponseEntity.ok(token);
    }

    @PostMapping("/userInfo/{id}")
    public ResponseEntity<?> userInfo(@PathVariable Long id) throws Exception
    {
        UserDTO user = userService.userInfo(id);
        if (user == null)
            return ResponseEntity.badRequest().body("user does not exist");

        return ResponseEntity.ok(user);
    }
}
