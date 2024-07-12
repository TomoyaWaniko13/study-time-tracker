package com.example.studytimetrackerbackend.controller;

import com.example.studytimetrackerbackend.service.StudyRecordService;
import com.example.studytimetrackerbackend.service.SubjectService;
import com.example.studytimetrackerbackend.service.UserService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public abstract class BaseController {
    protected final UserService userService;
    protected final SubjectService subjectService;
    protected final StudyRecordService studyRecordService;
}