/*------ jquery.min.js ------*/
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  var n = [],
    r = e.document,
    i = n.slice,
    o = n.concat,
    a = n.push,
    s = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    f = {},
    d = "1.12.4",
    p = function (e, t) {
      return new p.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    g = /^-ms-/,
    m = /-([\da-z])/gi,
    v = function (e, t) {
      return t.toUpperCase();
    };
  function y(e) {
    var t = !!e && "length" in e && e.length,
      n = p.type(e);
    return (
      "function" !== n &&
      !p.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (p.fn = p.prototype =
    {
      jquery: d,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : i.call(this);
      },
      pushStack: function (e) {
        var t = p.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return p.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          p.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (p.extend = p.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || p.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                a !== (n = i[r]) &&
                  (l && n && (p.isPlainObject(n) || (t = p.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && p.isArray(e) ? e : []))
                        : (o = e && p.isPlainObject(e) ? e : {}),
                      (a[r] = p.extend(l, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    p.extend({
      expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === p.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === p.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !p.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !c.call(e, "constructor") &&
            !c.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        if (!f.ownFirst) for (t in e) return c.call(e, t);
        for (t in e);
        return void 0 === t || c.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? u[l.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          p.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(g, "ms-").replace(m, v);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (y(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (y(Object(e))
              ? p.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (s) return s.call(t, e, n);
          for (
            r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
            n < r;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
        if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          a = 0,
          s = [];
        if (y(e))
          for (r = e.length; a < r; a++)
            null != (i = t(e[a], a, n)) && s.push(i);
        else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
        return o.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, o;
        if (
          ("string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          p.isFunction(e))
        )
          return (
            (n = i.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, n.concat(i.call(arguments)));
            }).guid = e.guid =
              e.guid || p.guid++),
            r
          );
      },
      now: function () {
        return +new Date();
      },
      support: f,
    }),
    "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]),
    p.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var x = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      d,
      p,
      h,
      g,
      m,
      v,
      y,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = oe(),
      N = oe(),
      k = oe(),
      S = function (e, t) {
        return e === t && (f = !0), 0;
      },
      A = 1 << 31,
      D = {}.hasOwnProperty,
      j = [],
      L = j.pop,
      H = j.push,
      q = j.push,
      _ = j.slice,
      F = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      M =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      O = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      P =
        "\\[" +
        O +
        "*(" +
        R +
        ")(?:" +
        O +
        "*([*^$|!~]?=)" +
        O +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        O +
        "*\\]",
      B =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      W = new RegExp(O + "+", "g"),
      I = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
      $ = new RegExp("^" + O + "*," + O + "*"),
      z = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
      X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
      U = new RegExp(B),
      V = new RegExp("^" + R + "$"),
      Y = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + P),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            O +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            O +
            "*(?:([+-]|)" +
            O +
            "*(\\d+)|))" +
            O +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + M + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            O +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            O +
            "*((?:-\\d)?\\d*)" +
            O +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      J = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /'|\\/g,
      te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = function () {
        d();
      };
    try {
      q.apply((j = _.call(w.childNodes)), w.childNodes),
        j[w.childNodes.length].nodeType;
    } catch (e) {
      q = {
        apply: j.length
          ? function (e, t) {
              H.apply(e, _.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function ie(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        y,
        T = t && t.ownerDocument,
        C = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), g)
      ) {
        if (11 !== C && (h = K.exec(e)))
          if ((o = h[1])) {
            if (9 === C) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (T && (l = T.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (h[2]) return q.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = h[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return q.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
          if (1 !== C) (T = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute("id"))
                ? (c = c.replace(ee, "\\$&"))
                : t.setAttribute("id", (c = b)),
                s = (v = a(e)).length,
                f = V.test(c) ? "#" + c : "[id='" + c + "']";
              s--;

            )
              v[s] = f + " " + ge(v[s]);
            (y = v.join(",")), (T = (Z.test(e) && pe(t.parentNode)) || t);
          }
          if (y)
            try {
              return q.apply(r, T.querySelectorAll(y)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(I, "$1"), t, r, i);
    }
    function oe() {
      var e = [];
      return function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      };
    }
    function ae(e) {
      return (e[b] = !0), e;
    }
    function se(e) {
      var t = p.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ue(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function le(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || A) - (~e.sourceIndex || A);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ce(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return ae(function (t) {
        return (
          (t = +t),
          ae(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    (n = ie.support = {}),
      (o = ie.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (d = ie.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== p && 9 === a.nodeType && a.documentElement
            ? ((h = (p = a).documentElement),
              (g = !o(p)),
              (i = p.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = se(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = se(function (e) {
                return (
                  e.appendChild(p.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(p.getElementsByClassName)),
              (n.getById = se(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !p.getElementsByName || !p.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete r.find.ID,
                  (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (m = []),
              (n.qsa = Q.test(p.querySelectorAll)) &&
                (se(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      m.push("[*^$]=" + O + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      m.push("\\[" + O + "*(?:value|" + M + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      m.push(".#.+[+~]");
                }),
                se(function (e) {
                  var t = p.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      m.push("name" + O + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                se(function (e) {
                  (n.disconnectedMatch = y.call(e, "div")),
                    y.call(e, "[s!='']:x"),
                    v.push("!=", B);
                }),
              (m = m.length && new RegExp(m.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (S = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === p || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === p || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? F(c, e) - F(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === p
                        ? -1
                        : t === p
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? F(c, e) - F(c, t)
                        : 0;
                    if (i === o) return le(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (; a[r] === s[r]; ) r++;
                    return r
                      ? le(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              p)
            : p;
        }),
      (ie.matches = function (e, t) {
        return ie(e, null, null, t);
      }),
      (ie.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== p && d(e),
          (t = t.replace(X, "='$1']")),
          n.matchesSelector &&
            g &&
            !k[t + " "] &&
            (!v || !v.test(t)) &&
            (!m || !m.test(t)))
        )
          try {
            var r = y.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return ie(t, p, null, [e]).length > 0;
      }),
      (ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== p && d(e), x(e, t);
      }),
      (ie.attr = function (e, t) {
        (e.ownerDocument || e) !== p && d(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (ie.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (ie.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(S),
          f)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
          for (; i--; ) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = ie.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += i(t);
          return n;
        }),
      ((r = ie.selectors =
        {
          cacheLength: 50,
          createPseudo: ae,
          match: Y,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || ie.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && ie.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return Y.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      U.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (void 0 !== e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = ie.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      y = !u && !s,
                      x = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === v
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                        for (
                          x =
                            (p =
                              (l =
                                (c =
                                  (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              l[1]) && l[2],
                            d = p && m.childNodes[p];
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++x && d === t) {
                            c[e] = [T, p, x];
                            break;
                          }
                      } else if (
                        (y &&
                          (x = p =
                            (l =
                              (c =
                                (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== v
                            : 1 !== d.nodeType) ||
                            !++x ||
                            (y &&
                              ((c =
                                (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] = [T, x]),
                            d !== t));

                        );
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  ie.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ae(function (e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                          e[(r = F(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: ae(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(I, "$1"));
              return r[b]
                ? ae(function (e, t, n, i) {
                    for (var o, a = r(e, null, i, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: ae(function (e) {
              return function (t) {
                return ie(e, t).length > 0;
              };
            }),
            contains: ae(function (e) {
              return (
                (e = e.replace(te, ne)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: ae(function (e) {
              return (
                V.test(e || "") || ie.error("unsupported lang: " + e),
                (e = e.replace(te, ne).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === p.activeElement &&
                (!p.hasFocus || p.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return G.test(e.nodeName);
            },
            input: function (e) {
              return J.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: de(function () {
              return [0];
            }),
            last: de(function (e, t) {
              return [t - 1];
            }),
            eq: de(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: de(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: de(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: de(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: de(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = ce(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = fe(t);
    function he() {}
    function ge(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = C++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              u,
              l,
              c = [T, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (s = (u =
                      (l = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (l[t.uniqueID] = {}))[r]) &&
                    s[0] === T &&
                    s[1] === o
                  )
                    return (c[2] = s[2]);
                  if (((u[r] = c), (c[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function ve(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function ye(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function xe(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = xe(r)),
        i && !i[b] && (i = xe(i, o)),
        ae(function (o, a, s, u) {
          var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) ie(e, t[r], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            m = !e || (!o && t) ? g : ye(g, d, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : m;
          if ((n && n(m, v, s, u), r))
            for (l = ye(v, p), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = v.length; c--; )
                  (f = v[c]) && l.push((m[c] = f));
                i(null, (v = []), l, u);
              }
              for (c = v.length; c--; )
                (f = v[c]) &&
                  (l = i ? F(o, f) : d[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = ye(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : q.apply(a, v);
        })
      );
    }
    function be(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return F(t, e) > -1;
            },
            s,
            !0
          ),
          d = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) d = [me(ve(d), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
            return xe(
              u > 1 && ve(d),
              u > 1 &&
                ge(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(I, "$1"),
              n,
              u < i && be(e.slice(u, i)),
              i < o && be((e = e.slice(i))),
              i < o && ge(e)
            );
          }
          d.push(n);
        }
      return ve(d);
    }
    return (
      (he.prototype = r.filters = r.pseudos),
      (r.setFilters = new he()),
      (a = ie.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = N[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            (n && !(i = $.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = z.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(I, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = Y[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? ie.error(e) : N(e, u).slice(0);
        }),
      (s = ie.compile =
        function (e, t) {
          var n,
            i,
            o,
            s,
            u,
            c,
            f = [],
            h = [],
            m = k[e + " "];
          if (!m) {
            for (t || (t = a(e)), n = t.length; n--; )
              (m = be(t[n]))[b] ? f.push(m) : h.push(m);
            (m = k(
              e,
              ((i = h),
              (s = (o = f).length > 0),
              (u = i.length > 0),
              (c = function (e, t, n, a, c) {
                var f,
                  h,
                  m,
                  v = 0,
                  y = "0",
                  x = e && [],
                  b = [],
                  w = l,
                  C = e || (u && r.find.TAG("*", c)),
                  E = (T += null == w ? 1 : Math.random() || 0.1),
                  N = C.length;
                for (
                  c && (l = t === p || t || c);
                  y !== N && null != (f = C[y]);
                  y++
                ) {
                  if (u && f) {
                    for (
                      h = 0, t || f.ownerDocument === p || (d(f), (n = !g));
                      (m = i[h++]);

                    )
                      if (m(f, t || p, n)) {
                        a.push(f);
                        break;
                      }
                    c && (T = E);
                  }
                  s && ((f = !m && f) && v--, e && x.push(f));
                }
                if (((v += y), s && y !== v)) {
                  for (h = 0; (m = o[h++]); ) m(x, b, t, n);
                  if (e) {
                    if (v > 0) for (; y--; ) x[y] || b[y] || (b[y] = L.call(a));
                    b = ye(b);
                  }
                  q.apply(a, b),
                    c &&
                      !e &&
                      b.length > 0 &&
                      v + o.length > 1 &&
                      ie.uniqueSort(a);
                }
                return c && ((T = E), (l = w)), x;
              }),
              s ? ae(c) : c)
            )).selector = e;
          }
          return m;
        }),
      (u = ie.select =
        function (e, t, i, o) {
          var u,
            l,
            c,
            f,
            d,
            p = "function" == typeof e && e,
            h = !o && a((e = p.selector || e));
          if (((i = i || []), 1 === h.length)) {
            if (
              (l = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              n.getById &&
              9 === t.nodeType &&
              g &&
              r.relative[l[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
                return i;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              u = Y.needsContext.test(e) ? 0 : l.length;
              u-- && ((c = l[u]), !r.relative[(f = c.type)]);

            )
              if (
                (d = r.find[f]) &&
                (o = d(
                  c.matches[0].replace(te, ne),
                  (Z.test(l[0].type) && pe(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(u, 1), !(e = o.length && ge(l))))
                  return q.apply(i, o), i;
                break;
              }
          }
          return (
            (p || s(e, h))(
              o,
              t,
              !g,
              i,
              !t || (Z.test(e) && pe(t.parentNode)) || t
            ),
            i
          );
        }),
      (n.sortStable = b.split("").sort(S).join("") === b),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = se(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("div"));
      })),
      se(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ue("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        se(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ue("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      se(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ue(M, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      ie
    );
  })(e);
  (p.find = x),
    (p.expr = x.selectors),
    (p.expr[":"] = p.expr.pseudos),
    (p.uniqueSort = p.unique = x.uniqueSort),
    (p.text = x.getText),
    (p.isXMLDoc = x.isXML),
    (p.contains = x.contains);
  var b = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && p(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    w = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    T = p.expr.match.needsContext,
    C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    E = /^.[^:#\[\.,]*$/;
  function N(e, t, n) {
    if (p.isFunction(t))
      return p.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return p.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (E.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }
    return p.grep(e, function (e) {
      return p.inArray(e, t) > -1 !== n;
    });
  }
  (p.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? p.find.matchesSelector(r, e)
          ? [r]
          : []
        : p.find.matches(
            e,
            p.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            p(e).filter(function () {
              for (t = 0; t < i; t++) if (p.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; t < i; t++) p.find(e, r[t], n);
        return (
          ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(N(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(N(this, e || [], !0));
      },
      is: function (e) {
        return !!N(this, "string" == typeof e && T.test(e) ? p(e) : e || [], !1)
          .length;
      },
    });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || k), "string" == typeof e)) {
      if (
        !(i =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : S.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof p ? t[0] : t),
          p.merge(
            this,
            p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          C.test(i[1]) && p.isPlainObject(t))
        )
          for (i in t)
            p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      if ((o = r.getElementById(i[2])) && o.parentNode) {
        if (o.id !== i[2]) return k.find(e);
        (this.length = 1), (this[0] = o);
      }
      return (this.context = r), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : p.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(p)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        p.makeArray(e, this));
  }).prototype = p.fn),
    (k = p(r));
  var A = /^(?:parents|prev(?:Until|All))/,
    D = { children: !0, contents: !0, next: !0, prev: !0 };
  function j(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  p.fn.extend({
    has: function (e) {
      var t,
        n = p(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (p.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = T.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && p.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? p.inArray(this[0], p(e))
          : p.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    p.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return b(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return b(e, "parentNode", n);
        },
        next: function (e) {
          return j(e, "nextSibling");
        },
        prev: function (e) {
          return j(e, "previousSibling");
        },
        nextAll: function (e) {
          return b(e, "nextSibling");
        },
        prevAll: function (e) {
          return b(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return b(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return b(e, "previousSibling", n);
        },
        siblings: function (e) {
          return w((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return w(e.firstChild);
        },
        contents: function (e) {
          return p.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : p.merge([], e.childNodes);
        },
      },
      function (e, t) {
        p.fn[e] = function (n, r) {
          var i = p.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = p.filter(r, i)),
            this.length > 1 &&
              (D[e] || (i = p.uniqueSort(i)), A.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var L,
    H,
    q = /\S+/g;
  function _() {
    r.addEventListener
      ? (r.removeEventListener("DOMContentLoaded", F),
        e.removeEventListener("load", F))
      : (r.detachEvent("onreadystatechange", F), e.detachEvent("onload", F));
  }
  function F() {
    (r.addEventListener ||
      "load" === e.event.type ||
      "complete" === r.readyState) &&
      (_(), p.ready());
  }
  (p.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          p.each(t.match(q) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : p.extend({}, e);
    var r,
      i,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = e.once, o = r = !0; u.length; l = -1)
          for (i = u.shift(); ++l < s.length; )
            !1 === s[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = s.length), (i = !1));
        e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (i && !r && ((l = s.length - 1), u.push(i)),
              (function t(n) {
                p.each(n, function (n, r) {
                  p.isFunction(r)
                    ? (e.unique && f.has(r)) || s.push(r)
                    : r && r.length && "string" !== p.type(r) && t(r);
                });
              })(arguments),
              i && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            p.each(arguments, function (e, t) {
              for (var n; (n = p.inArray(t, s, n)) > -1; )
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? p.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = i = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = !0), i || f.disable(), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              r || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    p.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return p
                .Deferred(function (n) {
                  p.each(t, function (t, o) {
                    var a = p.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && p.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[o[0] + "With"](
                            this === r ? n.promise() : this,
                            a ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? p.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          p.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          o = 0,
          a = i.call(arguments),
          s = a.length,
          u = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
          l = 1 === u ? e : p.Deferred(),
          c = function (e, n, r) {
            return function (o) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? i.call(arguments) : o),
                r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), r = new Array(s); o < s; o++)
            a[o] && p.isFunction(a[o].promise)
              ? a[o]
                  .promise()
                  .progress(c(o, n, t))
                  .done(c(o, r, a))
                  .fail(l.reject)
              : --u;
        return u || l.resolveWith(r, a), l.promise();
      },
    }),
    (p.fn.ready = function (e) {
      return p.ready.promise().done(e), this;
    }),
    p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? p.readyWait++ : p.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --p.readyWait : p.isReady) ||
          ((p.isReady = !0),
          (!0 !== e && --p.readyWait > 0) ||
            (L.resolveWith(r, [p]),
            p.fn.triggerHandler &&
              (p(r).triggerHandler("ready"), p(r).off("ready"))));
      },
    }),
    (p.ready.promise = function (t) {
      if (!L)
        if (
          ((L = p.Deferred()),
          "complete" === r.readyState ||
            ("loading" !== r.readyState && !r.documentElement.doScroll))
        )
          e.setTimeout(p.ready);
        else if (r.addEventListener)
          r.addEventListener("DOMContentLoaded", F),
            e.addEventListener("load", F);
        else {
          r.attachEvent("onreadystatechange", F), e.attachEvent("onload", F);
          var n = !1;
          try {
            n = null == e.frameElement && r.documentElement;
          } catch (e) {}
          n &&
            n.doScroll &&
            (function t() {
              if (!p.isReady) {
                try {
                  n.doScroll("left");
                } catch (n) {
                  return e.setTimeout(t, 50);
                }
                _(), p.ready();
              }
            })();
        }
      return L.promise(t);
    }),
    p.ready.promise();
  for (H in p(f)) break;
  (f.ownFirst = "0" === H),
    (f.inlineBlockNeedsLayout = !1),
    p(function () {
      var e, t, n, i;
      (n = r.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = r.createElement("div")),
        ((i = r.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        void 0 !== t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (f.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
    (function () {
      var e = r.createElement("div");
      f.deleteExpando = !0;
      try {
        delete e.test;
      } catch (e) {
        f.deleteExpando = !1;
      }
      e = null;
    })();
  var M,
    O = function (e) {
      var t = p.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    P = /([A-Z])/g;
  function B(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(P, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : R.test(n)
                ? p.parseJSON(n)
                : n));
        } catch (e) {}
        p.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function W(e) {
    var t;
    for (t in e)
      if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function I(e, t, r, i) {
    if (O(e)) {
      var o,
        a,
        s = p.expando,
        u = e.nodeType,
        l = u ? p.cache : e,
        c = u ? e[s] : e[s] && s;
      if (
        (c && l[c] && (i || l[c].data)) ||
        void 0 !== r ||
        "string" != typeof t
      )
        return (
          c || (c = u ? (e[s] = n.pop() || p.guid++) : s),
          l[c] || (l[c] = u ? {} : { toJSON: p.noop }),
          ("object" != typeof t && "function" != typeof t) ||
            (i
              ? (l[c] = p.extend(l[c], t))
              : (l[c].data = p.extend(l[c].data, t))),
          (a = l[c]),
          i || (a.data || (a.data = {}), (a = a.data)),
          void 0 !== r && (a[p.camelCase(t)] = r),
          "string" == typeof t
            ? null == (o = a[t]) && (o = a[p.camelCase(t)])
            : (o = a),
          o
        );
    }
  }
  function $(e, t, n) {
    if (O(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? p.cache : e,
        s = o ? e[p.expando] : p.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = p.isArray(t)
            ? t.concat(p.map(t, p.camelCase))
            : t in r
            ? [t]
            : (t = p.camelCase(t)) in r
            ? [t]
            : t.split(" ")).length;
          for (; i--; ) delete r[t[i]];
          if (n ? !W(r) : !p.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, W(a[s]))) &&
          (o
            ? p.cleanData([e], !0)
            : f.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = void 0));
      }
    }
  }
  p.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !W(e);
    },
    data: function (e, t, n) {
      return I(e, t, n);
    },
    removeData: function (e, t) {
      return $(e, t);
    },
    _data: function (e, t, n) {
      return I(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return $(e, t, !0);
    },
  }),
    p.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = p.data(o)), 1 === o.nodeType && !p._data(o, "parsedAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                B(o, (r = p.camelCase(r.slice(5))), i[r]);
            p._data(o, "parsedAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              p.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              p.data(this, e, t);
            })
          : o
          ? B(o, e, p.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          p.removeData(this, e);
        });
      },
    }),
    p.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = p._data(e, t)),
            n &&
              (!r || p.isArray(n)
                ? (r = p._data(e, t, p.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = p.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = p._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                p.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          p._data(e, n) ||
          p._data(e, n, {
            empty: p.Callbacks("once memory").add(function () {
              p._removeData(e, t + "queue"), p._removeData(e, n);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? p.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          p.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = p.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = p._data(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    }),
    (f.shrinkWrapBlocks = function () {
      return null != M
        ? M
        : ((M = !1),
          (t = r.getElementsByTagName("body")[0]) && t.style
            ? ((e = r.createElement("div")),
              ((n = r.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              t.appendChild(n).appendChild(e),
              void 0 !== e.style.zoom &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(r.createElement("div")).style.width = "5px"),
                (M = 3 !== e.offsetWidth)),
              t.removeChild(n),
              M)
            : void 0);
      var e, t, n;
    });
  var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
    U = ["Top", "Right", "Bottom", "Left"],
    V = function (e, t) {
      return (
        (e = t || e),
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
      );
    };
  function Y(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return p.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (p.cssNumber[t] ? "" : "px"),
      c = (p.cssNumber[t] || ("px" !== l && +u)) && X.exec(p.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do {
        (c /= o = o || ".5"), p.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var J,
    G,
    Q,
    K = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === p.type(n)) {
        i = !0;
        for (s in n) K(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        p.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(p(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    Z = /^(?:checkbox|radio)$/i,
    ee = /<([\w:-]+)/,
    te = /^$|\/(?:java|ecma)script/i,
    ne = /^\s+/,
    re =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function ie(e) {
    var t = re.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  (J = r.createElement("div")),
    (G = r.createDocumentFragment()),
    (Q = r.createElement("input")),
    (J.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (f.leadingWhitespace = 3 === J.firstChild.nodeType),
    (f.tbody = !J.getElementsByTagName("tbody").length),
    (f.htmlSerialize = !!J.getElementsByTagName("link").length),
    (f.html5Clone =
      "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML),
    (Q.type = "checkbox"),
    (Q.checked = !0),
    G.appendChild(Q),
    (f.appendChecked = Q.checked),
    (J.innerHTML = "<textarea>x</textarea>"),
    (f.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue),
    G.appendChild(J),
    (Q = r.createElement("input")).setAttribute("type", "radio"),
    Q.setAttribute("checked", "checked"),
    Q.setAttribute("name", "t"),
    J.appendChild(Q),
    (f.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (f.noCloneEvent = !!J.addEventListener),
    (J[p.expando] = 1),
    (f.attributes = !J.getAttribute(p.expando));
  var oe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: f.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  function ae(e, t) {
    var n,
      r,
      i = 0,
      o =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ae(r, t));
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], o) : o;
  }
  function se(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
  }
  (oe.optgroup = oe.option),
    (oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead),
    (oe.th = oe.td);
  var ue = /<|&#?\w+;/,
    le = /<tbody/i;
  function ce(e) {
    Z.test(e.type) && (e.defaultChecked = e.checked);
  }
  function fe(e, t, n, r, i) {
    for (
      var o, a, s, u, l, c, d, h = e.length, g = ie(t), m = [], v = 0;
      v < h;
      v++
    )
      if ((a = e[v]) || 0 === a)
        if ("object" === p.type(a)) p.merge(m, a.nodeType ? [a] : a);
        else if (ue.test(a)) {
          for (
            u = u || g.appendChild(t.createElement("div")),
              l = (ee.exec(a) || ["", ""])[1].toLowerCase(),
              d = oe[l] || oe._default,
              u.innerHTML = d[1] + p.htmlPrefilter(a) + d[2],
              o = d[0];
            o--;

          )
            u = u.lastChild;
          if (
            (!f.leadingWhitespace &&
              ne.test(a) &&
              m.push(t.createTextNode(ne.exec(a)[0])),
            !f.tbody)
          )
            for (
              o =
                (a =
                  "table" !== l || le.test(a)
                    ? "<table>" !== d[1] || le.test(a)
                      ? 0
                      : u
                    : u.firstChild) && a.childNodes.length;
              o--;

            )
              p.nodeName((c = a.childNodes[o]), "tbody") &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (p.merge(m, u.childNodes), u.textContent = ""; u.firstChild; )
            u.removeChild(u.firstChild);
          u = g.lastChild;
        } else m.push(t.createTextNode(a));
    for (
      u && g.removeChild(u),
        f.appendChecked || p.grep(ae(m, "input"), ce),
        v = 0;
      (a = m[v++]);

    )
      if (r && p.inArray(a, r) > -1) i && i.push(a);
      else if (
        ((s = p.contains(a.ownerDocument, a)),
        (u = ae(g.appendChild(a), "script")),
        s && se(u),
        n)
      )
        for (o = 0; (a = u[o++]); ) te.test(a.type || "") && n.push(a);
    return (u = null), g;
  }
  !(function () {
    var t,
      n,
      i = r.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = "on" + t),
        (f[t] = n in e) ||
          (i.setAttribute(n, "t"), (f[t] = !1 === i.attributes[n].expando));
    i = null;
  })();
  var de = /^(?:input|select|textarea)$/i,
    pe = /^key/,
    he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ge = /^(?:focusinfocus|focusoutblur)$/,
    me = /^([^.]*)(?:\.(.+)|)/;
  function ve() {
    return !0;
  }
  function ye() {
    return !1;
  }
  function xe() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function be(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) be(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ye;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return p().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = p.guid++))),
      e.each(function () {
        p.event.add(this, t, i, r, n);
      })
    );
  }
  (p.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        h,
        g,
        m,
        v = p._data(e);
      if (v) {
        for (
          n.handler && ((n = (u = n).handler), (i = u.selector)),
            n.guid || (n.guid = p.guid++),
            (a = v.events) || (a = v.events = {}),
            (c = v.handle) ||
              ((c = v.handle =
                function (e) {
                  return void 0 === p || (e && p.event.triggered === e.type)
                    ? void 0
                    : p.event.dispatch.apply(c.elem, arguments);
                }).elem = e),
            s = (t = (t || "").match(q) || [""]).length;
          s--;

        )
          (h = m = (o = me.exec(t[s]) || [])[1]),
            (g = (o[2] || "").split(".").sort()),
            h &&
              ((l = p.event.special[h] || {}),
              (h = (i ? l.delegateType : l.bindType) || h),
              (l = p.event.special[h] || {}),
              (f = p.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && p.expr.match.needsContext.test(i),
                  namespace: g.join("."),
                },
                u
              )),
              (d = a[h]) ||
                (((d = a[h] = []).delegateCount = 0),
                (l.setup && !1 !== l.setup.call(e, r, g, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(h, c, !1)
                    : e.attachEvent && e.attachEvent("on" + h, c))),
              l.add &&
                (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
              (p.event.global[h] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        h,
        g,
        m,
        v = p.hasData(e) && p._data(e);
      if (v && (c = v.events)) {
        for (l = (t = (t || "").match(q) || [""]).length; l--; )
          if (
            ((h = m = (s = me.exec(t[l]) || [])[1]),
            (g = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = p.event.special[h] || {},
                d = c[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                u = o = d.length;
              o--;

            )
              (a = d[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (d.splice(o, 1),
                  a.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, a));
            u &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, g, v.handle)) ||
                p.removeEvent(e, h, v.handle),
              delete c[h]);
          } else for (h in c) p.event.remove(e, h + t[l], n, r, !0);
        p.isEmptyObject(c) && (delete v.handle, p._removeData(e, "events"));
      }
    },
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        f,
        d,
        h,
        g = [i || r],
        m = c.call(t, "type") ? t.type : t,
        v = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((u = d = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !ge.test(m + p.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (v = m.split(".")).shift()), v.sort()),
          (s = m.indexOf(":") < 0 && "on" + m),
          ((t = t[p.expando]
            ? t
            : new p.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = v.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : p.makeArray(n, [t])),
          (f = p.event.special[m] || {}),
          o || !f.trigger || !1 !== f.trigger.apply(i, n)))
      ) {
        if (!o && !f.noBubble && !p.isWindow(i)) {
          for (
            l = f.delegateType || m, ge.test(l + m) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            g.push(u), (d = u);
          d === (i.ownerDocument || r) &&
            g.push(d.defaultView || d.parentWindow || e);
        }
        for (h = 0; (u = g[h++]) && !t.isPropagationStopped(); )
          (t.type = h > 1 ? l : f.bindType || m),
            (a =
              (p._data(u, "events") || {})[t.type] && p._data(u, "handle")) &&
              a.apply(u, n),
            (a = s && u[s]) &&
              a.apply &&
              O(u) &&
              ((t.result = a.apply(u, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = m),
          !o &&
            !t.isDefaultPrevented() &&
            (!f._default || !1 === f._default.apply(g.pop(), n)) &&
            O(i) &&
            s &&
            i[m] &&
            !p.isWindow(i))
        ) {
          (d = i[s]) && (i[s] = null), (p.event.triggered = m);
          try {
            i[m]();
          } catch (e) {}
          (p.event.triggered = void 0), d && (i[s] = d);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = p.event.fix(e);
      var t,
        n,
        r,
        o,
        a,
        s,
        u = i.call(arguments),
        l = (p._data(this, "events") || {})[e.type] || [],
        c = p.event.special[e.type] || {};
      if (
        ((u[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = p.event.handlers.call(this, e, l), t = 0;
          (o = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
              ((e.handleObj = a),
              (e.data = a.data),
              void 0 !==
                (r = (
                  (p.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? p(i, this).index(u) > -1
                  : p.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[p.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        a = e,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s =
            he.test(o) ? this.mouseHooks : pe.test(o) ? this.keyHooks : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          e = new p.Event(a),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = a[n];
      return (
        e.target || (e.target = a.srcElement || r),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        s.filter ? s.filter(e, a) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          i,
          o,
          a = t.button,
          s = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((o = (i = e.target.ownerDocument || r).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            s &&
            (e.relatedTarget = s === e.target ? t.toElement : s),
          e.which ||
            void 0 === a ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xe() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xe() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            p.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return p.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n) {
      var r = p.extend(new p.Event(), n, { type: e, isSimulated: !0 });
      p.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (p.removeEvent = r.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
        }),
    (p.Event = function (e, t) {
      if (!(this instanceof p.Event)) return new p.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ve
              : ye))
        : (this.type = e),
        t && p.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || p.now()),
        (this[p.expando] = !0);
    }),
    (p.Event.prototype = {
      constructor: p.Event,
      isDefaultPrevented: ye,
      isPropagationStopped: ye,
      isImmediatePropagationStopped: ye,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ve),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ve),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ve),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    p.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        p.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || p.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    f.submit ||
      (p.event.special.submit = {
        setup: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target,
              n =
                p.nodeName(t, "input") || p.nodeName(t, "button")
                  ? p.prop(t, "form")
                  : void 0;
            n &&
              !p._data(n, "submit") &&
              (p.event.add(n, "submit._submit", function (e) {
                e._submitBubble = !0;
              }),
              p._data(n, "submit", !0));
          });
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              p.event.simulate("submit", this.parentNode, e));
        },
        teardown: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.remove(this, "._submit");
        },
      }),
    f.change ||
      (p.event.special.change = {
        setup: function () {
          if (de.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (p.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                p.event.add(this, "click._change", function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    p.event.simulate("change", this, e);
                })),
              !1
            );
          p.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            de.test(t.nodeName) &&
              !p._data(t, "change") &&
              (p.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  p.event.simulate("change", this.parentNode, e);
              }),
              p._data(t, "change", !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !de.test(this.nodeName);
        },
      }),
    f.focusin ||
      p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          p.event.simulate(t, e.target, p.event.fix(e));
        };
        p.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t);
            i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t) - 1;
            i
              ? p._data(r, t, i)
              : (r.removeEventListener(e, n, !0), p._removeData(r, t));
          },
        };
      }),
    p.fn.extend({
      on: function (e, t, n, r) {
        return be(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return be(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            p(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ye),
          this.each(function () {
            p.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          p.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return p.event.trigger(e, t, n, !0);
      },
    });
  var we = / jQuery\d+="(?:null|\d+)"/g,
    Te = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
    Ce =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ee = /<script|<style|<link/i,
    Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^true\/(.*)/,
    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ae = ie(r).appendChild(r.createElement("div"));
  function De(e, t) {
    return p.nodeName(e, "table") &&
      p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function je(e) {
    return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
  }
  function Le(e) {
    var t = ke.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function He(e, t) {
    if (1 === t.nodeType && p.hasData(e)) {
      var n,
        r,
        i,
        o = p._data(e),
        a = p._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; r < i; r++) p.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = p.extend({}, a.data));
    }
  }
  function qe(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !f.noCloneEvent && t[p.expando])) {
        i = p._data(t);
        for (r in i.events) p.removeEvent(t, r, i.handle);
        t.removeAttribute(p.expando);
      }
      "script" === n && t.text !== e.text
        ? ((je(t).text = e.text), Le(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          f.html5Clone &&
            e.innerHTML &&
            !p.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && Z.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function _e(e, t, n, r) {
    t = o.apply([], t);
    var i,
      a,
      s,
      u,
      l,
      c,
      d = 0,
      h = e.length,
      g = h - 1,
      m = t[0],
      v = p.isFunction(m);
    if (v || (h > 1 && "string" == typeof m && !f.checkClone && Ne.test(m)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = m.call(this, i, o.html())), _e(o, t, n, r);
      });
    if (
      h &&
      ((i = (c = fe(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === c.childNodes.length && (c = i),
      i || r)
    ) {
      for (s = (u = p.map(ae(c, "script"), je)).length; d < h; d++)
        (a = c),
          d !== g &&
            ((a = p.clone(a, !0, !0)), s && p.merge(u, ae(a, "script"))),
          n.call(e[d], a, d);
      if (s)
        for (l = u[u.length - 1].ownerDocument, p.map(u, Le), d = 0; d < s; d++)
          (a = u[d]),
            te.test(a.type || "") &&
              !p._data(a, "globalEval") &&
              p.contains(l, a) &&
              (a.src
                ? p._evalUrl && p._evalUrl(a.src)
                : p.globalEval(
                    (a.text || a.textContent || a.innerHTML || "").replace(
                      Se,
                      ""
                    )
                  ));
      c = i = null;
    }
    return e;
  }
  function Fe(e, t, n) {
    for (var r, i = t ? p.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || p.cleanData(ae(r)),
        r.parentNode &&
          (n && p.contains(r.ownerDocument, r) && se(ae(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  p.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ce, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = p.contains(e.ownerDocument, e);
      if (
        (f.html5Clone || p.isXMLDoc(e) || !Te.test("<" + e.nodeName + ">")
          ? (o = e.cloneNode(!0))
          : ((Ae.innerHTML = e.outerHTML), Ae.removeChild((o = Ae.firstChild))),
        !(
          (f.noCloneEvent && f.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          p.isXMLDoc(e)
        ))
      )
        for (r = ae(o), s = ae(e), a = 0; null != (i = s[a]); ++a)
          r[a] && qe(i, r[a]);
      if (t)
        if (n)
          for (s = s || ae(e), r = r || ae(o), a = 0; null != (i = s[a]); a++)
            He(i, r[a]);
        else He(e, o);
      return (
        (r = ae(o, "script")).length > 0 && se(r, !u && ae(e, "script")),
        (r = s = i = null),
        o
      );
    },
    cleanData: function (e, t) {
      for (
        var r,
          i,
          o,
          a,
          s = 0,
          u = p.expando,
          l = p.cache,
          c = f.attributes,
          d = p.event.special;
        null != (r = e[s]);
        s++
      )
        if ((t || O(r)) && (a = (o = r[u]) && l[o])) {
          if (a.events)
            for (i in a.events)
              d[i] ? p.event.remove(r, i) : p.removeEvent(r, i, a.handle);
          l[o] &&
            (delete l[o],
            c || void 0 === r.removeAttribute
              ? (r[u] = void 0)
              : r.removeAttribute(u),
            n.push(o));
        }
    },
  }),
    p.fn.extend({
      domManip: _e,
      detach: function (e) {
        return Fe(this, e, !0);
      },
      remove: function (e) {
        return Fe(this, e);
      },
      text: function (e) {
        return K(
          this,
          function (e) {
            return void 0 === e
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || r).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return _e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return _e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && p.cleanData(ae(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return p.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return K(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(we, "") : void 0;
            if (
              "string" == typeof e &&
              !Ee.test(e) &&
              (f.htmlSerialize || !Te.test(e)) &&
              (f.leadingWhitespace || !ne.test(e)) &&
              !oe[(ee.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = p.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (p.cleanData(ae(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return _e(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            p.inArray(this, e) < 0 &&
              (p.cleanData(ae(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        p.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = p(e), s = o.length - 1; r <= s; r++)
            (n = r === s ? this : this.clone(!0)),
              p(o[r])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Me,
    Oe = { HTML: "block", BODY: "block" };
  function Re(e, t) {
    var n = p(t.createElement(e)).appendTo(t.body),
      r = p.css(n[0], "display");
    return n.detach(), r;
  }
  function Pe(e) {
    var t = r,
      n = Oe[e];
    return (
      n ||
        (("none" !== (n = Re(e, t)) && n) ||
          ((t = (
            (Me = (
              Me || p("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            Me[0].contentDocument
          ).document).write(),
          t.close(),
          (n = Re(e, t)),
          Me.detach()),
        (Oe[e] = n)),
      n
    );
  }
  var Be = /^margin/,
    We = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    },
    $e = r.documentElement;
  !(function () {
    var t,
      n,
      i,
      o,
      a,
      s,
      u = r.createElement("div"),
      l = r.createElement("div");
    function c() {
      var c,
        f,
        d = r.documentElement;
      d.appendChild(u),
        (l.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (t = i = s = !1),
        (n = a = !0),
        e.getComputedStyle &&
          ((f = e.getComputedStyle(l)),
          (t = "1%" !== (f || {}).top),
          (s = "2px" === (f || {}).marginLeft),
          (i = "4px" === (f || { width: "4px" }).width),
          (l.style.marginRight = "50%"),
          (n = "4px" === (f || { marginRight: "4px" }).marginRight),
          ((c = l.appendChild(r.createElement("div"))).style.cssText =
            l.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (c.style.marginRight = c.style.width = "0"),
          (l.style.width = "1px"),
          (a = !parseFloat((e.getComputedStyle(c) || {}).marginRight)),
          l.removeChild(c)),
        (l.style.display = "none"),
        (o = 0 === l.getClientRects().length) &&
          ((l.style.display = ""),
          (l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (l.childNodes[0].style.borderCollapse = "separate"),
          ((c = l.getElementsByTagName("td"))[0].style.cssText =
            "margin:0;border:0;padding:0;display:none"),
          (o = 0 === c[0].offsetHeight) &&
            ((c[0].style.display = ""),
            (c[1].style.display = "none"),
            (o = 0 === c[0].offsetHeight))),
        d.removeChild(u);
    }
    l.style &&
      ((l.style.cssText = "float:left;opacity:.5"),
      (f.opacity = "0.5" === l.style.opacity),
      (f.cssFloat = !!l.style.cssFloat),
      (l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ((u = r.createElement("div")).style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (l.innerHTML = ""),
      u.appendChild(l),
      (f.boxSizing =
        "" === l.style.boxSizing ||
        "" === l.style.MozBoxSizing ||
        "" === l.style.WebkitBoxSizing),
      p.extend(f, {
        reliableHiddenOffsets: function () {
          return null == t && c(), o;
        },
        boxSizingReliable: function () {
          return null == t && c(), i;
        },
        pixelMarginRight: function () {
          return null == t && c(), n;
        },
        pixelPosition: function () {
          return null == t && c(), t;
        },
        reliableMarginRight: function () {
          return null == t && c(), a;
        },
        reliableMarginLeft: function () {
          return null == t && c(), s;
        },
      }));
  })();
  var ze,
    Xe,
    Ue = /^(top|right|bottom|left)$/;
  function Ve(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  e.getComputedStyle
    ? ((ze = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      }),
      (Xe = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          ("" !==
            (a = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) &&
            void 0 !== a) ||
            p.contains(e.ownerDocument, e) ||
            (a = p.style(e, t)),
          n &&
            !f.pixelMarginRight() &&
            We.test(a) &&
            Be.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o)),
          void 0 === a ? a : a + ""
        );
      }))
    : $e.currentStyle &&
      ((ze = function (e) {
        return e.currentStyle;
      }),
      (Xe = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          null == (a = (n = n || ze(e)) ? n[t] : void 0) &&
            s &&
            s[t] &&
            (a = s[t]),
          We.test(a) &&
            !Ue.test(t) &&
            ((r = s.left),
            (o = (i = e.runtimeStyle) && i.left) &&
              (i.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      }));
  var Ye = /alpha\([^)]*\)/i,
    Je = /opacity\s*=\s*([^)]*)/i,
    Ge = /^(none|table(?!-c[ea]).+)/,
    Qe = new RegExp("^(" + z + ")(.*)$", "i"),
    Ke = { position: "absolute", visibility: "hidden", display: "block" },
    Ze = { letterSpacing: "0", fontWeight: "400" },
    et = ["Webkit", "O", "Moz", "ms"],
    tt = r.createElement("div").style;
  function nt(e) {
    if (e in tt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--; )
      if ((e = et[n] + t) in tt) return e;
  }
  function rt(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]).style &&
        ((o[a] = p._data(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              V(r) &&
              (o[a] = p._data(r, "olddisplay", Pe(r.nodeName))))
          : ((i = V(r)),
            ((n && "none" !== n) || !i) &&
              p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
    for (a = 0; a < s; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function it(e, t, n) {
    var r = Qe.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function ot(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += p.css(e, n + U[o], !0, i)),
        r
          ? ("content" === n && (a -= p.css(e, "padding" + U[o], !0, i)),
            "margin" !== n && (a -= p.css(e, "border" + U[o] + "Width", !0, i)))
          : ((a += p.css(e, "padding" + U[o], !0, i)),
            "padding" !== n &&
              (a += p.css(e, "border" + U[o] + "Width", !0, i)));
    return a;
  }
  function at(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = ze(e),
      a = f.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = Xe(e, t, o)) < 0 || null == i) && (i = e.style[t]), We.test(i))
      )
        return i;
      (r = a && (f.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + ot(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function st(e, t, n, r, i) {
    return new st.prototype.init(e, t, n, r, i);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Xe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: f.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = p.camelCase(t),
          u = e.style;
        if (
          ((t = p.cssProps[s] || (p.cssProps[s] = nt(s) || s)),
          (a = p.cssHooks[t] || p.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (
          ("string" === (o = typeof n) &&
            (i = X.exec(n)) &&
            i[1] &&
            ((n = Y(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (i && i[3]) || (p.cssNumber[s] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
        )
          try {
            u[t] = n;
          } catch (e) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = p.camelCase(t);
      return (
        (t = p.cssProps[s] || (p.cssProps[s] = nt(s) || s)),
        (a = p.cssHooks[t] || p.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = Xe(e, t, r)),
        "normal" === o && t in Ze && (o = Ze[t]),
        "" === n || n
          ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
          : o
      );
    },
  }),
    p.each(["height", "width"], function (e, t) {
      p.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return Ge.test(p.css(e, "display")) && 0 === e.offsetWidth
              ? Ie(e, Ke, function () {
                  return at(e, t, r);
                })
              : at(e, t, r);
        },
        set: function (e, n, r) {
          var i = r && ze(e);
          return it(
            0,
            n,
            r
              ? ot(
                  e,
                  t,
                  r,
                  f.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    f.opacity ||
      (p.cssHooks.opacity = {
        get: function (e, t) {
          return Je.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === p.trim(o.replace(Ye, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = Ye.test(o) ? o.replace(Ye, i) : o + " " + i);
        },
      }),
    (p.cssHooks.marginRight = Ve(f.reliableMarginRight, function (e, t) {
      if (t) return Ie(e, { display: "inline-block" }, Xe, [e, "marginRight"]);
    })),
    (p.cssHooks.marginLeft = Ve(f.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Xe(e, "marginLeft")) ||
            (p.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                Ie(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (p.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + U[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        Be.test(e) || (p.cssHooks[e + t].set = it);
    }),
    p.fn.extend({
      css: function (e, t) {
        return K(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (p.isArray(t)) {
              for (r = ze(e), i = t.length; a < i; a++)
                o[t[a]] = p.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return rt(this, !0);
      },
      hide: function () {
        return rt(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              V(this) ? p(this).show() : p(this).hide();
            });
      },
    }),
    (p.Tween = st),
    (st.prototype = {
      constructor: st,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || p.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (p.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = st.propHooks[this.prop];
        return e && e.get ? e.get(this) : st.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = st.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                p.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : st.propHooks._default.set(this),
          this
        );
      },
    }),
    (st.prototype.init.prototype = st.prototype),
    (st.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = p.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          p.fx.step[e.prop]
            ? p.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[p.cssProps[e.prop]] && !p.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : p.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (st.propHooks.scrollTop = st.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (p.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (p.fx = st.prototype.init),
    (p.fx.step = {});
  var ut,
    lt,
    ct,
    ft,
    dt,
    pt,
    ht,
    gt = /^(?:toggle|show|hide)$/,
    mt = /queueHooks$/;
  function vt() {
    return (
      e.setTimeout(function () {
        ut = void 0;
      }),
      (ut = p.now())
    );
  }
  function yt(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = U[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function xt(e, t, n) {
    for (
      var r,
        i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function bt(e, t, n) {
    var r,
      i,
      o = 0,
      a = bt.prefilters.length,
      s = p.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = ut || vt(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ut || vt(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = p.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = p.camelCase(n))]),
            (o = e[n]),
            p.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = p.cssHooks[r]) && ("expand" in a))
          ) {
            (o = a.expand(o)), delete e[r];
            for (n in o) (n in e) || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
      })(c, l.opts.specialEasing);
      o < a;
      o++
    )
      if ((r = bt.prefilters[o].call(l, e, c, l.opts)))
        return (
          p.isFunction(r.stop) &&
            (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(r.stop, r)),
          r
        );
    return (
      p.map(c, xt, l),
      p.isFunction(l.opts.start) && l.opts.start.call(e, l),
      p.fx.timer(p.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (p.Animation = p.extend(bt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return Y(n.elem, e, X.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (bt.tweeners[n] = bt.tweeners[n] || []),
          bt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = this,
          d = {},
          h = e.style,
          g = e.nodeType && V(e),
          m = p._data(e, "fxshow");
        n.queue ||
          (null == (s = p._queueHooks(e, "fx")).unqueued &&
            ((s.unqueued = 0),
            (u = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || u();
            })),
          s.unqueued++,
          c.always(function () {
            c.always(function () {
              s.unqueued--, p.queue(e, "fx").length || s.empty.fire();
            });
          })),
          1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            "inline" ===
              ("none" === (l = p.css(e, "display"))
                ? p._data(e, "olddisplay") || Pe(e.nodeName)
                : l) &&
              "none" === p.css(e, "float") &&
              (f.inlineBlockNeedsLayout && "inline" !== Pe(e.nodeName)
                ? (h.zoom = 1)
                : (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            f.shrinkWrapBlocks() ||
              c.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              }));
        for (r in t)
          if (((i = t[r]), gt.exec(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }
            d[r] = (m && m[r]) || p.style(e, r);
          } else l = void 0;
        if (p.isEmptyObject(d))
          "inline" === ("none" === l ? Pe(e.nodeName) : l) && (h.display = l);
        else {
          m ? "hidden" in m && (g = m.hidden) : (m = p._data(e, "fxshow", {})),
            o && (m.hidden = !g),
            g
              ? p(e).show()
              : c.done(function () {
                  p(e).hide();
                }),
            c.done(function () {
              var t;
              p._removeData(e, "fxshow");
              for (t in d) p.style(e, t, d[t]);
            });
          for (r in d)
            (a = xt(g ? m[r] : 0, r, c)),
              r in m ||
                ((m[r] = a.start),
                g &&
                  ((a.end = a.start),
                  (a.start = "width" === r || "height" === r ? 1 : 0)));
        }
      },
    ],
    prefilter: function (e, t) {
      t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
    },
  })),
    (p.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? p.extend({}, e)
          : {
              complete: n || (!n && t) || (p.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !p.isFunction(t) && t),
            };
      return (
        (r.duration = p.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in p.fx.speeds
          ? p.fx.speeds[r.duration]
          : p.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          p.isFunction(r.old) && r.old.call(this),
            r.queue && p.dequeue(this, r.queue);
        }),
        r
      );
    }),
    p.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(V)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = p.isEmptyObject(e),
          o = p.speed(t, n, r),
          a = function () {
            var t = bt(this, p.extend({}, e), o);
            (i || p._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = p.timers,
              a = p._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && mt.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || p.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = p._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = p.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                p.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (e, t) {
      var n = p.fn[t];
      p.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(yt(t, !0), e, r, i);
      };
    }),
    p.each(
      {
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        p.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (p.timers = []),
    (p.fx.tick = function () {
      var e,
        t = p.timers,
        n = 0;
      for (ut = p.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || p.fx.stop(), (ut = void 0);
    }),
    (p.fx.timer = function (e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      lt || (lt = e.setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      e.clearInterval(lt), (lt = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (t, n) {
      return (
        (t = (p.fx && p.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (ft = r.createElement("input")),
    (dt = r.createElement("div")),
    (pt = r.createElement("select")),
    (ht = pt.appendChild(r.createElement("option"))),
    (dt = r.createElement("div")).setAttribute("className", "t"),
    (dt.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (ct = dt.getElementsByTagName("a")[0]),
    ft.setAttribute("type", "checkbox"),
    dt.appendChild(ft),
    ((ct = dt.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
    (f.getSetAttribute = "t" !== dt.className),
    (f.style = /top/.test(ct.getAttribute("style"))),
    (f.hrefNormalized = "/a" === ct.getAttribute("href")),
    (f.checkOn = !!ft.value),
    (f.optSelected = ht.selected),
    (f.enctype = !!r.createElement("form").enctype),
    (pt.disabled = !0),
    (f.optDisabled = !ht.disabled),
    (ft = r.createElement("input")).setAttribute("value", ""),
    (f.input = "" === ft.getAttribute("value")),
    (ft.value = "t"),
    ft.setAttribute("type", "radio"),
    (f.radioValue = "t" === ft.value);
  var wt = /\r/g,
    Tt = /[\x20\t\r\n\f]+/g;
  p.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = p.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, p(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : p.isArray(i) &&
                  (i = p.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                p.valHooks[this.type] ||
                p.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(wt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.trim(p.text(e)).replace(Tt, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || i < 0,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                (f.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !p.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = p(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = p.makeArray(t), a = i.length;
              a--;

            )
              if (((r = i[a]), p.inArray(p.valHooks.option.get(r), o) > -1))
                try {
                  r.selected = n = !0;
                } catch (e) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (e, t) {
          if (p.isArray(t)) return (e.checked = p.inArray(p(e).val(), t) > -1);
        },
      }),
        f.checkOn ||
          (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Ct,
    Et,
    Nt = p.expr.attrHandle,
    kt = /^(?:checked|selected)$/i,
    St = f.getSetAttribute,
    At = f.input;
  p.fn.extend({
    attr: function (e, t) {
      return K(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    },
  }),
    p.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? p.prop(e, t, n)
            : ((1 === o && p.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Et : Ct))),
              void 0 !== n
                ? null === n
                  ? void p.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = p.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!f.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(q);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = p.propFix[n] || n),
              p.expr.match.bool.test(n)
                ? (At && St) || !kt.test(n)
                  ? (e[r] = !1)
                  : (e[p.camelCase("default-" + n)] = e[r] = !1)
                : p.attr(e, n, ""),
              e.removeAttribute(St ? n : r);
      },
    }),
    (Et = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? p.removeAttr(e, n)
            : (At && St) || !kt.test(n)
            ? e.setAttribute((!St && p.propFix[n]) || n, n)
            : (e[p.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Nt[t] || p.find.attr;
      (At && St) || !kt.test(t)
        ? (Nt[t] = function (e, t, r) {
            var i, o;
            return (
              r ||
                ((o = Nt[t]),
                (Nt[t] = i),
                (i = null != n(e, t, r) ? t.toLowerCase() : null),
                (Nt[t] = o)),
              i
            );
          })
        : (Nt[t] = function (e, t, n) {
            if (!n)
              return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null;
          });
    }),
    (At && St) ||
      (p.attrHooks.value = {
        set: function (e, t, n) {
          if (!p.nodeName(e, "input")) return Ct && Ct.set(e, t, n);
          e.defaultValue = t;
        },
      }),
    St ||
      ((Ct = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          if (
            (r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n))
          )
            return t;
        },
      }),
      (Nt.id =
        Nt.name =
        Nt.coords =
          function (e, t, n) {
            var r;
            if (!n)
              return (r = e.getAttributeNode(t)) && "" !== r.value
                ? r.value
                : null;
          }),
      (p.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: Ct.set,
      }),
      (p.attrHooks.contenteditable = {
        set: function (e, t, n) {
          Ct.set(e, "" !== t && t, n);
        },
      }),
      p.each(["width", "height"], function (e, t) {
        p.attrHooks[t] = {
          set: function (e, n) {
            if ("" === n) return e.setAttribute(t, "auto"), n;
          },
        };
      })),
    f.style ||
      (p.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var Dt = /^(?:input|select|textarea|button|object)$/i,
    jt = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function (e, t) {
      return K(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = p.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (e) {}
        })
      );
    },
  }),
    p.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && p.isXMLDoc(e)) ||
              ((t = p.propFix[t] || t), (i = p.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = p.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Dt.test(e.nodeName) || (jt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.hrefNormalized ||
      p.each(["href", "src"], function (e, t) {
        p.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    f.optSelected ||
      (p.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    p.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        p.propFix[this.toLowerCase()] = this;
      }
    ),
    f.enctype || (p.propFix.enctype = "encoding");
  var Lt = /[\t\r\n\f]/g;
  function Ht(e) {
    return p.attr(e, "class") || "";
  }
  p.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).addClass(e.call(this, t, Ht(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(q) || []; (n = this[u++]); )
          if (
            ((i = Ht(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).removeClass(e.call(this, t, Ht(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(q) || []; (n = this[u++]); )
          if (
            ((i = Ht(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : p.isFunction(e)
        ? this.each(function (n) {
            p(this).toggleClass(e.call(this, n, Ht(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = p(this), o = e.match(q) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = Ht(this)) && p._data(this, "__className__", t),
                p.attr(
                  this,
                  "class",
                  t || !1 === e ? "" : p._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + Ht(n) + " ").replace(Lt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        p.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    p.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var qt = e.location,
    _t = p.now(),
    Ft = /\?/,
    Mt =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (p.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = p.trim(t + "");
    return i &&
      !p.trim(
        i.replace(Mt, function (e, t, i, o) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
          );
        })
      )
      ? Function("return " + i)()
      : p.error("Invalid JSON: " + t);
  }),
    (p.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? ((r = new e.DOMParser()), (n = r.parseFromString(t, "text/xml")))
          : (((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t));
      } catch (e) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          p.error("Invalid XML: " + t),
        n
      );
    });
  var Ot = /#.*$/,
    Rt = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bt = /^(?:GET|HEAD)$/,
    Wt = /^\/\//,
    It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    $t = {},
    zt = {},
    Xt = "*/".concat("*"),
    Ut = qt.href,
    Vt = It.exec(Ut.toLowerCase()) || [];
  function Yt(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(q) || [];
      if (p.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r.charAt(0)
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function Jt(e, t, n, r) {
    var i = {},
      o = e === zt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        p.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function Gt(e, t) {
    var n,
      r,
      i = p.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && p.extend(!0, e, n), e;
  }
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ut,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        Vt[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? Gt(Gt(e, p.ajaxSettings), t) : Gt(p.ajaxSettings, e);
    },
    ajaxPrefilter: Yt($t),
    ajaxTransport: Yt(zt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = p.ajaxSetup({}, n),
        d = f.context || f,
        h = f.context && (d.nodeType || d.jquery) ? p(d) : p.event,
        g = p.Deferred(),
        m = p.Callbacks("once memory"),
        v = f.statusCode || {},
        y = {},
        x = {},
        b = 0,
        w = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!c)
                for (c = {}; (t = Pt.exec(a)); ) c[t[1].toLowerCase()] = t[2];
              t = c[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || ((e = x[n] = x[n] || e), (y[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return b || (f.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (b < 2) for (t in e) v[t] = [v[t], e[t]];
              else T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return l && l.abort(t), C(0, t), this;
          },
        };
      if (
        ((g.promise(T).complete = m.add),
        (T.success = T.done),
        (T.error = T.fail),
        (f.url = ((t || f.url || Ut) + "")
          .replace(Ot, "")
          .replace(Wt, Vt[1] + "//")),
        (f.type = n.method || n.type || f.method || f.type),
        (f.dataTypes = p
          .trim(f.dataType || "*")
          .toLowerCase()
          .match(q) || [""]),
        null == f.crossDomain &&
          ((r = It.exec(f.url.toLowerCase())),
          (f.crossDomain = !(
            !r ||
            (r[1] === Vt[1] &&
              r[2] === Vt[2] &&
              (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                (Vt[3] || ("http:" === Vt[1] ? "80" : "443")))
          ))),
        f.data &&
          f.processData &&
          "string" != typeof f.data &&
          (f.data = p.param(f.data, f.traditional)),
        Jt($t, f, n, T),
        2 === b)
      )
        return T;
      (u = p.event && f.global) &&
        0 == p.active++ &&
        p.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Bt.test(f.type)),
        (o = f.url),
        f.hasContent ||
          (f.data &&
            ((o = f.url += (Ft.test(o) ? "&" : "?") + f.data), delete f.data),
          !1 === f.cache &&
            (f.url = Rt.test(o)
              ? o.replace(Rt, "$1_=" + _t++)
              : o + (Ft.test(o) ? "&" : "?") + "_=" + _t++)),
        f.ifModified &&
          (p.lastModified[o] &&
            T.setRequestHeader("If-Modified-Since", p.lastModified[o]),
          p.etag[o] && T.setRequestHeader("If-None-Match", p.etag[o])),
        ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", f.contentType),
        T.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
            : f.accepts["*"]
        );
      for (i in f.headers) T.setRequestHeader(i, f.headers[i]);
      if (f.beforeSend && (!1 === f.beforeSend.call(d, T, f) || 2 === b))
        return T.abort();
      w = "abort";
      for (i in { success: 1, error: 1, complete: 1 }) T[i](f[i]);
      if ((l = Jt(zt, f, n, T))) {
        if (((T.readyState = 1), u && h.trigger("ajaxSend", [T, f]), 2 === b))
          return T;
        f.async &&
          f.timeout > 0 &&
          (s = e.setTimeout(function () {
            T.abort("timeout");
          }, f.timeout));
        try {
          (b = 1), l.send(y, C);
        } catch (e) {
          if (!(b < 2)) throw e;
          C(-1, e);
        }
      } else C(-1, "No Transport");
      function C(t, n, r, i) {
        var c,
          y,
          x,
          w,
          C,
          E = n;
        2 !== b &&
          ((b = 2),
          s && e.clearTimeout(s),
          (l = void 0),
          (a = i || ""),
          (T.readyState = t > 0 ? 4 : 0),
          (c = (t >= 200 && t < 300) || 304 === t),
          r &&
            (w = (function (e, t, n) {
              for (
                var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];

              )
                u.shift(),
                  void 0 === i &&
                    (i = e.mimeType || t.getResponseHeader("Content-Type"));
              if (i)
                for (a in s)
                  if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break;
                  }
              if (u[0] in n) o = u[0];
              else {
                for (a in n) {
                  if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break;
                  }
                  r || (r = a);
                }
                o = o || r;
              }
              if (o) return o !== u[0] && u.unshift(o), n[o];
            })(f, T, r)),
          (w = (function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o; )
              if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                (u = o),
                (o = c.shift()))
              )
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                  if (e.crossDomain && "script" === o) continue;
                  if (!(a = l[u + " " + o] || l["* " + o]))
                    for (i in l)
                      if (
                        (s = i.split(" "))[1] === o &&
                        (a = l[u + " " + s[0]] || l["* " + s[0]])
                      ) {
                        !0 === a
                          ? (a = l[i])
                          : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                        break;
                      }
                  if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else
                      try {
                        t = a(t);
                      } catch (e) {
                        return {
                          state: "parsererror",
                          error: a ? e : "No conversion from " + u + " to " + o,
                        };
                      }
                }
            return { state: "success", data: t };
          })(f, w, T, c)),
          c
            ? (f.ifModified &&
                ((C = T.getResponseHeader("Last-Modified")) &&
                  (p.lastModified[o] = C),
                (C = T.getResponseHeader("etag")) && (p.etag[o] = C)),
              204 === t || "HEAD" === f.type
                ? (E = "nocontent")
                : 304 === t
                ? (E = "notmodified")
                : ((E = w.state), (y = w.data), (c = !(x = w.error))))
            : ((x = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
          (T.status = t),
          (T.statusText = (n || E) + ""),
          c ? g.resolveWith(d, [y, E, T]) : g.rejectWith(d, [T, E, x]),
          T.statusCode(v),
          (v = void 0),
          u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? y : x]),
          m.fireWith(d, [T, E]),
          u &&
            (h.trigger("ajaxComplete", [T, f]),
            --p.active || p.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return p.get(e, void 0, t, "script");
    },
  }),
    p.each(["get", "post"], function (e, t) {
      p[t] = function (e, n, r, i) {
        return (
          p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          p.ajax(
            p.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              p.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (p._evalUrl = function (e) {
      return p.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    p.fn.extend({
      wrapAll: function (e) {
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return p.isFunction(e)
          ? this.each(function (t) {
              p(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = p(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p.isFunction(e);
        return this.each(function (n) {
          p(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (e) {
      return f.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : (function (e) {
            if (!p.contains(e.ownerDocument || r, e)) return !0;
            for (; e && 1 === e.nodeType; ) {
              if (
                "none" ===
                  (((t = e).style && t.style.display) || p.css(t, "display")) ||
                "hidden" === e.type
              )
                return !0;
              e = e.parentNode;
            }
            var t;
            return !1;
          })(e);
    }),
    (p.expr.filters.visible = function (e) {
      return !p.expr.filters.hidden(e);
    });
  var Qt = /%20/g,
    Kt = /\[\]$/,
    Zt = /\r?\n/g,
    en = /^(?:submit|button|image|reset|file)$/i,
    tn = /^(?:input|select|textarea|keygen)/i;
  function nn(e, t, n, r) {
    var i;
    if (p.isArray(t))
      p.each(t, function (t, i) {
        n || Kt.test(e)
          ? r(e, i)
          : nn(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== p.type(t)) r(e, t);
    else for (i in t) nn(e + "[" + i + "]", t[i], n, r);
  }
  (p.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
      p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
    )
      p.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) nn(n, e[n], t, i);
    return r.join("&").replace(Qt, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !p(this).is(":disabled") &&
              tn.test(this.nodeName) &&
              !en.test(e) &&
              (this.checked || !Z.test(e))
            );
          })
          .map(function (e, t) {
            var n = p(this).val();
            return null == n
              ? null
              : p.isArray(n)
              ? p.map(n, function (e) {
                  return { name: t.name, value: e.replace(Zt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Zt, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return this.isLocal
              ? un()
              : r.documentMode > 8
              ? sn()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  sn()) ||
                un();
          }
        : sn);
  var rn = 0,
    on = {},
    an = p.ajaxSettings.xhr();
  function sn() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function un() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in on) on[e](void 0, !0);
    }),
    (f.cors = !!an && "withCredentials" in an),
    (an = f.ajax = !!an) &&
      p.ajaxTransport(function (t) {
        var n;
        if (!t.crossDomain || f.cors)
          return {
            send: function (r, i) {
              var o,
                a = t.xhr(),
                s = ++rn;
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) a[o] = t.xhrFields[o];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
              a.send((t.hasContent && t.data) || null),
                (n = function (e, r) {
                  var o, u, l;
                  if (n && (r || 4 === a.readyState))
                    if (
                      (delete on[s],
                      (n = void 0),
                      (a.onreadystatechange = p.noop),
                      r)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (l = {}),
                        (o = a.status),
                        "string" == typeof a.responseText &&
                          (l.text = a.responseText);
                      try {
                        u = a.statusText;
                      } catch (e) {
                        u = "";
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = l.text ? 200 : 404);
                    }
                  l && i(o, u, l, a.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === a.readyState
                    ? e.setTimeout(n)
                    : (a.onreadystatechange = on[s] = n)
                  : n();
            },
            abort: function () {
              n && n(void 0, !0);
            },
          };
      }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return p.globalEval(e), e;
        },
      },
    }),
    p.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    p.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = r.head || p("head")[0] || r.documentElement;
        return {
          send: function (i, o) {
            ((t = r.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || o(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var ln = [],
    cn = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = ln.pop() || p.expando + "_" + _t++;
      return (this[e] = !0), e;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (cn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              cn.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            p.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(cn, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || p.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? p(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), ln.push(i)),
              a && p.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (p.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || r);
      var i = C.exec(e),
        o = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = fe([e], t, o)),
          o && o.length && p(o).remove(),
          p.merge([], i.childNodes));
    });
  var fn = p.fn.load;
  function dn(e) {
    return p.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (p.fn.load = function (e, t, n) {
    if ("string" != typeof e && fn) return fn.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return (
      s > -1 && ((r = p.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      p.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      a.length > 0 &&
        p
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                a.each(function () {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    p.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        p.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (p.expr.filters.animated = function (e) {
      return p.grep(p.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (p.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = p.css(e, "position"),
          c = p(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = p.css(e, "top")),
          (u = p.css(e, "left")),
          ("absolute" === l || "fixed" === l) && p.inArray("auto", [o, u]) > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          p.isFunction(t) && (t = t.call(e, n, p.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    p.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                p.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          o = i && i.ownerDocument;
        return o
          ? ((t = o.documentElement),
            p.contains(t, i)
              ? (void 0 !== i.getBoundingClientRect &&
                  (r = i.getBoundingClientRect()),
                (n = dn(o)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === p.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                p.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += p.css(e[0], "borderTopWidth", !0)),
                (n.left += p.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - p.css(r, "marginTop", !0),
              left: t.left - n.left - p.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !p.nodeName(e, "html") && "static" === p.css(e, "position");

          )
            e = e.offsetParent;
          return e || $e;
        });
      },
    }),
    p.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function (r) {
          return K(
            this,
            function (e, r, i) {
              var o = dn(e);
              if (void 0 === i)
                return o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[r]
                  : e[r];
              o
                ? o.scrollTo(
                    n ? p(o).scrollLeft() : i,
                    n ? i : p(o).scrollTop()
                  )
                : (e[r] = i);
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    p.each(["top", "left"], function (e, t) {
      p.cssHooks[t] = Ve(f.pixelPosition, function (e, n) {
        if (n)
          return (n = Xe(e, t)), We.test(n) ? p(e).position()[t] + "px" : n;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (e, t) {
      p.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          p.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === i ? "margin" : "border");
            return K(
              this,
              function (t, n, r) {
                var i;
                return p.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? p.css(t, n, a)
                  : p.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    p.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (p.fn.size = function () {
      return this.length;
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var pn = e.jQuery,
    hn = e.$;
  return (
    (p.noConflict = function (t) {
      return e.$ === p && (e.$ = hn), t && e.jQuery === p && (e.jQuery = pn), p;
    }),
    t || (e.jQuery = e.$ = p),
    p
  );
});

/*------ jquery-noconflict.js ------*/
jQuery.noConflict();

/*------ jquery-migrate.min.js ------*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] ||
        ((f[c] = !0),
        a.migrateWarnings.push(c),
        d &&
          d.warn &&
          !a.migrateMute &&
          (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
    }
    function e(b, c, e, f) {
      if (Object.defineProperty)
        try {
          return void Object.defineProperty(b, c, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return d(f), e;
            },
            set: function (a) {
              d(f), (e = a);
            },
          });
        } catch (g) {}
      (a._definePropertyBroken = !0), (b[c] = e);
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    (a.migrateWarnings = []),
      b.console &&
        b.console.log &&
        b.console.log(
          "JQMIGRATE: Migrate is installed" +
            (a.migrateMute ? "" : " with logging active") +
            ", version " +
            a.migrateVersion
        ),
      a.migrateTrace === c && (a.migrateTrace = !0),
      (a.migrateReset = function () {
        (f = {}), (a.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
      h = a.attr,
      i =
        (a.attrHooks.value && a.attrHooks.value.get) ||
        function () {
          return null;
        },
      j =
        (a.attrHooks.value && a.attrHooks.value.set) ||
        function () {
          return c;
        },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
      (a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(),
          o = b && b.nodeType;
        return i &&
          (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
          b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e])))
          ? a(b)[e](f)
          : ("type" === e &&
              f !== c &&
              k.test(b.nodeName) &&
              b.parentNode &&
              d("Can't change the 'type' of an input or button in IE 6/7/8"),
            !a.attrHooks[j] &&
              m.test(j) &&
              ((a.attrHooks[j] = {
                get: function (b, d) {
                  var e,
                    f = a.prop(b, d);
                  return f === !0 ||
                    ("boolean" != typeof f &&
                      (e = b.getAttributeNode(d)) &&
                      e.nodeValue !== !1)
                    ? d.toLowerCase()
                    : c;
                },
                set: function (b, c, d) {
                  var e;
                  return (
                    c === !1
                      ? a.removeAttr(b, d)
                      : ((e = a.propFix[d] || d),
                        e in b && (b[e] = !0),
                        b.setAttribute(d, d.toLowerCase())),
                    d
                  );
                },
              }),
              n.test(j) &&
                d(
                  "jQuery.fn.attr('" +
                    j +
                    "') might use property instead of attribute"
                )),
            h.call(a, b, e, f));
      }),
      (a.attrHooks.value = {
        get: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? i.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value') no longer gets properties"),
              b in a ? a.value : null);
        },
        set: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? j.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value', val) no longer sets properties"),
              void (a.value = b));
        },
      });
    var o,
      p,
      q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    (a.fn.init = function (b, e, f) {
      var g, h;
      return b &&
        "string" == typeof b &&
        !a.isPlainObject(e) &&
        (g = w.exec(a.trim(b))) &&
        g[0] &&
        (t.test(b) || d("$(html) HTML strings must start with '<' character"),
        g[3] && d("$(html) HTML text after last tag is ignored"),
        "#" === g[0].charAt(0) &&
          (d("HTML string cannot start with a '#' character"),
          a.error("JQMIGRATE: Invalid selector string (XSS)")),
        e && e.context && e.context.nodeType && (e = e.context),
        a.parseHTML)
        ? q.call(
            this,
            a.parseHTML(g[2], (e && e.ownerDocument) || e || document, !0),
            e,
            f
          )
        : ((h = q.apply(this, arguments)),
          b && b.selector !== c
            ? ((h.selector = b.selector), (h.context = b.context))
            : ((h.selector = "string" == typeof b ? b : ""),
              b && (h.context = b.nodeType ? b : e || document)),
          h);
    }),
      (a.fn.init.prototype = a.fn),
      (a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
          try {
            document.querySelector(a);
          } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
              return "[" + b + c + '"' + d + '"]';
            });
            try {
              document.querySelector(a),
                d("Attribute selector with '#' must be quoted: " + b[0]),
                (b[0] = a);
            } catch (e) {
              d("Attribute selector with '#' was not fixed: " + b[0]);
            }
          }
        return r.apply(this, b);
      });
    var x;
    for (x in r)
      Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    (a.parseJSON = function (a) {
      return a
        ? s.apply(this, arguments)
        : (d("jQuery.parseJSON requires a valid JSON string"), null);
    }),
      (a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
      a.browser ||
        ((o = a.uaMatch(navigator.userAgent)),
        (p = {}),
        o.browser && ((p[o.browser] = !0), (p.version = o.version)),
        p.chrome ? (p.webkit = !0) : p.webkit && (p.safari = !0),
        (a.browser = p)),
      e(a, "browser", a.browser, "jQuery.browser is deprecated"),
      (a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode),
      e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
      e(
        a.support,
        "boxModel",
        a.support.boxModel,
        "jQuery.support.boxModel is deprecated"
      ),
      (a.sub = function () {
        function b(a, c) {
          return new b.fn.init(a, c);
        }
        a.extend(!0, b, this),
          (b.superclass = this),
          (b.fn = b.prototype = this()),
          (b.fn.constructor = b),
          (b.sub = this.sub),
          (b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f);
          }),
          (b.fn.init.prototype = b.fn);
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b;
      }),
      (a.fn.size = function () {
        return (
          d("jQuery.fn.size() is deprecated; use the .length property"),
          this.length
        );
      });
    var y = !1;
    a.swap &&
      a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d &&
          (a.cssHooks[c].get = function () {
            var a;
            return (y = !0), (a = d.apply(this, arguments)), (y = !1), a;
          });
      }),
      (a.swap = function (a, b, c, e) {
        var f,
          g,
          h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f;
      }),
      a.ajaxSetup({ converters: { "text json": a.parseJSON } });
    var z = a.fn.data;
    a.fn.data = function (b) {
      var e,
        f,
        g = this[0];
      return !g ||
        "events" !== b ||
        1 !== arguments.length ||
        ((e = a.data(g, b)),
        (f = a._data(g, b)),
        (e !== c && e !== f) || f === c)
        ? z.apply(this, arguments)
        : (d("Use of jQuery.fn.data('events') is deprecated"), f);
    };
    var A = /\/(java|ecma)script/i;
    a.clean ||
      (a.clean = function (b, c, e, f) {
        (c = c || document),
          (c = (!c.nodeType && c[0]) || c),
          (c = c.ownerDocument || c),
          d("jQuery.clean() is deprecated");
        var g,
          h,
          i,
          j,
          k = [];
        if ((a.merge(k, a.buildFragment(b, c).childNodes), e))
          for (
            i = function (a) {
              return !a.type || A.test(a.type)
                ? f
                  ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                  : e.appendChild(a)
                : void 0;
            },
              g = 0;
            null != (h = k[g]);
            g++
          )
            (a.nodeName(h, "script") && i(h)) ||
              (e.appendChild(h),
              "undefined" != typeof h.getElementsByTagName &&
                ((j = a.grep(a.merge([], h.getElementsByTagName("script")), i)),
                k.splice.apply(k, [g + 1, 0].concat(j)),
                (g += j.length)));
        return k;
      });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function (b) {
        return "string" != typeof b || a.event.special.hover
          ? b
          : (K.test(b) &&
              d(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            b && b.replace(K, "mouseenter$1 mouseleave$1"));
      };
    a.event.props &&
      "attrChange" !== a.event.props[0] &&
      a.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      a.event.dispatch &&
        e(
          a.event,
          "handle",
          a.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (a.event.add = function (a, b, c, e, f) {
        a !== document &&
          J.test(b) &&
          d("AJAX events should be attached to document: " + b),
          B.call(this, a, L(b || ""), c, e, f);
      }),
      (a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e);
      }),
      a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
          var a = Array.prototype.slice.call(arguments, 0);
          return "load" === c && "string" == typeof a[0]
            ? H.apply(this, a)
            : (d("jQuery.fn." + c + "() is deprecated"),
              a.splice(0, 0, c),
              arguments.length
                ? this.bind.apply(this, a)
                : (this.triggerHandler.apply(this, a), this));
        };
      }),
      (a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
          return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments,
          f = b.guid || a.guid++,
          g = 0,
          h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return (
              a._data(this, "lastToggle" + b.guid, d + 1),
              c.preventDefault(),
              e[d].apply(this, arguments) || !1
            );
          };
        for (h.guid = f; g < e.length; ) e[g++].guid = f;
        return this.click(h);
      }),
      (a.fn.live = function (b, c, e) {
        return (
          d("jQuery.fn.live() is deprecated"),
          F
            ? F.apply(this, arguments)
            : (a(this.context).on(b, this.selector, c, e), this)
        );
      }),
      (a.fn.die = function (b, c) {
        return (
          d("jQuery.fn.die() is deprecated"),
          G
            ? G.apply(this, arguments)
            : (a(this.context).off(b, this.selector || "**", c), this)
        );
      }),
      (a.event.trigger = function (a, b, c, e) {
        return (
          c || J.test(a) || d("Global events are undocumented and deprecated"),
          D.call(this, a, b, c || document, e)
        );
      }),
      a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
          setup: function () {
            var b = this;
            return (
              b !== document &&
                (a.event.add(document, c + "." + a.guid, function () {
                  a.event.trigger(
                    c,
                    Array.prototype.slice.call(arguments, 1),
                    b,
                    !0
                  );
                }),
                a._data(this, c, a.guid++)),
              !1
            );
          },
          teardown: function () {
            return (
              this !== document &&
                a.event.remove(document, c + "." + a._data(this, c)),
              !1
            );
          },
        };
      }),
      (a.event.special.ready = {
        setup: function () {
          this === document && d("'ready' event is deprecated");
        },
      });
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (
      ((a.fn.andSelf = function () {
        return (
          d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
          M.apply(this, arguments)
        );
      }),
      (a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return (
          (b.context = this.context),
          (b.selector = this.selector ? this.selector + " " + a : a),
          b
        );
      }),
      a.Callbacks)
    ) {
      var O = a.Deferred,
        P = [
          [
            "resolve",
            "done",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],
        ];
      a.Deferred = function (b) {
        var c = O(),
          e = c.promise();
        return (
          (c.pipe = e.pipe =
            function () {
              var b = arguments;
              return (
                d("deferred.pipe() is deprecated"),
                a
                  .Deferred(function (d) {
                    a.each(P, function (f, g) {
                      var h = a.isFunction(b[f]) && b[f];
                      c[g[1]](function () {
                        var b = h && h.apply(this, arguments);
                        b && a.isFunction(b.promise)
                          ? b
                              .promise()
                              .done(d.resolve)
                              .fail(d.reject)
                              .progress(d.notify)
                          : d[g[0] + "With"](
                              this === e ? d.promise() : this,
                              h ? [b] : arguments
                            );
                      });
                    }),
                      (b = null);
                  })
                  .promise()
              );
            }),
          (c.isResolved = function () {
            return (
              d("deferred.isResolved is deprecated"), "resolved" === c.state()
            );
          }),
          (c.isRejected = function () {
            return (
              d("deferred.isRejected is deprecated"), "rejected" === c.state()
            );
          }),
          b && b.call(c, c),
          c
        );
      };
    }
  })(jQuery, window);

/*------ jquery.parallax.js ------*/
!(function (t) {
  var n = t(window),
    a = n.height();
  n.resize(function () {
    a = n.height();
  }),
    (t.fn.parallax = function (o, r, i) {
      var s,
        c,
        e = t(this);
      function l() {
        var i = n.scrollTop();
        e.each(function () {
          var n = t(this),
            l = n.offset().top;
          l + s(n) < i ||
            l > i + a ||
            !e.data("sppbparallax") ||
            e.css(
              "backgroundPosition",
              o + " " + Math.round((c - i) * r) + "px"
            );
        });
      }
      e.data("sppbparallax", !0),
        e.css("backgroundAttachment", "fixed"),
        e.each(function () {
          c = e.offset().top;
        }),
        (s = i
          ? function (t) {
              return t.outerHeight(!0);
            }
          : function (t) {
              return t.height();
            }),
        (arguments.length < 1 || null === o) && (o = "50%"),
        (arguments.length < 2 || null === r) && (r = 0.15),
        (arguments.length < 3 || null === i) && (i = !0),
        n.bind("scroll", l).resize(l),
        l();
    }),
    (t.fn.parallaxDestroy = function (n, a) {
      var o = t(this);
      o.data("sppbparallax") &&
        (n
          ? o.css("backgroundPosition", n)
          : o.css("backgroundPosition", "0% 0%"),
        a
          ? o.css("backgroundAttachment", a)
          : o.css("backgroundAttachment", "inherit"),
        o.data("sppbparallax", !1));
    });
})(jQuery);

/*------ sppagebuilder.js ------*/
!(function (t) {
  "use strict";
  var e = '[data-dismiss="sppb-alert"]',
    i = function (i) {
      t(i).on("click", e, this.close);
    };
  (i.VERSION = "3.2.0"),
    (i.prototype.close = function (e) {
      var i = t(this),
        n = i.attr("data-target");
      n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
      var s = t(n);
      function o() {
        s.detach().trigger("closed.sppb.alert").remove();
      }
      e && e.preventDefault(),
        s.length || (s = i.hasClass("sppb-alert") ? i : i.parent()),
        s.trigger((e = t.Event("close.sppb.alert"))),
        e.isDefaultPrevented() ||
          (s.removeClass("in"),
          t.support.transition && s.hasClass("sppb-fade")
            ? s.one("bsTransitionEnd", o).emulateTransitionEnd(150)
            : o());
    });
  var n = t.fn.spbalert;
  (t.fn.spbalert = function (e) {
    return this.each(function () {
      var n = t(this),
        s = n.data("sppb.alert");
      s || n.data("sppb.alert", (s = new i(this))),
        "string" == typeof e && s[e].call(n);
    });
  }),
    (t.fn.spbalert.Constructor = i),
    (t.fn.spbalert.noConflict = function () {
      return (t.fn.spbalert = n), this;
    }),
    t(document).on("click.sppb.alert.data-api", e, i.prototype.close);
})(jQuery),
  (function (t) {
    "use strict";
    var e = function (e, i) {
      (this.$element = t(e).on(
        "keydown.sppb.carousel",
        t.proxy(this.keydown, this)
      )),
        (this.$indicators = this.$element.find(".sppb-carousel-indicators")),
        (this.options = i),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        "hover" == this.options.pause &&
          this.$element
            .on("mouseenter.sppb.carousel", t.proxy(this.pause, this))
            .on("mouseleave.sppb.carousel", t.proxy(this.cycle, this));
    };
    function i(i) {
      return this.each(function () {
        var n = t(this),
          s = n.data("sppb.carousel"),
          o = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
          a = "string" == typeof i ? i : o.slide;
        s || n.data("sppb.carousel", (s = new e(this, o))),
          "number" == typeof i
            ? s.to(i)
            : a
            ? s[a]()
            : o.interval && s.pause().cycle();
      });
    }
    (e.VERSION = "3.2.0"),
      (e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
      (e.prototype.keydown = function (t) {
        switch (t.which) {
          case 37:
            this.prev();
            break;
          case 39:
            this.next();
            break;
          default:
            return;
        }
        t.preventDefault();
      }),
      (e.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (e.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".sppb-item")),
          this.$items.index(t || this.$active)
        );
      }),
      (e.prototype.to = function (e) {
        var i = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".sppb-item.active"))
          );
        if (!(e > this.$items.length - 1 || e < 0))
          return this.sliding
            ? this.$element.one("slid.sppb.carousel", function () {
                i.to(e);
              })
            : n == e
            ? this.pause().cycle()
            : this.slide(e > n ? "next" : "prev", t(this.$items[e]));
      }),
      (e.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (e.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (e.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (e.prototype.slide = function (e, i) {
        var n = this.$element.find(".sppb-item.active"),
          s = i || n[e](),
          o = this.interval,
          a = "next" == e ? "left" : "right",
          r = "next" == e ? "first" : "last",
          p = this;
        if (!s.length) {
          if (!this.options.wrap) return;
          s = this.$element.find(".sppb-item")[r]();
        }
        if (s.hasClass("active")) return (this.sliding = !1);
        var l = s[0],
          d = t.Event("slide.sppb.carousel", {
            relatedTarget: l,
            direction: a,
          });
        if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), o && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var h = t(this.$indicators.children()[this.getItemIndex(s)]);
            h && h.addClass("active");
          }
          var c = t.Event("slid.sppb.carousel", {
            relatedTarget: l,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("sppb-slide")
              ? (s.addClass(e),
                s[0].offsetWidth,
                n.addClass(a),
                s.addClass(a),
                n
                  .one("bsTransitionEnd", function () {
                    s.removeClass([e, a].join(" ")).addClass("active"),
                      n.removeClass(["active", a].join(" ")),
                      (p.sliding = !1),
                      setTimeout(function () {
                        p.$element.trigger(c);
                      }, 0);
                  })
                  .emulateTransitionEnd(
                    1e3 * n.css("transition-duration").slice(0, -1)
                  ))
              : (n.removeClass("active"),
                s.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(c)),
            o && this.cycle(),
            this
          );
        }
      });
    var n = t.fn.sppbcarousel;
    (t.fn.sppbcarousel = i),
      (t.fn.sppbcarousel.Constructor = e),
      (t.fn.sppbcarousel.noConflict = function () {
        return (t.fn.sppbcarousel = n), this;
      }),
      t(document).ready(function () {
        t(".sppb-carousel").each(function (e) {
          var i = t(this).find(".sppb-item"),
            n = "sppb-carousel" + (e + 1),
            s = "";
          t(this).attr("id", n);
          for (var o = 0; o < i.length; o++)
            s +=
              0 == o
                ? '<li data-sppb-target="#' +
                  n +
                  '" class="active" data-sppb-slide-to="0"></li>'
                : '\n<li data-sppb-target="#' +
                  n +
                  '" data-sppb-slide-to="' +
                  o +
                  '"></li>';
          t(this).find(">.sppb-carousel-indicators").html(s),
            t(this)
              .find(".sppb-carousel-control")
              .attr("href", "#" + n),
            t(this).find(".sppb-item").first().addClass("active");
        });
      }),
      t(document).on(
        "click.sppb.carousel.data-api",
        "[data-slide], [data-sppb-slide-to]",
        function (e) {
          var n,
            s = t(this),
            o = t(
              s.attr("data-sppb-target") ||
                ((n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
            );
          if (o.hasClass("sppb-carousel")) {
            var a = t.extend({}, o.data(), s.data()),
              r = s.attr("data-sppb-slide-to");
            r && (a.interval = !1),
              i.call(o, a),
              r && o.data("sppb.carousel").to(r),
              e.preventDefault();
          }
        }
      ),
      t(window).on("load", function () {
        if (
          (t('[data-sppb-ride="sppb-carousel"]').each(function () {
            var e = t(this);
            i.call(e, e.data());
          }),
          t(window).width() < 767)
        ) {
          var e = t(".sppb-carousel-pro-inner-content").outerHeight(!0) + 50;
          t(".sppb-carousel-pro .sppb-item > img").css({ height: e });
        }
      });
  })(jQuery),
  (function (t) {
    "use strict";
    t(document).on("click", ".sppb-panel-heading", function (e) {
      e.preventDefault();
      var i = t(this).closest(".sppb-panel-group").find(">div"),
        n = i.find(".sppb-panel-heading"),
        s = i.find(".sppb-panel-collapse");
      t(this).hasClass("active")
        ? (t(this).removeClass("active"), s.slideUp())
        : (n.removeClass("active"),
          s.slideUp(),
          t(this).addClass("active").next().slideDown());
    });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = function (e) {
      this.element = t(e);
    };
    function i(i) {
      return this.each(function () {
        var n = t(this),
          s = n.data("sppb.tab");
        s || n.data("sppb.tab", (s = new e(this))),
          "string" == typeof i && s[i]();
      });
    }
    (e.VERSION = "3.2.0"),
      (e.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          n = e.data("target");
        if (
          (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
          !e.parent("li").hasClass("active"))
        ) {
          var s = i.find(".active:last a")[0],
            o = t.Event("show.sppb.tab", { relatedTarget: s });
          if ((e.trigger(o), !o.isDefaultPrevented())) {
            var a = t(n);
            this.activate(e.closest("li"), i),
              this.activate(a, a.parent(), function () {
                e.trigger({ type: "shown.sppb.tab", relatedTarget: s });
              });
          }
        }
      }),
      (e.prototype.activate = function (e, i, n) {
        var s = i.find("> .active"),
          o = n && t.support.transition && s.hasClass("sppb-fade");
        function a() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active"),
            e.addClass("active"),
            o
              ? (e[0].offsetWidth, e.addClass("in"))
              : e.removeClass("sppb-fade"),
            e.parent(".dropdown-menu") &&
              e.closest("li.dropdown").addClass("active"),
            n && n();
        }
        o ? s.one("bsTransitionEnd", a).emulateTransitionEnd(150) : a(),
          s.removeClass("in");
      });
    var n = t.fn.sppbtab;
    (t.fn.sppbtab = i),
      (t.fn.sppbtab.Constructor = e),
      (t.fn.sppbtab.noConflict = function () {
        return (t.fn.sppbtab = n), this;
      }),
      t(document).ready(function () {
        t(".sppb-tab").each(function (e) {
          var i = "sppb-tab" + (e + 1);
          t(this)
            .find(">.sppb-nav")
            .children()
            .each(function (e) {
              t(this)
                .find(">a")
                .attr("href", "#" + i + "-" + (e + 1));
            }),
            t(this)
              .find(">.sppb-tab-content")
              .children()
              .each(function (e) {
                t(this).attr("id", i + "-" + (e + 1));
              });
        });
      }),
      t(document).on(
        "click.sppb.tab.data-api",
        '[data-toggle="sppb-tab"], [data-toggle="sppb-pill"]',
        function (e) {
          e.preventDefault(), i.call(t(this), "show");
        }
      );
  })(jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("sppbtooltip", t, e);
    };
    (e.VERSION = "3.2.0"),
      (e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="sppb-tooltip" role="tooltip"><div class="sppb-tooltip-arrow"></div><div class="sppb-tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (e.prototype.init = function (e, i, n) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            t(this.options.viewport.selector || this.options.viewport));
        for (var s = this.options.trigger.split(" "), o = s.length; o--; ) {
          var a = s[o];
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
              p = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                p + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e))
            .delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (e.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, n) {
              i[t] != n && (e[t] = n);
            }),
          e
        );
      }),
      (e.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("sppb." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("sppb." + this.type, i)),
          clearTimeout(i.timeout),
          (i.hoverState = "in"),
          !i.options.delay || !i.options.delay.show)
        )
          return i.show();
        i.timeout = setTimeout(function () {
          "in" == i.hoverState && i.show();
        }, i.options.delay.show);
      }),
      (e.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("sppb." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("sppb." + this.type, i)),
          clearTimeout(i.timeout),
          (i.hoverState = "out"),
          !i.options.delay || !i.options.delay.hide)
        )
          return i.hide();
        i.timeout = setTimeout(function () {
          "out" == i.hoverState && i.hide();
        }, i.options.delay.hide);
      }),
      (e.prototype.show = function () {
        var e = t.Event("show.sppb." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(document.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !i) return;
          var n = this,
            s = this.tip(),
            o = this.getUID(this.type);
          this.setContent(),
            s.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && s.addClass("sppb-fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, s[0], this.$element[0])
                : this.options.placement,
            r = /\s?auto?\s?/i,
            p = r.test(a);
          p && (a = a.replace(r, "") || "top"),
            s
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("sppb." + this.type, this),
            this.options.container
              ? s.appendTo(this.options.container)
              : s.insertAfter(this.$element);
          var l = this.getPosition(),
            d = s[0].offsetWidth,
            h = s[0].offsetHeight;
          if (p) {
            var c = a,
              u = this.$element.parent(),
              f = this.getPosition(u);
            (a =
              "bottom" == a && l.top + l.height + h - f.scroll > f.height
                ? "top"
                : "top" == a && l.top - f.scroll - h < 0
                ? "bottom"
                : "right" == a && l.right + d > f.width
                ? "left"
                : "left" == a && l.left - d < f.left
                ? "right"
                : a),
              s.removeClass(c).addClass(a);
          }
          var v = this.getCalculatedOffset(a, l, d, h);
          this.applyPlacement(v, a);
          var m = function () {
            n.$element.trigger("shown.sppb." + n.type), (n.hoverState = null);
          };
          t.support.transition && this.$tip.hasClass("sppb-")
            ? s.one("bsTransitionEnd", m).emulateTransitionEnd(150)
            : m();
        }
      }),
      (e.prototype.applyPlacement = function (e, i) {
        var n = this.tip(),
          s = n[0].offsetWidth,
          o = n[0].offsetHeight,
          a = parseInt(n.css("margin-top"), 10),
          r = parseInt(n.css("margin-left"), 10);
        isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (e.top = e.top + a),
          (e.left = e.left + r),
          t.offset.setOffset(
            n[0],
            t.extend(
              {
                using: function (t) {
                  n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          n.addClass("in");
        var p = n[0].offsetWidth,
          l = n[0].offsetHeight;
        "top" == i && l != o && (e.top = e.top + o - l);
        var d = this.getViewportAdjustedDelta(i, e, p, l);
        d.left ? (e.left += d.left) : (e.top += d.top);
        var h = d.left ? 2 * d.left - s + p : 2 * d.top - o + l,
          c = d.left ? "left" : "top",
          u = d.left ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(h, n[0][u], c);
      }),
      (e.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "");
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".sppb-tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("sppb-fade in top bottom left right");
      }),
      (e.prototype.hide = function () {
        var e = this,
          i = this.tip(),
          n = t.Event("hide.sppb." + this.type);
        function s() {
          "in" != e.hoverState && i.detach(),
            e.$element.trigger("hidden.sppb." + e.type);
        }
        if (
          (this.$element.removeAttr("aria-describedby"),
          this.$element.trigger(n),
          !n.isDefaultPrevented())
        )
          return (
            i.removeClass("in"),
            t.support.transition && this.$tip.hasClass("sppb-fade")
              ? i.one("bsTransitionEnd", s).emulateTransitionEnd(150)
              : s(),
            (this.hoverState = null),
            this
          );
      }),
      (e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (e.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0],
          n = "BODY" == i.tagName;
        return t.extend(
          {},
          "function" == typeof i.getBoundingClientRect
            ? i.getBoundingClientRect()
            : null,
          {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
            width: n ? t(window).width() : e.outerWidth(),
            height: n ? t(window).height() : e.outerHeight(),
          },
          n ? { top: 0, left: 0 } : e.offset()
        );
      }),
      (e.prototype.getCalculatedOffset = function (t, e, i, n) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
      }),
      (e.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) return s;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var r = e.top - o - a.scroll,
            p = e.top + o - a.scroll + n;
          r < a.top
            ? (s.top = a.top - r)
            : p > a.top + a.height && (s.top = a.top + a.height - p);
        } else {
          var l = e.left - o,
            d = e.left + o + i;
          l < a.left
            ? (s.left = a.left - l)
            : d > a.width && (s.left = a.left + a.width - d);
        }
        return s;
      }),
      (e.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (e.prototype.getUID = function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      }),
      (e.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow =
          this.$arrow || this.tip().find(".sppb-tooltip-arrow"));
      }),
      (e.prototype.validate = function () {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null));
      }),
      (e.prototype.enable = function () {
        this.enabled = !0;
      }),
      (e.prototype.disable = function () {
        this.enabled = !1;
      }),
      (e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (e.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("sppb." + this.type)) ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("sppb." + this.type, i))),
          i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
      }),
      (e.prototype.destroy = function () {
        clearTimeout(this.timeout),
          this.hide()
            .$element.off("." + this.type)
            .removeData("sppb." + this.type);
      });
    var i = t.fn.sppbtooltip;
    (t.fn.sppbtooltip = function (i) {
      return this.each(function () {
        var n = t(this),
          s = n.data("sppb.tooltip"),
          o = "object" == typeof i && i;
        (s || "destroy" != i) &&
          (s || n.data("sppb.tooltip", (s = new e(this, o))),
          "string" == typeof i && s[i]());
      });
    }),
      (t.fn.sppbtooltip.Constructor = e),
      (t.fn.sppbtooltip.noConflict = function () {
        return (t.fn.sppbtooltip = i), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = function (t, e) {
      this.init("sppbpopover", t, e);
    };
    if (!t.fn.sppbtooltip) throw new Error("Popover requires tooltip.js");
    (e.VERSION = "3.2.0"),
      (e.DEFAULTS = t.extend({}, t.fn.sppbtooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="sppb-popover" role="tooltip"><div class="arrow"></div><h3 class="sppb-popover-title"></h3><div class="sppb-popover-content"></div></div>',
      })),
      (e.prototype = t.extend({}, t.fn.sppbtooltip.Constructor.prototype)),
      (e.prototype.constructor = e),
      (e.prototype.getDefaults = function () {
        return e.DEFAULTS;
      }),
      (e.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".sppb-popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".sppb-popover-content")
            .empty()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("sppb-fade top bottom left right in"),
          t.find(".sppb-popover-title").html() ||
            t.find(".sppb-popover-title").hide();
      }),
      (e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (e.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (e.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (e.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var i = t.fn.sppbpopover;
    (t.fn.sppbpopover = function (i) {
      return this.each(function () {
        var n = t(this),
          s = n.data("sppb.popover"),
          o = "object" == typeof i && i;
        (s || "destroy" != i) &&
          (s || n.data("sppb.popover", (s = new e(this, o))),
          "string" == typeof i && s[i]());
      });
    }),
      (t.fn.sppbpopover.Constructor = e),
      (t.fn.sppbpopover.noConflict = function () {
        return (t.fn.sppbpopover = i), this;
      });
  })(jQuery),
  (function (t) {
    "use strict";
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        n = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      return (
        setTimeout(function () {
          i || t(n).trigger(t.support.transition.end);
        }, e),
        this
      );
    }),
      t(function () {
        (t.support.transition = (function () {
          var t = document.createElement("bootstrap"),
            e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
          return !1;
        })()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery);
var carousel = jQuery(".carousel");
carousel &&
  jQuery(window).on("ready", function () {
    "undefined" != typeof jQuery &&
      "undefined" != typeof MooTools &&
      Element.implement({
        slide: function (t, e) {
          return this;
        },
      });
  }),
  function () {
    var t,
      e,
      i,
      n = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      s =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var i, n;
          for (i in e) (n = e[i]), null == t[i] && (t[i] = n);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        t
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, i, n, s;
              for (e = i = 0, n = (s = this.keys).length; n > i; e = ++i)
                if (s[e] === t) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var i, n, s, o;
              for (i = n = 0, s = (o = this.keys).length; s > n; i = ++n)
                if (o[i] === t) return void (this.values[i] = e);
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (t =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (t = (function () {
          function t() {
            console.warn("MutationObserver is not supported by your browser."),
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
          }
          return (
            (t.notSupported = !0), (t.prototype.observe = function () {}), t
          );
        })())),
      (this.SPPBWOW = (function () {
        function o(t) {
          null == t && (t = {}),
            (this.scrollCallback = n(this.scrollCallback, this)),
            (this.scrollHandler = n(this.scrollHandler, this)),
            (this.start = n(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            (this.animationNameCache = new i());
        }
        return (
          (o.prototype.defaults = {
            boxClass: "sppb-wow",
            animateClass: "sppb-animated",
            offset: 0,
            mobile: !0,
            live: !0,
          }),
          (o.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : document.addEventListener("DOMContentLoaded", this.start),
              (this.finished = [])
            );
          }),
          (o.prototype.start = function () {
            var e, i, n, s, o;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, i, n, s;
                for (
                  s = [],
                    t = 0,
                    i = (n = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    )).length;
                  i > t;
                  t++
                )
                  (e = n[t]), s.push(e);
                return s;
              }.call(this)),
              (this.all = function () {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.boxes).length; i > t; t++)
                  (e = n[t]), s.push(e);
                return s;
              }.call(this)),
              this.boxes.length,
              this.disabled())
            )
              this.resetStyle();
            else {
              for (i = 0, n = (s = this.boxes).length; n > i; i++)
                (e = s[i]), this.applyStyle(e, !0);
              window.addEventListener("scroll", this.scrollHandler, !1),
                window.addEventListener("resize", this.scrollHandler, !1),
                (this.interval = setInterval(this.scrollCallback, 50));
            }
            return this.config.live
              ? new t(
                  ((o = this),
                  function (t) {
                    var e, i, n, s, a;
                    for (a = [], n = 0, s = t.length; s > n; n++)
                      (i = t[n]),
                        a.push(
                          function () {
                            var t, n, s, o;
                            for (
                              o = [],
                                t = 0,
                                n = (s = i.addedNodes || []).length;
                              n > t;
                              t++
                            )
                              (e = s[t]), o.push(this.doSync(e));
                            return o;
                          }.call(o)
                        );
                    return a;
                  })
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0;
          }),
          (o.prototype.stop = function () {
            return (
              (this.stopped = !0),
              window.removeEventListener("scroll", this.scrollHandler, !1),
              window.removeEventListener("resize", this.scrollHandler, !1),
              null != this.interval ? clearInterval(this.interval) : void 0
            );
          }),
          (o.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0;
          }),
          (o.prototype.doSync = function (t) {
            var e, i, n, o, a;
            if (!this.stopped) {
              if ((null == t && (t = this.element), 1 !== t.nodeType)) return;
              for (
                a = [],
                  i = 0,
                  n = (o = (t = t.parentNode || t).querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                n > i;
                i++
              )
                (e = o[i]),
                  s.call(this.all, e) < 0
                    ? (this.applyStyle(e, !0),
                      this.boxes.push(e),
                      this.all.push(e),
                      a.push((this.scrolled = !0)))
                    : a.push(void 0);
              return a;
            }
          }),
          (o.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass)
            );
          }),
          (o.prototype.applyStyle = function (t, e) {
            var i, n, s, o;
            return (
              (n = t.getAttribute("data-sppb-wow-duration")),
              (i = t.getAttribute("data-sppb-wow-delay")),
              (s = t.getAttribute("data-sppb-wow-iteration")),
              this.animate(
                ((o = this),
                function () {
                  return o.customStyle(t, e, n, i, s);
                })
              )
            );
          }),
          (o.prototype.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (o.prototype.resetStyle = function () {
            var t, e, i, n, s;
            for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++)
              (t = n[e]),
                s.push(t.setAttribute("style", "visibility: visible;"));
            return s;
          }),
          (o.prototype.customStyle = function (t, e, i, n, s) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              i && this.vendorSet(t.style, { animationDuration: i }),
              n && this.vendorSet(t.style, { animationDelay: n }),
              s && this.vendorSet(t.style, { animationIterationCount: s }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (o.prototype.vendors = ["moz", "webkit"]),
          (o.prototype.vendorSet = function (t, e) {
            var i, n, s, o;
            for (i in ((o = []), e))
              (n = e[i]),
                (t["" + i] = n),
                o.push(
                  function () {
                    var e, o, a, r;
                    for (
                      r = [], e = 0, o = (a = this.vendors).length;
                      o > e;
                      e++
                    )
                      (s = a[e]),
                        r.push(
                          (t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] =
                            n)
                        );
                    return r;
                  }.call(this)
                );
            return o;
          }),
          (o.prototype.vendorCSS = function (t, e) {
            var i, n, s, o, a, r;
            for (
              i = (n = window.getComputedStyle(t)).getPropertyCSSValue(e),
                o = 0,
                a = (r = this.vendors).length;
              a > o;
              o++
            )
              (s = r[o]), (i = i || n.getPropertyCSSValue("-" + s + "-" + e));
            return i;
          }),
          (o.prototype.animationName = function (t) {
            var e;
            try {
              e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
              e = window.getComputedStyle(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
          }),
          (o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (o.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (o.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled ||
              ((this.scrolled = !1),
              (this.boxes = function () {
                var e, i, n, s;
                for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++)
                  (t = n[e]) && (this.isVisible(t) ? this.show(t) : s.push(t));
                return s;
              }.call(this)),
              this.boxes.length || this.config.live)
              ? void 0
              : this.stop();
          }),
          (o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (o.prototype.isVisible = function (t) {
            var e, i, n, s, o;
            return (
              (i =
                t.getAttribute("data-sppb-wow-offset") || this.config.offset),
              (s =
                (o = window.pageYOffset) +
                Math.min(this.element.clientHeight, innerHeight) -
                i),
              (e = (n = this.offsetTop(t)) + t.clientHeight),
              s >= n && e >= o
            );
          }),
          (o.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (o.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          o
        );
      })());
  }.call(this),
  jQuery(function (t) {
    new SPPBWOW().init();
  }),
  (function (t) {
    var e,
      i,
      n,
      s = {},
      o = document,
      a = window,
      r = o.documentElement,
      p = t.expando;
    function l() {
      var n,
        p,
        l,
        d,
        h = t(),
        c = 0;
      if (
        (t.each(s, function (t, e) {
          var i = e.data.selector,
            n = e.$element;
          h = h.add(i ? n.find(i) : n);
        }),
        (n = h.length))
      )
        for (
          e =
            e ||
            ((d = { height: a.innerHeight, width: a.innerWidth }).height ||
              (!(p = o.compatMode) && t.support.boxModel) ||
              (d = {
                height: (l = "CSS1Compat" === p ? r : o.body).clientHeight,
                width: l.clientWidth,
              }),
            d),
            i = i || {
              top: a.pageYOffset || r.scrollTop || o.body.scrollTop,
              left: a.pageXOffset || r.scrollLeft || o.body.scrollLeft,
            };
          c < n;
          c++
        )
          if (t.contains(r, h[c])) {
            var u,
              f,
              v,
              m = t(h[c]),
              b = m.height(),
              y = m.width(),
              g = m.offset(),
              w = m.data("inview");
            if (!i || !e) return;
            g.top + b > i.top &&
            g.top < i.top + e.height &&
            g.left + y > i.left &&
            g.left < i.left + e.width
              ? ((v =
                  (u =
                    i.left > g.left
                      ? "right"
                      : i.left + e.width < g.left + y
                      ? "left"
                      : "both") +
                  "-" +
                  (f =
                    i.top > g.top
                      ? "bottom"
                      : i.top + e.height < g.top + b
                      ? "top"
                      : "both")),
                (w && w === v) ||
                  m.data("inview", v).trigger("inview", [!0, u, f]))
              : w && m.data("inview", !1).trigger("inview", [!1]);
          }
    }
    (t.event.special.inview = {
      add: function (e) {
        (s[e.guid + "-" + this[p]] = { data: e, $element: t(this) }),
          n || t.isEmptyObject(s) || (n = setInterval(l, 250));
      },
      remove: function (e) {
        try {
          delete s[e.guid + "-" + this[p]];
        } catch (t) {}
        t.isEmptyObject(s) && (clearInterval(n), (n = null));
      },
    }),
      t(a).bind("scroll resize scrollstop", function () {
        e = i = null;
      }),
      !r.addEventListener &&
        r.attachEvent &&
        r.attachEvent("onfocusin", function () {
          i = null;
        }),
      t(document).on("inview", ".sppb-progress", function (e, i, n, s) {
        var o = t(this).find(".sppb-progress-bar");
        i && (o.css("width", o.data("width")), t(this).unbind("inview"));
      }),
      (t.fn.sppbanimateNumbers = function (e, i, n, s) {
        return this.each(function () {
          var o = t(this),
            a = parseInt(o.text().replace(/,/g, ""));
          (i = void 0 === i || i),
            t({ value: a }).animate(
              { value: e },
              {
                duration: null == n ? 1e3 : n,
                easing: null == s ? "swing" : s,
                step: function () {
                  o.text(Math.floor(this.value)),
                    i &&
                      o.text(
                        o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                      );
                },
                complete: function () {
                  parseInt(o.text()) !== e &&
                    (o.text(e),
                    i &&
                      o.text(
                        o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                      ));
                },
              }
            );
        });
      }),
      t(document).on("inview", ".sppb-animated-number", function (e, i, n, s) {
        var o = t(this);
        i &&
          (o.sppbanimateNumbers(o.data("digit"), !1, o.data("duration")),
          o.unbind("inview"));
      }),
      t(document).on("inview", ".sppb-pie-chart", function (e, i, n, s) {
        var o = t(this);
        if (i) {
          var a = {
            barColor: o.data("barcolor"),
            trackColor: o.data("trackcolor"),
            scaleColor: !1,
            lineWidth: o.data("width"),
            size: o.data("size"),
            onStep: function (t, e, i) {
              o.find(".sppb-chart-percent > span").text(Math.round(i) + "%");
            },
          };
          if (o.data("duration")) {
            var r = o.data("duration");
            a.animate = { duration: r, enabled: !0 };
          }
          o.easyPieChart(a), o.unbind("inview");
        }
      });
  })(jQuery),
  jQuery(function (t) {
    t(document).on("submit", ".sppb-ajaxt-contact-form", function (e) {
      e.preventDefault();
      var i = t(this),
        n = t(this).serializeArray(),
        s = {
          option: "com_sppagebuilder",
          task: "ajax",
          addon: "ajax_contact",
          "g-recaptcha-response": i.find("#g-recaptcha-response").val(),
          data: n,
        };
      return (
        t.ajax({
          type: "POST",
          data: s,
          beforeSend: function () {
            i.find(".fa").addClass("fa-spinner fa-spin");
          },
          success: function (e) {
            var n = t.parseJSON(e);
            try {
              var s = t.parseJSON(n.data),
                o = s.content,
                a = "json";
            } catch (t) {
              (o = n.data), (a = "strings");
            }
            "json" == a ? s.status && i.trigger("reset") : i.trigger("reset"),
              i.find(".fa-spin").removeClass("fa-spinner fa-spin"),
              i
                .next(".sppb-ajax-contact-status")
                .html(o)
                .fadeIn()
                .delay(4e3)
                .fadeOut(500);
          },
        }),
        !1
      );
    });
  }),
  jQuery(function (t) {
    t(document).on("submit", ".sppb-optin-form", function (e) {
      e.preventDefault();
      var i = t(this),
        n = t(this).serializeArray(),
        s = { name: "view_type", value: "page" };
      if (i.closest(".sp-page-builder").hasClass("mod-sppagebuilder")) {
        s.value = "module";
        var o = {
          name: "module_id",
          value: i.closest(".sp-page-builder").data("module_id"),
        };
        n.push(o);
      } else i.closest(".sp-page-builder").hasClass("sppb-article-page-wrapper") && (s.value = "article");
      n.push(s);
      var a = {
        option: "com_sppagebuilder",
        task: "ajax",
        addon: "optin_form",
        "g-recaptcha-response": i.find("#g-recaptcha-response").val(),
        data: n,
      };
      return (
        t.ajax({
          type: "POST",
          data: a,
          beforeSend: function () {
            i.find(".fa").addClass("fa-spinner fa-spin");
          },
          success: function (e) {
            var n = t.parseJSON(e),
              s = t.parseJSON(n.data),
              o = "sppb-alert sppb-alert-warning";
            if (s.status) {
              o = "sppb-alert sppb-alert-success";
              i.trigger("reset");
            }
            i.find(".fa-spin").removeClass("fa-spinner fa-spin"),
              i
                .next(".sppb-optin-form-status")
                .html('<p class="' + o + '">' + s.content + "</p>")
                .fadeIn()
                .delay(4e3)
                .fadeOut(1e3);
          },
        }),
        !1
      );
    });
  }),
  jQuery(function (t) {
    t(document).on("click", ".sppb-magnific-popup", function (e) {
      e.preventDefault();
      var i = t(this);
      i.magnificPopup({
        type: i.data("popup_type"),
        mainClass: i.data("mainclass"),
      }).magnificPopup("open");
    });
  }),
  jQuery(function (t) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? (t(
          ".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap"
        ).on("mouseover", function (e) {
          t(this).toggleClass("flip");
        }),
        t(document).on(
          "mouseenter",
          ".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap",
          function (e) {
            t(this).addClass("flip");
          }
        ),
        t(document).on(
          "mouseleave",
          ".sppb-addon-sppb-flibox .sppb-flipbox-panel, .threeD-flipbox .threeD-content-wrap",
          function (e) {
            t(this).removeClass("flip");
          }
        ))
      : (t(document).on(
          "click",
          ".sppb-addon-sppb-flibox.flipon-click .sppb-flipbox-panel, .threeD-flipbox.flipon-click .threeD-content-wrap",
          function (e) {
            t(this).toggleClass("flip");
          }
        ),
        t(document).on(
          "mouseenter",
          ".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap",
          function () {
            t(this).addClass("flip");
          }
        ),
        t(document).on(
          "mouseleave",
          ".sppb-addon-sppb-flibox.flipon-hover .sppb-flipbox-panel, .threeD-flipbox.flipon-hover .threeD-content-wrap",
          function () {
            t(this).removeClass("flip");
          }
        ));
  }),
  jQuery(function (t) {
    new MutationObserver(function (e) {
      e.forEach(function (e) {
        var i = e.addedNodes;
        null !== i &&
          t(i).each(function () {
            t(this)
              .find(".sppb-addon-countdown .sppb-countdown-timer")
              .each(function () {
                var e = t(this),
                  i = e.data("date") + " " + e.data("time");
                e.countdown(i, function (i) {
                  t(this)
                    .html(
                      i.strftime(
                        '<div class="sppb-countdown-days sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%-D</span><span class="sppb-countdown-text">%!D: ' +
                          Joomla.JText._("COM_SPPAGEBUILDER_DAY") +
                          "," +
                          Joomla.JText._("COM_SPPAGEBUILDER_DAYS") +
                          ';</span></div><div class="sppb-countdown-hours sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%H</span><span class="sppb-countdown-text">%!H: ' +
                          Joomla.JText._("COM_SPPAGEBUILDER_HOUR") +
                          "," +
                          Joomla.JText._("COM_SPPAGEBUILDER_HOURS") +
                          ';</span></div><div class="sppb-countdown-minutes sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%M</span><span class="sppb-countdown-text">%!M:' +
                          Joomla.JText._("COM_SPPAGEBUILDER_MINUTE") +
                          "," +
                          Joomla.JText._("COM_SPPAGEBUILDER_MINUTES") +
                          ';</span></div><div class="sppb-countdown-seconds sppb-col-xs-6 sppb-col-sm-3 sppb-text-center"><span class="sppb-countdown-number">%S</span><span class="sppb-countdown-text">%!S:' +
                          Joomla.JText._("COM_SPPAGEBUILDER_SECOND") +
                          "," +
                          Joomla.JText._("COM_SPPAGEBUILDER_SECONDS") +
                          ";</span></div>"
                      )
                    )
                    .on("finish.countdown", function () {
                      t(this).html(
                        '<div class="sppb-countdown-finishedtext-wrap sppb-col-xs-12 sppb-col-sm-12 sppb-text-center"><h3 class="sppb-countdown-finishedtext">' +
                          e.data("finish-text") +
                          "</h3></div>"
                      );
                    });
                });
              });
          });
      });
    }).observe(document.body, { childList: !0, subtree: !0 });
  }),
  (function (t) {
    var e = function (t) {
      (this.$heading = t.heading),
        (this.type = void 0 === t.type ? "word" : t.type),
        (this.animationDelay = 2500),
        (this.barAnimationDelay = 3800),
        (this.barWaiting = this.barAnimationDelay - 3e3),
        (this.lettersDelay = 50),
        (this.typeLettersDelay = 150),
        (this.selectionDuration = 500),
        (this.typeAnimationDelay = this.selectionDuration + 800),
        (this.revealDuration = 600),
        (this.revealAnimationDelay = 1500),
        (this.interval = 0),
        this.init();
    };
    (e.prototype.init = function () {
      var t = this.$heading.parent().find(".letters");
      this.singleLetters(t.find(".animated-text")),
        this.animateHeadline(this.$heading);
    }),
      (e.prototype.singleLetters = function (e) {
        e.each(function () {
          var e = t(this),
            n = e.text().split(""),
            s = e.hasClass("is-visible");
          for (i in n)
            e.parents(".animation-wave").length > 0 &&
              (n[i] = "<em>" + n[i] + "</em>"),
              (n[i] = s
                ? '<i class="in">' + n[i] + "</i>"
                : "<i>" + n[i] + "</i>");
          var o = n.join("");
          e.html(o).css("opacity", 1);
        });
      }),
      (e.prototype.animateHeadline = function (e) {
        var i = this.animationDelay,
          n = this;
        e.each(function () {
          var e = t(this);
          if (e.hasClass("loading-bar"))
            (i = n.barAnimationDelay),
              setTimeout(function () {
                e.find(".animated-text-words-wrapper").addClass("is-loading");
              }, n.barWaiting);
          else if (e.hasClass("text-clip")) {
            var s = e.find(".animated-text-words-wrapper"),
              o = s.width() + 10;
            s.css("width", o);
          } else if (!e.hasClass("type")) {
            var a = e.find(
              ".animated-text-words-wrapper .animated-text.is-visible"
            );
            n.setParentClassWidth(a, (delay = !1));
          }
          setTimeout(function () {
            n.hideWord(e.find("span.is-visible").eq(0));
          }, i);
        });
      }),
      (e.prototype.hideWord = function (t) {
        var e = this.takeNext(t),
          i = this;
        if (t.parents(".animated-heading-text").hasClass("type")) {
          var n = t.parent(".animated-text-words-wrapper");
          n.addClass("selected").removeClass("waiting"),
            setTimeout(function () {
              n.removeClass("selected"),
                t
                  .removeClass("is-visible")
                  .addClass("is-hidden")
                  .children("i")
                  .removeClass("in")
                  .addClass("out");
            }, i.selectionDuration),
            setTimeout(function () {
              i.showWord(e, i.typeLettersDelay);
            }, i.typeAnimationDelay);
        } else if (t.parents(".animated-heading-text").hasClass("letters")) {
          var s = t.children("i").length >= e.children("i").length;
          i.hideLetter(t.find("i").eq(0), t, s, i.lettersDelay),
            i.showLetter(e.find("i").eq(0), e, s, i.lettersDelay),
            i.setParentClassWidth(e);
        } else
          t.parents(".animated-heading-text").hasClass("text-clip")
            ? t
                .parents(".animated-text-words-wrapper")
                .animate({ width: "2px" }, i.revealDuration, function () {
                  i.switchWord(t, e), i.showWord(e);
                })
            : t.parents(".animated-heading-text").hasClass("loading-bar")
            ? (t
                .parents(".animated-text-words-wrapper")
                .removeClass("is-loading"),
              this.switchWord(t, e),
              setTimeout(function () {
                i.hideWord(e);
              }, i.barAnimationDelay),
              setTimeout(function () {
                t.parents(".animated-text-words-wrapper").addClass(
                  "is-loading"
                );
              }, i.barWaiting),
              this.setParentClassWidth(e))
            : (this.switchWord(t, e),
              setTimeout(function () {
                i.hideWord(e);
              }, i.animationDelay),
              this.setParentClassWidth(e));
      }),
      (e.prototype.showWord = function (t, e) {
        var i = this;
        t.parents(".animated-heading-text").hasClass("type")
          ? (i.showLetter(t.find("i").eq(0), t, !1, e),
            t.addClass("is-visible").removeClass("is-hidden"))
          : t.parents(".animated-heading-text").hasClass("text-clip") &&
            t
              .parents(".animated-text-words-wrapper")
              .animate(
                { width: t.width() + 10 },
                i.revealDuration,
                function () {
                  setTimeout(function () {
                    i.hideWord(t);
                  }, i.revealAnimationDelay);
                }
              );
      }),
      (e.prototype.hideLetter = function (e, i, n, s) {
        e.removeClass("in").addClass("out");
        var o = this;
        if (
          (e.is(":last-child")
            ? n &&
              setTimeout(function () {
                o.hideWord(o.takeNext(i));
              }, o.animationDelay)
            : setTimeout(function () {
                o.hideLetter(e.next(), i, n, s);
              }, s),
          e.is(":last-child") && t("html").hasClass("no-csstransitions"))
        ) {
          var a = o.takeNext(i);
          o.switchWord(i, a);
        }
      }),
      (e.prototype.showLetter = function (t, e, i, n) {
        t.addClass("in").removeClass("out");
        var s = this;
        t.is(":last-child")
          ? (e.parents(".animated-heading-text").hasClass("type") &&
              setTimeout(function () {
                e.parents(".animated-text-words-wrapper").addClass("waiting");
              }, 200),
            i ||
              setTimeout(function () {
                s.hideWord(e);
              }, s.animationDelay))
          : setTimeout(function () {
              s.showLetter(t.next(), e, i, n);
            }, n);
      }),
      (e.prototype.takeNext = function (t) {
        return t.is(":last-child") ? t.parent().children().eq(0) : t.next();
      }),
      (e.prototype.takePrev = function (t) {
        return t.is(":first-child") ? t.parent().children().last() : t.prev();
      }),
      (e.prototype.switchWord = function (t, e) {
        t.removeClass("is-visible").addClass("is-hidden"),
          e.removeClass("is-hidden").addClass("is-visible");
      }),
      (e.prototype.setParentClassWidth = function (t) {
        var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = t.parents(".animated-text-words-wrapper"),
          n = t.width(),
          s = e ? this.revealDuration / 2 : 0;
        this.interval > 0 &&
          (clearInterval(this.interval), (this.interval = 0));
        var o = this;
        setTimeout(function () {
          i.css({
            "transition-function": "ease",
            transitionDuration: o.revealDuration + "ms",
            transitionProperty: "width",
            width: n + "px",
          });
        }, s);
      }),
      t(document).on("ready", function () {
        new e({ heading: t(".animated-heading-text") });
        new MutationObserver(function (i) {
          i.forEach(function (i) {
            var n = i.addedNodes;
            null !== n &&
              t(n).each(function () {
                t(this)
                  .find(".animated-heading-text")
                  .each(function () {
                    new e({ heading: t(this) });
                  });
              });
          });
        }).observe(document.body, { childList: !0, subtree: !0 });
      });
  })(jQuery),
  (function (t) {
    function e() {
      if (
        ("undefined" == typeof stickyParent &&
          (stickyParent = t('[data-sticky-it="true"]').parents(
            ".sppb-section "
          )),
        !(
          "undefined" == typeof stickyParent ||
          0 == stickyParent.length ||
          t(window).width() <= 767
        ))
      ) {
        var e = stickyParent.offset();
        (stickyParentWrap = stickyParent.parents(".sppb-sticky-wrap")),
          stickyParentWrap.hasClass("sppb-sticky-wrap") &&
            (e = stickyParentWrap.offset()),
          window.scrollY >= e.top && !stickyParent.hasClass("sppb-sticky-it")
            ? (stickyParent.wrap(
                '<div class="sppb-sticky-wrap" style="height:' +
                  stickyParent.outerHeight() +
                  'px;"></div>'
              ),
              stickyParent.addClass("sppb-sticky-it"))
            : window.scrollY < e.top &&
              stickyParent.hasClass("sppb-sticky-it") &&
              (stickyParent.removeClass("sppb-sticky-it"),
              stickyParent.unwrap());
      }
    }
    (window.sppbVideoBackgroundResize = function (t) {
      t.find(".sppb-youtube-video-bg").removeClass("hidden");
      var e = t.innerWidth(),
        i = t.innerHeight();
      (iframeW = e),
        (iframeH = e * (9 / 16)),
        (marginTop = -Math.round((iframeH - i) / 2)),
        (marginLeft = -Math.round((iframeW - e) / 2)),
        e / i < 16 / 9 &&
          ((iframeW = i * (16 / 9)),
          (iframeH = i),
          (marginLeft = -Math.round((iframeW - e) / 2)),
          (marginTop = -Math.round((iframeH - i) / 2))),
        t
          .find(".sppb-youtube-video-bg iframe")
          .css({
            maxWidth: "1000%",
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: iframeW,
            height: iframeH,
          });
    }),
      t(window).on("load resize", function () {
        t(".sppb-row-have-ext-bg").each(function () {
          sppbVideoBackgroundResize(t(this));
        });
      }),
      t(document).ready(function () {
        void 0 !== jQuery.fn.parallax &&
          t('[data-sppb-parallax="on"]').parallax();
        var e = document.getElementsByClassName("section-bg-video");
        if (((e.volume = 0), t(window).width() < 767)) {
          for (var i = 0; i < e.length; i++) e[i].removeAttribute("autoplay");
          t(document).on("touchend touchcancel", function () {
            !(function () {
              for (var t = 0; t < e.length; t++) e[t].paused && e[t].play();
            })();
          });
        }
      }),
      t(document).on(
        "click",
        '[data-scroll-to="true"], .sppb-menu-scroll',
        function (e) {
          e.preventDefault();
          var i = t(this).attr("href"),
            n = t(this).parents(".sppb-link-list-wrap"),
            s = t(this).parents(".sppb-link-list-wrap").data("offset");
          (s = void 0 === s || "" === s ? 0 : parseInt(s)) < 0
            ? (s = Math.abs(s))
            : (s *= -1),
            n.find(".sppb-active").removeClass("sppb-active"),
            t(this).parent().addClass("sppb-active"),
            t("html, body").animate({ scrollTop: t(i).offset().top + s }, 600);
        }
      ),
      t(document).on("load", e),
      t(window).on("scroll resize", e),
      t(document).on("click", ".sppb-responsive-bars", function () {
        t(this).toggleClass("open"), t(this).next().toggleClass("open");
      });
  })(jQuery);

/*------ jquery.magnific-popup.min.js ------*/
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t,
    i,
    n,
    o,
    r,
    a,
    s = "Close",
    l = "BeforeClose",
    c = "MarkupParse",
    d = "Open",
    u = "Change",
    p = "mfp",
    f = "." + p,
    m = "mfp-ready",
    g = "mfp-removing",
    v = "mfp-prevent-close",
    h = function () {},
    y = !!window.jQuery,
    C = e(window),
    w = function (e, i) {
      t.ev.on(p + e + f, i);
    },
    b = function (t, i, n, o) {
      var r = document.createElement("div");
      return (
        (r.className = "mfp-" + t),
        n && (r.innerHTML = n),
        o ? i && i.appendChild(r) : ((r = e(r)), i && r.appendTo(i)),
        r
      );
    },
    I = function (i, n) {
      t.ev.triggerHandler(p + i, n),
        t.st.callbacks &&
          ((i = i.charAt(0).toLowerCase() + i.slice(1)),
          t.st.callbacks[i] &&
            t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]));
    },
    x = function (i) {
      return (
        (i === a && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (a = i)),
        t.currTemplate.closeBtn
      );
    },
    k = function () {
      e.magnificPopup.instance ||
        ((t = new h()).init(), (e.magnificPopup.instance = t));
    };
  (h.prototype = {
    constructor: h,
    init: function () {
      var i = navigator.appVersion;
      (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
        (t.isAndroid = /android/gi.test(i)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(i)),
        (t.supportsTransition = (function () {
          var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== e.transition) return !0;
          for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
          return !1;
        })()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (n = e(document)),
        (t.popupsCache = {});
    },
    open: function (i) {
      var o;
      if (!1 === i.isObj) {
        (t.items = i.items.toArray()), (t.index = 0);
        var a,
          s = i.items;
        for (o = 0; o < s.length; o++)
          if (((a = s[o]).parsed && (a = a.el[0]), a === i.el[0])) {
            t.index = o;
            break;
          }
      } else
        (t.items = e.isArray(i.items) ? i.items : [i.items]),
          (t.index = i.index || 0);
      if (!t.isOpen) {
        (t.types = []),
          (r = ""),
          i.mainEl && i.mainEl.length ? (t.ev = i.mainEl.eq(0)) : (t.ev = n),
          i.key
            ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}),
              (t.currTemplate = t.popupsCache[i.key]))
            : (t.currTemplate = {}),
          (t.st = e.extend(!0, {}, e.magnificPopup.defaults, i)),
          (t.fixedContentPos =
            "auto" === t.st.fixedContentPos
              ? !t.probablyMobile
              : t.st.fixedContentPos),
          t.st.modal &&
            ((t.st.closeOnContentClick = !1),
            (t.st.closeOnBgClick = !1),
            (t.st.showCloseBtn = !1),
            (t.st.enableEscapeKey = !1)),
          t.bgOverlay ||
            ((t.bgOverlay = b("bg").on("click" + f, function () {
              t.close();
            })),
            (t.wrap = b("wrap")
              .attr("tabindex", -1)
              .on("click" + f, function (e) {
                t._checkIfClose(e.target) && t.close();
              })),
            (t.container = b("container", t.wrap))),
          (t.contentContainer = b("content")),
          t.st.preloader &&
            (t.preloader = b("preloader", t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var u = l[o];
          (u = u.charAt(0).toUpperCase() + u.slice(1)), t["init" + u].call(t);
        }
        I("BeforeOpen"),
          t.st.showCloseBtn &&
            (t.st.closeBtnInside
              ? (w(c, function (e, t, i, n) {
                  i.close_replaceWith = x(n.type);
                }),
                (r += " mfp-close-btn-in"))
              : t.wrap.append(x())),
          t.st.alignTop && (r += " mfp-align-top"),
          t.fixedContentPos
            ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY,
              })
            : t.wrap.css({ top: C.scrollTop(), position: "absolute" }),
          (!1 === t.st.fixedBgPos ||
            ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
            t.bgOverlay.css({ height: n.height(), position: "absolute" }),
          t.st.enableEscapeKey &&
            n.on("keyup" + f, function (e) {
              27 === e.keyCode && t.close();
            }),
          C.on("resize" + f, function () {
            t.updateSize();
          }),
          t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
          r && t.wrap.addClass(r);
        var p = (t.wH = C.height()),
          g = {};
        if (t.fixedContentPos && t._hasScrollBar(p)) {
          var v = t._getScrollbarSize();
          v && (g.marginRight = v);
        }
        t.fixedContentPos &&
          (t.isIE7
            ? e("body, html").css("overflow", "hidden")
            : (g.overflow = "hidden"));
        var h = t.st.mainClass;
        return (
          t.isIE7 && (h += " mfp-ie7"),
          h && t._addClassToMFP(h),
          t.updateItemHTML(),
          I("BuildControls"),
          e("html").css(g),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          (t._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            t.content
              ? (t._addClassToMFP(m), t._setFocus())
              : t.bgOverlay.addClass(m),
              n.on("focusin" + f, t._onFocusIn);
          }, 16),
          (t.isOpen = !0),
          t.updateSize(p),
          I(d),
          i
        );
      }
      t.updateItemHTML();
    },
    close: function () {
      t.isOpen &&
        (I(l),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(g),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      I(s);
      var i = g + " " + m + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (i += t.st.mainClass + " "),
        t._removeClassFromMFP(i),
        t.fixedContentPos)
      ) {
        var o = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""),
          e("html").css(o);
      }
      n.off("keyup.mfp focusin" + f),
        t.ev.off(f),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        I("AfterClose");
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        t.wrap.css("height", n), (t.wH = n);
      } else t.wH = e || C.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize");
    },
    updateItemHTML: function () {
      var i = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        i.parsed || (i = t.parseEl(t.index));
      var n = i.type;
      if (
        (I("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
        (t.currItem = i),
        !t.currTemplate[n])
      ) {
        var r = !!t.st[n] && t.st[n].markup;
        I("FirstMarkupParse", r), (t.currTemplate[n] = !r || e(r));
      }
      o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
      var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](
        i,
        t.currTemplate[n]
      );
      t.appendContent(a, n),
        (i.preloaded = !0),
        I(u, i),
        (o = i.type),
        t.container.prepend(t.contentContainer),
        I("AfterChange");
    },
    appendContent: function (e, i) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[i]
            ? t.content.find(".mfp-close").length || t.content.append(x())
            : (t.content = e)
          : (t.content = ""),
        I("BeforeAppend"),
        t.container.addClass("mfp-" + i + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (i) {
      var n,
        o = t.items[i];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((n = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var r = t.types, a = 0; a < r.length; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            n = r[a];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = n || t.st.type || "inline"),
        (o.index = i),
        (o.parsed = !0),
        (t.items[i] = o),
        I("ElementParse", o),
        t.items[i]
      );
    },
    addGroup: function (e, i) {
      var n = function (n) {
        (n.mfpEl = this), t._openClick(n, e, i);
      };
      i || (i = {});
      var o = "click.magnificPopup";
      (i.mainEl = e),
        i.items
          ? ((i.isObj = !0), e.off(o).on(o, n))
          : ((i.isObj = !1),
            i.delegate
              ? e.off(o).on(o, i.delegate, n)
              : ((i.items = e), e.off(o).on(o, n)));
    },
    _openClick: function (i, n, o) {
      if (
        (void 0 !== o.midClick
          ? o.midClick
          : e.magnificPopup.defaults.midClick) ||
        !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
      ) {
        var r =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (r)
          if (e.isFunction(r)) {
            if (!r.call(t)) return !0;
          } else if (C.width() < r) return !0;
        i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
          (o.el = e(i.mfpEl)),
          o.delegate && (o.items = n.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, n) {
      if (t.preloader) {
        i !== e && t.container.removeClass("mfp-s-" + i),
          n || "loading" !== e || (n = t.st.tLoading);
        var o = { status: e, text: n };
        I("UpdateStatus", o),
          (e = o.status),
          (n = o.text),
          t.preloader.html(n),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (i = e);
      }
    },
    _checkIfClose: function (i) {
      if (!e(i).hasClass(v)) {
        var n = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (n && o) return !0;
        if (
          !t.content ||
          e(i).hasClass("mfp-close") ||
          (t.preloader && i === t.preloader[0])
        )
          return !0;
        if (i === t.content[0] || e.contains(t.content[0], i)) {
          if (n) return !0;
        } else if (o && e.contains(document, i)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || C.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (i) {
      return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, i, n) {
      var o;
      n.data && (i = e.extend(n.data, i)),
        I(c, [t, i, n]),
        e.each(i, function (i, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((o = i.split("_")).length > 1) {
            var r = t.find(f + "-" + o[0]);
            if (r.length > 0) {
              var a = o[1];
              "replaceWith" === a
                ? r[0] !== n[0] && r.replaceWith(n)
                : "img" === a
                ? r.is("img")
                  ? r.attr("src", n)
                  : r.replaceWith(
                      e("<img>").attr("src", n).attr("class", r.attr("class"))
                    )
                : r.attr(o[1], n);
            }
          } else t.find(f + "-" + i).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: h.prototype,
      modules: [],
      open: function (t, i) {
        return (
          k(),
          ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
          (t.index = i || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, i) {
        i.options && (e.magnificPopup.defaults[t] = i.options),
          e.extend(this.proto, i.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (e.fn.magnificPopup = function (i) {
      k();
      var n = e(this);
      if ("string" == typeof i)
        if ("open" === i) {
          var o,
            r = y ? n.data("magnificPopup") : n[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;
          r.items
            ? (o = r.items[a])
            : ((o = n), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))),
            t._openClick({ mfpEl: o }, n, r);
        } else
          t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (i = e.extend(!0, {}, i)),
          y ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
          t.addGroup(n, i);
      return n;
    });
  var T,
    _,
    P,
    S = "inline",
    E = function () {
      P && (_.after(P.addClass(T)).detach(), (P = null));
    };
  e.magnificPopup.registerModule(S, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(S),
          w(s + "." + S, function () {
            E();
          });
      },
      getInline: function (i, n) {
        if ((E(), i.src)) {
          var o = t.st.inline,
            r = e(i.src);
          if (r.length) {
            var a = r[0].parentNode;
            a &&
              a.tagName &&
              (_ || ((T = o.hiddenClass), (_ = b(T)), (T = "mfp-" + T)),
              (P = r.after(_).detach().removeClass(T))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
          return (i.inlineElement = r), r;
        }
        return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n;
      },
    },
  });
  var z,
    O = "ajax",
    M = function () {
      z && e(document.body).removeClass(z);
    },
    B = function () {
      M(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(O, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(O),
          (z = t.st.ajax.cursor),
          w(s + "." + O, B),
          w("BeforeChange." + O, B);
      },
      getAjax: function (i) {
        z && e(document.body).addClass(z), t.updateStatus("loading");
        var n = e.extend(
          {
            url: i.src,
            success: function (n, o, r) {
              var a = { data: n, xhr: r };
              I("ParseAjax", a),
                t.appendContent(e(a.data), O),
                (i.finished = !0),
                M(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(m);
                }, 16),
                t.updateStatus("ready"),
                I("AjaxContentAdded");
            },
            error: function () {
              M(),
                (i.finished = i.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", i.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(n)), "";
      },
    },
  });
  var L;
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var i = t.st.image,
          n = ".image";
        t.types.push("image"),
          w(d + n, function () {
            "image" === t.currItem.type &&
              i.cursor &&
              e(document.body).addClass(i.cursor);
          }),
          w(s + n, function () {
            i.cursor && e(document.body).removeClass(i.cursor),
              C.off("resize" + f);
          }),
          w("Resize" + n, t.resizeImage),
          t.isLowIE && w("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var i = 0;
          t.isLowIE &&
            (i =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - i);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          L && clearInterval(L),
          (e.isCheckingImgSize = !1),
          I("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var i = 0,
          n = e.img[0],
          o = function (r) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return n.naturalWidth > 0
                  ? void t._onImageHasSize(e)
                  : (i > 200 && clearInterval(L),
                    void (3 === ++i
                      ? o(10)
                      : 40 === i
                      ? o(50)
                      : 100 === i && o(500)));
              }, r));
          };
        o(1);
      },
      getImage: function (i, n) {
        var o = 0,
          r = function () {
            i &&
              (i.img[0].complete
                ? (i.img.off(".mfploader"),
                  i === t.currItem &&
                    (t._onImageHasSize(i), t.updateStatus("ready")),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  I("ImageLoadComplete"))
                : 200 > ++o
                ? setTimeout(r, 100)
                : a());
          },
          a = function () {
            i &&
              (i.img.off(".mfploader"),
              i === t.currItem &&
                (t._onImageHasSize(i),
                t.updateStatus("error", s.tError.replace("%url%", i.src))),
              (i.hasSize = !0),
              (i.loaded = !0),
              (i.loadError = !0));
          },
          s = t.st.image,
          l = n.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            i.el &&
              i.el.find("img").length &&
              (c.alt = i.el.find("img").attr("alt")),
            (i.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
            (c.src = i.src),
            l.is("img") && (i.img = i.img.clone()),
            (c = i.img[0]).naturalWidth > 0
              ? (i.hasSize = !0)
              : c.width || (i.hasSize = !1);
        }
        return (
          t._parseMarkup(
            n,
            {
              title: (function (i) {
                if (i.data && void 0 !== i.data.title) return i.data.title;
                var n = t.st.image.titleSrc;
                if (n) {
                  if (e.isFunction(n)) return n.call(t, i);
                  if (i.el) return i.el.attr(n) || "";
                }
                return "";
              })(i),
              img_replaceWith: i.img,
            },
            i
          ),
          t.resizeImage(),
          i.hasSize
            ? (L && clearInterval(L),
              i.loadError
                ? (n.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", i.src)))
                : (n.removeClass("mfp-loading"), t.updateStatus("ready")),
              n)
            : (t.updateStatus("loading"),
              (i.loading = !0),
              i.hasSize ||
                ((i.imgHidden = !0),
                n.addClass("mfp-loading"),
                t.findImageSize(i)),
              n)
        );
      },
    },
  });
  var H;
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          i = t.st.zoom,
          n = ".zoom";
        if (i.enabled && t.supportsTransition) {
          var o,
            r,
            a = i.duration,
            c = function (e) {
              var t = e
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                n = "all " + i.duration / 1e3 + "s " + i.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                r = "transition";
              return (
                (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n),
                t.css(o),
                t
              );
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          w("BuildControls" + n, function () {
            if (t._allowZoom()) {
              if (
                (clearTimeout(o),
                t.content.css("visibility", "hidden"),
                !(e = t._getItemToZoom()))
              )
                return void d();
              (r = c(e)).css(t._getOffset()),
                t.wrap.append(r),
                (o = setTimeout(function () {
                  r.css(t._getOffset(!0)),
                    (o = setTimeout(function () {
                      d(),
                        setTimeout(function () {
                          r.remove(), (e = r = null), I("ZoomAnimationEnded");
                        }, 16);
                    }, a));
                }, 16));
            }
          }),
            w(l + n, function () {
              if (t._allowZoom()) {
                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                  if (!(e = t._getItemToZoom())) return;
                  r = c(e);
                }
                r.css(t._getOffset(!0)),
                  t.wrap.append(r),
                  t.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    r.css(t._getOffset());
                  }, 16);
              }
            }),
            w(s + n, function () {
              t._allowZoom() && (d(), r && r.remove(), (e = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return !!t.currItem.hasSize && t.currItem.img;
      },
      _getOffset: function (i) {
        var n,
          o = (n = i
            ? t.currItem.img
            : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
          r = parseInt(n.css("padding-top"), 10),
          a = parseInt(n.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: n.width(),
          height: (y ? n.innerHeight() : n[0].offsetHeight) - a - r,
        };
        return (
          void 0 === H &&
            (H = void 0 !== document.createElement("p").style.MozTransform),
          H
            ? (s["-moz-transform"] = s.transform =
                "translate(" + o.left + "px," + o.top + "px)")
            : ((s.left = o.left), (s.top = o.top)),
          s
        );
      },
    },
  });
  var A = "iframe",
    F = function (e) {
      if (t.currTemplate[A]) {
        var i = t.currTemplate[A].find("iframe");
        i.length &&
          (e || (i[0].src = "//about:blank"),
          t.isIE8 && i.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(A, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(A),
          w("BeforeChange", function (e, t, i) {
            t !== i && (t === A ? F() : i === A && F(!0));
          }),
          w(s + "." + A, function () {
            F();
          });
      },
      getIframe: function (i, n) {
        var o = i.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var a = {};
        return (
          r.srcAction && (a[r.srcAction] = o),
          t._parseMarkup(n, a, i),
          t.updateStatus("ready"),
          n
        );
      },
    },
  });
  var j = function (e) {
      var i = t.items.length;
      return e > i - 1 ? e - i : 0 > e ? i + e : e;
    },
    N = function (e, t, i) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var i = t.st.gallery,
          o = ".mfp-gallery";
        return (
          (t.direction = !0),
          !(!i || !i.enabled) &&
            ((r += " mfp-gallery"),
            w(d + o, function () {
              i.navigateByImgClick &&
                t.wrap.on("click" + o, ".mfp-img", function () {
                  return t.items.length > 1 ? (t.next(), !1) : void 0;
                }),
                n.on("keydown" + o, function (e) {
                  37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                });
            }),
            w("UpdateStatus" + o, function (e, i) {
              i.text && (i.text = N(i.text, t.currItem.index, t.items.length));
            }),
            w(c + o, function (e, n, o, r) {
              var a = t.items.length;
              o.counter = a > 1 ? N(i.tCounter, r.index, a) : "";
            }),
            w("BuildControls" + o, function () {
              if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                var n = i.arrowMarkup,
                  o = (t.arrowLeft = e(
                    n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(v)),
                  r = (t.arrowRight = e(
                    n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")
                  ).addClass(v));
                o.click(function () {
                  t.prev();
                }),
                  r.click(function () {
                    t.next();
                  }),
                  t.container.append(o.add(r));
              }
            }),
            w(u + o, function () {
              t._preloadTimeout && clearTimeout(t._preloadTimeout),
                (t._preloadTimeout = setTimeout(function () {
                  t.preloadNearbyImages(), (t._preloadTimeout = null);
                }, 16));
            }),
            void w(s + o, function () {
              n.off(o),
                t.wrap.off("click" + o),
                (t.arrowRight = t.arrowLeft = null);
            }))
        );
      },
      next: function () {
        (t.direction = !0), (t.index = j(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = j(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          i = t.st.gallery.preload,
          n = Math.min(i[0], t.items.length),
          o = Math.min(i[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : n); e++)
          t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? n : o); e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (i) {
        if (((i = j(i)), !t.items[i].preloaded)) {
          var n = t.items[i];
          n.parsed || (n = t.parseEl(i)),
            I("LazyLoad", n),
            "image" === n.type &&
              (n.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  n.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (n.hasSize = !0), (n.loadError = !0), I("LazyLoadError", n);
                })
                .attr("src", n.src)),
            (n.preloaded = !0);
        }
      },
    },
  });
  var W = "retina";
  e.magnificPopup.registerModule(W, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            i = e.ratio;
          (i = isNaN(i) ? i() : i) > 1 &&
            (w("ImageHasSize." + W, function (e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / i,
                width: "100%",
              });
            }),
            w("ElementParse." + W, function (t, n) {
              n.src = e.replaceSrc(n, i);
            }));
        }
      },
    },
  }),
    k();
});

/*------ bootstrap.min.js ------*/
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);

/*------ SmoothScroll.js ------*/
!(function () {
  function m() {
    b.keyboardSupport && F("keydown", u);
  }
  function n() {
    if (!f && document.body) {
      f = !0;
      var a = document.body,
        e = document.documentElement,
        j = window.innerHeight,
        k = a.scrollHeight;
      if (
        ((g = document.compatMode.indexOf("CSS") >= 0 ? e : a),
        (h = a),
        m(),
        top != self)
      )
        d = !0;
      else if (k > j && (a.offsetHeight <= j || e.offsetHeight <= j)) {
        var l = document.createElement("div");
        (l.style.cssText =
          "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
          g.scrollHeight +
          "px"),
          document.body.appendChild(l);
        var n,
          o = function () {
            n ||
              (n = setTimeout(function () {
                c ||
                  ((l.style.height = "0"),
                  (l.style.height = g.scrollHeight + "px"),
                  (n = null));
              }, 500));
          };
        setTimeout(o, 10);
        var p = { attributes: !0, childList: !0, characterData: !1 };
        if (((i = new P(o)), i.observe(a, p), g.offsetHeight <= j)) {
          var q = document.createElement("div");
          (q.style.clear = "both"), a.appendChild(q);
        }
      }
      b.fixedBackground ||
        c ||
        ((a.style.backgroundAttachment = "scroll"),
        (e.style.backgroundAttachment = "scroll"));
    }
  }
  function s(a, c, d) {
    if ((I(c, d), 1 != b.accelerationMax)) {
      var e = Date.now(),
        f = e - r;
      if (f < b.accelerationDelta) {
        var g = (1 + 50 / f) / 2;
        g > 1 && ((g = Math.min(g, b.accelerationMax)), (c *= g), (d *= g));
      }
      r = Date.now();
    }
    if (
      (p.push({
        x: c,
        y: d,
        lastX: c < 0 ? 0.99 : -0.99,
        lastY: d < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !q)
    ) {
      var h = a === document.body,
        i = function (e) {
          for (var f = Date.now(), g = 0, j = 0, k = 0; k < p.length; k++) {
            var l = p[k],
              m = f - l.start,
              n = m >= b.animationTime,
              o = n ? 1 : m / b.animationTime;
            b.pulseAlgorithm && (o = S(o));
            var r = (l.x * o - l.lastX) >> 0,
              s = (l.y * o - l.lastY) >> 0;
            (g += r),
              (j += s),
              (l.lastX += r),
              (l.lastY += s),
              n && (p.splice(k, 1), k--);
          }
          h
            ? window.scrollBy(g, j)
            : (g && (a.scrollLeft += g), j && (a.scrollTop += j)),
            c || d || (p = []),
            p.length ? O(i, a, 1e3 / b.frameRate + 1) : (q = !1);
        };
      O(i, a, 0), (q = !0);
    }
  }
  function t(a) {
    f || n();
    var c = a.target,
      d = B(c);
    if (!d || a.defaultPrevented || a.ctrlKey) return !0;
    if (
      H(h, "embed") ||
      (H(c, "embed") && /\.pdf/i.test(c.src)) ||
      H(h, "object")
    )
      return !0;
    var e = -a.wheelDeltaX || a.deltaX || 0,
      g = -a.wheelDeltaY || a.deltaY || 0;
    return (
      k &&
        (a.wheelDeltaX &&
          L(a.wheelDeltaX, 120) &&
          (e = -120 * (a.wheelDeltaX / Math.abs(a.wheelDeltaX))),
        a.wheelDeltaY &&
          L(a.wheelDeltaY, 120) &&
          (g = -120 * (a.wheelDeltaY / Math.abs(a.wheelDeltaY)))),
      e || g || (g = -a.wheelDelta || 0),
      1 === a.deltaMode && ((e *= 40), (g *= 40)),
      !(b.touchpadSupport || !K(g)) ||
        (Math.abs(e) > 1.2 && (e *= b.stepSize / 120),
        Math.abs(g) > 1.2 && (g *= b.stepSize / 120),
        s(d, e, g),
        a.preventDefault(),
        void z())
    );
  }
  function u(a) {
    var c = a.target,
      d =
        a.ctrlKey ||
        a.altKey ||
        a.metaKey ||
        (a.shiftKey && a.keyCode !== l.spacebar);
    document.contains(h) || (h = document.activeElement);
    var e = /^(textarea|select|embed|object)$/i,
      f = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      e.test(c.nodeName) ||
      (H(c, "input") && !f.test(c.type)) ||
      H(h, "video") ||
      N(a) ||
      c.isContentEditable ||
      a.defaultPrevented ||
      d
    )
      return !0;
    if (
      (H(c, "button") || (H(c, "input") && f.test(c.type))) &&
      a.keyCode === l.spacebar
    )
      return !0;
    var g,
      i = 0,
      j = 0,
      k = B(h),
      m = k.clientHeight;
    switch ((k == document.body && (m = window.innerHeight), a.keyCode)) {
      case l.up:
        j = -b.arrowScroll;
        break;
      case l.down:
        j = b.arrowScroll;
        break;
      case l.spacebar:
        (g = a.shiftKey ? 1 : -1), (j = -g * m * 0.9);
        break;
      case l.pageup:
        j = 0.9 * -m;
        break;
      case l.pagedown:
        j = 0.9 * m;
        break;
      case l.home:
        j = -k.scrollTop;
        break;
      case l.end:
        var n = k.scrollHeight - k.scrollTop - m;
        j = n > 0 ? n + 10 : 0;
        break;
      case l.left:
        i = -b.arrowScroll;
        break;
      case l.right:
        i = b.arrowScroll;
        break;
      default:
        return !0;
    }
    s(k, i, j), a.preventDefault(), z();
  }
  function v(a) {
    h = a.target;
  }
  function z() {
    clearTimeout(y),
      (y = setInterval(function () {
        x = {};
      }, 1e3));
  }
  function A(a, b) {
    for (var c = a.length; c--; ) x[w(a[c])] = b;
    return b;
  }
  function B(a) {
    var b = [],
      c = document.body,
      e = g.scrollHeight;
    do {
      var f = x[w(a)];
      if (f) return A(b, f);
      if ((b.push(a), e === a.scrollHeight)) {
        var h = D(g) && D(c),
          i = h || E(g);
        if ((d && C(g)) || (!d && i)) return A(b, Q());
      } else if (C(a) && E(a)) return A(b, a);
    } while ((a = a.parentElement));
  }
  function C(a) {
    return a.clientHeight + 10 < a.scrollHeight;
  }
  function D(a) {
    var b = getComputedStyle(a, "").getPropertyValue("overflow-y");
    return "hidden" !== b;
  }
  function E(a) {
    var b = getComputedStyle(a, "").getPropertyValue("overflow-y");
    return "scroll" === b || "auto" === b;
  }
  function F(a, b) {
    window.addEventListener(a, b, !1);
  }
  function H(a, b) {
    return (a.nodeName || "").toLowerCase() === b.toLowerCase();
  }
  function I(a, b) {
    (a = a > 0 ? 1 : -1),
      (b = b > 0 ? 1 : -1),
      (e.x === a && e.y === b) || ((e.x = a), (e.y = b), (p = []), (r = 0));
  }
  function K(a) {
    if (a)
      return (
        j.length || (j = [a, a, a]),
        (a = Math.abs(a)),
        j.push(a),
        j.shift(),
        clearTimeout(J),
        (J = setTimeout(function () {
          window.localStorage && (localStorage.SS_deltaBuffer = j.join(","));
        }, 1e3)),
        !M(120) && !M(100)
      );
  }
  function L(a, b) {
    return Math.floor(a / b) == a / b;
  }
  function M(a) {
    return L(j[0], a) && L(j[1], a) && L(j[2], a);
  }
  function N(a) {
    var b = a.target,
      c = !1;
    if (document.URL.indexOf("www.youtube.com/watch") != -1)
      do
        if ((c = b.classList && b.classList.contains("html5-video-controls")))
          break;
      while ((b = b.parentNode));
    return c;
  }
  function R(a) {
    var c, d, e;
    return (
      (a *= b.pulseScale),
      a < 1
        ? (c = a - (1 - Math.exp(-a)))
        : ((d = Math.exp(-1)),
          (a -= 1),
          (e = 1 - Math.exp(-a)),
          (c = d + e * (1 - d))),
      c * b.pulseNormalize
    );
  }
  function S(a) {
    return a >= 1
      ? 1
      : a <= 0
      ? 0
      : (1 == b.pulseNormalize && (b.pulseNormalize /= R(1)), R(a));
  }
  var h,
    i,
    y,
    J,
    a = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 120,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1,
      keyboardSupport: !0,
      arrowScroll: 50,
      touchpadSupport: !0,
      fixedBackground: !0,
      excluded: "",
    },
    b = a,
    c = !1,
    d = !1,
    e = { x: 0, y: 0 },
    f = !1,
    g = document.documentElement,
    j = [],
    k = /^Mac/.test(navigator.platform),
    l = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
    },
    b = a,
    p = [],
    q = !1,
    r = Date.now(),
    w = (function () {
      var a = 0;
      return function (b) {
        return b.uniqueID || (b.uniqueID = a++);
      };
    })(),
    x = {};
  window.localStorage &&
    localStorage.SS_deltaBuffer &&
    (j = localStorage.SS_deltaBuffer.split(","));
  var T,
    O = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (a, b, c) {
          window.setTimeout(a, c || 1e3 / 60);
        }
      );
    })(),
    P =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    Q = (function () {
      var a;
      return function () {
        if (!a) {
          var b = document.createElement("div");
          (b.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(b);
          var c = document.body.scrollTop;
          document.documentElement.scrollTop;
          window.scrollBy(0, 1),
            (a =
              document.body.scrollTop != c
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -1),
            document.body.removeChild(b);
        }
        return a;
      };
    })();
  "onwheel" in document.createElement("div")
    ? (T = "wheel")
    : "onmousewheel" in document.createElement("div") && (T = "mousewheel"),
    T && (F(T, t), F("mousedown", v), F("load", n));
})();

/*------ jquery.easing.min.js ------*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/*------ main.js ------*/
(function ($) {
  "use strict";
  var $window = $(window);
  var windowHeight = $window.height();
  $window.resize(function () {
    windowHeight = $window.height();
  });
  $.fn.parallaxing = function (xpos, speedFactor, outerHeight) {
    var $this = $(this);
    var getHeight;
    var firstTop;
    var paddingTop = 0;
    $this.each(function () {
      firstTop = $this.offset().top;
    });
    if (outerHeight) {
      getHeight = function (jqo) {
        return jqo.outerHeight(!0);
      };
    } else {
      getHeight = function (jqo) {
        return jqo.height();
      };
    }
    if (arguments.length < 1 || xpos === null) xpos = "50%";
    if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
    if (arguments.length < 3 || outerHeight === null) outerHeight = !0;
    function update() {
      var pos = $window.scrollTop();
      $this.each(function () {
        var $element = $(this);
        var top = $element.offset().top;
        var height = getHeight($element);
        if (top + height < pos || top > pos + windowHeight) {
          return;
        }
        $this.css(
          "backgroundPosition",
          xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px"
        );
      });
    }
    $window.bind("scroll", update).resize(update);
    update();
  };
})(jQuery);
jQuery(function ($) {
  var bootstrapLoaded = "function" == typeof $().carousel,
    mootoolsLoaded = "undefined" != typeof MooTools;
  bootstrapLoaded &&
    mootoolsLoaded &&
    Element.implement({
      hide: function () {
        return this;
      },
      show: function (o) {
        return this;
      },
      slide: function (o) {
        return this;
      },
    });
  $(window).resize(function () {
    var $theWindowSize = $(this).width();
    if ($theWindowSize < 480) {
      $(".animated_headlines .ah-words-wrapper > b")
        .addClass("centered clearfix")
        .css({ "white-space": "normal" });
    } else {
      $(".animated_headlines .ah-words-wrapper > b")
        .removeClass("centered")
        .css("white-space", "nowrap");
    }
    if ($theWindowSize < 769) {
      $(".sppb-addon-image-content.aligment-left .col-sm-6")
        .removeClass("col-sm-offset-6")
        .css("width", "100%");
    } else {
      $(".sppb-addon-image-content.aligment-left .col-sm-6")
        .addClass("col-sm-offset-6")
        .css("width", "auto");
    }
  });
  var isTablet = window.matchMedia("only screen and (max-width: 768px)");
  var isMobile = window.matchMedia("only screen and (max-width: 480px)");
  if (isTablet.matches) {
    $(".sppb-addon-image-content.aligment-left .col-sm-6")
      .removeClass("col-sm-offset-6")
      .css("width", "100%");
  }
  if (isMobile.matches) {
    $(".animated_headlines .ah-words-wrapper > b")
      .addClass("centered clearfix")
      .css({ "white-space": "normal" });
  }
  var isDesktop = window.matchMedia("only screen and (min-width: 992px)");
  if (isDesktop.matches) {
    jQuery(".parallax").parallaxing("50%", 0.3);
    jQuery(".parallax_2").parallaxing("50%", 0.2);
    jQuery(".parallax_3").parallaxing("50%", 0.3);
    jQuery(".parallax_4").parallaxing("50%", 0.4);
    jQuery(".parallax_5").parallaxing("50%", 0.5);
    jQuery(".parallax_6").parallaxing("50%", 0.6);
    jQuery(".parallax_7").parallaxing("50%", 0.7);
    jQuery(".parallax-2").parallaxing("50%", -0.2);
    jQuery(".parallax-3").parallaxing("50%", -0.3);
    jQuery(".parallax-4").parallaxing("50%", -0.4);
    jQuery(".parallax-5").parallaxing("50%", -0.5);
    jQuery(".parallax-6").parallaxing("50%", -0.6);
    jQuery(".parallax-7").parallaxing("50%", -0.7);
  }
  $(
    ".layout-boxed section > div.container, .layout-boxed header > div.container, .layout-boxed footer > div.container, .layout-boxed header > div.container, .layout-boxed .sp-main-body > div.container"
  )
    .removeClass("container")
    .addClass("container-fluid");
  if ($("div").hasClass("sppb-in-article")) {
    $(".sppb-row-container").removeClass("sppb-row-container");
  }
  var spHeader = document.querySelector("#sp-header"),
    pageHeight = window.innerHeight;
  if (typeof stickyHeaderVar === "undefined" || stickyHeaderVar === "") {
    stickyHeaderVar = "0";
  }
  if (stickyHeaderVar == "1") {
    if ($("body").hasClass("sticky-header")) {
      $("#sp-header")
        .children()
        .wrapAll($("<div>").addClass("sticky__wrapper"));
    }
    function checkHolderOffset() {
      return stickyHeaderAppearPoint <= window.scrollY;
    }
    var showSticky = function () {
      spHeader.classList.toggle("sticky", checkHolderOffset());
    };
    function tryCheck() {
      requestAnimationFrame(showSticky);
    }
    window.addEventListener("scroll", tryCheck, false);
    window.addEventListener("resize", tryCheck, false);
  }
  if (typeof sp_offanimation === "undefined" || sp_offanimation === "") {
    sp_offanimation = "default";
  }
  if (sp_offanimation == "default") {
    $("#offcanvas-toggler").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("offcanvas");
    });
    $('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu");
    $(".close-offcanvas, .offcanvas-overlay").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").removeClass("offcanvas");
    });
  }
  if (sp_offanimation == "slidetop") {
    $("#offcanvas-toggler").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("slide-top-menu");
    });
    $('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu");
    $(".close-offcanvas, .offcanvas-overlay").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").removeClass("slide-top-menu");
    });
  }
  if (sp_offanimation == "fullscreen") {
    $("#offcanvas-toggler").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("full-screen-off-canvas");
    });
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("full-screen");
    });
    $(".close-offcanvas, .offcanvas-overlay").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").removeClass("full-screen-off-canvas");
    });
  }
  if (sp_offanimation == "fullScreen-top") {
    $("#offcanvas-toggler").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("full-screen-off-canvas-ftop");
    });
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("full-screen-ftop");
    });
    $(".close-offcanvas, .offcanvas-overlay").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").removeClass("full-screen-off-canvas-ftop");
    });
  }
  if (sp_offanimation == "drarkplus") {
    $("#offcanvas-toggler").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("new-look-off-canvas");
    });
    $('<div class="offcanvas-overlay"></div>').insertBefore(".offcanvas-menu");
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("new-look");
    });
    $(".close-offcanvas,.offcanvas-overlay").on("click", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").removeClass("new-look-off-canvas");
    });
  }
  $(".offcanvas-menu ul li:not(.separator) a").on("click", function () {
    $(".off-canvas-menu-init").removeClass(
      "offcanvas slide-top-menu full-screen-off-canvas full-screen-off-canvas-ftop new-look-off-canvas"
    );
  });
  $(
    "header.onepage, header.white, header.transparent-white, header.transparent, header.sticky-top"
  ).wrap('<div class="transparent-wrapper"></div>');
  var topbarHeight = $('section[id^="sp-top-"]').innerHeight();
  $(".transparent-wrapper").css({ top: topbarHeight + "px" });
  $("header.onepage .sp-megamenu-parent > li:first-child").addClass("active");
  $(".page-scroll a, a.page-scroll").bind("click", function (s) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $($anchor.attr("href")).offset().top },
        1500,
        "easeInOutQuint"
      );
    s.preventDefault();
    return false;
  });
  $("header.onepage .sp-megamenu-parent li a").addClass("page-scroll");
  if ($("header").hasClass("onepage")) {
    $(".offcanvas-menu li a").addClass("page-scroll");
    $("header.onepage .sp-megamenu-parent, .offcanvas-menu .menu").onePageNav({
      currentClass: "active",
      changeHash: false,
      scrollSpeed: 900,
      scrollOffset: 30,
      scrollThreshold: 0.5,
      easing: "easeInOutCubic",
      filter: ".page-scroll",
    });
  }
  var searchRow = $(".top-search-input-wrap")
    .parent()
    .closest(".top-search-wrap");
  $(".top-search-input-wrap").insertAfter(searchRow);
  $(".search-open-icon").on("click", function () {
    $(".top-search-input-wrap").show();
    $(this).hide();
    $(".search-close-icon").addClass("open").fadeIn(300);
    $(".top-search-wrap").addClass("active");
  });
  $(".search-close-icon").on("click", function () {
    $(this).hide();
    $(".search-open-icon").fadeIn(300);
    $(".top-search-wrap").removeClass("active");
  });
  $(".no-gutter").closest('[class*="col-"]').addClass("no-gutter");
  if (typeof sp_preloader === "undefined") {
    sp_preloader = "";
  }
  if (sp_preloader) {
    $(window).on("load", function () {
      if ($(".sp-loader-with-logo").length > 0) {
        move();
      }
      setTimeout(function () {
        $(".sp-pre-loader").fadeOut();
      }, 1000);
    });
  }
  function move() {
    var elem = document.getElementById("line-load");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  $(".sp-megamenu-wrapper")
    .parent()
    .parent()
    .css("position", "static")
    .parent()
    .css("position", "relative");
  $(".sp-menu-full").each(function () {
    $(this).parent().addClass("menu-justify");
  });
  $(
    '.social-icons > li > a[href=#],.separator > a,.sppb-person-social > li > a[href=#],.sppb-addon-content > a[href=#],a.sppb-btn[href=#],.slick-img > a[href=#],.sp-layer a[href=#],[data-toggle="popover"],.flex-icons a[href=#]'
  ).click(function (n) {
    n.preventDefault();
  });
  $('a[href^="#ap-smart-layerslider-"]').click(function (e) {
    if (window.history && window.history.pushState) {
      window.history.pushState("", "", window.location.pathname);
    } else {
      window.location.href = window.location.href.replace(/#.*$/, "#");
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $(document).on("click", ".sp-rating .star", function (event) {
    event.preventDefault();
    var data = {
      action: "voting",
      user_rating: $(this).data("number"),
      id: $(this).closest(".post_rating").attr("id"),
    };
    var request = {
      option: "com_ajax",
      plugin: "helix3",
      data: data,
      format: "json",
    };
    $.ajax({
      type: "POST",
      data: request,
      beforeSend: function () {
        $(".post_rating .ajax-loader").show();
      },
      success: function (response) {
        var data = $.parseJSON(response.data);
        $(".post_rating .ajax-loader").hide();
        if (data.status == "invalid") {
          $(".post_rating .voting-result")
            .text("You have already rated this entry!")
            .fadeIn("fast");
        } else if (data.status == "false") {
          $(".post_rating .voting-result")
            .text("Somethings wrong here, try again!")
            .fadeIn("fast");
        } else if (data.status == "true") {
          var rate = data.action;
          $(".voting-symbol")
            .find(".star")
            .each(function (i) {
              if (i < rate) {
                $(".star")
                  .eq(-(i + 1))
                  .addClass("active");
              }
            });
          $(".post_rating .voting-result").text("Thank You!").fadeIn("fast");
        }
      },
      error: function () {
        $(".post_rating .ajax-loader").hide();
        $(".post_rating .voting-result")
          .text("Failed to rate, try again!")
          .fadeIn("fast");
      },
    });
  });
  jQuery("body").append(
    '<a href="#top" id="scroll-top"><i class="pe-7s-angle-up"></i></a>'
  );
  $(window).scroll(function () {
    if ($(this).scrollTop() > pageHeight * 2) {
      $("a#scroll-top").addClass("open");
    } else {
      $("a#scroll-top").removeClass("open");
    }
  });
  $("a#scroll-top").click(function () {
    $("html,body").animate(
      { scrollTop: 0 },
      1600,
      "easeInOutQuint",
      pageHeight * 2
    );
    return false;
  });
  function css_browser_selector(u) {
    var ua = u.toLowerCase(),
      is = function (t) {
        return ua.indexOf(t) > -1;
      },
      g = "gecko",
      w = "webkit",
      s = "safari",
      o = "opera",
      m = "mobile",
      h = document.documentElement,
      b = [
        !/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua)
          ? "ie ie" + (/trident\/4\.0/.test(ua) ? "8" : RegExp.jQuery1)
          : is("firefox/2")
          ? g + " ff2"
          : is("firefox/3.5")
          ? g + " ff3 ff3_5"
          : is("firefox/3.6")
          ? g + " ff3 ff3_6"
          : is("firefox/3")
          ? g + " ff3"
          : is("gecko/")
          ? g
          : is("opera")
          ? o +
            (/version\/(\d+)/.test(ua)
              ? " " + o + RegExp.jQuery1
              : /opera(\s|\/)(\d+)/.test(ua)
              ? " " + o + RegExp.jQuery2
              : "")
          : is("konqueror")
          ? "konqueror"
          : is("blackberry")
          ? m + " blackberry"
          : is("android")
          ? m + " android"
          : is("chrome")
          ? w + " chrome"
          : is("iron")
          ? w + " iron"
          : is("applewebkit/")
          ? w +
            " " +
            s +
            (/version\/(\d+)/.test(ua) ? " " + s + RegExp.jQuery1 : "")
          : is("mozilla/")
          ? g
          : "",
        is("j2me")
          ? m + " j2me"
          : is("iphone")
          ? m + " iphone"
          : is("ipod")
          ? m + " ipod"
          : is("ipad")
          ? m + " ipad"
          : is("mac")
          ? "mac"
          : is("darwin")
          ? "mac"
          : is("webtv")
          ? "webtv"
          : is("win")
          ? "win" + (is("windows nt 6.0") ? " vista" : "")
          : is("freebsd")
          ? "freebsd"
          : is("x11") || is("linux")
          ? "linux"
          : "",
        "js",
      ];
    c = b.join(" ");
    h.className += " " + c;
    return c;
  }
  css_browser_selector(navigator.userAgent);
  (function (e, t, n, r) {
    e.fn.doubleTapToGo = function (r) {
      if (
        !("ontouchstart" in t) &&
        !navigator.msMaxTouchPoints &&
        !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
      )
        return false;
      this.each(function () {
        var t = false;
        e(this).on("click", function (n) {
          var r = e(this);
          if (r[0] != t[0]) {
            n.preventDefault();
            t = r;
          }
        });
        e(n).on("click touchstart MSPointerDown", function (n) {
          var r = true,
            i = e(n.target).parents();
          for (var s = 0; s < i.length; s++) if (i[s] == t[0]) r = false;
          if (r) t = false;
        });
      });
      return this;
    };
  })(jQuery, window, document);
  jQuery(".mobile .sp-megamenu-parent .sp-has-child:has(ul)").doubleTapToGo();
});
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = -1,
    o = -1,
    n = function (t) {
      return parseFloat(t) || 0;
    },
    a = function (e) {
      var o = 1,
        a = t(e),
        i = null,
        r = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - n(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s
            ? r.push(e)
            : Math.floor(Math.abs(i - a)) <= o
            ? (r[r.length - 1] = s.add(e))
            : r.push(e),
            (i = a);
        }),
        r
      );
    },
    i = function (e) {
      var o = { byRow: !0, property: "height", target: null, remove: !1 };
      return "object" == typeof e
        ? t.extend(o, e)
        : ("boolean" == typeof e
            ? (o.byRow = e)
            : "remove" === e && (o.remove = !0),
          o);
    },
    r = (t.fn.matchHeight = function (e) {
      var o = i(e);
      if (o.remove) {
        var n = this;
        return (
          this.css(o.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(n);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }),
          r._apply(this, o),
          this);
    });
  (r.version = "0.7.2"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = a),
    (r._parse = n),
    (r._parseOptions = i),
    (r._apply = function (e, o) {
      var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");
      return (
        u.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        u.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o &&
              "flex" !== o &&
              "inline-flex" !== o &&
              (o = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (l = a(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(l, function (e, o) {
          var a = t(o),
            i = 0;
          if (s.target) i = s.target.outerHeight(!1);
          else {
            if (s.byRow && a.length <= 1) return void a.css(s.property, "");
            a.each(function () {
              var e = t(this),
                o = e.attr("style"),
                n = e.css("display");
              "inline-block" !== n &&
                "flex" !== n &&
                "inline-flex" !== n &&
                (n = "block");
              var a = { display: n };
              (a[s.property] = ""),
                e.css(a),
                e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                o ? e.attr("style", o) : e.css("display", "");
            });
          }
          a.each(function () {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((o +=
                  n(e.css("border-top-width")) +
                  n(e.css("border-bottom-width"))),
                (o += n(e.css("padding-top")) + n(e.css("padding-bottom")))),
              e.css(s.property, i - o + "px"));
          });
        }),
        u.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");
        n in e ? (e[n] = e[n].add(o)) : (e[n] = o);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }
    n
      ? o === -1 &&
        (o = setTimeout(function () {
          s(a), (o = -1);
        }, r._throttle))
      : s(a);
  }),
    t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t);
  }),
    t(window)[h]("resize orientationchange", function (t) {
      r._update(!0, t);
    });
});
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return -1 == n.indexOf(t) && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return -1 != n && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        t = t || [];
        for (var r = this._onceEvents && this._onceEvents[e]; o; ) {
          var s = r && r[o];
          s && (this.off(e, o), delete r[o]),
            o.apply(this, t),
            (n += s ? 0 : 1),
            (o = i[n]);
        }
        return this;
      }
    }),
    (t.allOff = t.removeAllListeners =
      function () {
        delete this._events, delete this._onceEvents;
      }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      var t = [];
      if (Array.isArray(e)) t = e;
      else if ("number" == typeof e.length)
        for (var i = 0; i < e.length; i++) t.push(e[i]);
      else t.push(e);
      return t;
    }
    function o(e, t, r) {
      return this instanceof o
        ? ("string" == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = n(e)),
          (this.options = i({}, this.options)),
          "function" == typeof t ? (r = t) : i(this.options, t),
          r && this.on("always", r),
          this.getImages(),
          h && (this.jqDeferred = new h.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(e, t, r);
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var d = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
jQuery(function ($) {
  $(".match-height").imagesLoaded(function () {
    $(".match-height").matchHeight();
  });
});
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function () {}
        : function (t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o],
              s = n && n[r];
            s && (this.off(t, r), delete n[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize_FIX = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getSize_FIXbug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (r.isBoxSizeOuter = s = 200 == t(o.width)), i.removeChild(e);
      }
    }
    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (E ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (E ? 0 : g + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + z)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "object" == typeof t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          t && clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var r = i.toDashed(o),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function (t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, o, h);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize_FIX)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize_FIX = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = this.layout.size,
          s =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * r.width
              : parseInt(n, 10),
          a =
            -1 != o.indexOf("%")
              ? (parseFloat(o) / 100) * r.height
              : parseInt(o, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? r.paddingLeft : r.paddingRight),
          (a -= i ? r.paddingTop : r.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          h = e - n,
          u = {};
        (u.transform = this.getTranslate(a, h)),
          this.transition({
            to: u,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, r) {
            return e(t, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize_FIX,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function () {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize_FIX();
      }),
      (f.getSize_FIX = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function (t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize_FIX));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize_FIX(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize_FIX();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            r = this[o](n, t),
            s = { x: this.columnWidth * r.col, y: r.y },
            a = r.y + t.size.outerHeight,
            h = n + r.col,
            u = r.col;
          h > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });
!(function (a, b) {
  "use strict";
  var c = {
    item: 3,
    autoWidth: !1,
    slideMove: 1,
    slideMargin: 10,
    addClass: "",
    mode: "slide",
    useCSS: !0,
    cssEasing: "ease",
    easing: "linear",
    speed: 400,
    auto: !1,
    pauseOnHover: !1,
    loop: !1,
    slideEndAnimation: !0,
    pause: 2e3,
    keyPress: !1,
    controls: !0,
    prevHtml: "",
    nextHtml: "",
    rtl: !1,
    adaptiveHeight: !1,
    vertical: !1,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 10,
    pager: !0,
    gallery: !1,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",
    enableTouch: !0,
    enableDrag: !0,
    freeMove: !0,
    swipeThreshold: 40,
    responsive: [],
    onBeforeStart: function (a) {},
    onSliderLoad: function (a) {},
    onBeforeSlide: function (a, b) {},
    onAfterSlide: function (a, b) {},
    onBeforeNextSlide: function (a, b) {},
    onBeforePrevSlide: function (a, b) {},
  };
  a.fn.lightSlider = function (b) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          a(this).lightSlider(b);
        }),
        this
      );
    var d = {},
      e = a.extend(!0, {}, c, b),
      f = {},
      g = this;
    (d.$el = this), "fade" === e.mode && (e.vertical = !1);
    var h = g.children(),
      i = a(window).width(),
      j = null,
      k = null,
      l = 0,
      m = 0,
      n = !1,
      o = 0,
      p = "",
      q = 0,
      r = e.vertical === !0 ? "height" : "width",
      s = e.vertical === !0 ? "margin-bottom" : "margin-right",
      t = 0,
      u = 0,
      v = 0,
      w = 0,
      x = null,
      y = "ontouchstart" in document.documentElement,
      z = {};
    return (
      (z.chbreakpoint = function () {
        if (((i = a(window).width()), e.responsive.length)) {
          var b;
          if (
            (e.autoWidth === !1 && (b = e.item), i < e.responsive[0].breakpoint)
          )
            for (var c = 0; c < e.responsive.length; c++)
              i < e.responsive[c].breakpoint &&
                ((j = e.responsive[c].breakpoint), (k = e.responsive[c]));
          if ("undefined" != typeof k && null !== k)
            for (var d in k.settings)
              k.settings.hasOwnProperty(d) &&
                (("undefined" == typeof f[d] || null === f[d]) && (f[d] = e[d]),
                (e[d] = k.settings[d]));
          if (!a.isEmptyObject(f) && i > e.responsive[0].breakpoint)
            for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g]);
          e.autoWidth === !1 &&
            t > 0 &&
            v > 0 &&
            b !== e.item &&
            (q = Math.round(t / ((v + e.slideMargin) * e.slideMove)));
        }
      }),
      (z.calSW = function () {
        e.autoWidth === !1 &&
          (v = (o - (e.item * e.slideMargin - e.slideMargin)) / e.item);
      }),
      (z.calWidth = function (a) {
        var b = a === !0 ? p.find(".lslide").length : h.length;
        if (e.autoWidth === !1) m = b * (v + e.slideMargin);
        else {
          m = 0;
          for (var c = 0; b > c; c++)
            m += parseInt(h.eq(c).width()) + e.slideMargin;
        }
        return m;
      }),
      (d = {
        doCss: function () {
          var a = function () {
            for (
              var a = [
                  "transition",
                  "MozTransition",
                  "WebkitTransition",
                  "OTransition",
                  "msTransition",
                  "KhtmlTransition",
                ],
                b = document.documentElement,
                c = 0;
              c < a.length;
              c++
            )
              if (a[c] in b.style) return !0;
          };
          return e.useCSS && a() ? !0 : !1;
        },
        keyPress: function () {
          e.keyPress &&
            a(document).on("keyup.lightslider", function (b) {
              a(":focus").is("input, textarea") ||
                (b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                37 === b.keyCode
                  ? g.goToPrevSlide()
                  : 39 === b.keyCode && g.goToNextSlide());
            });
        },
        controls: function () {
          e.controls &&
            (g.after(
              '<div class="lSAction"><a class="lSPrev">' +
                e.prevHtml +
                '</a><a class="lSNext">' +
                e.nextHtml +
                "</a></div>"
            ),
            e.autoWidth
              ? z.calWidth(!1) < o && p.find(".lSAction").hide()
              : l <= e.item && p.find(".lSAction").hide(),
            p.find(".lSAction a").on("click", function (b) {
              return (
                b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                "lSPrev" === a(this).attr("class")
                  ? g.goToPrevSlide()
                  : g.goToNextSlide(),
                !1
              );
            }));
        },
        initialStyle: function () {
          var a = this;
          "fade" === e.mode && ((e.autoWidth = !1), (e.slideEndAnimation = !1)),
            e.auto && (e.slideEndAnimation = !1),
            e.autoWidth && ((e.slideMove = 1), (e.item = 1)),
            e.loop && ((e.slideMove = 1), (e.freeMove = !1)),
            e.onBeforeStart.call(this, g),
            z.chbreakpoint(),
            g
              .addClass("lightSlider")
              .wrap(
                '<div class="lSSlideOuter ' +
                  e.addClass +
                  '"><div class="lSSlideWrapper"></div></div>'
              ),
            (p = g.parent(".lSSlideWrapper")),
            e.rtl === !0 && p.parent().addClass("lSrtl"),
            e.vertical
              ? (p.parent().addClass("vertical"),
                (o = e.verticalHeight),
                p.css("height", o + "px"))
              : (o = g.outerWidth()),
            h.addClass("lslide"),
            e.loop === !0 &&
              "slide" === e.mode &&
              (z.calSW(),
              (z.clone = function () {
                if (z.calWidth(!0) > o) {
                  for (
                    var b = 0, c = 0, d = 0;
                    d < h.length &&
                    ((b +=
                      parseInt(g.find(".lslide").eq(d).width()) +
                      e.slideMargin),
                    c++,
                    !(b >= o + e.slideMargin));
                    d++
                  );
                  var f = e.autoWidth === !0 ? c : e.item;
                  if (f < g.find(".clone.left").length)
                    for (var i = 0; i < g.find(".clone.left").length - f; i++)
                      h.eq(i).remove();
                  if (f < g.find(".clone.right").length)
                    for (
                      var j = h.length - 1;
                      j > h.length - 1 - g.find(".clone.right").length;
                      j--
                    )
                      q--, h.eq(j).remove();
                  for (var k = g.find(".clone.right").length; f > k; k++)
                    g
                      .find(".lslide")
                      .eq(k)
                      .clone()
                      .removeClass("lslide")
                      .addClass("clone right")
                      .appendTo(g),
                      q++;
                  for (
                    var l =
                      g.find(".lslide").length - g.find(".clone.left").length;
                    l > g.find(".lslide").length - f;
                    l--
                  )
                    g.find(".lslide")
                      .eq(l - 1)
                      .clone()
                      .removeClass("lslide")
                      .addClass("clone left")
                      .prependTo(g);
                  h = g.children();
                } else
                  h.hasClass("clone") &&
                    (g.find(".clone").remove(), a.move(g, 0));
              }),
              z.clone()),
            (z.sSW = function () {
              (l = h.length),
                e.rtl === !0 && e.vertical === !1 && (s = "margin-left"),
                e.autoWidth === !1 && h.css(r, v + "px"),
                h.css(s, e.slideMargin + "px"),
                (m = z.calWidth(!1)),
                g.css(r, m + "px"),
                e.loop === !0 &&
                  "slide" === e.mode &&
                  n === !1 &&
                  (q = g.find(".clone.left").length);
            }),
            (z.calL = function () {
              (h = g.children()), (l = h.length);
            }),
            this.doCss() && p.addClass("usingCss"),
            z.calL(),
            "slide" === e.mode
              ? (z.calSW(),
                z.sSW(),
                e.loop === !0 && ((t = a.slideValue()), this.move(g, t)),
                e.vertical === !1 && this.setHeight(g, !1))
              : (this.setHeight(g, !0),
                g.addClass("lSFade"),
                this.doCss() || (h.fadeOut(0), h.eq(q).fadeIn(0))),
            e.loop === !0 && "slide" === e.mode
              ? h.eq(q).addClass("active")
              : h.first().addClass("active");
        },
        pager: function () {
          var a = this;
          if (
            ((z.createPager = function () {
              w =
                (o - (e.thumbItem * e.thumbMargin - e.thumbMargin)) /
                e.thumbItem;
              var b = p.find(".lslide"),
                c = p.find(".lslide").length,
                d = 0,
                f = "",
                h = 0;
              for (d = 0; c > d; d++) {
                "slide" === e.mode &&
                  (e.autoWidth
                    ? (h +=
                        (parseInt(b.eq(d).width()) + e.slideMargin) *
                        e.slideMove)
                    : (h = d * (v + e.slideMargin) * e.slideMove));
                var i = b.eq(d * e.slideMove).attr("data-thumb");
                if (
                  ((f +=
                    e.gallery === !0
                      ? '<li style="width:100%;' +
                        r +
                        ":" +
                        w +
                        "px;" +
                        s +
                        ":" +
                        e.thumbMargin +
                        'px"><a href="#"><img src="' +
                        i +
                        '" /></a></li>'
                      : '<li><a href="#">' + (d + 1) + "</a></li>"),
                  "slide" === e.mode && h >= m - o - e.slideMargin)
                ) {
                  d += 1;
                  var j = 2;
                  e.autoWidth &&
                    ((f += '<li><a href="#">' + (d + 1) + "</a></li>"),
                    (j = 1)),
                    j > d
                      ? ((f = null), p.parent().addClass("noPager"))
                      : p.parent().removeClass("noPager");
                  break;
                }
              }
              var k = p.parent();
              k.find(".lSPager").html(f),
                e.gallery === !0 &&
                  (e.vertical === !0 &&
                    k.find(".lSPager").css("width", e.vThumbWidth + "px"),
                  (u = d * (e.thumbMargin + w) + 0.5),
                  k
                    .find(".lSPager")
                    .css({
                      property: u + "px",
                      "transition-duration": e.speed + "ms",
                    }),
                  e.vertical === !0 &&
                    p
                      .parent()
                      .css(
                        "padding-right",
                        e.vThumbWidth + e.galleryMargin + "px"
                      ),
                  k.find(".lSPager").css(r, u + "px"));
              var l = k.find(".lSPager").find("li");
              l.first().addClass("active"),
                l.on("click", function () {
                  return (
                    e.loop === !0 && "slide" === e.mode
                      ? (q +=
                          l.index(this) -
                          k.find(".lSPager").find("li.active").index())
                      : (q = l.index(this)),
                    g.mode(!1),
                    e.gallery === !0 && a.slideThumb(),
                    !1
                  );
                });
            }),
            e.pager)
          ) {
            var b = "lSpg";
            e.gallery && (b = "lSGallery"),
              p.after('<ul class="lSPager ' + b + '"></ul>');
            var c = e.vertical ? "margin-left" : "margin-top";
            p
              .parent()
              .find(".lSPager")
              .css(c, e.galleryMargin + "px"),
              z.createPager();
          }
          setTimeout(function () {
            z.init();
          }, 0);
        },
        setHeight: function (a, b) {
          var c = null,
            d = this;
          c = e.loop ? a.children(".lslide ").first() : a.children().first();
          var f = function () {
            var d = c.outerHeight(),
              e = 0,
              f = d;
            b && ((d = 0), (e = (100 * f) / o)),
              a.css({ height: d + "px", "padding-bottom": e + "%" });
          };
          f(),
            c.find("img").length
              ? c.find("img")[0].complete
                ? (f(), x || d.auto())
                : c.find("img").on("load", function () {
                    setTimeout(function () {
                      f(), x || d.auto();
                    }, 100);
                  })
              : x || d.auto();
        },
        active: function (a, b) {
          this.doCss() && "fade" === e.mode && p.addClass("on");
          var c = 0;
          if (q * e.slideMove < l) {
            a.removeClass("active"),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                a.fadeOut(e.speed),
              (c = b === !0 ? q : q * e.slideMove);
            var d, f;
            b === !0 && ((d = a.length), (f = d - 1), c + 1 >= d && (c = f)),
              e.loop === !0 &&
                "slide" === e.mode &&
                ((c =
                  b === !0
                    ? q - g.find(".clone.left").length
                    : q * e.slideMove),
                b === !0 &&
                  ((d = a.length),
                  (f = d - 1),
                  c + 1 === d ? (c = f) : c + 1 > d && (c = 0))),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                a.eq(c).fadeIn(e.speed),
              a.eq(c).addClass("active");
          } else
            a.removeClass("active"),
              a.eq(a.length - 1).addClass("active"),
              this.doCss() ||
                "fade" !== e.mode ||
                b !== !1 ||
                (a.fadeOut(e.speed), a.eq(c).fadeIn(e.speed));
        },
        move: function (a, b) {
          e.rtl === !0 && (b = -b),
            this.doCss()
              ? a.css(
                  e.vertical === !0
                    ? {
                        transform: "translate3d(0px, " + -b + "px, 0px)",
                        "-webkit-transform":
                          "translate3d(0px, " + -b + "px, 0px)",
                      }
                    : {
                        transform: "translate3d(" + -b + "px, 0px, 0px)",
                        "-webkit-transform":
                          "translate3d(" + -b + "px, 0px, 0px)",
                      }
                )
              : e.vertical === !0
              ? a
                  .css("position", "relative")
                  .animate({ top: -b + "px" }, e.speed, e.easing)
              : a
                  .css("position", "relative")
                  .animate({ left: -b + "px" }, e.speed, e.easing);
          var c = p.parent().find(".lSPager").find("li");
          this.active(c, !0);
        },
        fade: function () {
          this.active(h, !1);
          var a = p.parent().find(".lSPager").find("li");
          this.active(a, !0);
        },
        slide: function () {
          var a = this;
          (z.calSlide = function () {
            m > o &&
              ((t = a.slideValue()),
              a.active(h, !1),
              t > m - o - e.slideMargin
                ? (t = m - o - e.slideMargin)
                : 0 > t && (t = 0),
              a.move(g, t),
              e.loop === !0 &&
                "slide" === e.mode &&
                (q >= l - g.find(".clone.left").length / e.slideMove &&
                  a.resetSlide(g.find(".clone.left").length),
                0 === q && a.resetSlide(p.find(".lslide").length)));
          }),
            z.calSlide();
        },
        resetSlide: function (a) {
          var b = this;
          p.find(".lSAction a").addClass("disabled"),
            setTimeout(function () {
              (q = a),
                p.css("transition-duration", "0ms"),
                (t = b.slideValue()),
                b.active(h, !1),
                d.move(g, t),
                setTimeout(function () {
                  p.css("transition-duration", e.speed + "ms"),
                    p.find(".lSAction a").removeClass("disabled");
                }, 50);
            }, e.speed + 100);
        },
        slideValue: function () {
          var a = 0;
          if (e.autoWidth === !1) a = q * (v + e.slideMargin) * e.slideMove;
          else {
            a = 0;
            for (var b = 0; q > b; b++)
              a += parseInt(h.eq(b).width()) + e.slideMargin;
          }
          return a;
        },
        slideThumb: function () {
          var a;
          switch (e.currentPagerPosition) {
            case "left":
              a = 0;
              break;
            case "middle":
              a = o / 2 - w / 2;
              break;
            case "right":
              a = o - w;
          }
          var b = q - g.find(".clone.left").length,
            c = p.parent().find(".lSPager");
          "slide" === e.mode &&
            e.loop === !0 &&
            (b >= c.children().length
              ? (b = 0)
              : 0 > b && (b = c.children().length));
          var d = b * (w + e.thumbMargin) - a;
          d + o > u && (d = u - o - e.thumbMargin),
            0 > d && (d = 0),
            this.move(c, d);
        },
        auto: function () {
          e.auto &&
            (clearInterval(x),
            (x = setInterval(function () {
              g.goToNextSlide();
            }, e.pause)));
        },
        pauseOnHover: function () {
          var b = this;
          e.auto &&
            e.pauseOnHover &&
            (p.on("mouseenter", function () {
              a(this).addClass("ls-hover"), g.pause(), (e.auto = !0);
            }),
            p.on("mouseleave", function () {
              a(this).removeClass("ls-hover"),
                p.find(".lightSlider").hasClass("lsGrabbing") || b.auto();
            }));
        },
        touchMove: function (a, b) {
          if ((p.css("transition-duration", "0ms"), "slide" === e.mode)) {
            var c = a - b,
              d = t - c;
            if (d >= m - o - e.slideMargin)
              if (e.freeMove === !1) d = m - o - e.slideMargin;
              else {
                var f = m - o - e.slideMargin;
                d = f + (d - f) / 5;
              }
            else 0 > d && (e.freeMove === !1 ? (d = 0) : (d /= 5));
            this.move(g, d);
          }
        },
        touchEnd: function (a) {
          if (
            (p.css("transition-duration", e.speed + "ms"), "slide" === e.mode)
          ) {
            var b = !1,
              c = !0;
            (t -= a),
              t > m - o - e.slideMargin
                ? ((t = m - o - e.slideMargin), e.autoWidth === !1 && (b = !0))
                : 0 > t && (t = 0);
            var d = function (a) {
              var c = 0;
              if ((b || (a && (c = 1)), e.autoWidth))
                for (
                  var d = 0, f = 0;
                  f < h.length &&
                  ((d += parseInt(h.eq(f).width()) + e.slideMargin),
                  (q = f + c),
                  !(d >= t));
                  f++
                );
              else {
                var g = t / ((v + e.slideMargin) * e.slideMove);
                (q = parseInt(g) + c),
                  t >= m - o - e.slideMargin && g % 1 !== 0 && q++;
              }
            };
            a >= e.swipeThreshold
              ? (d(!1), (c = !1))
              : a <= -e.swipeThreshold && (d(!0), (c = !1)),
              g.mode(c),
              this.slideThumb();
          } else
            a >= e.swipeThreshold
              ? g.goToPrevSlide()
              : a <= -e.swipeThreshold && g.goToNextSlide();
        },
        enableDrag: function () {
          var b = this;
          if (!y) {
            var c = 0,
              d = 0,
              f = !1;
            p.find(".lightSlider").addClass("lsGrab"),
              p.on("mousedown", function (b) {
                return o > m && 0 !== m
                  ? !1
                  : void (
                      "lSPrev" !== a(b.target).attr("class") &&
                      "lSNext" !== a(b.target).attr("class") &&
                      ((c = e.vertical === !0 ? b.pageY : b.pageX),
                      (f = !0),
                      b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1),
                      (p.scrollLeft += 1),
                      (p.scrollLeft -= 1),
                      p
                        .find(".lightSlider")
                        .removeClass("lsGrab")
                        .addClass("lsGrabbing"),
                      clearInterval(x))
                    );
              }),
              a(window).on("mousemove", function (a) {
                f &&
                  ((d = e.vertical === !0 ? a.pageY : a.pageX),
                  b.touchMove(d, c));
              }),
              a(window).on("mouseup", function (g) {
                if (f) {
                  p
                    .find(".lightSlider")
                    .removeClass("lsGrabbing")
                    .addClass("lsGrab"),
                    (f = !1),
                    (d = e.vertical === !0 ? g.pageY : g.pageX);
                  var h = d - c;
                  Math.abs(h) >= e.swipeThreshold &&
                    a(window).on("click.ls", function (b) {
                      b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1),
                        b.stopImmediatePropagation(),
                        b.stopPropagation(),
                        a(window).off("click.ls");
                    }),
                    b.touchEnd(h);
                }
              });
          }
        },
        enableTouch: function () {
          var a = this;
          if (y) {
            var b = {},
              c = {};
            p.on("touchstart", function (a) {
              (c = a.originalEvent.targetTouches[0]),
                (b.pageX = a.originalEvent.targetTouches[0].pageX),
                (b.pageY = a.originalEvent.targetTouches[0].pageY),
                clearInterval(x);
            }),
              p.on("touchmove", function (d) {
                if (o > m && 0 !== m) return !1;
                var f = d.originalEvent;
                c = f.targetTouches[0];
                var g = Math.abs(c.pageX - b.pageX),
                  h = Math.abs(c.pageY - b.pageY);
                e.vertical === !0
                  ? (3 * h > g && d.preventDefault(),
                    a.touchMove(c.pageY, b.pageY))
                  : (3 * g > h && d.preventDefault(),
                    a.touchMove(c.pageX, b.pageX));
              }),
              p.on("touchend", function () {
                if (o > m && 0 !== m) return !1;
                var d;
                (d = e.vertical === !0 ? c.pageY - b.pageY : c.pageX - b.pageX),
                  a.touchEnd(d);
              });
          }
        },
        build: function () {
          var b = this;
          b.initialStyle(),
            this.doCss() &&
              (e.enableTouch === !0 && b.enableTouch(),
              e.enableDrag === !0 && b.enableDrag()),
            a(window).on("focus", function () {
              b.auto();
            }),
            a(window).on("blur", function () {
              clearInterval(x);
            }),
            b.pager(),
            b.pauseOnHover(),
            b.controls(),
            b.keyPress();
        },
      }),
      d.build(),
      (z.init = function () {
        z.chbreakpoint(),
          e.vertical === !0
            ? ((o = e.item > 1 ? e.verticalHeight : h.outerHeight()),
              p.css("height", o + "px"))
            : (o = p.outerWidth()),
          e.loop === !0 && "slide" === e.mode && z.clone(),
          z.calL(),
          "slide" === e.mode && g.removeClass("lSSlide"),
          "slide" === e.mode && (z.calSW(), z.sSW()),
          setTimeout(function () {
            "slide" === e.mode && g.addClass("lSSlide");
          }, 1e3),
          e.pager && z.createPager(),
          e.adaptiveHeight === !0 &&
            e.vertical === !1 &&
            g.css("height", h.eq(q).outerHeight(!0)),
          e.adaptiveHeight === !1 &&
            ("slide" === e.mode
              ? e.vertical === !1
                ? d.setHeight(g, !1)
                : d.auto()
              : d.setHeight(g, !0)),
          e.gallery === !0 && d.slideThumb(),
          "slide" === e.mode && d.slide(),
          e.autoWidth === !1
            ? h.length <= e.item
              ? p.find(".lSAction").hide()
              : p.find(".lSAction").show()
            : z.calWidth(!1) < o && 0 !== m
            ? p.find(".lSAction").hide()
            : p.find(".lSAction").show();
      }),
      (g.goToPrevSlide = function () {
        if (q > 0)
          e.onBeforePrevSlide.call(this, g, q),
            q--,
            g.mode(!1),
            e.gallery === !0 && d.slideThumb();
        else if (e.loop === !0) {
          if ((e.onBeforePrevSlide.call(this, g, q), "fade" === e.mode)) {
            var a = l - 1;
            q = parseInt(a / e.slideMove);
          }
          g.mode(!1), e.gallery === !0 && d.slideThumb();
        } else
          e.slideEndAnimation === !0 &&
            (g.addClass("leftEnd"),
            setTimeout(function () {
              g.removeClass("leftEnd");
            }, 400));
      }),
      (g.goToNextSlide = function () {
        var a = !0;
        if ("slide" === e.mode) {
          var b = d.slideValue();
          a = b < m - o - e.slideMargin;
        }
        q * e.slideMove < l - e.slideMove && a
          ? (e.onBeforeNextSlide.call(this, g, q),
            q++,
            g.mode(!1),
            e.gallery === !0 && d.slideThumb())
          : e.loop === !0
          ? (e.onBeforeNextSlide.call(this, g, q),
            (q = 0),
            g.mode(!1),
            e.gallery === !0 && d.slideThumb())
          : e.slideEndAnimation === !0 &&
            (g.addClass("rightEnd"),
            setTimeout(function () {
              g.removeClass("rightEnd");
            }, 400));
      }),
      (g.mode = function (a) {
        e.adaptiveHeight === !0 &&
          e.vertical === !1 &&
          g.css("height", h.eq(q).outerHeight(!0)),
          n === !1 &&
            ("slide" === e.mode
              ? d.doCss() &&
                (g.addClass("lSSlide"),
                "" !== e.speed && p.css("transition-duration", e.speed + "ms"),
                "" !== e.cssEasing &&
                  p.css("transition-timing-function", e.cssEasing))
              : d.doCss() &&
                ("" !== e.speed && g.css("transition-duration", e.speed + "ms"),
                "" !== e.cssEasing &&
                  g.css("transition-timing-function", e.cssEasing))),
          a || e.onBeforeSlide.call(this, g, q),
          "slide" === e.mode ? d.slide() : d.fade(),
          p.hasClass("ls-hover") || d.auto(),
          setTimeout(function () {
            a || e.onAfterSlide.call(this, g, q);
          }, e.speed),
          (n = !0);
      }),
      (g.play = function () {
        g.goToNextSlide(), (e.auto = !0), d.auto();
      }),
      (g.pause = function () {
        (e.auto = !1), clearInterval(x);
      }),
      (g.refresh = function () {
        z.init();
      }),
      (g.getCurrentSlideCount = function () {
        var a = q;
        if (e.loop) {
          var b = p.find(".lslide").length,
            c = g.find(".clone.left").length;
          a = c - 1 >= q ? b + (q - c) : q >= b + c ? q - b - c : q - c;
        }
        return a + 1;
      }),
      (g.getTotalSlideCount = function () {
        return p.find(".lslide").length;
      }),
      (g.goToSlide = function (a) {
        (q = e.loop ? a + g.find(".clone.left").length - 1 : a),
          g.mode(!1),
          e.gallery === !0 && d.slideThumb();
      }),
      (g.destroy = function () {
        g.lightSlider &&
          ((g.goToPrevSlide = function () {}),
          (g.goToNextSlide = function () {}),
          (g.mode = function () {}),
          (g.play = function () {}),
          (g.pause = function () {}),
          (g.refresh = function () {}),
          (g.getCurrentSlideCount = function () {}),
          (g.getTotalSlideCount = function () {}),
          (g.goToSlide = function () {}),
          (g.lightSlider = null),
          (z = { init: function () {} }),
          g.parent().parent().find(".lSAction, .lSPager").remove(),
          g
            .removeClass(
              "lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right"
            )
            .removeAttr("style")
            .unwrap()
            .unwrap(),
          g.children().removeAttr("style"),
          h.removeClass("lslide active"),
          g.find(".clone").remove(),
          (h = null),
          (x = null),
          (n = !1),
          (q = 0));
      }),
      setTimeout(function () {
        e.onSliderLoad.call(this, g);
      }, 10),
      a(window).on("resize orientationchange", function (a) {
        setTimeout(function () {
          a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
            z.init();
        }, 200);
      }),
      this
    );
  };
})(jQuery);
jQuery(function ($) {
  $(".animated_headlines").imagesLoaded(function () {
    function initHeadline() {
      singleLetters($(".animated_headlines.letters").find("b")),
        animateHeadline($(".animated_headlines"));
    }
    function singleLetters(e) {
      e.each(function () {
        var e = $(this),
          a = e.text().split(""),
          t = e.hasClass("is-visible");
        for (i in a)
          e.parents(".rotate-2").length > 0 &&
            (a[i] = "<span>" + a[i] + "</span>"),
            (a[i] = t
              ? '<i class="in">' + a[i] + "</i>"
              : "<i>" + a[i] + "</i>");
        var s = a.join("");
        e.html(s).css("opacity", 1);
      });
    }
    function animateHeadline(e) {
      var i = animationDelay;
      e.each(function () {
        var e = $(this);
        if (e.hasClass("loading-bar"))
          (i = barAnimationDelay),
            setTimeout(function () {
              e.find(".ah-words-wrapper").addClass("is-loading");
            }, barWaiting);
        else if (e.hasClass("reset-width")) {
          t = (a = e.find(".ah-words-wrapper")).width();
          a.css("width", t);
        } else if (e.hasClass("clip")) {
          var a = e.find(".ah-words-wrapper"),
            t = a.width() + 5;
          a.css("width", "auto"), (s = 0);
        } else if (!e.hasClass("type")) {
          var s = 0;
          e.find(".ah-words-wrapper b").each(function () {
            var e = $(this).width();
            e > s && (s = e);
          }),
            e.find(".ah-words-wrapper").css("width", s + 10);
        }
        setTimeout(function () {
          hideWord(e.find(".is-visible").eq(0));
        }, i);
      });
    }
    function hideWord(e) {
      var i = takeNext(e);
      if (e.parents(".animated_headlines").hasClass("type")) {
        var a = e.parent(".ah-words-wrapper");
        a.addClass("selected").removeClass("waiting"),
          setTimeout(function () {
            a.removeClass("selected").animate({ width: "auto" }),
              e
                .removeClass("is-visible")
                .addClass("is-hidden")
                .children("i")
                .removeClass("in")
                .addClass("out");
          }, selectionDuration),
          setTimeout(function () {
            showWord(i, typeLettersDelay);
          }, typeAnimationDelay);
      } else if (e.parents(".animated_headlines").hasClass("letters")) {
        var t = e.children("i").length >= i.children("i").length;
        hideLetter(e.find("i").eq(0), e, t, lettersDelay),
          showLetter(i.find("i").eq(0), i, t, lettersDelay);
      } else
        e.parents(".animated_headlines").hasClass("clip")
          ? e
              .parents(".ah-words-wrapper")
              .animate({ width: "2px" }, revealDuration, function () {
                switchWord(e, i), showWord(i);
              })
          : e.parents(".animated_headlines").hasClass("reset-width")
          ? e
              .parents(".ah-words-wrapper")
              .animate({ width: "auto" }, revealDuration, function () {
                switchWord(e, i), showWord(i);
              })
          : e.parents(".animated_headlines").hasClass("loading-bar")
          ? (e.parents(".ah-words-wrapper").removeClass("is-loading"),
            switchWord(e, i),
            setTimeout(function () {
              hideWord(i);
            }, barAnimationDelay),
            setTimeout(function () {
              e.parents(".ah-words-wrapper").addClass("is-loading");
            }, barWaiting))
          : (switchWord(e, i),
            setTimeout(function () {
              hideWord(i);
            }, animationDelay));
    }
    function showWord(e, i) {
      e.parents(".animated_headlines").hasClass("type")
        ? (showLetter(e.find("i").eq(0), e, !1, i),
          e
            .addClass("is-visible")
            .removeClass("is-hidden")
            .animate({ width: "auto" }))
        : e.parents(".animated_headlines").hasClass("reset-width")
        ? e
            .parents(".ah-words-wrapper")
            .animate({ width: e.width() }, revealDuration, function () {
              setTimeout(function () {
                hideWord(e);
              }, revealAnimationDelay);
            })
        : e.parents(".animated_headlines").hasClass("clip") &&
          e
            .parents(".ah-words-wrapper")
            .animate({ width: e.width() + 5 }, revealDuration, function () {
              setTimeout(function () {
                hideWord(e);
              }, revealAnimationDelay);
            });
    }
    function hideLetter(e, i, a, t) {
      if (
        (e.removeClass("in").addClass("out"),
        e.is(":last-child")
          ? a &&
            setTimeout(function () {
              hideWord(takeNext(i));
            }, animationDelay)
          : setTimeout(function () {
              hideLetter(e.next(), i, a, t);
            }, t),
        e.is(":last-child") && $("html").hasClass("no-csstransitions"))
      ) {
        var s = takeNext(i);
        switchWord(i, s);
      }
    }
    function showLetter(e, i, a, t) {
      e.addClass("in").removeClass("out"),
        e.is(":last-child")
          ? (i.parents(".animated_headlines").hasClass("type") &&
              setTimeout(function () {
                i.parents(".ah-words-wrapper").addClass("waiting");
              }, 300),
            a ||
              setTimeout(function () {
                hideWord(i);
              }, animationDelay))
          : setTimeout(function () {
              showLetter(e.next(), i, a, t);
            }, t);
    }
    function takeNext(e) {
      return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
    }
    function takePrev(e) {
      return e.is(":first-child") ? e.parent().children().last() : e.prev();
    }
    function switchWord(e, i) {
      e.removeClass("is-visible").addClass("is-hidden"),
        i.removeClass("is-hidden").addClass("is-visible");
    }
    var animationDelay = 2500,
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3e3,
      lettersDelay = 90,
      typeLettersDelay = 170,
      selectionDuration = 600,
      typeAnimationDelay = selectionDuration + 800,
      revealDuration = 800,
      revealAnimationDelay = 2500;
    initHeadline();
  });
});
!(function (a, b, c, d) {
  var e = function (d, e) {
    (this.elem = d),
      (this.$elem = a(d)),
      (this.options = e),
      (this.metadata = this.$elem.data("plugin-options")),
      (this.$win = a(b)),
      (this.sections = {}),
      (this.didScroll = !1),
      (this.$doc = a(c)),
      (this.docHeight = this.$doc.height());
  };
  (e.prototype = {
    defaults: {
      navItems: "a",
      currentClass: "current",
      changeHash: !1,
      easing: "swing",
      filter: "",
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      begin: !1,
      end: !1,
      scrollChange: !1,
    },
    init: function () {
      return (
        (this.config = a.extend(
          {},
          this.defaults,
          this.options,
          this.metadata
        )),
        (this.$nav = this.$elem.find(this.config.navItems)),
        "" !== this.config.filter &&
          (this.$nav = this.$nav.filter(this.config.filter)),
        this.$nav.on("click.onePageNav", a.proxy(this.handleClick, this)),
        this.getPositions(),
        this.bindInterval(),
        this.$win.on("resize.onePageNav", a.proxy(this.getPositions, this)),
        this
      );
    },
    adjustNav: function (a, b) {
      a.$elem
        .find("." + a.config.currentClass)
        .removeClass(a.config.currentClass),
        b.addClass(a.config.currentClass);
    },
    bindInterval: function () {
      var b,
        a = this;
      a.$win.on("scroll.onePageNav", function () {
        a.didScroll = !0;
      }),
        (a.t = setInterval(function () {
          (b = a.$doc.height()),
            a.didScroll && ((a.didScroll = !1), a.scrollChange()),
            b !== a.docHeight && ((a.docHeight = b), a.getPositions());
        }, 250));
    },
    getHash: function (a) {
      return a.attr("href").split("#")[1];
    },
    getPositions: function () {
      var c,
        d,
        e,
        b = this;
      b.$nav.each(function () {
        (c = b.getHash(a(this))),
          (e = a("#" + c)),
          e.length && ((d = e.offset().top), (b.sections[c] = Math.round(d)));
      });
    },
    getSection: function (a) {
      var b = null,
        c = Math.round(this.$win.height() * this.config.scrollThreshold);
      for (var d in this.sections) this.sections[d] - c < a && (b = d);
      return b;
    },
    handleClick: function (c) {
      var d = this,
        e = a(c.currentTarget),
        f = e.parent(),
        g = "#" + d.getHash(e);
      f.hasClass(d.config.currentClass) ||
        (d.config.begin && d.config.begin(),
        d.adjustNav(d, f),
        d.unbindInterval(),
        d.scrollTo(g, function () {
          d.config.changeHash && (b.location.hash = g),
            d.bindInterval(),
            d.config.end && d.config.end();
        })),
        c.preventDefault();
    },
    scrollChange: function () {
      var c,
        a = this.$win.scrollTop(),
        b = this.getSection(a);
      null !== b &&
        ((c = this.$elem.find('a[href$="#' + b + '"]').parent()),
        c.hasClass(this.config.currentClass) ||
          (this.adjustNav(this, c),
          this.config.scrollChange && this.config.scrollChange(c)));
    },
    scrollTo: function (b, c) {
      var d = a(b).offset().top - 65;
      a("html, body").animate(
        { scrollTop: d },
        this.config.scrollSpeed,
        this.config.easing,
        c
      );
    },
    unbindInterval: function () {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav");
    },
  }),
    (e.defaults = e.prototype.defaults),
    (a.fn.onePageNav = function (a) {
      return this.each(function () {
        new e(this, a).init();
      });
    });
})(jQuery, window, document);
!(function (a, b) {
  var c = b(a, a.document);
  (a.lazySizes = c),
    "object" == typeof module && module.exports && (module.exports = c);
})(window, function (a, b) {
  "use strict";
  if (b.getElementsByClassName) {
    var c,
      d,
      e = b.documentElement,
      f = a.Date,
      g = a.HTMLPictureElement,
      h = "addEventListener",
      i = "getAttribute",
      j = a[h],
      k = a.setTimeout,
      l = a.requestAnimationFrame || k,
      m = a.requestIdleCallback,
      n = /^picture$/i,
      o = ["load", "error", "lazyincluded", "_lazyloaded"],
      p = {},
      q = Array.prototype.forEach,
      r = function (a, b) {
        return (
          p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
          p[b].test(a[i]("class") || "") && p[b]
        );
      },
      s = function (a, b) {
        r(a, b) ||
          a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
      },
      t = function (a, b) {
        var c;
        (c = r(a, b)) &&
          a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
      },
      u = function (a, b, c) {
        var d = c ? h : "removeEventListener";
        c && u(a, b),
          o.forEach(function (c) {
            a[d](c, b);
          });
      },
      v = function (a, d, e, f, g) {
        var h = b.createEvent("Event");
        return (
          e || (e = {}),
          (e.instance = c),
          h.initEvent(d, !f, !g),
          (h.detail = e),
          a.dispatchEvent(h),
          h
        );
      },
      w = function (b, c) {
        var e;
        !g && (e = a.picturefill || d.pf)
          ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src),
            e({ reevaluate: !0, elements: [b] }))
          : c && c.src && (b.src = c.src);
      },
      x = function (a, b) {
        return (getComputedStyle(a, null) || {})[b];
      },
      y = function (a, b, c) {
        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth; )
          (c = b.offsetWidth), (b = b.parentNode);
        return c;
      },
      z = (function () {
        var a,
          c,
          d = [],
          e = [],
          f = d,
          g = function () {
            var b = f;
            for (f = d.length ? e : d, a = !0, c = !1; b.length; ) b.shift()();
            a = !1;
          },
          h = function (d, e) {
            a && !e
              ? d.apply(this, arguments)
              : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
          };
        return (h._lsFlush = g), h;
      })(),
      A = function (a, b) {
        return b
          ? function () {
              z(a);
            }
          : function () {
              var b = this,
                c = arguments;
              z(function () {
                a.apply(b, c);
              });
            };
      },
      B = function (a) {
        var b,
          c = 0,
          e = d.throttleDelay,
          g = d.ricTimeout,
          h = function () {
            (b = !1), (c = f.now()), a();
          },
          i =
            m && g > 49
              ? function () {
                  m(h, { timeout: g }),
                    g !== d.ricTimeout && (g = d.ricTimeout);
                }
              : A(function () {
                  k(h);
                }, !0);
        return function (a) {
          var d;
          (a = !0 === a) && (g = 33),
            b ||
              ((b = !0),
              (d = e - (f.now() - c)),
              d < 0 && (d = 0),
              a || d < 9 ? i() : k(i, d));
        };
      },
      C = function (a) {
        var b,
          c,
          d = 99,
          e = function () {
            (b = null), a();
          },
          g = function () {
            var a = f.now() - c;
            a < d ? k(g, d - a) : (m || e)(e);
          };
        return function () {
          (c = f.now()), b || (b = k(g, d));
        };
      };
    !(function () {
      var b,
        c = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
      (a.lazySizesConfig = d),
        k(function () {
          d.init && F();
        });
    })();
    var D = (function () {
        var g,
          l,
          m,
          o,
          p,
          y,
          D,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M = /^img$/i,
          N = /^iframe$/i,
          O = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
          P = 0,
          Q = 0,
          R = 0,
          S = -1,
          T = function (a) {
            R--,
              a && a.target && u(a.target, T),
              (!a || R < 0 || !a.target) && (R = 0);
          },
          U = function (a, c) {
            var d,
              f = a,
              g =
                "hidden" == x(b.body, "visibility") ||
                ("hidden" != x(a.parentNode, "visibility") &&
                  "hidden" != x(a, "visibility"));
            for (
              F -= c, I += c, G -= c, H += c;
              g && (f = f.offsetParent) && f != b.body && f != e;

            )
              (g = (x(f, "opacity") || 1) > 0) &&
                "visible" != x(f, "overflow") &&
                ((d = f.getBoundingClientRect()),
                (g =
                  H > d.left &&
                  G < d.right &&
                  I > d.top - 1 &&
                  F < d.bottom + 1));
            return g;
          },
          V = function () {
            var a,
              f,
              h,
              j,
              k,
              m,
              n,
              p,
              q,
              r = c.elements;
            if ((o = d.loadMode) && R < 8 && (a = r.length)) {
              (f = 0),
                S++,
                null == K &&
                  ("expand" in d ||
                    (d.expand =
                      e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370),
                  (J = d.expand),
                  (K = J * d.expFactor)),
                Q < K && R < 1 && S > 2 && o > 2 && !b.hidden
                  ? ((Q = K), (S = 0))
                  : (Q = o > 1 && S > 1 && R < 6 ? J : P);
              for (; f < a; f++)
                if (r[f] && !r[f]._lazyRace)
                  if (O)
                    if (
                      (((p = r[f][i]("data-expand")) && (m = 1 * p)) || (m = Q),
                      q !== m &&
                        ((y = innerWidth + m * L),
                        (D = innerHeight + m),
                        (n = -1 * m),
                        (q = m)),
                      (h = r[f].getBoundingClientRect()),
                      (I = h.bottom) >= n &&
                        (F = h.top) <= D &&
                        (H = h.right) >= n * L &&
                        (G = h.left) <= y &&
                        (I || H || G || F) &&
                        (d.loadHidden || "hidden" != x(r[f], "visibility")) &&
                        ((l && R < 3 && !p && (o < 3 || S < 4)) || U(r[f], m)))
                    ) {
                      if ((ba(r[f]), (k = !0), R > 9)) break;
                    } else
                      !k &&
                        l &&
                        !j &&
                        R < 4 &&
                        S < 4 &&
                        o > 2 &&
                        (g[0] || d.preloadAfterLoad) &&
                        (g[0] ||
                          (!p &&
                            (I ||
                              H ||
                              G ||
                              F ||
                              "auto" != r[f][i](d.sizesAttr)))) &&
                        (j = g[0] || r[f]);
                  else ba(r[f]);
              j && !k && ba(j);
            }
          },
          W = B(V),
          X = function (a) {
            s(a.target, d.loadedClass),
              t(a.target, d.loadingClass),
              u(a.target, Z),
              v(a.target, "lazyloaded");
          },
          Y = A(X),
          Z = function (a) {
            Y({ target: a.target });
          },
          $ = function (a, b) {
            try {
              a.contentWindow.location.replace(b);
            } catch (c) {
              a.src = b;
            }
          },
          _ = function (a) {
            var b,
              c = a[i](d.srcsetAttr);
            (b = d.customMedia[a[i]("data-media") || a[i]("media")]) &&
              a.setAttribute("media", b),
              c && a.setAttribute("srcset", c);
          },
          aa = A(function (a, b, c, e, f) {
            var g, h, j, l, o, p;
            (o = v(a, "lazybeforeunveil", b)).defaultPrevented ||
              (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)),
              (h = a[i](d.srcsetAttr)),
              (g = a[i](d.srcAttr)),
              f && ((j = a.parentNode), (l = j && n.test(j.nodeName || ""))),
              (p = b.firesLoad || ("src" in a && (h || g || l))),
              (o = { target: a }),
              p &&
                (u(a, T, !0),
                clearTimeout(m),
                (m = k(T, 2500)),
                s(a, d.loadingClass),
                u(a, Z, !0)),
              l && q.call(j.getElementsByTagName("source"), _),
              h
                ? a.setAttribute("srcset", h)
                : g && !l && (N.test(a.nodeName) ? $(a, g) : (a.src = g)),
              f && (h || l) && w(a, { src: g })),
              a._lazyRace && delete a._lazyRace,
              t(a, d.lazyClass),
              z(function () {
                (!p || (a.complete && a.naturalWidth > 1)) &&
                  (p ? T(o) : R--, X(o));
              }, !0);
          }),
          ba = function (a) {
            var b,
              c = M.test(a.nodeName),
              e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
              f = "auto" == e;
            ((!f && l) ||
              !c ||
              (!a[i]("src") && !a.srcset) ||
              a.complete ||
              r(a, d.errorClass) ||
              !r(a, d.lazyClass)) &&
              ((b = v(a, "lazyunveilread").detail),
              f && E.updateElem(a, !0, a.offsetWidth),
              (a._lazyRace = !0),
              R++,
              aa(a, b, f, e, c));
          },
          ca = function () {
            if (!l) {
              if (f.now() - p < 999) return void k(ca, 999);
              var a = C(function () {
                (d.loadMode = 3), W();
              });
              (l = !0),
                (d.loadMode = 3),
                W(),
                j(
                  "scroll",
                  function () {
                    3 == d.loadMode && (d.loadMode = 2), a();
                  },
                  !0
                );
            }
          };
        return {
          _: function () {
            (p = f.now()),
              (c.elements = b.getElementsByClassName(d.lazyClass)),
              (g = b.getElementsByClassName(
                d.lazyClass + " " + d.preloadClass
              )),
              (L = d.hFac),
              j("scroll", W, !0),
              j("resize", W, !0),
              a.MutationObserver
                ? new MutationObserver(W).observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  })
                : (e[h]("DOMNodeInserted", W, !0),
                  e[h]("DOMAttrModified", W, !0),
                  setInterval(W, 999)),
              j("hashchange", W, !0),
              [
                "focus",
                "mouseover",
                "click",
                "load",
                "transitionend",
                "animationend",
                "webkitAnimationEnd",
              ].forEach(function (a) {
                b[h](a, W, !0);
              }),
              /d$|^c/.test(b.readyState)
                ? ca()
                : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)),
              c.elements.length ? (V(), z._lsFlush()) : W();
          },
          checkElems: W,
          unveil: ba,
        };
      })(),
      E = (function () {
        var a,
          c = A(function (a, b, c, d) {
            var e, f, g;
            if (
              ((a._lazysizesWidth = d),
              (d += "px"),
              a.setAttribute("sizes", d),
              n.test(b.nodeName || ""))
            )
              for (
                e = b.getElementsByTagName("source"), f = 0, g = e.length;
                f < g;
                f++
              )
                e[f].setAttribute("sizes", d);
            c.detail.dataAttr || w(a, c.detail);
          }),
          e = function (a, b, d) {
            var e,
              f = a.parentNode;
            f &&
              ((d = y(a, f, d)),
              (e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b })),
              e.defaultPrevented ||
                ((d = e.detail.width) &&
                  d !== a._lazysizesWidth &&
                  c(a, f, e, d)));
          },
          f = function () {
            var b,
              c = a.length;
            if (c) for (b = 0; b < c; b++) e(a[b]);
          },
          g = C(f);
        return {
          _: function () {
            (a = b.getElementsByClassName(d.autosizesClass)), j("resize", g);
          },
          checkElems: g,
          updateElem: e,
        };
      })(),
      F = function () {
        F.i || ((F.i = !0), E._(), D._());
      };
    return (c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z,
    });
  }
});
document.addEventListener("lazybeforeunveil", function (e) {
  var bg = e.target.getAttribute("data-bg");
  if (bg) {
    e.target.style.backgroundImage = "url(" + bg + ")";
  }
});
