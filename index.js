var c0 = { exports: {} }, zm = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function K_() {
  if (X1) return zm;
  X1 = 1;
  var ie = Symbol.for("react.fragment");
  return zm.Fragment = ie, zm.jsxDEV = void 0, zm;
}
var Um = {}, f0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function Z_() {
  if (K1) return Et;
  K1 = 1;
  var ie = Symbol.for("react.element"), Z = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), En = Symbol.for("react.profiler"), ft = Symbol.for("react.provider"), S = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), ue = Symbol.iterator;
  function Se(_) {
    return _ === null || typeof _ != "object" ? null : (_ = ue && _[ue] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ce = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, Tt = {};
  function dt(_, V, ze) {
    this.props = _, this.context = V, this.refs = Tt, this.updater = ze || ce;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(_, V) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, V, "setState");
  }, dt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function dn() {
  }
  dn.prototype = dt.prototype;
  function rt(_, V, ze) {
    this.props = _, this.context = V, this.refs = Tt, this.updater = ze || ce;
  }
  var Ge = rt.prototype = new dn();
  Ge.constructor = rt, Be(Ge, dt.prototype), Ge.isPureReactComponent = !0;
  var pt = Array.isArray, _e = Object.prototype.hasOwnProperty, lt = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Jt(_, V, ze) {
    var Ve, tt = {}, et = null, yt = null;
    if (V != null) for (Ve in V.ref !== void 0 && (yt = V.ref), V.key !== void 0 && (et = "" + V.key), V) _e.call(V, Ve) && !He.hasOwnProperty(Ve) && (tt[Ve] = V[Ve]);
    var at = arguments.length - 2;
    if (at === 1) tt.children = ze;
    else if (1 < at) {
      for (var it = Array(at), qt = 0; qt < at; qt++) it[qt] = arguments[qt + 2];
      tt.children = it;
    }
    if (_ && _.defaultProps) for (Ve in at = _.defaultProps, at) tt[Ve] === void 0 && (tt[Ve] = at[Ve]);
    return { $$typeof: ie, type: _, key: et, ref: yt, props: tt, _owner: lt.current };
  }
  function _n(_, V) {
    return { $$typeof: ie, type: _.type, key: V, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function $t(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === ie;
  }
  function bt(_) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ze) {
      return V[ze];
    });
  }
  var Cn = /\/+/g;
  function Ne(_, V) {
    return typeof _ == "object" && _ !== null && _.key != null ? bt("" + _.key) : V.toString(36);
  }
  function Ze(_, V, ze, Ve, tt) {
    var et = typeof _;
    (et === "undefined" || et === "boolean") && (_ = null);
    var yt = !1;
    if (_ === null) yt = !0;
    else switch (et) {
      case "string":
      case "number":
        yt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case ie:
          case Z:
            yt = !0;
        }
    }
    if (yt) return yt = _, tt = tt(yt), _ = Ve === "" ? "." + Ne(yt, 0) : Ve, pt(tt) ? (ze = "", _ != null && (ze = _.replace(Cn, "$&/") + "/"), Ze(tt, V, ze, "", function(qt) {
      return qt;
    })) : tt != null && ($t(tt) && (tt = _n(tt, ze + (!tt.key || yt && yt.key === tt.key ? "" : ("" + tt.key).replace(Cn, "$&/") + "/") + _)), V.push(tt)), 1;
    if (yt = 0, Ve = Ve === "" ? "." : Ve + ":", pt(_)) for (var at = 0; at < _.length; at++) {
      et = _[at];
      var it = Ve + Ne(et, at);
      yt += Ze(et, V, ze, it, tt);
    }
    else if (it = Se(_), typeof it == "function") for (_ = it.call(_), at = 0; !(et = _.next()).done; ) et = et.value, it = Ve + Ne(et, at++), yt += Ze(et, V, ze, it, tt);
    else if (et === "object") throw V = String(_), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return yt;
  }
  function Nt(_, V, ze) {
    if (_ == null) return _;
    var Ve = [], tt = 0;
    return Ze(_, Ve, "", "", function(et) {
      return V.call(ze, et, tt++);
    }), Ve;
  }
  function wt(_) {
    if (_._status === -1) {
      var V = _._result;
      V = V(), V.then(function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ze);
      }, function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ze);
      }), _._status === -1 && (_._status = 0, _._result = V);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ve = { current: null }, X = { transition: null }, we = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: X, ReactCurrentOwner: lt };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: Nt, forEach: function(_, V, ze) {
    Nt(_, function() {
      V.apply(this, arguments);
    }, ze);
  }, count: function(_) {
    var V = 0;
    return Nt(_, function() {
      V++;
    }), V;
  }, toArray: function(_) {
    return Nt(_, function(V) {
      return V;
    }) || [];
  }, only: function(_) {
    if (!$t(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = dt, Et.Fragment = F, Et.Profiler = En, Et.PureComponent = rt, Et.StrictMode = ln, Et.Suspense = ke, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Et.act = ne, Et.cloneElement = function(_, V, ze) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ve = Be({}, _.props), tt = _.key, et = _.ref, yt = _._owner;
    if (V != null) {
      if (V.ref !== void 0 && (et = V.ref, yt = lt.current), V.key !== void 0 && (tt = "" + V.key), _.type && _.type.defaultProps) var at = _.type.defaultProps;
      for (it in V) _e.call(V, it) && !He.hasOwnProperty(it) && (Ve[it] = V[it] === void 0 && at !== void 0 ? at[it] : V[it]);
    }
    var it = arguments.length - 2;
    if (it === 1) Ve.children = ze;
    else if (1 < it) {
      at = Array(it);
      for (var qt = 0; qt < it; qt++) at[qt] = arguments[qt + 2];
      Ve.children = at;
    }
    return { $$typeof: ie, type: _.type, key: tt, ref: et, props: Ve, _owner: yt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: ft, _context: _ }, _.Consumer = _;
  }, Et.createElement = Jt, Et.createFactory = function(_) {
    var V = Jt.bind(null, _);
    return V.type = _, V;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: fn, render: _ };
  }, Et.isValidElement = $t, Et.lazy = function(_) {
    return { $$typeof: Vt, _payload: { _status: -1, _result: _ }, _init: wt };
  }, Et.memo = function(_, V) {
    return { $$typeof: pe, type: _, compare: V === void 0 ? null : V };
  }, Et.startTransition = function(_) {
    var V = X.transition;
    X.transition = {};
    try {
      _();
    } finally {
      X.transition = V;
    }
  }, Et.unstable_act = ne, Et.useCallback = function(_, V) {
    return ve.current.useCallback(_, V);
  }, Et.useContext = function(_) {
    return ve.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return ve.current.useDeferredValue(_);
  }, Et.useEffect = function(_, V) {
    return ve.current.useEffect(_, V);
  }, Et.useId = function() {
    return ve.current.useId();
  }, Et.useImperativeHandle = function(_, V, ze) {
    return ve.current.useImperativeHandle(_, V, ze);
  }, Et.useInsertionEffect = function(_, V) {
    return ve.current.useInsertionEffect(_, V);
  }, Et.useLayoutEffect = function(_, V) {
    return ve.current.useLayoutEffect(_, V);
  }, Et.useMemo = function(_, V) {
    return ve.current.useMemo(_, V);
  }, Et.useReducer = function(_, V, ze) {
    return ve.current.useReducer(_, V, ze);
  }, Et.useRef = function(_) {
    return ve.current.useRef(_);
  }, Et.useState = function(_) {
    return ve.current.useState(_);
  }, Et.useSyncExternalStore = function(_, V, ze) {
    return ve.current.useSyncExternalStore(_, V, ze);
  }, Et.useTransition = function() {
    return ve.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var Yp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Yp.exports;
var Z1;
function J_() {
  return Z1 || (Z1 = 1, function(ie, Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var F = "18.3.1", ln = Symbol.for("react.element"), En = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), fn = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Tt = Symbol.for("react.offscreen"), dt = Symbol.iterator, dn = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = dt && h[dt] || h[dn];
        return typeof C == "function" ? C : null;
      }
      var Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, lt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Jt = null;
      function _n(h) {
        Jt = h;
      }
      He.setExtraStackFrame = function(h) {
        Jt = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Jt && (h += Jt);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var $t = !1, bt = !1, Cn = !1, Ne = !1, Ze = !1, Nt = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: pt,
        ReactCurrentOwner: lt
      };
      Nt.ReactDebugCurrentFrame = He, Nt.ReactCurrentActQueue = _e;
      function wt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            N[A - 1] = arguments[A];
          X("warn", h, N);
        }
      }
      function ve(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            N[A - 1] = arguments[A];
          X("error", h, N);
        }
      }
      function X(h, C, N) {
        {
          var A = Nt.ReactDebugCurrentFrame, G = A.getStackAddendum();
          G !== "" && (C += "%s", N = N.concat([G]));
          var Ue = N.map(function(re) {
            return String(re);
          });
          Ue.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ue);
        }
      }
      var we = {};
      function ne(h, C) {
        {
          var N = h.constructor, A = N && (N.displayName || N.name) || "ReactClass", G = A + "." + C;
          if (we[G])
            return;
          ve("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, A), we[G] = !0;
        }
      }
      var _ = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          ne(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, A) {
          ne(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, A) {
          ne(h, "setState");
        }
      }, V = Object.assign, ze = {};
      Object.freeze(ze);
      function Ve(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var tt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, et = function(h, C) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              wt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var yt in tt)
          tt.hasOwnProperty(yt) && et(yt, tt[yt]);
      }
      function at() {
      }
      at.prototype = Ve.prototype;
      function it(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      var qt = it.prototype = new at();
      qt.constructor = it, V(qt, Ve.prototype), qt.isPureReactComponent = !0;
      function hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function pn(h) {
        return Vr(h);
      }
      function Qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Hn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function Dn(h) {
        if (Hn(h))
          return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), zn(h);
      }
      function Pr(h, C, N) {
        var A = h.displayName;
        if (A)
          return A;
        var G = C.displayName || C.name || "";
        return G !== "" ? N + "(" + G + ")" : N;
      }
      function Br(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ft:
            return "Fragment";
          case En:
            return "Portal";
          case fn:
            return "Profiler";
          case S:
            return "StrictMode";
          case ue:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return Br(C) + ".Consumer";
            case ke:
              var N = h;
              return Br(N._context) + ".Provider";
            case Vt:
              return Pr(h, h.render, "ForwardRef");
            case ce:
              var A = h.displayName || null;
              return A !== null ? A : Wn(h.type) || "Memo";
            case Be: {
              var G = h, Ue = G._payload, re = G._init;
              try {
                return Wn(re(Ue));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mr = Object.prototype.hasOwnProperty, $r = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, ca, nr;
      nr = {};
      function Yr(h) {
        if (mr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function vn(h) {
        if (mr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var N = function() {
          yr || (yr = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function si(h, C) {
        var N = function() {
          ca || (ca = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function fa(h) {
        if (typeof h.ref == "string" && lt.current && h.__self && lt.current.stateNode !== h.__self) {
          var C = Wn(lt.current.type);
          nr[C] || (ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), nr[C] = !0);
        }
      }
      var K = function(h, C, N, A, G, Ue, re) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ln,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: re,
          // Record the component responsible for creating this element.
          _owner: Ue
        };
        return Me._store = {}, Object.defineProperty(Me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: G
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function xe(h, C, N) {
        var A, G = {}, Ue = null, re = null, Me = null, st = null;
        if (C != null) {
          Yr(C) && (re = C.ref, fa(C)), vn(C) && (Dn(C.key), Ue = "" + C.key), Me = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (A in C)
            mr.call(C, A) && !$r.hasOwnProperty(A) && (G[A] = C[A]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          G.children = N;
        else if (xt > 1) {
          for (var Qt = Array(xt), Bt = 0; Bt < xt; Bt++)
            Qt[Bt] = arguments[Bt + 2];
          Object.freeze && Object.freeze(Qt), G.children = Qt;
        }
        if (h && h.defaultProps) {
          var Wt = h.defaultProps;
          for (A in Wt)
            G[A] === void 0 && (G[A] = Wt[A]);
        }
        if (Ue || re) {
          var Kt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ue && wr(G, Kt), re && si(G, Kt);
        }
        return K(h, Ue, re, Me, st, lt.current, G);
      }
      function nt(h, C) {
        var N = K(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Lt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var A, G = V({}, h.props), Ue = h.key, re = h.ref, Me = h._self, st = h._source, xt = h._owner;
        if (C != null) {
          Yr(C) && (re = C.ref, xt = lt.current), vn(C) && (Dn(C.key), Ue = "" + C.key);
          var Qt;
          h.type && h.type.defaultProps && (Qt = h.type.defaultProps);
          for (A in C)
            mr.call(C, A) && !$r.hasOwnProperty(A) && (C[A] === void 0 && Qt !== void 0 ? G[A] = Qt[A] : G[A] = C[A]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          G.children = N;
        else if (Bt > 1) {
          for (var Wt = Array(Bt), Kt = 0; Kt < Bt; Kt++)
            Wt[Kt] = arguments[Kt + 2];
          G.children = Wt;
        }
        return K(h.type, Ue, re, Me, st, xt, G);
      }
      function zt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ln;
      }
      var kn = ".", hn = ":";
      function gr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, A = h.replace(C, function(G) {
          return N[G];
        });
        return "$" + A;
      }
      var Pt = !1, xr = /\/+/g;
      function Ut(h) {
        return h.replace(xr, "$&/");
      }
      function At(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), gr("" + h.key)) : C.toString(36);
      }
      function Ka(h, C, N, A, G) {
        var Ue = typeof h;
        (Ue === "undefined" || Ue === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (Ue) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ln:
                case En:
                  re = !0;
              }
          }
        if (re) {
          var Me = h, st = G(Me), xt = A === "" ? kn + At(Me, 0) : A;
          if (pn(st)) {
            var Qt = "";
            xt != null && (Qt = Ut(xt) + "/"), Ka(st, C, Qt, "", function($f) {
              return $f;
            });
          } else st != null && (zt(st) && (st.key && (!Me || Me.key !== st.key) && Dn(st.key), st = nt(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Me || Me.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ut("" + st.key) + "/"
            ) : "") + xt
          )), C.push(st));
          return 1;
        }
        var Bt, Wt, Kt = 0, St = A === "" ? kn : A + hn;
        if (pn(h))
          for (var Ni = 0; Ni < h.length; Ni++)
            Bt = h[Ni], Wt = St + At(Bt, Ni), Kt += Ka(Bt, C, N, Wt, G);
        else {
          var Pu = rt(h);
          if (typeof Pu == "function") {
            var Go = h;
            Pu === Go.entries && (Pt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pt = !0);
            for (var Bf = Pu.call(Go), ti, qo = 0; !(ti = Bf.next()).done; )
              Bt = ti.value, Wt = St + At(Bt, qo++), Kt += Ka(Bt, C, N, Wt, G);
          } else if (Ue === "object") {
            var Xo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Xo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Xo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Kt;
      }
      function xa(h, C, N) {
        if (h == null)
          return h;
        var A = [], G = 0;
        return Ka(h, A, "", "", function(Ue) {
          return C.call(N, Ue, G++);
        }), A;
      }
      function il(h) {
        var C = 0;
        return xa(h, function() {
          C++;
        }), C;
      }
      function $l(h, C, N) {
        xa(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Ou(h) {
        return xa(h, function(C) {
          return C;
        }) || [];
      }
      function ki(h) {
        if (!zt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ll(h) {
        var C = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ke,
          _context: C
        };
        var N = !1, A = !1, G = !1;
        {
          var Ue = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(Ue, {
            Provider: {
              get: function() {
                return A || (A = !0, ve("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(re) {
                C.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(re) {
                C._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(re) {
                C._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(re) {
                C._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, ve("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(re) {
                G || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), G = !0);
              }
            }
          }), C.Consumer = Ue;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var da = -1, ci = 0, pa = 1, fi = 2;
      function br(h) {
        if (h._status === da) {
          var C = h._result, N = C();
          if (N.then(function(Ue) {
            if (h._status === ci || h._status === da) {
              var re = h;
              re._status = pa, re._result = Ue;
            }
          }, function(Ue) {
            if (h._status === ci || h._status === da) {
              var re = h;
              re._status = fi, re._result = Ue;
            }
          }), h._status === da) {
            var A = h;
            A._status = ci, A._result = N;
          }
        }
        if (h._status === pa) {
          var G = h._result;
          return G === void 0 && ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, G), "default" in G || ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, G), G.default;
        } else
          throw h._result;
      }
      function R(h) {
        var C = {
          // We use these fields to store the result.
          _status: da,
          _result: h
        }, N = {
          $$typeof: Be,
          _payload: C,
          _init: br
        };
        {
          var A, G;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(Ue) {
                ve("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = Ue, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return G;
              },
              set: function(Ue) {
                ve("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), G = Ue, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function Y(h) {
        h != null && h.$$typeof === ce ? ve("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ve("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ve("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ve("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Vt,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(A) {
              N = A, !h.name && !h.displayName && (h.displayName = A);
            }
          });
        }
        return C;
      }
      var J;
      J = Symbol.for("react.module.reference");
      function Le(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ft || h === fn || Ze || h === S || h === ue || h === Se || Ne || h === Tt || $t || bt || Cn || typeof h == "object" && h !== null && (h.$$typeof === Be || h.$$typeof === ce || h.$$typeof === ke || h.$$typeof === pe || h.$$typeof === Vt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === J || h.getModuleId !== void 0));
      }
      function vt(h, C) {
        Le(h) || ve("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ce,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var A;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(G) {
              A = G, !h.name && !h.displayName && (h.displayName = G);
            }
          });
        }
        return N;
      }
      function je() {
        var h = Ge.current;
        return h === null && ve(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ie(h) {
        var C = je();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? ve("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && ve("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Xe(h) {
        var C = je();
        return C.useState(h);
      }
      function un(h, C, N) {
        var A = je();
        return A.useReducer(h, C, N);
      }
      function ut(h) {
        var C = je();
        return C.useRef(h);
      }
      function en(h, C) {
        var N = je();
        return N.useEffect(h, C);
      }
      function rr(h, C) {
        var N = je();
        return N.useInsertionEffect(h, C);
      }
      function ba(h, C) {
        var N = je();
        return N.useLayoutEffect(h, C);
      }
      function _a(h, C) {
        var N = je();
        return N.useCallback(h, C);
      }
      function Gn(h, C) {
        var N = je();
        return N.useMemo(h, C);
      }
      function Yl(h, C, N) {
        var A = je();
        return A.useImperativeHandle(h, C, N);
      }
      function Xt(h, C) {
        {
          var N = je();
          return N.useDebugValue(h, C);
        }
      }
      function $o() {
        var h = je();
        return h.useTransition();
      }
      function Za(h) {
        var C = je();
        return C.useDeferredValue(h);
      }
      function ot() {
        var h = je();
        return h.useId();
      }
      function di(h, C, N) {
        var A = je();
        return A.useSyncExternalStore(h, C, N);
      }
      var ul = 0, Lu, ol, Ir, Yo, _r, Io, Qo;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function Mu() {
        {
          if (ul === 0) {
            Lu = console.log, ol = console.info, Ir = console.warn, Yo = console.error, _r = console.group, Io = console.groupCollapsed, Qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ul++;
        }
      }
      function sl() {
        {
          if (ul--, ul === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: Lu
              }),
              info: V({}, h, {
                value: ol
              }),
              warn: V({}, h, {
                value: Ir
              }),
              error: V({}, h, {
                value: Yo
              }),
              group: V({}, h, {
                value: _r
              }),
              groupCollapsed: V({}, h, {
                value: Io
              }),
              groupEnd: V({}, h, {
                value: Qo
              })
            });
          }
          ul < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ja = Nt.ReactCurrentDispatcher, Dr;
      function cl(h, C, N) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (G) {
              var A = G.stack.trim().match(/\n( *(at )?)/);
              Dr = A && A[1] || "";
            }
          return `
` + Dr + h;
        }
      }
      var fl = !1, dl;
      {
        var Nu = typeof WeakMap == "function" ? WeakMap : Map;
        dl = new Nu();
      }
      function zu(h, C) {
        if (!h || fl)
          return "";
        {
          var N = dl.get(h);
          if (N !== void 0)
            return N;
        }
        var A;
        fl = !0;
        var G = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ue;
        Ue = Ja.current, Ja.current = null, Mu();
        try {
          if (C) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (St) {
                A = St;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (St) {
                A = St;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (St) {
              A = St;
            }
            h();
          }
        } catch (St) {
          if (St && A && typeof St.stack == "string") {
            for (var Me = St.stack.split(`
`), st = A.stack.split(`
`), xt = Me.length - 1, Qt = st.length - 1; xt >= 1 && Qt >= 0 && Me[xt] !== st[Qt]; )
              Qt--;
            for (; xt >= 1 && Qt >= 0; xt--, Qt--)
              if (Me[xt] !== st[Qt]) {
                if (xt !== 1 || Qt !== 1)
                  do
                    if (xt--, Qt--, Qt < 0 || Me[xt] !== st[Qt]) {
                      var Bt = `
` + Me[xt].replace(" at new ", " at ");
                      return h.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", h.displayName)), typeof h == "function" && dl.set(h, Bt), Bt;
                    }
                  while (xt >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          fl = !1, Ja.current = Ue, sl(), Error.prepareStackTrace = G;
        }
        var Wt = h ? h.displayName || h.name : "", Kt = Wt ? cl(Wt) : "";
        return typeof h == "function" && dl.set(h, Kt), Kt;
      }
      function Oi(h, C, N) {
        return zu(h, !1);
      }
      function Pf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function pi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return zu(h, Pf(h));
        if (typeof h == "string")
          return cl(h);
        switch (h) {
          case ue:
            return cl("Suspense");
          case Se:
            return cl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Vt:
              return Oi(h.render);
            case ce:
              return pi(h.type, C, N);
            case Be: {
              var A = h, G = A._payload, Ue = A._init;
              try {
                return pi(Ue(G), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var _t = {}, Uu = Nt.ReactDebugCurrentFrame;
      function Il(h) {
        if (h) {
          var C = h._owner, N = pi(h.type, h._source, C ? C.type : null);
          Uu.setExtraStackFrame(N);
        } else
          Uu.setExtraStackFrame(null);
      }
      function Au(h, C, N, A, G) {
        {
          var Ue = Function.call.bind(mr);
          for (var re in h)
            if (Ue(h, re)) {
              var Me = void 0;
              try {
                if (typeof h[re] != "function") {
                  var st = Error((A || "React class") + ": " + N + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Me = h[re](C, re, A, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Me = xt;
              }
              Me && !(Me instanceof Error) && (Il(G), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", N, re, typeof Me), Il(null)), Me instanceof Error && !(Me.message in _t) && (_t[Me.message] = !0, Il(G), ve("Failed %s type: %s", N, Me.message), Il(null));
            }
        }
      }
      function gt(h) {
        if (h) {
          var C = h._owner, N = pi(h.type, h._source, C ? C.type : null);
          _n(N);
        } else
          _n(null);
      }
      var Fu;
      Fu = !1;
      function ju() {
        if (lt.current) {
          var h = Wn(lt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Qe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Ql(h) {
        return h != null ? Qe(h.__source) : "";
      }
      var mn = {};
      function Qr(h) {
        var C = ju();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function kr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Qr(C);
          if (!mn[N]) {
            mn[N] = !0;
            var A = "";
            h && h._owner && h._owner !== lt.current && (A = " It was passed a child from " + Wn(h._owner.type) + "."), gt(h), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, A), gt(null);
          }
        }
      }
      function pl(h, C) {
        if (typeof h == "object") {
          if (pn(h))
            for (var N = 0; N < h.length; N++) {
              var A = h[N];
              zt(A) && kr(A, C);
            }
          else if (zt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var G = rt(h);
            if (typeof G == "function" && G !== h.entries)
              for (var Ue = G.call(h), re; !(re = Ue.next()).done; )
                zt(re.value) && kr(re.value, C);
          }
        }
      }
      function Rn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Vt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ce))
            N = C.propTypes;
          else
            return;
          if (N) {
            var A = Wn(C);
            Au(N, h.props, "prop", A, h);
          } else if (C.PropTypes !== void 0 && !Fu) {
            Fu = !0;
            var G = Wn(C);
            ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ft(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var A = C[N];
            if (A !== "children" && A !== "key") {
              gt(h), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), gt(null);
              break;
            }
          }
          h.ref !== null && (gt(h), ve("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
        }
      }
      function Ks(h, C, N) {
        var A = Le(h);
        if (!A) {
          var G = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Ql(C);
          Ue ? G += Ue : G += ju();
          var re;
          h === null ? re = "null" : pn(h) ? re = "array" : h !== void 0 && h.$$typeof === ln ? (re = "<" + (Wn(h.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, ve("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, G);
        }
        var Me = xe.apply(this, arguments);
        if (Me == null)
          return Me;
        if (A)
          for (var st = 2; st < arguments.length; st++)
            pl(arguments[st], h);
        return h === ft ? Ft(Me) : Rn(Me), Me;
      }
      var Wr = !1;
      function qn(h) {
        var C = Ks.bind(null, h);
        return C.type = h, Wr || (Wr = !0, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function vi(h, C, N) {
        for (var A = Lt.apply(this, arguments), G = 2; G < arguments.length; G++)
          pl(arguments[G], A.type);
        return Rn(A), A;
      }
      function Zs(h, C) {
        var N = pt.transition;
        pt.transition = {};
        var A = pt.transition;
        pt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (pt.transition = N, N === null && A._updatedFibers) {
            var G = A._updatedFibers.size;
            G > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), A._updatedFibers.clear();
          }
        }
      }
      var Li = !1, vl = null;
      function Js(h) {
        if (vl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = ie && ie[C];
            vl = N.call(ie, "timers").setImmediate;
          } catch {
            vl = function(G) {
              Li === !1 && (Li = !0, typeof MessageChannel > "u" && ve("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ue = new MessageChannel();
              Ue.port1.onmessage = G, Ue.port2.postMessage(void 0);
            };
          }
        return vl(h);
      }
      var Da = 0, hl = !1;
      function Mi(h) {
        {
          var C = Da;
          Da++, _e.current === null && (_e.current = []);
          var N = _e.isBatchingLegacy, A;
          try {
            if (_e.isBatchingLegacy = !0, A = h(), !N && _e.didScheduleLegacyUpdate) {
              var G = _e.current;
              G !== null && (_e.didScheduleLegacyUpdate = !1, yl(G));
            }
          } catch (Wt) {
            throw ka(C), Wt;
          } finally {
            _e.isBatchingLegacy = N;
          }
          if (A !== null && typeof A == "object" && typeof A.then == "function") {
            var Ue = A, re = !1, Me = {
              then: function(Wt, Kt) {
                re = !0, Ue.then(function(St) {
                  ka(C), Da === 0 ? Hu(St, Wt, Kt) : Wt(St);
                }, function(St) {
                  ka(C), Kt(St);
                });
              }
            };
            return !hl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              re || (hl = !0, ve("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var st = A;
            if (ka(C), Da === 0) {
              var xt = _e.current;
              xt !== null && (yl(xt), _e.current = null);
              var Qt = {
                then: function(Wt, Kt) {
                  _e.current === null ? (_e.current = [], Hu(st, Wt, Kt)) : Wt(st);
                }
              };
              return Qt;
            } else {
              var Bt = {
                then: function(Wt, Kt) {
                  Wt(st);
                }
              };
              return Bt;
            }
          }
        }
      }
      function ka(h) {
        h !== Da - 1 && ve("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function Hu(h, C, N) {
        {
          var A = _e.current;
          if (A !== null)
            try {
              yl(A), Js(function() {
                A.length === 0 ? (_e.current = null, C(h)) : Hu(h, C, N);
              });
            } catch (G) {
              N(G);
            }
          else
            C(h);
        }
      }
      var ml = !1;
      function yl(h) {
        if (!ml) {
          ml = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (A) {
            throw h = h.slice(C + 1), A;
          } finally {
            ml = !1;
          }
        }
      }
      var Wl = Ks, Vu = vi, Wo = qn, ei = {
        map: xa,
        forEach: $l,
        count: il,
        toArray: Ou,
        only: ki
      };
      Z.Children = ei, Z.Component = Ve, Z.Fragment = ft, Z.Profiler = fn, Z.PureComponent = it, Z.StrictMode = S, Z.Suspense = ue, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nt, Z.act = Mi, Z.cloneElement = Vu, Z.createContext = ll, Z.createElement = Wl, Z.createFactory = Wo, Z.createRef = hr, Z.forwardRef = Y, Z.isValidElement = zt, Z.lazy = R, Z.memo = vt, Z.startTransition = Zs, Z.unstable_act = Mi, Z.useCallback = _a, Z.useContext = Ie, Z.useDebugValue = Xt, Z.useDeferredValue = Za, Z.useEffect = en, Z.useId = ot, Z.useImperativeHandle = Yl, Z.useInsertionEffect = rr, Z.useLayoutEffect = ba, Z.useMemo = Gn, Z.useReducer = un, Z.useRef = ut, Z.useState = Xe, Z.useSyncExternalStore = di, Z.useTransition = $o, Z.version = F, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Yp, Yp.exports)), Yp.exports;
}
process.env.NODE_ENV === "production" ? f0.exports = Z_() : f0.exports = J_();
var v0 = f0.exports;
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function eD() {
  return J1 || (J1 = 1, process.env.NODE_ENV !== "production" && function() {
    var ie = v0, Z = Symbol.for("react.element"), F = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), En = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), fn = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Vt = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), Be = Symbol.iterator, Tt = "@@iterator";
    function dt(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Be && R[Be] || R[Tt];
      return typeof Y == "function" ? Y : null;
    }
    var dn = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var Y = arguments.length, J = new Array(Y > 1 ? Y - 1 : 0), Le = 1; Le < Y; Le++)
          J[Le - 1] = arguments[Le];
        Ge("error", R, J);
      }
    }
    function Ge(R, Y, J) {
      {
        var Le = dn.ReactDebugCurrentFrame, vt = Le.getStackAddendum();
        vt !== "" && (Y += "%s", J = J.concat([vt]));
        var je = J.map(function(Ie) {
          return String(Ie);
        });
        je.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, je);
      }
    }
    var pt = !1, _e = !1, lt = !1, He = !1, Jt = !1, _n;
    _n = Symbol.for("react.module.reference");
    function $t(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ln || R === ft || Jt || R === En || R === pe || R === Vt || He || R === ce || pt || _e || lt || typeof R == "object" && R !== null && (R.$$typeof === Se || R.$$typeof === ue || R.$$typeof === S || R.$$typeof === fn || R.$$typeof === ke || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === _n || R.getModuleId !== void 0));
    }
    function bt(R, Y, J) {
      var Le = R.displayName;
      if (Le)
        return Le;
      var vt = Y.displayName || Y.name || "";
      return vt !== "" ? J + "(" + vt + ")" : J;
    }
    function Cn(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ln:
          return "Fragment";
        case F:
          return "Portal";
        case ft:
          return "Profiler";
        case En:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Vt:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case fn:
            var Y = R;
            return Cn(Y) + ".Consumer";
          case S:
            var J = R;
            return Cn(J._context) + ".Provider";
          case ke:
            return bt(R, R.render, "ForwardRef");
          case ue:
            var Le = R.displayName || null;
            return Le !== null ? Le : Ne(R.type) || "Memo";
          case Se: {
            var vt = R, je = vt._payload, Ie = vt._init;
            try {
              return Ne(Ie(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, Nt = 0, wt, ve, X, we, ne, _, V;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Nt === 0) {
          wt = console.log, ve = console.info, X = console.warn, we = console.error, ne = console.group, _ = console.groupCollapsed, V = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Nt++;
      }
    }
    function tt() {
      {
        if (Nt--, Nt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, R, {
              value: wt
            }),
            info: Ze({}, R, {
              value: ve
            }),
            warn: Ze({}, R, {
              value: X
            }),
            error: Ze({}, R, {
              value: we
            }),
            group: Ze({}, R, {
              value: ne
            }),
            groupCollapsed: Ze({}, R, {
              value: _
            }),
            groupEnd: Ze({}, R, {
              value: V
            })
          });
        }
        Nt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = dn.ReactCurrentDispatcher, yt;
    function at(R, Y, J) {
      {
        if (yt === void 0)
          try {
            throw Error();
          } catch (vt) {
            var Le = vt.stack.trim().match(/\n( *(at )?)/);
            yt = Le && Le[1] || "";
          }
        return `
` + yt + R;
      }
    }
    var it = !1, qt;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      qt = new hr();
    }
    function Vr(R, Y) {
      if (!R || it)
        return "";
      {
        var J = qt.get(R);
        if (J !== void 0)
          return J;
      }
      var Le;
      it = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = et.current, et.current = null, Ve();
      try {
        if (Y) {
          var Ie = function() {
            throw Error();
          };
          if (Object.defineProperty(Ie.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ie, []);
            } catch (Gn) {
              Le = Gn;
            }
            Reflect.construct(R, [], Ie);
          } else {
            try {
              Ie.call();
            } catch (Gn) {
              Le = Gn;
            }
            R.call(Ie.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            Le = Gn;
          }
          R();
        }
      } catch (Gn) {
        if (Gn && Le && typeof Gn.stack == "string") {
          for (var Xe = Gn.stack.split(`
`), un = Le.stack.split(`
`), ut = Xe.length - 1, en = un.length - 1; ut >= 1 && en >= 0 && Xe[ut] !== un[en]; )
            en--;
          for (; ut >= 1 && en >= 0; ut--, en--)
            if (Xe[ut] !== un[en]) {
              if (ut !== 1 || en !== 1)
                do
                  if (ut--, en--, en < 0 || Xe[ut] !== un[en]) {
                    var rr = `
` + Xe[ut].replace(" at new ", " at ");
                    return R.displayName && rr.includes("<anonymous>") && (rr = rr.replace("<anonymous>", R.displayName)), typeof R == "function" && qt.set(R, rr), rr;
                  }
                while (ut >= 1 && en >= 0);
              break;
            }
        }
      } finally {
        it = !1, et.current = je, tt(), Error.prepareStackTrace = vt;
      }
      var ba = R ? R.displayName || R.name : "", _a = ba ? at(ba) : "";
      return typeof R == "function" && qt.set(R, _a), _a;
    }
    function pn(R, Y, J) {
      return Vr(R, !1);
    }
    function Qn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Hn(R, Y, J) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Vr(R, Qn(R));
      if (typeof R == "string")
        return at(R);
      switch (R) {
        case pe:
          return at("Suspense");
        case Vt:
          return at("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ke:
            return pn(R.render);
          case ue:
            return Hn(R.type, Y, J);
          case Se: {
            var Le = R, vt = Le._payload, je = Le._init;
            try {
              return Hn(je(vt), Y, J);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, Dn = {}, Pr = dn.ReactDebugCurrentFrame;
    function Br(R) {
      if (R) {
        var Y = R._owner, J = Hn(R.type, R._source, Y ? Y.type : null);
        Pr.setExtraStackFrame(J);
      } else
        Pr.setExtraStackFrame(null);
    }
    function Wn(R, Y, J, Le, vt) {
      {
        var je = Function.call.bind(zn);
        for (var Ie in R)
          if (je(R, Ie)) {
            var Xe = void 0;
            try {
              if (typeof R[Ie] != "function") {
                var un = Error((Le || "React class") + ": " + J + " type `" + Ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw un.name = "Invariant Violation", un;
              }
              Xe = R[Ie](Y, Ie, Le, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ut) {
              Xe = ut;
            }
            Xe && !(Xe instanceof Error) && (Br(vt), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", J, Ie, typeof Xe), Br(null)), Xe instanceof Error && !(Xe.message in Dn) && (Dn[Xe.message] = !0, Br(vt), rt("Failed %s type: %s", J, Xe.message), Br(null));
          }
      }
    }
    var mr = Array.isArray;
    function $r(R) {
      return mr(R);
    }
    function yr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, J = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return J;
      }
    }
    function ca(R) {
      try {
        return nr(R), !1;
      } catch {
        return !0;
      }
    }
    function nr(R) {
      return "" + R;
    }
    function Yr(R) {
      if (ca(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(R)), nr(R);
    }
    var vn = dn.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, si, fa, K;
    K = {};
    function xe(R) {
      if (zn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function nt(R) {
      if (zn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Lt(R, Y) {
      if (typeof R.ref == "string" && vn.current && Y && vn.current.stateNode !== Y) {
        var J = Ne(vn.current.type);
        K[J] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(vn.current.type), R.ref), K[J] = !0);
      }
    }
    function zt(R, Y) {
      {
        var J = function() {
          si || (si = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        J.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function kn(R, Y) {
      {
        var J = function() {
          fa || (fa = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        J.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var hn = function(R, Y, J, Le, vt, je, Ie) {
      var Xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Z,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: J,
        props: Ie,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return Xe._store = {}, Object.defineProperty(Xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(Xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(Xe.props), Object.freeze(Xe)), Xe;
    };
    function gr(R, Y, J, Le, vt) {
      {
        var je, Ie = {}, Xe = null, un = null;
        J !== void 0 && (Yr(J), Xe = "" + J), nt(Y) && (Yr(Y.key), Xe = "" + Y.key), xe(Y) && (un = Y.ref, Lt(Y, vt));
        for (je in Y)
          zn.call(Y, je) && !wr.hasOwnProperty(je) && (Ie[je] = Y[je]);
        if (R && R.defaultProps) {
          var ut = R.defaultProps;
          for (je in ut)
            Ie[je] === void 0 && (Ie[je] = ut[je]);
        }
        if (Xe || un) {
          var en = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Xe && zt(Ie, en), un && kn(Ie, en);
        }
        return hn(R, Xe, un, vt, Le, vn.current, Ie);
      }
    }
    var Pt = dn.ReactCurrentOwner, xr = dn.ReactDebugCurrentFrame;
    function Ut(R) {
      if (R) {
        var Y = R._owner, J = Hn(R.type, R._source, Y ? Y.type : null);
        xr.setExtraStackFrame(J);
      } else
        xr.setExtraStackFrame(null);
    }
    var At;
    At = !1;
    function Ka(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Z;
    }
    function xa() {
      {
        if (Pt.current) {
          var R = Ne(Pt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function il(R) {
      {
        if (R !== void 0) {
          var Y = R.fileName.replace(/^.*[\\\/]/, ""), J = R.lineNumber;
          return `

Check your code at ` + Y + ":" + J + ".";
        }
        return "";
      }
    }
    var $l = {};
    function Ou(R) {
      {
        var Y = xa();
        if (!Y) {
          var J = typeof R == "string" ? R : R.displayName || R.name;
          J && (Y = `

Check the top-level render call using <` + J + ">.");
        }
        return Y;
      }
    }
    function ki(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var J = Ou(Y);
        if ($l[J])
          return;
        $l[J] = !0;
        var Le = "";
        R && R._owner && R._owner !== Pt.current && (Le = " It was passed a child from " + Ne(R._owner.type) + "."), Ut(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, Le), Ut(null);
      }
    }
    function ll(R, Y) {
      {
        if (typeof R != "object")
          return;
        if ($r(R))
          for (var J = 0; J < R.length; J++) {
            var Le = R[J];
            Ka(Le) && ki(Le, Y);
          }
        else if (Ka(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var vt = dt(R);
          if (typeof vt == "function" && vt !== R.entries)
            for (var je = vt.call(R), Ie; !(Ie = je.next()).done; )
              Ka(Ie.value) && ki(Ie.value, Y);
        }
      }
    }
    function da(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var J;
        if (typeof Y == "function")
          J = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === ke || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === ue))
          J = Y.propTypes;
        else
          return;
        if (J) {
          var Le = Ne(Y);
          Wn(J, R.props, "prop", Le, R);
        } else if (Y.PropTypes !== void 0 && !At) {
          At = !0;
          var vt = Ne(Y);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ci(R) {
      {
        for (var Y = Object.keys(R.props), J = 0; J < Y.length; J++) {
          var Le = Y[J];
          if (Le !== "children" && Le !== "key") {
            Ut(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), Ut(null);
            break;
          }
        }
        R.ref !== null && (Ut(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    var pa = {};
    function fi(R, Y, J, Le, vt, je) {
      {
        var Ie = $t(R);
        if (!Ie) {
          var Xe = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var un = il(vt);
          un ? Xe += un : Xe += xa();
          var ut;
          R === null ? ut = "null" : $r(R) ? ut = "array" : R !== void 0 && R.$$typeof === Z ? (ut = "<" + (Ne(R.type) || "Unknown") + " />", Xe = " Did you accidentally export a JSX literal instead of a component?") : ut = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ut, Xe);
        }
        var en = gr(R, Y, J, vt, je);
        if (en == null)
          return en;
        if (Ie) {
          var rr = Y.children;
          if (rr !== void 0)
            if (Le)
              if ($r(rr)) {
                for (var ba = 0; ba < rr.length; ba++)
                  ll(rr[ba], R);
                Object.freeze && Object.freeze(rr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ll(rr, R);
        }
        if (zn.call(Y, "key")) {
          var _a = Ne(R), Gn = Object.keys(Y).filter(function($o) {
            return $o !== "key";
          }), Yl = Gn.length > 0 ? "{key: someKey, " + Gn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pa[_a + Yl]) {
            var Xt = Gn.length > 0 ? "{" + Gn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yl, _a, Xt, _a), pa[_a + Yl] = !0;
          }
        }
        return R === ln ? ci(en) : da(en), en;
      }
    }
    var br = fi;
    Um.Fragment = ln, Um.jsxDEV = br;
  }()), Um;
}
process.env.NODE_ENV === "production" ? c0.exports = K_() : c0.exports = eD();
var jm = c0.exports, d0 = { exports: {} }, qa = {}, Am = { exports: {} }, o0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function tD() {
  return eR || (eR = 1, function(ie) {
    function Z(X, we) {
      var ne = X.length;
      X.push(we);
      e: for (; 0 < ne; ) {
        var _ = ne - 1 >>> 1, V = X[_];
        if (0 < En(V, we)) X[_] = we, X[ne] = V, ne = _;
        else break e;
      }
    }
    function F(X) {
      return X.length === 0 ? null : X[0];
    }
    function ln(X) {
      if (X.length === 0) return null;
      var we = X[0], ne = X.pop();
      if (ne !== we) {
        X[0] = ne;
        e: for (var _ = 0, V = X.length, ze = V >>> 1; _ < ze; ) {
          var Ve = 2 * (_ + 1) - 1, tt = X[Ve], et = Ve + 1, yt = X[et];
          if (0 > En(tt, ne)) et < V && 0 > En(yt, tt) ? (X[_] = yt, X[et] = ne, _ = et) : (X[_] = tt, X[Ve] = ne, _ = Ve);
          else if (et < V && 0 > En(yt, ne)) X[_] = yt, X[et] = ne, _ = et;
          else break e;
        }
      }
      return we;
    }
    function En(X, we) {
      var ne = X.sortIndex - we.sortIndex;
      return ne !== 0 ? ne : X.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ft = performance;
      ie.unstable_now = function() {
        return ft.now();
      };
    } else {
      var S = Date, fn = S.now();
      ie.unstable_now = function() {
        return S.now() - fn;
      };
    }
    var ke = [], pe = [], Vt = 1, ue = null, Se = 3, ce = !1, Be = !1, Tt = !1, dt = typeof setTimeout == "function" ? setTimeout : null, dn = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(X) {
      for (var we = F(pe); we !== null; ) {
        if (we.callback === null) ln(pe);
        else if (we.startTime <= X) ln(pe), we.sortIndex = we.expirationTime, Z(ke, we);
        else break;
        we = F(pe);
      }
    }
    function pt(X) {
      if (Tt = !1, Ge(X), !Be) if (F(ke) !== null) Be = !0, wt(_e);
      else {
        var we = F(pe);
        we !== null && ve(pt, we.startTime - X);
      }
    }
    function _e(X, we) {
      Be = !1, Tt && (Tt = !1, dn(Jt), Jt = -1), ce = !0;
      var ne = Se;
      try {
        for (Ge(we), ue = F(ke); ue !== null && (!(ue.expirationTime > we) || X && !bt()); ) {
          var _ = ue.callback;
          if (typeof _ == "function") {
            ue.callback = null, Se = ue.priorityLevel;
            var V = _(ue.expirationTime <= we);
            we = ie.unstable_now(), typeof V == "function" ? ue.callback = V : ue === F(ke) && ln(ke), Ge(we);
          } else ln(ke);
          ue = F(ke);
        }
        if (ue !== null) var ze = !0;
        else {
          var Ve = F(pe);
          Ve !== null && ve(pt, Ve.startTime - we), ze = !1;
        }
        return ze;
      } finally {
        ue = null, Se = ne, ce = !1;
      }
    }
    var lt = !1, He = null, Jt = -1, _n = 5, $t = -1;
    function bt() {
      return !(ie.unstable_now() - $t < _n);
    }
    function Cn() {
      if (He !== null) {
        var X = ie.unstable_now();
        $t = X;
        var we = !0;
        try {
          we = He(!0, X);
        } finally {
          we ? Ne() : (lt = !1, He = null);
        }
      } else lt = !1;
    }
    var Ne;
    if (typeof rt == "function") Ne = function() {
      rt(Cn);
    };
    else if (typeof MessageChannel < "u") {
      var Ze = new MessageChannel(), Nt = Ze.port2;
      Ze.port1.onmessage = Cn, Ne = function() {
        Nt.postMessage(null);
      };
    } else Ne = function() {
      dt(Cn, 0);
    };
    function wt(X) {
      He = X, lt || (lt = !0, Ne());
    }
    function ve(X, we) {
      Jt = dt(function() {
        X(ie.unstable_now());
      }, we);
    }
    ie.unstable_IdlePriority = 5, ie.unstable_ImmediatePriority = 1, ie.unstable_LowPriority = 4, ie.unstable_NormalPriority = 3, ie.unstable_Profiling = null, ie.unstable_UserBlockingPriority = 2, ie.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, ie.unstable_continueExecution = function() {
      Be || ce || (Be = !0, wt(_e));
    }, ie.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _n = 0 < X ? Math.floor(1e3 / X) : 5;
    }, ie.unstable_getCurrentPriorityLevel = function() {
      return Se;
    }, ie.unstable_getFirstCallbackNode = function() {
      return F(ke);
    }, ie.unstable_next = function(X) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = Se;
      }
      var ne = Se;
      Se = we;
      try {
        return X();
      } finally {
        Se = ne;
      }
    }, ie.unstable_pauseExecution = function() {
    }, ie.unstable_requestPaint = function() {
    }, ie.unstable_runWithPriority = function(X, we) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var ne = Se;
      Se = X;
      try {
        return we();
      } finally {
        Se = ne;
      }
    }, ie.unstable_scheduleCallback = function(X, we, ne) {
      var _ = ie.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? _ + ne : _) : ne = _, X) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = ne + V, X = { id: Vt++, callback: we, priorityLevel: X, startTime: ne, expirationTime: V, sortIndex: -1 }, ne > _ ? (X.sortIndex = ne, Z(pe, X), F(ke) === null && X === F(pe) && (Tt ? (dn(Jt), Jt = -1) : Tt = !0, ve(pt, ne - _))) : (X.sortIndex = V, Z(ke, X), Be || ce || (Be = !0, wt(_e))), X;
    }, ie.unstable_shouldYield = bt, ie.unstable_wrapCallback = function(X) {
      var we = Se;
      return function() {
        var ne = Se;
        Se = we;
        try {
          return X.apply(this, arguments);
        } finally {
          Se = ne;
        }
      };
    };
  }(o0)), o0;
}
var s0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function nD() {
  return tR || (tR = 1, function(ie) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Z = !1, F = !1, ln = 5;
      function En(K, xe) {
        var nt = K.length;
        K.push(xe), fn(K, xe, nt);
      }
      function ft(K) {
        return K.length === 0 ? null : K[0];
      }
      function S(K) {
        if (K.length === 0)
          return null;
        var xe = K[0], nt = K.pop();
        return nt !== xe && (K[0] = nt, ke(K, nt, 0)), xe;
      }
      function fn(K, xe, nt) {
        for (var Lt = nt; Lt > 0; ) {
          var zt = Lt - 1 >>> 1, kn = K[zt];
          if (pe(kn, xe) > 0)
            K[zt] = xe, K[Lt] = kn, Lt = zt;
          else
            return;
        }
      }
      function ke(K, xe, nt) {
        for (var Lt = nt, zt = K.length, kn = zt >>> 1; Lt < kn; ) {
          var hn = (Lt + 1) * 2 - 1, gr = K[hn], Pt = hn + 1, xr = K[Pt];
          if (pe(gr, xe) < 0)
            Pt < zt && pe(xr, gr) < 0 ? (K[Lt] = xr, K[Pt] = xe, Lt = Pt) : (K[Lt] = gr, K[hn] = xe, Lt = hn);
          else if (Pt < zt && pe(xr, xe) < 0)
            K[Lt] = xr, K[Pt] = xe, Lt = Pt;
          else
            return;
        }
      }
      function pe(K, xe) {
        var nt = K.sortIndex - xe.sortIndex;
        return nt !== 0 ? nt : K.id - xe.id;
      }
      var Vt = 1, ue = 2, Se = 3, ce = 4, Be = 5;
      function Tt(K, xe) {
      }
      var dt = typeof performance == "object" && typeof performance.now == "function";
      if (dt) {
        var dn = performance;
        ie.unstable_now = function() {
          return dn.now();
        };
      } else {
        var rt = Date, Ge = rt.now();
        ie.unstable_now = function() {
          return rt.now() - Ge;
        };
      }
      var pt = 1073741823, _e = -1, lt = 250, He = 5e3, Jt = 1e4, _n = pt, $t = [], bt = [], Cn = 1, Ne = null, Ze = Se, Nt = !1, wt = !1, ve = !1, X = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(K) {
        for (var xe = ft(bt); xe !== null; ) {
          if (xe.callback === null)
            S(bt);
          else if (xe.startTime <= K)
            S(bt), xe.sortIndex = xe.expirationTime, En($t, xe);
          else
            return;
          xe = ft(bt);
        }
      }
      function V(K) {
        if (ve = !1, _(K), !wt)
          if (ft($t) !== null)
            wt = !0, Yr(ze);
          else {
            var xe = ft(bt);
            xe !== null && vn(V, xe.startTime - K);
          }
      }
      function ze(K, xe) {
        wt = !1, ve && (ve = !1, wr()), Nt = !0;
        var nt = Ze;
        try {
          var Lt;
          if (!F) return Ve(K, xe);
        } finally {
          Ne = null, Ze = nt, Nt = !1;
        }
      }
      function Ve(K, xe) {
        var nt = xe;
        for (_(nt), Ne = ft($t); Ne !== null && !Z && !(Ne.expirationTime > nt && (!K || Br())); ) {
          var Lt = Ne.callback;
          if (typeof Lt == "function") {
            Ne.callback = null, Ze = Ne.priorityLevel;
            var zt = Ne.expirationTime <= nt, kn = Lt(zt);
            nt = ie.unstable_now(), typeof kn == "function" ? Ne.callback = kn : Ne === ft($t) && S($t), _(nt);
          } else
            S($t);
          Ne = ft($t);
        }
        if (Ne !== null)
          return !0;
        var hn = ft(bt);
        return hn !== null && vn(V, hn.startTime - nt), !1;
      }
      function tt(K, xe) {
        switch (K) {
          case Vt:
          case ue:
          case Se:
          case ce:
          case Be:
            break;
          default:
            K = Se;
        }
        var nt = Ze;
        Ze = K;
        try {
          return xe();
        } finally {
          Ze = nt;
        }
      }
      function et(K) {
        var xe;
        switch (Ze) {
          case Vt:
          case ue:
          case Se:
            xe = Se;
            break;
          default:
            xe = Ze;
            break;
        }
        var nt = Ze;
        Ze = xe;
        try {
          return K();
        } finally {
          Ze = nt;
        }
      }
      function yt(K) {
        var xe = Ze;
        return function() {
          var nt = Ze;
          Ze = xe;
          try {
            return K.apply(this, arguments);
          } finally {
            Ze = nt;
          }
        };
      }
      function at(K, xe, nt) {
        var Lt = ie.unstable_now(), zt;
        if (typeof nt == "object" && nt !== null) {
          var kn = nt.delay;
          typeof kn == "number" && kn > 0 ? zt = Lt + kn : zt = Lt;
        } else
          zt = Lt;
        var hn;
        switch (K) {
          case Vt:
            hn = _e;
            break;
          case ue:
            hn = lt;
            break;
          case Be:
            hn = _n;
            break;
          case ce:
            hn = Jt;
            break;
          case Se:
          default:
            hn = He;
            break;
        }
        var gr = zt + hn, Pt = {
          id: Cn++,
          callback: xe,
          priorityLevel: K,
          startTime: zt,
          expirationTime: gr,
          sortIndex: -1
        };
        return zt > Lt ? (Pt.sortIndex = zt, En(bt, Pt), ft($t) === null && Pt === ft(bt) && (ve ? wr() : ve = !0, vn(V, zt - Lt))) : (Pt.sortIndex = gr, En($t, Pt), !wt && !Nt && (wt = !0, Yr(ze))), Pt;
      }
      function it() {
      }
      function qt() {
        !wt && !Nt && (wt = !0, Yr(ze));
      }
      function hr() {
        return ft($t);
      }
      function Vr(K) {
        K.callback = null;
      }
      function pn() {
        return Ze;
      }
      var Qn = !1, Hn = null, zn = -1, Dn = ln, Pr = -1;
      function Br() {
        var K = ie.unstable_now() - Pr;
        return !(K < Dn);
      }
      function Wn() {
      }
      function mr(K) {
        if (K < 0 || K > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        K > 0 ? Dn = Math.floor(1e3 / K) : Dn = ln;
      }
      var $r = function() {
        if (Hn !== null) {
          var K = ie.unstable_now();
          Pr = K;
          var xe = !0, nt = !0;
          try {
            nt = Hn(xe, K);
          } finally {
            nt ? yr() : (Qn = !1, Hn = null);
          }
        } else
          Qn = !1;
      }, yr;
      if (typeof ne == "function")
        yr = function() {
          ne($r);
        };
      else if (typeof MessageChannel < "u") {
        var ca = new MessageChannel(), nr = ca.port2;
        ca.port1.onmessage = $r, yr = function() {
          nr.postMessage(null);
        };
      } else
        yr = function() {
          X($r, 0);
        };
      function Yr(K) {
        Hn = K, Qn || (Qn = !0, yr());
      }
      function vn(K, xe) {
        zn = X(function() {
          K(ie.unstable_now());
        }, xe);
      }
      function wr() {
        we(zn), zn = -1;
      }
      var si = Wn, fa = null;
      ie.unstable_IdlePriority = Be, ie.unstable_ImmediatePriority = Vt, ie.unstable_LowPriority = ce, ie.unstable_NormalPriority = Se, ie.unstable_Profiling = fa, ie.unstable_UserBlockingPriority = ue, ie.unstable_cancelCallback = Vr, ie.unstable_continueExecution = qt, ie.unstable_forceFrameRate = mr, ie.unstable_getCurrentPriorityLevel = pn, ie.unstable_getFirstCallbackNode = hr, ie.unstable_next = et, ie.unstable_pauseExecution = it, ie.unstable_requestPaint = si, ie.unstable_runWithPriority = tt, ie.unstable_scheduleCallback = at, ie.unstable_shouldYield = Br, ie.unstable_wrapCallback = yt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(s0)), s0;
}
var nR;
function uR() {
  return nR || (nR = 1, process.env.NODE_ENV === "production" ? Am.exports = tD() : Am.exports = nD()), Am.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rR;
function rD() {
  if (rR) return qa;
  rR = 1;
  var ie = v0, Z = uR();
  function F(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ln = /* @__PURE__ */ new Set(), En = {};
  function ft(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (En[n] = r, n = 0; n < r.length; n++) ln.add(r[n]);
  }
  var fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ke = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vt = {}, ue = {};
  function Se(n) {
    return ke.call(ue, n) ? !0 : ke.call(Vt, n) ? !1 : pe.test(n) ? ue[n] = !0 : (Vt[n] = !0, !1);
  }
  function ce(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Be(n, r, l, o) {
    if (r === null || typeof r > "u" || ce(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Tt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var dt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    dt[n] = new Tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    dt[r] = new Tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    dt[n] = new Tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    dt[n] = new Tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    dt[n] = new Tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    dt[n] = new Tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    dt[n] = new Tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    dt[n] = new Tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    dt[n] = new Tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var dn = /[\-:]([a-z])/g;
  function rt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      dn,
      rt
    );
    dt[r] = new Tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(dn, rt);
    dt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(dn, rt);
    dt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    dt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), dt.xlinkHref = new Tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    dt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, l, o) {
    var c = dt.hasOwnProperty(r) ? dt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Be(r, l, c, o) && (l = null), o || c === null ? Se(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var pt = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _e = Symbol.for("react.element"), lt = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), Jt = Symbol.for("react.strict_mode"), _n = Symbol.for("react.profiler"), $t = Symbol.for("react.provider"), bt = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, _;
  function V(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var ze = !1;
  function Ve(n, r) {
    if (!n || ze) return "";
    ze = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function tt(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case lt:
        return "Portal";
      case _n:
        return "Profiler";
      case Jt:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case bt:
        return (n.displayName || "Context") + ".Consumer";
      case $t:
        return (n._context.displayName || "Context") + ".Provider";
      case Cn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Nt:
        return r = n.displayName || null, r !== null ? r : et(n.type) || "Memo";
      case wt:
        r = n._payload, n = n._init;
        try {
          return et(n(r));
        } catch {
        }
    }
    return null;
  }
  function yt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return et(r);
      case 8:
        return r === Jt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function at(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function it(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function qt(n) {
    var r = it(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function hr(n) {
    n._valueTracker || (n._valueTracker = qt(n));
  }
  function Vr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = it(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function Dn(n, r) {
    zn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Br(n, r.type, l) : r.hasOwnProperty("defaultValue") && Br(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Pr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Br(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function mr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + at(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $r(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(F(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(F(92));
        if (Wn(l)) {
          if (1 < l.length) throw Error(F(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function ca(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function nr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Yr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Yr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, si = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function fa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var K = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(K).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), K[r] = K[n];
    });
  });
  function nt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || K.hasOwnProperty(n) && K[n] ? ("" + r).trim() : r + "px";
  }
  function Lt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = nt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var zt = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function kn(n, r) {
    if (r) {
      if (zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(F(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(F(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(F(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(F(62));
    }
  }
  function hn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function Pt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, Ut = null, At = null;
  function Ka(n) {
    if (n = us(n)) {
      if (typeof xr != "function") throw Error(F(280));
      var r = n.stateNode;
      r && (r = De(r), xr(n.stateNode, n.type, r));
    }
  }
  function xa(n) {
    Ut ? At ? At.push(n) : At = [n] : Ut = n;
  }
  function il() {
    if (Ut) {
      var n = Ut, r = At;
      if (At = Ut = null, Ka(n), r) for (n = 0; n < r.length; n++) Ka(r[n]);
    }
  }
  function $l(n, r) {
    return n(r);
  }
  function Ou() {
  }
  var ki = !1;
  function ll(n, r, l) {
    if (ki) return n(r, l);
    ki = !0;
    try {
      return $l(n, r, l);
    } finally {
      ki = !1, (Ut !== null || At !== null) && (Ou(), il());
    }
  }
  function da(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = De(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(F(231, r, typeof l));
    return l;
  }
  var ci = !1;
  if (fn) try {
    var pa = {};
    Object.defineProperty(pa, "passive", { get: function() {
      ci = !0;
    } }), window.addEventListener("test", pa, pa), window.removeEventListener("test", pa, pa);
  } catch {
    ci = !1;
  }
  function fi(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (I) {
      this.onError(I);
    }
  }
  var br = !1, R = null, Y = !1, J = null, Le = { onError: function(n) {
    br = !0, R = n;
  } };
  function vt(n, r, l, o, c, d, m, E, T) {
    br = !1, R = null, fi.apply(Le, arguments);
  }
  function je(n, r, l, o, c, d, m, E, T) {
    if (vt.apply(this, arguments), br) {
      if (br) {
        var z = R;
        br = !1, R = null;
      } else throw Error(F(198));
      Y || (Y = !0, J = z);
    }
  }
  function Ie(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Xe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function un(n) {
    if (Ie(n) !== n) throw Error(F(188));
  }
  function ut(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ie(n), r === null) throw Error(F(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return un(c), n;
          if (d === o) return un(c), r;
          d = d.sibling;
        }
        throw Error(F(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(F(189));
        }
      }
      if (l.alternate !== o) throw Error(F(190));
    }
    if (l.tag !== 3) throw Error(F(188));
    return l.stateNode.current === l ? n : r;
  }
  function en(n) {
    return n = ut(n), n !== null ? rr(n) : null;
  }
  function rr(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = rr(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var ba = Z.unstable_scheduleCallback, _a = Z.unstable_cancelCallback, Gn = Z.unstable_shouldYield, Yl = Z.unstable_requestPaint, Xt = Z.unstable_now, $o = Z.unstable_getCurrentPriorityLevel, Za = Z.unstable_ImmediatePriority, ot = Z.unstable_UserBlockingPriority, di = Z.unstable_NormalPriority, ul = Z.unstable_LowPriority, Lu = Z.unstable_IdlePriority, ol = null, Ir = null;
  function Yo(n) {
    if (Ir && typeof Ir.onCommitFiberRoot == "function") try {
      Ir.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var _r = Math.clz32 ? Math.clz32 : Xs, Io = Math.log, Qo = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / Qo | 0) | 0;
  }
  var Mu = 64, sl = 4194304;
  function Ja(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Dr(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ja(E) : (d &= m, d !== 0 && (o = Ja(d)));
    } else m = l & ~c, m !== 0 ? o = Ja(m) : d !== 0 && (o = Ja(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - _r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - _r(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Nu() {
    var n = Mu;
    return Mu <<= 1, !(Mu & 4194240) && (Mu = 64), n;
  }
  function zu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Oi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - _r(r), n[r] = l;
  }
  function Pf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - _r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - _r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function Uu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Il, Au, gt, Fu, ju, Qe = !1, Ql = [], mn = null, Qr = null, kr = null, pl = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), Ft = [], Ks = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qr = null;
        break;
      case "mouseover":
      case "mouseout":
        kr = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(r.pointerId);
    }
  }
  function qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = us(r), r !== null && Au(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function vi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return mn = qn(mn, n, r, l, o, c), !0;
      case "dragenter":
        return Qr = qn(Qr, n, r, l, o, c), !0;
      case "mouseover":
        return kr = qn(kr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return pl.set(d, qn(pl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rn.set(d, qn(Rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = La(n.target);
    if (r !== null) {
      var l = Ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Xe(l), r !== null) {
            n.blockedOn = r, ju(n.priority, function() {
              gt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Li(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else return r = us(l), r !== null && Au(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function vl(n, r, l) {
    Li(n) && l.delete(r);
  }
  function Js() {
    Qe = !1, mn !== null && Li(mn) && (mn = null), Qr !== null && Li(Qr) && (Qr = null), kr !== null && Li(kr) && (kr = null), pl.forEach(vl), Rn.forEach(vl);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Qe || (Qe = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Js)));
  }
  function hl(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < Ql.length) {
      Da(Ql[0], n);
      for (var l = 1; l < Ql.length; l++) {
        var o = Ql[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (mn !== null && Da(mn, n), Qr !== null && Da(Qr, n), kr !== null && Da(kr, n), pl.forEach(r), Rn.forEach(r), l = 0; l < Ft.length; l++) o = Ft[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ft.length && (l = Ft[0], l.blockedOn === null); ) Zs(l), l.blockedOn === null && Ft.shift();
  }
  var Mi = pt.ReactCurrentBatchConfig, ka = !0;
  function Hu(n, r, l, o) {
    var c = _t, d = Mi.transition;
    Mi.transition = null;
    try {
      _t = 1, yl(n, r, l, o);
    } finally {
      _t = c, Mi.transition = d;
    }
  }
  function ml(n, r, l, o) {
    var c = _t, d = Mi.transition;
    Mi.transition = null;
    try {
      _t = 4, yl(n, r, l, o);
    } finally {
      _t = c, Mi.transition = d;
    }
  }
  function yl(n, r, l, o) {
    if (ka) {
      var c = Vu(n, r, l, o);
      if (c === null) oc(n, r, o, Wl, l), Wr(n, o);
      else if (vi(c, n, r, l, o)) o.stopPropagation();
      else if (Wr(n, o), r & 4 && -1 < Ks.indexOf(n)) {
        for (; c !== null; ) {
          var d = us(c);
          if (d !== null && Il(d), d = Vu(n, r, l, o), d === null && oc(n, r, o, Wl, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else oc(n, r, o, null, l);
    }
  }
  var Wl = null;
  function Vu(n, r, l, o) {
    if (Wl = null, n = Pt(o), n = La(n), n !== null) if (r = Ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Xe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Wl = n, null;
  }
  function Wo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($o()) {
          case Za:
            return 1;
          case ot:
            return 4;
          case di:
          case ul:
            return 16;
          case Lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function A(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function G() {
    return !0;
  }
  function Ue() {
    return !1;
  }
  function re(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? G : Ue, this.isPropagationStopped = Ue, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = G);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = G);
    }, persist: function() {
    }, isPersistent: G }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = re(Me), xt = ne({}, Me, { view: 0, detail: 0 }), Qt = re(xt), Bt, Wt, Kt, St = ne({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Kt && (Kt && n.type === "mousemove" ? (Bt = n.screenX - Kt.screenX, Wt = n.screenY - Kt.screenY) : Wt = Bt = 0, Kt = n), Bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Ni = re(St), Pu = ne({}, St, { dataTransfer: 0 }), Go = re(Pu), Bf = ne({}, xt, { relatedTarget: 0 }), ti = re(Bf), qo = ne({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xo = re(qo), $f = ne({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hm = re($f), Vm = ne({}, Me, { data: 0 }), Yf = re(Vm), If = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ip = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Qp[n]) ? !!r[n] : !1;
  }
  function Qf() {
    return Wp;
  }
  var zi = ne({}, xt, { key: function(n) {
    if (n.key) {
      var r = If[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = A(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ip[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qf, charCode: function(n) {
    return n.type === "keypress" ? A(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? A(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pm = re(zi), Wf = ne({}, St, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = re(Wf), Gf = ne({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qf }), Bm = re(Gf), tc = ne({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gp = re(tc), Gr = ne({}, St, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ui = re(Gr), Un = [9, 13, 27, 32], ni = fn && "CompositionEvent" in window, Gl = null;
  fn && "documentMode" in document && (Gl = document.documentMode);
  var nc = fn && "TextEvent" in window && !Gl, qp = fn && (!ni || Gl && 8 < Gl && 11 >= Gl), Bu = " ", Xp = !1;
  function Kp(n, r) {
    switch (n) {
      case "keyup":
        return Un.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $u = !1;
  function $m(n, r) {
    switch (n) {
      case "compositionend":
        return rc(r);
      case "keypress":
        return r.which !== 32 ? null : (Xp = !0, Bu);
      case "textInput":
        return n = r.data, n === Bu && Xp ? null : n;
      default:
        return null;
    }
  }
  function Ym(n, r) {
    if ($u) return n === "compositionend" || !ni && Kp(n, r) ? (n = N(), C = h = ei = null, $u = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Jp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zp[n.type] : r === "textarea";
  }
  function ev(n, r, l, o) {
    xa(o), r = as(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ko = null, Yu = null;
  function Iu(n) {
    uc(n, 0);
  }
  function Qu(n) {
    var r = Gu(n);
    if (Vr(r)) return n;
  }
  function tv(n, r) {
    if (n === "change") return r;
  }
  var qf = !1;
  if (fn) {
    var Xf;
    if (fn) {
      var Kf = "oninput" in document;
      if (!Kf) {
        var nv = document.createElement("div");
        nv.setAttribute("oninput", "return;"), Kf = typeof nv.oninput == "function";
      }
      Xf = Kf;
    } else Xf = !1;
    qf = Xf && (!document.documentMode || 9 < document.documentMode);
  }
  function rv() {
    Ko && (Ko.detachEvent("onpropertychange", av), Yu = Ko = null);
  }
  function av(n) {
    if (n.propertyName === "value" && Qu(Yu)) {
      var r = [];
      ev(r, Yu, n, Pt(n)), ll(Iu, r);
    }
  }
  function Im(n, r, l) {
    n === "focusin" ? (rv(), Ko = r, Yu = l, Ko.attachEvent("onpropertychange", av)) : n === "focusout" && rv();
  }
  function Qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Qu(Yu);
  }
  function Wm(n, r) {
    if (n === "click") return Qu(r);
  }
  function iv(n, r) {
    if (n === "input" || n === "change") return Qu(r);
  }
  function Gm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Oa = typeof Object.is == "function" ? Object.is : Gm;
  function Zo(n, r) {
    if (Oa(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ke.call(r, c) || !Oa(n[c], r[c])) return !1;
    }
    return !0;
  }
  function lv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function uv(n, r) {
    var l = lv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = lv(l);
    }
  }
  function ov(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ov(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ac() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = pn(n.document);
    }
    return r;
  }
  function Ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ic(n) {
    var r = ac(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && ov(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ai(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = uv(l, d);
          var m = uv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var sv = fn && "documentMode" in document && 11 >= document.documentMode, ri = null, Zf = null, Jo = null, Jf = !1;
  function cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || ri == null || ri !== pn(o) || (o = ri, "selectionStart" in o && Ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = as(Zf, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ri)));
  }
  function lc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ql = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, ed = {}, td = {};
  fn && (td = document.createElement("div").style, "AnimationEvent" in window || (delete ql.animationend.animation, delete ql.animationiteration.animation, delete ql.animationstart.animation), "TransitionEvent" in window || delete ql.transitionend.transition);
  function Xn(n) {
    if (ed[n]) return ed[n];
    if (!ql[n]) return n;
    var r = ql[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in td) return ed[n] = r[l];
    return n;
  }
  var nd = Xn("animationend"), fv = Xn("animationiteration"), dv = Xn("animationstart"), pv = Xn("transitionend"), vv = /* @__PURE__ */ new Map(), hv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fi(n, r) {
    vv.set(n, r), ft(r, [n]);
  }
  for (var es = 0; es < hv.length; es++) {
    var Xl = hv[es], qm = Xl.toLowerCase(), ts = Xl[0].toUpperCase() + Xl.slice(1);
    Fi(qm, "on" + ts);
  }
  Fi(nd, "onAnimationEnd"), Fi(fv, "onAnimationIteration"), Fi(dv, "onAnimationStart"), Fi("dblclick", "onDoubleClick"), Fi("focusin", "onFocus"), Fi("focusout", "onBlur"), Fi(pv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
  function mv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, je(o, r, void 0, n), n.currentTarget = null;
  }
  function uc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mv(c, E, z), d = T;
        }
      }
    }
    if (Y) throw n = J, Y = !1, J = null, n;
  }
  function Gt(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (yv(r, n, 2, !1), l.add(o));
  }
  function gl(n, r, l) {
    var o = 0;
    r && (o |= 4), yv(l, n, o, r);
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function Wu(n) {
    if (!n[ji]) {
      n[ji] = !0, ln.forEach(function(l) {
        l !== "selectionchange" && (Xm.has(l) || gl(l, !1, n), gl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ji] || (r[ji] = !0, gl("selectionchange", !1, r));
    }
  }
  function yv(n, r, l, o) {
    switch (Wo(r)) {
      case 1:
        var c = Hu;
        break;
      case 4:
        c = ml;
        break;
      default:
        c = yl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ci || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function oc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = La(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    ll(function() {
      var z = d, I = Pt(l), Q = [];
      e: {
        var $ = vv.get(n);
        if ($ !== void 0) {
          var oe = st, he = n;
          switch (n) {
            case "keypress":
              if (A(l) === 0) break e;
            case "keydown":
            case "keyup":
              oe = Pm;
              break;
            case "focusin":
              he = "focus", oe = ti;
              break;
            case "focusout":
              he = "blur", oe = ti;
              break;
            case "beforeblur":
            case "afterblur":
              oe = ti;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = Ni;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Bm;
              break;
            case nd:
            case fv:
            case dv:
              oe = Xo;
              break;
            case pv:
              oe = Gp;
              break;
            case "scroll":
              oe = Qt;
              break;
            case "wheel":
              oe = Ui;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = ec;
          }
          var ge = (r & 4) !== 0, Mn = !ge && n === "scroll", D = ge ? $ !== null ? $ + "Capture" : null : $;
          ge = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var q = L.stateNode;
            if (L.tag === 5 && q !== null && (L = q, D !== null && (q = da(x, D), q != null && ge.push(rs(x, q, L)))), Mn) break;
            x = x.return;
          }
          0 < ge.length && ($ = new oe($, he, null, l, I), Q.push({ event: $, listeners: ge }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", $ && l !== gr && (he = l.relatedTarget || l.fromElement) && (La(he) || he[Hi])) break e;
          if ((oe || $) && ($ = I.window === I ? I : ($ = I.ownerDocument) ? $.defaultView || $.parentWindow : window, oe ? (he = l.relatedTarget || l.toElement, oe = z, he = he ? La(he) : null, he !== null && (Mn = Ie(he), he !== Mn || he.tag !== 5 && he.tag !== 6) && (he = null)) : (oe = null, he = z), oe !== he)) {
            if (ge = Ni, q = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (ge = ec, q = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Mn = oe == null ? $ : Gu(oe), L = he == null ? $ : Gu(he), $ = new ge(q, x + "leave", oe, l, I), $.target = Mn, $.relatedTarget = L, q = null, La(I) === z && (ge = new ge(D, x + "enter", he, l, I), ge.target = L, ge.relatedTarget = Mn, q = ge), Mn = q, oe && he) t: {
              for (ge = oe, D = he, x = 0, L = ge; L; L = Kl(L)) x++;
              for (L = 0, q = D; q; q = Kl(q)) L++;
              for (; 0 < x - L; ) ge = Kl(ge), x--;
              for (; 0 < L - x; ) D = Kl(D), L--;
              for (; x--; ) {
                if (ge === D || D !== null && ge === D.alternate) break t;
                ge = Kl(ge), D = Kl(D);
              }
              ge = null;
            }
            else ge = null;
            oe !== null && rd(Q, $, oe, ge, !1), he !== null && Mn !== null && rd(Q, Mn, he, ge, !0);
          }
        }
        e: {
          if ($ = z ? Gu(z) : window, oe = $.nodeName && $.nodeName.toLowerCase(), oe === "select" || oe === "input" && $.type === "file") var Ce = tv;
          else if (Jp($)) if (qf) Ce = iv;
          else {
            Ce = Qm;
            var Ae = Im;
          }
          else (oe = $.nodeName) && oe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Ce = Wm);
          if (Ce && (Ce = Ce(n, z))) {
            ev(Q, Ce, l, I);
            break e;
          }
          Ae && Ae(n, $, z), n === "focusout" && (Ae = $._wrapperState) && Ae.controlled && $.type === "number" && Br($, "number", $.value);
        }
        switch (Ae = z ? Gu(z) : window, n) {
          case "focusin":
            (Jp(Ae) || Ae.contentEditable === "true") && (ri = Ae, Zf = z, Jo = null);
            break;
          case "focusout":
            Jo = Zf = ri = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, cv(Q, l, I);
            break;
          case "selectionchange":
            if (sv) break;
          case "keydown":
          case "keyup":
            cv(Q, l, I);
        }
        var me;
        if (ni) e: {
          switch (n) {
            case "compositionstart":
              var Fe = "onCompositionStart";
              break e;
            case "compositionend":
              Fe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Fe = "onCompositionUpdate";
              break e;
          }
          Fe = void 0;
        }
        else $u ? Kp(n, l) && (Fe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Fe = "onCompositionStart");
        Fe && (qp && l.locale !== "ko" && ($u || Fe !== "onCompositionStart" ? Fe === "onCompositionEnd" && $u && (me = N()) : (ei = I, h = "value" in ei ? ei.value : ei.textContent, $u = !0)), Ae = as(z, Fe), 0 < Ae.length && (Fe = new Yf(Fe, n, null, l, I), Q.push({ event: Fe, listeners: Ae }), me ? Fe.data = me : (me = rc(l), me !== null && (Fe.data = me)))), (me = nc ? $m(n, l) : Ym(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && (I = new Yf("onBeforeInput", "beforeinput", null, l, I), Q.push({ event: I, listeners: z }), I.data = me));
      }
      uc(Q, r);
    });
  }
  function rs(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = da(n, l), d != null && o.unshift(rs(n, d, c)), d = da(n, r), d != null && o.push(rs(n, d, c))), n = n.return;
    }
    return o;
  }
  function Kl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = da(l, d), T != null && m.unshift(rs(l, T, E))) : c || (T = da(l, d), T != null && m.push(rs(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ad = /\r\n?/g, Km = /\u0000|\uFFFD/g;
  function id(n) {
    return (typeof n == "string" ? n : "" + n).replace(ad, `
`).replace(Km, "");
  }
  function sc(n, r, l) {
    if (r = id(r), id(n) !== r && l) throw Error(F(425));
  }
  function cc() {
  }
  var ld = null, Zl = null;
  function is(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Jl = typeof setTimeout == "function" ? setTimeout : void 0, gv = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(n) {
    return ud.resolve(null).then(n).catch(Zm);
  } : Jl;
  function Zm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Sl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), hl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    hl(r);
  }
  function ai(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function ls(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var El = Math.random().toString(36).slice(2), hi = "__reactFiber$" + El, eu = "__reactProps$" + El, Hi = "__reactContainer$" + El, sd = "__reactEvents$" + El, Jm = "__reactListeners$" + El, cd = "__reactHandles$" + El;
  function La(n) {
    var r = n[hi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Hi] || l[hi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = ls(n); n !== null; ) {
          if (l = n[hi]) return l;
          n = ls(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function us(n) {
    return n = n[hi] || n[Hi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Gu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(F(33));
  }
  function De(n) {
    return n[eu] || null;
  }
  var Cl = [], tn = -1;
  function Je(n) {
    return { current: n };
  }
  function Mt(n) {
    0 > tn || (n.current = Cl[tn], Cl[tn] = null, tn--);
  }
  function jt(n, r) {
    tn++, Cl[tn] = n.current, n.current = r;
  }
  var mi = {}, $e = Je(mi), Tn = Je(!1), qr = mi;
  function Ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function on(n) {
    return n = n.childContextTypes, n != null;
  }
  function Na() {
    Mt(Tn), Mt($e);
  }
  function Rl(n, r, l) {
    if ($e.current !== mi) throw Error(F(168));
    jt($e, r), jt(Tn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(F(108, yt(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mi, qr = $e.current, jt($e, n), jt(Tn, Tn.current), !0;
  }
  function Sv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(F(169));
    l ? (n = os(n, r, qr), o.__reactInternalMemoizedMergedChildContext = n, Mt(Tn), Mt($e), jt($e, n)) : Mt(Tn), jt(Tn, l);
  }
  var va = null, Kn = !1, ss = !1;
  function fd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function dd(n) {
    Kn = !0, fd(n);
  }
  function Xr() {
    if (!ss && va !== null) {
      ss = !0;
      var n = 0, r = _t;
      try {
        var l = va;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Kn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), ba(Za, Xr), c;
      } finally {
        _t = r, ss = !1;
      }
    }
    return null;
  }
  var Tl = [], Kr = 0, tu = null, qu = 0, Zr = [], Sr = 0, za = null, ar = 1, Vi = "";
  function ha(n, r) {
    Tl[Kr++] = qu, Tl[Kr++] = tu, tu = n, qu = r;
  }
  function pd(n, r, l) {
    Zr[Sr++] = ar, Zr[Sr++] = Vi, Zr[Sr++] = za, za = n;
    var o = ar;
    n = Vi;
    var c = 32 - _r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - _r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, ar = 1 << 32 - _r(r) + c | l << c | o, Vi = d + n;
    } else ar = 1 << d | l << c | o, Vi = n;
  }
  function dc(n) {
    n.return !== null && (ha(n, 1), pd(n, 1, 0));
  }
  function vd(n) {
    for (; n === tu; ) tu = Tl[--Kr], Tl[Kr] = null, qu = Tl[--Kr], Tl[Kr] = null;
    for (; n === za; ) za = Zr[--Sr], Zr[Sr] = null, Vi = Zr[--Sr], Zr[Sr] = null, ar = Zr[--Sr], Zr[Sr] = null;
  }
  var ma = null, Jr = null, nn = !1, Ua = null;
  function hd(n, r) {
    var l = $a(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Ev(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, Jr = ai(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = za !== null ? { id: ar, overflow: Vi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $a(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vc(n) {
    if (nn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!Ev(n, r)) {
          if (pc(n)) throw Error(F(418));
          r = ai(l.nextSibling);
          var o = ma;
          r && Ev(n, r) ? hd(o, l) : (n.flags = n.flags & -4097 | 2, nn = !1, ma = n);
        }
      } else {
        if (pc(n)) throw Error(F(418));
        n.flags = n.flags & -4097 | 2, nn = !1, ma = n;
      }
    }
  }
  function Cv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ma = n;
  }
  function hc(n) {
    if (n !== ma) return !1;
    if (!nn) return Cv(n), nn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !is(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (pc(n)) throw Rv(), Error(F(418));
      for (; r; ) hd(n, r), r = ai(r.nextSibling);
    }
    if (Cv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(F(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = ai(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = ma ? ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rv() {
    for (var n = Jr; n; ) n = ai(n.nextSibling);
  }
  function yn() {
    Jr = ma = null, nn = !1;
  }
  function md(n) {
    Ua === null ? Ua = [n] : Ua.push(n);
  }
  var mc = pt.ReactCurrentBatchConfig;
  function nu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(F(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(F(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(F(284));
      if (!l._owner) throw Error(F(290, n));
    }
    return n;
  }
  function yi(n, r) {
    throw n = Object.prototype.toString.call(r), Error(F(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Tv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yc(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Ll(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, q) {
      return x === null || x.tag !== 6 ? (x = af(L, D.mode, q), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, q) {
      var Ce = L.type;
      return Ce === He ? I(D, x, L.props.children, q, L.key) : x !== null && (x.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === wt && Tv(Ce) === x.type) ? (q = c(x, L.props), q.ref = nu(D, x, L), q.return = D, q) : (q = nf(L.type, L.key, L.props, null, D.mode, q), q.ref = nu(D, x, L), q.return = D, q);
    }
    function z(D, x, L, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = _s(L, D.mode, q), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function I(D, x, L, q, Ce) {
      return x === null || x.tag !== 7 ? (x = yu(L, D.mode, q, Ce), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = af("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case _e:
            return L = nf(x.type, x.key, x.props, null, D.mode, L), L.ref = nu(D, null, x), L.return = D, L;
          case lt:
            return x = _s(x, D.mode, L), x.return = D, x;
          case wt:
            var q = x._init;
            return Q(D, q(x._payload), L);
        }
        if (Wn(x) || we(x)) return x = yu(x, D.mode, L, null), x.return = D, x;
        yi(D, x);
      }
      return null;
    }
    function $(D, x, L, q) {
      var Ce = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Ce !== null ? null : E(D, x, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            return L.key === Ce ? T(D, x, L, q) : null;
          case lt:
            return L.key === Ce ? z(D, x, L, q) : null;
          case wt:
            return Ce = L._init, $(
              D,
              x,
              Ce(L._payload),
              q
            );
        }
        if (Wn(L) || we(L)) return Ce !== null ? null : I(D, x, L, q, null);
        yi(D, L);
      }
      return null;
    }
    function oe(D, x, L, q, Ce) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return D = D.get(L) || null, E(x, D, "" + q, Ce);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case _e:
            return D = D.get(q.key === null ? L : q.key) || null, T(x, D, q, Ce);
          case lt:
            return D = D.get(q.key === null ? L : q.key) || null, z(x, D, q, Ce);
          case wt:
            var Ae = q._init;
            return oe(D, x, L, Ae(q._payload), Ce);
        }
        if (Wn(q) || we(q)) return D = D.get(L) || null, I(x, D, q, Ce, null);
        yi(x, q);
      }
      return null;
    }
    function he(D, x, L, q) {
      for (var Ce = null, Ae = null, me = x, Fe = x = 0, Yn = null; me !== null && Fe < L.length; Fe++) {
        me.index > Fe ? (Yn = me, me = null) : Yn = me.sibling;
        var Dt = $(D, me, L[Fe], q);
        if (Dt === null) {
          me === null && (me = Yn);
          break;
        }
        n && me && Dt.alternate === null && r(D, me), x = d(Dt, x, Fe), Ae === null ? Ce = Dt : Ae.sibling = Dt, Ae = Dt, me = Yn;
      }
      if (Fe === L.length) return l(D, me), nn && ha(D, Fe), Ce;
      if (me === null) {
        for (; Fe < L.length; Fe++) me = Q(D, L[Fe], q), me !== null && (x = d(me, x, Fe), Ae === null ? Ce = me : Ae.sibling = me, Ae = me);
        return nn && ha(D, Fe), Ce;
      }
      for (me = o(D, me); Fe < L.length; Fe++) Yn = oe(me, D, Fe, L[Fe], q), Yn !== null && (n && Yn.alternate !== null && me.delete(Yn.key === null ? Fe : Yn.key), x = d(Yn, x, Fe), Ae === null ? Ce = Yn : Ae.sibling = Yn, Ae = Yn);
      return n && me.forEach(function(Wi) {
        return r(D, Wi);
      }), nn && ha(D, Fe), Ce;
    }
    function ge(D, x, L, q) {
      var Ce = we(L);
      if (typeof Ce != "function") throw Error(F(150));
      if (L = Ce.call(L), L == null) throw Error(F(151));
      for (var Ae = Ce = null, me = x, Fe = x = 0, Yn = null, Dt = L.next(); me !== null && !Dt.done; Fe++, Dt = L.next()) {
        me.index > Fe ? (Yn = me, me = null) : Yn = me.sibling;
        var Wi = $(D, me, Dt.value, q);
        if (Wi === null) {
          me === null && (me = Yn);
          break;
        }
        n && me && Wi.alternate === null && r(D, me), x = d(Wi, x, Fe), Ae === null ? Ce = Wi : Ae.sibling = Wi, Ae = Wi, me = Yn;
      }
      if (Dt.done) return l(
        D,
        me
      ), nn && ha(D, Fe), Ce;
      if (me === null) {
        for (; !Dt.done; Fe++, Dt = L.next()) Dt = Q(D, Dt.value, q), Dt !== null && (x = d(Dt, x, Fe), Ae === null ? Ce = Dt : Ae.sibling = Dt, Ae = Dt);
        return nn && ha(D, Fe), Ce;
      }
      for (me = o(D, me); !Dt.done; Fe++, Dt = L.next()) Dt = oe(me, D, Fe, Dt.value, q), Dt !== null && (n && Dt.alternate !== null && me.delete(Dt.key === null ? Fe : Dt.key), x = d(Dt, x, Fe), Ae === null ? Ce = Dt : Ae.sibling = Dt, Ae = Dt);
      return n && me.forEach(function(yy) {
        return r(D, yy);
      }), nn && ha(D, Fe), Ce;
    }
    function Mn(D, x, L, q) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _e:
            e: {
              for (var Ce = L.key, Ae = x; Ae !== null; ) {
                if (Ae.key === Ce) {
                  if (Ce = L.type, Ce === He) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), x = c(Ae, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ae.elementType === Ce || typeof Ce == "object" && Ce !== null && Ce.$$typeof === wt && Tv(Ce) === Ae.type) {
                    l(D, Ae.sibling), x = c(Ae, L.props), x.ref = nu(D, Ae, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else r(D, Ae);
                Ae = Ae.sibling;
              }
              L.type === He ? (x = yu(L.props.children, D.mode, q, L.key), x.return = D, D = x) : (q = nf(L.type, L.key, L.props, null, D.mode, q), q.ref = nu(D, x, L), q.return = D, D = q);
            }
            return m(D);
          case lt:
            e: {
              for (Ae = L.key; x !== null; ) {
                if (x.key === Ae) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = _s(L, D.mode, q), x.return = D, D = x;
            }
            return m(D);
          case wt:
            return Ae = L._init, Mn(D, x, Ae(L._payload), q);
        }
        if (Wn(L)) return he(D, x, L, q);
        if (we(L)) return ge(D, x, L, q);
        yi(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = af(L, D.mode, q), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Mn;
  }
  var Xu = yc(!0), wv = yc(!1), Pi = Je(null), Vn = null, ee = null, Aa = null;
  function ya() {
    Aa = ee = Vn = null;
  }
  function yd(n) {
    var r = Pi.current;
    Mt(Pi), n._currentValue = r;
  }
  function gd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Ku(n, r) {
    Vn = n, Aa = ee = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (na = !0), n.firstContext = null);
  }
  function Fa(n) {
    var r = n._currentValue;
    if (Aa !== n) if (n = { context: n, memoizedValue: r, next: null }, ee === null) {
      if (Vn === null) throw Error(F(308));
      ee = n, Vn.dependencies = { lanes: 0, firstContext: n };
    } else ee = ee.next = n;
    return r;
  }
  var ru = null;
  function An(n) {
    ru === null ? ru = [n] : ru.push(n);
  }
  function xv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, An(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Bi(n, o);
  }
  function Bi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wl = !1;
  function gc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Zu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ea(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function xl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ht & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Bi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, An(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Bi(n, l);
  }
  function Sc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  function bv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ec(n, r, l, o) {
    var c = n.updateQueue;
    wl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var I = n.alternate;
      I !== null && (I = I.updateQueue, E = I.lastBaseUpdate, E !== m && (E === null ? I.firstBaseUpdate = z : E.next = z, I.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Q = c.baseState;
      m = 0, I = z = T = null, E = d;
      do {
        var $ = E.lane, oe = E.eventTime;
        if ((o & $) === $) {
          I !== null && (I = I.next = {
            eventTime: oe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var he = n, ge = E;
            switch ($ = r, oe = l, ge.tag) {
              case 1:
                if (he = ge.payload, typeof he == "function") {
                  Q = he.call(oe, Q, $);
                  break e;
                }
                Q = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = ge.payload, $ = typeof he == "function" ? he.call(oe, Q, $) : he, $ == null) break e;
                Q = ne({}, Q, $);
                break e;
              case 2:
                wl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else oe = { eventTime: oe, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, I === null ? (z = I = oe, T = Q) : I = I.next = oe, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (I === null && (T = Q), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = I, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      pu |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function _v(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(F(191, c));
        c.call(o);
      }
    }
  }
  var cs = {}, ii = Je(cs), Ju = Je(cs), fs = Je(cs);
  function au(n) {
    if (n === cs) throw Error(F(174));
    return n;
  }
  function Sd(n, r) {
    switch (jt(fs, r), jt(Ju, n), jt(ii, cs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Mt(ii), jt(ii, r);
  }
  function eo() {
    Mt(ii), Mt(Ju), Mt(fs);
  }
  function Dv(n) {
    au(fs.current);
    var r = au(ii.current), l = vn(r, n.type);
    r !== l && (jt(Ju, n), jt(ii, l));
  }
  function Ed(n) {
    Ju.current === n && (Mt(ii), Mt(Ju));
  }
  var sn = Je(0);
  function Cc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Rc = [];
  function Cd() {
    for (var n = 0; n < Rc.length; n++) Rc[n]._workInProgressVersionPrimary = null;
    Rc.length = 0;
  }
  var Tc = pt.ReactCurrentDispatcher, ds = pt.ReactCurrentBatchConfig, Ee = 0, Re = null, Ye = null, ct = null, ga = !1, to = !1, ps = 0, ey = 0;
  function Er() {
    throw Error(F(321));
  }
  function vs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Oa(n[l], r[l])) return !1;
    return !0;
  }
  function B(n, r, l, o, c, d) {
    if (Ee = d, Re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? ty : Zt, n = l(o, c), to) {
      d = 0;
      do {
        if (to = !1, ps = 0, 25 <= d) throw Error(F(301));
        d += 1, ct = Ye = null, r.updateQueue = null, Tc.current = jc, n = l(o, c);
      } while (to);
    }
    if (Tc.current = Cr, r = Ye !== null && Ye.next !== null, Ee = 0, ct = Ye = Re = null, ga = !1, r) throw Error(F(300));
    return n;
  }
  function Fn() {
    var n = ps !== 0;
    return ps = 0, n;
  }
  function be() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ct === null ? Re.memoizedState = ct = n : ct = ct.next = n, ct;
  }
  function ir() {
    if (Ye === null) {
      var n = Re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ye.next;
    var r = ct === null ? Re.memoizedState : ct.next;
    if (r !== null) ct = r, Ye = n;
    else {
      if (n === null) throw Error(F(310));
      Ye = n, n = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, ct === null ? Re.memoizedState = ct = n : ct = ct.next = n;
    }
    return ct;
  }
  function Sa(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function $i(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = Ye, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var I = z.lane;
        if ((Ee & I) === I) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Q = {
            lane: I,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, Re.lanes |= I, pu |= I;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Oa(o, r.memoizedState) || (na = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Re.lanes |= d, pu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ja(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(F(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Oa(d, r.memoizedState) || (na = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function no() {
  }
  function iu(n, r) {
    var l = Re, o = ir(), c = r(), d = !Oa(o.memoizedState, c);
    if (d && (o.memoizedState = c, na = !0), o = o.queue, hs(xc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ct !== null && ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, lu(9, wc.bind(null, l, o, c, r), void 0, null), xn === null) throw Error(F(349));
      Ee & 30 || ro(l, r, c);
    }
    return c;
  }
  function ro(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Re.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function wc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, bc(r) && _c(n);
  }
  function xc(n, r, l) {
    return l(function() {
      bc(r) && _c(n);
    });
  }
  function bc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Oa(n, l);
    } catch {
      return !0;
    }
  }
  function _c(n) {
    var r = Bi(n, 1);
    r !== null && gn(r, n, 1, -1);
  }
  function Dc(n) {
    var r = be();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sa, lastRenderedState: n }, r.queue = n, n = n.dispatch = ms.bind(null, Re, n), [r.memoizedState, n];
  }
  function lu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function kc() {
    return ir().memoizedState;
  }
  function ao(n, r, l, o) {
    var c = be();
    Re.flags |= n, c.memoizedState = lu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function io(n, r, l, o) {
    var c = ir();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ye !== null) {
      var m = Ye.memoizedState;
      if (d = m.destroy, o !== null && vs(o, m.deps)) {
        c.memoizedState = lu(r, l, d, o);
        return;
      }
    }
    Re.flags |= n, c.memoizedState = lu(1 | r, l, d, o);
  }
  function Oc(n, r) {
    return ao(8390656, 8, n, r);
  }
  function hs(n, r) {
    return io(2048, 8, n, r);
  }
  function Lc(n, r) {
    return io(4, 2, n, r);
  }
  function Mc(n, r) {
    return io(4, 4, n, r);
  }
  function Nc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function zc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, io(4, 4, Nc.bind(null, r, n), l);
  }
  function lo() {
  }
  function uu(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && vs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Uc(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && vs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ac(n, r, l) {
    return Ee & 21 ? (Oa(l, r) || (l = Nu(), Re.lanes |= l, pu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, na = !0), n.memoizedState = l);
  }
  function Rd(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ds.transition;
    ds.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, ds.transition = o;
    }
  }
  function Fc() {
    return ir().memoizedState;
  }
  function kv(n, r, l) {
    var o = Qi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Td(n)) uo(r, l);
    else if (l = xv(n, r, l, o), l !== null) {
      var c = er();
      gn(l, n, o, c), bl(l, r, o);
    }
  }
  function ms(n, r, l) {
    var o = Qi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Td(n)) uo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Oa(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, An(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = xv(n, r, c, o), l !== null && (c = er(), gn(l, n, o, c), bl(l, r, o));
    }
  }
  function Td(n) {
    var r = n.alternate;
    return n === Re || r !== null && r === Re;
  }
  function uo(n, r) {
    to = ga = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function bl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  var Cr = { readContext: Fa, useCallback: Er, useContext: Er, useEffect: Er, useImperativeHandle: Er, useInsertionEffect: Er, useLayoutEffect: Er, useMemo: Er, useReducer: Er, useRef: Er, useState: Er, useDebugValue: Er, useDeferredValue: Er, useTransition: Er, useMutableSource: Er, useSyncExternalStore: Er, useId: Er, unstable_isNewReconciler: !1 }, ty = { readContext: Fa, useCallback: function(n, r) {
    return be().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fa, useEffect: Oc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ao(
      4194308,
      4,
      Nc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ao(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ao(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = be();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = be();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = kv.bind(null, Re, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = be();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Dc, useDebugValue: lo, useDeferredValue: function(n) {
    return be().memoizedState = n;
  }, useTransition: function() {
    var n = Dc(!1), r = n[0];
    return n = Rd.bind(null, n[1]), be().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Re, c = be();
    if (nn) {
      if (l === void 0) throw Error(F(407));
      l = l();
    } else {
      if (l = r(), xn === null) throw Error(F(349));
      Ee & 30 || ro(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Oc(xc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, lu(9, wc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = be(), r = xn.identifierPrefix;
    if (nn) {
      var l = Vi, o = ar;
      l = (o & ~(1 << 32 - _r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ps++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ey++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zt = {
    readContext: Fa,
    useCallback: uu,
    useContext: Fa,
    useEffect: hs,
    useImperativeHandle: zc,
    useInsertionEffect: Lc,
    useLayoutEffect: Mc,
    useMemo: Uc,
    useReducer: $i,
    useRef: kc,
    useState: function() {
      return $i(Sa);
    },
    useDebugValue: lo,
    useDeferredValue: function(n) {
      var r = ir();
      return Ac(r, Ye.memoizedState, n);
    },
    useTransition: function() {
      var n = $i(Sa)[0], r = ir().memoizedState;
      return [n, r];
    },
    useMutableSource: no,
    useSyncExternalStore: iu,
    useId: Fc,
    unstable_isNewReconciler: !1
  }, jc = { readContext: Fa, useCallback: uu, useContext: Fa, useEffect: hs, useImperativeHandle: zc, useInsertionEffect: Lc, useLayoutEffect: Mc, useMemo: Uc, useReducer: ja, useRef: kc, useState: function() {
    return ja(Sa);
  }, useDebugValue: lo, useDeferredValue: function(n) {
    var r = ir();
    return Ye === null ? r.memoizedState = n : Ac(r, Ye.memoizedState, n);
  }, useTransition: function() {
    var n = ja(Sa)[0], r = ir().memoizedState;
    return [n, r];
  }, useMutableSource: no, useSyncExternalStore: iu, useId: Fc, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function ou(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var su = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Qi(n), d = ea(o, c);
    d.payload = r, l != null && (d.callback = l), r = xl(n, d, c), r !== null && (gn(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Qi(n), d = ea(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = xl(n, d, c), r !== null && (gn(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = er(), o = Qi(n), c = ea(l, o);
    c.tag = 2, r != null && (c.callback = r), r = xl(n, c, o), r !== null && (gn(r, n, o, l), Sc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = mi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Fa(d) : (c = on(r) ? qr : $e.current, o = r.contextTypes, d = (o = o != null) ? Ma(n, c) : mi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = su, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && su.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, gc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Fa(d) : (d = on(r) ? qr : $e.current, c.context = Ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (ou(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && su.enqueueReplaceState(c, c.state, null), Ec(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += tt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function xd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function ys(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Nv = typeof WeakMap == "function" ? WeakMap : Map;
  function zv(n, r, l) {
    l = ea(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Xc || (Xc = !0, zd = o), ys(n, r);
    }, l;
  }
  function Uv(n, r, l) {
    l = ea(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        ys(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      ys(n, r), typeof o != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function gs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Nv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = fy.bind(null, n, r, l), r.then(n, n));
  }
  function Av(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function bd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ea(-1, 1), r.tag = 2, xl(l, r, 1))), l.lanes |= 1), n);
  }
  var Fv = pt.ReactCurrentOwner, na = !1;
  function On(n, r, l, o) {
    r.child = n === null ? wv(r, null, l, o) : Xu(r, n.child, l, o);
  }
  function oo(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Ku(r, c), o = B(n, r, l, o, d, c), l = Fn(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (nn && l && dc(r), r.flags |= 1, On(n, r, o, c), r.child);
  }
  function Dl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Hd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Hc(n, r, d, o, c)) : (n = nf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return Ln(n, r, c);
    }
    return r.flags |= 1, n = Ll(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Hc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (na = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (na = !0);
      else return r.lanes = n.lanes, Ln(n, r, c);
    }
    return Ke(n, r, l, o, c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, jt(So, aa), aa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, jt(So, aa), aa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, jt(So, aa), aa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, jt(So, aa), aa |= o;
    return On(n, r, c, l), r.child;
  }
  function cu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ke(n, r, l, o, c) {
    var d = on(l) ? qr : $e.current;
    return d = Ma(r, d), Ku(r, c), l = B(n, r, l, o, d, c), o = Fn(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (nn && o && dc(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function Ss(n, r, l, o, c) {
    if (on(l)) {
      var d = !0;
      fc(r);
    } else d = !1;
    if (Ku(r, c), r.stateNode === null) Cs(n, r), Lv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Fa(z) : (z = on(l) ? qr : $e.current, z = Ma(r, z));
      var I = l.getDerivedStateFromProps, Q = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Mv(r, m, o, z), wl = !1;
      var $ = r.memoizedState;
      m.state = $, Ec(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Tn.current || wl ? (typeof I == "function" && (ou(r, l, I, o), T = r.memoizedState), (E = wl || Ov(r, l, E, o, $, T, z)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Zu(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ta(r.type, E), m.props = z, Q = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Fa(T) : (T = on(l) ? qr : $e.current, T = Ma(r, T));
      var oe = l.getDerivedStateFromProps;
      (I = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || $ !== T) && Mv(r, m, o, T), wl = !1, $ = r.memoizedState, m.state = $, Ec(r, o, m, c);
      var he = r.memoizedState;
      E !== Q || $ !== he || Tn.current || wl ? (typeof oe == "function" && (ou(r, l, oe, o), he = r.memoizedState), (z = wl || Ov(r, l, z, o, $, he, T) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, he, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, he, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = he), m.props = o, m.state = he, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vc(n, r, l, o, d, c);
  }
  function Vc(n, r, l, o, c, d) {
    cu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Sv(r, l, !1), Ln(n, r, d);
    o = r.stateNode, Fv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Xu(r, n.child, null, d), r.child = Xu(r, null, E, d)) : On(n, r, E, d), r.memoizedState = o.state, c && Sv(r, l, !0), r.child;
  }
  function ny(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Sd(n, r.containerInfo);
  }
  function jv(n, r, l, o, c) {
    return yn(), md(c), r.flags |= 256, On(n, r, l, o), r.child;
  }
  var Es = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Hv(n, r, l) {
    var o = r.pendingProps, c = sn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), jt(sn, c & 1), n === null)
      return vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = rf(m, o, 0, null), n = yu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = fu(l), r.memoizedState = Es, n) : Pc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return _d(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ll(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ll(E, d) : (d = yu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? fu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Es, o;
    }
    return d = n.child, n = d.sibling, o = Ll(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Pc(n, r) {
    return r = rf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Bc(n, r, l, o) {
    return o !== null && md(o), Xu(r, n.child, null, l), n = Pc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function _d(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = xd(Error(F(422))), Bc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = rf({ mode: "visible", children: o.children }, c, 0, null), d = yu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Xu(r, n.child, null, m), r.child.memoizedState = fu(m), r.memoizedState = Es, d);
    if (!(r.mode & 1)) return Bc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(F(419)), o = xd(d, o, void 0), Bc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, na || E) {
      if (o = xn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Bi(n, c), gn(o, n, c, -1));
      }
      return bs(), o = xd(Error(F(421))), Bc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = jd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Jr = ai(c.nextSibling), ma = r, nn = !0, Ua = null, n !== null && (Zr[Sr++] = ar, Zr[Sr++] = Vi, Zr[Sr++] = za, ar = n.id, Vi = n.overflow, za = r), r = Pc(r, o.children), r.flags |= 4096, r);
  }
  function Vv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), gd(n.return, r, l);
  }
  function $c(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Dd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (On(n, r, o.children, l), o = sn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Vv(n, l, r);
        else if (n.tag === 19) Vv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (jt(sn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Cc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), $c(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Cc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        $c(r, !0, l, null, d);
        break;
      case "together":
        $c(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Cs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), pu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(F(153));
    if (r.child !== null) {
      for (n = r.child, l = Ll(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ll(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Yi(n, r, l) {
    switch (r.tag) {
      case 3:
        ny(r), yn();
        break;
      case 5:
        Dv(r);
        break;
      case 1:
        on(r.type) && fc(r);
        break;
      case 4:
        Sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        jt(Pi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (jt(sn, sn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Hv(n, r, l) : (jt(sn, sn.current & 1), n = Ln(n, r, l), n !== null ? n.sibling : null);
        jt(sn, sn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Dd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), jt(sn, sn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ra(n, r, l);
    }
    return Ln(n, r, l);
  }
  var gi, so, co, Ha;
  gi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, so = function() {
  }, co = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, au(ii.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $r(n, c), o = $r(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = cc);
      }
      kn(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (En.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (En.hasOwnProperty(z) ? (T != null && z === "onScroll" && Gt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Ha = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wn(n, r) {
    if (!nn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ry(n, r, l) {
    var o = r.pendingProps;
    switch (vd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return on(r.type) && Na(), Rr(r), null;
      case 3:
        return o = r.stateNode, eo(), Mt(Tn), Mt($e), Cd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ua !== null && (Ud(Ua), Ua = null))), so(n, r), Rr(r), null;
      case 5:
        Ed(r);
        var c = au(fs.current);
        if (l = r.type, n !== null && r.stateNode != null) co(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(F(166));
            return Rr(r), null;
          }
          if (n = au(ii.current), hc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[hi] = r, o[eu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Gt("cancel", o), Gt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Gt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ns.length; c++) Gt(ns[c], o);
                break;
              case "source":
                Gt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Gt(
                  "error",
                  o
                ), Gt("load", o);
                break;
              case "details":
                Gt("toggle", o);
                break;
              case "input":
                Hn(o, d), Gt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Gt("invalid", o);
                break;
              case "textarea":
                yr(o, d), Gt("invalid", o);
            }
            kn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : En.hasOwnProperty(m) && E != null && m === "onScroll" && Gt("scroll", o);
            }
            switch (l) {
              case "input":
                hr(o), Pr(o, d, !0);
                break;
              case "textarea":
                hr(o), nr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Yr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[hi] = r, n[eu] = o, gi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = hn(l, o), l) {
                case "dialog":
                  Gt("cancel", n), Gt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Gt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ns.length; c++) Gt(ns[c], n);
                  c = o;
                  break;
                case "source":
                  Gt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Gt(
                    "error",
                    n
                  ), Gt("load", n), c = o;
                  break;
                case "details":
                  Gt("toggle", n), c = o;
                  break;
                case "input":
                  Hn(n, o), c = Qn(n, o), Gt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Gt("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = $r(n, o), Gt("invalid", n);
                  break;
                default:
                  c = o;
              }
              kn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Lt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && si(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (En.hasOwnProperty(d) ? T != null && d === "onScroll" && Gt("scroll", n) : T != null && Ge(n, d, T, m));
              }
              switch (l) {
                case "input":
                  hr(n), Pr(n, o, !1);
                  break;
                case "textarea":
                  hr(n), nr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? mr(n, !!o.multiple, d, !1) : o.defaultValue != null && mr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null) Ha(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(F(166));
          if (l = au(fs.current), au(ii.current), hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[hi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null)) switch (n.tag) {
              case 3:
                sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[hi] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (Mt(sn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (nn && Jr !== null && r.mode & 1 && !(r.flags & 128)) Rv(), yn(), r.flags |= 98560, d = !1;
          else if (d = hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(F(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(F(317));
              d[hi] = r;
            } else yn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else Ua !== null && (Ud(Ua), Ua = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || sn.current & 1 ? Bn === 0 && (Bn = 3) : bs())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return eo(), so(n, r), n === null && Wu(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return yd(r.type._context), Rr(r), null;
      case 17:
        return on(r.type) && Na(), Rr(r), null;
      case 19:
        if (Mt(sn), d = r.memoizedState, d === null) return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) wn(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Cc(n), m !== null) {
              for (r.flags |= 128, wn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return jt(sn, sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Xt() > Co && (r.flags |= 128, o = !0, wn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Cc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !nn) return Rr(r), null;
          } else 2 * Xt() - d.renderingStartTime > Co && l !== 1073741824 && (r.flags |= 128, o = !0, wn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Xt(), r.sibling = null, l = sn.current, jt(sn, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return ef(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? aa & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(F(156, r.tag));
  }
  function ay(n, r) {
    switch (vd(r), r.tag) {
      case 1:
        return on(r.type) && Na(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return eo(), Mt(Tn), Mt($e), Cd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ed(r), null;
      case 13:
        if (Mt(sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(F(340));
          yn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Mt(sn), null;
      case 4:
        return eo(), null;
      case 10:
        return yd(r.type._context), null;
      case 22:
      case 23:
        return ef(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fo = !1, lr = !1, Yc = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function po(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      bn(n, r, o);
    }
    else l.current = null;
  }
  function kd(n, r, l) {
    try {
      l();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var Ic = !1;
  function iy(n, r) {
    if (ld = ka, n = ac(), Ai(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, I = 0, Q = n, $ = null;
          t: for (; ; ) {
            for (var oe; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (oe = Q.firstChild) !== null; )
              $ = Q, Q = oe;
            for (; ; ) {
              if (Q === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++I === o && (T = m), (oe = Q.nextSibling) !== null) break;
              Q = $, $ = Q.parentNode;
            }
            Q = oe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zl = { focusedElem: n, selectionRange: l }, ka = !1, de = r; de !== null; ) if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, de = n;
    else for (; de !== null; ) {
      r = de;
      try {
        var he = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var ge = he.memoizedProps, Mn = he.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? ge : ta(r.type, ge), Mn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(F(163));
        }
      } catch (q) {
        bn(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, de = n;
        break;
      }
      de = r.return;
    }
    return he = Ic, Ic = !1, he;
  }
  function vo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && kd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Qc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Wc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Pv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Pv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[hi], delete r[eu], delete r[sd], delete r[Jm], delete r[cd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Od(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Bv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Od(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Rs(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = cc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Rs(n, r, l), n = n.sibling; n !== null; ) Rs(n, r, l), n = n.sibling;
  }
  function ho(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ho(n, r, l), n = n.sibling; n !== null; ) ho(n, r, l), n = n.sibling;
  }
  var cn = null, Zn = !1;
  function Or(n, r, l) {
    for (l = l.child; l !== null; ) mo(n, r, l), l = l.sibling;
  }
  function mo(n, r, l) {
    if (Ir && typeof Ir.onCommitFiberUnmount == "function") try {
      Ir.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        lr || po(l, r);
      case 6:
        var o = cn, c = Zn;
        cn = null, Or(n, r, l), cn = o, Zn = c, cn !== null && (Zn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : cn.removeChild(l.stateNode));
        break;
      case 18:
        cn !== null && (Zn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? Sl(n.parentNode, l) : n.nodeType === 1 && Sl(n, l), hl(n)) : Sl(cn, l.stateNode));
        break;
      case 4:
        o = cn, c = Zn, cn = l.stateNode.containerInfo, Zn = !0, Or(n, r, l), cn = o, Zn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && kd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Or(n, r, l);
        break;
      case 1:
        if (!lr && (po(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          bn(l, r, E);
        }
        Or(n, r, l);
        break;
      case 21:
        Or(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (lr = (o = lr) || l.memoizedState !== null, Or(n, r, l), lr = o) : Or(n, r, l);
        break;
      default:
        Or(n, r, l);
    }
  }
  function yo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Yc()), r.forEach(function(o) {
        var c = dy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Jn(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              cn = E.stateNode, Zn = !1;
              break e;
            case 3:
              cn = E.stateNode.containerInfo, Zn = !0;
              break e;
            case 4:
              cn = E.stateNode.containerInfo, Zn = !0;
              break e;
          }
          E = E.return;
        }
        if (cn === null) throw Error(F(160));
        mo(d, m, c), cn = null, Zn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        bn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) $v(r, n), r = r.sibling;
  }
  function $v(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jn(r, n), Si(n), o & 4) {
          try {
            vo(3, n, n.return), Qc(3, n);
          } catch (ge) {
            bn(n, n.return, ge);
          }
          try {
            vo(5, n, n.return);
          } catch (ge) {
            bn(n, n.return, ge);
          }
        }
        break;
      case 1:
        Jn(r, n), Si(n), o & 512 && l !== null && po(l, l.return);
        break;
      case 5:
        if (Jn(r, n), Si(n), o & 512 && l !== null && po(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (ge) {
            bn(n, n.return, ge);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && zn(c, d), hn(E, m);
            var z = hn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var I = T[m], Q = T[m + 1];
              I === "style" ? Lt(c, Q) : I === "dangerouslySetInnerHTML" ? si(c, Q) : I === "children" ? fa(c, Q) : Ge(c, I, Q, z);
            }
            switch (E) {
              case "input":
                Dn(c, d);
                break;
              case "textarea":
                ca(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var oe = d.value;
                oe != null ? mr(c, !!d.multiple, oe, !1) : $ !== !!d.multiple && (d.defaultValue != null ? mr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : mr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[eu] = d;
          } catch (ge) {
            bn(n, n.return, ge);
          }
        }
        break;
      case 6:
        if (Jn(r, n), Si(n), o & 4) {
          if (n.stateNode === null) throw Error(F(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ge) {
            bn(n, n.return, ge);
          }
        }
        break;
      case 3:
        if (Jn(r, n), Si(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          hl(r.containerInfo);
        } catch (ge) {
          bn(n, n.return, ge);
        }
        break;
      case 4:
        Jn(r, n), Si(n);
        break;
      case 13:
        Jn(r, n), Si(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (qc = Xt())), o & 4 && yo(n);
        break;
      case 22:
        if (I = l !== null && l.memoizedState !== null, n.mode & 1 ? (lr = (z = lr) || I, Jn(r, n), lr = z) : Jn(r, n), Si(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !I && n.mode & 1) for (de = n, I = n.child; I !== null; ) {
            for (Q = de = I; de !== null; ) {
              switch ($ = de, oe = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, $, $.return);
                  break;
                case 1:
                  po($, $.return);
                  var he = $.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, he.props = r.memoizedProps, he.state = r.memoizedState, he.componentWillUnmount();
                    } catch (ge) {
                      bn(o, l, ge);
                    }
                  }
                  break;
                case 5:
                  po($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Yv(Q);
                    continue;
                  }
              }
              oe !== null ? (oe.return = $, de = oe) : Yv(Q);
            }
            I = I.sibling;
          }
          e: for (I = null, Q = n; ; ) {
            if (Q.tag === 5) {
              if (I === null) {
                I = Q;
                try {
                  c = Q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = nt("display", m));
                } catch (ge) {
                  bn(n, n.return, ge);
                }
              }
            } else if (Q.tag === 6) {
              if (I === null) try {
                Q.stateNode.nodeValue = z ? "" : Q.memoizedProps;
              } catch (ge) {
                bn(n, n.return, ge);
              }
            } else if ((Q.tag !== 22 && Q.tag !== 23 || Q.memoizedState === null || Q === n) && Q.child !== null) {
              Q.child.return = Q, Q = Q.child;
              continue;
            }
            if (Q === n) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === n) break e;
              I === Q && (I = null), Q = Q.return;
            }
            I === Q && (I = null), Q.sibling.return = Q.return, Q = Q.sibling;
          }
        }
        break;
      case 19:
        Jn(r, n), Si(n), o & 4 && yo(n);
        break;
      case 21:
        break;
      default:
        Jn(
          r,
          n
        ), Si(n);
    }
  }
  function Si(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Od(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(F(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = Bv(n);
            ho(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Bv(n);
            Rs(n, E, m);
            break;
          default:
            throw Error(F(161));
        }
      } catch (T) {
        bn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ly(n, r, l) {
    de = n, Ld(n);
  }
  function Ld(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || fo;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || lr;
          E = fo;
          var z = lr;
          if (fo = m, (lr = T) && !z) for (de = c; de !== null; ) m = de, T = m.child, m.tag === 22 && m.memoizedState !== null ? Md(c) : T !== null ? (T.return = m, de = T) : Md(c);
          for (; d !== null; ) de = d, Ld(d), d = d.sibling;
          de = c, fo = E, lr = z;
        }
        go(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, de = d) : go(n);
    }
  }
  function go(n) {
    for (; de !== null; ) {
      var r = de;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              lr || Qc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !lr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && _v(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                _v(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var I = z.memoizedState;
                  if (I !== null) {
                    var Q = I.dehydrated;
                    Q !== null && hl(Q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
          lr || r.flags & 512 && Wc(r);
        } catch ($) {
          bn(r, r.return, $);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Yv(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Md(n) {
    for (; de !== null; ) {
      var r = de;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Qc(4, r);
            } catch (T) {
              bn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                bn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Wc(r);
            } catch (T) {
              bn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Wc(r);
            } catch (T) {
              bn(r, m, T);
            }
        }
      } catch (T) {
        bn(r, r.return, T);
      }
      if (r === n) {
        de = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, de = E;
        break;
      }
      de = r.return;
    }
  }
  var uy = Math.ceil, du = pt.ReactCurrentDispatcher, Gc = pt.ReactCurrentOwner, Va = pt.ReactCurrentBatchConfig, ht = 0, xn = null, rn = null, Pn = 0, aa = 0, So = Je(0), Bn = 0, Ts = null, pu = 0, Eo = 0, Nd = 0, kl = null, Tr = null, qc = 0, Co = 1 / 0, Ii = null, Xc = !1, zd = null, Pa = null, Ro = !1, Ba = null, Kc = 0, ws = 0, Zc = null, xs = -1, vu = 0;
  function er() {
    return ht & 6 ? Xt() : xs !== -1 ? xs : xs = Xt();
  }
  function Qi(n) {
    return n.mode & 1 ? ht & 2 && Pn !== 0 ? Pn & -Pn : mc.transition !== null ? (vu === 0 && (vu = Nu()), vu) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function gn(n, r, l, o) {
    if (50 < ws) throw ws = 0, Zc = null, Error(F(185));
    Oi(n, l, o), (!(ht & 2) || n !== xn) && (n === xn && (!(ht & 2) && (Eo |= l), Bn === 4 && Ei(n, Pn)), $n(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (Co = Xt() + 500, Kn && Xr()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    fl(n, r);
    var o = Dr(n, n === xn ? Pn : 0);
    if (o === 0) l !== null && _a(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && _a(l), r === 1) n.tag === 0 ? dd(To.bind(null, n)) : fd(To.bind(null, n)), od(function() {
        !(ht & 6) && Xr();
      }), l = null;
      else {
        switch (Uu(o)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = di;
            break;
          case 536870912:
            l = Lu;
            break;
          default:
            l = di;
        }
        l = Zv(l, Jc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Jc(n, r) {
    if (xs = -1, vu = 0, ht & 6) throw Error(F(327));
    var l = n.callbackNode;
    if (wo() && n.callbackNode !== l) return null;
    var o = Dr(n, n === xn ? Pn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = tf(n, o);
    else {
      r = o;
      var c = ht;
      ht |= 2;
      var d = Qv();
      (xn !== n || Pn !== r) && (Ii = null, Co = Xt() + 500, mu(n, r));
      do
        try {
          sy();
          break;
        } catch (E) {
          Iv(n, E);
        }
      while (!0);
      ya(), du.current = d, ht = c, rn !== null ? r = 0 : (xn = null, Pn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = dl(n), c !== 0 && (o = c, r = hu(n, c))), r === 1) throw l = Ts, mu(n, 0), Ei(n, o), $n(n, Xt()), l;
      if (r === 6) Ei(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ad(c) && (r = tf(n, o), r === 2 && (d = dl(n), d !== 0 && (o = d, r = hu(n, d))), r === 1)) throw l = Ts, mu(n, 0), Ei(n, o), $n(n, Xt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(F(345));
          case 2:
            Ol(n, Tr, Ii);
            break;
          case 3:
            if (Ei(n, o), (o & 130023424) === o && (r = qc + 500 - Xt(), 10 < r)) {
              if (Dr(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                er(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Jl(Ol.bind(null, n, Tr, Ii), r);
              break;
            }
            Ol(n, Tr, Ii);
            break;
          case 4:
            if (Ei(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - _r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Xt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Jl(Ol.bind(null, n, Tr, Ii), o);
              break;
            }
            Ol(n, Tr, Ii);
            break;
          case 5:
            Ol(n, Tr, Ii);
            break;
          default:
            throw Error(F(329));
        }
      }
    }
    return $n(n, Xt()), n.callbackNode === l ? Jc.bind(null, n) : null;
  }
  function hu(n, r) {
    var l = kl;
    return n.current.memoizedState.isDehydrated && (mu(n, r).flags |= 256), n = tf(n, r), n !== 2 && (r = Tr, Tr = l, r !== null && Ud(r)), n;
  }
  function Ud(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Ad(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Oa(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ei(n, r) {
    for (r &= ~Nd, r &= ~Eo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - _r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function To(n) {
    if (ht & 6) throw Error(F(327));
    wo();
    var r = Dr(n, 0);
    if (!(r & 1)) return $n(n, Xt()), null;
    var l = tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = dl(n);
      o !== 0 && (r = o, l = hu(n, o));
    }
    if (l === 1) throw l = Ts, mu(n, 0), Ei(n, r), $n(n, Xt()), l;
    if (l === 6) throw Error(F(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ol(n, Tr, Ii), $n(n, Xt()), null;
  }
  function Fd(n, r) {
    var l = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = l, ht === 0 && (Co = Xt() + 500, Kn && Xr());
    }
  }
  function Ci(n) {
    Ba !== null && Ba.tag === 0 && !(ht & 6) && wo();
    var r = ht;
    ht |= 1;
    var l = Va.transition, o = _t;
    try {
      if (Va.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, Va.transition = l, ht = r, !(ht & 6) && Xr();
    }
  }
  function ef() {
    aa = So.current, Mt(So);
  }
  function mu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, gv(l)), rn !== null) for (l = rn.return; l !== null; ) {
      var o = l;
      switch (vd(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Na();
          break;
        case 3:
          eo(), Mt(Tn), Mt($e), Cd();
          break;
        case 5:
          Ed(o);
          break;
        case 4:
          eo();
          break;
        case 13:
          Mt(sn);
          break;
        case 19:
          Mt(sn);
          break;
        case 10:
          yd(o.type._context);
          break;
        case 22:
        case 23:
          ef();
      }
      l = l.return;
    }
    if (xn = n, rn = n = Ll(n.current, null), Pn = aa = r, Bn = 0, Ts = null, Nd = Eo = pu = 0, Tr = kl = null, ru !== null) {
      for (r = 0; r < ru.length; r++) if (l = ru[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      ru = null;
    }
    return n;
  }
  function Iv(n, r) {
    do {
      var l = rn;
      try {
        if (ya(), Tc.current = Cr, ga) {
          for (var o = Re.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ga = !1;
        }
        if (Ee = 0, ct = Ye = Re = null, to = !1, ps = 0, Gc.current = null, l === null || l.return === null) {
          Bn = 1, Ts = r, rn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Pn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, I = E, Q = I.tag;
            if (!(I.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var $ = I.alternate;
              $ ? (I.updateQueue = $.updateQueue, I.memoizedState = $.memoizedState, I.lanes = $.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var oe = Av(m);
            if (oe !== null) {
              oe.flags &= -257, bd(oe, m, E, d, r), oe.mode & 1 && gs(d, z, r), r = oe, T = z;
              var he = r.updateQueue;
              if (he === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(T), r.updateQueue = ge;
              } else he.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                gs(d, z, r), bs();
                break e;
              }
              T = Error(F(426));
            }
          } else if (nn && E.mode & 1) {
            var Mn = Av(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), bd(Mn, m, E, d, r), md(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Bn !== 4 && (Bn = 2), kl === null ? kl = [d] : kl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = zv(d, T, r);
                bv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Pa === null || !Pa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Uv(d, E, r);
                  bv(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Gv(l);
      } catch (Ce) {
        r = Ce, rn === l && l !== null && (rn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qv() {
    var n = du.current;
    return du.current = Cr, n === null ? Cr : n;
  }
  function bs() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), xn === null || !(pu & 268435455) && !(Eo & 268435455) || Ei(xn, Pn);
  }
  function tf(n, r) {
    var l = ht;
    ht |= 2;
    var o = Qv();
    (xn !== n || Pn !== r) && (Ii = null, mu(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        Iv(n, c);
      }
    while (!0);
    if (ya(), ht = l, du.current = o, rn !== null) throw Error(F(261));
    return xn = null, Pn = 0, Bn;
  }
  function oy() {
    for (; rn !== null; ) Wv(rn);
  }
  function sy() {
    for (; rn !== null && !Gn(); ) Wv(rn);
  }
  function Wv(n) {
    var r = Kv(n.alternate, n, aa);
    n.memoizedProps = n.pendingProps, r === null ? Gv(n) : rn = r, Gc.current = null;
  }
  function Gv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ay(l, r), l !== null) {
          l.flags &= 32767, rn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, rn = null;
          return;
        }
      } else if (l = ry(l, r, aa), l !== null) {
        rn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        rn = r;
        return;
      }
      rn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Ol(n, r, l) {
    var o = _t, c = Va.transition;
    try {
      Va.transition = null, _t = 1, cy(n, r, l, o);
    } finally {
      Va.transition = c, _t = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
    do
      wo();
    while (Ba !== null);
    if (ht & 6) throw Error(F(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(F(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Pf(n, d), n === xn && (rn = xn = null, Pn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ro || (Ro = !0, Zv(di, function() {
      return wo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Va.transition, Va.transition = null;
      var m = _t;
      _t = 1;
      var E = ht;
      ht |= 4, Gc.current = null, iy(n, l), $v(l, n), ic(Zl), ka = !!ld, Zl = ld = null, n.current = l, ly(l), Yl(), ht = E, _t = m, Va.transition = d;
    } else n.current = l;
    if (Ro && (Ro = !1, Ba = n, Kc = c), d = n.pendingLanes, d === 0 && (Pa = null), Yo(l.stateNode), $n(n, Xt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Xc) throw Xc = !1, n = zd, zd = null, n;
    return Kc & 1 && n.tag !== 0 && wo(), d = n.pendingLanes, d & 1 ? n === Zc ? ws++ : (ws = 0, Zc = n) : ws = 0, Xr(), null;
  }
  function wo() {
    if (Ba !== null) {
      var n = Uu(Kc), r = Va.transition, l = _t;
      try {
        if (Va.transition = null, _t = 16 > n ? 16 : n, Ba === null) var o = !1;
        else {
          if (n = Ba, Ba = null, Kc = 0, ht & 6) throw Error(F(331));
          var c = ht;
          for (ht |= 4, de = n.current; de !== null; ) {
            var d = de, m = d.child;
            if (de.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (de = z; de !== null; ) {
                    var I = de;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vo(8, I, d);
                    }
                    var Q = I.child;
                    if (Q !== null) Q.return = I, de = Q;
                    else for (; de !== null; ) {
                      I = de;
                      var $ = I.sibling, oe = I.return;
                      if (Pv(I), I === z) {
                        de = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = oe, de = $;
                        break;
                      }
                      de = oe;
                    }
                  }
                }
                var he = d.alternate;
                if (he !== null) {
                  var ge = he.child;
                  if (ge !== null) {
                    he.child = null;
                    do {
                      var Mn = ge.sibling;
                      ge.sibling = null, ge = Mn;
                    } while (ge !== null);
                  }
                }
                de = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, de = m;
            else e: for (; de !== null; ) {
              if (d = de, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  vo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, de = D;
                break e;
              }
              de = d.return;
            }
          }
          var x = n.current;
          for (de = x; de !== null; ) {
            m = de;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, de = L;
            else e: for (m = x; de !== null; ) {
              if (E = de, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qc(9, E);
                }
              } catch (Ce) {
                bn(E, E.return, Ce);
              }
              if (E === m) {
                de = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, de = q;
                break e;
              }
              de = E.return;
            }
          }
          if (ht = c, Xr(), Ir && typeof Ir.onPostCommitFiberRoot == "function") try {
            Ir.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, Va.transition = r;
      }
    }
    return !1;
  }
  function qv(n, r, l) {
    r = _l(l, r), r = zv(n, r, 1), n = xl(n, r, 1), r = er(), n !== null && (Oi(n, 1, r), $n(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3) qv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        qv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pa === null || !Pa.has(o))) {
          n = _l(l, n), n = Uv(r, n, 1), r = xl(r, n, 1), n = er(), r !== null && (Oi(r, 1, n), $n(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function fy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = er(), n.pingedLanes |= n.suspendedLanes & l, xn === n && (Pn & l) === l && (Bn === 4 || Bn === 3 && (Pn & 130023424) === Pn && 500 > Xt() - qc ? mu(n, 0) : Nd |= l), $n(n, r);
  }
  function Xv(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = er();
    n = Bi(n, r), n !== null && (Oi(n, r, l), $n(n, l));
  }
  function jd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Xv(n, l);
  }
  function dy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(F(314));
    }
    o !== null && o.delete(r), Xv(n, l);
  }
  var Kv;
  Kv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Tn.current) na = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return na = !1, Yi(n, r, l);
      na = !!(n.flags & 131072);
    }
    else na = !1, nn && r.flags & 1048576 && pd(r, qu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Cs(n, r), n = r.pendingProps;
        var c = Ma(r, $e.current);
        Ku(r, l), c = B(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, on(o) ? (d = !0, fc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gc(r), c.updater = su, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = Vc(null, r, o, !0, d, l)) : (r.tag = 0, nn && d && dc(r), On(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Cs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ta(o, n), c) {
            case 0:
              r = Ke(null, r, o, n, l);
              break e;
            case 1:
              r = Ss(null, r, o, n, l);
              break e;
            case 11:
              r = oo(null, r, o, n, l);
              break e;
            case 14:
              r = Dl(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(F(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Ke(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Ss(n, r, o, c, l);
      case 3:
        e: {
          if (ny(r), n === null) throw Error(F(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Zu(n, r), Ec(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(F(423)), r), r = jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(F(424)), r), r = jv(n, r, o, l, c);
            break e;
          } else for (Jr = ai(r.stateNode.containerInfo.firstChild), ma = r, nn = !0, Ua = null, l = wv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yn(), o === c) {
              r = Ln(n, r, l);
              break e;
            }
            On(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Dv(r), n === null && vc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, is(o, c) ? m = null : d !== null && is(o, d) && (r.flags |= 32), cu(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && vc(r), null;
      case 13:
        return Hv(n, r, l);
      case 4:
        return Sd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Xu(r, null, o, l) : On(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), oo(n, r, o, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, jt(Pi, o._currentValue), o._currentValue = m, d !== null) if (Oa(d.value, m)) {
            if (d.children === c.children && !Tn.current) {
              r = Ln(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ea(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var I = z.pending;
                      I === null ? T.next = T : (T.next = I.next, I.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), gd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(F(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), gd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          On(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Ku(r, l), c = Fa(c), o = o(c), r.flags |= 1, On(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), Dl(n, r, o, c, l);
      case 15:
        return Hc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Cs(n, r), r.tag = 1, on(o) ? (n = !0, fc(r)) : n = !1, Ku(r, l), Lv(r, o, c), wd(r, o, c, l), Vc(null, r, o, !0, n, l);
      case 19:
        return Dd(n, r, l);
      case 22:
        return ra(n, r, l);
    }
    throw Error(F(156, r.tag));
  };
  function Zv(n, r) {
    return ba(n, r);
  }
  function Jv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $a(n, r, l, o) {
    return new Jv(n, r, l, o);
  }
  function Hd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function") return Hd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Cn) return 11;
      if (n === Nt) return 14;
    }
    return 2;
  }
  function Ll(n, r) {
    var l = n.alternate;
    return l === null ? (l = $a(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function nf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Hd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return yu(l.children, c, d, r);
      case Jt:
        m = 8, c |= 8;
        break;
      case _n:
        return n = $a(12, l, r, c | 2), n.elementType = _n, n.lanes = d, n;
      case Ne:
        return n = $a(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case Ze:
        return n = $a(19, l, r, c), n.elementType = Ze, n.lanes = d, n;
      case ve:
        return rf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case $t:
            m = 10;
            break e;
          case bt:
            m = 9;
            break e;
          case Cn:
            m = 11;
            break e;
          case Nt:
            m = 14;
            break e;
          case wt:
            m = 16, o = null;
            break e;
        }
        throw Error(F(130, n == null ? n : typeof n, ""));
    }
    return r = $a(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function yu(n, r, l, o) {
    return n = $a(7, n, o, r), n.lanes = l, n;
  }
  function rf(n, r, l, o) {
    return n = $a(22, n, o, r), n.elementType = ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function af(n, r, l) {
    return n = $a(6, n, null, r), n.lanes = l, n;
  }
  function _s(n, r, l) {
    return r = $a(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ds(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zu(0), this.expirationTimes = zu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Vd(n, r, l, o, c, d, m, E, T) {
    return n = new Ds(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $a(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gc(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: lt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Pd(n) {
    if (!n) return mi;
    n = n._reactInternals;
    e: {
      if (Ie(n) !== n || n.tag !== 1) throw Error(F(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (on(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(F(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (on(l)) return os(n, l, r);
    }
    return r;
  }
  function Bd(n, r, l, o, c, d, m, E, T) {
    return n = Vd(l, o, !0, n, c, d, m, E, T), n.context = Pd(null), l = n.current, o = er(), c = Qi(l), d = ea(o, c), d.callback = r ?? null, xl(l, d, c), n.current.lanes = c, Oi(n, c, o), $n(n, o), n;
  }
  function lf(n, r, l, o) {
    var c = r.current, d = er(), m = Qi(c);
    return l = Pd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ea(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = xl(c, r, m), n !== null && (gn(n, c, m, d), Sc(n, c, m)), m;
  }
  function ks(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function th(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function $d(n, r) {
    th(n, r), (n = n.alternate) && th(n, r);
  }
  function vy() {
    return null;
  }
  var Yd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function uf(n) {
    this._internalRoot = n;
  }
  Os.prototype.render = uf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(F(409));
    lf(n, r, null, null);
  }, Os.prototype.unmount = uf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ci(function() {
        lf(null, n, null, null);
      }), r[Hi] = null;
    }
  };
  function Os(n) {
    this._internalRoot = n;
  }
  Os.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Fu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ft.length && r !== 0 && r < Ft[l].priority; l++) ;
      Ft.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function Ml(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function nh() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = ks(m);
          d.call(z);
        };
      }
      var m = Bd(r, o, n, 0, null, !1, !1, "", nh);
      return n._reactRootContainer = m, n[Hi] = m.current, Wu(n.nodeType === 8 ? n.parentNode : n), Ci(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = ks(T);
        E.call(z);
      };
    }
    var T = Vd(n, 0, !1, null, null, !1, !1, "", nh);
    return n._reactRootContainer = T, n[Hi] = T.current, Wu(n.nodeType === 8 ? n.parentNode : n), Ci(function() {
      lf(r, T, l, o);
    }), T;
  }
  function sf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = ks(m);
          E.call(T);
        };
      }
      lf(r, m, n, c);
    } else m = hy(l, r, n, c, o);
    return ks(m);
  }
  Il = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ja(r.pendingLanes);
          l !== 0 && (pi(r, l | 1), $n(r, Xt()), !(ht & 6) && (Co = Xt() + 500, Xr()));
        }
        break;
      case 13:
        Ci(function() {
          var o = Bi(n, 1);
          if (o !== null) {
            var c = er();
            gn(o, n, 1, c);
          }
        }), $d(n, 1);
    }
  }, Au = function(n) {
    if (n.tag === 13) {
      var r = Bi(n, 134217728);
      if (r !== null) {
        var l = er();
        gn(r, n, 134217728, l);
      }
      $d(n, 134217728);
    }
  }, gt = function(n) {
    if (n.tag === 13) {
      var r = Qi(n), l = Bi(n, r);
      if (l !== null) {
        var o = er();
        gn(l, n, r, o);
      }
      $d(n, r);
    }
  }, Fu = function() {
    return _t;
  }, ju = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = De(o);
              if (!c) throw Error(F(90));
              Vr(o), Dn(o, c);
            }
          }
        }
        break;
      case "textarea":
        ca(n, l);
        break;
      case "select":
        r = l.value, r != null && mr(n, !!l.multiple, r, !1);
    }
  }, $l = Fd, Ou = Ci;
  var my = { usingClientEntryPoint: !1, Events: [us, Gu, De, xa, il, Fd] }, Ls = { findFiberByHostInstance: La, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rh = { bundleType: Ls.bundleType, version: Ls.version, rendererPackageName: Ls.rendererPackageName, rendererConfig: Ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = en(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ls.findFiberByHostInstance || vy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cf.isDisabled && cf.supportsFiber) try {
      ol = cf.inject(rh), Ir = cf;
    } catch {
    }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ml(r)) throw Error(F(200));
    return eh(n, r, null, l);
  }, qa.createRoot = function(n, r) {
    if (!Ml(n)) throw Error(F(299));
    var l = !1, o = "", c = Yd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Vd(n, 1, !1, null, null, l, !1, o, c), n[Hi] = r.current, Wu(n.nodeType === 8 ? n.parentNode : n), new uf(r);
  }, qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(F(188)) : (n = Object.keys(n).join(","), Error(F(268, n)));
    return n = en(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return Ci(n);
  }, qa.hydrate = function(n, r, l) {
    if (!of(r)) throw Error(F(200));
    return sf(null, n, r, !0, l);
  }, qa.hydrateRoot = function(n, r, l) {
    if (!Ml(n)) throw Error(F(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Yd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Bd(r, null, n, 1, l ?? null, c, !1, d, m), n[Hi] = r.current, Wu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Os(r);
  }, qa.render = function(n, r, l) {
    if (!of(r)) throw Error(F(200));
    return sf(null, n, r, !1, l);
  }, qa.unmountComponentAtNode = function(n) {
    if (!of(n)) throw Error(F(40));
    return n._reactRootContainer ? (Ci(function() {
      sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Hi] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = Fd, qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!of(l)) throw Error(F(200));
    if (n == null || n._reactInternals === void 0) throw Error(F(38));
    return sf(n, r, l, !1, o);
  }, qa.version = "18.3.1-next-f1338f8080-20240426", qa;
}
var Xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function aD() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ie = v0, Z = uR(), F = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ln = !1;
    function En(e) {
      ln = e;
    }
    function ft(e) {
      if (!ln) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        fn("warn", e, a);
      }
    }
    function S(e) {
      if (!ln) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        fn("error", e, a);
      }
    }
    function fn(e, t, a) {
      {
        var i = F.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, pe = 1, Vt = 2, ue = 3, Se = 4, ce = 5, Be = 6, Tt = 7, dt = 8, dn = 9, rt = 10, Ge = 11, pt = 12, _e = 13, lt = 14, He = 15, Jt = 16, _n = 17, $t = 18, bt = 19, Cn = 21, Ne = 22, Ze = 23, Nt = 24, wt = 25, ve = !0, X = !1, we = !1, ne = !1, _ = !1, V = !0, ze = !1, Ve = !0, tt = !0, et = !0, yt = !0, at = /* @__PURE__ */ new Set(), it = {}, qt = {};
    function hr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      it[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        qt[a] = e, e === "onDoubleClick" && (qt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        at.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function Pr(e, t) {
      if (zn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function Br(e) {
      if (zn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    function Wn(e, t) {
      if (zn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function mr(e, t) {
      if (zn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), Dn(e);
    }
    function $r(e) {
      if (zn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    function yr(e) {
      if (zn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), Dn(e);
    }
    var ca = 0, nr = 1, Yr = 2, vn = 3, wr = 4, si = 5, fa = 6, K = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = K + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", nt = new RegExp("^[" + K + "][" + xe + "]*$"), Lt = {}, zt = {};
    function kn(e) {
      return Qn.call(zt, e) ? !0 : Qn.call(Lt, e) ? !1 : nt.test(e) ? (zt[e] = !0, !0) : (Lt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === ca : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === ca)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case wr:
            return t === !1;
          case si:
            return isNaN(t);
          case fa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return At.hasOwnProperty(e) ? At[e] : null;
    }
    function Ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Yr || t === vn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var At = {}, Ka = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ka.forEach(function(e) {
      At[e] = new Ut(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      At[t] = new Ut(
        t,
        nr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      At[e] = new Ut(
        e,
        Yr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      At[e] = new Ut(
        e,
        Yr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      At[e] = new Ut(
        e,
        vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Ut(
        e,
        vn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Ut(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      At[e] = new Ut(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      At[e] = new Ut(
        e,
        si,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xa = /[\-\:]([a-z])/g, il = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, il);
      At[t] = new Ut(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, il);
      At[t] = new Ut(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, il);
      At[t] = new Ut(
        t,
        nr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      At[e] = new Ut(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var $l = "xlinkHref";
    At[$l] = new Ut(
      "xlinkHref",
      nr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      At[e] = new Ut(
        e,
        nr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ou = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ki = !1;
    function ll(e) {
      !ki && Ou.test(e) && (ki = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function da(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Pr(a, t), i.sanitizeURL && ll("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ci(e, t, a, i) {
      {
        if (!kn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Pr(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = xr(t);
      if (!hn(t, u, i)) {
        if (Pt(t, a, u, i) && (a = null), i || u === null) {
          if (kn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Pr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === vn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === vn || b === wr && a === !0 ? w = "" : (Pr(a, y), w = "" + a, u.sanitizeURL && ll(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var fi = Symbol.for("react.element"), br = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), Le = Symbol.for("react.provider"), vt = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), un = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), en = Symbol.for("react.scope"), rr = Symbol.for("react.debug_trace_mode"), ba = Symbol.for("react.offscreen"), _a = Symbol.for("react.legacy_hidden"), Gn = Symbol.for("react.cache"), Yl = Symbol.for("react.tracing_marker"), Xt = Symbol.iterator, $o = "@@iterator";
    function Za(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xt && e[Xt] || e[$o];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, di = 0, ul, Lu, ol, Ir, Yo, _r, Io;
    function Qo() {
    }
    Qo.__reactDisabledLog = !0;
    function Xs() {
      {
        if (di === 0) {
          ul = console.log, Lu = console.info, ol = console.warn, Ir = console.error, Yo = console.group, _r = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Qo,
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
        di++;
      }
    }
    function Mu() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: ul
            }),
            info: ot({}, e, {
              value: Lu
            }),
            warn: ot({}, e, {
              value: ol
            }),
            error: ot({}, e, {
              value: Ir
            }),
            group: ot({}, e, {
              value: Yo
            }),
            groupCollapsed: ot({}, e, {
              value: _r
            }),
            groupEnd: ot({}, e, {
              value: Io
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sl = F.ReactCurrentDispatcher, Ja;
    function Dr(e, t, a) {
      {
        if (Ja === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Ja = i && i[1] || "";
          }
        return `
` + Ja + e;
      }
    }
    var cl = !1, fl;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      fl = new dl();
    }
    function Nu(e, t) {
      if (!e || cl)
        return "";
      {
        var a = fl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      cl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = sl.current, sl.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && fl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        cl = !1, sl.current = s, Mu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? Dr(w) : "";
      return typeof e == "function" && fl.set(e, M), M;
    }
    function zu(e, t, a) {
      return Nu(e, !0);
    }
    function Oi(e, t, a) {
      return Nu(e, !1);
    }
    function Pf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Nu(e, Pf(e));
      if (typeof e == "string")
        return Dr(e);
      switch (e) {
        case Ie:
          return Dr("Suspense");
        case Xe:
          return Dr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case je:
            return Oi(e.render);
          case un:
            return pi(e.type, t, a);
          case ut: {
            var i = e, u = i._payload, s = i._init;
            try {
              return pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function _t(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ce:
          return Dr(e.type);
        case Jt:
          return Dr("Lazy");
        case _e:
          return Dr("Suspense");
        case bt:
          return Dr("SuspenseList");
        case ke:
        case Vt:
        case He:
          return Oi(e.type);
        case Ge:
          return Oi(e.type.render);
        case pe:
          return zu(e.type);
        default:
          return "";
      }
    }
    function Uu(e) {
      try {
        var t = "", a = e;
        do
          t += _t(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Il(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Au(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case br:
          return "Portal";
        case J:
          return "Profiler";
        case Y:
          return "StrictMode";
        case Ie:
          return "Suspense";
        case Xe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case vt:
            var t = e;
            return Au(t) + ".Consumer";
          case Le:
            var a = e;
            return Au(a._context) + ".Provider";
          case je:
            return Il(e, e.render, "ForwardRef");
          case un:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case ut: {
            var u = e, s = u._payload, f = u._init;
            try {
              return gt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Fu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function ju(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Nt:
          return "Cache";
        case dn:
          var i = a;
          return ju(i) + ".Consumer";
        case rt:
          var u = a;
          return ju(u._context) + ".Provider";
        case $t:
          return "DehydratedFragment";
        case Ge:
          return Fu(a, a.render, "ForwardRef");
        case Tt:
          return "Fragment";
        case ce:
          return a;
        case Se:
          return "Portal";
        case ue:
          return "Root";
        case Be:
          return "Text";
        case Jt:
          return gt(a);
        case dt:
          return a === Y ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case pt:
          return "Profiler";
        case Cn:
          return "Scope";
        case _e:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case wt:
          return "TracingMarker";
        case pe:
        case ke:
        case _n:
        case Vt:
        case lt:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ql = F.ReactDebugCurrentFrame, mn = null, Qr = !1;
    function kr() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function pl() {
      return mn === null ? "" : Uu(mn);
    }
    function Rn() {
      Ql.getCurrentStack = null, mn = null, Qr = !1;
    }
    function Ft(e) {
      Ql.getCurrentStack = e === null ? null : pl, mn = e, Qr = !1;
    }
    function Ks() {
      return mn;
    }
    function Wr(e) {
      Qr = e;
    }
    function qn(e) {
      return "" + e;
    }
    function vi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Li(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Js(e) {
      return e._valueTracker;
    }
    function Da(e) {
      e._valueTracker = null;
    }
    function hl(e) {
      var t = "";
      return e && (vl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Mi(e) {
      var t = vl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            yr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            yr(p), i = "" + p;
          },
          stopTracking: function() {
            Da(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ka(e) {
      Js(e) || (e._valueTracker = Mi(e));
    }
    function Hu(e) {
      if (!e)
        return !1;
      var t = Js(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ml(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var yl = !1, Wl = !1, Vu = !1, Wo = !1;
    function ei(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Li("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Wl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Wl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !yl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), yl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: vi(t.value != null ? t.value : i),
        controlled: ei(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function A(e, t) {
      var a = e;
      {
        var i = ei(t);
        !a._wrapperState.controlled && i && !Wo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Wo = !0), a._wrapperState.controlled && !i && !Vu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vu = !0);
      }
      N(e, t);
      var u = vi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = qn(u)) : a.value !== qn(u) && (a.value = qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, vi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ue(e, t) {
      var a = e;
      A(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Pr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Eh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Hu(f), A(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ml(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var st = !1, xt = !1, Qt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ie.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Qt || (Qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", qn(vi(t.value)));
    }
    var Kt = Array.isArray;
    function St(e) {
      return Kt(e);
    }
    var Ni;
    Ni = !1;
    function Pu() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Go = ["value", "defaultValue"];
    function Bf(e) {
      {
        Li("select", e);
        for (var t = 0; t < Go.length; t++) {
          var a = Go[t];
          if (e[a] != null) {
            var i = St(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Pu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Pu());
          }
        }
      }
    }
    function ti(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = qn(vi(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function qo(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Xo(e, t) {
      var a = e;
      Bf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ni && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ni = !0);
    }
    function $f(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ti(a, !!t.multiple, i, !1) : t.defaultValue != null && ti(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ti(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ti(a, !!t.multiple, t.defaultValue, !0) : ti(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vm(e, t) {
      var a = e, i = t.value;
      i != null && ti(a, !!t.multiple, i, !1);
    }
    var Yf = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ip(e, t) {
      var a = e;
      Li("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Yf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Yf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (St(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: vi(i)
      };
    }
    function Qp(e, t) {
      var a = e, i = vi(t.value), u = vi(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = qn(u));
    }
    function Wp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qf(e, t) {
      Qp(e, t);
    }
    var zi = "http://www.w3.org/1999/xhtml", Pm = "http://www.w3.org/1998/Math/MathML", Wf = "http://www.w3.org/2000/svg";
    function ec(e) {
      switch (e) {
        case "svg":
          return Wf;
        case "math":
          return Pm;
        default:
          return zi;
      }
    }
    function Gf(e, t) {
      return e == null || e === zi ? ec(t) : e === Wf && t === "foreignObject" ? zi : e;
    }
    var Bm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, tc, Gp = Bm(function(e, t) {
      if (e.namespaceURI === Wf && !("innerHTML" in e)) {
        tc = tc || document.createElement("div"), tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Ui = 3, Un = 8, ni = 9, Gl = 11, nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ui) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Xp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Kp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      Kp.forEach(function(t) {
        Bu[Xp(t, e)] = Bu[e];
      });
    });
    function rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Bu.hasOwnProperty(e) && Bu[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var $u = /([A-Z])/g, $m = /^ms-/;
    function Ym(e) {
      return e.replace($u, "-$1").toLowerCase().replace($m, "-ms-");
    }
    var Zp = function() {
    };
    {
      var Jp = /^(?:webkit|moz|o)[A-Z]/, ev = /^-ms-/, Ko = /-(.)/g, Yu = /;\s*$/, Iu = {}, Qu = {}, tv = !1, qf = !1, Xf = function(e) {
        return e.replace(Ko, function(t, a) {
          return a.toUpperCase();
        });
      }, Kf = function(e) {
        Iu.hasOwnProperty(e) && Iu[e] || (Iu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Xf(e.replace(ev, "ms-"))
        ));
      }, nv = function(e) {
        Iu.hasOwnProperty(e) && Iu[e] || (Iu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rv = function(e, t) {
        Qu.hasOwnProperty(t) && Qu[t] || (Qu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yu, "")));
      }, av = function(e, t) {
        tv || (tv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Im = function(e, t) {
        qf || (qf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Zp = function(e, t) {
        e.indexOf("-") > -1 ? Kf(e) : Jp.test(e) ? nv(e) : Yu.test(t) && rv(e, t), typeof t == "number" && (isNaN(t) ? av(e, t) : isFinite(t) || Im(e, t));
      };
    }
    var Qm = Zp;
    function Wm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ym(i)) + ":", t += rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function iv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Qm(i, t[i]);
          var s = rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Gm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Oa(e) {
      var t = {};
      for (var a in e)
        for (var i = qp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Zo(e, t) {
      {
        if (!t)
          return;
        var a = Oa(e), i = Oa(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Gm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var lv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, uv = ot({
      menuitem: !0
    }, lv), ov = "__html";
    function ac(e, t) {
      if (t) {
        if (uv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ic = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ri = {}, Zf = new RegExp("^(aria)-[" + xe + "]*$"), Jo = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function Jf(e, t) {
      {
        if (Qn.call(ri, t) && ri[t])
          return !0;
        if (Jo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ri[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ri[t] = !0, !0;
        }
        if (Zf.test(t)) {
          var u = t.toLowerCase(), s = sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ri[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ri[t] = !0, !0;
        }
      }
      return !0;
    }
    function cv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      Ai(e, t) || cv(e, t);
    }
    var ql = !1;
    function ed(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ql && (ql = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var td = function() {
    };
    {
      var Xn = {}, nd = /^on./, fv = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + xe + "]*$"), pv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      td = function(e, t, a, i) {
        if (Qn.call(Xn, t) && Xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (nd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (nd.test(t))
          return fv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (dv.test(t) || pv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === ca;
        if (ic.hasOwnProperty(u)) {
          var g = ic[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : gr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = td(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function hv(e, t, a) {
      Ai(e, t) || vv(e, t, a);
    }
    var Fi = 1, es = 2, Xl = 4, qm = Fi | es | Xl, ts = null;
    function ns(e) {
      ts !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ts = e;
    }
    function Xm() {
      ts === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ts = null;
    }
    function mv(e) {
      return e === ts;
    }
    function uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ui ? t.parentNode : t;
    }
    var Gt = null, gl = null, ji = null;
    function Wu(e) {
      var t = _o(e);
      if (t) {
        if (typeof Gt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Eh(a);
          Gt(t.stateNode, t.type, i);
        }
      }
    }
    function yv(e) {
      Gt = e;
    }
    function oc(e) {
      gl ? ji ? ji.push(e) : ji = [e] : gl = e;
    }
    function rs() {
      return gl !== null || ji !== null;
    }
    function as() {
      if (gl) {
        var e = gl, t = ji;
        if (gl = null, ji = null, Wu(e), t)
          for (var a = 0; a < t.length; a++)
            Wu(t[a]);
      }
    }
    var Kl = function(e, t) {
      return e(t);
    }, rd = function() {
    }, ad = !1;
    function Km() {
      var e = rs();
      e && (rd(), as());
    }
    function id(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return Kl(e, t, a);
      } finally {
        ad = !1, Km();
      }
    }
    function sc(e, t, a) {
      Kl = e, rd = a;
    }
    function cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ld(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && cc(t));
        default:
          return !1;
      }
    }
    function Zl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Eh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ld(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (pn)
      try {
        var Jl = {};
        Object.defineProperty(Jl, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", Jl, Jl), window.removeEventListener("test", Jl, Jl);
      } catch {
        is = !1;
      }
    function gv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ud = gv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      ud = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          od.removeEventListener(H, Oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Oe() {
          b = !0, j(), a.apply(i, ae), w = !1;
        }
        var Te, Rt = !1, mt = !1;
        function k(O) {
          if (Te = O.error, Rt = !0, Te === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), od.addEventListener(H, Oe, !1), g.initEvent(H, !1, !1), od.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Rt ? mt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !b)
          return j(), gv.apply(this, arguments);
      };
    }
    var Zm = ud, Sl = !1, ai = null, ls = !1, El = null, hi = {
      onError: function(e) {
        Sl = !0, ai = e;
      }
    };
    function eu(e, t, a, i, u, s, f, p, v) {
      Sl = !1, ai = null, Zm.apply(hi, arguments);
    }
    function Hi(e, t, a, i, u, s, f, p, v) {
      if (eu.apply(this, arguments), Sl) {
        var y = cd();
        ls || (ls = !0, El = y);
      }
    }
    function sd() {
      if (ls) {
        var e = El;
        throw ls = !1, El = null, e;
      }
    }
    function Jm() {
      return Sl;
    }
    function cd() {
      if (Sl) {
        var e = ai;
        return Sl = !1, ai = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function La(e) {
      return e._reactInternals;
    }
    function us(e) {
      return e._reactInternals !== void 0;
    }
    function Gu(e, t) {
      e._reactInternals = t;
    }
    var De = (
      /*                      */
      0
    ), Cl = (
      /*                */
      1
    ), tn = (
      /*                    */
      2
    ), Je = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), jt = (
      /*                 */
      32
    ), mi = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), Tn = (
      /*            */
      256
    ), qr = (
      /*                          */
      512
    ), Ma = (
      /*                     */
      1024
    ), on = (
      /*                      */
      2048
    ), Na = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), os = (
      /*             */
      16384
    ), fc = on | Je | mi | qr | Ma | os, Sv = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), ss = (
      /* */
      131072
    ), fd = (
      /*                       */
      1048576
    ), dd = (
      /*                    */
      2097152
    ), Xr = (
      /*                 */
      4194304
    ), Tl = (
      /*                */
      8388608
    ), Kr = (
      /*               */
      16777216
    ), tu = (
      /*              */
      33554432
    ), qu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Je | Ma | 0
    ), Zr = tn | Je | Mt | jt | qr | Na | Rl, Sr = Je | mi | qr | Rl, za = on | Mt, ar = Xr | Tl | dd, Vi = F.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (tn | Na)) !== De && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ue ? a : null;
    }
    function pd(e) {
      if (e.tag === _e) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function dc(e) {
      return e.tag === ue ? e.stateNode.containerInfo : null;
    }
    function vd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Vi.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = La(e);
      return u ? ha(u) === u : !1;
    }
    function Jr(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function nn(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Jr(s), e;
            if (v === u)
              return Jr(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ue)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ua(e) {
      var t = nn(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === ce || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Ev(e) {
      var t = nn(e);
      return t !== null ? pc(t) : null;
    }
    function pc(e) {
      if (e.tag === ce || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vc = Z.unstable_scheduleCallback, Cv = Z.unstable_cancelCallback, hc = Z.unstable_shouldYield, Rv = Z.unstable_requestPaint, yn = Z.unstable_now, md = Z.unstable_getCurrentPriorityLevel, mc = Z.unstable_ImmediatePriority, nu = Z.unstable_UserBlockingPriority, yi = Z.unstable_NormalPriority, Tv = Z.unstable_LowPriority, yc = Z.unstable_IdlePriority, Xu = Z.unstable_yieldValue, wv = Z.unstable_setDisableYieldValue, Pi = null, Vn = null, ee = null, Aa = !1, ya = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        tt && (e = ot({}, e, {
          getLaneLabelMap: Bi,
          injectProfilingHooks: xv
        })), Pi = t.inject(e), Vn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(Pi, e, t);
        } catch (a) {
          Aa || (Aa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ku(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (et) {
            var i;
            switch (t) {
              case Ln:
                i = mc;
                break;
              case Yi:
                i = nu;
                break;
              case gi:
                i = yi;
                break;
              case so:
                i = yc;
                break;
              default:
                i = yi;
                break;
            }
            Vn.onCommitFiberRoot(Pi, e, i, a);
          }
        } catch (u) {
          Aa || (Aa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Fa(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(Pi, e);
        } catch (t) {
          Aa || (Aa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ru(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(Pi, e);
        } catch (t) {
          Aa || (Aa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Xu == "function" && (wv(e), En(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(Pi, e);
        } catch (t) {
          Aa || (Aa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function xv(e) {
      ee = e;
    }
    function Bi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < vs; a++) {
          var i = ty(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function wl(e) {
      ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(e);
    }
    function gc() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function Zu(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function ea() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function xl(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function Sc() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function bv(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ec() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function _v(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function cs() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function ii(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ju() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function au(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function Sd(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function eo() {
      ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
    }
    function Dv(e) {
      ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(e);
    }
    function Ed() {
      ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped();
    }
    function sn(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function Cc() {
      ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded();
    }
    function Rc() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function Cd(e) {
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(e);
    }
    function Tc(e, t) {
      ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, t);
    }
    function ds(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    var Ee = (
      /*                         */
      0
    ), Re = (
      /*                 */
      1
    ), Ye = (
      /*                    */
      2
    ), ct = (
      /*               */
      8
    ), ga = (
      /*              */
      16
    ), to = Math.clz32 ? Math.clz32 : Er, ps = Math.log, ey = Math.LN2;
    function Er(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ps(t) / ey | 0) | 0;
    }
    var vs = 31, B = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), be = (
      /*                        */
      1
    ), ir = (
      /*    */
      2
    ), Sa = (
      /*             */
      4
    ), $i = (
      /*            */
      8
    ), ja = (
      /*                     */
      16
    ), no = (
      /*                */
      32
    ), iu = (
      /*                       */
      4194240
    ), ro = (
      /*                        */
      64
    ), wc = (
      /*                        */
      128
    ), xc = (
      /*                        */
      256
    ), bc = (
      /*                        */
      512
    ), _c = (
      /*                        */
      1024
    ), Dc = (
      /*                        */
      2048
    ), lu = (
      /*                        */
      4096
    ), kc = (
      /*                        */
      8192
    ), ao = (
      /*                        */
      16384
    ), io = (
      /*                       */
      32768
    ), Oc = (
      /*                       */
      65536
    ), hs = (
      /*                       */
      131072
    ), Lc = (
      /*                       */
      262144
    ), Mc = (
      /*                       */
      524288
    ), Nc = (
      /*                       */
      1048576
    ), zc = (
      /*                       */
      2097152
    ), lo = (
      /*                            */
      130023424
    ), uu = (
      /*                             */
      4194304
    ), Uc = (
      /*                             */
      8388608
    ), Ac = (
      /*                             */
      16777216
    ), Rd = (
      /*                             */
      33554432
    ), Fc = (
      /*                             */
      67108864
    ), kv = uu, ms = (
      /*          */
      134217728
    ), Td = (
      /*                          */
      268435455
    ), uo = (
      /*               */
      268435456
    ), bl = (
      /*                        */
      536870912
    ), Cr = (
      /*                   */
      1073741824
    );
    function ty(e) {
      {
        if (e & be)
          return "Sync";
        if (e & ir)
          return "InputContinuousHydration";
        if (e & Sa)
          return "InputContinuous";
        if (e & $i)
          return "DefaultHydration";
        if (e & ja)
          return "Default";
        if (e & no)
          return "TransitionHydration";
        if (e & iu)
          return "Transition";
        if (e & lo)
          return "Retry";
        if (e & ms)
          return "SelectiveHydration";
        if (e & uo)
          return "IdleHydration";
        if (e & bl)
          return "Idle";
        if (e & Cr)
          return "Offscreen";
      }
    }
    var Zt = -1, jc = ro, ta = uu;
    function ou(e) {
      switch (On(e)) {
        case be:
          return be;
        case ir:
          return ir;
        case Sa:
          return Sa;
        case $i:
          return $i;
        case ja:
          return ja;
        case no:
          return no;
        case ro:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case lu:
        case kc:
        case ao:
        case io:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
          return e & iu;
        case uu:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          return e & lo;
        case ms:
          return ms;
        case uo:
          return uo;
        case bl:
          return bl;
        case Cr:
          return Cr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function su(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & Td;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = ou(p);
        else {
          var v = f & s;
          v !== B && (i = ou(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = ou(y) : s !== B && (i = ou(s));
      }
      if (i === B)
        return B;
      if (t !== B && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === B) {
        var g = On(i), b = On(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ja && (b & iu) !== B
        )
          return t;
      }
      (i & Sa) !== B && (i |= a & ja);
      var w = e.entangledLanes;
      if (w !== B)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var j = Dl(U), ae = 1 << j;
          i |= M[j], U &= ~ae;
        }
      return i;
    }
    function Ov(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = Dl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Lv(e, t) {
      switch (e) {
        case be:
        case ir:
        case Sa:
          return t + 250;
        case $i:
        case ja:
        case no:
        case ro:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case lu:
        case kc:
        case ao:
        case io:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
          return t + 5e3;
        case uu:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          return Zt;
        case ms:
        case uo:
        case bl:
        case Cr:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function Mv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Dl(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === B || (v & u) !== B) && (s[p] = Lv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function wd(e) {
      return ou(e.pendingLanes);
    }
    function _l(e) {
      var t = e.pendingLanes & ~Cr;
      return t !== B ? t : t & Cr ? Cr : B;
    }
    function xd(e) {
      return (e & be) !== B;
    }
    function ys(e) {
      return (e & Td) !== B;
    }
    function Nv(e) {
      return (e & lo) === e;
    }
    function zv(e) {
      var t = be | Sa | ja;
      return (e & t) === B;
    }
    function Uv(e) {
      return (e & iu) === e;
    }
    function gs(e, t) {
      var a = ir | Sa | $i | ja;
      return (t & a) !== B;
    }
    function Av(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function bd(e) {
      return (e & iu) !== B;
    }
    function Fv() {
      var e = jc;
      return jc <<= 1, (jc & iu) === B && (jc = ro), e;
    }
    function na() {
      var e = ta;
      return ta <<= 1, (ta & lo) === B && (ta = uu), e;
    }
    function On(e) {
      return e & -e;
    }
    function oo(e) {
      return On(e);
    }
    function Dl(e) {
      return 31 - to(e);
    }
    function Hc(e) {
      return Dl(e);
    }
    function ra(e, t) {
      return (e & t) !== B;
    }
    function cu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function Ss(e, t) {
      return e & ~t;
    }
    function Vc(e, t) {
      return e & t;
    }
    function ny(e) {
      return e;
    }
    function jv(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Es(e) {
      for (var t = [], a = 0; a < vs; a++)
        t.push(e);
      return t;
    }
    function fu(e, t, a) {
      e.pendingLanes |= t, t !== bl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = Hc(t);
      i[u] = a;
    }
    function Hv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Dl(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function Pc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Bc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Dl(f), v = 1 << p;
        i[p] = B, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function _d(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Dl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vv(e, t) {
      var a = On(t), i;
      switch (a) {
        case Sa:
          i = ir;
          break;
        case ja:
          i = $i;
          break;
        case ro:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case lu:
        case kc:
        case ao:
        case io:
        case Oc:
        case hs:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case uu:
        case Uc:
        case Ac:
        case Rd:
        case Fc:
          i = no;
          break;
        case bl:
          i = uo;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function $c(e, t, a) {
      if (ya)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Hc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Dd(e, t) {
      if (ya)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Hc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Cs(e, t) {
      return null;
    }
    var Ln = be, Yi = Sa, gi = ja, so = bl, co = Fn;
    function Ha() {
      return co;
    }
    function wn(e) {
      co = e;
    }
    function Rr(e, t) {
      var a = co;
      try {
        return co = e, t();
      } finally {
        co = a;
      }
    }
    function ry(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ay(e, t) {
      return e > t ? e : t;
    }
    function fo(e, t) {
      return e !== 0 && e < t;
    }
    function lr(e) {
      var t = On(e);
      return fo(Ln, t) ? fo(Yi, t) ? ys(t) ? gi : so : Yi : Ln;
    }
    function Yc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var de;
    function po(e) {
      de = e;
    }
    function kd(e) {
      de(e);
    }
    var Ic;
    function iy(e) {
      Ic = e;
    }
    var vo;
    function Qc(e) {
      vo = e;
    }
    var Wc;
    function Pv(e) {
      Wc = e;
    }
    var Od;
    function Bv(e) {
      Od = e;
    }
    var Rs = !1, ho = [], cn = null, Zn = null, Or = null, mo = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), Jn = [], $v = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Si(e) {
      return $v.indexOf(e) > -1;
    }
    function ly(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Ld(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          cn = null;
          break;
        case "dragenter":
        case "dragleave":
          Zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Or = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          mo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          yo.delete(i);
          break;
        }
      }
    }
    function go(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ly(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && Ic(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Yv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return cn = go(cn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Zn = go(Zn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Or = go(Or, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return mo.set(y, go(mo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return yo.set(b, go(yo.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Md(e) {
      var t = zs(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === _e) {
            var u = pd(a);
            if (u !== null) {
              e.blockedOn = u, Od(e.priority, function() {
                vo(a);
              });
              return;
            }
          } else if (i === ue) {
            var s = a.stateNode;
            if (Yc(s)) {
              e.blockedOn = dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function uy(e) {
      for (var t = Wc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Jn.length && fo(t, Jn[i].priority); i++)
        ;
      Jn.splice(i, 0, a), i === 0 && Md(a);
    }
    function du(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ns(s), u.target.dispatchEvent(s), Xm();
        } else {
          var f = _o(i);
          return f !== null && Ic(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Gc(e, t, a) {
      du(e) && a.delete(t);
    }
    function Va() {
      Rs = !1, cn !== null && du(cn) && (cn = null), Zn !== null && du(Zn) && (Zn = null), Or !== null && du(Or) && (Or = null), mo.forEach(Gc), yo.forEach(Gc);
    }
    function ht(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Rs || (Rs = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Va)));
    }
    function xn(e) {
      if (ho.length > 0) {
        ht(ho[0], e);
        for (var t = 1; t < ho.length; t++) {
          var a = ho[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      cn !== null && ht(cn, e), Zn !== null && ht(Zn, e), Or !== null && ht(Or, e);
      var i = function(p) {
        return ht(p, e);
      };
      mo.forEach(i), yo.forEach(i);
      for (var u = 0; u < Jn.length; u++) {
        var s = Jn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Jn.length > 0; ) {
        var f = Jn[0];
        if (f.blockedOn !== null)
          break;
        Md(f), f.blockedOn === null && Jn.shift();
      }
    }
    var rn = F.ReactCurrentBatchConfig, Pn = !0;
    function aa(e) {
      Pn = !!e;
    }
    function So() {
      return Pn;
    }
    function Bn(e, t, a) {
      var i = qc(t), u;
      switch (i) {
        case Ln:
          u = Ts;
          break;
        case Yi:
          u = pu;
          break;
        case gi:
        default:
          u = Eo;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ts(e, t, a, i) {
      var u = Ha(), s = rn.transition;
      rn.transition = null;
      try {
        wn(Ln), Eo(e, t, a, i);
      } finally {
        wn(u), rn.transition = s;
      }
    }
    function pu(e, t, a, i) {
      var u = Ha(), s = rn.transition;
      rn.transition = null;
      try {
        wn(Yi), Eo(e, t, a, i);
      } finally {
        wn(u), rn.transition = s;
      }
    }
    function Eo(e, t, a, i) {
      Pn && Nd(e, t, a, i);
    }
    function Nd(e, t, a, i) {
      var u = Tr(e, t, a, i);
      if (u === null) {
        wy(e, t, i, kl, a), Ld(e, i);
        return;
      }
      if (Yv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ld(e, i), t & Xl && Si(e)) {
        for (; u !== null; ) {
          var s = _o(u);
          s !== null && kd(s);
          var f = Tr(e, t, a, i);
          if (f === null && wy(e, t, i, kl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var kl = null;
    function Tr(e, t, a, i) {
      kl = null;
      var u = uc(i), s = zs(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === _e) {
            var v = pd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ue) {
            var y = f.stateNode;
            if (Yc(y))
              return dc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return kl = s, null;
    }
    function qc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ln;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Yi;
        case "message": {
          var t = md();
          switch (t) {
            case mc:
              return Ln;
            case nu:
              return Yi;
            case yi:
            case Tv:
              return gi;
            case yc:
              return so;
            default:
              return gi;
          }
        }
        default:
          return gi;
      }
    }
    function Co(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ii(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Xc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Pa = null, Ro = null, Ba = null;
    function Kc(e) {
      return Pa = e, Ro = xs(), !0;
    }
    function ws() {
      Pa = null, Ro = null, Ba = null;
    }
    function Zc() {
      if (Ba)
        return Ba;
      var e, t = Ro, a = t.length, i, u = xs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ba = u.slice(e, p), Ba;
    }
    function xs() {
      return "value" in Pa ? Pa.value : Pa.textContent;
    }
    function vu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function er() {
      return !0;
    }
    function Qi() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = er : this.isDefaultPrevented = Qi, this.isPropagationStopped = Qi, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = er);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = er);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: er
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Jc = gn($n), hu = ot({}, $n, {
      view: 0,
      detail: 0
    }), Ud = gn(hu), Ad, Ei, To;
    function Fd(e) {
      e !== To && (To && e.type === "mousemove" ? (Ad = e.screenX - To.screenX, Ei = e.screenY - To.screenY) : (Ad = 0, Ei = 0), To = e);
    }
    var Ci = ot({}, hu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Fd(e), Ad);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ei;
      }
    }), ef = gn(Ci), mu = ot({}, Ci, {
      dataTransfer: 0
    }), Iv = gn(mu), Qv = ot({}, hu, {
      relatedTarget: 0
    }), bs = gn(Qv), tf = ot({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oy = gn(tf), sy = ot({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Wv = gn(sy), Gv = ot({}, $n, {
      data: 0
    }), Ol = gn(Gv), cy = Ol, wo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function bn(e) {
      if (e.key) {
        var t = wo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = vu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? qv[e.keyCode] || "Unidentified" : "";
    }
    var fy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Xv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = fy[e];
      return i ? !!a[i] : !1;
    }
    function jd(e) {
      return Xv;
    }
    var dy = ot({}, hu, {
      key: bn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? vu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Kv = gn(dy), Zv = ot({}, Ci, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Jv = gn(Zv), $a = ot({}, hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jd
    }), Hd = gn($a), py = ot({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ll = gn(py), nf = ot({}, Ci, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), yu = gn(nf), rf = [9, 13, 27, 32], af = 229, _s = pn && "CompositionEvent" in window, Ds = null;
    pn && "documentMode" in document && (Ds = document.documentMode);
    var Vd = pn && "TextEvent" in window && !Ds, eh = pn && (!_s || Ds && Ds > 8 && Ds <= 11), Pd = 32, Bd = String.fromCharCode(Pd);
    function lf() {
      hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ks = !1;
    function th(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function $d(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function vy(e, t) {
      return e === "keydown" && t.keyCode === af;
    }
    function Yd(e, t) {
      switch (e) {
        case "keyup":
          return rf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== af;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function uf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Os(e) {
      return e.locale === "ko";
    }
    var Ml = !1;
    function of(e, t, a, i, u) {
      var s, f;
      if (_s ? s = $d(t) : Ml ? Yd(t, i) && (s = "onCompositionEnd") : vy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      eh && !Os(i) && (!Ml && s === "onCompositionStart" ? Ml = Kc(u) : s === "onCompositionEnd" && Ml && (f = Zc()));
      var p = uh(a, s);
      if (p.length > 0) {
        var v = new Ol(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = uf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function nh(e, t) {
      switch (e) {
        case "compositionend":
          return uf(t);
        case "keypress":
          var a = t.which;
          return a !== Pd ? null : (ks = !0, Bd);
        case "textInput":
          var i = t.data;
          return i === Bd && ks ? null : i;
        default:
          return null;
      }
    }
    function hy(e, t) {
      if (Ml) {
        if (e === "compositionend" || !_s && Yd(e, t)) {
          var a = Zc();
          return ws(), Ml = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!th(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return eh && !Os(t) ? null : t.data;
        default:
          return null;
      }
    }
    function sf(e, t, a, i, u) {
      var s;
      if (Vd ? s = nh(t, i) : s = hy(t, i), !s)
        return null;
      var f = uh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new cy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function my(e, t, a, i, u, s, f) {
      of(e, t, a, i, u), sf(e, t, a, i, u);
    }
    var Ls = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function rh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ls[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function cf(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      oc(i);
      var u = uh(t, "onChange");
      if (u.length > 0) {
        var s = new Jc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, uc(e)), id(m, t);
    }
    function m(e) {
      _0(e, 0);
    }
    function E(e) {
      var t = mf(e);
      if (Hu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    pn && (z = cf("input") && (!document.documentMode || document.documentMode > 9));
    function I(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", $);
    }
    function Q() {
      l && (l.detachEvent("onpropertychange", $), l = null, o = null);
    }
    function $(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function oe(e, t, a) {
      e === "focusin" ? (Q(), I(t, a)) : e === "focusout" && Q();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Mn(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window, v, y;
      if (c(p) ? v = T : rh(p) ? z ? v = D : (v = he, y = oe) : ge(p) && (v = Mn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function q() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ce(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !mv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (zs(y) || ap(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, M = U ? zs(U) : null, M !== null) {
            var j = ha(M);
            (M !== j || M.tag !== ce && M.tag !== Be) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var ae = ef, Oe = "onMouseLeave", Te = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Jv, Oe = "onPointerLeave", Te = "onPointerEnter", Rt = "pointer");
          var mt = w == null ? g : mf(w), k = M == null ? g : mf(M), H = new ae(Oe, Rt + "leave", w, i, u);
          H.target = mt, H.relatedTarget = k;
          var O = null, W = zs(u);
          if (W === a) {
            var fe = new ae(Te, Rt + "enter", M, i, u);
            fe.target = k, fe.relatedTarget = mt, O = fe;
          }
          kR(e, H, O, w, M);
        }
      }
    }
    function Ae(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var me = typeof Object.is == "function" ? Object.is : Ae;
    function Fe(e, t) {
      if (me(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !me(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Dt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Wi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ui) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(Dt(a));
      }
    }
    function yy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return sR(e, u, s, f, p);
    }
    function sR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Ui) && (f = s + a), g === i && (u === 0 || g.nodeType === Ui) && (p = s + u), g.nodeType === Ui && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          b = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = b, b = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function cR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Wi(e, f), g = Wi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function h0(e) {
      return e && e.nodeType === Ui;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : h0(e) ? !1 : h0(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fR(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function dR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = ml(); t instanceof e.HTMLIFrameElement; ) {
        if (dR(t))
          e = t.contentWindow;
        else
          return t;
        t = ml(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function pR() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? hR(e) : null
      };
    }
    function vR(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fR(a)) {
        i !== null && gy(a) && mR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function hR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yy(e), t || {
        start: 0,
        end: 0
      };
    }
    function mR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cR(e, t);
    }
    var yR = pn && "documentMode" in document && document.documentMode <= 11;
    function gR() {
      hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, Sy = null, Id = null, Ey = !1;
    function SR(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function ER(e) {
      return e.window === e ? e.document : e.nodeType === ni ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = ER(a);
      if (!(Ey || ff == null || ff !== ml(i))) {
        var u = SR(ff);
        if (!Id || !Fe(Id, u)) {
          Id = u;
          var s = uh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new Jc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ff;
          }
        }
      }
    }
    function CR(e, t, a, i, u, s, f) {
      var p = a ? mf(a) : window;
      switch (t) {
        case "focusin":
          (rh(p) || p.contentEditable === "true") && (ff = p, Sy = a, Id = null);
          break;
        case "focusout":
          ff = null, Sy = null, Id = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, g0(e, i, u);
          break;
        case "selectionchange":
          if (yR)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, u);
      }
    }
    function ah(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: ah("Animation", "AnimationEnd"),
      animationiteration: ah("Animation", "AnimationIteration"),
      animationstart: ah("Animation", "AnimationStart"),
      transitionend: ah("Transition", "TransitionEnd")
    }, Cy = {}, S0 = {};
    pn && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function ih(e) {
      if (Cy[e])
        return Cy[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return Cy[e] = t[a];
      return e;
    }
    var E0 = ih("animationend"), C0 = ih("animationiteration"), R0 = ih("animationstart"), T0 = ih("transitionend"), w0 = /* @__PURE__ */ new Map(), x0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function xo(e, t) {
      w0.set(e, t), hr(t, [e]);
    }
    function RR() {
      for (var e = 0; e < x0.length; e++) {
        var t = x0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xo(a, "on" + i);
      }
      xo(E0, "onAnimationEnd"), xo(C0, "onAnimationIteration"), xo(R0, "onAnimationStart"), xo("dblclick", "onDoubleClick"), xo("focusin", "onFocus"), xo("focusout", "onBlur"), xo(T0, "onTransitionEnd");
    }
    function TR(e, t, a, i, u, s, f) {
      var p = w0.get(t);
      if (p !== void 0) {
        var v = Jc, y = t;
        switch (t) {
          case "keypress":
            if (vu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Kv;
            break;
          case "focusin":
            y = "focus", v = bs;
            break;
          case "focusout":
            y = "blur", v = bs;
            break;
          case "beforeblur":
          case "afterblur":
            v = bs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ef;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Iv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hd;
            break;
          case E0:
          case C0:
          case R0:
            v = oy;
            break;
          case T0:
            v = Ll;
            break;
          case "scroll":
            v = Ud;
            break;
          case "wheel":
            v = yu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Wv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Jv;
            break;
        }
        var g = (s & Xl) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = _R(a, p, i.type, g, b);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    RR(), q(), n(), gR(), lf();
    function wR(e, t, a, i, u, s, f) {
      TR(e, t, a, i, u, s);
      var p = (s & qm) === 0;
      p && (Ce(e, t, a, i, u), L(e, t, a, i, u), CR(e, t, a, i, u), my(e, t, a, i, u));
    }
    var Qd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Qd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Hi(i, t, void 0, e), e.currentTarget = null;
    }
    function xR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          b0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          b0(e, M, w), i = b;
        }
    }
    function _0(e, t) {
      for (var a = (t & Xl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xR(s, f, a);
      }
      sd();
    }
    function bR(e, t, a, i, u) {
      var s = uc(a), f = [];
      wR(f, e, i, a, s, t), _0(f, t);
    }
    function Sn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nw(t), u = OR(e);
      i.has(u) || (D0(t, e, es, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Xl), D0(a, e, i, t);
    }
    var lh = "_reactListening" + Math.random().toString(36).slice(2);
    function Wd(e) {
      if (!e[lh]) {
        e[lh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === ni ? e : e.ownerDocument;
        t !== null && (t[lh] || (t[lh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Xc(e, t, s, f) : Ii(e, t, s) : f !== void 0 ? zd(e, t, s, f) : Co(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & Fi) && !(t & es)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ue || v === Se) {
              var y = p.stateNode.containerInfo;
              if (k0(y, f))
                break;
              if (v === Se)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === ue || b === Se) {
                    var w = g.stateNode.containerInfo;
                    if (k0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = zs(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === ce || U === Be) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      id(function() {
        return bR(e, t, a, s);
      });
    }
    function Gd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _R(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === ce && w !== null && (g = w, p !== null)) {
          var U = Zl(y, p);
          U != null && v.push(Gd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function uh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ce && f !== null) {
          var v = f, y = Zl(u, a);
          y != null && i.unshift(Gd(u, y, v));
          var g = Zl(u, t);
          g != null && i.push(Gd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ce);
      return e || null;
    }
    function DR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = pf(s))
        u++;
      for (var f = 0, p = i; p; p = pf(p))
        f++;
      for (; u - f > 0; )
        a = pf(a), u--;
      for (; f - u > 0; )
        i = pf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pf(a), i = pf(i);
      }
      return null;
    }
    function O0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ce && g !== null) {
          var w = g;
          if (u) {
            var M = Zl(p, s);
            M != null && f.unshift(Gd(p, M, w));
          } else if (!u) {
            var U = Zl(p, s);
            U != null && f.push(Gd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kR(e, t, a, i, u) {
      var s = i && u ? DR(i, u) : null;
      i !== null && O0(e, t, i, s, !1), u !== null && a !== null && O0(e, a, u, s, !0);
    }
    function OR(e, t) {
      return e + "__bubble";
    }
    var Ya = !1, qd = "dangerouslySetInnerHTML", oh = "suppressContentEditableWarning", bo = "suppressHydrationWarning", L0 = "autoFocus", Ms = "children", Ns = "style", sh = "__html", xy, ch, Xd, M0, fh, N0, z0;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ch = function(e, t) {
      lc(e, t), ed(e, t), hv(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: qt
      });
    }, N0 = pn && !document.documentMode, Xd = function(e, t, a) {
      if (!Ya) {
        var i = dh(a), u = dh(t);
        u !== i && (Ya = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, fh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, z0 = function(e, t) {
      var a = e.namespaceURI === zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LR = /\r\n?/g, MR = /\u0000|\uFFFD/g;
    function dh(e) {
      $r(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LR, `
`).replace(MR, "");
    }
    function ph(e, t, a, i) {
      var u = dh(t), s = dh(e);
      if (s !== u && (i && (Ya || (Ya = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ve))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === ni ? e : e.ownerDocument;
    }
    function NR() {
    }
    function vh(e) {
      e.onclick = NR;
    }
    function zR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ns)
            f && Object.freeze(f), iv(t, f);
          else if (s === qd) {
            var p = f ? f[sh] : void 0;
            p != null && Gp(t, p);
          } else if (s === Ms)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && nc(t, f);
            } else typeof f == "number" && nc(t, "" + f);
          else s === oh || s === bo || s === L0 || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && fh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function UR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ns ? iv(e, f) : s === qd ? Gp(e, f) : s === Ms ? nc(e, f) : pa(e, s, f, i);
      }
    }
    function AR(e, t, a, i) {
      var u, s = U0(a), f, p = i;
      if (p === zi && (p = ec(e)), p === zi) {
        if (u = Ai(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === zi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FR(e, t) {
      return U0(t).createTextNode(e);
    }
    function jR(e, t, a, i) {
      var u = Ai(t, a);
      ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Qd.length; f++)
            Sn(Qd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a), s = a;
          break;
        case "select":
          Xo(e, a), s = qo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Ip(e, a), s = If(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ac(t, s), zR(t, e, i, s, u), t) {
        case "input":
          ka(e), G(e, a, !1);
          break;
        case "textarea":
          ka(e), Wp(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          $f(e, a);
          break;
        default:
          typeof s.onClick == "function" && vh(e);
          break;
      }
    }
    function HR(e, t, a, i, u) {
      ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = qo(e, a), p = qo(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && vh(e);
          break;
      }
      ac(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ns) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === qd || v === Ms || v === oh || v === bo || v === L0 || (it.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Ns)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === qd) {
            var U = w ? w[sh] : void 0, j = M ? M[sh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ms ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === oh || v === bo || (it.hasOwnProperty(v) ? (w != null && (typeof w != "function" && fh(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Zo(g, p[Ns]), (s = s || []).push(Ns, g)), s;
    }
    function VR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = Ai(a, i), f = Ai(a, u);
      switch (UR(e, t, s, f), a) {
        case "input":
          A(e, u);
          break;
        case "textarea":
          Qp(e, u);
          break;
        case "select":
          Hm(e, u);
          break;
      }
    }
    function PR(e) {
      {
        var t = e.toLowerCase();
        return ic.hasOwnProperty(t) && ic[t] || null;
      }
    }
    function BR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ai(t, a), ch(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Qd.length; y++)
            Sn(Qd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Ip(e, a), Sn("invalid", e);
          break;
      }
      ac(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ms)
            typeof j == "string" ? e.textContent !== j && (a[bo] !== !0 && ph(e.textContent, j, s, f), M = [Ms, j]) : typeof j == "number" && e.textContent !== "" + j && (a[bo] !== !0 && ph(e.textContent, j, s, f), M = [Ms, "" + j]);
          else if (it.hasOwnProperty(U))
            j != null && (typeof j != "function" && fh(U, j), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Oe = p && ze ? null : xr(U);
            if (a[bo] !== !0) {
              if (!(U === oh || U === bo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === qd) {
                  var Te = e.innerHTML, Rt = j ? j[sh] : void 0;
                  if (Rt != null) {
                    var mt = z0(e, Rt);
                    mt !== Te && Xd(U, Te, mt);
                  }
                } else if (U === Ns) {
                  if (v.delete(U), N0) {
                    var k = Wm(j);
                    ae = e.getAttribute("style"), k !== ae && Xd(U, ae, k);
                  }
                } else if (p && !ze)
                  v.delete(U.toLowerCase()), ae = ci(e, U, j), j !== ae && Xd(U, ae, j);
                else if (!hn(U, Oe, p) && !Pt(U, j, Oe, p)) {
                  var H = !1;
                  if (Oe !== null)
                    v.delete(Oe.attributeName), ae = da(e, U, j, Oe);
                  else {
                    var O = i;
                    if (O === zi && (O = ec(t)), O === zi)
                      v.delete(U.toLowerCase());
                    else {
                      var W = PR(U);
                      W !== null && W !== U && (H = !0, v.delete(W)), v.delete(U);
                    }
                    ae = ci(e, U, j);
                  }
                  var fe = ze;
                  !fe && j !== ae && !H && Xd(U, ae, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[bo] !== !0 && M0(v), t) {
        case "input":
          ka(e), G(e, a, !0);
          break;
        case "textarea":
          ka(e), Wp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && vh(e);
          break;
      }
      return M;
    }
    function $R(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function by(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function _y(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function YR(e, t, a) {
      switch (t) {
        case "input":
          Ue(e, a);
          return;
        case "textarea":
          Qf(e, a);
          return;
        case "select":
          Vm(e, a);
          return;
      }
    }
    var Kd = function() {
    }, Zd = function() {
    };
    {
      var IR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], A0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], QR = A0.concat(["button"]), WR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Zd = function(e, t) {
        var a = ot({}, e || F0), i = {
          tag: t
        };
        return A0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), IR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return WR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, qR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, j0 = {};
      Kd = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = GR(e, u) ? null : i, f = s ? null : qR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!j0[y]) {
            j0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var hh = "suppressHydrationWarning", mh = "$", yh = "/$", Jd = "$?", ep = "$!", XR = "style", Oy = null, Ly = null;
    function KR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ni:
        case Gl: {
          t = i === ni ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Gf(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Zd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZR(e, t, a) {
      {
        var i = e, u = Gf(i.namespace, t), s = Zd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sD(e) {
      return e;
    }
    function JR(e) {
      Oy = So(), Ly = pR();
      var t = null;
      return aa(!1), t;
    }
    function eT(e) {
      vR(Ly), aa(Oy), Oy = null, Ly = null;
    }
    function tT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Kd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Zd(f.ancestorInfo, e);
          Kd(null, p, v);
        }
        s = f.namespace;
      }
      var y = AR(e, t, a, s);
      return rp(u, y), Hy(y, t), y;
    }
    function nT(e, t) {
      e.appendChild(t);
    }
    function rT(e, t, a, i, u) {
      switch (jR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Zd(f.ancestorInfo, t);
          Kd(null, p, v);
        }
      }
      return HR(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iT(e, t, a, i) {
      {
        var u = a;
        Kd(null, e, u.ancestorInfo);
      }
      var s = FR(e, t);
      return rp(i, s), s;
    }
    function lT() {
      var e = window.event;
      return e === void 0 ? gi : qc(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, uT = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, H0 = typeof Promise == "function" ? Promise : void 0, oT = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(sT);
    } : Ny;
    function sT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fT(e, t, a, i, u, s) {
      VR(e, t, a, i, u), Hy(e, u);
    }
    function V0(e) {
      nc(e, "");
    }
    function dT(e, t, a) {
      e.nodeValue = a;
    }
    function pT(e, t) {
      e.appendChild(t);
    }
    function vT(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && vh(a);
    }
    function hT(e, t, a) {
      e.insertBefore(t, a);
    }
    function mT(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yT(e, t) {
      e.removeChild(t);
    }
    function gT(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === yh)
            if (i === 0) {
              e.removeChild(u), xn(t);
              return;
            } else
              i--;
          else (s === mh || s === Jd || s === ep) && i++;
        }
        a = u;
      } while (a);
      xn(t);
    }
    function ST(e, t) {
      e.nodeType === Un ? Uy(e.parentNode, t) : e.nodeType === Gr && Uy(e, t), xn(e);
    }
    function ET(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function CT(e) {
      e.nodeValue = "";
    }
    function RT(e, t) {
      e = e;
      var a = t[XR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = rc("display", i);
    }
    function TT(e, t) {
      e.nodeValue = t;
    }
    function wT(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === ni && e.documentElement && e.removeChild(e.documentElement);
    }
    function xT(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bT(e, t) {
      return t === "" || e.nodeType !== Ui ? null : e;
    }
    function _T(e) {
      return e.nodeType !== Un ? null : e;
    }
    function P0(e) {
      return e.data === Jd;
    }
    function Ay(e) {
      return e.data === ep;
    }
    function DT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kT(e, t) {
      e._reactRetry = t;
    }
    function gh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Ui)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === mh || a === ep || a === Jd)
            break;
          if (a === yh)
            return null;
        }
      }
      return e;
    }
    function tp(e) {
      return gh(e.nextSibling);
    }
    function OT(e) {
      return gh(e.firstChild);
    }
    function LT(e) {
      return gh(e.firstChild);
    }
    function MT(e) {
      return gh(e.nextSibling);
    }
    function NT(e, t, a, i, u, s, f) {
      rp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Re) !== Ee;
      return BR(e, t, a, p, i, y, f);
    }
    function zT(e, t, a, i) {
      return rp(a, e), a.mode & Re, $R(e, t);
    }
    function UT(e, t) {
      rp(t, e);
    }
    function AT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === yh) {
            if (a === 0)
              return tp(t);
            a--;
          } else (i === mh || i === ep || i === Jd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === mh || i === ep || i === Jd) {
            if (a === 0)
              return t;
            a--;
          } else i === yh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FT(e) {
      xn(e);
    }
    function jT(e) {
      xn(e);
    }
    function HT(e) {
      return e !== "head" && e !== "body";
    }
    function VT(e, t, a, i) {
      var u = !0;
      ph(t.nodeValue, a, i, u);
    }
    function PT(e, t, a, i, u, s) {
      if (t[hh] !== !0) {
        var f = !0;
        ph(i.nodeValue, u, s, f);
      }
    }
    function BT(e, t) {
      t.nodeType === Gr ? by(e, t) : t.nodeType === Un || _y(e, t);
    }
    function $T(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? by(a, t) : t.nodeType === Un || _y(a, t));
      }
    }
    function YT(e, t, a, i, u) {
      (u || t[hh] !== !0) && (i.nodeType === Gr ? by(a, i) : i.nodeType === Un || _y(a, i));
    }
    function IT(e, t, a) {
      Dy(e, t);
    }
    function QT(e, t) {
      ky(e, t);
    }
    function WT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function GT(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function qT(e, t, a, i, u, s) {
      (s || t[hh] !== !0) && Dy(a, i);
    }
    function XT(e, t, a, i, u) {
      (u || t[hh] !== !0) && ky(a, i);
    }
    function KT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZT(e) {
      Wd(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, Fy = "__reactProps$" + vf, np = "__reactContainer$" + vf, jy = "__reactEvents$" + vf, JT = "__reactListeners$" + vf, ew = "__reactHandles$" + vf;
    function tw(e) {
      delete e[hf], delete e[Fy], delete e[jy], delete e[JT], delete e[ew];
    }
    function rp(e, t) {
      t[hf] = e;
    }
    function Sh(e, t) {
      t[np] = e;
    }
    function $0(e) {
      e[np] = null;
    }
    function ap(e) {
      return !!e[np];
    }
    function zs(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[np] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[hf];
              if (s)
                return s;
              u = B0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[hf] || e[np];
      return t && (t.tag === ce || t.tag === Be || t.tag === _e || t.tag === ue) ? t : null;
    }
    function mf(e) {
      if (e.tag === ce || e.tag === Be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Eh(e) {
      return e[Fy] || null;
    }
    function Hy(e, t) {
      e[Fy] = t;
    }
    function nw(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var Y0 = {}, I0 = F.ReactDebugCurrentFrame;
    function Ch(e) {
      if (e) {
        var t = e._owner, a = pi(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Ch(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Ch(null)), p instanceof Error && !(p.message in Y0) && (Y0[p.message] = !0, Ch(u), S("Failed %s type: %s", a, p.message), Ch(null));
          }
      }
    }
    var Vy = [], Rh;
    Rh = [];
    var gu = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (gu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Rh[gu] && S("Unexpected Fiber popped."), e.current = Vy[gu], Vy[gu] = null, Rh[gu] = null, gu--;
    }
    function la(e, t, a) {
      gu++, Vy[gu] = e.current, Rh[gu] = a, e.current = t;
    }
    var Py;
    Py = {};
    var li = {};
    Object.freeze(li);
    var Su = Do(li), Nl = Do(!1), By = li;
    function yf(e, t, a) {
      return a && zl(t) ? By : Su.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Qe(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function Th() {
      return Nl.current;
    }
    function zl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wh(e) {
      ia(Nl, e), ia(Su, e);
    }
    function $y(e) {
      ia(Nl, e), ia(Su, e);
    }
    function W0(e, t, a) {
      {
        if (Su.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Su, t, e), la(Nl, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            Py[s] || (Py[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          Gi(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return By = Su.current, la(Su, a, e), la(Nl, Nl.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = G0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Nl, e), ia(Su, e), la(Su, u, e), la(Nl, a, e);
        } else
          ia(Nl, e), la(Nl, a, e);
      }
    }
    function rw(e) {
      {
        if (!vd(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ue:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (zl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ko = 0, bh = 1, Eu = null, Yy = !1, Iy = !1;
    function X0(e) {
      Eu === null ? Eu = [e] : Eu.push(e);
    }
    function aw(e) {
      Yy = !0, X0(e);
    }
    function K0() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && Eu !== null) {
        Iy = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = Eu;
          for (wn(Ln); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Eu = null, Yy = !1;
        } catch (s) {
          throw Eu !== null && (Eu = Eu.slice(e + 1)), vc(mc, Oo), s;
        } finally {
          wn(t), Iy = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, _h = null, Dh = 0, Ri = [], Ti = 0, Us = null, Cu = 1, Ru = "";
    function iw(e) {
      return Fs(), (e.flags & fd) !== De;
    }
    function lw(e) {
      return Fs(), Dh;
    }
    function uw() {
      var e = Ru, t = Cu, a = t & ~ow(t);
      return a.toString(32) + e;
    }
    function As(e, t) {
      Fs(), Sf[Ef++] = Dh, Sf[Ef++] = _h, _h = e, Dh = t;
    }
    function Z0(e, t, a) {
      Fs(), Ri[Ti++] = Cu, Ri[Ti++] = Ru, Ri[Ti++] = Us, Us = e;
      var i = Cu, u = Ru, s = kh(i) - 1, f = i & ~(1 << s), p = a + 1, v = kh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = kh(t) + M, j = p << M, ae = j | w, Oe = b + u;
        Cu = 1 << U | ae, Ru = Oe;
      } else {
        var Te = p << s, Rt = Te | f, mt = u;
        Cu = 1 << v | Rt, Ru = mt;
      }
    }
    function Qy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        As(e, a), Z0(e, a, i);
      }
    }
    function kh(e) {
      return 32 - to(e);
    }
    function ow(e) {
      return 1 << kh(e) - 1;
    }
    function Wy(e) {
      for (; e === _h; )
        _h = Sf[--Ef], Sf[Ef] = null, Dh = Sf[--Ef], Sf[Ef] = null;
      for (; e === Us; )
        Us = Ri[--Ti], Ri[Ti] = null, Ru = Ri[--Ti], Ri[Ti] = null, Cu = Ri[--Ti], Ri[Ti] = null;
    }
    function sw() {
      return Fs(), Us !== null ? {
        id: Cu,
        overflow: Ru
      } : null;
    }
    function cw(e, t) {
      Fs(), Ri[Ti++] = Cu, Ri[Ti++] = Ru, Ri[Ti++] = Us, Cu = t.id, Ru = t.overflow, Us = e;
    }
    function Fs() {
      Mr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, wi = null, qi = !1, js = !1, Lo = null;
    function fw() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function J0() {
      js = !0;
    }
    function dw() {
      return js;
    }
    function pw(e) {
      var t = e.stateNode.containerInfo;
      return wi = LT(t), Lr = e, qi = !0, Lo = null, js = !1, !0;
    }
    function vw(e, t, a) {
      return wi = MT(t), Lr = e, qi = !0, Lo = null, js = !1, a !== null && cw(e, a), !0;
    }
    function eE(e, t) {
      switch (e.tag) {
        case ue: {
          BT(e.stateNode.containerInfo, t);
          break;
        }
        case ce: {
          var a = (e.mode & Re) !== Ee;
          YT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case _e: {
          var i = e.memoizedState;
          i.dehydrated !== null && $T(i.dehydrated, t);
          break;
        }
      }
    }
    function tE(e, t) {
      eE(e, t);
      var a = g_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (js)
          return;
        switch (e.tag) {
          case ue: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ce:
                var i = t.type;
                t.pendingProps, IT(a, i);
                break;
              case Be:
                var u = t.pendingProps;
                QT(a, u);
                break;
            }
            break;
          }
          case ce: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ce: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Re) !== Ee;
                qT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Be: {
                var b = t.pendingProps, w = (e.mode & Re) !== Ee;
                XT(
                  s,
                  f,
                  p,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case ce:
                var j = t.type;
                t.pendingProps, WT(U, j);
                break;
              case Be:
                var ae = t.pendingProps;
                GT(U, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function nE(e, t) {
      t.flags = t.flags & ~Na | tn, Gy(e, t);
    }
    function rE(e, t) {
      switch (e.tag) {
        case ce: {
          var a = e.type;
          e.pendingProps;
          var i = xT(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, wi = OT(i), !0) : !1;
        }
        case Be: {
          var u = e.pendingProps, s = bT(t, u);
          return s !== null ? (e.stateNode = s, Lr = e, wi = null, !0) : !1;
        }
        case _e: {
          var f = _T(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: sw(),
              retryLane: Cr
            };
            e.memoizedState = p;
            var v = S_(f);
            return v.return = e, e.child = v, Lr = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & Re) !== Ee && (e.flags & $e) === De;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (qi) {
        var t = wi;
        if (!t) {
          qy(e) && (Gy(Lr, e), Xy()), nE(Lr, e), qi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!rE(e, t)) {
          qy(e) && (Gy(Lr, e), Xy()), t = tp(a);
          var i = Lr;
          if (!t || !rE(e, t)) {
            nE(Lr, e), qi = !1, Lr = e;
            return;
          }
          tE(i, a);
        }
      }
    }
    function hw(e, t, a) {
      var i = e.stateNode, u = !js, s = NT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zT(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case ue: {
              var s = u.stateNode.containerInfo, f = (u.mode & Re) !== Ee;
              VT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ce: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Re) !== Ee;
              PT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      UT(a, e);
    }
    function gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return AT(a);
    }
    function aE(e) {
      for (var t = e.return; t !== null && t.tag !== ce && t.tag !== ue && t.tag !== _e; )
        t = t.return;
      Lr = t;
    }
    function Oh(e) {
      if (e !== Lr)
        return !1;
      if (!qi)
        return aE(e), qi = !0, !1;
      if (e.tag !== ue && (e.tag !== ce || HT(e.type) && !My(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (qy(e))
            iE(e), Xy();
          else
            for (; t; )
              tE(e, t), t = tp(t);
      }
      return aE(e), e.tag === _e ? wi = gw(e) : wi = Lr ? tp(e.stateNode) : null, !0;
    }
    function Sw() {
      return qi && wi !== null;
    }
    function iE(e) {
      for (var t = wi; t; )
        eE(e, t), t = tp(t);
    }
    function Cf() {
      Lr = null, wi = null, qi = !1, js = !1;
    }
    function lE() {
      Lo !== null && (JC(Lo), Lo = null);
    }
    function Mr() {
      return qi;
    }
    function Zy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var Ew = F.ReactCurrentBatchConfig, Cw = null;
    function Rw() {
      return Ew.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Tw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ct && (t = a), a = a.return;
        return t;
      }, Hs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ip = [], lp = [], up = [], op = [], sp = [], cp = [], Vs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & ct && typeof t.UNSAFE_componentWillMount == "function" && lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillUpdate == "function" && cp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(w) {
          e.add(Qe(w) || "Component"), Vs.add(w.type);
        }), ip = []);
        var t = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(w) {
          t.add(Qe(w) || "Component"), Vs.add(w.type);
        }), lp = []);
        var a = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(w) {
          a.add(Qe(w) || "Component"), Vs.add(w.type);
        }), up = []);
        var i = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          i.add(Qe(w) || "Component"), Vs.add(w.type);
        }), op = []);
        var u = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          u.add(Qe(w) || "Component"), Vs.add(w.type);
        }), sp = []);
        var s = /* @__PURE__ */ new Set();
        if (cp.length > 0 && (cp.forEach(function(w) {
          s.add(Qe(w) || "Component"), Vs.add(w.type);
        }), cp = []), t.size > 0) {
          var f = Hs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Hs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Hs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Hs(e);
          ft(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Hs(a);
          ft(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Hs(u);
          ft(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Lh = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = Tw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = Lh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Lh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), uE.add(s.type);
            });
            var u = Hs(i);
            try {
              Ft(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Rn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        ip = [], lp = [], up = [], op = [], sp = [], cp = [], Lh = /* @__PURE__ */ new Map();
      };
    }
    var Jy, eg, tg, ng, rg, oE = function(e, t) {
    };
    Jy = !1, eg = !1, tg = {}, ng = {}, rg = {}, oE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function ww(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function fp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ct || Ve) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !ww(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Qe(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Mh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Nh(e) {
      {
        var t = Qe(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function cE(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Mt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), W = H; W !== null; )
          W.key !== null ? O.set(W.key, W) : O.set(W.index, W), W = W.sibling;
        return O;
      }
      function u(k, H) {
        var O = qs(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= fd, H;
        var W = k.alternate;
        if (W !== null) {
          var fe = W.index;
          return fe < H ? (k.flags |= tn, H) : fe;
        } else
          return k.flags |= tn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= tn), k;
      }
      function p(k, H, O, W) {
        if (H === null || H.tag !== Be) {
          var fe = ZS(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var le = u(H, O);
          return le.return = k, le;
        }
      }
      function v(k, H, O, W) {
        var fe = O.type;
        if (fe === R)
          return g(k, H, O.props.children, W, O.key);
        if (H !== null && (H.elementType === fe || // Keep this check inline so it only runs on the false path:
        h1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof fe == "object" && fe !== null && fe.$$typeof === ut && sE(fe) === H.type)) {
          var le = u(H, O.props);
          return le.ref = fp(k, H, O), le.return = k, le._debugSource = O._source, le._debugOwner = O._owner, le;
        }
        var Pe = KS(O, k.mode, W);
        return Pe.ref = fp(k, H, O), Pe.return = k, Pe;
      }
      function y(k, H, O, W) {
        if (H === null || H.tag !== Se || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var fe = JS(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var le = u(H, O.children || []);
          return le.return = k, le;
        }
      }
      function g(k, H, O, W, fe) {
        if (H === null || H.tag !== Tt) {
          var le = Bo(O, k.mode, W, fe);
          return le.return = k, le;
        } else {
          var Pe = u(H, O);
          return Pe.return = k, Pe;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var W = ZS("" + H, k.mode, O);
          return W.return = k, W;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case fi: {
              var fe = KS(H, k.mode, O);
              return fe.ref = fp(k, null, H), fe.return = k, fe;
            }
            case br: {
              var le = JS(H, k.mode, O);
              return le.return = k, le;
            }
            case ut: {
              var Pe = H._payload, qe = H._init;
              return b(k, qe(Pe), O);
            }
          }
          if (St(H) || Za(H)) {
            var It = Bo(H, k.mode, O, null);
            return It.return = k, It;
          }
          Mh(k, H);
        }
        return typeof H == "function" && Nh(k), null;
      }
      function w(k, H, O, W) {
        var fe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return fe !== null ? null : p(k, H, "" + O, W);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case fi:
              return O.key === fe ? v(k, H, O, W) : null;
            case br:
              return O.key === fe ? y(k, H, O, W) : null;
            case ut: {
              var le = O._payload, Pe = O._init;
              return w(k, H, Pe(le), W);
            }
          }
          if (St(O) || Za(O))
            return fe !== null ? null : g(k, H, O, W, null);
          Mh(k, O);
        }
        return typeof O == "function" && Nh(k), null;
      }
      function M(k, H, O, W, fe) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var le = k.get(O) || null;
          return p(H, le, "" + W, fe);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case fi: {
              var Pe = k.get(W.key === null ? O : W.key) || null;
              return v(H, Pe, W, fe);
            }
            case br: {
              var qe = k.get(W.key === null ? O : W.key) || null;
              return y(H, qe, W, fe);
            }
            case ut:
              var It = W._payload, kt = W._init;
              return M(k, H, O, kt(It), fe);
          }
          if (St(W) || Za(W)) {
            var In = k.get(O) || null;
            return g(H, In, W, fe, null);
          }
          Mh(H, W);
        }
        return typeof W == "function" && Nh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case fi:
            case br:
              oE(k, O);
              var W = k.key;
              if (typeof W != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(W);
                break;
              }
              if (!H.has(W)) {
                H.add(W);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", W);
              break;
            case ut:
              var fe = k._payload, le = k._init;
              U(le(fe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, W) {
        for (var fe = null, le = 0; le < O.length; le++) {
          var Pe = O[le];
          fe = U(Pe, fe, k);
        }
        for (var qe = null, It = null, kt = H, In = 0, Ot = 0, jn = null; kt !== null && Ot < O.length; Ot++) {
          kt.index > Ot ? (jn = kt, kt = null) : jn = kt.sibling;
          var oa = w(k, kt, O[Ot], W);
          if (oa === null) {
            kt === null && (kt = jn);
            break;
          }
          e && kt && oa.alternate === null && t(k, kt), In = s(oa, In, Ot), It === null ? qe = oa : It.sibling = oa, It = oa, kt = jn;
        }
        if (Ot === O.length) {
          if (a(k, kt), Mr()) {
            var Hr = Ot;
            As(k, Hr);
          }
          return qe;
        }
        if (kt === null) {
          for (; Ot < O.length; Ot++) {
            var oi = b(k, O[Ot], W);
            oi !== null && (In = s(oi, In, Ot), It === null ? qe = oi : It.sibling = oi, It = oi);
          }
          if (Mr()) {
            var Ta = Ot;
            As(k, Ta);
          }
          return qe;
        }
        for (var wa = i(k, kt); Ot < O.length; Ot++) {
          var sa = M(wa, k, Ot, O[Ot], W);
          sa !== null && (e && sa.alternate !== null && wa.delete(sa.key === null ? Ot : sa.key), In = s(sa, In, Ot), It === null ? qe = sa : It.sibling = sa, It = sa);
        }
        if (e && wa.forEach(function(Vf) {
          return t(k, Vf);
        }), Mr()) {
          var ku = Ot;
          As(k, ku);
        }
        return qe;
      }
      function ae(k, H, O, W) {
        var fe = Za(O);
        if (typeof fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === fe && (Jy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jy = !0);
          var le = fe.call(O);
          if (le)
            for (var Pe = null, qe = le.next(); !qe.done; qe = le.next()) {
              var It = qe.value;
              Pe = U(It, Pe, k);
            }
        }
        var kt = fe.call(O);
        if (kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Ot = null, jn = H, oa = 0, Hr = 0, oi = null, Ta = kt.next(); jn !== null && !Ta.done; Hr++, Ta = kt.next()) {
          jn.index > Hr ? (oi = jn, jn = null) : oi = jn.sibling;
          var wa = w(k, jn, Ta.value, W);
          if (wa === null) {
            jn === null && (jn = oi);
            break;
          }
          e && jn && wa.alternate === null && t(k, jn), oa = s(wa, oa, Hr), Ot === null ? In = wa : Ot.sibling = wa, Ot = wa, jn = oi;
        }
        if (Ta.done) {
          if (a(k, jn), Mr()) {
            var sa = Hr;
            As(k, sa);
          }
          return In;
        }
        if (jn === null) {
          for (; !Ta.done; Hr++, Ta = kt.next()) {
            var ku = b(k, Ta.value, W);
            ku !== null && (oa = s(ku, oa, Hr), Ot === null ? In = ku : Ot.sibling = ku, Ot = ku);
          }
          if (Mr()) {
            var Vf = Hr;
            As(k, Vf);
          }
          return In;
        }
        for (var $p = i(k, jn); !Ta.done; Hr++, Ta = kt.next()) {
          var Bl = M($p, k, Hr, Ta.value, W);
          Bl !== null && (e && Bl.alternate !== null && $p.delete(Bl.key === null ? Hr : Bl.key), oa = s(Bl, oa, Hr), Ot === null ? In = Bl : Ot.sibling = Bl, Ot = Bl);
        }
        if (e && $p.forEach(function(X_) {
          return t(k, X_);
        }), Mr()) {
          var q_ = Hr;
          As(k, q_);
        }
        return In;
      }
      function Oe(k, H, O, W) {
        if (H !== null && H.tag === Be) {
          a(k, H.sibling);
          var fe = u(H, O);
          return fe.return = k, fe;
        }
        a(k, H);
        var le = ZS(O, k.mode, W);
        return le.return = k, le;
      }
      function Te(k, H, O, W) {
        for (var fe = O.key, le = H; le !== null; ) {
          if (le.key === fe) {
            var Pe = O.type;
            if (Pe === R) {
              if (le.tag === Tt) {
                a(k, le.sibling);
                var qe = u(le, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (le.elementType === Pe || // Keep this check inline so it only runs on the false path:
            h1(le, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Pe == "object" && Pe !== null && Pe.$$typeof === ut && sE(Pe) === le.type) {
              a(k, le.sibling);
              var It = u(le, O.props);
              return It.ref = fp(k, le, O), It.return = k, It._debugSource = O._source, It._debugOwner = O._owner, It;
            }
            a(k, le);
            break;
          } else
            t(k, le);
          le = le.sibling;
        }
        if (O.type === R) {
          var kt = Bo(O.props.children, k.mode, W, O.key);
          return kt.return = k, kt;
        } else {
          var In = KS(O, k.mode, W);
          return In.ref = fp(k, H, O), In.return = k, In;
        }
      }
      function Rt(k, H, O, W) {
        for (var fe = O.key, le = H; le !== null; ) {
          if (le.key === fe)
            if (le.tag === Se && le.stateNode.containerInfo === O.containerInfo && le.stateNode.implementation === O.implementation) {
              a(k, le.sibling);
              var Pe = u(le, O.children || []);
              return Pe.return = k, Pe;
            } else {
              a(k, le);
              break;
            }
          else
            t(k, le);
          le = le.sibling;
        }
        var qe = JS(O, k.mode, W);
        return qe.return = k, qe;
      }
      function mt(k, H, O, W) {
        var fe = typeof O == "object" && O !== null && O.type === R && O.key === null;
        if (fe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case fi:
              return f(Te(k, H, O, W));
            case br:
              return f(Rt(k, H, O, W));
            case ut:
              var le = O._payload, Pe = O._init;
              return mt(k, H, Pe(le), W);
          }
          if (St(O))
            return j(k, H, O, W);
          if (Za(O))
            return ae(k, H, O, W);
          Mh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Oe(k, H, "" + O, W)) : (typeof O == "function" && Nh(k), a(k, H));
      }
      return mt;
    }
    var Rf = cE(!0), fE = cE(!1);
    function xw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = qs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = qs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bw(e, t) {
      for (var a = e.child; a !== null; )
        p_(a, t), a = a.sibling;
    }
    var ag = Do(null), ig;
    ig = {};
    var zh = null, Tf = null, lg = null, Uh = !1;
    function Ah() {
      zh = null, Tf = null, lg = null, Uh = !1;
    }
    function dE() {
      Uh = !0;
    }
    function pE() {
      Uh = !1;
    }
    function vE(e, t, a) {
      la(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      ia(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (cu(i.childLanes, t) ? u !== null && !cu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      Dw(e, t, a);
    }
    function Dw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = oo(a), v = Tu(Zt, p);
                v.tag = jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ke(w.lanes, a)), og(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === $t) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Ke(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), og(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function wf(e, t) {
      zh = e, Tf = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && bp(), a.firstContext = null);
      }
    }
    function tr(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Tf === null) {
          if (zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Tf = a, zh.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          Tf = Tf.next = a;
      }
      return t;
    }
    var Ps = null;
    function sg(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function kw() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Ia(e, t) {
      return Fh(e, t);
    }
    var Mw = Fh;
    function Fh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (tn | Na)) !== De && f1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (tn | Na)) !== De && f1(e), i = u, u = u.return;
      if (i.tag === ue) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, jh = 2, cg = 3, Hh = !1, fg, Vh;
    fg = !1, Vh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: B
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function gE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Tu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: mE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Mo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Vh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), Ob()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mw(e, a);
      } else
        return Lw(e, u, t, a);
    }
    function Ph(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (bd(a)) {
          var s = u.lanes;
          s = Vc(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, _d(e, f);
        }
      }
    }
    function pg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Nw(e, t, a, i, u, s) {
      switch (a.tag) {
        case yE: {
          var f = a.payload;
          if (typeof f == "function") {
            dE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ct) {
                An(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              pE();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & ~Kn | $e;
        case mE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dE(), y = v.call(s, i, u);
            {
              if (e.mode & ct) {
                An(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              pE();
            }
          } else
            y = v;
          return y == null ? i : ot({}, i, y);
        }
        case jh:
          return Hh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      Hh = !1, Vh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = B, j = null, ae = null, Oe = null, Te = s;
        do {
          var Rt = Te.lane, mt = Te.eventTime;
          if (cu(i, Rt)) {
            if (Oe !== null) {
              var H = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Oe = Oe.next = H;
            }
            M = Nw(e, u, Te, M, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== Fn) {
              e.flags |= mi;
              var W = u.effects;
              W === null ? u.effects = [Te] : W.push(Te);
            }
          } else {
            var k = {
              eventTime: mt,
              lane: Rt,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Oe === null ? (ae = Oe = k, j = M) : Oe = Oe.next = k, U = Ke(U, Rt);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var fe = p, le = fe.next;
            fe.next = null, Te = le, u.lastBaseUpdate = fe, u.shared.pending = null;
          }
        } while (!0);
        Oe === null && (j = M), u.baseState = j, u.firstBaseUpdate = ae, u.lastBaseUpdate = Oe;
        var Pe = u.shared.interleaved;
        if (Pe !== null) {
          var qe = Pe;
          do
            U = Ke(U, qe.lane), qe = qe.next;
          while (qe !== Pe);
        } else s === null && (u.shared.lanes = B);
        jp(U), e.lanes = U, e.memoizedState = M;
      }
      Vh = null;
    }
    function zw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Hh = !1;
    }
    function $h() {
      return Hh;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, zw(f, a));
        }
    }
    var dp = {}, No = Do(dp), pp = Do(dp), Yh = Do(dp);
    function Ih(e) {
      if (e === dp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CE() {
      var e = Ih(Yh.current);
      return e;
    }
    function vg(e, t) {
      la(Yh, t, e), la(pp, e, e), la(No, dp, e);
      var a = KR(t);
      ia(No, e), la(No, a, e);
    }
    function xf(e) {
      ia(No, e), ia(pp, e), ia(Yh, e);
    }
    function hg() {
      var e = Ih(No.current);
      return e;
    }
    function RE(e) {
      Ih(Yh.current);
      var t = Ih(No.current), a = ZR(t, e.type);
      t !== a && (la(pp, e, e), la(No, a, e));
    }
    function mg(e) {
      pp.current === e && (ia(No, e), ia(pp, e));
    }
    var Uw = 0, TE = 1, wE = 1, vp = 2, Ki = Do(Uw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & TE;
    }
    function gg(e, t) {
      return e & TE | t;
    }
    function Aw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(Ki, t, e);
    }
    function _f(e) {
      ia(Ki, e);
    }
    function Fw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P0(i) || Ay(i))
              return t;
          }
        } else if (t.tag === bt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $e) !== De;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qa = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), or = (
      /*    */
      4
    ), Nr = (
      /*   */
      8
    ), Sg = [];
    function Eg() {
      for (var e = 0; e < Sg.length; e++) {
        var t = Sg[e];
        t._workInProgressVersionPrimary = null;
      }
      Sg.length = 0;
    }
    function jw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = F.ReactCurrentDispatcher, hp = F.ReactCurrentBatchConfig, Cg, Df;
    Cg = /* @__PURE__ */ new Set();
    var Bs = B, Yt = null, sr = null, cr = null, Wh = !1, mp = !1, yp = 0, Hw = 0, Vw = 25, P = null, xi = null, Uo = -1, Rg = !1;
    function Ht() {
      {
        var e = P;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function te() {
      {
        var e = P;
        xi !== null && (Uo++, xi[Uo] !== e && Pw(e));
      }
    }
    function kf(e) {
      e != null && !St(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Pw(e) {
      {
        var t = Qe(Yt);
        if (!Cg.has(t) && (Cg.add(t), xi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = xi[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Tg(e, t) {
      if (Rg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!me(e[a], t[a]))
          return !1;
      return !0;
    }
    function Of(e, t, a, i, u, s) {
      Bs = s, Yt = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? se.current = QE : xi !== null ? se.current = IE : se.current = YE;
      var f = a(i, u);
      if (mp) {
        var p = 0;
        do {
          if (mp = !1, yp = 0, p >= Vw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, sr = null, cr = null, t.updateQueue = null, Uo = -1, se.current = WE, f = a(i, u);
        } while (mp);
      }
      se.current = lm, t._debugHookTypes = xi;
      var v = sr !== null && sr.next !== null;
      if (Bs = B, Yt = null, sr = null, cr = null, P = null, xi = null, Uo = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Re) !== Ee && S("Internal React error: Expected static flag was missing. Please notify the React team."), Wh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = yp !== 0;
      return yp = 0, e;
    }
    function xE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ga) !== Ee ? t.flags &= ~(tu | Kr | on | Je) : t.flags &= ~(on | Je), e.lanes = Ss(e.lanes, a);
    }
    function bE() {
      if (se.current = lm, Wh) {
        for (var e = Yt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Wh = !1;
      }
      Bs = B, Yt = null, sr = null, cr = null, xi = null, Uo = -1, P = null, HE = !1, mp = !1, yp = 0;
    }
    function Al() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cr === null ? Yt.memoizedState = cr = e : cr = cr.next = e, cr;
    }
    function bi() {
      var e;
      if (sr === null) {
        var t = Yt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sr.next;
      var a;
      if (cr === null ? a = Yt.memoizedState : a = cr.next, a !== null)
        cr = a, a = cr.next, sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        sr = e;
        var i = {
          memoizedState: sr.memoizedState,
          baseState: sr.baseState,
          baseQueue: sr.baseQueue,
          queue: sr.queue,
          next: null
        };
        cr === null ? Yt.memoizedState = cr = i : cr = cr.next = i;
      }
      return cr;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xg(e, t, a) {
      var i = Al(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Iw.bind(null, Yt, s);
      return [i.memoizedState, f];
    }
    function bg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = sr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, M = null, U = null, j = g;
        do {
          var ae = j.lane;
          if (cu(Bs, ae)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (j.hasEagerState)
              b = j.eagerState;
            else {
              var Rt = j.action;
              b = e(b, Rt);
            }
          } else {
            var Oe = {
              lane: ae,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (M = U = Oe, w = b) : U = U.next = Oe, Yt.lanes = Ke(Yt.lanes, ae), jp(ae);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = b : U.next = M, me(b, i.memoizedState) || bp(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var k = mt;
        do {
          var H = k.lane;
          Yt.lanes = Ke(Yt.lanes, H), jp(H), k = k.next;
        } while (k !== mt);
      } else f === null && (u.lanes = B);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function _g(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        me(p, i.memoizedState) || bp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function cD(e, t, a) {
    }
    function fD(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = Yt, u = Al(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Df || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Df = !0);
      } else {
        if (s = t(), !Df) {
          var p = t();
          me(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
        }
        var v = xm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(v, Bs) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, Zh(OE.bind(null, i, y, e), [e]), i.flags |= on, gp(ur | Nr, kE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Gh(e, t, a) {
      var i = Yt, u = bi(), s = t();
      if (!Df) {
        var f = t();
        me(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Df = !0);
      }
      var p = u.memoizedState, v = !me(p, s);
      v && (u.memoizedState = s, bp());
      var y = u.queue;
      if (Ep(OE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cr !== null && cr.memoizedState.tag & ur) {
        i.flags |= on, gp(ur | Nr, kE.bind(null, i, y, s, t), void 0, null);
        var g = xm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        gs(g, Bs) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= os;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Yt.updateQueue;
      if (u === null)
        u = _E(), Yt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && ME(e);
    }
    function OE(e, t, a) {
      var i = function() {
        LE(t) && ME(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !me(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Ia(e, be);
      t !== null && vr(t, e, be, Zt);
    }
    function qh(e) {
      var t = Al();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Qw.bind(null, Yt, a);
      return [t.memoizedState, i];
    }
    function kg(e) {
      return bg(wg);
    }
    function Og(e) {
      return _g(wg);
    }
    function gp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Yt.updateQueue;
      if (s === null)
        s = _E(), Yt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Lg(e) {
      var t = Al();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Xh(e) {
      var t = bi();
      return t.memoizedState;
    }
    function Sp(e, t, a, i) {
      var u = Al(), s = i === void 0 ? null : i;
      Yt.flags |= e, u.memoizedState = gp(ur | t, a, void 0, s);
    }
    function Kh(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
      if (sr !== null) {
        var p = sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = gp(t, a, f, s);
            return;
          }
        }
      }
      Yt.flags |= e, u.memoizedState = gp(ur | t, a, f, s);
    }
    function Zh(e, t) {
      return (Yt.mode & ga) !== Ee ? Sp(tu | on | Tl, Nr, e, t) : Sp(on | Tl, Nr, e, t);
    }
    function Ep(e, t) {
      return Kh(on, Nr, e, t);
    }
    function Mg(e, t) {
      return Sp(Je, Ul, e, t);
    }
    function Jh(e, t) {
      return Kh(Je, Ul, e, t);
    }
    function Ng(e, t) {
      var a = Je;
      return a |= Xr, (Yt.mode & ga) !== Ee && (a |= Kr), Sp(a, or, e, t);
    }
    function em(e, t) {
      return Kh(Je, or, e, t);
    }
    function NE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function zg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Je;
      return u |= Xr, (Yt.mode & ga) !== Ee && (u |= Kr), Sp(u, or, NE.bind(null, t, e), i);
    }
    function tm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Kh(Je, or, NE.bind(null, t, e), i);
    }
    function Bw(e, t) {
    }
    var nm = Bw;
    function Ug(e, t) {
      var a = Al(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function rm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ag(e, t) {
      var a = Al(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function am(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = Al();
      return t.memoizedState = e, e;
    }
    function zE(e) {
      var t = bi(), a = sr, i = a.memoizedState;
      return AE(t, i, e);
    }
    function UE(e) {
      var t = bi();
      if (sr === null)
        return t.memoizedState = e, e;
      var a = sr.memoizedState;
      return AE(t, a, e);
    }
    function AE(e, t, a) {
      var i = !zv(Bs);
      if (i) {
        if (!me(a, t)) {
          var u = Fv();
          Yt.lanes = Ke(Yt.lanes, u), jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, bp()), e.memoizedState = a, a;
    }
    function $w(e, t, a) {
      var i = Ha();
      wn(ry(i, Yi)), e(!0);
      var u = hp.transition;
      hp.transition = {};
      var s = hp.transition;
      hp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wn(i), hp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function jg() {
      var e = qh(!1), t = e[0], a = e[1], i = $w.bind(null, a), u = Al();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = kg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function jE() {
      var e = Og(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var HE = !1;
    function Yw() {
      return HE;
    }
    function Hg() {
      var e = Al(), t = xm(), a = t.identifierPrefix, i;
      if (Mr()) {
        var u = uw();
        i = ":" + a + "R" + u;
        var s = yp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function im() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        PE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          vr(s, e, i, f), BE(s, t, i);
        }
      }
      $E(e, i);
    }
    function Qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        PE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, me(y, v)) {
                Ow(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = hE(e, t, u, i);
        if (g !== null) {
          var b = Ra();
          vr(g, e, i, b), BE(g, t, i);
        }
      }
      $E(e, i);
    }
    function VE(e) {
      var t = e.alternate;
      return e === Yt || t !== null && t === Yt;
    }
    function PE(e, t) {
      mp = Wh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BE(e, t, a) {
      if (bd(a)) {
        var i = t.lanes;
        i = Vc(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, _d(e, u);
      }
    }
    function $E(e, t, a) {
      ds(e, t);
    }
    var lm = {
      readContext: tr,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: X
    }, YE = null, IE = null, QE = null, WE = null, Fl = null, Zi = null, um = null;
    {
      var Vg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), kf(t), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), kf(t), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), kf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), kf(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), kf(t), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), kf(t);
          var a = se.current;
          se.current = Fl;
          try {
            return Ag(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = se.current;
          se.current = Fl;
          try {
            return xg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = se.current;
          se.current = Fl;
          try {
            return qh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Hg();
        },
        unstable_isNewReconciler: X
      }, IE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", te(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", te(), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", te(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", te(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", te(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", te();
          var a = se.current;
          se.current = Fl;
          try {
            return Ag(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", te();
          var i = se.current;
          se.current = Fl;
          try {
            return xg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", te(), Lg(e);
        },
        useState: function(e) {
          P = "useState", te();
          var t = se.current;
          se.current = Fl;
          try {
            return qh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", te(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", te(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", te(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", te(), Hg();
        },
        unstable_isNewReconciler: X
      }, QE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", te(), rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", te(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", te(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", te(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", te(), em(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", te();
          var a = se.current;
          se.current = Zi;
          try {
            return am(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", te();
          var i = se.current;
          se.current = Zi;
          try {
            return bg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", te(), Xh();
        },
        useState: function(e) {
          P = "useState", te();
          var t = se.current;
          se.current = Zi;
          try {
            return kg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", te(), nm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", te(), zE(e);
        },
        useTransition: function() {
          return P = "useTransition", te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", te(), Gh(e, t);
        },
        useId: function() {
          return P = "useId", te(), im();
        },
        unstable_isNewReconciler: X
      }, WE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", te(), rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", te(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", te(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", te(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", te(), em(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", te();
          var a = se.current;
          se.current = um;
          try {
            return am(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", te();
          var i = se.current;
          se.current = um;
          try {
            return _g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", te(), Xh();
        },
        useState: function(e) {
          P = "useState", te();
          var t = se.current;
          se.current = um;
          try {
            return Og(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", te(), nm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", te(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", te(), Gh(e, t);
        },
        useId: function() {
          return P = "useId", te(), im();
        },
        unstable_isNewReconciler: X
      }, Fl = {
        readContext: function(e) {
          return Vg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), Ht(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), Ht(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), Ht(), Zh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), Ht(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), Ht(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), Ht(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), Ht();
          var a = se.current;
          se.current = Fl;
          try {
            return Ag(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), Ht();
          var i = se.current;
          se.current = Fl;
          try {
            return xg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", We(), Ht();
          var t = se.current;
          se.current = Fl;
          try {
            return qh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", We(), Ht(), Hg();
        },
        unstable_isNewReconciler: X
      }, Zi = {
        readContext: function(e) {
          return Vg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), te(), rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), te(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), te(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), te(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), te(), em(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), te();
          var a = se.current;
          se.current = Zi;
          try {
            return am(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), te();
          var i = se.current;
          se.current = Zi;
          try {
            return bg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), te(), Xh();
        },
        useState: function(e) {
          P = "useState", We(), te();
          var t = se.current;
          se.current = Zi;
          try {
            return kg(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), te(), nm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), te(), zE(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), te(), Gh(e, t);
        },
        useId: function() {
          return P = "useId", We(), te(), im();
        },
        unstable_isNewReconciler: X
      }, um = {
        readContext: function(e) {
          return Vg(), tr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", We(), te(), rm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", We(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", We(), te(), Ep(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", We(), te(), tm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", We(), te(), Jh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", We(), te(), em(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", We(), te();
          var a = se.current;
          se.current = Zi;
          try {
            return am(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", We(), te();
          var i = se.current;
          se.current = Zi;
          try {
            return _g(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", We(), te(), Xh();
        },
        useState: function(e) {
          P = "useState", We(), te();
          var t = se.current;
          se.current = Zi;
          try {
            return Og(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", We(), te(), nm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", We(), te(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", We(), te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", We(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", We(), te(), Gh(e, t);
        },
        useId: function() {
          return P = "useId", We(), te(), im();
        },
        unstable_isNewReconciler: X
      };
    }
    var Ao = Z.unstable_now, GE = 0, om = -1, Cp = -1, sm = -1, Pg = !1, cm = !1;
    function qE() {
      return Pg;
    }
    function Ww() {
      cm = !0;
    }
    function Gw() {
      Pg = !1, cm = !1;
    }
    function qw() {
      Pg = cm, cm = !1;
    }
    function XE() {
      return GE;
    }
    function KE() {
      GE = Ao();
    }
    function Bg(e) {
      Cp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function ZE(e) {
      Cp = -1;
    }
    function fm(e, t) {
      if (Cp >= 0) {
        var a = Ao() - Cp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cp = -1;
      }
    }
    function jl(e) {
      if (om >= 0) {
        var t = Ao() - om;
        om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ue:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case pt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (sm >= 0) {
        var t = Ao() - sm;
        sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ue:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case pt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Hl() {
      om = Ao();
    }
    function Yg() {
      sm = Ao();
    }
    function Ig(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ji(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, Gg, qg, Xg, Kg, JE, dm, Zg, Jg, eS, Rp;
    {
      Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Rp = /* @__PURE__ */ new Set();
      var eC = /* @__PURE__ */ new Set();
      dm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          eC.has(a) || (eC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JE = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
          Kg.has(a) || (Kg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function tS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ct) {
          An(!0);
          try {
            s = a(i, u);
          } finally {
            An(!1);
          }
        }
        JE(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = La(e), u = Ra(), s = Vo(i), f = Tu(u, s);
        f.payload = t, a != null && (dm(a, "setState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (vr(p, i, s, u), Ph(p, i, s)), ds(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = La(e), u = Ra(), s = Vo(i), f = Tu(u, s);
        f.tag = yE, f.payload = t, a != null && (dm(a, "replaceState"), f.callback = a);
        var p = Mo(i, f, s);
        p !== null && (vr(p, i, s, u), Ph(p, i, s)), ds(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = La(e), i = Ra(), u = Vo(a), s = Tu(i, u);
        s.tag = jh, t != null && (dm(t, "forceUpdate"), s.callback = t);
        var f = Mo(a, s, u);
        f !== null && (vr(f, a, u, i), Ph(f, a, u)), Tc(a, u);
      }
    };
    function tC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ct) {
            An(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", gt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, s) : !0;
    }
    function Xw(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Rp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ee && (Rp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Rp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ee && (Rp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Jg.has(t) && (Jg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qg.has(t) && (qg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || St(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function nC(e, t) {
      t.updater = nS, e.stateNode = t, Gu(t, e), t._reactInternalInstance = Qg;
    }
    function rC(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === vt && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Le ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = yf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? gf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & ct) {
        An(!0);
        try {
          g = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      nC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = gt(t) || "Component";
          Gg.has(w) || (Gg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), M !== null || U !== null || j !== null) {
            var ae = gt(t) || "Component", Oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(ae) || (Xg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Oe, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function Kw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function aC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      Xw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = yf(e, t, !0);
        u.context = gf(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          Zg.has(p) || (Zg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ct && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Kw(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Je;
        y |= Xr, (e.mode & ga) !== Ee && (y |= Kr), e.flags |= y;
      }
    }
    function Zw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = yf(e, t, !0);
        v = gf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && aC(e, u, a, v), SE();
      var w = e.memoizedState, M = u.state = w;
      if (Bh(e, a, u, i), M = e.memoizedState, s === a && w === M && !Th() && !$h()) {
        if (typeof u.componentDidMount == "function") {
          var U = Je;
          U |= Xr, (e.mode & ga) !== Ee && (U |= Kr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), M = e.memoizedState);
      var j = $h() || tC(e, t, s, a, w, M, v);
      if (j) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = Je;
          ae |= Xr, (e.mode & ga) !== Ee && (ae |= Kr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Oe = Je;
          Oe |= Xr, (e.mode & ga) !== Ee && (Oe |= Kr), e.flags |= Oe;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, j;
    }
    function Jw(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ji(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = li;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = yf(t, a, !0);
        b = gf(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && aC(t, s, i, b), SE();
      var j = t.memoizedState, ae = s.state = j;
      if (Bh(t, i, s, u), ae = t.memoizedState, f === v && j === ae && !Th() && !$h() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ma), !1;
      typeof M == "function" && (tS(t, a, M, i), ae = t.memoizedState);
      var Oe = $h() || tC(t, a, p, i, j, ae, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Oe ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ma)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ma), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = b, Oe;
    }
    function $s(e, t) {
      return {
        value: e,
        source: t,
        stack: Uu(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ex(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = ex(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ue)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var tx = typeof WeakMap == "function" ? WeakMap : Map;
    function iC(e, t, a) {
      var i = Tu(Zt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Wb(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Tu(Zt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          m1(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        m1(e), iS(e, t), typeof u != "function" && Ib(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, be) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function lC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Gb.bind(null, e, t, a);
        ya && Hp(e, a), t.then(s, s);
      }
    }
    function nx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rx(e, t) {
      var a = e.tag;
      if ((e.mode & Re) === Ee && (a === ke || a === Ge || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uC(e) {
      var t = e;
      do {
        if (t.tag === _e && Fw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function oC(e, t, a, i, u) {
      if ((e.mode & Re) === Ee) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= $e, a.flags |= ss, a.flags &= ~(fc | va), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = _n;
            else {
              var f = Tu(Zt, be);
              f.tag = jh, Mo(a, f, be);
            }
          }
          a.lanes = Ke(a.lanes, be);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function ax(e, t, a, i, u) {
      if (a.flags |= va, ya && Hp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rx(a), Mr() && a.mode & Re && J0();
        var f = uC(t);
        if (f !== null) {
          f.flags &= ~Tn, oC(f, t, a, e, u), f.mode & Re && lC(e, s, u), nx(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            lC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Mr() && a.mode & Re) {
        J0();
        var v = uC(t);
        if (v !== null) {
          (v.flags & Kn) === De && (v.flags |= Tn), oC(v, t, a, e, u), Zy($s(i, a));
          return;
        }
      }
      i = $s(i, a), Fb(i);
      var y = t;
      do {
        switch (y.tag) {
          case ue: {
            var g = i;
            y.flags |= Kn;
            var b = oo(u);
            y.lanes = Ke(y.lanes, b);
            var w = iC(y, g, b);
            pg(y, w);
            return;
          }
          case pe:
            var M = i, U = y.type, j = y.stateNode;
            if ((y.flags & $e) === De && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !u1(j))) {
              y.flags |= Kn;
              var ae = oo(u);
              y.lanes = Ke(y.lanes, ae);
              var Oe = lS(y, M, ae);
              pg(y, Oe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ix() {
      return null;
    }
    var Tp = F.ReactCurrentOwner, el = !1, uS, wp, oS, sS, cS, Ys, fS, pm, xp;
    uS = {}, wp = {}, oS = {}, sS = {}, cS = {}, Ys = !1, fS = {}, pm = {}, xp = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = fE(t, null, a, i) : t.child = Rf(t, e.child, a, i);
    }
    function lx(e, t, a, i) {
      t.child = Rf(t, e.child, null, i), t.child = Rf(t, null, a, i);
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      wf(t, u), Zu(t);
      {
        if (Tp.current = t, Wr(!0), v = Of(e, t, f, i, p, u), y = Lf(), t.mode & ct) {
          An(!0);
          try {
            v = Of(e, t, f, i, p, u), y = Lf();
          } finally {
            An(!1);
          }
        }
        Wr(!1);
      }
      return ea(), e !== null && !el ? (xE(e, t, u), wu(e, t, u)) : (Mr() && y && Qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function cC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (f_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Hf(s), t.tag = He, t.type = f, vS(t, s), fC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Gi(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          ), a.defaultProps !== void 0) {
            var v = gt(s) || "Unknown";
            xp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), xp[v] = !0);
          }
        }
        var y = XS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && Gi(
          b,
          i,
          // Resolved props
          "prop",
          gt(g)
        );
      }
      var w = e.child, M = ES(e, u);
      if (!M) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : Fe, j(U, i) && e.ref === t.ref)
          return wu(e, t, u);
      }
      t.flags |= Cl;
      var ae = qs(w, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ut) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Gi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            gt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Fe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (el = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ss) !== De && (el = !0);
          else return t.lanes = e.lanes, wu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & Re) === Ee) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, bm(t, a);
        } else if (ra(a, Cr)) {
          var b = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          bm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Cr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, bm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Ke(s.baseLanes, a), t.memoizedState = null) : M = a, bm(t, M);
      }
      return Ea(e, t, u, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function sx(e, t, a) {
      {
        t.flags |= Je;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function pC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= qr, t.flags |= dd);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f;
      {
        var p = yf(t, a, !0);
        f = gf(t, p);
      }
      var v, y;
      wf(t, u), Zu(t);
      {
        if (Tp.current = t, Wr(!0), v = Of(e, t, a, i, f, u), y = Lf(), t.mode & ct) {
          An(!0);
          try {
            v = Of(e, t, a, i, f, u), y = Lf();
          } finally {
            An(!1);
          }
        }
        Wr(!1);
      }
      return ea(), e !== null && !el ? (xE(e, t, u), wu(e, t, u)) : (Mr() && y && Qy(t), t.flags |= Cl, Ea(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      {
        switch (b_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = oo(u);
            t.lanes = Ke(t.lanes, g);
            var b = lS(t, $s(y, t), g);
            pg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Gi(
            w,
            i,
            // Resolved props
            "prop",
            gt(a)
          );
        }
      }
      var M;
      zl(a) ? (M = !0, xh(t)) : M = !1, wf(t, u);
      var U = t.stateNode, j;
      U === null ? (hm(e, t), rC(t, a, i), rS(t, a, i, u), j = !0) : e === null ? j = Zw(t, a, i, u) : j = Jw(e, t, a, i, u);
      var ae = pS(e, t, a, j, M, u);
      {
        var Oe = t.stateNode;
        j && Oe.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), Ys = !0);
      }
      return ae;
    }
    function pS(e, t, a, i, u, s) {
      pC(e, t);
      var f = (t.flags & $e) !== De;
      if (!i && !f)
        return u && q0(t, a, !1), wu(e, t, s);
      var p = t.stateNode;
      Tp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        Zu(t);
        {
          if (Wr(!0), v = p.render(), t.mode & ct) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          Wr(!1);
        }
        ea();
      }
      return t.flags |= Cl, e !== null && f ? lx(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function hC(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), vg(e, t.containerInfo);
    }
    function cx(e, t, a) {
      if (hC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), Bh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Tn) {
          var g = $s(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mC(e, t, p, a, g);
        } else if (p !== s) {
          var b = $s(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mC(e, t, p, a, b);
        } else {
          pw(t);
          var w = fE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~tn | Na, M = M.sibling;
        }
      } else {
        if (Cf(), p === s)
          return wu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function mC(e, t, a, i, u) {
      return Cf(), Zy(u), t.flags |= Tn, Ea(e, t, a, i), t.child;
    }
    function fx(e, t, a) {
      RE(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= jt), pC(e, t), Ea(e, t, f, a), t.child;
    }
    function dx(e, t) {
      return e === null && Ky(t), null;
    }
    function px(e, t, a, i) {
      hm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = d_(v), g = Ji(v, u), b;
      switch (y) {
        case ke:
          return vS(t, v), t.type = v = Hf(v), b = dS(null, t, v, g, i), b;
        case pe:
          return t.type = v = YS(v), b = vC(null, t, v, g, i), b;
        case Ge:
          return t.type = v = IS(v), b = sC(null, t, v, g, i), b;
        case lt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Gi(
              w,
              g,
              // Resolved for outer only
              "prop",
              gt(v)
            );
          }
          return b = cC(
            null,
            t,
            v,
            Ji(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ut && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function vx(e, t, a, i, u) {
      hm(e, t), t.tag = pe;
      var s;
      return zl(a) ? (s = !0, xh(t)) : s = !1, wf(t, u), rC(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function hx(e, t, a, i) {
      hm(e, t);
      var u = t.pendingProps, s;
      {
        var f = yf(t, a, !1);
        s = gf(t, f);
      }
      wf(t, i);
      var p, v;
      Zu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = gt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & ct && Xi.recordLegacyContextWarning(t, null), Wr(!0), Tp.current = t, p = Of(null, t, a, u, s, i), v = Lf(), Wr(!1);
      }
      if (ea(), t.flags |= Cl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = gt(a) || "Unknown";
        wp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), wp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = gt(a) || "Unknown";
          wp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), wp[b] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return zl(a) ? (w = !0, xh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), nC(t, p), rS(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ke, t.mode & ct) {
          An(!0);
          try {
            p = Of(null, t, a, u, s, i), v = Lf();
          } finally {
            An(!1);
          }
        }
        return Mr() && v && Qy(t), Ea(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = gt(t) || "Unknown";
          xp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), xp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = gt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = gt(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: ix(),
        transitions: null
      };
    }
    function mx(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, vp);
    }
    function gx(e, t) {
      return Ss(e.childLanes, t);
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      __(t) && (t.flags |= $e);
      var u = Ki.current, s = !1, f = (t.flags & $e) !== De;
      if (f || yx(u, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (u = Aw(u, wE)), u = bf(u), zo(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Sx(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, b;
        } else
          return yS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return wx(e, t, f, i, U, M, a);
        }
        if (s) {
          var j = i.fallback, ae = i.children, Oe = Cx(e, t, ae, j, a), Te = t.child, Rt = e.child.memoizedState;
          return Te.memoizedState = Rt === null ? mS(a) : mx(Rt, a), Te.childLanes = gx(e, a), t.memoizedState = hS, Oe;
        } else {
          var mt = i.children, k = Ex(e, t, mt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Sx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Re) === Ee && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & Ye && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return g1(e, t, B, null);
    }
    function gC(e, t) {
      return qs(e, t);
    }
    function Ex(e, t, a, i) {
      var u = e.child, s = u.sibling, f = gC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Re) === Ee && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Re) === Ee && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & Ye && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = gC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var b;
      return p !== null ? b = qs(p, i) : (b = Bo(i, s, u, null), b.flags |= tn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function vm(e, t, a, i) {
      i !== null && Zy(i), Rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= tn, t.memoizedState = null, f;
    }
    function Rx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= tn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Re) !== Ee && Rf(t, e.child, null, u), v;
    }
    function Tx(e, t, a) {
      return (e.mode & Re) === Ee ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = be) : Ay(t) ? e.lanes = $i : e.lanes = Cr, null;
    }
    function wx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tn) {
          t.flags &= ~Tn;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return vm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var H = i.children, O = i.fallback, W = Rx(e, t, H, O, f), fe = t.child;
          return fe.memoizedState = mS(f), t.memoizedState = hS, W;
        }
      else {
        if (fw(), (t.mode & Re) === Ee)
          return vm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = DT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(b, p, y);
          return vm(e, t, f, w);
        }
        var M = ra(f, e.childLanes);
        if (el || M) {
          var U = xm();
          if (U !== null) {
            var j = Vv(U, f);
            if (j !== Fn && j !== s.retryLane) {
              s.retryLane = j;
              var ae = Zt;
              Ia(e, j), vr(U, e, j, ae);
            }
          }
          HS();
          var Oe = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return vm(e, t, f, Oe);
        } else if (P0(u)) {
          t.flags |= $e, t.child = e.child;
          var Te = qb.bind(null, e);
          return kT(u, Te), null;
        } else {
          vw(t, u, s.treeContext);
          var Rt = i.children, mt = yS(t, Rt);
          return mt.flags |= Na, mt;
        }
      }
    }
    function SC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), og(e.return, t, a);
    }
    function xx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var u = i.memoizedState;
          u !== null && SC(i, a, e);
        } else if (i.tag === bt)
          SC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function bx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _x(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Dx(e, t) {
      e !== void 0 && !pm[e] && (e !== "collapsed" && e !== "hidden" ? (pm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (pm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EC(e, t) {
      {
        var a = St(e), i = !a && typeof Za(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!EC(e[a], a))
              return;
        } else {
          var i = Za(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!EC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _x(u), Dx(s, u), kx(f, u), Ea(e, t, f, a);
      var p = Ki.current, v = yg(p, vp);
      if (v)
        p = gg(p, vp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== De;
        y && xx(t, t.child, a), p = bf(p);
      }
      if (zo(t, p), (t.mode & Re) === Ee)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = bx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), SS(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && Qh(U) === null) {
                t.child = M;
                break;
              }
              var j = M.sibling;
              M.sibling = w, w = M, M = j;
            }
            SS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ox(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Rf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var RC = !1;
    function Lx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var y = f.value;
        if (me(y, p)) {
          if (f.children === s.children && !Th())
            return wu(e, t, a);
        } else
          _w(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var TC = !1;
    function Mx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wf(t, a);
      var f = tr(i);
      Zu(t);
      var p;
      return Tp.current = t, Wr(!0), p = s(f), Wr(!1), ea(), t.flags |= Cl, Ea(e, t, p, a), t.child;
    }
    function bp() {
      el = !0;
    }
    function hm(e, t) {
      (t.mode & Re) === Ee && e !== null && (e.alternate = null, t.alternate = null, t.flags |= tn);
    }
    function wu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), jp(t.lanes), ra(a, t.childLanes) ? (xw(e, t), t.child) : null;
    }
    function Nx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= tn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function zx(e, t, a) {
      switch (t.tag) {
        case ue:
          hC(t), t.stateNode, Cf();
          break;
        case ce:
          RE(t);
          break;
        case pe: {
          var i = t.type;
          zl(i) && xh(t);
          break;
        }
        case Se:
          vg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
          break;
        }
        case pt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Je);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, bf(Ki.current)), t.flags |= $e, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return yC(e, t, a);
            zo(t, bf(Ki.current));
            var b = wu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            zo(t, bf(Ki.current));
          break;
        }
        case bt: {
          var w = (e.flags & $e) !== De, M = ra(a, t.childLanes);
          if (w) {
            if (M)
              return CC(e, t, a);
            t.flags |= $e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), zo(t, Ki.current), M)
            break;
          return null;
        }
        case Ne:
        case Ze:
          return t.lanes = B, dC(e, t, a);
      }
      return wu(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nx(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Th() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          el = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === De)
            return el = !1, zx(e, t, a);
          (e.flags & ss) !== De ? el = !0 : el = !1;
        }
      } else if (el = !1, Mr() && iw(t)) {
        var f = t.index, p = lw();
        Z0(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case Vt:
          return hx(e, t, t.type, a);
        case Jt: {
          var v = t.elementType;
          return px(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : Ji(y, g);
          return dS(e, t, y, b, a);
        }
        case pe: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : Ji(w, M);
          return vC(e, t, w, U, a);
        }
        case ue:
          return cx(e, t, a);
        case ce:
          return fx(e, t, a);
        case Be:
          return dx(e, t);
        case _e:
          return yC(e, t, a);
        case Se:
          return Ox(e, t, a);
        case Ge: {
          var j = t.type, ae = t.pendingProps, Oe = t.elementType === j ? ae : Ji(j, ae);
          return sC(e, t, j, Oe, a);
        }
        case Tt:
          return ux(e, t, a);
        case dt:
          return ox(e, t, a);
        case pt:
          return sx(e, t, a);
        case rt:
          return Lx(e, t, a);
        case dn:
          return Mx(e, t, a);
        case lt: {
          var Te = t.type, Rt = t.pendingProps, mt = Ji(Te, Rt);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && Gi(
              k,
              mt,
              // Resolved for outer only
              "prop",
              gt(Te)
            );
          }
          return mt = Ji(Te.type, mt), cC(e, t, Te, mt, a);
        }
        case He:
          return fC(e, t, t.type, t.pendingProps, a);
        case _n: {
          var H = t.type, O = t.pendingProps, W = t.elementType === H ? O : Ji(H, O);
          return vx(e, t, H, W, a);
        }
        case bt:
          return CC(e, t, a);
        case Cn:
          break;
        case Ne:
          return dC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mf(e) {
      e.flags |= Je;
    }
    function xC(e) {
      e.flags |= qr, e.flags |= dd;
    }
    var bC, CS, _C, DC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ce || u.tag === Be)
          nT(e, u.stateNode);
        else if (u.tag !== Se) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = aT(f, a, s, i, u, p);
        t.updateQueue = v, v && Mf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && Mf(t);
    };
    function _p(e, t) {
      if (!Mr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = De;
      if (t) {
        if ((e.mode & Ye) !== Ee) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ye) !== Ee) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ux(e, t, a) {
      if (Sw() && (t.mode & Re) !== Ee && (t.flags & $e) === De)
        return iE(t), Cf(), t.flags |= Tn | va | Kn, !1;
      var i = Oh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yw(t), zr(t), (t.mode & Ye) !== Ee) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & $e) === De && (t.memoizedState = null), t.flags |= Je, zr(t), (t.mode & Ye) !== Ee) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return lE(), !0;
    }
    function kC(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case Vt:
        case Jt:
        case He:
        case ke:
        case Ge:
        case Tt:
        case dt:
        case pt:
        case dn:
        case lt:
          return zr(t), null;
        case pe: {
          var u = t.type;
          return zl(u) && wh(t), zr(t), null;
        }
        case ue: {
          var s = t.stateNode;
          if (xf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Oh(t);
            if (f)
              Mf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tn) !== De) && (t.flags |= Ma, lE());
            }
          }
          return CS(e, t), zr(t), null;
        }
        case ce: {
          mg(t);
          var v = CE(), y = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, y, i, v), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = hg(), b = Oh(t);
            if (b)
              hw(t, v, g) && Mf(t);
            else {
              var w = tT(y, i, v, g, t);
              bC(w, t, !1, !1), t.stateNode = w, rT(w, y, i, v) && Mf(t);
            }
            t.ref !== null && xC(t);
          }
          return zr(t), null;
        }
        case Be: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            DC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = CE(), ae = hg(), Oe = Oh(t);
            Oe ? mw(t) && Mf(t) : t.stateNode = iT(M, j, ae, t);
          }
          return zr(t), null;
        }
        case _e: {
          _f(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Ux(e, t, Te);
            if (!Rt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & $e) !== De)
            return t.lanes = a, (t.mode & Ye) !== Ee && Ig(t), t;
          var mt = Te !== null, k = e !== null && e.memoizedState !== null;
          if (mt !== k && mt) {
            var H = t.child;
            if (H.flags |= Rl, (t.mode & Re) !== Ee) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !_);
              O || yg(Ki.current, wE) ? Ab() : HS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= Je), zr(t), (t.mode & Ye) !== Ee && mt) {
            var fe = t.child;
            fe !== null && (t.treeBaseDuration -= fe.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return xf(t), CS(e, t), e === null && ZT(t.stateNode.containerInfo), zr(t), null;
        case rt:
          var le = t.type._context;
          return ug(le, t), zr(t), null;
        case _n: {
          var Pe = t.type;
          return zl(Pe) && wh(t), zr(t), null;
        }
        case bt: {
          _f(t);
          var qe = t.memoizedState;
          if (qe === null)
            return zr(t), null;
          var It = (t.flags & $e) !== De, kt = qe.rendering;
          if (kt === null)
            if (It)
              _p(qe, !1);
            else {
              var In = jb() && (e === null || (e.flags & $e) === De);
              if (!In)
                for (var Ot = t.child; Ot !== null; ) {
                  var jn = Qh(Ot);
                  if (jn !== null) {
                    It = !0, t.flags |= $e, _p(qe, !1);
                    var oa = jn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Je), t.subtreeFlags = De, bw(t, a), zo(t, gg(Ki.current, vp)), t.child;
                  }
                  Ot = Ot.sibling;
                }
              qe.tail !== null && yn() > XC() && (t.flags |= $e, It = !0, _p(qe, !1), t.lanes = kv);
            }
          else {
            if (!It) {
              var Hr = Qh(kt);
              if (Hr !== null) {
                t.flags |= $e, It = !0;
                var oi = Hr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Je), _p(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !kt.alternate && !Mr())
                  return zr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              yn() * 2 - qe.renderingStartTime > XC() && a !== Cr && (t.flags |= $e, It = !0, _p(qe, !1), t.lanes = kv);
            }
            if (qe.isBackwards)
              kt.sibling = t.child, t.child = kt;
            else {
              var Ta = qe.last;
              Ta !== null ? Ta.sibling = kt : t.child = kt, qe.last = kt;
            }
          }
          if (qe.tail !== null) {
            var wa = qe.tail;
            qe.rendering = wa, qe.tail = wa.sibling, qe.renderingStartTime = yn(), wa.sibling = null;
            var sa = Ki.current;
            return It ? sa = gg(sa, vp) : sa = bf(sa), zo(t, sa), wa;
          }
          return zr(t), null;
        }
        case Cn:
          break;
        case Ne:
        case Ze: {
          jS(t);
          var ku = t.memoizedState, Vf = ku !== null;
          if (e !== null) {
            var $p = e.memoizedState, Bl = $p !== null;
            Bl !== Vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= Rl);
          }
          return !Vf || (t.mode & Re) === Ee ? zr(t) : ra(Pl, Cr) && (zr(t), t.subtreeFlags & (tn | Je) && (t.flags |= Rl)), null;
        }
        case Nt:
          return null;
        case wt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ax(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type;
          zl(i) && wh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | $e, (t.mode & Ye) !== Ee && Ig(t), t) : null;
        }
        case ue: {
          t.stateNode, xf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Kn) !== De && (s & $e) === De ? (t.flags = s & ~Kn | $e, t) : null;
        }
        case ce:
          return mg(t), null;
        case _e: {
          _f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | $e, (t.mode & Ye) !== Ee && Ig(t), t) : null;
        }
        case bt:
          return _f(t), null;
        case Se:
          return xf(t), null;
        case rt:
          var v = t.type._context;
          return ug(v, t), null;
        case Ne:
        case Ze:
          return jS(t), null;
        case Nt:
          return null;
        default:
          return null;
      }
    }
    function OC(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && wh(t);
          break;
        }
        case ue: {
          t.stateNode, xf(t), $y(t), Eg();
          break;
        }
        case ce: {
          mg(t);
          break;
        }
        case Se:
          xf(t);
          break;
        case _e:
          _f(t);
          break;
        case bt:
          _f(t);
          break;
        case rt:
          var u = t.type._context;
          ug(u, t);
          break;
        case Ne:
        case Ze:
          jS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var mm = !1, Ur = !1, Fx = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Nf = null, zf = null;
    function jx(e) {
      eu(null, function() {
        throw e;
      }), cd();
    }
    var Hx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ye)
        try {
          Hl(), t.componentWillUnmount();
        } finally {
          jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Fo(or, e);
      } catch (a) {
        an(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Hx(e, a);
      } catch (i) {
        an(e, t, i);
      }
    }
    function Vx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        an(e, t, i);
      }
    }
    function NC(e, t) {
      try {
        UC(e);
      } catch (a) {
        an(e, t, a);
      }
    }
    function Uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (et && yt && e.mode & Ye)
              try {
                Hl(), i = a(null);
              } finally {
                jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            an(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function ym(e, t, a) {
      try {
        a();
      } catch (i) {
        an(e, t, i);
      }
    }
    var zC = !1;
    function Px(e, t) {
      JR(e.containerInfo), ye = t, Bx();
      var a = zC;
      return zC = !1, a;
    }
    function Bx() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & qu) !== De && t !== null ? (t.return = e, ye = t) : $x();
      }
    }
    function $x() {
      for (; ye !== null; ) {
        var e = ye;
        Ft(e);
        try {
          Yx(e);
        } catch (a) {
          an(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function Yx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ma) !== De) {
        switch (Ft(e), e.tag) {
          case ke:
          case Ge:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ji(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ue: {
            {
              var v = e.stateNode;
              wT(v.containerInfo);
            }
            break;
          }
          case ce:
          case Be:
          case Se:
          case _n:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function tl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Nr) !== Qa ? bv(t) : (e & or) !== Qa && ii(t), (e & Ul) !== Qa && Vp(!0), ym(t, a, p), (e & Ul) !== Qa && Vp(!1), (e & Nr) !== Qa ? Ec() : (e & or) !== Qa && Ju());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Fo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Nr) !== Qa ? xl(t) : (e & or) !== Qa && _v(t);
            var f = s.create;
            (e & Ul) !== Qa && Vp(!0), s.destroy = f(), (e & Ul) !== Qa && Vp(!1), (e & Nr) !== Qa ? Sc() : (e & or) !== Qa && cs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & or) !== De ? v = "useLayoutEffect" : (s.tag & Ul) !== De ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Ix(e, t) {
      if ((t.flags & Je) !== De)
        switch (t.tag) {
          case pt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ue:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case pt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Qx(e, t, a, i) {
      if ((a.flags & Sr) !== De)
        switch (a.tag) {
          case ke:
          case Ge:
          case He: {
            if (!Ur)
              if (a.mode & Ye)
                try {
                  Hl(), Fo(or | ur, a);
                } finally {
                  jl(a);
                }
              else
                Fo(or | ur, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Je && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ye)
                  try {
                    Hl(), u.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ji(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ye)
                  try {
                    Hl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), EE(a, p, u));
            break;
          }
          case ue: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ce:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              EE(a, v, y);
            }
            break;
          }
          case ce: {
            var g = a.stateNode;
            if (t === null && a.flags & Je) {
              var b = a.type, w = a.memoizedProps;
              cT(g, b, w);
            }
            break;
          }
          case Be:
            break;
          case Se:
            break;
          case pt: {
            {
              var M = a.memoizedProps, U = M.onCommit, j = M.onRender, ae = a.stateNode.effectDuration, Oe = XE(), Te = t === null ? "mount" : "update";
              qE() && (Te = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Oe);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, ae, Oe), $b(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case ue:
                      var mt = Rt.stateNode;
                      mt.effectDuration += ae;
                      break e;
                    case pt:
                      var k = Rt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case _e: {
            eb(e, a);
            break;
          }
          case bt:
          case _n:
          case Cn:
          case Ne:
          case Ze:
          case wt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & qr && UC(a);
    }
    function Wx(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          if (e.mode & Ye)
            try {
              Hl(), MC(e, e.return);
            } finally {
              jl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vx(e, e.return, t), NC(e, e.return);
          break;
        }
        case ce: {
          NC(e, e.return);
          break;
        }
      }
    }
    function Gx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ce) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? ET(u) : RT(i.stateNode, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
          }
        } else if (i.tag === Be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? CT(s) : TT(s, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === Ze) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function UC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ce:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ye)
            try {
              Hl(), u = t(i);
            } finally {
              jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function qx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function AC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, AC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ce) {
          var a = e.stateNode;
          a !== null && tw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xx(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ce || e.tag === ue || e.tag === Se;
    }
    function jC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ce && t.tag !== Be && t.tag !== $t; ) {
          if (t.flags & tn || t.child === null || t.tag === Se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & tn))
          return t.stateNode;
      }
    }
    function Kx(e) {
      var t = Xx(e);
      switch (t.tag) {
        case ce: {
          var a = t.stateNode;
          t.flags & jt && (V0(a), t.flags &= ~jt);
          var i = jC(e);
          wS(e, i, a);
          break;
        }
        case ue:
        case Se: {
          var u = t.stateNode.containerInfo, s = jC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ce || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? mT(a, s, t) : vT(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ce || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? hT(a, s, t) : pT(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Ar = null, nl = !1;
    function Zx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ce: {
              Ar = i.stateNode, nl = !1;
              break e;
            }
            case ue: {
              Ar = i.stateNode.containerInfo, nl = !0;
              break e;
            }
            case Se: {
              Ar = i.stateNode.containerInfo, nl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Ar === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Ar = null, nl = !1;
      }
      qx(a);
    }
    function jo(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (ru(a), a.tag) {
        case ce:
          Ur || Uf(a, t);
        case Be: {
          {
            var i = Ar, u = nl;
            Ar = null, jo(e, t, a), Ar = i, nl = u, Ar !== null && (nl ? gT(Ar, a.stateNode) : yT(Ar, a.stateNode));
          }
          return;
        }
        case $t: {
          Ar !== null && (nl ? ST(Ar, a.stateNode) : Uy(Ar, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Ar, f = nl;
            Ar = a.stateNode.containerInfo, nl = !0, jo(e, t, a), Ar = s, nl = f;
          }
          return;
        }
        case ke:
        case Ge:
        case lt:
        case He: {
          if (!Ur) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Ul) !== Qa ? ym(a, t, w) : (M & or) !== Qa && (ii(a), a.mode & Ye ? (Hl(), ym(a, t, w), jl(a)) : ym(a, t, w), Ju())), g = g.next;
                } while (g !== y);
              }
            }
          }
          jo(e, t, a);
          return;
        }
        case pe: {
          if (!Ur) {
            Uf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && RS(a, t, U);
          }
          jo(e, t, a);
          return;
        }
        case Cn: {
          jo(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & Re
          ) {
            var j = Ur;
            Ur = j || a.memoizedState !== null, jo(e, t, a), Ur = j;
          } else
            jo(e, t, a);
          break;
        }
        default: {
          jo(e, t, a);
          return;
        }
      }
    }
    function Jx(e) {
      e.memoizedState;
    }
    function eb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jT(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fx()), t.forEach(function(i) {
          var u = Xb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ya)
              if (Nf !== null && zf !== null)
                Hp(zf, Nf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function tb(e, t, a) {
      Nf = a, zf = e, Ft(t), PC(t, e), Ft(t), Nf = null, zf = null;
    }
    function rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zx(e, t, s);
          } catch (v) {
            an(s, t, v);
          }
        }
      var f = Ks();
      if (t.subtreeFlags & Zr)
        for (var p = t.child; p !== null; )
          Ft(p), PC(p, e), p = p.sibling;
      Ft(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ke:
        case Ge:
        case lt:
        case He: {
          if (rl(t, e), Vl(e), u & Je) {
            try {
              tl(Ul | ur, e, e.return), Fo(Ul | ur, e);
            } catch (Pe) {
              an(e, e.return, Pe);
            }
            if (e.mode & Ye) {
              try {
                Hl(), tl(or | ur, e, e.return);
              } catch (Pe) {
                an(e, e.return, Pe);
              }
              jl(e);
            } else
              try {
                tl(or | ur, e, e.return);
              } catch (Pe) {
                an(e, e.return, Pe);
              }
          }
          return;
        }
        case pe: {
          rl(t, e), Vl(e), u & qr && i !== null && Uf(i, i.return);
          return;
        }
        case ce: {
          rl(t, e), Vl(e), u & qr && i !== null && Uf(i, i.return);
          {
            if (e.flags & jt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Pe) {
                an(e, e.return, Pe);
              }
            }
            if (u & Je) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fT(f, g, y, v, p, e);
                  } catch (Pe) {
                    an(e, e.return, Pe);
                  }
              }
            }
          }
          return;
        }
        case Be: {
          if (rl(t, e), Vl(e), u & Je) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              dT(b, M, w);
            } catch (Pe) {
              an(e, e.return, Pe);
            }
          }
          return;
        }
        case ue: {
          if (rl(t, e), Vl(e), u & Je && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                FT(t.containerInfo);
              } catch (Pe) {
                an(e, e.return, Pe);
              }
          }
          return;
        }
        case Se: {
          rl(t, e), Vl(e);
          return;
        }
        case _e: {
          rl(t, e), Vl(e);
          var j = e.child;
          if (j.flags & Rl) {
            var ae = j.stateNode, Oe = j.memoizedState, Te = Oe !== null;
            if (ae.isHidden = Te, Te) {
              var Rt = j.alternate !== null && j.alternate.memoizedState !== null;
              Rt || Ub();
            }
          }
          if (u & Je) {
            try {
              Jx(e);
            } catch (Pe) {
              an(e, e.return, Pe);
            }
            VC(e);
          }
          return;
        }
        case Ne: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Re
          ) {
            var k = Ur;
            Ur = k || mt, rl(t, e), Ur = k;
          } else
            rl(t, e);
          if (Vl(e), u & Rl) {
            var H = e.stateNode, O = e.memoizedState, W = O !== null, fe = e;
            if (H.isHidden = W, W && !mt && (fe.mode & Re) !== Ee) {
              ye = fe;
              for (var le = fe.child; le !== null; )
                ye = le, rb(le), le = le.sibling;
            }
            Gx(fe, W);
          }
          return;
        }
        case bt: {
          rl(t, e), Vl(e), u & Je && VC(e);
          return;
        }
        case Cn:
          return;
        default: {
          rl(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & tn) {
        try {
          Kx(e);
        } catch (a) {
          an(e, e.return, a);
        }
        e.flags &= ~tn;
      }
      t & Na && (e.flags &= ~Na);
    }
    function nb(e, t, a) {
      Nf = a, zf = t, ye = e, BC(e, t, a), Nf = null, zf = null;
    }
    function BC(e, t, a) {
      for (var i = (e.mode & Re) !== Ee; ye !== null; ) {
        var u = ye, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || mm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ur, b = mm, w = Ur;
            mm = p, Ur = g, Ur && !w && (ye = u, ab(u));
            for (var M = s; M !== null; )
              ye = M, BC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            ye = u, mm = b, Ur = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sr) !== De && s !== null ? (s.return = u, ye = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; ye !== null; ) {
        var i = ye;
        if ((i.flags & Sr) !== De) {
          var u = i.alternate;
          Ft(i);
          try {
            Qx(t, u, i, a);
          } catch (f) {
            an(i, i.return, f);
          }
          Rn();
        }
        if (i === e) {
          ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ye = s;
          return;
        }
        ye = i.return;
      }
    }
    function rb(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case ke:
          case Ge:
          case lt:
          case He: {
            if (t.mode & Ye)
              try {
                Hl(), tl(or, t, t.return);
              } finally {
                jl(t);
              }
            else
              tl(or, t, t.return);
            break;
          }
          case pe: {
            Uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case ce: {
            Uf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              $C(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : $C(e);
      }
    }
    function $C(e) {
      for (; ye !== null; ) {
        var t = ye;
        if (t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function ab(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : YC(e);
      }
    }
    function YC(e) {
      for (; ye !== null; ) {
        var t = ye;
        Ft(t);
        try {
          Wx(t);
        } catch (i) {
          an(t, t.return, i);
        }
        if (Rn(), t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function ib(e, t, a, i) {
      ye = t, lb(t, e, a, i);
    }
    function lb(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye, s = u.child;
        (u.subtreeFlags & za) !== De && s !== null ? (s.return = u, ye = s) : ub(e, t, a, i);
      }
    }
    function ub(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye;
        if ((u.flags & on) !== De) {
          Ft(u);
          try {
            ob(t, u, a, i);
          } catch (f) {
            an(u, u.return, f);
          }
          Rn();
        }
        if (u === e) {
          ye = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ye = s;
          return;
        }
        ye = u.return;
      }
    }
    function ob(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case Ge:
        case He: {
          if (t.mode & Ye) {
            Yg();
            try {
              Fo(Nr | ur, t);
            } finally {
              $g(t);
            }
          } else
            Fo(Nr | ur, t);
          break;
        }
      }
    }
    function sb(e) {
      ye = e, cb();
    }
    function cb() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & Mt) !== De) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ye = u, pb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & za) !== De && t !== null ? (t.return = e, ye = t) : fb();
      }
    }
    function fb() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & on) !== De && (Ft(e), db(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function db(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          e.mode & Ye ? (Yg(), tl(Nr | ur, e, e.return), $g(e)) : tl(Nr | ur, e, e.return);
          break;
        }
      }
    }
    function pb(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        Ft(a), hb(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, ye = i) : vb(e);
      }
    }
    function vb(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i = t.return;
        if (AC(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, ye = a;
          return;
        }
        ye = i;
      }
    }
    function hb(e, t) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          e.mode & Ye ? (Yg(), tl(Nr, e, t), $g(e)) : tl(Nr, e, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          try {
            Fo(or | ur, e);
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          try {
            Fo(Nr | ur, e);
          } catch (t) {
            an(e, e.return, t);
          }
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He: {
          try {
            tl(or | ur, e, e.return);
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case ke:
        case Ge:
        case He:
          try {
            tl(Nr | ur, e, e.return);
          } catch (t) {
            an(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Dp = Symbol.for;
      Dp("selector.component"), Dp("selector.has_pseudo_class"), Dp("selector.role"), Dp("selector.test_id"), Dp("selector.text");
    }
    var Eb = [];
    function Cb() {
      Eb.forEach(function(e) {
        return e();
      });
    }
    var Rb = F.ReactCurrentActQueue;
    function Tb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function IC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Rb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var wb = Math.ceil, bS = F.ReactCurrentDispatcher, _S = F.ReactCurrentOwner, Fr = F.ReactCurrentBatchConfig, al = F.ReactCurrentActQueue, fr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), _i = (
      /*                */
      4
    ), xu = 0, kp = 1, Is = 2, gm = 3, Op = 4, WC = 5, DS = 6, Ct = fr, Ca = null, Nn = null, dr = B, Pl = B, kS = Do(B), pr = xu, Lp = null, Sm = B, Mp = B, Em = B, Np = null, Wa = null, OS = 0, GC = 500, qC = 1 / 0, xb = 500, bu = null;
    function zp() {
      qC = yn() + xb;
    }
    function XC() {
      return qC;
    }
    var Cm = !1, LS = null, Af = null, Qs = !1, Ho = null, Up = B, MS = [], NS = null, bb = 50, Ap = 0, zS = null, US = !1, Rm = !1, _b = 50, Ff = 0, Tm = null, Fp = Zt, wm = B, KC = !1;
    function xm() {
      return Ca;
    }
    function Ra() {
      return (Ct & (jr | _i)) !== fr ? yn() : (Fp !== Zt || (Fp = yn()), Fp);
    }
    function Vo(e) {
      var t = e.mode;
      if ((t & Re) === Ee)
        return be;
      if ((Ct & jr) !== fr && dr !== B)
        return oo(dr);
      var a = Rw() !== Cw;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return wm === Fn && (wm = Fv()), wm;
      }
      var u = Ha();
      if (u !== Fn)
        return u;
      var s = lT();
      return s;
    }
    function Db(e) {
      var t = e.mode;
      return (t & Re) === Ee ? be : na();
    }
    function vr(e, t, a, i) {
      Zb(), KC && S("useInsertionEffect must not schedule updates."), US && (Rm = !0), fu(e, a, i), (Ct & jr) !== B && e === Ca ? t_(t) : (ya && $c(e, t, a), n_(t), e === Ca && ((Ct & jr) === fr && (Mp = Ke(Mp, a)), pr === Op && Po(e, dr)), Ga(e, i), a === be && Ct === fr && (t.mode & Re) === Ee && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !al.isBatchingLegacy && (zp(), K0()));
    }
    function kb(e, t, a) {
      var i = e.current;
      i.lanes = t, fu(e, t, a), Ga(e, a);
    }
    function Ob(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & jr) !== fr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      Mv(e, t);
      var i = su(e, e === Ca ? dr : B);
      if (i === B) {
        a !== null && p1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(al.current !== null && a !== BS)) {
        a == null && s !== be && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && p1(a);
      var f;
      if (u === be)
        e.tag === ko ? (al.isBatchingLegacy !== null && (al.didScheduleLegacyUpdate = !0), aw(e1.bind(null, e))) : X0(e1.bind(null, e)), al.current !== null ? al.current.push(Oo) : oT(function() {
          (Ct & (jr | _i)) === fr && Oo();
        }), f = null;
      else {
        var p;
        switch (lr(i)) {
          case Ln:
            p = mc;
            break;
          case Yi:
            p = nu;
            break;
          case gi:
            p = yi;
            break;
          case so:
            p = yc;
            break;
          default:
            p = yi;
            break;
        }
        f = $S(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (Gw(), Fp = Zt, wm = B, (Ct & (jr | _i)) !== fr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Du();
      if (i && e.callbackNode !== a)
        return null;
      var u = su(e, e === Ca ? dr : B);
      if (u === B)
        return null;
      var s = !gs(e, u) && !Av(e, u) && !t, f = s ? Vb(e, u) : _m(e, u);
      if (f !== xu) {
        if (f === Is) {
          var p = _l(e);
          p !== B && (u = p, f = AS(e, p));
        }
        if (f === kp) {
          var v = Lp;
          throw Ws(e, B), Po(e, u), Ga(e, yn()), v;
        }
        if (f === DS)
          Po(e, u);
        else {
          var y = !gs(e, u), g = e.current.alternate;
          if (y && !Mb(g)) {
            if (f = _m(e, u), f === Is) {
              var b = _l(e);
              b !== B && (u = b, f = AS(e, b));
            }
            if (f === kp) {
              var w = Lp;
              throw Ws(e, B), Po(e, u), Ga(e, yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Lb(e, f, u);
        }
      }
      return Ga(e, yn()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Np;
      if (Yc(e)) {
        var i = Ws(e, t);
        i.flags |= Tn, KT(e.containerInfo);
      }
      var u = _m(e, t);
      if (u !== Is) {
        var s = Wa;
        Wa = a, s !== null && JC(s);
      }
      return u;
    }
    function JC(e) {
      Wa === null ? Wa = e : Wa.push.apply(Wa, e);
    }
    function Lb(e, t, a) {
      switch (t) {
        case xu:
        case kp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Is: {
          Gs(e, Wa, bu);
          break;
        }
        case gm: {
          if (Po(e, a), Nv(a) && // do not delay if we're inside an act() scope
          !v1()) {
            var i = OS + GC - yn();
            if (i > 10) {
              var u = su(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!cu(s, a)) {
                Ra(), Pc(e, s);
                break;
              }
              e.timeoutHandle = Ny(Gs.bind(null, e, Wa, bu), i);
              break;
            }
          }
          Gs(e, Wa, bu);
          break;
        }
        case Op: {
          if (Po(e, a), Uv(a))
            break;
          if (!v1()) {
            var f = Ov(e, a), p = f, v = yn() - p, y = Kb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(Gs.bind(null, e, Wa, bu), y);
              break;
            }
          }
          Gs(e, Wa, bu);
          break;
        }
        case WC: {
          Gs(e, Wa, bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mb(e) {
      for (var t = e; ; ) {
        if (t.flags & os) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!me(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & os && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Po(e, t) {
      t = Ss(t, Em), t = Ss(t, Mp), Hv(e, t);
    }
    function e1(e) {
      if (qw(), (Ct & (jr | _i)) !== fr)
        throw new Error("Should not already be working.");
      Du();
      var t = su(e, B);
      if (!ra(t, be))
        return Ga(e, yn()), null;
      var a = _m(e, t);
      if (e.tag !== ko && a === Is) {
        var i = _l(e);
        i !== B && (t = i, a = AS(e, i));
      }
      if (a === kp) {
        var u = Lp;
        throw Ws(e, B), Po(e, t), Ga(e, yn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Gs(e, Wa, bu), Ga(e, yn()), null;
    }
    function Nb(e, t) {
      t !== B && (_d(e, Ke(t, be)), Ga(e, yn()), (Ct & (jr | _i)) === fr && (zp(), Oo()));
    }
    function FS(e, t) {
      var a = Ct;
      Ct |= QC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === fr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !al.isBatchingLegacy && (zp(), K0());
      }
    }
    function zb(e, t, a, i, u) {
      var s = Ha(), f = Fr.transition;
      try {
        return Fr.transition = null, wn(Ln), e(t, a, i, u);
      } finally {
        wn(s), Fr.transition = f, Ct === fr && zp();
      }
    }
    function _u(e) {
      Ho !== null && Ho.tag === ko && (Ct & (jr | _i)) === fr && Du();
      var t = Ct;
      Ct |= QC;
      var a = Fr.transition, i = Ha();
      try {
        return Fr.transition = null, wn(Ln), e ? e() : void 0;
      } finally {
        wn(i), Fr.transition = a, Ct = t, (Ct & (jr | _i)) === fr && Oo();
      }
    }
    function t1() {
      return (Ct & (jr | _i)) !== fr;
    }
    function bm(e, t) {
      la(kS, Pl, e), Pl = Ke(Pl, t);
    }
    function jS(e) {
      Pl = kS.current, ia(kS, e);
    }
    function Ws(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, uT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          OC(u, i), i = i.return;
        }
      Ca = e;
      var s = qs(e.current, null);
      return Nn = s, dr = Pl = t, pr = xu, Lp = null, Sm = B, Mp = B, Em = B, Np = null, Wa = null, kw(), Xi.discardPendingWarnings(), s;
    }
    function n1(e, t) {
      do {
        var a = Nn;
        try {
          if (Ah(), bE(), Rn(), _S.current = null, a === null || a.return === null) {
            pr = kp, Lp = t, Nn = null;
            return;
          }
          if (et && a.mode & Ye && fm(a, !0), tt)
            if (ea(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              au(a, i, dr);
            } else
              fs(a, t, dr);
          ax(e, a.return, a, t, dr), l1(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function r1() {
      var e = bS.current;
      return bS.current = lm, e === null ? lm : e;
    }
    function a1(e) {
      bS.current = e;
    }
    function Ub() {
      OS = yn();
    }
    function jp(e) {
      Sm = Ke(e, Sm);
    }
    function Ab() {
      pr === xu && (pr = gm);
    }
    function HS() {
      (pr === xu || pr === gm || pr === Is) && (pr = Op), Ca !== null && (ys(Sm) || ys(Mp)) && Po(Ca, dr);
    }
    function Fb(e) {
      pr !== Op && (pr = Is), Np === null ? Np = [e] : Np.push(e);
    }
    function jb() {
      return pr === xu;
    }
    function _m(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = r1();
      if (Ca !== e || dr !== t) {
        if (ya) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, dr), u.clear()), Dd(e, t);
        }
        bu = Cs(), Ws(e, t);
      }
      sn(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      if (Ah(), Ct = a, a1(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Rc(), Ca = null, dr = B, pr;
    }
    function Hb() {
      for (; Nn !== null; )
        i1(Nn);
    }
    function Vb(e, t) {
      var a = Ct;
      Ct |= jr;
      var i = r1();
      if (Ca !== e || dr !== t) {
        if (ya) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, dr), u.clear()), Dd(e, t);
        }
        bu = Cs(), zp(), Ws(e, t);
      }
      sn(t);
      do
        try {
          Pb();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      return Ah(), a1(i), Ct = a, Nn !== null ? (Cc(), xu) : (Rc(), Ca = null, dr = B, pr);
    }
    function Pb() {
      for (; Nn !== null && !hc(); )
        i1(Nn);
    }
    function i1(e) {
      var t = e.alternate;
      Ft(e);
      var a;
      (e.mode & Ye) !== Ee ? (Bg(e), a = VS(t, e, Pl), fm(e, !0)) : a = VS(t, e, Pl), Rn(), e.memoizedProps = e.pendingProps, a === null ? l1(e) : Nn = a, _S.current = null;
    }
    function l1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === De) {
          Ft(t);
          var u = void 0;
          if ((t.mode & Ye) === Ee ? u = kC(a, t, Pl) : (Bg(t), u = kC(a, t, Pl), fm(t, !1)), Rn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = Ax(a, t);
          if (s !== null) {
            s.flags &= Sv, Nn = s;
            return;
          }
          if ((t.mode & Ye) !== Ee) {
            fm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = De, i.deletions = null;
          else {
            pr = DS, Nn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nn = v;
          return;
        }
        t = i, Nn = t;
      } while (t !== null);
      pr === xu && (pr = WC);
    }
    function Gs(e, t, a) {
      var i = Ha(), u = Fr.transition;
      try {
        Fr.transition = null, wn(Ln), Bb(e, t, a, i);
      } finally {
        Fr.transition = u, wn(i);
      }
      return null;
    }
    function Bb(e, t, a, i) {
      do
        Du();
      while (Ho !== null);
      if (Jb(), (Ct & (jr | _i)) !== fr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (wl(s), u === null)
        return gc(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = Ke(u.lanes, u.childLanes);
      Bc(e, f), e === Ca && (Ca = null, Nn = null, dr = B), ((u.subtreeFlags & za) !== De || (u.flags & za) !== De) && (Qs || (Qs = !0, NS = a, $S(yi, function() {
        return Du(), null;
      })));
      var p = (u.subtreeFlags & (qu | Zr | Sr | za)) !== De, v = (u.flags & (qu | Zr | Sr | za)) !== De;
      if (p || v) {
        var y = Fr.transition;
        Fr.transition = null;
        var g = Ha();
        wn(Ln);
        var b = Ct;
        Ct |= _i, _S.current = null, Px(e, u), KE(), tb(e, u, s), eT(e.containerInfo), e.current = u, Sd(s), nb(u, e, s), eo(), Rv(), Ct = b, wn(g), Fr.transition = y;
      } else
        e.current = u, KE();
      var w = Qs;
      if (Qs ? (Qs = !1, Ho = e, Up = s) : (Ff = 0, Tm = null), f = e.pendingLanes, f === B && (Af = null), w || c1(e.current, !1), Ku(u.stateNode, i), ya && e.memoizedUpdaters.clear(), Cb(), Ga(e, yn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ae = j.stack, Oe = j.digest;
          M(j.value, {
            componentStack: ae,
            digest: Oe
          });
        }
      if (Cm) {
        Cm = !1;
        var Te = LS;
        throw LS = null, Te;
      }
      return ra(Up, be) && e.tag !== ko && Du(), f = e.pendingLanes, ra(f, be) ? (Ww(), e === zS ? Ap++ : (Ap = 0, zS = e)) : Ap = 0, Oo(), gc(), null;
    }
    function Du() {
      if (Ho !== null) {
        var e = lr(Up), t = ay(gi, e), a = Fr.transition, i = Ha();
        try {
          return Fr.transition = null, wn(t), Yb();
        } finally {
          wn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function $b(e) {
      MS.push(e), Qs || (Qs = !0, $S(yi, function() {
        return Du(), null;
      }));
    }
    function Yb() {
      if (Ho === null)
        return !1;
      var e = NS;
      NS = null;
      var t = Ho, a = Up;
      if (Ho = null, Up = B, (Ct & (jr | _i)) !== fr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Rm = !1, Dv(a);
      var i = Ct;
      Ct |= _i, sb(t.current), ib(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ix(t, f);
        }
      }
      Ed(), c1(t.current, !0), Ct = i, Oo(), Rm ? t === Tm ? Ff++ : (Ff = 0, Tm = t) : Ff = 0, US = !1, Rm = !1, Fa(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function u1(e) {
      return Af !== null && Af.has(e);
    }
    function Ib(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function Qb(e) {
      Cm || (Cm = !0, LS = e);
    }
    var Wb = Qb;
    function o1(e, t, a) {
      var i = $s(a, t), u = iC(e, i, be), s = Mo(e, u, be), f = Ra();
      s !== null && (fu(s, be, f), Ga(s, f));
    }
    function an(e, t, a) {
      if (jx(a), Vp(!1), e.tag === ue) {
        o1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ue) {
          o1(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !u1(s)) {
            var f = $s(a, e), p = lS(i, f, be), v = Mo(i, p, be), y = Ra();
            v !== null && (fu(v, be, y), Ga(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Gb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Pc(e, a), r_(e), Ca === e && cu(dr, a) && (pr === Op || pr === gm && Nv(dr) && yn() - OS < GC ? Ws(e, B) : Em = Ke(Em, a)), Ga(e, u);
    }
    function s1(e, t) {
      t === Fn && (t = Db(e));
      var a = Ra(), i = Ia(e, t);
      i !== null && (fu(i, t, a), Ga(i, a));
    }
    function qb(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), s1(e, a);
    }
    function Xb(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), s1(e, a);
    }
    function Kb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : wb(e / 1960) * 1960;
    }
    function Zb() {
      if (Ap > bb)
        throw Ap = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ff > _b && (Ff = 0, Tm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jb() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function c1(e, t) {
      Ft(e), Dm(e, Kr, gb), t && Dm(e, tu, Sb), Dm(e, Kr, mb), t && Dm(e, tu, yb), Rn();
    }
    function Dm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== De ? i = i.child : ((i.flags & t) !== De && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var km = null;
    function f1(e) {
      {
        if ((Ct & jr) !== fr || !(e.mode & Re))
          return;
        var t = e.tag;
        if (t !== Vt && t !== ue && t !== pe && t !== ke && t !== Ge && t !== lt && t !== He)
          return;
        var a = Qe(e) || "ReactComponent";
        if (km !== null) {
          if (km.has(a))
            return;
          km.add(a);
        } else
          km = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          Ft(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ft(e) : Rn();
        }
      }
    }
    var VS;
    {
      var e_ = null;
      VS = function(e, t, a) {
        var i = S1(e_, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), bE(), OC(e, t), S1(t, i), t.mode & Ye && Bg(t), eu(null, wC, null, e, t, a), Jm()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var d1 = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function t_(e) {
      if (Qr && !Yw())
        switch (e.tag) {
          case ke:
          case Ge:
          case He: {
            var t = Nn && Qe(Nn) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = Qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            d1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), d1 = !0);
            break;
          }
        }
    }
    function Hp(e, t) {
      if (ya) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          $c(e, i, t);
        });
      }
    }
    var BS = {};
    function $S(e, t) {
      {
        var a = al.current;
        return a !== null ? (a.push(t), BS) : vc(e, t);
      }
    }
    function p1(e) {
      if (e !== BS)
        return Cv(e);
    }
    function v1() {
      return al.current !== null;
    }
    function n_(e) {
      {
        if (e.mode & Re) {
          if (!IC())
            return;
        } else if (!Tb() || Ct !== fr || e.tag !== ke && e.tag !== Ge && e.tag !== He)
          return;
        if (al.current === null) {
          var t = mn;
          try {
            Ft(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? Ft(e) : Rn();
          }
        }
      }
    }
    function r_(e) {
      e.tag !== ko && IC() && al.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vp(e) {
      KC = e;
    }
    var Di = null, jf = null, a_ = function(e) {
      Di = e;
    };
    function Hf(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Hf(e);
    }
    function IS(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Hf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: je,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function h1(e, t) {
      {
        if (Di === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ke: {
            (typeof i == "function" || s === ut) && (u = !0);
            break;
          }
          case Ge: {
            (s === je || s === ut) && (u = !0);
            break;
          }
          case lt:
          case He: {
            (s === un || s === ut) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Di(a);
          if (f !== void 0 && f === Di(i))
            return !0;
        }
        return !1;
      }
    }
    function m1(e) {
      {
        if (Di === null || typeof WeakSet != "function")
          return;
        jf === null && (jf = /* @__PURE__ */ new WeakSet()), jf.add(e);
      }
    }
    var i_ = function(e, t) {
      {
        if (Di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Du(), _u(function() {
          QS(e.current, i, a);
        });
      }
    }, l_ = function(e, t) {
      {
        if (e.context !== li)
          return;
        Du(), _u(function() {
          Pp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ke:
          case He:
          case pe:
            v = p;
            break;
          case Ge:
            v = p.render;
            break;
        }
        if (Di === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Di(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === pe ? g = !0 : y = !0));
        }
        if (jf !== null && (jf.has(e) || i !== null && jf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ia(e, be);
          w !== null && vr(w, e, be, Zt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var u_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ke:
          case He:
          case pe:
            p = f;
            break;
          case Ge:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? o_(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function o_(e, t) {
      {
        var a = s_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ce:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case ue:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function s_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ce)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var GS;
    {
      GS = !1;
      try {
        var y1 = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function c_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = De, this.subtreeFlags = De, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new c_(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function f_(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function d_(e) {
      if (typeof e == "function")
        return qS(e) ? pe : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === je)
          return Ge;
        if (t === un)
          return lt;
      }
      return Vt;
    }
    function qs(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = De, a.subtreeFlags = De, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Vt:
        case ke:
        case He:
          a.type = Hf(e.type);
          break;
        case pe:
          a.type = YS(e.type);
          break;
        case Ge:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function p_(e, t) {
      e.flags &= ar | tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = B, e.lanes = t, e.child = null, e.subtreeFlags = De, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = De, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function v_(e, t, a) {
      var i;
      return e === bh ? (i = Re, t === !0 && (i |= ct, i |= ga)) : i = Ee, ya && (i |= Ye), ui(ue, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = Vt, p = e;
      if (typeof e == "function")
        qS(e) ? (f = pe, p = YS(p)) : p = Hf(p);
      else if (typeof e == "string")
        f = ce;
      else
        e: switch (e) {
          case R:
            return Bo(a.children, u, s, t);
          case Y:
            f = dt, u |= ct, (u & Re) !== Ee && (u |= ga);
            break;
          case J:
            return h_(a, u, s, t);
          case Ie:
            return m_(a, u, s, t);
          case Xe:
            return y_(a, u, s, t);
          case ba:
            return g1(a, u, s, t);
          case _a:
          case en:
          case Gn:
          case Yl:
          case rr:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Le:
                  f = rt;
                  break e;
                case vt:
                  f = dn;
                  break e;
                case je:
                  f = Ge, p = IS(p);
                  break e;
                case un:
                  f = lt;
                  break e;
                case ut:
                  f = Jt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Tt, e, i, t);
      return u.lanes = a, u;
    }
    function h_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(pt, e, i, t | Ye);
      return u.elementType = J, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function m_(e, t, a, i) {
      var u = ui(_e, e, i, t);
      return u.elementType = Ie, u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      var u = ui(bt, e, i, t);
      return u.elementType = Xe, u.lanes = a, u;
    }
    function g1(e, t, a, i) {
      var u = ui(Ne, e, i, t);
      u.elementType = ba, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = ui(Be, e, null, t);
      return i.lanes = a, i;
    }
    function g_() {
      var e = ui(ce, null, null, Ee);
      return e.elementType = "DELETED", e;
    }
    function S_(e) {
      var t = ui($t, null, null, Ee);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(Se, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function S1(e, t) {
      return e === null && (e = ui(Vt, null, null, Ee)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function E_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Es(B), this.expirationTimes = Es(Zt), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Es(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < vs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case bh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ko:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = new E_(e, t, a, p, v), b = v_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return dg(b), g;
    }
    var e0 = "18.3.1";
    function C_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Br(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var t0, n0;
    t0 = !1, n0 = {};
    function C1(e) {
      if (!e)
        return li;
      var t = La(e), a = rw(t);
      if (t.tag === pe) {
        var i = t.type;
        if (zl(i))
          return G0(t, i, a);
      }
      return a;
    }
    function R_(e, t) {
      {
        var a = La(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ua(a);
        if (u === null)
          return null;
        if (u.mode & ct) {
          var s = Qe(a) || "Component";
          if (!n0[s]) {
            n0[s] = !0;
            var f = mn;
            try {
              Ft(u), a.mode & ct ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ft(f) : Rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function R1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return E1(e, t, v, y, a, i, u, s, f);
    }
    function T1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = E1(a, i, g, e, u, s, f, p, v);
      b.context = C1(null);
      var w = b.current, M = Ra(), U = Vo(w), j = Tu(M, U);
      return j.callback = t ?? null, Mo(w, j, U), kb(b, U, M), b;
    }
    function Pp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = Ra(), f = Vo(u);
      Cd(f);
      var p = C1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Qr && mn !== null && !t0 && (t0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(mn) || "Unknown"));
      var v = Tu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Mo(u, v, f);
      return y !== null && (vr(y, u, f, s), Ph(y, u, f)), f;
    }
    function Om(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ce:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function T_(e) {
      switch (e.tag) {
        case ue: {
          var t = e.stateNode;
          if (Yc(t)) {
            var a = wd(t);
            Nb(t, a);
          }
          break;
        }
        case _e: {
          _u(function() {
            var u = Ia(e, be);
            if (u !== null) {
              var s = Ra();
              vr(u, e, be, s);
            }
          });
          var i = be;
          r0(e, i);
          break;
        }
      }
    }
    function w1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = jv(a.retryLane, t));
    }
    function r0(e, t) {
      w1(e, t);
      var a = e.alternate;
      a && w1(a, t);
    }
    function w_(e) {
      if (e.tag === _e) {
        var t = ms, a = Ia(e, t);
        if (a !== null) {
          var i = Ra();
          vr(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function x_(e) {
      if (e.tag === _e) {
        var t = Vo(e), a = Ia(e, t);
        if (a !== null) {
          var i = Ra();
          vr(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function x1(e) {
      var t = Ev(e);
      return t === null ? null : t.stateNode;
    }
    var b1 = function(e) {
      return null;
    };
    function b_(e) {
      return b1(e);
    }
    var _1 = function(e) {
      return !1;
    };
    function __(e) {
      return _1(e);
    }
    var D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null;
    {
      var F1 = function(e, t, a) {
        var i = t[a], u = St(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = F1(e[i], t, a + 1), u);
      }, j1 = function(e, t) {
        return F1(e, t, 0);
      }, H1 = function(e, t, a, i) {
        var u = t[i], s = St(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], St(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = H1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, V1 = function(e, t, a) {
        if (t.length !== a.length) {
          ft("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ft("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return H1(e, t, a, 0);
      }, P1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = St(e) ? e.slice() : ot({}, e);
        return s[u] = P1(e[u], t, a + 1, i), s;
      }, B1 = function(e, t, a) {
        return P1(e, t, 0, a);
      }, a0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      D1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = B1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ia(e, be);
          f !== null && vr(f, e, be, Zt);
        }
      }, k1 = function(e, t, a) {
        var i = a0(e, t);
        if (i !== null) {
          var u = j1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Ia(e, be);
          s !== null && vr(s, e, be, Zt);
        }
      }, O1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = V1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Ia(e, be);
          f !== null && vr(f, e, be, Zt);
        }
      }, L1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, be);
        i !== null && vr(i, e, be, Zt);
      }, M1 = function(e, t) {
        e.pendingProps = j1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ia(e, be);
        a !== null && vr(a, e, be, Zt);
      }, N1 = function(e, t, a) {
        e.pendingProps = V1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ia(e, be);
        i !== null && vr(i, e, be, Zt);
      }, z1 = function(e) {
        var t = Ia(e, be);
        t !== null && vr(t, e, be, Zt);
      }, U1 = function(e) {
        b1 = e;
      }, A1 = function(e) {
        _1 = e;
      };
    }
    function D_(e) {
      var t = Ua(e);
      return t === null ? null : t.stateNode;
    }
    function k_(e) {
      return null;
    }
    function O_() {
      return mn;
    }
    function L_(e) {
      var t = e.findFiberByHostInstance, a = F.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: D1,
        overrideHookStateDeletePath: k1,
        overrideHookStateRenamePath: O1,
        overrideProps: L1,
        overridePropsDeletePath: M1,
        overridePropsRenamePath: N1,
        setErrorHandler: U1,
        setSuspenseHandler: A1,
        scheduleUpdate: z1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: D_,
        findFiberByHostInstance: t || k_,
        // React Refresh
        findHostInstancesForRefresh: u_,
        scheduleRefresh: i_,
        scheduleRoot: l_,
        setRefreshHandler: a_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: O_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: e0
      });
    }
    var $1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function i0(e) {
      this._internalRoot = e;
    }
    Lm.prototype.render = i0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Mm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = x1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Pp(e, t, null, null);
    }, Lm.prototype.unmount = i0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        t1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), _u(function() {
          Pp(null, e, null, null);
        }), $0(t);
      }
    };
    function M_(e, t) {
      if (!Mm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Y1(e);
      var a = !1, i = !1, u = "", s = $1;
      t != null && (t.hydrate ? ft("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === fi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = R1(e, bh, null, a, i, u, s);
      Sh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Wd(p), new i0(f);
    }
    function Lm(e) {
      this._internalRoot = e;
    }
    function N_(e) {
      e && uy(e);
    }
    Lm.prototype.unstable_scheduleHydration = N_;
    function z_(e, t, a) {
      if (!Mm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Y1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = T1(t, null, e, bh, i, s, f, p, v);
      if (Sh(y.current, e), Wd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          jw(y, b);
        }
      return new Lm(y);
    }
    function Mm(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === ni || e.nodeType === Gl || !V));
    }
    function Bp(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === ni || e.nodeType === Gl || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function Y1(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ap(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var U_ = F.ReactCurrentOwner, I1;
    I1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = x1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = l0(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function l0(e) {
      return e ? e.nodeType === ni ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function A_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Om(f);
            s.call(w);
          };
        }
        var f = T1(
          t,
          i,
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = f, Sh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return Wd(p), _u(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Om(g);
            y.call(w);
          };
        }
        var g = R1(
          e,
          ko,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Q1
        );
        e._reactRootContainer = g, Sh(g.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return Wd(b), _u(function() {
          Pp(t, g, a, i);
        }), g;
      }
    }
    function F_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Nm(e, t, a, i, u) {
      I1(a), F_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = A_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Om(f);
            p.call(v);
          };
        }
        Pp(t, f, e, u);
      }
      return Om(f);
    }
    var W1 = !1;
    function j_(e) {
      {
        W1 || (W1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = U_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : R_(e, "findDOMNode");
    }
    function H_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Nm(null, e, t, !0, a);
    }
    function V_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ap(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Nm(null, e, t, !1, a);
    }
    function P_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !us(e))
        throw new Error("parentComponent must be a valid React Component");
      return Nm(e, t, a, !1, i);
    }
    var G1 = !1;
    function B_(e) {
      if (G1 || (G1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Bp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ap(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = l0(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return _u(function() {
          Nm(null, null, e, !1, function() {
            e._reactRootContainer = null, $0(e);
          });
        }), !0;
      } else {
        {
          var u = l0(e), s = !!(u && _o(u)), f = e.nodeType === Gr && Bp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    po(T_), iy(w_), Qc(x_), Pv(Ha), Bv(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), yv(YR), sc(FS, zb, _u);
    function $_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Mm(t))
        throw new Error("Target container is not a DOM element.");
      return C_(e, t, null, a);
    }
    function Y_(e, t, a, i) {
      return P_(e, t, a, i);
    }
    var u0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, mf, Eh, oc, as, FS]
    };
    function I_(e, t) {
      return u0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t);
    }
    function Q_(e, t, a) {
      return u0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t, a);
    }
    function W_(e) {
      return t1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), _u(e);
    }
    var G_ = L_({
      findFiberByHostInstance: zs,
      bundleType: 1,
      version: e0,
      rendererPackageName: "react-dom"
    });
    if (!G_ && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var q1 = window.location.protocol;
      /^(https?|file):$/.test(q1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (q1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u0, Xa.createPortal = $_, Xa.createRoot = I_, Xa.findDOMNode = j_, Xa.flushSync = W_, Xa.hydrate = H_, Xa.hydrateRoot = Q_, Xa.render = V_, Xa.unmountComponentAtNode = B_, Xa.unstable_batchedUpdates = FS, Xa.unstable_renderSubtreeIntoContainer = Y_, Xa.version = e0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xa;
}
function oR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oR);
    } catch (ie) {
      console.error(ie);
    }
  }
}
process.env.NODE_ENV === "production" ? (oR(), d0.exports = rD()) : d0.exports = aD();
var iD = d0.exports, p0, Fm = iD;
if (process.env.NODE_ENV === "production")
  p0 = Fm.createRoot, Fm.hydrateRoot;
else {
  var iR = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  p0 = function(ie, Z) {
    iR.usingClientEntryPoint = !0;
    try {
      return Fm.createRoot(ie, Z);
    } finally {
      iR.usingClientEntryPoint = !1;
    }
  };
}
const lD = () => /* @__PURE__ */ jm.jsxDEV(jm.Fragment, { children: /* @__PURE__ */ jm.jsxDEV("h1", { children: "A COMPONENT" }, void 0, !1, {
  fileName: "C:/Users/nbrkovic/Desktop/test-react/src/components/A.jsx",
  lineNumber: 6,
  columnNumber: 9
}, void 0) }, void 0, !1, {
  fileName: "C:/Users/nbrkovic/Desktop/test-react/src/components/A.jsx",
  lineNumber: 5,
  columnNumber: 5
}, void 0), uD = ["module-id"], lR = "liferay-simple-web-component";
class oD extends HTMLElement {
  static get observedAttributes() {
    return uD;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = p0(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ jm.jsxDEV(lD, {}, void 0, !1, {
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
customElements.get(lR) || customElements.define(lR, oD);
