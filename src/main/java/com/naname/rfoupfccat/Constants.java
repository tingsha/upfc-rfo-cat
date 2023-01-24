package com.naname.rfoupfccat;

import java.util.HashMap;
import java.util.Map;

public class Constants {

    /**
     * Карта [название поля в форме] -> [человекочитаемое название]
     */
    public static final Map<String, String> LABEL_BY_KEY = new HashMap<>();

    static {
        LABEL_BY_KEY.put("name", "Имя");
        LABEL_BY_KEY.put("surname", "Фамилия");
        LABEL_BY_KEY.put("patronymic", "Отчество");
        LABEL_BY_KEY.put("address", "Адрес");
        LABEL_BY_KEY.put("region", "Субъект РФ");
        LABEL_BY_KEY.put("email", "Email");
        LABEL_BY_KEY.put("phone", "Телефон");
        LABEL_BY_KEY.put("sex", "Пол");
        LABEL_BY_KEY.put("breed", "Порода");
        LABEL_BY_KEY.put("breeder", "Заводчик");
        LABEL_BY_KEY.put("owner", "Владелец");
        LABEL_BY_KEY.put("experience", "Стаж");
        LABEL_BY_KEY.put("color", "Цвет");
        LABEL_BY_KEY.put("birthDate", "Дата рождения");
        LABEL_BY_KEY.put("microchipNumber", "Номер микрочипа");
        LABEL_BY_KEY.put("nurseryName", "Название питомника");
        LABEL_BY_KEY.put("father", "Отец");
        LABEL_BY_KEY.put("mother", "Мать");
        LABEL_BY_KEY.put("message", "Сообщение");
        LABEL_BY_KEY.put("nickname", "Кличка");
        LABEL_BY_KEY.put("nicknameRu", "Кличка на русском");
        LABEL_BY_KEY.put("nicknameEn", "Кличка на английском");
        LABEL_BY_KEY.put("nameRu", "Имя фамилия на русском");
        LABEL_BY_KEY.put("nameEn", "Имя фамилия на английском");
        LABEL_BY_KEY.put("nameRu1", "Первый вариант названия на русском");
        LABEL_BY_KEY.put("nameRu2", "Второй вариант названия на русском");
        LABEL_BY_KEY.put("nameRu3", "Третий вариант названия на русском");
        LABEL_BY_KEY.put("nameEn1", "Первый вариант названия на английском");
        LABEL_BY_KEY.put("nameEn2", "Второй вариант названия на английском");
        LABEL_BY_KEY.put("nameEn3", "Третий вариант названия на английском");
        LABEL_BY_KEY.put("cat1", "Первый котенок");
        LABEL_BY_KEY.put("cat2", "Второй котенок");
        LABEL_BY_KEY.put("cat3", "Третий котенок");
        LABEL_BY_KEY.put("cat4", "Четвертый котенок");
        LABEL_BY_KEY.put("cat5", "Пятый котенок");
        LABEL_BY_KEY.put("cat6", "Шестой котенок");
        LABEL_BY_KEY.put("cat7", "Седьмой котенок");
        LABEL_BY_KEY.put("cat8", "Восьмой котенок");
        LABEL_BY_KEY.put("cat9", "Девятый котенок");
        LABEL_BY_KEY.put("cat10", "Десятый котенок");
    }
}
