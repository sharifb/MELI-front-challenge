const Exception = require('../utils/exception');
const makeGetSearchItems = require('./get-search-items');
const makeGetItem = require('./get-item');
const notFound = require('./not-found');
const {
    getMeliSearchItems,
    getMeliItem,
    getMeliItemDescription
} = require('../meli-repository');

const getSearchItems = makeGetSearchItems({ Exception, getMeliSearchItems });
const getItem = makeGetItem({ Exception, getMeliItem, getMeliItemDescription });

const controllers = {
    getSearchItems,
    getItem,
    notFound
};

module.exports = controllers;