package com.example.demo.employee.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.example.demo.employee.dao.EmployeeRepo;
import com.example.demo.employee.model.Employee;
import com.example.demo.employee.exception.*;
@Service
public class EmployeeService<EmployeeRepository> {

    @Autowired
    private EmployeeRepo employeeRepo;

    //CreateEmployee
    public Employee createEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    //getAllEmployees
    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();

    }

    //getEmployeeById
    public Optional<Employee> getEmployeeById(Integer id) throws EmployeeNotFound{
        Optional<Employee> employee=employeeRepo.findById(Math.toIntExact(id));

        if(!employee.isPresent())
            throw new EmployeeNotFound("employee not found");
        return employee;
    }

    //deleteEmployeeById
    public void deleteEmployeeById(Integer id) {

        Optional<Employee> employee=employeeRepo.findById(Math.toIntExact(id));
        if(!employee.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"employee not found in repo,enter correct details");
        }

        employeeRepo.deleteById(Math.toIntExact(id));

    }


    public Employee updateEmployeeById(Integer id, String newName) throws EmployeeNotFound {

        if(!employeeRepo.findById(Math.toIntExact(id)).isPresent()) {
            throw new EmployeeNotFound("employee not found");
        }
        Employee employee=employeeRepo.getOne(Math.toIntExact(id));
        employee.setName(newName);
        return employeeRepo.save(employee);

    }




}