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
        WistiaData: function () {
            return require('./lib/data')(apiKey, options)
        },
        //Upload API ==> https://wistia.com/doc/upload-api
        WistiaUpload: function () {
            return require('./lib/upload')(apiKey, options)
        }
    }

}
