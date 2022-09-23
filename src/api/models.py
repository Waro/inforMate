from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
#    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serializeUser(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            # do not serialize the password, its a security breach
        }

class Restaurant(db.Model):
    __tablename__ = 'restaurant'
    id = db.Column(db.Integer, primary_key=True)
    external_api_id = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    typology = db.Column(db.String(120), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    parking = db.Column(db.String(120), unique=False, nullable=True)
    image = db.Column(db.String(120), unique=False, nullable=True)

class MyTrip(db.Model):
    __tablename__ ='mytrip'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    hotels_id = db.Column(db.Integer, db.ForeignKey('hotel.id'), nullable=False)
    flights_id = db.Column(db.Integer, db.ForeignKey('flight.id'), nullable=False)

class Hotel(db.Model):
    __tablename__ = 'hotel'
    id = db.Column(db.Integer, primary_key=True)
    external_api_id = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    typology = db.Column(db.String(120), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    parking = db.Column(db.String(120), unique=False, nullable=True)
    image = db.Column(db.String(120), unique=False, nullable=True)

class Flight(db.Model):
    __tablename__ = 'flight'
    id = db.Column(db.Integer, primary_key=True)
    external_api_id = db.Column(db.Integer, unique=True, nullable=False)
    number = db.Column(db.String(120), unique=False, nullable=False)

trips = db.Table('trips',
    db.Column('restaurant_id', db.Integer, db.ForeignKey('restaurant.id'), primary_key=True),
    db.Column('mytrip_id', db.Integer, db.ForeignKey('mytrip.id'), primary_key=True)
)
