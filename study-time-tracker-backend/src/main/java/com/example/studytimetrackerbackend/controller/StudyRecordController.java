package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.dto.StudyRecordDto;
import com.example.studytimetrackerbackend.model.StudyRecord;
import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.service.StudyRecordService;
import com.example.studytimetrackerbackend.service.SubjectService;
import com.example.studytimetrackerbackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/study-records")
public class StudyRecordController extends BaseController {

    public StudyRecordController(UserService userService, SubjectService subjectService, StudyRecordService studyRecordService) {
        super(userService, subjectService, studyRecordService);
    }

    @PostMapping
    public ResponseEntity<StudyRecord> createStudyRecord(@RequestBody StudyRecordDto studyRecordDto) {
        User user = userService.getUserById(studyRecordDto.getUserId());
        Subject subject = subjectService.getSubjectById(studyRecordDto.getSubjectId());
        StudyRecord studyRecord = studyRecordService.createStudyRecord(user, subject, studyRecordDto.getStudyDate(), studyRecordDto.getDuration());
        return ResponseEntity.ok(studyRecord);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudyRecord> getStudyRecord(@PathVariable Long id) {
        StudyRecord studyRecord = studyRecordService.getStudyRecordById(id);
        return ResponseEntity.ok(studyRecord);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<StudyRecord>> getUserStudyRecord(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        List<StudyRecord> studyRecords = studyRecordService.getStudyRecordsByUser(user);
        return ResponseEntity.ok(studyRecords);
    }

    @GetMapping("/search")
    public ResponseEntity<List<StudyRecord>> getStudyRecordsByUsernameAndEmail(@RequestParam String username, @RequestParam String email) {
        User user = userService.getUserByUsernameAndEmail(username, email);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        List<StudyRecord> records = studyRecordService.getStudyRecordsByUser(user);
        return ResponseEntity.ok(records);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudyRecord> updateStudyRecord(@PathVariable Long id, @RequestBody StudyRecordDto studyRecordDto) {
        StudyRecord studyRecord = studyRecordService.updateStudyRecord(id, studyRecordDto.getStudyDate(), studyRecordDto.getDuration());
        return ResponseEntity.ok(studyRecord);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudyRecord(@PathVariable Long id) {
        studyRecordService.deleteStudyRecord(id);
        return ResponseEntity.noContent().build();
    }
}
