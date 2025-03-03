package com.project.CvHub.Service;



import java.util.List;

import com.project.CvHub.Entity.Location;
import com.project.CvHub.Repository.LocationRepository;
import org.springframework.stereotype.Service;


@Service
public interface LocationService {
	List<Location>  fetchLocationsFromAPI();
}