package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.StudyRecord;
import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.repository.StudyRecordRepository;
import com.example.studytimetrackerbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class StudyRecordService {

    private final StudyRecordRepository studyRecordRepository;
    private final UserRepository userRepository;

    @Autowired
    public StudyRecordService(StudyRecordRepository studyRecordRepository, UserRepository userRepository) {
        this.studyRecordRepository = studyRecordRepository;
        this.userRepository = userRepository;
    }

    public StudyRecord createStudyRecord(String name, String email, String pictureUrl, Date date, String subject, int studyTime) {
        User user = userRepository.findByEmail(email);

        if (user == null) {
            user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPictureUrl(pictureUrl);
            userRepository.save(user);
        } else {
            user.setName(name);
            user.setPictureUrl(pictureUrl);
            userRepository.save(user);
        }

        StudyRecord studyRecord = new StudyRecord();
        studyRecord.setUser(user);
        studyRecord.setDate(date);
        studyRecord.setSubject(subject);
        studyRecord.setStudyTime(studyTime);
        return studyRecordRepository.save(studyRecord);
    }

    public StudyRecord getStudyRecordById(Long id) {
        Optional<StudyRecord> optionalStudyRecord = studyRecordRepository.findById(id);
        return optionalStudyRecord.orElse(null);
    }
}
