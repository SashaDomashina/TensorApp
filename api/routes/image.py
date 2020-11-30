import json
from flask import Blueprint
from database.db import mongo
from bson import json_util

image = Blueprint('image', __name__)

@image.route('/data')
def get_data():
    data_news = list(mongo.db.news.find({"format":"image"}))
    return json.dumps(data_news,default=json_util.default)
    