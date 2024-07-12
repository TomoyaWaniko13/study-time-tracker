package com.example.studytimetrackerbackend.repository;

import com.example.studytimetrackerbackend.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
}
