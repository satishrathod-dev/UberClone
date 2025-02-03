# Backend API Documentation

## `/users/register` Endpoint

### Description
Registers a new user by creating a user account with the provided information.

### HTTP Method
`POST`

### Request Body

The request body should be in **JSON** format and include the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).


### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/login` Endpoint

### Description
Registers a new user by creating a user account with the provided information.

### HTTP Method
`POST`

### Request Body

The request body should be in **JSON** format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).


### Example Response

- `user` (object):
    - `fullname` (object):
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
    - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token


## `/users/profile` Endpoint
### Description
Retrieves the profile information of the currently authenticated user.

### HTTP Method
`GET`

## Authentication
Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

### Example Response
- `user` (object):
    - `fullname` (object).
        - `firstname` (string): User's first name (minimum 3 characters).
        - `lastname` (string): User's last name (minimum 3 characters).
    - `email` (string): User's email address (must be a valid email).
 

## `/users/logout` Endpoint
### Description
Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method
`GET`

### Authentication
Requires a valid JWT token in the Authorization header or cookie:




## `/captains/register` Endpoint

## Description
Registers a new captain by creating a captain account with the provided information.

## HTTP Method
**POST**

## Request Body
The request body should be in JSON format and include the following fields:

- `fullname` (object):
    - `firstname` (string, required): User's first name (minimum 3 characters).
    - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

- `vehicle` (object):
    - `color` (string, required): Vehicle color (minimum 3 characters).
    - `plate` (string, required): Vehicle plate number (minimum 3 characters).
    - `capacity` (number, required): Vehicle passenger capacity (minimum 1).
    - `vehicleType` (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

## Example Request Body
```json
{
  "fullname": {
    "firstname": "Test",
    "lastname": "Captain",
    "email": "testcaptain@example.com",
    "password": "strongpassword"
  },
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response
```json
{
  "token": "JWT_Token_String",
  "captain": {
    "fullname": {
      "firstname": "Test",
      "lastname": "Captain",
      "email": "testcaptain@example.com",
      "password": "strongpassword"
    },
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
}
```


# API Endpoints

## /captains/login Endpoint

### Description
Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method
POST

### Endpoint
`/captains/login`

### Request Body
The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Request
```json
{
  "email": "testcaptain@example.com",
  "password": "strongpassword"
}
```

### Example Response
```json
{
  "token": "JWT_Token_String",
  "captain": {
    "fullname": {
      "firstname": "Test",
      "lastname": "Captain"
    },
    "email": "testcaptain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# /captains/profile Endpoint
## Description
Retrieves the profile information of the currently authenticated captain.

## HTTP Method
GET

### Authentication
Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

## Example Response
```json
{
  "captain": {
    "fullname": {
      "firstname": "Test",
      "lastname": "Captain"
    },
    "email": "testcaptain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

# /captains/logout Endpoint

## Description
Logout the current captain and blacklist the token provided in cookie or headers.

## HTTP Method
GET

### Authentication
Requires a valid JWT token in the Authorization header or cookie.

## Example Response
```json
{
  "message": "Logout successfully."
}
```