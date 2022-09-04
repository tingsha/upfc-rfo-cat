package com.naname.rfoupfccat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/transfer")
public class TransferController {

    @GetMapping
    public String getTransferPage() {
        return "transfer";
    }
}
