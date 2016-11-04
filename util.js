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
        buildQuery : function (endPoint, params, cb) {

            //build url
            var url = options.api_url + options.version + '/' + endPoint + "." + options.format;

            url += "?" + "api_password=" + apiKey + "&";

            var reqMethod = 'GET';

            if (typeof params._method != "undefined") {

                reqMethod = params._method;

                delete params._method;

            }

            //Set params
            if (params) {

                var paramKeys = Object.keys(params);

                if (paramKeys.length > 0) {

                    for (var key in paramKeys) {

                        url += paramKeys[key] + "=" + params[paramKeys[key]] + "&";

                    }

                }

            }

            this._sendRequest(encodeURI(url), reqMethod, cb);

        },

        /*
         * @param API url {String}
         * @param Callback {any}
         */
        _sendRequest : function (url, method, cb) {

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

        }

    }

};
