const express = require('express');
const path = require('path'); // Add this line
const { ServerConfig } = require('./config');
const { UsernameRouter } = require('./routes');
const { ValidateUsername } = require('./middlewares');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/username', ValidateUsername.validateUsername, UsernameRouter);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});