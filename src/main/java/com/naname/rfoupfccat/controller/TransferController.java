package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.domain.PetForm;
import com.naname.rfoupfccat.services.EmailService;
import com.naname.rfoupfccat.types.PetType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
@RequestMapping(value = "/transfer")
public class TransferController {

    private final EmailService emailService;

    public TransferController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public String getTransferPage(Model model) {
        model.addAttribute("transferForm", new PetForm());
        model.addAttribute("feedbackForm", new FeedbackForm());
        model.addAttribute("callbackForm", new CallbackForm());
        return "transfer";
    }

    @PostMapping
    public String sendForm(@ModelAttribute PetForm form,
                           @RequestPart("fatherPedigree") MultipartFile fatherPedigree,
                           @RequestPart("fatherCertificate") MultipartFile fatherCertificate,
                           @RequestPart("motherPedigree") MultipartFile motherPedigree,
                           @RequestPart("motherCertificate") MultipartFile motherCertificate) {
        emailService.sendEmailWithFiles("Трансфер", String.format("Кличка: %s%nПол: %s%nДата рождения: %s%nПорода: %s%nОкрас: %s%nМикрочип: %s%nЗаводчик: %s%nВладелец: %s%nEmail: %s%nТелефон: %s%nТип: %s%nКомментарий: %s%n",
                        form.getNickname(), form.getSex(), form.getBirthDate(), form.getBreed(), form.getColor(), form.getMicrochip(),
                        form.getBreeder(), form.getOwner(), form.getEmail(), form.getPhone(), form.getType().getDescription(), form.getComment()),
                fatherPedigree, fatherCertificate, motherPedigree, motherCertificate);
        return "success-info";
    }

    public static List<PetType> getTypes() {
        return List.of(PetType.TRANSFER_ELECTRONIC, PetType.TRANSFER_PHYSICAL, PetType.TRANSFER_FULL);
    }
}
