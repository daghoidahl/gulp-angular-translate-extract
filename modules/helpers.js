'use strict';
var _ = require('lodash');
var stringify = require('json-stable-stringify');

function Helpers() {
    var service = {
        'customStringify': customStringify,
        'escapeRegExp': escapeRegExp
    };

    return service;

    //////////

    function customStringify(val, stringify_options) {
        if (stringify_options) {
            return stringify(val, _.isObject(stringify_options) ?
                stringify_options :
            {
                space: '    ',
                cmp: function (a, b) {
                    var left = a.key, right = b.key;

                    // Stable sort
                    if (left < right) {
                        return -1;
                    }
                    if (left == right) {
                        return 0;
                    } else {
                        return 1;
                    }
                }
            });
        }
        return JSON.stringify(val, null, 4);
    }

    /**
     * Use to escape some char into regex patterns
     */
    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
}

module.exports = new Helpers();
