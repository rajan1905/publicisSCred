package com.sapient.creditcard.app.demo.controller;

import com.sapient.creditcard.app.demo.dto.CreditCard;
import com.sapient.creditcard.app.demo.repository.CCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CreditCardController {

    @Autowired
    private CCRepository ccRepository;

    @PostMapping(path = "addCard")
    public ResponseEntity addCreditCard(@RequestParam String name,
                                        @RequestParam String cardNo,
                                        @RequestParam int limit){
        ResponseEntity response = new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

        Optional<CreditCard> card = ccRepository.findCreditCardByCardNo(cardNo);

        if(!card.isPresent()){
            CreditCard creditCard = CreditCard.builder()
                    .cardNo(cardNo)
                    .balance(limit)
                    .name(name)
                    .build();

            CreditCard cardSave = ccRepository.saveAndFlush(creditCard);

            if(cardSave != null){
                response = new ResponseEntity(HttpStatus.OK);
            }
        }
        return response;
    }

    @GetMapping(path = "getAllCards")
    @Cacheable(cacheNames = "allCardsCache")
    public List<CreditCard> getAllCards(){
        return ccRepository.findAll();
    }
}
