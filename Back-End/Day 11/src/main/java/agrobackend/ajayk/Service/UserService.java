package agrobackend.ajayk.Service;
import agrobackend.ajayk.Dto.User_dto;
import agrobackend.ajayk.Entity.FarmUser;
import java.util.List;



public interface UserService {
    List<FarmUser> getAllUsers();
    User_dto  getById(int id);
    void postUser(User_dto userdto);
    FarmUser putUser(int id,User_dto userdto);
    void deleteUser(int id);
}
