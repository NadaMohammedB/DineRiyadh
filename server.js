const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

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

// Other specific routes can be added similarly
app.get('/restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/RestaurantPage.html'));
});

app.get('/plaza', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/PlazaPage.html'));
});

// More pages can be added here following the same pattern

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});