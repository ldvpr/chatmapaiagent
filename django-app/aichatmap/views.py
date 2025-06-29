from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
# 
from groq import Groq





@csrf_exempt  
def simple_api(request):
    if request.method == 'POST':
        try:
            user_message = request.POST.get('user-message')
            data_context = request.POST.get('data-context')
            ai_response = get_ai_response(user_message, data_context)
            return JsonResponse({"aiResponse": ai_response}, status=200)
            
        except Exception as error:
            return JsonResponse({"message": "an error ocurred "}, status=400)


def get_ai_response(user_message, data_context): 
    task_for_ai = f"""
    Based on the next JSON data: {data_context}, answer the next question: {user_message}.
    Your answer should always be in plain English, human-readable.
    Your answer should be in a few lines; the shorter, the better.
    Your answer should be about the JSON data provided.
    If the question has nothing to do with the JSON data provided, then stop and simply answer "Ask me about your data and provide more data" or something similar.
    Do not overexplain; answer the question directly.
    If the question is asking for help or similar question, then always answer with something similar to
    "I can provide information about your provided data." and or 
    " Enable recording. Move the map to your desired location. 
    Enter a brief description in the chat box. Press send to save. " depends on the question. 
    If the question is asking for something too complex, then try to answer only in a few lines and apologize in case not possible. 
    """

    try: 
        GROQ_API_KEY = "<YOUR GROQ API KEY >"
        client = Groq(
            api_key=GROQ_API_KEY,
        )
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": task_for_ai
                }
            ],
            model="llama-3.3-70b-versatile",
        )
        return chat_completion.choices[0].message.content

    except Exception as error: 
        return "Error"





def app_view(request):
    return render(request, 'aichatmap/appview.html')

    