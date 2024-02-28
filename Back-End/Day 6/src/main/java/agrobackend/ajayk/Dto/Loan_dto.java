package agrobackend.ajayk.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Loan_dto {
    private int loan_id;
    private String loan_name;
    private String loan_type;
    private int interest;
    private int time_period;
    private int loan_amount;
}
