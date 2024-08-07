package com.example.eduportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eduportal.model.Admin;
import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.model.User;
import com.example.eduportal.service.AdminService;
import com.example.eduportal.service.UserService;

@RestController
@RequestMapping("/admin")
public class AdminController 
{
    @Autowired
    AdminService service;
    @Autowired
    UserService uService;
    @PostMapping("/post")
    public Admin padmin(@RequestBody Admin obj1)
    {
        service.post(obj1);
        return obj1;
    }
    @GetMapping("/get")
    public List<Admin> get()
    {
        return service.get();
    }
    @PutMapping("/edit/{id}/{newp}")
    public Admin edit(@PathVariable int id,@PathVariable String newp)
    {
        return service.newp(id, newp);
    }
    @DeleteMapping("/dadmin/{id}")
    public String dadmin(@PathVariable int id)
    {
        service.removeadmin(id);
        return "admin deleted successfully";
    }
    @DeleteMapping("/duser/{id}")
    public String duser(@PathVariable int id)
    {
        uService.removeuser(id);
        return "user deleted successfully";
    }
    @GetMapping("/pinfo")
    public List<PaymentInfo> getAllPayments()
    {
        return service.getAllPayments();
    }
    @GetMapping("/users")
    public List<User> getAllUsers()
    {
        return uService.findall();
    }
    @PutMapping("/removep/{id}")
    public String removep(@PathVariable int id)
    {
        service.removePremium(id);
        return "premium contents are locked";
    }
}
