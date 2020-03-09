package com.sapient.creditcard.app.demo.repository;

import com.sapient.creditcard.app.demo.dto.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Repository
public interface CCRepository extends JpaRepository<CreditCard, String> {
    Optional<CreditCard> findCreditCardByCardNo(String cardNo);
}
