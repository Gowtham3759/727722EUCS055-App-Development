package com.example.eduportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.Course;
import com.example.eduportal.repository.CourseRepository;

@Service
public class CourseService 
{
    @Autowired
    CourseRepository repo;
    public void post(Course obj)
    {
        repo.save(obj);
    }
    public List<Course> getall()
    {
        return repo.findAll();
    }
}
