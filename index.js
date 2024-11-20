import fe from "react";
import ve from "react-dom";
var Cr = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var C = fe, m = Symbol.for("react.element"), Or = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), X = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Pr = Symbol.for("react.offscreen"), q = Symbol.iterator, wr = "@@iterator";
  function jr(r) {
    if (r === null || typeof r != "object")
      return null;
    var e = q && r[q] || r[wr];
    return typeof e == "function" ? e : null;
  }
  var E = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function c(r) {
    {
      for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
      xr("error", r, t);
    }
  }
  function xr(r, e, t) {
    {
      var n = E.ReactDebugCurrentFrame, i = n.getStackAddendum();
      i !== "" && (e += "%s", t = t.concat([i]));
      var u = t.map(function(o) {
        return String(o);
      });
      u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
    }
  }
  var kr = !1, Ar = !1, Dr = !1, Fr = !1, Ir = !1, J;
  J = Symbol.for("react.module.reference");
  function Wr(r) {
    return !!(typeof r == "string" || typeof r == "function" || r === S || r === z || Ir || r === G || r === F || r === I || Fr || r === Pr || kr || Ar || Dr || typeof r == "object" && r !== null && (r.$$typeof === W || r.$$typeof === P || r.$$typeof === H || r.$$typeof === X || r.$$typeof === O || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    r.$$typeof === J || r.getModuleId !== void 0));
  }
  function $r(r, e, t) {
    var n = r.displayName;
    if (n)
      return n;
    var i = e.displayName || e.name || "";
    return i !== "" ? t + "(" + i + ")" : t;
  }
  function Z(r) {
    return r.displayName || "Context";
  }
  function p(r) {
    if (r == null)
      return null;
    if (typeof r.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case S:
        return "Fragment";
      case Or:
        return "Portal";
      case z:
        return "Profiler";
      case G:
        return "StrictMode";
      case F:
        return "Suspense";
      case I:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case X:
          var e = r;
          return Z(e) + ".Consumer";
        case H:
          var t = r;
          return Z(t._context) + ".Provider";
        case O:
          return $r(r, r.render, "ForwardRef");
        case P:
          var n = r.displayName || null;
          return n !== null ? n : p(r.type) || "Memo";
        case W: {
          var i = r, u = i._payload, o = i._init;
          try {
            return p(o(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var g = Object.assign, R = 0, Q, rr, er, tr, nr, ar, or;
  function ir() {
  }
  ir.__reactDisabledLog = !0;
  function Yr() {
    {
      if (R === 0) {
        Q = console.log, rr = console.info, er = console.warn, tr = console.error, nr = console.group, ar = console.groupCollapsed, or = console.groupEnd;
        var r = {
          configurable: !0,
          enumerable: !0,
          value: ir,
          writable: !0
        };
        Object.defineProperties(console, {
          info: r,
          log: r,
          warn: r,
          error: r,
          group: r,
          groupCollapsed: r,
          groupEnd: r
        });
      }
      R++;
    }
  }
  function Lr() {
    {
      if (R--, R === 0) {
        var r = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: g({}, r, {
            value: Q
          }),
          info: g({}, r, {
            value: rr
          }),
          warn: g({}, r, {
            value: er
          }),
          error: g({}, r, {
            value: tr
          }),
          group: g({}, r, {
            value: nr
          }),
          groupCollapsed: g({}, r, {
            value: ar
          }),
          groupEnd: g({}, r, {
            value: or
          })
        });
      }
      R < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var $ = E.ReactCurrentDispatcher, Y;
  function w(r, e, t) {
    {
      if (Y === void 0)
        try {
          throw Error();
        } catch (i) {
          var n = i.stack.trim().match(/\n( *(at )?)/);
          Y = n && n[1] || "";
        }
      return `
` + Y + r;
    }
  }
  var L = !1, j;
  {
    var Mr = typeof WeakMap == "function" ? WeakMap : Map;
    j = new Mr();
  }
  function ur(r, e) {
    if (!r || L)
      return "";
    {
      var t = j.get(r);
      if (t !== void 0)
        return t;
    }
    var n;
    L = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = $.current, $.current = null, Yr();
    try {
      if (e) {
        var o = function() {
          throw Error();
        };
        if (Object.defineProperty(o.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(o, []);
          } catch (v) {
            n = v;
          }
          Reflect.construct(r, [], o);
        } else {
          try {
            o.call();
          } catch (v) {
            n = v;
          }
          r.call(o.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (v) {
          n = v;
        }
        r();
      }
    } catch (v) {
      if (v && n && typeof v.stack == "string") {
        for (var a = v.stack.split(`
`), f = n.stack.split(`
`), s = a.length - 1, l = f.length - 1; s >= 1 && l >= 0 && a[s] !== f[l]; )
          l--;
        for (; s >= 1 && l >= 0; s--, l--)
          if (a[s] !== f[l]) {
            if (s !== 1 || l !== 1)
              do
                if (s--, l--, l < 0 || a[s] !== f[l]) {
                  var d = `
` + a[s].replace(" at new ", " at ");
                  return r.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", r.displayName)), typeof r == "function" && j.set(r, d), d;
                }
              while (s >= 1 && l >= 0);
            break;
          }
      }
    } finally {
      L = !1, $.current = u, Lr(), Error.prepareStackTrace = i;
    }
    var y = r ? r.displayName || r.name : "", h = y ? w(y) : "";
    return typeof r == "function" && j.set(r, h), h;
  }
  function Ur(r, e, t) {
    return ur(r, !1);
  }
  function Vr(r) {
    var e = r.prototype;
    return !!(e && e.isReactComponent);
  }
  function x(r, e, t) {
    if (r == null)
      return "";
    if (typeof r == "function")
      return ur(r, Vr(r));
    if (typeof r == "string")
      return w(r);
    switch (r) {
      case F:
        return w("Suspense");
      case I:
        return w("SuspenseList");
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case O:
          return Ur(r.render);
        case P:
          return x(r.type, e, t);
        case W: {
          var n = r, i = n._payload, u = n._init;
          try {
            return x(u(i), e, t);
          } catch {
          }
        }
      }
    return "";
  }
  var _ = Object.prototype.hasOwnProperty, sr = {}, lr = E.ReactDebugCurrentFrame;
  function k(r) {
    if (r) {
      var e = r._owner, t = x(r.type, r._source, e ? e.type : null);
      lr.setExtraStackFrame(t);
    } else
      lr.setExtraStackFrame(null);
  }
  function Nr(r, e, t, n, i) {
    {
      var u = Function.call.bind(_);
      for (var o in r)
        if (u(r, o)) {
          var a = void 0;
          try {
            if (typeof r[o] != "function") {
              var f = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw f.name = "Invariant Violation", f;
            }
            a = r[o](e, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (s) {
            a = s;
          }
          a && !(a instanceof Error) && (k(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), k(null)), a instanceof Error && !(a.message in sr) && (sr[a.message] = !0, k(i), c("Failed %s type: %s", t, a.message), k(null));
        }
    }
  }
  var Br = Array.isArray;
  function M(r) {
    return Br(r);
  }
  function Kr(r) {
    {
      var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
      return t;
    }
  }
  function Gr(r) {
    try {
      return cr(r), !1;
    } catch {
      return !0;
    }
  }
  function cr(r) {
    return "" + r;
  }
  function fr(r) {
    if (Gr(r))
      return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kr(r)), cr(r);
  }
  var T = E.ReactCurrentOwner, zr = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, vr, dr, U;
  U = {};
  function Hr(r) {
    if (_.call(r, "ref")) {
      var e = Object.getOwnPropertyDescriptor(r, "ref").get;
      if (e && e.isReactWarning)
        return !1;
    }
    return r.ref !== void 0;
  }
  function Xr(r) {
    if (_.call(r, "key")) {
      var e = Object.getOwnPropertyDescriptor(r, "key").get;
      if (e && e.isReactWarning)
        return !1;
    }
    return r.key !== void 0;
  }
  function qr(r, e) {
    if (typeof r.ref == "string" && T.current && e && T.current.stateNode !== e) {
      var t = p(T.current.type);
      U[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(T.current.type), r.ref), U[t] = !0);
    }
  }
  function Jr(r, e) {
    {
      var t = function() {
        vr || (vr = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
      };
      t.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: t,
        configurable: !0
      });
    }
  }
  function Zr(r, e) {
    {
      var t = function() {
        dr || (dr = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
      };
      t.isReactWarning = !0, Object.defineProperty(r, "ref", {
        get: t,
        configurable: !0
      });
    }
  }
  var Qr = function(r, e, t, n, i, u, o) {
    var a = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: m,
      // Built-in properties that belong on the element
      type: r,
      key: e,
      ref: t,
      props: o,
      // Record the component responsible for creating this element.
      _owner: u
    };
    return a._store = {}, Object.defineProperty(a._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(a, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: n
    }), Object.defineProperty(a, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: i
    }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
  };
  function re(r, e, t, n, i) {
    {
      var u, o = {}, a = null, f = null;
      t !== void 0 && (fr(t), a = "" + t), Xr(e) && (fr(e.key), a = "" + e.key), Hr(e) && (f = e.ref, qr(e, i));
      for (u in e)
        _.call(e, u) && !zr.hasOwnProperty(u) && (o[u] = e[u]);
      if (r && r.defaultProps) {
        var s = r.defaultProps;
        for (u in s)
          o[u] === void 0 && (o[u] = s[u]);
      }
      if (a || f) {
        var l = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
        a && Jr(o, l), f && Zr(o, l);
      }
      return Qr(r, a, f, i, n, T.current, o);
    }
  }
  var V = E.ReactCurrentOwner, pr = E.ReactDebugCurrentFrame;
  function b(r) {
    if (r) {
      var e = r._owner, t = x(r.type, r._source, e ? e.type : null);
      pr.setExtraStackFrame(t);
    } else
      pr.setExtraStackFrame(null);
  }
  var N;
  N = !1;
  function B(r) {
    return typeof r == "object" && r !== null && r.$$typeof === m;
  }
  function gr() {
    {
      if (V.current) {
        var r = p(V.current.type);
        if (r)
          return `

Check the render method of \`` + r + "`.";
      }
      return "";
    }
  }
  function ee(r) {
    return "";
  }
  var hr = {};
  function te(r) {
    {
      var e = gr();
      if (!e) {
        var t = typeof r == "string" ? r : r.displayName || r.name;
        t && (e = `

Check the top-level render call using <` + t + ">.");
      }
      return e;
    }
  }
  function Er(r, e) {
    {
      if (!r._store || r._store.validated || r.key != null)
        return;
      r._store.validated = !0;
      var t = te(e);
      if (hr[t])
        return;
      hr[t] = !0;
      var n = "";
      r && r._owner && r._owner !== V.current && (n = " It was passed a child from " + p(r._owner.type) + "."), b(r), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), b(null);
    }
  }
  function br(r, e) {
    {
      if (typeof r != "object")
        return;
      if (M(r))
        for (var t = 0; t < r.length; t++) {
          var n = r[t];
          B(n) && Er(n, e);
        }
      else if (B(r))
        r._store && (r._store.validated = !0);
      else if (r) {
        var i = jr(r);
        if (typeof i == "function" && i !== r.entries)
          for (var u = i.call(r), o; !(o = u.next()).done; )
            B(o.value) && Er(o.value, e);
      }
    }
  }
  function ne(r) {
    {
      var e = r.type;
      if (e == null || typeof e == "string")
        return;
      var t;
      if (typeof e == "function")
        t = e.propTypes;
      else if (typeof e == "object" && (e.$$typeof === O || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      e.$$typeof === P))
        t = e.propTypes;
      else
        return;
      if (t) {
        var n = p(e);
        Nr(t, r.props, "prop", n, r);
      } else if (e.PropTypes !== void 0 && !N) {
        N = !0;
        var i = p(e);
        c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
      }
      typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function ae(r) {
    {
      for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
        var n = e[t];
        if (n !== "children" && n !== "key") {
          b(r), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), b(null);
          break;
        }
      }
      r.ref !== null && (b(r), c("Invalid attribute `ref` supplied to `React.Fragment`."), b(null));
    }
  }
  var yr = {};
  function mr(r, e, t, n, i, u) {
    {
      var o = Wr(r);
      if (!o) {
        var a = "";
        (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var f = ee();
        f ? a += f : a += gr();
        var s;
        r === null ? s = "null" : M(r) ? s = "array" : r !== void 0 && r.$$typeof === m ? (s = "<" + (p(r.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof r, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
      }
      var l = re(r, e, t, i, u);
      if (l == null)
        return l;
      if (o) {
        var d = e.children;
        if (d !== void 0)
          if (n)
            if (M(d)) {
              for (var y = 0; y < d.length; y++)
                br(d[y], r);
              Object.freeze && Object.freeze(d);
            } else
              c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            br(d, r);
      }
      if (_.call(e, "key")) {
        var h = p(r), v = Object.keys(e).filter(function(ce) {
          return ce !== "key";
        }), K = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!yr[h + K]) {
          var le = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
          c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, K, h, le, h), yr[h + K] = !0;
        }
      }
      return r === S ? ae(l) : ne(l), l;
    }
  }
  function oe(r, e, t) {
    return mr(r, e, t, !0);
  }
  function ie(r, e, t) {
    return mr(r, e, t, !1);
  }
  var ue = ie, se = oe;
  A.Fragment = S, A.jsx = ue, A.jsxs = se;
})();
Cr.exports = A;
var D = Cr.exports, Sr, Rr = ve;
{
  var _r = Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Sr = function(C, m) {
    _r.usingClientEntryPoint = !0;
    try {
      return Rr.createRoot(C, m);
    } finally {
      _r.usingClientEntryPoint = !1;
    }
  };
}
const de = () => /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx("h1", { children: "A COMPONENT" }) }), pe = ["module-id"], Tr = "liferay-simple-web-component";
class ge extends HTMLElement {
  static get observedAttributes() {
    return pe;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = Sr(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ D.jsx(de, {})
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.get(Tr) || customElements.define(Tr, ge);
