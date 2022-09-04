package com.naname.rfoupfccat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/litter")
public class LitterController {

    @GetMapping
    public String getLitterPage() {
        return "litter";
    }
}
