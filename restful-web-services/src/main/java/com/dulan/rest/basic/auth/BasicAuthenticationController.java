package com.dulan.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//controller
@RestController
//allow localhost:4200
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	//GET
	//URI- /hello-world
	//method-'Hello world'
//	@RequestMapping(method=RequestMethod.GET, path="/hello-world")
//	public String helloWorld() {
//		return "Hello World";
//	}
	
	@GetMapping(path="/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}

//	@GetMapping(path="/hello-world/{name}")
//	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//		//throw new RuntimeException("Something went wrong");
//		return new HelloWorldBean(String.format("Hello World, %s",name));
//	}
}
