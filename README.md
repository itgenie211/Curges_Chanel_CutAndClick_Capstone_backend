Introduction
The Hair Page Backend provides the necessary server-side functionalities to support the Hair Page application. It includes routes for managing users, hairstyles, products, categories, and more. The backend interacts with a MongoDB database to store and retrieve data.

Technologies Used
Node.js
Express.js
MongoDB (with Mongoose ODM)

API Endpoints
Users:
/users/register (POST): Register a new user.
/users/login (POST): Log in an existing user.
/users/profile (GET, PUT, DELETE): Get, update, or delete user profile.

Hairstyles:
/hairstyles (GET, POST): Get all hairstyles or create a new hairstyle.
/hairstyles/:id (GET, PUT, DELETE): Get, update, or delete a specific hairstyle.

Products:
/products (GET, POST): Get all products or create a new product.
/products/:id (GET, PUT, DELETE): Get, update, or delete a specific product.

Categories:
/categories/hairstyles (GET): Get all hairstyle categories.
/categories/products (GET): Get all product categories.
