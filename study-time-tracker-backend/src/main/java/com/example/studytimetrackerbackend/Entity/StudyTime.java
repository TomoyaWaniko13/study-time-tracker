package com.example.studytimetrackerbackend.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class StudyTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "subject")
    private String subject;

    @Column(name = "study_time")
    private Double studyTime;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Double getStudyTime() {
        return studyTime;
    }

    public void setStudyTime(Double studyTime) {
        this.studyTime = studyTime;
    }
}
