package com.jchips12.contact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jchips12.contact.entity.Person;
import com.jchips12.contact.service.PersonService;

import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping("/person")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@RequestMapping(value="/{personId}", method = RequestMethod.GET)
	public Person findPerson(@PathVariable Long personId) {
		Person person = personService.findPerson(personId);
		return person;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Person savePerson(@RequestBody Person person) {
		Person savedPerson = personService.savePerson(person);
		return savedPerson;
	}

}
