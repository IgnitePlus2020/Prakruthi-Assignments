package com.example.demo.employee.controller;

import java.util.List;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.employee.model.Employee;
import com.example.demo.employee.service.EmployeeService;
import com.example.demo.employee.exception.*;

@RestController
@Service
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("/Employee")
    public List getAllEmployees(){
        return employeeService.getAllEmployees();

    }

    @GetMapping("/Employee/{id}")
    public Optional getEmployeeById(@PathVariable("id") Integer id) {
        try {
            return employeeService.getEmployeeById(id);
        } catch (EmployeeNotFound e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());

        }
    }


    @PostMapping("/Employee")
    public Employee createEmployee(@Valid @RequestBody Employee employee) {
        return employeeService.createEmployee(employee);

    }

    @DeleteMapping("/Employee/{id}")
    public void deleteEmployeeById(@PathVariable("id") Integer id) throws EmployeeNotFound{
        employeeService.deleteEmployeeById(id);
    }

    @PutMapping("/Employee/{id}")
    public Employee updateEmployeeById(@PathVariable("id") Integer id,@RequestBody String newName) {
        try {
            return employeeService.updateEmployeeById(id, newName);
        } catch (EmployeeNotFound e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,e.getMessage());
        }
    }


}
