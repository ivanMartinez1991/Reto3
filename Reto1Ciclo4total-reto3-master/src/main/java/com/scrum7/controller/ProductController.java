package com.scrum7.controller;

import com.scrum7.model.Product;
import com.scrum7.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author Jeison Hernandez
 */


@RestController
@RequestMapping("/api/cleaningproduct")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{reference}")
    public Optional<Product> getProduct(@PathVariable("reference") String reference) {
        return productService.getProduct(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product gadget) {
        return productService.create(gadget);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Product update(@RequestBody Product gadget) {
        return productService.update(gadget);
    }

    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return productService.delete(reference);
    }
}