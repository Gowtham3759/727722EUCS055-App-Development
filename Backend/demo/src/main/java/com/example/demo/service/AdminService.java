package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.entity.PaymentInfo;
import com.example.demo.entity.UserInfo;
import com.example.demo.repository.OrdersRepository;
import com.example.demo.repository.PaymentRepository;
import com.example.demo.repository.UserInfoRepository;

@Service
public class AdminService 
{
    @Autowired
    UserInfoRepository urepo;
    @Autowired
    PaymentRepository prepo;
    @Autowired
    OrdersRepository orepo;
    public void addadmin(UserInfo obj)
    {
        urepo.save(obj);
    }
    public void adduser(UserInfo obj)
    {
        urepo.save(obj);
    }
    public void changestatus(int id)
    {
        Orders obj=orepo.findById(id).get();
        obj.setStatus("Approved");
        orepo.save(obj);
    }
    public void deleteuser(int id)
    {
        UserInfo obj=urepo.findById(id).get();
        urepo.delete(obj);
    }
    public void changename(int id,String name)
    {
        UserInfo user=urepo.findById(id).get();
        user.setName(name);
        urepo.save(user);
    }
    public void changeemail(int id,String email)
    {
        UserInfo user=urepo.findById(id).get();
        user.setEmail(email);
        urepo.save(user);
    }
    public List<Orders> getorders()
    {
        return orepo.findAll();
    }
    public List<UserInfo> getusers()
    {
        return urepo.findAll();
    }
    public List<PaymentInfo> info()
    {
        return prepo.findAll();
    }
}
