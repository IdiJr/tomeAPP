# tomeAPP :computer:

This is an e-commerce app created as a requirement for Alx-SE program.

![](./logo.jpg) 

## What does this project include?
- User creation and authentication
- Sort products by categories, comment count, price and rate. 
- Search and add the products to cart. 
- Comment and rate products
- Email notification service
- Create orders
- User Profile Page

In short terms, this project covers the basics of a e-commerce website. We named it tome which is Akan for "Buy me"


## How to run the project
1. First you need to clone the project with and go to directory
	```
	> git clone https://github.com/IdiJr/tomeAPP.git
	> npm i --force
	```
2. Then you need to go to open a second terminal, move into the [frontend](./frontend) part and install the dependencies with
	```
	> cd frontend && npm i --force
	```
3. Populate the user, categories, and products collection by running
    ```
    > node populateDatabase.js
    ```
4. ## You have to fill in the details for the [backend/config/config.env](./backend/config) like this:
```
PORT= 4000
NODE_ENV= Development

DB_LOCAL_URI = "mongodb://localhost:27017/your_database_name"
FRONT_END_URL = "http://localhost:3000"

JWT_SECRET = SDJASDAI7923847HUSHCU88HJDSFH7HDS8
JWT_EXPIRES_TIME = 7d
COOKIES_EXPIRES_TIME = 7d

STRIPE_SECRET_KEY = your_stripe_secret
STRIPE_API_KEY = your_stripe_api

SMTP_HOST = smtp.mailtrap.io
SMTP_PORT = 2525
SMTP_EMAIL = 
SMTP_PASSWORD = 
SMTP_FROM_EMAIL = noreply@tome.com
SMTP_FROM_NAME = tome

CLOUDINARY_CLOUD_NAME = your_cloudinary_cloud_name
CLOUDINARY_API_KEY= your_cloudinary_api_key
CLOUDINARY_API_SECRET= your_cloudinary_api_secret
```
5. Then you need to start the server first in the backend terminal then, in the frontend terminal
	```
	> npm start
	```

Then it will run the project at `localhost:4000`. If there is any errors when frontend tries to connect to backend (proxy errors), change the proxy to point to backend in `package.json`.
