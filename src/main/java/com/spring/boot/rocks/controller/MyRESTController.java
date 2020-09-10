package com.spring.boot.rocks.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.rocks.model.UserEntity;
import com.spring.boot.rocks.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class MyRESTController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping(path = "/userlist", produces = "application/json")
	public List<UserEntity> getUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping(path = "/user/{id}", produces = "application/json")
	public Optional<UserEntity> getUserDetails(@PathVariable Long id) {
		return userRepository.findById(id);
	}
	
	@GetMapping(path = "/delete/user/{id}")
	public String deleteUser(@PathVariable Long id) {
		userRepository.deleteById(id);
		return  "OK!";
	}
	
	@DeleteMapping("/deleteuserbyid/{id}")
	public ResponseEntity<Long> deleteUserById(@PathVariable Long id) {
		userRepository.deleteById(id);
		 return new ResponseEntity<>(id, HttpStatus.OK);
	  }
}
