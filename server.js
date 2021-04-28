const tp = require('http')
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const ejs = require('ejs');
const connectDB = require('./connections/connector');
const exphbs = require('express-handlebars');
const app = express();




bodyParser = require("body-parser")

// set path for css and bootstrap files
const fs = require('fs');
    var myCss = {
         style : fs.readFileSync('./views/css/style.css','utf8')
};

app.use(express.static(path.join(__dirname, 'views')));

dotenv.config({path:'.env'});
const PORT = process.env.PORT || 5000;

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views')); //this set joins the links in the website view
app.set('view engine', 'hbs');//hbs was used to load the table
app.engine('hbs', require('ejs').__express); //this engine allows the app to use both hbs and ejs

//load routers

app.use('/', require('./router/routes'));




app.listen(3000,() => {console.log(`Server is running on http://localhost:${PORT}`)});