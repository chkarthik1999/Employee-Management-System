package Employeemanagement.repositroy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Employeemanagement.model.Employee;

@Repository

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	//all crud database methods
	
	

}
