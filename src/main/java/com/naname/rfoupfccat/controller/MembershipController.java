package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.domain.MemberForm;
import com.naname.rfoupfccat.services.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/membership")
public class MembershipController {

    private final EmailService emailService;

    public MembershipController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public String getMembershipPage(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        model.addAttribute("feedbackForm", new FeedbackForm());
        model.addAttribute("callbackForm", new CallbackForm());
        return "membership";
    }

    @PostMapping
    public String sendForm(@ModelAttribute MemberForm memberForm) {
        emailService.sendSimpleMessage("Оплата ежегодного членского взноса",
                String.format("Имя: %s%nФамилия: %s%nОтчество: %s%nРегион: %s%n Email: %s%nАдрес: %s%nТелефон: %s%n Комментарий: %s%n",
                        memberForm.getName(), memberForm.getSurname(), memberForm.getPatronymic(),
                        memberForm.getRegion(), memberForm.getEmail(), memberForm.getAddress(), memberForm.getPhone(), memberForm.getComment()));
        return "success-info";
    }
}
