package com.naname.rfoupfccat.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        List<String> urlPatterns = List.of(
                "/regions",
                "/certificate",
                "/delivery",
                "/empty",
                "/error",
                "/litter",
                "/membership",
                "/nursery",
                "/payment",
                "/payment-result",
                "/pedigree",
                "/personal-data",
                "/requisites",
                "/return",
                "/school",
                "/success",
                "/technical-works",
                "/transfer"
        );
        urlPatterns.forEach(pattern -> registry.addViewController(pattern).setViewName("forward:/"));
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }

    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//        multipartResolver.setMaxUploadSize(10 * 1024 * 1024);
        return multipartResolver;
    }
}