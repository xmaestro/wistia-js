/*
 * @module
 * @description
 * Request utils for module
 */

var request = require('request');

module.exports = function (apiKey, options) {

    return {

        /*
         * @param API endopint {String}
         * @param Params {Object}
         * @param Callback {any}
         */
        buildQuery: function (endPoint, params, cb) {

            //build url

            var url;

            switch (options.api) {

                case 'upload':
                    url = "https://upload.wistia.com/";
                    break;

                case 'data':
                    url = "https://api.wistia.com/" + options.version + '/' + endPoint + "." + options.format;
                    break;
            }

            url += "?" + "api_password=" + apiKey + "&";

            var reqMethod = 'GET';

            if (typeof params._method != "undefined") {

                reqMethod = params._method;

                delete params._method;

            }

            if (typeof params.formEncoded != 'undefined') {

                delete params.formEncoded;

                this._sendRequestUrlEncoded(url, params, cb);

            } else {

                //Set params
                if (params) {

                    var paramKeys = Object.keys(params);

                    if (paramKeys.length > 0) {

                        for (var key in paramKeys) {

                            url += encodeURIComponent(paramKeys[key] + "=" + params[paramKeys[key]]) + "&";

                        }

                    }

                }

                this._sendRequest(encodeURI(url), reqMethod, cb);

            }

        },

        /*
         * @param API url {String}
         * @param Callback {any}
         */
        _sendRequest: function (url, method, cb) {

            request({
                url: url,
                method: method
            }, function (error, response, body) {

                if (error) {
                    return cb(error);
                }

                if (response.statusCode == 200 || response.statusCode == 201) {

                    return cb(null, body);

                } else {

                    return cb(new Error('Server responded with error: ' + response.statusCode));

                }

            })

        },

        /*
         * @param url {string}
         * @param FormData {Object}
         * @param Callback {any}
         */
        _sendRequestUrlEncoded: function (url, formData, cb) {

            request.post({url: url, form: formData}, function (error, response, body) {

                if (error) {
                    return cb(error);
                }

                if (response.statusCode == 200 || response.statusCode == 201) {

                    return cb(null, body);

                } else {

                    return cb(new Error('Server responded with error: ' + response.statusCode));

                }

            })

        }

    }

};
