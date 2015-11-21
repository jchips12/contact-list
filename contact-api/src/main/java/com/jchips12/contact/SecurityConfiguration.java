package com.jchips12.contact;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/").permitAll().and()
			.authorizeRequests().antMatchers("/console/*").permitAll();
		
		http.csrf().disable();
		http.headers().frameOptions().disable();
	}

}
