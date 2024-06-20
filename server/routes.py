from crypt import methods
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
            found_users = Users.query.filter_by(username = user_name).all()
            for users in found_users:
                if users.username == user_name and users.userpassword == password:
                    return f"{user_name} exists"
                else:
                    return "No User"
        return 'Received credentials'  
    
    @app.route('/api/logged', methods= ['GET', 'POST'])
    def logged(): 
        if request.method == "POST":
            requested_data = json.loads(request.data)
            name = requested_data['name']
            found_user = Users.query.filter_by(username = name).first()
            print(requested_data)
            print(found_user)
            return {
                "name":found_user.username, 
                "fullname": found_user.fullname, 
                "email": found_user.user_email, 
                "age": found_user.age,
                "status": found_user.status,
                "about": found_user.about,
            }
        return "No"
            
        
    
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
    
    @app.route("/api/update", methods=['POST'])
    def update_profile():
        requested_data = json.loads(request.data)
        print(requested_data)
        user_name = requested_data['user']
        useremail = requested_data['email']
        age = requested_data['age']
        status = requested_data['status']
        about = requested_data['about']
        found_user = Users.query.filter_by(username = user_name).all()
        for users in found_user:
            users.user_email = useremail
            users.age = age
            users.status = status
            users.about = about
            db.session.commit()
            return {
                "name":users.username, 
                "fullname": users.fullname, 
                "email": users.user_email, 
                "age": users.age,
                "status": users.status,
                "about": users.about,
            }
        return "Testing"
    
    @app.route("/show")
    def show():
        found_user = Users.query.filter_by(username = 'Israel913').first()
        print(found_user.age)
        print(session)
        return "sdf"