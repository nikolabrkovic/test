import ke from "react";
import hr from "react-dom";
var ee = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Er() {
  if (Pe) return D;
  Pe = 1;
  var T = ke, g = Symbol.for("react.element"), B = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, I = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(m, f, O) {
    var p, _ = {}, y = null, $ = null;
    O !== void 0 && (y = "" + O), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (p in f) C.call(f, p) && !W.hasOwnProperty(p) && (_[p] = f[p]);
    if (m && m.defaultProps) for (p in f = m.defaultProps, f) _[p] === void 0 && (_[p] = f[p]);
    return { $$typeof: g, type: m, key: y, ref: $, props: _, _owner: I.current };
  }
  return D.Fragment = B, D.jsx = j, D.jsxs = j, D;
}
var F = {}, we;
function _r() {
  if (we) return F;
  we = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return production !== "production" && function() {
    var T = ke, g = Symbol.for("react.element"), B = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), te = Symbol.iterator, Ae = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var S = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, We = !1, $e = !1, Le = !1, Ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === W || Ye || e === I || e === O || e === p || Le || e === $ || Ie || We || $e || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === _ || e.$$typeof === j || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case B:
          return "Portal";
        case W:
          return "Profiler";
        case I:
          return "StrictMode";
        case O:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ae(r) + ".Consumer";
          case j:
            var t = e;
            return ae(t._context) + ".Provider";
          case f:
            return Ue(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case y: {
            var i = e, u = i._payload, o = i._init;
            try {
              return E(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, x = 0, oe, ie, ue, se, le, ce, fe;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ve() {
      {
        if (x === 0) {
          oe = console.log, ie = console.info, ue = console.warn, se = console.error, le = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        x++;
      }
    }
    function Ne() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: oe
            }),
            info: b({}, e, {
              value: ie
            }),
            warn: b({}, e, {
              value: ue
            }),
            error: b({}, e, {
              value: se
            }),
            group: b({}, e, {
              value: le
            }),
            groupCollapsed: b({}, e, {
              value: ce
            }),
            groupEnd: b({}, e, {
              value: fe
            })
          });
        }
        x < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ve();
      try {
        if (r) {
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
            } catch (d) {
              n = d;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (d) {
              n = d;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (d) {
            n = d;
          }
          e();
        }
      } catch (d) {
        if (d && n && typeof d.stack == "string") {
          for (var a = d.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var w = e ? e.displayName || e.name : "", R = w ? L(w) : "";
      return typeof e == "function" && Y.set(e, R), R;
    }
    function qe(e, r, t) {
      return de(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Je(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case O:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return qe(e.render);
          case _:
            return M(e.type, r, t);
          case y: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, pe = {}, he = S.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, i) {
      {
        var u = Function.call.bind(k);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, U(i), c("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ge = Array.isArray;
    function G(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (He(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Ee(e);
    }
    var A = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, me, z;
    z = {};
    function Ze(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = E(A.current.type);
        z[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(A.current.type), e.ref), z[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          me || (me = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
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
    function ar(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (_e(t), a = "" + t), Qe(r) && (_e(r.key), a = "" + r.key), Ze(r) && (v = r.ref, er(r, i));
        for (u in r)
          k.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && rr(o, l), v && tr(o, l);
        }
        return nr(e, a, v, i, n, A.current, o);
      }
    }
    var H = S.ReactCurrentOwner, ye = S.ReactDebugCurrentFrame;
    function P(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function be() {
      {
        if (H.current) {
          var e = E(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Re = {};
    function ir(e) {
      {
        var r = be();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + E(e._owner.type) + "."), P(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Te(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Te(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            P(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
            break;
          }
        }
        e.ref !== null && (P(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, i, u) {
      {
        var o = Me(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = or();
          v ? a += v : a += be();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === g ? (s = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = ar(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (G(h)) {
                for (var w = 0; w < h.length; w++)
                  Ce(h[w], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(h, e);
        }
        if (k.call(r, "key")) {
          var R = E(e), d = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Q = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[R + Q]) {
            var dr = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, R, dr, R), Oe[R + Q] = !0;
          }
        }
        return e === C ? sr(l) : ur(l), l;
      }
    }
    function lr(e, r, t) {
      return Se(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var fr = cr, vr = lr;
    F.Fragment = C, F.jsx = fr, F.jsxs = vr;
  }(), F;
}
production === "production" ? ee.exports = Er() : ee.exports = _r();
var N = ee.exports, re, V = hr;
if (production === "production")
  re = V.createRoot, V.hydrateRoot;
else {
  var je = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  re = function(T, g) {
    je.usingClientEntryPoint = !0;
    try {
      return V.createRoot(T, g);
    } finally {
      je.usingClientEntryPoint = !1;
    }
  };
}
const gr = () => /* @__PURE__ */ N.jsx(N.Fragment, { children: /* @__PURE__ */ N.jsx("h1", { children: "A COMPONENT" }) }), mr = ["module-id"], xe = "liferay-simple-web-component";
class yr extends HTMLElement {
  static get observedAttributes() {
    return mr;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = re(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ N.jsx(gr, {})
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.get(xe) || customElements.define(xe, yr);
