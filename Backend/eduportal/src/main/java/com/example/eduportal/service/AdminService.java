package com.example.eduportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.Admin;
import com.example.eduportal.model.Course;
import com.example.eduportal.repository.AdminRepository;
import com.example.eduportal.repository.CourseRepository;
import com.example.eduportal.repository.UserRepository;

@Service
public class AdminService 
{
    @Autowired 
    AdminRepository repo;
    @Autowired
    UserRepository urepo;
    @Autowired 
    CourseRepository crepo;
    public void post(Admin obj)
    {
        repo.save(obj);
    }
    public void removeuser(int userid)
    {
        urepo.deleteuser(userid);
    }
    public void removeadmin(int id)
    {
        repo.deleteadmin(id);
    }
    public void add(Course obj)
    {
        crepo.save(obj);
    }
}
