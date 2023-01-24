require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const indexRouter = require('./routes/index');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});