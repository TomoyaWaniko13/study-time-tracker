package com.example.studytimetrackerbackend.Service;

import com.example.studytimetrackerbackend.Entity.StudyTime;
import com.example.studytimetrackerbackend.Repository.StudyTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyTimeService {

    private final StudyTimeRepository studyTimeRepository;

    @Autowired
    public StudyTimeService(StudyTimeRepository studyTimeRepository) {
        this.studyTimeRepository = studyTimeRepository;
    }

    public StudyTime saveStudyTime(StudyTime studyTime) {
        return studyTimeRepository.save(studyTime);
    }

    public List<StudyTime> findAll() {
        return studyTimeRepository.findAll();
    }
}