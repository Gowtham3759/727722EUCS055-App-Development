package com.example.eduportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eduportal.model.PaymentInfo;
import com.example.eduportal.repository.PaymentRepository;

@Service
public class PaymentService 
{
    @Autowired
    private PaymentRepository prepo;
    public void ppost(PaymentInfo info)
    {
        prepo.save(info);
    }
}
