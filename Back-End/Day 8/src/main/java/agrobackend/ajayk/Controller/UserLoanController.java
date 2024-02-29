package agrobackend.ajayk.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import agrobackend.ajayk.Dto.UserLoan_dto;
import agrobackend.ajayk.Entity.UserLoan;
import agrobackend.ajayk.Service.UserLoanService;

@RestController
@RequestMapping("/api/userloans")

public class UserLoanController {

     @Autowired
     UserLoanService userloanservice;

    @GetMapping("/")
    public ResponseEntity<List<UserLoan>> getAllLoans() {
        List<UserLoan> newloan=userloanservice.getAllUserLoans();
        return ResponseEntity.ok(newloan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserLoan_dto> getLoanById(@PathVariable("id") int loan_id)
    {
        UserLoan_dto loandto=userloanservice.getByUserLoanId(loan_id);
        return ResponseEntity.ok(loandto);
    }

    @PostMapping("/{id}/{loan_id}")
    public UserLoan postUserLoan(@PathVariable("id") int id,@PathVariable("id") int loan_id)
    {
        return userloanservice.postUserLoan(id,loan_id);
    }

}