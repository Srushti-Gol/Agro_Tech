from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
import os

app = Flask(__name__)

CORS(app)  
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key = OPENAI_API_KEY)

def generate_response(user_message):
    
        response = client.chat.completions.create(
            model = "gpt-3.5-turbo",
            messages = [
                {"role" : "user" , "content" : user_message}
            ] 
        )
        return response.choices[0].message.content
    
@app.route('/chat', methods=['POST'])
def chat():
        data = request.get_json()
        user_message = data.get('text')
        # bot_message = "Bot Reply"
        bot_message = generate_response(user_message)
        print("Bot's response:", bot_message)  
        return jsonify({'message': bot_message})
  
if __name__ == '__main__':
    app.run(debug=True)
