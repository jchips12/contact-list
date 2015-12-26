package com.jchips12.contact.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jchips12.contact.entity.Person;
import com.jchips12.contact.repository.PersonRepository;

@Service
public class PersonServiceImpl implements PersonService{
	
	@Autowired
	private PersonRepository personRepository;

	@Override
	public Person findPerson(Long personId) {
		return personRepository.findByPersonId(personId);
	}

	@Override
	public Person savePerson(Person person) {
		Person savedPerson = personRepository.save(person);
		return savedPerson;
	}

}
