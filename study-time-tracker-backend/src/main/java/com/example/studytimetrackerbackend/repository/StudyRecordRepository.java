package com.example.studytimetrackerbackend.repository;

import com.example.studytimetrackerbackend.entity.StudyRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyRecordRepository extends JpaRepository<StudyRecord,Long> {

}
