package com.spring.boot.rocks.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MyController {

	@GetMapping("/")
	public static String homePage(Model model) {
		return "home";
	}
	
	@GetMapping("/index")
	public static String indexPage(Model model) {
		return "index";
	}
	
	@GetMapping("/modal")
	public static String modalPage(Model model) {
		return "modal";
	}
	
	@GetMapping("/crud")
	public static String crudPage(Model model) {
		return "crud";
	}
	@GetMapping("/crud2")
	public static String crud2Page(Model model) {
		return "crud2";
	}
	
	@GetMapping("/table")
	public static String tablePage(Model model) {
		return "table";
	}
	
	@GetMapping("/jsontotable")
	public static String jsontotable(Model model) {
		return "jsonToTable";
	}
	
	@GetMapping("/jsontopresentable")
	public static String jsontopresentable(Model model) {
		return "jsonToPresenTableView";
	}
	

}
