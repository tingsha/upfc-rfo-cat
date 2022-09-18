package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.services.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/send")
public class BaseController {

    private final EmailService emailService;

    public BaseController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/feedback")
    public String sendFeedback(@ModelAttribute FeedbackForm form) {
        emailService.sendSimpleMessage("Обращение", String.format("Имя: %s%nТелефон %s%nEmail: %s%nСообщение: %s%n",
                form.getName(), form.getPhone(), form.getEmail(), form.getComment()));
        return "success-info";
    }

    @PostMapping("/callback")
    public String sendCallback(@ModelAttribute CallbackForm form) {
        emailService.sendSimpleMessage("Обратный звонок",
                String.format("Имя: %s%nТелефон: %s%n", form.getName(), form.getPhone()));
        return "success-info";
    }
}
