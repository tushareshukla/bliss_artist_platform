# Artist Booking Platform

## Description

Artist Booking Platform is a web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows artists to register, list their services, and users to book artists for events or appointments.

## Features

- User authentication: Register and login functionality for artists and users.
- Artist management: Artists can register, create profiles, and list their services.
- Booking management: Users can search for artists, view their profiles, and book them for events or appointments.
- Secure payment integration: Integration with a payment gateway for secure online payments.
- Search and filter functionality: Users can search for artists based on criteria such as location, availability, and services offered.
- Responsive user interface: A modern and responsive UI for seamless user experience across devices.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Integration**: Stripe

## Setup Instructions



```bash
1. Clone the repository:

git clone https://github.com/your-username/artist-booking-platform.git
cd artist-booking-platform

2. Install dependencies:

cd backend && npm install
cd ../frontend && npm install


3. Set up environment variables:
Create a .env file in the backend directory and add the following:

MONGO_URI=your-mongodb-connection-url
JWT_SECRET=your-jwt-secret


4.Start the development servers:

# Start the backend server
cd backend && npm start

# Start the frontend development server
cd ../frontend && npm start

