package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.repository.SubjectRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectService {
    private final SubjectRepository subjectRepository;

    public Subject createSubject(User user, String subjectName) {
        return subjectRepository.save(
                Subject
                        .builder()
                        .user(user)
                        .subjectName(subjectName)
                        .createdAt(LocalDateTime.now()).build()
        );
    }

    public Subject getSubjectById(Long id) {
        return subjectRepository
                .findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Subject not found with id: " + id));
    }

    public List<Subject> getSubjectByUser(User user) {
        return subjectRepository.findByUser(user);
    }

    public Subject updateSubject(Long id, String subjectName) {
        Subject subject = getSubjectById(id);
        subject.setSubjectName(subjectName);
        return subjectRepository.save(subject);
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}
