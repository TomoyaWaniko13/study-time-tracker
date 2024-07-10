package com.example.studytimetrackerbackend.repository;

import com.example.studytimetrackerbackend.entity.StudyRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyRecordRepository extends JpaRepository<StudyRecord, Long> {
    List<StudyRecord> findByUserId(Long userId);

    List<StudyRecord> findByUserEmail(String email);
}
