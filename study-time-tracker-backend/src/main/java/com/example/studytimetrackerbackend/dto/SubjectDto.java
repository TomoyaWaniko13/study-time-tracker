package com.example.studytimetrackerbackend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SubjectDto {
    private Long userId;
    private String subjectName;
}
