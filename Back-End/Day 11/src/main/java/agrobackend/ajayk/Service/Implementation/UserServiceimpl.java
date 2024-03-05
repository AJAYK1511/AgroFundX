package agrobackend.ajayk.Service.Implementation;

import java.util.List;
import java.util.Optional;

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

    @Override
    public void postUser(User_dto userdto)
    {
        FarmUser farmUser=new FarmUser();
        farmUser.setId(userdto.getId());
        farmUser.setUsername(userdto.getUsername());
        farmUser.setEmail(userdto.getEmail());
        farmUser.setPassword(userdto.getPassword());
        userrepo.save(farmUser);
    }

    @Override
    public FarmUser putUser(int id,User_dto userdto)
    {
        Optional<FarmUser> optionalUser = userrepo.findById(id);
        if (optionalUser.isPresent()) {
        FarmUser farmUser = optionalUser.get(); 
        farmUser.setId(userdto.getId());
        farmUser.setUsername(userdto.getUsername());
        farmUser.setEmail(userdto.getEmail());
        farmUser.setPassword(userdto.getPassword());
        return userrepo.save(farmUser);
        } 
        else
       {
        return null;
       }
    }
    
    @Override
    public void deleteUser(int id)
    {
        userrepo.deleteById(id);
    }
}
