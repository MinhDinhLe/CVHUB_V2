package com.project.CvHub.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class AuthResponseDTO {
    private String email;
    private String role;
    private String token;
    private String type;

    public AuthResponseDTO(String token, String role) {
        this.role = role;
        this.email = email;
    }

    public AuthResponseDTO() {

    }
}
