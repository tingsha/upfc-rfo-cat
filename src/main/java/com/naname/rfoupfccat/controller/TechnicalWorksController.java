package com.naname.rfoupfccat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/technical-works")
public class TechnicalWorksController {

    @GetMapping
    public String getTechnicalWorksPage() {
        return "technical-works";
    }
}
