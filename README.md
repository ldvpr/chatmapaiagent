## **Simply Location Data Collector AI Agent Project**
This is a basic AI tool that lets you save information about a places and get details about them by chatting with a bot.

#### **Configuration**
In Django App, in aichatmap/views.py add your Groq api key

    GROQ_API_KEY =  "<YOUR GROQ API KEY >"
    client = Groq( api_key=GROQ_API_KEY )

Also , set the secret key and domain host in Django App.

VueJS App, in utils.js file change the url in getAiResponse() function

    export  async  function  getAiResponse(userMsg, dataContext) {
       ...
       let  url  =  "<YOUR API ENDPOINT, WHERE DJANGO APP IS HOSTED>";
Build the VueJS App and copy the dist folder files into Django App in templates and static folder.

#### **Architecture**
-  Type: Client-Server (Decoupled Frontend/Backend)  
-   Frontend: Vue.js 
-   Backend: Django     
-   No Database: Uses browser in-memory data.
-   Dajngo simple view renders the user interface (Single-Page Application).
-   VueJS App handles user interactions (forms, buttons, etc.).
-   Fetches AI API from Django App.
-   Vue Components integrated with LeafletJS Map
-   API Client: Axios/Fetch for HTTP requests to Django.
-   Django app exposes API endpoints.
-   Django app processes business logic (no database persistence).
-   Django app integrates with external AI API.