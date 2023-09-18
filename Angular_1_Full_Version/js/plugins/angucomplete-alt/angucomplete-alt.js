/*! Copyright (c) 2014 Hidenari Nozaki and contributors | Licensed under the MIT license */ ! function(a, b) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = b(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], b) : b(a.angular)
}(window, function(a) {
    "use strict";
    a.module("angucomplete-alt", []).directive("angucompleteAlt", ["$q", "$parse", "$http", "$sce", "$timeout", "$templateCache", "$interpolate", function(a, b, c, d, e, f, g) {
        function h(b, f, g, h) {
            function w(a, c) {
                a && ("object" == typeof a ? (b.searchStr = C(a), z({
                    originalObject: a
                })) : "string" == typeof a && a.length > 0 ? b.searchStr = a : console && console.error && console.error("Tried to set " + (c ? "initial" : "") + " value of angucomplete to", a, "which is an invalid value"), F(!0))
            }

            function x(a) {
                na = null, b.hideResults(a), document.body.removeEventListener("click", x)
            }

            function y(a) {
                return a.which ? a.which : a.keyCode
            }

            function z(a) {
                "function" == typeof b.selectedObject ? b.selectedObject(a, b.selectedObjectData) : b.selectedObject = a, F(a ? !0 : !1)
            }

            function A(a) {
                return function(c) {
                    return b[a] ? b[a](c) : c
                }
            }

            function B(a) {
                z({
                    originalObject: a
                }), b.clearSelected && (b.searchStr = null), U()
            }

            function C(a) {
                return b.titleField.split(",").map(function(b) {
                    return D(a, b)
                }).join(" ")
            }

            function D(a, b) {
                var c, d;
                if (b) {
                    c = b.split("."), d = a;
                    for (var e = 0; e < c.length; e++) d = d[c[e]]
                } else d = a;
                return d
            }

            function E(a, c) {
                var e, f, g;
                if (g = new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), a) return a.match && a.replace || (a = a.toString()), f = a.match(g), e = f ? a.replace(g, '<span class="' + b.matchClass + '">' + f[0] + "</span>") : a, d.trustAsHtml(e)
            }

            function F(a) {
                b.notEmpty = a, ia = b.searchStr, b.fieldRequired && h && b.inputName && h[b.inputName].$setValidity(ha, a)
            }

            function G(a) {
                var c = y(a);
                if (c !== l && c !== j)
                    if (c === k || c === n) a.preventDefault();
                    else if (c === i) a.preventDefault(), !b.showDropdown && b.searchStr && b.searchStr.length >= fa && (V(), b.searching = !0, Y(b.searchStr));
                else if (c === m) U(), b.$apply(function() {
                    ea.val(b.searchStr)
                });
                else {
                    if (0 === fa && !b.searchStr) return;
                    b.searchStr && "" !== b.searchStr ? b.searchStr.length >= fa && (V(), ga && e.cancel(ga), b.searching = !0, ga = e(function() {
                        Y(b.searchStr)
                    }, b.pause)) : b.showDropdown = !1, ia && ia !== b.searchStr && !b.clearSelected && b.$apply(function() {
                        z()
                    })
                }
            }

            function H(a) {
                !b.overrideSuggestions || b.selectedObject && b.selectedObject.originalObject === b.searchStr || (a && a.preventDefault(), e.cancel(ga), R(), B(b.searchStr))
            }

            function I(a) {
                var b = getComputedStyle(a);
                return a.offsetHeight + parseInt(b.marginTop, 10) + parseInt(b.marginBottom, 10)
            }

            function J() {
                return la.getBoundingClientRect().top + parseInt(getComputedStyle(la).maxHeight, 10)
            }

            function K() {
                return f[0].querySelectorAll(".angucomplete-row")[b.currentIndex]
            }

            function L() {
                return K().getBoundingClientRect().top - (la.getBoundingClientRect().top + parseInt(getComputedStyle(la).paddingTop, 10))
            }

            function M(a) {
                la.scrollTop = la.scrollTop + a
            }

            function N() {
                var a = b.results[b.currentIndex];
                b.matchClass ? ea.val(C(a.originalObject)) : ea.val(a.title)
            }

            function O(a) {
                var c = y(a),
                    d = null,
                    e = null;
                c === n && b.results ? (b.currentIndex >= 0 && b.currentIndex < b.results.length ? (a.preventDefault(), b.selectResult(b.results[b.currentIndex])) : (H(a), U()), b.$apply()) : c === i && b.results ? (a.preventDefault(), b.currentIndex + 1 < b.results.length && b.showDropdown && (b.$apply(function() {
                    b.currentIndex++, N()
                }), ma && (d = K(), J() < d.getBoundingClientRect().bottom && M(I(d))))) : c === k && b.results ? (a.preventDefault(), b.currentIndex >= 1 ? (b.$apply(function() {
                    b.currentIndex--, N()
                }), ma && (e = L(), e < 0 && M(e - 1))) : 0 === b.currentIndex && b.$apply(function() {
                    b.currentIndex = -1, ea.val(b.searchStr)
                })) : c === o ? b.results && b.results.length > 0 && b.showDropdown ? b.currentIndex === -1 && b.overrideSuggestions ? H() : (b.currentIndex === -1 && (b.currentIndex = 0), b.selectResult(b.results[b.currentIndex]), b.$digest()) : b.searchStr && b.searchStr.length > 0 && H() : c === m && a.preventDefault()
            }

            function P(a) {
                return function(c, d, e, f) {
                    d || e || f || !c.data || (c = c.data), b.searching = !1, Z(D(aa(c), b.remoteUrlDataField), a)
                }
            }

            function Q(a, c, d, e) {
                b.searching = ka, c || d || e || (c = a.status), 0 !== c && c !== -1 && (b.remoteUrlErrorCallback ? b.remoteUrlErrorCallback(a, c, d, e) : console && console.error && console.error("http error"))
            }

            function R() {
                ja && ja.resolve()
            }

            function S(d) {
                var e = {},
                    f = b.remoteUrl + encodeURIComponent(d);
                b.remoteUrlRequestFormatter && (e = {
                    params: b.remoteUrlRequestFormatter(d)
                }, f = b.remoteUrl), b.remoteUrlRequestWithCredentials && (e.withCredentials = !0), R(), ja = a.defer(), e.timeout = ja.promise, ka = !0, c.get(f, e).then(P(d)).catch(Q).finally(function() {
                    ka = !1
                })
            }

            function T(c) {
                R(), ja = a.defer(), b.remoteApiHandler(c, ja.promise).then(P(c)).catch(Q)
            }

            function U() {
                b.showDropdown = !1, b.results = [], la && (la.scrollTop = 0)
            }

            function V() {
                b.showDropdown = ca, b.currentIndex = b.focusFirst ? 0 : -1, b.results = []
            }

            function W(a) {
                var c, d, e, f, g = b.searchFields.split(","),
                    h = [];
                for ("undefined" != typeof b.parseInput() && (a = b.parseInput()(a)), c = 0; c < b.localData.length; c++) {
                    for (d = !1, e = 0; e < g.length; e++) f = D(b.localData[c], g[e]) || "", d = d || f.toString().toLowerCase().indexOf(a.toString().toLowerCase()) >= 0;
                    d && (h[h.length] = b.localData[c])
                }
                return h
            }

            function X(a, c, d) {
                if (!d) return !1;
                for (var e in c)
                    if (c[e].toLowerCase() === d.toLowerCase()) return b.selectResult(a), !0;
                return !1
            }

            function Y(a) {
                !a || a.length < fa || (b.localData ? b.$apply(function() {
                    var c;
                    c = "undefined" != typeof b.localSearch() ? b.localSearch()(a, b.localData) : W(a), b.searching = !1, Z(c, a)
                }) : b.remoteApiHandler ? T(a) : S(a))
            }

            function Z(a, c) {
                var d, e, f, g, h, i, z;
                if (a && a.length > 0)
                    for (b.results = [], d = 0; d < a.length; d++) b.titleField && "" !== b.titleField && (g = h = C(a[d])), e = "", b.descriptionField && (e = i = D(a[d], b.descriptionField)), f = "", b.imageField && (f = D(a[d], b.imageField)), b.matchClass && (h = E(g, c), i = E(e, c)), b.results[b.results.length] = {
                        title: h,
                        description: i,
                        image: f,
                        originalObject: a[d]
                    };
                else b.results = [];
                b.autoMatch && 1 === b.results.length && X(b.results[0], {
                    title: g,
                    desc: e || ""
                }, b.searchStr) ? b.showDropdown = !1 : 0 !== b.results.length || da ? b.showDropdown = !0 : b.showDropdown = !1
            }

            function $() {
                b.localData ? (b.searching = !1, Z(b.localData, "")) : b.remoteApiHandler ? (b.searching = !0, T("")) : (b.searching = !0, S(""))
            }
            var _, aa, ba, ca, da, ea = f.find("input"),
                fa = p,
                ga = null,
                ha = t,
                ia = null,
                ja = null,
                ka = !1,
                la = f[0].querySelector(".angucomplete-dropdown"),
                ma = !1,
                na = null;
            f.on("mousedown", function(a) {
                a.target.id ? (na = a.target.id, na === b.id + "_dropdown" && document.body.addEventListener("click", x)) : na = a.target.className
            }), b.currentIndex = b.focusFirst ? 0 : null, b.searching = !1, ba = b.$watch("initialValue", function(a) {
                a && (ba(), w(a, !0))
            }), b.$watch("fieldRequired", function(a, c) {
                a !== c && (a ? F(ia && b.currentIndex !== -1 ? !0 : !1) : h[b.inputName].$setValidity(ha, !0))
            }), b.$on("angucomplete-alt:clearInput", function(a, c) {
                c && c !== b.id || (b.searchStr = null, z(), F(!1), U())
            }), b.$on("angucomplete-alt:changeInput", function(a, c, d) {
                c && c === b.id && w(d)
            }), b.onFocusHandler = function() {
                b.focusIn && b.focusIn(), 0 !== fa || b.searchStr && 0 !== b.searchStr.length || (b.currentIndex = b.focusFirst ? 0 : b.currentIndex, b.showDropdown = !0, $())
            }, b.hideResults = function() {
                na && (na === b.id + "_dropdown" || na.indexOf("angucomplete") >= 0) ? na = null : (_ = e(function() {
                    U(), b.$apply(function() {
                        b.searchStr && b.searchStr.length > 0 && ea.val(b.searchStr)
                    })
                }, s), R(), b.focusOut && b.focusOut(), b.overrideSuggestions && b.searchStr && b.searchStr.length > 0 && b.currentIndex === -1 && H())
            }, b.resetHideResults = function() {
                _ && e.cancel(_)
            }, b.hoverRow = function(a) {
                b.currentIndex = a
            }, b.selectResult = function(a) {
                b.matchClass && (a.title = C(a.originalObject), a.description = D(a.originalObject, b.descriptionField)), b.clearSelected ? b.searchStr = null : b.searchStr = a.title, z(a), U()
            }, b.inputChangeHandler = function(a) {
                return a.length < fa ? (R(), U()) : 0 === a.length && 0 === fa && $(), b.inputChanged && (a = b.inputChanged(a)), a
            }, b.fieldRequiredClass && "" !== b.fieldRequiredClass && (ha = b.fieldRequiredClass), b.minlength && "" !== b.minlength && (fa = parseInt(b.minlength, 10)), b.pause || (b.pause = r), b.clearSelected || (b.clearSelected = !1), b.overrideSuggestions || (b.overrideSuggestions = !1), b.fieldRequired && h && F(b.initialValue ? !0 : !1), b.inputType = g.type ? g.type : "text", b.textSearching = g.textSearching ? g.textSearching : u, b.textNoResults = g.textNoResults ? g.textNoResults : v, ca = "false" !== b.textSearching, da = "false" !== b.textNoResults, b.maxlength = g.maxlength ? g.maxlength : q, ea.on("keydown", O), ea.on("keyup compositionend", G), aa = A("remoteUrlResponseFormatter"), e(function() {
                var a = getComputedStyle(la);
                ma = a.maxHeight && "auto" === a.overflowY
            })
        }
        var i = 40,
            j = 39,
            k = 38,
            l = 37,
            m = 27,
            n = 13,
            o = 9,
            p = 3,
            q = 524288,
            r = 500,
            s = 200,
            t = "autocomplete-required",
            u = "Searching...",
            v = "No results found",
            w = "/angucomplete-alt/index.html";
        return f.put(w, '<div class="angucomplete-holder" ng-class="{\'angucomplete-dropdown-visible\': showDropdown}">  <input id="{{id}}_value" name="{{inputName}}" tabindex="{{fieldTabindex}}" ng-class="{\'angucomplete-input-not-empty\': notEmpty}" ng-model="searchStr" ng-disabled="disableInput" type="{{inputType}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" ng-focus="onFocusHandler()" class="{{inputClass}}" ng-focus="resetHideResults()" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off" ng-change="inputChangeHandler(searchStr)"/>  <div id="{{id}}_dropdown" class="angucomplete-dropdown" ng-show="showDropdown">    <div class="angucomplete-searching" ng-show="searching" ng-bind="textSearching"></div>    <div class="angucomplete-searching" ng-show="!searching && (!results || results.length == 0)" ng-bind="textNoResults"></div>    <div class="angucomplete-row" ng-repeat="result in results" ng-click="selectResult(result)" ng-mouseenter="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}">      <div ng-if="imageField" class="angucomplete-image-holder">  <span ng-show="!result.image" class="user-icon-staff bg-primary text-uppercase" >{{result.originalObject.initials}}</span>       <img ng-if="result.image && result.image != \'\'" ng-src="https://res.cloudinary.com/camplegal/image/upload/v1539828991/{{result.image}}" class="angucomplete-image"/><div ng-if="!result.image && result.image != \'\'" class="angucomplete-image-default"></div>      </div>      <div class="angucomplete-title" ng-if="matchClass" ng-bind-html="result.title"></div>      <div class="angucomplete-title" ng-if="!matchClass">{{ result.title }}</div>      <div ng-if="matchClass && result.description && result.description != \'\'" class="angucomplete-description capitalize" ng-bind-html="result.description"></div>      <div ng-if="!matchClass && result.description && result.description != \'\'" class="angucomplete-description capitalize">{{result.description}}</div>    </div>  </div></div>'), {
            restrict: "EA",
            require: "^?form",
            scope: {
                selectedObject: "=",
                selectedObjectData: "=",
                disableInput: "=",
                initialValue: "=",
                localData: "=",
                localSearch: "&",
                remoteUrlRequestFormatter: "=",
                remoteUrlRequestWithCredentials: "@",
                remoteUrlResponseFormatter: "=",
                remoteUrlErrorCallback: "=",
                remoteApiHandler: "=",
                id: "@",
                type: "@",
                placeholder: "@",
                textSearching: "@",
                textNoResults: "@",
                remoteUrl: "@",
                remoteUrlDataField: "@",
                titleField: "@",
                descriptionField: "@",
                imageField: "@",
                inputClass: "@",
                pause: "@",
                searchFields: "@",
                minlength: "@",
                matchClass: "@",
                clearSelected: "@",
                overrideSuggestions: "@",
                fieldRequired: "=",
                fieldRequiredClass: "@",
                inputChanged: "=",
                autoMatch: "@",
                focusOut: "&",
                focusIn: "&",
                fieldTabindex: "@",
                inputName: "@",
                focusFirst: "@",
                parseInput: "&"
            },
            templateUrl: function(a, b) {
                return b.templateUrl || w
            },
            compile: function(a) {
                var b = g.startSymbol(),
                    c = g.endSymbol();
                if ("{{" !== b || "}}" !== c) {
                    var d = a.html().replace(/\{\{/g, b).replace(/\}\}/g, c);
                    a.html(d)
                }
                return h
            }
        }
    }])
});