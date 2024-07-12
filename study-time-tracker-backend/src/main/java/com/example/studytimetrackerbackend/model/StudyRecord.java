package com.example.studytimetrackerbackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "study_records")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @Column(name = "study_date", nullable = false)
    private LocalDate studyDate;

    @Column(nullable = false)
    private Integer duration;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}