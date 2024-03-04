package agrobackend.ajayk.Service.Implementation;

import java.util.List;
import org.springframework.stereotype.Service;

import agrobackend.ajayk.Dto.User_dto;
import agrobackend.ajayk.Entity.FarmUser;
import agrobackend.ajayk.Repository.UserRepository;
import agrobackend.ajayk.Service.UserService;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class UserServiceimpl implements UserService{

    private UserRepository userrepo;

     @Override
    public List<FarmUser> getAllUsers() {
        return userrepo.findAll();
    }
    @Override
    public User_dto getById(int id)
    {
        FarmUser user=userrepo.findById(id).orElse(null);
        if(user!=null)
        {
            User_dto udt=new User_dto();
            udt.setId(user.getId());
            udt.setUsername(user.getUsername());
            udt.setEmail(user.getEmail());
            udt.setPassword(user.getPassword());
            return udt;
        }
        return null;
    }
}
