package agrobackend.ajayk.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Admin_dto {
    
    int admin_id;
    int user_id;
    String name;
    String contact_email;
    String phone;

}
