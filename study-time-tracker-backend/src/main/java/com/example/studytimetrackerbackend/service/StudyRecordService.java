package com.example.studytimetrackerbackend.service;

import com.example.studytimetrackerbackend.model.StudyRecord;
import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.repository.StudyRecordRepository;
import com.example.studytimetrackerbackend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyRecordService {
    private final StudyRecordRepository studyRecordRepository;

    public StudyRecord createStudyRecord(User user, Subject subject, LocalDate studyDate, int duration) {
        return studyRecordRepository.save(StudyRecord.builder().user(user).subject(subject).studyDate(studyDate).duration(duration).createdAt(LocalDateTime.now()).build());
    }

    public StudyRecord getStudyRecordById(Long id) {
        return studyRecordRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Study record not found with id: " + id));
    }

    public List<StudyRecord> getStudyRecordByUser(User user) {
        return studyRecordRepository.findByUser(user);
    }

    public List<StudyRecord> getStudyRecordsByUserAndSubject(User user, Subject subject) {
        return studyRecordRepository.findByUserAndSubject(user, subject);
    }

    public StudyRecord updateStudyRecord(Long id, LocalDate studyDate, int duration) {
        StudyRecord studyRecord = getStudyRecordById(id);
        studyRecord.setStudyDate(studyDate);
        studyRecord.setDuration(duration);
        return studyRecordRepository.save(studyRecord);
    }

    public void deleteStudyRecord(Long id) {
        studyRecordRepository.deleteById(id);
    }
}
