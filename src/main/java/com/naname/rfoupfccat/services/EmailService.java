package com.naname.rfoupfccat.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.Nullable;
import org.springframework.mail.MailException;
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

    private void sendSimpleMessage(String subject, String text) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(SEND_FROM_EMAIL);
            message.setTo(SEND_TO_EMAIL);
            message.setSubject(subject);
            message.setText(text);
            emailSender.send(message);
        } catch (MailException e) {
            logger.warn("Unable to send simple email.", e);
        }
    }

    @Async
    public void sendEmail(String subject, String text, @Nullable MultipartFile... files) {
        if (files == null || files.length == 0) {
            sendSimpleMessage(subject, text);
            return;
        }
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
            logger.warn("Unable to send email with files.", e);
        }
    }
}
