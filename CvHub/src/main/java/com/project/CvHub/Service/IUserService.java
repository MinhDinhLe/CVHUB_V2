package com.project.CvHub.Service;

import com.project.CvHub.DTO.UserDTO;
import com.project.CvHub.Model.User;

public interface IUserService
{
    User createUser(UserDTO userDTO) throws Exception;
    User login(String email, String password) throws Exception;
}
