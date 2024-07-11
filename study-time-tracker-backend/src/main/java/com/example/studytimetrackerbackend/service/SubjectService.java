package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.Subject;
import com.example.studytimetrackerbackend.reposiotry.StudyTimeRepository;
import com.example.studytimetrackerbackend.reposiotry.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    private final SubjectRepository subjectRepository;

    @Autowired
    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public Subject getSubjectById(Long id) {
        return subjectRepository.findById(id).orElse(null);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    public Subject findOrCreateSubject(String name) {
        Subject subject = subjectRepository.findByName(name);

        if (subject == null) {
            subject = new Subject();
            subject.setName(name);
            subject = subjectRepository.save(subject);
        }

        return subject;
    }

    public Subject updateSubject(Long id, Subject subjectDetails) {
        Subject foundSubject = subjectRepository.findById(id).orElse(null);

        if (foundSubject != null) {
            foundSubject.setName(subjectDetails.getName());
            return subjectRepository.save(foundSubject);
        }

        return null;
    }

    public void deleteSubject(Long id) {
        subjectRepository.deleteById(id);
    }
}
