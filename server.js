const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/motion-detected', (req, res) => {
    // Implement your notification logic here
    // This can include sending notifications to viewers via WebSockets, email, or other methods.
    console.log('Motion detected on the client.');

    // Send a response to the client
    res.status(200).send('Motion detection notification received.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
