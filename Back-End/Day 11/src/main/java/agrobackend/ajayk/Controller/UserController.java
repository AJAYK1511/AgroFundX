package agrobackend.ajayk.Controller;

import agrobackend.ajayk.Dto.User_dto;
import agrobackend.ajayk.Entity.FarmUser;
import agrobackend.ajayk.Service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService newservice;
    
    @GetMapping("/")
    @PreAuthorize("hasAuthority('ADMIN')")
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

     @PostMapping("/post")
    public void postUser(@RequestBody User_dto userdto)
    {
        newservice.postUser(userdto);
    }
    @PutMapping("/put/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public FarmUser putUser(@PathVariable("id") int id,@RequestBody User_dto userdto)
    {
        return newservice.putUser(id,userdto);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") int id)
    {
         newservice.deleteUser(id);
    }
}
