const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.send('Welcome Home');
});

// What We Do Route
router.get('/what-we-do', (req, res) => {
    res.send('Welcome to What We Do');
});

// Events Route
router.get('/events', (req, res) => {
    res.send('Welcome to Events');
});

// Contact Route
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact');
});

module.exports = router;
