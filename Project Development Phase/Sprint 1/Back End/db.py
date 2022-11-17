from flask import Flask
from flask_pymongo import pymongo
from app import app
CONNECTION_STRING = "enter_your_connection_string"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('heart_disease_prediction')
users = pymongo.collection.Collection(db, 'Users')