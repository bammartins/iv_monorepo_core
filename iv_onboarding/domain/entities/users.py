from datetime import datetime
from models.db import db
class Users(db.Model):
    __tablename__ = "users" 

    user_id = db.Column(db.String(36), primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    correlation_id = db.Column(db.String(36), unique=True, nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    birthdate = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    register_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    status = db.Column(db.Integer, nullable=False)

    def __init__(self, user_id, name, lastname, birthdate, phone, email, status, correlation_id):
        self.correlation_id = correlation_id
        self.user_id = user_id
        self.name = name
        self.lastname = lastname
        self.birthdate = birthdate
        self.phone = phone
        self.email = email
        self.status = status

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "correlation_id": self.correlation_id,
            "name": self.name,
            "lastname": self.lastname,
            "birthdate": self.birthdate,
            "phone": self.phone,
            "email": self.email,
            "register_date": self.register_date.isoformat() if self.register_date else None,
            "status": self.status,
        }
