const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// this is used to access the static files.
app.use(express.static('public'));

//importing the route files in app.js file
app.use('/', require('./route/index.js'));
app.use('/user', require('./route/user.js'));


//creating middleware (ejs) && Layout should be above the view engine to work.
app.use(expressLayouts); 
app.set('view engine', 'ejs');



const port = process.env.PORT || 3000;
app.listen(port, console.log(`server is running in port ${port}`));