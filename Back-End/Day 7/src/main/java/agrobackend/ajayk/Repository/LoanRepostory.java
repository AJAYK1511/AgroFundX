package agrobackend.ajayk.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import agrobackend.ajayk.Entity.Loan;

public interface LoanRepostory extends JpaRepository<Loan,Integer>{

}
