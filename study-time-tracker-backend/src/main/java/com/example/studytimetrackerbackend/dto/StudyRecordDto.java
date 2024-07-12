package com.example.studytimetrackerbackend.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudyRecordDto {
    private Long userId;
    private Long subjectId;
    private LocalDate studyDate;
    private Integer duration;
}