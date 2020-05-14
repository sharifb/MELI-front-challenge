const express = require('express');
const app = express();

app.set("PORT", 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const apiRoot = '/api/items';

app.get(apiRoot, (req, res) => {
    const search = req.query.q;
    res.send(`Searched: ${search}`);
});

app.get(`${apiRoot}/:id`, (req, res) => {
    res.send(`ID Searched: ${req.params.id}`);
});

module.exports = app;