package com.sapient.creditcard.app.demo.controller;

import com.google.gson.Gson;
import com.sapient.creditcard.app.demo.dto.CreditCard;
import com.sapient.creditcard.app.demo.repository.CCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CCTableController {
    private static Gson gson = new Gson();

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private CCRepository ccRepository;

    @Cacheable
    private List<CreditCard> getAllCards(){
        return ccRepository.findAll();
    }

    @Scheduled(fixedDelay = 1000)
    public void performTask() throws Exception {
        this.simpMessagingTemplate.convertAndSend("/queue/now", gson.toJson(getAllCards()));
    }
}
