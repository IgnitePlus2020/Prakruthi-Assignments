package com.example.demo.employee.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.Pattern;



//Entity
@Entity

@Table(name="employee")
public class Employee {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name="NAME",length=50,nullable=false,unique=true)
    private String name;

    @Pattern(regexp = "^\\d{10}$",message = "mobile number should have 10 digits")
    @Column(name="MOBILE",length=10,nullable=false)
    private String mobile;

    @Column(name="EMAIL",length=30,nullable=false)
    private String email;

    @Column(name="DEPARTMENT",length=30,nullable=false)
    private String dept;

    public Employee() {
        super();
        // TODO Auto-generated constructor stub
    }



    public Employee(Integer id, String name, String email, String mobile, String dept) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.dept = dept;
    }




    public Integer getId() {
        return id;
    }



    public void setId(Integer id) {
        this.id = id;
    }



    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }



    public String getEmail() {
        return email;
    }



    public void setEmail(String email) {
        this.email = email;
    }



    public String getMobile() {
        return mobile;
    }



    public void setMobile(String mobile) {
        this.mobile = mobile;
    }



    public String getDept() {
        return dept;
    }



    public void setDept(String dept) {
        this.dept = dept;
    }



    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name +  ", mobile=" + mobile +  ", email=" + email +", department="
                + dept + "]";
    }

}