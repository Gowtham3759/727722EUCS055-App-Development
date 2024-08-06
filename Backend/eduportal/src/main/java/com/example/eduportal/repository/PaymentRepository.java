package com.example.eduportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eduportal.model.PaymentInfo;

public interface PaymentRepository extends JpaRepository<PaymentInfo,Integer>
{
    
}