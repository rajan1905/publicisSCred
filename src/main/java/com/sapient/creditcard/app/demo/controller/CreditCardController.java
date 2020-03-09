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

@CrossOrigin(origins = "*")
@RestController
public class CreditCardController {

    @Autowired
    private CCRepository ccRepository;

    @PostMapping(path = "addCard")
    public ResponseEntity addCreditCard(@RequestParam(name = "uName") String uName,
                                        @RequestParam(name = "card") String card,
                                        @RequestParam(name = "limit") int limit){
        ResponseEntity response = new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

        Optional<CreditCard> cardPresent = ccRepository.findCreditCardByCardNo(card);

        if(!cardPresent.isPresent()){
            CreditCard creditCard = CreditCard.builder()
                    .cardNo(card)
                    .balance(limit)
                    .name(uName)
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
