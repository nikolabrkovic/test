var d0 = { exports: {} }, Qp = {}, p0 = { exports: {} }, Ct = {};
process = {...{env:{NODE_ENV:"production"}}};
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
function tk() {
  if (K1) return Ct;
  K1 = 1;
  var J = Symbol.for("react.element"), G = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Nt = Symbol.for("react.profiler"), qe = Symbol.for("react.provider"), S = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), de = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), re = Symbol.iterator;
  function he(_) {
    return _ === null || typeof _ != "object" ? null : (_ = re && _[re] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, wt = {};
  function pt(_, P, ze) {
    this.props = _, this.context = P, this.refs = wt, this.updater = ze || ue;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, pt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function pn() {
  }
  pn.prototype = pt.prototype;
  function at(_, P, ze) {
    this.props = _, this.context = P, this.refs = wt, this.updater = ze || ue;
  }
  var Qe = at.prototype = new pn();
  Qe.constructor = at, Be(Qe, pt.prototype), Qe.isPureReactComponent = !0;
  var vt = Array.isArray, De = Object.prototype.hasOwnProperty, ot = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(_, P, ze) {
    var Pe, et = {}, Je = null, yt = null;
    if (P != null) for (Pe in P.ref !== void 0 && (yt = P.ref), P.key !== void 0 && (Je = "" + P.key), P) De.call(P, Pe) && !He.hasOwnProperty(Pe) && (et[Pe] = P[Pe]);
    var it = arguments.length - 2;
    if (it === 1) et.children = ze;
    else if (1 < it) {
      for (var lt = Array(it), en = 0; en < it; en++) lt[en] = arguments[en + 2];
      et.children = lt;
    }
    if (_ && _.defaultProps) for (Pe in it = _.defaultProps, it) et[Pe] === void 0 && (et[Pe] = it[Pe]);
    return { $$typeof: J, type: _, key: Je, ref: yt, props: et, _owner: ot.current };
  }
  function _n(_, P) {
    return { $$typeof: J, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Qt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === J;
  }
  function _t(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ze) {
      return P[ze];
    });
  }
  var Cn = /\/+/g;
  function Ne(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? _t("" + _.key) : P.toString(36);
  }
  function Ke(_, P, ze, Pe, et) {
    var Je = typeof _;
    (Je === "undefined" || Je === "boolean") && (_ = null);
    var yt = !1;
    if (_ === null) yt = !0;
    else switch (Je) {
      case "string":
      case "number":
        yt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case J:
          case G:
            yt = !0;
        }
    }
    if (yt) return yt = _, et = et(yt), _ = Pe === "" ? "." + Ne(yt, 0) : Pe, vt(et) ? (ze = "", _ != null && (ze = _.replace(Cn, "$&/") + "/"), Ke(et, P, ze, "", function(en) {
      return en;
    })) : et != null && (Qt(et) && (et = _n(et, ze + (!et.key || yt && yt.key === et.key ? "" : ("" + et.key).replace(Cn, "$&/") + "/") + _)), P.push(et)), 1;
    if (yt = 0, Pe = Pe === "" ? "." : Pe + ":", vt(_)) for (var it = 0; it < _.length; it++) {
      Je = _[it];
      var lt = Pe + Ne(Je, it);
      yt += Ke(Je, P, ze, lt, et);
    }
    else if (lt = he(_), typeof lt == "function") for (_ = lt.call(_), it = 0; !(Je = _.next()).done; ) Je = Je.value, lt = Pe + Ne(Je, it++), yt += Ke(Je, P, ze, lt, et);
    else if (Je === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return yt;
  }
  function At(_, P, ze) {
    if (_ == null) return _;
    var Pe = [], et = 0;
    return Ke(_, Pe, "", "", function(Je) {
      return P.call(ze, Je, et++);
    }), Pe;
  }
  function xt(_) {
    if (_._status === -1) {
      var P = _._result;
      P = P(), P.then(function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = ze);
      }, function(ze) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = ze);
      }), _._status === -1 && (_._status = 0, _._result = P);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var me = { current: null }, Z = { transition: null }, be = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: Z, ReactCurrentOwner: ot };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ct.Children = { map: At, forEach: function(_, P, ze) {
    At(_, function() {
      P.apply(this, arguments);
    }, ze);
  }, count: function(_) {
    var P = 0;
    return At(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return At(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!Qt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Ct.Component = pt, Ct.Fragment = A, Ct.Profiler = Nt, Ct.PureComponent = at, Ct.StrictMode = dt, Ct.Suspense = ve, Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Ct.act = ae, Ct.cloneElement = function(_, P, ze) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Pe = Be({}, _.props), et = _.key, Je = _.ref, yt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Je = P.ref, yt = ot.current), P.key !== void 0 && (et = "" + P.key), _.type && _.type.defaultProps) var it = _.type.defaultProps;
      for (lt in P) De.call(P, lt) && !He.hasOwnProperty(lt) && (Pe[lt] = P[lt] === void 0 && it !== void 0 ? it[lt] : P[lt]);
    }
    var lt = arguments.length - 2;
    if (lt === 1) Pe.children = ze;
    else if (1 < lt) {
      it = Array(lt);
      for (var en = 0; en < lt; en++) it[en] = arguments[en + 2];
      Pe.children = it;
    }
    return { $$typeof: J, type: _.type, key: et, ref: Je, props: Pe, _owner: yt };
  }, Ct.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: qe, _context: _ }, _.Consumer = _;
  }, Ct.createElement = rn, Ct.createFactory = function(_) {
    var P = rn.bind(null, _);
    return P.type = _, P;
  }, Ct.createRef = function() {
    return { current: null };
  }, Ct.forwardRef = function(_) {
    return { $$typeof: Wt, render: _ };
  }, Ct.isValidElement = Qt, Ct.lazy = function(_) {
    return { $$typeof: ut, _payload: { _status: -1, _result: _ }, _init: xt };
  }, Ct.memo = function(_, P) {
    return { $$typeof: de, type: _, compare: P === void 0 ? null : P };
  }, Ct.startTransition = function(_) {
    var P = Z.transition;
    Z.transition = {};
    try {
      _();
    } finally {
      Z.transition = P;
    }
  }, Ct.unstable_act = ae, Ct.useCallback = function(_, P) {
    return me.current.useCallback(_, P);
  }, Ct.useContext = function(_) {
    return me.current.useContext(_);
  }, Ct.useDebugValue = function() {
  }, Ct.useDeferredValue = function(_) {
    return me.current.useDeferredValue(_);
  }, Ct.useEffect = function(_, P) {
    return me.current.useEffect(_, P);
  }, Ct.useId = function() {
    return me.current.useId();
  }, Ct.useImperativeHandle = function(_, P, ze) {
    return me.current.useImperativeHandle(_, P, ze);
  }, Ct.useInsertionEffect = function(_, P) {
    return me.current.useInsertionEffect(_, P);
  }, Ct.useLayoutEffect = function(_, P) {
    return me.current.useLayoutEffect(_, P);
  }, Ct.useMemo = function(_, P) {
    return me.current.useMemo(_, P);
  }, Ct.useReducer = function(_, P, ze) {
    return me.current.useReducer(_, P, ze);
  }, Ct.useRef = function(_) {
    return me.current.useRef(_);
  }, Ct.useState = function(_) {
    return me.current.useState(_);
  }, Ct.useSyncExternalStore = function(_, P, ze) {
    return me.current.useSyncExternalStore(_, P, ze);
  }, Ct.useTransition = function() {
    return me.current.useTransition();
  }, Ct.version = "18.3.1", Ct;
}
var qp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
qp.exports;
var Z1;
function nk() {
  return Z1 || (Z1 = 1, function(J, G) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", dt = Symbol.for("react.element"), Nt = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Wt = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), de = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), wt = Symbol.for("react.offscreen"), pt = Symbol.iterator, pn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = pt && h[pt] || h[pn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, vt = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, rn = null;
      function _n(h) {
        rn = h;
      }
      He.setExtraStackFrame = function(h) {
        rn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, _t = !1, Cn = !1, Ne = !1, Ke = !1, At = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: vt,
        ReactCurrentOwner: ot
      };
      At.ReactDebugCurrentFrame = He, At.ReactCurrentActQueue = De;
      function xt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          Z("warn", h, N);
        }
      }
      function me(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          Z("error", h, N);
        }
      }
      function Z(h, C, N) {
        {
          var j = At.ReactDebugCurrentFrame, X = j.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var Ae = N.map(function(ie) {
            return String(ie);
          });
          Ae.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var be = {};
      function ae(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", X = j + "." + C;
          if (be[X])
            return;
          me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), be[X] = !0;
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
          ae(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, N, j) {
          ae(h, "replaceState");
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
        enqueueSetState: function(h, C, N, j) {
          ae(h, "setState");
        }
      }, P = Object.assign, ze = {};
      Object.freeze(ze);
      function Pe(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Pe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var et = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Pe.prototype, h, {
            get: function() {
              xt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var yt in et)
          et.hasOwnProperty(yt) && Je(yt, et[yt]);
      }
      function it() {
      }
      it.prototype = Pe.prototype;
      function lt(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      var en = lt.prototype = new it();
      en.constructor = lt, P(en, Pe.prototype), en.isPureReactComponent = !0;
      function hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Br = Array.isArray;
      function vn(h) {
        return Br(h);
      }
      function Qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Pn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function kn(h) {
        if (Pn(h))
          return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), zn(h);
      }
      function $r(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
      }
      function Ir(h) {
        return h.displayName || "Context";
      }
      function Gn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case qe:
            return "Fragment";
          case Nt:
            return "Portal";
          case Wt:
            return "Profiler";
          case S:
            return "StrictMode";
          case re:
            return "Suspense";
          case he:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case de:
              var C = h;
              return Ir(C) + ".Consumer";
            case ve:
              var N = h;
              return Ir(N._context) + ".Provider";
            case ut:
              return $r(h, h.render, "ForwardRef");
            case ue:
              var j = h.displayName || null;
              return j !== null ? j : Gn(h.type) || "Memo";
            case Be: {
              var X = h, Ae = X._payload, ie = X._init;
              try {
                return Gn(ie(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, da, rr;
      rr = {};
      function Wr(h) {
        if (mr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function hn(h) {
        if (mr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function xr(h, C) {
        var N = function() {
          yr || (yr = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function fi(h, C) {
        var N = function() {
          da || (da = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function pa(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Gn(ot.current.type);
          rr[C] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), rr[C] = !0);
        }
      }
      var ee = function(h, C, N, j, X, Ae, ie) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: dt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ie,
          // Record the component responsible for creating this element.
          _owner: Ae
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
          value: j
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function _e(h, C, N) {
        var j, X = {}, Ae = null, ie = null, Me = null, st = null;
        if (C != null) {
          Wr(C) && (ie = C.ref, pa(C)), hn(C) && (kn(C.key), Ae = "" + C.key), Me = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (j in C)
            mr.call(C, j) && !Yr.hasOwnProperty(j) && (X[j] = C[j]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          X.children = N;
        else if (bt > 1) {
          for (var Kt = Array(bt), Yt = 0; Yt < bt; Yt++)
            Kt[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(Kt), X.children = Kt;
        }
        if (h && h.defaultProps) {
          var Zt = h.defaultProps;
          for (j in Zt)
            X[j] === void 0 && (X[j] = Zt[j]);
        }
        if (Ae || ie) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && xr(X, tn), ie && fi(X, tn);
        }
        return ee(h, Ae, ie, Me, st, ot.current, X);
      }
      function tt(h, C) {
        var N = ee(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function zt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, X = P({}, h.props), Ae = h.key, ie = h.ref, Me = h._self, st = h._source, bt = h._owner;
        if (C != null) {
          Wr(C) && (ie = C.ref, bt = ot.current), hn(C) && (kn(C.key), Ae = "" + C.key);
          var Kt;
          h.type && h.type.defaultProps && (Kt = h.type.defaultProps);
          for (j in C)
            mr.call(C, j) && !Yr.hasOwnProperty(j) && (C[j] === void 0 && Kt !== void 0 ? X[j] = Kt[j] : X[j] = C[j]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          X.children = N;
        else if (Yt > 1) {
          for (var Zt = Array(Yt), tn = 0; tn < Yt; tn++)
            Zt[tn] = arguments[tn + 2];
          X.children = Zt;
        }
        return ee(h.type, Ae, ie, Me, st, bt, X);
      }
      function jt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === dt;
      }
      var Dn = ".", mn = ":";
      function gr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + j;
      }
      var It = !1, br = /\/+/g;
      function Ft(h) {
        return h.replace(br, "$&/");
      }
      function Ht(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (kn(h.key), gr("" + h.key)) : C.toString(36);
      }
      function Ja(h, C, N, j, X) {
        var Ae = typeof h;
        (Ae === "undefined" || Ae === "boolean") && (h = null);
        var ie = !1;
        if (h === null)
          ie = !0;
        else
          switch (Ae) {
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case dt:
                case Nt:
                  ie = !0;
              }
          }
        if (ie) {
          var Me = h, st = X(Me), bt = j === "" ? Dn + Ht(Me, 0) : j;
          if (vn(st)) {
            var Kt = "";
            bt != null && (Kt = Ft(bt) + "/"), Ja(st, C, Kt, "", function(Wf) {
              return Wf;
            });
          } else st != null && (jt(st) && (st.key && (!Me || Me.key !== st.key) && kn(st.key), st = tt(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Me || Me.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ft("" + st.key) + "/"
            ) : "") + bt
          )), C.push(st));
          return 1;
        }
        var Yt, Zt, tn = 0, Et = j === "" ? Dn : j + mn;
        if (vn(h))
          for (var Ai = 0; Ai < h.length; Ai++)
            Yt = h[Ai], Zt = Et + Ht(Yt, Ai), tn += Ja(Yt, C, N, Zt, X);
        else {
          var $u = at(h);
          if (typeof $u == "function") {
            var qo = h;
            $u === qo.entries && (It || xt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Yf = $u.call(qo), ri, Xo = 0; !(ri = Yf.next()).done; )
              Yt = ri.value, Zt = Et + Ht(Yt, Xo++), tn += Ja(Yt, C, N, Zt, X);
          } else if (Ae === "object") {
            var Ko = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Ko === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Ko) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function ka(h, C, N) {
        if (h == null)
          return h;
        var j = [], X = 0;
        return Ja(h, j, "", "", function(Ae) {
          return C.call(N, Ae, X++);
        }), j;
      }
      function ol(h) {
        var C = 0;
        return ka(h, function() {
          C++;
        }), C;
      }
      function Wl(h, C, N) {
        ka(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Mu(h) {
        return ka(h, function(C) {
          return C;
        }) || [];
      }
      function Mi(h) {
        if (!jt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function sl(h) {
        var C = {
          $$typeof: de,
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
          $$typeof: ve,
          _context: C
        };
        var N = !1, j = !1, X = !1;
        {
          var Ae = {
            $$typeof: de,
            _context: C
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return j || (j = !0, me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ie) {
                C.Provider = ie;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ie) {
                C._currentValue = ie;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ie) {
                C._currentValue2 = ie;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ie) {
                C._threadCount = ie;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, me("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ie) {
                X || (xt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), X = !0);
              }
            }
          }), C.Consumer = Ae;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, di = 0, ha = 1, ei = 2;
      function _r(h) {
        if (h._status === va) {
          var C = h._result, N = C();
          if (N.then(function(Ae) {
            if (h._status === di || h._status === va) {
              var ie = h;
              ie._status = ha, ie._result = Ae;
            }
          }, function(Ae) {
            if (h._status === di || h._status === va) {
              var ie = h;
              ie._status = ei, ie._result = Ae;
            }
          }), h._status === va) {
            var j = h;
            j._status = di, j._result = N;
          }
        }
        if (h._status === ha) {
          var X = h._result;
          return X === void 0 && me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function ma(h) {
        var C = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, N = {
          $$typeof: Be,
          _payload: C,
          _init: _r
        };
        {
          var j, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = Ae, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = Ae, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function pi(h) {
        h != null && h.$$typeof === ue ? me("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? me("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && me("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && me("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ut,
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
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var vi;
      vi = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === qe || h === Wt || Ke || h === S || h === re || h === he || Ne || h === wt || Qt || _t || Cn || typeof h == "object" && h !== null && (h.$$typeof === Be || h.$$typeof === ue || h.$$typeof === ve || h.$$typeof === de || h.$$typeof === ut || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === vi || h.getModuleId !== void 0));
      }
      function I(h, C) {
        R(h) || me("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(X) {
              j = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function q() {
        var h = Qe.current;
        return h === null && me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Te(h) {
        var C = q();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function ft(h) {
        var C = q();
        return C.useState(h);
      }
      function gt(h, C, N) {
        var j = q();
        return j.useReducer(h, C, N);
      }
      function Ue(h) {
        var C = q();
        return C.useRef(h);
      }
      function nt(h, C) {
        var N = q();
        return N.useEffect(h, C);
      }
      function Un(h, C) {
        var N = q();
        return N.useInsertionEffect(h, C);
      }
      function Xt(h, C) {
        var N = q();
        return N.useLayoutEffect(h, C);
      }
      function an(h, C) {
        var N = q();
        return N.useCallback(h, C);
      }
      function Sr(h, C) {
        var N = q();
        return N.useMemo(h, C);
      }
      function hi(h, C, N) {
        var j = q();
        return j.useImperativeHandle(h, C, N);
      }
      function kt(h, C) {
        {
          var N = q();
          return N.useDebugValue(h, C);
        }
      }
      function qn() {
        var h = q();
        return h.useTransition();
      }
      function kr(h) {
        var C = q();
        return C.useDeferredValue(h);
      }
      function rt() {
        var h = q();
        return h.useId();
      }
      function Da(h, C, N) {
        var j = q();
        return j.useSyncExternalStore(h, C, N);
      }
      var cl = 0, Nu, fl, Qr, Yo, Dr, Wo, Qo;
      function Zs() {
      }
      Zs.__reactDisabledLog = !0;
      function zu() {
        {
          if (cl === 0) {
            Nu = console.log, fl = console.info, Qr = console.warn, Yo = console.error, Dr = console.group, Wo = console.groupCollapsed, Qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Zs,
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
          cl++;
        }
      }
      function dl() {
        {
          if (cl--, cl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, h, {
                value: Nu
              }),
              info: P({}, h, {
                value: fl
              }),
              warn: P({}, h, {
                value: Qr
              }),
              error: P({}, h, {
                value: Yo
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: Wo
              }),
              groupEnd: P({}, h, {
                value: Qo
              })
            });
          }
          cl < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = At.ReactCurrentDispatcher, Or;
      function pl(h, C, N) {
        {
          if (Or === void 0)
            try {
              throw Error();
            } catch (X) {
              var j = X.stack.trim().match(/\n( *(at )?)/);
              Or = j && j[1] || "";
            }
          return `
` + Or + h;
        }
      }
      var vl = !1, hl;
      {
        var Uu = typeof WeakMap == "function" ? WeakMap : Map;
        hl = new Uu();
      }
      function Au(h, C) {
        if (!h || vl)
          return "";
        {
          var N = hl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        vl = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = ti.current, ti.current = null, zu();
        try {
          if (C) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (Et) {
                j = Et;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (Et) {
                j = Et;
              }
              h.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Et) {
              j = Et;
            }
            h();
          }
        } catch (Et) {
          if (Et && j && typeof Et.stack == "string") {
            for (var Me = Et.stack.split(`
`), st = j.stack.split(`
`), bt = Me.length - 1, Kt = st.length - 1; bt >= 1 && Kt >= 0 && Me[bt] !== st[Kt]; )
              Kt--;
            for (; bt >= 1 && Kt >= 0; bt--, Kt--)
              if (Me[bt] !== st[Kt]) {
                if (bt !== 1 || Kt !== 1)
                  do
                    if (bt--, Kt--, Kt < 0 || Me[bt] !== st[Kt]) {
                      var Yt = `
` + Me[bt].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && hl.set(h, Yt), Yt;
                    }
                  while (bt >= 1 && Kt >= 0);
                break;
              }
          }
        } finally {
          vl = !1, ti.current = Ae, dl(), Error.prepareStackTrace = X;
        }
        var Zt = h ? h.displayName || h.name : "", tn = Zt ? pl(Zt) : "";
        return typeof h == "function" && hl.set(h, tn), tn;
      }
      function Ni(h, C, N) {
        return Au(h, !1);
      }
      function If(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function mi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Au(h, If(h));
        if (typeof h == "string")
          return pl(h);
        switch (h) {
          case re:
            return pl("Suspense");
          case he:
            return pl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ut:
              return Ni(h.render);
            case ue:
              return mi(h.type, C, N);
            case Be: {
              var j = h, X = j._payload, Ae = j._init;
              try {
                return mi(Ae(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, ju = At.ReactDebugCurrentFrame;
      function Ql(h) {
        if (h) {
          var C = h._owner, N = mi(h.type, h._source, C ? C.type : null);
          ju.setExtraStackFrame(N);
        } else
          ju.setExtraStackFrame(null);
      }
      function Fu(h, C, N, j, X) {
        {
          var Ae = Function.call.bind(mr);
          for (var ie in h)
            if (Ae(h, ie)) {
              var Me = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var st = Error((j || "React class") + ": " + N + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Me = h[ie](C, ie, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Me = bt;
              }
              Me && !(Me instanceof Error) && (Ql(X), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ie, typeof Me), Ql(null)), Me instanceof Error && !(Me.message in Dt) && (Dt[Me.message] = !0, Ql(X), me("Failed %s type: %s", N, Me.message), Ql(null));
            }
        }
      }
      function St(h) {
        if (h) {
          var C = h._owner, N = mi(h.type, h._source, C ? C.type : null);
          _n(N);
        } else
          _n(null);
      }
      var Hu;
      Hu = !1;
      function Pu() {
        if (ot.current) {
          var h = Gn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Gl(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var yn = {};
      function Gr(h) {
        var C = Pu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function Lr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Gr(C);
          if (!yn[N]) {
            yn[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ot.current && (j = " It was passed a child from " + Gn(h._owner.type) + "."), St(h), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), St(null);
          }
        }
      }
      function ml(h, C) {
        if (typeof h == "object") {
          if (vn(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              jt(j) && Lr(j, C);
            }
          else if (jt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = at(h);
            if (typeof X == "function" && X !== h.entries)
              for (var Ae = X.call(h), ie; !(ie = Ae.next()).done; )
                jt(ie.value) && Lr(ie.value, C);
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
          else if (typeof C == "object" && (C.$$typeof === ut || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Gn(C);
            Fu(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Hu) {
            Hu = !0;
            var X = Gn(C);
            me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              St(h), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), St(null);
              break;
            }
          }
          h.ref !== null && (St(h), me("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
        }
      }
      function Js(h, C, N) {
        var j = R(h);
        if (!j) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Gl(C);
          Ae ? X += Ae : X += Pu();
          var ie;
          h === null ? ie = "null" : vn(h) ? ie = "array" : h !== void 0 && h.$$typeof === dt ? (ie = "<" + (Gn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, X);
        }
        var Me = _e.apply(this, arguments);
        if (Me == null)
          return Me;
        if (j)
          for (var st = 2; st < arguments.length; st++)
            ml(arguments[st], h);
        return h === qe ? Pt(Me) : Rn(Me), Me;
      }
      var qr = !1;
      function Xn(h) {
        var C = Js.bind(null, h);
        return C.type = h, qr || (qr = !0, xt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return xt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function yi(h, C, N) {
        for (var j = zt.apply(this, arguments), X = 2; X < arguments.length; X++)
          ml(arguments[X], j.type);
        return Rn(j), j;
      }
      function ec(h, C) {
        var N = vt.transition;
        vt.transition = {};
        var j = vt.transition;
        vt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (vt.transition = N, N === null && j._updatedFibers) {
            var X = j._updatedFibers.size;
            X > 10 && xt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var zi = !1, yl = null;
      function tc(h) {
        if (yl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = J && J[C];
            yl = N.call(J, "timers").setImmediate;
          } catch {
            yl = function(X) {
              zi === !1 && (zi = !0, typeof MessageChannel > "u" && me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = X, Ae.port2.postMessage(void 0);
            };
          }
        return yl(h);
      }
      var Oa = 0, gl = !1;
      function Ui(h) {
        {
          var C = Oa;
          Oa++, De.current === null && (De.current = []);
          var N = De.isBatchingLegacy, j;
          try {
            if (De.isBatchingLegacy = !0, j = h(), !N && De.didScheduleLegacyUpdate) {
              var X = De.current;
              X !== null && (De.didScheduleLegacyUpdate = !1, El(X));
            }
          } catch (Zt) {
            throw La(C), Zt;
          } finally {
            De.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var Ae = j, ie = !1, Me = {
              then: function(Zt, tn) {
                ie = !0, Ae.then(function(Et) {
                  La(C), Oa === 0 ? Vu(Et, Zt, tn) : Zt(Et);
                }, function(Et) {
                  La(C), tn(Et);
                });
              }
            };
            return !gl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (gl = !0, me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var st = j;
            if (La(C), Oa === 0) {
              var bt = De.current;
              bt !== null && (El(bt), De.current = null);
              var Kt = {
                then: function(Zt, tn) {
                  De.current === null ? (De.current = [], Vu(st, Zt, tn)) : Zt(st);
                }
              };
              return Kt;
            } else {
              var Yt = {
                then: function(Zt, tn) {
                  Zt(st);
                }
              };
              return Yt;
            }
          }
        }
      }
      function La(h) {
        h !== Oa - 1 && me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function Vu(h, C, N) {
        {
          var j = De.current;
          if (j !== null)
            try {
              El(j), tc(function() {
                j.length === 0 ? (De.current = null, C(h)) : Vu(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var Sl = !1;
      function El(h) {
        if (!Sl) {
          Sl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            Sl = !1;
          }
        }
      }
      var ql = Js, Bu = yi, Go = Xn, ni = {
        map: ka,
        forEach: Wl,
        count: ol,
        toArray: Mu,
        only: Mi
      };
      G.Children = ni, G.Component = Pe, G.Fragment = qe, G.Profiler = Wt, G.PureComponent = lt, G.StrictMode = S, G.Suspense = re, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, G.act = Ui, G.cloneElement = Bu, G.createContext = sl, G.createElement = ql, G.createFactory = Go, G.createRef = hr, G.forwardRef = pi, G.isValidElement = jt, G.lazy = ma, G.memo = I, G.startTransition = ec, G.unstable_act = Ui, G.useCallback = an, G.useContext = Te, G.useDebugValue = kt, G.useDeferredValue = kr, G.useEffect = nt, G.useId = rt, G.useImperativeHandle = hi, G.useInsertionEffect = Un, G.useLayoutEffect = Xt, G.useMemo = Sr, G.useReducer = gt, G.useRef = Ue, G.useState = ft, G.useSyncExternalStore = Da, G.useTransition = qn, G.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(qp, qp.exports)), qp.exports;
}
process.env.NODE_ENV === "production" ? p0.exports = tk() : p0.exports = nk();
var Ks = p0.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function rk() {
  if (J1) return Qp;
  J1 = 1;
  var J = Ks, G = Symbol.for("react.element"), A = Symbol.for("react.fragment"), dt = Object.prototype.hasOwnProperty, Nt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Wt, ve, de) {
    var ut, re = {}, he = null, ue = null;
    de !== void 0 && (he = "" + de), ve.key !== void 0 && (he = "" + ve.key), ve.ref !== void 0 && (ue = ve.ref);
    for (ut in ve) dt.call(ve, ut) && !qe.hasOwnProperty(ut) && (re[ut] = ve[ut]);
    if (Wt && Wt.defaultProps) for (ut in ve = Wt.defaultProps, ve) re[ut] === void 0 && (re[ut] = ve[ut]);
    return { $$typeof: G, type: Wt, key: he, ref: ue, props: re, _owner: Nt.current };
  }
  return Qp.Fragment = A, Qp.jsx = S, Qp.jsxs = S, Qp;
}
var Gp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function ak() {
  return eR || (eR = 1, process.env.NODE_ENV !== "production" && function() {
    var J = Ks, G = Symbol.for("react.element"), A = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), Nt = Symbol.for("react.strict_mode"), qe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Wt = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Be = Symbol.iterator, wt = "@@iterator";
    function pt(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Be && R[Be] || R[wt];
      return typeof I == "function" ? I : null;
    }
    var pn = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var I = arguments.length, q = new Array(I > 1 ? I - 1 : 0), Te = 1; Te < I; Te++)
          q[Te - 1] = arguments[Te];
        Qe("error", R, q);
      }
    }
    function Qe(R, I, q) {
      {
        var Te = pn.ReactDebugCurrentFrame, ft = Te.getStackAddendum();
        ft !== "" && (I += "%s", q = q.concat([ft]));
        var gt = q.map(function(Ue) {
          return String(Ue);
        });
        gt.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, gt);
      }
    }
    var vt = !1, De = !1, ot = !1, He = !1, rn = !1, _n;
    _n = Symbol.for("react.module.reference");
    function Qt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === dt || R === qe || rn || R === Nt || R === de || R === ut || He || R === ue || vt || De || ot || typeof R == "object" && R !== null && (R.$$typeof === he || R.$$typeof === re || R.$$typeof === S || R.$$typeof === Wt || R.$$typeof === ve || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === _n || R.getModuleId !== void 0));
    }
    function _t(R, I, q) {
      var Te = R.displayName;
      if (Te)
        return Te;
      var ft = I.displayName || I.name || "";
      return ft !== "" ? q + "(" + ft + ")" : q;
    }
    function Cn(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case dt:
          return "Fragment";
        case A:
          return "Portal";
        case qe:
          return "Profiler";
        case Nt:
          return "StrictMode";
        case de:
          return "Suspense";
        case ut:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Wt:
            var I = R;
            return Cn(I) + ".Consumer";
          case S:
            var q = R;
            return Cn(q._context) + ".Provider";
          case ve:
            return _t(R, R.render, "ForwardRef");
          case re:
            var Te = R.displayName || null;
            return Te !== null ? Te : Ne(R.type) || "Memo";
          case he: {
            var ft = R, gt = ft._payload, Ue = ft._init;
            try {
              return Ne(Ue(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, At = 0, xt, me, Z, be, ae, _, P;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Pe() {
      {
        if (At === 0) {
          xt = console.log, me = console.info, Z = console.warn, be = console.error, ae = console.group, _ = console.groupCollapsed, P = console.groupEnd;
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
        At++;
      }
    }
    function et() {
      {
        if (At--, At === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, R, {
              value: xt
            }),
            info: Ke({}, R, {
              value: me
            }),
            warn: Ke({}, R, {
              value: Z
            }),
            error: Ke({}, R, {
              value: be
            }),
            group: Ke({}, R, {
              value: ae
            }),
            groupCollapsed: Ke({}, R, {
              value: _
            }),
            groupEnd: Ke({}, R, {
              value: P
            })
          });
        }
        At < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = pn.ReactCurrentDispatcher, yt;
    function it(R, I, q) {
      {
        if (yt === void 0)
          try {
            throw Error();
          } catch (ft) {
            var Te = ft.stack.trim().match(/\n( *(at )?)/);
            yt = Te && Te[1] || "";
          }
        return `
` + yt + R;
      }
    }
    var lt = !1, en;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      en = new hr();
    }
    function Br(R, I) {
      if (!R || lt)
        return "";
      {
        var q = en.get(R);
        if (q !== void 0)
          return q;
      }
      var Te;
      lt = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = Je.current, Je.current = null, Pe();
      try {
        if (I) {
          var Ue = function() {
            throw Error();
          };
          if (Object.defineProperty(Ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ue, []);
            } catch (qn) {
              Te = qn;
            }
            Reflect.construct(R, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (qn) {
              Te = qn;
            }
            R.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qn) {
            Te = qn;
          }
          R();
        }
      } catch (qn) {
        if (qn && Te && typeof qn.stack == "string") {
          for (var nt = qn.stack.split(`
`), Un = Te.stack.split(`
`), Xt = nt.length - 1, an = Un.length - 1; Xt >= 1 && an >= 0 && nt[Xt] !== Un[an]; )
            an--;
          for (; Xt >= 1 && an >= 0; Xt--, an--)
            if (nt[Xt] !== Un[an]) {
              if (Xt !== 1 || an !== 1)
                do
                  if (Xt--, an--, an < 0 || nt[Xt] !== Un[an]) {
                    var Sr = `
` + nt[Xt].replace(" at new ", " at ");
                    return R.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", R.displayName)), typeof R == "function" && en.set(R, Sr), Sr;
                  }
                while (Xt >= 1 && an >= 0);
              break;
            }
        }
      } finally {
        lt = !1, Je.current = gt, et(), Error.prepareStackTrace = ft;
      }
      var hi = R ? R.displayName || R.name : "", kt = hi ? it(hi) : "";
      return typeof R == "function" && en.set(R, kt), kt;
    }
    function vn(R, I, q) {
      return Br(R, !1);
    }
    function Qn(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(R, I, q) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Br(R, Qn(R));
      if (typeof R == "string")
        return it(R);
      switch (R) {
        case de:
          return it("Suspense");
        case ut:
          return it("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ve:
            return vn(R.render);
          case re:
            return Pn(R.type, I, q);
          case he: {
            var Te = R, ft = Te._payload, gt = Te._init;
            try {
              return Pn(gt(ft), I, q);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, kn = {}, $r = pn.ReactDebugCurrentFrame;
    function Ir(R) {
      if (R) {
        var I = R._owner, q = Pn(R.type, R._source, I ? I.type : null);
        $r.setExtraStackFrame(q);
      } else
        $r.setExtraStackFrame(null);
    }
    function Gn(R, I, q, Te, ft) {
      {
        var gt = Function.call.bind(zn);
        for (var Ue in R)
          if (gt(R, Ue)) {
            var nt = void 0;
            try {
              if (typeof R[Ue] != "function") {
                var Un = Error((Te || "React class") + ": " + q + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              nt = R[Ue](I, Ue, Te, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xt) {
              nt = Xt;
            }
            nt && !(nt instanceof Error) && (Ir(ft), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", q, Ue, typeof nt), Ir(null)), nt instanceof Error && !(nt.message in kn) && (kn[nt.message] = !0, Ir(ft), at("Failed %s type: %s", q, nt.message), Ir(null));
          }
      }
    }
    var mr = Array.isArray;
    function Yr(R) {
      return mr(R);
    }
    function yr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, q = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q;
      }
    }
    function da(R) {
      try {
        return rr(R), !1;
      } catch {
        return !0;
      }
    }
    function rr(R) {
      return "" + R;
    }
    function Wr(R) {
      if (da(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(R)), rr(R);
    }
    var hn = pn.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, pa, ee;
    ee = {};
    function _e(R) {
      if (zn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (zn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, I) {
      if (typeof R.ref == "string" && hn.current && I && hn.current.stateNode !== I) {
        var q = Ne(hn.current.type);
        ee[q] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(hn.current.type), R.ref), ee[q] = !0);
      }
    }
    function jt(R, I) {
      {
        var q = function() {
          fi || (fi = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function Dn(R, I) {
      {
        var q = function() {
          pa || (pa = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var mn = function(R, I, q, Te, ft, gt, Ue) {
      var nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: G,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: q,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return nt._store = {}, Object.defineProperty(nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(nt.props), Object.freeze(nt)), nt;
    };
    function gr(R, I, q, Te, ft) {
      {
        var gt, Ue = {}, nt = null, Un = null;
        q !== void 0 && (Wr(q), nt = "" + q), tt(I) && (Wr(I.key), nt = "" + I.key), _e(I) && (Un = I.ref, zt(I, ft));
        for (gt in I)
          zn.call(I, gt) && !xr.hasOwnProperty(gt) && (Ue[gt] = I[gt]);
        if (R && R.defaultProps) {
          var Xt = R.defaultProps;
          for (gt in Xt)
            Ue[gt] === void 0 && (Ue[gt] = Xt[gt]);
        }
        if (nt || Un) {
          var an = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          nt && jt(Ue, an), Un && Dn(Ue, an);
        }
        return mn(R, nt, Un, ft, Te, hn.current, Ue);
      }
    }
    var It = pn.ReactCurrentOwner, br = pn.ReactDebugCurrentFrame;
    function Ft(R) {
      if (R) {
        var I = R._owner, q = Pn(R.type, R._source, I ? I.type : null);
        br.setExtraStackFrame(q);
      } else
        br.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Ja(R) {
      return typeof R == "object" && R !== null && R.$$typeof === G;
    }
    function ka() {
      {
        if (It.current) {
          var R = Ne(It.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ol(R) {
      return "";
    }
    var Wl = {};
    function Mu(R) {
      {
        var I = ka();
        if (!I) {
          var q = typeof R == "string" ? R : R.displayName || R.name;
          q && (I = `

Check the top-level render call using <` + q + ">.");
        }
        return I;
      }
    }
    function Mi(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var q = Mu(I);
        if (Wl[q])
          return;
        Wl[q] = !0;
        var Te = "";
        R && R._owner && R._owner !== It.current && (Te = " It was passed a child from " + Ne(R._owner.type) + "."), Ft(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Te), Ft(null);
      }
    }
    function sl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var q = 0; q < R.length; q++) {
            var Te = R[q];
            Ja(Te) && Mi(Te, I);
          }
        else if (Ja(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ft = pt(R);
          if (typeof ft == "function" && ft !== R.entries)
            for (var gt = ft.call(R), Ue; !(Ue = gt.next()).done; )
              Ja(Ue.value) && Mi(Ue.value, I);
        }
      }
    }
    function va(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var q;
        if (typeof I == "function")
          q = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ve || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === re))
          q = I.propTypes;
        else
          return;
        if (q) {
          var Te = Ne(I);
          Gn(q, R.props, "prop", Te, R);
        } else if (I.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var ft = Ne(I);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function di(R) {
      {
        for (var I = Object.keys(R.props), q = 0; q < I.length; q++) {
          var Te = I[q];
          if (Te !== "children" && Te !== "key") {
            Ft(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Ft(null);
            break;
          }
        }
        R.ref !== null && (Ft(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var ha = {};
    function ei(R, I, q, Te, ft, gt) {
      {
        var Ue = Qt(R);
        if (!Ue) {
          var nt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = ol();
          Un ? nt += Un : nt += ka();
          var Xt;
          R === null ? Xt = "null" : Yr(R) ? Xt = "array" : R !== void 0 && R.$$typeof === G ? (Xt = "<" + (Ne(R.type) || "Unknown") + " />", nt = " Did you accidentally export a JSX literal instead of a component?") : Xt = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xt, nt);
        }
        var an = gr(R, I, q, ft, gt);
        if (an == null)
          return an;
        if (Ue) {
          var Sr = I.children;
          if (Sr !== void 0)
            if (Te)
              if (Yr(Sr)) {
                for (var hi = 0; hi < Sr.length; hi++)
                  sl(Sr[hi], R);
                Object.freeze && Object.freeze(Sr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sl(Sr, R);
        }
        if (zn.call(I, "key")) {
          var kt = Ne(R), qn = Object.keys(I).filter(function(Da) {
            return Da !== "key";
          }), kr = qn.length > 0 ? "{key: someKey, " + qn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ha[kt + kr]) {
            var rt = qn.length > 0 ? "{" + qn.join(": ..., ") + ": ...}" : "{}";
            at(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, kt, rt, kt), ha[kt + kr] = !0;
          }
        }
        return R === dt ? di(an) : va(an), an;
      }
    }
    function _r(R, I, q) {
      return ei(R, I, q, !0);
    }
    function ma(R, I, q) {
      return ei(R, I, q, !1);
    }
    var pi = ma, vi = _r;
    Gp.Fragment = dt, Gp.jsx = pi, Gp.jsxs = vi;
  }()), Gp;
}
process.env.NODE_ENV === "production" ? d0.exports = rk() : d0.exports = ak();
var $t = d0.exports, v0 = { exports: {} }, Ka = {}, Hm = { exports: {} }, c0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function ik() {
  return tR || (tR = 1, function(J) {
    function G(Z, be) {
      var ae = Z.length;
      Z.push(be);
      e: for (; 0 < ae; ) {
        var _ = ae - 1 >>> 1, P = Z[_];
        if (0 < Nt(P, be)) Z[_] = be, Z[ae] = P, ae = _;
        else break e;
      }
    }
    function A(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function dt(Z) {
      if (Z.length === 0) return null;
      var be = Z[0], ae = Z.pop();
      if (ae !== be) {
        Z[0] = ae;
        e: for (var _ = 0, P = Z.length, ze = P >>> 1; _ < ze; ) {
          var Pe = 2 * (_ + 1) - 1, et = Z[Pe], Je = Pe + 1, yt = Z[Je];
          if (0 > Nt(et, ae)) Je < P && 0 > Nt(yt, et) ? (Z[_] = yt, Z[Je] = ae, _ = Je) : (Z[_] = et, Z[Pe] = ae, _ = Pe);
          else if (Je < P && 0 > Nt(yt, ae)) Z[_] = yt, Z[Je] = ae, _ = Je;
          else break e;
        }
      }
      return be;
    }
    function Nt(Z, be) {
      var ae = Z.sortIndex - be.sortIndex;
      return ae !== 0 ? ae : Z.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var qe = performance;
      J.unstable_now = function() {
        return qe.now();
      };
    } else {
      var S = Date, Wt = S.now();
      J.unstable_now = function() {
        return S.now() - Wt;
      };
    }
    var ve = [], de = [], ut = 1, re = null, he = 3, ue = !1, Be = !1, wt = !1, pt = typeof setTimeout == "function" ? setTimeout : null, pn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var be = A(de); be !== null; ) {
        if (be.callback === null) dt(de);
        else if (be.startTime <= Z) dt(de), be.sortIndex = be.expirationTime, G(ve, be);
        else break;
        be = A(de);
      }
    }
    function vt(Z) {
      if (wt = !1, Qe(Z), !Be) if (A(ve) !== null) Be = !0, xt(De);
      else {
        var be = A(de);
        be !== null && me(vt, be.startTime - Z);
      }
    }
    function De(Z, be) {
      Be = !1, wt && (wt = !1, pn(rn), rn = -1), ue = !0;
      var ae = he;
      try {
        for (Qe(be), re = A(ve); re !== null && (!(re.expirationTime > be) || Z && !_t()); ) {
          var _ = re.callback;
          if (typeof _ == "function") {
            re.callback = null, he = re.priorityLevel;
            var P = _(re.expirationTime <= be);
            be = J.unstable_now(), typeof P == "function" ? re.callback = P : re === A(ve) && dt(ve), Qe(be);
          } else dt(ve);
          re = A(ve);
        }
        if (re !== null) var ze = !0;
        else {
          var Pe = A(de);
          Pe !== null && me(vt, Pe.startTime - be), ze = !1;
        }
        return ze;
      } finally {
        re = null, he = ae, ue = !1;
      }
    }
    var ot = !1, He = null, rn = -1, _n = 5, Qt = -1;
    function _t() {
      return !(J.unstable_now() - Qt < _n);
    }
    function Cn() {
      if (He !== null) {
        var Z = J.unstable_now();
        Qt = Z;
        var be = !0;
        try {
          be = He(!0, Z);
        } finally {
          be ? Ne() : (ot = !1, He = null);
        }
      } else ot = !1;
    }
    var Ne;
    if (typeof at == "function") Ne = function() {
      at(Cn);
    };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), At = Ke.port2;
      Ke.port1.onmessage = Cn, Ne = function() {
        At.postMessage(null);
      };
    } else Ne = function() {
      pt(Cn, 0);
    };
    function xt(Z) {
      He = Z, ot || (ot = !0, Ne());
    }
    function me(Z, be) {
      rn = pt(function() {
        Z(J.unstable_now());
      }, be);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, J.unstable_continueExecution = function() {
      Be || ue || (Be = !0, xt(De));
    }, J.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _n = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, J.unstable_getFirstCallbackNode = function() {
      return A(ve);
    }, J.unstable_next = function(Z) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = he;
      }
      var ae = he;
      he = be;
      try {
        return Z();
      } finally {
        he = ae;
      }
    }, J.unstable_pauseExecution = function() {
    }, J.unstable_requestPaint = function() {
    }, J.unstable_runWithPriority = function(Z, be) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var ae = he;
      he = Z;
      try {
        return be();
      } finally {
        he = ae;
      }
    }, J.unstable_scheduleCallback = function(Z, be, ae) {
      var _ = J.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? _ + ae : _) : ae = _, Z) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = ae + P, Z = { id: ut++, callback: be, priorityLevel: Z, startTime: ae, expirationTime: P, sortIndex: -1 }, ae > _ ? (Z.sortIndex = ae, G(de, Z), A(ve) === null && Z === A(de) && (wt ? (pn(rn), rn = -1) : wt = !0, me(vt, ae - _))) : (Z.sortIndex = P, G(ve, Z), Be || ue || (Be = !0, xt(De))), Z;
    }, J.unstable_shouldYield = _t, J.unstable_wrapCallback = function(Z) {
      var be = he;
      return function() {
        var ae = he;
        he = be;
        try {
          return Z.apply(this, arguments);
        } finally {
          he = ae;
        }
      };
    };
  }(c0)), c0;
}
var f0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function lk() {
  return nR || (nR = 1, function(J) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var G = !1, A = !1, dt = 5;
      function Nt(ee, _e) {
        var tt = ee.length;
        ee.push(_e), Wt(ee, _e, tt);
      }
      function qe(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var _e = ee[0], tt = ee.pop();
        return tt !== _e && (ee[0] = tt, ve(ee, tt, 0)), _e;
      }
      function Wt(ee, _e, tt) {
        for (var zt = tt; zt > 0; ) {
          var jt = zt - 1 >>> 1, Dn = ee[jt];
          if (de(Dn, _e) > 0)
            ee[jt] = _e, ee[zt] = Dn, zt = jt;
          else
            return;
        }
      }
      function ve(ee, _e, tt) {
        for (var zt = tt, jt = ee.length, Dn = jt >>> 1; zt < Dn; ) {
          var mn = (zt + 1) * 2 - 1, gr = ee[mn], It = mn + 1, br = ee[It];
          if (de(gr, _e) < 0)
            It < jt && de(br, gr) < 0 ? (ee[zt] = br, ee[It] = _e, zt = It) : (ee[zt] = gr, ee[mn] = _e, zt = mn);
          else if (It < jt && de(br, _e) < 0)
            ee[zt] = br, ee[It] = _e, zt = It;
          else
            return;
        }
      }
      function de(ee, _e) {
        var tt = ee.sortIndex - _e.sortIndex;
        return tt !== 0 ? tt : ee.id - _e.id;
      }
      var ut = 1, re = 2, he = 3, ue = 4, Be = 5;
      function wt(ee, _e) {
      }
      var pt = typeof performance == "object" && typeof performance.now == "function";
      if (pt) {
        var pn = performance;
        J.unstable_now = function() {
          return pn.now();
        };
      } else {
        var at = Date, Qe = at.now();
        J.unstable_now = function() {
          return at.now() - Qe;
        };
      }
      var vt = 1073741823, De = -1, ot = 250, He = 5e3, rn = 1e4, _n = vt, Qt = [], _t = [], Cn = 1, Ne = null, Ke = he, At = !1, xt = !1, me = !1, Z = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(ee) {
        for (var _e = qe(_t); _e !== null; ) {
          if (_e.callback === null)
            S(_t);
          else if (_e.startTime <= ee)
            S(_t), _e.sortIndex = _e.expirationTime, Nt(Qt, _e);
          else
            return;
          _e = qe(_t);
        }
      }
      function P(ee) {
        if (me = !1, _(ee), !xt)
          if (qe(Qt) !== null)
            xt = !0, Wr(ze);
          else {
            var _e = qe(_t);
            _e !== null && hn(P, _e.startTime - ee);
          }
      }
      function ze(ee, _e) {
        xt = !1, me && (me = !1, xr()), At = !0;
        var tt = Ke;
        try {
          var zt;
          if (!A) return Pe(ee, _e);
        } finally {
          Ne = null, Ke = tt, At = !1;
        }
      }
      function Pe(ee, _e) {
        var tt = _e;
        for (_(tt), Ne = qe(Qt); Ne !== null && !G && !(Ne.expirationTime > tt && (!ee || Ir())); ) {
          var zt = Ne.callback;
          if (typeof zt == "function") {
            Ne.callback = null, Ke = Ne.priorityLevel;
            var jt = Ne.expirationTime <= tt, Dn = zt(jt);
            tt = J.unstable_now(), typeof Dn == "function" ? Ne.callback = Dn : Ne === qe(Qt) && S(Qt), _(tt);
          } else
            S(Qt);
          Ne = qe(Qt);
        }
        if (Ne !== null)
          return !0;
        var mn = qe(_t);
        return mn !== null && hn(P, mn.startTime - tt), !1;
      }
      function et(ee, _e) {
        switch (ee) {
          case ut:
          case re:
          case he:
          case ue:
          case Be:
            break;
          default:
            ee = he;
        }
        var tt = Ke;
        Ke = ee;
        try {
          return _e();
        } finally {
          Ke = tt;
        }
      }
      function Je(ee) {
        var _e;
        switch (Ke) {
          case ut:
          case re:
          case he:
            _e = he;
            break;
          default:
            _e = Ke;
            break;
        }
        var tt = Ke;
        Ke = _e;
        try {
          return ee();
        } finally {
          Ke = tt;
        }
      }
      function yt(ee) {
        var _e = Ke;
        return function() {
          var tt = Ke;
          Ke = _e;
          try {
            return ee.apply(this, arguments);
          } finally {
            Ke = tt;
          }
        };
      }
      function it(ee, _e, tt) {
        var zt = J.unstable_now(), jt;
        if (typeof tt == "object" && tt !== null) {
          var Dn = tt.delay;
          typeof Dn == "number" && Dn > 0 ? jt = zt + Dn : jt = zt;
        } else
          jt = zt;
        var mn;
        switch (ee) {
          case ut:
            mn = De;
            break;
          case re:
            mn = ot;
            break;
          case Be:
            mn = _n;
            break;
          case ue:
            mn = rn;
            break;
          case he:
          default:
            mn = He;
            break;
        }
        var gr = jt + mn, It = {
          id: Cn++,
          callback: _e,
          priorityLevel: ee,
          startTime: jt,
          expirationTime: gr,
          sortIndex: -1
        };
        return jt > zt ? (It.sortIndex = jt, Nt(_t, It), qe(Qt) === null && It === qe(_t) && (me ? xr() : me = !0, hn(P, jt - zt))) : (It.sortIndex = gr, Nt(Qt, It), !xt && !At && (xt = !0, Wr(ze))), It;
      }
      function lt() {
      }
      function en() {
        !xt && !At && (xt = !0, Wr(ze));
      }
      function hr() {
        return qe(Qt);
      }
      function Br(ee) {
        ee.callback = null;
      }
      function vn() {
        return Ke;
      }
      var Qn = !1, Pn = null, zn = -1, kn = dt, $r = -1;
      function Ir() {
        var ee = J.unstable_now() - $r;
        return !(ee < kn);
      }
      function Gn() {
      }
      function mr(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? kn = Math.floor(1e3 / ee) : kn = dt;
      }
      var Yr = function() {
        if (Pn !== null) {
          var ee = J.unstable_now();
          $r = ee;
          var _e = !0, tt = !0;
          try {
            tt = Pn(_e, ee);
          } finally {
            tt ? yr() : (Qn = !1, Pn = null);
          }
        } else
          Qn = !1;
      }, yr;
      if (typeof ae == "function")
        yr = function() {
          ae(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var da = new MessageChannel(), rr = da.port2;
        da.port1.onmessage = Yr, yr = function() {
          rr.postMessage(null);
        };
      } else
        yr = function() {
          Z(Yr, 0);
        };
      function Wr(ee) {
        Pn = ee, Qn || (Qn = !0, yr());
      }
      function hn(ee, _e) {
        zn = Z(function() {
          ee(J.unstable_now());
        }, _e);
      }
      function xr() {
        be(zn), zn = -1;
      }
      var fi = Gn, pa = null;
      J.unstable_IdlePriority = Be, J.unstable_ImmediatePriority = ut, J.unstable_LowPriority = ue, J.unstable_NormalPriority = he, J.unstable_Profiling = pa, J.unstable_UserBlockingPriority = re, J.unstable_cancelCallback = Br, J.unstable_continueExecution = en, J.unstable_forceFrameRate = mr, J.unstable_getCurrentPriorityLevel = vn, J.unstable_getFirstCallbackNode = hr, J.unstable_next = Je, J.unstable_pauseExecution = lt, J.unstable_requestPaint = fi, J.unstable_runWithPriority = et, J.unstable_scheduleCallback = it, J.unstable_shouldYield = Ir, J.unstable_wrapCallback = yt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var rR;
function fR() {
  return rR || (rR = 1, process.env.NODE_ENV === "production" ? Hm.exports = ik() : Hm.exports = lk()), Hm.exports;
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
var aR;
function uk() {
  if (aR) return Ka;
  aR = 1;
  var J = Ks, G = fR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var dt = /* @__PURE__ */ new Set(), Nt = {};
  function qe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Nt[n] = r, n = 0; n < r.length; n++) dt.add(r[n]);
  }
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ve = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ut = {}, re = {};
  function he(n) {
    return ve.call(re, n) ? !0 : ve.call(ut, n) ? !1 : de.test(n) ? re[n] = !0 : (ut[n] = !0, !1);
  }
  function ue(n, r, l, o) {
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
    if (r === null || typeof r > "u" || ue(n, r, l, o)) return !0;
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
  function wt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pt[n] = new wt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pt[r] = new wt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pt[n] = new wt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pt[n] = new wt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pt[n] = new wt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pt[n] = new wt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pt[n] = new wt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pt[n] = new wt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pt[n] = new wt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var pn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      pn,
      at
    );
    pt[r] = new wt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(pn, at);
    pt[r] = new wt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(pn, at);
    pt[r] = new wt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pt[n] = new wt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pt.xlinkHref = new wt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pt[n] = new wt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Be(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var vt = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), ot = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), _n = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), _t = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, _;
  function P(n) {
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
  function Pe(n, r) {
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
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function et(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case ot:
        return "Portal";
      case _n:
        return "Profiler";
      case rn:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case _t:
        return (n.displayName || "Context") + ".Consumer";
      case Qt:
        return (n._context.displayName || "Context") + ".Provider";
      case Cn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
      case xt:
        r = n._payload, n = n._init;
        try {
          return Je(n(r));
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
        return Je(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
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
  function it(n) {
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
  function lt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function en(n) {
    var r = lt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = en(n));
  }
  function Br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = lt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function vn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function kn(n, r) {
    zn(n, r);
    var l = it(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ir(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ir(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function $r(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ir(n, r, l) {
    (r !== "number" || vn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gn = Array.isArray;
  function mr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Gn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function da(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Wr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function hn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var xr, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = xr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
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
  }, _e = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    _e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function tt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = tt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var jt = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function mn(n, r) {
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
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var br = null, Ft = null, Ht = null;
  function Ja(n) {
    if (n = os(n)) {
      if (typeof br != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Oe(r), br(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Ft ? Ht ? Ht.push(n) : Ht = [n] : Ft = n;
  }
  function ol() {
    if (Ft) {
      var n = Ft, r = Ht;
      if (Ht = Ft = null, Ja(n), r) for (n = 0; n < r.length; n++) Ja(r[n]);
    }
  }
  function Wl(n, r) {
    return n(r);
  }
  function Mu() {
  }
  var Mi = !1;
  function sl(n, r, l) {
    if (Mi) return n(r, l);
    Mi = !0;
    try {
      return Wl(n, r, l);
    } finally {
      Mi = !1, (Ft !== null || Ht !== null) && (Mu(), ol());
    }
  }
  function va(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Oe(l);
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
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var di = !1;
  if (Wt) try {
    var ha = {};
    Object.defineProperty(ha, "passive", { get: function() {
      di = !0;
    } }), window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
  } catch {
    di = !1;
  }
  function ei(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var _r = !1, ma = null, pi = !1, vi = null, R = { onError: function(n) {
    _r = !0, ma = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    _r = !1, ma = null, ei.apply(R, arguments);
  }
  function q(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), _r) {
      if (_r) {
        var z = ma;
        _r = !1, ma = null;
      } else throw Error(A(198));
      pi || (pi = !0, vi = z);
    }
  }
  function Te(n) {
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
  function ft(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function gt(n) {
    if (Te(n) !== n) throw Error(A(188));
  }
  function Ue(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null) throw Error(A(188));
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
          if (d === l) return gt(c), n;
          if (d === o) return gt(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
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
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function nt(n) {
    return n = Ue(n), n !== null ? Un(n) : null;
  }
  function Un(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Un(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Xt = G.unstable_scheduleCallback, an = G.unstable_cancelCallback, Sr = G.unstable_shouldYield, hi = G.unstable_requestPaint, kt = G.unstable_now, qn = G.unstable_getCurrentPriorityLevel, kr = G.unstable_ImmediatePriority, rt = G.unstable_UserBlockingPriority, Da = G.unstable_NormalPriority, cl = G.unstable_LowPriority, Nu = G.unstable_IdlePriority, fl = null, Qr = null;
  function Yo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(fl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Zs, Wo = Math.log, Qo = Math.LN2;
  function Zs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / Qo | 0) | 0;
  }
  var zu = 64, dl = 4194304;
  function ti(n) {
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
  function Or(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ti(E) : (d &= m, d !== 0 && (o = ti(d)));
    } else m = l & ~c, m !== 0 ? o = ti(m) : d !== 0 && (o = ti(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function pl(n, r) {
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
  function vl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = pl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function hl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Uu() {
    var n = zu;
    return zu <<= 1, !(zu & 4194240) && (zu = 64), n;
  }
  function Au(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Ni(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function If(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function mi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function ju(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ql, Fu, St, Hu, Pu, Ye = !1, Gl = [], yn = null, Gr = null, Lr = null, ml = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), Pt = [], Js = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Lr = null;
        break;
      case "pointerover":
      case "pointerout":
        ml.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(r.pointerId);
    }
  }
  function Xn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = os(r), r !== null && Fu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function yi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return yn = Xn(yn, n, r, l, o, c), !0;
      case "dragenter":
        return Gr = Xn(Gr, n, r, l, o, c), !0;
      case "mouseover":
        return Lr = Xn(Lr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ml.set(d, Xn(ml.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rn.set(d, Xn(Rn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ec(n) {
    var r = Na(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ft(l), r !== null) {
            n.blockedOn = r, Pu(n.priority, function() {
              St(l);
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
  function zi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Bu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else return r = os(l), r !== null && Fu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yl(n, r, l) {
    zi(n) && l.delete(r);
  }
  function tc() {
    Ye = !1, yn !== null && zi(yn) && (yn = null), Gr !== null && zi(Gr) && (Gr = null), Lr !== null && zi(Lr) && (Lr = null), ml.forEach(yl), Rn.forEach(yl);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ye || (Ye = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, tc)));
  }
  function gl(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < Gl.length) {
      Oa(Gl[0], n);
      for (var l = 1; l < Gl.length; l++) {
        var o = Gl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (yn !== null && Oa(yn, n), Gr !== null && Oa(Gr, n), Lr !== null && Oa(Lr, n), ml.forEach(r), Rn.forEach(r), l = 0; l < Pt.length; l++) o = Pt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Pt.length && (l = Pt[0], l.blockedOn === null); ) ec(l), l.blockedOn === null && Pt.shift();
  }
  var Ui = vt.ReactCurrentBatchConfig, La = !0;
  function Vu(n, r, l, o) {
    var c = Dt, d = Ui.transition;
    Ui.transition = null;
    try {
      Dt = 1, El(n, r, l, o);
    } finally {
      Dt = c, Ui.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    var c = Dt, d = Ui.transition;
    Ui.transition = null;
    try {
      Dt = 4, El(n, r, l, o);
    } finally {
      Dt = c, Ui.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (La) {
      var c = Bu(n, r, l, o);
      if (c === null) cc(n, r, o, ql, l), qr(n, o);
      else if (yi(c, n, r, l, o)) o.stopPropagation();
      else if (qr(n, o), r & 4 && -1 < Js.indexOf(n)) {
        for (; c !== null; ) {
          var d = os(c);
          if (d !== null && Ql(d), d = Bu(n, r, l, o), d === null && cc(n, r, o, ql, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else cc(n, r, o, null, l);
    }
  }
  var ql = null;
  function Bu(n, r, l, o) {
    if (ql = null, n = It(o), n = Na(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ft(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ql = n, null;
  }
  function Go(n) {
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
        switch (qn()) {
          case kr:
            return 1;
          case rt:
            return 4;
          case Da:
          case cl:
            return 16;
          case Nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function X() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? X : Ae, this.isPropagationStopped = Ae, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = X);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = X);
    }, persist: function() {
    }, isPersistent: X }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = ie(Me), bt = ae({}, Me, { view: 0, detail: 0 }), Kt = ie(bt), Yt, Zt, tn, Et = ae({}, bt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tn && (tn && n.type === "mousemove" ? (Yt = n.screenX - tn.screenX, Zt = n.screenY - tn.screenY) : Zt = Yt = 0, tn = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Zt;
  } }), Ai = ie(Et), $u = ae({}, Et, { dataTransfer: 0 }), qo = ie($u), Yf = ae({}, bt, { relatedTarget: 0 }), ri = ie(Yf), Xo = ae({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ko = ie(Xo), Wf = ae({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Vm = ie(Wf), Bm = ae({}, Me, { data: 0 }), Qf = ie(Bm), Gf = {
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
  }, Xp = {
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
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function qf() {
    return Zp;
  }
  var ji = ae({}, bt, { key: function(n) {
    if (n.key) {
      var r = Gf[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = ie(ji), Xf = ae({}, Et, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nc = ie(Xf), Kf = ae({}, bt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qf }), Im = ie(Kf), rc = ae({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ie(rc), Xr = ae({}, Et, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = ie(Xr), An = [9, 13, 27, 32], ai = Wt && "CompositionEvent" in window, Xl = null;
  Wt && "documentMode" in document && (Xl = document.documentMode);
  var ac = Wt && "TextEvent" in window && !Xl, ev = Wt && (!ai || Xl && 8 < Xl && 11 >= Xl), Iu = " ", tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return An.indexOf(r.keyCode) !== -1;
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
  function ic(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Yu = !1;
  function Ym(n, r) {
    switch (n) {
      case "compositionend":
        return ic(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Iu);
      case "textInput":
        return n = r.data, n === Iu && tv ? null : n;
      default:
        return null;
    }
  }
  function Wm(n, r) {
    if (Yu) return n === "compositionend" || !ai && nv(n, r) ? (n = N(), C = h = ni = null, Yu = !1, n) : null;
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
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    ka(o), r = is(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Zo = null, Wu = null;
  function Qu(n) {
    sc(n, 0);
  }
  function Gu(n) {
    var r = Xu(n);
    if (Br(r)) return n;
  }
  function lv(n, r) {
    if (n === "change") return r;
  }
  var Zf = !1;
  if (Wt) {
    var Jf;
    if (Wt) {
      var ed = "oninput" in document;
      if (!ed) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), ed = typeof uv.oninput == "function";
      }
      Jf = ed;
    } else Jf = !1;
    Zf = Jf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Zo && (Zo.detachEvent("onpropertychange", sv), Wu = Zo = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && Gu(Wu)) {
      var r = [];
      iv(r, Wu, n, It(n)), sl(Qu, r);
    }
  }
  function Qm(n, r, l) {
    n === "focusin" ? (ov(), Zo = r, Wu = l, Zo.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function Gm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Gu(Wu);
  }
  function qm(n, r) {
    if (n === "click") return Gu(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change") return Gu(r);
  }
  function Xm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ma = typeof Object.is == "function" ? Object.is : Xm;
  function Jo(n, r) {
    if (Ma(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ve.call(r, c) || !Ma(n[c], r[c])) return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
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
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function lc() {
    for (var n = window, r = vn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = vn(n.document);
    }
    return r;
  }
  function Hi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uc(n) {
    var r = lc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Hi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
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
  var vv = Wt && "documentMode" in document && 11 >= document.documentMode, ii = null, td = null, es = null, nd = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nd || ii == null || ii !== vn(o) || (o = ii, "selectionStart" in o && Hi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = is(td, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ii)));
  }
  function oc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Kl = { animationend: oc("Animation", "AnimationEnd"), animationiteration: oc("Animation", "AnimationIteration"), animationstart: oc("Animation", "AnimationStart"), transitionend: oc("Transition", "TransitionEnd") }, rd = {}, ad = {};
  Wt && (ad = document.createElement("div").style, "AnimationEvent" in window || (delete Kl.animationend.animation, delete Kl.animationiteration.animation, delete Kl.animationstart.animation), "TransitionEvent" in window || delete Kl.transitionend.transition);
  function Kn(n) {
    if (rd[n]) return rd[n];
    if (!Kl[n]) return n;
    var r = Kl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in ad) return rd[n] = r[l];
    return n;
  }
  var id = Kn("animationend"), mv = Kn("animationiteration"), yv = Kn("animationstart"), gv = Kn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pi(n, r) {
    Sv.set(n, r), qe(r, [n]);
  }
  for (var ts = 0; ts < Ev.length; ts++) {
    var Zl = Ev[ts], Km = Zl.toLowerCase(), ns = Zl[0].toUpperCase() + Zl.slice(1);
    Pi(Km, "on" + ns);
  }
  Pi(id, "onAnimationEnd"), Pi(mv, "onAnimationIteration"), Pi(yv, "onAnimationStart"), Pi("dblclick", "onDoubleClick"), Pi("focusin", "onFocus"), Pi("focusout", "onBlur"), Pi(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, q(o, r, void 0, n), n.currentTarget = null;
  }
  function sc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Cv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Cv(c, E, z), d = T;
        }
      }
    }
    if (pi) throw n = vi, pi = !1, vi = null, n;
  }
  function Jt(n, r) {
    var l = r[dd];
    l === void 0 && (l = r[dd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function Cl(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function qu(n) {
    if (!n[Vi]) {
      n[Vi] = !0, dt.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || Cl(l, !1, n), Cl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Vi] || (r[Vi] = !0, Cl("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Vu;
        break;
      case 4:
        c = Sl;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !di || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function cc(n, r, l, o, c) {
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
          if (m = Na(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    sl(function() {
      var z = d, Y = It(l), W = [];
      e: {
        var $ = Sv.get(n);
        if ($ !== void 0) {
          var se = st, ye = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = $m;
              break;
            case "focusin":
              ye = "focus", se = ri;
              break;
            case "focusout":
              ye = "blur", se = ri;
              break;
            case "beforeblur":
            case "afterblur":
              se = ri;
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
              se = Ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Im;
              break;
            case id:
            case mv:
            case yv:
              se = Ko;
              break;
            case gv:
              se = Jp;
              break;
            case "scroll":
              se = Kt;
              break;
            case "wheel":
              se = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Vm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = nc;
          }
          var Ee = (r & 4) !== 0, Mn = !Ee && n === "scroll", k = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, k !== null && (K = va(x, k), K != null && Ee.push(as(x, K, L)))), Mn) break;
            x = x.return;
          }
          0 < Ee.length && ($ = new se($, ye, null, l, Y), W.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", $ && l !== gr && (ye = l.relatedTarget || l.fromElement) && (Na(ye) || ye[Bi])) break e;
          if ((se || $) && ($ = Y.window === Y ? Y : ($ = Y.ownerDocument) ? $.defaultView || $.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = z, ye = ye ? Na(ye) : null, ye !== null && (Mn = Te(ye), ye !== Mn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = z), se !== ye)) {
            if (Ee = Ai, K = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = nc, K = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Mn = se == null ? $ : Xu(se), L = ye == null ? $ : Xu(ye), $ = new Ee(K, x + "leave", se, l, Y), $.target = Mn, $.relatedTarget = L, K = null, Na(Y) === z && (Ee = new Ee(k, x + "enter", ye, l, Y), Ee.target = L, Ee.relatedTarget = Mn, K = Ee), Mn = K, se && ye) t: {
              for (Ee = se, k = ye, x = 0, L = Ee; L; L = Jl(L)) x++;
              for (L = 0, K = k; K; K = Jl(K)) L++;
              for (; 0 < x - L; ) Ee = Jl(Ee), x--;
              for (; 0 < L - x; ) k = Jl(k), L--;
              for (; x--; ) {
                if (Ee === k || k !== null && Ee === k.alternate) break t;
                Ee = Jl(Ee), k = Jl(k);
              }
              Ee = null;
            }
            else Ee = null;
            se !== null && ld(W, $, se, Ee, !1), ye !== null && Mn !== null && ld(W, Mn, ye, Ee, !0);
          }
        }
        e: {
          if ($ = z ? Xu(z) : window, se = $.nodeName && $.nodeName.toLowerCase(), se === "select" || se === "input" && $.type === "file") var Re = lv;
          else if (av($)) if (Zf) Re = cv;
          else {
            Re = Gm;
            var je = Qm;
          }
          else (se = $.nodeName) && se.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Re = qm);
          if (Re && (Re = Re(n, z))) {
            iv(W, Re, l, Y);
            break e;
          }
          je && je(n, $, z), n === "focusout" && (je = $._wrapperState) && je.controlled && $.type === "number" && Ir($, "number", $.value);
        }
        switch (je = z ? Xu(z) : window, n) {
          case "focusin":
            (av(je) || je.contentEditable === "true") && (ii = je, td = z, es = null);
            break;
          case "focusout":
            es = td = ii = null;
            break;
          case "mousedown":
            nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nd = !1, hv(W, l, Y);
            break;
          case "selectionchange":
            if (vv) break;
          case "keydown":
          case "keyup":
            hv(W, l, Y);
        }
        var ge;
        if (ai) e: {
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
        else Yu ? nv(n, l) && (Fe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Fe = "onCompositionStart");
        Fe && (ev && l.locale !== "ko" && (Yu || Fe !== "onCompositionStart" ? Fe === "onCompositionEnd" && Yu && (ge = N()) : (ni = Y, h = "value" in ni ? ni.value : ni.textContent, Yu = !0)), je = is(z, Fe), 0 < je.length && (Fe = new Qf(Fe, n, null, l, Y), W.push({ event: Fe, listeners: je }), ge ? Fe.data = ge : (ge = ic(l), ge !== null && (Fe.data = ge)))), (ge = ac ? Ym(n, l) : Wm(n, l)) && (z = is(z, "onBeforeInput"), 0 < z.length && (Y = new Qf("onBeforeInput", "beforeinput", null, l, Y), W.push({ event: Y, listeners: z }), Y.data = ge));
      }
      sc(W, r);
    });
  }
  function as(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = va(n, l), d != null && o.unshift(as(n, d, c)), d = va(n, r), d != null && o.push(as(n, d, c))), n = n.return;
    }
    return o;
  }
  function Jl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ld(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = va(l, d), T != null && m.unshift(as(l, T, E))) : c || (T = va(l, d), T != null && m.push(as(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ud = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function od(n) {
    return (typeof n == "string" ? n : "" + n).replace(ud, `
`).replace(Jm, "");
  }
  function fc(n, r, l) {
    if (r = od(r), od(n) !== r && l) throw Error(A(425));
  }
  function dc() {
  }
  var sd = null, eu = null;
  function ls(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tu = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = typeof Promise == "function" ? Promise : void 0, fd = typeof queueMicrotask == "function" ? queueMicrotask : typeof cd < "u" ? function(n) {
    return cd.resolve(null).then(n).catch(ey);
  } : tu;
  function ey(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Rl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), gl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    gl(r);
  }
  function li(n) {
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
  function us(n) {
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
  var Tl = Math.random().toString(36).slice(2), gi = "__reactFiber$" + Tl, nu = "__reactProps$" + Tl, Bi = "__reactContainer$" + Tl, dd = "__reactEvents$" + Tl, ty = "__reactListeners$" + Tl, pd = "__reactHandles$" + Tl;
  function Na(n) {
    var r = n[gi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Bi] || l[gi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = us(n); n !== null; ) {
          if (l = n[gi]) return l;
          n = us(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function os(n) {
    return n = n[gi] || n[Bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Xu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Oe(n) {
    return n[nu] || null;
  }
  var wl = [], ln = -1;
  function Ze(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > ln || (n.current = wl[ln], wl[ln] = null, ln--);
  }
  function Vt(n, r) {
    ln++, wl[ln] = n.current, n.current = r;
  }
  var Si = {}, $e = Ze(Si), Tn = Ze(!1), Kr = Si;
  function za(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Si;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ua() {
    Ut(Tn), Ut($e);
  }
  function xl(n, r, l) {
    if ($e.current !== Si) throw Error(A(168));
    Vt($e, r), Vt(Tn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, yt(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function pc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Si, Kr = $e.current, Vt($e, n), Vt(Tn, Tn.current), !0;
  }
  function wv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ss(n, r, Kr), o.__reactInternalMemoizedMergedChildContext = n, Ut(Tn), Ut($e), Vt($e, n)) : Ut(Tn), Vt(Tn, l);
  }
  var ya = null, Zn = !1, cs = !1;
  function vd(n) {
    ya === null ? ya = [n] : ya.push(n);
  }
  function hd(n) {
    Zn = !0, vd(n);
  }
  function Zr() {
    if (!cs && ya !== null) {
      cs = !0;
      var n = 0, r = Dt;
      try {
        var l = ya;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ya = null, Zn = !1;
      } catch (c) {
        throw ya !== null && (ya = ya.slice(n + 1)), Xt(kr, Zr), c;
      } finally {
        Dt = r, cs = !1;
      }
    }
    return null;
  }
  var bl = [], Jr = 0, ru = null, Ku = 0, ea = [], Er = 0, Aa = null, ar = 1, $i = "";
  function ga(n, r) {
    bl[Jr++] = Ku, bl[Jr++] = ru, ru = n, Ku = r;
  }
  function md(n, r, l) {
    ea[Er++] = ar, ea[Er++] = $i, ea[Er++] = Aa, Aa = n;
    var o = ar;
    n = $i;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, ar = 1 << 32 - Dr(r) + c | l << c | o, $i = d + n;
    } else ar = 1 << d | l << c | o, $i = n;
  }
  function vc(n) {
    n.return !== null && (ga(n, 1), md(n, 1, 0));
  }
  function yd(n) {
    for (; n === ru; ) ru = bl[--Jr], bl[Jr] = null, Ku = bl[--Jr], bl[Jr] = null;
    for (; n === Aa; ) Aa = ea[--Er], ea[Er] = null, $i = ea[--Er], ea[Er] = null, ar = ea[--Er], ea[Er] = null;
  }
  var Sa = null, ta = null, un = !1, ja = null;
  function gd(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Aa !== null ? { id: ar, overflow: $i } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Sa = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function mc(n) {
    if (un) {
      var r = ta;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (hc(n)) throw Error(A(418));
          r = li(l.nextSibling);
          var o = Sa;
          r && xv(n, r) ? gd(o, l) : (n.flags = n.flags & -4097 | 2, un = !1, Sa = n);
        }
      } else {
        if (hc(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, un = !1, Sa = n;
      }
    }
  }
  function bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Sa = n;
  }
  function yc(n) {
    if (n !== Sa) return !1;
    if (!un) return bv(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ls(n.type, n.memoizedProps)), r && (r = ta)) {
      if (hc(n)) throw _v(), Error(A(418));
      for (; r; ) gd(n, r), r = li(r.nextSibling);
    }
    if (bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ta = li(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ta = null;
      }
    } else ta = Sa ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = ta; n; ) n = li(n.nextSibling);
  }
  function gn() {
    ta = Sa = null, un = !1;
  }
  function Sd(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var gc = vt.ReactCurrentBatchConfig;
  function au(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Ei(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function kv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sc(n) {
    function r(k, x) {
      if (n) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function l(k, x) {
      if (!n) return null;
      for (; x !== null; ) r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = zl(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, L) {
      return k.index = L, n ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, x, L, K) {
      return x === null || x.tag !== 6 ? (x = uf(L, k.mode, K), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function T(k, x, L, K) {
      var Re = L.type;
      return Re === He ? Y(k, x, L.props.children, K, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === xt && kv(Re) === x.type) ? (K = c(x, L.props), K.ref = au(k, x, L), K.return = k, K) : (K = af(L.type, L.key, L.props, null, k.mode, K), K.ref = au(k, x, L), K.return = k, K);
    }
    function z(k, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = ks(L, k.mode, K), x.return = k, x) : (x = c(x, L.children || []), x.return = k, x);
    }
    function Y(k, x, L, K, Re) {
      return x === null || x.tag !== 7 ? (x = Su(L, k.mode, K, Re), x.return = k, x) : (x = c(x, L), x.return = k, x);
    }
    function W(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = uf("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case De:
            return L = af(x.type, x.key, x.props, null, k.mode, L), L.ref = au(k, null, x), L.return = k, L;
          case ot:
            return x = ks(x, k.mode, L), x.return = k, x;
          case xt:
            var K = x._init;
            return W(k, K(x._payload), L);
        }
        if (Gn(x) || be(x)) return x = Su(x, k.mode, L, null), x.return = k, x;
        Ei(k, x);
      }
      return null;
    }
    function $(k, x, L, K) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(k, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            return L.key === Re ? T(k, x, L, K) : null;
          case ot:
            return L.key === Re ? z(k, x, L, K) : null;
          case xt:
            return Re = L._init, $(
              k,
              x,
              Re(L._payload),
              K
            );
        }
        if (Gn(L) || be(L)) return Re !== null ? null : Y(k, x, L, K, null);
        Ei(k, L);
      }
      return null;
    }
    function se(k, x, L, K, Re) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return k = k.get(L) || null, E(x, k, "" + K, Re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case De:
            return k = k.get(K.key === null ? L : K.key) || null, T(x, k, K, Re);
          case ot:
            return k = k.get(K.key === null ? L : K.key) || null, z(x, k, K, Re);
          case xt:
            var je = K._init;
            return se(k, x, L, je(K._payload), Re);
        }
        if (Gn(K) || be(K)) return k = k.get(L) || null, Y(x, k, K, Re, null);
        Ei(x, K);
      }
      return null;
    }
    function ye(k, x, L, K) {
      for (var Re = null, je = null, ge = x, Fe = x = 0, Yn = null; ge !== null && Fe < L.length; Fe++) {
        ge.index > Fe ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var Ot = $(k, ge, L[Fe], K);
        if (Ot === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && Ot.alternate === null && r(k, ge), x = d(Ot, x, Fe), je === null ? Re = Ot : je.sibling = Ot, je = Ot, ge = Yn;
      }
      if (Fe === L.length) return l(k, ge), un && ga(k, Fe), Re;
      if (ge === null) {
        for (; Fe < L.length; Fe++) ge = W(k, L[Fe], K), ge !== null && (x = d(ge, x, Fe), je === null ? Re = ge : je.sibling = ge, je = ge);
        return un && ga(k, Fe), Re;
      }
      for (ge = o(k, ge); Fe < L.length; Fe++) Yn = se(ge, k, Fe, L[Fe], K), Yn !== null && (n && Yn.alternate !== null && ge.delete(Yn.key === null ? Fe : Yn.key), x = d(Yn, x, Fe), je === null ? Re = Yn : je.sibling = Yn, je = Yn);
      return n && ge.forEach(function(Xi) {
        return r(k, Xi);
      }), un && ga(k, Fe), Re;
    }
    function Ee(k, x, L, K) {
      var Re = be(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var je = Re = null, ge = x, Fe = x = 0, Yn = null, Ot = L.next(); ge !== null && !Ot.done; Fe++, Ot = L.next()) {
        ge.index > Fe ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var Xi = $(k, ge, Ot.value, K);
        if (Xi === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && Xi.alternate === null && r(k, ge), x = d(Xi, x, Fe), je === null ? Re = Xi : je.sibling = Xi, je = Xi, ge = Yn;
      }
      if (Ot.done) return l(
        k,
        ge
      ), un && ga(k, Fe), Re;
      if (ge === null) {
        for (; !Ot.done; Fe++, Ot = L.next()) Ot = W(k, Ot.value, K), Ot !== null && (x = d(Ot, x, Fe), je === null ? Re = Ot : je.sibling = Ot, je = Ot);
        return un && ga(k, Fe), Re;
      }
      for (ge = o(k, ge); !Ot.done; Fe++, Ot = L.next()) Ot = se(ge, k, Fe, Ot.value, K), Ot !== null && (n && Ot.alternate !== null && ge.delete(Ot.key === null ? Fe : Ot.key), x = d(Ot, x, Fe), je === null ? Re = Ot : je.sibling = Ot, je = Ot);
      return n && ge.forEach(function(Sy) {
        return r(k, Sy);
      }), un && ga(k, Fe), Re;
    }
    function Mn(k, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case De:
            e: {
              for (var Re = L.key, je = x; je !== null; ) {
                if (je.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (je.tag === 7) {
                      l(k, je.sibling), x = c(je, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (je.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === xt && kv(Re) === je.type) {
                    l(k, je.sibling), x = c(je, L.props), x.ref = au(k, je, L), x.return = k, k = x;
                    break e;
                  }
                  l(k, je);
                  break;
                } else r(k, je);
                je = je.sibling;
              }
              L.type === He ? (x = Su(L.props.children, k.mode, K, L.key), x.return = k, k = x) : (K = af(L.type, L.key, L.props, null, k.mode, K), K.ref = au(k, x, L), K.return = k, k = K);
            }
            return m(k);
          case ot:
            e: {
              for (je = L.key; x !== null; ) {
                if (x.key === je) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(k, x.sibling), x = c(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  l(k, x);
                  break;
                }
                else r(k, x);
                x = x.sibling;
              }
              x = ks(L, k.mode, K), x.return = k, k = x;
            }
            return m(k);
          case xt:
            return je = L._init, Mn(k, x, je(L._payload), K);
        }
        if (Gn(L)) return ye(k, x, L, K);
        if (be(L)) return Ee(k, x, L, K);
        Ei(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, L), x.return = k, k = x) : (l(k, x), x = uf(L, k.mode, K), x.return = k, k = x), m(k)) : l(k, x);
    }
    return Mn;
  }
  var Zu = Sc(!0), Dv = Sc(!1), Ii = Ze(null), Vn = null, te = null, Fa = null;
  function Ea() {
    Fa = te = Vn = null;
  }
  function Ed(n) {
    var r = Ii.current;
    Ut(Ii), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Ju(n, r) {
    Vn = n, Fa = te = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (aa = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (Fa !== n) if (n = { context: n, memoizedValue: r, next: null }, te === null) {
      if (Vn === null) throw Error(A(308));
      te = n, Vn.dependencies = { lanes: 0, firstContext: n };
    } else te = te.next = n;
    return r;
  }
  var iu = null;
  function jn(n) {
    iu === null ? iu = [n] : iu.push(n);
  }
  function Ov(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, jn(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Yi(n, o);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _l = !1;
  function Ec(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function eo(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function na(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ht & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Yi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, jn(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Yi(n, l);
  }
  function Cc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  function Lv(n, r) {
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
  function Rc(n, r, l, o) {
    var c = n.updateQueue;
    _l = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== m && (E === null ? Y.firstBaseUpdate = z : E.next = z, Y.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Y = z = T = null, E = d;
      do {
        var $ = E.lane, se = E.eventTime;
        if ((o & $) === $) {
          Y !== null && (Y = Y.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch ($ = r, se = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  W = ye.call(se, W, $);
                  break e;
                }
                W = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, $ = typeof ye == "function" ? ye.call(se, W, $) : ye, $ == null) break e;
                W = ae({}, W, $);
                break e;
              case 2:
                _l = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else se = { eventTime: se, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (z = Y = se, T = W) : Y = Y.next = se, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      hu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Mv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, ui = Ze(fs), to = Ze(fs), ds = Ze(fs);
  function lu(n) {
    if (n === fs) throw Error(A(174));
    return n;
  }
  function Rd(n, r) {
    switch (Vt(ds, r), Vt(to, n), Vt(ui, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : hn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = hn(r, n);
    }
    Ut(ui), Vt(ui, r);
  }
  function no() {
    Ut(ui), Ut(to), Ut(ds);
  }
  function Nv(n) {
    lu(ds.current);
    var r = lu(ui.current), l = hn(r, n.type);
    r !== l && (Vt(to, n), Vt(ui, l));
  }
  function Td(n) {
    to.current === n && (Ut(ui), Ut(to));
  }
  var fn = Ze(0);
  function Tc(n) {
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
  var wc = [];
  function wd() {
    for (var n = 0; n < wc.length; n++) wc[n]._workInProgressVersionPrimary = null;
    wc.length = 0;
  }
  var xc = vt.ReactCurrentDispatcher, ps = vt.ReactCurrentBatchConfig, Ce = 0, we = null, Ie = null, ct = null, Ca = !1, ro = !1, vs = 0, ny = 0;
  function Cr() {
    throw Error(A(321));
  }
  function hs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ma(n[l], r[l])) return !1;
    return !0;
  }
  function B(n, r, l, o, c, d) {
    if (Ce = d, we = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xc.current = n === null || n.memoizedState === null ? ry : nn, n = l(o, c), ro) {
      d = 0;
      do {
        if (ro = !1, vs = 0, 25 <= d) throw Error(A(301));
        d += 1, ct = Ie = null, r.updateQueue = null, xc.current = Pc, n = l(o, c);
      } while (ro);
    }
    if (xc.current = Rr, r = Ie !== null && Ie.next !== null, Ce = 0, ct = Ie = we = null, Ca = !1, r) throw Error(A(300));
    return n;
  }
  function Fn() {
    var n = vs !== 0;
    return vs = 0, n;
  }
  function ke() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ct === null ? we.memoizedState = ct = n : ct = ct.next = n, ct;
  }
  function ir() {
    if (Ie === null) {
      var n = we.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ie.next;
    var r = ct === null ? we.memoizedState : ct.next;
    if (r !== null) ct = r, Ie = n;
    else {
      if (n === null) throw Error(A(310));
      Ie = n, n = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, ct === null ? we.memoizedState = ct = n : ct = ct.next = n;
    }
    return ct;
  }
  function Ra(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Wi(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Ie, c = o.baseQueue, d = l.pending;
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
        var Y = z.lane;
        if ((Ce & Y) === Y) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Y,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, we.lanes |= Y, hu |= Y;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ma(o, r.memoizedState) || (aa = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, we.lanes |= d, hu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Pa(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ma(d, r.memoizedState) || (aa = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ao() {
  }
  function uu(n, r) {
    var l = we, o = ir(), c = r(), d = !Ma(o.memoizedState, c);
    if (d && (o.memoizedState = c, aa = !0), o = o.queue, ms(_c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ct !== null && ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, ou(9, bc.bind(null, l, o, c, r), void 0, null), xn === null) throw Error(A(349));
      Ce & 30 || io(l, r, c);
    }
    return c;
  }
  function io(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, kc(r) && Dc(n);
  }
  function _c(n, r, l) {
    return l(function() {
      kc(r) && Dc(n);
    });
  }
  function kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ma(n, l);
    } catch {
      return !0;
    }
  }
  function Dc(n) {
    var r = Yi(n, 1);
    r !== null && Sn(r, n, 1, -1);
  }
  function Oc(n) {
    var r = ke();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ra, lastRenderedState: n }, r.queue = n, n = n.dispatch = ys.bind(null, we, n), [r.memoizedState, n];
  }
  function ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Lc() {
    return ir().memoizedState;
  }
  function lo(n, r, l, o) {
    var c = ke();
    we.flags |= n, c.memoizedState = ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function uo(n, r, l, o) {
    var c = ir();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ie !== null) {
      var m = Ie.memoizedState;
      if (d = m.destroy, o !== null && hs(o, m.deps)) {
        c.memoizedState = ou(r, l, d, o);
        return;
      }
    }
    we.flags |= n, c.memoizedState = ou(1 | r, l, d, o);
  }
  function Mc(n, r) {
    return lo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return uo(2048, 8, n, r);
  }
  function Nc(n, r) {
    return uo(4, 2, n, r);
  }
  function zc(n, r) {
    return uo(4, 4, n, r);
  }
  function Uc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ac(n, r, l) {
    return l = l != null ? l.concat([n]) : null, uo(4, 4, Uc.bind(null, r, n), l);
  }
  function oo() {
  }
  function su(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function jc(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Fc(n, r, l) {
    return Ce & 21 ? (Ma(l, r) || (l = Uu(), we.lanes |= l, hu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, aa = !0), n.memoizedState = l);
  }
  function xd(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ps.transition;
    ps.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, ps.transition = o;
    }
  }
  function Hc() {
    return ir().memoizedState;
  }
  function zv(n, r, l) {
    var o = qi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, bd(n)) so(r, l);
    else if (l = Ov(n, r, l, o), l !== null) {
      var c = tr();
      Sn(l, n, o, c), Dl(l, r, o);
    }
  }
  function ys(n, r, l) {
    var o = qi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (bd(n)) so(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ma(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, jn(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Ov(n, r, c, o), l !== null && (c = tr(), Sn(l, n, o, c), Dl(l, r, o));
    }
  }
  function bd(n) {
    var r = n.alternate;
    return n === we || r !== null && r === we;
  }
  function so(n, r) {
    ro = Ca = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  var Rr = { readContext: Ha, useCallback: Cr, useContext: Cr, useEffect: Cr, useImperativeHandle: Cr, useInsertionEffect: Cr, useLayoutEffect: Cr, useMemo: Cr, useReducer: Cr, useRef: Cr, useState: Cr, useDebugValue: Cr, useDeferredValue: Cr, useTransition: Cr, useMutableSource: Cr, useSyncExternalStore: Cr, useId: Cr, unstable_isNewReconciler: !1 }, ry = { readContext: Ha, useCallback: function(n, r) {
    return ke().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: Mc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(
      4194308,
      4,
      Uc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return lo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return lo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ke();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ke();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = zv.bind(null, we, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ke();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Oc, useDebugValue: oo, useDeferredValue: function(n) {
    return ke().memoizedState = n;
  }, useTransition: function() {
    var n = Oc(!1), r = n[0];
    return n = xd.bind(null, n[1]), ke().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = we, c = ke();
    if (un) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), xn === null) throw Error(A(349));
      Ce & 30 || io(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Mc(_c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ou(9, bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ke(), r = xn.identifierPrefix;
    if (un) {
      var l = $i, o = ar;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ny++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, nn = {
    readContext: Ha,
    useCallback: su,
    useContext: Ha,
    useEffect: ms,
    useImperativeHandle: Ac,
    useInsertionEffect: Nc,
    useLayoutEffect: zc,
    useMemo: jc,
    useReducer: Wi,
    useRef: Lc,
    useState: function() {
      return Wi(Ra);
    },
    useDebugValue: oo,
    useDeferredValue: function(n) {
      var r = ir();
      return Fc(r, Ie.memoizedState, n);
    },
    useTransition: function() {
      var n = Wi(Ra)[0], r = ir().memoizedState;
      return [n, r];
    },
    useMutableSource: ao,
    useSyncExternalStore: uu,
    useId: Hc,
    unstable_isNewReconciler: !1
  }, Pc = { readContext: Ha, useCallback: su, useContext: Ha, useEffect: ms, useImperativeHandle: Ac, useInsertionEffect: Nc, useLayoutEffect: zc, useMemo: jc, useReducer: Pa, useRef: Lc, useState: function() {
    return Pa(Ra);
  }, useDebugValue: oo, useDeferredValue: function(n) {
    var r = ir();
    return Ie === null ? r.memoizedState = n : Fc(r, Ie.memoizedState, n);
  }, useTransition: function() {
    var n = Pa(Ra)[0], r = ir().memoizedState;
    return [n, r];
  }, useMutableSource: ao, useSyncExternalStore: uu, useId: Hc, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function cu(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var fu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = qi(n), d = na(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Sn(r, n, c, o), Cc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = qi(n), d = na(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Sn(r, n, c, o), Cc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = tr(), o = qi(n), c = na(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (Sn(r, n, o, l), Cc(r, n, o));
  } };
  function Uv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Av(n, r, l) {
    var o = !1, c = Si, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = cn(r) ? Kr : $e.current, o = r.contextTypes, d = (o = o != null) ? za(n, c) : Si), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = fu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function jv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && fu.enqueueReplaceState(r, r.state, null);
  }
  function _d(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ec(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = cn(r) ? Kr : $e.current, c.context = za(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (cu(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && fu.enqueueReplaceState(c, c.state, null), Rc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ol(n, r) {
    try {
      var l = "", o = r;
      do
        l += et(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function kd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function gs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Fv = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = na(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Zc || (Zc = !0, jd = o), gs(n, r);
    }, l;
  }
  function Pv(n, r, l) {
    l = na(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        gs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      gs(n, r), typeof o != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ss(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Fv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Vv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Dd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = na(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var Bv = vt.ReactCurrentOwner, aa = !1;
  function On(n, r, l, o) {
    r.child = n === null ? Dv(r, null, l, o) : Zu(r, n.child, l, o);
  }
  function co(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Ju(r, c), o = B(n, r, l, o, d, c), l = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (un && l && vc(r), r.flags |= 1, On(n, r, o, c), r.child);
  }
  function Ll(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Bd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Vc(n, r, d, o, c)) : (n = af(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return Ln(n, r, c);
    }
    return r.flags |= 1, n = zl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Vc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (aa = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (aa = !0);
      else return r.lanes = n.lanes, Ln(n, r, c);
    }
    return Xe(n, r, l, o, c);
  }
  function ia(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Vt(Co, la), la |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Vt(Co, la), la |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Vt(Co, la), la |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Vt(Co, la), la |= o;
    return On(n, r, c, l), r.child;
  }
  function du(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xe(n, r, l, o, c) {
    var d = cn(l) ? Kr : $e.current;
    return d = za(r, d), Ju(r, c), l = B(n, r, l, o, d, c), o = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (un && o && vc(r), r.flags |= 1, On(n, r, l, c), r.child);
  }
  function Es(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      pc(r);
    } else d = !1;
    if (Ju(r, c), r.stateNode === null) Rs(n, r), Av(r, l, o), _d(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ha(z) : (z = cn(l) ? Kr : $e.current, z = za(r, z));
      var Y = l.getDerivedStateFromProps, W = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && jv(r, m, o, z), _l = !1;
      var $ = r.memoizedState;
      m.state = $, Rc(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Tn.current || _l ? (typeof Y == "function" && (cu(r, l, Y, o), T = r.memoizedState), (E = _l || Uv(r, l, E, o, $, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, eo(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ra(r.type, E), m.props = z, W = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = cn(l) ? Kr : $e.current, T = za(r, T));
      var se = l.getDerivedStateFromProps;
      (Y = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || $ !== T) && jv(r, m, o, T), _l = !1, $ = r.memoizedState, m.state = $, Rc(r, o, m, c);
      var ye = r.memoizedState;
      E !== W || $ !== ye || Tn.current || _l ? (typeof se == "function" && (cu(r, l, se, o), ye = r.memoizedState), (z = _l || Uv(r, l, z, o, $, ye, T) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Bc(n, r, l, o, d, c);
  }
  function Bc(n, r, l, o, c, d) {
    du(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wv(r, l, !1), Ln(n, r, d);
    o = r.stateNode, Bv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Zu(r, n.child, null, d), r.child = Zu(r, null, E, d)) : On(n, r, E, d), r.memoizedState = o.state, c && wv(r, l, !0), r.child;
  }
  function ay(n) {
    var r = n.stateNode;
    r.pendingContext ? xl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && xl(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return gn(), Sd(c), r.flags |= 256, On(n, r, l, o), r.child;
  }
  var Cs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = fn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Vt(fn, c & 1), n === null)
      return mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = lf(m, o, 0, null), n = Su(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = pu(l), r.memoizedState = Cs, n) : $c(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Od(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = zl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = zl(E, d) : (d = Su(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? pu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Cs, o;
    }
    return d = n.child, n = d.sibling, o = zl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function $c(n, r) {
    return r = lf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ic(n, r, l, o) {
    return o !== null && Sd(o), Zu(r, n.child, null, l), n = $c(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Od(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = kd(Error(A(422))), Ic(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = lf({ mode: "visible", children: o.children }, c, 0, null), d = Su(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Zu(r, n.child, null, m), r.child.memoizedState = pu(m), r.memoizedState = Cs, d);
    if (!(r.mode & 1)) return Ic(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = kd(d, o, void 0), Ic(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, aa || E) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), Sn(o, n, c, -1));
      }
      return _s(), o = kd(Error(A(421))), Ic(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Vd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = li(c.nextSibling), Sa = r, un = !0, ja = null, n !== null && (ea[Er++] = ar, ea[Er++] = $i, ea[Er++] = Aa, ar = n.id, $i = n.overflow, Aa = r), r = $c(r, o.children), r.flags |= 4096, r);
  }
  function Yv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (On(n, r, o.children, l), o = fn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Yv(n, l, r);
        else if (n.tag === 19) Yv(n, l, r);
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
    if (Vt(fn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Tc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Yc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Tc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Yc(r, !0, l, null, d);
        break;
      case "together":
        Yc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Rs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), hu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = zl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = zl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qi(n, r, l) {
    switch (r.tag) {
      case 3:
        ay(r), gn();
        break;
      case 5:
        Nv(r);
        break;
      case 1:
        cn(r.type) && pc(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Vt(Ii, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Vt(fn, fn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (Vt(fn, fn.current & 1), n = Ln(n, r, l), n !== null ? n.sibling : null);
        Vt(fn, fn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Vt(fn, fn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ia(n, r, l);
    }
    return Ln(n, r, l);
  }
  var Ci, fo, po, Va;
  Ci = function(n, r) {
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
  }, fo = function() {
  }, po = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, lu(ui.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = ae({}, c, { value: void 0 }), o = ae({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = dc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Nt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Nt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Va = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wn(n, r) {
    if (!un) switch (n.tailMode) {
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
  function Tr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (yd(r), r.tag) {
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
        return Tr(r), null;
      case 1:
        return cn(r.type) && Ua(), Tr(r), null;
      case 3:
        return o = r.stateNode, no(), Ut(Tn), Ut($e), wd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Fd(ja), ja = null))), fo(n, r), Tr(r), null;
      case 5:
        Td(r);
        var c = lu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null) po(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Tr(r), null;
          }
          if (n = lu(ui.current), yc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[gi] = r, o[nu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Jt("cancel", o), Jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Jt(rs[c], o);
                break;
              case "source":
                Jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Jt(
                  "error",
                  o
                ), Jt("load", o);
                break;
              case "details":
                Jt("toggle", o);
                break;
              case "input":
                Pn(o, d), Jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Jt("invalid", o);
                break;
              case "textarea":
                yr(o, d), Jt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && fc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && fc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Nt.hasOwnProperty(m) && E != null && m === "onScroll" && Jt("scroll", o);
            }
            switch (l) {
              case "input":
                hr(o), $r(o, d, !0);
                break;
              case "textarea":
                hr(o), rr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = dc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Wr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[gi] = r, n[nu] = o, Ci(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = mn(l, o), l) {
                case "dialog":
                  Jt("cancel", n), Jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Jt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Jt(
                    "error",
                    n
                  ), Jt("load", n), c = o;
                  break;
                case "details":
                  Jt("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = Qn(n, o), Jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Jt("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = Yr(n, o), Jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? zt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && pa(n, T) : typeof T == "number" && pa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Nt.hasOwnProperty(d) ? T != null && d === "onScroll" && Jt("scroll", n) : T != null && Qe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  hr(n), $r(n, o, !1);
                  break;
                case "textarea":
                  hr(n), rr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = dc);
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
        return Tr(r), null;
      case 6:
        if (n && r.stateNode != null) Va(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = lu(ds.current), lu(ui.current), yc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[gi] = r, (d = o.nodeValue !== l) && (n = Sa, n !== null)) switch (n.tag) {
              case 3:
                fc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && fc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[gi] = r, r.stateNode = o;
        }
        return Tr(r), null;
      case 13:
        if (Ut(fn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && ta !== null && r.mode & 1 && !(r.flags & 128)) _v(), gn(), r.flags |= 98560, d = !1;
          else if (d = yc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[gi] = r;
            } else gn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Tr(r), d = !1;
          } else ja !== null && (Fd(ja), ja = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || fn.current & 1 ? $n === 0 && ($n = 3) : _s())), r.updateQueue !== null && (r.flags |= 4), Tr(r), null);
      case 4:
        return no(), fo(n, r), n === null && qu(r.stateNode.containerInfo), Tr(r), null;
      case 10:
        return Ed(r.type._context), Tr(r), null;
      case 17:
        return cn(r.type) && Ua(), Tr(r), null;
      case 19:
        if (Ut(fn), d = r.memoizedState, d === null) return Tr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) wn(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Tc(n), m !== null) {
              for (r.flags |= 128, wn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Vt(fn, fn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && kt() > To && (r.flags |= 128, o = !0, wn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Tc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !un) return Tr(r), null;
          } else 2 * kt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, wn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = kt(), r.sibling = null, l = fn.current, Vt(fn, o ? l & 1 | 2 : l & 1), r) : (Tr(r), null);
      case 22:
      case 23:
        return nf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? la & 1073741824 && (Tr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Tr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ly(n, r) {
    switch (yd(r), r.tag) {
      case 1:
        return cn(r.type) && Ua(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return no(), Ut(Tn), Ut($e), wd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Td(r), null;
      case 13:
        if (Ut(fn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          gn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(fn), null;
      case 4:
        return no(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return nf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vo = !1, lr = !1, Wc = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function ho(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      bn(n, r, o);
    }
    else l.current = null;
  }
  function Md(n, r, l) {
    try {
      l();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var Qc = !1;
  function uy(n, r) {
    if (sd = La, n = lc(), Hi(n)) {
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
          var m = 0, E = -1, T = -1, z = 0, Y = 0, W = n, $ = null;
          t: for (; ; ) {
            for (var se; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (se = W.firstChild) !== null; )
              $ = W, W = se;
            for (; ; ) {
              if (W === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++Y === o && (T = m), (se = W.nextSibling) !== null) break;
              W = $, $ = W.parentNode;
            }
            W = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (eu = { focusedElem: n, selectionRange: l }, La = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
    else for (; pe !== null; ) {
      r = pe;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, Mn = ye.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ra(r.type, Ee), Mn);
              k.__reactInternalSnapshotBeforeUpdate = x;
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
            throw Error(A(163));
        }
      } catch (K) {
        bn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, pe = n;
        break;
      }
      pe = r.return;
    }
    return ye = Qc, Qc = !1, ye;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Md(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Gc(n, r) {
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
  function qc(n) {
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
  function Wv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Wv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[gi], delete r[nu], delete r[dd], delete r[ty], delete r[pd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Nd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Nd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ts(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = dc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ts(n, r, l), n = n.sibling; n !== null; ) Ts(n, r, l), n = n.sibling;
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (yo(n, r, l), n = n.sibling; n !== null; ) yo(n, r, l), n = n.sibling;
  }
  var dn = null, Jn = !1;
  function Mr(n, r, l) {
    for (l = l.child; l !== null; ) go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(fl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        lr || ho(l, r);
      case 6:
        var o = dn, c = Jn;
        dn = null, Mr(n, r, l), dn = o, Jn = c, dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : dn.removeChild(l.stateNode));
        break;
      case 18:
        dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? Rl(n.parentNode, l) : n.nodeType === 1 && Rl(n, l), gl(n)) : Rl(dn, l.stateNode));
        break;
      case 4:
        o = dn, c = Jn, dn = l.stateNode.containerInfo, Jn = !0, Mr(n, r, l), dn = o, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Md(l, r, m), c = c.next;
          } while (c !== o);
        }
        Mr(n, r, l);
        break;
      case 1:
        if (!lr && (ho(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          bn(l, r, E);
        }
        Mr(n, r, l);
        break;
      case 21:
        Mr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (lr = (o = lr) || l.memoizedState !== null, Mr(n, r, l), lr = o) : Mr(n, r, l);
        break;
      default:
        Mr(n, r, l);
    }
  }
  function So(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Wc()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function er(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              dn = E.stateNode, Jn = !1;
              break e;
            case 3:
              dn = E.stateNode.containerInfo, Jn = !0;
              break e;
            case 4:
              dn = E.stateNode.containerInfo, Jn = !0;
              break e;
          }
          E = E.return;
        }
        if (dn === null) throw Error(A(160));
        go(d, m, c), dn = null, Jn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        bn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Gv(r, n), r = r.sibling;
  }
  function Gv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (er(r, n), Ri(n), o & 4) {
          try {
            mo(3, n, n.return), Gc(3, n);
          } catch (Ee) {
            bn(n, n.return, Ee);
          }
          try {
            mo(5, n, n.return);
          } catch (Ee) {
            bn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        er(r, n), Ri(n), o & 512 && l !== null && ho(l, l.return);
        break;
      case 5:
        if (er(r, n), Ri(n), o & 512 && l !== null && ho(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (Ee) {
            bn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && zn(c, d), mn(E, m);
            var z = mn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Y = T[m], W = T[m + 1];
              Y === "style" ? zt(c, W) : Y === "dangerouslySetInnerHTML" ? fi(c, W) : Y === "children" ? pa(c, W) : Qe(c, Y, W, z);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                da(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? mr(c, !!d.multiple, se, !1) : $ !== !!d.multiple && (d.defaultValue != null ? mr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : mr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[nu] = d;
          } catch (Ee) {
            bn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (er(r, n), Ri(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            bn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (er(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          gl(r.containerInfo);
        } catch (Ee) {
          bn(n, n.return, Ee);
        }
        break;
      case 4:
        er(r, n), Ri(n);
        break;
      case 13:
        er(r, n), Ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Kc = kt())), o & 4 && So(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? (lr = (z = lr) || Y, er(r, n), lr = z) : er(r, n), Ri(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Y && n.mode & 1) for (pe = n, Y = n.child; Y !== null; ) {
            for (W = pe = Y; pe !== null; ) {
              switch ($ = pe, se = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, $, $.return);
                  break;
                case 1:
                  ho($, $.return);
                  var ye = $.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      bn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  ho($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    qv(W);
                    continue;
                  }
              }
              se !== null ? (se.return = $, pe = se) : qv(W);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Y === null) {
                Y = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = tt("display", m));
                } catch (Ee) {
                  bn(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (Y === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ee) {
                bn(n, n.return, Ee);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Y === W && (Y = null), W = W.return;
            }
            Y === W && (Y = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        er(r, n), Ri(n), o & 4 && So(n);
        break;
      case 21:
        break;
      default:
        er(
          r,
          n
        ), Ri(n);
    }
  }
  function Ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Nd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (pa(c, ""), o.flags &= -33);
            var d = Qv(n);
            yo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Qv(n);
            Ts(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        bn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    pe = n, zd(n);
  }
  function zd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vo;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || lr;
          E = vo;
          var z = lr;
          if (vo = m, (lr = T) && !z) for (pe = c; pe !== null; ) m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ud(c) : T !== null ? (T.return = m, pe = T) : Ud(c);
          for (; d !== null; ) pe = d, zd(d), d = d.sibling;
          pe = c, vo = E, lr = z;
        }
        Eo(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, pe = d) : Eo(n);
    }
  }
  function Eo(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              lr || Gc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !lr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Mv(r, d, o);
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
                Mv(r, m, l);
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
                  var Y = z.memoizedState;
                  if (Y !== null) {
                    var W = Y.dehydrated;
                    W !== null && gl(W);
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
              throw Error(A(163));
          }
          lr || r.flags & 512 && qc(r);
        } catch ($) {
          bn(r, r.return, $);
        }
      }
      if (r === n) {
        pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function qv(n) {
    for (; pe !== null; ) {
      var r = pe;
      if (r === n) {
        pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, pe = l;
        break;
      }
      pe = r.return;
    }
  }
  function Ud(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Gc(4, r);
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
              qc(r);
            } catch (T) {
              bn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              qc(r);
            } catch (T) {
              bn(r, m, T);
            }
        }
      } catch (T) {
        bn(r, r.return, T);
      }
      if (r === n) {
        pe = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, pe = E;
        break;
      }
      pe = r.return;
    }
  }
  var sy = Math.ceil, vu = vt.ReactCurrentDispatcher, Xc = vt.ReactCurrentOwner, Ba = vt.ReactCurrentBatchConfig, ht = 0, xn = null, on = null, Bn = 0, la = 0, Co = Ze(0), $n = 0, ws = null, hu = 0, Ro = 0, Ad = 0, Ml = null, wr = null, Kc = 0, To = 1 / 0, Gi = null, Zc = !1, jd = null, $a = null, wo = !1, Ia = null, Jc = 0, xs = 0, ef = null, bs = -1, mu = 0;
  function tr() {
    return ht & 6 ? kt() : bs !== -1 ? bs : bs = kt();
  }
  function qi(n) {
    return n.mode & 1 ? ht & 2 && Bn !== 0 ? Bn & -Bn : gc.transition !== null ? (mu === 0 && (mu = Uu()), mu) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Sn(n, r, l, o) {
    if (50 < xs) throw xs = 0, ef = null, Error(A(185));
    Ni(n, l, o), (!(ht & 2) || n !== xn) && (n === xn && (!(ht & 2) && (Ro |= l), $n === 4 && Ti(n, Bn)), In(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (To = kt() + 500, Zn && Zr()));
  }
  function In(n, r) {
    var l = n.callbackNode;
    vl(n, r);
    var o = Or(n, n === xn ? Bn : 0);
    if (o === 0) l !== null && an(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && an(l), r === 1) n.tag === 0 ? hd(xo.bind(null, n)) : vd(xo.bind(null, n)), fd(function() {
        !(ht & 6) && Zr();
      }), l = null;
      else {
        switch (ju(o)) {
          case 1:
            l = kr;
            break;
          case 4:
            l = rt;
            break;
          case 16:
            l = Da;
            break;
          case 536870912:
            l = Nu;
            break;
          default:
            l = Da;
        }
        l = rh(l, tf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function tf(n, r) {
    if (bs = -1, mu = 0, ht & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = Or(n, n === xn ? Bn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = rf(n, o);
    else {
      r = o;
      var c = ht;
      ht |= 2;
      var d = Kv();
      (xn !== n || Bn !== r) && (Gi = null, To = kt() + 500, gu(n, r));
      do
        try {
          fy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (!0);
      Ea(), vu.current = d, ht = c, on !== null ? r = 0 : (xn = null, Bn = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = hl(n), c !== 0 && (o = c, r = yu(n, c))), r === 1) throw l = ws, gu(n, 0), Ti(n, o), In(n, kt()), l;
      if (r === 6) Ti(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hd(c) && (r = rf(n, o), r === 2 && (d = hl(n), d !== 0 && (o = d, r = yu(n, d))), r === 1)) throw l = ws, gu(n, 0), Ti(n, o), In(n, kt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Nl(n, wr, Gi);
            break;
          case 3:
            if (Ti(n, o), (o & 130023424) === o && (r = Kc + 500 - kt(), 10 < r)) {
              if (Or(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                tr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = tu(Nl.bind(null, n, wr, Gi), r);
              break;
            }
            Nl(n, wr, Gi);
            break;
          case 4:
            if (Ti(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = kt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tu(Nl.bind(null, n, wr, Gi), o);
              break;
            }
            Nl(n, wr, Gi);
            break;
          case 5:
            Nl(n, wr, Gi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return In(n, kt()), n.callbackNode === l ? tf.bind(null, n) : null;
  }
  function yu(n, r) {
    var l = Ml;
    return n.current.memoizedState.isDehydrated && (gu(n, r).flags |= 256), n = rf(n, r), n !== 2 && (r = wr, wr = l, r !== null && Fd(r)), n;
  }
  function Fd(n) {
    wr === null ? wr = n : wr.push.apply(wr, n);
  }
  function Hd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ma(d(), c)) return !1;
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
  function Ti(n, r) {
    for (r &= ~Ad, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function xo(n) {
    if (ht & 6) throw Error(A(327));
    bo();
    var r = Or(n, 0);
    if (!(r & 1)) return In(n, kt()), null;
    var l = rf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = hl(n);
      o !== 0 && (r = o, l = yu(n, o));
    }
    if (l === 1) throw l = ws, gu(n, 0), Ti(n, r), In(n, kt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nl(n, wr, Gi), In(n, kt()), null;
  }
  function Pd(n, r) {
    var l = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = l, ht === 0 && (To = kt() + 500, Zn && Zr());
    }
  }
  function wi(n) {
    Ia !== null && Ia.tag === 0 && !(ht & 6) && bo();
    var r = ht;
    ht |= 1;
    var l = Ba.transition, o = Dt;
    try {
      if (Ba.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Ba.transition = l, ht = r, !(ht & 6) && Zr();
    }
  }
  function nf() {
    la = Co.current, Ut(Co);
  }
  function gu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), on !== null) for (l = on.return; l !== null; ) {
      var o = l;
      switch (yd(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Ua();
          break;
        case 3:
          no(), Ut(Tn), Ut($e), wd();
          break;
        case 5:
          Td(o);
          break;
        case 4:
          no();
          break;
        case 13:
          Ut(fn);
          break;
        case 19:
          Ut(fn);
          break;
        case 10:
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          nf();
      }
      l = l.return;
    }
    if (xn = n, on = n = zl(n.current, null), Bn = la = r, $n = 0, ws = null, Ad = Ro = hu = 0, wr = Ml = null, iu !== null) {
      for (r = 0; r < iu.length; r++) if (l = iu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      iu = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = on;
      try {
        if (Ea(), xc.current = Rr, Ca) {
          for (var o = we.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ca = !1;
        }
        if (Ce = 0, ct = Ie = we = null, ro = !1, vs = 0, Xc.current = null, l === null || l.return === null) {
          $n = 1, ws = r, on = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Bn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Y = E, W = Y.tag;
            if (!(Y.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var $ = Y.alternate;
              $ ? (Y.updateQueue = $.updateQueue, Y.memoizedState = $.memoizedState, Y.lanes = $.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var se = Vv(m);
            if (se !== null) {
              se.flags &= -257, Dd(se, m, E, d, r), se.mode & 1 && Ss(d, z, r), r = se, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ss(d, z, r), _s();
                break e;
              }
              T = Error(A(426));
            }
          } else if (un && E.mode & 1) {
            var Mn = Vv(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Dd(Mn, m, E, d, r), Sd(Ol(T, E));
              break e;
            }
          }
          d = T = Ol(T, E), $n !== 4 && ($n = 2), Ml === null ? Ml = [d] : Ml.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, T, r);
                Lv(d, k);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && ($a === null || !$a.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Pv(d, E, r);
                  Lv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Jv(l);
      } catch (Re) {
        r = Re, on === l && l !== null && (on = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Kv() {
    var n = vu.current;
    return vu.current = Rr, n === null ? Rr : n;
  }
  function _s() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), xn === null || !(hu & 268435455) && !(Ro & 268435455) || Ti(xn, Bn);
  }
  function rf(n, r) {
    var l = ht;
    ht |= 2;
    var o = Kv();
    (xn !== n || Bn !== r) && (Gi = null, gu(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (!0);
    if (Ea(), ht = l, vu.current = o, on !== null) throw Error(A(261));
    return xn = null, Bn = 0, $n;
  }
  function cy() {
    for (; on !== null; ) Zv(on);
  }
  function fy() {
    for (; on !== null && !Sr(); ) Zv(on);
  }
  function Zv(n) {
    var r = nh(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? Jv(n) : on = r, Xc.current = null;
  }
  function Jv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ly(l, r), l !== null) {
          l.flags &= 32767, on = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, on = null;
          return;
        }
      } else if (l = iy(l, r, la), l !== null) {
        on = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function Nl(n, r, l) {
    var o = Dt, c = Ba.transition;
    try {
      Ba.transition = null, Dt = 1, dy(n, r, l, o);
    } finally {
      Ba.transition = c, Dt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      bo();
    while (Ia !== null);
    if (ht & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (If(n, d), n === xn && (on = xn = null, Bn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || wo || (wo = !0, rh(Da, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ba.transition, Ba.transition = null;
      var m = Dt;
      Dt = 1;
      var E = ht;
      ht |= 4, Xc.current = null, uy(n, l), Gv(l, n), uc(eu), La = !!sd, eu = sd = null, n.current = l, oy(l), hi(), ht = E, Dt = m, Ba.transition = d;
    } else n.current = l;
    if (wo && (wo = !1, Ia = n, Jc = c), d = n.pendingLanes, d === 0 && ($a = null), Yo(l.stateNode), In(n, kt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Zc) throw Zc = !1, n = jd, jd = null, n;
    return Jc & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === ef ? xs++ : (xs = 0, ef = n) : xs = 0, Zr(), null;
  }
  function bo() {
    if (Ia !== null) {
      var n = ju(Jc), r = Ba.transition, l = Dt;
      try {
        if (Ba.transition = null, Dt = 16 > n ? 16 : n, Ia === null) var o = !1;
        else {
          if (n = Ia, Ia = null, Jc = 0, ht & 6) throw Error(A(331));
          var c = ht;
          for (ht |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (pe = z; pe !== null; ) {
                    var Y = pe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, Y, d);
                    }
                    var W = Y.child;
                    if (W !== null) W.return = Y, pe = W;
                    else for (; pe !== null; ) {
                      Y = pe;
                      var $ = Y.sibling, se = Y.return;
                      if (Wv(Y), Y === z) {
                        pe = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = se, pe = $;
                        break;
                      }
                      pe = se;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var Mn = Ee.sibling;
                      Ee.sibling = null, Ee = Mn;
                    } while (Ee !== null);
                  }
                }
                pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, pe = m;
            else e: for (; pe !== null; ) {
              if (d = pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, pe = k;
                break e;
              }
              pe = d.return;
            }
          }
          var x = n.current;
          for (pe = x; pe !== null; ) {
            m = pe;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, pe = L;
            else e: for (m = x; pe !== null; ) {
              if (E = pe, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gc(9, E);
                }
              } catch (Re) {
                bn(E, E.return, Re);
              }
              if (E === m) {
                pe = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, pe = K;
                break e;
              }
              pe = E.return;
            }
          }
          if (ht = c, Zr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(fl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Ba.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, l) {
    r = Ol(l, r), r = Hv(n, r, 1), n = kl(n, r, 1), r = tr(), n !== null && (Ni(n, 1, r), In(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3) eh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        eh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($a === null || !$a.has(o))) {
          n = Ol(l, n), n = Pv(r, n, 1), r = kl(r, n, 1), n = tr(), r !== null && (Ni(r, 1, n), In(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = tr(), n.pingedLanes |= n.suspendedLanes & l, xn === n && (Bn & l) === l && ($n === 4 || $n === 3 && (Bn & 130023424) === Bn && 500 > kt() - Kc ? gu(n, 0) : Ad |= l), In(n, r);
  }
  function th(n, r) {
    r === 0 && (n.mode & 1 ? (r = dl, dl <<= 1, !(dl & 130023424) && (dl = 4194304)) : r = 1);
    var l = tr();
    n = Yi(n, r), n !== null && (Ni(n, r, l), In(n, l));
  }
  function Vd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), th(n, l);
  }
  function vy(n, r) {
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
        throw Error(A(314));
    }
    o !== null && o.delete(r), th(n, l);
  }
  var nh;
  nh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Tn.current) aa = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return aa = !1, Qi(n, r, l);
      aa = !!(n.flags & 131072);
    }
    else aa = !1, un && r.flags & 1048576 && md(r, Ku, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Rs(n, r), n = r.pendingProps;
        var c = za(r, $e.current);
        Ju(r, l), c = B(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, pc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ec(r), c.updater = fu, r.stateNode = c, c._reactInternals = r, _d(r, o, n, l), r = Bc(null, r, o, !0, d, l)) : (r.tag = 0, un && d && vc(r), On(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Rs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = ra(o, n), c) {
            case 0:
              r = Xe(null, r, o, n, l);
              break e;
            case 1:
              r = Es(null, r, o, n, l);
              break e;
            case 11:
              r = co(null, r, o, n, l);
              break e;
            case 14:
              r = Ll(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Xe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Es(n, r, o, c, l);
      case 3:
        e: {
          if (ay(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, eo(n, r), Rc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ol(Error(A(423)), r), r = $v(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Ol(Error(A(424)), r), r = $v(n, r, o, l, c);
            break e;
          } else for (ta = li(r.stateNode.containerInfo.firstChild), Sa = r, un = !0, ja = null, l = Dv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (gn(), o === c) {
              r = Ln(n, r, l);
              break e;
            }
            On(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Nv(r), n === null && mc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ls(o, c) ? m = null : d !== null && ls(o, d) && (r.flags |= 32), du(n, r), On(n, r, m, l), r.child;
      case 6:
        return n === null && mc(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Zu(r, null, o, l) : On(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), co(n, r, o, c, l);
      case 7:
        return On(n, r, r.pendingProps, l), r.child;
      case 8:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return On(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Vt(Ii, o._currentValue), o._currentValue = m, d !== null) if (Ma(d.value, m)) {
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
                    T = na(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Y = z.pending;
                      Y === null ? T.next = T : (T.next = Y.next, Y.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
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
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
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
        return c = r.type, o = r.pendingProps.children, Ju(r, l), c = Ha(c), o = o(c), r.flags |= 1, On(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), Ll(n, r, o, c, l);
      case 15:
        return Vc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Rs(n, r), r.tag = 1, cn(o) ? (n = !0, pc(r)) : n = !1, Ju(r, l), Av(r, o, c), _d(r, o, c, l), Bc(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return ia(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function rh(n, r) {
    return Xt(n, r);
  }
  function ah(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, o) {
    return new ah(n, r, l, o);
  }
  function Bd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function") return Bd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Cn) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function zl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function af(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Bd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return Su(l.children, c, d, r);
      case rn:
        m = 8, c |= 8;
        break;
      case _n:
        return n = Ya(12, l, r, c | 2), n.elementType = _n, n.lanes = d, n;
      case Ne:
        return n = Ya(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case Ke:
        return n = Ya(19, l, r, c), n.elementType = Ke, n.lanes = d, n;
      case me:
        return lf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Qt:
            m = 10;
            break e;
          case _t:
            m = 9;
            break e;
          case Cn:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case xt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Su(n, r, l, o) {
    return n = Ya(7, n, o, r), n.lanes = l, n;
  }
  function lf(n, r, l, o) {
    return n = Ya(22, n, o, r), n.elementType = me, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function uf(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function ks(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ds(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Au(0), this.expirationTimes = Au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function $d(n, r, l, o, c, d, m, E, T) {
    return n = new Ds(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ec(d), n;
  }
  function ih(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Id(n) {
    if (!n) return Si;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l)) return ss(n, l, r);
    }
    return r;
  }
  function Yd(n, r, l, o, c, d, m, E, T) {
    return n = $d(l, o, !0, n, c, d, m, E, T), n.context = Id(null), l = n.current, o = tr(), c = qi(l), d = na(o, c), d.callback = r ?? null, kl(l, d, c), n.current.lanes = c, Ni(n, c, o), In(n, o), n;
  }
  function of(n, r, l, o) {
    var c = r.current, d = tr(), m = qi(c);
    return l = Id(l), r.context === null ? r.context = l : r.pendingContext = l, r = na(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (Sn(n, c, m, d), Cc(n, c, m)), m;
  }
  function Os(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function lh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    lh(n, r), (n = n.alternate) && lh(n, r);
  }
  function my() {
    return null;
  }
  var Qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sf(n) {
    this._internalRoot = n;
  }
  Ls.prototype.render = sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    of(n, r, null, null);
  }, Ls.prototype.unmount = sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      wi(function() {
        of(null, n, null, null);
      }), r[Bi] = null;
    }
  };
  function Ls(n) {
    this._internalRoot = n;
  }
  Ls.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Pt.length && r !== 0 && r < Pt[l].priority; l++) ;
      Pt.splice(l, 0, n), l === 0 && ec(n);
    }
  };
  function Ul(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function uh() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = Os(m);
          d.call(z);
        };
      }
      var m = Yd(r, o, n, 0, null, !1, !1, "", uh);
      return n._reactRootContainer = m, n[Bi] = m.current, qu(n.nodeType === 8 ? n.parentNode : n), wi(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = Os(T);
        E.call(z);
      };
    }
    var T = $d(n, 0, !1, null, null, !1, !1, "", uh);
    return n._reactRootContainer = T, n[Bi] = T.current, qu(n.nodeType === 8 ? n.parentNode : n), wi(function() {
      of(r, T, l, o);
    }), T;
  }
  function ff(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = Os(m);
          E.call(T);
        };
      }
      of(r, m, n, c);
    } else m = yy(l, r, n, c, o);
    return Os(m);
  }
  Ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ti(r.pendingLanes);
          l !== 0 && (mi(r, l | 1), In(r, kt()), !(ht & 6) && (To = kt() + 500, Zr()));
        }
        break;
      case 13:
        wi(function() {
          var o = Yi(n, 1);
          if (o !== null) {
            var c = tr();
            Sn(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Fu = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var l = tr();
        Sn(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, St = function(n) {
    if (n.tag === 13) {
      var r = qi(n), l = Yi(n, r);
      if (l !== null) {
        var o = tr();
        Sn(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Hu = function() {
    return Dt;
  }, Pu = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, br = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Oe(o);
              if (!c) throw Error(A(90));
              Br(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        da(n, l);
        break;
      case "select":
        r = l.value, r != null && mr(n, !!l.multiple, r, !1);
    }
  }, Wl = Pd, Mu = wi;
  var gy = { usingClientEntryPoint: !1, Events: [os, Xu, Oe, ka, ol, Pd] }, Ms = { findFiberByHostInstance: Na, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, oh = { bundleType: Ms.bundleType, version: Ms.version, rendererPackageName: Ms.rendererPackageName, rendererConfig: Ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = nt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ms.findFiberByHostInstance || my, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!df.isDisabled && df.supportsFiber) try {
      fl = df.inject(oh), Qr = df;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ul(r)) throw Error(A(200));
    return ih(n, r, null, l);
  }, Ka.createRoot = function(n, r) {
    if (!Ul(n)) throw Error(A(299));
    var l = !1, o = "", c = Qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = $d(n, 1, !1, null, null, l, !1, o, c), n[Bi] = r.current, qu(n.nodeType === 8 ? n.parentNode : n), new sf(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = nt(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return wi(n);
  }, Ka.hydrate = function(n, r, l) {
    if (!cf(r)) throw Error(A(200));
    return ff(null, n, r, !0, l);
  }, Ka.hydrateRoot = function(n, r, l) {
    if (!Ul(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Yd(r, null, n, 1, l ?? null, c, !1, d, m), n[Bi] = r.current, qu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ls(r);
  }, Ka.render = function(n, r, l) {
    if (!cf(r)) throw Error(A(200));
    return ff(null, n, r, !1, l);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!cf(n)) throw Error(A(40));
    return n._reactRootContainer ? (wi(function() {
      ff(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Bi] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = Pd, Ka.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!cf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return ff(n, r, l, !1, o);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function ok() {
  return iR || (iR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var J = Ks, G = fR(), A = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dt = !1;
    function Nt(e) {
      dt = e;
    }
    function qe(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Wt("warn", e, a);
      }
    }
    function S(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Wt("error", e, a);
      }
    }
    function Wt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ve = 0, de = 1, ut = 2, re = 3, he = 4, ue = 5, Be = 6, wt = 7, pt = 8, pn = 9, at = 10, Qe = 11, vt = 12, De = 13, ot = 14, He = 15, rn = 16, _n = 17, Qt = 18, _t = 19, Cn = 21, Ne = 22, Ke = 23, At = 24, xt = 25, me = !0, Z = !1, be = !1, ae = !1, _ = !1, P = !0, ze = !1, Pe = !0, et = !0, Je = !0, yt = !0, it = /* @__PURE__ */ new Set(), lt = {}, en = {};
    function hr(e, t) {
      Br(e, t), Br(e + "Capture", t);
    }
    function Br(e, t) {
      lt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), lt[e] = t;
      {
        var a = e.toLowerCase();
        en[a] = e, e === "onDoubleClick" && (en.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        it.add(t[i]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function Pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return kn(e), !1;
      } catch {
        return !0;
      }
    }
    function kn(e) {
      return "" + e;
    }
    function $r(e, t) {
      if (zn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function Ir(e) {
      if (zn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    function Gn(e, t) {
      if (zn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function mr(e, t) {
      if (zn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function Yr(e) {
      if (zn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    function yr(e) {
      if (zn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    var da = 0, rr = 1, Wr = 2, hn = 3, xr = 4, fi = 5, pa = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _e = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", tt = new RegExp("^[" + ee + "][" + _e + "]*$"), zt = {}, jt = {};
    function Dn(e) {
      return Qn.call(jt, e) ? !0 : Qn.call(zt, e) ? !1 : tt.test(e) ? (jt[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === da)
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
    function It(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case hn:
            return !t;
          case xr:
            return t === !1;
          case fi:
            return isNaN(t);
          case pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function br(e) {
      return Ht.hasOwnProperty(e) ? Ht[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Wr || t === hn || t === xr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ht = {}, Ja = [
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
    Ja.forEach(function(e) {
      Ht[e] = new Ft(
        e,
        da,
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
      Ht[t] = new Ft(
        t,
        rr,
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
      Ht[e] = new Ft(
        e,
        Wr,
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
      Ht[e] = new Ft(
        e,
        Wr,
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
      Ht[e] = new Ft(
        e,
        hn,
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
      Ht[e] = new Ft(
        e,
        hn,
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
      Ht[e] = new Ft(
        e,
        xr,
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
      Ht[e] = new Ft(
        e,
        pa,
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
      Ht[e] = new Ft(
        e,
        fi,
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
    var ka = /[\-\:]([a-z])/g, ol = function(e) {
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
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
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
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
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
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        rr,
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
    var Wl = "xlinkHref";
    Ht[Wl] = new Ft(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        rr,
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
    var Mu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Mi = !1;
    function sl(e) {
      !Mi && Mu.test(e) && (Mi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function va(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $r(a, t), i.sanitizeURL && sl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === xr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === hn)
            return a;
          f = e.getAttribute(s);
        }
        return It(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function di(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $r(a, t), u === "" + a ? a : u;
      }
    }
    function ha(e, t, a, i) {
      var u = br(t);
      if (!mn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : ($r(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === hn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === hn || b === xr && a === !0 ? w = "" : ($r(a, y), w = "" + a, u.sanitizeURL && sl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ei = Symbol.for("react.element"), _r = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), I = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), nt = Symbol.for("react.scope"), Un = Symbol.for("react.debug_trace_mode"), Xt = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), Sr = Symbol.for("react.cache"), hi = Symbol.for("react.tracing_marker"), kt = Symbol.iterator, qn = "@@iterator";
    function kr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = kt && e[kt] || e[qn];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, Da = 0, cl, Nu, fl, Qr, Yo, Dr, Wo;
    function Qo() {
    }
    Qo.__reactDisabledLog = !0;
    function Zs() {
      {
        if (Da === 0) {
          cl = console.log, Nu = console.info, fl = console.warn, Qr = console.error, Yo = console.group, Dr = console.groupCollapsed, Wo = console.groupEnd;
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
        Da++;
      }
    }
    function zu() {
      {
        if (Da--, Da === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: cl
            }),
            info: rt({}, e, {
              value: Nu
            }),
            warn: rt({}, e, {
              value: fl
            }),
            error: rt({}, e, {
              value: Qr
            }),
            group: rt({}, e, {
              value: Yo
            }),
            groupCollapsed: rt({}, e, {
              value: Dr
            }),
            groupEnd: rt({}, e, {
              value: Wo
            })
          });
        }
        Da < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dl = A.ReactCurrentDispatcher, ti;
    function Or(e, t, a) {
      {
        if (ti === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ti = i && i[1] || "";
          }
        return `
` + ti + e;
      }
    }
    var pl = !1, vl;
    {
      var hl = typeof WeakMap == "function" ? WeakMap : Map;
      vl = new hl();
    }
    function Uu(e, t) {
      if (!e || pl)
        return "";
      {
        var a = vl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = dl.current, dl.current = null, Zs();
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
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && vl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pl = !1, dl.current = s, zu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? Or(w) : "";
      return typeof e == "function" && vl.set(e, M), M;
    }
    function Au(e, t, a) {
      return Uu(e, !0);
    }
    function Ni(e, t, a) {
      return Uu(e, !1);
    }
    function If(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Uu(e, If(e));
      if (typeof e == "string")
        return Or(e);
      switch (e) {
        case Te:
          return Or("Suspense");
        case ft:
          return Or("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return Ni(e.render);
          case gt:
            return mi(e.type, t, a);
          case Ue: {
            var i = e, u = i._payload, s = i._init;
            try {
              return mi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Dt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return Or(e.type);
        case rn:
          return Or("Lazy");
        case De:
          return Or("Suspense");
        case _t:
          return Or("SuspenseList");
        case ve:
        case ut:
        case He:
          return Ni(e.type);
        case Qe:
          return Ni(e.type.render);
        case de:
          return Au(e.type);
        default:
          return "";
      }
    }
    function ju(e) {
      try {
        var t = "", a = e;
        do
          t += Dt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ql(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ma:
          return "Fragment";
        case _r:
          return "Portal";
        case vi:
          return "Profiler";
        case pi:
          return "StrictMode";
        case Te:
          return "Suspense";
        case ft:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return Fu(t) + ".Consumer";
          case R:
            var a = e;
            return Fu(a._context) + ".Provider";
          case q:
            return Ql(e, e.render, "ForwardRef");
          case gt:
            var i = e.displayName || null;
            return i !== null ? i : St(e.type) || "Memo";
          case Ue: {
            var u = e, s = u._payload, f = u._init;
            try {
              return St(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Hu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Pu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case pn:
          var i = a;
          return Pu(i) + ".Consumer";
        case at:
          var u = a;
          return Pu(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case Qe:
          return Hu(a, a.render, "ForwardRef");
        case wt:
          return "Fragment";
        case ue:
          return a;
        case he:
          return "Portal";
        case re:
          return "Root";
        case Be:
          return "Text";
        case rn:
          return St(a);
        case pt:
          return a === pi ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case vt:
          return "Profiler";
        case Cn:
          return "Scope";
        case De:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case xt:
          return "TracingMarker";
        case de:
        case ve:
        case _n:
        case ut:
        case ot:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gl = A.ReactDebugCurrentFrame, yn = null, Gr = !1;
    function Lr() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function ml() {
      return yn === null ? "" : ju(yn);
    }
    function Rn() {
      Gl.getCurrentStack = null, yn = null, Gr = !1;
    }
    function Pt(e) {
      Gl.getCurrentStack = e === null ? null : ml, yn = e, Gr = !1;
    }
    function Js() {
      return yn;
    }
    function qr(e) {
      Gr = e;
    }
    function Xn(e) {
      return "" + e;
    }
    function yi(e) {
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
    var ec = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function zi(e, t) {
      ec[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function yl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tc(e) {
      return e._valueTracker;
    }
    function Oa(e) {
      e._valueTracker = null;
    }
    function gl(e) {
      var t = "";
      return e && (yl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ui(e) {
      var t = yl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
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
            Oa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      tc(e) || (e._valueTracker = Ui(e));
    }
    function Vu(e) {
      if (!e)
        return !1;
      var t = tc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = gl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Sl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var El = !1, ql = !1, Bu = !1, Go = !1;
    function ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      zi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ql && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), ql = !0), t.value !== void 0 && t.defaultValue !== void 0 && !El && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), El = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: yi(t.value != null ? t.value : i),
        controlled: ni(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = ni(t);
        !a._wrapperState.controlled && i && !Go && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Go = !0), a._wrapperState.controlled && !i && !Bu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bu = !0);
      }
      N(e, t);
      var u = yi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Xn(u)) : a.value !== Xn(u) && (a.value = Xn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, yi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function X(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Xn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ae(e, t) {
      var a = e;
      j(a, t), ie(a, t);
    }
    function ie(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $r(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vu(f), j(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Sl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xn(e._wrapperState.initialValue) : e.defaultValue !== Xn(a) && (e.defaultValue = Xn(a)));
    }
    var st = !1, bt = !1, Kt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? J.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || bt || (bt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Kt || (Kt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function Zt(e, t) {
      t.value != null && e.setAttribute("value", Xn(yi(t.value)));
    }
    var tn = Array.isArray;
    function Et(e) {
      return tn(e);
    }
    var Ai;
    Ai = !1;
    function $u() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var qo = ["value", "defaultValue"];
    function Yf(e) {
      {
        zi("select", e);
        for (var t = 0; t < qo.length; t++) {
          var a = qo[t];
          if (e[a] != null) {
            var i = Et(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, $u()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, $u());
          }
        }
      }
    }
    function ri(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Xn(yi(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Xo(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      Yf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ai && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ai = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ri(a, !!t.multiple, i, !1) : t.defaultValue != null && ri(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ri(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ri(a, !!t.multiple, t.defaultValue, !0) : ri(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Bm(e, t) {
      var a = e, i = t.value;
      i != null && ri(a, !!t.multiple, i, !1);
    }
    var Qf = !1;
    function Gf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      zi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Qf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), Qf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Et(u)) {
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
        initialValue: yi(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = yi(t.value), u = yi(t.defaultValue);
      if (i != null) {
        var s = Xn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Xn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qf(e, t) {
      Kp(e, t);
    }
    var ji = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Xf = "http://www.w3.org/2000/svg";
    function nc(e) {
      switch (e) {
        case "svg":
          return Xf;
        case "math":
          return $m;
        default:
          return ji;
      }
    }
    function Kf(e, t) {
      return e == null || e === ji ? nc(t) : e === Xf && t === "foreignObject" ? ji : e;
    }
    var Im = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, rc, Jp = Im(function(e, t) {
      if (e.namespaceURI === Xf && !("innerHTML" in e)) {
        rc = rc || document.createElement("div"), rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Fi = 3, An = 8, ai = 9, Xl = 11, ac = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
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
    }, Iu = {
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
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      nv.forEach(function(t) {
        Iu[tv(t, e)] = Iu[e];
      });
    });
    function ic(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var Yu = /([A-Z])/g, Ym = /^ms-/;
    function Wm(e) {
      return e.replace(Yu, "-$1").toLowerCase().replace(Ym, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Zo = /-(.)/g, Wu = /;\s*$/, Qu = {}, Gu = {}, lv = !1, Zf = !1, Jf = function(e) {
        return e.replace(Zo, function(t, a) {
          return a.toUpperCase();
        });
      }, ed = function(e) {
        Qu.hasOwnProperty(e) && Qu[e] || (Qu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Jf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        Qu.hasOwnProperty(e) && Qu[e] || (Qu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        Gu.hasOwnProperty(t) && Gu[t] || (Gu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wu, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Qm = function(e, t) {
        Zf || (Zf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? ed(e) : av.test(e) ? uv(e) : Wu.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || Qm(e, t));
      };
    }
    var Gm = rv;
    function qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += ic(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Gm(i, t[i]);
          var s = ic(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ma(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Jo(e, t) {
      {
        if (!t)
          return;
        var a = Ma(e), i = Ma(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Xm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
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
    }, dv = rt({
      menuitem: !0
    }, fv), pv = "__html";
    function lc(e, t) {
      if (t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Hi(e, t) {
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
    var uc = {
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
    }, vv = {
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
    }, ii = {}, td = new RegExp("^(aria)-[" + _e + "]*$"), es = new RegExp("^(aria)[A-Z][" + _e + "]*$");
    function nd(e, t) {
      {
        if (Qn.call(ii, t) && ii[t])
          return !0;
        if (es.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ii[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ii[t] = !0, !0;
        }
        if (td.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ii[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ii[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = nd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function oc(e, t) {
      Hi(e, t) || hv(e, t);
    }
    var Kl = !1;
    function rd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Kl && (Kl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ad = function() {
    };
    {
      var Kn = {}, id = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + _e + "]*$"), gv = new RegExp("^(aria)[A-Z][" + _e + "]*$");
      ad = function(e, t, a, i) {
        if (Qn.call(Kn, t) && Kn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Kn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Kn[t] = !0, !0;
          if (id.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Kn[t] = !0, !0;
        } else if (id.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Kn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Kn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Kn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Kn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Kn[t] = !0, !0;
        var v = br(t), y = v !== null && v.type === da;
        if (uc.hasOwnProperty(u)) {
          var g = uc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Kn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Kn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Kn[t] = !0, !0) : y ? !0 : gr(t, a, v, !1) ? (Kn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === hn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Kn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ad(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      Hi(e, t) || Sv(e, t, a);
    }
    var Pi = 1, ts = 2, Zl = 4, Km = Pi | ts | Zl, ns = null;
    function rs(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function Zm() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function Cv(e) {
      return e === ns;
    }
    function sc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fi ? t.parentNode : t;
    }
    var Jt = null, Cl = null, Vi = null;
    function qu(e) {
      var t = Do(e);
      if (t) {
        if (typeof Jt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          Jt(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      Jt = e;
    }
    function cc(e) {
      Cl ? Vi ? Vi.push(e) : Vi = [e] : Cl = e;
    }
    function as() {
      return Cl !== null || Vi !== null;
    }
    function is() {
      if (Cl) {
        var e = Cl, t = Vi;
        if (Cl = null, Vi = null, qu(e), t)
          for (var a = 0; a < t.length; a++)
            qu(t[a]);
      }
    }
    var Jl = function(e, t) {
      return e(t);
    }, ld = function() {
    }, ud = !1;
    function Jm() {
      var e = as();
      e && (ld(), is());
    }
    function od(e, t, a) {
      if (ud)
        return e(t, a);
      ud = !0;
      try {
        return Jl(e, t, a);
      } finally {
        ud = !1, Jm();
      }
    }
    function fc(e, t, a) {
      Jl = e, ld = a;
    }
    function dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function sd(e, t, a) {
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
          return !!(a.disabled && dc(t));
        default:
          return !1;
      }
    }
    function eu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (sd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (vn)
      try {
        var tu = {};
        Object.defineProperty(tu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", tu, tu), window.removeEventListener("test", tu, tu);
      } catch {
        ls = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var cd = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var fd = document.createElement("react");
      cd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          fd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, F(), a.apply(i, le), w = !1;
        }
        var xe, Tt = !1, mt = !1;
        function D(O) {
          if (xe = O.error, Tt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), fd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), fd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Tt ? mt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", D), !b)
          return F(), Tv.apply(this, arguments);
      };
    }
    var ey = cd, Rl = !1, li = null, us = !1, Tl = null, gi = {
      onError: function(e) {
        Rl = !0, li = e;
      }
    };
    function nu(e, t, a, i, u, s, f, p, v) {
      Rl = !1, li = null, ey.apply(gi, arguments);
    }
    function Bi(e, t, a, i, u, s, f, p, v) {
      if (nu.apply(this, arguments), Rl) {
        var y = pd();
        us || (us = !0, Tl = y);
      }
    }
    function dd() {
      if (us) {
        var e = Tl;
        throw us = !1, Tl = null, e;
      }
    }
    function ty() {
      return Rl;
    }
    function pd() {
      if (Rl) {
        var e = li;
        return Rl = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Na(e) {
      return e._reactInternals;
    }
    function os(e) {
      return e._reactInternals !== void 0;
    }
    function Xu(e, t) {
      e._reactInternals = t;
    }
    var Oe = (
      /*                      */
      0
    ), wl = (
      /*                */
      1
    ), ln = (
      /*                    */
      2
    ), Ze = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), Vt = (
      /*                 */
      32
    ), Si = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), Tn = (
      /*            */
      256
    ), Kr = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), cn = (
      /*                      */
      2048
    ), Ua = (
      /*                    */
      4096
    ), xl = (
      /*                   */
      8192
    ), ss = (
      /*             */
      16384
    ), pc = cn | Ze | Si | Kr | za | ss, wv = (
      /*               */
      32767
    ), ya = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), cs = (
      /* */
      131072
    ), vd = (
      /*                       */
      1048576
    ), hd = (
      /*                    */
      2097152
    ), Zr = (
      /*                 */
      4194304
    ), bl = (
      /*                */
      8388608
    ), Jr = (
      /*               */
      16777216
    ), ru = (
      /*              */
      33554432
    ), Ku = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ze | za | 0
    ), ea = ln | Ze | Ut | Vt | Kr | Ua | xl, Er = Ze | Si | Kr | xl, Aa = cn | Ut, ar = Zr | bl | hd, $i = A.ReactCurrentOwner;
    function ga(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | Ua)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function md(e) {
      if (e.tag === De) {
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
    function vc(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function yd(e) {
      return ga(e) === e;
    }
    function Sa(e) {
      {
        var t = $i.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Na(e);
      return u ? ga(u) === u : !1;
    }
    function ta(e) {
      if (ga(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = ga(e);
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
              return ta(s), e;
            if (v === u)
              return ta(s), t;
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
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ja(e) {
      var t = un(e);
      return t !== null ? gd(t) : null;
    }
    function gd(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = gd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = un(e);
      return t !== null ? hc(t) : null;
    }
    function hc(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = hc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var mc = G.unstable_scheduleCallback, bv = G.unstable_cancelCallback, yc = G.unstable_shouldYield, _v = G.unstable_requestPaint, gn = G.unstable_now, Sd = G.unstable_getCurrentPriorityLevel, gc = G.unstable_ImmediatePriority, au = G.unstable_UserBlockingPriority, Ei = G.unstable_NormalPriority, kv = G.unstable_LowPriority, Sc = G.unstable_IdlePriority, Zu = G.unstable_yieldValue, Dv = G.unstable_setDisableYieldValue, Ii = null, Vn = null, te = null, Fa = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ed(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = rt({}, e, {
          getLaneLabelMap: Yi,
          injectProfilingHooks: Ov
        })), Ii = t.inject(e), Vn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Cd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(Ii, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ju(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (Je) {
            var i;
            switch (t) {
              case Ln:
                i = gc;
                break;
              case Qi:
                i = au;
                break;
              case Ci:
                i = Ei;
                break;
              case fo:
                i = Sc;
                break;
              default:
                i = Ei;
                break;
            }
            Vn.onCommitFiberRoot(Ii, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ha(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(Ii, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function iu(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(Ii, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function jn(e) {
      if (typeof Zu == "function" && (Dv(e), Nt(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(Ii, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ov(e) {
      te = e;
    }
    function Yi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < hs; a++) {
          var i = ry(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _l(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Ec() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function eo(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function na() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function kl(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Cc() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Lv(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Rc() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Mv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function fs() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function ui(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function to() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function lu(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function Rd(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function no() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Nv(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function Td() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function fn(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Tc() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function wc() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function wd(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function xc(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), we = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), ct = (
      /*               */
      8
    ), Ca = (
      /*              */
      16
    ), ro = Math.clz32 ? Math.clz32 : Cr, vs = Math.log, ny = Math.LN2;
    function Cr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (vs(t) / ny | 0) | 0;
    }
    var hs = 31, B = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), ke = (
      /*                        */
      1
    ), ir = (
      /*    */
      2
    ), Ra = (
      /*             */
      4
    ), Wi = (
      /*            */
      8
    ), Pa = (
      /*                     */
      16
    ), ao = (
      /*                */
      32
    ), uu = (
      /*                       */
      4194240
    ), io = (
      /*                        */
      64
    ), bc = (
      /*                        */
      128
    ), _c = (
      /*                        */
      256
    ), kc = (
      /*                        */
      512
    ), Dc = (
      /*                        */
      1024
    ), Oc = (
      /*                        */
      2048
    ), ou = (
      /*                        */
      4096
    ), Lc = (
      /*                        */
      8192
    ), lo = (
      /*                        */
      16384
    ), uo = (
      /*                       */
      32768
    ), Mc = (
      /*                       */
      65536
    ), ms = (
      /*                       */
      131072
    ), Nc = (
      /*                       */
      262144
    ), zc = (
      /*                       */
      524288
    ), Uc = (
      /*                       */
      1048576
    ), Ac = (
      /*                       */
      2097152
    ), oo = (
      /*                            */
      130023424
    ), su = (
      /*                             */
      4194304
    ), jc = (
      /*                             */
      8388608
    ), Fc = (
      /*                             */
      16777216
    ), xd = (
      /*                             */
      33554432
    ), Hc = (
      /*                             */
      67108864
    ), zv = su, ys = (
      /*          */
      134217728
    ), bd = (
      /*                          */
      268435455
    ), so = (
      /*               */
      268435456
    ), Dl = (
      /*                        */
      536870912
    ), Rr = (
      /*                   */
      1073741824
    );
    function ry(e) {
      {
        if (e & ke)
          return "Sync";
        if (e & ir)
          return "InputContinuousHydration";
        if (e & Ra)
          return "InputContinuous";
        if (e & Wi)
          return "DefaultHydration";
        if (e & Pa)
          return "Default";
        if (e & ao)
          return "TransitionHydration";
        if (e & uu)
          return "Transition";
        if (e & oo)
          return "Retry";
        if (e & ys)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & Rr)
          return "Offscreen";
      }
    }
    var nn = -1, Pc = io, ra = su;
    function cu(e) {
      switch (On(e)) {
        case ke:
          return ke;
        case ir:
          return ir;
        case Ra:
          return Ra;
        case Wi:
          return Wi;
        case Pa:
          return Pa;
        case ao:
          return ao;
        case io:
        case bc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
          return e & uu;
        case su:
        case jc:
        case Fc:
        case xd:
        case Hc:
          return e & oo;
        case ys:
          return ys;
        case so:
          return so;
        case Dl:
          return Dl;
        case Rr:
          return Rr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function fu(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & bd;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = cu(p);
        else {
          var v = f & s;
          v !== B && (i = cu(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = cu(y) : s !== B && (i = cu(s));
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
          g === Pa && (b & uu) !== B
        )
          return t;
      }
      (i & Ra) !== B && (i |= a & Pa);
      var w = e.entangledLanes;
      if (w !== B)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var F = Ll(U), le = 1 << F;
          i |= M[F], U &= ~le;
        }
      return i;
    }
    function Uv(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Ll(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Av(e, t) {
      switch (e) {
        case ke:
        case ir:
        case Ra:
          return t + 250;
        case Wi:
        case Pa:
        case ao:
        case io:
        case bc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
          return t + 5e3;
        case su:
        case jc:
        case Fc:
        case xd:
        case Hc:
          return nn;
        case ys:
        case so:
        case Dl:
        case Rr:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function jv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ll(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === B || (v & u) !== B) && (s[p] = Av(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function _d(e) {
      return cu(e.pendingLanes);
    }
    function Ol(e) {
      var t = e.pendingLanes & ~Rr;
      return t !== B ? t : t & Rr ? Rr : B;
    }
    function kd(e) {
      return (e & ke) !== B;
    }
    function gs(e) {
      return (e & bd) !== B;
    }
    function Fv(e) {
      return (e & oo) === e;
    }
    function Hv(e) {
      var t = ke | Ra | Pa;
      return (e & t) === B;
    }
    function Pv(e) {
      return (e & uu) === e;
    }
    function Ss(e, t) {
      var a = ir | Ra | Wi | Pa;
      return (t & a) !== B;
    }
    function Vv(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function Dd(e) {
      return (e & uu) !== B;
    }
    function Bv() {
      var e = Pc;
      return Pc <<= 1, (Pc & uu) === B && (Pc = io), e;
    }
    function aa() {
      var e = ra;
      return ra <<= 1, (ra & oo) === B && (ra = su), e;
    }
    function On(e) {
      return e & -e;
    }
    function co(e) {
      return On(e);
    }
    function Ll(e) {
      return 31 - ro(e);
    }
    function Vc(e) {
      return Ll(e);
    }
    function ia(e, t) {
      return (e & t) !== B;
    }
    function du(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function Es(e, t) {
      return e & ~t;
    }
    function Bc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function $v(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Cs(e) {
      for (var t = [], a = 0; a < hs; a++)
        t.push(e);
      return t;
    }
    function pu(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = Vc(t);
      i[u] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ll(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function $c(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ic(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ll(f), v = 1 << p;
        i[p] = B, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function Od(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ll(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Yv(e, t) {
      var a = On(t), i;
      switch (a) {
        case Ra:
          i = ir;
          break;
        case Pa:
          i = Wi;
          break;
        case io:
        case bc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case su:
        case jc:
        case Fc:
        case xd:
        case Hc:
          i = ao;
          break;
        case Dl:
          i = so;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function Yc(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ld(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Rs(e, t) {
      return null;
    }
    var Ln = ke, Qi = Ra, Ci = Pa, fo = Dl, po = Fn;
    function Va() {
      return po;
    }
    function wn(e) {
      po = e;
    }
    function Tr(e, t) {
      var a = po;
      try {
        return po = e, t();
      } finally {
        po = a;
      }
    }
    function iy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ly(e, t) {
      return e > t ? e : t;
    }
    function vo(e, t) {
      return e !== 0 && e < t;
    }
    function lr(e) {
      var t = On(e);
      return vo(Ln, t) ? vo(Qi, t) ? gs(t) ? Ci : fo : Qi : Ln;
    }
    function Wc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pe;
    function ho(e) {
      pe = e;
    }
    function Md(e) {
      pe(e);
    }
    var Qc;
    function uy(e) {
      Qc = e;
    }
    var mo;
    function Gc(e) {
      mo = e;
    }
    var qc;
    function Wv(e) {
      qc = e;
    }
    var Nd;
    function Qv(e) {
      Nd = e;
    }
    var Ts = !1, yo = [], dn = null, Jn = null, Mr = null, go = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), er = [], Gv = [
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
    function Ri(e) {
      return Gv.indexOf(e) > -1;
    }
    function oy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function zd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          Jn = null;
          break;
        case "mouseover":
        case "mouseout":
          Mr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          go.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          So.delete(i);
          break;
        }
      }
    }
    function Eo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = oy(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && Qc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function qv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return dn = Eo(dn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Jn = Eo(Jn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Mr = Eo(Mr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return go.set(y, Eo(go.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return So.set(b, Eo(So.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ud(e) {
      var t = Us(e.target);
      if (t !== null) {
        var a = ga(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = md(a);
            if (u !== null) {
              e.blockedOn = u, Nd(e.priority, function() {
                mo(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (Wc(s)) {
              e.blockedOn = vc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function sy(e) {
      for (var t = qc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < er.length && vo(t, er[i].priority); i++)
        ;
      er.splice(i, 0, a), i === 0 && Ud(a);
    }
    function vu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          rs(s), u.target.dispatchEvent(s), Zm();
        } else {
          var f = Do(i);
          return f !== null && Qc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Xc(e, t, a) {
      vu(e) && a.delete(t);
    }
    function Ba() {
      Ts = !1, dn !== null && vu(dn) && (dn = null), Jn !== null && vu(Jn) && (Jn = null), Mr !== null && vu(Mr) && (Mr = null), go.forEach(Xc), So.forEach(Xc);
    }
    function ht(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ts || (Ts = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Ba)));
    }
    function xn(e) {
      if (yo.length > 0) {
        ht(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      dn !== null && ht(dn, e), Jn !== null && ht(Jn, e), Mr !== null && ht(Mr, e);
      var i = function(p) {
        return ht(p, e);
      };
      go.forEach(i), So.forEach(i);
      for (var u = 0; u < er.length; u++) {
        var s = er[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; er.length > 0; ) {
        var f = er[0];
        if (f.blockedOn !== null)
          break;
        Ud(f), f.blockedOn === null && er.shift();
      }
    }
    var on = A.ReactCurrentBatchConfig, Bn = !0;
    function la(e) {
      Bn = !!e;
    }
    function Co() {
      return Bn;
    }
    function $n(e, t, a) {
      var i = Kc(t), u;
      switch (i) {
        case Ln:
          u = ws;
          break;
        case Qi:
          u = hu;
          break;
        case Ci:
        default:
          u = Ro;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ws(e, t, a, i) {
      var u = Va(), s = on.transition;
      on.transition = null;
      try {
        wn(Ln), Ro(e, t, a, i);
      } finally {
        wn(u), on.transition = s;
      }
    }
    function hu(e, t, a, i) {
      var u = Va(), s = on.transition;
      on.transition = null;
      try {
        wn(Qi), Ro(e, t, a, i);
      } finally {
        wn(u), on.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      Bn && Ad(e, t, a, i);
    }
    function Ad(e, t, a, i) {
      var u = wr(e, t, a, i);
      if (u === null) {
        by(e, t, i, Ml, a), zd(e, i);
        return;
      }
      if (qv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (zd(e, i), t & Zl && Ri(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Md(s);
          var f = wr(e, t, a, i);
          if (f === null && by(e, t, i, Ml, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Ml = null;
    function wr(e, t, a, i) {
      Ml = null;
      var u = sc(i), s = Us(u);
      if (s !== null) {
        var f = ga(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = md(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (Wc(y))
              return vc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ml = s, null;
    }
    function Kc(e) {
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
          return Qi;
        case "message": {
          var t = Sd();
          switch (t) {
            case gc:
              return Ln;
            case au:
              return Qi;
            case Ei:
            case kv:
              return Ci;
            case Sc:
              return fo;
            default:
              return Ci;
          }
        }
        default:
          return Ci;
      }
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Gi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Zc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function jd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var $a = null, wo = null, Ia = null;
    function Jc(e) {
      return $a = e, wo = bs(), !0;
    }
    function xs() {
      $a = null, wo = null, Ia = null;
    }
    function ef() {
      if (Ia)
        return Ia;
      var e, t = wo, a = t.length, i, u = bs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ia = u.slice(e, p), Ia;
    }
    function bs() {
      return "value" in $a ? $a.value : $a.textContent;
    }
    function mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function tr() {
      return !0;
    }
    function qi() {
      return !1;
    }
    function Sn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = tr : this.isDefaultPrevented = qi, this.isPropagationStopped = qi, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = tr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = tr);
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
        isPersistent: tr
      }), t;
    }
    var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, tf = Sn(In), yu = rt({}, In, {
      view: 0,
      detail: 0
    }), Fd = Sn(yu), Hd, Ti, xo;
    function Pd(e) {
      e !== xo && (xo && e.type === "mousemove" ? (Hd = e.screenX - xo.screenX, Ti = e.screenY - xo.screenY) : (Hd = 0, Ti = 0), xo = e);
    }
    var wi = rt({}, yu, {
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
      getModifierState: Vd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Pd(e), Hd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ti;
      }
    }), nf = Sn(wi), gu = rt({}, wi, {
      dataTransfer: 0
    }), Xv = Sn(gu), Kv = rt({}, yu, {
      relatedTarget: 0
    }), _s = Sn(Kv), rf = rt({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Sn(rf), fy = rt({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zv = Sn(fy), Jv = rt({}, In, {
      data: 0
    }), Nl = Sn(Jv), dy = Nl, bo = {
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
    }, eh = {
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
        var t = bo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? eh[e.keyCode] || "Unidentified" : "";
    }
    var py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function th(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = py[e];
      return i ? !!a[i] : !1;
    }
    function Vd(e) {
      return th;
    }
    var vy = rt({}, yu, {
      key: bn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), nh = Sn(vy), rh = rt({}, wi, {
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
    }), ah = Sn(rh), Ya = rt({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vd
    }), Bd = Sn(Ya), hy = rt({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zl = Sn(hy), af = rt({}, wi, {
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
    }), Su = Sn(af), lf = [9, 13, 27, 32], uf = 229, ks = vn && "CompositionEvent" in window, Ds = null;
    vn && "documentMode" in document && (Ds = document.documentMode);
    var $d = vn && "TextEvent" in window && !Ds, ih = vn && (!ks || Ds && Ds > 8 && Ds <= 11), Id = 32, Yd = String.fromCharCode(Id);
    function of() {
      hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Os = !1;
    function lh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Wd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function my(e, t) {
      return e === "keydown" && t.keyCode === uf;
    }
    function Qd(e, t) {
      switch (e) {
        case "keyup":
          return lf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== uf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function sf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ls(e) {
      return e.locale === "ko";
    }
    var Ul = !1;
    function cf(e, t, a, i, u) {
      var s, f;
      if (ks ? s = Wd(t) : Ul ? Qd(t, i) && (s = "onCompositionEnd") : my(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ih && !Ls(i) && (!Ul && s === "onCompositionStart" ? Ul = Jc(u) : s === "onCompositionEnd" && Ul && (f = ef()));
      var p = dh(a, s);
      if (p.length > 0) {
        var v = new Nl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = sf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function uh(e, t) {
      switch (e) {
        case "compositionend":
          return sf(t);
        case "keypress":
          var a = t.which;
          return a !== Id ? null : (Os = !0, Yd);
        case "textInput":
          var i = t.data;
          return i === Yd && Os ? null : i;
        default:
          return null;
      }
    }
    function yy(e, t) {
      if (Ul) {
        if (e === "compositionend" || !ks && Qd(e, t)) {
          var a = ef();
          return xs(), Ul = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ih && !Ls(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ff(e, t, a, i, u) {
      var s;
      if ($d ? s = uh(t, i) : s = yy(t, i), !s)
        return null;
      var f = dh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new dy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      cf(e, t, a, i, u), ff(e, t, a, i, u);
    }
    var Ms = {
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
    function oh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ms[e.type] : t === "textarea";
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
    function df(e) {
      if (!vn)
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
      cc(i);
      var u = dh(t, "onChange");
      if (u.length > 0) {
        var s = new tf("onChange", "change", null, a, i);
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
      r(t, o, e, sc(e)), od(m, t);
    }
    function m(e) {
      k0(e, 0);
    }
    function E(e) {
      var t = gf(e);
      if (Vu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    vn && (z = df("input") && (!document.documentMode || document.documentMode > 9));
    function Y(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", $);
    }
    function W() {
      l && (l.detachEvent("onpropertychange", $), l = null, o = null);
    }
    function $(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (W(), Y(t, a)) : e === "focusout" && W();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Mn(e, t) {
      if (e === "click")
        return E(t);
    }
    function k(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window, v, y;
      if (c(p) ? v = T : oh(p) ? z ? v = k : (v = ye, y = se) : Ee(p) && (v = Mn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function K() {
      Br("onMouseEnter", ["mouseout", "mouseover"]), Br("onMouseLeave", ["mouseout", "mouseover"]), Br("onPointerEnter", ["pointerout", "pointerover"]), Br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Us(y) || up(y)))
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
          if (w = a, M = U ? Us(U) : null, M !== null) {
            var F = ga(M);
            (M !== F || M.tag !== ue && M.tag !== Be) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var le = nf, Le = "onMouseLeave", xe = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = ah, Le = "onPointerLeave", xe = "onPointerEnter", Tt = "pointer");
          var mt = w == null ? g : gf(w), D = M == null ? g : gf(M), H = new le(Le, Tt + "leave", w, i, u);
          H.target = mt, H.relatedTarget = D;
          var O = null, Q = Us(u);
          if (Q === a) {
            var fe = new le(xe, Tt + "enter", M, i, u);
            fe.target = D, fe.relatedTarget = mt, O = fe;
          }
          NR(e, H, O, w, M);
        }
      }
    }
    function je(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : je;
    function Fe(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ot(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Xi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Fi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(Ot(a));
      }
    }
    function Sy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return pR(e, u, s, f, p);
    }
    function pR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Fi) && (f = s + a), g === i && (u === 0 || g.nodeType === Fi) && (p = s + u), g.nodeType === Fi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
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
    function vR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Xi(e, f), g = Xi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Fi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function hR(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function mR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
        if (mR(t))
          e = t.contentWindow;
        else
          return t;
        t = Sl(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yR() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? SR(e) : null
      };
    }
    function gR(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && hR(a)) {
        i !== null && Ey(a) && ER(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
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
    function SR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Sy(e), t || {
        start: 0,
        end: 0
      };
    }
    function ER(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : vR(e, t);
    }
    var CR = vn && "documentMode" in document && document.documentMode <= 11;
    function RR() {
      hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var pf = null, Cy = null, Gd = null, Ry = !1;
    function TR(e) {
      if ("selectionStart" in e && Ey(e))
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
    function wR(e) {
      return e.window === e ? e.document : e.nodeType === ai ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = wR(a);
      if (!(Ry || pf == null || pf !== Sl(i))) {
        var u = TR(pf);
        if (!Gd || !Fe(Gd, u)) {
          Gd = u;
          var s = dh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new tf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = pf;
          }
        }
      }
    }
    function xR(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window;
      switch (t) {
        case "focusin":
          (oh(p) || p.contentEditable === "true") && (pf = p, Cy = a, Gd = null);
          break;
        case "focusout":
          pf = null, Cy = null, Gd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (CR)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function sh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var vf = {
      animationend: sh("Animation", "AnimationEnd"),
      animationiteration: sh("Animation", "AnimationIteration"),
      animationstart: sh("Animation", "AnimationStart"),
      transitionend: sh("Transition", "TransitionEnd")
    }, Ty = {}, E0 = {};
    vn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete vf.animationend.animation, delete vf.animationiteration.animation, delete vf.animationstart.animation), "TransitionEvent" in window || delete vf.transitionend.transition);
    function ch(e) {
      if (Ty[e])
        return Ty[e];
      if (!vf[e])
        return e;
      var t = vf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return Ty[e] = t[a];
      return e;
    }
    var C0 = ch("animationend"), R0 = ch("animationiteration"), T0 = ch("animationstart"), w0 = ch("transitionend"), x0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      x0.set(e, t), hr(t, [e]);
    }
    function bR() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(C0, "onAnimationEnd"), _o(R0, "onAnimationIteration"), _o(T0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(w0, "onTransitionEnd");
    }
    function _R(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = tf, y = t;
        switch (t) {
          case "keypress":
            if (mu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = nh;
            break;
          case "focusin":
            y = "focus", v = _s;
            break;
          case "focusout":
            y = "blur", v = _s;
            break;
          case "beforeblur":
          case "afterblur":
            v = _s;
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
            v = nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Bd;
            break;
          case C0:
          case R0:
          case T0:
            v = cy;
            break;
          case w0:
            v = zl;
            break;
          case "scroll":
            v = Fd;
            break;
          case "wheel":
            v = Su;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ah;
            break;
        }
        var g = (s & Zl) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = LR(a, p, i.type, g, b);
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
    bR(), K(), n(), RR(), of();
    function kR(e, t, a, i, u, s, f) {
      _R(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (Re(e, t, a, i, u), L(e, t, a, i, u), xR(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var qd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(qd));
    function _0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Bi(i, t, void 0, e), e.currentTarget = null;
    }
    function DR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          _0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, M = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          _0(e, M, w), i = b;
        }
    }
    function k0(e, t) {
      for (var a = (t & Zl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        DR(s, f, a);
      }
      dd();
    }
    function OR(e, t, a, i, u) {
      var s = sc(a), f = [];
      kR(f, e, i, a, s, t), k0(f, t);
    }
    function En(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = lw(t), u = zR(e);
      i.has(u) || (D0(t, e, ts, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zl), D0(a, e, i, t);
    }
    var fh = "_reactListening" + Math.random().toString(36).slice(2);
    function Xd(e) {
      if (!e[fh]) {
        e[fh] = !0, it.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === ai ? e : e.ownerDocument;
        t !== null && (t[fh] || (t[fh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = $n(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Zc(e, t, s, f) : Gi(e, t, s) : f !== void 0 ? jd(e, t, s, f) : To(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & Pi) && !(t & ts)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === re || v === he) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === he)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === re || b === he) {
                    var w = g.stateNode.containerInfo;
                    if (O0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Us(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === ue || U === Be) {
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
      od(function() {
        return OR(e, t, a, s);
      });
    }
    function Kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function LR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === ue && w !== null && (g = w, p !== null)) {
          var U = eu(y, p);
          U != null && v.push(Kd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function dh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = eu(u, a);
          y != null && i.unshift(Kd(u, y, v));
          var g = eu(u, t);
          g != null && i.push(Kd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function hf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function MR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = hf(s))
        u++;
      for (var f = 0, p = i; p; p = hf(p))
        f++;
      for (; u - f > 0; )
        a = hf(a), u--;
      for (; f - u > 0; )
        i = hf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = hf(a), i = hf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var M = eu(p, s);
            M != null && f.unshift(Kd(p, M, w));
          } else if (!u) {
            var U = eu(p, s);
            U != null && f.push(Kd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NR(e, t, a, i, u) {
      var s = i && u ? MR(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function zR(e, t) {
      return e + "__bubble";
    }
    var Wa = !1, Zd = "dangerouslySetInnerHTML", ph = "suppressContentEditableWarning", ko = "suppressHydrationWarning", M0 = "autoFocus", Ns = "children", zs = "style", vh = "__html", _y, hh, Jd, N0, mh, z0, U0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, hh = function(e, t) {
      oc(e, t), rd(e, t), Ev(e, t, {
        registrationNameDependencies: lt,
        possibleRegistrationNames: en
      });
    }, z0 = vn && !document.documentMode, Jd = function(e, t, a) {
      if (!Wa) {
        var i = yh(a), u = yh(t);
        u !== i && (Wa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, N0 = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, mh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === ji ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var UR = /\r\n?/g, AR = /\u0000|\uFFFD/g;
    function yh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UR, `
`).replace(AR, "");
    }
    function gh(e, t, a, i) {
      var u = yh(t), s = yh(e);
      if (s !== u && (i && (Wa || (Wa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && me))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === ai ? e : e.ownerDocument;
    }
    function jR() {
    }
    function Sh(e) {
      e.onclick = jR;
    }
    function FR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === zs)
            f && Object.freeze(f), cv(t, f);
          else if (s === Zd) {
            var p = f ? f[vh] : void 0;
            p != null && Jp(t, p);
          } else if (s === Ns)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ac(t, f);
            } else typeof f == "number" && ac(t, "" + f);
          else s === ph || s === ko || s === M0 || (lt.hasOwnProperty(s) ? f != null && (typeof f != "function" && mh(s, f), s === "onScroll" && En("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function HR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === zs ? cv(e, f) : s === Zd ? Jp(e, f) : s === Ns ? ac(e, f) : ha(e, s, f, i);
      }
    }
    function PR(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === ji && (p = nc(e)), p === ji) {
        if (u = Hi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === ji && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function VR(e, t) {
      return A0(t).createTextNode(e);
    }
    function BR(e, t, a, i) {
      var u = Hi(t, a);
      hh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < qd.length; f++)
            En(qd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), En("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = Xo(e, a), En("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = Gf(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (lc(t, s), FR(t, e, i, s, u), t) {
        case "input":
          La(e), X(e, a, !1);
          break;
        case "textarea":
          La(e), Zp(e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Sh(e);
          break;
      }
    }
    function $R(e, t, a, i, u) {
      hh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Gf(e, a), p = Gf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Sh(e);
          break;
      }
      lc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === zs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Zd || v === Ns || v === ph || v === ko || v === M0 || (lt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === zs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Zd) {
            var U = w ? w[vh] : void 0, F = M ? M[vh] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === Ns ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === ph || v === ko || (lt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && mh(v, w), v === "onScroll" && En("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Jo(g, p[zs]), (s = s || []).push(zs, g)), s;
    }
    function IR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = Hi(a, i), f = Hi(a, u);
      switch (HR(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Vm(e, u);
          break;
      }
    }
    function YR(e) {
      {
        var t = e.toLowerCase();
        return uc.hasOwnProperty(t) && uc[t] || null;
      }
    }
    function WR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Hi(t, a), hh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < qd.length; y++)
            En(qd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          C(e, a), En("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          Ko(e, a), En("invalid", e);
          break;
        case "textarea":
          Xp(e, a), En("invalid", e);
          break;
      }
      lc(t, a);
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
          var F = a[U];
          if (U === Ns)
            typeof F == "string" ? e.textContent !== F && (a[ko] !== !0 && gh(e.textContent, F, s, f), M = [Ns, F]) : typeof F == "number" && e.textContent !== "" + F && (a[ko] !== !0 && gh(e.textContent, F, s, f), M = [Ns, "" + F]);
          else if (lt.hasOwnProperty(U))
            F != null && (typeof F != "function" && mh(U, F), U === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Le = p && ze ? null : br(U);
            if (a[ko] !== !0) {
              if (!(U === ph || U === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Zd) {
                  var xe = e.innerHTML, Tt = F ? F[vh] : void 0;
                  if (Tt != null) {
                    var mt = U0(e, Tt);
                    mt !== xe && Jd(U, xe, mt);
                  }
                } else if (U === zs) {
                  if (v.delete(U), z0) {
                    var D = qm(F);
                    le = e.getAttribute("style"), D !== le && Jd(U, le, D);
                  }
                } else if (p && !ze)
                  v.delete(U.toLowerCase()), le = di(e, U, F), F !== le && Jd(U, le, F);
                else if (!mn(U, Le, p) && !It(U, F, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), le = va(e, U, F, Le);
                  else {
                    var O = i;
                    if (O === ji && (O = nc(t)), O === ji)
                      v.delete(U.toLowerCase());
                    else {
                      var Q = YR(U);
                      Q !== null && Q !== U && (H = !0, v.delete(Q)), v.delete(U);
                    }
                    le = di(e, U, F);
                  }
                  var fe = ze;
                  !fe && F !== le && !H && Jd(U, le, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && N0(v), t) {
        case "input":
          La(e), X(e, a, !0);
          break;
        case "textarea":
          La(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Sh(e);
          break;
      }
      return M;
    }
    function QR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GR(e, t, a) {
      switch (t) {
        case "input":
          Ae(e, a);
          return;
        case "textarea":
          qf(e, a);
          return;
        case "select":
          Bm(e, a);
          return;
      }
    }
    var ep = function() {
    }, tp = function() {
    };
    {
      var qR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
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
      ], XR = j0.concat(["button"]), KR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      tp = function(e, t) {
        var a = rt({}, e || F0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), XR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZR = function(e, t) {
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
            return KR.indexOf(t) === -1;
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
      }, JR = function(e, t) {
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
      }, H0 = {};
      ep = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZR(e, u) ? null : i, f = s ? null : JR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
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
    var Eh = "suppressHydrationWarning", Ch = "$", Rh = "/$", np = "$?", rp = "$!", eT = "style", My = null, Ny = null;
    function tT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ai:
        case Xl: {
          t = i === ai ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Kf(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Kf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = tp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function nT(e, t, a) {
      {
        var i = e, u = Kf(i.namespace, t), s = tp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Ek(e) {
      return e;
    }
    function rT(e) {
      My = Co(), Ny = yR();
      var t = null;
      return la(!1), t;
    }
    function aT(e) {
      gR(Ny), la(My), My = null, Ny = null;
    }
    function iT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ep(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = tp(f.ancestorInfo, e);
          ep(null, p, v);
        }
        s = f.namespace;
      }
      var y = PR(e, t, a, s);
      return lp(u, y), Vy(y, t), y;
    }
    function lT(e, t) {
      e.appendChild(t);
    }
    function uT(e, t, a, i, u) {
      switch (BR(e, t, a, i), t) {
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
    function oT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = tp(f.ancestorInfo, t);
          ep(null, p, v);
        }
      }
      return $R(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function sT(e, t, a, i) {
      {
        var u = a;
        ep(null, e, u.ancestorInfo);
      }
      var s = VR(e, t);
      return lp(i, s), s;
    }
    function cT() {
      var e = window.event;
      return e === void 0 ? Ci : Kc(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, fT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, P0 = typeof Promise == "function" ? Promise : void 0, dT = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(pT);
    } : Uy;
    function pT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vT(e, t, a, i) {
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
    function hT(e, t, a, i, u, s) {
      IR(e, t, a, i, u), Vy(e, u);
    }
    function V0(e) {
      ac(e, "");
    }
    function mT(e, t, a) {
      e.nodeValue = a;
    }
    function yT(e, t) {
      e.appendChild(t);
    }
    function gT(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Sh(a);
    }
    function ST(e, t, a) {
      e.insertBefore(t, a);
    }
    function ET(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function CT(e, t) {
      e.removeChild(t);
    }
    function RT(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === Rh)
            if (i === 0) {
              e.removeChild(u), xn(t);
              return;
            } else
              i--;
          else (s === Ch || s === np || s === rp) && i++;
        }
        a = u;
      } while (a);
      xn(t);
    }
    function TT(e, t) {
      e.nodeType === An ? jy(e.parentNode, t) : e.nodeType === Xr && jy(e, t), xn(e);
    }
    function wT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xT(e) {
      e.nodeValue = "";
    }
    function bT(e, t) {
      e = e;
      var a = t[eT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ic("display", i);
    }
    function _T(e, t) {
      e.nodeValue = t;
    }
    function kT(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === ai && e.documentElement && e.removeChild(e.documentElement);
    }
    function DT(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function OT(e, t) {
      return t === "" || e.nodeType !== Fi ? null : e;
    }
    function LT(e) {
      return e.nodeType !== An ? null : e;
    }
    function B0(e) {
      return e.data === np;
    }
    function Fy(e) {
      return e.data === rp;
    }
    function MT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function NT(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Fi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === Ch || a === rp || a === np)
            break;
          if (a === Rh)
            return null;
        }
      }
      return e;
    }
    function ap(e) {
      return Th(e.nextSibling);
    }
    function zT(e) {
      return Th(e.firstChild);
    }
    function UT(e) {
      return Th(e.firstChild);
    }
    function AT(e) {
      return Th(e.nextSibling);
    }
    function jT(e, t, a, i, u, s, f) {
      lp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & we) !== Ce;
      return WR(e, t, a, p, i, y, f);
    }
    function FT(e, t, a, i) {
      return lp(a, e), a.mode & we, QR(e, t);
    }
    function HT(e, t) {
      lp(t, e);
    }
    function PT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Rh) {
            if (a === 0)
              return ap(t);
            a--;
          } else (i === Ch || i === rp || i === np) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === Ch || i === rp || i === np) {
            if (a === 0)
              return t;
            a--;
          } else i === Rh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function VT(e) {
      xn(e);
    }
    function BT(e) {
      xn(e);
    }
    function $T(e) {
      return e !== "head" && e !== "body";
    }
    function IT(e, t, a, i) {
      var u = !0;
      gh(t.nodeValue, a, i, u);
    }
    function YT(e, t, a, i, u, s) {
      if (t[Eh] !== !0) {
        var f = !0;
        gh(i.nodeValue, u, s, f);
      }
    }
    function WT(e, t) {
      t.nodeType === Xr ? ky(e, t) : t.nodeType === An || Dy(e, t);
    }
    function QT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? ky(a, t) : t.nodeType === An || Dy(a, t));
      }
    }
    function GT(e, t, a, i, u) {
      (u || t[Eh] !== !0) && (i.nodeType === Xr ? ky(a, i) : i.nodeType === An || Dy(a, i));
    }
    function qT(e, t, a) {
      Oy(e, t);
    }
    function XT(e, t) {
      Ly(e, t);
    }
    function KT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function ZT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function JT(e, t, a, i, u, s) {
      (s || t[Eh] !== !0) && Oy(a, i);
    }
    function ew(e, t, a, i, u) {
      (u || t[Eh] !== !0) && Ly(a, i);
    }
    function tw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nw(e) {
      Xd(e);
    }
    var mf = Math.random().toString(36).slice(2), yf = "__reactFiber$" + mf, Hy = "__reactProps$" + mf, ip = "__reactContainer$" + mf, Py = "__reactEvents$" + mf, rw = "__reactListeners$" + mf, aw = "__reactHandles$" + mf;
    function iw(e) {
      delete e[yf], delete e[Hy], delete e[Py], delete e[rw], delete e[aw];
    }
    function lp(e, t) {
      t[yf] = e;
    }
    function wh(e, t) {
      t[ip] = e;
    }
    function I0(e) {
      e[ip] = null;
    }
    function up(e) {
      return !!e[ip];
    }
    function Us(e) {
      var t = e[yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ip] || a[yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = $0(e); u !== null; ) {
              var s = u[yf];
              if (s)
                return s;
              u = $0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[yf] || e[ip];
      return t && (t.tag === ue || t.tag === Be || t.tag === De || t.tag === re) ? t : null;
    }
    function gf(e) {
      if (e.tag === ue || e.tag === Be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function lw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var Y0 = {}, W0 = A.ReactDebugCurrentFrame;
    function bh(e) {
      if (e) {
        var t = e._owner, a = mi(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (bh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), bh(null)), p instanceof Error && !(p.message in Y0) && (Y0[p.message] = !0, bh(u), S("Failed %s type: %s", a, p.message), bh(null));
          }
      }
    }
    var By = [], _h;
    _h = [];
    var Eu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Eu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== _h[Eu] && S("Unexpected Fiber popped."), e.current = By[Eu], By[Eu] = null, _h[Eu] = null, Eu--;
    }
    function oa(e, t, a) {
      Eu++, By[Eu] = e.current, _h[Eu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var oi = {};
    Object.freeze(oi);
    var Cu = Oo(oi), Al = Oo(!1), Iy = oi;
    function Sf(e, t, a) {
      return a && jl(t) ? Iy : Cu.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ef(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function kh() {
      return Al.current;
    }
    function jl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      ua(Al, e), ua(Cu, e);
    }
    function Yy(e) {
      ua(Al, e), ua(Cu, e);
    }
    function G0(e, t, a) {
      {
        if (Cu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(Cu, t, e), oa(Al, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Oh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Iy = Cu.current, oa(Cu, a, e), oa(Al, Al.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(Al, e), ua(Cu, e), oa(Cu, u, e), oa(Al, a, e);
        } else
          ua(Al, e), oa(Al, a, e);
      }
    }
    function uw(e) {
      {
        if (!yd(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (jl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Lh = 1, Ru = null, Wy = !1, Qy = !1;
    function K0(e) {
      Ru === null ? Ru = [e] : Ru.push(e);
    }
    function ow(e) {
      Wy = !0, K0(e);
    }
    function Z0() {
      Wy && Mo();
    }
    function Mo() {
      if (!Qy && Ru !== null) {
        Qy = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = Ru;
          for (wn(Ln); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ru = null, Wy = !1;
        } catch (s) {
          throw Ru !== null && (Ru = Ru.slice(e + 1)), mc(gc, Mo), s;
        } finally {
          wn(t), Qy = !1;
        }
      }
      return null;
    }
    var Cf = [], Rf = 0, Mh = null, Nh = 0, xi = [], bi = 0, As = null, Tu = 1, wu = "";
    function sw(e) {
      return Fs(), (e.flags & vd) !== Oe;
    }
    function cw(e) {
      return Fs(), Nh;
    }
    function fw() {
      var e = wu, t = Tu, a = t & ~dw(t);
      return a.toString(32) + e;
    }
    function js(e, t) {
      Fs(), Cf[Rf++] = Nh, Cf[Rf++] = Mh, Mh = e, Nh = t;
    }
    function J0(e, t, a) {
      Fs(), xi[bi++] = Tu, xi[bi++] = wu, xi[bi++] = As, As = e;
      var i = Tu, u = wu, s = zh(i) - 1, f = i & ~(1 << s), p = a + 1, v = zh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = zh(t) + M, F = p << M, le = F | w, Le = b + u;
        Tu = 1 << U | le, wu = Le;
      } else {
        var xe = p << s, Tt = xe | f, mt = u;
        Tu = 1 << v | Tt, wu = mt;
      }
    }
    function Gy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        js(e, a), J0(e, a, i);
      }
    }
    function zh(e) {
      return 32 - ro(e);
    }
    function dw(e) {
      return 1 << zh(e) - 1;
    }
    function qy(e) {
      for (; e === Mh; )
        Mh = Cf[--Rf], Cf[Rf] = null, Nh = Cf[--Rf], Cf[Rf] = null;
      for (; e === As; )
        As = xi[--bi], xi[bi] = null, wu = xi[--bi], xi[bi] = null, Tu = xi[--bi], xi[bi] = null;
    }
    function pw() {
      return Fs(), As !== null ? {
        id: Tu,
        overflow: wu
      } : null;
    }
    function vw(e, t) {
      Fs(), xi[bi++] = Tu, xi[bi++] = wu, xi[bi++] = As, Tu = t.id, wu = t.overflow, As = e;
    }
    function Fs() {
      zr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, _i = null, Zi = !1, Hs = !1, No = null;
    function hw() {
      Zi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Hs = !0;
    }
    function mw() {
      return Hs;
    }
    function yw(e) {
      var t = e.stateNode.containerInfo;
      return _i = UT(t), Nr = e, Zi = !0, No = null, Hs = !1, !0;
    }
    function gw(e, t, a) {
      return _i = AT(t), Nr = e, Zi = !0, No = null, Hs = !1, a !== null && vw(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case re: {
          WT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & we) !== Ce;
          GT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && QT(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = R_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Hs)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, qT(a, i);
                break;
              case Be:
                var u = t.pendingProps;
                XT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & we) !== Ce;
                JT(
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
                var b = t.pendingProps, w = (e.mode & we) !== Ce;
                ew(
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
          case De: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var F = t.type;
                t.pendingProps, KT(U, F);
                break;
              case Be:
                var le = t.pendingProps;
                ZT(U, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~Ua | ln, Xy(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = DT(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, _i = zT(i), !0) : !1;
        }
        case Be: {
          var u = e.pendingProps, s = OT(t, u);
          return s !== null ? (e.stateNode = s, Nr = e, _i = null, !0) : !1;
        }
        case De: {
          var f = LT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: pw(),
              retryLane: Rr
            };
            e.memoizedState = p;
            var v = T_(f);
            return v.return = e, e.child = v, Nr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & we) !== Ce && (e.flags & $e) === Oe;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (Zi) {
        var t = _i;
        if (!t) {
          Ky(e) && (Xy(Nr, e), Zy()), rE(Nr, e), Zi = !1, Nr = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Ky(e) && (Xy(Nr, e), Zy()), t = ap(a);
          var i = Nr;
          if (!t || !aE(e, t)) {
            rE(Nr, e), Zi = !1, Nr = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function Sw(e, t, a) {
      var i = e.stateNode, u = !Hs, s = jT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ew(e) {
      var t = e.stateNode, a = e.memoizedProps, i = FT(t, a, e);
      if (i) {
        var u = Nr;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & we) !== Ce;
              IT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & we) !== Ce;
              YT(
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
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      HT(a, e);
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return PT(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== re && t.tag !== De; )
        t = t.return;
      Nr = t;
    }
    function Uh(e) {
      if (e !== Nr)
        return !1;
      if (!Zi)
        return iE(e), Zi = !0, !1;
      if (e.tag !== re && (e.tag !== ue || $T(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Ky(e))
            lE(e), Zy();
          else
            for (; t; )
              nE(e, t), t = ap(t);
      }
      return iE(e), e.tag === De ? _i = Rw(e) : _i = Nr ? ap(e.stateNode) : null, !0;
    }
    function Tw() {
      return Zi && _i !== null;
    }
    function lE(e) {
      for (var t = _i; t; )
        tE(e, t), t = ap(t);
    }
    function Tf() {
      Nr = null, _i = null, Zi = !1, Hs = !1;
    }
    function uE() {
      No !== null && (e1(No), No = null);
    }
    function zr() {
      return Zi;
    }
    function eg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var ww = A.ReactCurrentBatchConfig, xw = null;
    function bw() {
      return ww.transition;
    }
    var Ji = {
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
      var _w = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ct && (t = a), a = a.return;
        return t;
      }, Ps = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, op = [], sp = [], cp = [], fp = [], dp = [], pp = [], Vs = /* @__PURE__ */ new Set();
      Ji.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & ct && typeof t.UNSAFE_componentWillMount == "function" && sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillUpdate == "function" && pp.push(e));
      }, Ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          e.add(Ye(w) || "Component"), Vs.add(w.type);
        }), op = []);
        var t = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          t.add(Ye(w) || "Component"), Vs.add(w.type);
        }), sp = []);
        var a = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          a.add(Ye(w) || "Component"), Vs.add(w.type);
        }), cp = []);
        var i = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          i.add(Ye(w) || "Component"), Vs.add(w.type);
        }), fp = []);
        var u = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          u.add(Ye(w) || "Component"), Vs.add(w.type);
        }), dp = []);
        var s = /* @__PURE__ */ new Set();
        if (pp.length > 0 && (pp.forEach(function(w) {
          s.add(Ye(w) || "Component"), Vs.add(w.type);
        }), pp = []), t.size > 0) {
          var f = Ps(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ps(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ps(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ps(e);
          qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ps(a);
          qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ps(u);
          qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Ji.recordLegacyContextWarning = function(e, t) {
        var a = _w(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, Ji.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), oE.add(s.type);
            });
            var u = Ps(i);
            try {
              Pt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Rn();
            }
          }
        });
      }, Ji.discardPendingWarnings = function() {
        op = [], sp = [], cp = [], fp = [], dp = [], pp = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, sE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function kw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function vp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ct || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== de) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !kw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== de)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Gn(i, "ref");
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
    function jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Fh(e) {
      {
        var t = Ye(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
      function t(D, H) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [H], D.flags |= Ut) : O.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, H) {
        for (var O = /* @__PURE__ */ new Map(), Q = H; Q !== null; )
          Q.key !== null ? O.set(Q.key, Q) : O.set(Q.index, Q), Q = Q.sibling;
        return O;
      }
      function u(D, H) {
        var O = Xs(D, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, H, O) {
        if (D.index = O, !e)
          return D.flags |= vd, H;
        var Q = D.alternate;
        if (Q !== null) {
          var fe = Q.index;
          return fe < H ? (D.flags |= ln, H) : fe;
        } else
          return D.flags |= ln, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= ln), D;
      }
      function p(D, H, O, Q) {
        if (H === null || H.tag !== Be) {
          var fe = e0(O, D.mode, Q);
          return fe.return = D, fe;
        } else {
          var oe = u(H, O);
          return oe.return = D, oe;
        }
      }
      function v(D, H, O, Q) {
        var fe = O.type;
        if (fe === ma)
          return g(D, H, O.props.children, Q, O.key);
        if (H !== null && (H.elementType === fe || // Keep this check inline so it only runs on the false path:
        m1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof fe == "object" && fe !== null && fe.$$typeof === Ue && cE(fe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = vp(D, H, O), oe.return = D, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Ve = JS(O, D.mode, Q);
        return Ve.ref = vp(D, H, O), Ve.return = D, Ve;
      }
      function y(D, H, O, Q) {
        if (H === null || H.tag !== he || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var fe = t0(O, D.mode, Q);
          return fe.return = D, fe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = D, oe;
        }
      }
      function g(D, H, O, Q, fe) {
        if (H === null || H.tag !== wt) {
          var oe = Io(O, D.mode, Q, fe);
          return oe.return = D, oe;
        } else {
          var Ve = u(H, O);
          return Ve.return = D, Ve;
        }
      }
      function b(D, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var Q = e0("" + H, D.mode, O);
          return Q.return = D, Q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ei: {
              var fe = JS(H, D.mode, O);
              return fe.ref = vp(D, null, H), fe.return = D, fe;
            }
            case _r: {
              var oe = t0(H, D.mode, O);
              return oe.return = D, oe;
            }
            case Ue: {
              var Ve = H._payload, Ge = H._init;
              return b(D, Ge(Ve), O);
            }
          }
          if (Et(H) || kr(H)) {
            var qt = Io(H, D.mode, O, null);
            return qt.return = D, qt;
          }
          jh(D, H);
        }
        return typeof H == "function" && Fh(D), null;
      }
      function w(D, H, O, Q) {
        var fe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return fe !== null ? null : p(D, H, "" + O, Q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ei:
              return O.key === fe ? v(D, H, O, Q) : null;
            case _r:
              return O.key === fe ? y(D, H, O, Q) : null;
            case Ue: {
              var oe = O._payload, Ve = O._init;
              return w(D, H, Ve(oe), Q);
            }
          }
          if (Et(O) || kr(O))
            return fe !== null ? null : g(D, H, O, Q, null);
          jh(D, O);
        }
        return typeof O == "function" && Fh(D), null;
      }
      function M(D, H, O, Q, fe) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var oe = D.get(O) || null;
          return p(H, oe, "" + Q, fe);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case ei: {
              var Ve = D.get(Q.key === null ? O : Q.key) || null;
              return v(H, Ve, Q, fe);
            }
            case _r: {
              var Ge = D.get(Q.key === null ? O : Q.key) || null;
              return y(H, Ge, Q, fe);
            }
            case Ue:
              var qt = Q._payload, Lt = Q._init;
              return M(D, H, O, Lt(qt), fe);
          }
          if (Et(Q) || kr(Q)) {
            var Wn = D.get(O) || null;
            return g(H, Wn, Q, fe, null);
          }
          jh(H, Q);
        }
        return typeof Q == "function" && Fh(H), null;
      }
      function U(D, H, O) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case ei:
            case _r:
              sE(D, O);
              var Q = D.key;
              if (typeof Q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(Q);
                break;
              }
              if (!H.has(Q)) {
                H.add(Q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Q);
              break;
            case Ue:
              var fe = D._payload, oe = D._init;
              U(oe(fe), H, O);
              break;
          }
        }
        return H;
      }
      function F(D, H, O, Q) {
        for (var fe = null, oe = 0; oe < O.length; oe++) {
          var Ve = O[oe];
          fe = U(Ve, fe, D);
        }
        for (var Ge = null, qt = null, Lt = H, Wn = 0, Mt = 0, Hn = null; Lt !== null && Mt < O.length; Mt++) {
          Lt.index > Mt ? (Hn = Lt, Lt = null) : Hn = Lt.sibling;
          var ca = w(D, Lt, O[Mt], Q);
          if (ca === null) {
            Lt === null && (Lt = Hn);
            break;
          }
          e && Lt && ca.alternate === null && t(D, Lt), Wn = s(ca, Wn, Mt), qt === null ? Ge = ca : qt.sibling = ca, qt = ca, Lt = Hn;
        }
        if (Mt === O.length) {
          if (a(D, Lt), zr()) {
            var Vr = Mt;
            js(D, Vr);
          }
          return Ge;
        }
        if (Lt === null) {
          for (; Mt < O.length; Mt++) {
            var ci = b(D, O[Mt], Q);
            ci !== null && (Wn = s(ci, Wn, Mt), qt === null ? Ge = ci : qt.sibling = ci, qt = ci);
          }
          if (zr()) {
            var ba = Mt;
            js(D, ba);
          }
          return Ge;
        }
        for (var _a = i(D, Lt); Mt < O.length; Mt++) {
          var fa = M(_a, D, Mt, O[Mt], Q);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Mt : fa.key), Wn = s(fa, Wn, Mt), qt === null ? Ge = fa : qt.sibling = fa, qt = fa);
        }
        if (e && _a.forEach(function(Bf) {
          return t(D, Bf);
        }), zr()) {
          var Lu = Mt;
          js(D, Lu);
        }
        return Ge;
      }
      function le(D, H, O, Q) {
        var fe = kr(O);
        if (typeof fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === fe && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var oe = fe.call(O);
          if (oe)
            for (var Ve = null, Ge = oe.next(); !Ge.done; Ge = oe.next()) {
              var qt = Ge.value;
              Ve = U(qt, Ve, D);
            }
        }
        var Lt = fe.call(O);
        if (Lt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Mt = null, Hn = H, ca = 0, Vr = 0, ci = null, ba = Lt.next(); Hn !== null && !ba.done; Vr++, ba = Lt.next()) {
          Hn.index > Vr ? (ci = Hn, Hn = null) : ci = Hn.sibling;
          var _a = w(D, Hn, ba.value, Q);
          if (_a === null) {
            Hn === null && (Hn = ci);
            break;
          }
          e && Hn && _a.alternate === null && t(D, Hn), ca = s(_a, ca, Vr), Mt === null ? Wn = _a : Mt.sibling = _a, Mt = _a, Hn = ci;
        }
        if (ba.done) {
          if (a(D, Hn), zr()) {
            var fa = Vr;
            js(D, fa);
          }
          return Wn;
        }
        if (Hn === null) {
          for (; !ba.done; Vr++, ba = Lt.next()) {
            var Lu = b(D, ba.value, Q);
            Lu !== null && (ca = s(Lu, ca, Vr), Mt === null ? Wn = Lu : Mt.sibling = Lu, Mt = Lu);
          }
          if (zr()) {
            var Bf = Vr;
            js(D, Bf);
          }
          return Wn;
        }
        for (var Wp = i(D, Hn); !ba.done; Vr++, ba = Lt.next()) {
          var Yl = M(Wp, D, Vr, ba.value, Q);
          Yl !== null && (e && Yl.alternate !== null && Wp.delete(Yl.key === null ? Vr : Yl.key), ca = s(Yl, ca, Vr), Mt === null ? Wn = Yl : Mt.sibling = Yl, Mt = Yl);
        }
        if (e && Wp.forEach(function(ek) {
          return t(D, ek);
        }), zr()) {
          var J_ = Vr;
          js(D, J_);
        }
        return Wn;
      }
      function Le(D, H, O, Q) {
        if (H !== null && H.tag === Be) {
          a(D, H.sibling);
          var fe = u(H, O);
          return fe.return = D, fe;
        }
        a(D, H);
        var oe = e0(O, D.mode, Q);
        return oe.return = D, oe;
      }
      function xe(D, H, O, Q) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe) {
            var Ve = O.type;
            if (Ve === ma) {
              if (oe.tag === wt) {
                a(D, oe.sibling);
                var Ge = u(oe, O.props.children);
                return Ge.return = D, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (oe.elementType === Ve || // Keep this check inline so it only runs on the false path:
            m1(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ue && cE(Ve) === oe.type) {
              a(D, oe.sibling);
              var qt = u(oe, O.props);
              return qt.ref = vp(D, oe, O), qt.return = D, qt._debugSource = O._source, qt._debugOwner = O._owner, qt;
            }
            a(D, oe);
            break;
          } else
            t(D, oe);
          oe = oe.sibling;
        }
        if (O.type === ma) {
          var Lt = Io(O.props.children, D.mode, Q, O.key);
          return Lt.return = D, Lt;
        } else {
          var Wn = JS(O, D.mode, Q);
          return Wn.ref = vp(D, H, O), Wn.return = D, Wn;
        }
      }
      function Tt(D, H, O, Q) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe)
            if (oe.tag === he && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(D, oe.sibling);
              var Ve = u(oe, O.children || []);
              return Ve.return = D, Ve;
            } else {
              a(D, oe);
              break;
            }
          else
            t(D, oe);
          oe = oe.sibling;
        }
        var Ge = t0(O, D.mode, Q);
        return Ge.return = D, Ge;
      }
      function mt(D, H, O, Q) {
        var fe = typeof O == "object" && O !== null && O.type === ma && O.key === null;
        if (fe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ei:
              return f(xe(D, H, O, Q));
            case _r:
              return f(Tt(D, H, O, Q));
            case Ue:
              var oe = O._payload, Ve = O._init;
              return mt(D, H, Ve(oe), Q);
          }
          if (Et(O))
            return F(D, H, O, Q);
          if (kr(O))
            return le(D, H, O, Q);
          jh(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(D, H, "" + O, Q)) : (typeof O == "function" && Fh(D), a(D, H));
      }
      return mt;
    }
    var wf = fE(!0), dE = fE(!1);
    function Dw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Xs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Xs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ow(e, t) {
      for (var a = e.child; a !== null; )
        y_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Hh = null, xf = null, og = null, Ph = !1;
    function Vh() {
      Hh = null, xf = null, og = null, Ph = !1;
    }
    function pE() {
      Ph = !0;
    }
    function vE() {
      Ph = !1;
    }
    function hE(e, t, a) {
      oa(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      ua(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (du(i.childLanes, t) ? u !== null && !du(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lw(e, t, a) {
      Mw(e, t, a);
    }
    function Mw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = co(a), v = xu(nn, p);
                v.tag = $h;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Xe(w.lanes, a)), cg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Xe(U.lanes, a)), cg(M, a, e), u = i.sibling;
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
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function bf(e, t) {
      Hh = e, xf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && Dp(), a.firstContext = null);
      }
    }
    function nr(e) {
      Ph && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (xf === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          xf = a, Hh.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          xf = xf.next = a;
      }
      return t;
    }
    var Bs = null;
    function fg(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function Nw() {
      if (Bs !== null) {
        for (var e = 0; e < Bs.length; e++) {
          var t = Bs[e], a = t.interleaved;
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
        Bs = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function zw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Uw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Qa(e, t) {
      return Bh(e, t);
    }
    var Aw = Bh;
    function Bh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (ln | Ua)) !== Oe && d1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (ln | Ua)) !== Oe && d1(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, $h = 2, dg = 3, Ih = !1, pg, Yh;
    pg = !1, Yh = null;
    function vg(e) {
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
    function SE(e, t) {
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
    function xu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Yh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), zb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Aw(e, a);
      } else
        return Uw(e, u, t, a);
    }
    function Wh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Dd(a)) {
          var s = u.lanes;
          s = Bc(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, Od(e, f);
        }
      }
    }
    function hg(e, t) {
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
    function jw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ct) {
                jn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & ~Zn | $e;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & ct) {
                jn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  jn(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case $h:
          return Ih = !0, i;
      }
      return i;
    }
    function Qh(e, t, a, i) {
      var u = e.updateQueue;
      Ih = !1, Yh = u.shared;
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
        var M = u.baseState, U = B, F = null, le = null, Le = null, xe = s;
        do {
          var Tt = xe.lane, mt = xe.eventTime;
          if (du(i, Tt)) {
            if (Le !== null) {
              var H = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Le = Le.next = H;
            }
            M = jw(e, u, xe, M, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Fn) {
              e.flags |= Si;
              var Q = u.effects;
              Q === null ? u.effects = [xe] : Q.push(xe);
            }
          } else {
            var D = {
              eventTime: mt,
              lane: Tt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (le = Le = D, F = M) : Le = Le.next = D, U = Xe(U, Tt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var fe = p, oe = fe.next;
            fe.next = null, xe = oe, u.lastBaseUpdate = fe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (F = M), u.baseState = F, u.firstBaseUpdate = le, u.lastBaseUpdate = Le;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var Ge = Ve;
          do
            U = Xe(U, Ge.lane), Ge = Ge.next;
          while (Ge !== Ve);
        } else s === null && (u.shared.lanes = B);
        Vp(U), e.lanes = U, e.memoizedState = M;
      }
      Yh = null;
    }
    function Fw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Ih = !1;
    }
    function Gh() {
      return Ih;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Fw(f, a));
        }
    }
    var hp = {}, Uo = Oo(hp), mp = Oo(hp), qh = Oo(hp);
    function Xh(e) {
      if (e === hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RE() {
      var e = Xh(qh.current);
      return e;
    }
    function mg(e, t) {
      oa(qh, t, e), oa(mp, e, e), oa(Uo, hp, e);
      var a = tT(t);
      ua(Uo, e), oa(Uo, a, e);
    }
    function _f(e) {
      ua(Uo, e), ua(mp, e), ua(qh, e);
    }
    function yg() {
      var e = Xh(Uo.current);
      return e;
    }
    function TE(e) {
      Xh(qh.current);
      var t = Xh(Uo.current), a = nT(t, e.type);
      t !== a && (oa(mp, e, e), oa(Uo, a, e));
    }
    function gg(e) {
      mp.current === e && (ua(Uo, e), ua(mp, e));
    }
    var Hw = 0, wE = 1, xE = 1, yp = 2, el = Oo(Hw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function kf(e) {
      return e & wE;
    }
    function Eg(e, t) {
      return e & wE | t;
    }
    function Pw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      oa(el, t, e);
    }
    function Df(e) {
      ua(el, e);
    }
    function Vw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Fy(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & $e) !== Oe;
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
    var Ga = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Fl = (
      /*  */
      2
    ), or = (
      /*    */
      4
    ), Ur = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function Bw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = A.ReactCurrentDispatcher, gp = A.ReactCurrentBatchConfig, Tg, Of;
    Tg = /* @__PURE__ */ new Set();
    var $s = B, Gt = null, sr = null, cr = null, Zh = !1, Sp = !1, Ep = 0, $w = 0, Iw = 25, V = null, ki = null, jo = -1, wg = !1;
    function Bt() {
      {
        var e = V;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ne() {
      {
        var e = V;
        ki !== null && (jo++, ki[jo] !== e && Yw(e));
      }
    }
    function Lf(e) {
      e != null && !Et(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Yw(e) {
      {
        var t = Ye(Gt);
        if (!Tg.has(t) && (Tg.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= jo; u++) {
            for (var s = ki[u], f = u === jo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function xg(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Mf(e, t, a, i, u, s) {
      $s = s, Gt = t, ki = e !== null ? e._debugHookTypes : null, jo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? ce.current = QE : ki !== null ? ce.current = WE : ce.current = YE;
      var f = a(i, u);
      if (Sp) {
        var p = 0;
        do {
          if (Sp = !1, Ep = 0, p >= Iw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, sr = null, cr = null, t.updateQueue = null, jo = -1, ce.current = GE, f = a(i, u);
        } while (Sp);
      }
      ce.current = fm, t._debugHookTypes = ki;
      var v = sr !== null && sr.next !== null;
      if ($s = B, Gt = null, sr = null, cr = null, V = null, ki = null, jo = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & we) !== Ce && S("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Nf() {
      var e = Ep !== 0;
      return Ep = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ca) !== Ce ? t.flags &= ~(ru | Jr | cn | Ze) : t.flags &= ~(cn | Ze), e.lanes = Es(e.lanes, a);
    }
    function _E() {
      if (ce.current = fm, Zh) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      $s = B, Gt = null, sr = null, cr = null, ki = null, jo = -1, V = null, PE = !1, Sp = !1, Ep = 0;
    }
    function Hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cr === null ? Gt.memoizedState = cr = e : cr = cr.next = e, cr;
    }
    function Di() {
      var e;
      if (sr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sr.next;
      var a;
      if (cr === null ? a = Gt.memoizedState : a = cr.next, a !== null)
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
        cr === null ? Gt.memoizedState = cr = i : cr = cr.next = i;
      }
      return cr;
    }
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Hl(), u;
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
      var f = s.dispatch = qw.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = Di(), u = i.queue;
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
        var g = f.next, b = s.baseState, w = null, M = null, U = null, F = g;
        do {
          var le = F.lane;
          if (du($s, le)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (F.hasEagerState)
              b = F.eagerState;
            else {
              var Tt = F.action;
              b = e(b, Tt);
            }
          } else {
            var Le = {
              lane: le,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Le, w = b) : U = U.next = Le, Gt.lanes = Xe(Gt.lanes, le), Vp(le);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? w = b : U.next = M, ge(b, i.memoizedState) || Dp(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var D = mt;
        do {
          var H = D.lane;
          Gt.lanes = Xe(Gt.lanes, H), Vp(H), D = D.next;
        } while (D !== mt);
      } else f === null && (u.lanes = B);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Dg(e, t, a) {
      var i = Di(), u = i.queue;
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
        ge(p, i.memoizedState) || Dp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ck(e, t, a) {
    }
    function Rk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Gt, u = Hl(), s, f = zr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Of || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Of = !0);
      } else {
        if (s = t(), !Of) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
        }
        var v = Om();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, $s) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, rm(LE.bind(null, i, y, e), [e]), i.flags |= cn, Cp(ur | Ur, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = Gt, u = Di(), s = t();
      if (!Of) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, Dp());
      var y = u.queue;
      if (Tp(LE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cr !== null && cr.memoizedState.tag & ur) {
        i.flags |= cn, Cp(ur | Ur, OE.bind(null, i, y, s, t), void 0, null);
        var g = Om();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(g, $s) || DE(i, t, s);
      }
      return s;
    }
    function DE(e, t, a) {
      e.flags |= ss;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = kE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && NE(e);
    }
    function LE(e, t, a) {
      var i = function() {
        ME(t) && NE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function NE(e) {
      var t = Qa(e, ke);
      t !== null && vr(t, e, ke, nn);
    }
    function em(e) {
      var t = Hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Xw.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(bg);
    }
    function Mg(e) {
      return Dg(bg);
    }
    function Cp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = kE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ng(e) {
      var t = Hl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Rp(e, t, a, i) {
      var u = Hl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Cp(ur | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (sr !== null) {
        var p = sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = Cp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Cp(ur | t, a, f, s);
    }
    function rm(e, t) {
      return (Gt.mode & Ca) !== Ce ? Rp(ru | cn | bl, Ur, e, t) : Rp(cn | bl, Ur, e, t);
    }
    function Tp(e, t) {
      return nm(cn, Ur, e, t);
    }
    function zg(e, t) {
      return Rp(Ze, Fl, e, t);
    }
    function am(e, t) {
      return nm(Ze, Fl, e, t);
    }
    function Ug(e, t) {
      var a = Ze;
      return a |= Zr, (Gt.mode & Ca) !== Ce && (a |= Jr), Rp(a, or, e, t);
    }
    function im(e, t) {
      return nm(Ze, or, e, t);
    }
    function zE(e, t) {
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
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ze;
      return u |= Zr, (Gt.mode & Ca) !== Ce && (u |= Jr), Rp(u, or, zE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(Ze, or, zE.bind(null, t, e), i);
    }
    function Ww(e, t) {
    }
    var um = Ww;
    function jg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Hl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = Di(), a = sr, i = a.memoizedState;
      return jE(t, i, e);
    }
    function AE(e) {
      var t = Di();
      if (sr === null)
        return t.memoizedState = e, e;
      var a = sr.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Hv($s);
      if (i) {
        if (!ge(a, t)) {
          var u = Bv();
          Gt.lanes = Xe(Gt.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Dp()), e.memoizedState = a, a;
    }
    function Qw(e, t, a) {
      var i = Va();
      wn(iy(i, Qi)), e(!0);
      var u = gp.transition;
      gp.transition = {};
      var s = gp.transition;
      gp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wn(i), gp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = em(!1), t = e[0], a = e[1], i = Qw.bind(null, a), u = Hl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Lg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Mg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function Gw() {
      return PE;
    }
    function Vg() {
      var e = Hl(), t = Om(), a = t.identifierPrefix, i;
      if (zr()) {
        var u = fw();
        i = ":" + a + "R" + u;
        var s = Ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = $w++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = xa();
          vr(s, e, i, f), $E(s, t, i);
        }
      }
      IE(e, i);
    }
    function Xw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                zw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var b = xa();
          vr(g, e, i, b), $E(g, t, i);
        }
      }
      IE(e, i);
    }
    function VE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function BE(e, t) {
      Sp = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $E(e, t, a) {
      if (Dd(a)) {
        var i = t.lanes;
        i = Bc(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, Od(e, u);
      }
    }
    function IE(e, t, a) {
      ps(e, t);
    }
    var fm = {
      readContext: nr,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: Z
    }, YE = null, WE = null, QE = null, GE = null, Pl = null, tl = null, dm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Bt(), Lf(t), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Bt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Bt(), Lf(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Bt(), Lf(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Bt(), Lf(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Bt(), Lf(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Bt(), Lf(t);
          var a = ce.current;
          ce.current = Pl;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Bt();
          var i = ce.current;
          ce.current = Pl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Bt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Bt();
          var t = ce.current;
          ce.current = Pl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Bt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Bt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Bt(), Vg();
        },
        unstable_isNewReconciler: Z
      }, WE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = ce.current;
          ce.current = Pl;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = ce.current;
          ce.current = Pl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), Ng(e);
        },
        useState: function(e) {
          V = "useState", ne();
          var t = ce.current;
          ce.current = Pl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", ne(), Vg();
        },
        unstable_isNewReconciler: Z
      }, QE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = ce.current;
          ce.current = tl;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = ce.current;
          ce.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), tm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = ce.current;
          ce.current = tl;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Jh(e, t);
        },
        useId: function() {
          return V = "useId", ne(), cm();
        },
        unstable_isNewReconciler: Z
      }, GE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ne(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ne(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ne(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ne(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ne();
          var a = ce.current;
          ce.current = dm;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ne();
          var i = ce.current;
          ce.current = dm;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ne(), tm();
        },
        useState: function(e) {
          V = "useState", ne();
          var t = ce.current;
          ce.current = dm;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ne(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ne(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ne(), Jh(e, t);
        },
        useId: function() {
          return V = "useId", ne(), cm();
        },
        unstable_isNewReconciler: Z
      }, Pl = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), Bt(), jg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), Bt(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), Bt(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), Bt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), Bt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), Bt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), Bt();
          var a = ce.current;
          ce.current = Pl;
          try {
            return Fg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), Bt();
          var i = ce.current;
          ce.current = Pl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), Bt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", We(), Bt();
          var t = ce.current;
          ce.current = Pl;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), Bt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), Bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), Bt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", We(), Bt(), Vg();
        },
        unstable_isNewReconciler: Z
      }, tl = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), ne(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), ne(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), ne(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), ne(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), ne();
          var a = ce.current;
          ce.current = tl;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), ne();
          var i = ce.current;
          ce.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), ne(), tm();
        },
        useState: function(e) {
          V = "useState", We(), ne();
          var t = ce.current;
          ce.current = tl;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), ne(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), ne(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), ne(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), ne(), Jh(e, t);
        },
        useId: function() {
          return V = "useId", We(), ne(), cm();
        },
        unstable_isNewReconciler: Z
      }, dm = {
        readContext: function(e) {
          return Bg(), nr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", We(), ne(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", We(), ne(), nr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", We(), ne(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", We(), ne(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", We(), ne(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", We(), ne(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", We(), ne();
          var a = ce.current;
          ce.current = tl;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", We(), ne();
          var i = ce.current;
          ce.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", We(), ne(), tm();
        },
        useState: function(e) {
          V = "useState", We(), ne();
          var t = ce.current;
          ce.current = tl;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", We(), ne(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", We(), ne(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", We(), ne(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", We(), ne(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", We(), ne(), Jh(e, t);
        },
        useId: function() {
          return V = "useId", We(), ne(), cm();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Fo = G.unstable_now, qE = 0, pm = -1, wp = -1, vm = -1, $g = !1, hm = !1;
    function XE() {
      return $g;
    }
    function Kw() {
      hm = !0;
    }
    function Zw() {
      $g = !1, hm = !1;
    }
    function Jw() {
      $g = hm, hm = !1;
    }
    function KE() {
      return qE;
    }
    function ZE() {
      qE = Fo();
    }
    function Ig(e) {
      wp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function JE(e) {
      wp = -1;
    }
    function mm(e, t) {
      if (wp >= 0) {
        var a = Fo() - wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), wp = -1;
      }
    }
    function Vl(e) {
      if (pm >= 0) {
        var t = Fo() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case vt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Yg(e) {
      if (vm >= 0) {
        var t = Fo() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case vt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bl() {
      pm = Fo();
    }
    function Wg() {
      vm = Fo();
    }
    function Qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Zg, Jg, eC, ym, eS, tS, nS, xp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), xp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = St(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Gg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Gg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ct) {
          jn(!0);
          try {
            s = a(i, u);
          } finally {
            jn(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: Sa,
      enqueueSetState: function(e, t, a) {
        var i = Na(e), u = xa(), s = Bo(i), f = xu(u, s);
        f.payload = t, a != null && (ym(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (vr(p, i, s, u), Wh(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Na(e), u = xa(), s = Bo(i), f = xu(u, s);
        f.tag = gE, f.payload = t, a != null && (ym(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (vr(p, i, s, u), Wh(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Na(e), i = xa(), u = Bo(a), s = xu(i, u);
        s.tag = $h, t != null && (ym(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (vr(f, a, u, i), Wh(f, a, u)), xc(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ct) {
            jn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              jn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", St(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, s) : !0;
    }
    function ex(e, t, a) {
      var i = e.stateNode;
      {
        var u = St(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (xp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (xp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", St(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", St(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Et(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = aS, e.stateNode = t, Xu(t, e), t._reactInternalInstance = Gg;
    }
    function aC(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === I && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", St(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Sf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Ef(e, u) : oi;
      }
      var g = new t(a, s);
      if (e.mode & ct) {
        jn(!0);
        try {
          g = new t(a, s);
        } finally {
          jn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = St(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var le = St(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(le) || (Zg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function tx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      ex(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Sf(e, t, !0);
        u.context = Ef(e, f);
      }
      {
        if (u.state === a) {
          var p = St(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ct && Ji.recordLegacyContextWarning(e, u), Ji.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (tx(e, u), Qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ze;
        y |= Zr, (e.mode & Ca) !== Ce && (y |= Jr), e.flags |= y;
      }
    }
    function nx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Sf(e, t, !0);
        v = Ef(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var w = e.memoizedState, M = u.state = w;
      if (Qh(e, a, u, i), M = e.memoizedState, s === a && w === M && !kh() && !Gh()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ze;
          U |= Zr, (e.mode & Ca) !== Ce && (U |= Jr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var F = Gh() || nC(e, t, s, a, w, M, v);
      if (F) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Ze;
          le |= Zr, (e.mode & Ca) !== Ce && (le |= Jr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ze;
          Le |= Zr, (e.mode & Ca) !== Ce && (Le |= Jr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function rx(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = oi;
      if (typeof g == "object" && g !== null)
        b = nr(g);
      else {
        var w = Sf(t, a, !0);
        b = Ef(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && iC(t, s, i, b), EE();
      var F = t.memoizedState, le = s.state = F;
      if (Qh(t, i, s, u), le = t.memoizedState, f === v && F === le && !kh() && !Gh() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), !1;
      typeof M == "function" && (rS(t, a, M, i), le = t.memoizedState);
      var Le = Gh() || nC(t, a, p, i, F, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Le;
    }
    function Is(e, t) {
      return {
        value: e,
        source: t,
        stack: ju(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ax(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = ax(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
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
    var ix = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = xu(nn, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Kb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = xu(nn, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          y1(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        y1(e), uS(e, t), typeof u != "function" && qb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ia(e.lanes, ke) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ix(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Zb.bind(null, e, t, a);
        Ea && Bp(e, a), t.then(s, s);
      }
    }
    function lx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ux(e, t) {
      var a = e.tag;
      if ((e.mode & we) === Ce && (a === ve || a === Qe || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === De && Vw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & we) === Ce) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= $e, a.flags |= cs, a.flags &= ~(pc | ya), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = _n;
            else {
              var f = xu(nn, ke);
              f.tag = $h, zo(a, f, ke);
            }
          }
          a.lanes = Xe(a.lanes, ke);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function ox(e, t, a, i, u) {
      if (a.flags |= ya, Ea && Bp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ux(a), zr() && a.mode & we && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~Tn, sC(f, t, a, e, u), f.mode & we && uC(e, s, u), lx(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            uC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (zr() && a.mode & we) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & Zn) === Oe && (v.flags |= Tn), sC(v, t, a, e, u), eg(Is(i, a));
          return;
        }
      }
      i = Is(i, a), Vb(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= Zn;
            var b = co(u);
            y.lanes = Xe(y.lanes, b);
            var w = lC(y, g, b);
            hg(y, w);
            return;
          }
          case de:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & $e) === Oe && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !o1(F))) {
              y.flags |= Zn;
              var le = co(u);
              y.lanes = Xe(y.lanes, le);
              var Le = oS(y, M, le);
              hg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function sx() {
      return null;
    }
    var bp = A.ReactCurrentOwner, rl = !1, sS, _p, cS, fS, dS, Ys, pS, gm, kp;
    sS = {}, _p = {}, cS = {}, fS = {}, dS = {}, Ys = !1, pS = {}, gm = {}, kp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = wf(t, e.child, a, i);
    }
    function cx(e, t, a, i) {
      t.child = wf(t, e.child, null, i), t.child = wf(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      bf(t, u), eo(t);
      {
        if (bp.current = t, qr(!0), v = Mf(e, t, f, i, p, u), y = Nf(), t.mode & ct) {
          jn(!0);
          try {
            v = Mf(e, t, f, i, p, u), y = Nf();
          } finally {
            jn(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !rl ? (bE(e, t, u), bu(e, t, u)) : (zr() && y && Gy(t), t.flags |= wl, Ta(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (h_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Vf(s), t.tag = He, t.type = f, mS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            St(s)
          ), a.defaultProps !== void 0) {
            var v = St(s) || "Unknown";
            kp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), kp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && Ki(
          b,
          i,
          // Resolved props
          "prop",
          St(g)
        );
      }
      var w = e.child, M = RS(e, u);
      if (!M) {
        var U = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : Fe, F(U, i) && e.ref === t.ref)
          return bu(e, t, u);
      }
      t.flags |= wl;
      var le = Xs(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ue) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            St(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Fe(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & cs) !== Oe && (rl = !0);
          else return t.lanes = e.lanes, bu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & we) === Ce) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Lm(t, a);
        } else if (ia(a, Rr)) {
          var b = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          Lm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Rr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Lm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, Lm(t, M);
      }
      return Ta(e, t, u, a), t.child;
    }
    function fx(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function dx(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function px(e, t, a) {
      {
        t.flags |= Ze;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Kr, t.flags |= hd);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f;
      {
        var p = Sf(t, a, !0);
        f = Ef(t, p);
      }
      var v, y;
      bf(t, u), eo(t);
      {
        if (bp.current = t, qr(!0), v = Mf(e, t, a, i, f, u), y = Nf(), t.mode & ct) {
          jn(!0);
          try {
            v = Mf(e, t, a, i, f, u), y = Nf();
          } finally {
            jn(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !rl ? (bE(e, t, u), bu(e, t, u)) : (zr() && y && Gy(t), t.flags |= wl, Ta(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (O_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Zn;
            var y = new Error("Simulated error coming from DevTools"), g = co(u);
            t.lanes = Xe(t.lanes, g);
            var b = oS(t, Is(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Ki(
            w,
            i,
            // Resolved props
            "prop",
            St(a)
          );
        }
      }
      var M;
      jl(a) ? (M = !0, Oh(t)) : M = !1, bf(t, u);
      var U = t.stateNode, F;
      U === null ? (Em(e, t), aC(t, a, i), iS(t, a, i, u), F = !0) : e === null ? F = nx(t, a, i, u) : F = rx(e, t, a, i, u);
      var le = hS(e, t, a, F, M, u);
      {
        var Le = t.stateNode;
        F && Le.props !== i && (Ys || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Ys = !0);
      }
      return le;
    }
    function hS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & $e) !== Oe;
      if (!i && !f)
        return u && X0(t, a, !1), bu(e, t, s);
      var p = t.stateNode;
      bp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        eo(t);
        {
          if (qr(!0), v = p.render(), t.mode & ct) {
            jn(!0);
            try {
              p.render();
            } finally {
              jn(!1);
            }
          }
          qr(!1);
        }
        na();
      }
      return t.flags |= wl, e !== null && f ? cx(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), mg(e, t.containerInfo);
    }
    function vx(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), Qh(t, i, null, a);
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
          var g = Is(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Is(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, b);
        } else {
          yw(t);
          var w = dE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~ln | Ua, M = M.sibling;
        }
      } else {
        if (Tf(), p === s)
          return bu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return Tf(), eg(u), t.flags |= Tn, Ta(e, t, a, i), t.child;
    }
    function hx(e, t, a) {
      TE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Vt), vC(e, t), Ta(e, t, f, a), t.child;
    }
    function mx(e, t) {
      return e === null && Jy(t), null;
    }
    function yx(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = m_(v), g = nl(v, u), b;
      switch (y) {
        case ve:
          return mS(t, v), t.type = v = Vf(v), b = vS(null, t, v, g, i), b;
        case de:
          return t.type = v = WS(v), b = hC(null, t, v, g, i), b;
        case Qe:
          return t.type = v = QS(v), b = cC(null, t, v, g, i), b;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Ki(
              w,
              g,
              // Resolved for outer only
              "prop",
              St(v)
            );
          }
          return b = fC(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ue && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function gx(e, t, a, i, u) {
      Em(e, t), t.tag = de;
      var s;
      return jl(a) ? (s = !0, Oh(t)) : s = !1, bf(t, u), aC(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function Sx(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s;
      {
        var f = Sf(t, a, !1);
        s = Ef(t, f);
      }
      bf(t, i);
      var p, v;
      eo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = St(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & ct && Ji.recordLegacyContextWarning(t, null), qr(!0), bp.current = t, p = Mf(null, t, a, u, s, i), v = Nf(), qr(!1);
      }
      if (na(), t.flags |= wl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = St(a) || "Unknown";
        _p[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), _p[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = St(a) || "Unknown";
          _p[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), _p[b] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return jl(a) ? (w = !0, Oh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), rC(t, p), iS(t, a, u, i), hS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ve, t.mode & ct) {
          jn(!0);
          try {
            p = Mf(null, t, a, u, s, i), v = Nf();
          } finally {
            jn(!1);
          }
        }
        return zr() && v && Gy(t), Ta(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = St(t) || "Unknown";
          kp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), kp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = St(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = St(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: sx(),
        transitions: null
      };
    }
    function Ex(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Cx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, yp);
    }
    function Rx(e, t) {
      return Es(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      L_(t) && (t.flags |= $e);
      var u = el.current, s = !1, f = (t.flags & $e) !== Oe;
      if (f || Cx(u, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (u = Pw(u, xE)), u = kf(u), Ao(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return _x(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Tx(t, y, g, a), w = t.child;
          return w.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return kx(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, le = i.children, Le = xx(e, t, le, F, a), xe = t.child, Tt = e.child.memoizedState;
          return xe.memoizedState = Tt === null ? gS(a) : Ex(Tt, a), xe.childLanes = Rx(e, a), t.memoizedState = yS, Le;
        } else {
          var mt = i.children, D = wx(e, t, mt, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function Tx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & we) === Ce && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & Ie && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = ES(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return S1(e, t, B, null);
    }
    function SC(e, t) {
      return Xs(e, t);
    }
    function wx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & we) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ut) : p.push(s);
      }
      return t.child = f, f;
    }
    function xx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & we) === Ce && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & Ie && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var b;
      return p !== null ? b = Xs(p, i) : (b = Io(i, s, u, null), b.flags |= ln), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function Sm(e, t, a, i) {
      i !== null && eg(i), wf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= ln, t.memoizedState = null, f;
    }
    function bx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Io(i, s, u, null);
      return v.flags |= ln, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & we) !== Ce && wf(t, e.child, null, u), v;
    }
    function _x(e, t, a) {
      return (e.mode & we) === Ce ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ke) : Fy(t) ? e.lanes = Wi : e.lanes = Rr, null;
    }
    function kx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tn) {
          t.flags &= ~Tn;
          var D = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Sm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var H = i.children, O = i.fallback, Q = bx(e, t, H, O, f), fe = t.child;
          return fe.memoizedState = gS(f), t.memoizedState = yS, Q;
        }
      else {
        if (hw(), (t.mode & we) === Ce)
          return Sm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = MT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = lS(b, p, y);
          return Sm(e, t, f, w);
        }
        var M = ia(f, e.childLanes);
        if (rl || M) {
          var U = Om();
          if (U !== null) {
            var F = Yv(U, f);
            if (F !== Fn && F !== s.retryLane) {
              s.retryLane = F;
              var le = nn;
              Qa(e, F), vr(U, e, F, le);
            }
          }
          VS();
          var Le = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Sm(e, t, f, Le);
        } else if (B0(u)) {
          t.flags |= $e, t.child = e.child;
          var xe = Jb.bind(null, e);
          return NT(u, xe), null;
        } else {
          gw(t, u, s.treeContext);
          var Tt = i.children, mt = SS(t, Tt);
          return mt.flags |= Ua, mt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), cg(e.return, t, a);
    }
    function Dx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === _t)
          EC(i, a, e);
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
    function Ox(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Kh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Lx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
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
    function Mx(e, t) {
      e !== void 0 && !gm[e] && (e !== "collapsed" && e !== "hidden" ? (gm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (gm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = Et(e), i = !a && typeof kr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Nx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Et(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = kr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
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
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Lx(u), Mx(s, u), Nx(f, u), Ta(e, t, f, a);
      var p = el.current, v = Sg(p, yp);
      if (v)
        p = Eg(p, yp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== Oe;
        y && Dx(t, t.child, a), p = kf(p);
      }
      if (Ao(t, p), (t.mode & we) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Ox(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), CS(
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
              if (U !== null && Kh(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = w, w = M, M = F;
            }
            CS(
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
            CS(
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
    function zx(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = wf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var TC = !1;
    function Ux(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !kh())
            return bu(e, t, a);
        } else
          Lw(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var wC = !1;
    function Ax(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), bf(t, a);
      var f = nr(i);
      eo(t);
      var p;
      return bp.current = t, qr(!0), p = s(f), qr(!1), na(), t.flags |= wl, Ta(e, t, p, a), t.child;
    }
    function Dp() {
      rl = !0;
    }
    function Em(e, t) {
      (t.mode & we) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function bu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), Vp(t.lanes), ia(a, t.childLanes) ? (Dw(e, t), t.child) : null;
    }
    function jx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= ln, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function Fx(e, t, a) {
      switch (t.tag) {
        case re:
          mC(t), t.stateNode, Tf();
          break;
        case ue:
          TE(t);
          break;
        case de: {
          var i = t.type;
          jl(i) && Oh(t);
          break;
        }
        case he:
          mg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case vt:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= Ze);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, kf(el.current)), t.flags |= $e, null;
            var y = t.child, g = y.childLanes;
            if (ia(a, g))
              return gC(e, t, a);
            Ao(t, kf(el.current));
            var b = bu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, kf(el.current));
          break;
        }
        case _t: {
          var w = (e.flags & $e) !== Oe, M = ia(a, t.childLanes);
          if (w) {
            if (M)
              return RC(e, t, a);
            t.flags |= $e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, el.current), M)
            break;
          return null;
        }
        case Ne:
        case Ke:
          return t.lanes = B, pC(e, t, a);
      }
      return bu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return jx(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || kh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === Oe)
            return rl = !1, Fx(e, t, a);
          (e.flags & cs) !== Oe ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, zr() && sw(t)) {
        var f = t.index, p = cw();
        J0(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case ut:
          return Sx(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return yx(e, t, v, a);
        }
        case ve: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : nl(y, g);
          return vS(e, t, y, b, a);
        }
        case de: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : nl(w, M);
          return hC(e, t, w, U, a);
        }
        case re:
          return vx(e, t, a);
        case ue:
          return hx(e, t, a);
        case Be:
          return mx(e, t);
        case De:
          return gC(e, t, a);
        case he:
          return zx(e, t, a);
        case Qe: {
          var F = t.type, le = t.pendingProps, Le = t.elementType === F ? le : nl(F, le);
          return cC(e, t, F, Le, a);
        }
        case wt:
          return fx(e, t, a);
        case pt:
          return dx(e, t, a);
        case vt:
          return px(e, t, a);
        case at:
          return Ux(e, t, a);
        case pn:
          return Ax(e, t, a);
        case ot: {
          var xe = t.type, Tt = t.pendingProps, mt = nl(xe, Tt);
          if (t.type !== t.elementType) {
            var D = xe.propTypes;
            D && Ki(
              D,
              mt,
              // Resolved for outer only
              "prop",
              St(xe)
            );
          }
          return mt = nl(xe.type, mt), fC(e, t, xe, mt, a);
        }
        case He:
          return dC(e, t, t.type, t.pendingProps, a);
        case _n: {
          var H = t.type, O = t.pendingProps, Q = t.elementType === H ? O : nl(H, O);
          return gx(e, t, H, Q, a);
        }
        case _t:
          return RC(e, t, a);
        case Cn:
          break;
        case Ne:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zf(e) {
      e.flags |= Ze;
    }
    function bC(e) {
      e.flags |= Kr, e.flags |= hd;
    }
    var _C, TS, kC, DC;
    _C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Be)
          lT(e, u.stateNode);
        else if (u.tag !== he) {
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
    }, TS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = oT(f, a, s, i, u, p);
        t.updateQueue = v, v && zf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && zf(t);
    };
    function Op(e, t) {
      if (!zr())
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
    function Ar(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = Oe;
      if (t) {
        if ((e.mode & Ie) !== Ce) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ie) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Hx(e, t, a) {
      if (Tw() && (t.mode & we) !== Ce && (t.flags & $e) === Oe)
        return lE(t), Tf(), t.flags |= Tn | ya | Zn, !1;
      var i = Uh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Cw(t), Ar(t), (t.mode & Ie) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & $e) === Oe && (t.memoizedState = null), t.flags |= Ze, Ar(t), (t.mode & Ie) !== Ce) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case ut:
        case rn:
        case He:
        case ve:
        case Qe:
        case wt:
        case pt:
        case vt:
        case pn:
        case ot:
          return Ar(t), null;
        case de: {
          var u = t.type;
          return jl(u) && Dh(t), Ar(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (_f(t), Yy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Uh(t);
            if (f)
              zf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tn) !== Oe) && (t.flags |= za, uE());
            }
          }
          return TS(e, t), Ar(t), null;
        }
        case ue: {
          gg(t);
          var v = RE(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ar(t), null;
            }
            var g = yg(), b = Uh(t);
            if (b)
              Sw(t, v, g) && zf(t);
            else {
              var w = iT(y, i, v, g, t);
              _C(w, t, !1, !1), t.stateNode = w, uT(w, y, i, v) && zf(t);
            }
            t.ref !== null && bC(t);
          }
          return Ar(t), null;
        }
        case Be: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            DC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = RE(), le = yg(), Le = Uh(t);
            Le ? Ew(t) && zf(t) : t.stateNode = sT(M, F, le, t);
          }
          return Ar(t), null;
        }
        case De: {
          Df(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Hx(e, t, xe);
            if (!Tt)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & $e) !== Oe)
            return t.lanes = a, (t.mode & Ie) !== Ce && Qg(t), t;
          var mt = xe !== null, D = e !== null && e.memoizedState !== null;
          if (mt !== D && mt) {
            var H = t.child;
            if (H.flags |= xl, (t.mode & we) !== Ce) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !_);
              O || Sg(el.current, xE) ? Pb() : VS();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= Ze), Ar(t), (t.mode & Ie) !== Ce && mt) {
            var fe = t.child;
            fe !== null && (t.treeBaseDuration -= fe.treeBaseDuration);
          }
          return null;
        }
        case he:
          return _f(t), TS(e, t), e === null && nw(t.stateNode.containerInfo), Ar(t), null;
        case at:
          var oe = t.type._context;
          return sg(oe, t), Ar(t), null;
        case _n: {
          var Ve = t.type;
          return jl(Ve) && Dh(t), Ar(t), null;
        }
        case _t: {
          Df(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Ar(t), null;
          var qt = (t.flags & $e) !== Oe, Lt = Ge.rendering;
          if (Lt === null)
            if (qt)
              Op(Ge, !1);
            else {
              var Wn = Bb() && (e === null || (e.flags & $e) === Oe);
              if (!Wn)
                for (var Mt = t.child; Mt !== null; ) {
                  var Hn = Kh(Mt);
                  if (Hn !== null) {
                    qt = !0, t.flags |= $e, Op(Ge, !1);
                    var ca = Hn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= Ze), t.subtreeFlags = Oe, Ow(t, a), Ao(t, Eg(el.current, yp)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              Ge.tail !== null && gn() > KC() && (t.flags |= $e, qt = !0, Op(Ge, !1), t.lanes = zv);
            }
          else {
            if (!qt) {
              var Vr = Kh(Lt);
              if (Vr !== null) {
                t.flags |= $e, qt = !0;
                var ci = Vr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Ze), Op(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Lt.alternate && !zr())
                  return Ar(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              gn() * 2 - Ge.renderingStartTime > KC() && a !== Rr && (t.flags |= $e, qt = !0, Op(Ge, !1), t.lanes = zv);
            }
            if (Ge.isBackwards)
              Lt.sibling = t.child, t.child = Lt;
            else {
              var ba = Ge.last;
              ba !== null ? ba.sibling = Lt : t.child = Lt, Ge.last = Lt;
            }
          }
          if (Ge.tail !== null) {
            var _a = Ge.tail;
            Ge.rendering = _a, Ge.tail = _a.sibling, Ge.renderingStartTime = gn(), _a.sibling = null;
            var fa = el.current;
            return qt ? fa = Eg(fa, yp) : fa = kf(fa), Ao(t, fa), _a;
          }
          return Ar(t), null;
        }
        case Cn:
          break;
        case Ne:
        case Ke: {
          PS(t);
          var Lu = t.memoizedState, Bf = Lu !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Yl = Wp !== null;
            Yl !== Bf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= xl);
          }
          return !Bf || (t.mode & we) === Ce ? Ar(t) : ia(Il, Rr) && (Ar(t), t.subtreeFlags & (ln | Ze) && (t.flags |= xl)), null;
        }
        case At:
          return null;
        case xt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Px(e, t, a) {
      switch (qy(t), t.tag) {
        case de: {
          var i = t.type;
          jl(i) && Dh(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | $e, (t.mode & Ie) !== Ce && Qg(t), t) : null;
        }
        case re: {
          t.stateNode, _f(t), Yy(t), Rg();
          var s = t.flags;
          return (s & Zn) !== Oe && (s & $e) === Oe ? (t.flags = s & ~Zn | $e, t) : null;
        }
        case ue:
          return gg(t), null;
        case De: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | $e, (t.mode & Ie) !== Ce && Qg(t), t) : null;
        }
        case _t:
          return Df(t), null;
        case he:
          return _f(t), null;
        case at:
          var v = t.type._context;
          return sg(v, t), null;
        case Ne:
        case Ke:
          return PS(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (qy(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && Dh(t);
          break;
        }
        case re: {
          t.stateNode, _f(t), Yy(t), Rg();
          break;
        }
        case ue: {
          gg(t);
          break;
        }
        case he:
          _f(t);
          break;
        case De:
          Df(t);
          break;
        case _t:
          Df(t);
          break;
        case at:
          var u = t.type._context;
          sg(u, t);
          break;
        case Ne:
        case Ke:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var Cm = !1, jr = !1, Vx = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Uf = null, Af = null;
    function Bx(e) {
      nu(null, function() {
        throw e;
      }), pd();
    }
    var $x = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          Bl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        Ho(or, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        $x(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Ix(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function jf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Je && yt && e.mode & Ie)
              try {
                Bl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Rm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var UC = !1;
    function Yx(e, t) {
      rT(e.containerInfo), Se = t, Wx();
      var a = UC;
      return UC = !1, a;
    }
    function Wx() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Ku) !== Oe && t !== null ? (t.return = e, Se = t) : Qx();
      }
    }
    function Qx() {
      for (; Se !== null; ) {
        var e = Se;
        Pt(e);
        try {
          Gx(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Gx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Oe) {
        switch (Pt(e), e.tag) {
          case ve:
          case Qe:
          case He:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ys && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              kT(v.containerInfo);
            }
            break;
          }
          case ue:
          case Be:
          case he:
          case _n:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ur) !== Ga ? Lv(t) : (e & or) !== Ga && ui(t), (e & Fl) !== Ga && $p(!0), Rm(t, a, p), (e & Fl) !== Ga && $p(!1), (e & Ur) !== Ga ? Rc() : (e & or) !== Ga && to());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ur) !== Ga ? kl(t) : (e & or) !== Ga && Mv(t);
            var f = s.create;
            (e & Fl) !== Ga && $p(!0), s.destroy = f(), (e & Fl) !== Ga && $p(!1), (e & Ur) !== Ga ? Cc() : (e & or) !== Ga && fs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & or) !== Oe ? v = "useLayoutEffect" : (s.tag & Fl) !== Oe ? v = "useInsertionEffect" : v = "useEffect";
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
    function qx(e, t) {
      if ((t.flags & Ze) !== Oe)
        switch (t.tag) {
          case vt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KE(), p = t.alternate === null ? "mount" : "update";
            XE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case re:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case vt:
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
    function Xx(e, t, a, i) {
      if ((a.flags & Er) !== Oe)
        switch (a.tag) {
          case ve:
          case Qe:
          case He: {
            if (!jr)
              if (a.mode & Ie)
                try {
                  Bl(), Ho(or | ur, a);
                } finally {
                  Vl(a);
                }
              else
                Ho(or | ur, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & Ze && !jr)
              if (t === null)
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Bl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ys && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), CE(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case de:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Ze) {
              var b = a.type, w = a.memoizedProps;
              vT(g, b, w);
            }
            break;
          }
          case Be:
            break;
          case he:
            break;
          case vt: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, le = a.stateNode.effectDuration, Le = KE(), xe = t === null ? "mount" : "update";
              XE() && (xe = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, le, Le), Qb(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case re:
                      var mt = Tt.stateNode;
                      mt.effectDuration += le;
                      break e;
                    case vt:
                      var D = Tt.stateNode;
                      D.effectDuration += le;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case De: {
            ab(e, a);
            break;
          }
          case _t:
          case _n:
          case Cn:
          case Ne:
          case Ke:
          case xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      jr || a.flags & Kr && AC(a);
    }
    function Kx(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          if (e.mode & Ie)
            try {
              Bl(), NC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ix(e, e.return, t), zC(e, e.return);
          break;
        }
        case ue: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Zx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? wT(u) : bT(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xT(s) : _T(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === Ke) && i.memoizedState !== null && i !== e)) {
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
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ie)
            try {
              Bl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Jx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && iw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function eb(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ue || e.tag === re || e.tag === he;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Be && t.tag !== Qt; ) {
          if (t.flags & ln || t.child === null || t.tag === he)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & ln))
          return t.stateNode;
      }
    }
    function tb(e) {
      var t = eb(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Vt && (V0(a), t.flags &= ~Vt);
          var i = HC(e);
          bS(e, i, a);
          break;
        }
        case re:
        case he: {
          var u = t.stateNode.containerInfo, s = HC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ue || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? ET(a, s, t) : gT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === ue || i === Be;
      if (u) {
        var s = e.stateNode;
        t ? ST(a, s, t) : yT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, il = !1;
    function nb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Fr = i.stateNode, il = !1;
              break e;
            }
            case re: {
              Fr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case he: {
              Fr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Fr = null, il = !1;
      }
      Jx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (iu(a), a.tag) {
        case ue:
          jr || jf(a, t);
        case Be: {
          {
            var i = Fr, u = il;
            Fr = null, Po(e, t, a), Fr = i, il = u, Fr !== null && (il ? RT(Fr, a.stateNode) : CT(Fr, a.stateNode));
          }
          return;
        }
        case Qt: {
          Fr !== null && (il ? TT(Fr, a.stateNode) : jy(Fr, a.stateNode));
          return;
        }
        case he: {
          {
            var s = Fr, f = il;
            Fr = a.stateNode.containerInfo, il = !0, Po(e, t, a), Fr = s, il = f;
          }
          return;
        }
        case ve:
        case Qe:
        case ot:
        case He: {
          if (!jr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Fl) !== Ga ? Rm(a, t, w) : (M & or) !== Ga && (ui(a), a.mode & Ie ? (Bl(), Rm(a, t, w), Vl(a)) : Rm(a, t, w), to())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case de: {
          if (!jr) {
            jf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case Cn: {
          Po(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & we
          ) {
            var F = jr;
            jr = F || a.memoizedState !== null, Po(e, t, a), jr = F;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function rb(e) {
      e.memoizedState;
    }
    function ab(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && BT(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Vx()), t.forEach(function(i) {
          var u = e_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (Uf !== null && Af !== null)
                Bp(Af, Uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function ib(e, t, a) {
      Uf = a, Af = e, Pt(t), BC(t, e), Pt(t), Uf = null, Af = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            nb(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = Js();
      if (t.subtreeFlags & ea)
        for (var p = t.child; p !== null; )
          Pt(p), BC(p, e), p = p.sibling;
      Pt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ve:
        case Qe:
        case ot:
        case He: {
          if (ll(t, e), $l(e), u & Ze) {
            try {
              al(Fl | ur, e, e.return), Ho(Fl | ur, e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            if (e.mode & Ie) {
              try {
                Bl(), al(or | ur, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
              Vl(e);
            } else
              try {
                al(or | ur, e, e.return);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case de: {
          ll(t, e), $l(e), u & Kr && i !== null && jf(i, i.return);
          return;
        }
        case ue: {
          ll(t, e), $l(e), u & Kr && i !== null && jf(i, i.return);
          {
            if (e.flags & Vt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
            }
            if (u & Ze) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    hT(f, g, y, v, p, e);
                  } catch (Ve) {
                    sn(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case Be: {
          if (ll(t, e), $l(e), u & Ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              mT(b, M, w);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
          }
          return;
        }
        case re: {
          if (ll(t, e), $l(e), u & Ze && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                VT(t.containerInfo);
              } catch (Ve) {
                sn(e, e.return, Ve);
              }
          }
          return;
        }
        case he: {
          ll(t, e), $l(e);
          return;
        }
        case De: {
          ll(t, e), $l(e);
          var F = e.child;
          if (F.flags & xl) {
            var le = F.stateNode, Le = F.memoizedState, xe = Le !== null;
            if (le.isHidden = xe, xe) {
              var Tt = F.alternate !== null && F.alternate.memoizedState !== null;
              Tt || Hb();
            }
          }
          if (u & Ze) {
            try {
              rb(e);
            } catch (Ve) {
              sn(e, e.return, Ve);
            }
            VC(e);
          }
          return;
        }
        case Ne: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & we
          ) {
            var D = jr;
            jr = D || mt, ll(t, e), jr = D;
          } else
            ll(t, e);
          if ($l(e), u & xl) {
            var H = e.stateNode, O = e.memoizedState, Q = O !== null, fe = e;
            if (H.isHidden = Q, Q && !mt && (fe.mode & we) !== Ce) {
              Se = fe;
              for (var oe = fe.child; oe !== null; )
                Se = oe, ub(oe), oe = oe.sibling;
            }
            Zx(fe, Q);
          }
          return;
        }
        case _t: {
          ll(t, e), $l(e), u & Ze && VC(e);
          return;
        }
        case Cn:
          return;
        default: {
          ll(t, e), $l(e);
          return;
        }
      }
    }
    function $l(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          tb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & Ua && (e.flags &= ~Ua);
    }
    function lb(e, t, a) {
      Uf = a, Af = t, Se = e, $C(e, t, a), Uf = null, Af = null;
    }
    function $C(e, t, a) {
      for (var i = (e.mode & we) !== Ce; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || Cm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || jr, b = Cm, w = jr;
            Cm = p, jr = g, jr && !w && (Se = u, ob(u));
            for (var M = s; M !== null; )
              Se = M, $C(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Cm = b, jr = w, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Er) !== Oe && s !== null ? (s.return = u, Se = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Er) !== Oe) {
          var u = i.alternate;
          Pt(i);
          try {
            Xx(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Rn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function ub(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ve:
          case Qe:
          case ot:
          case He: {
            if (t.mode & Ie)
              try {
                Bl(), al(or, t, t.return);
              } finally {
                Vl(t);
              }
            else
              al(or, t, t.return);
            break;
          }
          case de: {
            jf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ue: {
            jf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : IC(e);
      }
    }
    function IC(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function ob(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            YC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : YC(e);
      }
    }
    function YC(e) {
      for (; Se !== null; ) {
        var t = Se;
        Pt(t);
        try {
          Kx(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Rn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function sb(e, t, a, i) {
      Se = t, cb(t, e, a, i);
    }
    function cb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Aa) !== Oe && s !== null ? (s.return = u, Se = s) : fb(e, t, a, i);
      }
    }
    function fb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & cn) !== Oe) {
          Pt(u);
          try {
            db(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Rn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function db(e, t, a, i) {
      switch (t.tag) {
        case ve:
        case Qe:
        case He: {
          if (t.mode & Ie) {
            Wg();
            try {
              Ho(Ur | ur, t);
            } finally {
              Yg(t);
            }
          } else
            Ho(Ur | ur, t);
          break;
        }
      }
    }
    function pb(e) {
      Se = e, vb();
    }
    function vb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Ut) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, yb(u, e);
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
            Se = e;
          }
        }
        (e.subtreeFlags & Aa) !== Oe && t !== null ? (t.return = e, Se = t) : hb();
      }
    }
    function hb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & cn) !== Oe && (Pt(e), mb(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function mb(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          e.mode & Ie ? (Wg(), al(Ur | ur, e, e.return), Yg(e)) : al(Ur | ur, e, e.return);
          break;
        }
      }
    }
    function yb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Pt(a), Sb(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : gb(e);
      }
    }
    function gb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function Sb(e, t) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          e.mode & Ie ? (Wg(), al(Ur, e, t), Yg(e)) : al(Ur, e, t);
          break;
        }
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          try {
            Ho(or | ur, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Cb(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          try {
            Ho(Ur | ur, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He: {
          try {
            al(or | ur, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wS(e, e.return, t);
          break;
        }
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case ve:
        case Qe:
        case He:
          try {
            al(Ur | ur, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lp = Symbol.for;
      Lp("selector.component"), Lp("selector.has_pseudo_class"), Lp("selector.role"), Lp("selector.test_id"), Lp("selector.text");
    }
    var wb = [];
    function xb() {
      wb.forEach(function(e) {
        return e();
      });
    }
    var bb = A.ReactCurrentActQueue;
    function _b(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && bb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var kb = Math.ceil, kS = A.ReactCurrentDispatcher, DS = A.ReactCurrentOwner, Hr = A.ReactCurrentBatchConfig, ul = A.ReactCurrentActQueue, fr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Oi = (
      /*                */
      4
    ), _u = 0, Mp = 1, Ws = 2, Tm = 3, Np = 4, GC = 5, OS = 6, Rt = fr, wa = null, Nn = null, dr = B, Il = B, LS = Oo(B), pr = _u, zp = null, wm = B, Up = B, xm = B, Ap = null, qa = null, MS = 0, qC = 500, XC = 1 / 0, Db = 500, ku = null;
    function jp() {
      XC = gn() + Db;
    }
    function KC() {
      return XC;
    }
    var bm = !1, NS = null, Ff = null, Qs = !1, Vo = null, Fp = B, zS = [], US = null, Ob = 50, Hp = 0, AS = null, jS = !1, _m = !1, Lb = 50, Hf = 0, km = null, Pp = nn, Dm = B, ZC = !1;
    function Om() {
      return wa;
    }
    function xa() {
      return (Rt & (Pr | Oi)) !== fr ? gn() : (Pp !== nn || (Pp = gn()), Pp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & we) === Ce)
        return ke;
      if ((Rt & Pr) !== fr && dr !== B)
        return co(dr);
      var a = bw() !== xw;
      if (a) {
        if (Hr.transition !== null) {
          var i = Hr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Dm === Fn && (Dm = Bv()), Dm;
      }
      var u = Va();
      if (u !== Fn)
        return u;
      var s = cT();
      return s;
    }
    function Mb(e) {
      var t = e.mode;
      return (t & we) === Ce ? ke : aa();
    }
    function vr(e, t, a, i) {
      n_(), ZC && S("useInsertionEffect must not schedule updates."), jS && (_m = !0), pu(e, a, i), (Rt & Pr) !== B && e === wa ? i_(t) : (Ea && Yc(e, t, a), l_(t), e === wa && ((Rt & Pr) === fr && (Up = Xe(Up, a)), pr === Np && $o(e, dr)), Xa(e, i), a === ke && Rt === fr && (t.mode & we) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (jp(), Z0()));
    }
    function Nb(e, t, a) {
      var i = e.current;
      i.lanes = t, pu(e, t, a), Xa(e, a);
    }
    function zb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Pr) !== fr
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      jv(e, t);
      var i = fu(e, e === wa ? dr : B);
      if (i === B) {
        a !== null && v1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== IS)) {
        a == null && s !== ke && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && v1(a);
      var f;
      if (u === ke)
        e.tag === Lo ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), ow(t1.bind(null, e))) : K0(t1.bind(null, e)), ul.current !== null ? ul.current.push(Mo) : dT(function() {
          (Rt & (Pr | Oi)) === fr && Mo();
        }), f = null;
      else {
        var p;
        switch (lr(i)) {
          case Ln:
            p = gc;
            break;
          case Qi:
            p = au;
            break;
          case Ci:
            p = Ei;
            break;
          case fo:
            p = Sc;
            break;
          default:
            p = Ei;
            break;
        }
        f = YS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (Zw(), Pp = nn, Dm = B, (Rt & (Pr | Oi)) !== fr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ou();
      if (i && e.callbackNode !== a)
        return null;
      var u = fu(e, e === wa ? dr : B);
      if (u === B)
        return null;
      var s = !Ss(e, u) && !Vv(e, u) && !t, f = s ? Ib(e, u) : Mm(e, u);
      if (f !== _u) {
        if (f === Ws) {
          var p = Ol(e);
          p !== B && (u = p, f = FS(e, p));
        }
        if (f === Mp) {
          var v = zp;
          throw Gs(e, B), $o(e, u), Xa(e, gn()), v;
        }
        if (f === OS)
          $o(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !Ab(g)) {
            if (f = Mm(e, u), f === Ws) {
              var b = Ol(e);
              b !== B && (u = b, f = FS(e, b));
            }
            if (f === Mp) {
              var w = zp;
              throw Gs(e, B), $o(e, u), Xa(e, gn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Ub(e, f, u);
        }
      }
      return Xa(e, gn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Ap;
      if (Wc(e)) {
        var i = Gs(e, t);
        i.flags |= Tn, tw(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Ws) {
        var s = qa;
        qa = a, s !== null && e1(s);
      }
      return u;
    }
    function e1(e) {
      qa === null ? qa = e : qa.push.apply(qa, e);
    }
    function Ub(e, t, a) {
      switch (t) {
        case _u:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ws: {
          qs(e, qa, ku);
          break;
        }
        case Tm: {
          if ($o(e, a), Fv(a) && // do not delay if we're inside an act() scope
          !h1()) {
            var i = MS + qC - gn();
            if (i > 10) {
              var u = fu(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!du(s, a)) {
                xa(), $c(e, s);
                break;
              }
              e.timeoutHandle = Uy(qs.bind(null, e, qa, ku), i);
              break;
            }
          }
          qs(e, qa, ku);
          break;
        }
        case Np: {
          if ($o(e, a), Pv(a))
            break;
          if (!h1()) {
            var f = Uv(e, a), p = f, v = gn() - p, y = t_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(qs.bind(null, e, qa, ku), y);
              break;
            }
          }
          qs(e, qa, ku);
          break;
        }
        case GC: {
          qs(e, qa, ku);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ab(e) {
      for (var t = e; ; ) {
        if (t.flags & ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ss && v !== null) {
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
    function $o(e, t) {
      t = Es(t, xm), t = Es(t, Up), Iv(e, t);
    }
    function t1(e) {
      if (Jw(), (Rt & (Pr | Oi)) !== fr)
        throw new Error("Should not already be working.");
      Ou();
      var t = fu(e, B);
      if (!ia(t, ke))
        return Xa(e, gn()), null;
      var a = Mm(e, t);
      if (e.tag !== Lo && a === Ws) {
        var i = Ol(e);
        i !== B && (t = i, a = FS(e, i));
      }
      if (a === Mp) {
        var u = zp;
        throw Gs(e, B), $o(e, t), Xa(e, gn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, qs(e, qa, ku), Xa(e, gn()), null;
    }
    function jb(e, t) {
      t !== B && (Od(e, Xe(t, ke)), Xa(e, gn()), (Rt & (Pr | Oi)) === fr && (jp(), Mo()));
    }
    function HS(e, t) {
      var a = Rt;
      Rt |= QC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === fr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (jp(), Z0());
      }
    }
    function Fb(e, t, a, i, u) {
      var s = Va(), f = Hr.transition;
      try {
        return Hr.transition = null, wn(Ln), e(t, a, i, u);
      } finally {
        wn(s), Hr.transition = f, Rt === fr && jp();
      }
    }
    function Du(e) {
      Vo !== null && Vo.tag === Lo && (Rt & (Pr | Oi)) === fr && Ou();
      var t = Rt;
      Rt |= QC;
      var a = Hr.transition, i = Va();
      try {
        return Hr.transition = null, wn(Ln), e ? e() : void 0;
      } finally {
        wn(i), Hr.transition = a, Rt = t, (Rt & (Pr | Oi)) === fr && Mo();
      }
    }
    function n1() {
      return (Rt & (Pr | Oi)) !== fr;
    }
    function Lm(e, t) {
      oa(LS, Il, e), Il = Xe(Il, t);
    }
    function PS(e) {
      Il = LS.current, ua(LS, e);
    }
    function Gs(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, fT(a)), Nn !== null)
        for (var i = Nn.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      wa = e;
      var s = Xs(e.current, null);
      return Nn = s, dr = Il = t, pr = _u, zp = null, wm = B, Up = B, xm = B, Ap = null, qa = null, Nw(), Ji.discardPendingWarnings(), s;
    }
    function r1(e, t) {
      do {
        var a = Nn;
        try {
          if (Vh(), _E(), Rn(), DS.current = null, a === null || a.return === null) {
            pr = Mp, zp = t, Nn = null;
            return;
          }
          if (Je && a.mode & Ie && mm(a, !0), et)
            if (na(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              lu(a, i, dr);
            } else
              ds(a, t, dr);
          ox(e, a.return, a, t, dr), u1(a);
        } catch (u) {
          t = u, Nn === a && a !== null ? (a = a.return, Nn = a) : a = Nn;
          continue;
        }
        return;
      } while (!0);
    }
    function a1() {
      var e = kS.current;
      return kS.current = fm, e === null ? fm : e;
    }
    function i1(e) {
      kS.current = e;
    }
    function Hb() {
      MS = gn();
    }
    function Vp(e) {
      wm = Xe(e, wm);
    }
    function Pb() {
      pr === _u && (pr = Tm);
    }
    function VS() {
      (pr === _u || pr === Tm || pr === Ws) && (pr = Np), wa !== null && (gs(wm) || gs(Up)) && $o(wa, dr);
    }
    function Vb(e) {
      pr !== Np && (pr = Ws), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function Bb() {
      return pr === _u;
    }
    function Mm(e, t) {
      var a = Rt;
      Rt |= Pr;
      var i = a1();
      if (wa !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, dr), u.clear()), Ld(e, t);
        }
        ku = Rs(), Gs(e, t);
      }
      fn(t);
      do
        try {
          $b();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      if (Vh(), Rt = a, i1(i), Nn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return wc(), wa = null, dr = B, pr;
    }
    function $b() {
      for (; Nn !== null; )
        l1(Nn);
    }
    function Ib(e, t) {
      var a = Rt;
      Rt |= Pr;
      var i = a1();
      if (wa !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Bp(e, dr), u.clear()), Ld(e, t);
        }
        ku = Rs(), jp(), Gs(e, t);
      }
      fn(t);
      do
        try {
          Yb();
          break;
        } catch (s) {
          r1(e, s);
        }
      while (!0);
      return Vh(), i1(i), Rt = a, Nn !== null ? (Tc(), _u) : (wc(), wa = null, dr = B, pr);
    }
    function Yb() {
      for (; Nn !== null && !yc(); )
        l1(Nn);
    }
    function l1(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & Ie) !== Ce ? (Ig(e), a = BS(t, e, Il), mm(e, !0)) : a = BS(t, e, Il), Rn(), e.memoizedProps = e.pendingProps, a === null ? u1(e) : Nn = a, DS.current = null;
    }
    function u1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ya) === Oe) {
          Pt(t);
          var u = void 0;
          if ((t.mode & Ie) === Ce ? u = OC(a, t, Il) : (Ig(t), u = OC(a, t, Il), mm(t, !1)), Rn(), u !== null) {
            Nn = u;
            return;
          }
        } else {
          var s = Px(a, t);
          if (s !== null) {
            s.flags &= wv, Nn = s;
            return;
          }
          if ((t.mode & Ie) !== Ce) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ya, i.subtreeFlags = Oe, i.deletions = null;
          else {
            pr = OS, Nn = null;
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
      pr === _u && (pr = GC);
    }
    function qs(e, t, a) {
      var i = Va(), u = Hr.transition;
      try {
        Hr.transition = null, wn(Ln), Wb(e, t, a, i);
      } finally {
        Hr.transition = u, wn(i);
      }
      return null;
    }
    function Wb(e, t, a, i) {
      do
        Ou();
      while (Vo !== null);
      if (r_(), (Rt & (Pr | Oi)) !== fr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_l(s), u === null)
        return Ec(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = Xe(u.lanes, u.childLanes);
      Ic(e, f), e === wa && (wa = null, Nn = null, dr = B), ((u.subtreeFlags & Aa) !== Oe || (u.flags & Aa) !== Oe) && (Qs || (Qs = !0, US = a, YS(Ei, function() {
        return Ou(), null;
      })));
      var p = (u.subtreeFlags & (Ku | ea | Er | Aa)) !== Oe, v = (u.flags & (Ku | ea | Er | Aa)) !== Oe;
      if (p || v) {
        var y = Hr.transition;
        Hr.transition = null;
        var g = Va();
        wn(Ln);
        var b = Rt;
        Rt |= Oi, DS.current = null, Yx(e, u), ZE(), ib(e, u, s), aT(e.containerInfo), e.current = u, Rd(s), lb(u, e, s), no(), _v(), Rt = b, wn(g), Hr.transition = y;
      } else
        e.current = u, ZE();
      var w = Qs;
      if (Qs ? (Qs = !1, Vo = e, Fp = s) : (Hf = 0, km = null), f = e.pendingLanes, f === B && (Ff = null), w || f1(e.current, !1), Ju(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), xb(), Xa(e, gn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], le = F.stack, Le = F.digest;
          M(F.value, {
            componentStack: le,
            digest: Le
          });
        }
      if (bm) {
        bm = !1;
        var xe = NS;
        throw NS = null, xe;
      }
      return ia(Fp, ke) && e.tag !== Lo && Ou(), f = e.pendingLanes, ia(f, ke) ? (Kw(), e === AS ? Hp++ : (Hp = 0, AS = e)) : Hp = 0, Mo(), Ec(), null;
    }
    function Ou() {
      if (Vo !== null) {
        var e = lr(Fp), t = ly(Ci, e), a = Hr.transition, i = Va();
        try {
          return Hr.transition = null, wn(t), Gb();
        } finally {
          wn(i), Hr.transition = a;
        }
      }
      return !1;
    }
    function Qb(e) {
      zS.push(e), Qs || (Qs = !0, YS(Ei, function() {
        return Ou(), null;
      }));
    }
    function Gb() {
      if (Vo === null)
        return !1;
      var e = US;
      US = null;
      var t = Vo, a = Fp;
      if (Vo = null, Fp = B, (Rt & (Pr | Oi)) !== fr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, _m = !1, Nv(a);
      var i = Rt;
      Rt |= Oi, pb(t.current), sb(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          qx(t, f);
        }
      }
      Td(), f1(t.current, !0), Rt = i, Mo(), _m ? t === km ? Hf++ : (Hf = 0, km = t) : Hf = 0, jS = !1, _m = !1, Ha(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function o1(e) {
      return Ff !== null && Ff.has(e);
    }
    function qb(e) {
      Ff === null ? Ff = /* @__PURE__ */ new Set([e]) : Ff.add(e);
    }
    function Xb(e) {
      bm || (bm = !0, NS = e);
    }
    var Kb = Xb;
    function s1(e, t, a) {
      var i = Is(a, t), u = lC(e, i, ke), s = zo(e, u, ke), f = xa();
      s !== null && (pu(s, ke, f), Xa(s, f));
    }
    function sn(e, t, a) {
      if (Bx(a), $p(!1), e.tag === re) {
        s1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          s1(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !o1(s)) {
            var f = Is(a, e), p = oS(i, f, ke), v = zo(i, p, ke), y = xa();
            v !== null && (pu(v, ke, y), Xa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Zb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      $c(e, a), u_(e), wa === e && du(dr, a) && (pr === Np || pr === Tm && Fv(dr) && gn() - MS < qC ? Gs(e, B) : xm = Xe(xm, a)), Xa(e, u);
    }
    function c1(e, t) {
      t === Fn && (t = Mb(e));
      var a = xa(), i = Qa(e, t);
      i !== null && (pu(i, t, a), Xa(i, a));
    }
    function Jb(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), c1(e, a);
    }
    function e_(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), c1(e, a);
    }
    function t_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : kb(e / 1960) * 1960;
    }
    function n_() {
      if (Hp > Ob)
        throw Hp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > Lb && (Hf = 0, km = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function r_() {
      Ji.flushLegacyContextWarning(), Ji.flushPendingUnsafeLifecycleWarnings();
    }
    function f1(e, t) {
      Pt(e), Nm(e, Jr, Rb), t && Nm(e, ru, Tb), Nm(e, Jr, Eb), t && Nm(e, ru, Cb), Rn();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var zm = null;
    function d1(e) {
      {
        if ((Rt & Pr) !== fr || !(e.mode & we))
          return;
        var t = e.tag;
        if (t !== ut && t !== re && t !== de && t !== ve && t !== Qe && t !== ot && t !== He)
          return;
        var a = Ye(e) || "ReactComponent";
        if (zm !== null) {
          if (zm.has(a))
            return;
          zm.add(a);
        } else
          zm = /* @__PURE__ */ new Set([a]);
        var i = yn;
        try {
          Pt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : Rn();
        }
      }
    }
    var BS;
    {
      var a_ = null;
      BS = function(e, t, a) {
        var i = E1(a_, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (mw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Vh(), _E(), LC(e, t), E1(t, i), t.mode & Ie && Ig(t), nu(null, xC, null, e, t, a), ty()) {
            var u = pd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var p1 = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function i_(e) {
      if (Gr && !Gw())
        switch (e.tag) {
          case ve:
          case Qe:
          case He: {
            var t = Nn && Ye(Nn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            p1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), p1 = !0);
            break;
          }
        }
    }
    function Bp(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Yc(e, i, t);
        });
      }
    }
    var IS = {};
    function YS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), IS) : mc(e, t);
      }
    }
    function v1(e) {
      if (e !== IS)
        return bv(e);
    }
    function h1() {
      return ul.current !== null;
    }
    function l_(e) {
      {
        if (e.mode & we) {
          if (!WC())
            return;
        } else if (!_b() || Rt !== fr || e.tag !== ve && e.tag !== Qe && e.tag !== He)
          return;
        if (ul.current === null) {
          var t = yn;
          try {
            Pt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Pt(e) : Rn();
          }
        }
      }
    }
    function u_(e) {
      e.tag !== Lo && WC() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      ZC = e;
    }
    var Li = null, Pf = null, o_ = function(e) {
      Li = e;
    };
    function Vf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Vf(e);
    }
    function QS(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
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
    function m1(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case de: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ve: {
            (typeof i == "function" || s === Ue) && (u = !0);
            break;
          }
          case Qe: {
            (s === q || s === Ue) && (u = !0);
            break;
          }
          case ot:
          case He: {
            (s === gt || s === Ue) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function y1(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Pf === null && (Pf = /* @__PURE__ */ new WeakSet()), Pf.add(e);
      }
    }
    var s_ = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ou(), Du(function() {
          GS(e.current, i, a);
        });
      }
    }, c_ = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Ou(), Du(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function GS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ve:
          case He:
          case de:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Li(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === de ? g = !0 : y = !0));
        }
        if (Pf !== null && (Pf.has(e) || i !== null && Pf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Qa(e, ke);
          w !== null && vr(w, e, ke, nn);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var f_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ve:
          case He:
          case de:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? d_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function d_(e, t) {
      {
        var a = p_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function p_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
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
    var XS;
    {
      XS = !1;
      try {
        var g1 = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function v_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new v_(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function h_(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function m_(e) {
      if (typeof e == "function")
        return KS(e) ? de : ve;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return Qe;
        if (t === gt)
          return ot;
      }
      return ut;
    }
    function Xs(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ut:
        case ve:
        case He:
          a.type = Vf(e.type);
          break;
        case de:
          a.type = WS(e.type);
          break;
        case Qe:
          a.type = QS(e.type);
          break;
      }
      return a;
    }
    function y_(e, t) {
      e.flags &= ar | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = B, e.lanes = t, e.child = null, e.subtreeFlags = Oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function g_(e, t, a) {
      var i;
      return e === Lh ? (i = we, t === !0 && (i |= ct, i |= Ca)) : i = Ce, Ea && (i |= Ie), si(re, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = ut, p = e;
      if (typeof e == "function")
        KS(e) ? (f = de, p = WS(p)) : p = Vf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case ma:
            return Io(a.children, u, s, t);
          case pi:
            f = pt, u |= ct, (u & we) !== Ce && (u |= Ca);
            break;
          case vi:
            return S_(a, u, s, t);
          case Te:
            return E_(a, u, s, t);
          case ft:
            return C_(a, u, s, t);
          case Xt:
            return S1(a, u, s, t);
          case an:
          case nt:
          case Sr:
          case hi:
          case Un:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = at;
                  break e;
                case I:
                  f = pn;
                  break e;
                case q:
                  f = Qe, p = QS(p);
                  break e;
                case gt:
                  f = ot;
                  break e;
                case Ue:
                  f = rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = si(wt, e, i, t);
      return u.lanes = a, u;
    }
    function S_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(vt, e, i, t | Ie);
      return u.elementType = vi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function E_(e, t, a, i) {
      var u = si(De, e, i, t);
      return u.elementType = Te, u.lanes = a, u;
    }
    function C_(e, t, a, i) {
      var u = si(_t, e, i, t);
      return u.elementType = ft, u.lanes = a, u;
    }
    function S1(e, t, a, i) {
      var u = si(Ne, e, i, t);
      u.elementType = Xt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = si(Be, e, null, t);
      return i.lanes = a, i;
    }
    function R_() {
      var e = si(ue, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function T_(e) {
      var t = si(Qt, null, null, Ce);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function E1(e, t) {
      return e === null && (e = si(ut, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function w_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Cs(B), this.expirationTimes = Cs(nn), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Cs(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < hs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Lh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function C1(e, t, a, i, u, s, f, p, v, y) {
      var g = new w_(e, t, a, p, v), b = g_(t, s);
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
      return vg(b), g;
    }
    var n0 = "18.3.1";
    function x_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function R1(e) {
      if (!e)
        return oi;
      var t = Na(e), a = uw(t);
      if (t.tag === de) {
        var i = t.type;
        if (jl(i))
          return q0(t, i, a);
      }
      return a;
    }
    function b_(e, t) {
      {
        var a = Na(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ja(a);
        if (u === null)
          return null;
        if (u.mode & ct) {
          var s = Ye(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = yn;
            try {
              Pt(u), a.mode & ct ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : Rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function T1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return C1(e, t, v, y, a, i, u, s, f);
    }
    function w1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = C1(a, i, g, e, u, s, f, p, v);
      b.context = R1(null);
      var w = b.current, M = xa(), U = Bo(w), F = xu(M, U);
      return F.callback = t ?? null, zo(w, F, U), Nb(b, U, M), b;
    }
    function Ip(e, t, a, i) {
      Cd(t, e);
      var u = t.current, s = xa(), f = Bo(u);
      wd(f);
      var p = R1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && yn !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(yn) || "Unknown"));
      var v = xu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (vr(y, u, f, s), Wh(y, u, f)), f;
    }
    function Um(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function __(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (Wc(t)) {
            var a = _d(t);
            jb(t, a);
          }
          break;
        }
        case De: {
          Du(function() {
            var u = Qa(e, ke);
            if (u !== null) {
              var s = xa();
              vr(u, e, ke, s);
            }
          });
          var i = ke;
          i0(e, i);
          break;
        }
      }
    }
    function x1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $v(a.retryLane, t));
    }
    function i0(e, t) {
      x1(e, t);
      var a = e.alternate;
      a && x1(a, t);
    }
    function k_(e) {
      if (e.tag === De) {
        var t = ys, a = Qa(e, t);
        if (a !== null) {
          var i = xa();
          vr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function D_(e) {
      if (e.tag === De) {
        var t = Bo(e), a = Qa(e, t);
        if (a !== null) {
          var i = xa();
          vr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function b1(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var _1 = function(e) {
      return null;
    };
    function O_(e) {
      return _1(e);
    }
    var k1 = function(e) {
      return !1;
    };
    function L_(e) {
      return k1(e);
    }
    var D1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null, j1 = null;
    {
      var F1 = function(e, t, a) {
        var i = t[a], u = Et(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (Et(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = F1(e[i], t, a + 1), u);
      }, H1 = function(e, t) {
        return F1(e, t, 0);
      }, P1 = function(e, t, a, i) {
        var u = t[i], s = Et(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Et(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = P1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, V1 = function(e, t, a) {
        if (t.length !== a.length) {
          qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return P1(e, t, a, 0);
      }, B1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Et(e) ? e.slice() : rt({}, e);
        return s[u] = B1(e[u], t, a + 1, i), s;
      }, $1 = function(e, t, a) {
        return B1(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      D1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = $1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Qa(e, ke);
          f !== null && vr(f, e, ke, nn);
        }
      }, O1 = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = H1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Qa(e, ke);
          s !== null && vr(s, e, ke, nn);
        }
      }, L1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = V1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Qa(e, ke);
          f !== null && vr(f, e, ke, nn);
        }
      }, M1 = function(e, t, a) {
        e.pendingProps = $1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, ke);
        i !== null && vr(i, e, ke, nn);
      }, N1 = function(e, t) {
        e.pendingProps = H1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, ke);
        a !== null && vr(a, e, ke, nn);
      }, z1 = function(e, t, a) {
        e.pendingProps = V1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, ke);
        i !== null && vr(i, e, ke, nn);
      }, U1 = function(e) {
        var t = Qa(e, ke);
        t !== null && vr(t, e, ke, nn);
      }, A1 = function(e) {
        _1 = e;
      }, j1 = function(e) {
        k1 = e;
      };
    }
    function M_(e) {
      var t = ja(e);
      return t === null ? null : t.stateNode;
    }
    function N_(e) {
      return null;
    }
    function z_() {
      return yn;
    }
    function U_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return Ed({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: D1,
        overrideHookStateDeletePath: O1,
        overrideHookStateRenamePath: L1,
        overrideProps: M1,
        overridePropsDeletePath: N1,
        overridePropsRenamePath: z1,
        setErrorHandler: A1,
        setSuspenseHandler: j1,
        scheduleUpdate: U1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: M_,
        findFiberByHostInstance: t || N_,
        // React Refresh
        findHostInstancesForRefresh: f_,
        scheduleRefresh: s_,
        scheduleRoot: c_,
        setRefreshHandler: o_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: z_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var I1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : jm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = b1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, Am.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        n1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Ip(null, e, null, null);
        }), I0(t);
      }
    };
    function A_(e, t) {
      if (!jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Y1(e);
      var a = !1, i = !1, u = "", s = I1;
      t != null && (t.hydrate ? qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ei && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = T1(e, Lh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return Xd(p), new u0(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function j_(e) {
      e && sy(e);
    }
    Am.prototype.unstable_scheduleHydration = j_;
    function F_(e, t, a) {
      if (!jm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Y1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = I1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = w1(t, null, e, Lh, i, s, f, p, v);
      if (wh(y.current, e), Xd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Bw(y, b);
        }
      return new Am(y);
    }
    function jm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ai || e.nodeType === Xl || !P));
    }
    function Yp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === ai || e.nodeType === Xl || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function Y1(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), up(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var H_ = A.ReactCurrentOwner, W1;
    W1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = b1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === ai ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function P_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Um(f);
            s.call(w);
          };
        }
        var f = w1(
          t,
          i,
          e,
          Lo,
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
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return Xd(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Um(g);
            y.call(w);
          };
        }
        var g = T1(
          e,
          Lo,
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
        e._reactRootContainer = g, wh(g.current, e);
        var b = e.nodeType === An ? e.parentNode : e;
        return Xd(b), Du(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function V_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Fm(e, t, a, i, u) {
      W1(a), V_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = P_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Um(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Um(f);
    }
    var G1 = !1;
    function B_(e) {
      {
        G1 || (G1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = H_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : b_(e, "findDOMNode");
    }
    function $_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Fm(null, e, t, !0, a);
    }
    function I_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Fm(null, e, t, !1, a);
    }
    function Y_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !os(e))
        throw new Error("parentComponent must be a valid React Component");
      return Fm(e, t, a, !1, i);
    }
    var q1 = !1;
    function W_(e) {
      if (q1 || (q1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = up(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          Fm(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && Do(u)), f = e.nodeType === Xr && Yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ho(__), uy(k_), Gc(D_), Wv(Va), Qv(Tr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv(GR), fc(HS, Fb, Du);
    function Q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jm(t))
        throw new Error("Target container is not a DOM element.");
      return x_(e, t, null, a);
    }
    function G_(e, t, a, i) {
      return Y_(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, gf, xh, cc, is, HS]
    };
    function q_(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), A_(e, t);
    }
    function X_(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), F_(e, t, a);
    }
    function K_(e) {
      return n1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var Z_ = U_({
      findFiberByHostInstance: Us,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!Z_ && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var X1 = window.location.protocol;
      /^(https?|file):$/.test(X1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (X1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Za.createPortal = Q_, Za.createRoot = q_, Za.findDOMNode = B_, Za.flushSync = K_, Za.hydrate = $_, Za.hydrateRoot = X_, Za.render = I_, Za.unmountComponentAtNode = W_, Za.unstable_batchedUpdates = HS, Za.unstable_renderSubtreeIntoContainer = G_, Za.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
function dR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dR);
    } catch (J) {
      console.error(J);
    }
  }
}
process.env.NODE_ENV === "production" ? (dR(), v0.exports = uk()) : v0.exports = ok();
var sk = v0.exports, $f, Pm = sk;
if (process.env.NODE_ENV === "production")
  $f = Pm.createRoot, Pm.hydrateRoot;
else {
  var lR = Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  $f = function(J, G) {
    lR.usingClientEntryPoint = !0;
    try {
      return Pm.createRoot(J, G);
    } finally {
      lR.usingClientEntryPoint = !1;
    }
  };
}
const ck = () => /* @__PURE__ */ $t.jsx($t.Fragment, { children: /* @__PURE__ */ $t.jsx("h1", { children: "A COMPONENT" }) }), fk = ({ title: J, subtitle: G }) => /* @__PURE__ */ $t.jsxs($t.Fragment, { children: [
  /* @__PURE__ */ $t.jsx("h1", { children: J }),
  /* @__PURE__ */ $t.jsx("span", { children: G })
] }), dk = ({ banner: J, logo: G, description: A, link: dt }) => /* @__PURE__ */ $t.jsx($t.Fragment, { children: /* @__PURE__ */ $t.jsxs("div", { className: "first hero", children: [
  /* @__PURE__ */ $t.jsx("div", { className: "hero-profile-img", children: J }),
  /* @__PURE__ */ $t.jsx("div", { className: "hero-description-bk" }),
  /* @__PURE__ */ $t.jsx("div", { className: "hero-logo", children: G }),
  /* @__PURE__ */ $t.jsx("div", { className: "hero-description", children: A }),
  /* @__PURE__ */ $t.jsx("div", { className: "hero-btn", children: dt })
] }) }), pk = (J) => {
  console.log("ACCORDION"), console.log(J);
  const [G, A] = Ks.useState(!1);
  return /* @__PURE__ */ $t.jsxs("div", { className: "accordion-item", children: [
    /* @__PURE__ */ $t.jsxs("div", { className: "accordion-title", onClick: () => A(!G), children: [
      /* @__PURE__ */ $t.jsx("div", { className: "accordion-item-title", children: /* @__PURE__ */ $t.jsx("slot", { name: "acc-item-title" }) }),
      /* @__PURE__ */ $t.jsx("div", { children: G ? "-" : "+" })
    ] }),
    G && /* @__PURE__ */ $t.jsx("div", { className: "accordion-content", children: /* @__PURE__ */ $t.jsx("slot", { name: "acc-item-content" }) })
  ] });
}, vk = (J) => /* @__PURE__ */ $t.jsxs("div", { children: [
  /* @__PURE__ */ $t.jsx("h1", { children: J.mainTitle }),
  /* @__PURE__ */ $t.jsx("div", { className: "accordion", children: /* @__PURE__ */ $t.jsx(pk, { children: J.children }) })
] }), hk = ["module-id"], h0 = ["title"], uR = "liferay-a-simple-web-component", oR = "liferay-b-simple-web-component", sR = "liferay-c-simple-web-component", cR = "liferay-d-simple-web-component";
class mk extends HTMLElement {
  static get observedAttributes() {
    return hk;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = $f(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ $t.jsx(ck, {})
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
class yk extends HTMLElement {
  static get observedAttributes() {
    return h0;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = $f(this)), this.renderComponent();
  }
  renderComponent(G = this.getAttribute("subtitle") || "", A = this.getAttribute("title") || "") {
    this.root && this.root.render(
      /* @__PURE__ */ $t.jsx(fk, { title: A, subtitle: G })
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
class gk extends HTMLElement {
  static get observedAttributes() {
    return h0;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = $f(this.shadow)), this.renderComponent();
  }
  renderComponent(G = this.getAttribute("mainTitle") || "") {
    if (this.root) {
      const dt = Array.from(this.childNodes).map((Nt, qe) => /* @__PURE__ */ $t.jsx(Ks.Fragment, { children: Ks.createElement("div", {
        dangerouslySetInnerHTML: { __html: Nt.outerHTML }
      }) }, qe));
      this.root.render(
        /* @__PURE__ */ $t.jsx(vk, { mainTitle: G, children: dt })
      );
    }
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
class Sk extends HTMLElement {
  static get observedAttributes() {
    return h0;
  }
  constructor() {
    super(), this.shadow = this.attachShadow({ mode: "open" }), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = $f(this.shadow)), this.renderComponent();
  }
  renderComponent() {
    if (this.root) {
      const A = Array.from(this.childNodes).filter(
        (Nt) => Nt.nodeType === Node.ELEMENT_NODE
      ), dt = {};
      A.forEach((Nt) => {
        const qe = Nt.getAttribute("slot");
        qe && (dt[qe] = /* @__PURE__ */ $t.jsx(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: Nt.outerHTML
            }
          }
        ));
      }), console.log(dt), this.root.render(
        /* @__PURE__ */ $t.jsx(
          dk,
          {
            banner: dt.banner,
            logo: dt.logo,
            description: dt.description,
            link: dt.link
          }
        )
      );
    }
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.get(uR) || customElements.define(uR, mk);
customElements.get(oR) || customElements.define(oR, yk);
customElements.get(sR) || customElements.define(sR, gk);
customElements.get(cR) || customElements.define(cR, Sk);
