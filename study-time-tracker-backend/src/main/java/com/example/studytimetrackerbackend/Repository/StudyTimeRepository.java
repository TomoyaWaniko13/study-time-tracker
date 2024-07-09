package com.example.studytimetrackerbackend.Repository;

import com.example.studytimetrackerbackend.Entity.StudyTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> {
}
