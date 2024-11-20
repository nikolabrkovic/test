import fr from "react";
import dr from "react-dom";
var G = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function vr() {
  if (Ce) return k;
  Ce = 1;
  var b = Symbol.for("react.fragment");
  return k.Fragment = b, k.jsxDEV = void 0, k;
}
var A = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var b = fr, y = Symbol.for("react.element"), we = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), Q = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ee = Symbol.iterator, je = "@@iterator";
    function xe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[je];
      return typeof r == "function" ? r : null;
    }
    var g = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = g.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, Ne = !1, $e = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === X || $e || e === H || e === N || e === $ || Ne || e === De || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === W || e.$$typeof === P || e.$$typeof === Z || e.$$typeof === Q || e.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case we:
          return "Portal";
        case X:
          return "Profiler";
        case H:
          return "StrictMode";
        case N:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            var r = e;
            return te(r) + ".Consumer";
          case Z:
            var t = e;
            return te(t._context) + ".Provider";
          case S:
            return Ve(e, e.render, "ForwardRef");
          case P:
            var n = e.displayName || null;
            return n !== null ? n : p(e.type) || "Memo";
          case W: {
            var i = e, u = i._payload, o = i._init;
            try {
              return p(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var m = Object.assign, _ = 0, ne, ae, oe, ie, ue, se, le;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (_ === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        _++;
      }
    }
    function Le() {
      {
        if (_--, _ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: m({}, e, {
              value: ne
            }),
            info: m({}, e, {
              value: ae
            }),
            warn: m({}, e, {
              value: oe
            }),
            error: m({}, e, {
              value: ie
            }),
            group: m({}, e, {
              value: ue
            }),
            groupCollapsed: m({}, e, {
              value: se
            }),
            groupEnd: m({}, e, {
              value: le
            })
          });
        }
        _ < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = g.ReactCurrentDispatcher, Y;
    function w(e, r, t) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Y = n && n[1] || "";
          }
        return `
` + Y + e;
      }
    }
    var L = !1, D;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      D = new Ue();
    }
    function fe(e, r) {
      if (!e || L)
        return "";
      {
        var t = D.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      L = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = V.current, V.current = null, Ye();
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
`), f = n.stack.split(`
`), s = a.length - 1, l = f.length - 1; s >= 1 && l >= 0 && a[s] !== f[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== f[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== f[l]) {
                    var v = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && D.set(e, v), v;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        L = !1, V.current = u, Le(), Error.prepareStackTrace = i;
      }
      var R = e ? e.displayName || e.name : "", E = R ? w(R) : "";
      return typeof e == "function" && D.set(e, E), E;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function j(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Be(e));
      if (typeof e == "string")
        return w(e);
      switch (e) {
        case N:
          return w("Suspense");
        case $:
          return w("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return Me(e.render);
          case P:
            return j(e.type, r, t);
          case W: {
            var n = e, i = n._payload, u = n._init;
            try {
              return j(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, de = {}, ve = g.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = j(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var u = Function.call.bind(T);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var f = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw f.name = "Invariant Violation", f;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (x(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), x(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, x(i), c("Failed %s type: %s", t, a.message), x(null));
          }
      }
    }
    var qe = Array.isArray;
    function U(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var C = g.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, be, M;
    M = {};
    function He(e) {
      if (T.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (T.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && C.current && r && C.current.stateNode !== r) {
        var t = p(C.current.type);
        M[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(C.current.type), e.ref), M[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          be || (be = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
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
    function tr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, f = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), He(r) && (f = r.ref, Ze(r, i));
        for (u in r)
          T.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || f) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(o, l), f && er(o, l);
        }
        return rr(e, a, f, i, n, C.current, o);
      }
    }
    var B = g.ReactCurrentOwner, ge = g.ReactDebugCurrentFrame;
    function h(e) {
      if (e) {
        var r = e._owner, t = j(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function he() {
      {
        if (B.current) {
          var e = p(B.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function ar(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== B.current && (n = " It was passed a child from " + p(e._owner.type) + "."), h(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), h(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (U(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            q(n) && ye(n, r);
          }
        else if (q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = xe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              q(o.value) && ye(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === P))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = p(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !J) {
          J = !0;
          var i = p(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            h(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), h(null);
            break;
          }
        }
        e.ref !== null && (h(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), h(null));
      }
    }
    var Te = {};
    function ur(e, r, t, n, i, u) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var f = nr(i);
          f ? a += f : a += he();
          var s;
          e === null ? s = "null" : U(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (p(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = tr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var v = r.children;
          if (v !== void 0)
            if (n)
              if (U(v)) {
                for (var R = 0; R < v.length; R++)
                  _e(v[R], e);
                Object.freeze && Object.freeze(v);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(v, e);
        }
        if (T.call(r, "key")) {
          var E = p(e), d = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), K = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[E + K]) {
            var lr = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, K, E, lr, E), Te[E + K] = !0;
          }
        }
        return e === O ? ir(l) : or(l), l;
      }
    }
    var sr = ur;
    A.Fragment = O, A.jsxDEV = sr;
  }()), A;
}
process.env.NODE_ENV === "production" ? G.exports = vr() : G.exports = pr();
var I = G.exports, z, F = dr;
if (process.env.NODE_ENV === "production")
  z = F.createRoot, F.hydrateRoot;
else {
  var Se = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  z = function(b, y) {
    Se.usingClientEntryPoint = !0;
    try {
      return F.createRoot(b, y);
    } finally {
      Se.usingClientEntryPoint = !1;
    }
  };
}
const mr = () => /* @__PURE__ */ I.jsxDEV(I.Fragment, { children: /* @__PURE__ */ I.jsxDEV("h1", { children: "A COMPONENT" }, void 0, !1, {
  fileName: "C:/Users/nbrkovic/Desktop/test-react/src/components/A.jsx",
  lineNumber: 6,
  columnNumber: 9
}, void 0) }, void 0, !1, {
  fileName: "C:/Users/nbrkovic/Desktop/test-react/src/components/A.jsx",
  lineNumber: 5,
  columnNumber: 5
}, void 0), Er = ["module-id"], Pe = "liferay-simple-web-component";
class br extends HTMLElement {
  static get observedAttributes() {
    return Er;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = z(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ I.jsxDEV(mr, {}, void 0, !1, {
        fileName: "C:/Users/nbrkovic/Desktop/test-react/src/index.jsx",
        lineNumber: 117,
        columnNumber: 5
      }, this)
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.get(Pe) || customElements.define(Pe, br);
