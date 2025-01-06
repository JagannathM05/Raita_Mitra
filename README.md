RaitaMitra/
├── backend/
│   ├── models/
│   │   ├── Product.js            # Product schema for MongoDB
│   │   ├── User.js               # User schema for MongoDB
│   ├── routes/
│   │   ├── authRoutes.js         # Auth routes for Sign Up, Sign In
│   │   ├── productRoutes.js      # Product-related routes (CRUD for products)
│   ├── config/
│   │   ├── db.js                 # MongoDB connection setup
│   │   ├── mysql.js              # MySQL connection setup
│   ├── middleware/
│   │   ├── authMiddleware.js     # Middleware to verify JWT tokens for authentication
│   ├── server.js                 # Express server setup
├── frontend/
│   ├── public/
│   │   ├── index.html            # Main HTML file
│   │   ├── assets/               # Images/icons (e.g., logos, icons)
│   ├── src/
│   │   ├── components/           # Reusable React components
│   │   │   ├── Navbar.js         # Navigation bar
│   │   │   ├── FarmerDashboard.js # Farmer's product dashboard
│   │   │   ├── Shopping.js       # Shopping page
│   │   │   ├── Welcome.js        # Welcome screen
│   │   ├── pages/                # Page components
│   │   │   ├── SignUp.js         # Sign Up page
│   │   │   ├── SignIn.js         # Sign In page
│   │   │   ├── HomePage.js       # Home page after login
│   │   ├── styles/               # CSS files for styling
│   │   │   ├── Navbar.css        # Styles for Navbar
│   │   │   ├── FarmerDashboard.css # Styles for FarmerDashboard
│   │   │   ├── Shopping.css      # Styles for Shopping page
│   │   │   ├── Welcome.css       # Styles for Welcome page
│   │   ├── utils/                # Utility functions
│   │   │   ├── api.js            # API functions for requests
│   │   │   ├── auth.js           # Functions to manage auth token
│   │   │   ├── validation.js     # Functions for form validation
│   │   ├── App.js                # Main React component
│   │   ├── index.js              # React entry point
├── package.json                  # NPM dependencies
├── README.md                     # Project documentation



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
│   │   │   ├── Navbar.js          # Updated with Sign In/Sign Up links
│   │   │   ├── FarmerDashboard.js
│   │   │   ├── Shopping.js
│   │   │   ├── Welcome.js         # Updated with Sign In/Sign Up links
│   │   ├── pages/
│   │   │   ├── SignUp.js
│   │   │   ├── SignIn.js
│   │   │   ├── HomePage.js        # Updated with Sign In/Sign Up links
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