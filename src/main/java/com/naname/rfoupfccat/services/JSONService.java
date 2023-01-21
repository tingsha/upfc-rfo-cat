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
     * @return строка, в которой json значения представлены в виде 'ключ: значение\n'
     */
    public String parseJsonString(@NonNull String json) throws JSONException{
        try {
            JSONObject obj = new JSONObject(json);
            StringJoiner builder = new StringJoiner("\n");
            obj.keySet().forEach(key -> builder.add(Constants.LABEL_BY_KEY.getOrDefault(key, key) + ": " + obj.getString(key)));
            return builder.toString();
        } catch (JSONException e) {
            logger.error(String.format("Unable to parse JSON string '%s'", json));
            throw new JSONException(e);
        }
    }
}