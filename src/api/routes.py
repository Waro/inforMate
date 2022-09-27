"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Restaurant, MyTrip
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_sqlalchemy import SQLAlchemy

# marshmallow-sqlalchemy flask-sqlalchemy
from flask_marshmallow import Marshmallow


api = Blueprint('api', __name__)
ma = Marshmallow(api)


@api.route('/users', methods=['GET'])
def get_protect():

    users = User.query.all()
    response_body = {
        # "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "users": []
    }

    for user in users:
        response_body['users'].append(user.serializeUser())

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def handle_login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:

        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id, "email": email})


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/signup", methods=["POST"])
def handle_signup():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User(email=email, password=password, )
    db.session.add(user)
    db.session.commit()
    if user is None:

        user = User
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "user_id": user.id, "email": email})


@api.route("/private", methods=["GET"])
@jwt_required()
def get_useridentity():
    user_id = get_jwt_identity()
    print("user_id is: {user_id}")
    user = User.query.get(user_id)
    return jsonify(user.serialize())


@api.route("/restaurants", methods=["POST"])
@jwt_required()
def add_restaurant():

    userid = request.json.get("userid", None)
    name = request.json.get("name", None)
    external_api_id = request.json.get("external_api_id", None)
    address = request.json.get("address", None)
    typology = request.json.get("type", None)
    phone = request.json.get("phone", None)
    parking = request.json.get("parking", None)
    image = request.json.get("image", None)

    restaurant = Restaurant(
        name=name,
        external_api_id=external_api_id,
        address=address,
        typology=typology,
        phone=phone,
        parking=parking,
        image=image,
        user_id=userid)

    db.session.add(restaurant)
    db.session.commit()

    return jsonify({"msg": "New restaurant added"}), 201


# With this class we can easilly map the restaurants of the user
class RestaurantSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
            "external_api_id",
            "address",
            "typology",
            "phone",
            "parking",
            "image",
            "user_id")


@api.route("/restaurants/<user_id>", methods=["GET"])
@jwt_required()
def get_restaurants(user_id):
    restaurants = Restaurant.query.filter_by(user_id=user_id)

    restaurants_schema = RestaurantSchema(many=True)
    restaurants_json = restaurants_schema.dump(restaurants)

    return jsonify(restaurants=restaurants_json), 201


@api.route("/restaurants/<id>", methods=["DELETE"])
@jwt_required()
def delete_restaurant(id):
    restaurant = Restaurant.query.get(id)
    restaurant_schema = RestaurantSchema()
    restaurants_json = restaurant_schema.dump(restaurant)

    db.session.delete(restaurant)
    db.session.commit()

    return jsonify({"msg": "restaurant successfully deleted", "restaurant": restaurants_json}), 200
