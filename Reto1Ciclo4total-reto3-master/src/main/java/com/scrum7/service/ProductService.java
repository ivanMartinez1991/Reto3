package com.scrum7.service;

import com.scrum7.model.Product;
import com.scrum7.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author Jeison Hernandez
 */

@Service
public class ProductService {
    @Autowired
    private ProductRepository repositorio;

    public List<Product> getAll() {
        return repositorio.getAll();
    }

    public Optional<Product> getProduct(String reference) {
        return repositorio.getProduct(reference);
    }

    public Product create(Product product) {
        if (product.getReference() == null) {
            return product;
        } else {
            return repositorio.create(product);
        }
    }

    public Product update(Product product) {

        if (product.getReference() != null) {
            Optional<Product> productDb = repositorio.getProduct(product.getReference());
            if (!productDb.isEmpty()) {
                if (product.getBrand() != null) {
                    productDb.get().setBrand(product.getBrand());
                }

                if (product.getCategory() != null) {
                    productDb.get().setCategory(product.getCategory());
                }


                if (product.getDescription() != null) {
                    productDb.get().setDescription(product.getDescription());
                }
                if (product.getPrice() != 0.0) {
                    productDb.get().setPrice(product.getPrice());
                }
                if (product.getQuantity() != 0) {
                    productDb.get().setQuantity(product.getQuantity());
                }
                if (product.getPhotography() != null) {
                    productDb.get().setPhotography(product.getPhotography());
                }
                productDb.get().setAvailability(product.isAvailability());
                repositorio.update(productDb.get());
                return productDb.get();
            } else {
                return product;
            }
        } else {
            return product;
        }
    }

    public boolean delete(String reference) {
        Boolean aBoolean = getProduct(reference).map(product -> {
            repositorio.delete(product);
            return true;
        }).orElse(false);
        return aBoolean;
    }

}
