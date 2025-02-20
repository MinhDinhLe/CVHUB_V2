package com.project.CvHub.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.CvHub.Model.*;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
}
