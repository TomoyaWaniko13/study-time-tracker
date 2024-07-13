package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.dto.SubjectDto;
import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.service.StudyRecordService;
import com.example.studytimetrackerbackend.service.SubjectService;
import com.example.studytimetrackerbackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController extends BaseController {

    public SubjectController(UserService userService, SubjectService subjectService, StudyRecordService studyRecordService) {
        super(userService, subjectService, studyRecordService);
    }

    @PostMapping
    public ResponseEntity<Subject> createSubject(@RequestBody SubjectDto subjectDto) {
        User user = userService.getUserById(subjectDto.getUserId());
        Subject subject = subjectService.createSubject(user, subjectDto.getSubjectName());
        return ResponseEntity.ok(subject);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subject> getSubject(@PathVariable Long id) {
        Subject subject = subjectService.getSubjectById(id);
        return ResponseEntity.ok(subject);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Subject>> getUserSubjects(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        List<Subject> subjects = subjectService.getSubjectsByUser(user);
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Subject>> getUserSubjectsByUsernameAndEmail(@RequestParam String username, @RequestParam String email) {
        User user = userService.getUserByUsernameAndEmail(username, email);
        List<Subject> subjects = subjectService.getSubjectsByUser(user);
        return ResponseEntity.ok(subjects);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subject> updateUserSubject(@PathVariable Long id, @RequestBody SubjectDto subjectDto) {
        Subject subject = subjectService.updateSubject(id, subjectDto.getSubjectName());
        return ResponseEntity.ok(subject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable Long id) {
        subjectService.deleteSubject(id);
        return ResponseEntity.noContent().build();
    }
}
