package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.DTO.StudyTimeRequest;
import com.example.studytimetrackerbackend.entity.StudyTime;
import com.example.studytimetrackerbackend.entity.Subject;
import com.example.studytimetrackerbackend.entity.User;
import com.example.studytimetrackerbackend.service.StudyTimeService;
import com.example.studytimetrackerbackend.service.SubjectService;
import com.example.studytimetrackerbackend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/study-times")
public class StudyTimeController {

    private static final Logger logger = LoggerFactory.getLogger(StudyTimeController.class);

    private final StudyTimeService studyTimeService;
    private final UserService userService;
    private final SubjectService subjectService;

    @Autowired
    public StudyTimeController(StudyTimeService studyTimeService, UserService userService, SubjectService subjectService) {
        this.studyTimeService = studyTimeService;
        this.userService = userService;
        this.subjectService = subjectService;
    }


    @GetMapping
    public List<StudyTime> getAllStudyTimes() {
        return studyTimeService.getAllStudyTimes();
    }

    @GetMapping("/{id}")
    public StudyTime getStudyTimeById(@PathVariable Long id) {
        return studyTimeService.getStudyTimeById(id);
    }

    @PostMapping
    public ResponseEntity<StudyTime> createStudyTime(@RequestBody StudyTimeRequest studyTimeRequest) {
        User user = userService.findOrCreateUser(studyTimeRequest.getUsername(), studyTimeRequest.getEmail());
        Subject subject = subjectService.findOrCreateSubject(studyTimeRequest.getSubject());

        StudyTime studyTime = new StudyTime();
        studyTime.setUser(user);
        studyTime.setSubject(subject);
        studyTime.setDate(studyTimeRequest.getDate());
        studyTime.setDuration(studyTimeRequest.getDuration());

        StudyTime savedStudyTime = studyTimeService.createStudyTime(studyTime);
        return ResponseEntity.ok(savedStudyTime);
    }

    @PutMapping("/{id}")
    public StudyTime updateStudyTime(@PathVariable Long id, @RequestBody StudyTime studyTimeDetails) {

        logger.info("Updating StudyTime with ID {}: {}", id, studyTimeDetails);
        return studyTimeService.updateStudyTime(id, studyTimeDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteStudyTime(@PathVariable Long id) {
        studyTimeService.deleteStudyTime(id);
    }
}
