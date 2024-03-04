package agrobackend.ajayk.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.ajayk.Entity.UserLoan;
@Repository
public interface UserLoanRepository extends JpaRepository<UserLoan,Integer>{

}
