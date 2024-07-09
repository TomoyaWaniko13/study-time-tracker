package com.example.studytimetrackerbackend.repository;

import com.example.studytimetrackerbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
