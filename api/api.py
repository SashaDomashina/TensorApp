import time
import json
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from bson import json_util
#    

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = "mongodb+srv://ilyagusa:BBUCix57dICRfZqv@mydata.zvsdf.mongodb.net/data_news?retryWrites=true&w=majority"
    mongo = PyMongo()
    mongo.init_app(app)


    #Cross-origin resource sharing
    CORS(app)

    @app.route('/')
    @app.route('/time')
    def get_current_time():
        return {'time' : time.ctime()}



    @app.route('/video')
    def get_data_base():
        video_news = list(mongo.db.news.find({"format":"mp4"}))
        return json.dumps(video_news,default=json_util.default)


    @app.route('/base')
    def get_data_video():
        data_news = list(mongo.db.news.find())
        return json.dumps(data_news,default=json_util.default)
        
    return app