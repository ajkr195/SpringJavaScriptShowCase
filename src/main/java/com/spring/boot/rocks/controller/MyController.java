package com.spring.boot.rocks.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
public class MyController {

	@GetMapping
	public static String homePage(Model model) {

		return "index";

	}

}
