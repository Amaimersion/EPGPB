/* Express app. */

import * as express from "express";

const app = express();


/* Middlewares. */

import * as helmet from "helmet";
import * as lusca from "lusca";
import * as compression from "compression";
import * as expressValidator from "express-validator";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as favicon from "serve-favicon";

app.use(helmet());
app.use(lusca.xssProtection(true));
app.use(compression());
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(favicon(`${__dirname}/favicon.ico`));


/* Routes. */

app.get("/", (_req, res) => {
    res.sendFile("access.html", {root: __dirname});
});

// stubs.

app.get("/index.html", (_req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.get("/index.css", (_req, res) => {
    res.sendFile("index.css", {root: __dirname});
});

app.get("/index.js", (_req, res) => {
    res.sendFile("index.js", {root: __dirname});
});

app.get("/access.html", (_req, res) => {
    res.sendFile("access.html", {root: __dirname});
});

app.get("/access.css", (_req, res) => {
    res.sendFile("access.css", {root: __dirname});
});

app.get("/access.js", (_req, res) => {
    res.sendFile("access.js", {root: __dirname});
});

app.get("/request.html", (_req, res) => {
    res.sendFile("request.html", {root: __dirname});
});

app.get("/request.css", (_req, res) => {
    res.sendFile("request.css", {root: __dirname});
});

app.get("/request.js", (_req, res) => {
    res.sendFile("request.js", {root: __dirname});
});

// end stubs.


export default app;
