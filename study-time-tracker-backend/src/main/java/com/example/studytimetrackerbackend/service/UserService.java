package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createUser(String username, String email) {
        return userRepository.save(User.builder().username(username).email(email).createdAt(LocalDateTime.now()).build());
    }

    public User getUserById(Long id) {
        return userRepository
                .findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    public User getUserByUsernameAndEmail(String username, String email) {
        return userRepository
                .findByUsernameAndEmail(username, email)
                .orElseThrow(() -> new EntityNotFoundException("User not found with username: " + username + " and email: " + email));
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long id, String username, String email) {
        User user = getUserById(id);
        user.setUsername(username);
        user.setEmail(email);
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
