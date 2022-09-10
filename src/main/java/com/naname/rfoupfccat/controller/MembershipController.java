package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.MemberForm;
import com.naname.rfoupfccat.services.EmailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/membership")
public class MembershipController {

    @Autowired
    private EmailServiceImpl emailService;

    @GetMapping
    public String getMembershipPage(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        return "membership";
    }

    @PostMapping("/sendForm")
    public String sendForm(@ModelAttribute MemberForm memberForm) {
        emailService.sendSimpleMessage(memberForm.getEmail(), "Оплата ежегодного членского взноса",
                String.format("Имя: %s\nФамилия: %s\nОтчество: %s\nРегион: %s\nАдрес: %s\nТелефон: %s\n Комментарий: %s\n",
                        memberForm.getName(), memberForm.getSurname(), memberForm.getPatronymic(),
                        memberForm.getRegionNumber(), memberForm.getAddress(), memberForm.getPhone(), memberForm.getComment()));
        return "membership";
    }
}
