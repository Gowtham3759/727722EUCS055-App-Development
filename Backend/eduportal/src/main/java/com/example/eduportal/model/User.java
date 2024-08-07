package com.example.eduportal.model;


import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class User implements UserDetails 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String firstname;
    String lastname;
    String email;
    @OneToOne(mappedBy = "user")
    private RefreshToken refreshToken;
    public RefreshToken getRefreshToken() {
        return refreshToken;
    }
    public void setRefreshToken(RefreshToken refreshToken) {
        this.refreshToken = refreshToken;
    }
    public Set<Course> getCourses() {
        return courses;
    }
    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }
    String password;
    Boolean premium;
    @ManyToMany
    public Set<Course>courses=new HashSet<>();
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Boolean getPremium() {
        return premium;
    }
    public void setPremium(Boolean premium) {
        this.premium = premium;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    }
    @Override
    public String getUsername() {
        return email;
    }

}
