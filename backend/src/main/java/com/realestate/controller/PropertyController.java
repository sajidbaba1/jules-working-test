package com.realestate.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.realestate.model.Property;
import com.realestate.repository.PropertyRepository;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {

    private final PropertyRepository propertyRepository;

    @Autowired
    public PropertyController(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @PostMapping
    public Property createProperty(@RequestBody Property property) {
        // Set default approval status for new properties
        if (property.getApprovalStatus() == null) {
            property.setApprovalStatus("PENDING");
        }
        return propertyRepository.save(property);
    }
}