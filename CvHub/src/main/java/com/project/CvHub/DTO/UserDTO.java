package com.project.CvHub.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO
{
    @JsonProperty("full_name")
    private String fullName;

    @JsonProperty("email")
    @NotBlank(message = "Email number is required")
    private String email;

    @JsonProperty("phone")
    @NotBlank(message = "Phone number is required")
    private String phone;

    @NotBlank(message = "Password cannot be blank")
    private String password;

    @JsonProperty("retype_password")
    private String retypePassword;
}
