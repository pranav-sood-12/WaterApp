// MapComponent.tsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


// Fix Leaflet's default icon path issue
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // Adjust iconAnchor if necessary
});

L.Marker.prototype.options.icon = DefaultIcon;



const MapComponent: React.FC<{ latitude: number; longitude: number; district: string; location: string }> = ({ latitude, longitude, district, location }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map', {
      scrollWheelZoom:false
    }).setView([latitude, longitude],13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker([latitude, longitude]).addTo(map).bindPopup(`${district}, ${location}`);
    L.circle([latitude, longitude], {radius: 1200}).addTo(map);

    // Cleanup function to remove map on unmount
    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default MapComponent;
