package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findOrCreateUser(String name, String email, String pictureUrl) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPictureUrl(pictureUrl);
            userRepository.save(user);
        }

        return user;
    }
}
