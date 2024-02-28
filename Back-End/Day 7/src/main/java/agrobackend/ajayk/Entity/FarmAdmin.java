package agrobackend.ajayk.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity

public class FarmAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int admin_id;
    private int user_id;
    private String contact_email;
    private String phone;
    
}
