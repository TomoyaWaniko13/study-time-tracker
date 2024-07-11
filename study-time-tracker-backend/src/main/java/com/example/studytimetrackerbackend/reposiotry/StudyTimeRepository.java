package com.example.studytimetrackerbackend.reposiotry;

import com.example.studytimetrackerbackend.entity.StudyTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> {
}
