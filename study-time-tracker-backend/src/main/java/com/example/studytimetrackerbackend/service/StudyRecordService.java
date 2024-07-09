package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.entity.StudyRecord;
import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.repository.StudyRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class StudyRecordService {

    private final StudyRecordRepository studyRecordRepository;
    private final UserService userService;

    @Autowired
    public StudyRecordService(StudyRecordRepository studyRecordRepository, UserService userService) {
        this.studyRecordRepository = studyRecordRepository;
        this.userService = userService;
    }

    public StudyRecord createStudyRecord(String name, String email, String pictureUrl, Date date, String subject, int studyTime) {
        User user = userService.findOrCreateUser(name, email, pictureUrl);
        StudyRecord studyRecord = new StudyRecord();
        studyRecord.setUser(user);
        studyRecord.setDate(date);
        studyRecord.setSubject(subject);
        studyRecord.setStudyTime(studyTime);
        return studyRecordRepository.save(studyRecord);
    }
}
