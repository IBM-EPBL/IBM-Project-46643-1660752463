import os
from flask import Flask,request,jsonify, json, Response, make_response, render_template
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import db

app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)

@app.route('/')

@app.route("/test")
def test():
    return "Connected to the data base!"

class UserAuthUtil:
    
    @app.route("/", methods=['GET'])
    def hello_world():
        return "Working"

    @app.route("/login", methods=['POST'])
    def login_user():
        try:
            if request.method == 'POST':
                form_data = request.get_json()
                email = form_data['email']
                password = form_data['password']
                if(email != '' and password != ''):
                    data = list(db.users.find({'email': email}))
                    if(len(data) == 0):
                        return Response(status=404, response=json.dumps({'message': 'user does not exist'}), mimetype='application/json')
                    else:
                        data = data[0]
                        if(bcrypt.check_password_hash(data['password'], password)):
                            #token =jwt.encode({'email': email}, app.config['SECRET_KEY'])
                            return make_response(jsonify({'message':'User logged in successfully'}), 201)
                        else:
                            return Response(status=402, response=json.dumps({'message': 'Invalid password'}), mimetype='application/json')
                else:
                    return Response(status=400, response=json.dumps({'message': 'Bad request'}), mimetype='application/json')
            else:
                return Response(status=401, response=json.dumps({'message': 'invalid request type'}), mimetype='application/json')
        except Exception as Ex:
            print('\n\n\n*********************************')
            print(Ex)
            print('*********************************\n\n\n')
            return Response(response=json.dumps({'message': "Internal Server error"}), status=500, mimetype="application/json")


    @app.route("/register", methods=['POST'])
    def register_user():
        try:
            if request.method == "POST":
                user_details = request.get_json()
                full_name = user_details["fullName"]
                email = user_details["email"]
                password = user_details["password"]
                password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
                if (full_name != '' and email != '' and password_hash != ''):
                    db.users.insert_one({'fullName':full_name,'email':email,'password':password_hash})
                    return Response(response=json.dumps({'message': 'User created successfully'}), status=200, mimetype="application/json")
                else:
                    return Response(status=400, response=json.dumps({'message': 'Please enter your details'}), mimetype='application/json')
            else:
                return Response(status=400, response=json.dumps({'message': 'Bad request'}), mimetype='application/json')
        except Exception as Ex:
            print('\n\n\n*********************************')
            print(Ex)
            print('*********************************\n\n\n')
            return Response(response=json.dumps({'message': "Internal Server Error"}), status=500, mimetype="application/json")    

if __name__ == '__main__':
    app.run(port=8000)