package agrobackend.ajayk.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import agrobackend.ajayk.Dto.UserLoan_dto;
import agrobackend.ajayk.Entity.UserLoan;
import agrobackend.ajayk.Repository.UserLoanRepository;
import agrobackend.ajayk.Service.UserLoanService;

@RestController
@RequestMapping("/api/userloans")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserLoanController {

     @Autowired
     UserLoanService userloanservice;
     @Autowired
     UserLoanRepository userLoanRepository;

    @PostMapping("/{id}/{loan_id}")
    @PreAuthorize("hasAuthority('USER')")
    public UserLoan postUserLoan(@PathVariable("id") int id,@PathVariable("loan_id") int loan_id)
    {
        return userloanservice.postUserLoan(id,loan_id);
    }
    
    @GetMapping("/{id}")
    public List<UserLoan_dto> getUserLoan(@PathVariable("id") int id)
    {
            return userloanservice.getUserLoan(id);
    }
    @GetMapping("/pending")
    public List<UserLoan> getPendingLoanList() {
        return userLoanRepository.findByStatusIsNullOrStatusEquals("");
    }
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> approveLoan(@PathVariable("id") int loanListId) {
        try {
            UserLoan loanList = userLoanRepository.findById(loanListId).orElse(null);
            if (loanList == null) {
                return new ResponseEntity<>("Loan List not found", HttpStatus.NOT_FOUND);
            }
            
            loanList.setStatus("approved");
            userLoanRepository.save(loanList);
            
            return new ResponseEntity<>(loanList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to approve loan: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}