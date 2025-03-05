require('dotenv').config();
const app = require('./src/app');

app.listen(3000, () => {
    console.log('app is running on localhost:3000');
});

module.exports = app;
