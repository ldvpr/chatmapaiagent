<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
//
import { gd } from '../scripts/storage';


const chatmsgsScroll = ref(null);



onMounted( () => {
    gd.messages = ref(JSON.parse(localStorage.getItem('messages')) || []);
 

})


watch( 
  async () => gd.messages, async (newVal) => {
  await nextTick(); 
  chatmsgsScroll.value.scrollTop = chatmsgsScroll.value.scrollHeight;
  }

)



</script>


<template>


<div class="chat-messages bg-body-secondary" ref="chatmsgsScroll">

  
    <div class="message " 
        v-for="msg in gd.messages" :key="msg.id"
        :class="{'ai-message bg-body': msg.sender==='ai', 'user-message bg-primary text-white': msg.sender==='user'}"
    >
        <strong>{{ msg.sender }}: </strong>
        {{ msg.content }}
    </div>

    
</div>




</template>


<style scoped>
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