/* ng-infinite-scroll - v1.2.0 - 2015-12-02 */
var mod;
mod = angular.module("infinite-scroll", []), mod.value("THROTTLE_MILLISECONDS", null), mod.directive("infiniteScroll", ["$rootScope", "$window", "$interval", "THROTTLE_MILLISECONDS", function(a, b, c, d) {
    return {
        scope: {
            infiniteScroll: "&",
            infiniteScrollContainer: "=",
            infiniteScrollDistance: "=",
            infiniteScrollDisabled: "=",
            infiniteScrollUseDocumentBottom: "=",
            infiniteScrollListenForEvent: "@"
        },
        link: function(e, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
            return z = angular.element(b), u = null, v = null, j = null, k = null, r = !0, y = !1, x = null, i = !1, q = function(a) {
                return a = a[0] || a, isNaN(a.offsetHeight) ? a.document.documentElement.clientHeight : a.offsetHeight
            }, s = function(a) {
                return a[0].getBoundingClientRect && !a.css("none") ? a[0].getBoundingClientRect().top + t(a) : void 0
            }, t = function(a) {
                return a = a[0] || a, isNaN(window.pageYOffset) ? a.document.documentElement.scrollTop : a.ownerDocument.defaultView.pageYOffset
            }, p = function() {
                var b, d, g, h, l;
                return k === z ? (b = q(k) + t(k[0].document.documentElement), g = s(f) + q(f)) : (b = q(k), d = 0, void 0 !== s(k) && (d = s(k)), g = s(f) - d + q(f)), y && (g = q((f[0].ownerDocument || f[0].document).documentElement)), h = g - b, l = h <= q(k) * u + 1, l ? (j = !0, v ? e.$$phase || a.$$phase ? e.infiniteScroll() : e.$apply(e.infiniteScroll) : void 0) : (i && c.cancel(i), j = !1)
            }, w = function(a, b) {
                var d, e, f;
                return f = null, e = 0, d = function() {
                        var b;
                        return e = (new Date).getTime(), c.cancel(f), f = null, a.call(), b = null
                    },
                    function() {
                        var g, h;
                        return g = (new Date).getTime(), h = b - (g - e), 0 >= h ? (clearTimeout(f), c.cancel(f), f = null, e = g, a.call()) : f ? void 0 : f = c(d, h, 1)
                    }
            }, null != d && (p = w(p, d)), e.$on("$destroy", function() {
                return k.unbind("scroll", p), null != x ? (x(), x = null) : void 0
            }), n = function(a) {
                return u = parseFloat(a) || 0
            }, e.$watch("infiniteScrollDistance", n), n(e.infiniteScrollDistance), m = function(a) {
                return v = !a, v && j ? (j = !1, p()) : void 0
            }, e.$watch("infiniteScrollDisabled", m), m(e.infiniteScrollDisabled), o = function(a) {
                return y = a
            }, e.$watch("infiniteScrollUseDocumentBottom", o), o(e.infiniteScrollUseDocumentBottom), h = function(a) {
                return null != k && k.unbind("scroll", p), k = a, null != a ? k.bind("scroll", p) : void 0
            }, h(z), e.infiniteScrollListenForEvent && (x = a.$on(e.infiniteScrollListenForEvent, p)), l = function(a) {
                if (null != a && 0 !== a.length) {
                    if (a instanceof HTMLElement ? a = angular.element(a) : "function" == typeof a.append ? a = angular.element(a[a.length - 1]) : "string" == typeof a && (a = angular.element(document.querySelector(a))), null != a) return h(a);
                    throw new Exception("invalid infinite-scroll-container attribute.")
                }
            }, e.$watch("infiniteScrollContainer", l), l(e.infiniteScrollContainer || []), null != g.infiniteScrollParent && h(angular.element(f.parent())), null != g.infiniteScrollImmediateCheck && (r = e.$eval(g.infiniteScrollImmediateCheck)), i = c(function() {
                return r ? p() : void 0
            }, 0)
        }
    }
}]);