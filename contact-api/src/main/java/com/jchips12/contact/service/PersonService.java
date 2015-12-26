package com.jchips12.contact.service;

import com.jchips12.contact.entity.Person;

public interface PersonService {

	Person findPerson(Long personId);

	Person savePerson(Person person);
}
