//variables de entorno con dotenv//
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const favicon = require('serve-favicon');
const flash = require('connect-flash');
// rutas
//const routers = require('./routes/index');
//const errorHandler = require('./routes/error');
// inicializaciones
const app = express();

// variables

const PORT = process.env.PORT || 3000;
const PUBLIC_FILES = path.join(__dirname, 'public');
const VIEWS = path.join(__dirname, 'views');
//const GALERIA_PATH = path.join(__dirname, 'galeria');
// configuraciones
app.set('port', PORT);
app.set('views', VIEWS);
app.set('view engine', 'pug');

//direcciones estaticas
app.use('/public', express.static(PUBLIC_FILES));
app.use(favicon(path.join(PUBLIC_FILES, 'images', 'favicon.ico')));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(flash());
app.use(morgan('dev'));

app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
