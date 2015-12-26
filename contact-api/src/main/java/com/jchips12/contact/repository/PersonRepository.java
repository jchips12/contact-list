package com.jchips12.contact.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jchips12.contact.entity.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

	Person findByPersonId(Long personId);

}
