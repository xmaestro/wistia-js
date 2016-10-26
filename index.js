/*
 * @module
 * @description
 * Main entry point for all Wistia APIs
 */

"use strict";

module.exports = function (apiKey, opts) {

    if (!apiKey) {

        throw new Exception('No key provided!');

    }

    opts = opts || {};

    var options = {

        version: opts.version || 'v1',
        format: opts.format || 'json'

    };

    return {
        //Data API ==> https://wistia.com/doc/data-api
        WistiaData: require('./lib/data')(apiKey, options)
    }

}
