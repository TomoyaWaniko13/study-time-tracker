package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.dto.StudyRecordRequest;
import com.example.studytimetrackerbackend.entity.StudyRecord;
import com.example.studytimetrackerbackend.service.StudyRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/study-records")
public class StudyRecordController {

    private final StudyRecordService studyRecordService;

    @Autowired
    public StudyRecordController(StudyRecordService studyRecordService) {
        this.studyRecordService = studyRecordService;
    }

    @PostMapping
    public StudyRecord createStudyRecord(@RequestBody StudyRecordRequest request) {
        return studyRecordService.createStudyRecord(
                request.getName(),
                request.getEmail(),
                request.getPictureUrl(),
                request.getDate(),
                request.getSubject(),
                request.getStudyTime()
        );
    }

    @GetMapping("/{id}")
    public StudyRecord getStudyRecord(@PathVariable Long id) {
        return studyRecordService.getStudyRecordById(id);
    }

    @GetMapping
    public List<StudyRecord> getAllStudyRecords() {
        return studyRecordService.getAllStudyRecords();
    }
}
