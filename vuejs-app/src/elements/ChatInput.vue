<script setup>
import { ref, watch } from "vue";
//
import { mapvar, gd } from '../scripts/storage'
// 
import { formatDateToISO, isValidMsg, filterUserData, getAiResponse } from '../scripts/utils'




const sendButtonName = ref('send msg');
const inputMsg = ref(''); 
const isSendButtonDisabled = ref(false); 
const inputPlaceholder = ref('Type your question...'); 


const handleSentMsg = async () => {
  isSendButtonDisabled.value = true;
  if ( isValidMsg(inputMsg.value)===false ) {
    console.log('>>>> invlaid input meesag ')
  } 
  else if ( gd.recordIsActive ) { 

    gd.messages.push(
      { 
        id: crypto.randomUUID(), createdAt: formatDateToISO(new Date()), 
        content: inputMsg.value, sender: "user", datatype: 'userdata',
        latitude: mapvar.map.getCenter().lat, longitude: mapvar.map.getCenter().lng,
      },
    );
    gd.messages.push(
      { 
        id: crypto.randomUUID(), createdAt: formatDateToISO(new Date()), 
        content: "your data has been saved", sender: "ai", datatype: 'airesponse',
        latitude: 0, longitude: 0 
      },
    );

  } else { 
    
    let dataContext = filterUserData(gd.messages);   
    console.log(dataContext); 
    
    let aiMessage = await getAiResponse(inputMsg.value, dataContext);
    gd.messages.push( //
      { 
        id: crypto.randomUUID(), createdAt: formatDateToISO(new Date()), content: inputMsg.value, 
        sender: "user",  datatype: 'usermsg',  
        latitude: mapvar.map.getCenter().lat, longitude: mapvar.map.getCenter().lng,
      },
    )
    gd.messages.push( // 
      { 
        id: crypto.randomUUID(), createdAt: formatDateToISO(new Date()), content: aiMessage, 
        sender: "ai", datatype: 'airesponse',  
        latitude: 0, longitude: 0
      },
    )
    gd.messages = [...gd.messages]
    
  }

  gd.messages = [...gd.messages]; 
  localStorage.setItem( 'messages', JSON.stringify(gd.messages) );

  isSendButtonDisabled.value = false;
  inputMsg.value = ''; 



} 




watch( 
  () => gd.recordIsActive, (newVal) => {
    if ( newVal ) {
      sendButtonName.value = 'Save data';
      inputPlaceholder.value = 'Type your data...';
    } else {
      sendButtonName.value = 'Send msg'; 
      inputPlaceholder.value = 'Type your question...';
    }
  }, 
)


</script>




<template>

<div class="p-2 bg-white border-top">
    <div class="input-group">
      <input  type="text"  class="form-control" :placeholder="inputPlaceholder" maxlength="140"
        v-model="inputMsg"
      />      
      <button class="btn btn-primary" type="bAxios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.utton"
        :disabled="isSendButtonDisabled"
        @click="handleSentMsg()"
      >
        {{ sendButtonName }}
      </button>
    </div>
</div>

</template>


