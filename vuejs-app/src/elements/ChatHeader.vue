<script setup>

import { ref, watch } from 'vue';
import { gd } from '../scripts/storage'; 


const sendButtonName = ref('Send message');


watch( 
  () => gd.recordIsActive, (newVal) => {

    if ( newVal ) {
      sendButtonName.value = 'Save record';

    } else {
      sendButtonName.value = 'Send message'; 
    }

  }

)

</script>


<template>

  <div class="chat-header bg-light rounded-2">
    
    <div class="form-check form-switch d-flex justify-content-center">
      <input 
        class="form-check-input" 
        type="checkbox" value="" id="checkNativeSwitch" switch
        v-model="gd.recordIsActive"
      > &nbsp; &nbsp;
      <label class="form-check-label" for="checkNativeSwitch">
          {{ gd.recordIsActive? "Recording": "Enable record " }}
      </label>
    </div>

  </div>


</template>


<style scoped>

  .chat-header {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    flex-shrink: 0; 
  }

</style>