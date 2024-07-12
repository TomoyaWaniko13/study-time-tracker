package com.example.studytimetrackerbackend.repository;

import com.example.studytimetrackerbackend.model.StudyRecord;
import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudyRecordRepository extends JpaRepository<StudyRecord, Long> {
    List<StudyRecord> findByUser(User user);

    List<StudyRecord> findByUserAndSubject(User user, Subject subject);
}
