from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
#from flask_cors import CORS


# uses 'frontend' because that is where our react app is stored
app = Flask(__name__, static_folder="client/build", static_url_path="")


# and comment out
#CORS(app)

# this method returns the opposite of the current state of the button
# this would look different for your own personal app
@app.route("/submit", methods=["POST"])
def submit():
    if request.method == 'POST':
        firstNameData = request.get_json()
        print(firstNameData)
        first = firstNameData['firstName']
        print(first)
        if first in names.keys():
            return names.get(first)
        else:
            return "User Not Found"

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")
    
if __name__ == "__main__":
    app.run(host="0.0.0.0")

names = {
    "Jackson": "Tubb", 
    "John": "Doe",
    "Bruce": "Wayne",
    "Peter": "Parker"
}
