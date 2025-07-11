
import { mapvar } from './storage';
// 
import 'leaflet'; 



export function initmap() {

  try {
    mapvar.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapvar.map);
   

  } catch(error) { }  
  
  
}; 

  