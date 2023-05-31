package Employeemanagement.controller;

import Employeemanagement.model.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Employeemanagement.repositroy.EmployeeRepository;

@RestController

@RequestMapping("/api/v1/employees")

public class EmployeeController {

	
		@Autowired
		private EmployeeRepository employeeRepository;
		
		
		@GetMapping
		public List<Employee> getAllEmployees(){
			return employeeRepository.findAll();
		}
}
