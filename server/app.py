from flask import Flask, g, request, Response
import json
from flask_cors import CORS
from db import select_max_weight, update_weight
import sqlite3
from datetime import date

app = Flask(__name__)
CORS(app)

DATABASE = './database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        res = Response()
        res.headers['X-Content-Type-Options'] = '*'
        return res

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route("/Get_Max_Weight", methods=['GET'])
def Get_Max_Weight():
    conn = get_db()
    try:
        data = select_max_weight(conn)
        return json.dumps(data)
    except:
        return json.dumps({"msg": "something went wrong!"})

@app.route("/Add_Weight", methods=['POST'])
def Add_Weight():
    conn = get_db()
    req = request.get_json()
    print(req)
    try:
        print("hello")
        name = req["name"]
        weight = float(req["weight"])
        print("trying to collect date")
        date_obj = date.fromisoformat(req["date"])
        print("collected date")
        print(f"name: {name}, date: {date_obj}, weight: {weight}, {type(weight)}")
        update_weight(conn, name, date_obj, weight)
        return json.dumps({"msg": "Status Ok"})
    except:
        return json.dumps({"msg": "you have autism"})

if __name__ == "__main__":
    app.run(debug=True)