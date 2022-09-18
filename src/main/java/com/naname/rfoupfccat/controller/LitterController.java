package com.naname.rfoupfccat.controller;

import com.naname.rfoupfccat.domain.CallbackForm;
import com.naname.rfoupfccat.domain.FeedbackForm;
import com.naname.rfoupfccat.domain.LitterForm;
import com.naname.rfoupfccat.services.EmailService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value = "/litter")
public class LitterController {

    private final EmailService emailService;

    public LitterController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public String getLitterPage(Model model) {
        model.addAttribute("litterForm", new LitterForm());
        model.addAttribute("feedbackForm", new FeedbackForm());
        model.addAttribute("callbackForm", new CallbackForm());
        return "litter";
    }

    @PostMapping
    public String sendForm(@ModelAttribute LitterForm form,
                           @RequestPart("fatherPedigree") MultipartFile fatherPedigree,
                           @RequestPart("fatherCertificate") MultipartFile fatherCertificate,
                           @RequestPart("motherPedigree") MultipartFile motherPedigree,
                           @RequestPart("motherCertificate") MultipartFile motherCertificate) {
        emailService.sendEmailWithFiles("Регистрация помета", String.format("Фамилия и имя заводчика: %s%nНазвание питомника: %s%nДата рождения помета: %s%nПервый котенок: %s%nВторой котенок: %s%nТретий котенок: %s%nЧетвертый котенок: %s%nПятый котенок: %s%nШестой котенок: %s%nСедьмой котенок: %s%nВосьмой котенок: %s%nДевятый котенок%s%nДесятый котенок: %s%nОтец: %s%nМать: %s%nEmail: %s%nТелефон: %s%nТип: %s%nКомментарий: %s%n",
                        form.getName(), form.getNurseryName(), form.getBirthDate(), form.getFirstCat(), form.getSecondCat(), form.getThirdCat(),
                        form.getFourthCat(), form.getFifthCat(), form.getSixthCat(), form.getSeventhCat(), form.getEightCat(), form.getNineCat(),
                        form.getTenCat(), form.getFatherInfo(), form.getMotherInfo(), form.getEmail(), form.getPhone(), form.getType().getDescription(), form.getComment()),
                fatherPedigree, fatherCertificate, motherPedigree, motherCertificate);
        return "success-info";
    }
}
