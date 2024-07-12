package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.dto.StudyRecordDto;
import com.example.studytimetrackerbackend.dto.SubjectDto;
import com.example.studytimetrackerbackend.model.Subject;
import com.example.studytimetrackerbackend.model.User;
import com.example.studytimetrackerbackend.service.StudyRecordService;
import com.example.studytimetrackerbackend.service.SubjectService;
import com.example.studytimetrackerbackend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController extends BaseController {

    public SubjectController(UserService userService, SubjectService subjectService, StudyRecordService studyRecordService) {
        super(userService, subjectService, studyRecordService);
    }




}
