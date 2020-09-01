package com.spring.boot.rocks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MyRESTController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping(path = "/userlist", produces = "application/json")
	public List<UserEntity> getEmployees() {
		return userRepository.findAll();
	}
}
