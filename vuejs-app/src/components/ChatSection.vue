<script setup>

import ChatInput from '../elements/ChatInput.vue';  
import ChatHeader from '../elements/ChatHeader.vue'; 
import ChatMessages from '../elements/ChatMessages.vue'; 


</script>


<template>
    

<div class="content-section section-a" style="">

  <div class="chat-container">
    
    <ChatHeader></ChatHeader>
   
    <ChatMessages></ChatMessages>

    <ChatInput></ChatInput>

  </div>

</div>


</template>



<style scoped>

  .chat-container {

    display: flex;
    flex-direction: column;
    height: 100%; 
    width: 90%;
  }


  .chat-header {
    font-weight: bold;
    margin-bottom: 10px;
    flex-shrink: 0; 
  }

  .chat-messages {
    flex-grow: 1; 
    overflow-y: auto; 
    border: 1px solid #cce5ff; 
    padding: 10px;
    text-align: left; 
    border-radius: 5px;
  }

  .message {
    margin-bottom: 8px;
    padding: 8px 12px;
    border-radius: 15px;
    max-width: 80%; 
    word-wrap: break-word; 
  }

  .ai-message {
    align-self: flex-start; 
  }

  .user-message {
    align-self: flex-end; 
  }


</style>
