package com.naname.rfoupfccat.services;

import com.naname.rfoupfccat.Constants;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import java.util.StringJoiner;

@Service
public class JSONService {

    private static final Logger logger = LoggerFactory.getLogger(JSONService.class.getName());

    /**
     * @param json исходная JSON строка
     * @return {@code null}, если невозможно распарсить строку, иначе строка,
     * в которой json значения представлены в виде 'ключ: значение\n'
     */
    public String parseJsonString(@NonNull String json) throws JSONException {
        try {
            JSONObject obj = new JSONObject(json);
            StringJoiner joiner = new StringJoiner("\n");
            if (obj.has("type")) {
                JSONObject type = obj.getJSONObject("type");
                joiner.add("Тип: " + type.getString("name"));
            }
            for (String key : obj.keySet()) {
                if (obj.get(key) instanceof String) {
                    joiner.add(Constants.LABEL_BY_KEY.getOrDefault(key, key) + ": " + obj.getString(key));
                }
            }
            return joiner.toString();
        } catch (JSONException e) {
            logger.warn(String.format("Unable to parse JSON string '%s'", json), e);
            return null;
        }
    }
}