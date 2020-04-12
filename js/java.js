/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a, b) {
        b = b || ca;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    function d(a) {
        var b = !!a && "length" in a && a.length,
            c = pa.type(a);
        return "function" !== c && !pa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function e(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function f(a, b, c) {
        return pa.isFunction(b) ? pa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? pa.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? pa.grep(a, function(a) {
            return ha.call(b, a) > -1 !== c
        }) : za.test(b) ? pa.filter(b, a, c) : (b = pa.filter(b, a), pa.grep(a, function(a) {
            return ha.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }

    function g(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function h(a) {
        var b = {};
        return pa.each(a.match(Ea) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function i(a) {
        return a
    }

    function j(a) {
        throw a
    }

    function k(a, b, c, d) {
        var e;
        try {
            a && pa.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && pa.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }

    function l() {
        ca.removeEventListener("DOMContentLoaded", l), a.removeEventListener("load", l), pa.ready()
    }

    function m() {
        this.expando = pa.expando + m.uid++
    }

    function n(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : La.test(a) ? JSON.parse(a) : a)
    }

    function o(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Ma, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                try {
                    c = n(c)
                } catch (a) {}
                Ka.set(a, b, c)
            } else c = void 0;
        return c
    }

    function p(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return pa.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (pa.cssNumber[b] ? "" : "px"),
            k = (pa.cssNumber[b] || "px" !== j && +i) && Oa.exec(pa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, pa.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function q(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = Sa[d];
        return e || (b = c.body.appendChild(c.createElement(d)), e = pa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Sa[d] = e, e)
    }

    function r(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ja.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Qa(d) && (e[f] = q(d))) : "none" !== c && (e[f] = "none", Ja.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function s(a, b) {
        var c;
        return c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && e(a, b) ? pa.merge([a], c) : c
    }

    function t(a, b) {
        for (var c = 0, d = a.length; c < d; c++) Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"))
    }

    function u(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if ((f = a[n]) || 0 === f)
                if ("object" === pa.type(f)) pa.merge(m, f.nodeType ? [f] : f);
                else if (Xa.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Ua.exec(f) || ["", ""])[1].toLowerCase(), i = Wa[h] || Wa._default, g.innerHTML = i[1] + pa.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            pa.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++];)
            if (d && pa.inArray(f, d) > -1) e && e.push(f);
            else if (j = pa.contains(f.ownerDocument, f), g = s(l.appendChild(f), "script"), j && t(g), c)
            for (k = 0; f = g[k++];) Va.test(f.type || "") && c.push(f);
        return l
    }

    function v() {
        return !0
    }

    function w() {
        return !1
    }

    function x() {
        try {
            return ca.activeElement
        } catch (a) {}
    }

    function y(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) y(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = w;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return pa().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = pa.guid++)), a.each(function() {
            pa.event.add(this, b, e, d, c)
        })
    }

    function z(a, b) {
        return e(a, "table") && e(11 !== b.nodeType ? b : b.firstChild, "tr") ? pa(">tbody", a)[0] || a : a
    }

    function A(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function B(a) {
        var b = db.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function C(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Ja.hasData(a) && (f = Ja.access(a), g = Ja.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) pa.event.add(b, e, j[e][c])
            }
            Ka.hasData(a) && (h = Ka.access(a), i = pa.extend({}, h), Ka.set(b, i))
        }
    }

    function D(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ta.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function E(a, b, d, e) {
        b = fa.apply([], b);
        var f, g, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            o = b[0],
            p = pa.isFunction(o);
        if (p || m > 1 && "string" == typeof o && !na.checkClone && cb.test(o)) return a.each(function(c) {
            var f = a.eq(c);
            p && (b[0] = o.call(this, c, f.html())), E(f, b, d, e)
        });
        if (m && (f = u(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (h = pa.map(s(f, "script"), A), i = h.length; l < m; l++) j = f, l !== n && (j = pa.clone(j, !0, !0), i && pa.merge(h, s(j, "script"))), d.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, pa.map(h, B), l = 0; l < i; l++) j = h[l], Va.test(j.type || "") && !Ja.access(j, "globalEval") && pa.contains(k, j) && (j.src ? pa._evalUrl && pa._evalUrl(j.src) : c(j.textContent.replace(eb, ""), k))
        }
        return a
    }

    function F(a, b, c) {
        for (var d, e = b ? pa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || pa.cleanData(s(d)), d.parentNode && (c && pa.contains(d.ownerDocument, d) && t(s(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function G(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || hb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || pa.contains(a.ownerDocument, a) || (g = pa.style(a, b)), !na.pixelMarginRight() && gb.test(g) && fb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function H(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function I(a) {
        if (a in nb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = mb.length; c--;)
            if ((a = mb[c] + b) in nb) return a
    }

    function J(a) {
        var b = pa.cssProps[a];
        return b || (b = pa.cssProps[a] = I(a) || a), b
    }

    function K(a, b, c) {
        var d = Oa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function L(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += pa.css(a, c + Pa[f], !0, e)), d ? ("content" === c && (g -= pa.css(a, "padding" + Pa[f], !0, e)), "margin" !== c && (g -= pa.css(a, "border" + Pa[f] + "Width", !0, e))) : (g += pa.css(a, "padding" + Pa[f], !0, e), "padding" !== c && (g += pa.css(a, "border" + Pa[f] + "Width", !0, e)));
        return g
    }

    function M(a, b, c) {
        var d, e = hb(a),
            f = G(a, b, e),
            g = "border-box" === pa.css(a, "boxSizing", !1, e);
        return gb.test(f) ? f : (d = g && (na.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), (f = parseFloat(f) || 0) + L(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }

    function N(a, b, c, d, e) {
        return new N.prototype.init(a, b, c, d, e)
    }

    function O() {
        pb && (!1 === ca.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(O) : a.setTimeout(O, pa.fx.interval), pa.fx.tick())
    }

    function P() {
        return a.setTimeout(function() {
            ob = void 0
        }), ob = pa.now()
    }

    function Q(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Pa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function R(a, b, c) {
        for (var d, e = (U.tweeners[b] || []).concat(U.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function S(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && Qa(a),
            q = Ja.get(a, "fxshow");
        c.queue || (g = pa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, pa.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], qb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || pa.style(a, d)
            } if ((i = !pa.isEmptyObject(b)) || !pa.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = Ja.get(a, "display")), k = pa.css(a, "display"), "none" === k && (j ? k = j : (r([a], !0), j = a.style.display || j, k = pa.css(a, "display"), r([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === pa.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = Ja.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && r([a], !0), m.done(function() {
                p || r([a]), Ja.remove(a, "fxshow");
                for (d in n) pa.style(a, d, n[d])
            })), i = R(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function T(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = pa.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = pa.cssHooks[d]) && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function U(a, b, c) {
        var d, e, f = 0,
            g = U.prefilters.length,
            h = pa.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = ob || P(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: pa.extend({}, b),
                opts: pa.extend(!0, {
                    specialEasing: {},
                    easing: pa.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ob || P(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = pa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (T(k, j.opts.specialEasing); f < g; f++)
            if (d = U.prefilters[f].call(j, a, k, j.opts)) return pa.isFunction(d.stop) && (pa._queueHooks(j.elem, j.opts.queue).stop = pa.proxy(d.stop, d)), d;
        return pa.map(k, R, j), pa.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), pa.fx.timer(pa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j
    }

    function V(a) {
        return (a.match(Ea) || []).join(" ")
    }

    function W(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function X(a, b, c, d) {
        var e;
        if (Array.isArray(b)) pa.each(b, function(b, e) {
            c || Bb.test(a) ? d(a, e) : X(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== pa.type(b)) d(a, b);
        else
            for (e in b) X(a + "[" + e + "]", b[e], c, d)
    }

    function Y(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Ea) || [];
            if (pa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Z(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, pa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Nb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function $(a, b) {
        var c, d, e = pa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && pa.extend(!0, a, d), a
    }

    function _(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function aa(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f]))
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                        break
                    } if (!0 !== g)
                if (g && a.throws) b = g(b);
                else try {
                    b = g(b)
                } catch (a) {
                    return {
                        state: "parsererror",
                        error: g ? a : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    var ba = [],
        ca = a.document,
        da = Object.getPrototypeOf,
        ea = ba.slice,
        fa = ba.concat,
        ga = ba.push,
        ha = ba.indexOf,
        ia = {},
        ja = ia.toString,
        ka = ia.hasOwnProperty,
        la = ka.toString,
        ma = la.call(Object),
        na = {},
        oa = "3.2.1",
        pa = function(a, b) {
            return new pa.fn.init(a, b)
        },
        qa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ra = /^-ms-/,
        sa = /-([a-z])/g,
        ta = function(a, b) {
            return b.toUpperCase()
        };
    pa.fn = pa.prototype = {
        jquery: oa,
        constructor: pa,
        length: 0,
        toArray: function() {
            return ea.call(this)
        },
        get: function(a) {
            return null == a ? ea.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = pa.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return pa.each(this, a)
        },
        map: function(a) {
            return this.pushStack(pa.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ea.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ga,
        sort: ba.sort,
        splice: ba.splice
    }, pa.extend = pa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || pa.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (pa.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && pa.isPlainObject(c) ? c : {}, g[b] = pa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, pa.extend({
        expando: "jQuery" + (oa + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === pa.type(a)
        },
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = pa.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== ja.call(a)) && (!(b = da(a)) || "function" == typeof(c = ka.call(b, "constructor") && b.constructor) && la.call(c) === ma)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            c(a)
        },
        camelCase: function(a) {
            return a.replace(ra, "ms-").replace(sa, ta)
        },
        each: function(a, b) {
            var c, e = 0;
            if (d(a))
                for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++);
            else
                for (e in a)
                    if (!1 === b.call(a[e], e, a[e])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(qa, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (d(Object(a)) ? pa.merge(c, "string" == typeof a ? [a] : a) : ga.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : ha.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var e, f, g = 0,
                h = [];
            if (d(a))
                for (e = a.length; g < e; g++) null != (f = b(a[g], g, c)) && h.push(f);
            else
                for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
            return fa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), pa.isFunction(a)) return d = ea.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(ea.call(arguments)))
            }, e.guid = a.guid = a.guid || pa.guid++, e
        },
        now: Date.now,
        support: na
    }), "function" == typeof Symbol && (pa.fn[Symbol.iterator] = ba[Symbol.iterator]), pa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ia["[object " + b + "]"] = b.toLowerCase()
    });
    var ua =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9;
                if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                    if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) {
                            if (9 === o) {
                                if (!(g = b.getElementById(e))) return c;
                                if (g.id === e) return c.push(g), c
                            } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                        } else {
                            if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                        } if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== o) m = b, k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                        }
                        if (k) try {
                            return $.apply(c, m.querySelectorAll(k)), c
                        } catch (a) {} finally {
                            h === O && b.removeAttribute("id")
                        }
                    }
                }
                return C(a.replace(ha, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];

                return a
            }

            function d(a) {
                return a[O] = !0, a
            }

            function e(a) {
                var b = H.createElement("fieldset");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return function(b) {
                    return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a
                }
            }

            function k(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l(a) {
                return a && void 0 !== a.getElementsByTagName && a
            }

            function m() {}

            function n(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++;
                return b.first ? function(b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || g) return a(b, c, e);
                    return !1
                } : function(b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                                    if (k[f] = m, m[2] = a(b, c, i)) return !0
                                } return !1
                }
            }

            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                return d
            }

            function r(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function s(a, b, c, e, f, g) {
                return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || q(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? p : r(p, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function t(a) {
                for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                        return a === b
                    }, g, !0), j = o(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; h < e; h++)
                    if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                            for (d = ++h; d < e && !x.relative[a[d].type]; d++);
                            return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a))
                        }
                        k.push(c)
                    } return p(k)
            }

            function u(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || f && x.find.TAG("*", j),
                            u = Q += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                    if (m(k, g || H, h)) {
                                        i.push(k);
                                        break
                                    } j && (Q = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, q, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q)
                            }
                            $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (Q = u, D = s), p
                    };
                return e ? d(g) : g
            }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = function(a, b) {
                    return a === b && (F = !0), 0
                },
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da + "|[*])"),
                    ATTR: new RegExp("^" + ea),
                    PSEUDO: new RegExp("^" + fa),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                ua = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                wa = function(a, b) {
                    return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
                },
                xa = function() {
                    G()
                },
                ya = o(function(a) {
                    return !0 === a.disabled && ("form" in a || "label" in a)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
            } catch (a) {

                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            w = b.support = {}, z = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, G = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), w.getElementsByTagName = e(function(a) {
                    return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
                }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
                    return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
                }), w.getById ? (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }, x.find.ID = function(a, b) {
                    if (void 0 !== b.getElementById && J) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }) : (x.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }, x.find.ID = function(a, b) {
                    if (void 0 !== b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
                    return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
                    if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a)
                }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
                    I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
                }), e(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
                    w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
                }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = b ? function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f) return g(a, b);
                    for (c = a; c = c.parentNode;) h.unshift(c);
                    for (c = b; c = c.parentNode;) i.unshift(c);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                    var d = M.call(a, c);
                    if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {}
                return b(c, H, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== H && G(a), N(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = x.attrHandle[b.toLowerCase()],
                    d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.escape = function(a) {
                return (a + "").replace(va, wa)
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return E = null, a
            }, y = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += y(b);
                return c
            }, x = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ta, ua).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = S[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [Q, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), !1 === t)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                                return (t -= e) === d || t % d == 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = B(a.replace(ha, "$1"));
                        return e[O] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(ta, ua),
                            function(b) {
                                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function(b) {
                                var c;
                                do {
                                    if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === I
                    },
                    focus: function(a) {
                        return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: j(!1),
                    disabled: j(!0),
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !x.pseudos.empty(a)
                    },
                    header: function(a) {
                        return pa.test(a.nodeName)
                    },
                    input: function(a) {
                        return oa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (v in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[v] = h(v);
            for (v in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = T[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = x.preFilter; h;) {
                    d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ha, " ")
                    }), h = h.slice(d.length));
                    for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
            }, B = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)), f.selector = a
                }
                return f
            }, C = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && A(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                        if (!(b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                            if (f.splice(e, 1), !(a = d.length && n(f))) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
            }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), w.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
    pa.find = ua, pa.expr = ua.selectors, pa.expr[":"] = pa.expr.pseudos, pa.uniqueSort = pa.unique = ua.uniqueSort, pa.text = ua.getText, pa.isXMLDoc = ua.isXML, pa.contains = ua.contains, pa.escapeSelector = ua.escape;
    var va = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && pa(a).is(c)) break;
                    d.push(a)
                } return d
        },
        wa = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        xa = pa.expr.match.needsContext,
        ya = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        za = /^.[^:#\[\.,]*$/;
    pa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? pa.find.matchesSelector(d, a) ? [d] : [] : pa.find.matches(a, pa.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, pa.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(pa(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (pa.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) pa.find(a, e[b], c);
            return d > 1 ? pa.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(f(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(f(this, a || [], !0))
        },
        is: function(a) {
            return !!f(this, "string" == typeof a && xa.test(a) ? pa(a) : a || [], !1).length
        }
    });
    var Aa, Ba = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || Aa, "string" == typeof a) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Ba.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof pa ? b[0] : b, pa.merge(this, pa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ca, !0)), ya.test(d[1]) && pa.isPlainObject(b))
                    for (d in b) pa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return e = ca.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : pa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(pa) : pa.makeArray(a, this)
    }).prototype = pa.fn, Aa = pa(ca);
    var Ca = /^(?:parents|prev(?:Until|All))/,
        Da = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pa.fn.extend({
        has: function(a) {
            var b = pa(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (pa.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && pa(a);
            if (!xa.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && pa.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? pa.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ha.call(pa(a), this[0]) : ha.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(pa.uniqueSort(pa.merge(this.get(), pa(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), pa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return va(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return va(a, "parentNode", c)
        },
        next: function(a) {
            return g(a, "nextSibling")
        },
        prev: function(a) {
            return g(a, "previousSibling")
        },
        nextAll: function(a) {
            return va(a, "nextSibling")
        },
        prevAll: function(a) {
            return va(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return va(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return va(a, "previousSibling", c)
        },
        siblings: function(a) {
            return wa((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return wa(a.firstChild)
        },
        contents: function(a) {
            return e(a, "iframe") ? a.contentDocument : (e(a, "template") && (a = a.content || a), pa.merge([], a.childNodes))
        }
    }, function(a, b) {
        pa.fn[a] = function(c, d) {
            var e = pa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = pa.filter(d, e)), this.length > 1 && (Da[a] || pa.uniqueSort(e), Ca.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var Ea = /[^\x20\t\r\n\f]+/g;
    pa.Callbacks = function(a) {
        a = "string" == typeof a ? h(a) : pa.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            i = -1,
            j = function() {
                for (e = e || a.once, d = b = !0; g.length; i = -1)
                    for (c = g.shift(); ++i < f.length;) !1 === f[i].apply(c[0], c[1]) && a.stopOnFalse && (i = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            k = {
                add: function() {
                    return f && (c && !b && (i = f.length - 1, g.push(c)), function b(c) {
                        pa.each(c, function(c, d) {
                            pa.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== pa.type(d) && b(d)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return pa.each(arguments, function(a, b) {
                        for (var c;
                            (c = pa.inArray(b, f, c)) > -1;) f.splice(c, 1), c <= i && i--
                    }), this
                },
                has: function(a) {
                    return a ? pa.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || j()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, pa.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", pa.Callbacks("memory"), pa.Callbacks("memory"), 2],
                    ["resolve", "done", pa.Callbacks("once memory"), pa.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", pa.Callbacks("once memory"), pa.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    catch: function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return pa.Deferred(function(b) {
                            pa.each(c, function(c, d) {
                                var e = pa.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && pa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        function f(b, c, d, e) {
                            return function() {
                                var h = this,
                                    k = arguments,
                                    l = function() {
                                        var a, l;
                                        if (!(b < g)) {
                                            if ((a = d.apply(h, k)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                            l = a && ("object" == typeof a || "function" == typeof a) && a.then, pa.isFunction(l) ? e ? l.call(a, f(g, c, i, e), f(g, c, j, e)) : (g++, l.call(a, f(g, c, i, e), f(g, c, j, e), f(g, c, i, c.notifyWith))) : (d !== i && (h = void 0, k = [a]), (e || c.resolveWith)(h, k))
                                        }
                                    },
                                    m = e ? l : function() {
                                        try {
                                            l()
                                        } catch (a) {
                                            pa.Deferred.exceptionHook && pa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== j && (h = void 0, k = [a]), c.rejectWith(h, k))
                                        }
                                    };
                                b ? m() : (pa.Deferred.getStackHook && (m.stackTrace = pa.Deferred.getStackHook()), a.setTimeout(m))
                            }
                        }
                        var g = 0;
                        return pa.Deferred(function(a) {
                            c[0][3].add(f(0, a, pa.isFunction(e) ? e : i, a.notifyWith)), c[1][3].add(f(0, a, pa.isFunction(b) ? b : i)), c[2][3].add(f(0, a, pa.isFunction(d) ? d : j))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? pa.extend(a, e) : e
                    }
                },
                f = {};
            return pa.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = ea.call(arguments),
                f = pa.Deferred(),
                g = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? ea.call(arguments) : c, --b || f.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (k(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || pa.isFunction(e[c] && e[c].then))) return f.then();
            for (; c--;) k(e[c], g(c), f.reject);
            return f.promise()
        }
    });
    var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pa.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Fa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, pa.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Ga = pa.Deferred();
    pa.fn.ready = function(a) {
        return Ga.then(a).catch(function(a) {
            pa.readyException(a)
        }), this
    }, pa.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --pa.readyWait : pa.isReady) || (pa.isReady = !0, !0 !== a && --pa.readyWait > 0 || Ga.resolveWith(ca, [pa]))
        }
    }), pa.ready.then = Ga.then, "complete" === ca.readyState || "loading" !== ca.readyState && !ca.documentElement.doScroll ? a.setTimeout(pa.ready) : (ca.addEventListener("DOMContentLoaded", l), a.addEventListener("load", l));
    var Ha = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === pa.type(c)) {
                e = !0;
                for (h in c) Ha(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, pa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(pa(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Ia = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    m.uid = 1, m.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[pa.camelCase(b)] = c;
            else
                for (d in b) e[pa.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][pa.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(pa.camelCase) : (b = pa.camelCase(b), b = b in d ? [b] : b.match(Ea) || []), c = b.length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || pa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !pa.isEmptyObject(b)
        }
    };
    var Ja = new m,
        Ka = new m,
        La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ma = /[A-Z]/g;
    pa.extend({
        hasData: function(a) {
            return Ka.hasData(a) || Ja.hasData(a)
        },
        data: function(a, b, c) {
            return Ka.access(a, b, c)
        },
        removeData: function(a, b) {
            Ka.remove(a, b)
        },
        _data: function(a, b, c) {
            return Ja.access(a, b, c)
        },
        _removeData: function(a, b) {
            Ja.remove(a, b)
        }
    }), pa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Ka.get(f), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = pa.camelCase(d.slice(5)), o(f, d, e[d])));
                    Ja.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                Ka.set(this, a)
            }) : Ha(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (void 0 !== (c = Ka.get(f, a))) return c;
                    if (void 0 !== (c = o(f, a))) return c
                } else this.each(function() {
                    Ka.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                Ka.remove(this, a)
            })
        }
    }), pa.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = Ja.get(a, b), c && (!d || Array.isArray(c) ? d = Ja.access(a, b, pa.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = pa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = pa._queueHooks(a, b),
                g = function() {
                    pa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return Ja.get(a, c) || Ja.access(a, c, {
                empty: pa.Callbacks("once memory").add(function() {
                    Ja.remove(a, [b + "queue", c])
                })
            })
        }
    }), pa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? pa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = pa.queue(this, a, b);
                pa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && pa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                pa.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = pa.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = Ja.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"),
        Pa = ["Top", "Right", "Bottom", "Left"],
        Qa = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && pa.contains(a.ownerDocument, a) && "none" === pa.css(a, "display")
        },
        Ra = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Sa = {};
    pa.fn.extend({
        show: function() {
            return r(this, !0)
        },
        hide: function() {
            return r(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Qa(this) ? pa(this).show() : pa(this).hide()
            })
        }
    });
    var Ta = /^(?:checkbox|radio)$/i,
        Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Va = /^$|\/(?:java|ecma)script/i,
        Wa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Wa.optgroup = Wa.option, Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead, Wa.th = Wa.td;
    var Xa = /<|&#?\w+;/;
    ! function() {
        var a = ca.createDocumentFragment(),
            b = a.appendChild(ca.createElement("div")),
            c = ca.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), na.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", na.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ya = ca.documentElement,
        Za = /^key/,
        $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        _a = /^([^.]*)(?:\.(.+)|)/;
    pa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ja.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), e && pa.find.matchesSelector(Ya, e), c.guid || (c.guid = pa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return void 0 !== pa && pa.event.triggered !== b.type ? pa.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(Ea) || [""], j = b.length; j--;) h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = pa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = pa.event.special[n] || {}, k = pa.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && pa.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), pa.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ja.hasData(a) && Ja.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(Ea) || [""], j = b.length; j--;)
                    if (h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = pa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || pa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) pa.event.remove(a, n + b[j], c, d, !0);
                pa.isEmptyObject(i) && Ja.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b, c, d, e, f, g, h = pa.event.fix(a),
                i = new Array(arguments.length),
                j = (Ja.get(this, "events") || {})[h.type] || [],
                k = pa.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
                for (g = pa.event.handlers.call(this, h, j), b = 0;
                    (e = g[b++]) && !h.isPropagationStopped();)
                    for (h.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, void 0 !== (d = ((pa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? pa(e, this).index(j) > -1 : pa.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    } return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(pa.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: pa.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[pa.expando] ? a : new pa.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && e(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return e(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, pa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, pa.Event = function(a, b) {
        if (!(this instanceof pa.Event)) return new pa.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? v : w, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && pa.extend(this, b), this.timeStamp = a && a.timeStamp || pa.now(), this[pa.expando] = !0
    }, pa.Event.prototype = {
        constructor: pa.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = v, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = v, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = v, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pa.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && Za.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && $a.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, pa.event.addProp), pa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        pa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || pa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), pa.fn.extend({
        on: function(a, b, c, d) {
            return y(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return y(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, pa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = w), this.each(function() {
                pa.event.remove(this, a, c, b)
            })
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        bb = /<script|<style|<link/i,
        cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        db = /^true\/(.*)/,
        eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pa.extend({
        htmlPrefilter: function(a) {
            return a.replace(ab, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = pa.contains(a.ownerDocument, a);
            if (!(na.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || pa.isXMLDoc(a)))
                for (g = s(h), f = s(a), d = 0, e = f.length; d < e; d++) D(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || s(a), g = g || s(h), d = 0, e = f.length; d < e; d++) C(f[d], g[d]);
                else C(a, h);
            return g = s(h, "script"), g.length > 0 && t(g, !i && s(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = pa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (Ia(c)) {
                    if (b = c[Ja.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? pa.event.remove(c, d) : pa.removeEvent(c, d, b.handle);
                        c[Ja.expando] = void 0
                    }
                    c[Ka.expando] && (c[Ka.expando] = void 0)
                }
        }
    }), pa.fn.extend({
        detach: function(a) {
            return F(this, a, !0)
        },
        remove: function(a) {
            return F(this, a)
        },
        text: function(a) {
            return Ha(this, function(a) {
                return void 0 === a ? pa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    z(this, a).appendChild(a)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = z(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (pa.cleanData(s(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return pa.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ha(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !bb.test(a) && !Wa[(Ua.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = pa.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (pa.cleanData(s(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return E(this, arguments, function(b) {
                var c = this.parentNode;
                pa.inArray(this, a) < 0 && (pa.cleanData(s(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), pa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        pa.fn[a] = function(a) {
            for (var c, d = [], e = pa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), pa(e[g])[b](c), ga.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var fb = /^margin/,
        gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
        hb = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (h) {
                h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ya.appendChild(g);
                var b = a.getComputedStyle(h);
                c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Ya.removeChild(g), h = null
            }
        }
        var c, d, e, f, g = ca.createElement("div"),
            h = ca.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", na.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), pa.extend(na, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), d
            },
            pixelMarginRight: function() {
                return b(), e
            },
            reliableMarginLeft: function() {
                return b(), f
            }
        }))
    }();
    var ib = /^(none|table(?!-c[ea]).+)/,
        jb = /^--/,
        kb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mb = ["Webkit", "Moz", "ms"],
        nb = ca.createElement("div").style;
    pa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = G(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = pa.camelCase(b),
                    i = jb.test(b),
                    j = a.style;
                if (i || (b = J(h)), g = pa.cssHooks[b] || pa.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b];
                f = typeof c, "string" === f && (e = Oa.exec(c)) && e[1] && (c = p(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (pa.cssNumber[h] ? "" : "px")), na.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = pa.camelCase(b);
            return jb.test(b) || (b = J(h)), g = pa.cssHooks[b] || pa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = G(a, b, d)), "normal" === e && b in lb && (e = lb[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e
        }
    }), pa.each(["height", "width"], function(a, b) {
        pa.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !ib.test(pa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? M(a, b, d) : Ra(a, kb, function() {
                    return M(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && hb(a),
                    g = d && L(a, b, d, "border-box" === pa.css(a, "boxSizing", !1, f), f);
                return g && (e = Oa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = pa.css(a, b)), K(a, c, g)
            }
        }
    }), pa.cssHooks.marginLeft = H(na.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(G(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), pa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        pa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, fb.test(a) || (pa.cssHooks[a + b].set = K)
    }), pa.fn.extend({
        css: function(a, b) {
            return Ha(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) {
                    for (d = hb(a), e = b.length; g < e; g++) f[b[g]] = pa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? pa.style(a, b, c) : pa.css(a, b)
            }, a, b, arguments.length > 1)
        }
    }), pa.Tween = N, N.prototype = {
        constructor: N,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || pa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (pa.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = N.propHooks[this.prop];
            return a && a.get ? a.get(this) : N.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = N.propHooks[this.prop];
            return this.options.duration ? this.pos = b = pa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = pa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                pa.fx.step[a.prop] ? pa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[pa.cssProps[a.prop]] && !pa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : pa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, pa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, pa.fx = N.prototype.init, pa.fx.step = {};
    var ob, pb, qb = /^(?:toggle|show|hide)$/,
        rb = /queueHooks$/;
    pa.Animation = pa.extend(U, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return p(c.elem, a, Oa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                pa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ea);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], U.tweeners[c] = U.tweeners[c] || [], U.tweeners[c].unshift(b)
            },
            prefilters: [S],
            prefilter: function(a, b) {
                b ? U.prefilters.unshift(a) : U.prefilters.push(a)
            }
        }), pa.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? pa.extend({}, a) : {
                complete: c || !c && b || pa.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !pa.isFunction(b) && b
            };
            return pa.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in pa.fx.speeds ? d.duration = pa.fx.speeds[d.duration] : d.duration = pa.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                pa.isFunction(d.old) && d.old.call(this), d.queue && pa.dequeue(this, d.queue)
            }, d
        }, pa.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(Qa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = pa.isEmptyObject(a),
                    f = pa.speed(b, c, d),
                    g = function() {
                        var b = U(this, pa.extend({}, a), f);
                        (e || Ja.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = pa.timers,
                        g = Ja.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || pa.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = Ja.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = pa.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, pa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), pa.each(["toggle", "show", "hide"], function(a, b) {
            var c = pa.fn[b];
            pa.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Q(b, !0), a, d, e)
            }
        }), pa.each({
            slideDown: Q("show"),
            slideUp: Q("hide"),
            slideToggle: Q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            pa.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), pa.timers = [], pa.fx.tick = function() {
            var a, b = 0,
                c = pa.timers;
            for (ob = pa.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || pa.fx.stop(), ob = void 0
        }, pa.fx.timer = function(a) {
            pa.timers.push(a), pa.fx.start()
        }, pa.fx.interval = 13, pa.fx.start = function() {
            pb || (pb = !0, O())
        }, pa.fx.stop = function() {
            pb = null
        }, pa.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, pa.fn.delay = function(b, c) {
            return b = pa.fx ? pa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = ca.createElement("input"),
                b = ca.createElement("select"),
                c = b.appendChild(ca.createElement("option"));
            a.type = "checkbox", na.checkOn = "" !== a.value, na.optSelected = c.selected, a = ca.createElement("input"), a.value = "t", a.type = "radio", na.radioValue = "t" === a.value
        }();
    var sb, tb = pa.expr.attrHandle;
    pa.fn.extend({
        attr: function(a, b) {
            return Ha(this, pa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                pa.removeAttr(this, a)
            })
        }
    }), pa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? pa.prop(a, b, c) : (1 === f && pa.isXMLDoc(a) || (e = pa.attrHooks[b.toLowerCase()] || (pa.expr.match.bool.test(b) ? sb : void 0)), void 0 !== c ? null === c ? void pa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = pa.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!na.radioValue && "radio" === b && e(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(Ea);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), sb = {
        set: function(a, b, c) {
            return !1 === b ? pa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, pa.each(pa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = tb[b] || pa.find.attr;
        tb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = tb[g], tb[g] = e, e = null != c(a, b, d) ? g : null, tb[g] = f), e
        }
    });
    var ub = /^(?:input|select|textarea|button)$/i,
        vb = /^(?:a|area)$/i;
    pa.fn.extend({
        prop: function(a, b) {
            return Ha(this, pa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[pa.propFix[a] || a]
            })
        }
    }), pa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && pa.isXMLDoc(a) || (b = pa.propFix[b] || b, e = pa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = pa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : ub.test(a.nodeName) || vb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), na.optSelected || (pa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), pa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pa.propFix[this.toLowerCase()] = this
    }), pa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (pa.isFunction(a)) return this.each(function(b) {
                pa(this).addClass(a.call(this, b, W(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(Ea) || []; c = this[i++];)
                    if (e = W(c), d = 1 === c.nodeType && " " + V(e) + " ") {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = V(d), e !== h && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (pa.isFunction(a)) return this.each(function(b) {
                pa(this).removeClass(a.call(this, b, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Ea) || []; c = this[i++];)
                    if (e = W(c), d = 1 === c.nodeType && " " + V(e) + " ") {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = V(d), e !== h && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : pa.isFunction(a) ? this.each(function(c) {
                pa(this).toggleClass(a.call(this, c, W(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = pa(this), f = a.match(Ea) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = W(this), b && Ja.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Ja.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + V(W(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var wb = /\r/g;
    pa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = pa.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, pa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = pa.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = pa.valHooks[this.type] || pa.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return (b = pa.valHooks[e.type] || pa.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(wb, "") : null == c ? "" : c)
            }
        }
    }), pa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = pa.find.attr(a, "value");
                    return null != b ? b : V(pa.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, f = a.options,
                        g = a.selectedIndex,
                        h = "select-one" === a.type,
                        i = h ? null : [],
                        j = h ? g + 1 : f.length;
                    for (d = g < 0 ? j : h ? g : 0; d < j; d++)
                        if (c = f[d], (c.selected || d === g) && !c.disabled && (!c.parentNode.disabled || !e(c.parentNode, "optgroup"))) {
                            if (b = pa(c).val(), h) return b;
                            i.push(b)
                        } return i
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = pa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = pa.inArray(pa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), pa.each(["radio", "checkbox"], function() {
        pa.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = pa.inArray(pa(a).val(), b) > -1
            }
        }, na.checkOn || (pa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var xb = /^(?:focusinfocus|focusoutblur)$/;
    pa.extend(pa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || ca],
                n = ka.call(b, "type") ? b.type : b,
                o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || ca, 3 !== d.nodeType && 8 !== d.nodeType && !xb.test(n + pa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[pa.expando] ? b : new pa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : pa.makeArray(c, [b]), l = pa.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                if (!e && !l.noBubble && !pa.isWindow(d)) {
                    for (i = l.delegateType || n, xb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || ca) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && Ia(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !Ia(d) || j && pa.isFunction(d[n]) && !pa.isWindow(d) && (h = d[j], h && (d[j] = null), pa.event.triggered = n, d[n](), pa.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = pa.extend(new pa.Event, c, {
                type: a,
                isSimulated: !0
            });
            pa.event.trigger(d, null, b)
        }
    }), pa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                pa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return pa.event.trigger(a, b, c, !0)
        }
    }), pa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        pa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), pa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), na.focusin = "onfocusin" in a, na.focusin || pa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            pa.event.simulate(b, a.target, pa.event.fix(a))
        };
        pa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = Ja.access(d, b);
                e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = Ja.access(d, b) - 1;
                e ? Ja.access(d, b, e) : (d.removeEventListener(a, c, !0), Ja.remove(d, b))
            }
        }
    });
    var yb = a.location,
        zb = pa.now(),
        Ab = /\?/;
    pa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || pa.error("Invalid XML: " + b), c
    };
    var Bb = /\[\]$/,
        Cb = /\r?\n/g,
        Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;
    pa.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = pa.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !pa.isPlainObject(a)) pa.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) X(c, a[c], b, e);
        return d.join("&")
    }, pa.fn.extend({
        serialize: function() {
            return pa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = pa.prop(this, "elements");
                return a ? pa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !pa(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !Ta.test(a))
            }).map(function(a, b) {
                var c = pa(this).val();
                return null == c ? null : Array.isArray(c) ? pa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                }
            }).get()
        }
    });
    var Fb = /%20/g,
        Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = {},
        Nb = {},
        Ob = "*/".concat("*"),
        Pb = ca.createElement("a");
    Pb.href = yb.href, pa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yb.href,
            type: "GET",
            isLocal: Jb.test(yb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ob,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? $($(a, pa.ajaxSettings), b) : $(pa.ajaxSettings, a)
        },
        ajaxPrefilter: Y(Mb),
        ajaxTransport: Y(Nb),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, m, n, u, v, w = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = _(o, x, d)), u = aa(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (pa.lastModified[f] = v), (v = x.getResponseHeader("etag")) && (pa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --pa.active || pa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = pa.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? pa(p) : pa.event,
                r = pa.Deferred(),
                s = pa.Callbacks("once memory"),
                t = o.statusCode || {},
                u = {},
                v = {},
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Ib.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) x.always(a[x.status]);
                            else
                                for (b in a) t[b] = [t[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (r.promise(x), o.url = ((b || o.url || yb.href) + "").replace(Lb, yb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [""], null == o.crossDomain) {
                j = ca.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Pb.protocol + "//" + Pb.host != j.protocol + "//" + j.host
                } catch (a) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = pa.param(o.data, o.traditional)), Z(Mb, o, c, x), k) return x;
            l = pa.event && o.global, l && 0 == pa.active++ && pa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Kb.test(o.type), f = o.url.replace(Gb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Fb, "+")) : (n = o.url.slice(f.length), o.data && (f += (Ab.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Hb, "$1"), n = (Ab.test(f) ? "&" : "?") + "_=" + zb++ + n), o.url = f + n), o.ifModified && (pa.lastModified[f] && x.setRequestHeader("If-Modified-Since", pa.lastModified[f]), pa.etag[f] && x.setRequestHeader("If-None-Match", pa.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Ob + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
            if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = Z(Nb, o, c, x)) {
                if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(u, d)
                } catch (a) {
                    if (k) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, c) {
            return pa.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return pa.get(a, void 0, b, "script")
        }
    }), pa.each(["get", "post"], function(a, b) {
        pa[b] = function(a, c, d, e) {
            return pa.isFunction(c) && (e = e || d, d = c, c = void 0), pa.ajax(pa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, pa.isPlainObject(a) && a))
        }
    }), pa._evalUrl = function(a) {
        return pa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, pa.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (pa.isFunction(a) && (a = a.call(this[0])), b = pa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return pa.isFunction(a) ? this.each(function(b) {
                pa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = pa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = pa.isFunction(a);
            return this.each(function(c) {
                pa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                pa(this).replaceWith(this.childNodes)
            }), this
        }
    }), pa.expr.pseudos.hidden = function(a) {
        return !pa.expr.pseudos.visible(a)
    }, pa.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, pa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    };
    var Qb = {
            0: 200,
            1223: 204
        },
        Rb = pa.ajaxSettings.xhr();
    na.cors = !!Rb && "withCredentials" in Rb, na.ajax = Rb = !!Rb, pa.ajaxTransport(function(b) {
        var c, d;
        if (na.cors || Rb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Qb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (a) {
                    if (c) throw a
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), pa.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), pa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return pa.globalEval(a), a
            }
        }
    }), pa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), pa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = pa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), ca.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Sb = [],
        Tb = /(=)\?(?=&|$)|\?\?/;
    pa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Sb.pop() || pa.expando + "_" + zb++;
            return this[a] = !0, a
        }
    }), pa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Tb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Tb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = pa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Tb, "$1" + e) : !1 !== b.jsonp && (b.url += (Ab.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || pa.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? pa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Sb.push(e)), g && pa.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), na.createHTMLDocument = function() {
        var a = ca.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), pa.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (na.createHTMLDocument ? (b = ca.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ca.location.href, b.head.appendChild(d)) : b = ca), e = ya.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = u([a], b, f), f && f.length && pa(f).remove(), pa.merge([], e.childNodes))
    }, pa.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = V(a.slice(h)), a = a.slice(0, h)), pa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && pa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? pa("<div>").append(pa.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, pa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        pa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), pa.expr.pseudos.animated = function(a) {
        return pa.grep(pa.timers, function(b) {
            return a === b.elem
        }).length
    }, pa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = pa.css(a, "position"),
                l = pa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = pa.css(a, "top"), i = pa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), pa.isFunction(b) && (b = b.call(a, c, pa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, pa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                pa.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === pa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), e(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + pa.css(a[0], "borderTopWidth", !0),
                    left: d.left + pa.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - pa.css(c, "marginTop", !0),
                    left: b.left - d.left - pa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === pa.css(a, "position");) a = a.offsetParent;
                return a || Ya
            })
        }
    }), pa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        pa.fn[a] = function(d) {
            return Ha(this, function(a, d, e) {
                var f;
                if (pa.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e) return f ? f[b] : a[d];
                f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e
            }, a, d, arguments.length)
        }
    }), pa.each(["top", "left"], function(a, b) {
        pa.cssHooks[b] = H(na.pixelPosition, function(a, c) {
            if (c) return c = G(a, b), gb.test(c) ? pa(a).position()[b] + "px" : c
        })
    }), pa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        pa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            pa.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (!0 === e || !0 === f ? "margin" : "border");
                return Ha(this, function(b, c, e) {
                    var f;
                    return pa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? pa.css(b, c, h) : pa.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), pa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), pa.holdReady = function(a) {
        a ? pa.readyWait++ : pa.ready(!0)
    }, pa.isArray = Array.isArray, pa.parseJSON = JSON.parse, pa.nodeName = e, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pa
    });
    var Ub = a.jQuery,
        Vb = a.$;
    return pa.noConflict = function(b) {
        return a.$ === pa && (a.$ = Vb), b && a.jQuery === pa && (a.jQuery = Ub), pa
    }, b || (a.jQuery = a.$ = pa), pa
}),
/*!
 * Lightbox v2.10.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2018 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery)
}(this, function(a) {
    function b(b) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b)
    }
    return b.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, b.prototype.option = function(b) {
        a.extend(this.options, b)
    }, b.prototype.imageCountLabel = function(a, b) {
        return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b)
    }, b.prototype.init = function() {
        var b = this;
        a(document).ready(function() {
            b.enable(), b.build()
        })
    }, b.prototype.enable = function() {
        var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) {
            return b.start(a(c.currentTarget)), !1
        })
    }, b.prototype.build = function() {
        if (!(a("#lightbox").length > 0)) {
            var b = this;
            a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
                top: parseInt(this.$container.css("padding-top"), 10),
                right: parseInt(this.$container.css("padding-right"), 10),
                bottom: parseInt(this.$container.css("padding-bottom"), 10),
                left: parseInt(this.$container.css("padding-left"), 10)
            }, this.imageBorderWidth = {
                top: parseInt(this.$image.css("border-top-width"), 10),
                right: parseInt(this.$image.css("border-right-width"), 10),
                bottom: parseInt(this.$image.css("border-bottom-width"), 10),
                left: parseInt(this.$image.css("border-left-width"), 10)
            }, this.$overlay.hide().on("click", function() {
                return b.end(), !1
            }), this.$lightbox.hide().on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(), !1
            }), this.$outerContainer.on("click", function(c) {
                return "lightbox" === a(c.target).attr("id") && b.end(), !1
            }), this.$lightbox.find(".lb-prev").on("click", function() {
                return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1
            }), this.$lightbox.find(".lb-next").on("click", function() {
                return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1
            }), this.$nav.on("mousedown", function(a) {
                3 === a.which && (b.$nav.css("pointer-events", "none"), b.$lightbox.one("contextmenu", function() {
                    setTimeout(function() {
                        this.$nav.css("pointer-events", "auto")
                    }.bind(b), 0)
                }))
            }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() {
                return b.end(), !1
            })
        }
    }, b.prototype.start = function(b) {
        function c(a) {
            d.album.push({
                alt: a.attr("data-alt"),
                link: a.attr("href"),
                title: a.attr("data-title") || a.attr("title")
            })
        }
        var d = this,
            e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({
            visibility: "hidden"
        }), this.sizeOverlay(), this.album = [];
        var f, g = 0,
            h = b.attr("data-lightbox");
        if (h) {
            f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]');
            for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i)
        } else if ("lightbox" === b.attr("rel")) c(b);
        else {
            f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]');
            for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j)
        }
        var k = e.scrollTop() + this.options.positionFromTop,
            l = e.scrollLeft();
        this.$lightbox.css({
            top: k + "px",
            left: l + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("html").addClass("lb-disable-scrolling"), this.changeImage(g)
    }, b.prototype.changeImage = function(b) {
        var c = this;
        this.disableKeyboardNav();
        var d = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var e = new Image;
        e.onload = function() {
            var f, g, h, i, j, k;
            d.attr({
                alt: c.album[b].alt,
                src: c.album[b].link
            }), a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (k = a(window).width(), j = a(window).height(), i = k - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, h = j - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - 120, c.options.maxWidth && c.options.maxWidth < i && (i = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < i && (h = c.options.maxHeight), (e.width > i || e.height > h) && (e.width / i > e.height / h ? (g = i, f = parseInt(e.height / (e.width / g), 10), d.width(g), d.height(f)) : (f = h, g = parseInt(e.width / (e.height / f), 10), d.width(g), d.height(f)))), c.sizeContainer(d.width(), d.height())
        }, e.src = this.album[b].link, this.currentImageIndex = b
    }, b.prototype.sizeOverlay = function() {
        this.$overlay.width(a(document).width()).height(a(document).height())
    }, b.prototype.sizeContainer = function(a, b) {
        function c() {
            d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage()
        }
        var d = this,
            e = this.$outerContainer.outerWidth(),
            f = this.$outerContainer.outerHeight(),
            g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        e !== g || f !== h ? this.$outerContainer.animate({
            width: g,
            height: h
        }, this.options.resizeDuration, "swing", function() {
            c()
        }) : c()
    }, b.prototype.showImage = function() {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, b.prototype.updateNav = function() {
        var a = !1;
        try {
            document.createEvent("TouchEvent"), a = !!this.options.alwaysShowNavOnTouchDevices
        } catch (a) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, b.prototype.updateDetails = function() {
        var b = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var c = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? c.text(this.album[this.currentImageIndex].title) : c.html(this.album[this.currentImageIndex].title), c.fadeIn("fast").find("a").on("click", function(b) {
                void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href")
            })
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var d = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(d).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() {
            return b.sizeOverlay()
        })
    }, b.prototype.preloadNeighboringImages = function() {
        if (this.album.length > this.currentImageIndex + 1) {
            (new Image).src = this.album[this.currentImageIndex + 1].link
        }
        if (this.currentImageIndex > 0) {
            (new Image).src = this.album[this.currentImageIndex - 1].link
        }
    }, b.prototype.enableKeyboardNav = function() {
        a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this))
    }, b.prototype.disableKeyboardNav = function() {
        a(document).off(".keyboard")
    }, b.prototype.keyboardAction = function(a) {
        var b = a.keyCode,
            c = String.fromCharCode(b).toLowerCase();
        27 === b || c.match(/x|o|c/) ? this.end() : "p" === c || 37 === b ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : "n" !== c && 39 !== b || (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, b.prototype.end = function() {
        this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({
            visibility: "visible"
        }), this.options.disableScrolling && a("html").removeClass("lb-disable-scrolling")
    }, new b
});
//# sourceMappingURL=lightbox-plus-jquery.min.map