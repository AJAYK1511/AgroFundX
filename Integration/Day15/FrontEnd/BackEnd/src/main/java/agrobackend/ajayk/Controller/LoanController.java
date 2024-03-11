package agrobackend.ajayk.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import agrobackend.ajayk.Dto.Loan_dto;
import agrobackend.ajayk.Dto.Response.UserLoanUsers_dto;
import agrobackend.ajayk.Entity.Loan;
import agrobackend.ajayk.Service.LoanService;


@RestController
@RequestMapping("api/loans")
@CrossOrigin(origins = "http://localhost:5173/")
public class LoanController {
    @Autowired
    LoanService loanservice;

    @GetMapping("/")
    public ResponseEntity<List<Loan>> getAllLoans() {
        List<Loan> newloan=loanservice.getAllLoans();
        return ResponseEntity.ok(newloan);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Loan_dto> getLoanById(@PathVariable("id") int loan_id)
    {
        Loan_dto loandto=loanservice.getByLoanId(loan_id);
        return ResponseEntity.ok(loandto);
    }
    @GetMapping("/getusers/{loan_id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserLoanUsers_dto>> getLoansByUser(@PathVariable("loan_id") int loan_id) {
        return ResponseEntity.ok(loanservice.getAllUsers(loan_id));
    }

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void postLoan(@RequestBody Loan_dto loandto)
    {
        loanservice.postLoan(loandto);
    }
    @PutMapping("/put/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Loan putLoan(@PathVariable("id") int loan_id,@RequestBody Loan_dto loandto)
    {
        return loanservice.putLoan(loan_id,loandto);
    }
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String deleteLoan(@PathVariable("id") int loan_id)
    {
         return loanservice.deleteLoan(loan_id);
    }
    
}
