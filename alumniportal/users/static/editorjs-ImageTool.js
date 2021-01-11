/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageTool = e() : t.ImageTool = e()
}(window, (function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var o in t)
                    n.d(r, o, function(e) {
                        return t[e]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "/",
        n(n.s = 25)
    }([function(t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        t.exports = function(t, e, r) {
            return e && n(t.prototype, e),
            r && n(t, r),
            t
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(t, e, n) {
        window,
        t.exports = function(t) {
            var e = {};
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var o = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = t,
            n.c = e,
            n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(t, e) {
                if (1 & e && (t = n(t)),
                8 & e)
                    return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                    for (var o in t)
                        n.d(r, o, function(e) {
                            return t[e]
                        }
                        .bind(null, o));
                return r
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 3)
        }([function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }
        , function(t, e, n) {
            "use strict";
            (function(t) {
                var r = n(2)
                  , o = setTimeout;
                function i() {}
                function a(t) {
                    if (!(this instanceof a))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    d(t, this)
                }
                function u(t, e) {
                    for (; 3 === t._state; )
                        t = t._value;
                    0 !== t._state ? (t._handled = !0,
                    a._immediateFn((function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(t._value)
                            } catch (t) {
                                return void s(e.promise, t)
                            }
                            c(e.promise, r)
                        } else
                            (1 === t._state ? c : s)(e.promise, t._value)
                    }
                    ))) : t._deferreds.push(e)
                }
                function c(t, e) {
                    try {
                        if (e === t)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof a)
                                return t._state = 3,
                                t._value = e,
                                void l(t);
                            if ("function" == typeof n)
                                return void d((r = n,
                                o = e,
                                function() {
                                    r.apply(o, arguments)
                                }
                                ), t)
                        }
                        t._state = 1,
                        t._value = e,
                        l(t)
                    } catch (e) {
                        s(t, e)
                    }
                    var r, o
                }
                function s(t, e) {
                    t._state = 2,
                    t._value = e,
                    l(t)
                }
                function l(t) {
                    2 === t._state && 0 === t._deferreds.length && a._immediateFn((function() {
                        t._handled || a._unhandledRejectionFn(t._value)
                    }
                    ));
                    for (var e = 0, n = t._deferreds.length; e < n; e++)
                        u(t, t._deferreds[e]);
                    t._deferreds = null
                }
                function f(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = n
                }
                function d(t, e) {
                    var n = !1;
                    try {
                        t((function(t) {
                            n || (n = !0,
                            c(e, t))
                        }
                        ), (function(t) {
                            n || (n = !0,
                            s(e, t))
                        }
                        ))
                    } catch (t) {
                        if (n)
                            return;
                        n = !0,
                        s(e, t)
                    }
                }
                a.prototype.catch = function(t) {
                    return this.then(null, t)
                }
                ,
                a.prototype.then = function(t, e) {
                    var n = new this.constructor(i);
                    return u(this, new f(t,e,n)),
                    n
                }
                ,
                a.prototype.finally = r.a,
                a.all = function(t) {
                    return new a((function(e, n) {
                        if (!t || void 0 === t.length)
                            throw new TypeError("Promise.all accepts an array");
                        var r = Array.prototype.slice.call(t);
                        if (0 === r.length)
                            return e([]);
                        var o = r.length;
                        function i(t, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var u = a.then;
                                    if ("function" == typeof u)
                                        return void u.call(a, (function(e) {
                                            i(t, e)
                                        }
                                        ), n)
                                }
                                r[t] = a,
                                0 == --o && e(r)
                            } catch (t) {
                                n(t)
                            }
                        }
                        for (var a = 0; a < r.length; a++)
                            i(a, r[a])
                    }
                    ))
                }
                ,
                a.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === a ? t : new a((function(e) {
                        e(t)
                    }
                    ))
                }
                ,
                a.reject = function(t) {
                    return new a((function(e, n) {
                        n(t)
                    }
                    ))
                }
                ,
                a.race = function(t) {
                    return new a((function(e, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                            t[r].then(e, n)
                    }
                    ))
                }
                ,
                a._immediateFn = "function" == typeof t && function(e) {
                    t(e)
                }
                || function(t) {
                    o(t, 0)
                }
                ,
                a._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }
                ,
                e.a = a
            }
            ).call(this, n(5).setImmediate)
        }
        , function(t, e, n) {
            "use strict";
            e.a = function(t) {
                var e = this.constructor;
                return this.then((function(n) {
                    return e.resolve(t()).then((function() {
                        return n
                    }
                    ))
                }
                ), (function(n) {
                    return e.resolve(t()).then((function() {
                        return e.reject(n)
                    }
                    ))
                }
                ))
            }
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            n(4);
            var o, i, a, u, c, s, l, f = n(8), d = (i = function(t) {
                return new Promise((function(e, n) {
                    t = u(t),
                    (t = c(t)).beforeSend && t.beforeSend();
                    var r = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP");
                    r.open(t.method, t.url),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    Object.keys(t.headers).forEach((function(e) {
                        var n = t.headers[e];
                        r.setRequestHeader(e, n)
                    }
                    ));
                    var o = t.ratio;
                    r.upload.addEventListener("progress", (function(e) {
                        var n = Math.round(e.loaded / e.total * 100)
                          , r = Math.ceil(n * o / 100);
                        t.progress(Math.min(r, 100))
                    }
                    ), !1),
                    r.addEventListener("progress", (function(e) {
                        var n = Math.round(e.loaded / e.total * 100)
                          , r = Math.ceil(n * (100 - o) / 100) + o;
                        t.progress(Math.min(r, 100))
                    }
                    ), !1),
                    r.onreadystatechange = function() {
                        if (4 === r.readyState) {
                            var t = r.response;
                            try {
                                t = JSON.parse(t)
                            } catch (t) {}
                            var o = f.parseHeaders(r.getAllResponseHeaders())
                              , i = {
                                body: t,
                                code: r.status,
                                headers: o
                            };
                            l(r.status) ? e(i) : n(i)
                        }
                    }
                    ,
                    r.send(t.data)
                }
                ))
            }
            ,
            a = function(t) {
                return t.method = "POST",
                i(t)
            }
            ,
            u = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (t.url && "string" != typeof t.url)
                    throw new Error("Url must be a string");
                if (t.url = t.url || "",
                t.method && "string" != typeof t.method)
                    throw new Error("`method` must be a string or null");
                if (t.method = t.method ? t.method.toUpperCase() : "GET",
                t.headers && "object" !== r(t.headers))
                    throw new Error("`headers` must be an object or null");
                if (t.headers = t.headers || {},
                t.type && ("string" != typeof t.type || !Object.values(o).includes(t.type)))
                    throw new Error("`type` must be taken from module's «contentType» library");
                if (t.progress && "function" != typeof t.progress)
                    throw new Error("`progress` must be a function or null");
                if (t.progress = t.progress || function(t) {}
                ,
                t.beforeSend = t.beforeSend || function(t) {}
                ,
                t.ratio && "number" != typeof t.ratio)
                    throw new Error("`ratio` must be a number");
                if (t.ratio < 0 || t.ratio > 100)
                    throw new Error("`ratio` must be in a 0-100 interval");
                if (t.ratio = t.ratio || 90,
                t.accept && "string" != typeof t.accept)
                    throw new Error("`accept` must be a string with a list of allowed mime-types");
                if (t.accept = t.accept || "*/*",
                t.multiple && "boolean" != typeof t.multiple)
                    throw new Error("`multiple` must be a true or false");
                if (t.multiple = t.multiple || !1,
                t.fieldName && "string" != typeof t.fieldName)
                    throw new Error("`fieldName` must be a string");
                return t.fieldName = t.fieldName || "files",
                t
            }
            ,
            c = function(t) {
                switch (t.method) {
                case "GET":
                    var e = s(t.data, o.URLENCODED);
                    delete t.data,
                    t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
                    break;
                case "POST":
                case "PUT":
                case "DELETE":
                case "UPDATE":
                    var n = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON
                    }(t);
                    (f.isFormData(t.data) || f.isFormElement(t.data)) && (n = o.FORM),
                    t.data = s(t.data, n),
                    n !== d.contentType.FORM && (t.headers["content-type"] = n)
                }
                return t
            }
            ,
            s = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                switch (arguments.length > 1 ? arguments[1] : void 0) {
                case o.URLENCODED:
                    return f.urlEncode(t);
                case o.JSON:
                    return f.jsonEncode(t);
                case o.FORM:
                    return f.formEncode(t);
                default:
                    return t
                }
            }
            ,
            l = function(t) {
                return t >= 200 && t < 300
            }
            ,
            {
                contentType: o = {
                    URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
                    FORM: "multipart/form-data",
                    JSON: "application/json; charset=utf-8"
                },
                request: i,
                get: function(t) {
                    return t.method = "GET",
                    i(t)
                },
                post: a,
                transport: function(t) {
                    return t = u(t),
                    f.selectFiles(t).then((function(e) {
                        //modified here
                        let dummyFile=new Blob(['dummyFile'],{type : 'text/html'});
                        for (var n = new FormData, r = 0; r < e.length; r++)
                        //replace dummyFile with e[r] to revert
                            n.append(t.fieldName, dummyFile, e[r].name);
                        f.isObject(t.data) && Object.keys(t.data).forEach((function(e) {
                            var r = t.data[e];
                            n.append(e, r)
                        }
                        ));
                        var o = t.beforeSend;
                        return t.beforeSend = function() {
                            return o(e)
                        }
                        ,
                        t.data = n,
                        a(t)
                    }
                    ))
                },
                selectFiles: function(t) {
                    return delete (t = u(t)).beforeSend,
                    f.selectFiles(t)
                }
            });
            t.exports = d
        }
        , function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(1);
            window.Promise = window.Promise || r.a
        }
        , function(t, e, n) {
            (function(t) {
                var r = void 0 !== t && t || "undefined" != typeof self && self || window
                  , o = Function.prototype.apply;
                function i(t, e) {
                    this._id = t,
                    this._clearFn = e
                }
                e.setTimeout = function() {
                    return new i(o.call(setTimeout, r, arguments),clearTimeout)
                }
                ,
                e.setInterval = function() {
                    return new i(o.call(setInterval, r, arguments),clearInterval)
                }
                ,
                e.clearTimeout = e.clearInterval = function(t) {
                    t && t.close()
                }
                ,
                i.prototype.unref = i.prototype.ref = function() {}
                ,
                i.prototype.close = function() {
                    this._clearFn.call(r, this._id)
                }
                ,
                e.enroll = function(t, e) {
                    clearTimeout(t._idleTimeoutId),
                    t._idleTimeout = e
                }
                ,
                e.unenroll = function(t) {
                    clearTimeout(t._idleTimeoutId),
                    t._idleTimeout = -1
                }
                ,
                e._unrefActive = e.active = function(t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout((function() {
                        t._onTimeout && t._onTimeout()
                    }
                    ), e))
                }
                ,
                n(6),
                e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate,
                e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
            }
            ).call(this, n(0))
        }
        , function(t, e, n) {
            (function(t, e) {
                !function(t, n) {
                    "use strict";
                    if (!t.setImmediate) {
                        var r, o, i, a, u, c = 1, s = {}, l = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                        d = d && d.setTimeout ? d : t,
                        "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                            e.nextTick((function() {
                                h(t)
                            }
                            ))
                        }
                        : function() {
                            if (t.postMessage && !t.importScripts) {
                                var e = !0
                                  , n = t.onmessage;
                                return t.onmessage = function() {
                                    e = !1
                                }
                                ,
                                t.postMessage("", "*"),
                                t.onmessage = n,
                                e
                            }
                        }() ? (a = "setImmediate$" + Math.random() + "$",
                        u = function(e) {
                            e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && h(+e.data.slice(a.length))
                        }
                        ,
                        t.addEventListener ? t.addEventListener("message", u, !1) : t.attachEvent("onmessage", u),
                        r = function(e) {
                            t.postMessage(a + e, "*")
                        }
                        ) : t.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(t) {
                            h(t.data)
                        }
                        ,
                        r = function(t) {
                            i.port2.postMessage(t)
                        }
                        ) : f && "onreadystatechange"in f.createElement("script") ? (o = f.documentElement,
                        r = function(t) {
                            var e = f.createElement("script");
                            e.onreadystatechange = function() {
                                h(t),
                                e.onreadystatechange = null,
                                o.removeChild(e),
                                e = null
                            }
                            ,
                            o.appendChild(e)
                        }
                        ) : r = function(t) {
                            setTimeout(h, 0, t)
                        }
                        ,
                        d.setImmediate = function(t) {
                            "function" != typeof t && (t = new Function("" + t));
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)
                                e[n] = arguments[n + 1];
                            var o = {
                                callback: t,
                                args: e
                            };
                            return s[c] = o,
                            r(c),
                            c++
                        }
                        ,
                        d.clearImmediate = p
                    }
                    function p(t) {
                        delete s[t]
                    }
                    function h(t) {
                        if (l)
                            setTimeout(h, 0, t);
                        else {
                            var e = s[t];
                            if (e) {
                                l = !0;
                                try {
                                    !function(t) {
                                        var e = t.callback
                                          , n = t.args;
                                        switch (n.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(n[0]);
                                            break;
                                        case 2:
                                            e(n[0], n[1]);
                                            break;
                                        case 3:
                                            e(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            e.apply(void 0, n)
                                        }
                                    }(e)
                                } finally {
                                    p(t),
                                    l = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === t ? this : t : self)
            }
            ).call(this, n(0), n(7))
        }
        , function(t, e) {
            var n, r, o = t.exports = {};
            function i() {
                throw new Error("setTimeout has not been defined")
            }
            function a() {
                throw new Error("clearTimeout has not been defined")
            }
            function u(t) {
                if (n === setTimeout)
                    return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout)
                    return n = setTimeout,
                    setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }
            !function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    n = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    r = a
                }
            }();
            var c, s = [], l = !1, f = -1;
            function d() {
                l && c && (l = !1,
                c.length ? s = c.concat(s) : f = -1,
                s.length && p())
            }
            function p() {
                if (!l) {
                    var t = u(d);
                    l = !0;
                    for (var e = s.length; e; ) {
                        for (c = s,
                        s = []; ++f < e; )
                            c && c[f].run();
                        f = -1,
                        e = s.length
                    }
                    c = null,
                    l = !1,
                    function(t) {
                        if (r === clearTimeout)
                            return clearTimeout(t);
                        if ((r === a || !r) && clearTimeout)
                            return r = clearTimeout,
                            clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
                }
            }
            function h(t, e) {
                this.fun = t,
                this.array = e
            }
            function m() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                s.push(new h(t,e)),
                1 !== s.length || l || u(p)
            }
            ,
            h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            o.title = "browser",
            o.browser = !0,
            o.env = {},
            o.argv = [],
            o.version = "",
            o.versions = {},
            o.on = m,
            o.addListener = m,
            o.once = m,
            o.off = m,
            o.removeListener = m,
            o.removeAllListeners = m,
            o.emit = m,
            o.prependListener = m,
            o.prependOnceListener = m,
            o.listeners = function(t) {
                return []
            }
            ,
            o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function() {
                return "/"
            }
            ,
            o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function() {
                return 0
            }
        }
        , function(t, e, n) {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            var o = n(9);
            t.exports = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n;
                return e = t,
                (n = [{
                    key: "urlEncode",
                    value: function(t) {
                        return o(t)
                    }
                }, {
                    key: "jsonEncode",
                    value: function(t) {
                        return JSON.stringify(t)
                    }
                }, {
                    key: "formEncode",
                    value: function(t) {
                        if (this.isFormData(t))
                            return t;
                        if (this.isFormElement(t))
                            return new FormData(t);
                        if (this.isObject(t)) {
                            var e = new FormData;
                            return Object.keys(t).forEach((function(n) {
                                var r = t[n];
                                e.append(n, r)
                            }
                            )),
                            e
                        }
                        throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")
                    }
                }, {
                    key: "isObject",
                    value: function(t) {
                        return "[object Object]" === Object.prototype.toString.call(t)
                    }
                }, {
                    key: "isFormData",
                    value: function(t) {
                        return t instanceof FormData
                    }
                }, {
                    key: "isFormElement",
                    value: function(t) {
                        return t instanceof HTMLFormElement
                    }
                }, {
                    key: "selectFiles",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise((function(e, n) {
                            var r = document.createElement("INPUT");
                            r.type = "file",
                            t.multiple && r.setAttribute("multiple", "multiple"),
                            t.accept && r.setAttribute("accept", t.accept),
                            r.style.display = "none",
                            document.body.appendChild(r),
                            r.addEventListener("change", (function(t) {
                                var n = t.target.files;
                                e(n),
                                document.body.removeChild(r)
                            }
                            ), !1),
                            r.click()
                        }
                        ))
                    }
                }, {
                    key: "parseHeaders",
                    value: function(t) {
                        var e = t.trim().split(/[\r\n]+/)
                          , n = {};
                        return e.forEach((function(t) {
                            var e = t.split(": ")
                              , r = e.shift()
                              , o = e.join(": ");
                            r && (n[r] = o)
                        }
                        )),
                        n
                    }
                }]) && r(e, n),
                t
            }()
        }
        , function(t, e) {
            var n = function(t) {
                return encodeURIComponent(t).replace(/[!'()*]/g, escape).replace(/%20/g, "+")
            }
              , r = function(t, e, o, i) {
                return e = e || null,
                o = o || "&",
                i = i || null,
                t ? function(t) {
                    for (var e = new Array, n = 0; n < t.length; n++)
                        t[n] && e.push(t[n]);
                    return e
                }(Object.keys(t).map((function(a) {
                    var u, c, s = a;
                    if (i && (s = i + "[" + s + "]"),
                    "object" == typeof t[a] && null !== t[a])
                        u = r(t[a], null, o, s);
                    else {
                        e && (c = s,
                        s = !isNaN(parseFloat(c)) && isFinite(c) ? e + Number(s) : s);
                        var l = t[a];
                        l = (l = 0 === (l = !1 === (l = !0 === l ? "1" : l) ? "0" : l) ? "0" : l) || "",
                        u = n(s) + "=" + n(l)
                    }
                    return u
                }
                ))).join(o).replace(/[!'()*]/g, "") : ""
            };
            t.exports = r
        }
        ])
    }
    , function(t, e, n) {
        t.exports = n(14)
    }
    , function(t, e) {
        t.exports = function(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
            }
        }
    }
    , function(t, e) {
        function n(t, e, n, r, o, i, a) {
            try {
                var u = t[i](a)
                  , c = u.value
            } catch (t) {
                return void n(t)
            }
            u.done ? e(c) : Promise.resolve(c).then(r, o)
        }
        t.exports = function(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(o, i) {
                    var a = t.apply(e, r);
                    function u(t) {
                        n(a, o, i, u, c, "next", t)
                    }
                    function c(t) {
                        n(a, o, i, u, c, "throw", t)
                    }
                    u(void 0)
                }
                ))
            }
        }
    }
    , function(t, e, n) {
        var r = n(19)
          , o = n(20)
          , i = n(5)
          , a = n(21);
        t.exports = function(t) {
            return r(t) || o(t) || i(t) || a()
        }
    }
    , function(t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'
    }
    , function(t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>'
    }
    , function(t, e) {
        t.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>'
    }
    , function(t, e) {
        t.exports = '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'
    }
    , function(t, e) {
        t.exports = '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>'
    }
    , function(t, e, n) {
        var r = n(22)
          , o = n(23)
          , i = n(5)
          , a = n(24);
        t.exports = function(t, e) {
            return r(t) || o(t, e) || i(t, e) || a()
        }
    }
    , function(t, e, n) {
        var r = function(t) {
            "use strict";
            var e = Object.prototype
              , n = e.hasOwnProperty
              , r = "function" == typeof Symbol ? Symbol : {}
              , o = r.iterator || "@@iterator"
              , i = r.asyncIterator || "@@asyncIterator"
              , a = r.toStringTag || "@@toStringTag";
            function u(t, e, n, r) {
                var o = e && e.prototype instanceof l ? e : l
                  , i = Object.create(o.prototype)
                  , a = new x(r || []);
                return i._invoke = function(t, e, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o)
                                throw i;
                            return S()
                        }
                        for (n.method = o,
                        n.arg = i; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var u = b(a, n);
                                if (u) {
                                    if (u === s)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var l = c(t, e, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                l.arg === s)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = "completed",
                            n.method = "throw",
                            n.arg = l.arg)
                        }
                    }
                }(t, n, a),
                i
            }
            function c(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = u;
            var s = {};
            function l() {}
            function f() {}
            function d() {}
            var p = {};
            p[o] = function() {
                return this
            }
            ;
            var h = Object.getPrototypeOf
              , m = h && h(h(E([])));
            m && m !== e && n.call(m, o) && (p = m);
            var g = d.prototype = l.prototype = Object.create(p);
            function v(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                }
                ))
            }
            function y(t, e) {
                var r;
                this._invoke = function(o, i) {
                    function a() {
                        return new e((function(r, a) {
                            !function r(o, i, a, u) {
                                var s = c(t[o], t, i);
                                if ("throw" !== s.type) {
                                    var l = s.arg
                                      , f = l.value;
                                    return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                        r("next", t, a, u)
                                    }
                                    ), (function(t) {
                                        r("throw", t, a, u)
                                    }
                                    )) : e.resolve(f).then((function(t) {
                                        l.value = t,
                                        a(l)
                                    }
                                    ), (function(t) {
                                        return r("throw", t, a, u)
                                    }
                                    ))
                                }
                                u(s.arg)
                            }(o, i, r, a)
                        }
                        ))
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }
            function b(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return",
                        e.arg = void 0,
                        b(t, e),
                        "throw" === e.method))
                            return s;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return s
                }
                var r = c(n, t.iterator, e.arg);
                if ("throw" === r.type)
                    return e.method = "throw",
                    e.arg = r.arg,
                    e.delegate = null,
                    s;
                var o = r.arg;
                return o ? o.done ? (e[t.resultName] = o.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                s) : o : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                s)
            }
            function w(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function _(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(w, this),
                this.reset(!0)
            }
            function E(t) {
                if (t) {
                    var e = t[o];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var r = -1
                          , i = function e() {
                            for (; ++r < t.length; )
                                if (n.call(t, r))
                                    return e.value = t[r],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return i.next = i
                    }
                }
                return {
                    next: S
                }
            }
            function S() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = g.constructor = d,
            d.constructor = f,
            d[a] = f.displayName = "GeneratorFunction",
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                a in t || (t[a] = "GeneratorFunction")),
                t.prototype = Object.create(g),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            v(y.prototype),
            y.prototype[i] = function() {
                return this
            }
            ,
            t.AsyncIterator = y,
            t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new y(u(e, n, r, o),i);
                return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            v(g),
            g[a] = "Generator",
            g[o] = function() {
                return this
            }
            ,
            g.toString = function() {
                return "[object Generator]"
            }
            ,
            t.keys = function(t) {
                var e = [];
                for (var n in t)
                    e.push(n);
                return e.reverse(),
                function n() {
                    for (; e.length; ) {
                        var r = e.pop();
                        if (r in t)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            t.values = E,
            x.prototype = {
                constructor: x,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(_),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function r(n, r) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = n,
                        r && (e.method = "next",
                        e.arg = void 0),
                        !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return r("end");
                        if (i.tryLoc <= this.prev) {
                            var u = n.call(i, "catchLoc")
                              , c = n.call(i, "finallyLoc");
                            if (u && c) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            } else if (u) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    s) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    s
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            _(n),
                            s
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                _(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: E(t),
                        resultName: e,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    s
                }
            },
            t
        }(t.exports);
        try {
            regeneratorRuntime = r
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }
    , function(t, e, n) {
        var r = n(16)
          , o = n(17);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[t.i, o, ""]]);
        var i = {
            insert: "head",
            singleton: !1
        }
          , a = (r(o, i),
        o.locals ? o.locals : {});
        t.exports = a
    }
    , function(t, e, n) {
        "use strict";
        var r, o = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
            r
        }, i = function() {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                    t[e] = n
                }
                return t[e]
            }
        }(), a = [];
        function u(t) {
            for (var e = -1, n = 0; n < a.length; n++)
                if (a[n].identifier === t) {
                    e = n;
                    break
                }
            return e
        }
        function c(t, e) {
            for (var n = {}, r = [], o = 0; o < t.length; o++) {
                var i = t[o]
                  , c = e.base ? i[0] + e.base : i[0]
                  , s = n[c] || 0
                  , l = "".concat(c, " ").concat(s);
                n[c] = s + 1;
                var f = u(l)
                  , d = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                -1 !== f ? (a[f].references++,
                a[f].updater(d)) : a.push({
                    identifier: l,
                    updater: g(d, e),
                    references: 1
                }),
                r.push(l)
            }
            return r
        }
        function s(t) {
            var e = document.createElement("style")
              , r = t.attributes || {};
            if (void 0 === r.nonce) {
                var o = n.nc;
                o && (r.nonce = o)
            }
            if (Object.keys(r).forEach((function(t) {
                e.setAttribute(t, r[t])
            }
            )),
            "function" == typeof t.insert)
                t.insert(e);
            else {
                var a = i(t.insert || "head");
                if (!a)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(e)
            }
            return e
        }
        var l, f = (l = [],
        function(t, e) {
            return l[t] = e,
            l.filter(Boolean).join("\n")
        }
        );
        function d(t, e, n, r) {
            var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
            if (t.styleSheet)
                t.styleSheet.cssText = f(e, o);
            else {
                var i = document.createTextNode(o)
                  , a = t.childNodes;
                a[e] && t.removeChild(a[e]),
                a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
            }
        }
        function p(t, e, n) {
            var r = n.css
              , o = n.media
              , i = n.sourceMap;
            if (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
            i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
            t.styleSheet)
                t.styleSheet.cssText = r;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(r))
            }
        }
        var h = null
          , m = 0;
        function g(t, e) {
            var n, r, o;
            if (e.singleton) {
                var i = m++;
                n = h || (h = s(e)),
                r = d.bind(null, n, i, !1),
                o = d.bind(null, n, i, !0)
            } else
                n = s(e),
                r = p.bind(null, n, e),
                o = function() {
                    !function(t) {
                        if (null === t.parentNode)
                            return !1;
                        t.parentNode.removeChild(t)
                    }(n)
                }
                ;
            return r(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    r(t = e)
                } else
                    o()
            }
        }
        t.exports = function(t, e) {
            (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
            var n = c(t = t || [], e);
            return function(t) {
                if (t = t || [],
                "[object Array]" === Object.prototype.toString.call(t)) {
                    for (var r = 0; r < n.length; r++) {
                        var o = u(n[r]);
                        a[o].references--
                    }
                    for (var i = c(t, e), s = 0; s < n.length; s++) {
                        var l = u(n[s]);
                        0 === a[l].references && (a[l].updater(),
                        a.splice(l, 1))
                    }
                    n = i
                }
            }
        }
    }
    , function(t, e, n) {
        (e = n(18)(!1)).push([t.i, '.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n', ""]),
        t.exports = e
    }
    , function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var n = function(t, e) {
                        var n = t[1] || ""
                          , r = t[3];
                        if (!r)
                            return n;
                        if (e && "function" == typeof btoa) {
                            var o = (a = r,
                            u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                            c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),
                            "/*# ".concat(c, " */"))
                              , i = r.sources.map((function(t) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */")
                            }
                            ));
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var a, u, c;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                }
                )).join("")
            }
            ,
            e.i = function(t, n, r) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var o = {};
                if (r)
                    for (var i = 0; i < this.length; i++) {
                        var a = this[i][0];
                        null != a && (o[a] = !0)
                    }
                for (var u = 0; u < t.length; u++) {
                    var c = [].concat(t[u]);
                    r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                    e.push(c))
                }
            }
            ,
            e
        }
    }
    , function(t, e, n) {
        var r = n(4);
        t.exports = function(t) {
            if (Array.isArray(t))
                return r(t)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }
    }
    , function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            if (Array.isArray(t))
                return t
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value),
                    !e || n.length !== e); r = !0)
                        ;
                } catch (t) {
                    o = !0,
                    i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }
        }
    }
    , function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "default", (function() {
            return P
        }
        ));
        var r = n(3)
          , o = n.n(r)
          , i = n(6)
          , a = n.n(i)
          , u = n(1)
          , c = n.n(u)
          , s = n(0)
          , l = n.n(s)
          , f = (n(15),
        n(7))
          , d = n.n(f)
          , p = n(8)
          , h = n.n(p)
          , m = function() {
            function t(e) {
                var n = e.api
                  , r = e.config
                  , o = e.onSelectFile;
                c()(this, t),
                this.api = n,
                this.config = r,
                this.onSelectFile = o,
                this.nodes = {
                    wrapper: g("div", [this.CSS.baseClass, this.CSS.wrapper]),
                    imageContainer: g("div", [this.CSS.imageContainer]),
                    fileButton: this.createFileButton(),
                    imageEl: void 0,
                    imagePreloader: g("div", this.CSS.imagePreloader),
                    caption: g("div", [this.CSS.input, this.CSS.caption], {
                        contentEditable: !0
                    })
                },
                this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder,
                this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),
                this.nodes.wrapper.appendChild(this.nodes.imageContainer),
                this.nodes.wrapper.appendChild(this.nodes.caption),
                this.nodes.wrapper.appendChild(this.nodes.fileButton)
            }
            return l()(t, [{
                key: "render",
                value: function(e) {
                    return e.file && 0 !== Object.keys(e.file).length ? this.toggleStatus(t.status.UPLOADING) : this.toggleStatus(t.status.EMPTY),
                    this.nodes.wrapper
                }
            }, {
                key: "createFileButton",
                value: function() {
                    var t = this
                      , e = g("div", [this.CSS.button]);
                    return e.innerHTML = this.config.buttonContent || "".concat(h.a, " ").concat(this.api.i18n.t("Select an Image")),
                    e.addEventListener("click", (function() {
                        t.onSelectFile()
                    }
                    )),
                    e
                }
            }, {
                key: "showPreloader",
                value: function(e) {
                    this.nodes.imagePreloader.style.backgroundImage = "url(".concat(e, ")"),
                    this.toggleStatus(t.status.UPLOADING)
                }
            }, {
                key: "hidePreloader",
                value: function() {
                    this.nodes.imagePreloader.style.backgroundImage = "",
                    this.toggleStatus(t.status.EMPTY)
                }
            }, {
                key: "fillImage",
                value: function(e) {
                    var n = this
                      , r = /\.mp4$/.test(e) ? "VIDEO" : "IMG"
                      , o = {
                        src: e
                    }
                      , i = "load";
                    "VIDEO" === r && (o.autoplay = !0,
                    o.loop = !0,
                    o.muted = !0,
                    o.playsinline = !0,
                    i = "loadeddata"),
                    this.nodes.imageEl = g(r, this.CSS.imageEl, o),
                    this.nodes.imageEl.addEventListener(i, (function() {
                        n.toggleStatus(t.status.FILLED),
                        n.nodes.imagePreloader && (n.nodes.imagePreloader.style.backgroundImage = "")
                    }
                    )),
                    this.nodes.imageContainer.appendChild(this.nodes.imageEl)
                }
            }, {
                key: "fillCaption",
                value: function(t) {
                    this.nodes.caption && (this.nodes.caption.innerHTML = t)
                }
            }, {
                key: "toggleStatus",
                value: function(e) {
                    for (var n in t.status)
                        Object.prototype.hasOwnProperty.call(t.status, n) && this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t.status[n]), e === t.status[n])
                }
            }, {
                key: "applyTune",
                value: function(t, e) {
                    this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(t), e)
                }
            }, {
                key: "CSS",
                get: function() {
                    return {
                        baseClass: this.api.styles.block,
                        loading: this.api.styles.loader,
                        input: this.api.styles.input,
                        button: this.api.styles.button,
                        wrapper: "image-tool",
                        imageContainer: "image-tool__image",
                        imagePreloader: "image-tool__image-preloader",
                        imageEl: "image-tool__image-picture",
                        caption: "image-tool__caption"
                    }
                }
            }], [{
                key: "status",
                get: function() {
                    return {
                        EMPTY: "empty",
                        UPLOADING: "loading",
                        FILLED: "filled"
                    }
                }
            }]),
            t
        }()
          , g = function(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(t);
            Array.isArray(n) ? (e = o.classList).add.apply(e, d()(n)) : n && o.classList.add(n);
            for (var i in r)
                o[i] = r[i];
            return o
        }
          , v = n(9)
          , y = n.n(v)
          , b = n(10)
          , w = n.n(b)
          , _ = n(11)
          , x = n.n(_)
          , E = function() {
            function t(e) {
                var n = e.api
                  , r = e.onChange;
                c()(this, t),
                this.api = n,
                this.onChange = r,
                this.buttons = []
            }
            return l()(t, [{
                key: "render",
                value: function(e) {
                    var n = this
                      , r = g("div", this.CSS.wrapper);
                    return this.buttons = [],
                    t.tunes.forEach((function(t) {
                        var o = n.api.i18n.t(t.title)
                          , i = g("div", [n.CSS.buttonBase, n.CSS.button], {
                            innerHTML: t.icon,
                            title: o
                        });
                        i.addEventListener("click", (function() {
                            n.tuneClicked(t.name)
                        }
                        )),
                        i.dataset.tune = t.name,
                        i.classList.toggle(n.CSS.buttonActive, e[t.name]),
                        n.buttons.push(i),
                        n.api.tooltip.onHover(i, o, {
                            placement: "top"
                        }),
                        r.appendChild(i)
                    }
                    )),
                    r
                }
            }, {
                key: "tuneClicked",
                value: function(t) {
                    var e = this.buttons.find((function(e) {
                        return e.dataset.tune === t
                    }
                    ));
                    e.classList.toggle(this.CSS.buttonActive, !e.classList.contains(this.CSS.buttonActive)),
                    this.onChange(t)
                }
            }, {
                key: "CSS",
                get: function() {
                    return {
                        wrapper: "",
                        buttonBase: this.api.styles.settingsButton,
                        button: "image-tool__tune",
                        buttonActive: this.api.styles.settingsButtonActive
                    }
                }
            }], [{
                key: "tunes",
                get: function() {
                    return [{
                        name: "withBorder",
                        icon: w.a,
                        title: "With border"
                    }, {
                        name: "stretched",
                        icon: x.a,
                        title: "Stretch image"
                    }, {
                        name: "withBackground",
                        icon: y.a,
                        title: "With background"
                    }]
                }
            }]),
            t
        }()
          , S = n(12)
          , k = n.n(S)
          , T = n(13)
          , j = n.n(T)
          , L = n(2)
          , O = n.n(L)
          , C = function() {
            function t(e) {
                var n = e.config
                  , r = e.onUpload
                  , o = e.onError;
                c()(this, t),
                this.config = n,
                this.onUpload = r,
                this.onError = o
            }
            return l()(t, [{
                key: "uploadSelectedFile",
                value: function(t) {
                    var e = this
                      , n = t.onPreview
                      , r = function(t) {
                        var e = new FileReader;
                        e.readAsDataURL(t),
                        e.onload = function(t) {
                            n(t.target.result)
                        }
                    };
                    (this.config.uploader && "function" == typeof this.config.uploader.uploadByFile ? O.a.selectFiles({
                        accept: this.config.types
                    }).then((function(t) {
                        r(t[0]);
                        var n = e.config.uploader.uploadByFile(t[0]);
                        return F(n) || console.warn("Custom uploader method uploadByFile should return a Promise"),
                        n
                    }
                    )) : O.a.transport({
                        url: this.config.endpoints.byFile,
                        data: this.config.additionalRequestData,
                        accept: this.config.types,
                        headers: this.config.additionalRequestHeaders,
                        beforeSend: function(t) {
                            r(t[0])
                        },
                        fieldName: this.config.field
                    }).then((function(t) {
                        return t.body
                    }
                    ))).then((function(t) {
                        e.onUpload(t)
                    }
                    )).catch((function(t) {
                        e.onError(t)
                    }
                    ))
                }
            }, {
                key: "uploadByUrl",
                value: function(t) {
                    var e, n = this;
                    this.config.uploader && "function" == typeof this.config.uploader.uploadByUrl ? F(e = this.config.uploader.uploadByUrl(t)) || console.warn("Custom uploader method uploadByUrl should return a Promise") : e = O.a.post({
                        url: this.config.endpoints.byUrl,
                        data: Object.assign({
                            url: t
                        }, this.config.additionalRequestData),
                        type: O.a.contentType.JSON,
                        headers: this.config.additionalRequestHeaders
                    }).then((function(t) {
                        return t.body
                    }
                    )),
                    e.then((function(t) {
                        n.onUpload(t)
                    }
                    )).catch((function(t) {
                        n.onError(t)
                    }
                    ))
                }
            }, {
                key: "uploadByFile",
                value: function(t, e) {
                    var n, r = this, o = e.onPreview, i = new FileReader;
                    if (i.readAsDataURL(t),
                    i.onload = function(t) {
                        o(t.target.result)
                    }
                    ,
                    this.config.uploader && "function" == typeof this.config.uploader.uploadByFile)
                        F(n = this.config.uploader.uploadByFile(t)) || console.warn("Custom uploader method uploadByFile should return a Promise");
                    else {
                        var a = new FormData;
                        a.append(this.config.field, t),
                        this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach((function(t) {
                            var e = j()(t, 2)
                              , n = e[0]
                              , r = e[1];
                            a.append(n, r)
                        }
                        )),
                        n = O.a.post({
                            url: this.config.endpoints.byFile,
                            data: a,
                            type: O.a.contentType.JSON,
                            headers: this.config.additionalRequestHeaders
                        }).then((function(t) {
                            return t.body
                        }
                        ))
                    }
                    n.then((function(t) {
                        r.onUpload(t)
                    }
                    )).catch((function(t) {
                        r.onError(t)
                    }
                    ))
                }
            }]),
            t
        }();
        function F(t) {
            return Promise.resolve(t) === t
        }
        /**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
        var P = function() {
            function t(e) {
                var n = this
                  , r = e.data
                  , o = e.config
                  , i = e.api;
                c()(this, t),
                this.api = i,
                this.config = {
                    endpoints: o.endpoints || "",
                    additionalRequestData: o.additionalRequestData || {},
                    additionalRequestHeaders: o.additionalRequestHeaders || {},
                    field: o.field || "image",
                    types: o.types || "image/*",
                    captionPlaceholder: this.api.i18n.t(o.captionPlaceholder || "Caption"),
                    buttonContent: o.buttonContent || "",
                    uploader: o.uploader || void 0
                },
                this.uploader = new C({
                    config: this.config,
                    onUpload: function(t) {
                        return n.onUpload(t)
                    },
                    onError: function(t) {
                        return n.uploadingFailed(t)
                    }
                }),
                this.ui = new m({
                    api: i,
                    config: this.config,
                    onSelectFile: function() {
                        n.uploader.uploadSelectedFile({
                            onPreview: function(t) {
                                n.ui.showPreloader(t)
                            }
                        })
                    }
                }),
                this.tunes = new E({
                    api: i,
                    onChange: function(t) {
                        return n.tuneToggled(t)
                    }
                }),
                this._data = {},
                this.data = r
            }
            var e;
            return l()(t, null, [{
                key: "toolbox",
                get: function() {
                    return {
                        icon: k.a,
                        title: "Image"
                    }
                }
            }]),
            l()(t, [{
                key: "render",
                value: function() {
                    return this.ui.render(this.data)
                }
            }, {
                key: "save",
                value: function() {
                    var t = this.ui.nodes.caption;
                    return this._data.caption = t.innerHTML,
                    this.data
                }
            }, {
                key: "renderSettings",
                value: function() {
                    return this.tunes.render(this.data)
                }
            }, {
                key: "appendCallback",
                value: function() {
                    this.ui.nodes.fileButton.click()
                }
            }, {
                key: "onPaste",
                value: (e = a()(o.a.mark((function t(e) {
                    var n, r, i, a, u;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                t.t0 = e.type,
                                t.next = "tag" === t.t0 ? 3 : "pattern" === t.t0 ? 15 : "file" === t.t0 ? 18 : 21;
                                break;
                            case 3:
                                if (n = e.detail.data,
                                !/^blob:/.test(n.src)) {
                                    t.next = 13;
                                    break
                                }
                                return t.next = 7,
                                fetch(n.src);
                            case 7:
                                return r = t.sent,
                                t.next = 10,
                                r.blob();
                            case 10:
                                return i = t.sent,
                                this.uploadFile(i),
                                t.abrupt("break", 21);
                            case 13:
                                return this.uploadUrl(n.src),
                                t.abrupt("break", 21);
                            case 15:
                                return a = e.detail.data,
                                this.uploadUrl(a),
                                t.abrupt("break", 21);
                            case 18:
                                return u = e.detail.file,
                                this.uploadFile(u),
                                t.abrupt("break", 21);
                            case 21:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "onUpload",
                value: function(t) {
                    t.success && t.file ? this.image = t.file : this.uploadingFailed("incorrect response: " + JSON.stringify(t))
                }
            }, {
                key: "uploadingFailed",
                value: function(t) {
                    console.log("Image Tool: uploading failed because of", t),
                    this.api.notifier.show({
                        message: this.api.i18n.t("Couldn’t upload image. Please try another."),
                        style: "error"
                    }),
                    this.ui.hidePreloader()
                }
            }, {
                key: "tuneToggled",
                value: function(t) {
                    this.setTune(t, !this._data[t])
                }
            }, {
                key: "setTune",
                value: function(t, e) {
                    var n = this;
                    this._data[t] = e,
                    this.ui.applyTune(t, e),
                    "stretched" === t && Promise.resolve().then((function() {
                        var t = n.api.blocks.getCurrentBlockIndex();
                        n.api.blocks.stretchBlock(t, e)
                    }
                    )).catch((function(t) {
                        console.error(t)
                    }
                    ))
                }
            }, {
                key: "uploadFile",
                value: function(t) {
                    var e = this;
                    this.uploader.uploadByFile(t, {
                        onPreview: function(t) {
                            e.ui.showPreloader(t)
                        }
                    })
                }
            }, {
                key: "uploadUrl",
                value: function(t) {
                    this.ui.showPreloader(t),
                    this.uploader.uploadByUrl(t)
                }
            }, {
                key: "data",
                set: function(t) {
                    var e = this;
                    this.image = t.file,
                    this._data.caption = t.caption || "",
                    this.ui.fillCaption(this._data.caption),
                    E.tunes.forEach((function(n) {
                        var r = n.name
                          , o = void 0 !== t[r] && (!0 === t[r] || "true" === t[r]);
                        e.setTune(r, o)
                    }
                    ))
                },
                get: function() {
                    return this._data
                }
            }, {
                key: "image",
                set: function(t) {
                    this._data.file = t || {},
                    t && t.url && this.ui.fillImage(t.url)
                }
            }], [{
                key: "pasteConfig",
                get: function() {
                    return {
                        tags: ["img"],
                        patterns: {
                            image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
                        },
                        files: {
                            mimeTypes: ["image/*"]
                        }
                    }
                }
            }]),
            t
        }()
    }
    ]).default
}
));
