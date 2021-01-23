const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Use public directory to use our static assets
app.use(express.static(publicPath));

// If what is requested is from public then show 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Port to listen
app.listen(port, () => {
    console.log('Server is up!');
});
