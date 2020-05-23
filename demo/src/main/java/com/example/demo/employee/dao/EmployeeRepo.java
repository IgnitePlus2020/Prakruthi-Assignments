package com.example.demo.employee.dao;

import com.example.demo.employee.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;


@Component
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
}