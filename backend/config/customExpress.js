const express = require("express");
const bodyParser = require("body-parser");

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    return app;
};
