from models import Users, db
from flask import jsonify, request, json, session

def root_route(app):

    @app.route("/home")
    @app.route("/")
    def home():
        return '<h1>Oi!! This is the home page mate</h1>'

    @app.route("/api/login", methods = ['GET', "POST"])
    def login():
        if request.method ==  "POST":
            requested_data = json.loads(request.data)
            user_name = requested_data['name']
            password = requested_data['password']
            found_users = Users.query.all()
            for users in found_users:
                if users.username == user_name and users.userpassword == password:
                    return f"{user_name} exists"
                else:
                    return "No User"
        return 'Received credentials'  
    
    @app.route("/api/create_user", methods = ['POST'])
    def create_user():
        if request.method == "POST": 
            requested_data = json.loads(request.data)
            user_name = requested_data['name']
            useremail = requested_data['email']
            user_pass = requested_data['password']
            user_fullname = requested_data['fullname']
            new_user = Users(user_name, user_pass, user_fullname)
            db.session.add(new_user)
            db.session.commit()
            if useremail != '':
                found_user = Users.query.filter_by(username = user_name).first()
                found_user.user_email = useremail
                db.session.commit()
            return f"{user_name} Created"
        return "Received data"
    
    @app.route("/show")
    def show():
        found_user = Users.query.all()
        print(found_user)
        print(session)
        return "sdf"