package agrobackend.ajayk.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int loan_id;
    private String loan_name;
    private String loan_type;
    private int interest;
    private int time_period;
    private int loan_amount;
}
