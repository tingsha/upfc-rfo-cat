package com.naname.rfoupfccat.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/catalog").setViewName("catalog");
        registry.addViewController("/success").setViewName("success-info");
        registry.addViewController("/personal").setViewName("personal-data");
        registry.addViewController("/payment").setViewName("payment");
        registry.addViewController("/delivery").setViewName("delivery");
        registry.addViewController("/return").setViewName("return");
        registry.addViewController("/requisites").setViewName("requisites");
        registry.addViewController("/error").setViewName("error");
        registry.addViewController("/empty").setViewName("empty");
    }

    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(10 * 1024 * 1024);
        return multipartResolver;
    }
}