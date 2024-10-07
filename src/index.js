const express = require('express');
const { recommendJobs } = require('./services/recommendationService');

const app = express();
app.use(express.json()); // To parse JSON bodies

// Define API endpoint
app.post('/recommendations', (req, res) => {
    const userProfile = req.body;
    const recommendations = recommendJobs(userProfile);
    res.json({ recommendations });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
