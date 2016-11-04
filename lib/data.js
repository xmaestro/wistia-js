/*
 * @module
 * @description
 * Wistia Data API => https://wistia.com/doc/data-api
 */

module.exports = function (apiKey, options) {

    var _util = require('../util.js')(apiKey, options);

    options.api_url = options.apiBaseUrl || 'https://api.wistia.com/';

    var WistiaData = {

        /*
         * @param Callback {any}
         */
        accountRead: function (cb) {

            _util.buildQuery('account', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Callback {any}
         */
        accountStats: function (cb) {

            _util.buildQuery('stats/account', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Event Key {String}
         * @param Callback {any}
         */
        eventRead: function (key, cb) {

            _util.buildQuery('events', {event_key: key}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project hash id {String}
         * @param Callback {any}
         */
        projectShow: function (project_hash_id, cb) {

            _util.buildQuery('projects/' + project_hash_id, {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project data {Object}
         * @param Callback {any}
         */
        projectCreate: function (project_data, cb) {

            _util.buildQuery('projects', project_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Callback {any}
         */
        projectList: function (cb) {

            _util.buildQuery('projects', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Update project Data {Object}
         * @param Callback {any}
         */
        projectUpdate: function (project_id, project_data, cb) {

            if (project_data) {
                project_data._method = 'PUT';
            }

            _util.buildQuery('projects/' + project_id, project_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Callback {any}
         */
        projectDelete: function (project_id, cb) {

            _util.buildQuery('projects/' + project_id, {_method: 'DELETE'}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Project Copy Options {Object}
         * @param Callback {any}
         */
        projectCopy: function (project_id, copy_options, cb) {

            _util.buildQuery('projects/' + project_id + '/copy', copy_options, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Callback {any}
         */
        projectSharingsList: function (project_id, cb) {

            _util.buildQuery('projects/' + project_id + '/sharings', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Sharing ID {String}
         * @param Callback {any}
         */
        projectSharingsShow: function (project_id, sharing_id, cb) {

            _util.buildQuery('projects/' + project_id + '/sharings/' + sharing_id, {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Sharing Data {Object}
         * @param Callback {any}
         */
        projectSharingsCreate: function (project_id, sharing_data, cb) {

            _util.buildQuery('projects/' + project_id + '/sharings', sharing_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Sharing Id {String}
         * @param Callback {any}
         */
        projectSharingsDelete: function (project_id, sharing_id, cb) {

            _util.buildQuery('projects/' + project_id + '/sharings/' + sharing_id, {_method: 'DELETE'}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Project ID {String}
         * @param Sharing ID {String}
         * @param Update sharing Data {Object}
         * @param Callback {any}
         */
        projectSharingsUpdate: function (project_id, sharing_id, project_sharing_data, cb) {

            if (project_sharing_data) {
                project_sharing_data._method = 'PUT';
            }

            _util.buildQuery('projects/' + project_id + '/sharings/' + sharing_id, project_sharing_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        mediaShow: function (media_id, cb) {

            _util.buildQuery('medias/' + media_id, {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Media Copy Options {Object}
         * @param Callback {any}
         */
        mediaCopy: function (media_id, copy_options, cb) {

            if (copy_options) {
                copy_options._method = 'POST';
            }

            _util.buildQuery('medias/' + media_id + '/copy', copy_options, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        mediaShowStats: function (media_id, cb) {

            _util.buildQuery('medias/' + media_id + '/stats', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Update media Data {Object}
         * @param Callback {any}
         */
        mediaUpdate: function (media_hash_id, new_media_data, cb) {

            if (new_media_data) {
                new_media_data._method = 'PUT';
            }

            _util.buildQuery('medias/' + media_hash_id, new_media_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media Hash ID {String}
         * @param Callback {any}
         */
        mediaDelete: function (media_hash_id, cb) {

            _util.buildQuery('medias/' + media_hash_id, {_method: 'delete'}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        customizationsShow: function (media_hash_id, cb) {

            _util.buildQuery('medias/' + media_hash_id + '/customizations', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Customization Data {Object}
         * @param Callback {any}
         */
        customizationsCreate: function (media_hash_id, new_customizations_data, cb) {

            if (new_customizations_data) {
                new_customizations_data._method = 'POST';
            }

            _util.buildQuery('medias/' + media_hash_id + '/customizations', new_customizations_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Customization Data {Object}
         * @param Callback {any}
         */
        customizationsUpdate: function (media_hash_id, new_customizations_data, cb) {

            if (new_customizations_data) {
                new_customizations_data._method = 'PUT';
            }

            _util.buildQuery('medias/' + media_hash_id + '/customizations', new_customizations_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        customizationsDelete: function (media_hash_id, cb) {

            _util.buildQuery('medias/' + media_hash_id + '/customizations', {_method: 'DELETE'}, function (error, data) {

                return cb(error, data);

            });

        },


        /*
         * @param Project ID {String}
         * @param Page no {Int}
         * @param Per Page {Int}
         * @param Callback {any}
         */
        mediaList: function (project_id, page, per_page, cb) {

            var params = {};

            if (project_id) {

                params.project_id = project_id;

            }

            if (page) {

                params.page = page;

            }

            if (per_page) {

                params.per_page = per_page;

            }

            _util.buildQuery('medias', params, function (error, data) {

                return cb(null, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        captionsIndex: function (media_hash_id, cb) {

            _util.buildQuery('medias/' + media_hash_id + '/captions', {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Caption Data {String}
         * @param Callback {any}
         */
        captionsCreate: function (media_hash_id, caption_data, cb) {

            if(caption_data){
                caption_data._method = 'POST';
            }

            _util.buildQuery('medias/' + media_hash_id + '/captions', caption_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Language code {String}
         * @param Callback {any}
         */
        captionsShow: function (media_hash_id, lang_code, cb) {

            if(caption_data){
                caption_data._method = 'POST';
            }

            _util.buildQuery('medias/' + media_hash_id + '/captions/' + lang_code, {}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Caption Data {Object}
         * @param Language code {String}
         * @param Callback {any}
         */
        captionsUpdate: function (media_hash_id, caption_data, lang_code, cb) {

            if(caption_data){
                caption_data._method = 'PUT';
            }

            _util.buildQuery('medias/' + media_hash_id + '/captions/' + lang_code, caption_data, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Language code {String}
         * @param Callback {any}
         */
        captionsDelete: function (media_hash_id, lang_code, cb) {

            _util.buildQuery('medias/' + media_hash_id + '/captions/' + lang_code, {_method:'DELETE'}, function (error, data) {

                return cb(error, data);

            });

        },

        /*
         * @param Media ID {String}
         * @param Callback {any}
         */
        captionsPurchase: function (media_hash_id, lang_code, cb) {

            _util.buildQuery('medias/' + media_hash_id + '/captions/purchase', {}, function (error, data) {

                return cb(error, data);

            });

        }

    }

    return WistiaData;

};
