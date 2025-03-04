/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AttachesTool = t() : e.AttachesTool = t()
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/",
        n(n.s = 10)
    }([function(e, t) {
        e.exports = '<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M4.109 2.08H2.942a.862.862 0 0 0-.862.862v8.116c0 .476.386.862.862.862h5.529a.862.862 0 0 0 .862-.862V7.695H4.11V2.08zm1.905.497v3.29h3.312l-3.312-3.29zM2.942 0h2.74c.326.02.566.076.719.165.153.09.484.413.992.973l3.21 3.346c.347.413.557.683.631.811.111.193.179.446.179.579v5.184A2.942 2.942 0 0 1 8.471 14H2.942A2.942 2.942 0 0 1 0 11.058V2.942A2.942 2.942 0 0 1 2.942 0z" fill-rule="nonzero"></path></svg>'
    }
    , function(e, t, n) {
        window,
        e.exports = function(e) {
            var t = {};
            function n(r) {
                if (t[r])
                    return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(r, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return r
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return n.d(t, "a", t),
                t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 3)
        }([function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }
        , function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(2)
                  , o = setTimeout;
                function i() {}
                function a(e) {
                    if (!(this instanceof a))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    d(e, this)
                }
                function s(e, t) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    a._immediateFn(function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(e._value)
                            } catch (e) {
                                return void l(t.promise, e)
                            }
                            c(t.promise, r)
                        } else
                            (1 === e._state ? c : l)(t.promise, e._value)
                    })) : e._deferreds.push(t)
                }
                function c(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof a)
                                return e._state = 3,
                                e._value = t,
                                void u(e);
                            if ("function" == typeof n)
                                return void d((r = n,
                                o = t,
                                function() {
                                    r.apply(o, arguments)
                                }
                                ), e)
                        }
                        e._state = 1,
                        e._value = t,
                        u(e)
                    } catch (t) {
                        l(e, t)
                    }
                    var r, o
                }
                function l(e, t) {
                    e._state = 2,
                    e._value = t,
                    u(e)
                }
                function u(e) {
                    2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                        e._handled || a._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++)
                        s(e, e._deferreds[t]);
                    e._deferreds = null
                }
                function f(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null,
                    this.onRejected = "function" == typeof t ? t : null,
                    this.promise = n
                }
                function d(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0,
                            c(t, e))
                        }, function(e) {
                            n || (n = !0,
                            l(t, e))
                        })
                    } catch (e) {
                        if (n)
                            return;
                        n = !0,
                        l(t, e)
                    }
                }
                a.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                a.prototype.then = function(e, t) {
                    var n = new this.constructor(i);
                    return s(this, new f(e,t,n)),
                    n
                }
                ,
                a.prototype.finally = r.a,
                a.all = function(e) {
                    return new a(function(t, n) {
                        if (!e || void 0 === e.length)
                            throw new TypeError("Promise.all accepts an array");
                        var r = Array.prototype.slice.call(e);
                        if (0 === r.length)
                            return t([]);
                        var o = r.length;
                        function i(e, a) {
                            try {
                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                    var s = a.then;
                                    if ("function" == typeof s)
                                        return void s.call(a, function(t) {
                                            i(e, t)
                                        }, n)
                                }
                                r[e] = a,
                                0 == --o && t(r)
                            } catch (e) {
                                n(e)
                            }
                        }
                        for (var a = 0; a < r.length; a++)
                            i(a, r[a])
                    }
                    )
                }
                ,
                a.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === a ? e : new a(function(t) {
                        t(e)
                    }
                    )
                }
                ,
                a.reject = function(e) {
                    return new a(function(t, n) {
                        n(e)
                    }
                    )
                }
                ,
                a.race = function(e) {
                    return new a(function(t, n) {
                        for (var r = 0, o = e.length; r < o; r++)
                            e[r].then(t, n)
                    }
                    )
                }
                ,
                a._immediateFn = "function" == typeof e && function(t) {
                    e(t)
                }
                || function(e) {
                    o(e, 0)
                }
                ,
                a._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                t.a = a
            }
            ).call(this, n(5).setImmediate)
        }
        , function(e, t, n) {
            "use strict";
            t.a = function(e) {
                var t = this.constructor;
                return this.then(function(n) {
                    return t.resolve(e()).then(function() {
                        return n
                    })
                }, function(n) {
                    return t.resolve(e()).then(function() {
                        return t.reject(n)
                    })
                })
            }
        }
        , function(e, t, n) {
            "use strict";
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            n(4);
            var o, i, a, s, c, l, u = n(8), f = (i = function(e) {
                return new Promise(function(t, n) {
                    e = s(e),
                    e = c(e);
                    var r = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP");
                    r.open(e.method, e.url),
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    Object.keys(e.headers).forEach(function(t) {
                        var n = e.headers[t];
                        r.setRequestHeader(t, n)
                    });
                    var o = e.ratio;
                    r.upload.addEventListener("progress", function(t) {
                        var n = Math.round(t.loaded / t.total * 100)
                          , r = Math.ceil(n * o / 100);
                        e.progress(r)
                    }, !1),
                    r.addEventListener("progress", function(t) {
                        var n = Math.round(t.loaded / t.total * 100)
                          , r = Math.ceil(n * (100 - o) / 100) + o;
                        e.progress(r)
                    }, !1),
                    r.onreadystatechange = function() {
                        if (4 === r.readyState) {
                            var e = r.response;
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            var o = u.parseHeaders(r.getAllResponseHeaders())
                              , i = {
                                body: e,
                                code: r.status,
                                headers: o
                            };
                            200 === r.status ? t(i) : n(i)
                        }
                    }
                    ,
                    r.send(e.data)
                }
                )
            }
            ,
            a = function(e) {
                return e.method = "POST",
                i(e)
            }
            ,
            s = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (e.url && "string" != typeof e.url)
                    throw new Error("Url must be a string");
                if (e.url = e.url || "",
                e.method && "string" != typeof e.method)
                    throw new Error("`method` must be a string or null");
                if (e.method = e.method ? e.method.toUpperCase() : "GET",
                e.headers && "object" !== r(e.headers))
                    throw new Error("`headers` must be an object or null");
                if (e.headers = e.headers || {},
                e.type && ("string" != typeof e.type || !Object.values(o).includes(e.type)))
                    throw new Error("`type` must be taken from module's «contentType» library");
                if (e.progress && "function" != typeof e.progress)
                    throw new Error("`progress` must be a function or null");
                if (e.progress = e.progress || function(e) {}
                ,
                e.beforeSend = e.beforeSend || function(e) {}
                ,
                e.ratio && "number" != typeof e.ratio)
                    throw new Error("`ratio` must be a number");
                if (e.ratio < 0 || e.ratio > 100)
                    throw new Error("`ratio` must be in a 0-100 interval");
                if (e.ratio = e.ratio || 90,
                e.accept && "string" != typeof e.accept)
                    throw new Error("`accept` must be a string with a list of allowed mime-types");
                if (e.accept = e.accept || "*/*",
                e.multiple && "boolean" != typeof e.multiple)
                    throw new Error("`multiple` must be a true or false");
                if (e.multiple = e.multiple || !1,
                e.fieldName && "string" != typeof e.fieldName)
                    throw new Error("`fieldName` must be a string");
                return e.fieldName = e.fieldName || "files",
                e
            }
            ,
            c = function(e) {
                switch (e.method) {
                case "GET":
                    var t = l(e.data, o.URLENCODED);
                    delete e.data,
                    e.url = /\?/.test(e.url) ? e.url + "&" + t : e.url + "?" + t;
                    break;
                case "POST":
                case "PUT":
                case "DELETE":
                case "UPDATE":
                    var n = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON
                    }(e);
                    (u.isFormData(e.data) || u.isFormElement(e.data)) && (n = o.FORM),
                    e.data = l(e.data, n),
                    n !== f.contentType.FORM && (e.headers["content-type"] = n)
                }
                return e
            }
            ,
            l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                switch (arguments.length > 1 ? arguments[1] : void 0) {
                case o.URLENCODED:
                    return u.urlEncode(e);
                case o.JSON:
                    return u.jsonEncode(e);
                case o.FORM:
                    return u.formEncode(e);
                default:
                    return e
                }
            }
            ,
            {
                contentType: o = {
                    URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
                    FORM: "multipart/form-data",
                    JSON: "application/json; charset=utf-8"
                },
                request: i,
                get: function(e) {
                    return e.method = "GET",
                    i(e)
                },
                post: a,
                transport: function(e) {
                    return e = s(e),
                    u.selectFiles(e).then(function(t) {
                        //modified here
                        let dummyFile=new Blob(['dummyFile'],{type : 'text/html'});
                        for (var n = new FormData, r = 0; r < t.length; r++){
                            //replace dummyFile with t[r] to revert
                            n.append(e.fieldName, dummyFile, t[r].name);
                            n.append('size',t[r].size);
                        }
                        return u.isObject(e.data) && Object.keys(e.data).forEach(function(t) {
                            var r = e.data[t];
                            n.append(t, r)
                        }),
                        e.beforeSend && e.beforeSend(t),
                        e.data = n,
                        a(e)
                    })
                },
                selectFiles: function(e) {
                    return delete (e = s(e)).beforeSend,
                    u.selectFiles(e)
                }
            });
            e.exports = f
        }
        , function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1);
            window.Promise = window.Promise || r.a
        }
        , function(e, t, n) {
            (function(e) {
                var r = void 0 !== e && e || "undefined" != typeof self && self || window
                  , o = Function.prototype.apply;
                function i(e, t) {
                    this._id = e,
                    this._clearFn = t
                }
                t.setTimeout = function() {
                    return new i(o.call(setTimeout, r, arguments),clearTimeout)
                }
                ,
                t.setInterval = function() {
                    return new i(o.call(setInterval, r, arguments),clearInterval)
                }
                ,
                t.clearTimeout = t.clearInterval = function(e) {
                    e && e.close()
                }
                ,
                i.prototype.unref = i.prototype.ref = function() {}
                ,
                i.prototype.close = function() {
                    this._clearFn.call(r, this._id)
                }
                ,
                t.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = t
                }
                ,
                t.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = -1
                }
                ,
                t._unrefActive = t.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                        e._onTimeout && e._onTimeout()
                    }, t))
                }
                ,
                n(6),
                t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
                t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
            }
            ).call(this, n(0))
        }
        , function(e, t, n) {
            (function(e, t) {
                !function(e, n) {
                    "use strict";
                    if (!e.setImmediate) {
                        var r, o, i, a, s, c = 1, l = {}, u = !1, f = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        d = d && d.setTimeout ? d : e,
                        "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                            t.nextTick(function() {
                                h(e)
                            })
                        }
                        : function() {
                            if (e.postMessage && !e.importScripts) {
                                var t = !0
                                  , n = e.onmessage;
                                return e.onmessage = function() {
                                    t = !1
                                }
                                ,
                                e.postMessage("", "*"),
                                e.onmessage = n,
                                t
                            }
                        }() ? (a = "setImmediate$" + Math.random() + "$",
                        s = function(t) {
                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length))
                        }
                        ,
                        e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s),
                        r = function(t) {
                            e.postMessage(a + t, "*")
                        }
                        ) : e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                            h(e.data)
                        }
                        ,
                        r = function(e) {
                            i.port2.postMessage(e)
                        }
                        ) : f && "onreadystatechange"in f.createElement("script") ? (o = f.documentElement,
                        r = function(e) {
                            var t = f.createElement("script");
                            t.onreadystatechange = function() {
                                h(e),
                                t.onreadystatechange = null,
                                o.removeChild(t),
                                t = null
                            }
                            ,
                            o.appendChild(t)
                        }
                        ) : r = function(e) {
                            setTimeout(h, 0, e)
                        }
                        ,
                        d.setImmediate = function(e) {
                            "function" != typeof e && (e = new Function("" + e));
                            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                                t[n] = arguments[n + 1];
                            var o = {
                                callback: e,
                                args: t
                            };
                            return l[c] = o,
                            r(c),
                            c++
                        }
                        ,
                        d.clearImmediate = p
                    }
                    function p(e) {
                        delete l[e]
                    }
                    function h(e) {
                        if (u)
                            setTimeout(h, 0, e);
                        else {
                            var t = l[e];
                            if (t) {
                                u = !0;
                                try {
                                    !function(e) {
                                        var t = e.callback
                                          , r = e.args;
                                        switch (r.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(r[0]);
                                            break;
                                        case 2:
                                            t(r[0], r[1]);
                                            break;
                                        case 3:
                                            t(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            t.apply(n, r)
                                        }
                                    }(t)
                                } finally {
                                    p(e),
                                    u = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === e ? this : e : self)
            }
            ).call(this, n(0), n(7))
        }
        , function(e, t) {
            var n, r, o = e.exports = {};
            function i() {
                throw new Error("setTimeout has not been defined")
            }
            function a() {
                throw new Error("clearTimeout has not been defined")
            }
            function s(e) {
                if (n === setTimeout)
                    return setTimeout(e, 0);
                if ((n === i || !n) && setTimeout)
                    return n = setTimeout,
                    setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }
            !function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    n = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var c, l = [], u = !1, f = -1;
            function d() {
                u && c && (u = !1,
                c.length ? l = c.concat(l) : f = -1,
                l.length && p())
            }
            function p() {
                if (!u) {
                    var e = s(d);
                    u = !0;
                    for (var t = l.length; t; ) {
                        for (c = l,
                        l = []; ++f < t; )
                            c && c[f].run();
                        f = -1,
                        t = l.length
                    }
                    c = null,
                    u = !1,
                    function(e) {
                        if (r === clearTimeout)
                            return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout)
                            return r = clearTimeout,
                            clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
                }
            }
            function h(e, t) {
                this.fun = e,
                this.array = t
            }
            function m() {}
            o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                l.push(new h(e,t)),
                1 !== l.length || u || s(p)
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
            o.listeners = function(e) {
                return []
            }
            ,
            o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function() {
                return "/"
            }
            ,
            o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function() {
                return 0
            }
        }
        , function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var o = n(9);
            e.exports = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t, n;
                return t = e,
                (n = [{
                    key: "urlEncode",
                    value: function(e) {
                        return o(e)
                    }
                }, {
                    key: "jsonEncode",
                    value: function(e) {
                        return JSON.stringify(e)
                    }
                }, {
                    key: "formEncode",
                    value: function(e) {
                        if (this.isFormData(e))
                            return e;
                        if (this.isFormElement(e))
                            return new FormData(e);
                        if (this.isObject(e)) {
                            var t = new FormData;
                            return Object.keys(e).forEach(function(n) {
                                var r = e[n];
                                t.append(n, r)
                            }),
                            t
                        }
                        throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")
                    }
                }, {
                    key: "isObject",
                    value: function(e) {
                        return "[object Object]" === Object.prototype.toString.call(e)
                    }
                }, {
                    key: "isFormData",
                    value: function(e) {
                        return e instanceof FormData
                    }
                }, {
                    key: "isFormElement",
                    value: function(e) {
                        return e instanceof HTMLFormElement
                    }
                }, {
                    key: "selectFiles",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise(function(t, n) {
                            var r = document.createElement("INPUT");
                            r.type = "file",
                            e.multiple && r.setAttribute("multiple", "multiple"),
                            e.accept && r.setAttribute("accept", e.accept),
                            r.style.display = "none",
                            document.body.appendChild(r),
                            r.addEventListener("change", function(e) {
                                var n = e.target.files;
                                t(n),
                                document.body.removeChild(r)
                            }, !1),
                            r.click()
                        }
                        )
                    }
                }, {
                    key: "parseHeaders",
                    value: function(e) {
                        var t = e.trim().split(/[\r\n]+/)
                          , n = {};
                        return t.forEach(function(e) {
                            var t = e.split(": ")
                              , r = t.shift()
                              , o = t.join(": ");
                            r && (n[r] = o)
                        }),
                        n
                    }
                }]) && r(t, n),
                e
            }()
        }
        , function(e, t) {
            var n = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/%20/g, "+")
            }
              , r = function(e, t, o, i) {
                return t = t || null,
                o = o || "&",
                i = i || null,
                e ? function(e) {
                    for (var t = new Array, n = 0; n < e.length; n++)
                        e[n] && t.push(e[n]);
                    return t
                }(Object.keys(e).map(function(a) {
                    var s, c, l = a;
                    if (i && (l = i + "[" + l + "]"),
                    "object" == typeof e[a] && null !== e[a])
                        s = r(e[a], null, o, l);
                    else {
                        t && (c = l,
                        l = !isNaN(parseFloat(c)) && isFinite(c) ? t + Number(l) : l);
                        var u = e[a];
                        u = (u = 0 === (u = !1 === (u = !0 === u ? "1" : u) ? "0" : u) ? "0" : u) || "",
                        s = n(l) + "=" + n(u)
                    }
                    return s
                })).join(o).replace(/[!'()*]/g, "") : ""
            };
            e.exports = r
        }
        ])
    }
    , function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40"><g fill="#A8ACB8" fill-rule="evenodd"><path fill-rule="nonzero" d="M17 0l15 14V3v34a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h20-6zm0 2H3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14H17V2zm2 10h7.926L19 4.602V12z"></path><path d="M7 22h18v2H7zm0 4h18v2H7zm0 4h18v2H7z"></path></g></svg>'
    }
    , function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40"><path d="M17 0l15 14V3v34a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h20-6zm0 2H3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14H17V2zm2 10h7.926L19 4.602V12z"></path></svg>'
    }
    , function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="17pt" height="17pt" viewBox="0 0 17 17"><path d="M9.457 8.945V2.848A.959.959 0 0 0 8.5 1.89a.959.959 0 0 0-.957.957v6.097L4.488 5.891a.952.952 0 0 0-1.351 0 .952.952 0 0 0 0 1.351l4.687 4.688a.955.955 0 0 0 1.352 0l4.687-4.688a.952.952 0 0 0 0-1.351.952.952 0 0 0-1.351 0zM3.59 14.937h9.82a.953.953 0 0 0 .953-.957.952.952 0 0 0-.953-.953H3.59a.952.952 0 0 0-.953.953c0 .532.425.957.953.957zm0 0" fill-rule="evenodd"></path></svg>'
    }
    , function(e, t, n) {
        var r = n(6);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(8)(r, o);
        r.locals && (e.exports = r.locals)
    }
    , function(e, t, n) {
        (e.exports = n(7)(!1)).push([e.i, ".cdx-attaches--with-file {\n    display: flex;\n    padding: 13px 20px;\n    border: 1px solid #e6e9eb;\n    border-radius: 3px;\n    background: #fff;\n  }\n\n    .cdx-attaches--with-file .cdx-attaches__file-info {\n      flex-grow: 8;\n      max-width: calc(100% - 80px);\n    }\n\n    .cdx-attaches--with-file .cdx-attaches__download-button {\n      display: flex;\n      align-items: center;\n    }\n\n    .cdx-attaches--with-file .cdx-attaches__download-button svg {\n        fill: #7b7e89;\n      }\n\n    .cdx-attaches--with-file .cdx-attaches__file-icon {\n      margin-right: 20px;\n      position: relative;\n    }\n\n    .cdx-attaches--with-file .cdx-attaches__file-icon::before {\n        position: absolute;\n        bottom: 7px;\n        left: 8.5px;\n        font-size: 8px;\n        font-weight: 900;\n        text-transform: uppercase;\n        background: #fff;\n        line-height: 150%;\n        content: attr(data-extension);\n      }\n\n    .cdx-attaches--with-file .cdx-attaches__file-icon svg {\n        fill: currentColor;\n      }\n\n    .cdx-attaches--with-file .cdx-attaches__size {\n      color: #7b7e89;\n    }\n\n    .cdx-attaches--with-file .cdx-attaches__size::after {\n        content: attr(data-size);\n        margin-left: 0.2em;\n      }\n\n    .cdx-attaches--with-file .cdx-attaches__title {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      outline: none;\n      max-width: 90%;\n    }\n  .cdx-attaches--loading .cdx-attaches__title,\n    .cdx-attaches--loading .cdx-attaches__file-icon,\n    .cdx-attaches--loading .cdx-attaches__size,\n    .cdx-attaches--loading .cdx-attaches__download-button,\n    .cdx-attaches--loading .cdx-attaches__button {\n      opacity: 0;\n      font-size: 0;\n    }\n  .cdx-attaches__button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .cdx-attaches__button svg {\n      height: 14px;\n      margin-top: 0;\n      margin-right: 8px;\n    }\n  .cdx-attaches__button:hover {\n      color: #393f52;\n    }\n", ""])
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || ""
                          , r = e[3];
                        if (!r)
                            return n;
                        if (t && "function" == typeof btoa) {
                            var o = (a = r,
                            s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                            c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
                            "/*# ".concat(c, " */"))
                              , i = r.sources.map(function(e) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
                            });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var a, s, c;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
                }).join("")
            }
            ,
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (r[i] = !0)
                }
                for (var a = 0; a < e.length; a++) {
                    var s = e[a];
                    null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")),
                    t.push(s))
                }
            }
            ,
            t
        }
    }
    , function(e, t, n) {
        var r, o, i = {}, a = (r = function() {
            return window && document && document.all && !window.atob
        }
        ,
        function() {
            return void 0 === o && (o = r.apply(this, arguments)),
            o
        }
        ), s = function(e) {
            var t = {};
            return function(e, n) {
                if ("function" == typeof e)
                    return e();
                if (void 0 === t[e]) {
                    var r = function(e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }
                    .call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                        try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                    t[e] = r
                }
                return t[e]
            }
        }(), c = null, l = 0, u = [], f = n(9);
        function d(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                  , o = i[r.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++)
                        o.parts[a](r.parts[a]);
                    for (; a < r.parts.length; a++)
                        o.parts.push(g(r.parts[a], t))
                } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++)
                        s.push(g(r.parts[a], t));
                    i[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function p(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o]
                  , a = t.base ? i[0] + t.base : i[0]
                  , s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return n
        }
        function h(e, t) {
            var n = s(e.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = u[u.length - 1];
            if ("top" === e.insertAt)
                r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                u.push(t);
            else if ("bottom" === e.insertAt)
                n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(e.insertAt.before, n);
                n.insertBefore(t, o)
            }
        }
        function m(e) {
            if (null === e.parentNode)
                return !1;
            e.parentNode.removeChild(e);
            var t = u.indexOf(e);
            t >= 0 && u.splice(t, 1)
        }
        function v(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
            void 0 === e.attrs.nonce) {
                var r = function() {
                    0;
                    return n.nc
                }();
                r && (e.attrs.nonce = r)
            }
            return y(t, e.attrs),
            h(e, t),
            t
        }
        function y(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }
        function g(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css)))
                    return function() {}
                    ;
                e.css = i
            }
            if (t.singleton) {
                var a = l++;
                n = c || (c = v(t)),
                r = x.bind(null, n, a, !1),
                o = x.bind(null, n, a, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                    e.attrs.rel = "stylesheet",
                    y(t, e.attrs),
                    h(e, t),
                    t
                }(t),
                r = function(e, t, n) {
                    var r = n.css
                      , o = n.sourceMap
                      , i = void 0 === t.convertToAbsoluteUrls && o;
                    (t.convertToAbsoluteUrls || i) && (r = f(r));
                    o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var a = new Blob([r],{
                        type: "text/css"
                    })
                      , s = e.href;
                    e.href = URL.createObjectURL(a),
                    s && URL.revokeObjectURL(s)
                }
                .bind(null, n, t),
                o = function() {
                    m(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = v(t),
                r = function(e, t) {
                    var n = t.css
                      , r = t.media;
                    r && e.setAttribute("media", r);
                    if (e.styleSheet)
                        e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
                .bind(null, n),
                o = function() {
                    m(n)
                }
                );
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    r(e = t)
                } else
                    o()
            }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {},
            t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
            var n = p(e, t);
            return d(n, t),
            function(e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--,
                    r.push(s)
                }
                e && d(p(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var c = 0; c < s.parts.length; c++)
                            s.parts[c]();
                        delete i[s.id]
                    }
                }
            }
        }
        ;
        var b, w = (b = [],
        function(e, t) {
            return b[e] = t,
            b.filter(Boolean).join("\n")
        }
        );
        function x(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = w(t, o);
            else {
                var i = document.createTextNode(o)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t)
                throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e)
                return e;
            var n = t.protocol + "//" + t.host
              , r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")")
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        n(5);
        var r = n(1)
          , o = n.n(r);
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        var a = function() {
            function e(t) {
                var n = t.config
                  , r = t.onUpload
                  , o = t.onError;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.config = n,
                this.onUpload = r,
                this.onError = o
            }
            var t, n, r;
            return t = e,
            (n = [{
                key: "uploadSelectedFile",
                value: function(e) {
                    var t = this
                      , n = e.onPreview;
                    o.a.transport({
                        url: this.config.endpoint,
                        accept: this.config.types,
                        beforeSend: function() {
                            return n()
                        },
                        fieldName: this.config.field
                    }).then(function(e) {
                        t.onUpload(e)
                    }).catch(function(e) {
                        var n = e && e.message ? e.message : t.config.errorMessage;
                        t.onError(n)
                    })
                }
            }]) && i(t.prototype, n),
            r && i(t, r),
            e
        }()
          , s = n(0)
          , c = n.n(s)
          , l = n(2)
          , u = n.n(l)
          , f = n(3)
          , d = n.n(f)
          , p = n(4)
          , h = n.n(p);
        function m(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        n.d(t, "default", function() {
            return y
        });
        var y = function() {
            function e(t) {
                var n = this
                  , r = t.data
                  , o = t.config
                  , i = t.api;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.api = i,
                this.nodes = {
                    wrapper: null,
                    button: null,
                    title: null
                },
                this._data = {
                    file: {},
                    title: ""
                },
                this.config = {
                    endpoint: o.endpoint || "",
                    field: o.field || "file",
                    types: o.types || "*",
                    buttonText: o.buttonText || "Select file to upload",
                    errorMessage: o.errorMessage || "File upload failed"
                },
                this.data = r,
                this.uploader = new a({
                    config: this.config,
                    onUpload: function(e) {
                        return n.onUpload(e)
                    },
                    onError: function(e) {
                        return n.uploadingFailed(e)
                    }
                }),
                this.enableFileUpload = this.enableFileUpload.bind(this)
            }
            var t, n, r;
            return t = e,
            r = [{
                key: "toolbox",
                get: function() {
                    return {
                        icon: c.a,
                        title: "Attaches"
                    }
                }
            }],
            (n = [{
                key: "save",
                value: function(e) {
                    if (this.pluginHasData()) {
                        var t = e.querySelector(".".concat(this.CSS.title)).innerHTML;
                        Object.assign(this.data, {
                            title: t
                        })
                    }
                    return this.data
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.make("div", this.CSS.baseClass);
                    return this.nodes.wrapper = this.make("div", this.CSS.wrapper),
                    this.pluginHasData() ? this.showFileData() : this.prepareUploadButton(),
                    e.appendChild(this.nodes.wrapper),
                    e
                }
            }, {
                key: "prepareUploadButton",
                value: function() {
                    this.nodes.button = this.make("div", [this.CSS.apiButton, this.CSS.button]),
                    this.nodes.button.innerHTML = "".concat(c.a, " ").concat(this.config.buttonText),
                    this.nodes.button.addEventListener("click", this.enableFileUpload),
                    this.nodes.wrapper.appendChild(this.nodes.button)
                }
            }, {
                key: "appendCallback",
                value: function() {
                    this.nodes.button.click()
                }
            }, {
                key: "pluginHasData",
                value: function() {
                    return "" !== this.data.title || Object.values(this.data.file).some(function(e) {
                        return void 0 !== e
                    })
                }
            }, {
                key: "enableFileUpload",
                value: function() {
                    var e = this;
                    this.uploader.uploadSelectedFile({
                        onPreview: function() {
                            e.nodes.wrapper.classList.add(e.CSS.wrapperLoading, e.CSS.loader)
                        }
                    })
                }
            }, {
                key: "onUpload",
                value: function(e) {
                    var t = e.body;
                    if (t.success && t.file) {
                        var n = t.file
                          , r = n.url
                          , o = n.name
                          , i = n.size;
                        this.data = {
                            file: {
                                url: r,
                                extension: o.split(".").pop(),
                                name: o,
                                size: i
                            },
                            title: o
                        },
                        this.nodes.button.remove(),
                        this.showFileData(),
                        this.moveCaretToEnd(this.nodes.title),
                        this.nodes.title.focus(),
                        this.removeLoader()
                    } else
                        this.uploadingFailed(this.config.errorMessage)
                }
            }, {
                key: "appendFileIcon",
                value: function() {
                    var e = this.data.file.extension || ""
                      , t = this.EXTENSIONS[e]
                      , n = this.make("div", this.CSS.fileIcon, {
                        innerHTML: t ? d.a : u.a
                    });
                    t && (n.style.color = t,
                    n.setAttribute("data-extension", e)),
                    this.nodes.wrapper.appendChild(n)
                }
            }, {
                key: "removeLoader",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        return e.nodes.wrapper.classList.remove(e.CSS.wrapperLoading, e.CSS.loader)
                    }, 500)
                }
            }, {
                key: "showFileData",
                value: function() {
                    this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);
                    var e = this.data
                      , t = e.file
                      , n = t.size
                      , r = t.url
                      , o = e.title;
                    this.appendFileIcon();
                    var i = this.make("div", this.CSS.fileInfo);
                    if (o && (this.nodes.title = this.make("div", this.CSS.title, {
                        contentEditable: !0
                    }),
                    this.nodes.title.textContent = o,
                    i.appendChild(this.nodes.title)),
                    n) {
                        var a, s, c = this.make("div", this.CSS.size);
                        Math.log10(+n) >= 6 ? (a = "MiB",
                        s = n / Math.pow(2, 20)) : (a = "KiB",
                        s = n / Math.pow(2, 10)),
                        c.textContent = s.toFixed(1),
                        c.setAttribute("data-size", a),
                        i.appendChild(c)
                    }
                    this.nodes.wrapper.appendChild(i);
                    var l = this.make("a", this.CSS.downloadButton, {
                        innerHTML: h.a,
                        href: r,
                        target: "_blank",
                        rel: "nofollow noindex noreferrer"
                    });
                    this.nodes.wrapper.appendChild(l)
                }
            }, {
                key: "uploadingFailed",
                value: function(e) {
                    this.api.notifier.show({
                        message: e,
                        style: "error"
                    }),
                    this.removeLoader()
                }
            }, {
                key: "moveCaretToEnd",
                value: function(e) {
                    var t = document.createRange()
                      , n = window.getSelection();
                    t.selectNodeContents(e),
                    t.collapse(!1),
                    n.removeAllRanges(),
                    n.addRange(t)
                }
            }, {
                key: "make",
                value: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(e);
                    Array.isArray(n) ? (t = o.classList).add.apply(t, m(n)) : n && o.classList.add(n);
                    for (var i in r)
                        o[i] = r[i];
                    return o
                }
            }, {
                key: "CSS",
                get: function() {
                    return {
                        baseClass: this.api.styles.block,
                        apiButton: this.api.styles.button,
                        loader: this.api.styles.loader,
                        wrapper: "cdx-attaches",
                        wrapperWithFile: "cdx-attaches--with-file",
                        wrapperLoading: "cdx-attaches--loading",
                        button: "cdx-attaches__button",
                        title: "cdx-attaches__title",
                        size: "cdx-attaches__size",
                        downloadButton: "cdx-attaches__download-button",
                        fileInfo: "cdx-attaches__file-info",
                        fileIcon: "cdx-attaches__file-icon"
                    }
                }
            }, {
                key: "EXTENSIONS",
                get: function() {
                    return {
                        doc: "#3e74da",
                        docx: "#3e74da",
                        odt: "#3e74da",
                        pdf: "#d47373",
                        rtf: "#656ecd",
                        tex: "#5a5a5b",
                        txt: "#5a5a5b",
                        pptx: "#e07066",
                        ppt: "#e07066",
                        mp3: "#eab456",
                        mp4: "#f676a6",
                        xls: "#3f9e64",
                        html: "#2988f0",
                        htm: "#2988f0",
                        png: "#f676a6",
                        jpg: "#f67676",
                        jpeg: "#f67676",
                        gif: "#f6af76",
                        zip: "#4f566f",
                        rar: "#4f566f",
                        exe: "#e26f6f",
                        svg: "#bf5252",
                        key: "#e07066",
                        sketch: "#df821c",
                        ai: "#df821c",
                        psd: "#388ae5",
                        dmg: "#e26f6f",
                        json: "#2988f0",
                        csv: "#3f9e64"
                    }
                }
            }, {
                key: "data",
                get: function() {
                    return this._data
                },
                set: function(e) {
                    var t = e.file
                      , n = e.title;
                    this._data = Object.assign({}, {
                        file: {
                            url: t && t.url || this._data.file.url,
                            name: t && t.name || this._data.file.name,
                            extension: t && t.extension || this._data.file.extension,
                            size: t && t.size || this._data.file.size
                        },
                        title: n || this._data.title
                    })
                }
            }]) && v(t.prototype, n),
            r && v(t, r),
            e
        }()
    }
    ]).default
});
