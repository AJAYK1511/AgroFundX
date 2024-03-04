package agrobackend.ajayk.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.ajayk.Entity.Loan;
@Repository
public interface LoanRepostory extends JpaRepository<Loan,Integer>{

}
