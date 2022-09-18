package com.naname.rfoupfccat.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Objects;

@EnableAsync
@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class.getName());
    public static final String SEND_FROM_EMAIL = "admin@upfc-rfo-cat.ru";
    public static final String SEND_TO_EMAIL = "upfc@upfc-rfo-cat.ru";
    private final JavaMailSender emailSender;

    public EmailService(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    @Async
    public void sendSimpleMessage(String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(SEND_FROM_EMAIL);
        message.setTo(SEND_TO_EMAIL);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
    }

    @Async
    public void sendEmailWithFiles(String subject, String text, MultipartFile... files) {
        MimeMessage message = emailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(SEND_FROM_EMAIL);
            helper.setTo(SEND_TO_EMAIL);
            helper.setSubject(subject);
            helper.setText(text);
            for (var file : files) {
                helper.addAttachment(Objects.requireNonNull(file.getOriginalFilename()), file);
            }
            emailSender.send(message);
        } catch (MessagingException e) {
            logger.error("Error sending email with files.", e);
        }
    }
}
