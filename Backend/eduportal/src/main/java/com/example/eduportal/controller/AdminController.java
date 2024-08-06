package com.example.eduportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.Admin;
import com.example.eduportal.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController 
{
    @Autowired
    AdminService service;
    @PostMapping("/post")
    public Admin padmin(@RequestBody Admin obj1)
    {
        service.post(obj1);
        return obj1;
    }
    @DeleteMapping("/duser/{id}")
    public String duser(@PathVariable int id)
    {
        service.removeuser(id);
        return "user deleted successfully";
    }
    @DeleteMapping("/dadmin/{id}")
    public String dadmin(@PathVariable int id)
    {
        service.removeadmin(id);
        return "admin deleted successfully";
    }
}
