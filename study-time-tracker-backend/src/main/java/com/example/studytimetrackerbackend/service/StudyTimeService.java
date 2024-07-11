package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.StudyTime;
import com.example.studytimetrackerbackend.entity.Subject;
import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.reposiotry.StudyTimeRepository;
import com.example.studytimetrackerbackend.reposiotry.SubjectRepository;
import com.example.studytimetrackerbackend.reposiotry.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyTimeService {

    private final StudyTimeRepository studyTimeRepository;
    private final UserRepository userRepository;
    private final SubjectRepository subjectRepository;

    @Autowired
    public StudyTimeService(StudyTimeRepository studyTimeRepository, UserRepository userRepository,SubjectRepository subjectRepository) {
        this.studyTimeRepository = studyTimeRepository;
        this.userRepository = userRepository;
        this.subjectRepository = subjectRepository;
    }

    public List<StudyTime> getAllStudyTimes() {
        return studyTimeRepository.findAll();
    }

    public StudyTime getStudyTimeById(Long id) {
        return studyTimeRepository.findById(id).orElse(null);
    }

    public StudyTime createStudyTime(StudyTime studyTime) {

    }

    public StudyTime updateStudyTime(Long id, StudyTime studyTimeDetails) {
        StudyTime foundStudyTime = studyTimeRepository.findById(id).orElse(null);

        if (foundStudyTime != null) {
            foundStudyTime.setDate(studyTimeDetails.getDate());
            foundStudyTime.setDuration(studyTimeDetails.getDuration());
            foundStudyTime.setUser(studyTimeDetails.getUser());

            // Subjectの存在を確認してからStudyTime objectにsetする。
            Subject subject = subjectRepository.findById(studyTimeDetails.getSubject().getId()).orElseThrow(() -> new RuntimeException("Subject not found"));
            foundStudyTime.setSubject(subject);

            return studyTimeRepository.save(foundStudyTime);
        }
        return null;
    }

    public void deleteStudyTime(Long id) {
        studyTimeRepository.deleteById(id);
    }
}
