from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    name = "Vaishnavi" 
    return render_template("index.html")

@app.route('/french')
def boujour_world():
    return "Bonjour, World!"

@app.route("/name/<name>")
def hello_name(name):
    return f'Hello, {name}'
 