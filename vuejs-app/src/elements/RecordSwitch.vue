<script setup>
import { ref } from 'vue'
import { mapvar, gd } from '../scripts/storage';


const onOffRecord = () => {

    if ( gd.recordIsActive ) {
        console.log('>>> record is acive ')
        let currentlat = mapvar.map.getCenter().lat; 
        let currentlng = mapvar.map.getCenter().lng; 
        
        mapvar.recordMarker = L.marker([currentlat, currentlng]).addTo(mapvar.map); 
        mapvar.map.on('move', function(ev) {
            mapvar.recordMarker.setLatLng(
                mapvar.map.getCenter()
            )
        })

    } else {
        console.log('>>> records is off ')
         mapvar.recordMarker.remove();  

    }

}


</script>


<template>
    
    
    <input 
        class="form-check-input" 
        type="checkbox" 
        id="recordSwitch"
        v-model="gd.recordIsActive"
        @change="onOffRecord"
    >
    <label class="form-check-label" for="modeSwitch"
    >
        {{ gd.recordIsActive? 'Recording': 'Enable record' }}    
    </label>
      

</template>