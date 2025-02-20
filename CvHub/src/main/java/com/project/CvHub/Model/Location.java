package com.project.CvHub.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "cvhub_location")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Location {
    @Id
    private int code;

    @Column(name = "name", nullable = true)  // Thêm nullable = true
    private String name;

    @Column(name = "division_type", nullable = true)  // Thêm nullable = true
    private String division_type;
}
