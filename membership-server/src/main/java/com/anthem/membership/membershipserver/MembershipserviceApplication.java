package com.anthem.membership.membershipserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MembershipserviceApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure( SpringApplicationBuilder appBuilder ) {
		return appBuilder.sources(MembershipserviceApplication.class);
	}

    public static void main( String[] args ) {
        SpringApplication.run( MembershipserviceApplication.class, args );
    }
}