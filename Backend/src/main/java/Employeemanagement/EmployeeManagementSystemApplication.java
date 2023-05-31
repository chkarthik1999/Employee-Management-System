package Employeemanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import Employeemanagement.model.Employee;
import Employeemanagement.repositroy.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementSystemApplication.class, args);
		
		
		
		
	}
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	Employee employee = new Employee();
	
	employee.setId(101);
	employee.setFirstName("Ramesh");
	employee.setLastName("mishara");
	employee.setEmailId("ramesh123@gmail.com");
		
	}

	

}
