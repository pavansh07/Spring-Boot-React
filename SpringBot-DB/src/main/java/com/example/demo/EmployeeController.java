package com.example.demo;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.Employee;
import com.example.demo.EmployeeRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
 @Autowired
 private EmployeeRepository repository;
 @GetMapping
 public List<Employee> getAllEmployees() {
    return repository.findAll();
    }
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
    return repository.save(employee);
    }
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
    repository.deleteById(id);
  }
}