! function (a, b) {
    function c() {
        var a = {},
            b = new o(function (b, c) {
                a.resolve = b, a.reject = c
            });
        return a.promise = b, a
    }

    function d(a, b) {
        for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        return a
    }

    function e(a) {
        var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
        b.appendChild(a)
    }

    function f(a) {
        var b = [];
        for (var c in a) a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }

    function g(a) {
        return a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1)
    }

    function h(a) {
        function b(a, b) {
            return a << b | a >>> 32 - b
        }

        function c(a, b) {
            var c, d, e, f, g;
            return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }

        function d(a, b, c) {
            return a & b | ~a & c
        }

        function e(a, b, c) {
            return a & c | b & ~c
        }

        function f(a, b, c) {
            return a ^ b ^ c
        }

        function g(a, b, c) {
            return b ^ (a | ~c)
        }

        function h(a, e, f, g, h, i, j) {
            return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
        }

        function i(a, d, f, g, h, i, j) {
            return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
        }

        function j(a, d, e, g, h, i, j) {
            return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
        }

        function k(a, d, e, f, h, i, j) {
            return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
        }

        function l(a) {
            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
            return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
        }

        function m(a) {
            var b, c, d = "",
                e = "";
            for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
            return d
        }

        function n(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
            }
            return b
        }
        var o, p, q, r, s, t, u, v, w, x = [],
            y = 7,
            z = 12,
            A = 17,
            B = 22,
            C = 5,
            D = 9,
            E = 14,
            F = 20,
            G = 4,
            H = 11,
            I = 16,
            J = 23,
            K = 6,
            L = 10,
            M = 15,
            N = 21;
        for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
        var O = m(t) + m(u) + m(v) + m(w);
        return O.toLowerCase()
    }

    function i(a, b, c) {
        var d = c || {};
        document.cookie = a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "")
    }

    function j(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
        return b ? b[1] : void 0
    }

    function k(a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() - 864e5);
        var e = "/";
        document.cookie = a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(), document.cookie = a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString()
    }

    function l() {
        var b = a.location.hostname;
        if (!b) {
            var c = a.parent.location.hostname;
            c && ~c.indexOf("zebra.alibaba-inc.com") && (b = c)
        }
        var d = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"],
            e = new RegExp("([^.]*?)\\.?((?:" + d.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
            f = b.match(e) || [],
            g = f[2] || "taobao.com",
            h = f[1] || "m";
        "taobao.net" !== g || "x" !== h && "waptest" !== h && "daily" !== h ? "taobao.net" === g && "demo" === h ? h = "demo" : "alibaba-inc.com" === g && "zebra" === h ? h = "zebra" : "waptest" !== h && "wapa" !== h && "m" !== h && (h = "m") : h = "waptest";
        var i = "api";
        ("taobao.com" === g || "tmall.com" === g) && (i = "h5api"), t.mainDomain = g, t.subDomain = h, t.prefix = i
    }

    function m() {
        var b = a.navigator.userAgent,
            c = b.match(/WindVane[\/\s]([\d\.\_]+)/);
        c && (t.WindVaneVersion = c[1]);
        var d = b.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
        d && (t.AliAppName = d[1], t.AliAppVersion = d[2])
    }

    function n(a) {
        this.id = ++w, this.params = d(a || {}, {
            v: "*",
            data: {},
            type: "get",
            dataType: "jsonp"
        }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = u.slice(0)
    }
    var o = a.Promise;
    if (!o) {
        var p = "当前浏览器不支持Promise，请在windows对象上挂载Promise对象可参考（http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master）中的解决方案";
        throw b.mtop = {
            ERROR: p
        }, new Error(p)
    }
    String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    });
    var q, r = o.resolve();
    try {
        q = a.localStorage, q.setItem("@private", "false")
    } catch (s) {
        q = !1
    }
    var t = {
            useJsonpResultType: !1,
            safariGoLogin: !0,
            useAlipayJSBridge: !1
        },
        u = [],
        v = {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        };
    l(), m();
    var w = 0,
        x = "2.4.2";
    n.prototype.use = function (a) {
        if (!a) throw new Error("middleware is undefined");
        return this.middlewares.push(a), this
    }, n.prototype.__processRequestMethod = function (a) {
        var b = this.params,
            c = this.options;
        "get" === b.type && "jsonp" === b.dataType ? c.getJSONP = !0 : "get" === b.type && "originaljsonp" === b.dataType ? c.getOriginalJSONP = !0 : "get" === b.type && "json" === b.dataType ? c.getJSON = !0 : "post" === b.type && (c.postJSON = !0), a()
    }, n.prototype.__processRequestType = function (c) {
        var d = this,
            e = this.options;
        if (t.H5Request === !0 && (e.H5Request = !0), t.WindVaneRequest === !0 && (e.WindVaneRequest = !0), e.H5Request === !1 && e.WindVaneRequest === !0) {
            if (!b.windvane || parseFloat(e.WindVaneVersion) < 5.4) throw new Error("WINDVANE_NOT_FOUND::缺少WindVane环境")
        } else e.H5Request === !0 ? e.WindVaneRequest = !1 : "undefined" == typeof e.WindVaneRequest && "undefined" == typeof e.H5Request && (b.windvane && parseFloat(e.WindVaneVersion) >= 5.4 ? e.WindVaneRequest = !0 : e.H5Request = !0);
        var f = a.navigator.userAgent.toLowerCase();
        return f.indexOf("youku") > -1 && e.mainDomain.indexOf("youku.com") < 0 && (e.WindVaneRequest = !1, e.H5Request = !0), e.mainDomain.indexOf("youku.com") > -1 && f.indexOf("youku") < 0 && (e.WindVaneRequest = !1, e.H5Request = !0), c ? c().then(function () {
            var a = e.retJson.ret;
            return a instanceof Array && (a = a.join(",")), e.WindVaneRequest === !0 && (!a || a.indexOf("PARAM_PARSE_ERROR") > -1 || a.indexOf("HY_FAILED") > -1 || a.indexOf("HY_NO_HANDLER") > -1 || a.indexOf("HY_CLOSED") > -1 || a.indexOf("HY_EXCEPTION") > -1 || a.indexOf("HY_NO_PERMISSION") > -1) ? (t.H5Request = !0, d.__sequence([d.__processRequestType, d.__processToken, d.__processRequestUrl, d.middlewares, d.__processRequest])) : void 0
        }) : void 0
    };
    var y = "_m_h5_c",
        z = "_m_h5_tk",
        A = "_m_h5_tk_enc";
    n.prototype.__getTokenFromAlipay = function () {
        var b = c(),
            d = this.options,
            e = (a.navigator.userAgent, !!location.protocol.match(/^https?\:$/)),
            f = "AP" === d.AliAppName && parseFloat(d.AliAppVersion) >= 8.2;
        return d.useAlipayJSBridge === !0 && !e && f && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function (a) {
            a && a.token && (d.token = a.token), b.resolve()
        }, function () {
            b.resolve()
        }) : b.resolve(), b.promise
    }, n.prototype.__getTokenFromCookie = function () {
        var a = this.options;
        return a.CDR && j(y) ? a.token = j(y).split(";")[0] : a.token = a.token || j(z), a.token && (a.token = a.token.split("_")[0]), o.resolve()
    }, n.prototype.__processToken = function (a) {
        var b = this,
            c = this.options;
        this.params;
        return c.token && delete c.token, c.WindVaneRequest !== !0 ? r.then(function () {
            return b.__getTokenFromAlipay()
        }).then(function () {
            return b.__getTokenFromCookie()
        }).then(a).then(function () {
            var a = c.retJson,
                d = a.ret;
            if (d instanceof Array && (d = d.join(",")), d.indexOf("TOKEN_EMPTY") > -1 || c.CDR === !0 && d.indexOf("ILLEGAL_ACCESS") > -1 || d.indexOf("TOKEN_EXOIRED") > -1) {
                if (c.maxRetryTimes = c.maxRetryTimes || 5, c.failTimes = c.failTimes || 0, c.H5Request && ++c.failTimes < c.maxRetryTimes) return b.__sequence([b.__processToken, b.__processRequestUrl, b.middlewares, b.__processRequest]);
                c.maxRetryTimes > 0 && (k(y, c.pageDomain, "*"), k(z, c.mainDomain, c.subDomain), k(A, c.mainDomain, c.subDomain)), a.retType = v.TOKEN_EXPIRED
            }
        }) : void a()
    }, n.prototype.__processRequestUrl = function (b) {
        var c = this.params,
            d = this.options;
        if (d.hostSetting && d.hostSetting[a.location.hostname]) {
            var e = d.hostSetting[a.location.hostname];
            e.prefix && (d.prefix = e.prefix), e.subDomain && (d.subDomain = e.subDomain), e.mainDomain && (d.mainDomain = e.mainDomain)
        }
        if (d.H5Request === !0) {
            var f = "//" + (d.prefix ? d.prefix + "." : "") + (d.subDomain ? d.subDomain + "." : "") + d.mainDomain + "/h5/" + c.api.toLowerCase() + "/" + c.v.toLowerCase() + "/",
                g = c.appKey || ("waptest" === d.subDomain ? "4272" : "12574478"),
                i = (new Date).getTime(),
                j = h(d.token + "&" + i + "&" + g + "&" + c.data),
                k = {
                    jsv: x,
                    appKey: g,
                    t: i,
                    sign: j
                },
                l = {
                    data: c.data,
                    ua: c.ua
                };
            Object.keys(c).forEach(function (a) {
                "undefined" == typeof k[a] && "undefined" == typeof l[a] && (k[a] = c[a])
            }), d.getJSONP ? k.type = "jsonp" : d.getOriginalJSONP ? k.type = "originaljsonp" : (d.getJSON || d.postJSON) && (k.type = "originaljson"), d.useJsonpResultType === !0 && "originaljson" === k.type && delete k.type, d.querystring = k, d.postdata = l, d.path = f
        }
        b()
    }, n.prototype.__processUnitPrefix = function (a) {
        a()
    };
    var B = 0;
    n.prototype.__requestJSONP = function (a) {
        function b(a) {
            if (k && clearTimeout(k), l.parentNode && l.parentNode.removeChild(l), "TIMEOUT" === a) window[j] = function () {
                window[j] = void 0;
                try {
                    delete window[j]
                } catch (a) {}
            };
            else {
                window[j] = void 0;
                try {
                    delete window[j]
                } catch (b) {}
            }
        }
        var d = c(),
            g = this.params,
            h = this.options,
            i = g.timeout || 2e4,
            j = "mtopjsonp" + (g.jsonpIncPrefix || "") + ++B,
            k = setTimeout(function () {
                a("TIMEOUT::接口超时"), b("TIMEOUT")
            }, i);
        h.querystring.callback = j;
        var l = document.createElement("script");
        return l.src = h.path + "?" + f(h.querystring) + "&" + f(h.postdata), l.async = !0, l.onerror = function () {
            b("ABORT"), a("ABORT::接口异常退出")
        }, window[j] = function () {
            h.results = Array.prototype.slice.call(arguments), b(), d.resolve()
        }, e(l), d.promise
    }, n.prototype.__requestJSON = function (b) {
        function d(a) {
            l && clearTimeout(l), "TIMEOUT" === a && i.abort()
        }
        var e = c(),
            g = this.params,
            h = this.options,
            i = new a.XMLHttpRequest,
            k = g.timeout || 2e4,
            l = setTimeout(function () {
                b("TIMEOUT::接口超时"), d("TIMEOUT")
            }, k);
        h.CDR && j(y) && (h.querystring.c = decodeURIComponent(j(y))), i.onreadystatechange = function () {
            if (4 == i.readyState) {
                var a, c, f = i.status;
                if (f >= 200 && 300 > f || 304 == f) {
                    d(), a = i.responseText, c = i.getAllResponseHeaders() || "";
                    try {
                        a = /^\s*$/.test(a) ? {} : JSON.parse(a), a.responseHeaders = c, h.results = [a], e.resolve()
                    } catch (g) {
                        b("PARSE_JSON_ERROR::解析JSON失败")
                    }
                } else d("ABORT"), b("ABORT::接口异常退出")
            }
        };
        var m, n, o = h.path + "?" + f(h.querystring);
        if (h.getJSON ? (m = "GET", o += "&" + f(h.postdata)) : h.postJSON && (m = "POST", n = f(h.postdata)), i.open(m, o, !0), i.withCredentials = !0, i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), g.headers)
            for (var p in g.headers) i.setRequestHeader(p, g.headers[p]);
        return i.send(n), e.promise
    }, n.prototype.__requestWindVane = function (a) {
        function d(a) {
            g.results = [a], e.resolve()
        }
        var e = c(),
            f = this.params,
            g = this.options,
            h = f.data,
            i = f.api,
            j = f.v,
            k = g.postJSON ? 1 : 0,
            l = g.getJSON || g.postJSON ? "originaljson" : "";
        g.useJsonpResultType === !0 && (l = "");
        var m, n, o = "https" === location.protocol ? 1 : 0,
            p = f.isSec || 0,
            q = f.sessionOption || "AutoLoginOnly",
            r = f.ecode || 0;
        return n = "undefined" != typeof f.timer ? parseInt(f.timer) : "undefined" != typeof f.timeout ? parseInt(f.timeout) : 2e4, m = 2 * n, f.needLogin === !0 && "undefined" == typeof f.sessionOption && (q = "AutoLoginAndManualLogin"), "undefined" != typeof f.secType && "undefined" == typeof f.isSec && (p = f.secType), b.windvane.call("MtopWVPlugin", "send", {
            api: i,
            v: j,
            post: String(k),
            type: l,
            isHttps: String(o),
            ecode: String(r),
            isSec: String(p),
            param: JSON.parse(h),
            timer: n,
            sessionOption: q,
            ext_headers: {
                referer: location.href
            }
        }, d, d, m), e.promise
    }, n.prototype.__processRequest = function (a, b) {
        var c = this;
        return r.then(function () {
            var a = c.options;
            if (a.H5Request && (a.getJSONP || a.getOriginalJSONP)) return c.__requestJSONP(b);
            if (a.H5Request && (a.getJSON || a.postJSON)) return c.__requestJSON(b);
            if (a.WindVaneRequest) return c.__requestWindVane(b);
            throw new Error("UNEXCEPT_REQUEST::错误的请求类型")
        }).then(a).then(function () {
            var a = c.options,
                b = (c.params, a.results[0]),
                d = b && b.ret || [];
            b.ret = d, d instanceof Array && (d = d.join(","));
            var e = b.c;
            a.CDR && e && i(y, e, {
                domain: a.pageDomain,
                path: "/"
            }), d.indexOf("SUCCESS") > -1 ? b.retType = v.SUCCESS : b.retType = v.ERROR, a.retJson = b
        })
    }, n.prototype.__sequence = function (a) {
        function b(a) {
            if (a instanceof Array) a.forEach(b);
            else {
                var g, h = c(),
                    i = c();
                e.push(function () {
                    return h = c(), g = a.call(d, function (a) {
                        return h.resolve(a), i.promise
                    }, function (a) {
                        return h.reject(a), i.promise
                    }), g && (g = g["catch"](function (a) {
                        h.reject(a)
                    })), h.promise
                }), f.push(function (a) {
                    return i.resolve(a), g
                })
            }
        }
        var d = this,
            e = [],
            f = [];
        a.forEach(b);
        for (var g, h = r; g = e.shift();) h = h.then(g);
        for (; g = f.pop();) h = h.then(g);
        return h
    };
    var C = function (a) {
            a()
        },
        D = function (a) {
            a()
        };
    n.prototype.request = function (b) {
        var c = this;
        this.options = d(b || {}, t);
        var e = o.resolve([C, D]).then(function (a) {
            var b = a[0],
                d = a[1];
            return c.__sequence([b, c.__processRequestMethod, c.__processRequestType, c.__processToken, c.__processRequestUrl, c.middlewares, c.__processRequest, d])
        }).then(function () {
            var a = c.options.retJson;
            return a.retType !== v.SUCCESS ? o.reject(a) : c.options.successCallback ? void c.options.successCallback(a) : o.resolve(a)
        })["catch"](function (a) {
            var b;
            return a instanceof Error ? (console.error(a.stack), b = {
                ret: [a.message],
                stack: [a.stack],
                retJson: v.ERROR
            }) : b = "string" == typeof a ? {
                ret: [a],
                retJson: v.ERROR
            } : void 0 !== a ? a : c.options.retJson, c.options.failureCallback ? void c.options.failureCallback(b) : o.reject(b)
        });
        return this.__processRequestType(), c.options.H5Request && (c.constructor.__firstProcessor || (c.constructor.__firstProcessor = e), C = function (a) {
            c.constructor.__firstProcessor.then(a)["catch"](a)
        }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (b.pageDomain = b.pageDomain || g(a.location.hostname), b.mainDomain !== b.pageDomain && (b.maxRetryTimes = 4, b.CDR = !0)), e
    }, b.mtop = function (a) {
        return new n(a)
    }, b.mtop.request = function (a, b, c) {
        var d = {
            H5Request: a.H5Request,
            WindVaneRequest: a.WindVaneRequest,
            LoginRequest: a.LoginRequest,
            AntiCreep: a.AntiCreep,
            AntiFlood: a.AntiFlood,
            successCallback: b,
            failureCallback: c || b
        };
        return new n(a).request(d)
    }, b.mtop.H5Request = function (a, b, c) {
        var d = {
            H5Request: !0,
            successCallback: b,
            failureCallback: c || b
        };
        return new n(a).request(d)
    }, b.mtop.middlewares = u, b.mtop.config = t, b.mtop.RESPONSE_TYPE = v, b.mtop.CLASS = n
}(window, window.lib || (window.lib = {})),
function (a, b) {
    function c(a) {
        return a.preventDefault(), !1
    }

    function d(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
        return b ? b[1] : void 0
    }

    function e(b, d) {
        var e = this,
            f = a.dpr || 1,
            g = document.createElement("div"),
            h = document.documentElement.getBoundingClientRect(),
            i = Math.max(h.width, window.innerWidth) / f,
            j = Math.max(h.height, window.innerHeight) / f;
        g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:999999", "position:" + (i > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (i > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
        var k = document.createElement("div");
        k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), k.innerText = b;
        var l = document.createElement("a");
        l.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), l.innerText = "关闭";
        var m = document.createElement("iframe");
        m.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), i > 800 && (k.style.cssText = ["width:370px", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:" + (i / 2 - 185) + "px", "top:40px", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), m.style.cssText = ["position:absolute", "top:92px", "left:" + (i / 2 - 185) + "px", "width:370px", "height:480px", "border:0", "background:#FFF", "overflow:hidden"].join(";")), k.appendChild(l), g.appendChild(k), g.appendChild(m), g.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(g), m.src = d, l.addEventListener("click", function () {
            e.hide();
            var a = document.createEvent("HTMLEvents");
            a.initEvent("close", !1, !1), g.dispatchEvent(a)
        }, !1), this.addEventListener = function () {
            g.addEventListener.apply(g, arguments)
        }, this.removeEventListener = function () {
            g.removeEventListener.apply(g, arguments)
        }, this.show = function () {
            document.addEventListener("touchmove", c, !1), g.style.display = "block", window.scrollTo(0, 0)
        }, this.hide = function () {
            document.removeEventListener("touchmove", c), window.scrollTo(0, -h.top), g.parentNode && g.parentNode.removeChild(g)
        }
    }

    function f(a) {
        var c = this,
            d = this.options,
            e = this.params;
        return a().then(function () {
            var a = d.retJson,
                f = a.ret,
                g = navigator.userAgent.toLowerCase(),
                h = g.indexOf("safari") > -1 && g.indexOf("chrome") < 0 && g.indexOf("qqbrowser") < 0;
            if (f instanceof Array && (f = f.join(",")), (f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1) && (a.retType = l.SESSION_EXPIRED, !d.WindVaneRequest && (k.LoginRequest === !0 || d.LoginRequest === !0 || e.needLogin === !0))) {
                if (!b.login) throw new Error("LOGIN_NOT_FOUND::缺少lib.login");
                if (d.safariGoLogin !== !0 || !h || "taobao.com" === d.pageDomain) return b.login.goLoginAsync().then(function (a) {
                    return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])
                })["catch"](function (a) {
                    throw "CANCEL" === a ? new Error("LOGIN_CANCEL::用户取消登录") : new Error("LOGIN_FAILURE::用户登录失败")
                });
                b.login.goLogin()
            }
        })
    }

    function g(a) {
        var b = this.options;
        this.params;
        return b.H5Request !== !0 || k.AntiFlood !== !0 && b.AntiFlood !== !0 ? void a() : a().then(function () {
            var a = b.retJson,
                c = a.ret;
            c instanceof Array && (c = c.join(",")), c.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a.data.url && (b.AntiFloodReferer ? location.href = a.data.url.replace(/(http_referer=).+/, "$1" + b.AntiFloodReferer) : location.href = a.data.url)
        })
    }

    function h(b) {
        var c = this,
            f = this.options,
            g = this.params;
        return g.forceAntiCreep !== !0 && f.H5Request !== !0 || k.AntiCreep !== !0 && f.AntiCreep !== !0 ? void b() : b().then(function () {
            var b = f.retJson,
                h = b.ret;
            if (h instanceof Array && (h = h.join(",")), h.indexOf("RGV587_ERROR::SM") > -1 && b.data.url) {
                var j = "_m_h5_smt",
                    k = d(j),
                    l = !1;
                if (f.saveAntiCreepToken === !0 && k) {
                    k = JSON.parse(k);
                    for (var m in k) g[m] && (l = !0)
                }
                if (f.saveAntiCreepToken === !0 && k && !l) {
                    for (var m in k) g[m] = k[m];
                    return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])
                }
                return new i(function (d, h) {
                    function i() {
                        m.removeEventListener("close", i), a.removeEventListener("message", k), h("USER_INPUT_CANCEL::用户取消输入")
                    }

                    function k(b) {
                        var e;
                        try {
                            e = JSON.parse(b.data) || {}
                        } catch (l) {}
                        if (e && "child" === e.type) {
                            m.removeEventListener("close", i), a.removeEventListener("message", k), m.hide();
                            var n;
                            try {
                                n = JSON.parse(decodeURIComponent(e.content)), "string" == typeof n && (n = JSON.parse(n));
                                for (var o in n) g[o] = n[o];
                                f.saveAntiCreepToken === !0 ? (document.cookie = j + "=" + JSON.stringify(n) + ";", a.location.reload()) : c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]).then(d)
                            } catch (l) {
                                h("USER_INPUT_FAILURE::用户输入失败")
                            }
                        }
                    }
                    var l = b.data.url,
                        m = new e("", l);
                    m.addEventListener("close", i, !1), a.addEventListener("message", k, !1), m.show()
                })
            }
        })
    }
    if (!b || !b.mtop || b.mtop.ERROR) throw new Error("Mtop 初始化失败！请参考Mtop文档http://gitlab.alibaba-inc.com/mtb/lib-mtop");
    var i = a.Promise,
        j = b.mtop.CLASS,
        k = b.mtop.config,
        l = b.mtop.RESPONSE_TYPE;
    b.mtop.middlewares.push(f), b.mtop.loginRequest = function (a, b, c) {
        var d = {
            LoginRequest: !0,
            H5Request: !0,
            successCallback: b,
            failureCallback: c || b
        };
        return new j(a).request(d)
    }, b.mtop.antiFloodRequest = function (a, b, c) {
        var d = {
            AntiFlood: !0,
            successCallback: b,
            failureCallback: c || b
        };
        return new j(a).request(d)
    }, b.mtop.middlewares.push(g), b.mtop.antiCreepRequest = function (a, b, c) {
        var d = {
            AntiCreep: !0,
            successCallback: b,
            failureCallback: c || b
        };
        return new j(a).request(d)
    }, b.mtop.middlewares.push(h)
}(window, window.lib || (window.lib = {}));