<script setup>

import { onMounted, watch } from "vue";
import { initmap } from "../scripts/initmap";
//
import { gd, mapvar } from "../scripts/storage";
//
import { addGpsControl } from '../scripts/gpsControl'; 
//  
import 'leaflet'; 
import markerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'; 



onMounted( async () => {
  initmap(); 
  addGpsControl(); 

})


watch( 
  () => gd.recordIsActive, (newVal) => {

    if ( newVal ) {

      let currentLat = mapvar.map.getCenter().lat; 
      let currentLng = mapvar.map.getCenter().lng;       
      mapvar.recordMarker = L.marker(
        [currentLat, currentLng], 
        {
          icon: L.icon({
            iconUrl: markerIcon,
            iconAnchor: [10,40]
          })
        }
      ).addTo(mapvar.map);

      mapvar.map.on('move', function() {
        mapvar.recordMarker.setLatLng(
          mapvar.map.getCenter()
        )        
      })


    } else {
      try {
        mapvar.recordMarker.remove();
      } catch(er) {}
    }

  }

)


</script>


<template>
    
<div class="content-section section-b">
    <div id="map"></div>
</div>

</template>



<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style> 

