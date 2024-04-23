const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User registration
exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const user = await User.create({ username, email, password: hashedPassword });
        // Generate JWT token
        const token = generateToken(user._id);
        // Respond with the user data and token
        res.status(201).json({ user, token });
    } catch (error) {
        next(error);
    }
};

// User login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = generateToken(user._id);
        // Respond with the user data and token
        res.status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
};

// Generate JWT token
function generateToken(userId) {
    return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' });
}
