package com.naname.rfoupfccat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class RfoUpfcCatApplication {

    public static void main(String[] args) {
        SpringApplication.run(RfoUpfcCatApplication.class, args);
    }

}
