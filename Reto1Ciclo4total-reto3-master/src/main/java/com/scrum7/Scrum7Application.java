package com.scrum7;


import com.scrum7.repositoryCrud.OrderCrudRepository;
import com.scrum7.repositoryCrud.ProductCrudRepository;
import com.scrum7.repositoryCrud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Scrum7Application implements CommandLineRunner {


    @Autowired
    private ProductCrudRepository crudRepository;
    @Autowired
    private UserCrudRepository userCrudRepository;
    @Autowired
    private OrderCrudRepository orderCrudRepository;

    public static void main (String[] args) {
        SpringApplication.run(Scrum7Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
