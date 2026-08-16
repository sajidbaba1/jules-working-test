package com.realestate.controller;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import com.realestate.model.Property;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "*")
public class PropertyController {

    @GetMapping
    public List<Property> getAllProperties() {
        // Placeholder returning an empty list for now
        return new ArrayList<>();
    }
}