package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.services.EmailService;
import com.naname.rfoupfccat.services.JSONService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;

@RestController
@RequestMapping("/send-form")
public class FormController {

    private final EmailService emailService;
    private final JSONService jsonService;

    @Autowired
    public FormController(EmailService emailService, JSONService jsonService) {
        this.emailService = Objects.requireNonNull(emailService);
        this.jsonService = jsonService;
    }

    /**
     * Отправить форму по email
     *
     * @param subject  тема письма
     * @param formData форма в виде JSON строки
     * @param files    файлы, прикрепленные к форме
     */
    @PostMapping
    public void sendEmail(@RequestParam("subject") String subject,
                          @RequestParam("form") String formData,
                          @Nullable @RequestParam("files") MultipartFile... files) {
        String text = jsonService.parseJsonString(formData);
        emailService.sendEmailWithFiles(subject, text, files);
    }
}