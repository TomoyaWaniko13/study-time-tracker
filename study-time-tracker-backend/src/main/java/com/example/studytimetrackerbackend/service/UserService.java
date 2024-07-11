package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.reposiotry.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User findOrCreateUser(String username, String email) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            user = new User();
            user.setUsername(username);
            user.setEmail(email);
            user = userRepository.save(user);
        }
        return user;
    }

    public User updateUser(Long id, User userDetails) {
        User foundUser = userRepository.findById(id).orElse(null);

        if (foundUser != null) {
            foundUser.setUsername(userDetails.getUsername());
            foundUser.setEmail(userDetails.getEmail());
            return userRepository.save(foundUser);
        }

        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
