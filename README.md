# RaitaMitra

RaitaMitra is a web application that connects farmers directly with buyers for a better agricultural future.

## Features

* User authentication and authorization
* Product listing and filtering
* Shopping cart and checkout functionality
* Farmer dashboard for managing products and orders
* Admin dashboard for managing users and products

## Technologies Used

* Frontend: React, Redux, CSS
* Backend: Node.js, Express, MongoDB
* Database: MongoDB

## Installation

1. Clone the repository using `git clone https://github.com/JagannathMalode/RaitaMitra.git`
2. Install dependencies using `npm install`
3. Start the backend server using `npm start`
4. Start the frontend server using `npm start` in the `frontend` directory

## Project Structure

```
RaitaMitra/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   ├── config/
│   │   ├── db.js
│   │   ├── mysql.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── FarmerDashboard.js
│   │   │   ├── Shopping.js
│   │   │   ├── Welcome.js
│   │   ├── pages/
│   │   │   ├── SignUp.js
│   │   │   ├── SignIn.js
│   │   │   ├── HomePage.js
│   │   │   ├── Sell.js
│   │   │   ├── ProductDetails.js
│   │   ├── styles/
│   │   │   ├── Navbar.css
│   │   │   ├── FarmerDashboard.css
│   │   │   ├── Shopping.css
│   │   │   ├── Welcome.css
│   │   │   ├── index.css
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   ├── App.js
│   │   ├── index.js
├── package.json
├── README.md
```

## Usage

1. Open the application in your web browser at `http://localhost:3000`
2. Sign up or log in to access the application
3. Browse products and add them to your shopping cart
4. Checkout and complete your order

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

* Jagannath Malode for creating the initial version of the application
* [Other contributors] for their contributions to the project

