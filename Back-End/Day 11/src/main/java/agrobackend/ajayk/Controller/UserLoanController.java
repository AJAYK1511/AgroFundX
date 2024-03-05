package agrobackend.ajayk.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import agrobackend.ajayk.Entity.UserLoan;
import agrobackend.ajayk.Service.UserLoanService;

@RestController
@RequestMapping("/api/userloans")

public class UserLoanController {

     @Autowired
     UserLoanService userloanservice;

    @PostMapping("/{id}/{loan_id}")
    @PreAuthorize("hasAuthority('USER')")
    public UserLoan postUserLoan(@PathVariable("id") int id,@PathVariable("id") int loan_id)
    {
        return userloanservice.postUserLoan(id,loan_id);
    }
    
}