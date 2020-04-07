//variables de entorno con dotenv//
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

// rutas
//const routers = require('./routes/index');
const error404 = require('./routes/errorRouter');
// inicializaciones
const app = express();

// variables

const PORT = process.env.PORT || 3001;
const PUBLIC_FILES = path.join(__dirname, 'public');

//const GALERIA_PATH = path.join(__dirname, 'galeria');
// configuraciones
app.set('port', PORT);

//direcciones estaticas
app.use('/public', express.static(PUBLIC_FILES));
app.use(favicon(path.join(PUBLIC_FILES, 'images', 'favicon.ico')));

app.use(compression());
app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(morgan('dev'));

app.use(error404);

//capturador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.render('error', {
    title: err.message,
    message: err.message
  });
});

app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
