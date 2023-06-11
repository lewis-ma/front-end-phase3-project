# front-end-phase3-project
Food Delivery App

Welcome to the Food Delivery App! This application allows users to browse and order delicious food from local restaurants for delivery or pickup. With a user-friendly interface and seamless ordering process, it's never been easier to satisfy your cravings.
Table of Contents

    Features
    Technologies Used
    Installation
    Usage
    Backend
    API Endpoints
    Database
    Authentication
    Payment Gateway Integration
    Testing
    Contributors
    License

Features

    Browse Food Options: Users can explore a wide variety of food options from local restaurants. They can view menus, dish descriptions, and prices.

    Search Functionality: The app provides a search feature to help users find specific dishes or restaurants based on keywords.

    Detailed Information: Users can access detailed information about each dish, including ingredients, nutritional information, and any special dietary considerations.

    Cart Functionality: Users can add items to their cart and customize their orders by selecting quantities, adding special instructions, and choosing additional toppings or sides.

    Delivery and Pickup Options: The app allows users to specify their preferred delivery address or choose a pickup location. Users can also set a desired delivery time.

    Secure Online Payment: The app integrates with a secure payment gateway (Stripe) to process online payments, ensuring a seamless and safe checkout experience.

    Order Tracking: Users can track the status of their orders in real-time, including order preparation, dispatch, and estimated delivery time.

    Reviews and Ratings: Users can leave reviews and ratings for restaurants and dishes, providing valuable feedback to other users and helping them make informed choices.

Technologies Used

The Food Delivery App is built using the following technologies:

    Frontend: React, React Router, styled-components
    Backend: Sinatra (Ruby)
    Database: PostgreSQL
    Payment Gateway Integration: Stripe

Installation

To run the Food Delivery App locally, follow these steps:

    Clone the repository from GitHub:

    bash

git clone https://github.com/lewis-ma/phase-3-sinatra-react-project.git

Navigate to the project directory:

bash

cd phase-3-sinatra-react-project

Install the required dependencies:

npm install

Start the development server:

sql

    npm start

    Open your web browser and visit http://localhost:3000 to access the app.

Usage

Once the app is up and running, you can start exploring and ordering food from local restaurants. Here are some key steps to get started:

    Create an account or log in if you already have one.

    Browse through the available restaurants and dishes. You can use the search functionality to find specific items.

    Click on a dish to view more details, including descriptions, ingredients, and prices.

    Customize your order by selecting quantities, adding special instructions, or choosing additional toppings or sides.

    Add items to your cart and proceed to the checkout page.

    Choose your delivery address or pickup location, and set a preferred delivery time if applicable.

    Proceed to the payment page and securely complete your transaction using the integrated payment gateway.

    Once the order is confirmed, you can track its status in real-time. You will receive updates on order preparation, dispatch, and estimated delivery time.

    After receiving your order, you can leave a review and rating for the restaurant and dish to help other users make informed decisions.

Backend

The backend of the Food Delivery App is built using Sinatra, a lightweight web application framework in Ruby. It provides the necessary API endpoints for handling user authentication, managing orders, and interacting with the database.
API Endpoints

The backend API provides the following endpoints:

    /api/restaurants: Get a list of all restaurants.
    /api/restaurants/:id: Get details of a specific restaurant.
    /api/dishes: Get a list of all dishes.
    /api/dishes/:id: Get details of a specific dish.
    /api/cart: Manage the user's shopping cart.
    /api/orders: Manage user orders.
    /api/auth: User authentication endpoints.

Please refer to the backend repository for detailed documentation on the API endpoints.
Database

The Food Delivery App uses PostgreSQL as the database to store restaurant, dish, user, and order information. The database schema and table structures are implemented using migrations and models provided by the Sinatra framework.
Authentication

The app implements user authentication using JSON Web Tokens (JWT). Users can create accounts, log in, and access protected routes by including their JWT in the request headers.
Payment Gateway Integration

The Food Delivery App integrates with Stripe, a popular and secure payment gateway, to process online payments. Users can securely enter their payment details and complete transactions with confidence.
Testing

The app includes unit tests and integration tests to ensure the functionality and stability of the codebase. Testing is done using the Jest testing framework and React Testing Library.

To run the tests, use the following command:

bash

npm test

Contributors

    Your Name

License

This project is licensed under the MIT License.

Feel free to customize the README file according to your specific app features, technologies used, and any additional information you want to provide. Good luck with your food delivery app!
