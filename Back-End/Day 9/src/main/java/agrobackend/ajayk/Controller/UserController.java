package agrobackend.ajayk.Controller;

import agrobackend.ajayk.Dto.User_dto;
import agrobackend.ajayk.Entity.FarmUser;
import agrobackend.ajayk.Service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService newservice;
    
    @GetMapping("/")
    public ResponseEntity<List<FarmUser>> getAllUsers() {
        List<FarmUser> newuser=newservice.getAllUsers();
        return ResponseEntity.ok(newuser);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User_dto> getById(@PathVariable("id") int id)
    {
        User_dto userdto=newservice.getById(id);
        return ResponseEntity.ok(userdto);
    }
}
