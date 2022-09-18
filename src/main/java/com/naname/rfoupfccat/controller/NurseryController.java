package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.domain.NurseryForm;
import com.naname.rfoupfccat.services.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value = "/nursery")
public class NurseryController {

    private final EmailService emailService;

    public NurseryController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public String getNurseryPage(Model model) {
        model.addAttribute("nurseryForm", new NurseryForm());
        model.addAttribute("feedbackForm", new FeedbackForm());
        model.addAttribute("callbackForm", new CallbackForm());
        return "nursery";
    }

    @PostMapping
    public String sendForm(@ModelAttribute NurseryForm form, @RequestPart("document") MultipartFile document) {
        emailService.sendEmailWithFiles("Регистрация питомника", String.format("Фамилия: %s%nИмя: %s%nАдрес: %s%nПервый вариант названия на русском: %s%nВторой вариант названия на русском: %s%nТретий вариант названия на русском: %s%nПервый вариант названия на английском: %s%nВторой вариант названия на английском: %s%nТретий вариант названия на английском: %s%nEmail: %s%nТелефон: %s%nТип: %s%nКомментарий: %s",
                form.getSurname(), form.getName(), form.getAddress(), form.getFirstTitleRu(), form.getSecondTitleRu(), form.getThirdTitleRu(),
                form.getFirstTitleEn(), form.getSecondTitleEn(), form.getThirdTitleEn(), form.getEmail(),
                form.getPhone(), form.getType().getDescription(), form.getComment()), document);
        return "success-info";
    }
}
