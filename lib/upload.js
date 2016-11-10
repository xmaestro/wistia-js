/*
 * @module
 * @description
 * Wistia Uplaod API => https://wistia.com/doc/upload-api
 */

module.exports = function (apiKey, options) {

    options.api = 'upload';
    var _util = require('../util.js')(apiKey, options);

    var WistiaUpload = {

        /*
         * @param Callback {any}
         */
        upload: function (params, cb) {

            if (params) {
                params._method = 'POST';
            }

            params.formEncoded = true;

            if (typeof params.file != "undefined" || typeof params.url != "undefined") {

                _util.buildQuery('', params, function (error, data) {

                    return cb(error, data);

                });

            } else {

                return cb(new Error('Please provide file or url path!'));

            }

        }

    }

    return WistiaUpload;

};
