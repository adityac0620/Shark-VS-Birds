from flask import Flask, render_template, request
from flask_restful import Resource, Api
from prediction import prediction

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/imageUpload", methods=["POST"])
def image_upload():
    uploaded_file = request.files["file"]
    if uploaded_file.filename != "":
        uploaded_file.save("Api-Endpoints/request_images/")
    prediction.predict_winner(uploaded_file)


if __name__ == 'main':
    app.run(port=3000)
