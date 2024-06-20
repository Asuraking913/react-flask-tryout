from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(50), nullable = False)
    fullname = db.Column(db.String(50), nullable = False)
    userpassword = db.Column(db.String(50), nullable = False)
    user_email = db.Column(db.String(50))
    age = db.Column(db.Integer())
    status = db.Column(db.String(50))
    about = db.Column(db.String(50))


    def __init__(self, name, password, fullname):
        self.username = name
        self.userpassword = password
        self.fullname = fullname

# class Users1(db.Model):
#     id = db.Column(db.Integer, primary_key = True)
#     username = db.Column(db.String(50), nullable = False)
#     userpassword = db.Column(db.String(50), nullable = False)
#     user_email = db.Column(db.String(50))


#     def __init__(self, name, password):
#         self.username = name
#         self.userpassword = password