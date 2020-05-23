package com.example.demo.employee.exception;

public class EmployeeNotFound extends Exception{


    private static final long serialVersionUID = 1L;

    public EmployeeNotFound(String message) {
        super(message);
    }
}