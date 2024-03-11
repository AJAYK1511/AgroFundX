package agrobackend.ajayk.Controller;

import agrobackend.ajayk.Dto.User_dto;
import agrobackend.ajayk.Entity.FarmUser;
import agrobackend.ajayk.Repository.UserRepository;
import agrobackend.ajayk.Service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173/")
public class UserController {

    @Autowired
    UserService newservice;

    @Autowired
    UserRepository userRepo;
    
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

    @GetMapping("/id-with-username/{username}")
    public ResponseEntity<Integer> getIdWithUsername(@PathVariable("username") String username) {
        FarmUser user = userRepo.findByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user.getId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    

    // @PostMapping("/post")
    // public void postUser(@RequestBody User_dto userdto)
    // {
    //     newservice.postUser(userdto);
    // }


    @PutMapping("/put/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public FarmUser putUser(@PathVariable("id") int id,@RequestBody User_dto userdto)
    {
        return newservice.putUser(id,userdto);
    }

}
