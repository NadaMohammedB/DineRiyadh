const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DineRiyadh', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HomePage.html'));
});

// About page route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/About.html'));
});

// Reservation page route
app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/reserve.html'));
});

// Restaurant page route
app.get('/restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/RestaurantPage.html'));
});

// Plaza page route
app.get('/plaza', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/PlazaPage.html'));
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        res.redirect('/?user=' + encodeURIComponent(user.email));
    } else {
        res.redirect('/signin.html?error=1');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});