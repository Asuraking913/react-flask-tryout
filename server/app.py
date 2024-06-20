from flask import Flask
from models import db
from config import AppConfig
from routes import root_route
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(AppConfig)
app.secret_key = "sdfsfsdff"
cors = CORS(app, cross_origin = "*")

root_route(app)

if __name__ == "__main__":
    with app.app_context():
        db.init_app(app)
        db.create_all()
    app.run(debug = True)