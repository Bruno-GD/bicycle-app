const config = require('./config')
const app = require('./app')

// Start the server
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});