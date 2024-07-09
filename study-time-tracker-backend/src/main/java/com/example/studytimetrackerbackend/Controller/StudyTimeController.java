package com.example.studytimetrackerbackend.Controller;

import com.example.studytimetrackerbackend.Entity.StudyTime;
import com.example.studytimetrackerbackend.Service.StudyTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/study-time")
public class StudyTimeController {

    private StudyTimeService studyTimeService;

    @Autowired
    public StudyTimeController(StudyTimeService studyTimeService) {
        this.studyTimeService = studyTimeService;
    }

    @PostMapping
    public StudyTime saveStudyTime(@RequestBody StudyTime studyTime) {
        return studyTimeService.saveStudyTime(studyTime);
    }

    @GetMapping
    public List<StudyTime> getAllStudyTimes() {
        return studyTimeService.findAll();
    }
}