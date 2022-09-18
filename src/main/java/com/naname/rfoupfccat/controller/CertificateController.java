package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.CertificateForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.services.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value = "/certificate")
public class CertificateController {

    private final EmailService emailService;

    public CertificateController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public String getCertificatePage(Model model) {
        model.addAttribute("certificateForm", new CertificateForm());
        model.addAttribute("feedbackForm", new FeedbackForm());
        model.addAttribute("callbackForm", new CallbackForm());
        return "certificate";
    }

    @PostMapping
    public String sendForm(@ModelAttribute CertificateForm form,
                           @RequestPart("photo1") MultipartFile photo1,
                           @RequestPart("photo2") MultipartFile photo2,
                           @RequestPart("photo3") MultipartFile photo3) {
        emailService.sendEmailWithFiles("Справка об отсутствии племенной ценности для домашнего любимца", String.format("Кличка на русском: %s%nКличка на английском: %s%nПол: %s%nПорода: %s%nОкрас: %s%nДата рождения: %s%nМикрочип: %s%nИмя и фамилия на русском: %s%nИмя и фамилия на английском: %s%nEmail: %s%nТелефон: %s%nТип: %s%nКомментарий: %s%n",
                        form.getNicknameRu(), form.getNicknameEn(), form.getSex(), form.getBreed(), form.getColor(), form.getBirthDate(),
                        form.getMicrochip(), form.getNameRu(), form.getNameEn(), form.getEmail(), form.getPhone(), form.getType().getDescription(), form.getComment()),
                photo1, photo2, photo3);
        return "success-info";
    }
}
