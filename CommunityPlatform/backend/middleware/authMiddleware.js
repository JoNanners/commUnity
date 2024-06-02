const bcrypt = require('bcryptjs');

// Assuming you have a User model imported or defined somewhere
const User = require('../models/User');

// Middleware function to authenticate users
const authenticateUser = async (req, res, next) => {
    try {
        // Extract the email and password from the request body
        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });

        // If user not found, respond with an error
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password provided with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If passwords don't match, respond with an error
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If authentication is successful, attach the user object to the request object
        req.user = user;

        // Call next middleware
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authenticateUser;
