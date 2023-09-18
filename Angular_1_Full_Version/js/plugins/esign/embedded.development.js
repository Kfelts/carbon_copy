(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["HelloSign"] = factory();
    else
        root["HelloSign"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId]) {
                /******/
                return installedModules[moduleId].exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.l = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            if (!__webpack_require__.o(exports, name)) {
                /******/
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
                /******/
            }
            /******/
        };
        /******/
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = function(exports) {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
        /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/
        __webpack_require__.t = function(value, mode) {
            /******/
            if (mode & 1) value = __webpack_require__(value);
            /******/
            if (mode & 8) return value;
            /******/
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            /******/
            var ns = Object.create(null);
            /******/
            __webpack_require__.r(ns);
            /******/
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/
            if (mode & 2 && typeof value != 'string')
                for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
            /******/
            return ns;
            /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ?
                /******/
                function getDefault() {
                    return module['default'];
                } :
                /******/
                function getModuleExports() {
                    return module;
                };
            /******/
            __webpack_require__.d(getter, 'a', getter);
            /******/
            return getter;
            /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "";
        /******/
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(__webpack_require__.s = 0);
        /******/
    })
    /************************************************************************/
    /******/
    ({

        /***/
        "./node_modules/common-tags/es/TemplateTag/TemplateTag.js":
            /*!****************************************************************!*\
              !*** ./node_modules/common-tags/es/TemplateTag/TemplateTag.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");

                var _createClass = function() {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }

                    return function(Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) defineProperties(Constructor, staticProps);
                        return Constructor;
                    };
                }();

                var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

                function _taggedTemplateLiteral(strings, raw) {
                    return Object.freeze(Object.defineProperties(strings, {
                        raw: {
                            value: Object.freeze(raw)
                        }
                    }));
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }
                /**
                 * @class TemplateTag
                 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
                 */


                var TemplateTag = function() {
                    /**
                     * constructs a template tag
                     * @constructs TemplateTag
                     * @param  {...Object} [...transformers] - an array or arguments list of transformers
                     * @return {Function}                    - a template tag
                     */
                    function TemplateTag() {
                        var _this = this;

                        for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
                            transformers[_key] = arguments[_key];
                        }

                        _classCallCheck(this, TemplateTag);

                        this.tag = function(strings) {
                            for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                expressions[_key2 - 1] = arguments[_key2];
                            }

                            if (typeof strings === 'function') {
                                // if the first argument passed is a function, assume it is a template tag and return
                                // an intermediary tag that processes the template using the aforementioned tag, passing the
                                // result to our tag
                                return _this.interimTag.bind(_this, strings);
                            }

                            if (typeof strings === 'string') {
                                // if the first argument passed is a string, just transform it
                                return _this.transformEndResult(strings);
                            } // else, return a transformed end result of processing the template with our tag


                            strings = strings.map(_this.transformString.bind(_this));
                            return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
                        }; // if first argument is an array, extrude it as a list of transformers


                        if (transformers.length > 0 && Array.isArray(transformers[0])) {
                            transformers = transformers[0];
                        } // if any transformers are functions, this means they are not initiated - automatically initiate them


                        this.transformers = transformers.map(function(transformer) {
                            return typeof transformer === 'function' ? transformer() : transformer;
                        }); // return an ES2015 template tag

                        return this.tag;
                    }
                    /**
                     * Applies all transformers to a template literal tagged with this method.
                     * If a function is passed as the first argument, assumes the function is a template tag
                     * and applies it to the template, returning a template tag.
                     * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
                     * @param  {...*}                            ...expressions - Optional list of substitution values.
                     * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
                     */


                    _createClass(TemplateTag, [{
                        key: 'interimTag',

                        /**
                         * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
                         * template tag to our own template tag.
                         * @param  {Function}        nextTag          - the received template tag
                         * @param  {Array<String>}   template         - the template to process
                         * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
                         * @return {*}                                - the final processed value
                         */
                        value: function interimTag(previousTag, template) {
                            for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                                substitutions[_key3 - 2] = arguments[_key3];
                            }

                            return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
                        }
                        /**
                         * Performs bulk processing on the tagged template, transforming each substitution and then
                         * concatenating the resulting values into a string.
                         * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
                         * @param  {String}   resultSoFar   - this iteration's result string so far
                         * @param  {String}   remainingPart - the template chunk after the current substitution
                         * @return {String}                 - the result of joining this iteration's processed substitution with the result
                         */

                    }, {
                        key: 'processSubstitutions',
                        value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
                            var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
                            return ''.concat(resultSoFar, substitution, remainingPart);
                        }
                        /**
                         * Iterate through each transformer, applying the transformer's `onString` method to the template
                         * strings before all substitutions are processed.
                         * @param {String}  str - The input string
                         * @return {String}     - The final results of processing each transformer
                         */

                    }, {
                        key: 'transformString',
                        value: function transformString(str) {
                            var cb = function cb(res, transform) {
                                return transform.onString ? transform.onString(res) : res;
                            };

                            return this.transformers.reduce(cb, str);
                        }
                        /**
                         * When a substitution is encountered, iterates through each transformer and applies the transformer's
                         * `onSubstitution` method to the substitution.
                         * @param  {*}      substitution - The current substitution
                         * @param  {String} resultSoFar  - The result up to and excluding this substitution.
                         * @return {*}                   - The final result of applying all substitution transformations.
                         */

                    }, {
                        key: 'transformSubstitution',
                        value: function transformSubstitution(substitution, resultSoFar) {
                            var cb = function cb(res, transform) {
                                return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
                            };

                            return this.transformers.reduce(cb, substitution);
                        }
                        /**
                         * Iterates through each transformer, applying the transformer's `onEndResult` method to the
                         * template literal after all substitutions have finished processing.
                         * @param  {String} endResult - The processed template, just before it is returned from the tag
                         * @return {String}           - The final results of processing each transformer
                         */

                    }, {
                        key: 'transformEndResult',
                        value: function transformEndResult(endResult) {
                            var cb = function cb(res, transform) {
                                return transform.onEndResult ? transform.onEndResult(res) : res;
                            };

                            return this.transformers.reduce(cb, endResult);
                        }
                    }]);

                    return TemplateTag;
                }();

                var _default = TemplateTag;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/TemplateTag/index.js":
            /*!**********************************************************!*\
              !*** ./node_modules/common-tags/es/TemplateTag/index.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _TemplateTag.default;
                    }
                });

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/TemplateTag.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/codeBlock/index.js":
            /*!********************************************************!*\
              !*** ./node_modules/common-tags/es/codeBlock/index.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _html.default;
                    }
                });

                var _html = _interopRequireDefault(__webpack_require__( /*! ../html */ "./node_modules/common-tags/es/html/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaLists/commaLists.js":
            /*!**************************************************************!*\
              !*** ./node_modules/common-tags/es/commaLists/commaLists.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var commaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ','
                }), _stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = commaLists;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaLists/index.js":
            /*!*********************************************************!*\
              !*** ./node_modules/common-tags/es/commaLists/index.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _commaLists.default;
                    }
                });

                var _commaLists = _interopRequireDefault(__webpack_require__( /*! ./commaLists */ "./node_modules/common-tags/es/commaLists/commaLists.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js":
            /*!********************************************************************!*\
              !*** ./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var commaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ',',
                    conjunction: 'and'
                }), _stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = commaListsAnd;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaListsAnd/index.js":
            /*!************************************************************!*\
              !*** ./node_modules/common-tags/es/commaListsAnd/index.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _commaListsAnd.default;
                    }
                });

                var _commaListsAnd = _interopRequireDefault(__webpack_require__( /*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/commaListsAnd.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaListsOr/commaListsOr.js":
            /*!******************************************************************!*\
              !*** ./node_modules/common-tags/es/commaListsOr/commaListsOr.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var commaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ',',
                    conjunction: 'or'
                }), _stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = commaListsOr;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/commaListsOr/index.js":
            /*!***********************************************************!*\
              !*** ./node_modules/common-tags/es/commaListsOr/index.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _commaListsOr.default;
                    }
                });

                var _commaListsOr = _interopRequireDefault(__webpack_require__( /*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/commaListsOr.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/html/html.js":
            /*!**************************************************!*\
              !*** ./node_modules/common-tags/es/html/html.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _splitStringTransformer = _interopRequireDefault(__webpack_require__( /*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

                var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__( /*! ../removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var html = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _removeNonPrintingValuesTransformer.default, _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = html;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/html/index.js":
            /*!***************************************************!*\
              !*** ./node_modules/common-tags/es/html/index.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _html.default;
                    }
                });

                var _html = _interopRequireDefault(__webpack_require__( /*! ./html */ "./node_modules/common-tags/es/html/html.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/index.js":
            /*!**********************************************!*\
              !*** ./node_modules/common-tags/es/index.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "TemplateTag", {
                    enumerable: true,
                    get: function get() {
                        return _TemplateTag2.default;
                    }
                });
                Object.defineProperty(exports, "trimResultTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _trimResultTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "stripIndentTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndentTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "replaceResultTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _replaceResultTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "replaceSubstitutionTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _replaceSubstitutionTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "replaceStringTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _replaceStringTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "inlineArrayTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _inlineArrayTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "splitStringTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _splitStringTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "removeNonPrintingValuesTransformer", {
                    enumerable: true,
                    get: function get() {
                        return _removeNonPrintingValuesTransformer2.default;
                    }
                });
                Object.defineProperty(exports, "commaLists", {
                    enumerable: true,
                    get: function get() {
                        return _commaLists2.default;
                    }
                });
                Object.defineProperty(exports, "commaListsAnd", {
                    enumerable: true,
                    get: function get() {
                        return _commaListsAnd2.default;
                    }
                });
                Object.defineProperty(exports, "commaListsOr", {
                    enumerable: true,
                    get: function get() {
                        return _commaListsOr2.default;
                    }
                });
                Object.defineProperty(exports, "html", {
                    enumerable: true,
                    get: function get() {
                        return _html2.default;
                    }
                });
                Object.defineProperty(exports, "codeBlock", {
                    enumerable: true,
                    get: function get() {
                        return _codeBlock2.default;
                    }
                });
                Object.defineProperty(exports, "source", {
                    enumerable: true,
                    get: function get() {
                        return _source2.default;
                    }
                });
                Object.defineProperty(exports, "safeHtml", {
                    enumerable: true,
                    get: function get() {
                        return _safeHtml2.default;
                    }
                });
                Object.defineProperty(exports, "oneLine", {
                    enumerable: true,
                    get: function get() {
                        return _oneLine2.default;
                    }
                });
                Object.defineProperty(exports, "oneLineTrim", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineTrim2.default;
                    }
                });
                Object.defineProperty(exports, "oneLineCommaLists", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaLists2.default;
                    }
                });
                Object.defineProperty(exports, "oneLineCommaListsOr", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaListsOr2.default;
                    }
                });
                Object.defineProperty(exports, "oneLineCommaListsAnd", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaListsAnd2.default;
                    }
                });
                Object.defineProperty(exports, "inlineLists", {
                    enumerable: true,
                    get: function get() {
                        return _inlineLists2.default;
                    }
                });
                Object.defineProperty(exports, "oneLineInlineLists", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineInlineLists2.default;
                    }
                });
                Object.defineProperty(exports, "stripIndent", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndent2.default;
                    }
                });
                Object.defineProperty(exports, "stripIndents", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndents2.default;
                    }
                });

                var _TemplateTag2 = _interopRequireDefault(__webpack_require__( /*! ./TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _trimResultTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _stripIndentTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _replaceResultTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                var _replaceSubstitutionTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));

                var _replaceStringTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/index.js"));

                var _inlineArrayTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _splitStringTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

                var _removeNonPrintingValuesTransformer2 = _interopRequireDefault(__webpack_require__( /*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js"));

                var _commaLists2 = _interopRequireDefault(__webpack_require__( /*! ./commaLists */ "./node_modules/common-tags/es/commaLists/index.js"));

                var _commaListsAnd2 = _interopRequireDefault(__webpack_require__( /*! ./commaListsAnd */ "./node_modules/common-tags/es/commaListsAnd/index.js"));

                var _commaListsOr2 = _interopRequireDefault(__webpack_require__( /*! ./commaListsOr */ "./node_modules/common-tags/es/commaListsOr/index.js"));

                var _html2 = _interopRequireDefault(__webpack_require__( /*! ./html */ "./node_modules/common-tags/es/html/index.js"));

                var _codeBlock2 = _interopRequireDefault(__webpack_require__( /*! ./codeBlock */ "./node_modules/common-tags/es/codeBlock/index.js"));

                var _source2 = _interopRequireDefault(__webpack_require__( /*! ./source */ "./node_modules/common-tags/es/source/index.js"));

                var _safeHtml2 = _interopRequireDefault(__webpack_require__( /*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/index.js"));

                var _oneLine2 = _interopRequireDefault(__webpack_require__( /*! ./oneLine */ "./node_modules/common-tags/es/oneLine/index.js"));

                var _oneLineTrim2 = _interopRequireDefault(__webpack_require__( /*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/index.js"));

                var _oneLineCommaLists2 = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/index.js"));

                var _oneLineCommaListsOr2 = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/index.js"));

                var _oneLineCommaListsAnd2 = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js"));

                var _inlineLists2 = _interopRequireDefault(__webpack_require__( /*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/index.js"));

                var _oneLineInlineLists2 = _interopRequireDefault(__webpack_require__( /*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/index.js"));

                var _stripIndent2 = _interopRequireDefault(__webpack_require__( /*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/index.js"));

                var _stripIndents2 = _interopRequireDefault(__webpack_require__( /*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/inlineArrayTransformer/index.js":
            /*!*********************************************************************!*\
              !*** ./node_modules/common-tags/es/inlineArrayTransformer/index.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _inlineArrayTransformer.default;
                    }
                });

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ./inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js":
            /*!**************************************************************************************!*\
              !*** ./node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

                var defaults = {
                    separator: '',
                    conjunction: '',
                    serial: false
                };
                /**
                 * Converts an array substitution to a string containing a list
                 * @param  {String} [opts.separator = ''] - the character that separates each item
                 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
                 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
                 *
                 * @return {Object}                     - a TemplateTag transformer
                 */

                var inlineArrayTransformer = function inlineArrayTransformer() {
                    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
                    return {
                        onSubstitution: function onSubstitution(substitution, resultSoFar) {
                            // only operate on arrays
                            if (Array.isArray(substitution)) {
                                var arrayLength = substitution.length;
                                var separator = opts.separator;
                                var conjunction = opts.conjunction;
                                var serial = opts.serial; // join each item in the array into a string where each item is separated by separator
                                // be sure to maintain indentation

                                var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);

                                if (indent) {
                                    substitution = substitution.join(separator + indent[1]);
                                } else {
                                    substitution = substitution.join(separator + ' ');
                                } // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution


                                if (conjunction && arrayLength > 1) {
                                    var separatorIndex = substitution.lastIndexOf(separator);
                                    substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
                                }
                            }

                            return substitution;
                        }
                    };
                };

                var _default = inlineArrayTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/inlineLists/index.js":
            /*!**********************************************************!*\
              !*** ./node_modules/common-tags/es/inlineLists/index.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _inlineLists.default;
                    }
                });

                var _inlineLists = _interopRequireDefault(__webpack_require__( /*! ./inlineLists */ "./node_modules/common-tags/es/inlineLists/inlineLists.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/inlineLists/inlineLists.js":
            /*!****************************************************************!*\
              !*** ./node_modules/common-tags/es/inlineLists/inlineLists.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var inlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = inlineLists;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLine/index.js":
            /*!******************************************************!*\
              !*** ./node_modules/common-tags/es/oneLine/index.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLine.default;
                    }
                });

                var _oneLine = _interopRequireDefault(__webpack_require__( /*! ./oneLine */ "./node_modules/common-tags/es/oneLine/oneLine.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLine/oneLine.js":
            /*!********************************************************!*\
              !*** ./node_modules/common-tags/es/oneLine/oneLine.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLine = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n(?:\s*))+/g, ' '), _trimResultTransformer.default);
                var _default = oneLine;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaLists/index.js":
            /*!****************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaLists/index.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaLists.default;
                    }
                });

                var _oneLineCommaLists = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaLists */ "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js":
            /*!****************************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLineCommaLists = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ','
                }), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
                var _default = oneLineCommaLists;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaListsAnd/index.js":
            /*!*******************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/index.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaListsAnd.default;
                    }
                });

                var _oneLineCommaListsAnd = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaListsAnd */ "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js":
            /*!**********************************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js ***!
              \**********************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLineCommaListsAnd = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ',',
                    conjunction: 'and'
                }), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
                var _default = oneLineCommaListsAnd;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaListsOr/index.js":
            /*!******************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaListsOr/index.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineCommaListsOr.default;
                    }
                });

                var _oneLineCommaListsOr = _interopRequireDefault(__webpack_require__( /*! ./oneLineCommaListsOr */ "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js":
            /*!********************************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js ***!
              \********************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLineCommaListsOr = new _TemplateTag.default((0, _inlineArrayTransformer.default)({
                    separator: ',',
                    conjunction: 'or'
                }), (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
                var _default = oneLineCommaListsOr;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineInlineLists/index.js":
            /*!*****************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineInlineLists/index.js ***!
              \*****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineInlineLists.default;
                    }
                });

                var _oneLineInlineLists = _interopRequireDefault(__webpack_require__( /*! ./oneLineInlineLists */ "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js":
            /*!******************************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js ***!
              \******************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLineInlineLists = new _TemplateTag.default(_inlineArrayTransformer.default, (0, _replaceResultTransformer.default)(/(?:\s+)/g, ' '), _trimResultTransformer.default);
                var _default = oneLineInlineLists;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineTrim/index.js":
            /*!**********************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineTrim/index.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _oneLineTrim.default;
                    }
                });

                var _oneLineTrim = _interopRequireDefault(__webpack_require__( /*! ./oneLineTrim */ "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js":
            /*!****************************************************************!*\
              !*** ./node_modules/common-tags/es/oneLineTrim/oneLineTrim.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var oneLineTrim = new _TemplateTag.default((0, _replaceResultTransformer.default)(/(?:\n\s*)/g, ''), _trimResultTransformer.default);
                var _default = oneLineTrim;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js":
            /*!*********************************************************************************!*\
              !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/index.js ***!
              \*********************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _removeNonPrintingValuesTransformer.default;
                    }
                });

                var _removeNonPrintingValuesTransformer = _interopRequireDefault(__webpack_require__( /*! ./removeNonPrintingValuesTransformer */ "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js":
            /*!**************************************************************************************************************!*\
              !*** ./node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js ***!
              \**************************************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");

                __webpack_require__( /*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");

                var isValidValue = function isValidValue(x) {
                    return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
                };

                var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
                    return {
                        onSubstitution: function onSubstitution(substitution) {
                            if (Array.isArray(substitution)) {
                                return substitution.filter(isValidValue);
                            }

                            if (isValidValue(substitution)) {
                                return substitution;
                            }

                            return '';
                        }
                    };
                };

                var _default = removeNonPrintingValuesTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceResultTransformer/index.js":
            /*!***********************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceResultTransformer/index.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _replaceResultTransformer.default;
                    }
                });

                var _replaceResultTransformer = _interopRequireDefault(__webpack_require__( /*! ./replaceResultTransformer */ "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js":
            /*!******************************************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js ***!
              \******************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                /**
                 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
                 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
                 * @param  {*}               replaceWith - the replacement value
                 * @return {Object}                      - a TemplateTag transformer
                 */
                var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
                    return {
                        onEndResult: function onEndResult(endResult) {
                            if (replaceWhat == null || replaceWith == null) {
                                throw new Error('replaceResultTransformer requires at least 2 arguments.');
                            }

                            return endResult.replace(replaceWhat, replaceWith);
                        }
                    };
                };

                var _default = replaceResultTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceStringTransformer/index.js":
            /*!***********************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceStringTransformer/index.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _replaceStringTransformer.default;
                    }
                });

                var _replaceStringTransformer = _interopRequireDefault(__webpack_require__( /*! ./replaceStringTransformer */ "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js":
            /*!******************************************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceStringTransformer/replaceStringTransformer.js ***!
              \******************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
                    return {
                        onString: function onString(str) {
                            if (replaceWhat == null || replaceWith == null) {
                                throw new Error('replaceStringTransformer requires at least 2 arguments.');
                            }

                            return str.replace(replaceWhat, replaceWith);
                        }
                    };
                };

                var _default = replaceStringTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js":
            /*!*****************************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js ***!
              \*****************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _replaceSubstitutionTransformer.default;
                    }
                });

                var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__( /*! ./replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js":
            /*!******************************************************************************************************!*\
              !*** ./node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js ***!
              \******************************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
                    return {
                        onSubstitution: function onSubstitution(substitution, resultSoFar) {
                            if (replaceWhat == null || replaceWith == null) {
                                throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
                            } // Do not touch if null or undefined


                            if (substitution == null) {
                                return substitution;
                            } else {
                                return substitution.toString().replace(replaceWhat, replaceWith);
                            }
                        }
                    };
                };

                var _default = replaceSubstitutionTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/safeHtml/index.js":
            /*!*******************************************************!*\
              !*** ./node_modules/common-tags/es/safeHtml/index.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _safeHtml.default;
                    }
                });

                var _safeHtml = _interopRequireDefault(__webpack_require__( /*! ./safeHtml */ "./node_modules/common-tags/es/safeHtml/safeHtml.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/safeHtml/safeHtml.js":
            /*!**********************************************************!*\
              !*** ./node_modules/common-tags/es/safeHtml/safeHtml.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _inlineArrayTransformer = _interopRequireDefault(__webpack_require__( /*! ../inlineArrayTransformer */ "./node_modules/common-tags/es/inlineArrayTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                var _splitStringTransformer = _interopRequireDefault(__webpack_require__( /*! ../splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/index.js"));

                var _replaceSubstitutionTransformer = _interopRequireDefault(__webpack_require__( /*! ../replaceSubstitutionTransformer */ "./node_modules/common-tags/es/replaceSubstitutionTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var safeHtml = new _TemplateTag.default((0, _splitStringTransformer.default)('\n'), _inlineArrayTransformer.default, _stripIndentTransformer.default, _trimResultTransformer.default, (0, _replaceSubstitutionTransformer.default)(/&/g, '&amp;'), (0, _replaceSubstitutionTransformer.default)(/</g, '&lt;'), (0, _replaceSubstitutionTransformer.default)(/>/g, '&gt;'), (0, _replaceSubstitutionTransformer.default)(/"/g, '&quot;'), (0, _replaceSubstitutionTransformer.default)(/'/g, '&#x27;'), (0, _replaceSubstitutionTransformer.default)(/`/g, '&#x60;'));
                var _default = safeHtml;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/source/index.js":
            /*!*****************************************************!*\
              !*** ./node_modules/common-tags/es/source/index.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _html.default;
                    }
                });

                var _html = _interopRequireDefault(__webpack_require__( /*! ../html */ "./node_modules/common-tags/es/html/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/splitStringTransformer/index.js":
            /*!*********************************************************************!*\
              !*** ./node_modules/common-tags/es/splitStringTransformer/index.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _splitStringTransformer.default;
                    }
                });

                var _splitStringTransformer = _interopRequireDefault(__webpack_require__( /*! ./splitStringTransformer */ "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js":
            /*!**************************************************************************************!*\
              !*** ./node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

                __webpack_require__( /*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

                __webpack_require__( /*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");

                var splitStringTransformer = function splitStringTransformer(splitBy) {
                    return {
                        onSubstitution: function onSubstitution(substitution, resultSoFar) {
                            if (splitBy != null && typeof splitBy === 'string') {
                                if (typeof substitution === 'string' && substitution.includes(splitBy)) {
                                    substitution = substitution.split(splitBy);
                                }
                            } else {
                                throw new Error('You need to specify a string character to split by.');
                            }

                            return substitution;
                        }
                    };
                };

                var _default = splitStringTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndent/index.js":
            /*!**********************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndent/index.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndent.default;
                    }
                });

                var _stripIndent = _interopRequireDefault(__webpack_require__( /*! ./stripIndent */ "./node_modules/common-tags/es/stripIndent/stripIndent.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndent/stripIndent.js":
            /*!****************************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndent/stripIndent.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var stripIndent = new _TemplateTag.default(_stripIndentTransformer.default, _trimResultTransformer.default);
                var _default = stripIndent;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndentTransformer/index.js":
            /*!*********************************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndentTransformer/index.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndentTransformer.default;
                    }
                });

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ./stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js":
            /*!**************************************************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

                __webpack_require__( /*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

                __webpack_require__( /*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

                function _toConsumableArray(arr) {
                    if (Array.isArray(arr)) {
                        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                            arr2[i] = arr[i];
                        }

                        return arr2;
                    } else {
                        return Array.from(arr);
                    }
                }
                /**
                 * strips indentation from a template literal
                 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
                 * @return {Object}                  - a TemplateTag transformer
                 */


                var stripIndentTransformer = function stripIndentTransformer() {
                    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
                    return {
                        onEndResult: function onEndResult(endResult) {
                            if (type === 'initial') {
                                // remove the shortest leading indentation from each line
                                var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
                                var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function(el) {
                                    return el.length;
                                })));

                                if (indent) {
                                    var regexp = new RegExp('^.{' + indent + '}', 'gm');
                                    return endResult.replace(regexp, '');
                                }

                                return endResult;
                            }

                            if (type === 'all') {
                                // remove all indentation from each line
                                return endResult.replace(/^[^\S\n]+/gm, '');
                            }

                            throw new Error('Unknown type: ' + type);
                        }
                    };
                };

                var _default = stripIndentTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndents/index.js":
            /*!***********************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndents/index.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _stripIndents.default;
                    }
                });

                var _stripIndents = _interopRequireDefault(__webpack_require__( /*! ./stripIndents */ "./node_modules/common-tags/es/stripIndents/stripIndents.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/stripIndents/stripIndents.js":
            /*!******************************************************************!*\
              !*** ./node_modules/common-tags/es/stripIndents/stripIndents.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _TemplateTag = _interopRequireDefault(__webpack_require__( /*! ../TemplateTag */ "./node_modules/common-tags/es/TemplateTag/index.js"));

                var _stripIndentTransformer = _interopRequireDefault(__webpack_require__( /*! ../stripIndentTransformer */ "./node_modules/common-tags/es/stripIndentTransformer/index.js"));

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ../trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/index.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                var stripIndents = new _TemplateTag.default((0, _stripIndentTransformer.default)('all'), _trimResultTransformer.default);
                var _default = stripIndents;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/trimResultTransformer/index.js":
            /*!********************************************************************!*\
              !*** ./node_modules/common-tags/es/trimResultTransformer/index.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "default", {
                    enumerable: true,
                    get: function get() {
                        return _trimResultTransformer.default;
                    }
                });

                var _trimResultTransformer = _interopRequireDefault(__webpack_require__( /*! ./trimResultTransformer */ "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /***/
            }),

        /***/
        "./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js":
            /*!************************************************************************************!*\
              !*** ./node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js ***!
              \************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                /**
                 * TemplateTag transformer that trims whitespace on the end result of a tagged template
                 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
                 * @return {Object}           - a TemplateTag transformer
                 */
                var trimResultTransformer = function trimResultTransformer() {
                    var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    return {
                        onEndResult: function onEndResult(endResult) {
                            if (side === '') {
                                return endResult.trim();
                            }

                            side = side.toLowerCase();

                            if (side === 'start' || side === 'left') {
                                return endResult.replace(/^\s*/, '');
                            }

                            if (side === 'end' || side === 'right') {
                                return endResult.replace(/\s*$/, '');
                            }

                            throw new Error('Side not supported: ' + side);
                        }
                    };
                };

                var _default = trimResultTransformer;
                exports.default = _default;

                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_a-function.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_a-function.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = function(it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_add-to-unscopables.js":
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 22.1.3.31 Array.prototype[@@unscopables]
                var UNSCOPABLES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
                var ArrayProto = Array.prototype;
                if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
                module.exports = function(key) {
                    ArrayProto[UNSCOPABLES][key] = true;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_advance-string-index.js":
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var at = __webpack_require__( /*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

                // `AdvanceStringIndex` abstract operation
                // https://tc39.github.io/ecma262/#sec-advancestringindex
                module.exports = function(S, index, unicode) {
                    return index + (unicode ? at(S, index).length : 1);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_an-object.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_an-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                module.exports = function(it) {
                    if (!isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_array-includes.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_array-includes.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // false -> Array#indexOf
                // true  -> Array#includes
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
                var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
                var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
                module.exports = function(IS_INCLUDES) {
                    return function($this, el, fromIndex) {
                        var O = toIObject($this);
                        var length = toLength(O.length);
                        var index = toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el)
                            while (length > index) {
                                value = O[index++];
                                // eslint-disable-next-line no-self-compare
                                if (value != value) return true;
                                // Array#indexOf ignores holes, Array#includes - not
                            } else
                                for (; length > index; index++)
                                    if (IS_INCLUDES || index in O) {
                                        if (O[index] === el) return IS_INCLUDES || index || 0;
                                    }
                        return !IS_INCLUDES && -1;
                    };
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_classof.js":
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_classof.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // getting tag from 19.1.3.6 Object.prototype.toString()
                var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
                var TAG = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
                // ES3 wrong here
                var ARG = cof(function() {
                    return arguments;
                }()) == 'Arguments';

                // fallback for IE11 Script Access Denied error
                var tryGet = function(it, key) {
                    try {
                        return it[key];
                    } catch (e) { /* empty */ }
                };

                module.exports = function(it) {
                    var O, T, B;
                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                        // @@toStringTag case
                        :
                        typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
                        // builtinTag case
                        :
                        ARG ? cof(O)
                        // ES3 arguments fallback
                        :
                        (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_cof.js":
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_cof.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                var toString = {}.toString;

                module.exports = function(it) {
                    return toString.call(it).slice(8, -1);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_core.js":
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_core.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                var core = module.exports = {
                    version: '2.6.5'
                };
                if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_create-property.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_create-property.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var $defineProperty = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
                var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

                module.exports = function(object, index, value) {
                    if (index in object) $defineProperty.f(object, index, createDesc(0, value));
                    else object[index] = value;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_ctx.js":
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_ctx.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // optional / simple context binding
                var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
                module.exports = function(fn, that, length) {
                    aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function(a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function(a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function(a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function( /* ...args */ ) {
                        return fn.apply(that, arguments);
                    };
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_defined.js":
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_defined.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                // 7.2.1 RequireObjectCoercible(argument)
                module.exports = function(it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_descriptors.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_descriptors.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // Thank's IE8 for his funny defineProperty
                module.exports = !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
                    return Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a != 7;
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_dom-create.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_dom-create.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
                // typeof document.createElement is 'object' in old IE
                var is = isObject(document) && isObject(document.createElement);
                module.exports = function(it) {
                    return is ? document.createElement(it) : {};
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_enum-bug-keys.js":
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                // IE 8- don't enum bug keys
                module.exports = (
                    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
                ).split(',');


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_enum-keys.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_enum-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // all enumerable object keys, includes symbols
                var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
                var gOPS = __webpack_require__( /*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
                var pIE = __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
                module.exports = function(it) {
                    var result = getKeys(it);
                    var getSymbols = gOPS.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = pIE.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i)
                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                    }
                    return result;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_export.js":
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_export.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
                var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
                var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
                var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
                var PROTOTYPE = 'prototype';

                var $export = function(type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
                    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
                    var key, own, out, exp;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        // export native or passed
                        out = (own ? target : source)[key];
                        // bind timers to global for call from export context
                        exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                        // extend global
                        if (target) redefine(target, key, out, type & $export.U);
                        // export
                        if (exports[key] != out) hide(exports, key, exp);
                        if (IS_PROTO && expProto[key] != out) expProto[key] = out;
                    }
                };
                global.core = core;
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                module.exports = $export;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_fails-is-regexp.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var MATCH = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
                module.exports = function(KEY) {
                    var re = /./;
                    try {
                        '/./' [KEY](re);
                    } catch (e) {
                        try {
                            re[MATCH] = false;
                            return !'/./' [KEY](re);
                        } catch (f) { /* empty */ }
                    }
                    return true;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_fails.js":
            /*!************************************************!*\
              !*** ./node_modules/core-js/modules/_fails.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = function(exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_fix-re-wks.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                __webpack_require__( /*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
                var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
                var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
                var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
                var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
                var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

                var SPECIES = wks('species');

                var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
                    // #replace needs built-in support for named groups.
                    // #match works fine because it just return the exec results, even if it has
                    // a "grops" property.
                    var re = /./;
                    re.exec = function() {
                        var result = [];
                        result.groups = {
                            a: '7'
                        };
                        return result;
                    };
                    return ''.replace(re, '$<a>') !== '7';
                });

                var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function() {
                    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
                    var re = /(?:)/;
                    var originalExec = re.exec;
                    re.exec = function() {
                        return originalExec.apply(this, arguments);
                    };
                    var result = 'ab'.split(re);
                    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
                })();

                module.exports = function(KEY, length, exec) {
                    var SYMBOL = wks(KEY);

                    var DELEGATES_TO_SYMBOL = !fails(function() {
                        // String methods call symbol-named RegEp methods
                        var O = {};
                        O[SYMBOL] = function() {
                            return 7;
                        };
                        return '' [KEY](O) != 7;
                    });

                    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                        // Symbol-named RegExp methods call .exec
                        var execCalled = false;
                        var re = /a/;
                        re.exec = function() {
                            execCalled = true;
                            return null;
                        };
                        if (KEY === 'split') {
                            // RegExp[@@split] doesn't call the regex's exec method, but first creates
                            // a new one. We need to return the patched regex when creating the new one.
                            re.constructor = {};
                            re.constructor[SPECIES] = function() {
                                return re;
                            };
                        }
                        re[SYMBOL]('');
                        return !execCalled;
                    }) : undefined;

                    if (!DELEGATES_TO_SYMBOL ||
                        !DELEGATES_TO_EXEC ||
                        (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                        (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
                    ) {
                        var nativeRegExpMethod = /./ [SYMBOL];
                        var fns = exec(
                            defined,
                            SYMBOL,
                            '' [KEY],
                            function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                                if (regexp.exec === regexpExec) {
                                    if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                        // The native String method already delegates to @@method (this
                                        // polyfilled function), leasing to infinite recursion.
                                        // We avoid it by directly calling the native @@method method.
                                        return {
                                            done: true,
                                            value: nativeRegExpMethod.call(regexp, str, arg2)
                                        };
                                    }
                                    return {
                                        done: true,
                                        value: nativeMethod.call(str, regexp, arg2)
                                    };
                                }
                                return {
                                    done: false
                                };
                            }
                        );
                        var strfn = fns[0];
                        var rxfn = fns[1];

                        redefine(String.prototype, KEY, strfn);
                        hide(RegExp.prototype, SYMBOL, length == 2
                            // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                            // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                            ?
                            function(string, arg) {
                                return rxfn.call(string, this, arg);
                            }
                            // 21.2.5.6 RegExp.prototype[@@match](string)
                            // 21.2.5.9 RegExp.prototype[@@search](string)
                            :
                            function(string) {
                                return rxfn.call(string, this);
                            }
                        );
                    }
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_flags.js":
            /*!************************************************!*\
              !*** ./node_modules/core-js/modules/_flags.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                // 21.2.5.3 get RegExp.prototype.flags
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                module.exports = function() {
                    var that = anObject(this);
                    var result = '';
                    if (that.global) result += 'g';
                    if (that.ignoreCase) result += 'i';
                    if (that.multiline) result += 'm';
                    if (that.unicode) result += 'u';
                    if (that.sticky) result += 'y';
                    return result;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_function-to-string.js":
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/_function-to-string.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_global.js":
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_global.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
                    window : typeof self != 'undefined' && self.Math == Math ? self
                    // eslint-disable-next-line no-new-func
                    :
                    Function('return this')();
                if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_has.js":
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_has.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                var hasOwnProperty = {}.hasOwnProperty;
                module.exports = function(it, key) {
                    return hasOwnProperty.call(it, key);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_hide.js":
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_hide.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
                var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
                module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function(object, key, value) {
                    return dP.f(object, key, createDesc(1, value));
                } : function(object, key, value) {
                    object[key] = value;
                    return object;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_html.js":
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_html.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var document = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
                module.exports = document && document.documentElement;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_ie8-dom-define.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                module.exports = !__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
                    return Object.defineProperty(__webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a != 7;
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_inherit-if-required.js":
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var setPrototypeOf = __webpack_require__( /*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
                module.exports = function(that, target, C) {
                    var S = target.constructor;
                    var P;
                    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                        setPrototypeOf(that, P);
                    }
                    return that;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iobject.js":
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_iobject.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
                // eslint-disable-next-line no-prototype-builtins
                module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
                    return cof(it) == 'String' ? it.split('') : Object(it);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_is-array-iter.js":
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // check on default Array iterator
                var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
                var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
                var ArrayProto = Array.prototype;

                module.exports = function(it) {
                    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_is-array.js":
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/_is-array.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.2.2 IsArray(argument)
                var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
                module.exports = Array.isArray || function isArray(arg) {
                    return cof(arg) == 'Array';
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_is-object.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_is-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = function(it) {
                    return typeof it === 'object' ? it !== null : typeof it === 'function';
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_is-regexp.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_is-regexp.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.2.8 IsRegExp(argument)
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
                var MATCH = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
                module.exports = function(it) {
                    var isRegExp;
                    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iter-call.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-call.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // call something on iterator step with safe closing on error
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                module.exports = function(iterator, fn, value, entries) {
                    try {
                        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) anObject(ret.call(iterator));
                        throw e;
                    }
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iter-create.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-create.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var create = __webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
                var descriptor = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
                var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
                var IteratorPrototype = {};

                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function() {
                    return this;
                });

                module.exports = function(Constructor, NAME, next) {
                    Constructor.prototype = create(IteratorPrototype, {
                        next: descriptor(1, next)
                    });
                    setToStringTag(Constructor, NAME + ' Iterator');
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iter-define.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-define.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js");
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
                var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
                var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
                var $iterCreate = __webpack_require__( /*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
                var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
                var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
                var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';

                var returnThis = function() {
                    return this;
                };

                module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    $iterCreate(Constructor, NAME, next);
                    var getMethod = function(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
                    };
                    var TAG = NAME + ' Iterator';
                    var DEF_VALUES = DEFAULT == VALUES;
                    var VALUES_BUG = false;
                    var proto = Base.prototype;
                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                    var $default = $native || getMethod(DEFAULT);
                    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                    var methods, key, IteratorPrototype;
                    // Fix native
                    if ($anyNative) {
                        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    Iterators[NAME] = $default;
                    Iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries
                        };
                        if (FORCED)
                            for (key in methods) {
                                if (!(key in proto)) redefine(proto, key, methods[key]);
                            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iter-detect.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-detect.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
                var SAFE_CLOSING = false;

                try {
                    var riter = [7][ITERATOR]();
                    riter['return'] = function() {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                    Array.from(riter, function() {
                        throw 2;
                    });
                } catch (e) { /* empty */ }

                module.exports = function(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR]();
                        iter.next = function() {
                            return {
                                done: safe = true
                            };
                        };
                        arr[ITERATOR] = function() {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) { /* empty */ }
                    return safe;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iter-step.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iter-step.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = function(done, value) {
                    return {
                        value: value,
                        done: !!done
                    };
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_iterators.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_iterators.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = {};


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_library.js":
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_library.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = false;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_meta.js":
            /*!***********************************************!*\
              !*** ./node_modules/core-js/modules/_meta.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var META = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var setDesc = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                var id = 0;
                var isExtensible = Object.isExtensible || function() {
                    return true;
                };
                var FREEZE = !__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
                    return isExtensible(Object.preventExtensions({}));
                });
                var setMeta = function(it) {
                    setDesc(it, META, {
                        value: {
                            i: 'O' + ++id, // object ID
                            w: {} // weak collections IDs
                        }
                    });
                };
                var fastKey = function(it, create) {
                    // return primitive with prefix
                    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                    if (!has(it, META)) {
                        // can't set metadata to uncaught frozen object
                        if (!isExtensible(it)) return 'F';
                        // not necessary to add metadata
                        if (!create) return 'E';
                        // add missing metadata
                        setMeta(it);
                        // return object ID
                    }
                    return it[META].i;
                };
                var getWeak = function(it, create) {
                    if (!has(it, META)) {
                        // can't set metadata to uncaught frozen object
                        if (!isExtensible(it)) return true;
                        // not necessary to add metadata
                        if (!create) return false;
                        // add missing metadata
                        setMeta(it);
                        // return hash weak collections IDs
                    }
                    return it[META].w;
                };
                // add metadata on freeze-family methods calling
                var onFreeze = function(it) {
                    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                    return it;
                };
                var meta = module.exports = {
                    KEY: META,
                    NEED: false,
                    fastKey: fastKey,
                    getWeak: getWeak,
                    onFreeze: onFreeze
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-create.js":
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_object-create.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var dPs = __webpack_require__( /*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
                var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
                var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
                var Empty = function() { /* empty */ };
                var PROTOTYPE = 'prototype';

                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var createDict = function() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = __webpack_require__( /*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
                    var i = enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    __webpack_require__( /*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    createDict = iframeDocument.F;
                    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                    return createDict();
                };

                module.exports = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE] = anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = createDict();
                    return Properties === undefined ? result : dPs(result, Properties);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-dp.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-dp.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
                var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
                var dP = Object.defineProperty;

                exports.f = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                    anObject(O);
                    P = toPrimitive(P, true);
                    anObject(Attributes);
                    if (IE8_DOM_DEFINE) try {
                        return dP(O, P, Attributes);
                    } catch (e) { /* empty */ }
                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                    if ('value' in Attributes) O[P] = Attributes.value;
                    return O;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-dps.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-dps.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

                module.exports = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
                    anObject(O);
                    var keys = getKeys(Properties);
                    var length = keys.length;
                    var i = 0;
                    var P;
                    while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                    return O;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-gopd.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopd.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var pIE = __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
                var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
                var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
                var gOPD = Object.getOwnPropertyDescriptor;

                exports.f = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
                    O = toIObject(O);
                    P = toPrimitive(P, true);
                    if (IE8_DOM_DEFINE) try {
                        return gOPD(O, P);
                    } catch (e) { /* empty */ }
                    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-gopn-ext.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
                var gOPN = __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
                var toString = {}.toString;

                var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
                    Object.getOwnPropertyNames(window) : [];

                var getWindowNames = function(it) {
                    try {
                        return gOPN(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };

                module.exports.f = function getOwnPropertyNames(it) {
                    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-gopn.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gopn.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var $keys = __webpack_require__( /*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
                var hiddenKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

                exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return $keys(O, hiddenKeys);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-gops.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gops.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                exports.f = Object.getOwnPropertySymbols;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-gpo.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-gpo.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
                var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
                var ObjectProto = Object.prototype;

                module.exports = Object.getPrototypeOf || function(O) {
                    O = toObject(O);
                    if (has(O, IE_PROTO)) return O[IE_PROTO];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-keys-internal.js":
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
                var arrayIndexOf = __webpack_require__( /*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
                var IE_PROTO = __webpack_require__( /*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

                module.exports = function(object, names) {
                    var O = toIObject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O)
                        if (key != IE_PROTO) has(O, key) && result.push(key);
                    // Don't enum bug & hidden keys
                    while (names.length > i)
                        if (has(O, key = names[i++])) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    return result;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-keys.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_object-keys.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var $keys = __webpack_require__( /*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
                var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

                module.exports = Object.keys || function keys(O) {
                    return $keys(O, enumBugKeys);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-pie.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-pie.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                exports.f = {}.propertyIsEnumerable;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_object-sap.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_object-sap.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // most Object methods by ES6 should accept primitives
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
                var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                module.exports = function(KEY, exec) {
                    var fn = (core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    $export($export.S + $export.F * fails(function() {
                        fn(1);
                    }), 'Object', exp);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_property-desc.js":
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/_property-desc.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = function(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_redefine.js":
            /*!***************************************************!*\
              !*** ./node_modules/core-js/modules/_redefine.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var SRC = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
                var $toString = __webpack_require__( /*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
                var TO_STRING = 'toString';
                var TPL = ('' + $toString).split(TO_STRING);

                __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function(it) {
                    return $toString.call(it);
                };

                (module.exports = function(O, key, val, safe) {
                    var isFunction = typeof val == 'function';
                    if (isFunction) has(val, 'name') || hide(val, 'name', key);
                    if (O[key] === val) return;
                    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                    if (O === global) {
                        O[key] = val;
                    } else if (!safe) {
                        delete O[key];
                        hide(O, key, val);
                    } else if (O[key]) {
                        O[key] = val;
                    } else {
                        hide(O, key, val);
                    }
                    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
                })(Function.prototype, TO_STRING, function toString() {
                    return typeof this == 'function' && this[SRC] || $toString.call(this);
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_regexp-exec-abstract.js":
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
                var builtinExec = RegExp.prototype.exec;

                // `RegExpExec` abstract operation
                // https://tc39.github.io/ecma262/#sec-regexpexec
                module.exports = function(R, S) {
                    var exec = R.exec;
                    if (typeof exec === 'function') {
                        var result = exec.call(R, S);
                        if (typeof result !== 'object') {
                            throw new TypeError('RegExp exec method returned something other than an Object or null');
                        }
                        return result;
                    }
                    if (classof(R) !== 'RegExp') {
                        throw new TypeError('RegExp#exec called on incompatible receiver');
                    }
                    return builtinExec.call(R, S);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_regexp-exec.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var regexpFlags = __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

                var nativeExec = RegExp.prototype.exec;
                // This always refers to the native implementation, because the
                // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
                // which loads this file before patching the method.
                var nativeReplace = String.prototype.replace;

                var patchedExec = nativeExec;

                var LAST_INDEX = 'lastIndex';

                var UPDATES_LAST_INDEX_WRONG = (function() {
                    var re1 = /a/,
                        re2 = /b*/g;
                    nativeExec.call(re1, 'a');
                    nativeExec.call(re2, 'a');
                    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
                })();

                // nonparticipating capturing group, copied from es5-shim's String#split patch.
                var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

                var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

                if (PATCH) {
                    patchedExec = function exec(str) {
                        var re = this;
                        var lastIndex, reCopy, match, i;

                        if (NPCG_INCLUDED) {
                            reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                        }
                        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                        match = nativeExec.call(re, str);

                        if (UPDATES_LAST_INDEX_WRONG && match) {
                            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                        }
                        if (NPCG_INCLUDED && match && match.length > 1) {
                            // Fix browsers whose `exec` methods don't consistently return `undefined`
                            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                            // eslint-disable-next-line no-loop-func
                            nativeReplace.call(match[0], reCopy, function() {
                                for (i = 1; i < arguments.length - 2; i++) {
                                    if (arguments[i] === undefined) match[i] = undefined;
                                }
                            });
                        }

                        return match;
                    };
                }

                module.exports = patchedExec;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_same-value.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_same-value.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                // 7.2.9 SameValue(x, y)
                module.exports = Object.is || function is(x, y) {
                    // eslint-disable-next-line no-self-compare
                    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_set-proto.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_set-proto.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // Works with __proto__ only. Old v8 can't work with null proto objects.
                /* eslint-disable no-proto */
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var check = function(O, proto) {
                    anObject(O);
                    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
                };
                module.exports = {
                    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                        function(test, buggy, set) {
                            try {
                                set = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
                                set(test, []);
                                buggy = !(test instanceof Array);
                            } catch (e) {
                                buggy = true;
                            }
                            return function setPrototypeOf(O, proto) {
                                check(O, proto);
                                if (buggy) O.__proto__ = proto;
                                else set(O, proto);
                                return O;
                            };
                        }({}, false) : undefined),
                    check: check
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_set-species.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_set-species.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
                var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
                var SPECIES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

                module.exports = function(KEY) {
                    var C = global[KEY];
                    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                        configurable: true,
                        get: function() {
                            return this;
                        }
                    });
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_set-to-string-tag.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var def = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var TAG = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

                module.exports = function(it, tag, stat) {
                    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                        configurable: true,
                        value: tag
                    });
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_shared-key.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_shared-key.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var shared = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
                var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
                module.exports = function(key) {
                    return shared[key] || (shared[key] = uid(key));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_shared.js":
            /*!*************************************************!*\
              !*** ./node_modules/core-js/modules/_shared.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var SHARED = '__core-js_shared__';
                var store = global[SHARED] || (global[SHARED] = {});

                (module.exports = function(key, value) {
                    return store[key] || (store[key] = value !== undefined ? value : {});
                })('versions', []).push({
                    version: core.version,
                    mode: __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
                    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_species-constructor.js":
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/_species-constructor.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.3.20 SpeciesConstructor(O, defaultConstructor)
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var aFunction = __webpack_require__( /*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
                var SPECIES = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
                module.exports = function(O, D) {
                    var C = anObject(O).constructor;
                    var S;
                    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_string-at.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_string-at.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
                // true  -> String#at
                // false -> String#codePointAt
                module.exports = function(TO_STRING) {
                    return function(that, pos) {
                        var s = String(defined(that));
                        var i = toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                            TO_STRING ? s.charAt(i) : a :
                            TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                    };
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_string-context.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/_string-context.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // helper for String#{startsWith, endsWith, includes}
                var isRegExp = __webpack_require__( /*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

                module.exports = function(that, searchString, NAME) {
                    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
                    return String(defined(that));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_string-trim.js":
            /*!******************************************************!*\
              !*** ./node_modules/core-js/modules/_string-trim.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
                var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                var spaces = __webpack_require__( /*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
                var space = '[' + spaces + ']';
                var non = '\u200b\u0085';
                var ltrim = RegExp('^' + space + space + '*');
                var rtrim = RegExp(space + space + '*$');

                var exporter = function(KEY, exec, ALIAS) {
                    var exp = {};
                    var FORCE = fails(function() {
                        return !!spaces[KEY]() || non[KEY]() != non;
                    });
                    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
                    if (ALIAS) exp[ALIAS] = fn;
                    $export($export.P + $export.F * FORCE, 'String', exp);
                };

                // 1 -> String#trimLeft
                // 2 -> String#trimRight
                // 3 -> String#trim
                var trim = exporter.trim = function(string, TYPE) {
                    string = String(defined(string));
                    if (TYPE & 1) string = string.replace(ltrim, '');
                    if (TYPE & 2) string = string.replace(rtrim, '');
                    return string;
                };

                module.exports = exporter;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_string-ws.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_string-ws.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
                    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-absolute-index.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
                var max = Math.max;
                var min = Math.min;
                module.exports = function(index, length) {
                    index = toInteger(index);
                    return index < 0 ? max(index + length, 0) : min(index, length);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-integer.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-integer.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                module.exports = function(it) {
                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-iobject.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-iobject.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var IObject = __webpack_require__( /*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
                module.exports = function(it) {
                    return IObject(defined(it));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-length.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-length.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.1.15 ToLength
                var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
                var min = Math.min;
                module.exports = function(it) {
                    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-object.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/_to-object.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.1.13 ToObject(argument)
                var defined = __webpack_require__( /*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
                module.exports = function(it) {
                    return Object(defined(it));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_to-primitive.js":
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/_to-primitive.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 7.1.1 ToPrimitive(input [, PreferredType])
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                module.exports = function(it, S) {
                    if (!isObject(it)) return it;
                    var fn, val;
                    if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                    if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                    if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_uid.js":
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_uid.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports) {

                var id = 0;
                var px = Math.random();
                module.exports = function(key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_wks-define.js":
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/modules/_wks-define.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var core = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js");
                var LIBRARY = __webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js");
                var wksExt = __webpack_require__( /*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
                var defineProperty = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                module.exports = function(name) {
                    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
                        value: wksExt.f(name)
                    });
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_wks-ext.js":
            /*!**************************************************!*\
              !*** ./node_modules/core-js/modules/_wks-ext.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                exports.f = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/_wks.js":
            /*!**********************************************!*\
              !*** ./node_modules/core-js/modules/_wks.js ***!
              \**********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var store = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
                var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
                var Symbol = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
                var USE_SYMBOL = typeof Symbol == 'function';

                var $exports = module.exports = function(name) {
                    return store[name] || (store[name] =
                        USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
                };

                $exports.store = store;


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/core.get-iterator-method.js":
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var classof = __webpack_require__( /*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
                var ITERATOR = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
                var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
                module.exports = __webpack_require__( /*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function(it) {
                    if (it != undefined) return it[ITERATOR] ||
                        it['@@iterator'] ||
                        Iterators[classof(it)];
                };


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.array.from.js":
            /*!********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.array.from.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var ctx = __webpack_require__( /*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
                var call = __webpack_require__( /*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
                var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
                var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
                var createProperty = __webpack_require__( /*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
                var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

                $export($export.S + $export.F * !__webpack_require__( /*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function(iter) {
                    Array.from(iter);
                }), 'Array', {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                        var O = toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = getIterFn(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.array.iterator.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var addToUnscopables = __webpack_require__( /*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
                var step = __webpack_require__( /*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
                var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                module.exports = __webpack_require__( /*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function(iterated, kind) {
                    this._t = toIObject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function() {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return step(1);
                    }
                    if (kind == 'keys') return step(0, index);
                    if (kind == 'values') return step(0, O[index]);
                    return step(0, [index, O[index]]);
                }, 'values');

                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                Iterators.Arguments = Iterators.Array;

                addToUnscopables('keys');
                addToUnscopables('values');
                addToUnscopables('entries');


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.date.to-string.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var DateProto = Date.prototype;
                var INVALID_DATE = 'Invalid Date';
                var TO_STRING = 'toString';
                var $toString = DateProto[TO_STRING];
                var getTime = DateProto.getTime;
                if (new Date(NaN) + '' != INVALID_DATE) {
                    __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
                        var value = getTime.call(this);
                        // eslint-disable-next-line no-self-compare
                        return value === value ? $toString.call(this) : INVALID_DATE;
                    });
                }


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.function.name.js":
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.function.name.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                var FProto = Function.prototype;
                var nameRE = /^\s*function ([^ (]*)/;
                var NAME = 'name';

                // 19.2.4.2 name
                NAME in FProto || __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
                    configurable: true,
                    get: function() {
                        try {
                            return ('' + this).match(nameRE)[1];
                        } catch (e) {
                            return '';
                        }
                    }
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.number.constructor.js":
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var cof = __webpack_require__( /*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
                var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
                var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
                var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                var gOPN = __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
                var gOPD = __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                var $trim = __webpack_require__( /*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
                var NUMBER = 'Number';
                var $Number = global[NUMBER];
                var Base = $Number;
                var proto = $Number.prototype;
                // Opera ~12 has broken Object#toString
                var BROKEN_COF = cof(__webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
                var TRIM = 'trim' in String.prototype;

                // 7.1.3 ToNumber(argument)
                var toNumber = function(argument) {
                    var it = toPrimitive(argument, false);
                    if (typeof it == 'string' && it.length > 2) {
                        it = TRIM ? it.trim() : $trim(it, 3);
                        var first = it.charCodeAt(0);
                        var third, radix, maxCode;
                        if (first === 43 || first === 45) {
                            third = it.charCodeAt(2);
                            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                        } else if (first === 48) {
                            switch (it.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    radix = 2;
                                    maxCode = 49;
                                    break; // fast equal /^0b[01]+$/i
                                case 79:
                                case 111:
                                    radix = 8;
                                    maxCode = 55;
                                    break; // fast equal /^0o[0-7]+$/i
                                default:
                                    return +it;
                            }
                            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                                code = digits.charCodeAt(i);
                                // parseInt parses a string to a first unavailable symbol
                                // but ToNumber should return NaN if a string contains unavailable symbols
                                if (code < 48 || code > maxCode) return NaN;
                            }
                            return parseInt(digits, radix);
                        }
                    }
                    return +it;
                };

                if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
                    $Number = function Number(value) {
                        var it = arguments.length < 1 ? 0 : value;
                        var that = this;
                        return that instanceof $Number
                            // check on 1..constructor(foo) case
                            &&
                            (BROKEN_COF ? fails(function() {
                                proto.valueOf.call(that);
                            }) : cof(that) != NUMBER) ?
                            inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
                    };
                    for (var keys = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
                            // ES3:
                            'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                            // ES6 (in case, if modules with ES6 Number statics required before):
                            'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                            'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                        ).split(','), j = 0, key; keys.length > j; j++) {
                        if (has(Base, key = keys[j]) && !has($Number, key)) {
                            dP($Number, key, gOPD(Base, key));
                        }
                    }
                    $Number.prototype = proto;
                    proto.constructor = $Number;
                    __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
                }


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.number.is-nan.js":
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 20.1.2.4 Number.isNaN(number)
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");

                $export($export.S, 'Number', {
                    isNaN: function isNaN(number) {
                        // eslint-disable-next-line no-self-compare
                        return number != number;
                    }
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.object.freeze.js":
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.5 Object.freeze(O)
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var meta = __webpack_require__( /*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

                __webpack_require__( /*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function($freeze) {
                    return function freeze(it) {
                        return $freeze && isObject(it) ? $freeze(meta(it)) : it;
                    };
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.object.keys.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.2.14 Object.keys(O)
                var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
                var $keys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

                __webpack_require__( /*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function() {
                    return function keys(it) {
                        return $keys(toObject(it));
                    };
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
            /*!*********************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
              \*********************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 19.1.3.19 Object.setPrototypeOf(O, proto)
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                $export($export.S, 'Object', {
                    setPrototypeOf: __webpack_require__( /*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.reflect.get.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 26.1.6 Reflect.get(target, propertyKey [, receiver])
                var gOPD = __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
                var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

                function get(target, propertyKey /* , receiver */ ) {
                    var receiver = arguments.length < 3 ? target : arguments[2];
                    var desc, proto;
                    if (anObject(target) === receiver) return target[propertyKey];
                    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ?
                        desc.value :
                        desc.get !== undefined ?
                        desc.get.call(receiver) :
                        undefined;
                    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
                }

                $export($export.S, 'Reflect', {
                    get: get
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.constructor.js":
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
                var dP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
                var gOPN = __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
                var isRegExp = __webpack_require__( /*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
                var $flags = __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
                var $RegExp = global.RegExp;
                var Base = $RegExp;
                var proto = $RegExp.prototype;
                var re1 = /a/g;
                var re2 = /a/g;
                // "new" creates a new object, old webkit buggy here
                var CORRECT_NEW = new $RegExp(re1) !== re1;

                if (__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
                        re2[__webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
                        // RegExp constructor can alter flags and IsRegExp works correct with @@match
                        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
                    }))) {
                    $RegExp = function RegExp(p, f) {
                        var tiRE = this instanceof $RegExp;
                        var piRE = isRegExp(p);
                        var fiU = f === undefined;
                        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p :
                            inheritIfRequired(CORRECT_NEW ?
                                new Base(piRE && !fiU ? p.source : p, f) :
                                Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
                    };
                    var proxy = function(key) {
                        key in $RegExp || dP($RegExp, key, {
                            configurable: true,
                            get: function() {
                                return Base[key];
                            },
                            set: function(it) {
                                Base[key] = it;
                            }
                        });
                    };
                    for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
                    proto.constructor = $RegExp;
                    $RegExp.prototype = proto;
                    __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
                }

                __webpack_require__( /*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.exec.js":
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
                __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js")({
                    target: 'RegExp',
                    proto: true,
                    forced: regexpExec !== /./.exec
                }, {
                    exec: regexpExec
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.flags.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                // 21.2.5.3 get RegExp.prototype.flags()
                if (__webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
                    configurable: true,
                    get: __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.match.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
                var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
                var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

                // @@match logic
                __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function(defined, MATCH, $match, maybeCallNative) {
                    return [
                        // `String.prototype.match` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.match
                        function match(regexp) {
                            var O = defined(this);
                            var fn = regexp == undefined ? undefined : regexp[MATCH];
                            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                        },
                        // `RegExp.prototype[@@match]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
                        function(regexp) {
                            var res = maybeCallNative($match, regexp, this);
                            if (res.done) return res.value;
                            var rx = anObject(regexp);
                            var S = String(this);
                            if (!rx.global) return regExpExec(rx, S);
                            var fullUnicode = rx.unicode;
                            rx.lastIndex = 0;
                            var A = [];
                            var n = 0;
                            var result;
                            while ((result = regExpExec(rx, S)) !== null) {
                                var matchStr = String(result[0]);
                                A[n] = matchStr;
                                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                                n++;
                            }
                            return n === 0 ? null : A;
                        }
                    ];
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.replace.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var toObject = __webpack_require__( /*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
                var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
                var toInteger = __webpack_require__( /*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
                var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
                var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
                var max = Math.max;
                var min = Math.min;
                var floor = Math.floor;
                var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
                var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

                var maybeToString = function(it) {
                    return it === undefined ? it : String(it);
                };

                // @@replace logic
                __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function(defined, REPLACE, $replace, maybeCallNative) {
                    return [
                        // `String.prototype.replace` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                        function replace(searchValue, replaceValue) {
                            var O = defined(this);
                            var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                            return fn !== undefined ?
                                fn.call(searchValue, O, replaceValue) :
                                $replace.call(String(O), searchValue, replaceValue);
                        },
                        // `RegExp.prototype[@@replace]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                        function(regexp, replaceValue) {
                            var res = maybeCallNative($replace, regexp, this, replaceValue);
                            if (res.done) return res.value;

                            var rx = anObject(regexp);
                            var S = String(this);
                            var functionalReplace = typeof replaceValue === 'function';
                            if (!functionalReplace) replaceValue = String(replaceValue);
                            var global = rx.global;
                            if (global) {
                                var fullUnicode = rx.unicode;
                                rx.lastIndex = 0;
                            }
                            var results = [];
                            while (true) {
                                var result = regExpExec(rx, S);
                                if (result === null) break;
                                results.push(result);
                                if (!global) break;
                                var matchStr = String(result[0]);
                                if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                            }
                            var accumulatedResult = '';
                            var nextSourcePosition = 0;
                            for (var i = 0; i < results.length; i++) {
                                result = results[i];
                                var matched = String(result[0]);
                                var position = max(min(toInteger(result.index), S.length), 0);
                                var captures = [];
                                // NOTE: This is equivalent to
                                //   captures = result.slice(1).map(maybeToString)
                                // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                                // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                                // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                                for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
                                var namedCaptures = result.groups;
                                if (functionalReplace) {
                                    var replacerArgs = [matched].concat(captures, position, S);
                                    if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                                    var replacement = String(replaceValue.apply(undefined, replacerArgs));
                                } else {
                                    replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                                }
                                if (position >= nextSourcePosition) {
                                    accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                                    nextSourcePosition = position + matched.length;
                                }
                            }
                            return accumulatedResult + S.slice(nextSourcePosition);
                        }
                    ];

                    // https://tc39.github.io/ecma262/#sec-getsubstitution
                    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                        var tailPos = position + matched.length;
                        var m = captures.length;
                        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                        if (namedCaptures !== undefined) {
                            namedCaptures = toObject(namedCaptures);
                            symbols = SUBSTITUTION_SYMBOLS;
                        }
                        return $replace.call(replacement, symbols, function(match, ch) {
                            var capture;
                            switch (ch.charAt(0)) {
                                case '$':
                                    return '$';
                                case '&':
                                    return matched;
                                case '`':
                                    return str.slice(0, position);
                                case "'":
                                    return str.slice(tailPos);
                                case '<':
                                    capture = namedCaptures[ch.slice(1, -1)];
                                    break;
                                default: // \d\d?
                                    var n = +ch;
                                    if (n === 0) return match;
                                    if (n > m) {
                                        var f = floor(n / 10);
                                        if (f === 0) return match;
                                        if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                        return match;
                                    }
                                    capture = captures[n - 1];
                            }
                            return capture === undefined ? '' : capture;
                        });
                    }
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.search.js":
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var sameValue = __webpack_require__( /*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
                var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

                // @@search logic
                __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function(defined, SEARCH, $search, maybeCallNative) {
                    return [
                        // `String.prototype.search` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.search
                        function search(regexp) {
                            var O = defined(this);
                            var fn = regexp == undefined ? undefined : regexp[SEARCH];
                            return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                        },
                        // `RegExp.prototype[@@search]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
                        function(regexp) {
                            var res = maybeCallNative($search, regexp, this);
                            if (res.done) return res.value;
                            var rx = anObject(regexp);
                            var S = String(this);
                            var previousLastIndex = rx.lastIndex;
                            if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                            var result = regExpExec(rx, S);
                            if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                            return result === null ? -1 : result.index;
                        }
                    ];
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.split.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                var isRegExp = __webpack_require__( /*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
                var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
                var toLength = __webpack_require__( /*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
                var callRegExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
                var regexpExec = __webpack_require__( /*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
                var fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                var $min = Math.min;
                var $push = [].push;
                var $SPLIT = 'split';
                var LENGTH = 'length';
                var LAST_INDEX = 'lastIndex';
                var MAX_UINT32 = 0xffffffff;

                // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
                var SUPPORTS_Y = !fails(function() {
                    RegExp(MAX_UINT32, 'y');
                });

                // @@split logic
                __webpack_require__( /*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function(defined, SPLIT, $split, maybeCallNative) {
                    var internalSplit;
                    if (
                        'abbc' [$SPLIT](/(b)*/)[1] == 'c' ||
                        'test' [$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                        'ab' [$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                        '.' [$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                        '.' [$SPLIT](/()()/)[LENGTH] > 1 ||
                        '' [$SPLIT](/.?/)[LENGTH]
                    ) {
                        // based on es5-shim implementation, need to rework it
                        internalSplit = function(separator, limit) {
                            var string = String(this);
                            if (separator === undefined && limit === 0) return [];
                            // If `separator` is not a regex, use native split
                            if (!isRegExp(separator)) return $split.call(string, separator, limit);
                            var output = [];
                            var flags = (separator.ignoreCase ? 'i' : '') +
                                (separator.multiline ? 'm' : '') +
                                (separator.unicode ? 'u' : '') +
                                (separator.sticky ? 'y' : '');
                            var lastLastIndex = 0;
                            var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            // Make `global` and avoid `lastIndex` issues by working with a copy
                            var separatorCopy = new RegExp(separator.source, flags + 'g');
                            var match, lastIndex, lastLength;
                            while (match = regexpExec.call(separatorCopy, string)) {
                                lastIndex = separatorCopy[LAST_INDEX];
                                if (lastIndex > lastLastIndex) {
                                    output.push(string.slice(lastLastIndex, match.index));
                                    if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                                    lastLength = match[0][LENGTH];
                                    lastLastIndex = lastIndex;
                                    if (output[LENGTH] >= splitLimit) break;
                                }
                                if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                            }
                            if (lastLastIndex === string[LENGTH]) {
                                if (lastLength || !separatorCopy.test('')) output.push('');
                            } else output.push(string.slice(lastLastIndex));
                            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                        };
                        // Chakra, V8
                    } else if ('0' [$SPLIT](undefined, 0)[LENGTH]) {
                        internalSplit = function(separator, limit) {
                            return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                        };
                    } else {
                        internalSplit = $split;
                    }

                    return [
                        // `String.prototype.split` method
                        // https://tc39.github.io/ecma262/#sec-string.prototype.split
                        function split(separator, limit) {
                            var O = defined(this);
                            var splitter = separator == undefined ? undefined : separator[SPLIT];
                            return splitter !== undefined ?
                                splitter.call(separator, O, limit) :
                                internalSplit.call(String(O), separator, limit);
                        },
                        // `RegExp.prototype[@@split]` method
                        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                        //
                        // NOTE: This cannot be properly polyfilled in engines that don't support
                        // the 'y' flag.
                        function(regexp, limit) {
                            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                            if (res.done) return res.value;

                            var rx = anObject(regexp);
                            var S = String(this);
                            var C = speciesConstructor(rx, RegExp);

                            var unicodeMatching = rx.unicode;
                            var flags = (rx.ignoreCase ? 'i' : '') +
                                (rx.multiline ? 'm' : '') +
                                (rx.unicode ? 'u' : '') +
                                (SUPPORTS_Y ? 'y' : 'g');

                            // ^(? + rx + ) is needed, in combination with some S slicing, to
                            // simulate the 'y' flag.
                            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                            if (lim === 0) return [];
                            if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                            var p = 0;
                            var q = 0;
                            var A = [];
                            while (q < S.length) {
                                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                                var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                                var e;
                                if (
                                    z === null ||
                                    (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                                ) {
                                    q = advanceStringIndex(S, q, unicodeMatching);
                                } else {
                                    A.push(S.slice(p, q));
                                    if (A.length === lim) return A;
                                    for (var i = 1; i <= z.length - 1; i++) {
                                        A.push(z[i]);
                                        if (A.length === lim) return A;
                                    }
                                    q = p = e;
                                }
                            }
                            A.push(S.slice(p));
                            return A;
                        }
                    ];
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.regexp.to-string.js":
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                __webpack_require__( /*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var $flags = __webpack_require__( /*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
                var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
                var TO_STRING = 'toString';
                var $toString = /./ [TO_STRING];

                var define = function(fn) {
                    __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
                };

                // 21.2.5.14 RegExp.prototype.toString()
                if (__webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function() {
                        return $toString.call({
                            source: 'a',
                            flags: 'b'
                        }) != '/a/b';
                    })) {
                    define(function toString() {
                        var R = anObject(this);
                        return '/'.concat(R.source, '/',
                            'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
                    });
                    // FF44- RegExp#toString has a wrong name
                } else if ($toString.name != TO_STRING) {
                    define(function toString() {
                        return $toString.call(this);
                    });
                }


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.string.includes.js":
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";
                // 21.1.3.7 String.prototype.includes(searchString, position = 0)

                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var context = __webpack_require__( /*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
                var INCLUDES = 'includes';

                $export($export.P + $export.F * __webpack_require__( /*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
                    includes: function includes(searchString /* , position = 0 */ ) {
                        return !!~context(this, searchString, INCLUDES)
                            .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.string.iterator.js":
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                var $at = __webpack_require__( /*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

                // 21.1.3.27 String.prototype[@@iterator]()
                __webpack_require__( /*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function(iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                }, function() {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length) return {
                        value: undefined,
                        done: true
                    };
                    point = $at(O, index);
                    this._i += point.length;
                    return {
                        value: point,
                        done: false
                    };
                });


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es6.symbol.js":
            /*!****************************************************!*\
              !*** ./node_modules/core-js/modules/es6.symbol.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                // ECMAScript 6 symbols shim
                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var has = __webpack_require__( /*! ./_has */ "./node_modules/core-js/modules/_has.js");
                var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
                var META = __webpack_require__( /*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
                var $fails = __webpack_require__( /*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
                var shared = __webpack_require__( /*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
                var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
                var uid = __webpack_require__( /*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
                var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
                var wksExt = __webpack_require__( /*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
                var wksDefine = __webpack_require__( /*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
                var enumKeys = __webpack_require__( /*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
                var isArray = __webpack_require__( /*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
                var anObject = __webpack_require__( /*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
                var isObject = __webpack_require__( /*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
                var toIObject = __webpack_require__( /*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
                var toPrimitive = __webpack_require__( /*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
                var createDesc = __webpack_require__( /*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
                var _create = __webpack_require__( /*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
                var gOPNExt = __webpack_require__( /*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
                var $GOPD = __webpack_require__( /*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
                var $DP = __webpack_require__( /*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
                var $keys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
                var gOPD = $GOPD.f;
                var dP = $DP.f;
                var gOPN = gOPNExt.f;
                var $Symbol = global.Symbol;
                var $JSON = global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE = 'prototype';
                var HIDDEN = wks('_hidden');
                var TO_PRIMITIVE = wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = shared('symbol-registry');
                var AllSymbols = shared('symbols');
                var OPSymbols = shared('op-symbols');
                var ObjectProto = Object[PROTOTYPE];
                var USE_NATIVE = typeof $Symbol == 'function';
                var QObject = global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc = DESCRIPTORS && $fails(function() {
                    return _create(dP({}, 'a', {
                        get: function() {
                            return dP(this, 'a', {
                                value: 7
                            }).a;
                        }
                    })).a != 7;
                }) ? function(it, key, D) {
                    var protoDesc = gOPD(ObjectProto, key);
                    if (protoDesc) delete ObjectProto[key];
                    dP(it, key, D);
                    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
                } : dP;

                var wrap = function(tag) {
                    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                    sym._k = tag;
                    return sym;
                };

                var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
                    return typeof it == 'symbol';
                } : function(it) {
                    return it instanceof $Symbol;
                };

                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                    anObject(it);
                    key = toPrimitive(key, true);
                    anObject(D);
                    if (has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _create(D, {
                                enumerable: createDesc(0, false)
                            });
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    anObject(it);
                    var keys = enumKeys(P = toIObject(P));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
                    return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, key = toPrimitive(key, true));
                    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = toIObject(it);
                    key = toPrimitive(key, true);
                    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(toIObject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto;
                    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };

                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function Symbol() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function(value) {
                            if (this === ObjectProto) $set.call(OPSymbols, value);
                            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, createDesc(1, value));
                        };
                        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                            configurable: true,
                            set: $set
                        });
                        return wrap(tag);
                    };
                    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                        return this._k;
                    });

                    $GOPD.f = $getOwnPropertyDescriptor;
                    $DP.f = $defineProperty;
                    __webpack_require__( /*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
                    __webpack_require__( /*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
                    __webpack_require__( /*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

                    if (DESCRIPTORS && !__webpack_require__( /*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
                        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }

                    wksExt.f = function(name) {
                        return wrap(wks(name));
                    };
                }

                $export($export.G + $export.W + $export.F * !USE_NATIVE, {
                    Symbol: $Symbol
                });

                for (var es6Symbols = (
                        // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                        'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
                    ).split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

                for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

                $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    'for': function(key) {
                        return has(SymbolRegistry, key += '') ?
                            SymbolRegistry[key] :
                            SymbolRegistry[key] = $Symbol(key);
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry)
                            if (SymbolRegistry[key] === sym) return key;
                    },
                    useSetter: function() {
                        setter = true;
                    },
                    useSimple: function() {
                        setter = false;
                    }
                });

                $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                    // 19.1.2.2 Object.create(O [, Properties])
                    create: $create,
                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                    defineProperty: $defineProperty,
                    // 19.1.2.3 Object.defineProperties(O, Properties)
                    defineProperties: $defineProperties,
                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                    getOwnPropertyNames: $getOwnPropertyNames,
                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                    getOwnPropertySymbols: $getOwnPropertySymbols
                });

                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return _stringify([S]) != '[null]' || _stringify({
                        a: S
                    }) != '{}' || _stringify(Object(S)) != '{}';
                })), 'JSON', {
                    stringify: function stringify(it) {
                        var args = [it];
                        var i = 1;
                        var replacer, $replacer;
                        while (arguments.length > i) args.push(arguments[i++]);
                        $replacer = replacer = args[1];
                        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                        if (!isArray(replacer)) replacer = function(key, value) {
                            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                            if (!isSymbol(value)) return value;
                        };
                        args[1] = replacer;
                        return _stringify.apply($JSON, args);
                    }
                });

                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                setToStringTag(global.JSON, 'JSON', true);


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es7.array.includes.js":
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                // https://github.com/tc39/Array.prototype.includes
                var $export = __webpack_require__( /*! ./_export */ "./node_modules/core-js/modules/_export.js");
                var $includes = __webpack_require__( /*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

                $export($export.P, 'Array', {
                    includes: function includes(el /* , fromIndex = 0 */ ) {
                        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
                    }
                });

                __webpack_require__( /*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                __webpack_require__( /*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


                /***/
            }),

        /***/
        "./node_modules/core-js/modules/web.dom.iterable.js":
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                var $iterators = __webpack_require__( /*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
                var getKeys = __webpack_require__( /*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
                var redefine = __webpack_require__( /*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
                var global = __webpack_require__( /*! ./_global */ "./node_modules/core-js/modules/_global.js");
                var hide = __webpack_require__( /*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
                var Iterators = __webpack_require__( /*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
                var wks = __webpack_require__( /*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
                var ITERATOR = wks('iterator');
                var TO_STRING_TAG = wks('toStringTag');
                var ArrayValues = Iterators.Array;

                var DOMIterables = {
                    CSSRuleList: true, // TODO: Not spec compliant, should be false.
                    CSSStyleDeclaration: false,
                    CSSValueList: false,
                    ClientRectList: false,
                    DOMRectList: false,
                    DOMStringList: false,
                    DOMTokenList: true,
                    DataTransferItemList: false,
                    FileList: false,
                    HTMLAllCollection: false,
                    HTMLCollection: false,
                    HTMLFormElement: false,
                    HTMLSelectElement: false,
                    MediaList: true, // TODO: Not spec compliant, should be false.
                    MimeTypeArray: false,
                    NamedNodeMap: false,
                    NodeList: true,
                    PaintRequestList: false,
                    Plugin: false,
                    PluginArray: false,
                    SVGLengthList: false,
                    SVGNumberList: false,
                    SVGPathSegList: false,
                    SVGPointList: false,
                    SVGStringList: false,
                    SVGTransformList: false,
                    SourceBufferList: false,
                    StyleSheetList: true, // TODO: Not spec compliant, should be false.
                    TextTrackCueList: false,
                    TextTrackList: false,
                    TouchList: false
                };

                for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
                    var NAME = collections[i];
                    var explicit = DOMIterables[NAME];
                    var Collection = global[NAME];
                    var proto = Collection && Collection.prototype;
                    var key;
                    if (proto) {
                        if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                        if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                        Iterators[NAME] = ArrayValues;
                        if (explicit)
                            for (key in $iterators)
                                if (!proto[key]) redefine(proto, key, $iterators[key], true);
                    }
                }


                /***/
            }),

        /***/
        "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss":
            /*!***************************************************************************************************************!*\
              !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss ***!
              \***************************************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                exports = module.exports = __webpack_require__( /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
                // Module
                exports.push([module.i, ".x-hellosign-embedded {\n  height: 100%; }\n  .x-hellosign-embedded--in-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 9997; }\n\n.x-hellosign-embedded__modal-screen {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-screen {\n      display: none; } }\n\n.x-hellosign-embedded__modal-content {\n  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  top: 5vh;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 90vh;\n  min-height: 400px;\n  width: 80vw;\n  min-width: 512px;\n  max-width: 1024px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-content {\n      overflow: hidden;\n      box-shadow: none;\n      height: 100%;\n      min-height: 0;\n      width: 100%;\n      min-width: 0;\n      transform: none;\n      left: 0;\n      top: 0; } }\n\n.x-hellosign-embedded__modal-close {\n  position: absolute;\n  top: 0;\n  right: -60px;\n  height: 40px;\n  width: 40px; }\n  @media only screen and (max-width: 767px), only screen and (max-width: 900px) and (min-aspect-ratio: 16 / 9) {\n    .x-hellosign-embedded__modal-close {\n      display: none; } }\n\n.x-hellosign-embedded__modal-close-button {\n  -webkit-appearance: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  background-color: #1A1A1A;\n  transition: background-color 0.35s ease;\n  will-change: background-color;\n  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  padding: 20px; }\n  .x-hellosign-embedded__modal-close-button:hover {\n    background-color: #4E4E4E; }\n  .x-hellosign-embedded__modal-close-button::before, .x-hellosign-embedded__modal-close-button::after {\n    content: '';\n    position: absolute;\n    width: 1px;\n    background-color: white;\n    height: 20px;\n    top: 10px; }\n  .x-hellosign-embedded__modal-close-button::before {\n    transform: rotateZ(45deg); }\n  .x-hellosign-embedded__modal-close-button::after {\n    transform: rotateZ(-45deg); }\n\n.x-hellosign-embedded__iframe {\n  min-height: 400px;\n  background-color: #F7F8F9;\n  height: 100%;\n  border: none;\n  min-width: 100%;\n  width: 100px;\n  *width: 100%; }\n", ""]);



                /***/
            }),

        /***/
        "./node_modules/css-loader/dist/runtime/api.js":
            /*!*****************************************************!*\
              !*** ./node_modules/css-loader/dist/runtime/api.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";

                /*
                  MIT License http://www.opensource.org/licenses/mit-license.php
                  Author Tobias Koppers @sokra
                */
                // css base code, injected by the css-loader

                module.exports = function(useSourceMap) {
                    var list = []; // return the list of modules as css string

                    list.toString = function toString() {
                        return this.map(function(item) {
                            var content = cssWithMappingToString(item, useSourceMap);

                            if (item[2]) {
                                return '@media ' + item[2] + '{' + content + '}';
                            } else {
                                return content;
                            }
                        }).join('');
                    }; // import a list of modules into the list


                    list.i = function(modules, mediaQuery) {
                        if (typeof modules === 'string') {
                            modules = [
                                [null, modules, '']
                            ];
                        }

                        var alreadyImportedModules = {};

                        for (var i = 0; i < this.length; i++) {
                            var id = this[i][0];

                            if (id != null) {
                                alreadyImportedModules[id] = true;
                            }
                        }

                        for (i = 0; i < modules.length; i++) {
                            var item = modules[i]; // skip already imported module
                            // this implementation is not 100% perfect for weird media query combinations
                            // when a module is imported multiple times with different media queries.
                            // I hope this will never occur (Hey this way we have smaller bundles)

                            if (item[0] == null || !alreadyImportedModules[item[0]]) {
                                if (mediaQuery && !item[2]) {
                                    item[2] = mediaQuery;
                                } else if (mediaQuery) {
                                    item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                                }

                                list.push(item);
                            }
                        }
                    };

                    return list;
                };

                function cssWithMappingToString(item, useSourceMap) {
                    var content = item[1] || '';
                    var cssMapping = item[3];

                    if (!cssMapping) {
                        return content;
                    }

                    if (useSourceMap && typeof btoa === 'function') {
                        var sourceMapping = toComment(cssMapping);
                        var sourceURLs = cssMapping.sources.map(function(source) {
                            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                        });
                        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
                    }

                    return [content].join('\n');
                } // Adapted from convert-source-map (MIT)


                function toComment(sourceMap) {
                    // eslint-disable-next-line no-undef
                    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
                    var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
                    return '/*# ' + data + ' */';
                }

                /***/
            }),

        /***/
        "./node_modules/debug/node_modules/ms/index.js":
            /*!*****************************************************!*\
              !*** ./node_modules/debug/node_modules/ms/index.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                function _typeof(obj) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                /**
                 * Helpers.
                 */
                var s = 1000;
                var m = s * 60;
                var h = m * 60;
                var d = h * 24;
                var w = d * 7;
                var y = d * 365.25;
                /**
                 * Parse or format the given `val`.
                 *
                 * Options:
                 *
                 *  - `long` verbose formatting [false]
                 *
                 * @param {String|Number} val
                 * @param {Object} [options]
                 * @throws {Error} throw an error if val is not a non-empty string or a number
                 * @return {String|Number}
                 * @api public
                 */

                module.exports = function(val, options) {
                    options = options || {};

                    var type = _typeof(val);

                    if (type === 'string' && val.length > 0) {
                        return parse(val);
                    } else if (type === 'number' && isNaN(val) === false) {
                        return options.long ? fmtLong(val) : fmtShort(val);
                    }

                    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
                };
                /**
                 * Parse the given `str` and return milliseconds.
                 *
                 * @param {String} str
                 * @return {Number}
                 * @api private
                 */


                function parse(str) {
                    str = String(str);

                    if (str.length > 100) {
                        return;
                    }

                    var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

                    if (!match) {
                        return;
                    }

                    var n = parseFloat(match[1]);
                    var type = (match[2] || 'ms').toLowerCase();

                    switch (type) {
                        case 'years':
                        case 'year':
                        case 'yrs':
                        case 'yr':
                        case 'y':
                            return n * y;

                        case 'weeks':
                        case 'week':
                        case 'w':
                            return n * w;

                        case 'days':
                        case 'day':
                        case 'd':
                            return n * d;

                        case 'hours':
                        case 'hour':
                        case 'hrs':
                        case 'hr':
                        case 'h':
                            return n * h;

                        case 'minutes':
                        case 'minute':
                        case 'mins':
                        case 'min':
                        case 'm':
                            return n * m;

                        case 'seconds':
                        case 'second':
                        case 'secs':
                        case 'sec':
                        case 's':
                            return n * s;

                        case 'milliseconds':
                        case 'millisecond':
                        case 'msecs':
                        case 'msec':
                        case 'ms':
                            return n;

                        default:
                            return undefined;
                    }
                }
                /**
                 * Short format for `ms`.
                 *
                 * @param {Number} ms
                 * @return {String}
                 * @api private
                 */


                function fmtShort(ms) {
                    var msAbs = Math.abs(ms);

                    if (msAbs >= d) {
                        return Math.round(ms / d) + 'd';
                    }

                    if (msAbs >= h) {
                        return Math.round(ms / h) + 'h';
                    }

                    if (msAbs >= m) {
                        return Math.round(ms / m) + 'm';
                    }

                    if (msAbs >= s) {
                        return Math.round(ms / s) + 's';
                    }

                    return ms + 'ms';
                }
                /**
                 * Long format for `ms`.
                 *
                 * @param {Number} ms
                 * @return {String}
                 * @api private
                 */


                function fmtLong(ms) {
                    var msAbs = Math.abs(ms);

                    if (msAbs >= d) {
                        return plural(ms, msAbs, d, 'day');
                    }

                    if (msAbs >= h) {
                        return plural(ms, msAbs, h, 'hour');
                    }

                    if (msAbs >= m) {
                        return plural(ms, msAbs, m, 'minute');
                    }

                    if (msAbs >= s) {
                        return plural(ms, msAbs, s, 'second');
                    }

                    return ms + ' ms';
                }
                /**
                 * Pluralization helper.
                 */


                function plural(ms, msAbs, n, name) {
                    var isPlural = msAbs >= n * 1.5;
                    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
                }

                /***/
            }),

        /***/
        "./node_modules/debug/src/browser.js":
            /*!*******************************************!*\
              !*** ./node_modules/debug/src/browser.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";
                /* WEBPACK VAR INJECTION */
                (function(process) {

                    __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                    __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

                    function _typeof(obj) {
                        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            _typeof = function _typeof(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                        }
                        return _typeof(obj);
                    }

                    /* eslint-env browser */

                    /**
                     * This is the web browser implementation of `debug()`.
                     */
                    exports.log = log;
                    exports.formatArgs = formatArgs;
                    exports.save = save;
                    exports.load = load;
                    exports.useColors = useColors;
                    exports.storage = localstorage();
                    /**
                     * Colors.
                     */

                    exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
                    /**
                     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
                     * and the Firebug extension (any Firefox version) are known
                     * to support "%c" CSS customizations.
                     *
                     * TODO: add a `localStorage` variable to explicitly enable/disable colors
                     */
                    // eslint-disable-next-line complexity

                    function useColors() {
                        // NB: In an Electron preload script, document will be defined but not fully
                        // initialized. Since we know we're in Chrome, we'll just detect this case
                        // explicitly
                        if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
                            return true;
                        } // Internet Explorer and Edge do not support colors.


                        if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
                            return false;
                        } // Is webkit? http://stackoverflow.com/a/16459606/376773
                        // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


                        return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
                            typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
                            // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
                            typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
                            typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
                    }
                    /**
                     * Colorize log arguments if enabled.
                     *
                     * @api public
                     */


                    function formatArgs(args) {
                        args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

                        if (!this.useColors) {
                            return;
                        }

                        var c = 'color: ' + this.color;
                        args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
                        // arguments passed either before or after the %c, so we need to
                        // figure out the correct index to insert the CSS into

                        var index = 0;
                        var lastC = 0;
                        args[0].replace(/%[a-zA-Z%]/g, function(match) {
                            if (match === '%%') {
                                return;
                            }

                            index++;

                            if (match === '%c') {
                                // We only are interested in the *last* %c
                                // (the user may have provided their own)
                                lastC = index;
                            }
                        });
                        args.splice(lastC, 0, c);
                    }
                    /**
                     * Invokes `console.log()` when available.
                     * No-op when `console.log` is not a "function".
                     *
                     * @api public
                     */


                    function log() {
                        var _console;

                        // This hackery is required for IE8/9, where
                        // the `console.log` function doesn't have 'apply'
                        return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
                    }
                    /**
                     * Save `namespaces`.
                     *
                     * @param {String} namespaces
                     * @api private
                     */


                    function save(namespaces) {
                        try {
                            if (namespaces) {
                                exports.storage.setItem('debug', namespaces);
                            } else {
                                exports.storage.removeItem('debug');
                            }
                        } catch (error) { // Swallow
                            // XXX (@Qix-) should we be logging these?
                        }
                    }
                    /**
                     * Load `namespaces`.
                     *
                     * @return {String} returns the previously persisted debug modes
                     * @api private
                     */


                    function load() {
                        var r;

                        try {
                            r = exports.storage.getItem('debug');
                        } catch (error) {} // Swallow
                        // XXX (@Qix-) should we be logging these?
                        // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


                        if (!r && typeof process !== 'undefined' && 'env' in process) {
                            r = process.env.DEBUG;
                        }

                        return r;
                    }
                    /**
                     * Localstorage attempts to return the localstorage.
                     *
                     * This is necessary because safari throws
                     * when a user disables cookies/localstorage
                     * and you attempt to access it.
                     *
                     * @return {LocalStorage}
                     * @api private
                     */


                    function localstorage() {
                        try {
                            // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
                            // The Browser also has localStorage in the global context.
                            return localStorage;
                        } catch (error) { // Swallow
                            // XXX (@Qix-) should we be logging these?
                        }
                    }

                    module.exports = __webpack_require__( /*! ./common */ "./node_modules/debug/src/common.js")(exports);
                    var formatters = module.exports.formatters;
                    /**
                     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
                     */

                    formatters.j = function(v) {
                        try {
                            return JSON.stringify(v);
                        } catch (error) {
                            return '[UnexpectedJSONParseError]: ' + error.message;
                        }
                    };
                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__( /*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

                /***/
            }),

        /***/
        "./node_modules/debug/src/common.js":
            /*!******************************************!*\
              !*** ./node_modules/debug/src/common.js ***!
              \******************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                __webpack_require__( /*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

                __webpack_require__( /*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

                __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                __webpack_require__( /*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");

                __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

                __webpack_require__( /*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

                __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

                function _toConsumableArray(arr) {
                    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
                }

                function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }

                function _iterableToArray(iter) {
                    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
                }

                function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr)) {
                        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                            arr2[i] = arr[i];
                        }
                        return arr2;
                    }
                }

                /**
                 * This is the common logic for both the Node.js and web browser
                 * implementations of `debug()`.
                 */
                function setup(env) {
                    createDebug.debug = createDebug;
                    createDebug.default = createDebug;
                    createDebug.coerce = coerce;
                    createDebug.disable = disable;
                    createDebug.enable = enable;
                    createDebug.enabled = enabled;
                    createDebug.humanize = __webpack_require__( /*! ms */ "./node_modules/debug/node_modules/ms/index.js");
                    Object.keys(env).forEach(function(key) {
                        createDebug[key] = env[key];
                    });
                    /**
                     * Active `debug` instances.
                     */

                    createDebug.instances = [];
                    /**
                     * The currently active debug mode names, and names to skip.
                     */

                    createDebug.names = [];
                    createDebug.skips = [];
                    /**
                     * Map of special "%n" handling functions, for the debug "format" argument.
                     *
                     * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
                     */

                    createDebug.formatters = {};
                    /**
                     * Selects a color for a debug namespace
                     * @param {String} namespace The namespace string for the for the debug instance to be colored
                     * @return {Number|String} An ANSI color code for the given namespace
                     * @api private
                     */

                    function selectColor(namespace) {
                        var hash = 0;

                        for (var i = 0; i < namespace.length; i++) {
                            hash = (hash << 5) - hash + namespace.charCodeAt(i);
                            hash |= 0; // Convert to 32bit integer
                        }

                        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
                    }

                    createDebug.selectColor = selectColor;
                    /**
                     * Create a debugger with the given `namespace`.
                     *
                     * @param {String} namespace
                     * @return {Function}
                     * @api public
                     */

                    function createDebug(namespace) {
                        var prevTime;

                        function debug() {
                            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }

                            // Disabled?
                            if (!debug.enabled) {
                                return;
                            }

                            var self = debug; // Set `diff` timestamp

                            var curr = Number(new Date());
                            var ms = curr - (prevTime || curr);
                            self.diff = ms;
                            self.prev = prevTime;
                            self.curr = curr;
                            prevTime = curr;
                            args[0] = createDebug.coerce(args[0]);

                            if (typeof args[0] !== 'string') {
                                // Anything else let's inspect with %O
                                args.unshift('%O');
                            } // Apply any `formatters` transformations


                            var index = 0;
                            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                                // If we encounter an escaped % then don't increase the array index
                                if (match === '%%') {
                                    return match;
                                }

                                index++;
                                var formatter = createDebug.formatters[format];

                                if (typeof formatter === 'function') {
                                    var val = args[index];
                                    match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                                    args.splice(index, 1);
                                    index--;
                                }

                                return match;
                            }); // Apply env-specific formatting (colors, etc.)

                            createDebug.formatArgs.call(self, args);
                            var logFn = self.log || createDebug.log;
                            logFn.apply(self, args);
                        }

                        debug.namespace = namespace;
                        debug.enabled = createDebug.enabled(namespace);
                        debug.useColors = createDebug.useColors();
                        debug.color = selectColor(namespace);
                        debug.destroy = destroy;
                        debug.extend = extend; // Debug.formatArgs = formatArgs;
                        // debug.rawLog = rawLog;
                        // env-specific initialization logic for debug instances

                        if (typeof createDebug.init === 'function') {
                            createDebug.init(debug);
                        }

                        createDebug.instances.push(debug);
                        return debug;
                    }

                    function destroy() {
                        var index = createDebug.instances.indexOf(this);

                        if (index !== -1) {
                            createDebug.instances.splice(index, 1);
                            return true;
                        }

                        return false;
                    }

                    function extend(namespace, delimiter) {
                        var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
                        newDebug.log = this.log;
                        return newDebug;
                    }
                    /**
                     * Enables a debug mode by namespaces. This can include modes
                     * separated by a colon and wildcards.
                     *
                     * @param {String} namespaces
                     * @api public
                     */


                    function enable(namespaces) {
                        createDebug.save(namespaces);
                        createDebug.names = [];
                        createDebug.skips = [];
                        var i;
                        var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
                        var len = split.length;

                        for (i = 0; i < len; i++) {
                            if (!split[i]) {
                                // ignore empty strings
                                continue;
                            }

                            namespaces = split[i].replace(/\*/g, '.*?');

                            if (namespaces[0] === '-') {
                                createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
                            } else {
                                createDebug.names.push(new RegExp('^' + namespaces + '$'));
                            }
                        }

                        for (i = 0; i < createDebug.instances.length; i++) {
                            var instance = createDebug.instances[i];
                            instance.enabled = createDebug.enabled(instance.namespace);
                        }
                    }
                    /**
                     * Disable debug output.
                     *
                     * @return {String} namespaces
                     * @api public
                     */


                    function disable() {
                        var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function(namespace) {
                            return '-' + namespace;
                        }))).join(',');
                        createDebug.enable('');
                        return namespaces;
                    }
                    /**
                     * Returns true if the given mode name is enabled, false otherwise.
                     *
                     * @param {String} name
                     * @return {Boolean}
                     * @api public
                     */


                    function enabled(name) {
                        if (name[name.length - 1] === '*') {
                            return true;
                        }

                        var i;
                        var len;

                        for (i = 0, len = createDebug.skips.length; i < len; i++) {
                            if (createDebug.skips[i].test(name)) {
                                return false;
                            }
                        }

                        for (i = 0, len = createDebug.names.length; i < len; i++) {
                            if (createDebug.names[i].test(name)) {
                                return true;
                            }
                        }

                        return false;
                    }
                    /**
                     * Convert regexp to namespace
                     *
                     * @param {RegExp} regxep
                     * @return {String} namespace
                     * @api private
                     */


                    function toNamespace(regexp) {
                        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
                    }
                    /**
                     * Coerce `val`.
                     *
                     * @param {Mixed} val
                     * @return {Mixed}
                     * @api private
                     */


                    function coerce(val) {
                        if (val instanceof Error) {
                            return val.stack || val.message;
                        }

                        return val;
                    }

                    createDebug.enable(createDebug.load());
                    return createDebug;
                }

                module.exports = setup;

                /***/
            }),

        /***/
        "./node_modules/process/browser.js":
            /*!*****************************************!*\
              !*** ./node_modules/process/browser.js ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                // shim for using process in browser
                var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
                // don't break things.  But we need to wrap it in a try catch in case it is
                // wrapped in strict mode code which doesn't define any globals.  It's inside a
                // function because try/catches deoptimize in certain engines.

                var cachedSetTimeout;
                var cachedClearTimeout;

                function defaultSetTimout() {
                    throw new Error('setTimeout has not been defined');
                }

                function defaultClearTimeout() {
                    throw new Error('clearTimeout has not been defined');
                }

                (function() {
                    try {
                        if (typeof setTimeout === 'function') {
                            cachedSetTimeout = setTimeout;
                        } else {
                            cachedSetTimeout = defaultSetTimout;
                        }
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }

                    try {
                        if (typeof clearTimeout === 'function') {
                            cachedClearTimeout = clearTimeout;
                        } else {
                            cachedClearTimeout = defaultClearTimeout;
                        }
                    } catch (e) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                })();

                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) {
                        //normal enviroments in sane situations
                        return setTimeout(fun, 0);
                    } // if setTimeout wasn't available but was latter defined


                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }

                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }
                }

                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) {
                        //normal enviroments in sane situations
                        return clearTimeout(marker);
                    } // if clearTimeout wasn't available but was latter defined


                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }

                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }

                var queue = [];
                var draining = false;
                var currentQueue;
                var queueIndex = -1;

                function cleanUpNextTick() {
                    if (!draining || !currentQueue) {
                        return;
                    }

                    draining = false;

                    if (currentQueue.length) {
                        queue = currentQueue.concat(queue);
                    } else {
                        queueIndex = -1;
                    }

                    if (queue.length) {
                        drainQueue();
                    }
                }

                function drainQueue() {
                    if (draining) {
                        return;
                    }

                    var timeout = runTimeout(cleanUpNextTick);
                    draining = true;
                    var len = queue.length;

                    while (len) {
                        currentQueue = queue;
                        queue = [];

                        while (++queueIndex < len) {
                            if (currentQueue) {
                                currentQueue[queueIndex].run();
                            }
                        }

                        queueIndex = -1;
                        len = queue.length;
                    }

                    currentQueue = null;
                    draining = false;
                    runClearTimeout(timeout);
                }

                process.nextTick = function(fun) {
                    var args = new Array(arguments.length - 1);

                    if (arguments.length > 1) {
                        for (var i = 1; i < arguments.length; i++) {
                            args[i - 1] = arguments[i];
                        }
                    }

                    queue.push(new Item(fun, args));

                    if (queue.length === 1 && !draining) {
                        runTimeout(drainQueue);
                    }
                }; // v8 likes predictible objects


                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }

                Item.prototype.run = function() {
                    this.fun.apply(null, this.array);
                };

                process.title = 'browser';
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = ''; // empty string to avoid regexp issues

                process.versions = {};

                function noop() {}

                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;

                process.listeners = function(name) {
                    return [];
                };

                process.binding = function(name) {
                    throw new Error('process.binding is not supported');
                };

                process.cwd = function() {
                    return '/';
                };

                process.chdir = function(dir) {
                    throw new Error('process.chdir is not supported');
                };

                process.umask = function() {
                    return 0;
                };

                /***/
            }),

        /***/
        "./node_modules/style-loader/lib/addStyles.js":
            /*!****************************************************!*\
              !*** ./node_modules/style-loader/lib/addStyles.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                /*
                	MIT License http://www.opensource.org/licenses/mit-license.php
                	Author Tobias Koppers @sokra
                */

                var stylesInDom = {};

                var memoize = function(fn) {
                    var memo;

                    return function() {
                        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                        return memo;
                    };
                };

                var isOldIE = memoize(function() {
                    // Test for IE <= 9 as proposed by Browserhacks
                    // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                    // Tests for existence of standard globals is to allow style-loader
                    // to operate correctly into non-standard environments
                    // @see https://github.com/webpack-contrib/style-loader/issues/177
                    return window && document && document.all && !window.atob;
                });

                var getTarget = function(target, parent) {
                    if (parent) {
                        return parent.querySelector(target);
                    }
                    return document.querySelector(target);
                };

                var getElement = (function(fn) {
                    var memo = {};

                    return function(target, parent) {
                        // If passing function in options, then use it for resolve "head" element.
                        // Useful for Shadow Root style i.e
                        // {
                        //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                        // }
                        if (typeof target === 'function') {
                            return target();
                        }
                        if (typeof memo[target] === "undefined") {
                            var styleTarget = getTarget.call(this, target, parent);
                            // Special case to return head of iframe instead of iframe itself
                            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                                try {
                                    // This will throw an exception if access to iframe is blocked
                                    // due to cross-origin restrictions
                                    styleTarget = styleTarget.contentDocument.head;
                                } catch (e) {
                                    styleTarget = null;
                                }
                            }
                            memo[target] = styleTarget;
                        }
                        return memo[target]
                    };
                })();

                var singleton = null;
                var singletonCounter = 0;
                var stylesInsertedAtTop = [];

                var fixUrls = __webpack_require__( /*! ./urls */ "./node_modules/style-loader/lib/urls.js");

                module.exports = function(list, options) {
                    if (typeof DEBUG !== "undefined" && DEBUG) {
                        if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                    }

                    options = options || {};

                    options.attrs = typeof options.attrs === "object" ? options.attrs : {};

                    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                    // tags it will allow on a page
                    if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

                    // By default, add <style> tags to the <head> element
                    if (!options.insertInto) options.insertInto = "head";

                    // By default, add <style> tags to the bottom of the target
                    if (!options.insertAt) options.insertAt = "bottom";

                    var styles = listToStyles(list, options);

                    addStylesToDom(styles, options);

                    return function update(newList) {
                        var mayRemove = [];

                        for (var i = 0; i < styles.length; i++) {
                            var item = styles[i];
                            var domStyle = stylesInDom[item.id];

                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }

                        if (newList) {
                            var newStyles = listToStyles(newList, options);
                            addStylesToDom(newStyles, options);
                        }

                        for (var i = 0; i < mayRemove.length; i++) {
                            var domStyle = mayRemove[i];

                            if (domStyle.refs === 0) {
                                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                                delete stylesInDom[domStyle.id];
                            }
                        }
                    };
                };

                function addStylesToDom(styles, options) {
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];

                        if (domStyle) {
                            domStyle.refs++;

                            for (var j = 0; j < domStyle.parts.length; j++) {
                                domStyle.parts[j](item.parts[j]);
                            }

                            for (; j < item.parts.length; j++) {
                                domStyle.parts.push(addStyle(item.parts[j], options));
                            }
                        } else {
                            var parts = [];

                            for (var j = 0; j < item.parts.length; j++) {
                                parts.push(addStyle(item.parts[j], options));
                            }

                            stylesInDom[item.id] = {
                                id: item.id,
                                refs: 1,
                                parts: parts
                            };
                        }
                    }
                }

                function listToStyles(list, options) {
                    var styles = [];
                    var newStyles = {};

                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        var id = options.base ? item[0] + options.base : item[0];
                        var css = item[1];
                        var media = item[2];
                        var sourceMap = item[3];
                        var part = {
                            css: css,
                            media: media,
                            sourceMap: sourceMap
                        };

                        if (!newStyles[id]) styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                        else newStyles[id].parts.push(part);
                    }

                    return styles;
                }

                function insertStyleElement(options, style) {
                    var target = getElement(options.insertInto)

                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    }

                    var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

                    if (options.insertAt === "top") {
                        if (!lastStyleElementInsertedAtTop) {
                            target.insertBefore(style, target.firstChild);
                        } else if (lastStyleElementInsertedAtTop.nextSibling) {
                            target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                        } else {
                            target.appendChild(style);
                        }
                        stylesInsertedAtTop.push(style);
                    } else if (options.insertAt === "bottom") {
                        target.appendChild(style);
                    } else if (typeof options.insertAt === "object" && options.insertAt.before) {
                        var nextSibling = getElement(options.insertAt.before, target);
                        target.insertBefore(style, nextSibling);
                    } else {
                        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    }
                }

                function removeStyleElement(style) {
                    if (style.parentNode === null) return false;
                    style.parentNode.removeChild(style);

                    var idx = stylesInsertedAtTop.indexOf(style);
                    if (idx >= 0) {
                        stylesInsertedAtTop.splice(idx, 1);
                    }
                }

                function createStyleElement(options) {
                    var style = document.createElement("style");

                    if (options.attrs.type === undefined) {
                        options.attrs.type = "text/css";
                    }

                    if (options.attrs.nonce === undefined) {
                        var nonce = getNonce();
                        if (nonce) {
                            options.attrs.nonce = nonce;
                        }
                    }

                    addAttrs(style, options.attrs);
                    insertStyleElement(options, style);

                    return style;
                }

                function createLinkElement(options) {
                    var link = document.createElement("link");

                    if (options.attrs.type === undefined) {
                        options.attrs.type = "text/css";
                    }
                    options.attrs.rel = "stylesheet";

                    addAttrs(link, options.attrs);
                    insertStyleElement(options, link);

                    return link;
                }

                function addAttrs(el, attrs) {
                    Object.keys(attrs).forEach(function(key) {
                        el.setAttribute(key, attrs[key]);
                    });
                }

                function getNonce() {
                    if (false) {}

                    return __webpack_require__.nc;
                }

                function addStyle(obj, options) {
                    var style, update, remove, result;

                    // If a transform function was defined, run it on the css
                    if (options.transform && obj.css) {
                        result = typeof options.transform === 'function' ?
                            options.transform(obj.css) :
                            options.transform.default(obj.css);

                        if (result) {
                            // If transform returns a value, use that instead of the original css.
                            // This allows running runtime transformations on the css.
                            obj.css = result;
                        } else {
                            // If the transform function returns a falsy value, don't add this css.
                            // This allows conditional loading of css
                            return function() {
                                // noop
                            };
                        }
                    }

                    if (options.singleton) {
                        var styleIndex = singletonCounter++;

                        style = singleton || (singleton = createStyleElement(options));

                        update = applyToSingletonTag.bind(null, style, styleIndex, false);
                        remove = applyToSingletonTag.bind(null, style, styleIndex, true);

                    } else if (
                        obj.sourceMap &&
                        typeof URL === "function" &&
                        typeof URL.createObjectURL === "function" &&
                        typeof URL.revokeObjectURL === "function" &&
                        typeof Blob === "function" &&
                        typeof btoa === "function"
                    ) {
                        style = createLinkElement(options);
                        update = updateLink.bind(null, style, options);
                        remove = function() {
                            removeStyleElement(style);

                            if (style.href) URL.revokeObjectURL(style.href);
                        };
                    } else {
                        style = createStyleElement(options);
                        update = applyToTag.bind(null, style);
                        remove = function() {
                            removeStyleElement(style);
                        };
                    }

                    update(obj);

                    return function updateStyle(newObj) {
                        if (newObj) {
                            if (
                                newObj.css === obj.css &&
                                newObj.media === obj.media &&
                                newObj.sourceMap === obj.sourceMap
                            ) {
                                return;
                            }

                            update(obj = newObj);
                        } else {
                            remove();
                        }
                    };
                }

                var replaceText = (function() {
                    var textStore = [];

                    return function(index, replacement) {
                        textStore[index] = replacement;

                        return textStore.filter(Boolean).join('\n');
                    };
                })();

                function applyToSingletonTag(style, index, remove, obj) {
                    var css = remove ? "" : obj.css;

                    if (style.styleSheet) {
                        style.styleSheet.cssText = replaceText(index, css);
                    } else {
                        var cssNode = document.createTextNode(css);
                        var childNodes = style.childNodes;

                        if (childNodes[index]) style.removeChild(childNodes[index]);

                        if (childNodes.length) {
                            style.insertBefore(cssNode, childNodes[index]);
                        } else {
                            style.appendChild(cssNode);
                        }
                    }
                }

                function applyToTag(style, obj) {
                    var css = obj.css;
                    var media = obj.media;

                    if (media) {
                        style.setAttribute("media", media)
                    }

                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    } else {
                        while (style.firstChild) {
                            style.removeChild(style.firstChild);
                        }

                        style.appendChild(document.createTextNode(css));
                    }
                }

                function updateLink(link, options, obj) {
                    var css = obj.css;
                    var sourceMap = obj.sourceMap;

                    /*
                    	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
                    	and there is no publicPath defined then lets turn convertToAbsoluteUrls
                    	on by default.  Otherwise default to the convertToAbsoluteUrls option
                    	directly
                    */
                    var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

                    if (options.convertToAbsoluteUrls || autoFixUrls) {
                        css = fixUrls(css);
                    }

                    if (sourceMap) {
                        // http://stackoverflow.com/a/26603875
                        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
                    }

                    var blob = new Blob([css], {
                        type: "text/css"
                    });

                    var oldSrc = link.href;

                    link.href = URL.createObjectURL(blob);

                    if (oldSrc) URL.revokeObjectURL(oldSrc);
                }


                /***/
            }),

        /***/
        "./node_modules/style-loader/lib/urls.js":
            /*!***********************************************!*\
              !*** ./node_modules/style-loader/lib/urls.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                /**
                 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
                 * embed the css on the page. This breaks all relative urls because now they are relative to a
                 * bundle instead of the current page.
                 *
                 * One solution is to only use full urls, but that may be impossible.
                 *
                 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
                 *
                 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
                 *
                 */
                module.exports = function(css) {
                    // get current location
                    var location = typeof window !== "undefined" && window.location;

                    if (!location) {
                        throw new Error("fixUrls requires window.location");
                    } // blank or null?


                    if (!css || typeof css !== "string") {
                        return css;
                    }

                    var baseUrl = location.protocol + "//" + location.host;
                    var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

                    /*
                    This regular expression is just a way to recursively match brackets within
                    a string.
                    	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
                       (  = Start a capturing group
                         (?:  = Start a non-capturing group
                             [^)(]  = Match anything that isn't a parentheses
                             |  = OR
                             \(  = Match a start parentheses
                                 (?:  = Start another non-capturing groups
                                     [^)(]+  = Match anything that isn't a parentheses
                                     |  = OR
                                     \(  = Match a start parentheses
                                         [^)(]*  = Match anything that isn't a parentheses
                                     \)  = Match a end parentheses
                                 )  = End Group
                                 *\) = Match anything and then a close parens
                             )  = Close non-capturing group
                             *  = Match anything
                          )  = Close capturing group
                     \)  = Match a close parens
                    	 /gi  = Get all matches, not the first.  Be case insensitive.
                     */

                    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
                        // strip quotes (if they exist)
                        var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                            return $1;
                        }).replace(/^'(.*)'$/, function(o, $1) {
                            return $1;
                        }); // already a full url? no change

                        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
                            return fullMatch;
                        } // convert the url to a full url


                        var newUrl;

                        if (unquotedOrigUrl.indexOf("//") === 0) {
                            //TODO: should we add protocol?
                            newUrl = unquotedOrigUrl;
                        } else if (unquotedOrigUrl.indexOf("/") === 0) {
                            // path should be relative to the base url
                            newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                        } else {
                            // path should be relative to current directory
                            newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
                        } // send back the fixed url(...)


                        return "url(" + JSON.stringify(newUrl) + ")";
                    }); // send back the fixed css

                    return fixedCss;
                };

                /***/
            }),

        /***/
        "./node_modules/tiny-emitter/index.js":
            /*!********************************************!*\
              !*** ./node_modules/tiny-emitter/index.js ***!
              \********************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                __webpack_require__( /*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

                function E() { // Keep this empty so it's easier to inherit from
                    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
                }

                E.prototype = {
                    on: function on(name, callback, ctx) {
                        var e = this.e || (this.e = {});
                        (e[name] || (e[name] = [])).push({
                            fn: callback,
                            ctx: ctx
                        });
                        return this;
                    },
                    once: function once(name, callback, ctx) {
                        var self = this;

                        function listener() {
                            self.off(name, listener);
                            callback.apply(ctx, arguments);
                        }

                        ;
                        listener._ = callback;
                        return this.on(name, listener, ctx);
                    },
                    emit: function emit(name) {
                        var data = [].slice.call(arguments, 1);
                        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                        var i = 0;
                        var len = evtArr.length;

                        for (i; i < len; i++) {
                            evtArr[i].fn.apply(evtArr[i].ctx, data);
                        }

                        return this;
                    },
                    off: function off(name, callback) {
                        var e = this.e || (this.e = {});
                        var evts = e[name];
                        var liveEvents = [];

                        if (evts && callback) {
                            for (var i = 0, len = evts.length; i < len; i++) {
                                if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                            }
                        } // Remove event from queue to prevent memory leak
                        // Suggested by https://github.com/lazd
                        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


                        liveEvents.length ? e[name] = liveEvents : delete e[name];
                        return this;
                    }
                };
                module.exports = E;
                module.exports.TinyEmitter = E;

                /***/
            }),

        /***/
        "./node_modules/url-polyfill/url-polyfill.js":
            /*!***************************************************!*\
              !*** ./node_modules/url-polyfill/url-polyfill.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";
                /* WEBPACK VAR INJECTION */
                (function(global) {

                    __webpack_require__( /*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

                    __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

                    __webpack_require__( /*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

                    __webpack_require__( /*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

                    __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                    __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                    __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                    function _typeof(obj) {
                        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            _typeof = function _typeof(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                        }
                        return _typeof(obj);
                    }

                    (function(global) {
                        /**
                         * Polyfill URLSearchParams
                         *
                         * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
                         */
                        var checkIfIteratorIsSupported = function checkIfIteratorIsSupported() {
                            try {
                                return !!Symbol.iterator;
                            } catch (error) {
                                return false;
                            }
                        };

                        var iteratorSupported = checkIfIteratorIsSupported();

                        var createIterator = function createIterator(items) {
                            var iterator = {
                                next: function next() {
                                    var value = items.shift();
                                    return {
                                        done: value === void 0,
                                        value: value
                                    };
                                }
                            };

                            if (iteratorSupported) {
                                iterator[Symbol.iterator] = function() {
                                    return iterator;
                                };
                            }

                            return iterator;
                        };
                        /**
                         * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
                         * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
                         */


                        var serializeParam = function serializeParam(value) {
                            return encodeURIComponent(value).replace(/%20/g, '+');
                        };

                        var deserializeParam = function deserializeParam(value) {
                            return decodeURIComponent(String(value).replace(/\+/g, ' '));
                        };

                        var polyfillURLSearchParams = function polyfillURLSearchParams() {
                            var URLSearchParams = function URLSearchParams(searchString) {
                                Object.defineProperty(this, '_entries', {
                                    writable: true,
                                    value: {}
                                });

                                var typeofSearchString = _typeof(searchString);

                                if (typeofSearchString === 'undefined') { // do nothing
                                } else if (typeofSearchString === 'string') {
                                    if (searchString !== '') {
                                        this._fromString(searchString);
                                    }
                                } else if (searchString instanceof URLSearchParams) {
                                    var _this = this;

                                    searchString.forEach(function(value, name) {
                                        _this.append(name, value);
                                    });
                                } else if (searchString !== null && typeofSearchString === 'object') {
                                    if (Object.prototype.toString.call(searchString) === '[object Array]') {
                                        for (var i = 0; i < searchString.length; i++) {
                                            var entry = searchString[i];

                                            if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
                                                this.append(entry[0], entry[1]);
                                            } else {
                                                throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
                                            }
                                        }
                                    } else {
                                        for (var key in searchString) {
                                            if (searchString.hasOwnProperty(key)) {
                                                this.append(key, searchString[key]);
                                            }
                                        }
                                    }
                                } else {
                                    throw new TypeError('Unsupported input\'s type for URLSearchParams');
                                }
                            };

                            var proto = URLSearchParams.prototype;

                            proto.append = function(name, value) {
                                if (name in this._entries) {
                                    this._entries[name].push(String(value));
                                } else {
                                    this._entries[name] = [String(value)];
                                }
                            };

                            proto.delete = function(name) {
                                delete this._entries[name];
                            };

                            proto.get = function(name) {
                                return name in this._entries ? this._entries[name][0] : null;
                            };

                            proto.getAll = function(name) {
                                return name in this._entries ? this._entries[name].slice(0) : [];
                            };

                            proto.has = function(name) {
                                return name in this._entries;
                            };

                            proto.set = function(name, value) {
                                this._entries[name] = [String(value)];
                            };

                            proto.forEach = function(callback, thisArg) {
                                var entries;

                                for (var name in this._entries) {
                                    if (this._entries.hasOwnProperty(name)) {
                                        entries = this._entries[name];

                                        for (var i = 0; i < entries.length; i++) {
                                            callback.call(thisArg, entries[i], name, this);
                                        }
                                    }
                                }
                            };

                            proto.keys = function() {
                                var items = [];
                                this.forEach(function(value, name) {
                                    items.push(name);
                                });
                                return createIterator(items);
                            };

                            proto.values = function() {
                                var items = [];
                                this.forEach(function(value) {
                                    items.push(value);
                                });
                                return createIterator(items);
                            };

                            proto.entries = function() {
                                var items = [];
                                this.forEach(function(value, name) {
                                    items.push([name, value]);
                                });
                                return createIterator(items);
                            };

                            if (iteratorSupported) {
                                proto[Symbol.iterator] = proto.entries;
                            }

                            proto.toString = function() {
                                var searchArray = [];
                                this.forEach(function(value, name) {
                                    searchArray.push(serializeParam(name) + '=' + serializeParam(value));
                                });
                                return searchArray.join('&');
                            };

                            global.URLSearchParams = URLSearchParams;
                        };

                        var checkIfURLSearchParamsSupported = function checkIfURLSearchParamsSupported() {
                            try {
                                var URLSearchParams = global.URLSearchParams;
                                return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function';
                            } catch (e) {
                                return false;
                            }
                        };

                        if (!checkIfURLSearchParamsSupported()) {
                            polyfillURLSearchParams();
                        }

                        var proto = global.URLSearchParams.prototype;

                        if (typeof proto.sort !== 'function') {
                            proto.sort = function() {
                                var _this = this;

                                var items = [];
                                this.forEach(function(value, name) {
                                    items.push([name, value]);

                                    if (!_this._entries) {
                                        _this.delete(name);
                                    }
                                });
                                items.sort(function(a, b) {
                                    if (a[0] < b[0]) {
                                        return -1;
                                    } else if (a[0] > b[0]) {
                                        return +1;
                                    } else {
                                        return 0;
                                    }
                                });

                                if (_this._entries) {
                                    // force reset because IE keeps keys index
                                    _this._entries = {};
                                }

                                for (var i = 0; i < items.length; i++) {
                                    this.append(items[i][0], items[i][1]);
                                }
                            };
                        }

                        if (typeof proto._fromString !== 'function') {
                            Object.defineProperty(proto, '_fromString', {
                                enumerable: false,
                                configurable: false,
                                writable: false,
                                value: function value(searchString) {
                                    if (this._entries) {
                                        this._entries = {};
                                    } else {
                                        var keys = [];
                                        this.forEach(function(value, name) {
                                            keys.push(name);
                                        });

                                        for (var i = 0; i < keys.length; i++) {
                                            this.delete(keys[i]);
                                        }
                                    }

                                    searchString = searchString.replace(/^\?/, '');
                                    var attributes = searchString.split('&');
                                    var attribute;

                                    for (var i = 0; i < attributes.length; i++) {
                                        attribute = attributes[i].split('=');
                                        this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
                                    }
                                }
                            });
                        } // HTMLAnchorElement

                    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);

                    (function(global) {
                        /**
                         * Polyfill URL
                         *
                         * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
                         */
                        var checkIfURLIsSupported = function checkIfURLIsSupported() {
                            try {
                                var u = new global.URL('b', 'http://a');
                                u.pathname = 'c d';
                                return u.href === 'http://a/c%20d' && u.searchParams;
                            } catch (e) {
                                return false;
                            }
                        };

                        var polyfillURL = function polyfillURL() {
                            var _URL = global.URL;

                            var URL = function URL(url, base) {
                                if (typeof url !== 'string') url = String(url); // Only create another document if the base is different from current location.

                                var doc = document,
                                    baseElement;

                                if (base && (global.location === void 0 || base !== global.location.href)) {
                                    doc = document.implementation.createHTMLDocument('');
                                    baseElement = doc.createElement('base');
                                    baseElement.href = base;
                                    doc.head.appendChild(baseElement);

                                    try {
                                        if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
                                    } catch (err) {
                                        throw new Error('URL unable to set base ' + base + ' due to ' + err);
                                    }
                                }

                                var anchorElement = doc.createElement('a');
                                anchorElement.href = url;

                                if (baseElement) {
                                    doc.body.appendChild(anchorElement);
                                    anchorElement.href = anchorElement.href; // force href to refresh
                                }

                                if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
                                    throw new TypeError('Invalid URL');
                                }

                                Object.defineProperty(this, '_anchorElement', {
                                    value: anchorElement
                                }); // create a linked searchParams which reflect its changes on URL

                                var searchParams = new global.URLSearchParams(this.search);
                                var enableSearchUpdate = true;
                                var enableSearchParamsUpdate = true;

                                var _this = this;

                                ['append', 'delete', 'set'].forEach(function(methodName) {
                                    var method = searchParams[methodName];

                                    searchParams[methodName] = function() {
                                        method.apply(searchParams, arguments);

                                        if (enableSearchUpdate) {
                                            enableSearchParamsUpdate = false;
                                            _this.search = searchParams.toString();
                                            enableSearchParamsUpdate = true;
                                        }
                                    };
                                });
                                Object.defineProperty(this, 'searchParams', {
                                    value: searchParams,
                                    enumerable: true
                                });
                                var search = void 0;
                                Object.defineProperty(this, '_updateSearchParams', {
                                    enumerable: false,
                                    configurable: false,
                                    writable: false,
                                    value: function value() {
                                        if (this.search !== search) {
                                            search = this.search;

                                            if (enableSearchParamsUpdate) {
                                                enableSearchUpdate = false;

                                                this.searchParams._fromString(this.search);

                                                enableSearchUpdate = true;
                                            }
                                        }
                                    }
                                });
                            };

                            var proto = URL.prototype;

                            var linkURLWithAnchorAttribute = function linkURLWithAnchorAttribute(attributeName) {
                                Object.defineProperty(proto, attributeName, {
                                    get: function get() {
                                        return this._anchorElement[attributeName];
                                    },
                                    set: function set(value) {
                                        this._anchorElement[attributeName] = value;
                                    },
                                    enumerable: true
                                });
                            };

                            ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function(attributeName) {
                                linkURLWithAnchorAttribute(attributeName);
                            });
                            Object.defineProperty(proto, 'search', {
                                get: function get() {
                                    return this._anchorElement['search'];
                                },
                                set: function set(value) {
                                    this._anchorElement['search'] = value;

                                    this._updateSearchParams();
                                },
                                enumerable: true
                            });
                            Object.defineProperties(proto, {
                                'toString': {
                                    get: function get() {
                                        var _this = this;

                                        return function() {
                                            return _this.href;
                                        };
                                    }
                                },
                                'href': {
                                    get: function get() {
                                        return this._anchorElement.href.replace(/\?$/, '');
                                    },
                                    set: function set(value) {
                                        this._anchorElement.href = value;

                                        this._updateSearchParams();
                                    },
                                    enumerable: true
                                },
                                'pathname': {
                                    get: function get() {
                                        return this._anchorElement.pathname.replace(/(^\/?)/, '/');
                                    },
                                    set: function set(value) {
                                        this._anchorElement.pathname = value;
                                    },
                                    enumerable: true
                                },
                                'origin': {
                                    get: function get() {
                                        // get expected port from protocol
                                        var expectedPort = {
                                            'http:': 80,
                                            'https:': 443,
                                            'ftp:': 21
                                        }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
                                        // and it is not empty f.e http://foo:8080
                                        // 8080 != 80 && 8080 != ''

                                        var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
                                        return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
                                    },
                                    enumerable: true
                                },
                                'password': {
                                    // TODO
                                    get: function get() {
                                        return '';
                                    },
                                    set: function set(value) {},
                                    enumerable: true
                                },
                                'username': {
                                    // TODO
                                    get: function get() {
                                        return '';
                                    },
                                    set: function set(value) {},
                                    enumerable: true
                                }
                            });

                            URL.createObjectURL = function(blob) {
                                return _URL.createObjectURL.apply(_URL, arguments);
                            };

                            URL.revokeObjectURL = function(url) {
                                return _URL.revokeObjectURL.apply(_URL, arguments);
                            };

                            global.URL = URL;
                        };

                        if (!checkIfURLIsSupported()) {
                            polyfillURL();
                        }

                        if (global.location !== void 0 && !('origin' in global.location)) {
                            var getOrigin = function getOrigin() {
                                return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
                            };

                            try {
                                Object.defineProperty(global.location, 'origin', {
                                    get: getOrigin,
                                    enumerable: true
                                });
                            } catch (e) {
                                setInterval(function() {
                                    global.location.origin = getOrigin();
                                }, 100);
                            }
                        }
                    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : void 0);
                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

                /***/
            }),

        /***/
        "./node_modules/url-search-params-polyfill/index.js":
            /*!**********************************************************!*\
              !*** ./node_modules/url-search-params-polyfill/index.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";
                /* WEBPACK VAR INJECTION */
                (function(global) {

                    __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                    __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                    __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

                    __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

                    __webpack_require__( /*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

                    __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

                    __webpack_require__( /*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

                    function _typeof(obj) {
                        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            _typeof = function _typeof(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                        }
                        return _typeof(obj);
                    }

                    /**
                     *
                     *
                     * @author Jerry Bendy <jerry@icewingcc.com>
                     * @licence MIT
                     *
                     */
                    (function(self) {
                        'use strict';

                        var nativeURLSearchParams = self.URLSearchParams ? self.URLSearchParams : null,
                            isSupportObjectConstructor = nativeURLSearchParams && new nativeURLSearchParams({
                                a: 1
                            }).toString() === 'a=1',
                            // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
                            decodesPlusesCorrectly = nativeURLSearchParams && new nativeURLSearchParams('s=%2B').get('s') === '+',
                            __URLSearchParams__ = "__URLSearchParams__",
                            // Fix bug in Edge which cannot encode ' &' correctly
                            encodesAmpersandsCorrectly = nativeURLSearchParams ? function() {
                                var ampersandTest = new nativeURLSearchParams();
                                ampersandTest.append('s', ' &');
                                return ampersandTest.toString() === 's=+%26';
                            }() : true,
                            prototype = URLSearchParamsPolyfill.prototype,
                            iterable = !!(self.Symbol && self.Symbol.iterator);

                        if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
                            return;
                        }
                        /**
                         * Make a URLSearchParams instance
                         *
                         * @param {object|string|URLSearchParams} search
                         * @constructor
                         */


                        function URLSearchParamsPolyfill(search) {
                            search = search || ""; // support construct object with another URLSearchParams instance

                            if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
                                search = search.toString();
                            }

                            this[__URLSearchParams__] = parseToDict(search);
                        }
                        /**
                         * Appends a specified key/value pair as a new search parameter.
                         *
                         * @param {string} name
                         * @param {string} value
                         */


                        prototype.append = function(name, value) {
                            appendTo(this[__URLSearchParams__], name, value);
                        };
                        /**
                         * Deletes the given search parameter, and its associated value,
                         * from the list of all search parameters.
                         *
                         * @param {string} name
                         */


                        prototype.delete = function(name) {
                            delete this[__URLSearchParams__][name];
                        };
                        /**
                         * Returns the first value associated to the given search parameter.
                         *
                         * @param {string} name
                         * @returns {string|null}
                         */


                        prototype.get = function(name) {
                            var dict = this[__URLSearchParams__];
                            return name in dict ? dict[name][0] : null;
                        };
                        /**
                         * Returns all the values association with a given search parameter.
                         *
                         * @param {string} name
                         * @returns {Array}
                         */


                        prototype.getAll = function(name) {
                            var dict = this[__URLSearchParams__];
                            return name in dict ? dict[name].slice(0) : [];
                        };
                        /**
                         * Returns a Boolean indicating if such a search parameter exists.
                         *
                         * @param {string} name
                         * @returns {boolean}
                         */


                        prototype.has = function(name) {
                            return name in this[__URLSearchParams__];
                        };
                        /**
                         * Sets the value associated to a given search parameter to
                         * the given value. If there were several values, delete the
                         * others.
                         *
                         * @param {string} name
                         * @param {string} value
                         */


                        prototype.set = function set(name, value) {
                            this[__URLSearchParams__][name] = ['' + value];
                        };
                        /**
                         * Returns a string containg a query string suitable for use in a URL.
                         *
                         * @returns {string}
                         */


                        prototype.toString = function() {
                            var dict = this[__URLSearchParams__],
                                query = [],
                                i,
                                key,
                                name,
                                value;

                            for (key in dict) {
                                name = encode(key);

                                for (i = 0, value = dict[key]; i < value.length; i++) {
                                    query.push(name + '=' + encode(value[i]));
                                }
                            }

                            return query.join('&');
                        }; // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.


                        var forSureUsePolyfill = !decodesPlusesCorrectly;
                        var useProxy = !forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy;
                        /*
                         * Apply polifill to global object and append other prototype into it
                         */

                        self.URLSearchParams = useProxy ? // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
                            new Proxy(nativeURLSearchParams, {
                                construct: function construct(target, args) {
                                    return new target(new URLSearchParamsPolyfill(args[0]).toString());
                                }
                            }) : URLSearchParamsPolyfill;
                        var USPProto = self.URLSearchParams.prototype;
                        USPProto.polyfill = true;
                        /**
                         *
                         * @param {function} callback
                         * @param {object} thisArg
                         */

                        USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
                            var dict = parseToDict(this.toString());
                            Object.getOwnPropertyNames(dict).forEach(function(name) {
                                dict[name].forEach(function(value) {
                                    callback.call(thisArg, value, name, this);
                                }, this);
                            }, this);
                        };
                        /**
                         * Sort all name-value pairs
                         */


                        USPProto.sort = USPProto.sort || function() {
                            var dict = parseToDict(this.toString()),
                                keys = [],
                                k,
                                i,
                                j;

                            for (k in dict) {
                                keys.push(k);
                            }

                            keys.sort();

                            for (i = 0; i < keys.length; i++) {
                                this.delete(keys[i]);
                            }

                            for (i = 0; i < keys.length; i++) {
                                var key = keys[i],
                                    values = dict[key];

                                for (j = 0; j < values.length; j++) {
                                    this.append(key, values[j]);
                                }
                            }
                        };
                        /**
                         * Returns an iterator allowing to go through all keys of
                         * the key/value pairs contained in this object.
                         *
                         * @returns {function}
                         */


                        USPProto.keys = USPProto.keys || function() {
                            var items = [];
                            this.forEach(function(item, name) {
                                items.push(name);
                            });
                            return makeIterator(items);
                        };
                        /**
                         * Returns an iterator allowing to go through all values of
                         * the key/value pairs contained in this object.
                         *
                         * @returns {function}
                         */


                        USPProto.values = USPProto.values || function() {
                            var items = [];
                            this.forEach(function(item) {
                                items.push(item);
                            });
                            return makeIterator(items);
                        };
                        /**
                         * Returns an iterator allowing to go through all key/value
                         * pairs contained in this object.
                         *
                         * @returns {function}
                         */


                        USPProto.entries = USPProto.entries || function() {
                            var items = [];
                            this.forEach(function(item, name) {
                                items.push([name, item]);
                            });
                            return makeIterator(items);
                        };

                        if (iterable) {
                            USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
                        }

                        function encode(str) {
                            var replace = {
                                '!': '%21',
                                "'": '%27',
                                '(': '%28',
                                ')': '%29',
                                '~': '%7E',
                                '%20': '+',
                                '%00': '\x00'
                            };
                            return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
                                return replace[match];
                            });
                        }

                        function decode(str) {
                            return decodeURIComponent(str.replace(/\+/g, ' '));
                        }

                        function makeIterator(arr) {
                            var iterator = {
                                next: function next() {
                                    var value = arr.shift();
                                    return {
                                        done: value === undefined,
                                        value: value
                                    };
                                }
                            };

                            if (iterable) {
                                iterator[self.Symbol.iterator] = function() {
                                    return iterator;
                                };
                            }

                            return iterator;
                        }

                        function parseToDict(search) {
                            var dict = {};

                            if (_typeof(search) === "object") {
                                for (var key in search) {
                                    if (search.hasOwnProperty(key)) {
                                        appendTo(dict, key, search[key]);
                                    }
                                }
                            } else {
                                // remove first '?'
                                if (search.indexOf("?") === 0) {
                                    search = search.slice(1);
                                }

                                var pairs = search.split("&");

                                for (var j = 0; j < pairs.length; j++) {
                                    var value = pairs[j],
                                        index = value.indexOf('=');

                                    if (-1 < index) {
                                        appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
                                    } else {
                                        if (value) {
                                            appendTo(dict, decode(value), '');
                                        }
                                    }
                                }
                            }

                            return dict;
                        }

                        function appendTo(dict, name, value) {
                            var val = typeof value === 'string' ? value : value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value);

                            if (name in dict) {
                                dict[name].push(val);
                            } else {
                                dict[name] = [val];
                            }
                        }
                    })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : void 0);
                    /* WEBPACK VAR INJECTION */
                }.call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

                /***/
            }),

        /***/
        "./node_modules/webpack/buildin/global.js":
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                function _typeof(obj) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                var g; // This works in non-strict mode

                g = function() {
                    return this;
                }();

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || new Function("return this")();
                } catch (e) {
                    // This works if the window reference is available
                    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
                } // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}


                module.exports = g;

                /***/
            }),

        /***/
        "./src/defaults.js":
            /*!*************************!*\
              !*** ./src/defaults.js ***!
              \*************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _default = {
                    allowCancel: true,
                    debug: false,
                    skipDomainVerification: false,
                    testMode: false,
                    timeout: 30000 // 30 seconds

                };
                exports.default = _default;

                /***/
            }),

        /***/
        "./src/embedded.js":
            /*!*************************!*\
              !*** ./src/embedded.js ***!
              \*************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                __webpack_require__( /*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");

                __webpack_require__( /*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

                __webpack_require__( /*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

                __webpack_require__( /*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

                __webpack_require__( /*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

                __webpack_require__( /*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

                __webpack_require__( /*! core-js/modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");

                __webpack_require__( /*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

                __webpack_require__( /*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");

                __webpack_require__( /*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

                __webpack_require__( /*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");

                var _tinyEmitter = _interopRequireDefault(__webpack_require__( /*! tiny-emitter */ "./node_modules/tiny-emitter/index.js"));

                var _commonTags = __webpack_require__( /*! common-tags */ "./node_modules/common-tags/es/index.js");

                var _debug = _interopRequireDefault(__webpack_require__( /*! ./utils/debug */ "./src/utils/debug.js"));

                var _defaults = _interopRequireDefault(__webpack_require__( /*! ./defaults */ "./src/defaults.js"));

                var _settings = _interopRequireDefault(__webpack_require__( /*! ./settings */ "./src/settings.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                function _templateObject4() {
                    var data = _taggedTemplateLiteral(["\n            <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\"></iframe>\n          </div>\n        </div>\n      "]);

                    _templateObject4 = function _templateObject4() {
                        return data;
                    };

                    return data;
                }

                function _templateObject3() {
                    var data = _taggedTemplateLiteral(["\n          <div class=", ">\n            <button class=", " role=\"button\" title=\"Close signature request\"></button>\n          </div>\n        "]);

                    _templateObject3 = function _templateObject3() {
                        return data;
                    };

                    return data;
                }

                function _templateObject2() {
                    var data = _taggedTemplateLiteral(["\n        <div class=\"", " ", "\">\n          <div class=\"", "\"></div>\n          <div class=\"", "\">\n      "]);

                    _templateObject2 = function _templateObject2() {
                        return data;
                    };

                    return data;
                }

                function _templateObject() {
                    var data = _taggedTemplateLiteral(["\n        <div class=\"", "\">\n          <iframe class=\"", "\" name=\"", "\" src=\"", "\" scrolling=\"no\"></iframe>\n        </div>\n      "]);

                    _templateObject = function _templateObject() {
                        return data;
                    };

                    return data;
                }

                function _taggedTemplateLiteral(strings, raw) {
                    if (!raw) {
                        raw = strings.slice(0);
                    }
                    return Object.freeze(Object.defineProperties(strings, {
                        raw: {
                            value: Object.freeze(raw)
                        }
                    }));
                }

                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i] != null ? arguments[i] : {};
                        var ownKeys = Object.keys(source);
                        if (typeof Object.getOwnPropertySymbols === 'function') {
                            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                            }));
                        }
                        ownKeys.forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        });
                    }
                    return target;
                }

                function _typeof(obj) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                        _typeof = function _typeof(obj) {
                            return typeof obj;
                        };
                    } else {
                        _typeof = function _typeof(obj) {
                            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                        };
                    }
                    return _typeof(obj);
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }

                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) {
                        return call;
                    }
                    return _assertThisInitialized(self);
                }

                function _get(target, property, receiver) {
                    if (typeof Reflect !== "undefined" && Reflect.get) {
                        _get = Reflect.get;
                    } else {
                        _get = function _get(target, property, receiver) {
                            var base = _superPropBase(target, property);
                            if (!base) return;
                            var desc = Object.getOwnPropertyDescriptor(base, property);
                            if (desc.get) {
                                return desc.get.call(receiver);
                            }
                            return desc.value;
                        };
                    }
                    return _get(target, property, receiver || target);
                }

                function _superPropBase(object, property) {
                    while (!Object.prototype.hasOwnProperty.call(object, property)) {
                        object = _getPrototypeOf(object);
                        if (object === null) break;
                    }
                    return object;
                }

                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o);
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }

                function _setPrototypeOf(o, p) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o, p);
                }

                function _assertThisInitialized(self) {
                    if (self === void 0) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self;
                }

                function _defineProperty(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }

                var HelloSign =
                    /*#__PURE__*/
                    function(_Emitter) {
                        _inherits(HelloSign, _Emitter);

                        /**
                         * HelloSign Embedded class names.
                         *
                         * @enum {string}
                         * @static
                         * @readonly
                         */

                        /**
                         * HelloSign Embedded events.
                         *
                         * @enum {string}
                         * @static
                         * @readonly
                         */

                        /**
                         * HelloSign Embedded supported locales.
                         *
                         * @enum {string}
                         * @static
                         * @readonly
                         */

                        /**
                         * HelloSign Embedded cross-origin window messages.
                         *
                         * @enum {string}
                         * @static
                         * @readonly
                         */

                        /**
                         * HelloSign Embedded version number.
                         *
                         * @enum {string}
                         * @static
                         * @readonly
                         */

                        /**
                         * The base config object which "open" will extend.
                         *
                         * @type {?Object}
                         * @private
                         */

                        /**
                         * A reference to the base HelloSign Embedded container
                         * element.
                         *
                         * @type {?HTMLElement}
                         * @private
                         */

                        /**
                         * The final config object.
                         *
                         * @type {?Object}
                         * @private
                         */

                        /**
                         * The iFrame URL object.
                         *
                         * @type {?URL}
                         * @private
                         */

                        /**
                         * A reference to the iFrame element.
                         *
                         * @type {?HTMLElement}
                         * @private
                         */

                        /**
                         * The initialization timeout timer.
                         *
                         * @type {?number}
                         * @private
                         */

                        /**
                         * Whether the client is open or not.
                         *
                         * @type {boolean}
                         * @private
                         */

                        /**
                         * Whether the app is ready or not.
                         *
                         * @type {boolean}
                         * @private
                         */

                        /**
                         * Whether the signature request has been sent or signed.
                         *
                         * @type {boolean}
                         * @private
                         */

                        /**
                         * @type {Function}
                         * @private
                         */

                        /**
                         * @type {Function}
                         * @private
                         */

                        /**
                         * @type {Function}
                         * @private
                         */

                        /**
                         * @type {Function}
                         * @private
                         */

                        /**
                         * Creates a new HelloSign Embedded instance.
                         *
                         * @param {Object} [obj]
                         * @constructor
                         */
                        function HelloSign() {
                            var _this;

                            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            _classCallCheck(this, HelloSign);

                            _this = _possibleConstructorReturn(this, _getPrototypeOf(HelloSign).call(this));

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_baseConfig", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_baseEl", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_config", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_iFrameURL", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_iFrameEl", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_initTimeout", null);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isOpen", false);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isReady", false);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_isSentOrSigned", false);

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onEmbeddedClick", _this._onEmbeddedClick.bind(_assertThisInitialized(_assertThisInitialized(_this))));

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onInitTimeout", _this._onInitTimeout.bind(_assertThisInitialized(_assertThisInitialized(_this))));

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onBeforeUnload", _this._onBeforeUnload.bind(_assertThisInitialized(_assertThisInitialized(_this))));

                            _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onMessage", _this._onMessage.bind(_assertThisInitialized(_assertThisInitialized(_this))));

                            _debug.default.info('created new HelloSign instance with options', obj);

                            if (obj && _typeof(obj) === 'object') {
                                _this._baseConfig = _objectSpread({}, obj);
                            } else {
                                throw new TypeError('Configuration must be an object');
                            }

                            return _this;
                        }
                        /**
                         * Validates and appends the "client_id" parameter to the
                         * iFrame params object.
                         *
                         * @throws {TypeError} if clientId is invalid
                         * @param {URLSearchParams} params
                         * @private
                         */


                        _createClass(HelloSign, [{
                            key: "_applyClientId",
                            value: function _applyClientId(params) {
                                var val = this._config.clientId;

                                if (!val) {
                                    throw new TypeError('"clientId" is required');
                                }

                                if (typeof val !== 'string') {
                                    throw new TypeError('"clientId" must be a string');
                                }

                                params.append('client_id', val);
                            }
                            /**
                             * Validates and appends the "debug" parameter to the
                             * iFrame params object.
                             *
                             * @throws {TypeError} if debug is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyDebug",
                            value: function _applyDebug(params) {
                                var val = this._config.debug;

                                if (typeof val !== 'boolean') {
                                    throw new TypeError('"debug" must be a boolean');
                                }

                                params.append('debug', val ? 1 : 0);
                            }
                            /**
                             * Validates and appends the "final_button_text" parameter
                             * to the iFrame params object.
                             *
                             * @throws {TypeError} if finalButtonText is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyFinalButtonText",
                            value: function _applyFinalButtonText(params) {
                                if ('finalButtonText' in this._config) {
                                    var val = this._config.finalButtonText;

                                    if (typeof val !== 'string') {
                                        throw new TypeError('"finalButtonText" must be a string');
                                    }

                                    if (!['Save', 'Send', 'Continue'].includes(val)) {
                                        throw new TypeError('"finalButtonText" must be one of "Save", "Send", or "Continue"');
                                    }

                                    params.append('final_button_text', val);
                                }
                            }
                            /**
                             * Validates and appends the "hide_header" parameter to the
                             * iFrame params object.
                             *
                             * @throws {TypeError} if hideHeader is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyHideHeader",
                            value: function _applyHideHeader(params) {
                                if ('hideHeader' in this._config) {
                                    var val = this._config.hideHeader;

                                    if (typeof val !== 'boolean') {
                                        throw new TypeError('"hideHeader" must be a boolean');
                                    }

                                    params.append('hide_header', val);
                                }
                            }
                            /**
                             * Appends the "user_culture" parameter to the iFrame
                             * params object if it is defined.
                             *
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyLocale",
                            value: function _applyLocale(params) {
                                var val = this._config.locale; // If "locale" is not defined, then the "user_culture"
                                // param is not sent to the app. This tells the app to
                                // try use the user's default browser language, if it
                                // is supported by HelloSign. Otherwise, the app falls
                                // back to English.

                                if (val && val.length) {
                                    params.append('user_culture', val);
                                }
                            }
                            /**
                             * Appends the "parent_url" parameter to the iFrame params
                             * object.
                             *
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyParentURL",
                            value: function _applyParentURL(params) {
                                params.append('parent_url', document.location.href);
                            }
                            /**
                             * Validates and appends the "redirect_url" parameter to
                             * the iFrame params object.
                             *
                             * @throws {TypeError} if redirectTo is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyRedirectTo",
                            value: function _applyRedirectTo(params) {
                                if ('redirectTo' in this._config) {
                                    var val = this._config.redirectTo;

                                    if (typeof val !== 'string') {
                                        throw new TypeError('"redirectTo" must be a string');
                                    }

                                    params.append('redirect_url', val);
                                }
                            }
                            /**
                             * Validates and appends the "requester" parameter to the
                             * iFrame params object.
                             *
                             * @throws {TypeError} if requestingEmail is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyRequestingEmail",
                            value: function _applyRequestingEmail(params) {
                                if ('requestingEmail' in this._config) {
                                    var val = this._config.requestingEmail;

                                    if (typeof val !== 'string') {
                                        throw new TypeError('"requestingEmail" must be a string');
                                    }

                                    params.append('requester', val);
                                }
                            }
                            /**
                             * Validates and appends the "skip_domain_verification"
                             * parameter to the iFrame params object.
                             *
                             * @throws {TypeError} if testMode is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyTestMode",
                            value: function _applyTestMode(params) {
                                var val = this._config.skipDomainVerification || this._config.testMode;

                                if (typeof val !== 'boolean') {
                                    throw new TypeError('"testMode" must be a boolean');
                                }

                                params.append('skip_domain_verification', val ? 1 : 0);
                            }
                            /**
                             * Validates and appends the "white_labeling_options"
                             * parameter to the iFrame params object.
                             *
                             * @throws {TypeError} if whiteLabeling is invalid
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyWhiteLabeling",
                            value: function _applyWhiteLabeling(params) {
                                if ('whiteLabeling' in this._config) {
                                    var val = this._config.whiteLabeling;

                                    if (_typeof(val) !== 'object') {
                                        throw new TypeError('"whiteLabeling" must be an object');
                                    }

                                    params.append('white_labeling_options', JSON.stringify(val));
                                }
                            }
                            /**
                             * Appends the "ux_version" parameter to the iFrame
                             * params object.
                             *
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyUxVersion",
                            value: function _applyUxVersion(params) {
                                params.append('ux_version', '2');
                            }
                            /**
                             * Appends the "js_version" parameter to the iFrame params
                             * object.
                             *
                             * @param {URLSearchParams} params
                             * @private
                             */

                        }, {
                            key: "_applyVersion",
                            value: function _applyVersion(params) {
                                params.append('js_version', "2.10.0");
                            }
                            /**
                             * Validates and crates the iFrame params object.
                             *
                             * @param {URL} frameURL
                             * @returns {URLSearchParams}
                             * @private
                             */

                        }, {
                            key: "_getFrameParams",
                            value: function _getFrameParams(frameURL) {
                                var params = new URLSearchParams(frameURL.search);

                                this._applyClientId(params);

                                this._applyDebug(params);

                                this._applyFinalButtonText(params);

                                this._applyHideHeader(params);

                                this._applyLocale(params);

                                this._applyParentURL(params);

                                this._applyRedirectTo(params);

                                this._applyRequestingEmail(params);

                                this._applyTestMode(params);

                                this._applyUxVersion(params);

                                this._applyVersion(params);

                                this._applyWhiteLabeling(params);

                                return params;
                            }
                            /**
                             * Calculates and sets the iFrame frame src.
                             *
                             * @param {string} url
                             * @private
                             */

                        }, {
                            key: "_updateFrameUrl",
                            value: function _updateFrameUrl(url) {
                                var frameURL = new URL(url);

                                var frameParams = this._getFrameParams(frameURL);

                                frameURL.search = frameParams.toString();
                                this._iFrameURL = frameURL;
                            }
                            /**
                             * Renders the HelloSign Embedded markup.
                             *
                             * We would like to have used HTML Content Templates or
                             * Range.createContextualFragment() but we are concerned
                             * about browser support.
                             *
                             * @returns {HTMLElement}
                             * @private
                             */

                        }, {
                            key: "_renderMarkup",
                            value: function _renderMarkup() {
                                var elem = document.createElement('div');

                                if (this._config.container) {
                                    elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject(), _settings.default.classNames.BASE, _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
                                } else {
                                    elem.innerHTML = (0, _commonTags.safeHtml)(_templateObject2(), _settings.default.classNames.BASE, _settings.default.classNames.BASE_IN_MODAL, _settings.default.classNames.MODAL_SCREEN, _settings.default.classNames.MODAL_CONTENT) + (this._config.allowCancel ? (0, _commonTags.safeHtml)(_templateObject3(), _settings.default.classNames.MODAL_CLOSE, _settings.default.classNames.MODAL_CLOSE_BTN) : '') + (0, _commonTags.safeHtml)(_templateObject4(), _settings.default.classNames.IFRAME, _settings.default.iframe.NAME, this._iFrameURL.href);
                                }

                                return elem.firstChild;
                            }
                            /**
                             * Renders the HelloSign Embedded markup into the DOM.
                             *
                             * @private
                             */

                        }, {
                            key: "_appendMarkup",
                            value: function _appendMarkup() {
                                this._baseEl = this._renderMarkup(); // Listen for click events within the HelloSign
                                // Embedded DOM markup. These will be delegated
                                // depending on the source element.

                                this._baseEl.addEventListener('click', this._onEmbeddedClick); // Obtain element references.


                                this._iFrameEl = this._baseEl.getElementsByClassName(_settings.default.classNames.IFRAME).item(0); // Insert HelloSign Embedded markup into the DOM.

                                if (this._config.container) {
                                    this._config.container.appendChild(this._baseEl);
                                } else {
                                    document.body.appendChild(this._baseEl);
                                }
                            }
                            /**
                             * Removes the HelloSign Embedded markup from the DOM.
                             *
                             *
                             * @private
                             */

                        }, {
                            key: "_clearMarkup",
                            value: function _clearMarkup() {
                                this._baseEl.parentElement.removeChild(this._baseEl);
                            }
                            /**
                             * @typedef {Object} HelloSignMessage
                             * @property {string} type
                             * @property {Object} [payload]
                             */

                            /**
                             * Posts a cross-origin window message to the HelloSign
                             * Embedded iFrame content window.
                             *
                             * @param {HelloSignMessage} msg
                             * @private
                             */

                        }, {
                            key: "_sendMessage",
                            value: function _sendMessage(msg) {
                                _debug.default.info('posting message', msg);

                                var targetOrigin = this._iFrameURL.href;
                                var targetWindow = this._iFrameEl.contentWindow;
                                targetWindow.postMessage(msg, targetOrigin);
                            }
                            /**
                             * Sends a cancel request message to the app.
                             *
                             * @private
                             */

                        }, {
                            key: "_sendCancelRequestMessage",
                            value: function _sendCancelRequestMessage() {
                                _debug.default.info('sending cancel request message');

                                this._sendMessage({
                                    type: _settings.default.messages.USER_CANCEL_REQUEST
                                });
                            }
                            /**
                             * Sends the configuration message to the app.
                             *
                             * @private
                             */

                        }, {
                            key: "_sendConfigurationMessage",
                            value: function _sendConfigurationMessage() {
                                _debug.default.info('sending app configuration message');

                                this._sendMessage({
                                    type: _settings.default.messages.APP_CONFIGURE,
                                    payload: {
                                        allowCancel: this._config.allowCancel
                                    }
                                });
                            }
                            /**
                             * Sends the domain verification response.
                             *
                             * @param {string} token
                             * @private
                             */

                        }, {
                            key: "_sendDomainVerificationMessage",
                            value: function _sendDomainVerificationMessage(token) {
                                _debug.default.info('sending domain verification message', token);

                                this._sendMessage({
                                    type: _settings.default.messages.APP_VERIFY_DOMAIN_RESPONSE,
                                    payload: {
                                        token: token
                                    }
                                });
                            }
                            /**
                             * Sends the initialization error message.
                             *
                             * @private
                             */

                        }, {
                            key: "_sendInitializationErrorMessage",
                            value: function _sendInitializationErrorMessage() {
                                _debug.default.info('sending initialization error message');

                                this._sendMessage({
                                    type: _settings.default.messages.APP_ERROR,
                                    payload: {
                                        message: 'App failed to initialize before timeout'
                                    }
                                });
                            }
                            /**
                             * Clears the initialization timeout timer.
                             *
                             * @private
                             */

                        }, {
                            key: "_clearInitTimeout",
                            value: function _clearInitTimeout() {
                                if (this._initTimeout) {
                                    _debug.default.info('clearing initialization timeout');

                                    clearTimeout(this._initTimeout);
                                    this._initTimeout = null;
                                }
                            }
                            /**
                             * Starts the initialization timeout timer.
                             *
                             * @private
                             */

                        }, {
                            key: "_startInitTimeout",
                            value: function _startInitTimeout() {
                                _debug.default.info('starting initialization timeout');

                                this._clearInitTimeout();

                                this._initTimeout = setTimeout(this._onInitTimeout, this._config.timeout);
                            }
                            /**
                             * Starts the initialization timeout timer if the workflow
                             * is embedded signing.
                             *
                             * @private
                             */

                        }, {
                            key: "_maybeStartInitTimeout",
                            value: function _maybeStartInitTimeout() {
                                if (this._iFrameURL.href.includes('embeddedSign')) {
                                    // Start the initialization timeout because this is
                                    // embedded signing.
                                    this._startInitTimeout();
                                }
                            }
                            /**
                             * @event HelloSign#error
                             * @type {Object}
                             * @property {string} signatureId
                             * @property {number} code
                             */

                            /**
                             * Called when the app encountered an error.
                             *
                             * @emits HelloSign#error
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_appDidError",
                            value: function _appDidError(payload) {
                                _debug.default.error('app encountered an error with code:', payload.code);

                                this.emit(_settings.default.events.ERROR, payload);
                            }
                            /**
                             * @event HelloSign#ready
                             * @type {Object}
                             * @property {string} signatureId
                             */

                            /**
                             * Called when the app was initialized.
                             *
                             * @emits HelloSign#ready
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_appDidInitialize",
                            value: function _appDidInitialize(payload) {
                                _debug.default.info('app was initialized');

                                this._isReady = true;

                                this._sendConfigurationMessage();

                                this._clearInitTimeout();

                                window.addEventListener('beforeunload', this._onBeforeUnload);
                                this.emit(_settings.default.events.READY, payload);
                            }
                            /**
                             * Called when the app requested domain verification.
                             *
                             * @param {Object} payload
                             * @param {string} payload.token
                             * @private
                             */

                        }, {
                            key: "_appDidRequestDomainVerification",
                            value: function _appDidRequestDomainVerification(_ref) {
                                var token = _ref.token;

                                _debug.default.info('app requested domain verification', token);

                                this._sendDomainVerificationMessage(token);
                            }
                            /**
                             * @event HelloSign#message
                             * @type {Object}
                             * @property {string} type
                             * @property {?Object} payload
                             */

                            /**
                             * Called when HelloSign Embedded receives a cross-origin
                             * window message.
                             *
                             * @emits HelloSign#message
                             * @param {MessageEvent} evt
                             * @private
                             */

                        }, {
                            key: "_appDidSendMessage",
                            value: function _appDidSendMessage(_ref2) {
                                var data = _ref2.data,
                                    origin = _ref2.origin;

                                _debug.default.info('received message', data, origin);

                                this.emit(_settings.default.events.MESSAGE, data);

                                this._delegateMessage(data);
                            }
                            /**
                             * @event HelloSign#cancel
                             */

                            /**
                             * Called when the user canceled the request.
                             *
                             * @emits HelloSign#cancel
                             * @private
                             */

                        }, {
                            key: "_userDidCancelRequest",
                            value: function _userDidCancelRequest() {
                                _debug.default.info('user canceled the signature request');

                                this.emit(_settings.default.events.CANCEL);
                                this.close();
                            }
                            /**
                             * @event HelloSign#createTemplate
                             * @type {Object}
                             * @property {string} title
                             * @property {string} message
                             * @property {string[]} signerRoles
                             * @property {Object} signatureRequestInfo
                             */

                            /**
                             * Called when the user created the template.
                             *
                             * @emits HelloSign#createTemplate
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_userDidCreateTemplate",
                            value: function _userDidCreateTemplate(payload) {
                                _debug.default.info('user created the signature request template');

                                this.emit(_settings.default.events.CREATE_TEMPLATE, payload);
                            }
                            /**
                             * @event HelloSign#decline
                             * @type {Object}
                             * @property {string} signatureId
                             * @property {string} reason
                             */

                            /**
                             * Called when the user declined the request.
                             *
                             * @emits HelloSign#decline
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_userDidDeclineRequest",
                            value: function _userDidDeclineRequest(payload) {
                                _debug.default.info('user declined the signature request');

                                this.emit(_settings.default.events.DECLINE, payload);
                            }
                            /**
                             * @event HelloSign#finish
                             */

                            /**
                             * Called when the user finished the request.
                             *
                             * @emits HelloSign#finish
                             * @private
                             */

                        }, {
                            key: "_userDidFinishRequest",
                            value: function _userDidFinishRequest() {
                                _debug.default.info('user finished the signature request');

                                this.emit(_settings.default.events.FINISH);
                                this.close();
                            }
                            /**
                             * @event HelloSign#reassign
                             * @type {Object}
                             * @property {string} signatureId
                             * @property {string} name
                             * @property {string} email
                             * @property {string} reason
                             */

                            /**
                             * Called when the user reassigned the request.
                             *
                             * @emits HelloSign#reassign
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_userDidReassignRequest",
                            value: function _userDidReassignRequest(payload) {
                                _debug.default.info('user reassigned the signature request with reason:', payload.reason);

                                this.emit(_settings.default.events.REASSIGN, payload);
                            }
                            /**
                             * @event HelloSign#send
                             * @type {Object}
                             * @property {string} signatureRequestId
                             * @property {string} signatureId
                             */

                            /**
                             * Called when the user sent the request.
                             *
                             * @emits HelloSign#send
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_userDidSendRequest",
                            value: function _userDidSendRequest(payload) {
                                _debug.default.info('user sent the signature request');

                                this._isSentOrSigned = true;
                                window.removeEventListener('beforeunload', this._onBeforeUnload);
                                this.emit(_settings.default.events.SEND, payload);
                            }
                            /**
                             * @event HelloSign#sign
                             * @type {Object}
                             * @property {string} signatureId
                             */

                            /**
                             * Called when the user signed the request.
                             *
                             * @emits HelloSign#sign
                             * @param {Object} payload
                             * @private
                             */

                        }, {
                            key: "_userDidSignRequest",
                            value: function _userDidSignRequest(payload) {
                                _debug.default.info('user signed the signature request');

                                this._isSentOrSigned = true;
                                window.removeEventListener('beforeunload', this._onBeforeUnload);
                                this.emit(_settings.default.events.SIGN, payload);
                            }
                            /**
                             * Called when the user clicks anything within the
                             * HelloSign Embedded boundary.
                             *
                             * @param {Event} evt
                             * @private
                             */

                        }, {
                            key: "_onEmbeddedClick",
                            value: function _onEmbeddedClick(evt) {
                                var elem = evt.target; // Check if the element that was clicked is the close
                                // button.

                                if (elem.classList.contains(_settings.default.classNames.MODAL_CLOSE_BTN)) {
                                    evt.preventDefault(); // If the app is ready but has not yet been sent or
                                    // signed, close via the app. Otherwise, we force
                                    // close without notifying the app. This is because
                                    // the close button can represent a "cancel" or a
                                    // "close" depdending on the state of the request,
                                    // but Embedded is not aware of this state. Therefore
                                    // we send the close request down to the app so that
                                    // the app can determine the proper close type.

                                    if (this._isReady && !this._isSentOrSigned) {
                                        this._sendCancelRequestMessage();
                                    } else {
                                        this.close();
                                    }
                                }
                            }
                            /**
                             * Called when the initialization timeout timer completes.
                             * Sends an error message to the app and closes HelloSign
                             * Embedded.
                             *
                             * @private
                             */

                        }, {
                            key: "_onInitTimeout",
                            value: function _onInitTimeout() {
                                _debug.default.error('app failed to initialize before timeout'); // Display error to the user instead of just closing the
                                // signature request window.
                                // eslint-disable-next-line no-alert


                                alert('Something went wrong when preparing your signature request. Please try again.');

                                this._sendInitializationErrorMessage();

                                this._clearInitTimeout();

                                this.close();
                            }
                            /**
                             * Called when the user navigates away from the page in
                             * some way. Although modern browsers will likely block
                             * this message, the browser may still natively confirm
                             * with the user if they want to leave or stay on the
                             * page.
                             *
                             * @see https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload
                             * @param {BeforeUnloadEvent} evt
                             * @private
                             */

                        }, {
                            key: "_onBeforeUnload",
                            value: function _onBeforeUnload(evt) {
                                if (this._isReady) {
                                    /* eslint-disable-next-line no-restricted-globals, no-alert */
                                    if (!confirm('Are you sure you want to close this signature request? You will lose your changes.')) {
                                        evt.preventDefault(); // Chrome requires returnValue to be set.

                                        evt.returnValue = '';
                                    }
                                }
                            }
                            /**
                             * Called when a message is received by the window.
                             * Validates the message origin and delegates to the
                             * appropriate method based on the message type.
                             *
                             * @param {MessageEvent} evt
                             * @private
                             */

                        }, {
                            key: "_onMessage",
                            value: function _onMessage(message) {
                                var strippedOrigin = message.origin.replace(/\/$/, '');

                                if (strippedOrigin === this._iFrameURL.origin) {
                                    if (_typeof(message.data) === 'object') {
                                        this._appDidSendMessage(message);
                                    }
                                }
                            }
                            /**
                             * Called when a message is received by the window.
                             * Validates the message origin and delegates to the
                             * appropriate method based on the message type.
                             *
                             * @param {HelloSignMessage} msg
                             * @private
                             */

                        }, {
                            key: "_delegateMessage",
                            value: function _delegateMessage(_ref3) {
                                var type = _ref3.type,
                                    payload = _ref3.payload;

                                switch (type) {
                                    case _settings.default.messages.APP_ERROR:
                                        this._appDidError(payload);

                                        break;

                                    case _settings.default.messages.APP_INITIALIZE:
                                        this._appDidInitialize(payload);

                                        break;

                                    case _settings.default.messages.APP_VERIFY_DOMAIN_REQUEST:
                                        this._appDidRequestDomainVerification(payload);

                                        break;

                                    case _settings.default.messages.USER_CANCEL_REQUEST:
                                        this._userDidCancelRequest();

                                        break;

                                    case _settings.default.messages.USER_CREATE_TEMPLATE:
                                        this._userDidCreateTemplate(payload);

                                        break;

                                    case _settings.default.messages.USER_DECLINE_REQUEST:
                                        this._userDidDeclineRequest(payload);

                                        break;

                                    case _settings.default.messages.USER_FINISH_REQUEST:
                                        this._userDidFinishRequest();

                                        break;

                                    case _settings.default.messages.USER_REASSIGN_REQUEST:
                                        this._userDidReassignRequest(payload);

                                        break;

                                    case _settings.default.messages.USER_SEND_REQUEST:
                                        this._userDidSendRequest(payload);

                                        break;

                                    case _settings.default.messages.USER_SIGN_REQUEST:
                                        this._userDidSignRequest(payload);

                                        break;

                                    default:
                                        // Unhandled message.
                                        _debug.default.warn('unhandled cross-origin window message', type);

                                }
                            }
                            /**
                             * @event HelloSign#open
                             * @type {Object}
                             * @property {string} url
                             * @property {string} iFrameUrl
                             */

                            /**
                             * @typedef {Object} HelloSignOptions
                             * @property {boolean} [allowCancel=true]
                             * @property {string} [clientId]
                             * @property {HTMLElement} [container]
                             * @property {boolean} [debug=false]
                             * @property {boolean} [hideHeader=false]
                             * @property {string} [locale="en_US"]
                             * @property {string} [redirectTo]
                             * @property {string} [requestingEmail]
                             * @property {boolean} [skipDomainVerification=false]
                             * @property {boolean} [testMode=false]
                             * @property {number} [timeout=30000]
                             * @property {Object} [whiteLabeling]
                             */

                            /**
                             * Opens the url in HelloSign Embedded.
                             *
                             * @emits HelloSign#open
                             * @param {string} url
                             * @param {HelloSignOptions} [opts={}]
                             * @public
                             */

                        }, {
                            key: "open",
                            value: function open(url) {
                                var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                                _debug.default.info('open()', url, opts); // Close if embedded is already open.


                                if (this._isOpen) {
                                    this.close();
                                }

                                this._config = _objectSpread({}, _defaults.default, this._baseConfig, opts); // Check if container is valid.

                                if (this._config.container) {
                                    if (!(this._config.container instanceof HTMLElement)) {
                                        throw new TypeError('"container" must be an element');
                                    }
                                }

                                this._updateFrameUrl(url);

                                this._appendMarkup();

                                this._maybeStartInitTimeout();

                                this._isOpen = true;
                                window.addEventListener('message', this._onMessage);
                                this.emit(_settings.default.events.OPEN, {
                                    url: this._iFrameURL.href
                                });
                            }
                            /**
                             * @event HelloSign#close
                             */

                            /**
                             * Closes the HelloSign Embeded window.
                             *
                             * @emits HelloSign#close
                             * @public
                             */

                        }, {
                            key: "close",
                            value: function close() {
                                _debug.default.info('close()'); // It's already closed!


                                if (!this._isOpen) {
                                    return;
                                }

                                this._clearInitTimeout();

                                this._clearMarkup();

                                this._baseEl.removeEventListener('click', this._onEmbeddedClick);

                                this._config = null;
                                this._baseEl = null;
                                this._iFrameEl = null;
                                this._iFrameURL = null;
                                this._isOpen = false;
                                this._isReady = false;
                                this._isSentOrSigned = false;
                                window.removeEventListener('message', this._onMessage);
                                window.removeEventListener('beforeunload', this._onBeforeUnload);
                                this.emit(_settings.default.events.CLOSE);
                            }
                            /**
                             * Overrides tiny-emitter's "emit" method.
                             *
                             * @see https://www.npmjs.com/package/tiny-emitter
                             * @param {string} name
                             * @param {any} [data]
                             * @override
                             */

                        }, {
                            key: "emit",
                            value: function emit() {
                                var _get2;

                                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                                }

                                _debug.default.info.apply(_debug.default, ['emit()'].concat(args));

                                (_get2 = _get(_getPrototypeOf(HelloSign.prototype), "emit", this)).call.apply(_get2, [this].concat(args));
                            }
                            /**
                             * @returns {?HTMLElement}
                             * @public
                             */

                        }, {
                            key: "element",
                            get: function get() {
                                return this._baseEl;
                            }
                            /**
                             * @returns {?HTMLElement}
                             * @public
                             */

                        }, {
                            key: "iFrame",
                            get: function get() {
                                return this._iFrameEl;
                            }
                            /**
                             * @returns {boolean}
                             * @public
                             */

                        }, {
                            key: "isOpen",
                            get: function get() {
                                return this._isOpen;
                            }
                            /**
                             * @returns {boolean}
                             * @public
                             */

                        }, {
                            key: "isReady",
                            get: function get() {
                                return this._isReady;
                            }
                        }]);

                        return HelloSign;
                    }(_tinyEmitter.default);

                _defineProperty(HelloSign, "classNames", _settings.default.classNames);

                _defineProperty(HelloSign, "events", _settings.default.events);

                _defineProperty(HelloSign, "locales", _settings.default.locales);

                _defineProperty(HelloSign, "messages", _settings.default.messages);

                _defineProperty(HelloSign, "version", "2.10.0");

                var _default = HelloSign;
                exports.default = _default;

                /***/
            }),

        /***/
        "./src/sass/embedded.scss":
            /*!********************************!*\
              !*** ./src/sass/embedded.scss ***!
              \********************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {


                var content = __webpack_require__( /*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./embedded.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/sass/embedded.scss");

                if (typeof content === 'string') content = [
                    [module.i, content, '']
                ];

                var transform;
                var insertInto;



                var options = {
                    "hmr": true
                }

                options.transform = transform
                options.insertInto = undefined;

                var update = __webpack_require__( /*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

                if (content.locals) module.exports = content.locals;

                if (false) {}

                /***/
            }),

        /***/
        "./src/settings.js":
            /*!*************************!*\
              !*** ./src/settings.js ***!
              \*************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                /**
                 * HelloSign Embedded class names.
                 *
                 * @enum {string}
                 * @readonly
                 */
                var classNames = {
                    BASE: 'x-hellosign-embedded',
                    BASE_IN_MODAL: 'x-hellosign-embedded--in-modal',
                    IFRAME: 'x-hellosign-embedded__iframe',
                    MODAL_CLOSE: 'x-hellosign-embedded__modal-close',
                    MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button',
                    MODAL_CONTENT: 'x-hellosign-embedded__modal-content',
                    MODAL_SCREEN: 'x-hellosign-embedded__modal-screen'
                };
                /**
                 * HelloSign Embedded events.
                 *
                 * @enum {string}
                 * @readonly
                 */

                var events = {
                    ERROR: 'error',
                    SEND: 'send',
                    CANCEL: 'cancel',
                    CLOSE: 'close',
                    CREATE_TEMPLATE: 'createTemplate',
                    DECLINE: 'decline',
                    FINISH: 'finish',
                    MESSAGE: 'message',
                    OPEN: 'open',
                    READY: 'ready',
                    REASSIGN: 'reassign',
                    SIGN: 'sign'
                };
                /**
                 * HelloSign Embedded iFrame properties.
                 *
                 * @enum {string}
                 * @readonly
                 */

                var iframe = {
                    NAME: 'x-hellosign-embedded'
                };
                /**
                 * HelloSign Embedded supported locales.
                 *
                 * @enum {string}
                 * @readonly
                 */

                var locales = {
                    CS_CZ: 'cs-CZ',
                    // Czech (Czech Republic)
                    DA_DK: 'da-DK',
                    // Danish (Denmark)
                    DE_DE: 'de-DE',
                    // German (Germany)
                    EN_GB: 'en-GB',
                    // English (Great Britain)
                    EN_US: 'en-US',
                    // English (United States)
                    ES_LA: 'es-LA',
                    // Spanish (Latin America)
                    ES_ES: 'es-ES',
                    // Spanish (Spain)
                    ES_MX: 'es-MX',
                    // Spanish (Mexico)
                    FR_FR: 'fr-FR',
                    // French (France)
                    ID_ID: 'id-ID',
                    // Indonesian (Indonesia)
                    IT_IT: 'it-IT',
                    // Italian (Italy)
                    JA_JP: 'ja-JP',
                    // Japanese (Japan)
                    KO_KR: 'ko-KR',
                    // Korean (Korea)
                    MS_MY: 'ms-MY',
                    // Malaysian (Malaysia)
                    NB_NO: 'nb-NO',
                    // Norwegian (Norway)
                    NL_NL: 'nl-NL',
                    // Dutch (Netherlands)
                    PL_PL: 'pl-PL',
                    // Polish (Poland)
                    PT_BR: 'pt-BR',
                    // Portuguese (Brazil)
                    RU_RU: 'ru-RU',
                    // Russian (Russia)
                    SV_SE: 'sv-SE',
                    // Swedish (Sweden)
                    TH_TH: 'th-TH',
                    // Thai (Thailand)
                    UK_UA: 'uk-UA',
                    // Ukrainian (Ukraine)
                    ZH_CN: 'zh-CN',
                    // Chinese (Simplified) (China)
                    ZH_TW: 'zh-TW' // Chinese (Taiwan)

                };
                /**
                 * HelloSign Embedded cross-origin window messages.
                 *
                 * @enum {string}
                 * @readonly
                 */

                var messages = {
                    APP_CONFIGURE: 'hellosign:configure',
                    APP_ERROR: 'hellosign:error',
                    APP_INITIALIZE: 'hellosign:initialize',
                    APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest',
                    APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse',
                    USER_CANCEL_REQUEST: 'hellosign:userCancelRequest',
                    USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate',
                    USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest',
                    USER_FINISH_REQUEST: 'hellosign:userFinishRequest',
                    USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest',
                    USER_SEND_REQUEST: 'hellosign:userSendRequest',
                    USER_SIGN_REQUEST: 'hellosign:userSignRequest'
                };
                var _default = {
                    classNames: classNames,
                    events: events,
                    iframe: iframe,
                    locales: locales,
                    messages: messages
                };
                exports.default = _default;

                /***/
            }),

        /***/
        "./src/utils/debug.js":
            /*!****************************!*\
              !*** ./src/utils/debug.js ***!
              \****************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                "use strict";


                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;

                var _debug = _interopRequireDefault(__webpack_require__( /*! debug */ "./node_modules/debug/src/browser.js"));

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }

                /**
                 * To enable debug messages, enter the following into your
                 * developer tools console:
                 *
                 *   localStorage.debug = 'hellosign-embedded:*';
                 *
                 * This will surface all debug messages under the
                 * "hellosign:" namespace.
                 */
                var info = (0, _debug.default)("".concat("hellosign-embedded", ":info"));
                var warn = (0, _debug.default)("".concat("hellosign-embedded", ":warn"));
                var error = (0, _debug.default)("".concat("hellosign-embedded", ":error"));
                info.log = console.log.bind(console); // eslint-disable-line no-console

                warn.log = console.warn.bind(console); // eslint-disable-line no-console

                var _default = {
                    info: info,
                    warn: warn,
                    error: error
                };
                exports.default = _default;

                /***/
            }),

        /***/
        0:
            /*!************************************************************************************************!*\
              !*** multi url-polyfill url-search-params-polyfill ./src/sass/embedded.scss ./src/embedded.js ***!
              \************************************************************************************************/
            /*! no static exports found */
            /***/
            (function(module, exports, __webpack_require__) {

                __webpack_require__( /*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
                __webpack_require__( /*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");
                __webpack_require__( /*! ./src/sass/embedded.scss */ "./src/sass/embedded.scss");
                module.exports = __webpack_require__( /*! ./src/embedded.js */ "./src/embedded.js");


                /***/
            })

        /******/
    })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0hlbGxvU2lnbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL1RlbXBsYXRlVGFnL1RlbXBsYXRlVGFnLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvVGVtcGxhdGVUYWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c0FuZC9jb21tYUxpc3RzQW5kLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvY29tbWFMaXN0c0FuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL2NvbW1hTGlzdHNPci9jb21tYUxpc3RzT3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9odG1sL2h0bWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9odG1sL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvaW5saW5lQXJyYXlUcmFuc2Zvcm1lci9pbmxpbmVBcnJheVRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvaW5saW5lTGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVDb21tYUxpc3RzL29uZUxpbmVDb21tYUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZUNvbW1hTGlzdHNBbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL29uZUxpbmVDb21tYUxpc3RzT3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvb25lTGluZVRyaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lci9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3NhZmVIdG1sL3NhZmVIdG1sLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3BsaXRTdHJpbmdUcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIvc3BsaXRTdHJpbmdUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3N0cmlwSW5kZW50L2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnQvc3RyaXBJbmRlbnQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRUcmFuc2Zvcm1lci9zdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRzL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uLi8uLi9zcmMvc3RyaXBJbmRlbnRzL3N0cmlwSW5kZW50cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3RyaW1SZXN1bHRUcmFuc2Zvcm1lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi4vLi4vc3JjL3RyaW1SZXN1bHRUcmFuc2Zvcm1lci90cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLWlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1jb250ZXh0LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy13cy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy9zYXNzL2VtYmVkZGVkLnNjc3MiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvZGVidWcvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1wb2x5ZmlsbC91cmwtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL2RlZmF1bHRzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy9lbWJlZGRlZC5qcyIsIndlYnBhY2s6Ly9IZWxsb1NpZ24vLi9zcmMvc2Fzcy9lbWJlZGRlZC5zY3NzPzk4ZDkiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL0hlbGxvU2lnbi8uL3NyYy91dGlscy9kZWJ1Zy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsImV4cHJlc3Npb25zIiwic3RyaW5ncyIsIkFycmF5IiwidHJhbnNmb3JtZXIiLCJwcmV2aW91c1RhZyIsInRlbXBsYXRlIiwic3Vic3RpdHV0aW9ucyIsInJlc3VsdFNvRmFyIiwicmVtYWluaW5nUGFydCIsInN1YnN0aXR1dGlvbiIsInN0ciIsImNiIiwidHJhbnNmb3JtIiwiZW5kUmVzdWx0IiwiY29tbWFMaXN0cyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJzZXBhcmF0b3IiLCJjb21tYUxpc3RzQW5kIiwiY29uanVuY3Rpb24iLCJjb21tYUxpc3RzT3IiLCJodG1sIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsImRlZmF1bHRzIiwic2VyaWFsIiwib3B0cyIsIm9uU3Vic3RpdHV0aW9uIiwiYXJyYXlMZW5ndGgiLCJpbmRlbnQiLCJzZXBhcmF0b3JJbmRleCIsImlubGluZUxpc3RzIiwib25lTGluZSIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNBbmQiLCJvbmVMaW5lQ29tbWFMaXN0c09yIiwib25lTGluZUlubGluZUxpc3RzIiwib25lTGluZVRyaW0iLCJpc1ZhbGlkVmFsdWUiLCJ4IiwiTnVtYmVyIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uRW5kUmVzdWx0IiwicmVwbGFjZVdoYXQiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3RyaW5nIiwicmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIiwic2FmZUh0bWwiLCJzcGxpdEJ5Iiwic3RyaXBJbmRlbnQiLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwidHlwZSIsIm1hdGNoIiwiZWwiLCJyZWdleHAiLCJzdHJpcEluZGVudHMiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzaWRlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInMiLCJtIiwiaCIsImQiLCJ3IiwieSIsInZhbCIsIm9wdGlvbnMiLCJwYXJzZSIsImlzTmFOIiwibG9uZyIsImZtdExvbmciLCJmbXRTaG9ydCIsIkVycm9yIiwiU3RyaW5nIiwiZXhlYyIsIm4iLCJwYXJzZUZsb2F0IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJtcyIsIm1zQWJzIiwiTWF0aCIsImFicyIsInJvdW5kIiwicGx1cmFsIiwibmFtZSIsImlzUGx1cmFsIiwibG9nIiwiZm9ybWF0QXJncyIsInNhdmUiLCJsb2FkIiwidXNlQ29sb3JzIiwic3RvcmFnZSIsImxvY2Fsc3RvcmFnZSIsImNvbG9ycyIsIndpbmRvdyIsInByb2Nlc3MiLCJfX253anMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImNvbnNvbGUiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJwYXJzZUludCIsIlJlZ0V4cCIsIiQxIiwiYXJncyIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJjb2xvciIsInNwbGljZSIsImluZGV4IiwibGFzdEMiLCJyZXBsYWNlIiwibmFtZXNwYWNlcyIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJyIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImZvcm1hdHRlcnMiLCJqIiwidiIsIm1lc3NhZ2UiLCJzZXR1cCIsImNyZWF0ZURlYnVnIiwiZGVidWciLCJkZWZhdWx0IiwiY29lcmNlIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZWQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluc3RhbmNlcyIsIm5hbWVzIiwic2tpcHMiLCJzZWxlY3RDb2xvciIsImhhc2giLCJjaGFyQ29kZUF0IiwicHJldlRpbWUiLCJzZWxmIiwiY3VyciIsIkRhdGUiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJsb2dGbiIsImFwcGx5IiwiZGVzdHJveSIsImV4dGVuZCIsImluaXQiLCJpbmRleE9mIiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzcGxpdCIsImxlbiIsInN1YnN0ciIsImluc3RhbmNlIiwidG9OYW1lc3BhY2UiLCJ0ZXN0Iiwic3Vic3RyaW5nIiwic3RhY2siLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcmd1bWVudHMiLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiY3NzIiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwiZml4ZWRDc3MiLCJmdWxsTWF0Y2giLCJvcmlnVXJsIiwidW5xdW90ZWRPcmlnVXJsIiwidHJpbSIsIm8iLCJuZXdVcmwiLCJFIiwiY2FsbGJhY2siLCJjdHgiLCJmbiIsImxpc3RlbmVyIiwiXyIsInNsaWNlIiwiZXZ0QXJyIiwiZXZ0cyIsImxpdmVFdmVudHMiLCJUaW55RW1pdHRlciIsImdsb2JhbCIsImNoZWNrSWZJdGVyYXRvcklzU3VwcG9ydGVkIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpdGVyYXRvclN1cHBvcnRlZCIsImNyZWF0ZUl0ZXJhdG9yIiwiaXRlbXMiLCJuZXh0IiwidmFsdWUiLCJzaGlmdCIsImRvbmUiLCJzZXJpYWxpemVQYXJhbSIsImRlc2VyaWFsaXplUGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJwb2x5ZmlsbFVSTFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFN0cmluZyIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJ0eXBlb2ZTZWFyY2hTdHJpbmciLCJfZnJvbVN0cmluZyIsIl90aGlzIiwiYXBwZW5kIiwiZW50cnkiLCJUeXBlRXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvIiwiX2VudHJpZXMiLCJkZWxldGUiLCJnZXQiLCJnZXRBbGwiLCJoYXMiLCJzZXQiLCJ0aGlzQXJnIiwiZW50cmllcyIsInZhbHVlcyIsInNlYXJjaEFycmF5IiwiY2hlY2tJZlVSTFNlYXJjaFBhcmFtc1N1cHBvcnRlZCIsInNvcnQiLCJhIiwiYiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlIiwiY2hlY2tJZlVSTElzU3VwcG9ydGVkIiwidSIsIlVSTCIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJwb2x5ZmlsbFVSTCIsIl9VUkwiLCJ1cmwiLCJiYXNlIiwiZG9jIiwiYmFzZUVsZW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJlcnIiLCJhbmNob3JFbGVtZW50IiwiYm9keSIsInNlYXJjaCIsImVuYWJsZVNlYXJjaFVwZGF0ZSIsImVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSIsIm1ldGhvZE5hbWUiLCJtZXRob2QiLCJsaW5rVVJMV2l0aEFuY2hvckF0dHJpYnV0ZSIsImF0dHJpYnV0ZU5hbWUiLCJfYW5jaG9yRWxlbWVudCIsIl91cGRhdGVTZWFyY2hQYXJhbXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZXhwZWN0ZWRQb3J0IiwiYWRkUG9ydFRvT3JpZ2luIiwicG9ydCIsImhvc3RuYW1lIiwiY3JlYXRlT2JqZWN0VVJMIiwiYmxvYiIsInJldm9rZU9iamVjdFVSTCIsImdldE9yaWdpbiIsInNldEludGVydmFsIiwib3JpZ2luIiwibmF0aXZlVVJMU2VhcmNoUGFyYW1zIiwiaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IiLCJkZWNvZGVzUGx1c2VzQ29ycmVjdGx5IiwiX19VUkxTZWFyY2hQYXJhbXNfXyIsImVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5IiwiYW1wZXJzYW5kVGVzdCIsIlVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsIiwiaXRlcmFibGUiLCJwYXJzZVRvRGljdCIsImFwcGVuZFRvIiwiZGljdCIsInF1ZXJ5IiwiZW5jb2RlIiwiZm9yU3VyZVVzZVBvbHlmaWxsIiwidXNlUHJveHkiLCJQcm94eSIsImNvbnN0cnVjdCIsInRhcmdldCIsIlVTUFByb3RvIiwicG9seWZpbGwiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiayIsIm1ha2VJdGVyYXRvciIsImRlY29kZSIsImFyciIsInBhaXJzIiwiZyIsIkZ1bmN0aW9uIiwiYWxsb3dDYW5jZWwiLCJza2lwRG9tYWluVmVyaWZpY2F0aW9uIiwidGVzdE1vZGUiLCJIZWxsb1NpZ24iLCJvYmoiLCJfb25FbWJlZGRlZENsaWNrIiwiYmluZCIsIl9vbkluaXRUaW1lb3V0IiwiX29uQmVmb3JlVW5sb2FkIiwiX29uTWVzc2FnZSIsImluZm8iLCJfYmFzZUNvbmZpZyIsInBhcmFtcyIsIl9jb25maWciLCJjbGllbnRJZCIsImZpbmFsQnV0dG9uVGV4dCIsImluY2x1ZGVzIiwiaGlkZUhlYWRlciIsImxvY2FsZSIsInJlZGlyZWN0VG8iLCJyZXF1ZXN0aW5nRW1haWwiLCJ3aGl0ZUxhYmVsaW5nIiwiX19QS0dfVkVSU0lPTl9fIiwiZnJhbWVVUkwiLCJfYXBwbHlDbGllbnRJZCIsIl9hcHBseURlYnVnIiwiX2FwcGx5RmluYWxCdXR0b25UZXh0IiwiX2FwcGx5SGlkZUhlYWRlciIsIl9hcHBseUxvY2FsZSIsIl9hcHBseVBhcmVudFVSTCIsIl9hcHBseVJlZGlyZWN0VG8iLCJfYXBwbHlSZXF1ZXN0aW5nRW1haWwiLCJfYXBwbHlUZXN0TW9kZSIsIl9hcHBseVV4VmVyc2lvbiIsIl9hcHBseVZlcnNpb24iLCJfYXBwbHlXaGl0ZUxhYmVsaW5nIiwiZnJhbWVQYXJhbXMiLCJfZ2V0RnJhbWVQYXJhbXMiLCJfaUZyYW1lVVJMIiwiZWxlbSIsImNvbnRhaW5lciIsImlubmVySFRNTCIsInNldHRpbmdzIiwiY2xhc3NOYW1lcyIsIkJBU0UiLCJJRlJBTUUiLCJpZnJhbWUiLCJOQU1FIiwiQkFTRV9JTl9NT0RBTCIsIk1PREFMX1NDUkVFTiIsIk1PREFMX0NPTlRFTlQiLCJNT0RBTF9DTE9TRSIsIk1PREFMX0NMT1NFX0JUTiIsImZpcnN0Q2hpbGQiLCJfYmFzZUVsIiwiX3JlbmRlck1hcmt1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaUZyYW1lRWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwibXNnIiwidGFyZ2V0T3JpZ2luIiwidGFyZ2V0V2luZG93IiwiY29udGVudFdpbmRvdyIsInBvc3RNZXNzYWdlIiwiX3NlbmRNZXNzYWdlIiwibWVzc2FnZXMiLCJVU0VSX0NBTkNFTF9SRVFVRVNUIiwiQVBQX0NPTkZJR1VSRSIsInBheWxvYWQiLCJ0b2tlbiIsIkFQUF9WRVJJRllfRE9NQUlOX1JFU1BPTlNFIiwiQVBQX0VSUk9SIiwiX2luaXRUaW1lb3V0IiwiX2NsZWFySW5pdFRpbWVvdXQiLCJfc3RhcnRJbml0VGltZW91dCIsImNvZGUiLCJldmVudHMiLCJFUlJPUiIsIl9pc1JlYWR5IiwiX3NlbmRDb25maWd1cmF0aW9uTWVzc2FnZSIsIlJFQURZIiwiX3NlbmREb21haW5WZXJpZmljYXRpb25NZXNzYWdlIiwiTUVTU0FHRSIsIl9kZWxlZ2F0ZU1lc3NhZ2UiLCJDQU5DRUwiLCJjbG9zZSIsIkNSRUFURV9URU1QTEFURSIsIkRFQ0xJTkUiLCJGSU5JU0giLCJyZWFzb24iLCJSRUFTU0lHTiIsIl9pc1NlbnRPclNpZ25lZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTRU5EIiwiU0lHTiIsImV2dCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJfc2VuZENhbmNlbFJlcXVlc3RNZXNzYWdlIiwiYWxlcnQiLCJfc2VuZEluaXRpYWxpemF0aW9uRXJyb3JNZXNzYWdlIiwiY29uZmlybSIsInJldHVyblZhbHVlIiwic3RyaXBwZWRPcmlnaW4iLCJfYXBwRGlkU2VuZE1lc3NhZ2UiLCJfYXBwRGlkRXJyb3IiLCJBUFBfSU5JVElBTElaRSIsIl9hcHBEaWRJbml0aWFsaXplIiwiQVBQX1ZFUklGWV9ET01BSU5fUkVRVUVTVCIsIl9hcHBEaWRSZXF1ZXN0RG9tYWluVmVyaWZpY2F0aW9uIiwiX3VzZXJEaWRDYW5jZWxSZXF1ZXN0IiwiVVNFUl9DUkVBVEVfVEVNUExBVEUiLCJfdXNlckRpZENyZWF0ZVRlbXBsYXRlIiwiVVNFUl9ERUNMSU5FX1JFUVVFU1QiLCJfdXNlckRpZERlY2xpbmVSZXF1ZXN0IiwiVVNFUl9GSU5JU0hfUkVRVUVTVCIsIl91c2VyRGlkRmluaXNoUmVxdWVzdCIsIlVTRVJfUkVBU1NJR05fUkVRVUVTVCIsIl91c2VyRGlkUmVhc3NpZ25SZXF1ZXN0IiwiVVNFUl9TRU5EX1JFUVVFU1QiLCJfdXNlckRpZFNlbmRSZXF1ZXN0IiwiVVNFUl9TSUdOX1JFUVVFU1QiLCJfdXNlckRpZFNpZ25SZXF1ZXN0Iiwid2FybiIsIl9pc09wZW4iLCJIVE1MRWxlbWVudCIsIl91cGRhdGVGcmFtZVVybCIsIl9hcHBlbmRNYXJrdXAiLCJfbWF5YmVTdGFydEluaXRUaW1lb3V0IiwiT1BFTiIsIl9jbGVhck1hcmt1cCIsIkNMT1NFIiwiRW1pdHRlciIsImxvY2FsZXMiLCJDU19DWiIsIkRBX0RLIiwiREVfREUiLCJFTl9HQiIsIkVOX1VTIiwiRVNfTEEiLCJFU19FUyIsIkVTX01YIiwiRlJfRlIiLCJJRF9JRCIsIklUX0lUIiwiSkFfSlAiLCJLT19LUiIsIk1TX01ZIiwiTkJfTk8iLCJOTF9OTCIsIlBMX1BMIiwiUFRfQlIiLCJSVV9SVSIsIlNWX1NFIiwiVEhfVEgiLCJVS19VQSIsIlpIX0NOIiwiWkhfVFciLCJfX1BLR19OQU1FX18iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7SUFJcUJBLFc7QUFDbkI7Ozs7OztBQU1BLHlCQUE2QjtBQUFBOztBQUFBLHNDQUFkQyxZQUFjO0FBQWRBLGtCQUFjLE1BQWRBLEdBQWMsZUFBZEE7QUFBYzs7QUFBQTs7QUFBQSxlQXVC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WEo7QUFZZkUsbUJBQWlCLEVBQUU7QUFaSixDQUFqQjtlQWVlO0FBQ2JqRixZQUFVLEVBQVZBLFVBRGE7QUFFYm1DLFFBQU0sRUFBTkEsTUFGYTtBQUdiaEMsUUFBTSxFQUFOQSxNQUhhO0FBSWIwRixTQUFPLEVBQVBBLE9BSmE7QUFLYnJFLFVBQVEsRUFBUkE7QUFMYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGZjs7OztBQVZBOzs7Ozs7Ozs7QUFZQSxJQUFNekQsSUFBSSxHQUFHLDhCQUFTdUosb0JBQVQsV0FBYjtBQUNBLElBQU1uQyxJQUFJLEdBQUcsOEJBQVNtQyxvQkFBVCxXQUFiO0FBQ0EsSUFBTTdZLEtBQUssR0FBRyw4QkFBUzZZLG9CQUFULFlBQWQ7QUFFQXZKLElBQUksQ0FBQzNSLEdBQUwsR0FBV2lCLE9BQU8sQ0FBQ2pCLEdBQVIsQ0FBWXVSLElBQVosQ0FBaUJ0USxPQUFqQixDQUFYLEMsQ0FBc0M7O0FBQ3RDOFgsSUFBSSxDQUFDL1ksR0FBTCxHQUFXaUIsT0FBTyxDQUFDOFgsSUFBUixDQUFheEgsSUFBYixDQUFrQnRRLE9BQWxCLENBQVgsQyxDQUF1Qzs7ZUFFeEI7QUFDYjBRLE1BQUksRUFBSkEsSUFEYTtBQUVib0gsTUFBSSxFQUFKQSxJQUZhO0FBR2IxVyxPQUFLLEVBQUxBO0FBSGEsQyIsImZpbGUiOiJlbWJlZGRlZC5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhlbGxvU2lnblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIZWxsb1NpZ25cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBAY2xhc3MgVGVtcGxhdGVUYWdcbiAqIEBjbGFzc2Rlc2MgQ29uc3VtZXMgYSBwaXBlbGluZSBvZiBjb21wb3NhYmxlIHRyYW5zZm9ybWVyIHBsdWdpbnMgYW5kIHByb2R1Y2VzIGEgdGVtcGxhdGUgdGFnLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVRhZyB7XG4gIC8qKlxuICAgKiBjb25zdHJ1Y3RzIGEgdGVtcGxhdGUgdGFnXG4gICAqIEBjb25zdHJ1Y3RzIFRlbXBsYXRlVGFnXG4gICAqIEBwYXJhbSAgey4uLk9iamVjdH0gWy4uLnRyYW5zZm9ybWVyc10gLSBhbiBhcnJheSBvciBhcmd1bWVudHMgbGlzdCBvZiB0cmFuc2Zvcm1lcnNcbiAgICogQHJldHVybiB7RnVuY3Rpb259ICAgICAgICAgICAgICAgICAgICAtIGEgdGVtcGxhdGUgdGFnXG4gICAqL1xuICBjb25zdHJ1Y3RvciguLi50cmFuc2Zvcm1lcnMpIHtcbiAgICAvLyBpZiBmaXJzdCBhcmd1bWVudCBpcyBhbiBhcnJheSwgZXh0cnVkZSBpdCBhcyBhIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAgaWYgKHRyYW5zZm9ybWVycy5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkodHJhbnNmb3JtZXJzWzBdKSkge1xuICAgICAgdHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzWzBdO1xuICAgIH1cblxuICAgIC8vIGlmIGFueSB0cmFuc2Zvcm1lcnMgYXJlIGZ1bmN0aW9ucywgdGhpcyBtZWFucyB0aGV5IGFyZSBub3QgaW5pdGlhdGVkIC0gYXV0b21hdGljYWxseSBpbml0aWF0ZSB0aGVtXG4gICAgdGhpcy50cmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubWFwKHRyYW5zZm9ybWVyID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicgPyB0cmFuc2Zvcm1lcigpIDogdHJhbnNmb3JtZXI7XG4gICAgfSk7XG5cbiAgICAvLyByZXR1cm4gYW4gRVMyMDE1IHRlbXBsYXRlIHRhZ1xuICAgIHJldHVybiB0aGlzLnRhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGFsbCB0cmFuc2Zvcm1lcnMgdG8gYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZ2dlZCB3aXRoIHRoaXMgbWV0aG9kLlxuICAgKiBJZiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIGFzc3VtZXMgdGhlIGZ1bmN0aW9uIGlzIGEgdGVtcGxhdGUgdGFnXG4gICAqIGFuZCBhcHBsaWVzIGl0IHRvIHRoZSB0ZW1wbGF0ZSwgcmV0dXJuaW5nIGEgdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHsoRnVuY3Rpb258U3RyaW5nfEFycmF5PFN0cmluZz4pfSBzdHJpbmdzICAgICAgICAtIEVpdGhlciBhIHRlbXBsYXRlIHRhZyBvciBhbiBhcnJheSBjb250YWluaW5nIHRlbXBsYXRlIHN0cmluZ3Mgc2VwYXJhdGVkIGJ5IGlkZW50aWZpZXJcbiAgICogQHBhcmFtICB7Li4uKn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXhwcmVzc2lvbnMgLSBPcHRpb25hbCBsaXN0IG9mIHN1YnN0aXR1dGlvbiB2YWx1ZXMuXG4gICAqIEByZXR1cm4geyhTdHJpbmd8RnVuY3Rpb24pfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gRWl0aGVyIGFuIGludGVybWVkaWFyeSB0YWcgZnVuY3Rpb24gb3IgdGhlIHJlc3VsdHMgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUuXG4gICAqL1xuICB0YWcgPSAoc3RyaW5ncywgLi4uZXhwcmVzc2lvbnMpID0+IHtcbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgaXMgYSBmdW5jdGlvbiwgYXNzdW1lIGl0IGlzIGEgdGVtcGxhdGUgdGFnIGFuZCByZXR1cm5cbiAgICAgIC8vIGFuIGludGVybWVkaWFyeSB0YWcgdGhhdCBwcm9jZXNzZXMgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSBhZm9yZW1lbnRpb25lZCB0YWcsIHBhc3NpbmcgdGhlXG4gICAgICAvLyByZXN1bHQgdG8gb3VyIHRhZ1xuICAgICAgcmV0dXJuIHRoaXMuaW50ZXJpbVRhZy5iaW5kKHRoaXMsIHN0cmluZ3MpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc3RyaW5ncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBwYXNzZWQgaXMgYSBzdHJpbmcsIGp1c3QgdHJhbnNmb3JtIGl0XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1FbmRSZXN1bHQoc3RyaW5ncyk7XG4gICAgfVxuXG4gICAgLy8gZWxzZSwgcmV0dXJuIGEgdHJhbnNmb3JtZWQgZW5kIHJlc3VsdCBvZiBwcm9jZXNzaW5nIHRoZSB0ZW1wbGF0ZSB3aXRoIG91ciB0YWdcbiAgICBzdHJpbmdzID0gc3RyaW5ncy5tYXAodGhpcy50cmFuc2Zvcm1TdHJpbmcuYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KFxuICAgICAgc3RyaW5ncy5yZWR1Y2UodGhpcy5wcm9jZXNzU3Vic3RpdHV0aW9ucy5iaW5kKHRoaXMsIGV4cHJlc3Npb25zKSksXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogQW4gaW50ZXJtZWRpYXJ5IHRlbXBsYXRlIHRhZyB0aGF0IHJlY2VpdmVzIGEgdGVtcGxhdGUgdGFnIGFuZCBwYXNzZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSB0ZW1wbGF0ZSB3aXRoIHRoZSByZWNlaXZlZFxuICAgKiB0ZW1wbGF0ZSB0YWcgdG8gb3VyIG93biB0ZW1wbGF0ZSB0YWcuXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgICAgbmV4dFRhZyAgICAgICAgICAtIHRoZSByZWNlaXZlZCB0ZW1wbGF0ZSB0YWdcbiAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gICB0ZW1wbGF0ZSAgICAgICAgIC0gdGhlIHRlbXBsYXRlIHRvIHByb2Nlc3NcbiAgICogQHBhcmFtICB7Li4uKn0gICAgICAgICAgICAuLi5zdWJzdGl0dXRpb25zIC0gYHN1YnN0aXR1dGlvbnNgIGlzIGFuIGFycmF5IG9mIGFsbCBzdWJzdGl0dXRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgKiBAcmV0dXJuIHsqfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB0aGUgZmluYWwgcHJvY2Vzc2VkIHZhbHVlXG4gICAqL1xuICBpbnRlcmltVGFnKHByZXZpb3VzVGFnLCB0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnRhZ2Ake3ByZXZpb3VzVGFnKHRlbXBsYXRlLCAuLi5zdWJzdGl0dXRpb25zKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGJ1bGsgcHJvY2Vzc2luZyBvbiB0aGUgdGFnZ2VkIHRlbXBsYXRlLCB0cmFuc2Zvcm1pbmcgZWFjaCBzdWJzdGl0dXRpb24gYW5kIHRoZW5cbiAgICogY29uY2F0ZW5hdGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxuICAgKiBAcGFyYW0gIHtBcnJheTwqPn0gc3Vic3RpdHV0aW9ucyAtIGFuIGFycmF5IG9mIGFsbCByZW1haW5pbmcgc3Vic3RpdHV0aW9ucyBwcmVzZW50IGluIHRoaXMgdGVtcGxhdGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIHJlc3VsdFNvRmFyICAgLSB0aGlzIGl0ZXJhdGlvbidzIHJlc3VsdCBzdHJpbmcgc28gZmFyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZW1haW5pbmdQYXJ0IC0gdGhlIHRlbXBsYXRlIGNodW5rIGFmdGVyIHRoZSBjdXJyZW50IHN1YnN0aXR1dGlvblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAtIHRoZSByZXN1bHQgb2Ygam9pbmluZyB0aGlzIGl0ZXJhdGlvbidzIHByb2Nlc3NlZCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgcmVzdWx0XG4gICAqL1xuICBwcm9jZXNzU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCByZXN1bHRTb0ZhciwgcmVtYWluaW5nUGFydCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMudHJhbnNmb3JtU3Vic3RpdHV0aW9uKFxuICAgICAgc3Vic3RpdHV0aW9ucy5zaGlmdCgpLFxuICAgICAgcmVzdWx0U29GYXIsXG4gICAgKTtcbiAgICByZXR1cm4gJycuY29uY2F0KHJlc3VsdFNvRmFyLCBzdWJzdGl0dXRpb24sIHJlbWFpbmluZ1BhcnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIHRyYW5zZm9ybWVyLCBhcHBseWluZyB0aGUgdHJhbnNmb3JtZXIncyBgb25TdHJpbmdgIG1ldGhvZCB0byB0aGUgdGVtcGxhdGVcbiAgICogc3RyaW5ncyBiZWZvcmUgYWxsIHN1YnN0aXR1dGlvbnMgYXJlIHByb2Nlc3NlZC5cbiAgICogQHBhcmFtIHtTdHJpbmd9ICBzdHIgLSBUaGUgaW5wdXQgc3RyaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgIC0gVGhlIGZpbmFsIHJlc3VsdHMgb2YgcHJvY2Vzc2luZyBlYWNoIHRyYW5zZm9ybWVyXG4gICAqL1xuICB0cmFuc2Zvcm1TdHJpbmcoc3RyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdHJpbmcgPyB0cmFuc2Zvcm0ub25TdHJpbmcocmVzKSA6IHJlcztcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1lcnMucmVkdWNlKGNiLCBzdHIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gYSBzdWJzdGl0dXRpb24gaXMgZW5jb3VudGVyZWQsIGl0ZXJhdGVzIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciBhbmQgYXBwbGllcyB0aGUgdHJhbnNmb3JtZXInc1xuICAgKiBgb25TdWJzdGl0dXRpb25gIG1ldGhvZCB0byB0aGUgc3Vic3RpdHV0aW9uLlxuICAgKiBAcGFyYW0gIHsqfSAgICAgIHN1YnN0aXR1dGlvbiAtIFRoZSBjdXJyZW50IHN1YnN0aXR1dGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHJlc3VsdFNvRmFyICAtIFRoZSByZXN1bHQgdXAgdG8gYW5kIGV4Y2x1ZGluZyB0aGlzIHN1YnN0aXR1dGlvbi5cbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0IG9mIGFwcGx5aW5nIGFsbCBzdWJzdGl0dXRpb24gdHJhbnNmb3JtYXRpb25zLlxuICAgKi9cbiAgdHJhbnNmb3JtU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgcmVzdWx0U29GYXIpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vblN1YnN0aXR1dGlvblxuICAgICAgICA/IHRyYW5zZm9ybS5vblN1YnN0aXR1dGlvbihyZXMsIHJlc3VsdFNvRmFyKVxuICAgICAgICA6IHJlcztcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1lcnMucmVkdWNlKGNiLCBzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uRW5kUmVzdWx0YCBtZXRob2QgdG8gdGhlXG4gICAqIHRlbXBsYXRlIGxpdGVyYWwgYWZ0ZXIgYWxsIHN1YnN0aXR1dGlvbnMgaGF2ZSBmaW5pc2hlZCBwcm9jZXNzaW5nLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGVuZFJlc3VsdCAtIFRoZSBwcm9jZXNzZWQgdGVtcGxhdGUsIGp1c3QgYmVmb3JlIGl0IGlzIHJldHVybmVkIGZyb20gdGhlIHRhZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uRW5kUmVzdWx0ID8gdHJhbnNmb3JtLm9uRW5kUmVzdWx0KHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgZW5kUmVzdWx0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9UZW1wbGF0ZVRhZyc7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuLi9odG1sJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHMnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGNvbW1hTGlzdHNBbmQgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdhbmQnIH0pLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYUxpc3RzQW5kO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9jb21tYUxpc3RzQW5kJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNPcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c09yJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciBmcm9tICcuLi9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyJztcblxuY29uc3QgaHRtbCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcignXFxuJyksXG4gIHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIsXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGh0bWw7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2h0bWwnO1xuIiwiLy8gY29yZVxuZXhwb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4vVGVtcGxhdGVUYWcnO1xuXG4vLyB0cmFuc2Zvcm1lcnNcbmV4cG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuZXhwb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5leHBvcnQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgZnJvbSAnLi9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyJztcblxuLy8gdGFnc1xuZXhwb3J0IGNvbW1hTGlzdHMgZnJvbSAnLi9jb21tYUxpc3RzJztcbmV4cG9ydCBjb21tYUxpc3RzQW5kIGZyb20gJy4vY29tbWFMaXN0c0FuZCc7XG5leHBvcnQgY29tbWFMaXN0c09yIGZyb20gJy4vY29tbWFMaXN0c09yJztcbmV4cG9ydCBodG1sIGZyb20gJy4vaHRtbCc7XG5leHBvcnQgY29kZUJsb2NrIGZyb20gJy4vY29kZUJsb2NrJztcbmV4cG9ydCBzb3VyY2UgZnJvbSAnLi9zb3VyY2UnO1xuZXhwb3J0IHNhZmVIdG1sIGZyb20gJy4vc2FmZUh0bWwnO1xuZXhwb3J0IG9uZUxpbmUgZnJvbSAnLi9vbmVMaW5lJztcbmV4cG9ydCBvbmVMaW5lVHJpbSBmcm9tICcuL29uZUxpbmVUcmltJztcbmV4cG9ydCBvbmVMaW5lQ29tbWFMaXN0cyBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzJztcbmV4cG9ydCBvbmVMaW5lQ29tbWFMaXN0c09yIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNPcic7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNBbmQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG5leHBvcnQgaW5saW5lTGlzdHMgZnJvbSAnLi9pbmxpbmVMaXN0cyc7XG5leHBvcnQgb25lTGluZUlubGluZUxpc3RzIGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbmV4cG9ydCBzdHJpcEluZGVudCBmcm9tICcuL3N0cmlwSW5kZW50JztcbmV4cG9ydCBzdHJpcEluZGVudHMgZnJvbSAnLi9zdHJpcEluZGVudHMnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbiIsImNvbnN0IGRlZmF1bHRzID0ge1xuICBzZXBhcmF0b3I6ICcnLFxuICBjb25qdW5jdGlvbjogJycsXG4gIHNlcmlhbDogZmFsc2UsXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGFycmF5IHN1YnN0aXR1dGlvbiB0byBhIHN0cmluZyBjb250YWluaW5nIGEgbGlzdFxuICogQHBhcmFtICB7U3RyaW5nfSBbb3B0cy5zZXBhcmF0b3IgPSAnJ10gLSB0aGUgY2hhcmFjdGVyIHRoYXQgc2VwYXJhdGVzIGVhY2ggaXRlbVxuICogQHBhcmFtICB7U3RyaW5nfSBbb3B0cy5jb25qdW5jdGlvbiA9ICcnXSAgLSByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIHRoaXNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFtvcHRzLnNlcmlhbCA9IGZhbHNlXSAtIGluY2x1ZGUgdGhlIHNlcGFyYXRvciBiZWZvcmUgdGhlIGNvbmp1bmN0aW9uPyAoT3hmb3JkIGNvbW1hIHVzZS1jYXNlKVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3QgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciA9IChvcHRzID0gZGVmYXVsdHMpID0+ICh7XG4gIG9uU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgcmVzdWx0U29GYXIpIHtcbiAgICAvLyBvbmx5IG9wZXJhdGUgb24gYXJyYXlzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3Vic3RpdHV0aW9uKSkge1xuICAgICAgY29uc3QgYXJyYXlMZW5ndGggPSBzdWJzdGl0dXRpb24ubGVuZ3RoO1xuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gb3B0cy5zZXBhcmF0b3I7XG4gICAgICBjb25zdCBjb25qdW5jdGlvbiA9IG9wdHMuY29uanVuY3Rpb247XG4gICAgICBjb25zdCBzZXJpYWwgPSBvcHRzLnNlcmlhbDtcbiAgICAgIC8vIGpvaW4gZWFjaCBpdGVtIGluIHRoZSBhcnJheSBpbnRvIGEgc3RyaW5nIHdoZXJlIGVhY2ggaXRlbSBpcyBzZXBhcmF0ZWQgYnkgc2VwYXJhdG9yXG4gICAgICAvLyBiZSBzdXJlIHRvIG1haW50YWluIGluZGVudGF0aW9uXG4gICAgICBjb25zdCBpbmRlbnQgPSByZXN1bHRTb0Zhci5tYXRjaCgvKFxcbj9bXlxcU1xcbl0rKSQvKTtcbiAgICAgIGlmIChpbmRlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLmpvaW4oc2VwYXJhdG9yICsgaW5kZW50WzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArICcgJyk7XG4gICAgICB9XG4gICAgICAvLyBpZiBjb25qdW5jdGlvbiBpcyBzZXQsIHJlcGxhY2UgdGhlIGxhc3Qgc2VwYXJhdG9yIHdpdGggY29uanVuY3Rpb24sIGJ1dCBvbmx5IGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgc3Vic3RpdHV0aW9uXG4gICAgICBpZiAoY29uanVuY3Rpb24gJiYgYXJyYXlMZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gc3Vic3RpdHV0aW9uLmxhc3RJbmRleE9mKHNlcGFyYXRvcik7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9XG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KSArXG4gICAgICAgICAgKHNlcmlhbCA/IHNlcGFyYXRvciA6ICcnKSArXG4gICAgICAgICAgJyAnICtcbiAgICAgICAgICBjb25qdW5jdGlvbiArXG4gICAgICAgICAgc3Vic3RpdHV0aW9uLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaW5saW5lTGlzdHMnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZSc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lID0gbmV3IFRlbXBsYXRlVGFnKFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/Olxcbig/OlxccyopKSsvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHMnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c0FuZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNPcic7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUNvbW1hTGlzdHNPcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVJbmxpbmVMaXN0cztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZVRyaW0nO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZVRyaW0gPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuXFxzKikvZywgJycpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lVHJpbTtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG4iLCJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuIiwiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9yZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXInO1xuIiwiY29uc3QgcmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdHJpbmcoc3RyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN0cmluZ1RyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyJztcbiIsImNvbnN0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgcmVzdWx0U29GYXIpIHtcbiAgICBpZiAocmVwbGFjZVdoYXQgPT0gbnVsbCB8fCByZXBsYWNlV2l0aCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgcmVxdWlyZXMgYXQgbGVhc3QgMiBhcmd1bWVudHMuJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHRvdWNoIGlmIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgaWYgKHN1YnN0aXR1dGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLnRvU3RyaW5nKCkucmVwbGFjZShyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NhZmVIdG1sJztcbiIsImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4uL2h0bWwnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbiIsImNvbnN0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgPSBzcGxpdEJ5ID0+ICh7XG4gIG9uU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgcmVzdWx0U29GYXIpIHtcbiAgICBpZiAoc3BsaXRCeSAhPSBudWxsICYmIHR5cGVvZiBzcGxpdEJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBzdWJzdGl0dXRpb24gPT09ICdzdHJpbmcnICYmIHN1YnN0aXR1dGlvbi5pbmNsdWRlcyhzcGxpdEJ5KSkge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uc3BsaXQoc3BsaXRCeSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhIHN0cmluZyBjaGFyYWN0ZXIgdG8gc3BsaXQgYnkuJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3RyaXBJbmRlbnQnO1xuIiwiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuIiwiLyoqXG4gKiBzdHJpcHMgaW5kZW50YXRpb24gZnJvbSBhIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZSA9ICdpbml0aWFsJyAtIHdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBvciBqdXN0IGxlYWRpbmcgaW5kZW50YXRpb24uIGNhbiBiZSAnYWxsJyBvciAnaW5pdGlhbCdcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3Qgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciA9ICh0eXBlID0gJ2luaXRpYWwnKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAvLyByZW1vdmUgdGhlIHNob3J0ZXN0IGxlYWRpbmcgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIGNvbnN0IG1hdGNoID0gZW5kUmVzdWx0Lm1hdGNoKC9eW15cXFNcXG5dKig/PVxcUykvZ20pO1xuICAgICAgY29uc3QgaW5kZW50ID0gbWF0Y2ggJiYgTWF0aC5taW4oLi4ubWF0Y2gubWFwKGVsID0+IGVsLmxlbmd0aCkpO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeLnske2luZGVudH19YCwgJ2dtJyk7XG4gICAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eW15cXFNcXG5dKy9nbSwgJycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZTogJHt0eXBlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50cyc7XG4iLCJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXIgZnJvbSAnLi4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHN0cmlwSW5kZW50cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcignYWxsJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50cztcbiIsImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbiIsIi8qKlxuICogVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXIgdGhhdCB0cmltcyB3aGl0ZXNwYWNlIG9uIHRoZSBlbmQgcmVzdWx0IG9mIGEgdGFnZ2VkIHRlbXBsYXRlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHNpZGUgPSAnJyAtIFRoZSBzaWRlIG9mIHRoZSBzdHJpbmcgdG8gdHJpbS4gQ2FuIGJlICdzdGFydCcgb3IgJ2VuZCcgKGFsdGVybmF0aXZlbHkgJ2xlZnQnIG9yICdyaWdodCcpXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3QgdHJpbVJlc3VsdFRyYW5zZm9ybWVyID0gKHNpZGUgPSAnJykgPT4gKHtcbiAgb25FbmRSZXN1bHQoZW5kUmVzdWx0KSB7XG4gICAgaWYgKHNpZGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZW5kUmVzdWx0LnRyaW0oKTtcbiAgICB9XG5cbiAgICBzaWRlID0gc2lkZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHNpZGUgPT09ICdzdGFydCcgfHwgc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gZW5kUmVzdWx0LnJlcGxhY2UoL15cXHMqLywgJycpO1xuICAgIH1cblxuICAgIGlmIChzaWRlID09PSAnZW5kJyB8fCBzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gZW5kUmVzdWx0LnJlcGxhY2UoL1xccyokLywgJycpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihgU2lkZSBub3Qgc3VwcG9ydGVkOiAke3NpZGV9YCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4gLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gYXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi41JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuL2VzNi5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdrcygnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgfVxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgIGRlZmluZWQsXG4gICAgICBTWU1CT0wsXG4gICAgICAnJ1tLRVldLFxuICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgIH1cbiAgICApO1xuICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cbiAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS8sXG4gICAgICByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsIi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpIHtcbiAgaWYgKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpIHRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc3BhY2VzID0gcmVxdWlyZSgnLi9fc3RyaW5nLXdzJyk7XG52YXIgc3BhY2UgPSAnWycgKyBzcGFjZXMgKyAnXSc7XG52YXIgbm9uID0gJ1xcdTIwMGJcXHUwMDg1JztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uIChLRVksIGV4ZWMsIEFMSUFTKSB7XG4gIHZhciBleHAgPSB7fTtcbiAgdmFyIEZPUkNFID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZiAoQUxJQVMpIGV4cFtBTElBU10gPSBmbjtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBGT1JDRSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbiAoc3RyaW5nLCBUWVBFKSB7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciBEYXRlUHJvdG8gPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IERhdGVQcm90b1tUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoRGF0ZVByb3RvLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICR0b1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyICROdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBCYXNlID0gJE51bWJlcjtcbnZhciBwcm90byA9ICROdW1iZXIucHJvdG90eXBlO1xuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NPRiA9IGNvZihyZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykocHJvdG8pKSA9PSBOVU1CRVI7XG52YXIgVFJJTSA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICB2YXIgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmICghJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpIHtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKHRvTnVtYmVyKGl0KSksIHRoYXQsICROdW1iZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUE4oQmFzZSkgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhCYXNlLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKCROdW1iZXIsIGtleSkpIHtcbiAgICAgIGRQKCROdW1iZXIsIGtleSwgZ09QRChCYXNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcbn1cbiIsIi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfVxufSk7XG4iLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uICgkZnJlZXplKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpIHtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKG1ldGEoaXQpKSA6IGl0O1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyIGdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5IC8qICwgcmVjZWl2ZXIgKi8pIHtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl07XG4gIHZhciBkZXNjLCBwcm90bztcbiAgaWYgKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKSByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYgKGRlc2MgPSBnT1BELmYodGFyZ2V0LCBwcm9wZXJ0eUtleSkpIHJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZiAoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSkgcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0JywgeyBnZXQ6IGdldCB9KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xudmFyICRmbGFncyA9IHJlcXVpcmUoJy4vX2ZsYWdzJyk7XG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG52YXIgQmFzZSA9ICRSZWdFeHA7XG52YXIgcHJvdG8gPSAkUmVnRXhwLnByb3RvdHlwZTtcbnZhciByZTEgPSAvYS9nO1xudmFyIHJlMiA9IC9hL2c7XG4vLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbnZhciBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmUyW3JlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSkge1xuICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpIHtcbiAgICB2YXIgdGlSRSA9IHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwO1xuICAgIHZhciBwaVJFID0gaXNSZWdFeHAocCk7XG4gICAgdmFyIGZpVSA9IGYgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gIXRpUkUgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcbiAgICAgIDogaW5oZXJpdElmUmVxdWlyZWQoQ09SUkVDVF9ORVdcbiAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG4gICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpXG4gICAgICAsIHRpUkUgPyB0aGlzIDogcHJvdG8sICRSZWdFeHApO1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluICRSZWdFeHAgfHwgZFAoJFJlZ0V4cCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGl0KSB7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOykgcHJveHkoa2V5c1tpKytdKTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKCdSZWdFeHAnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnJlcXVpcmUoJy4vX2V4cG9ydCcpKHtcbiAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgcHJvdG86IHRydWUsXG4gIGZvcmNlZDogcmVnZXhwRXhlYyAhPT0gLy4vLmV4ZWNcbn0sIHtcbiAgZXhlYzogcmVnZXhwRXhlY1xufSk7XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIE1BVENILCAkbWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJG1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4vX2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCZgJ118XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRyZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xuXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICB2YXIgY2FwdHVyZTtcbiAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4vX3NhbWUtdmFsdWUnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24gKGRlZmluZWQsIFNFQVJDSCwgJHNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHNlYXJjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciAkU1BMSVQgPSAnc3BsaXQnO1xudmFyIExFTkdUSCA9ICdsZW5ndGgnO1xudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbnZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gJG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYgKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuIiwiLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29udGV4dCA9IHJlcXVpcmUoJy4vX3N0cmluZy1jb250ZXh0Jyk7XG52YXIgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG4gICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLngtaGVsbG9zaWduLWVtYmVkZGVkIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgLngtaGVsbG9zaWduLWVtYmVkZGVkLS1pbi1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogOTk5NzsgfVxcblxcbi54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSwgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDE2IC8gOSkge1xcbiAgICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLXNjcmVlbiB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jb250ZW50IHtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDV2aDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGhlaWdodDogOTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtaW4td2lkdGg6IDUxMnB4O1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMTYgLyA5KSB7XFxuICAgIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY29udGVudCB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtaW4taGVpZ2h0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IDA7IH0gfVxcblxcbi54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IC02MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpLCBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMTYgLyA5KSB7XFxuICAgIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2Uge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbi54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXMgZWFzZTtcXG4gIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuICAueC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLWNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTRFNEU7IH1cXG4gIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uOjpiZWZvcmUsIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRvcDogMTBweDsgfVxcbiAgLngtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jbG9zZS1idXR0b246OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7IH1cXG4gIC54LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpOyB9XFxuXFxuLngtaGVsbG9zaWduLWVtYmVkZGVkX19pZnJhbWUge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgKndpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwtP1xcZD9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG5cdC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG5cdHJldHVybiB0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcblx0XHRjb25zb2xlLmxvZyAmJlxuXHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xubW9kdWxlLmV4cG9ydHMuVGlueUVtaXR0ZXIgPSBFO1xuIiwiKGZ1bmN0aW9uKGdsb2JhbCkge1xyXG4gIC8qKlxyXG4gICAqIFBvbHlmaWxsIFVSTFNlYXJjaFBhcmFtc1xyXG4gICAqXHJcbiAgICogSW5zcGlyZWQgZnJvbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uL3VybC1zZWFyY2gtcGFyYW1zL2Jsb2IvbWFzdGVyL3NyYy91cmwtc2VhcmNoLXBhcmFtcy5qc1xyXG4gICAqL1xyXG5cclxuICB2YXIgY2hlY2tJZkl0ZXJhdG9ySXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiAhIVN5bWJvbC5pdGVyYXRvcjtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGl0ZXJhdG9yU3VwcG9ydGVkID0gY2hlY2tJZkl0ZXJhdG9ySXNTdXBwb3J0ZWQoKTtcclxuXHJcbiAgdmFyIGNyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgIHZhciBpdGVyYXRvciA9IHtcclxuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKTtcclxuICAgICAgICByZXR1cm4geyBkb25lOiB2YWx1ZSA9PT0gdm9pZCAwLCB2YWx1ZTogdmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXRlcmF0b3JTdXBwb3J0ZWQpIHtcclxuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlcmF0b3I7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VhcmNoIHBhcmFtIG5hbWUgYW5kIHZhbHVlcyBzaG91bGQgYmUgZW5jb2RlZCBhY2NvcmRpbmcgdG8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmxlbmNvZGVkLXNlcmlhbGl6aW5nXHJcbiAgICogZW5jb2RlVVJJQ29tcG9uZW50KCkgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0IGV4Y2VwdCBlbmNvZGluZyBzcGFjZXMgYXMgYCUyMGAgaW5zdGVhZCBvZiBgK2AuXHJcbiAgICovXHJcbiAgdmFyIHNlcmlhbGl6ZVBhcmFtID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xyXG4gIH07XHJcblxyXG4gIHZhciBkZXNlcmlhbGl6ZVBhcmFtID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHBvbHlmaWxsVVJMU2VhcmNoUGFyYW1zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIFVSTFNlYXJjaFBhcmFtcyA9IGZ1bmN0aW9uKHNlYXJjaFN0cmluZykge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19lbnRyaWVzJywgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xyXG4gICAgICB2YXIgdHlwZW9mU2VhcmNoU3RyaW5nID0gdHlwZW9mIHNlYXJjaFN0cmluZztcclxuXHJcbiAgICAgIGlmICh0eXBlb2ZTZWFyY2hTdHJpbmcgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZlNlYXJjaFN0cmluZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoc2VhcmNoU3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgdGhpcy5fZnJvbVN0cmluZyhzZWFyY2hTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzZWFyY2hTdHJpbmcgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNlYXJjaFN0cmluZy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgICBfdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKChzZWFyY2hTdHJpbmcgIT09IG51bGwpICYmICh0eXBlb2ZTZWFyY2hTdHJpbmcgPT09ICdvYmplY3QnKSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc2VhcmNoU3RyaW5nKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gc2VhcmNoU3RyaW5nW2ldO1xyXG4gICAgICAgICAgICBpZiAoKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbnRyeSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHx8IChlbnRyeS5sZW5ndGggIT09IDIpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmQoZW50cnlbMF0sIGVudHJ5WzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBbc3RyaW5nLCBhbnldIGFzIGVudHJ5IGF0IGluZGV4ICcgKyBpICsgJyBvZiBVUkxTZWFyY2hQYXJhbXNcXCdzIGlucHV0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaFN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RyaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHNlYXJjaFN0cmluZ1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbnN1cHBvcnRlZCBpbnB1dFxcJ3MgdHlwZSBmb3IgVVJMU2VhcmNoUGFyYW1zJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb3RvID0gVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcclxuXHJcbiAgICBwcm90by5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAobmFtZSBpbiB0aGlzLl9lbnRyaWVzKSB7XHJcbiAgICAgICAgdGhpcy5fZW50cmllc1tuYW1lXS5wdXNoKFN0cmluZyh2YWx1ZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2VudHJpZXNbbmFtZV0gPSBbU3RyaW5nKHZhbHVlKV07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZGVsZXRlID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICBkZWxldGUgdGhpcy5fZW50cmllc1tuYW1lXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICByZXR1cm4gKG5hbWUgaW4gdGhpcy5fZW50cmllcykgPyB0aGlzLl9lbnRyaWVzW25hbWVdWzBdIDogbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8uZ2V0QWxsID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICByZXR1cm4gKG5hbWUgaW4gdGhpcy5fZW50cmllcykgPyB0aGlzLl9lbnRyaWVzW25hbWVdLnNsaWNlKDApIDogW107XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgcmV0dXJuIChuYW1lIGluIHRoaXMuX2VudHJpZXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9lbnRyaWVzW25hbWVdID0gW1N0cmluZyh2YWx1ZSldO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgdmFyIGVudHJpZXM7XHJcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5fZW50cmllcykge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbnRyaWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICBlbnRyaWVzID0gdGhpcy5fZW50cmllc1tuYW1lXTtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGVudHJpZXNbaV0sIG5hbWUsIHRoaXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm90by5rZXlzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKG5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yKGl0ZW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJvdG8udmFsdWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvcihpdGVtcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByb3RvLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3IoaXRlbXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXRlcmF0b3JTdXBwb3J0ZWQpIHtcclxuICAgICAgcHJvdG9bU3ltYm9sLml0ZXJhdG9yXSA9IHByb3RvLmVudHJpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNlYXJjaEFycmF5ID0gW107XHJcbiAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgIHNlYXJjaEFycmF5LnB1c2goc2VyaWFsaXplUGFyYW0obmFtZSkgKyAnPScgKyBzZXJpYWxpemVQYXJhbSh2YWx1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHNlYXJjaEFycmF5LmpvaW4oJyYnKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGdsb2JhbC5VUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNoZWNrSWZVUkxTZWFyY2hQYXJhbXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBVUkxTZWFyY2hQYXJhbXMgPSBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zO1xyXG5cclxuICAgICAgcmV0dXJuIChuZXcgVVJMU2VhcmNoUGFyYW1zKCc/YT0xJykudG9TdHJpbmcoKSA9PT0gJ2E9MScpICYmICh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5zZXQgPT09ICdmdW5jdGlvbicpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFjaGVja0lmVVJMU2VhcmNoUGFyYW1zU3VwcG9ydGVkKCkpIHtcclxuICAgIHBvbHlmaWxsVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgcHJvdG8gPSBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcclxuXHJcbiAgaWYgKHR5cGVvZiBwcm90by5zb3J0ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBwcm90by5zb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xyXG4gICAgICAgIGlmICghX3RoaXMuX2VudHJpZXMpIHtcclxuICAgICAgICAgIF90aGlzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpdGVtcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICBpZiAoYVswXSA8IGJbMF0pIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFbMF0gPiBiWzBdKSB7XHJcbiAgICAgICAgICByZXR1cm4gKzE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChfdGhpcy5fZW50cmllcykgeyAvLyBmb3JjZSByZXNldCBiZWNhdXNlIElFIGtlZXBzIGtleXMgaW5kZXhcclxuICAgICAgICBfdGhpcy5fZW50cmllcyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFwcGVuZChpdGVtc1tpXVswXSwgaXRlbXNbaV1bMV0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBwcm90by5fZnJvbVN0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnX2Zyb21TdHJpbmcnLCB7XHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZW50cmllcykge1xyXG4gICAgICAgICAgdGhpcy5fZW50cmllcyA9IHt9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgICAgIGtleXMucHVzaChuYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKGtleXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VhcmNoU3RyaW5nID0gc2VhcmNoU3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzZWFyY2hTdHJpbmcuc3BsaXQoJyYnKTtcclxuICAgICAgICB2YXIgYXR0cmlidXRlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgdGhpcy5hcHBlbmQoXHJcbiAgICAgICAgICAgIGRlc2VyaWFsaXplUGFyYW0oYXR0cmlidXRlWzBdKSxcclxuICAgICAgICAgICAgKGF0dHJpYnV0ZS5sZW5ndGggPiAxKSA/IGRlc2VyaWFsaXplUGFyYW0oYXR0cmlidXRlWzFdKSA6ICcnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIVE1MQW5jaG9yRWxlbWVudFxyXG5cclxufSkoXHJcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSA/IGdsb2JhbFxyXG4gICAgOiAoKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvd1xyXG4gICAgOiAoKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgPyBzZWxmIDogdGhpcykpXHJcbik7XHJcblxyXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XHJcbiAgLyoqXHJcbiAgICogUG9seWZpbGwgVVJMXHJcbiAgICpcclxuICAgKiBJbnNwaXJlZCBmcm9tIDogaHR0cHM6Ly9naXRodWIuY29tL2Fydi9ET00tVVJMLVBvbHlmaWxsL2Jsb2IvbWFzdGVyL3NyYy91cmwuanNcclxuICAgKi9cclxuXHJcbiAgdmFyIGNoZWNrSWZVUkxJc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHUgPSBuZXcgZ2xvYmFsLlVSTCgnYicsICdodHRwOi8vYScpO1xyXG4gICAgICB1LnBhdGhuYW1lID0gJ2MgZCc7XHJcbiAgICAgIHJldHVybiAodS5ocmVmID09PSAnaHR0cDovL2EvYyUyMGQnKSAmJiB1LnNlYXJjaFBhcmFtcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgcG9seWZpbGxVUkwgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfVVJMID0gZ2xvYmFsLlVSTDtcclxuXHJcbiAgICB2YXIgVVJMID0gZnVuY3Rpb24odXJsLCBiYXNlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdXJsID0gU3RyaW5nKHVybCk7XHJcblxyXG4gICAgICAvLyBPbmx5IGNyZWF0ZSBhbm90aGVyIGRvY3VtZW50IGlmIHRoZSBiYXNlIGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICAgIHZhciBkb2MgPSBkb2N1bWVudCwgYmFzZUVsZW1lbnQ7XHJcbiAgICAgIGlmIChiYXNlICYmIChnbG9iYWwubG9jYXRpb24gPT09IHZvaWQgMCB8fCBiYXNlICE9PSBnbG9iYWwubG9jYXRpb24uaHJlZikpIHtcclxuICAgICAgICBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgICAgIGJhc2VFbGVtZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2Jhc2UnKTtcclxuICAgICAgICBiYXNlRWxlbWVudC5ocmVmID0gYmFzZTtcclxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlRWxlbWVudCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmIChiYXNlRWxlbWVudC5ocmVmLmluZGV4T2YoYmFzZSkgIT09IDApIHRocm93IG5ldyBFcnJvcihiYXNlRWxlbWVudC5ocmVmKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVVJMIHVuYWJsZSB0byBzZXQgYmFzZSAnICsgYmFzZSArICcgZHVlIHRvICcgKyBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBhbmNob3JFbGVtZW50LmhyZWYgPSB1cmw7XHJcbiAgICAgIGlmIChiYXNlRWxlbWVudCkge1xyXG4gICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGFuY2hvckVsZW1lbnQpO1xyXG4gICAgICAgIGFuY2hvckVsZW1lbnQuaHJlZiA9IGFuY2hvckVsZW1lbnQuaHJlZjsgLy8gZm9yY2UgaHJlZiB0byByZWZyZXNoXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhbmNob3JFbGVtZW50LnByb3RvY29sID09PSAnOicgfHwgIS86Ly50ZXN0KGFuY2hvckVsZW1lbnQuaHJlZikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFVSTCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ19hbmNob3JFbGVtZW50Jywge1xyXG4gICAgICAgIHZhbHVlOiBhbmNob3JFbGVtZW50XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIC8vIGNyZWF0ZSBhIGxpbmtlZCBzZWFyY2hQYXJhbXMgd2hpY2ggcmVmbGVjdCBpdHMgY2hhbmdlcyBvbiBVUkxcclxuICAgICAgdmFyIHNlYXJjaFBhcmFtcyA9IG5ldyBnbG9iYWwuVVJMU2VhcmNoUGFyYW1zKHRoaXMuc2VhcmNoKTtcclxuICAgICAgdmFyIGVuYWJsZVNlYXJjaFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgIHZhciBlbmFibGVTZWFyY2hQYXJhbXNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBbJ2FwcGVuZCcsICdkZWxldGUnLCAnc2V0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2ROYW1lKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IHNlYXJjaFBhcmFtc1ttZXRob2ROYW1lXTtcclxuICAgICAgICBzZWFyY2hQYXJhbXNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIG1ldGhvZC5hcHBseShzZWFyY2hQYXJhbXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICBpZiAoZW5hYmxlU2VhcmNoVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5zZWFyY2ggPSBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZW5hYmxlU2VhcmNoUGFyYW1zVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2VhcmNoUGFyYW1zJywge1xyXG4gICAgICAgIHZhbHVlOiBzZWFyY2hQYXJhbXMsXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBzZWFyY2ggPSB2b2lkIDA7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3VwZGF0ZVNlYXJjaFBhcmFtcycsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2ggIT09IHNlYXJjaCkge1xyXG4gICAgICAgICAgICBzZWFyY2ggPSB0aGlzLnNlYXJjaDtcclxuICAgICAgICAgICAgaWYgKGVuYWJsZVNlYXJjaFBhcmFtc1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgIGVuYWJsZVNlYXJjaFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoUGFyYW1zLl9mcm9tU3RyaW5nKHRoaXMuc2VhcmNoKTtcclxuICAgICAgICAgICAgICBlbmFibGVTZWFyY2hVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb3RvID0gVVJMLnByb3RvdHlwZTtcclxuXHJcbiAgICB2YXIgbGlua1VSTFdpdGhBbmNob3JBdHRyaWJ1dGUgPSBmdW5jdGlvbihhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgYXR0cmlidXRlTmFtZSwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudFthdHRyaWJ1dGVOYW1lXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnRbYXR0cmlidXRlTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFsnaGFzaCcsICdob3N0JywgJ2hvc3RuYW1lJywgJ3BvcnQnLCAncHJvdG9jb2wnXVxyXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihhdHRyaWJ1dGVOYW1lKSB7XHJcbiAgICAgICAgbGlua1VSTFdpdGhBbmNob3JBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3NlYXJjaCcsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yRWxlbWVudFsnc2VhcmNoJ107XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9hbmNob3JFbGVtZW50WydzZWFyY2gnXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwcm90bywge1xyXG5cclxuICAgICAgJ3RvU3RyaW5nJzoge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaHJlZjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ2hyZWYnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50LmhyZWYucmVwbGFjZSgvXFw/JC8sICcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQuaHJlZiA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAncGF0aG5hbWUnOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9hbmNob3JFbGVtZW50LnBhdGhuYW1lLnJlcGxhY2UoLyheXFwvPykvLCAnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5wYXRobmFtZSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgJ29yaWdpbic6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgLy8gZ2V0IGV4cGVjdGVkIHBvcnQgZnJvbSBwcm90b2NvbFxyXG4gICAgICAgICAgdmFyIGV4cGVjdGVkUG9ydCA9IHsgJ2h0dHA6JzogODAsICdodHRwczonOiA0NDMsICdmdHA6JzogMjEgfVt0aGlzLl9hbmNob3JFbGVtZW50LnByb3RvY29sXTtcclxuICAgICAgICAgIC8vIGFkZCBwb3J0IHRvIG9yaWdpbiBpZiwgZXhwZWN0ZWQgcG9ydCBpcyBkaWZmZXJlbnQgdGhhbiBhY3R1YWwgcG9ydFxyXG4gICAgICAgICAgLy8gYW5kIGl0IGlzIG5vdCBlbXB0eSBmLmUgaHR0cDovL2Zvbzo4MDgwXHJcbiAgICAgICAgICAvLyA4MDgwICE9IDgwICYmIDgwODAgIT0gJydcclxuICAgICAgICAgIHZhciBhZGRQb3J0VG9PcmlnaW4gPSB0aGlzLl9hbmNob3JFbGVtZW50LnBvcnQgIT0gZXhwZWN0ZWRQb3J0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FuY2hvckVsZW1lbnQucG9ydCAhPT0gJyc7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvckVsZW1lbnQucHJvdG9jb2wgK1xyXG4gICAgICAgICAgICAnLy8nICtcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yRWxlbWVudC5ob3N0bmFtZSArXHJcbiAgICAgICAgICAgIChhZGRQb3J0VG9PcmlnaW4gPyAoJzonICsgdGhpcy5fYW5jaG9yRWxlbWVudC5wb3J0KSA6ICcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgICdwYXNzd29yZCc6IHsgLy8gVE9ET1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAndXNlcm5hbWUnOiB7IC8vIFRPRE9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgcmV0dXJuIF9VUkwuY3JlYXRlT2JqZWN0VVJMLmFwcGx5KF9VUkwsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbih1cmwpIHtcclxuICAgICAgcmV0dXJuIF9VUkwucmV2b2tlT2JqZWN0VVJMLmFwcGx5KF9VUkwsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdsb2JhbC5VUkwgPSBVUkw7XHJcblxyXG4gIH07XHJcblxyXG4gIGlmICghY2hlY2tJZlVSTElzU3VwcG9ydGVkKCkpIHtcclxuICAgIHBvbHlmaWxsVVJMKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoKGdsb2JhbC5sb2NhdGlvbiAhPT0gdm9pZCAwKSAmJiAhKCdvcmlnaW4nIGluIGdsb2JhbC5sb2NhdGlvbikpIHtcclxuICAgIHZhciBnZXRPcmlnaW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGdsb2JhbC5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBnbG9iYWwubG9jYXRpb24uaG9zdG5hbWUgKyAoZ2xvYmFsLmxvY2F0aW9uLnBvcnQgPyAoJzonICsgZ2xvYmFsLmxvY2F0aW9uLnBvcnQpIDogJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLmxvY2F0aW9uLCAnb3JpZ2luJywge1xyXG4gICAgICAgIGdldDogZ2V0T3JpZ2luLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGdsb2JhbC5sb2NhdGlvbi5vcmlnaW4gPSBnZXRPcmlnaW4oKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KShcclxuICAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpID8gZ2xvYmFsXHJcbiAgICA6ICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93XHJcbiAgICA6ICgodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSA/IHNlbGYgOiB0aGlzKSlcclxuKTtcclxuIiwiLyoqXG4gKlxuICpcbiAqIEBhdXRob3IgSmVycnkgQmVuZHkgPGplcnJ5QGljZXdpbmdjYy5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbmF0aXZlVVJMU2VhcmNoUGFyYW1zID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIHNlbGYuVVJMU2VhcmNoUGFyYW1zID0gdXNlUHJveHkgP1xuICAgICAgICAvLyBTYWZhcmkgMTAuMCBkb2Vzbid0IHN1cHBvcnQgUHJveHksIHNvIGl0IHdvbid0IGV4dGVuZCBVUkxTZWFyY2hQYXJhbXMgb24gc2FmYXJpIDEwLjBcbiAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRhcmdldCgobmV3IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKGFyZ3NbMF0pLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgOlxuICAgICAgICBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbDtcblxuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgaXRlcmF0b3Jbc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRvRGljdChzZWFyY2gpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHNlYXJjaFtrZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0ICc/J1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKFwiP1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhaXJzID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFpcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlycyBbal0sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlLnNsaWNlKDAsIGluZGV4KSksIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZSksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAoXG4gICAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChuYW1lIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0ucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGljdFtuYW1lXSA9IFt2YWxdO1xuICAgICAgICB9XG4gICAgfVxuXG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWxsb3dDYW5jZWw6IHRydWUsXG4gIGRlYnVnOiBmYWxzZSxcbiAgc2tpcERvbWFpblZlcmlmaWNhdGlvbjogZmFsc2UsXG4gIHRlc3RNb2RlOiBmYWxzZSxcbiAgdGltZW91dDogMzAwMDAsIC8vIDMwIHNlY29uZHNcbn07XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICd0aW55LWVtaXR0ZXInO1xuaW1wb3J0IHsgc2FmZUh0bWwgfSBmcm9tICdjb21tb24tdGFncyc7XG5cbmltcG9ydCBkZWJ1ZyBmcm9tICcuL3V0aWxzL2RlYnVnJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcblxuY2xhc3MgSGVsbG9TaWduIGV4dGVuZHMgRW1pdHRlciB7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBjbGFzcyBuYW1lcy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBjbGFzc05hbWVzID0gc2V0dGluZ3MuY2xhc3NOYW1lcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGV2ZW50cy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBldmVudHMgPSBzZXR0aW5ncy5ldmVudHM7XG5cbiAgLyoqXG4gICAqIEhlbGxvU2lnbiBFbWJlZGRlZCBzdXBwb3J0ZWQgbG9jYWxlcy5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHN0YXRpY1xuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHN0YXRpYyBsb2NhbGVzID0gc2V0dGluZ3MubG9jYWxlcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZXMuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBzdGF0aWMgbWVzc2FnZXMgPSBzZXR0aW5ncy5tZXNzYWdlcztcblxuICAvKipcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIHZlcnNpb24gbnVtYmVyLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAc3RhdGljXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc3RhdGljIHZlcnNpb24gPSBfX1BLR19WRVJTSU9OX187XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGNvbmZpZyBvYmplY3Qgd2hpY2ggXCJvcGVuXCIgd2lsbCBleHRlbmQuXG4gICAqXG4gICAqIEB0eXBlIHs/T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Jhc2VDb25maWcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYmFzZSBIZWxsb1NpZ24gRW1iZWRkZWQgY29udGFpbmVyXG4gICAqIGVsZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHs/SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYmFzZUVsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGZpbmFsIGNvbmZpZyBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHs/T2JqZWN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbmZpZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBpRnJhbWUgVVJMIG9iamVjdC5cbiAgICpcbiAgICogQHR5cGUgez9VUkx9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaUZyYW1lVVJMID0gbnVsbDtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlGcmFtZSBlbGVtZW50LlxuICAgKlxuICAgKiBAdHlwZSB7P0hUTUxFbGVtZW50fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lGcmFtZUVsID0gbnVsbDtcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxpemF0aW9uIHRpbWVvdXQgdGltZXIuXG4gICAqXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRUaW1lb3V0ID0gbnVsbDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2xpZW50IGlzIG9wZW4gb3Igbm90LlxuICAgKlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc09wZW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYXBwIGlzIHJlYWR5IG9yIG5vdC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNSZWFkeSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzaWduYXR1cmUgcmVxdWVzdCBoYXMgYmVlbiBzZW50IG9yIHNpZ25lZC5cbiAgICpcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNTZW50T3JTaWduZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uRW1iZWRkZWRDbGljayA9IHRoaXMuX29uRW1iZWRkZWRDbGljay5iaW5kKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25Jbml0VGltZW91dCA9IHRoaXMuX29uSW5pdFRpbWVvdXQuYmluZCh0aGlzKTtcblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQmVmb3JlVW5sb2FkID0gdGhpcy5fb25CZWZvcmVVbmxvYWQuYmluZCh0aGlzKTtcblxuICAvKipcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uTWVzc2FnZSA9IHRoaXMuX29uTWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEhlbGxvU2lnbiBFbWJlZGRlZCBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvYmpdXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Iob2JqID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgZGVidWcuaW5mbygnY3JlYXRlZCBuZXcgSGVsbG9TaWduIGluc3RhbmNlIHdpdGggb3B0aW9ucycsIG9iaik7XG5cbiAgICBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl9iYXNlQ29uZmlnID0geyAuLi5vYmogfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ29uZmlndXJhdGlvbiBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIGFwcGVuZHMgdGhlIFwiY2xpZW50X2lkXCIgcGFyYW1ldGVyIHRvIHRoZVxuICAgKiBpRnJhbWUgcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBjbGllbnRJZCBpcyBpbnZhbGlkXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseUNsaWVudElkKHBhcmFtcykge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5jbGllbnRJZDtcblxuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNsaWVudElkXCIgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiY2xpZW50SWRcIiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgcGFyYW1zLmFwcGVuZCgnY2xpZW50X2lkJywgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIGFwcGVuZHMgdGhlIFwiZGVidWdcIiBwYXJhbWV0ZXIgdG8gdGhlXG4gICAqIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIGRlYnVnIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5RGVidWcocGFyYW1zKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29uZmlnLmRlYnVnO1xuXG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJkZWJ1Z1wiIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgfVxuXG4gICAgcGFyYW1zLmFwcGVuZCgnZGVidWcnLCB2YWwgPyAxIDogMCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcImZpbmFsX2J1dHRvbl90ZXh0XCIgcGFyYW1ldGVyXG4gICAqIHRvIHRoZSBpRnJhbWUgcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBmaW5hbEJ1dHRvblRleHQgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlGaW5hbEJ1dHRvblRleHQocGFyYW1zKSB7XG4gICAgaWYgKCdmaW5hbEJ1dHRvblRleHQnIGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5fY29uZmlnLmZpbmFsQnV0dG9uVGV4dDtcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZmluYWxCdXR0b25UZXh0XCIgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIVsnU2F2ZScsICdTZW5kJywgJ0NvbnRpbnVlJ10uaW5jbHVkZXModmFsKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImZpbmFsQnV0dG9uVGV4dFwiIG11c3QgYmUgb25lIG9mIFwiU2F2ZVwiLCBcIlNlbmRcIiwgb3IgXCJDb250aW51ZVwiJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5hcHBlbmQoJ2ZpbmFsX2J1dHRvbl90ZXh0JywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcImhpZGVfaGVhZGVyXCIgcGFyYW1ldGVyIHRvIHRoZVxuICAgKiBpRnJhbWUgcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHRocm93cyB7VHlwZUVycm9yfSBpZiBoaWRlSGVhZGVyIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5SGlkZUhlYWRlcihwYXJhbXMpIHtcbiAgICBpZiAoJ2hpZGVIZWFkZXInIGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5fY29uZmlnLmhpZGVIZWFkZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJoaWRlSGVhZGVyXCIgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgnaGlkZV9oZWFkZXInLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBcInVzZXJfY3VsdHVyZVwiIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lXG4gICAqIHBhcmFtcyBvYmplY3QgaWYgaXQgaXMgZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5TG9jYWxlKHBhcmFtcykge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5sb2NhbGU7XG5cbiAgICAvLyBJZiBcImxvY2FsZVwiIGlzIG5vdCBkZWZpbmVkLCB0aGVuIHRoZSBcInVzZXJfY3VsdHVyZVwiXG4gICAgLy8gcGFyYW0gaXMgbm90IHNlbnQgdG8gdGhlIGFwcC4gVGhpcyB0ZWxscyB0aGUgYXBwIHRvXG4gICAgLy8gdHJ5IHVzZSB0aGUgdXNlcidzIGRlZmF1bHQgYnJvd3NlciBsYW5ndWFnZSwgaWYgaXRcbiAgICAvLyBpcyBzdXBwb3J0ZWQgYnkgSGVsbG9TaWduLiBPdGhlcndpc2UsIHRoZSBhcHAgZmFsbHNcbiAgICAvLyBiYWNrIHRvIEVuZ2xpc2guXG4gICAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoKSB7XG4gICAgICBwYXJhbXMuYXBwZW5kKCd1c2VyX2N1bHR1cmUnLCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBcInBhcmVudF91cmxcIiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXNcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlQYXJlbnRVUkwocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgncGFyZW50X3VybCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBhbmQgYXBwZW5kcyB0aGUgXCJyZWRpcmVjdF91cmxcIiBwYXJhbWV0ZXIgdG9cbiAgICogdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHJlZGlyZWN0VG8gaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlSZWRpcmVjdFRvKHBhcmFtcykge1xuICAgIGlmICgncmVkaXJlY3RUbycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcucmVkaXJlY3RUbztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wicmVkaXJlY3RUb1wiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVkaXJlY3RfdXJsJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInJlcXVlc3RlclwiIHBhcmFtZXRlciB0byB0aGVcbiAgICogaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgcmVxdWVzdGluZ0VtYWlsIGlzIGludmFsaWRcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5UmVxdWVzdGluZ0VtYWlsKHBhcmFtcykge1xuICAgIGlmICgncmVxdWVzdGluZ0VtYWlsJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbmZpZy5yZXF1ZXN0aW5nRW1haWw7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInJlcXVlc3RpbmdFbWFpbFwiIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLmFwcGVuZCgncmVxdWVzdGVyJywgdmFsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcInNraXBfZG9tYWluX3ZlcmlmaWNhdGlvblwiXG4gICAqIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtcyBvYmplY3QuXG4gICAqXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gaWYgdGVzdE1vZGUgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlUZXN0TW9kZShwYXJhbXMpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcuc2tpcERvbWFpblZlcmlmaWNhdGlvbiB8fCB0aGlzLl9jb25maWcudGVzdE1vZGU7XG5cbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRlc3RNb2RlXCIgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB9XG5cbiAgICBwYXJhbXMuYXBwZW5kKCdza2lwX2RvbWFpbl92ZXJpZmljYXRpb24nLCB2YWwgPyAxIDogMCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBhcHBlbmRzIHRoZSBcIndoaXRlX2xhYmVsaW5nX29wdGlvbnNcIlxuICAgKiBwYXJhbWV0ZXIgdG8gdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IGlmIHdoaXRlTGFiZWxpbmcgaXMgaW52YWxpZFxuICAgKiBAcGFyYW0ge1VSTFNlYXJjaFBhcmFtc30gcGFyYW1zXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlXaGl0ZUxhYmVsaW5nKHBhcmFtcykge1xuICAgIGlmICgnd2hpdGVMYWJlbGluZycgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9jb25maWcud2hpdGVMYWJlbGluZztcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wid2hpdGVMYWJlbGluZ1wiIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3doaXRlX2xhYmVsaW5nX29wdGlvbnMnLCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgXCJ1eF92ZXJzaW9uXCIgcGFyYW1ldGVyIHRvIHRoZSBpRnJhbWVcbiAgICogcGFyYW1zIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtVUkxTZWFyY2hQYXJhbXN9IHBhcmFtc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5VXhWZXJzaW9uKHBhcmFtcykge1xuICAgIHBhcmFtcy5hcHBlbmQoJ3V4X3ZlcnNpb24nLCAnMicpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIFwianNfdmVyc2lvblwiIHBhcmFtZXRlciB0byB0aGUgaUZyYW1lIHBhcmFtc1xuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7VVJMU2VhcmNoUGFyYW1zfSBwYXJhbXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseVZlcnNpb24ocGFyYW1zKSB7XG4gICAgcGFyYW1zLmFwcGVuZCgnanNfdmVyc2lvbicsIF9fUEtHX1ZFUlNJT05fXyk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIGFuZCBjcmF0ZXMgdGhlIGlGcmFtZSBwYXJhbXMgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1VSTH0gZnJhbWVVUkxcbiAgICogQHJldHVybnMge1VSTFNlYXJjaFBhcmFtc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRGcmFtZVBhcmFtcyhmcmFtZVVSTCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZnJhbWVVUkwuc2VhcmNoKTtcblxuICAgIHRoaXMuX2FwcGx5Q2xpZW50SWQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseURlYnVnKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlGaW5hbEJ1dHRvblRleHQocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUhpZGVIZWFkZXIocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseUxvY2FsZShwYXJhbXMpO1xuICAgIHRoaXMuX2FwcGx5UGFyZW50VVJMKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZWRpcmVjdFRvKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlSZXF1ZXN0aW5nRW1haWwocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVRlc3RNb2RlKHBhcmFtcyk7XG4gICAgdGhpcy5fYXBwbHlVeFZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVZlcnNpb24ocGFyYW1zKTtcbiAgICB0aGlzLl9hcHBseVdoaXRlTGFiZWxpbmcocGFyYW1zKTtcblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyBhbmQgc2V0cyB0aGUgaUZyYW1lIGZyYW1lIHNyYy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZUZyYW1lVXJsKHVybCkge1xuICAgIGNvbnN0IGZyYW1lVVJMID0gbmV3IFVSTCh1cmwpO1xuICAgIGNvbnN0IGZyYW1lUGFyYW1zID0gdGhpcy5fZ2V0RnJhbWVQYXJhbXMoZnJhbWVVUkwpO1xuXG4gICAgZnJhbWVVUkwuc2VhcmNoID0gZnJhbWVQYXJhbXMudG9TdHJpbmcoKTtcblxuICAgIHRoaXMuX2lGcmFtZVVSTCA9IGZyYW1lVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAuXG4gICAqXG4gICAqIFdlIHdvdWxkIGxpa2UgdG8gaGF2ZSB1c2VkIEhUTUwgQ29udGVudCBUZW1wbGF0ZXMgb3JcbiAgICogUmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KCkgYnV0IHdlIGFyZSBjb25jZXJuZWRcbiAgICogYWJvdXQgYnJvd3NlciBzdXBwb3J0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVuZGVyTWFya3VwKCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuY29udGFpbmVyKSB7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IHNhZmVIdG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtzZXR0aW5ncy5jbGFzc05hbWVzLkJBU0V9XCI+XG4gICAgICAgICAgPGlmcmFtZSBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5JRlJBTUV9XCIgbmFtZT1cIiR7c2V0dGluZ3MuaWZyYW1lLk5BTUV9XCIgc3JjPVwiJHt0aGlzLl9pRnJhbWVVUkwuaHJlZn1cIiBzY3JvbGxpbmc9XCJub1wiPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gc2FmZUh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3NldHRpbmdzLmNsYXNzTmFtZXMuQkFTRX0gJHtzZXR0aW5ncy5jbGFzc05hbWVzLkJBU0VfSU5fTU9EQUx9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9TQ1JFRU59XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiR7c2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DT05URU5UfVwiPlxuICAgICAgYCArIChcbiAgICAgICAgdGhpcy5fY29uZmlnLmFsbG93Q2FuY2VsID8gc2FmZUh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3NldHRpbmdzLmNsYXNzTmFtZXMuTU9EQUxfQ0xPU0V9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0ke3NldHRpbmdzLmNsYXNzTmFtZXMuTU9EQUxfQ0xPU0VfQlROfSByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZSBzaWduYXR1cmUgcmVxdWVzdFwiPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogJydcbiAgICAgICkgKyBzYWZlSHRtbGBcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XCIke3NldHRpbmdzLmNsYXNzTmFtZXMuSUZSQU1FfVwiIG5hbWU9XCIke3NldHRpbmdzLmlmcmFtZS5OQU1FfVwiIHNyYz1cIiR7dGhpcy5faUZyYW1lVVJMLmhyZWZ9XCIgc2Nyb2xsaW5nPVwibm9cIj48L2lmcmFtZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtLmZpcnN0Q2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgSGVsbG9TaWduIEVtYmVkZGVkIG1hcmt1cCBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwZW5kTWFya3VwKCkge1xuICAgIHRoaXMuX2Jhc2VFbCA9IHRoaXMuX3JlbmRlck1hcmt1cCgpO1xuXG4gICAgLy8gTGlzdGVuIGZvciBjbGljayBldmVudHMgd2l0aGluIHRoZSBIZWxsb1NpZ25cbiAgICAvLyBFbWJlZGRlZCBET00gbWFya3VwLiBUaGVzZSB3aWxsIGJlIGRlbGVnYXRlZFxuICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAgdGhpcy5fYmFzZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25FbWJlZGRlZENsaWNrKTtcblxuICAgIC8vIE9idGFpbiBlbGVtZW50IHJlZmVyZW5jZXMuXG4gICAgdGhpcy5faUZyYW1lRWwgPSB0aGlzLl9iYXNlRWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZXR0aW5ncy5jbGFzc05hbWVzLklGUkFNRSkuaXRlbSgwKTtcblxuICAgIC8vIEluc2VydCBIZWxsb1NpZ24gRW1iZWRkZWQgbWFya3VwIGludG8gdGhlIERPTS5cbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29uZmlnLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9iYXNlRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2Jhc2VFbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIEhlbGxvU2lnbiBFbWJlZGRlZCBtYXJrdXAgZnJvbSB0aGUgRE9NLlxuICAgKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NsZWFyTWFya3VwKCkge1xuICAgIHRoaXMuX2Jhc2VFbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2Jhc2VFbCk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSGVsbG9TaWduTWVzc2FnZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gW3BheWxvYWRdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBQb3N0cyBhIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZSB0byB0aGUgSGVsbG9TaWduXG4gICAqIEVtYmVkZGVkIGlGcmFtZSBjb250ZW50IHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIHtIZWxsb1NpZ25NZXNzYWdlfSBtc2dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZW5kTWVzc2FnZShtc2cpIHtcbiAgICBkZWJ1Zy5pbmZvKCdwb3N0aW5nIG1lc3NhZ2UnLCBtc2cpO1xuXG4gICAgY29uc3QgdGFyZ2V0T3JpZ2luID0gdGhpcy5faUZyYW1lVVJMLmhyZWY7XG4gICAgY29uc3QgdGFyZ2V0V2luZG93ID0gdGhpcy5faUZyYW1lRWwuY29udGVudFdpbmRvdztcblxuICAgIHRhcmdldFdpbmRvdy5wb3N0TWVzc2FnZShtc2csIHRhcmdldE9yaWdpbik7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjYW5jZWwgcmVxdWVzdCBtZXNzYWdlIHRvIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VuZENhbmNlbFJlcXVlc3RNZXNzYWdlKCkge1xuICAgIGRlYnVnLmluZm8oJ3NlbmRpbmcgY2FuY2VsIHJlcXVlc3QgbWVzc2FnZScpO1xuXG4gICAgdGhpcy5fc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9DQU5DRUxfUkVRVUVTVCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyB0aGUgY29uZmlndXJhdGlvbiBtZXNzYWdlIHRvIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2VuZENvbmZpZ3VyYXRpb25NZXNzYWdlKCkge1xuICAgIGRlYnVnLmluZm8oJ3NlbmRpbmcgYXBwIGNvbmZpZ3VyYXRpb24gbWVzc2FnZScpO1xuXG4gICAgdGhpcy5fc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogc2V0dGluZ3MubWVzc2FnZXMuQVBQX0NPTkZJR1VSRSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgYWxsb3dDYW5jZWw6IHRoaXMuX2NvbmZpZy5hbGxvd0NhbmNlbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgdGhlIGRvbWFpbiB2ZXJpZmljYXRpb24gcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmREb21haW5WZXJpZmljYXRpb25NZXNzYWdlKHRva2VuKSB7XG4gICAgZGVidWcuaW5mbygnc2VuZGluZyBkb21haW4gdmVyaWZpY2F0aW9uIG1lc3NhZ2UnLCB0b2tlbik7XG5cbiAgICB0aGlzLl9zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBzZXR0aW5ncy5tZXNzYWdlcy5BUFBfVkVSSUZZX0RPTUFJTl9SRVNQT05TRSxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIHRoZSBpbml0aWFsaXphdGlvbiBlcnJvciBtZXNzYWdlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NlbmRJbml0aWFsaXphdGlvbkVycm9yTWVzc2FnZSgpIHtcbiAgICBkZWJ1Zy5pbmZvKCdzZW5kaW5nIGluaXRpYWxpemF0aW9uIGVycm9yIG1lc3NhZ2UnKTtcblxuICAgIHRoaXMuX3NlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9FUlJPUixcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FwcCBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgdGltZW91dCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jbGVhckluaXRUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl9pbml0VGltZW91dCkge1xuICAgICAgZGVidWcuaW5mbygnY2xlYXJpbmcgaW5pdGlhbGl6YXRpb24gdGltZW91dCcpO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faW5pdFRpbWVvdXQpO1xuXG4gICAgICB0aGlzLl9pbml0VGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCB0aW1lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zdGFydEluaXRUaW1lb3V0KCkge1xuICAgIGRlYnVnLmluZm8oJ3N0YXJ0aW5nIGluaXRpYWxpemF0aW9uIHRpbWVvdXQnKTtcblxuICAgIHRoaXMuX2NsZWFySW5pdFRpbWVvdXQoKTtcblxuICAgIHRoaXMuX2luaXRUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLl9vbkluaXRUaW1lb3V0LCB0aGlzLl9jb25maWcudGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBpbml0aWFsaXphdGlvbiB0aW1lb3V0IHRpbWVyIGlmIHRoZSB3b3JrZmxvd1xuICAgKiBpcyBlbWJlZGRlZCBzaWduaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21heWJlU3RhcnRJbml0VGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5faUZyYW1lVVJMLmhyZWYuaW5jbHVkZXMoJ2VtYmVkZGVkU2lnbicpKSB7XG4gICAgICAvLyBTdGFydCB0aGUgaW5pdGlhbGl6YXRpb24gdGltZW91dCBiZWNhdXNlIHRoaXMgaXNcbiAgICAgIC8vIGVtYmVkZGVkIHNpZ25pbmcuXG4gICAgICB0aGlzLl9zdGFydEluaXRUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jZXJyb3JcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2RlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwIGVuY291bnRlcmVkIGFuIGVycm9yLlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2Vycm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwRGlkRXJyb3IocGF5bG9hZCkge1xuICAgIGRlYnVnLmVycm9yKCdhcHAgZW5jb3VudGVyZWQgYW4gZXJyb3Igd2l0aCBjb2RlOicsIHBheWxvYWQuY29kZSk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkVSUk9SLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3JlYWR5XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzaWduYXR1cmVJZFxuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGFwcCB3YXMgaW5pdGlhbGl6ZWQuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jcmVhZHlcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBEaWRJbml0aWFsaXplKHBheWxvYWQpIHtcbiAgICBkZWJ1Zy5pbmZvKCdhcHAgd2FzIGluaXRpYWxpemVkJyk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NlbmRDb25maWd1cmF0aW9uTWVzc2FnZSgpO1xuICAgIHRoaXMuX2NsZWFySW5pdFRpbWVvdXQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCB0aGlzLl9vbkJlZm9yZVVubG9hZCk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQURZLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC50b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24oeyB0b2tlbiB9KSB7XG4gICAgZGVidWcuaW5mbygnYXBwIHJlcXVlc3RlZCBkb21haW4gdmVyaWZpY2F0aW9uJywgdG9rZW4pO1xuXG4gICAgdGhpcy5fc2VuZERvbWFpblZlcmlmaWNhdGlvbk1lc3NhZ2UodG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jbWVzc2FnZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZVxuICAgKiBAcHJvcGVydHkgez9PYmplY3R9IHBheWxvYWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIEhlbGxvU2lnbiBFbWJlZGRlZCByZWNlaXZlcyBhIGNyb3NzLW9yaWdpblxuICAgKiB3aW5kb3cgbWVzc2FnZS5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNtZXNzYWdlXG4gICAqIEBwYXJhbSB7TWVzc2FnZUV2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBEaWRTZW5kTWVzc2FnZSh7IGRhdGEsIG9yaWdpbiB9KSB7XG4gICAgZGVidWcuaW5mbygncmVjZWl2ZWQgbWVzc2FnZScsIGRhdGEsIG9yaWdpbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLk1FU1NBR0UsIGRhdGEpO1xuXG4gICAgdGhpcy5fZGVsZWdhdGVNZXNzYWdlKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY2FuY2VsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBjYW5jZWxlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNjYW5jZWxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ2FuY2VsUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGNhbmNlbGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5DQU5DRUwpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IHNpZ25lclJvbGVzXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzaWduYXR1cmVSZXF1ZXN0SW5mb1xuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY3JlYXRlZCB0aGUgdGVtcGxhdGUuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jY3JlYXRlVGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkQ3JlYXRlVGVtcGxhdGUocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgY3JlYXRlZCB0aGUgc2lnbmF0dXJlIHJlcXVlc3QgdGVtcGxhdGUnKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuQ1JFQVRFX1RFTVBMQVRFLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWFzb25cbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIGRlY2xpbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2RlY2xpbmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRGVjbGluZVJlcXVlc3QocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgZGVjbGluZWQgdGhlIHNpZ25hdHVyZSByZXF1ZXN0Jyk7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLkRFQ0xJTkUsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jZmluaXNoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBmaW5pc2hlZCB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNmaW5pc2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkRmluaXNoUmVxdWVzdCgpIHtcbiAgICBkZWJ1Zy5pbmZvKCd1c2VyIGZpbmlzaGVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5GSU5JU0gpO1xuXG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jcmVhc3NpZ25cbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZUlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbWFpbFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcmVhc29uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciByZWFzc2lnbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3JlYXNzaWduXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXNlckRpZFJlYXNzaWduUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciByZWFzc2lnbmVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCB3aXRoIHJlYXNvbjonLCBwYXlsb2FkLnJlYXNvbik7XG5cbiAgICB0aGlzLmVtaXQoc2V0dGluZ3MuZXZlbnRzLlJFQVNTSUdOLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgSGVsbG9TaWduI3NlbmRcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHNpZ25hdHVyZVJlcXVlc3RJZFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmF0dXJlSWRcbiAgICovXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbnQgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEBlbWl0cyBIZWxsb1NpZ24jc2VuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGF5bG9hZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VzZXJEaWRTZW5kUmVxdWVzdChwYXlsb2FkKSB7XG4gICAgZGVidWcuaW5mbygndXNlciBzZW50IHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSB0cnVlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuU0VORCwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IEhlbGxvU2lnbiNzaWduXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzaWduYXR1cmVJZFxuICAgKi9cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbmVkIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI3NpZ25cbiAgICogQHBhcmFtIHtPYmplY3R9IHBheWxvYWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91c2VyRGlkU2lnblJlcXVlc3QocGF5bG9hZCkge1xuICAgIGRlYnVnLmluZm8oJ3VzZXIgc2lnbmVkIHRoZSBzaWduYXR1cmUgcmVxdWVzdCcpO1xuXG4gICAgdGhpcy5faXNTZW50T3JTaWduZWQgPSB0cnVlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuU0lHTiwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXRoaW5nIHdpdGhpbiB0aGVcbiAgICogSGVsbG9TaWduIEVtYmVkZGVkIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkVtYmVkZGVkQ2xpY2soZXZ0KSB7XG4gICAgY29uc3QgZWxlbSA9IGV2dC50YXJnZXQ7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkIGlzIHRoZSBjbG9zZVxuICAgIC8vIGJ1dHRvbi5cbiAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3MuY2xhc3NOYW1lcy5NT0RBTF9DTE9TRV9CVE4pKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gSWYgdGhlIGFwcCBpcyByZWFkeSBidXQgaGFzIG5vdCB5ZXQgYmVlbiBzZW50IG9yXG4gICAgICAvLyBzaWduZWQsIGNsb3NlIHZpYSB0aGUgYXBwLiBPdGhlcndpc2UsIHdlIGZvcmNlXG4gICAgICAvLyBjbG9zZSB3aXRob3V0IG5vdGlmeWluZyB0aGUgYXBwLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgIC8vIHRoZSBjbG9zZSBidXR0b24gY2FuIHJlcHJlc2VudCBhIFwiY2FuY2VsXCIgb3IgYVxuICAgICAgLy8gXCJjbG9zZVwiIGRlcGRlbmRpbmcgb24gdGhlIHN0YXRlIG9mIHRoZSByZXF1ZXN0LFxuICAgICAgLy8gYnV0IEVtYmVkZGVkIGlzIG5vdCBhd2FyZSBvZiB0aGlzIHN0YXRlLiBUaGVyZWZvcmVcbiAgICAgIC8vIHdlIHNlbmQgdGhlIGNsb3NlIHJlcXVlc3QgZG93biB0byB0aGUgYXBwIHNvIHRoYXRcbiAgICAgIC8vIHRoZSBhcHAgY2FuIGRldGVybWluZSB0aGUgcHJvcGVyIGNsb3NlIHR5cGUuXG4gICAgICBpZiAodGhpcy5faXNSZWFkeSAmJiAhdGhpcy5faXNTZW50T3JTaWduZWQpIHtcbiAgICAgICAgdGhpcy5fc2VuZENhbmNlbFJlcXVlc3RNZXNzYWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBpbml0aWFsaXphdGlvbiB0aW1lb3V0IHRpbWVyIGNvbXBsZXRlcy5cbiAgICogU2VuZHMgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgYXBwIGFuZCBjbG9zZXMgSGVsbG9TaWduXG4gICAqIEVtYmVkZGVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uSW5pdFRpbWVvdXQoKSB7XG4gICAgZGVidWcuZXJyb3IoJ2FwcCBmYWlsZWQgdG8gaW5pdGlhbGl6ZSBiZWZvcmUgdGltZW91dCcpO1xuXG4gICAgLy8gRGlzcGxheSBlcnJvciB0byB0aGUgdXNlciBpbnN0ZWFkIG9mIGp1c3QgY2xvc2luZyB0aGVcbiAgICAvLyBzaWduYXR1cmUgcmVxdWVzdCB3aW5kb3cuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoZW4gcHJlcGFyaW5nIHlvdXIgc2lnbmF0dXJlIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG5cbiAgICB0aGlzLl9zZW5kSW5pdGlhbGl6YXRpb25FcnJvck1lc3NhZ2UoKTtcbiAgICB0aGlzLl9jbGVhckluaXRUaW1lb3V0KCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF3YXkgZnJvbSB0aGUgcGFnZSBpblxuICAgKiBzb21lIHdheS4gQWx0aG91Z2ggbW9kZXJuIGJyb3dzZXJzIHdpbGwgbGlrZWx5IGJsb2NrXG4gICAqIHRoaXMgbWVzc2FnZSwgdGhlIGJyb3dzZXIgbWF5IHN0aWxsIG5hdGl2ZWx5IGNvbmZpcm1cbiAgICogd2l0aCB0aGUgdXNlciBpZiB0aGV5IHdhbnQgdG8gbGVhdmUgb3Igc3RheSBvbiB0aGVcbiAgICogcGFnZS5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvYmVmb3JldW5sb2FkXG4gICAqIEBwYXJhbSB7QmVmb3JlVW5sb2FkRXZlbnR9IGV2dFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQmVmb3JlVW5sb2FkKGV2dCkge1xuICAgIGlmICh0aGlzLl9pc1JlYWR5KSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzLCBuby1hbGVydCAqL1xuICAgICAgaWYgKCFjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhpcyBzaWduYXR1cmUgcmVxdWVzdD8gWW91IHdpbGwgbG9zZSB5b3VyIGNoYW5nZXMuJykpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQ2hyb21lIHJlcXVpcmVzIHJldHVyblZhbHVlIHRvIGJlIHNldC5cbiAgICAgICAgZXZ0LnJldHVyblZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBieSB0aGUgd2luZG93LlxuICAgKiBWYWxpZGF0ZXMgdGhlIG1lc3NhZ2Ugb3JpZ2luIGFuZCBkZWxlZ2F0ZXMgdG8gdGhlXG4gICAqIGFwcHJvcHJpYXRlIG1ldGhvZCBiYXNlZCBvbiB0aGUgbWVzc2FnZSB0eXBlLlxuICAgKlxuICAgKiBAcGFyYW0ge01lc3NhZ2VFdmVudH0gZXZ0XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBzdHJpcHBlZE9yaWdpbiA9IG1lc3NhZ2Uub3JpZ2luLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgICBpZiAoc3RyaXBwZWRPcmlnaW4gPT09IHRoaXMuX2lGcmFtZVVSTC5vcmlnaW4pIHtcbiAgICAgIGlmICh0eXBlb2YgbWVzc2FnZS5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLl9hcHBEaWRTZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGJ5IHRoZSB3aW5kb3cuXG4gICAqIFZhbGlkYXRlcyB0aGUgbWVzc2FnZSBvcmlnaW4gYW5kIGRlbGVnYXRlcyB0byB0aGVcbiAgICogYXBwcm9wcmlhdGUgbWV0aG9kIGJhc2VkIG9uIHRoZSBtZXNzYWdlIHR5cGUuXG4gICAqXG4gICAqIEBwYXJhbSB7SGVsbG9TaWduTWVzc2FnZX0gbXNnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZGVsZWdhdGVNZXNzYWdlKHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9FUlJPUjpcbiAgICAgICAgdGhpcy5fYXBwRGlkRXJyb3IocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5BUFBfSU5JVElBTElaRTpcbiAgICAgICAgdGhpcy5fYXBwRGlkSW5pdGlhbGl6ZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLkFQUF9WRVJJRllfRE9NQUlOX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX2FwcERpZFJlcXVlc3REb21haW5WZXJpZmljYXRpb24ocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX0NBTkNFTF9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkQ2FuY2VsUmVxdWVzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9DUkVBVEVfVEVNUExBVEU6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRDcmVhdGVUZW1wbGF0ZShwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfREVDTElORV9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkRGVjbGluZVJlcXVlc3QocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzZXR0aW5ncy5tZXNzYWdlcy5VU0VSX0ZJTklTSF9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkRmluaXNoUmVxdWVzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9SRUFTU0lHTl9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkUmVhc3NpZ25SZXF1ZXN0KHBheWxvYWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc2V0dGluZ3MubWVzc2FnZXMuVVNFUl9TRU5EX1JFUVVFU1Q6XG4gICAgICAgIHRoaXMuX3VzZXJEaWRTZW5kUmVxdWVzdChwYXlsb2FkKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHNldHRpbmdzLm1lc3NhZ2VzLlVTRVJfU0lHTl9SRVFVRVNUOlxuICAgICAgICB0aGlzLl91c2VyRGlkU2lnblJlcXVlc3QocGF5bG9hZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVW5oYW5kbGVkIG1lc3NhZ2UuXG4gICAgICAgIGRlYnVnLndhcm4oJ3VuaGFuZGxlZCBjcm9zcy1vcmlnaW4gd2luZG93IG1lc3NhZ2UnLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGV2ZW50IEhlbGxvU2lnbiNvcGVuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB1cmxcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlGcmFtZVVybFxuICAgKi9cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSGVsbG9TaWduT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFthbGxvd0NhbmNlbD10cnVlXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2NsaWVudElkXVxuICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBbY29udGFpbmVyXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtkZWJ1Zz1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbaGlkZUhlYWRlcj1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtsb2NhbGU9XCJlbl9VU1wiXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3JlZGlyZWN0VG9dXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcmVxdWVzdGluZ0VtYWlsXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtza2lwRG9tYWluVmVyaWZpY2F0aW9uPWZhbHNlXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0ZXN0TW9kZT1mYWxzZV1cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0PTMwMDAwXVxuICAgKiBAcHJvcGVydHkge09iamVjdH0gW3doaXRlTGFiZWxpbmddXG4gICAqL1xuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdXJsIGluIEhlbGxvU2lnbiBFbWJlZGRlZC5cbiAgICpcbiAgICogQGVtaXRzIEhlbGxvU2lnbiNvcGVuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtIZWxsb1NpZ25PcHRpb25zfSBbb3B0cz17fV1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgb3Blbih1cmwsIG9wdHMgPSB7fSkge1xuICAgIGRlYnVnLmluZm8oJ29wZW4oKScsIHVybCwgb3B0cyk7XG5cbiAgICAvLyBDbG9zZSBpZiBlbWJlZGRlZCBpcyBhbHJlYWR5IG9wZW4uXG4gICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIC4uLmRlZmF1bHRzLFxuICAgICAgLi4udGhpcy5fYmFzZUNvbmZpZyxcbiAgICAgIC4uLm9wdHMsXG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIGNvbnRhaW5lciBpcyB2YWxpZC5cbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRhaW5lcikge1xuICAgICAgaWYgKCEodGhpcy5fY29uZmlnLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNvbnRhaW5lclwiIG11c3QgYmUgYW4gZWxlbWVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUZyYW1lVXJsKHVybCk7XG4gICAgdGhpcy5fYXBwZW5kTWFya3VwKCk7XG4gICAgdGhpcy5fbWF5YmVTdGFydEluaXRUaW1lb3V0KCk7XG5cbiAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbk1lc3NhZ2UpO1xuXG4gICAgdGhpcy5lbWl0KHNldHRpbmdzLmV2ZW50cy5PUEVOLCB7XG4gICAgICB1cmw6IHRoaXMuX2lGcmFtZVVSTC5ocmVmLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCBIZWxsb1NpZ24jY2xvc2VcbiAgICovXG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSGVsbG9TaWduIEVtYmVkZWQgd2luZG93LlxuICAgKlxuICAgKiBAZW1pdHMgSGVsbG9TaWduI2Nsb3NlXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGRlYnVnLmluZm8oJ2Nsb3NlKCknKTtcblxuICAgIC8vIEl0J3MgYWxyZWFkeSBjbG9zZWQhXG4gICAgaWYgKCF0aGlzLl9pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckluaXRUaW1lb3V0KCk7XG4gICAgdGhpcy5fY2xlYXJNYXJrdXAoKTtcblxuICAgIHRoaXMuX2Jhc2VFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uRW1iZWRkZWRDbGljayk7XG5cbiAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgIHRoaXMuX2Jhc2VFbCA9IG51bGw7XG4gICAgdGhpcy5faUZyYW1lRWwgPSBudWxsO1xuICAgIHRoaXMuX2lGcmFtZVVSTCA9IG51bGw7XG4gICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzU2VudE9yU2lnbmVkID0gZmFsc2U7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTWVzc2FnZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHRoaXMuX29uQmVmb3JlVW5sb2FkKTtcblxuICAgIHRoaXMuZW1pdChzZXR0aW5ncy5ldmVudHMuQ0xPU0UpO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aW55LWVtaXR0ZXIncyBcImVtaXRcIiBtZXRob2QuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvdGlueS1lbWl0dGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7YW55fSBbZGF0YV1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBlbWl0KC4uLmFyZ3MpIHtcbiAgICBkZWJ1Zy5pbmZvKCdlbWl0KCknLCAuLi5hcmdzKTtcblxuICAgIHN1cGVyLmVtaXQoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgez9IVE1MRWxlbWVudH1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7P0hUTUxFbGVtZW50fVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgaUZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9pRnJhbWVFbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFkeTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxsb1NpZ247XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9lbWJlZGRlZC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2VtYmVkZGVkLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2VtYmVkZGVkLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcbiAqIEhlbGxvU2lnbiBFbWJlZGRlZCBjbGFzcyBuYW1lcy5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IGNsYXNzTmFtZXMgPSB7XG4gIEJBU0U6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZCcsXG4gIEJBU0VfSU5fTU9EQUw6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZC0taW4tbW9kYWwnLFxuICBJRlJBTUU6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZF9faWZyYW1lJyxcbiAgTU9EQUxfQ0xPU0U6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UnLFxuICBNT0RBTF9DTE9TRV9CVE46ICd4LWhlbGxvc2lnbi1lbWJlZGRlZF9fbW9kYWwtY2xvc2UtYnV0dG9uJyxcbiAgTU9EQUxfQ09OVEVOVDogJ3gtaGVsbG9zaWduLWVtYmVkZGVkX19tb2RhbC1jb250ZW50JyxcbiAgTU9EQUxfU0NSRUVOOiAneC1oZWxsb3NpZ24tZW1iZWRkZWRfX21vZGFsLXNjcmVlbicsXG59O1xuXG4vKipcbiAqIEhlbGxvU2lnbiBFbWJlZGRlZCBldmVudHMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBldmVudHMgPSB7XG4gIEVSUk9SOiAnZXJyb3InLFxuICBTRU5EOiAnc2VuZCcsXG4gIENBTkNFTDogJ2NhbmNlbCcsXG4gIENMT1NFOiAnY2xvc2UnLFxuICBDUkVBVEVfVEVNUExBVEU6ICdjcmVhdGVUZW1wbGF0ZScsXG4gIERFQ0xJTkU6ICdkZWNsaW5lJyxcbiAgRklOSVNIOiAnZmluaXNoJyxcbiAgTUVTU0FHRTogJ21lc3NhZ2UnLFxuICBPUEVOOiAnb3BlbicsXG4gIFJFQURZOiAncmVhZHknLFxuICBSRUFTU0lHTjogJ3JlYXNzaWduJyxcbiAgU0lHTjogJ3NpZ24nLFxufTtcblxuLyoqXG4gKiBIZWxsb1NpZ24gRW1iZWRkZWQgaUZyYW1lIHByb3BlcnRpZXMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBpZnJhbWUgPSB7XG4gIE5BTUU6ICd4LWhlbGxvc2lnbi1lbWJlZGRlZCcsXG59O1xuXG4vKipcbiAqIEhlbGxvU2lnbiBFbWJlZGRlZCBzdXBwb3J0ZWQgbG9jYWxlcy5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKi9cbmNvbnN0IGxvY2FsZXMgPSB7XG4gIENTX0NaOiAnY3MtQ1onLCAvLyBDemVjaCAoQ3plY2ggUmVwdWJsaWMpXG4gIERBX0RLOiAnZGEtREsnLCAvLyBEYW5pc2ggKERlbm1hcmspXG4gIERFX0RFOiAnZGUtREUnLCAvLyBHZXJtYW4gKEdlcm1hbnkpXG4gIEVOX0dCOiAnZW4tR0InLCAvLyBFbmdsaXNoIChHcmVhdCBCcml0YWluKVxuICBFTl9VUzogJ2VuLVVTJywgLy8gRW5nbGlzaCAoVW5pdGVkIFN0YXRlcylcbiAgRVNfTEE6ICdlcy1MQScsIC8vIFNwYW5pc2ggKExhdGluIEFtZXJpY2EpXG4gIEVTX0VTOiAnZXMtRVMnLCAvLyBTcGFuaXNoIChTcGFpbilcbiAgRVNfTVg6ICdlcy1NWCcsIC8vIFNwYW5pc2ggKE1leGljbylcbiAgRlJfRlI6ICdmci1GUicsIC8vIEZyZW5jaCAoRnJhbmNlKVxuICBJRF9JRDogJ2lkLUlEJywgLy8gSW5kb25lc2lhbiAoSW5kb25lc2lhKVxuICBJVF9JVDogJ2l0LUlUJywgLy8gSXRhbGlhbiAoSXRhbHkpXG4gIEpBX0pQOiAnamEtSlAnLCAvLyBKYXBhbmVzZSAoSmFwYW4pXG4gIEtPX0tSOiAna28tS1InLCAvLyBLb3JlYW4gKEtvcmVhKVxuICBNU19NWTogJ21zLU1ZJywgLy8gTWFsYXlzaWFuIChNYWxheXNpYSlcbiAgTkJfTk86ICduYi1OTycsIC8vIE5vcndlZ2lhbiAoTm9yd2F5KVxuICBOTF9OTDogJ25sLU5MJywgLy8gRHV0Y2ggKE5ldGhlcmxhbmRzKVxuICBQTF9QTDogJ3BsLVBMJywgLy8gUG9saXNoIChQb2xhbmQpXG4gIFBUX0JSOiAncHQtQlInLCAvLyBQb3J0dWd1ZXNlIChCcmF6aWwpXG4gIFJVX1JVOiAncnUtUlUnLCAvLyBSdXNzaWFuIChSdXNzaWEpXG4gIFNWX1NFOiAnc3YtU0UnLCAvLyBTd2VkaXNoIChTd2VkZW4pXG4gIFRIX1RIOiAndGgtVEgnLCAvLyBUaGFpIChUaGFpbGFuZClcbiAgVUtfVUE6ICd1ay1VQScsIC8vIFVrcmFpbmlhbiAoVWtyYWluZSlcbiAgWkhfQ046ICd6aC1DTicsIC8vIENoaW5lc2UgKFNpbXBsaWZpZWQpIChDaGluYSlcbiAgWkhfVFc6ICd6aC1UVycsIC8vIENoaW5lc2UgKFRhaXdhbilcbn07XG5cbi8qKlxuICogSGVsbG9TaWduIEVtYmVkZGVkIGNyb3NzLW9yaWdpbiB3aW5kb3cgbWVzc2FnZXMuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqIEByZWFkb25seVxuICovXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgQVBQX0NPTkZJR1VSRTogJ2hlbGxvc2lnbjpjb25maWd1cmUnLFxuICBBUFBfRVJST1I6ICdoZWxsb3NpZ246ZXJyb3InLFxuICBBUFBfSU5JVElBTElaRTogJ2hlbGxvc2lnbjppbml0aWFsaXplJyxcbiAgQVBQX1ZFUklGWV9ET01BSU5fUkVRVUVTVDogJ2hlbGxvc2lnbjp2ZXJpZnlEb21haW5SZXF1ZXN0JyxcbiAgQVBQX1ZFUklGWV9ET01BSU5fUkVTUE9OU0U6ICdoZWxsb3NpZ246dmVyaWZ5RG9tYWluUmVzcG9uc2UnLFxuICBVU0VSX0NBTkNFTF9SRVFVRVNUOiAnaGVsbG9zaWduOnVzZXJDYW5jZWxSZXF1ZXN0JyxcbiAgVVNFUl9DUkVBVEVfVEVNUExBVEU6ICdoZWxsb3NpZ246dXNlckNyZWF0ZVRlbXBsYXRlJyxcbiAgVVNFUl9ERUNMSU5FX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlckRlY2xpbmVSZXF1ZXN0JyxcbiAgVVNFUl9GSU5JU0hfUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyRmluaXNoUmVxdWVzdCcsXG4gIFVTRVJfUkVBU1NJR05fUkVRVUVTVDogJ2hlbGxvc2lnbjp1c2VyUmVhc3NpZ25SZXF1ZXN0JyxcbiAgVVNFUl9TRU5EX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlclNlbmRSZXF1ZXN0JyxcbiAgVVNFUl9TSUdOX1JFUVVFU1Q6ICdoZWxsb3NpZ246dXNlclNpZ25SZXF1ZXN0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2xhc3NOYW1lcyxcbiAgZXZlbnRzLFxuICBpZnJhbWUsXG4gIGxvY2FsZXMsXG4gIG1lc3NhZ2VzLFxufTtcbiIsIi8qKlxuICogVG8gZW5hYmxlIGRlYnVnIG1lc3NhZ2VzLCBlbnRlciB0aGUgZm9sbG93aW5nIGludG8geW91clxuICogZGV2ZWxvcGVyIHRvb2xzIGNvbnNvbGU6XG4gKlxuICogICBsb2NhbFN0b3JhZ2UuZGVidWcgPSAnaGVsbG9zaWduLWVtYmVkZGVkOionO1xuICpcbiAqIFRoaXMgd2lsbCBzdXJmYWNlIGFsbCBkZWJ1ZyBtZXNzYWdlcyB1bmRlciB0aGVcbiAqIFwiaGVsbG9zaWduOlwiIG5hbWVzcGFjZS5cbiAqL1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuXG5jb25zdCBpbmZvID0gZGVidWcoYCR7X19QS0dfTkFNRV9ffTppbmZvYCk7XG5jb25zdCB3YXJuID0gZGVidWcoYCR7X19QS0dfTkFNRV9ffTp3YXJuYCk7XG5jb25zdCBlcnJvciA9IGRlYnVnKGAke19fUEtHX05BTUVfX306ZXJyb3JgKTtcblxuaW5mby5sb2cgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbndhcm4ubG9nID0gY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluZm8sXG4gIHdhcm4sXG4gIGVycm9yLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=