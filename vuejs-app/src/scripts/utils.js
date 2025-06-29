import axios from 'axios'; 




export async function getAiResponse(userMsg, dataContext) {
  let jsonDataContext = JSON.stringify(dataContext) || ''; 
  let dataForm = new FormData();
  let url = "<YOUR API ENDPOINT, WHERE DJANGO APP IS HOSTED>";
  dataForm.append('user-message', userMsg);
  dataForm.append('data-context', jsonDataContext);
  let res = await axios.post(url, dataForm);
  return res.data.aiResponse; 
}







export function filterUserData(messages) {
  return messages.filter(message => message.datatype === "userdata");
}





export function isValidMsg(input) {
  if (typeof input !== 'string' || !input.trim()) {
    console.log('eero 1')
    return false;
  }

  if (input.length > 141 ) { 
    return false;
  }

  if (/<script.*?>.*?<\/script>/gi.test(input) || 
      /javascript:/gi.test(input) || 
      /on\w+="[^"]*"/gi.test(input)) {
         console.log('eero 3')
    return false;
  }

  if (/^[\d\s\W_]+$/.test(input)) {
    return false;
  }

  if (!/[a-zA-Z]/.test(input)) {
    return false;
  }

  if (/(.)\1{5,}/.test(input)) {
    return false;
  }

  const nonsensePatterns = [
    /^[^a-zA-Z0-9]+$/,  
    /^(.)\1*$/,         
    /^[a-zA-Z0-9]{1}$/, 
    /^\d+$/,           
    /^[^\w\s]+$/       
  ];
  
  if (nonsensePatterns.some(pattern => pattern.test(input))) {    
    return false;
  }

  return true;
}



export function formatDateToISO(date) {
  const pad = (num) => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); 
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

