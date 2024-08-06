package com.example.eduportal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.User;
import com.example.eduportal.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService service;
    @PostMapping("/post")
    public User post(@RequestBody User obj)
    {
        service.post(obj);
        return obj;
    }
    @GetMapping("/get")
    public List<User> findall()
    {
        return service.findall();
    }
    @PutMapping("/{userid}/{courseid}")
    public String enroll(@PathVariable int userid,@PathVariable int courseid)
    {
        service.enroll(userid, courseid);
        return "updated";
    }
    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable int id) {
        Optional<User> user = service.getUserById(id);
        return user.get();
    }
    @PutMapping("newp/{userid}/{pass}")
    public String newp(@PathVariable int userid,@PathVariable String pass)
    {
        service.edit(userid, pass);
        return "password updated successfully";
    }
    
}
