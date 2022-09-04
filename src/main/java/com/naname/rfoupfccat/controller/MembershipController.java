package com.naname.rfoupfccat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/membership")
public class MembershipController {

    @GetMapping
    public String getMembershipPage() {
        return "membership";
    }
}
