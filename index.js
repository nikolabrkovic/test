var d0 = { exports: {} }, Ip = {}, p0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function J_() {
  if (X1) return Et;
  X1 = 1;
  var ne = Symbol.for("react.element"), Z = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), Vt = Symbol.for("react.strict_mode"), on = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), S = Symbol.for("react.context"), Yt = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), de = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), re = Symbol.iterator;
  function he(_) {
    return _ === null || typeof _ != "object" ? null : (_ = re && _[re] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Be = Object.assign, Tt = {};
  function dt(_, P, ze) {
    this.props = _, this.context = P, this.refs = Tt, this.updater = ze || ue;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(_, P) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, P, "setState");
  }, dt.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function dn() {
  }
  dn.prototype = dt.prototype;
  function rt(_, P, ze) {
    this.props = _, this.context = P, this.refs = Tt, this.updater = ze || ue;
  }
  var We = rt.prototype = new dn();
  We.constructor = rt, Be(We, dt.prototype), We.isPureReactComponent = !0;
  var pt = Array.isArray, ke = Object.prototype.hasOwnProperty, ot = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tn(_, P, ze) {
    var Pe, Je = {}, Ze = null, mt = null;
    if (P != null) for (Pe in P.ref !== void 0 && (mt = P.ref), P.key !== void 0 && (Ze = "" + P.key), P) ke.call(P, Pe) && !He.hasOwnProperty(Pe) && (Je[Pe] = P[Pe]);
    var at = arguments.length - 2;
    if (at === 1) Je.children = ze;
    else if (1 < at) {
      for (var it = Array(at), Zt = 0; Zt < at; Zt++) it[Zt] = arguments[Zt + 2];
      Je.children = it;
    }
    if (_ && _.defaultProps) for (Pe in at = _.defaultProps, at) Je[Pe] === void 0 && (Je[Pe] = at[Pe]);
    return { $$typeof: ne, type: _, key: Ze, ref: mt, props: Je, _owner: ot.current };
  }
  function bn(_, P) {
    return { $$typeof: ne, type: _.type, key: P, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function It(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === ne;
  }
  function bt(_) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(ze) {
      return P[ze];
    });
  }
  var En = /\/+/g;
  function Ne(_, P) {
    return typeof _ == "object" && _ !== null && _.key != null ? bt("" + _.key) : P.toString(36);
  }
  function Xe(_, P, ze, Pe, Je) {
    var Ze = typeof _;
    (Ze === "undefined" || Ze === "boolean") && (_ = null);
    var mt = !1;
    if (_ === null) mt = !0;
    else switch (Ze) {
      case "string":
      case "number":
        mt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case ne:
          case Z:
            mt = !0;
        }
    }
    if (mt) return mt = _, Je = Je(mt), _ = Pe === "" ? "." + Ne(mt, 0) : Pe, pt(Je) ? (ze = "", _ != null && (ze = _.replace(En, "$&/") + "/"), Xe(Je, P, ze, "", function(Zt) {
      return Zt;
    })) : Je != null && (It(Je) && (Je = bn(Je, ze + (!Je.key || mt && mt.key === Je.key ? "" : ("" + Je.key).replace(En, "$&/") + "/") + _)), P.push(Je)), 1;
    if (mt = 0, Pe = Pe === "" ? "." : Pe + ":", pt(_)) for (var at = 0; at < _.length; at++) {
      Ze = _[at];
      var it = Pe + Ne(Ze, at);
      mt += Xe(Ze, P, ze, it, Je);
    }
    else if (it = he(_), typeof it == "function") for (_ = it.call(_), at = 0; !(Ze = _.next()).done; ) Ze = Ze.value, it = Pe + Ne(Ze, at++), mt += Xe(Ze, P, ze, it, Je);
    else if (Ze === "object") throw P = String(_), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return mt;
  }
  function zt(_, P, ze) {
    if (_ == null) return _;
    var Pe = [], Je = 0;
    return Xe(_, Pe, "", "", function(Ze) {
      return P.call(ze, Ze, Je++);
    }), Pe;
  }
  function wt(_) {
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
  var me = { current: null }, K = { transition: null }, be = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: K, ReactCurrentOwner: ot };
  function ae() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: zt, forEach: function(_, P, ze) {
    zt(_, function() {
      P.apply(this, arguments);
    }, ze);
  }, count: function(_) {
    var P = 0;
    return zt(_, function() {
      P++;
    }), P;
  }, toArray: function(_) {
    return zt(_, function(P) {
      return P;
    }) || [];
  }, only: function(_) {
    if (!It(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, Et.Component = dt, Et.Fragment = A, Et.Profiler = on, Et.PureComponent = rt, Et.StrictMode = Vt, Et.Suspense = ve, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Et.act = ae, Et.cloneElement = function(_, P, ze) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Pe = Be({}, _.props), Je = _.key, Ze = _.ref, mt = _._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Ze = P.ref, mt = ot.current), P.key !== void 0 && (Je = "" + P.key), _.type && _.type.defaultProps) var at = _.type.defaultProps;
      for (it in P) ke.call(P, it) && !He.hasOwnProperty(it) && (Pe[it] = P[it] === void 0 && at !== void 0 ? at[it] : P[it]);
    }
    var it = arguments.length - 2;
    if (it === 1) Pe.children = ze;
    else if (1 < it) {
      at = Array(it);
      for (var Zt = 0; Zt < it; Zt++) at[Zt] = arguments[Zt + 2];
      Pe.children = at;
    }
    return { $$typeof: ne, type: _.type, key: Je, ref: Ze, props: Pe, _owner: mt };
  }, Et.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: lt, _context: _ }, _.Consumer = _;
  }, Et.createElement = tn, Et.createFactory = function(_) {
    var P = tn.bind(null, _);
    return P.type = _, P;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(_) {
    return { $$typeof: Yt, render: _ };
  }, Et.isValidElement = It, Et.lazy = function(_) {
    return { $$typeof: ut, _payload: { _status: -1, _result: _ }, _init: wt };
  }, Et.memo = function(_, P) {
    return { $$typeof: de, type: _, compare: P === void 0 ? null : P };
  }, Et.startTransition = function(_) {
    var P = K.transition;
    K.transition = {};
    try {
      _();
    } finally {
      K.transition = P;
    }
  }, Et.unstable_act = ae, Et.useCallback = function(_, P) {
    return me.current.useCallback(_, P);
  }, Et.useContext = function(_) {
    return me.current.useContext(_);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(_) {
    return me.current.useDeferredValue(_);
  }, Et.useEffect = function(_, P) {
    return me.current.useEffect(_, P);
  }, Et.useId = function() {
    return me.current.useId();
  }, Et.useImperativeHandle = function(_, P, ze) {
    return me.current.useImperativeHandle(_, P, ze);
  }, Et.useInsertionEffect = function(_, P) {
    return me.current.useInsertionEffect(_, P);
  }, Et.useLayoutEffect = function(_, P) {
    return me.current.useLayoutEffect(_, P);
  }, Et.useMemo = function(_, P) {
    return me.current.useMemo(_, P);
  }, Et.useReducer = function(_, P, ze) {
    return me.current.useReducer(_, P, ze);
  }, Et.useRef = function(_) {
    return me.current.useRef(_);
  }, Et.useState = function(_) {
    return me.current.useState(_);
  }, Et.useSyncExternalStore = function(_, P, ze) {
    return me.current.useSyncExternalStore(_, P, ze);
  }, Et.useTransition = function() {
    return me.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var Wp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Wp.exports;
var K1;
function eD() {
  return K1 || (K1 = 1, function(ne, Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", Vt = Symbol.for("react.element"), on = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), de = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), Tt = Symbol.for("react.offscreen"), dt = Symbol.iterator, dn = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = dt && h[dt] || h[dn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pt = {
        transition: null
      }, ke = {
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
      }, He = {}, tn = null;
      function bn(h) {
        tn = h;
      }
      He.setExtraStackFrame = function(h) {
        tn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        tn && (h += tn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var It = !1, bt = !1, En = !1, Ne = !1, Xe = !1, zt = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: pt,
        ReactCurrentOwner: ot
      };
      zt.ReactDebugCurrentFrame = He, zt.ReactCurrentActQueue = ke;
      function wt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          K("warn", h, N);
        }
      }
      function me(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          K("error", h, N);
        }
      }
      function K(h, C, N) {
        {
          var F = zt.ReactDebugCurrentFrame, q = F.getStackAddendum();
          q !== "" && (C += "%s", N = N.concat([q]));
          var Ae = N.map(function(ie) {
            return String(ie);
          });
          Ae.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var be = {};
      function ae(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", q = F + "." + C;
          if (be[q])
            return;
          me("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), be[q] = !0;
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
        enqueueReplaceState: function(h, C, N, F) {
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
        enqueueSetState: function(h, C, N, F) {
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
        var Je = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ze = function(h, C) {
          Object.defineProperty(Pe.prototype, h, {
            get: function() {
              wt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var mt in Je)
          Je.hasOwnProperty(mt) && Ze(mt, Je[mt]);
      }
      function at() {
      }
      at.prototype = Pe.prototype;
      function it(h, C, N) {
        this.props = h, this.context = C, this.refs = ze, this.updater = N || _;
      }
      var Zt = it.prototype = new at();
      Zt.constructor = it, P(Zt, Pe.prototype), Zt.isPureReactComponent = !0;
      function vr() {
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
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function _n(h) {
        if (Hn(h))
          return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), Nn(h);
      }
      function Br(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var q = C.displayName || C.name || "";
        return q !== "" ? N + "(" + q + ")" : N;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case on:
            return "Portal";
          case Yt:
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
              return $r(C) + ".Consumer";
            case ve:
              var N = h;
              return $r(N._context) + ".Provider";
            case ut:
              return Br(h, h.render, "ForwardRef");
            case ue:
              var F = h.displayName || null;
              return F !== null ? F : Wn(h.type) || "Memo";
            case Be: {
              var q = h, Ae = q._payload, ie = q._init;
              try {
                return Wn(ie(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, fa, nr;
      nr = {};
      function Ir(h) {
        if (hr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function vn(h) {
        if (hr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var N = function() {
          mr || (mr = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ci(h, C) {
        var N = function() {
          fa || (fa = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function da(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Wn(ot.current.type);
          nr[C] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), nr[C] = !0);
        }
      }
      var J = function(h, C, N, F, q, Ae, ie) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Vt,
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
          value: F
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function _e(h, C, N) {
        var F, q = {}, Ae = null, ie = null, Me = null, st = null;
        if (C != null) {
          Ir(C) && (ie = C.ref, da(C)), vn(C) && (_n(C.key), Ae = "" + C.key), Me = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (F in C)
            hr.call(C, F) && !Yr.hasOwnProperty(F) && (q[F] = C[F]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          q.children = N;
        else if (xt > 1) {
          for (var qt = Array(xt), $t = 0; $t < xt; $t++)
            qt[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(qt), q.children = qt;
        }
        if (h && h.defaultProps) {
          var Xt = h.defaultProps;
          for (F in Xt)
            q[F] === void 0 && (q[F] = Xt[F]);
        }
        if (Ae || ie) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && wr(q, Jt), ie && ci(q, Jt);
        }
        return J(h, Ae, ie, Me, st, ot.current, q);
      }
      function et(h, C) {
        var N = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Mt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, q = P({}, h.props), Ae = h.key, ie = h.ref, Me = h._self, st = h._source, xt = h._owner;
        if (C != null) {
          Ir(C) && (ie = C.ref, xt = ot.current), vn(C) && (_n(C.key), Ae = "" + C.key);
          var qt;
          h.type && h.type.defaultProps && (qt = h.type.defaultProps);
          for (F in C)
            hr.call(C, F) && !Yr.hasOwnProperty(F) && (C[F] === void 0 && qt !== void 0 ? q[F] = qt[F] : q[F] = C[F]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          q.children = N;
        else if ($t > 1) {
          for (var Xt = Array($t), Jt = 0; Jt < $t; Jt++)
            Xt[Jt] = arguments[Jt + 2];
          q.children = Xt;
        }
        return J(h.type, Ae, ie, Me, st, xt, q);
      }
      function Ut(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Vt;
      }
      var Dn = ".", hn = ":";
      function yr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(q) {
          return N[q];
        });
        return "$" + F;
      }
      var Bt = !1, xr = /\/+/g;
      function At(h) {
        return h.replace(xr, "$&/");
      }
      function Ft(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (_n(h.key), yr("" + h.key)) : C.toString(36);
      }
      function Za(h, C, N, F, q) {
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
                case Vt:
                case on:
                  ie = !0;
              }
          }
        if (ie) {
          var Me = h, st = q(Me), xt = F === "" ? Dn + Ft(Me, 0) : F;
          if (pn(st)) {
            var qt = "";
            xt != null && (qt = At(xt) + "/"), Za(st, C, qt, "", function(Yf) {
              return Yf;
            });
          } else st != null && (Ut(st) && (st.key && (!Me || Me.key !== st.key) && _n(st.key), st = et(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Me || Me.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              At("" + st.key) + "/"
            ) : "") + xt
          )), C.push(st));
          return 1;
        }
        var $t, Xt, Jt = 0, St = F === "" ? Dn : F + hn;
        if (pn(h))
          for (var Ui = 0; Ui < h.length; Ui++)
            $t = h[Ui], Xt = St + Ft($t, Ui), Jt += Za($t, C, N, Xt, q);
        else {
          var $u = rt(h);
          if (typeof $u == "function") {
            var qo = h;
            $u === qo.entries && (Bt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var $f = $u.call(qo), ni, Xo = 0; !(ni = $f.next()).done; )
              $t = ni.value, Xt = St + Ft($t, Xo++), Jt += Za($t, C, N, Xt, q);
          } else if (Ae === "object") {
            var Ko = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Ko === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Ko) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function _a(h, C, N) {
        if (h == null)
          return h;
        var F = [], q = 0;
        return Za(h, F, "", "", function(Ae) {
          return C.call(N, Ae, q++);
        }), F;
      }
      function ul(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function Il(h, C, N) {
        _a(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Mu(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function Li(h) {
        if (!Ut(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ol(h) {
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
        var N = !1, F = !1, q = !1;
        {
          var Ae = {
            $$typeof: de,
            _context: C
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return F || (F = !0, me("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
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
                q || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), q = !0);
              }
            }
          }), C.Consumer = Ae;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, fi = 0, va = 1, Ja = 2;
      function br(h) {
        if (h._status === pa) {
          var C = h._result, N = C();
          if (N.then(function(Ae) {
            if (h._status === fi || h._status === pa) {
              var ie = h;
              ie._status = va, ie._result = Ae;
            }
          }, function(Ae) {
            if (h._status === fi || h._status === pa) {
              var ie = h;
              ie._status = Ja, ie._result = Ae;
            }
          }), h._status === pa) {
            var F = h;
            F._status = fi, F._result = N;
          }
        }
        if (h._status === va) {
          var q = h._result;
          return q === void 0 && me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || me(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function ha(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, N = {
          $$typeof: Be,
          _payload: C,
          _init: br
        };
        {
          var F, q;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ae, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ae) {
                me("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ae, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function di(h) {
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
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var pi;
      pi = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === Yt || Xe || h === S || h === re || h === he || Ne || h === Tt || It || bt || En || typeof h == "object" && h !== null && (h.$$typeof === Be || h.$$typeof === ue || h.$$typeof === ve || h.$$typeof === de || h.$$typeof === ut || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === pi || h.getModuleId !== void 0));
      }
      function Y(h, C) {
        R(h) || me("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(q) {
              F = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return N;
      }
      function G() {
        var h = We.current;
        return h === null && me(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Te(h) {
        var C = G();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? me("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && me("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function ft(h) {
        var C = G();
        return C.useState(h);
      }
      function yt(h, C, N) {
        var F = G();
        return F.useReducer(h, C, N);
      }
      function Ue(h) {
        var C = G();
        return C.useRef(h);
      }
      function tt(h, C) {
        var N = G();
        return N.useEffect(h, C);
      }
      function zn(h, C) {
        var N = G();
        return N.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var N = G();
        return N.useLayoutEffect(h, C);
      }
      function nn(h, C) {
        var N = G();
        return N.useCallback(h, C);
      }
      function gr(h, C) {
        var N = G();
        return N.useMemo(h, C);
      }
      function vi(h, C, N) {
        var F = G();
        return F.useImperativeHandle(h, C, N);
      }
      function _t(h, C) {
        {
          var N = G();
          return N.useDebugValue(h, C);
        }
      }
      function Gn() {
        var h = G();
        return h.useTransition();
      }
      function _r(h) {
        var C = G();
        return C.useDeferredValue(h);
      }
      function nt() {
        var h = G();
        return h.useId();
      }
      function Da(h, C, N) {
        var F = G();
        return F.useSyncExternalStore(h, C, N);
      }
      var sl = 0, Nu, cl, Qr, Io, Dr, Qo, Wo;
      function Ks() {
      }
      Ks.__reactDisabledLog = !0;
      function zu() {
        {
          if (sl === 0) {
            Nu = console.log, cl = console.info, Qr = console.warn, Io = console.error, Dr = console.group, Qo = console.groupCollapsed, Wo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ks,
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
          sl++;
        }
      }
      function fl() {
        {
          if (sl--, sl === 0) {
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
                value: cl
              }),
              warn: P({}, h, {
                value: Qr
              }),
              error: P({}, h, {
                value: Io
              }),
              group: P({}, h, {
                value: Dr
              }),
              groupCollapsed: P({}, h, {
                value: Qo
              }),
              groupEnd: P({}, h, {
                value: Wo
              })
            });
          }
          sl < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = zt.ReactCurrentDispatcher, kr;
      function dl(h, C, N) {
        {
          if (kr === void 0)
            try {
              throw Error();
            } catch (q) {
              var F = q.stack.trim().match(/\n( *(at )?)/);
              kr = F && F[1] || "";
            }
          return `
` + kr + h;
        }
      }
      var pl = !1, vl;
      {
        var Uu = typeof WeakMap == "function" ? WeakMap : Map;
        vl = new Uu();
      }
      function Au(h, C) {
        if (!h || pl)
          return "";
        {
          var N = vl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        pl = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = ei.current, ei.current = null, zu();
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
              } catch (St) {
                F = St;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (St) {
                F = St;
              }
              h.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (St) {
              F = St;
            }
            h();
          }
        } catch (St) {
          if (St && F && typeof St.stack == "string") {
            for (var Me = St.stack.split(`
`), st = F.stack.split(`
`), xt = Me.length - 1, qt = st.length - 1; xt >= 1 && qt >= 0 && Me[xt] !== st[qt]; )
              qt--;
            for (; xt >= 1 && qt >= 0; xt--, qt--)
              if (Me[xt] !== st[qt]) {
                if (xt !== 1 || qt !== 1)
                  do
                    if (xt--, qt--, qt < 0 || Me[xt] !== st[qt]) {
                      var $t = `
` + Me[xt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && vl.set(h, $t), $t;
                    }
                  while (xt >= 1 && qt >= 0);
                break;
              }
          }
        } finally {
          pl = !1, ei.current = Ae, fl(), Error.prepareStackTrace = q;
        }
        var Xt = h ? h.displayName || h.name : "", Jt = Xt ? dl(Xt) : "";
        return typeof h == "function" && vl.set(h, Jt), Jt;
      }
      function Mi(h, C, N) {
        return Au(h, !1);
      }
      function Bf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function hi(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Au(h, Bf(h));
        if (typeof h == "string")
          return dl(h);
        switch (h) {
          case re:
            return dl("Suspense");
          case he:
            return dl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ut:
              return Mi(h.render);
            case ue:
              return hi(h.type, C, N);
            case Be: {
              var F = h, q = F._payload, Ae = F._init;
              try {
                return hi(Ae(q), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Fu = zt.ReactDebugCurrentFrame;
      function Ql(h) {
        if (h) {
          var C = h._owner, N = hi(h.type, h._source, C ? C.type : null);
          Fu.setExtraStackFrame(N);
        } else
          Fu.setExtraStackFrame(null);
      }
      function ju(h, C, N, F, q) {
        {
          var Ae = Function.call.bind(hr);
          for (var ie in h)
            if (Ae(h, ie)) {
              var Me = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var st = Error((F || "React class") + ": " + N + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Me = h[ie](C, ie, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (xt) {
                Me = xt;
              }
              Me && !(Me instanceof Error) && (Ql(q), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ie, typeof Me), Ql(null)), Me instanceof Error && !(Me.message in Dt) && (Dt[Me.message] = !0, Ql(q), me("Failed %s type: %s", N, Me.message), Ql(null));
            }
        }
      }
      function gt(h) {
        if (h) {
          var C = h._owner, N = hi(h.type, h._source, C ? C.type : null);
          bn(N);
        } else
          bn(null);
      }
      var Hu;
      Hu = !1;
      function Pu() {
        if (ot.current) {
          var h = Wn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ie(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Wl(h) {
        return h != null ? Ie(h.__source) : "";
      }
      var mn = {};
      function Wr(h) {
        var C = Pu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function Or(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Wr(C);
          if (!mn[N]) {
            mn[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ot.current && (F = " It was passed a child from " + Wn(h._owner.type) + "."), gt(h), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), gt(null);
          }
        }
      }
      function hl(h, C) {
        if (typeof h == "object") {
          if (pn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              Ut(F) && Or(F, C);
            }
          else if (Ut(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = rt(h);
            if (typeof q == "function" && q !== h.entries)
              for (var Ae = q.call(h), ie; !(ie = Ae.next()).done; )
                Ut(ie.value) && Or(ie.value, C);
          }
        }
      }
      function Cn(h) {
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
            var F = Wn(C);
            ju(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Hu) {
            Hu = !0;
            var q = Wn(C);
            me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function jt(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              gt(h), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), gt(null);
              break;
            }
          }
          h.ref !== null && (gt(h), me("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
        }
      }
      function Zs(h, C, N) {
        var F = R(h);
        if (!F) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Wl(C);
          Ae ? q += Ae : q += Pu();
          var ie;
          h === null ? ie = "null" : pn(h) ? ie = "array" : h !== void 0 && h.$$typeof === Vt ? (ie = "<" + (Wn(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, me("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, q);
        }
        var Me = _e.apply(this, arguments);
        if (Me == null)
          return Me;
        if (F)
          for (var st = 2; st < arguments.length; st++)
            hl(arguments[st], h);
        return h === lt ? jt(Me) : Cn(Me), Me;
      }
      var Gr = !1;
      function qn(h) {
        var C = Zs.bind(null, h);
        return C.type = h, Gr || (Gr = !0, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function mi(h, C, N) {
        for (var F = Mt.apply(this, arguments), q = 2; q < arguments.length; q++)
          hl(arguments[q], F.type);
        return Cn(F), F;
      }
      function Js(h, C) {
        var N = pt.transition;
        pt.transition = {};
        var F = pt.transition;
        pt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (pt.transition = N, N === null && F._updatedFibers) {
            var q = F._updatedFibers.size;
            q > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Ni = !1, ml = null;
      function ec(h) {
        if (ml === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = ne && ne[C];
            ml = N.call(ne, "timers").setImmediate;
          } catch {
            ml = function(q) {
              Ni === !1 && (Ni = !0, typeof MessageChannel > "u" && me("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = q, Ae.port2.postMessage(void 0);
            };
          }
        return ml(h);
      }
      var ka = 0, yl = !1;
      function zi(h) {
        {
          var C = ka;
          ka++, ke.current === null && (ke.current = []);
          var N = ke.isBatchingLegacy, F;
          try {
            if (ke.isBatchingLegacy = !0, F = h(), !N && ke.didScheduleLegacyUpdate) {
              var q = ke.current;
              q !== null && (ke.didScheduleLegacyUpdate = !1, Sl(q));
            }
          } catch (Xt) {
            throw Oa(C), Xt;
          } finally {
            ke.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ae = F, ie = !1, Me = {
              then: function(Xt, Jt) {
                ie = !0, Ae.then(function(St) {
                  Oa(C), ka === 0 ? Vu(St, Xt, Jt) : Xt(St);
                }, function(St) {
                  Oa(C), Jt(St);
                });
              }
            };
            return !yl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (yl = !0, me("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var st = F;
            if (Oa(C), ka === 0) {
              var xt = ke.current;
              xt !== null && (Sl(xt), ke.current = null);
              var qt = {
                then: function(Xt, Jt) {
                  ke.current === null ? (ke.current = [], Vu(st, Xt, Jt)) : Xt(st);
                }
              };
              return qt;
            } else {
              var $t = {
                then: function(Xt, Jt) {
                  Xt(st);
                }
              };
              return $t;
            }
          }
        }
      }
      function Oa(h) {
        h !== ka - 1 && me("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function Vu(h, C, N) {
        {
          var F = ke.current;
          if (F !== null)
            try {
              Sl(F), ec(function() {
                F.length === 0 ? (ke.current = null, C(h)) : Vu(h, C, N);
              });
            } catch (q) {
              N(q);
            }
          else
            C(h);
        }
      }
      var gl = !1;
      function Sl(h) {
        if (!gl) {
          gl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            gl = !1;
          }
        }
      }
      var Gl = Zs, Bu = mi, Go = qn, ti = {
        map: _a,
        forEach: Il,
        count: ul,
        toArray: Mu,
        only: Li
      };
      Z.Children = ti, Z.Component = Pe, Z.Fragment = lt, Z.Profiler = Yt, Z.PureComponent = it, Z.StrictMode = S, Z.Suspense = re, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt, Z.act = zi, Z.cloneElement = Bu, Z.createContext = ol, Z.createElement = Gl, Z.createFactory = Go, Z.createRef = vr, Z.forwardRef = di, Z.isValidElement = Ut, Z.lazy = ha, Z.memo = Y, Z.startTransition = Js, Z.unstable_act = zi, Z.useCallback = nn, Z.useContext = Te, Z.useDebugValue = _t, Z.useDeferredValue = _r, Z.useEffect = tt, Z.useId = nt, Z.useImperativeHandle = vi, Z.useInsertionEffect = zn, Z.useLayoutEffect = Gt, Z.useMemo = gr, Z.useReducer = yt, Z.useRef = Ue, Z.useState = ft, Z.useSyncExternalStore = Da, Z.useTransition = Gn, Z.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wp, Wp.exports)), Wp.exports;
}
process.env.NODE_ENV === "production" ? p0.exports = J_() : p0.exports = eD();
var Pm = p0.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z1;
function tD() {
  if (Z1) return Ip;
  Z1 = 1;
  var ne = Pm, Z = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Vt = Object.prototype.hasOwnProperty, on = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Yt, ve, de) {
    var ut, re = {}, he = null, ue = null;
    de !== void 0 && (he = "" + de), ve.key !== void 0 && (he = "" + ve.key), ve.ref !== void 0 && (ue = ve.ref);
    for (ut in ve) Vt.call(ve, ut) && !lt.hasOwnProperty(ut) && (re[ut] = ve[ut]);
    if (Yt && Yt.defaultProps) for (ut in ve = Yt.defaultProps, ve) re[ut] === void 0 && (re[ut] = ve[ut]);
    return { $$typeof: Z, type: Yt, key: he, ref: ue, props: re, _owner: on.current };
  }
  return Ip.Fragment = A, Ip.jsx = S, Ip.jsxs = S, Ip;
}
var Qp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function nD() {
  return J1 || (J1 = 1, process.env.NODE_ENV !== "production" && function() {
    var ne = Pm, Z = Symbol.for("react.element"), A = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), on = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Be = Symbol.iterator, Tt = "@@iterator";
    function dt(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = Be && R[Be] || R[Tt];
      return typeof Y == "function" ? Y : null;
    }
    var dn = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var Y = arguments.length, G = new Array(Y > 1 ? Y - 1 : 0), Te = 1; Te < Y; Te++)
          G[Te - 1] = arguments[Te];
        We("error", R, G);
      }
    }
    function We(R, Y, G) {
      {
        var Te = dn.ReactDebugCurrentFrame, ft = Te.getStackAddendum();
        ft !== "" && (Y += "%s", G = G.concat([ft]));
        var yt = G.map(function(Ue) {
          return String(Ue);
        });
        yt.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, yt);
      }
    }
    var pt = !1, ke = !1, ot = !1, He = !1, tn = !1, bn;
    bn = Symbol.for("react.module.reference");
    function It(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Vt || R === lt || tn || R === on || R === de || R === ut || He || R === ue || pt || ke || ot || typeof R == "object" && R !== null && (R.$$typeof === he || R.$$typeof === re || R.$$typeof === S || R.$$typeof === Yt || R.$$typeof === ve || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === bn || R.getModuleId !== void 0));
    }
    function bt(R, Y, G) {
      var Te = R.displayName;
      if (Te)
        return Te;
      var ft = Y.displayName || Y.name || "";
      return ft !== "" ? G + "(" + ft + ")" : G;
    }
    function En(R) {
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
        case Vt:
          return "Fragment";
        case A:
          return "Portal";
        case lt:
          return "Profiler";
        case on:
          return "StrictMode";
        case de:
          return "Suspense";
        case ut:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Yt:
            var Y = R;
            return En(Y) + ".Consumer";
          case S:
            var G = R;
            return En(G._context) + ".Provider";
          case ve:
            return bt(R, R.render, "ForwardRef");
          case re:
            var Te = R.displayName || null;
            return Te !== null ? Te : Ne(R.type) || "Memo";
          case he: {
            var ft = R, yt = ft._payload, Ue = ft._init;
            try {
              return Ne(Ue(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, zt = 0, wt, me, K, be, ae, _, P;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function Pe() {
      {
        if (zt === 0) {
          wt = console.log, me = console.info, K = console.warn, be = console.error, ae = console.group, _ = console.groupCollapsed, P = console.groupEnd;
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
        zt++;
      }
    }
    function Je() {
      {
        if (zt--, zt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, R, {
              value: wt
            }),
            info: Xe({}, R, {
              value: me
            }),
            warn: Xe({}, R, {
              value: K
            }),
            error: Xe({}, R, {
              value: be
            }),
            group: Xe({}, R, {
              value: ae
            }),
            groupCollapsed: Xe({}, R, {
              value: _
            }),
            groupEnd: Xe({}, R, {
              value: P
            })
          });
        }
        zt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ze = dn.ReactCurrentDispatcher, mt;
    function at(R, Y, G) {
      {
        if (mt === void 0)
          try {
            throw Error();
          } catch (ft) {
            var Te = ft.stack.trim().match(/\n( *(at )?)/);
            mt = Te && Te[1] || "";
          }
        return `
` + mt + R;
      }
    }
    var it = !1, Zt;
    {
      var vr = typeof WeakMap == "function" ? WeakMap : Map;
      Zt = new vr();
    }
    function Vr(R, Y) {
      if (!R || it)
        return "";
      {
        var G = Zt.get(R);
        if (G !== void 0)
          return G;
      }
      var Te;
      it = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var yt;
      yt = Ze.current, Ze.current = null, Pe();
      try {
        if (Y) {
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
            } catch (Gn) {
              Te = Gn;
            }
            Reflect.construct(R, [], Ue);
          } else {
            try {
              Ue.call();
            } catch (Gn) {
              Te = Gn;
            }
            R.call(Ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            Te = Gn;
          }
          R();
        }
      } catch (Gn) {
        if (Gn && Te && typeof Gn.stack == "string") {
          for (var tt = Gn.stack.split(`
`), zn = Te.stack.split(`
`), Gt = tt.length - 1, nn = zn.length - 1; Gt >= 1 && nn >= 0 && tt[Gt] !== zn[nn]; )
            nn--;
          for (; Gt >= 1 && nn >= 0; Gt--, nn--)
            if (tt[Gt] !== zn[nn]) {
              if (Gt !== 1 || nn !== 1)
                do
                  if (Gt--, nn--, nn < 0 || tt[Gt] !== zn[nn]) {
                    var gr = `
` + tt[Gt].replace(" at new ", " at ");
                    return R.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", R.displayName)), typeof R == "function" && Zt.set(R, gr), gr;
                  }
                while (Gt >= 1 && nn >= 0);
              break;
            }
        }
      } finally {
        it = !1, Ze.current = yt, Je(), Error.prepareStackTrace = ft;
      }
      var vi = R ? R.displayName || R.name : "", _t = vi ? at(vi) : "";
      return typeof R == "function" && Zt.set(R, _t), _t;
    }
    function pn(R, Y, G) {
      return Vr(R, !1);
    }
    function Qn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Hn(R, Y, G) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Vr(R, Qn(R));
      if (typeof R == "string")
        return at(R);
      switch (R) {
        case de:
          return at("Suspense");
        case ut:
          return at("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ve:
            return pn(R.render);
          case re:
            return Hn(R.type, Y, G);
          case he: {
            var Te = R, ft = Te._payload, yt = Te._init;
            try {
              return Hn(yt(ft), Y, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, _n = {}, Br = dn.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var Y = R._owner, G = Hn(R.type, R._source, Y ? Y.type : null);
        Br.setExtraStackFrame(G);
      } else
        Br.setExtraStackFrame(null);
    }
    function Wn(R, Y, G, Te, ft) {
      {
        var yt = Function.call.bind(Nn);
        for (var Ue in R)
          if (yt(R, Ue)) {
            var tt = void 0;
            try {
              if (typeof R[Ue] != "function") {
                var zn = Error((Te || "React class") + ": " + G + " type `" + Ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              tt = R[Ue](Y, Ue, Te, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Gt) {
              tt = Gt;
            }
            tt && !(tt instanceof Error) && ($r(ft), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", G, Ue, typeof tt), $r(null)), tt instanceof Error && !(tt.message in _n) && (_n[tt.message] = !0, $r(ft), rt("Failed %s type: %s", G, tt.message), $r(null));
          }
      }
    }
    var hr = Array.isArray;
    function Yr(R) {
      return hr(R);
    }
    function mr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, G = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return G;
      }
    }
    function fa(R) {
      try {
        return nr(R), !1;
      } catch {
        return !0;
      }
    }
    function nr(R) {
      return "" + R;
    }
    function Ir(R) {
      if (fa(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), nr(R);
    }
    var vn = dn.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ci, da, J;
    J = {};
    function _e(R) {
      if (Nn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function et(R) {
      if (Nn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, Y) {
      if (typeof R.ref == "string" && vn.current && Y && vn.current.stateNode !== Y) {
        var G = Ne(vn.current.type);
        J[G] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(vn.current.type), R.ref), J[G] = !0);
      }
    }
    function Ut(R, Y) {
      {
        var G = function() {
          ci || (ci = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Dn(R, Y) {
      {
        var G = function() {
          da || (da = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        G.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var hn = function(R, Y, G, Te, ft, yt, Ue) {
      var tt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Z,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: G,
        props: Ue,
        // Record the component responsible for creating this element.
        _owner: yt
      };
      return tt._store = {}, Object.defineProperty(tt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(tt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(tt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(tt.props), Object.freeze(tt)), tt;
    };
    function yr(R, Y, G, Te, ft) {
      {
        var yt, Ue = {}, tt = null, zn = null;
        G !== void 0 && (Ir(G), tt = "" + G), et(Y) && (Ir(Y.key), tt = "" + Y.key), _e(Y) && (zn = Y.ref, Mt(Y, ft));
        for (yt in Y)
          Nn.call(Y, yt) && !wr.hasOwnProperty(yt) && (Ue[yt] = Y[yt]);
        if (R && R.defaultProps) {
          var Gt = R.defaultProps;
          for (yt in Gt)
            Ue[yt] === void 0 && (Ue[yt] = Gt[yt]);
        }
        if (tt || zn) {
          var nn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          tt && Ut(Ue, nn), zn && Dn(Ue, nn);
        }
        return hn(R, tt, zn, ft, Te, vn.current, Ue);
      }
    }
    var Bt = dn.ReactCurrentOwner, xr = dn.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Y = R._owner, G = Hn(R.type, R._source, Y ? Y.type : null);
        xr.setExtraStackFrame(G);
      } else
        xr.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function Za(R) {
      return typeof R == "object" && R !== null && R.$$typeof === Z;
    }
    function _a() {
      {
        if (Bt.current) {
          var R = Ne(Bt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ul(R) {
      return "";
    }
    var Il = {};
    function Mu(R) {
      {
        var Y = _a();
        if (!Y) {
          var G = typeof R == "string" ? R : R.displayName || R.name;
          G && (Y = `

Check the top-level render call using <` + G + ">.");
        }
        return Y;
      }
    }
    function Li(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var G = Mu(Y);
        if (Il[G])
          return;
        Il[G] = !0;
        var Te = "";
        R && R._owner && R._owner !== Bt.current && (Te = " It was passed a child from " + Ne(R._owner.type) + "."), At(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Te), At(null);
      }
    }
    function ol(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var G = 0; G < R.length; G++) {
            var Te = R[G];
            Za(Te) && Li(Te, Y);
          }
        else if (Za(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ft = dt(R);
          if (typeof ft == "function" && ft !== R.entries)
            for (var yt = ft.call(R), Ue; !(Ue = yt.next()).done; )
              Za(Ue.value) && Li(Ue.value, Y);
        }
      }
    }
    function pa(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var G;
        if (typeof Y == "function")
          G = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === ve || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === re))
          G = Y.propTypes;
        else
          return;
        if (G) {
          var Te = Ne(Y);
          Wn(G, R.props, "prop", Te, R);
        } else if (Y.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var ft = Ne(Y);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fi(R) {
      {
        for (var Y = Object.keys(R.props), G = 0; G < Y.length; G++) {
          var Te = Y[G];
          if (Te !== "children" && Te !== "key") {
            At(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var va = {};
    function Ja(R, Y, G, Te, ft, yt) {
      {
        var Ue = It(R);
        if (!Ue) {
          var tt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (tt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = ul();
          zn ? tt += zn : tt += _a();
          var Gt;
          R === null ? Gt = "null" : Yr(R) ? Gt = "array" : R !== void 0 && R.$$typeof === Z ? (Gt = "<" + (Ne(R.type) || "Unknown") + " />", tt = " Did you accidentally export a JSX literal instead of a component?") : Gt = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Gt, tt);
        }
        var nn = yr(R, Y, G, ft, yt);
        if (nn == null)
          return nn;
        if (Ue) {
          var gr = Y.children;
          if (gr !== void 0)
            if (Te)
              if (Yr(gr)) {
                for (var vi = 0; vi < gr.length; vi++)
                  ol(gr[vi], R);
                Object.freeze && Object.freeze(gr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ol(gr, R);
        }
        if (Nn.call(Y, "key")) {
          var _t = Ne(R), Gn = Object.keys(Y).filter(function(Da) {
            return Da !== "key";
          }), _r = Gn.length > 0 ? "{key: someKey, " + Gn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!va[_t + _r]) {
            var nt = Gn.length > 0 ? "{" + Gn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, _t, nt, _t), va[_t + _r] = !0;
          }
        }
        return R === Vt ? fi(nn) : pa(nn), nn;
      }
    }
    function br(R, Y, G) {
      return Ja(R, Y, G, !0);
    }
    function ha(R, Y, G) {
      return Ja(R, Y, G, !1);
    }
    var di = ha, pi = br;
    Qp.Fragment = Vt, Qp.jsx = di, Qp.jsxs = pi;
  }()), Qp;
}
process.env.NODE_ENV === "production" ? d0.exports = tD() : d0.exports = nD();
var Lu = d0.exports, v0 = { exports: {} }, Xa = {}, Fm = { exports: {} }, c0 = {};
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
function rD() {
  return eR || (eR = 1, function(ne) {
    function Z(K, be) {
      var ae = K.length;
      K.push(be);
      e: for (; 0 < ae; ) {
        var _ = ae - 1 >>> 1, P = K[_];
        if (0 < on(P, be)) K[_] = be, K[ae] = P, ae = _;
        else break e;
      }
    }
    function A(K) {
      return K.length === 0 ? null : K[0];
    }
    function Vt(K) {
      if (K.length === 0) return null;
      var be = K[0], ae = K.pop();
      if (ae !== be) {
        K[0] = ae;
        e: for (var _ = 0, P = K.length, ze = P >>> 1; _ < ze; ) {
          var Pe = 2 * (_ + 1) - 1, Je = K[Pe], Ze = Pe + 1, mt = K[Ze];
          if (0 > on(Je, ae)) Ze < P && 0 > on(mt, Je) ? (K[_] = mt, K[Ze] = ae, _ = Ze) : (K[_] = Je, K[Pe] = ae, _ = Pe);
          else if (Ze < P && 0 > on(mt, ae)) K[_] = mt, K[Ze] = ae, _ = Ze;
          else break e;
        }
      }
      return be;
    }
    function on(K, be) {
      var ae = K.sortIndex - be.sortIndex;
      return ae !== 0 ? ae : K.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var lt = performance;
      ne.unstable_now = function() {
        return lt.now();
      };
    } else {
      var S = Date, Yt = S.now();
      ne.unstable_now = function() {
        return S.now() - Yt;
      };
    }
    var ve = [], de = [], ut = 1, re = null, he = 3, ue = !1, Be = !1, Tt = !1, dt = typeof setTimeout == "function" ? setTimeout : null, dn = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(K) {
      for (var be = A(de); be !== null; ) {
        if (be.callback === null) Vt(de);
        else if (be.startTime <= K) Vt(de), be.sortIndex = be.expirationTime, Z(ve, be);
        else break;
        be = A(de);
      }
    }
    function pt(K) {
      if (Tt = !1, We(K), !Be) if (A(ve) !== null) Be = !0, wt(ke);
      else {
        var be = A(de);
        be !== null && me(pt, be.startTime - K);
      }
    }
    function ke(K, be) {
      Be = !1, Tt && (Tt = !1, dn(tn), tn = -1), ue = !0;
      var ae = he;
      try {
        for (We(be), re = A(ve); re !== null && (!(re.expirationTime > be) || K && !bt()); ) {
          var _ = re.callback;
          if (typeof _ == "function") {
            re.callback = null, he = re.priorityLevel;
            var P = _(re.expirationTime <= be);
            be = ne.unstable_now(), typeof P == "function" ? re.callback = P : re === A(ve) && Vt(ve), We(be);
          } else Vt(ve);
          re = A(ve);
        }
        if (re !== null) var ze = !0;
        else {
          var Pe = A(de);
          Pe !== null && me(pt, Pe.startTime - be), ze = !1;
        }
        return ze;
      } finally {
        re = null, he = ae, ue = !1;
      }
    }
    var ot = !1, He = null, tn = -1, bn = 5, It = -1;
    function bt() {
      return !(ne.unstable_now() - It < bn);
    }
    function En() {
      if (He !== null) {
        var K = ne.unstable_now();
        It = K;
        var be = !0;
        try {
          be = He(!0, K);
        } finally {
          be ? Ne() : (ot = !1, He = null);
        }
      } else ot = !1;
    }
    var Ne;
    if (typeof rt == "function") Ne = function() {
      rt(En);
    };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), zt = Xe.port2;
      Xe.port1.onmessage = En, Ne = function() {
        zt.postMessage(null);
      };
    } else Ne = function() {
      dt(En, 0);
    };
    function wt(K) {
      He = K, ot || (ot = !0, Ne());
    }
    function me(K, be) {
      tn = dt(function() {
        K(ne.unstable_now());
      }, be);
    }
    ne.unstable_IdlePriority = 5, ne.unstable_ImmediatePriority = 1, ne.unstable_LowPriority = 4, ne.unstable_NormalPriority = 3, ne.unstable_Profiling = null, ne.unstable_UserBlockingPriority = 2, ne.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, ne.unstable_continueExecution = function() {
      Be || ue || (Be = !0, wt(ke));
    }, ne.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : bn = 0 < K ? Math.floor(1e3 / K) : 5;
    }, ne.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, ne.unstable_getFirstCallbackNode = function() {
      return A(ve);
    }, ne.unstable_next = function(K) {
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
        return K();
      } finally {
        he = ae;
      }
    }, ne.unstable_pauseExecution = function() {
    }, ne.unstable_requestPaint = function() {
    }, ne.unstable_runWithPriority = function(K, be) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var ae = he;
      he = K;
      try {
        return be();
      } finally {
        he = ae;
      }
    }, ne.unstable_scheduleCallback = function(K, be, ae) {
      var _ = ne.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? _ + ae : _) : ae = _, K) {
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
      return P = ae + P, K = { id: ut++, callback: be, priorityLevel: K, startTime: ae, expirationTime: P, sortIndex: -1 }, ae > _ ? (K.sortIndex = ae, Z(de, K), A(ve) === null && K === A(de) && (Tt ? (dn(tn), tn = -1) : Tt = !0, me(pt, ae - _))) : (K.sortIndex = P, Z(ve, K), Be || ue || (Be = !0, wt(ke))), K;
    }, ne.unstable_shouldYield = bt, ne.unstable_wrapCallback = function(K) {
      var be = he;
      return function() {
        var ae = he;
        he = be;
        try {
          return K.apply(this, arguments);
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
var tR;
function aD() {
  return tR || (tR = 1, function(ne) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Z = !1, A = !1, Vt = 5;
      function on(J, _e) {
        var et = J.length;
        J.push(_e), Yt(J, _e, et);
      }
      function lt(J) {
        return J.length === 0 ? null : J[0];
      }
      function S(J) {
        if (J.length === 0)
          return null;
        var _e = J[0], et = J.pop();
        return et !== _e && (J[0] = et, ve(J, et, 0)), _e;
      }
      function Yt(J, _e, et) {
        for (var Mt = et; Mt > 0; ) {
          var Ut = Mt - 1 >>> 1, Dn = J[Ut];
          if (de(Dn, _e) > 0)
            J[Ut] = _e, J[Mt] = Dn, Mt = Ut;
          else
            return;
        }
      }
      function ve(J, _e, et) {
        for (var Mt = et, Ut = J.length, Dn = Ut >>> 1; Mt < Dn; ) {
          var hn = (Mt + 1) * 2 - 1, yr = J[hn], Bt = hn + 1, xr = J[Bt];
          if (de(yr, _e) < 0)
            Bt < Ut && de(xr, yr) < 0 ? (J[Mt] = xr, J[Bt] = _e, Mt = Bt) : (J[Mt] = yr, J[hn] = _e, Mt = hn);
          else if (Bt < Ut && de(xr, _e) < 0)
            J[Mt] = xr, J[Bt] = _e, Mt = Bt;
          else
            return;
        }
      }
      function de(J, _e) {
        var et = J.sortIndex - _e.sortIndex;
        return et !== 0 ? et : J.id - _e.id;
      }
      var ut = 1, re = 2, he = 3, ue = 4, Be = 5;
      function Tt(J, _e) {
      }
      var dt = typeof performance == "object" && typeof performance.now == "function";
      if (dt) {
        var dn = performance;
        ne.unstable_now = function() {
          return dn.now();
        };
      } else {
        var rt = Date, We = rt.now();
        ne.unstable_now = function() {
          return rt.now() - We;
        };
      }
      var pt = 1073741823, ke = -1, ot = 250, He = 5e3, tn = 1e4, bn = pt, It = [], bt = [], En = 1, Ne = null, Xe = he, zt = !1, wt = !1, me = !1, K = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(J) {
        for (var _e = lt(bt); _e !== null; ) {
          if (_e.callback === null)
            S(bt);
          else if (_e.startTime <= J)
            S(bt), _e.sortIndex = _e.expirationTime, on(It, _e);
          else
            return;
          _e = lt(bt);
        }
      }
      function P(J) {
        if (me = !1, _(J), !wt)
          if (lt(It) !== null)
            wt = !0, Ir(ze);
          else {
            var _e = lt(bt);
            _e !== null && vn(P, _e.startTime - J);
          }
      }
      function ze(J, _e) {
        wt = !1, me && (me = !1, wr()), zt = !0;
        var et = Xe;
        try {
          var Mt;
          if (!A) return Pe(J, _e);
        } finally {
          Ne = null, Xe = et, zt = !1;
        }
      }
      function Pe(J, _e) {
        var et = _e;
        for (_(et), Ne = lt(It); Ne !== null && !Z && !(Ne.expirationTime > et && (!J || $r())); ) {
          var Mt = Ne.callback;
          if (typeof Mt == "function") {
            Ne.callback = null, Xe = Ne.priorityLevel;
            var Ut = Ne.expirationTime <= et, Dn = Mt(Ut);
            et = ne.unstable_now(), typeof Dn == "function" ? Ne.callback = Dn : Ne === lt(It) && S(It), _(et);
          } else
            S(It);
          Ne = lt(It);
        }
        if (Ne !== null)
          return !0;
        var hn = lt(bt);
        return hn !== null && vn(P, hn.startTime - et), !1;
      }
      function Je(J, _e) {
        switch (J) {
          case ut:
          case re:
          case he:
          case ue:
          case Be:
            break;
          default:
            J = he;
        }
        var et = Xe;
        Xe = J;
        try {
          return _e();
        } finally {
          Xe = et;
        }
      }
      function Ze(J) {
        var _e;
        switch (Xe) {
          case ut:
          case re:
          case he:
            _e = he;
            break;
          default:
            _e = Xe;
            break;
        }
        var et = Xe;
        Xe = _e;
        try {
          return J();
        } finally {
          Xe = et;
        }
      }
      function mt(J) {
        var _e = Xe;
        return function() {
          var et = Xe;
          Xe = _e;
          try {
            return J.apply(this, arguments);
          } finally {
            Xe = et;
          }
        };
      }
      function at(J, _e, et) {
        var Mt = ne.unstable_now(), Ut;
        if (typeof et == "object" && et !== null) {
          var Dn = et.delay;
          typeof Dn == "number" && Dn > 0 ? Ut = Mt + Dn : Ut = Mt;
        } else
          Ut = Mt;
        var hn;
        switch (J) {
          case ut:
            hn = ke;
            break;
          case re:
            hn = ot;
            break;
          case Be:
            hn = bn;
            break;
          case ue:
            hn = tn;
            break;
          case he:
          default:
            hn = He;
            break;
        }
        var yr = Ut + hn, Bt = {
          id: En++,
          callback: _e,
          priorityLevel: J,
          startTime: Ut,
          expirationTime: yr,
          sortIndex: -1
        };
        return Ut > Mt ? (Bt.sortIndex = Ut, on(bt, Bt), lt(It) === null && Bt === lt(bt) && (me ? wr() : me = !0, vn(P, Ut - Mt))) : (Bt.sortIndex = yr, on(It, Bt), !wt && !zt && (wt = !0, Ir(ze))), Bt;
      }
      function it() {
      }
      function Zt() {
        !wt && !zt && (wt = !0, Ir(ze));
      }
      function vr() {
        return lt(It);
      }
      function Vr(J) {
        J.callback = null;
      }
      function pn() {
        return Xe;
      }
      var Qn = !1, Hn = null, Nn = -1, _n = Vt, Br = -1;
      function $r() {
        var J = ne.unstable_now() - Br;
        return !(J < _n);
      }
      function Wn() {
      }
      function hr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? _n = Math.floor(1e3 / J) : _n = Vt;
      }
      var Yr = function() {
        if (Hn !== null) {
          var J = ne.unstable_now();
          Br = J;
          var _e = !0, et = !0;
          try {
            et = Hn(_e, J);
          } finally {
            et ? mr() : (Qn = !1, Hn = null);
          }
        } else
          Qn = !1;
      }, mr;
      if (typeof ae == "function")
        mr = function() {
          ae(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var fa = new MessageChannel(), nr = fa.port2;
        fa.port1.onmessage = Yr, mr = function() {
          nr.postMessage(null);
        };
      } else
        mr = function() {
          K(Yr, 0);
        };
      function Ir(J) {
        Hn = J, Qn || (Qn = !0, mr());
      }
      function vn(J, _e) {
        Nn = K(function() {
          J(ne.unstable_now());
        }, _e);
      }
      function wr() {
        be(Nn), Nn = -1;
      }
      var ci = Wn, da = null;
      ne.unstable_IdlePriority = Be, ne.unstable_ImmediatePriority = ut, ne.unstable_LowPriority = ue, ne.unstable_NormalPriority = he, ne.unstable_Profiling = da, ne.unstable_UserBlockingPriority = re, ne.unstable_cancelCallback = Vr, ne.unstable_continueExecution = Zt, ne.unstable_forceFrameRate = hr, ne.unstable_getCurrentPriorityLevel = pn, ne.unstable_getFirstCallbackNode = vr, ne.unstable_next = Ze, ne.unstable_pauseExecution = it, ne.unstable_requestPaint = ci, ne.unstable_runWithPriority = Je, ne.unstable_scheduleCallback = at, ne.unstable_shouldYield = $r, ne.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(f0)), f0;
}
var nR;
function sR() {
  return nR || (nR = 1, process.env.NODE_ENV === "production" ? Fm.exports = rD() : Fm.exports = aD()), Fm.exports;
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
function iD() {
  if (rR) return Xa;
  rR = 1;
  var ne = Pm, Z = sR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Vt = /* @__PURE__ */ new Set(), on = {};
  function lt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (on[n] = r, n = 0; n < r.length; n++) Vt.add(r[n]);
  }
  var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ve = Object.prototype.hasOwnProperty, de = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ut = {}, re = {};
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
  function We(n, r, l, o) {
    var c = dt.hasOwnProperty(r) ? dt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Be(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var pt = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), ot = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), tn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), It = Symbol.for("react.provider"), bt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), zt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
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
  function Je(n) {
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
  function Ze(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case ot:
        return "Portal";
      case bn:
        return "Profiler";
      case tn:
        return "StrictMode";
      case Ne:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case bt:
        return (n.displayName || "Context") + ".Consumer";
      case It:
        return (n._context.displayName || "Context") + ".Provider";
      case En:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case zt:
        return r = n.displayName || null, r !== null ? r : Ze(n.type) || "Memo";
      case wt:
        r = n._payload, n = n._init;
        try {
          return Ze(n(r));
        } catch {
        }
    }
    return null;
  }
  function mt(n) {
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
        return Ze(r);
      case 8:
        return r === tn ? "StrictMode" : "Mode";
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
  function Zt(n) {
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
  function vr(n) {
    n._valueTracker || (n._valueTracker = Zt(n));
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
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = at(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Nn(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function _n(n, r) {
    Nn(n, r);
    var l = at(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, at(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function hr(n, r, l, o) {
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
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function mr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Wn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: at(l) };
  }
  function fa(n, r) {
    var l = at(r.value), o = at(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function nr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, ci = function(n) {
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
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
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
  Object.keys(J).forEach(function(n) {
    _e.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = et(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ut = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
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
  var yr = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var xr = null, At = null, Ft = null;
  function Za(n) {
    if (n = os(n)) {
      if (typeof xr != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Oe(r), xr(n.stateNode, n.type, r));
    }
  }
  function _a(n) {
    At ? Ft ? Ft.push(n) : Ft = [n] : At = n;
  }
  function ul() {
    if (At) {
      var n = At, r = Ft;
      if (Ft = At = null, Za(n), r) for (n = 0; n < r.length; n++) Za(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function Mu() {
  }
  var Li = !1;
  function ol(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return Il(n, r, l);
    } finally {
      Li = !1, (At !== null || Ft !== null) && (Mu(), ul());
    }
  }
  function pa(n, r) {
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
  var fi = !1;
  if (Yt) try {
    var va = {};
    Object.defineProperty(va, "passive", { get: function() {
      fi = !0;
    } }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
  } catch {
    fi = !1;
  }
  function Ja(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (I) {
      this.onError(I);
    }
  }
  var br = !1, ha = null, di = !1, pi = null, R = { onError: function(n) {
    br = !0, ha = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    br = !1, ha = null, Ja.apply(R, arguments);
  }
  function G(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), br) {
      if (br) {
        var z = ha;
        br = !1, ha = null;
      } else throw Error(A(198));
      di || (di = !0, pi = z);
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
  function yt(n) {
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
          if (d === l) return yt(c), n;
          if (d === o) return yt(c), r;
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
  function tt(n) {
    return n = Ue(n), n !== null ? zn(n) : null;
  }
  function zn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = zn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Gt = Z.unstable_scheduleCallback, nn = Z.unstable_cancelCallback, gr = Z.unstable_shouldYield, vi = Z.unstable_requestPaint, _t = Z.unstable_now, Gn = Z.unstable_getCurrentPriorityLevel, _r = Z.unstable_ImmediatePriority, nt = Z.unstable_UserBlockingPriority, Da = Z.unstable_NormalPriority, sl = Z.unstable_LowPriority, Nu = Z.unstable_IdlePriority, cl = null, Qr = null;
  function Io(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(cl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : Ks, Qo = Math.log, Wo = Math.LN2;
  function Ks(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Qo(n) / Wo | 0) | 0;
  }
  var zu = 64, fl = 4194304;
  function ei(n) {
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
  function kr(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ei(E) : (d &= m, d !== 0 && (o = ei(d)));
    } else m = l & ~c, m !== 0 ? o = ei(m) : d !== 0 && (o = ei(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function dl(n, r) {
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
  function pl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = dl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function vl(n) {
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
  function Mi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Bf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function hi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Fu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ql, ju, gt, Hu, Pu, Ie = !1, Wl = [], mn = null, Wr = null, Or = null, hl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), jt = [], Zs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Or = null;
        break;
      case "pointerover":
      case "pointerout":
        hl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = os(r), r !== null && ju(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function mi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return mn = qn(mn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return Or = qn(Or, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return hl.set(d, qn(hl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Js(n) {
    var r = Ma(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ft(l), r !== null) {
            n.blockedOn = r, Pu(n.priority, function() {
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
  function Ni(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Bu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        yr = o, l.target.dispatchEvent(o), yr = null;
      } else return r = os(l), r !== null && ju(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ml(n, r, l) {
    Ni(n) && l.delete(r);
  }
  function ec() {
    Ie = !1, mn !== null && Ni(mn) && (mn = null), Wr !== null && Ni(Wr) && (Wr = null), Or !== null && Ni(Or) && (Or = null), hl.forEach(ml), Cn.forEach(ml);
  }
  function ka(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ie || (Ie = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, ec)));
  }
  function yl(n) {
    function r(c) {
      return ka(c, n);
    }
    if (0 < Wl.length) {
      ka(Wl[0], n);
      for (var l = 1; l < Wl.length; l++) {
        var o = Wl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (mn !== null && ka(mn, n), Wr !== null && ka(Wr, n), Or !== null && ka(Or, n), hl.forEach(r), Cn.forEach(r), l = 0; l < jt.length; l++) o = jt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < jt.length && (l = jt[0], l.blockedOn === null); ) Js(l), l.blockedOn === null && jt.shift();
  }
  var zi = pt.ReactCurrentBatchConfig, Oa = !0;
  function Vu(n, r, l, o) {
    var c = Dt, d = zi.transition;
    zi.transition = null;
    try {
      Dt = 1, Sl(n, r, l, o);
    } finally {
      Dt = c, zi.transition = d;
    }
  }
  function gl(n, r, l, o) {
    var c = Dt, d = zi.transition;
    zi.transition = null;
    try {
      Dt = 4, Sl(n, r, l, o);
    } finally {
      Dt = c, zi.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    if (Oa) {
      var c = Bu(n, r, l, o);
      if (c === null) sc(n, r, o, Gl, l), Gr(n, o);
      else if (mi(c, n, r, l, o)) o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Zs.indexOf(n)) {
        for (; c !== null; ) {
          var d = os(c);
          if (d !== null && Ql(d), d = Bu(n, r, l, o), d === null && sc(n, r, o, Gl, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else sc(n, r, o, null, l);
    }
  }
  var Gl = null;
  function Bu(n, r, l, o) {
    if (Gl = null, n = Bt(o), n = Ma(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ft(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Gl = n, null;
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
        switch (Gn()) {
          case _r:
            return 1;
          case nt:
            return 4;
          case Da:
          case sl:
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
  var ti = null, h = null, C = null;
  function N() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : Ae, this.isPropagationStopped = Ae, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, st = ie(Me), xt = ae({}, Me, { view: 0, detail: 0 }), qt = ie(xt), $t, Xt, Jt, St = ae({}, xt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? ($t = n.screenX - Jt.screenX, Xt = n.screenY - Jt.screenY) : Xt = $t = 0, Jt = n), $t);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xt;
  } }), Ui = ie(St), $u = ae({}, St, { dataTransfer: 0 }), qo = ie($u), $f = ae({}, xt, { relatedTarget: 0 }), ni = ie($f), Xo = ae({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ko = ie(Xo), Yf = ae({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Vm = ie(Yf), Bm = ae({}, Me, { data: 0 }), If = ie(Bm), Qf = {
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
  }, Gp = {
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
  }, qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qp[n]) ? !!r[n] : !1;
  }
  function Wf() {
    return Xp;
  }
  var Ai = ae({}, xt, { key: function(n) {
    if (n.key) {
      var r = Qf[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Wf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), $m = ie(Ai), Gf = ae({}, St, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tc = ie(Gf), qf = ae({}, xt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Wf }), Ym = ie(qf), nc = ae({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kp = ie(nc), qr = ae({}, St, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = ie(qr), Un = [9, 13, 27, 32], ri = Yt && "CompositionEvent" in window, ql = null;
  Yt && "documentMode" in document && (ql = document.documentMode);
  var rc = Yt && "TextEvent" in window && !ql, Zp = Yt && (!ri || ql && 8 < ql && 11 >= ql), Yu = " ", Jp = !1;
  function ev(n, r) {
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
  function ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Iu = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return ac(r);
      case "keypress":
        return r.which !== 32 ? null : (Jp = !0, Yu);
      case "textInput":
        return n = r.data, n === Yu && Jp ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (Iu) return n === "compositionend" || !ri && ev(n, r) ? (n = N(), C = h = ti = null, Iu = !1, n) : null;
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
        return Zp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var tv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!tv[n.type] : r === "textarea";
  }
  function rv(n, r, l, o) {
    _a(o), r = is(r, "onChange"), 0 < r.length && (l = new st("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Zo = null, Qu = null;
  function Wu(n) {
    oc(n, 0);
  }
  function Gu(n) {
    var r = Xu(n);
    if (Vr(r)) return n;
  }
  function av(n, r) {
    if (n === "change") return r;
  }
  var Xf = !1;
  if (Yt) {
    var Kf;
    if (Yt) {
      var Zf = "oninput" in document;
      if (!Zf) {
        var iv = document.createElement("div");
        iv.setAttribute("oninput", "return;"), Zf = typeof iv.oninput == "function";
      }
      Kf = Zf;
    } else Kf = !1;
    Xf = Kf && (!document.documentMode || 9 < document.documentMode);
  }
  function lv() {
    Zo && (Zo.detachEvent("onpropertychange", uv), Qu = Zo = null);
  }
  function uv(n) {
    if (n.propertyName === "value" && Gu(Qu)) {
      var r = [];
      rv(r, Qu, n, Bt(n)), ol(Wu, r);
    }
  }
  function Wm(n, r, l) {
    n === "focusin" ? (lv(), Zo = r, Qu = l, Zo.attachEvent("onpropertychange", uv)) : n === "focusout" && lv();
  }
  function Gm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Gu(Qu);
  }
  function qm(n, r) {
    if (n === "click") return Gu(r);
  }
  function ov(n, r) {
    if (n === "input" || n === "change") return Gu(r);
  }
  function Xm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var La = typeof Object.is == "function" ? Object.is : Xm;
  function Jo(n, r) {
    if (La(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ve.call(r, c) || !La(n[c], r[c])) return !1;
    }
    return !0;
  }
  function sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function cv(n, r) {
    var l = sv(n);
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
      l = sv(l);
    }
  }
  function fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ic() {
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
  function ji(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lc(n) {
    var r = ic(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && fv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ji(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = cv(l, d);
          var m = cv(
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
  var dv = Yt && "documentMode" in document && 11 >= document.documentMode, ai = null, Jf = null, es = null, ed = !1;
  function pv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ed || ai == null || ai !== pn(o) || (o = ai, "selectionStart" in o && ji(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Jo(es, o) || (es = o, o = is(Jf, "onSelect"), 0 < o.length && (r = new st("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ai)));
  }
  function uc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xl = { animationend: uc("Animation", "AnimationEnd"), animationiteration: uc("Animation", "AnimationIteration"), animationstart: uc("Animation", "AnimationStart"), transitionend: uc("Transition", "TransitionEnd") }, td = {}, nd = {};
  Yt && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function Xn(n) {
    if (td[n]) return td[n];
    if (!Xl[n]) return n;
    var r = Xl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in nd) return td[n] = r[l];
    return n;
  }
  var rd = Xn("animationend"), vv = Xn("animationiteration"), hv = Xn("animationstart"), mv = Xn("transitionend"), yv = /* @__PURE__ */ new Map(), gv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Hi(n, r) {
    yv.set(n, r), lt(r, [n]);
  }
  for (var ts = 0; ts < gv.length; ts++) {
    var Kl = gv[ts], Km = Kl.toLowerCase(), ns = Kl[0].toUpperCase() + Kl.slice(1);
    Hi(Km, "on" + ns);
  }
  Hi(rd, "onAnimationEnd"), Hi(vv, "onAnimationIteration"), Hi(hv, "onAnimationStart"), Hi("dblclick", "onDoubleClick"), Hi("focusin", "onFocus"), Hi("focusout", "onBlur"), Hi(mv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function Sv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, G(o, r, void 0, n), n.currentTarget = null;
  }
  function oc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Sv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Sv(c, E, z), d = T;
        }
      }
    }
    if (di) throw n = pi, di = !1, pi = null, n;
  }
  function Kt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Ev(r, n, 2, !1), l.add(o));
  }
  function El(n, r, l) {
    var o = 0;
    r && (o |= 4), Ev(l, n, o, r);
  }
  var Pi = "_reactListening" + Math.random().toString(36).slice(2);
  function qu(n) {
    if (!n[Pi]) {
      n[Pi] = !0, Vt.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || El(l, !1, n), El(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Pi] || (r[Pi] = !0, El("selectionchange", !1, r));
    }
  }
  function Ev(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Vu;
        break;
      case 4:
        c = gl;
        break;
      default:
        c = Sl;
    }
    l = c.bind(null, r, l, n), c = void 0, !fi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function sc(n, r, l, o, c) {
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
          if (m = Ma(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    ol(function() {
      var z = d, I = Bt(l), Q = [];
      e: {
        var $ = yv.get(n);
        if ($ !== void 0) {
          var se = st, ye = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = $m;
              break;
            case "focusin":
              ye = "focus", se = ni;
              break;
            case "focusout":
              ye = "blur", se = ni;
              break;
            case "beforeblur":
            case "afterblur":
              se = ni;
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
              se = Ui;
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
              se = Ym;
              break;
            case rd:
            case vv:
            case hv:
              se = Ko;
              break;
            case mv:
              se = Kp;
              break;
            case "scroll":
              se = qt;
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
              se = tc;
          }
          var Ee = (r & 4) !== 0, Ln = !Ee && n === "scroll", D = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var X = L.stateNode;
            if (L.tag === 5 && X !== null && (L = X, D !== null && (X = pa(x, D), X != null && Ee.push(as(x, X, L)))), Ln) break;
            x = x.return;
          }
          0 < Ee.length && ($ = new se($, ye, null, l, I), Q.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", $ && l !== yr && (ye = l.relatedTarget || l.fromElement) && (Ma(ye) || ye[Vi])) break e;
          if ((se || $) && ($ = I.window === I ? I : ($ = I.ownerDocument) ? $.defaultView || $.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = z, ye = ye ? Ma(ye) : null, ye !== null && (Ln = Te(ye), ye !== Ln || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = z), se !== ye)) {
            if (Ee = Ui, X = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = tc, X = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Ln = se == null ? $ : Xu(se), L = ye == null ? $ : Xu(ye), $ = new Ee(X, x + "leave", se, l, I), $.target = Ln, $.relatedTarget = L, X = null, Ma(I) === z && (Ee = new Ee(D, x + "enter", ye, l, I), Ee.target = L, Ee.relatedTarget = Ln, X = Ee), Ln = X, se && ye) t: {
              for (Ee = se, D = ye, x = 0, L = Ee; L; L = Zl(L)) x++;
              for (L = 0, X = D; X; X = Zl(X)) L++;
              for (; 0 < x - L; ) Ee = Zl(Ee), x--;
              for (; 0 < L - x; ) D = Zl(D), L--;
              for (; x--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = Zl(Ee), D = Zl(D);
              }
              Ee = null;
            }
            else Ee = null;
            se !== null && ad(Q, $, se, Ee, !1), ye !== null && Ln !== null && ad(Q, Ln, ye, Ee, !0);
          }
        }
        e: {
          if ($ = z ? Xu(z) : window, se = $.nodeName && $.nodeName.toLowerCase(), se === "select" || se === "input" && $.type === "file") var Re = av;
          else if (nv($)) if (Xf) Re = ov;
          else {
            Re = Gm;
            var Fe = Wm;
          }
          else (se = $.nodeName) && se.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Re = qm);
          if (Re && (Re = Re(n, z))) {
            rv(Q, Re, l, I);
            break e;
          }
          Fe && Fe(n, $, z), n === "focusout" && (Fe = $._wrapperState) && Fe.controlled && $.type === "number" && $r($, "number", $.value);
        }
        switch (Fe = z ? Xu(z) : window, n) {
          case "focusin":
            (nv(Fe) || Fe.contentEditable === "true") && (ai = Fe, Jf = z, es = null);
            break;
          case "focusout":
            es = Jf = ai = null;
            break;
          case "mousedown":
            ed = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ed = !1, pv(Q, l, I);
            break;
          case "selectionchange":
            if (dv) break;
          case "keydown":
          case "keyup":
            pv(Q, l, I);
        }
        var ge;
        if (ri) e: {
          switch (n) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else Iu ? ev(n, l) && (je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (Zp && l.locale !== "ko" && (Iu || je !== "onCompositionStart" ? je === "onCompositionEnd" && Iu && (ge = N()) : (ti = I, h = "value" in ti ? ti.value : ti.textContent, Iu = !0)), Fe = is(z, je), 0 < Fe.length && (je = new If(je, n, null, l, I), Q.push({ event: je, listeners: Fe }), ge ? je.data = ge : (ge = ac(l), ge !== null && (je.data = ge)))), (ge = rc ? Im(n, l) : Qm(n, l)) && (z = is(z, "onBeforeInput"), 0 < z.length && (I = new If("onBeforeInput", "beforeinput", null, l, I), Q.push({ event: I, listeners: z }), I.data = ge));
      }
      oc(Q, r);
    });
  }
  function as(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pa(n, l), d != null && o.unshift(as(n, d, c)), d = pa(n, r), d != null && o.push(as(n, d, c))), n = n.return;
    }
    return o;
  }
  function Zl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ad(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = pa(l, d), T != null && m.unshift(as(l, T, E))) : c || (T = pa(l, d), T != null && m.push(as(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var id = /\r\n?/g, Jm = /\u0000|\uFFFD/g;
  function ld(n) {
    return (typeof n == "string" ? n : "" + n).replace(id, `
`).replace(Jm, "");
  }
  function cc(n, r, l) {
    if (r = ld(r), ld(n) !== r && l) throw Error(A(425));
  }
  function fc() {
  }
  var ud = null, Jl = null;
  function ls(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var eu = typeof setTimeout == "function" ? setTimeout : void 0, Cv = typeof clearTimeout == "function" ? clearTimeout : void 0, od = typeof Promise == "function" ? Promise : void 0, sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof od < "u" ? function(n) {
    return od.resolve(null).then(n).catch(ey);
  } : eu;
  function ey(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), yl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    yl(r);
  }
  function ii(n) {
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
  var Rl = Math.random().toString(36).slice(2), yi = "__reactFiber$" + Rl, tu = "__reactProps$" + Rl, Vi = "__reactContainer$" + Rl, cd = "__reactEvents$" + Rl, ty = "__reactListeners$" + Rl, fd = "__reactHandles$" + Rl;
  function Ma(n) {
    var r = n[yi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Vi] || l[yi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = us(n); n !== null; ) {
          if (l = n[yi]) return l;
          n = us(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function os(n) {
    return n = n[yi] || n[Vi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Xu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Oe(n) {
    return n[tu] || null;
  }
  var Tl = [], rn = -1;
  function Ke(n) {
    return { current: n };
  }
  function Nt(n) {
    0 > rn || (n.current = Tl[rn], Tl[rn] = null, rn--);
  }
  function Ht(n, r) {
    rn++, Tl[rn] = n.current, n.current = r;
  }
  var gi = {}, $e = Ke(gi), Rn = Ke(!1), Xr = gi;
  function Na(n, r) {
    var l = n.type.contextTypes;
    if (!l) return gi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function za() {
    Nt(Rn), Nt($e);
  }
  function wl(n, r, l) {
    if ($e.current !== gi) throw Error(A(168));
    Ht($e, r), Ht(Rn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, mt(n) || "Unknown", c));
    return ae({}, l, o);
  }
  function dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || gi, Xr = $e.current, Ht($e, n), Ht(Rn, Rn.current), !0;
  }
  function Rv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ss(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Nt(Rn), Nt($e), Ht($e, n)) : Nt(Rn), Ht(Rn, l);
  }
  var ma = null, Kn = !1, cs = !1;
  function dd(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  function pd(n) {
    Kn = !0, dd(n);
  }
  function Kr() {
    if (!cs && ma !== null) {
      cs = !0;
      var n = 0, r = Dt;
      try {
        var l = ma;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ma = null, Kn = !1;
      } catch (c) {
        throw ma !== null && (ma = ma.slice(n + 1)), Gt(_r, Kr), c;
      } finally {
        Dt = r, cs = !1;
      }
    }
    return null;
  }
  var xl = [], Zr = 0, nu = null, Ku = 0, Jr = [], Sr = 0, Ua = null, rr = 1, Bi = "";
  function ya(n, r) {
    xl[Zr++] = Ku, xl[Zr++] = nu, nu = n, Ku = r;
  }
  function vd(n, r, l) {
    Jr[Sr++] = rr, Jr[Sr++] = Bi, Jr[Sr++] = Ua, Ua = n;
    var o = rr;
    n = Bi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, rr = 1 << 32 - Dr(r) + c | l << c | o, Bi = d + n;
    } else rr = 1 << d | l << c | o, Bi = n;
  }
  function pc(n) {
    n.return !== null && (ya(n, 1), vd(n, 1, 0));
  }
  function hd(n) {
    for (; n === nu; ) nu = xl[--Zr], xl[Zr] = null, Ku = xl[--Zr], xl[Zr] = null;
    for (; n === Ua; ) Ua = Jr[--Sr], Jr[Sr] = null, Bi = Jr[--Sr], Jr[Sr] = null, rr = Jr[--Sr], Jr[Sr] = null;
  }
  var ga = null, ea = null, an = !1, Aa = null;
  function md(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Tv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = ii(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: rr, overflow: Bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hc(n) {
    if (an) {
      var r = ea;
      if (r) {
        var l = r;
        if (!Tv(n, r)) {
          if (vc(n)) throw Error(A(418));
          r = ii(l.nextSibling);
          var o = ga;
          r && Tv(n, r) ? md(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, ga = n);
        }
      } else {
        if (vc(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, an = !1, ga = n;
      }
    }
  }
  function wv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ga = n;
  }
  function mc(n) {
    if (n !== ga) return !1;
    if (!an) return wv(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ls(n.type, n.memoizedProps)), r && (r = ea)) {
      if (vc(n)) throw xv(), Error(A(418));
      for (; r; ) md(n, r), r = ii(r.nextSibling);
    }
    if (wv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ii(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = ga ? ii(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xv() {
    for (var n = ea; n; ) n = ii(n.nextSibling);
  }
  function yn() {
    ea = ga = null, an = !1;
  }
  function yd(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var yc = pt.ReactCurrentBatchConfig;
  function ru(n, r, l) {
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
  function Si(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function gc(n) {
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
      return D = Nl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, X) {
      return x === null || x.tag !== 6 ? (x = lf(L, D.mode, X), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, X) {
      var Re = L.type;
      return Re === He ? I(D, x, L.props.children, X, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === wt && bv(Re) === x.type) ? (X = c(x, L.props), X.ref = ru(D, x, L), X.return = D, X) : (X = rf(L.type, L.key, L.props, null, D.mode, X), X.ref = ru(D, x, L), X.return = D, X);
    }
    function z(D, x, L, X) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Ds(L, D.mode, X), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function I(D, x, L, X, Re) {
      return x === null || x.tag !== 7 ? (x = gu(L, D.mode, X, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Q(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = lf("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ke:
            return L = rf(x.type, x.key, x.props, null, D.mode, L), L.ref = ru(D, null, x), L.return = D, L;
          case ot:
            return x = Ds(x, D.mode, L), x.return = D, x;
          case wt:
            var X = x._init;
            return Q(D, X(x._payload), L);
        }
        if (Wn(x) || be(x)) return x = gu(x, D.mode, L, null), x.return = D, x;
        Si(D, x);
      }
      return null;
    }
    function $(D, x, L, X) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, x, "" + L, X);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            return L.key === Re ? T(D, x, L, X) : null;
          case ot:
            return L.key === Re ? z(D, x, L, X) : null;
          case wt:
            return Re = L._init, $(
              D,
              x,
              Re(L._payload),
              X
            );
        }
        if (Wn(L) || be(L)) return Re !== null ? null : I(D, x, L, X, null);
        Si(D, L);
      }
      return null;
    }
    function se(D, x, L, X, Re) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return D = D.get(L) || null, E(x, D, "" + X, Re);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case ke:
            return D = D.get(X.key === null ? L : X.key) || null, T(x, D, X, Re);
          case ot:
            return D = D.get(X.key === null ? L : X.key) || null, z(x, D, X, Re);
          case wt:
            var Fe = X._init;
            return se(D, x, L, Fe(X._payload), Re);
        }
        if (Wn(X) || be(X)) return D = D.get(L) || null, I(x, D, X, Re, null);
        Si(x, X);
      }
      return null;
    }
    function ye(D, x, L, X) {
      for (var Re = null, Fe = null, ge = x, je = x = 0, Yn = null; ge !== null && je < L.length; je++) {
        ge.index > je ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var kt = $(D, ge, L[je], X);
        if (kt === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && kt.alternate === null && r(D, ge), x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt, ge = Yn;
      }
      if (je === L.length) return l(D, ge), an && ya(D, je), Re;
      if (ge === null) {
        for (; je < L.length; je++) ge = Q(D, L[je], X), ge !== null && (x = d(ge, x, je), Fe === null ? Re = ge : Fe.sibling = ge, Fe = ge);
        return an && ya(D, je), Re;
      }
      for (ge = o(D, ge); je < L.length; je++) Yn = se(ge, D, je, L[je], X), Yn !== null && (n && Yn.alternate !== null && ge.delete(Yn.key === null ? je : Yn.key), x = d(Yn, x, je), Fe === null ? Re = Yn : Fe.sibling = Yn, Fe = Yn);
      return n && ge.forEach(function(qi) {
        return r(D, qi);
      }), an && ya(D, je), Re;
    }
    function Ee(D, x, L, X) {
      var Re = be(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var Fe = Re = null, ge = x, je = x = 0, Yn = null, kt = L.next(); ge !== null && !kt.done; je++, kt = L.next()) {
        ge.index > je ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var qi = $(D, ge, kt.value, X);
        if (qi === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && qi.alternate === null && r(D, ge), x = d(qi, x, je), Fe === null ? Re = qi : Fe.sibling = qi, Fe = qi, ge = Yn;
      }
      if (kt.done) return l(
        D,
        ge
      ), an && ya(D, je), Re;
      if (ge === null) {
        for (; !kt.done; je++, kt = L.next()) kt = Q(D, kt.value, X), kt !== null && (x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt);
        return an && ya(D, je), Re;
      }
      for (ge = o(D, ge); !kt.done; je++, kt = L.next()) kt = se(ge, D, je, kt.value, X), kt !== null && (n && kt.alternate !== null && ge.delete(kt.key === null ? je : kt.key), x = d(kt, x, je), Fe === null ? Re = kt : Fe.sibling = kt, Fe = kt);
      return n && ge.forEach(function(Sy) {
        return r(D, Sy);
      }), an && ya(D, je), Re;
    }
    function Ln(D, x, L, X) {
      if (typeof L == "object" && L !== null && L.type === He && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case ke:
            e: {
              for (var Re = L.key, Fe = x; Fe !== null; ) {
                if (Fe.key === Re) {
                  if (Re = L.type, Re === He) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), x = c(Fe, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Fe.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === wt && bv(Re) === Fe.type) {
                    l(D, Fe.sibling), x = c(Fe, L.props), x.ref = ru(D, Fe, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else r(D, Fe);
                Fe = Fe.sibling;
              }
              L.type === He ? (x = gu(L.props.children, D.mode, X, L.key), x.return = D, D = x) : (X = rf(L.type, L.key, L.props, null, D.mode, X), X.ref = ru(D, x, L), X.return = D, D = X);
            }
            return m(D);
          case ot:
            e: {
              for (Fe = L.key; x !== null; ) {
                if (x.key === Fe) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Ds(L, D.mode, X), x.return = D, D = x;
            }
            return m(D);
          case wt:
            return Fe = L._init, Ln(D, x, Fe(L._payload), X);
        }
        if (Wn(L)) return ye(D, x, L, X);
        if (be(L)) return Ee(D, x, L, X);
        Si(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = lf(L, D.mode, X), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Ln;
  }
  var Zu = gc(!0), _v = gc(!1), $i = Ke(null), Pn = null, ee = null, Fa = null;
  function Sa() {
    Fa = ee = Pn = null;
  }
  function gd(n) {
    var r = $i.current;
    Nt($i), n._currentValue = r;
  }
  function Sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Ju(n, r) {
    Pn = n, Fa = ee = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ra = !0), n.firstContext = null);
  }
  function ja(n) {
    var r = n._currentValue;
    if (Fa !== n) if (n = { context: n, memoizedValue: r, next: null }, ee === null) {
      if (Pn === null) throw Error(A(308));
      ee = n, Pn.dependencies = { lanes: 0, firstContext: n };
    } else ee = ee.next = n;
    return r;
  }
  var au = null;
  function An(n) {
    au === null ? au = [n] : au.push(n);
  }
  function Dv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, An(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Yi(n, o);
  }
  function Yi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var bl = !1;
  function Sc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function eo(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ta(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Yi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, An(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Yi(n, l);
  }
  function Ec(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, hi(n, l);
    }
  }
  function kv(n, r) {
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
  function Cc(n, r, l, o) {
    var c = n.updateQueue;
    bl = !1;
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
        var $ = E.lane, se = E.eventTime;
        if ((o & $) === $) {
          I !== null && (I = I.next = {
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
                  Q = ye.call(se, Q, $);
                  break e;
                }
                Q = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, $ = typeof ye == "function" ? ye.call(se, Q, $) : ye, $ == null) break e;
                Q = ae({}, Q, $);
                break e;
              case 2:
                bl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else se = { eventTime: se, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, I === null ? (z = I = se, T = Q) : I = I.next = se, m |= $;
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
      vu |= m, n.lanes = m, n.memoizedState = Q;
    }
  }
  function Ov(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, li = Ke(fs), to = Ke(fs), ds = Ke(fs);
  function iu(n) {
    if (n === fs) throw Error(A(174));
    return n;
  }
  function Ed(n, r) {
    switch (Ht(ds, r), Ht(to, n), Ht(li, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Nt(li), Ht(li, r);
  }
  function no() {
    Nt(li), Nt(to), Nt(ds);
  }
  function Lv(n) {
    iu(ds.current);
    var r = iu(li.current), l = vn(r, n.type);
    r !== l && (Ht(to, n), Ht(li, l));
  }
  function Cd(n) {
    to.current === n && (Nt(li), Nt(to));
  }
  var cn = Ke(0);
  function Rc(n) {
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
  var Tc = [];
  function Rd() {
    for (var n = 0; n < Tc.length; n++) Tc[n]._workInProgressVersionPrimary = null;
    Tc.length = 0;
  }
  var wc = pt.ReactCurrentDispatcher, ps = pt.ReactCurrentBatchConfig, Ce = 0, we = null, Ye = null, ct = null, Ea = !1, ro = !1, vs = 0, ny = 0;
  function Er() {
    throw Error(A(321));
  }
  function hs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!La(n[l], r[l])) return !1;
    return !0;
  }
  function B(n, r, l, o, c, d) {
    if (Ce = d, we = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, wc.current = n === null || n.memoizedState === null ? ry : en, n = l(o, c), ro) {
      d = 0;
      do {
        if (ro = !1, vs = 0, 25 <= d) throw Error(A(301));
        d += 1, ct = Ye = null, r.updateQueue = null, wc.current = Hc, n = l(o, c);
      } while (ro);
    }
    if (wc.current = Cr, r = Ye !== null && Ye.next !== null, Ce = 0, ct = Ye = we = null, Ea = !1, r) throw Error(A(300));
    return n;
  }
  function Fn() {
    var n = vs !== 0;
    return vs = 0, n;
  }
  function De() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ct === null ? we.memoizedState = ct = n : ct = ct.next = n, ct;
  }
  function ar() {
    if (Ye === null) {
      var n = we.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ye.next;
    var r = ct === null ? we.memoizedState : ct.next;
    if (r !== null) ct = r, Ye = n;
    else {
      if (n === null) throw Error(A(310));
      Ye = n, n = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, ct === null ? we.memoizedState = ct = n : ct = ct.next = n;
    }
    return ct;
  }
  function Ca(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ii(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(A(311));
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
        if ((Ce & I) === I) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Q = {
            lane: I,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = Q, m = o) : T = T.next = Q, we.lanes |= I, vu |= I;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, La(o, r.memoizedState) || (ra = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, we.lanes |= d, vu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ha(n) {
    var r = ar(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      La(d, r.memoizedState) || (ra = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ao() {
  }
  function lu(n, r) {
    var l = we, o = ar(), c = r(), d = !La(o.memoizedState, c);
    if (d && (o.memoizedState = c, ra = !0), o = o.queue, ms(bc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ct !== null && ct.memoizedState.tag & 1) {
      if (l.flags |= 2048, uu(9, xc.bind(null, l, o, c, r), void 0, null), wn === null) throw Error(A(349));
      Ce & 30 || io(l, r, c);
    }
    return c;
  }
  function io(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function xc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, _c(r) && Dc(n);
  }
  function bc(n, r, l) {
    return l(function() {
      _c(r) && Dc(n);
    });
  }
  function _c(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !La(n, l);
    } catch {
      return !0;
    }
  }
  function Dc(n) {
    var r = Yi(n, 1);
    r !== null && gn(r, n, 1, -1);
  }
  function kc(n) {
    var r = De();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ca, lastRenderedState: n }, r.queue = n, n = n.dispatch = ys.bind(null, we, n), [r.memoizedState, n];
  }
  function uu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = we.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, we.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Oc() {
    return ar().memoizedState;
  }
  function lo(n, r, l, o) {
    var c = De();
    we.flags |= n, c.memoizedState = uu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function uo(n, r, l, o) {
    var c = ar();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ye !== null) {
      var m = Ye.memoizedState;
      if (d = m.destroy, o !== null && hs(o, m.deps)) {
        c.memoizedState = uu(r, l, d, o);
        return;
      }
    }
    we.flags |= n, c.memoizedState = uu(1 | r, l, d, o);
  }
  function Lc(n, r) {
    return lo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return uo(2048, 8, n, r);
  }
  function Mc(n, r) {
    return uo(4, 2, n, r);
  }
  function Nc(n, r) {
    return uo(4, 4, n, r);
  }
  function zc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Uc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, uo(4, 4, zc.bind(null, r, n), l);
  }
  function oo() {
  }
  function ou(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ac(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Fc(n, r, l) {
    return Ce & 21 ? (La(l, r) || (l = Uu(), we.lanes |= l, vu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ra = !0), n.memoizedState = l);
  }
  function Td(n, r) {
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
  function jc() {
    return ar().memoizedState;
  }
  function Mv(n, r, l) {
    var o = Gi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wd(n)) so(r, l);
    else if (l = Dv(n, r, l, o), l !== null) {
      var c = er();
      gn(l, n, o, c), Dl(l, r, o);
    }
  }
  function ys(n, r, l) {
    var o = Gi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wd(n)) so(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, La(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, An(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Dv(n, r, c, o), l !== null && (c = er(), gn(l, n, o, c), Dl(l, r, o));
    }
  }
  function wd(n) {
    var r = n.alternate;
    return n === we || r !== null && r === we;
  }
  function so(n, r) {
    ro = Ea = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, hi(n, l);
    }
  }
  var Cr = { readContext: ja, useCallback: Er, useContext: Er, useEffect: Er, useImperativeHandle: Er, useInsertionEffect: Er, useLayoutEffect: Er, useMemo: Er, useReducer: Er, useRef: Er, useState: Er, useDebugValue: Er, useDeferredValue: Er, useTransition: Er, useMutableSource: Er, useSyncExternalStore: Er, useId: Er, unstable_isNewReconciler: !1 }, ry = { readContext: ja, useCallback: function(n, r) {
    return De().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ja, useEffect: Lc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(
      4194308,
      4,
      zc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return lo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return lo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = De();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = De();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Mv.bind(null, we, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = De();
    return n = { current: n }, r.memoizedState = n;
  }, useState: kc, useDebugValue: oo, useDeferredValue: function(n) {
    return De().memoizedState = n;
  }, useTransition: function() {
    var n = kc(!1), r = n[0];
    return n = Td.bind(null, n[1]), De().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = we, c = De();
    if (an) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), wn === null) throw Error(A(349));
      Ce & 30 || io(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Lc(bc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, uu(9, xc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = De(), r = wn.identifierPrefix;
    if (an) {
      var l = Bi, o = rr;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ny++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, en = {
    readContext: ja,
    useCallback: ou,
    useContext: ja,
    useEffect: ms,
    useImperativeHandle: Uc,
    useInsertionEffect: Mc,
    useLayoutEffect: Nc,
    useMemo: Ac,
    useReducer: Ii,
    useRef: Oc,
    useState: function() {
      return Ii(Ca);
    },
    useDebugValue: oo,
    useDeferredValue: function(n) {
      var r = ar();
      return Fc(r, Ye.memoizedState, n);
    },
    useTransition: function() {
      var n = Ii(Ca)[0], r = ar().memoizedState;
      return [n, r];
    },
    useMutableSource: ao,
    useSyncExternalStore: lu,
    useId: jc,
    unstable_isNewReconciler: !1
  }, Hc = { readContext: ja, useCallback: ou, useContext: ja, useEffect: ms, useImperativeHandle: Uc, useInsertionEffect: Mc, useLayoutEffect: Nc, useMemo: Ac, useReducer: Ha, useRef: Oc, useState: function() {
    return Ha(Ca);
  }, useDebugValue: oo, useDeferredValue: function(n) {
    var r = ar();
    return Ye === null ? r.memoizedState = n : Fc(r, Ye.memoizedState, n);
  }, useTransition: function() {
    var n = Ha(Ca)[0], r = ar().memoizedState;
    return [n, r];
  }, useMutableSource: ao, useSyncExternalStore: lu, useId: jc, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function su(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ae({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var cu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Gi(n), d = ta(o, c);
    d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (gn(r, n, c, o), Ec(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = Gi(n), d = ta(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = _l(n, d, c), r !== null && (gn(r, n, c, o), Ec(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = er(), o = Gi(n), c = ta(l, o);
    c.tag = 2, r != null && (c.callback = r), r = _l(n, c, o), r !== null && (gn(r, n, o, l), Ec(r, n, o));
  } };
  function Nv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function zv(n, r, l) {
    var o = !1, c = gi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ja(d) : (c = sn(r) ? Xr : $e.current, o = r.contextTypes, d = (o = o != null) ? Na(n, c) : gi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = cu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Uv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && cu.enqueueReplaceState(r, r.state, null);
  }
  function xd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Sc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ja(d) : (d = sn(r) ? Xr : $e.current, c.context = Na(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (su(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && cu.enqueueReplaceState(c, c.state, null), Cc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function kl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Je(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function bd(n, r, l) {
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
  var Av = typeof WeakMap == "function" ? WeakMap : Map;
  function Fv(n, r, l) {
    l = ta(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Kc || (Kc = !0, Ud = o), gs(n, r);
    }, l;
  }
  function jv(n, r, l) {
    l = ta(-1, l), l.tag = 3;
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
      gs(n, r), typeof o != "function" && (Ba === null ? Ba = /* @__PURE__ */ new Set([this]) : Ba.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ss(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Av();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Hv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function _d(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ta(-1, 1), r.tag = 2, _l(l, r, 1))), l.lanes |= 1), n);
  }
  var Pv = pt.ReactCurrentOwner, ra = !1;
  function kn(n, r, l, o) {
    r.child = n === null ? _v(r, null, l, o) : Zu(r, n.child, l, o);
  }
  function co(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Ju(r, c), o = B(n, r, l, o, d, c), l = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (an && l && pc(r), r.flags |= 1, kn(n, r, o, c), r.child);
  }
  function Ol(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Pd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Pc(n, r, d, o, c)) : (n = rf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return On(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Pc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (ra = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (ra = !0);
      else return r.lanes = n.lanes, On(n, r, c);
    }
    return qe(n, r, l, o, c);
  }
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ht(Co, ia), ia |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ht(Co, ia), ia |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ht(Co, ia), ia |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ht(Co, ia), ia |= o;
    return kn(n, r, c, l), r.child;
  }
  function fu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qe(n, r, l, o, c) {
    var d = sn(l) ? Xr : $e.current;
    return d = Na(r, d), Ju(r, c), l = B(n, r, l, o, d, c), o = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (an && o && pc(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function Es(n, r, l, o, c) {
    if (sn(l)) {
      var d = !0;
      dc(r);
    } else d = !1;
    if (Ju(r, c), r.stateNode === null) Rs(n, r), zv(r, l, o), xd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = ja(z) : (z = sn(l) ? Xr : $e.current, z = Na(r, z));
      var I = l.getDerivedStateFromProps, Q = typeof I == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Uv(r, m, o, z), bl = !1;
      var $ = r.memoizedState;
      m.state = $, Cc(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Rn.current || bl ? (typeof I == "function" && (su(r, l, I, o), T = r.memoizedState), (E = bl || Nv(r, l, E, o, $, T, z)) ? (Q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, eo(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : na(r.type, E), m.props = z, Q = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = ja(T) : (T = sn(l) ? Xr : $e.current, T = Na(r, T));
      var se = l.getDerivedStateFromProps;
      (I = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Q || $ !== T) && Uv(r, m, o, T), bl = !1, $ = r.memoizedState, m.state = $, Cc(r, o, m, c);
      var ye = r.memoizedState;
      E !== Q || $ !== ye || Rn.current || bl ? (typeof se == "function" && (su(r, l, se, o), ye = r.memoizedState), (z = bl || Nv(r, l, z, o, $, ye, T) || !1) ? (I || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Vc(n, r, l, o, d, c);
  }
  function Vc(n, r, l, o, c, d) {
    fu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Rv(r, l, !1), On(n, r, d);
    o = r.stateNode, Pv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Zu(r, n.child, null, d), r.child = Zu(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = o.state, c && Rv(r, l, !0), r.child;
  }
  function ay(n) {
    var r = n.stateNode;
    r.pendingContext ? wl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wl(n, r.context, !1), Ed(n, r.containerInfo);
  }
  function Vv(n, r, l, o, c) {
    return yn(), yd(c), r.flags |= 256, kn(n, r, l, o), r.child;
  }
  var Cs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function du(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Bv(n, r, l) {
    var o = r.pendingProps, c = cn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ht(cn, c & 1), n === null)
      return hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = af(m, o, 0, null), n = gu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = du(l), r.memoizedState = Cs, n) : Bc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Dd(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = gu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? du(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Cs, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Bc(n, r) {
    return r = af({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function $c(n, r, l, o) {
    return o !== null && yd(o), Zu(r, n.child, null, l), n = Bc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Dd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = bd(Error(A(422))), $c(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = af({ mode: "visible", children: o.children }, c, 0, null), d = gu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Zu(r, n.child, null, m), r.child.memoizedState = du(m), r.memoizedState = Cs, d);
    if (!(r.mode & 1)) return $c(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = bd(d, o, void 0), $c(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, ra || E) {
      if (o = wn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Yi(n, c), gn(o, n, c, -1));
      }
      return _s(), o = bd(Error(A(421))), $c(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Hd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ii(c.nextSibling), ga = r, an = !0, Aa = null, n !== null && (Jr[Sr++] = rr, Jr[Sr++] = Bi, Jr[Sr++] = Ua, rr = n.id, Bi = n.overflow, Ua = r), r = Bc(r, o.children), r.flags |= 4096, r);
  }
  function $v(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Sd(n.return, r, l);
  }
  function Yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (kn(n, r, o.children, l), o = cn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && $v(n, l, r);
        else if (n.tag === 19) $v(n, l, r);
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
    if (Ht(cn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Rc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Yc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Rc(n) === null) {
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
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), vu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qi(n, r, l) {
    switch (r.tag) {
      case 3:
        ay(r), yn();
        break;
      case 5:
        Lv(r);
        break;
      case 1:
        sn(r.type) && dc(r);
        break;
      case 4:
        Ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ht($i, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ht(cn, cn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Bv(n, r, l) : (Ht(cn, cn.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        Ht(cn, cn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return kd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ht(cn, cn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, aa(n, r, l);
    }
    return On(n, r, l);
  }
  var Ei, fo, po, Pa;
  Ei = function(n, r) {
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
      n = r.stateNode, iu(li.current);
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
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = fc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (on.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (on.hasOwnProperty(z) ? (T != null && z === "onScroll" && Kt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Pa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Tn(n, r) {
    if (!an) switch (n.tailMode) {
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
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (hd(r), r.tag) {
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
        return sn(r.type) && za(), Rr(r), null;
      case 3:
        return o = r.stateNode, no(), Nt(Rn), Nt($e), Rd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Ad(Aa), Aa = null))), fo(n, r), Rr(r), null;
      case 5:
        Cd(r);
        var c = iu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null) po(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Rr(r), null;
          }
          if (n = iu(li.current), mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[yi] = r, o[tu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Kt(rs[c], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                Hn(o, d), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                mr(o, d), Kt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && cc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : on.hasOwnProperty(m) && E != null && m === "onScroll" && Kt("scroll", o);
            }
            switch (l) {
              case "input":
                vr(o), Br(o, d, !0);
                break;
              case "textarea":
                vr(o), nr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = fc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[yi] = r, n[tu] = o, Ei(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = hn(l, o), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Kt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Kt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = o;
                  break;
                case "details":
                  Kt("toggle", n), c = o;
                  break;
                case "input":
                  Hn(n, o), c = Qn(n, o), Kt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ae({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  mr(n, o), c = Yr(n, o), Kt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Mt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ci(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (on.hasOwnProperty(d) ? T != null && d === "onScroll" && Kt("scroll", n) : T != null && We(n, d, T, m));
              }
              switch (l) {
                case "input":
                  vr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  vr(n), nr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + at(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? hr(n, !!o.multiple, d, !1) : o.defaultValue != null && hr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = fc);
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
        if (n && r.stateNode != null) Pa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = iu(ds.current), iu(li.current), mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[yi] = r, (d = o.nodeValue !== l) && (n = ga, n !== null)) switch (n.tag) {
              case 3:
                cc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && cc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[yi] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (Nt(cn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && ea !== null && r.mode & 1 && !(r.flags & 128)) xv(), yn(), r.flags |= 98560, d = !1;
          else if (d = mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[yi] = r;
            } else yn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else Aa !== null && (Ad(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || cn.current & 1 ? Bn === 0 && (Bn = 3) : _s())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return no(), fo(n, r), n === null && qu(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return gd(r.type._context), Rr(r), null;
      case 17:
        return sn(r.type) && za(), Rr(r), null;
      case 19:
        if (Nt(cn), d = r.memoizedState, d === null) return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Tn(d, !1);
        else {
          if (Bn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Rc(n), m !== null) {
              for (r.flags |= 128, Tn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ht(cn, cn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && _t() > To && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Rc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Tn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an) return Rr(r), null;
          } else 2 * _t() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = _t(), r.sibling = null, l = cn.current, Ht(cn, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return tf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ia & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ly(n, r) {
    switch (hd(r), r.tag) {
      case 1:
        return sn(r.type) && za(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return no(), Nt(Rn), Nt($e), Rd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Cd(r), null;
      case 13:
        if (Nt(cn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          yn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Nt(cn), null;
      case 4:
        return no(), null;
      case 10:
        return gd(r.type._context), null;
      case 22:
      case 23:
        return tf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vo = !1, ir = !1, Ic = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function ho(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      xn(n, r, o);
    }
    else l.current = null;
  }
  function Od(n, r, l) {
    try {
      l();
    } catch (o) {
      xn(n, r, o);
    }
  }
  var Qc = !1;
  function uy(n, r) {
    if (ud = Oa, n = ic(), ji(n)) {
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
            for (var se; Q !== l || c !== 0 && Q.nodeType !== 3 || (E = m + c), Q !== d || o !== 0 && Q.nodeType !== 3 || (T = m + o), Q.nodeType === 3 && (m += Q.nodeValue.length), (se = Q.firstChild) !== null; )
              $ = Q, Q = se;
            for (; ; ) {
              if (Q === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++I === o && (T = m), (se = Q.nextSibling) !== null) break;
              Q = $, $ = Q.parentNode;
            }
            Q = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Jl = { focusedElem: n, selectionRange: l }, Oa = !1, pe = r; pe !== null; ) if (r = pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pe = n;
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
              var Ee = ye.memoizedProps, Ln = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : na(r.type, Ee), Ln);
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
            throw Error(A(163));
        }
      } catch (X) {
        xn(r, r.return, X);
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
          c.destroy = void 0, d !== void 0 && Od(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Wc(n, r) {
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
  function Gc(n) {
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
  function Yv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Yv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[yi], delete r[tu], delete r[cd], delete r[ty], delete r[fd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ld(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Iv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ld(n.return)) return null;
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
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = fc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ts(n, r, l), n = n.sibling; n !== null; ) Ts(n, r, l), n = n.sibling;
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (yo(n, r, l), n = n.sibling; n !== null; ) yo(n, r, l), n = n.sibling;
  }
  var fn = null, Zn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; ) go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(cl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        ir || ho(l, r);
      case 6:
        var o = fn, c = Zn;
        fn = null, Lr(n, r, l), fn = o, Zn = c, fn !== null && (Zn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Zn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Cl(n.parentNode, l) : n.nodeType === 1 && Cl(n, l), yl(n)) : Cl(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = Zn, fn = l.stateNode.containerInfo, Zn = !0, Lr(n, r, l), fn = o, Zn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ir && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Od(l, r, m), c = c.next;
          } while (c !== o);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!ir && (ho(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          xn(l, r, E);
        }
        Lr(n, r, l);
        break;
      case 21:
        Lr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ir = (o = ir) || l.memoizedState !== null, Lr(n, r, l), ir = o) : Lr(n, r, l);
        break;
      default:
        Lr(n, r, l);
    }
  }
  function So(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ic()), r.forEach(function(o) {
        var c = vy.bind(null, n, o);
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
              fn = E.stateNode, Zn = !1;
              break e;
            case 3:
              fn = E.stateNode.containerInfo, Zn = !0;
              break e;
            case 4:
              fn = E.stateNode.containerInfo, Zn = !0;
              break e;
          }
          E = E.return;
        }
        if (fn === null) throw Error(A(160));
        go(d, m, c), fn = null, Zn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        xn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jn(r, n), Ci(n), o & 4) {
          try {
            mo(3, n, n.return), Wc(3, n);
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
          try {
            mo(5, n, n.return);
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        Jn(r, n), Ci(n), o & 512 && l !== null && ho(l, l.return);
        break;
      case 5:
        if (Jn(r, n), Ci(n), o & 512 && l !== null && ho(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Nn(c, d), hn(E, m);
            var z = hn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var I = T[m], Q = T[m + 1];
              I === "style" ? Mt(c, Q) : I === "dangerouslySetInnerHTML" ? ci(c, Q) : I === "children" ? da(c, Q) : We(c, I, Q, z);
            }
            switch (E) {
              case "input":
                _n(c, d);
                break;
              case "textarea":
                fa(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? hr(c, !!d.multiple, se, !1) : $ !== !!d.multiple && (d.defaultValue != null ? hr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : hr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[tu] = d;
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (Jn(r, n), Ci(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            xn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (Jn(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          yl(r.containerInfo);
        } catch (Ee) {
          xn(n, n.return, Ee);
        }
        break;
      case 4:
        Jn(r, n), Ci(n);
        break;
      case 13:
        Jn(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Xc = _t())), o & 4 && So(n);
        break;
      case 22:
        if (I = l !== null && l.memoizedState !== null, n.mode & 1 ? (ir = (z = ir) || I, Jn(r, n), ir = z) : Jn(r, n), Ci(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !I && n.mode & 1) for (pe = n, I = n.child; I !== null; ) {
            for (Q = pe = I; pe !== null; ) {
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
                      xn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  ho($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Wv(Q);
                    continue;
                  }
              }
              se !== null ? (se.return = $, pe = se) : Wv(Q);
            }
            I = I.sibling;
          }
          e: for (I = null, Q = n; ; ) {
            if (Q.tag === 5) {
              if (I === null) {
                I = Q;
                try {
                  c = Q.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Q.stateNode, T = Q.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = et("display", m));
                } catch (Ee) {
                  xn(n, n.return, Ee);
                }
              }
            } else if (Q.tag === 6) {
              if (I === null) try {
                Q.stateNode.nodeValue = z ? "" : Q.memoizedProps;
              } catch (Ee) {
                xn(n, n.return, Ee);
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
        Jn(r, n), Ci(n), o & 4 && So(n);
        break;
      case 21:
        break;
      default:
        Jn(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ld(l)) {
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
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Iv(n);
            yo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Iv(n);
            Ts(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        xn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function oy(n, r, l) {
    pe = n, Md(n);
  }
  function Md(n, r, l) {
    for (var o = (n.mode & 1) !== 0; pe !== null; ) {
      var c = pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vo;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || ir;
          E = vo;
          var z = ir;
          if (vo = m, (ir = T) && !z) for (pe = c; pe !== null; ) m = pe, T = m.child, m.tag === 22 && m.memoizedState !== null ? Nd(c) : T !== null ? (T.return = m, pe = T) : Nd(c);
          for (; d !== null; ) pe = d, Md(d), d = d.sibling;
          pe = c, vo = E, ir = z;
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
              ir || Wc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !ir) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Ov(r, d, o);
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
                Ov(r, m, l);
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
                    Q !== null && yl(Q);
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
          ir || r.flags & 512 && Gc(r);
        } catch ($) {
          xn(r, r.return, $);
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
  function Wv(n) {
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
  function Nd(n) {
    for (; pe !== null; ) {
      var r = pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Wc(4, r);
            } catch (T) {
              xn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                xn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Gc(r);
            } catch (T) {
              xn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Gc(r);
            } catch (T) {
              xn(r, m, T);
            }
        }
      } catch (T) {
        xn(r, r.return, T);
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
  var sy = Math.ceil, pu = pt.ReactCurrentDispatcher, qc = pt.ReactCurrentOwner, Va = pt.ReactCurrentBatchConfig, vt = 0, wn = null, ln = null, Vn = 0, ia = 0, Co = Ke(0), Bn = 0, ws = null, vu = 0, Ro = 0, zd = 0, Ll = null, Tr = null, Xc = 0, To = 1 / 0, Wi = null, Kc = !1, Ud = null, Ba = null, wo = !1, $a = null, Zc = 0, xs = 0, Jc = null, bs = -1, hu = 0;
  function er() {
    return vt & 6 ? _t() : bs !== -1 ? bs : bs = _t();
  }
  function Gi(n) {
    return n.mode & 1 ? vt & 2 && Vn !== 0 ? Vn & -Vn : yc.transition !== null ? (hu === 0 && (hu = Uu()), hu) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function gn(n, r, l, o) {
    if (50 < xs) throw xs = 0, Jc = null, Error(A(185));
    Mi(n, l, o), (!(vt & 2) || n !== wn) && (n === wn && (!(vt & 2) && (Ro |= l), Bn === 4 && Ri(n, Vn)), $n(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (To = _t() + 500, Kn && Kr()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    pl(n, r);
    var o = kr(n, n === wn ? Vn : 0);
    if (o === 0) l !== null && nn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && nn(l), r === 1) n.tag === 0 ? pd(xo.bind(null, n)) : dd(xo.bind(null, n)), sd(function() {
        !(vt & 6) && Kr();
      }), l = null;
      else {
        switch (Fu(o)) {
          case 1:
            l = _r;
            break;
          case 4:
            l = nt;
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
        l = th(l, ef.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ef(n, r) {
    if (bs = -1, hu = 0, vt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = kr(n, n === wn ? Vn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = nf(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = qv();
      (wn !== n || Vn !== r) && (Wi = null, To = _t() + 500, yu(n, r));
      do
        try {
          fy();
          break;
        } catch (E) {
          Gv(n, E);
        }
      while (!0);
      Sa(), pu.current = d, vt = c, ln !== null ? r = 0 : (wn = null, Vn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = vl(n), c !== 0 && (o = c, r = mu(n, c))), r === 1) throw l = ws, yu(n, 0), Ri(n, o), $n(n, _t()), l;
      if (r === 6) Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fd(c) && (r = nf(n, o), r === 2 && (d = vl(n), d !== 0 && (o = d, r = mu(n, d))), r === 1)) throw l = ws, yu(n, 0), Ri(n, o), $n(n, _t()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Ml(n, Tr, Wi);
            break;
          case 3:
            if (Ri(n, o), (o & 130023424) === o && (r = Xc + 500 - _t(), 10 < r)) {
              if (kr(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                er(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = eu(Ml.bind(null, n, Tr, Wi), r);
              break;
            }
            Ml(n, Tr, Wi);
            break;
          case 4:
            if (Ri(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = _t() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * sy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = eu(Ml.bind(null, n, Tr, Wi), o);
              break;
            }
            Ml(n, Tr, Wi);
            break;
          case 5:
            Ml(n, Tr, Wi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return $n(n, _t()), n.callbackNode === l ? ef.bind(null, n) : null;
  }
  function mu(n, r) {
    var l = Ll;
    return n.current.memoizedState.isDehydrated && (yu(n, r).flags |= 256), n = nf(n, r), n !== 2 && (r = Tr, Tr = l, r !== null && Ad(r)), n;
  }
  function Ad(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Fd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!La(d(), c)) return !1;
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
  function Ri(n, r) {
    for (r &= ~zd, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function xo(n) {
    if (vt & 6) throw Error(A(327));
    bo();
    var r = kr(n, 0);
    if (!(r & 1)) return $n(n, _t()), null;
    var l = nf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = vl(n);
      o !== 0 && (r = o, l = mu(n, o));
    }
    if (l === 1) throw l = ws, yu(n, 0), Ri(n, r), $n(n, _t()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ml(n, Tr, Wi), $n(n, _t()), null;
  }
  function jd(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (To = _t() + 500, Kn && Kr());
    }
  }
  function Ti(n) {
    $a !== null && $a.tag === 0 && !(vt & 6) && bo();
    var r = vt;
    vt |= 1;
    var l = Va.transition, o = Dt;
    try {
      if (Va.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Va.transition = l, vt = r, !(vt & 6) && Kr();
    }
  }
  function tf() {
    ia = Co.current, Nt(Co);
  }
  function yu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Cv(l)), ln !== null) for (l = ln.return; l !== null; ) {
      var o = l;
      switch (hd(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && za();
          break;
        case 3:
          no(), Nt(Rn), Nt($e), Rd();
          break;
        case 5:
          Cd(o);
          break;
        case 4:
          no();
          break;
        case 13:
          Nt(cn);
          break;
        case 19:
          Nt(cn);
          break;
        case 10:
          gd(o.type._context);
          break;
        case 22:
        case 23:
          tf();
      }
      l = l.return;
    }
    if (wn = n, ln = n = Nl(n.current, null), Vn = ia = r, Bn = 0, ws = null, zd = Ro = vu = 0, Tr = Ll = null, au !== null) {
      for (r = 0; r < au.length; r++) if (l = au[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      au = null;
    }
    return n;
  }
  function Gv(n, r) {
    do {
      var l = ln;
      try {
        if (Sa(), wc.current = Cr, Ea) {
          for (var o = we.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ea = !1;
        }
        if (Ce = 0, ct = Ye = we = null, ro = !1, vs = 0, qc.current = null, l === null || l.return === null) {
          Bn = 1, ws = r, ln = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Vn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, I = E, Q = I.tag;
            if (!(I.mode & 1) && (Q === 0 || Q === 11 || Q === 15)) {
              var $ = I.alternate;
              $ ? (I.updateQueue = $.updateQueue, I.memoizedState = $.memoizedState, I.lanes = $.lanes) : (I.updateQueue = null, I.memoizedState = null);
            }
            var se = Hv(m);
            if (se !== null) {
              se.flags &= -257, _d(se, m, E, d, r), se.mode & 1 && Ss(d, z, r), r = se, T = z;
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
          } else if (an && E.mode & 1) {
            var Ln = Hv(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), _d(Ln, m, E, d, r), yd(kl(T, E));
              break e;
            }
          }
          d = T = kl(T, E), Bn !== 4 && (Bn = 2), Ll === null ? Ll = [d] : Ll.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Fv(d, T, r);
                kv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ba === null || !Ba.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = jv(d, E, r);
                  kv(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Kv(l);
      } catch (Re) {
        r = Re, ln === l && l !== null && (ln = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qv() {
    var n = pu.current;
    return pu.current = Cr, n === null ? Cr : n;
  }
  function _s() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), wn === null || !(vu & 268435455) && !(Ro & 268435455) || Ri(wn, Vn);
  }
  function nf(n, r) {
    var l = vt;
    vt |= 2;
    var o = qv();
    (wn !== n || Vn !== r) && (Wi = null, yu(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        Gv(n, c);
      }
    while (!0);
    if (Sa(), vt = l, pu.current = o, ln !== null) throw Error(A(261));
    return wn = null, Vn = 0, Bn;
  }
  function cy() {
    for (; ln !== null; ) Xv(ln);
  }
  function fy() {
    for (; ln !== null && !gr(); ) Xv(ln);
  }
  function Xv(n) {
    var r = eh(n.alternate, n, ia);
    n.memoizedProps = n.pendingProps, r === null ? Kv(n) : ln = r, qc.current = null;
  }
  function Kv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ly(l, r), l !== null) {
          l.flags &= 32767, ln = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, ln = null;
          return;
        }
      } else if (l = iy(l, r, ia), l !== null) {
        ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ln = r;
        return;
      }
      ln = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Ml(n, r, l) {
    var o = Dt, c = Va.transition;
    try {
      Va.transition = null, Dt = 1, dy(n, r, l, o);
    } finally {
      Va.transition = c, Dt = o;
    }
    return null;
  }
  function dy(n, r, l, o) {
    do
      bo();
    while ($a !== null);
    if (vt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Bf(n, d), n === wn && (ln = wn = null, Vn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || wo || (wo = !0, th(Da, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Va.transition, Va.transition = null;
      var m = Dt;
      Dt = 1;
      var E = vt;
      vt |= 4, qc.current = null, uy(n, l), Qv(l, n), lc(Jl), Oa = !!ud, Jl = ud = null, n.current = l, oy(l), vi(), vt = E, Dt = m, Va.transition = d;
    } else n.current = l;
    if (wo && (wo = !1, $a = n, Zc = c), d = n.pendingLanes, d === 0 && (Ba = null), Io(l.stateNode), $n(n, _t()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Kc) throw Kc = !1, n = Ud, Ud = null, n;
    return Zc & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === Jc ? xs++ : (xs = 0, Jc = n) : xs = 0, Kr(), null;
  }
  function bo() {
    if ($a !== null) {
      var n = Fu(Zc), r = Va.transition, l = Dt;
      try {
        if (Va.transition = null, Dt = 16 > n ? 16 : n, $a === null) var o = !1;
        else {
          if (n = $a, $a = null, Zc = 0, vt & 6) throw Error(A(331));
          var c = vt;
          for (vt |= 4, pe = n.current; pe !== null; ) {
            var d = pe, m = d.child;
            if (pe.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (pe = z; pe !== null; ) {
                    var I = pe;
                    switch (I.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, I, d);
                    }
                    var Q = I.child;
                    if (Q !== null) Q.return = I, pe = Q;
                    else for (; pe !== null; ) {
                      I = pe;
                      var $ = I.sibling, se = I.return;
                      if (Yv(I), I === z) {
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
                      var Ln = Ee.sibling;
                      Ee.sibling = null, Ee = Ln;
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
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, pe = D;
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
                    Wc(9, E);
                }
              } catch (Re) {
                xn(E, E.return, Re);
              }
              if (E === m) {
                pe = null;
                break e;
              }
              var X = E.sibling;
              if (X !== null) {
                X.return = E.return, pe = X;
                break e;
              }
              pe = E.return;
            }
          }
          if (vt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(cl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Va.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = kl(l, r), r = Fv(n, r, 1), n = _l(n, r, 1), r = er(), n !== null && (Mi(n, 1, r), $n(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3) Zv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Zv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ba === null || !Ba.has(o))) {
          n = kl(l, n), n = jv(r, n, 1), r = _l(r, n, 1), n = er(), r !== null && (Mi(r, 1, n), $n(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = er(), n.pingedLanes |= n.suspendedLanes & l, wn === n && (Vn & l) === l && (Bn === 4 || Bn === 3 && (Vn & 130023424) === Vn && 500 > _t() - Xc ? yu(n, 0) : zd |= l), $n(n, r);
  }
  function Jv(n, r) {
    r === 0 && (n.mode & 1 ? (r = fl, fl <<= 1, !(fl & 130023424) && (fl = 4194304)) : r = 1);
    var l = er();
    n = Yi(n, r), n !== null && (Mi(n, r, l), $n(n, l));
  }
  function Hd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Jv(n, l);
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
    o !== null && o.delete(r), Jv(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Rn.current) ra = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return ra = !1, Qi(n, r, l);
      ra = !!(n.flags & 131072);
    }
    else ra = !1, an && r.flags & 1048576 && vd(r, Ku, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Rs(n, r), n = r.pendingProps;
        var c = Na(r, $e.current);
        Ju(r, l), c = B(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Sc(r), c.updater = cu, r.stateNode = c, c._reactInternals = r, xd(r, o, n, l), r = Vc(null, r, o, !0, d, l)) : (r.tag = 0, an && d && pc(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Rs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = na(o, n), c) {
            case 0:
              r = qe(null, r, o, n, l);
              break e;
            case 1:
              r = Es(null, r, o, n, l);
              break e;
            case 11:
              r = co(null, r, o, n, l);
              break e;
            case 14:
              r = Ol(null, r, o, na(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), qe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Es(n, r, o, c, l);
      case 3:
        e: {
          if (ay(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, eo(n, r), Cc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = kl(Error(A(423)), r), r = Vv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = kl(Error(A(424)), r), r = Vv(n, r, o, l, c);
            break e;
          } else for (ea = ii(r.stateNode.containerInfo.firstChild), ga = r, an = !0, Aa = null, l = _v(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yn(), o === c) {
              r = On(n, r, l);
              break e;
            }
            kn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Lv(r), n === null && hc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ls(o, c) ? m = null : d !== null && ls(o, d) && (r.flags |= 32), fu(n, r), kn(n, r, m, l), r.child;
      case 6:
        return n === null && hc(r), null;
      case 13:
        return Bv(n, r, l);
      case 4:
        return Ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Zu(r, null, o, l) : kn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), co(n, r, o, c, l);
      case 7:
        return kn(n, r, r.pendingProps, l), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ht($i, o._currentValue), o._currentValue = m, d !== null) if (La(d.value, m)) {
            if (d.children === c.children && !Rn.current) {
              r = On(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ta(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var I = z.pending;
                      I === null ? T.next = T : (T.next = I.next, I.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Sd(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Sd(m, l, r), m = d.sibling;
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
          kn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Ju(r, l), c = ja(c), o = o(c), r.flags |= 1, kn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), Ol(n, r, o, c, l);
      case 15:
        return Pc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Rs(n, r), r.tag = 1, sn(o) ? (n = !0, dc(r)) : n = !1, Ju(r, l), zv(r, o, c), xd(r, o, c, l), Vc(null, r, o, !0, n, l);
      case 19:
        return kd(n, r, l);
      case 22:
        return aa(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function th(n, r) {
    return Gt(n, r);
  }
  function nh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, o) {
    return new nh(n, r, l, o);
  }
  function Pd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function") return Pd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En) return 11;
      if (n === zt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Pd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return gu(l.children, c, d, r);
      case tn:
        m = 8, c |= 8;
        break;
      case bn:
        return n = Ya(12, l, r, c | 2), n.elementType = bn, n.lanes = d, n;
      case Ne:
        return n = Ya(13, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case Xe:
        return n = Ya(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
      case me:
        return af(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case It:
            m = 10;
            break e;
          case bt:
            m = 9;
            break e;
          case En:
            m = 11;
            break e;
          case zt:
            m = 14;
            break e;
          case wt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function gu(n, r, l, o) {
    return n = Ya(7, n, o, r), n.lanes = l, n;
  }
  function af(n, r, l, o) {
    return n = Ya(22, n, o, r), n.elementType = me, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function lf(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function Ds(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ks(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Au(0), this.expirationTimes = Au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Vd(n, r, l, o, c, d, m, E, T) {
    return n = new ks(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sc(d), n;
  }
  function rh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Bd(n) {
    if (!n) return gi;
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
            if (sn(r.type)) {
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
      if (sn(l)) return ss(n, l, r);
    }
    return r;
  }
  function $d(n, r, l, o, c, d, m, E, T) {
    return n = Vd(l, o, !0, n, c, d, m, E, T), n.context = Bd(null), l = n.current, o = er(), c = Gi(l), d = ta(o, c), d.callback = r ?? null, _l(l, d, c), n.current.lanes = c, Mi(n, c, o), $n(n, o), n;
  }
  function uf(n, r, l, o) {
    var c = r.current, d = er(), m = Gi(c);
    return l = Bd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ta(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = _l(c, r, m), n !== null && (gn(n, c, m, d), Ec(n, c, m)), m;
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
  function ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Yd(n, r) {
    ah(n, r), (n = n.alternate) && ah(n, r);
  }
  function my() {
    return null;
  }
  var Id = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  Ls.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    uf(n, r, null, null);
  }, Ls.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        uf(null, n, null, null);
      }), r[Vi] = null;
    }
  };
  function Ls(n) {
    this._internalRoot = n;
  }
  Ls.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < jt.length && r !== 0 && r < jt[l].priority; l++) ;
      jt.splice(l, 0, n), l === 0 && Js(n);
    }
  };
  function zl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
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
      var m = $d(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[Vi] = m.current, qu(n.nodeType === 8 ? n.parentNode : n), Ti(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = Os(T);
        E.call(z);
      };
    }
    var T = Vd(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = T, n[Vi] = T.current, qu(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      uf(r, T, l, o);
    }), T;
  }
  function cf(n, r, l, o, c) {
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
      uf(r, m, n, c);
    } else m = yy(l, r, n, c, o);
    return Os(m);
  }
  Ql = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && (hi(r, l | 1), $n(r, _t()), !(vt & 6) && (To = _t() + 500, Kr()));
        }
        break;
      case 13:
        Ti(function() {
          var o = Yi(n, 1);
          if (o !== null) {
            var c = er();
            gn(o, n, 1, c);
          }
        }), Yd(n, 1);
    }
  }, ju = function(n) {
    if (n.tag === 13) {
      var r = Yi(n, 134217728);
      if (r !== null) {
        var l = er();
        gn(r, n, 134217728, l);
      }
      Yd(n, 134217728);
    }
  }, gt = function(n) {
    if (n.tag === 13) {
      var r = Gi(n), l = Yi(n, r);
      if (l !== null) {
        var o = er();
        gn(l, n, r, o);
      }
      Yd(n, r);
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
  }, xr = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Oe(o);
              if (!c) throw Error(A(90));
              Vr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        fa(n, l);
        break;
      case "select":
        r = l.value, r != null && hr(n, !!l.multiple, r, !1);
    }
  }, Il = jd, Mu = Ti;
  var gy = { usingClientEntryPoint: !1, Events: [os, Xu, Oe, _a, ul, jd] }, Ms = { findFiberByHostInstance: Ma, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, lh = { bundleType: Ms.bundleType, version: Ms.version, rendererPackageName: Ms.rendererPackageName, rendererConfig: Ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = tt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ms.findFiberByHostInstance || my, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ff = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ff.isDisabled && ff.supportsFiber) try {
      cl = ff.inject(lh), Qr = ff;
    } catch {
    }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zl(r)) throw Error(A(200));
    return rh(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!zl(n)) throw Error(A(299));
    var l = !1, o = "", c = Id;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Vd(n, 1, !1, null, null, l, !1, o, c), n[Vi] = r.current, qu(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = tt(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Ti(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!sf(r)) throw Error(A(200));
    return cf(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!zl(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Id;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = $d(r, null, n, 1, l ?? null, c, !1, d, m), n[Vi] = r.current, qu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ls(r);
  }, Xa.render = function(n, r, l) {
    if (!sf(r)) throw Error(A(200));
    return cf(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!sf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ti(function() {
      cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Vi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = jd, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!sf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return cf(n, r, l, !1, o);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var Ka = {};
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
function lD() {
  return aR || (aR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ne = Pm, Z = sR(), A = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vt = !1;
    function on(e) {
      Vt = e;
    }
    function lt(e) {
      if (!Vt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("warn", e, a);
      }
    }
    function S(e) {
      if (!Vt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("error", e, a);
      }
    }
    function Yt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ve = 0, de = 1, ut = 2, re = 3, he = 4, ue = 5, Be = 6, Tt = 7, dt = 8, dn = 9, rt = 10, We = 11, pt = 12, ke = 13, ot = 14, He = 15, tn = 16, bn = 17, It = 18, bt = 19, En = 21, Ne = 22, Xe = 23, zt = 24, wt = 25, me = !0, K = !1, be = !1, ae = !1, _ = !1, P = !0, ze = !1, Pe = !0, Je = !0, Ze = !0, mt = !0, at = /* @__PURE__ */ new Set(), it = {}, Zt = {};
    function vr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      it[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), it[e] = t;
      {
        var a = e.toLowerCase();
        Zt[a] = e, e === "onDoubleClick" && (Zt.ondblclick = e);
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
    function Nn(e) {
      try {
        return _n(e), !1;
      } catch {
        return !0;
      }
    }
    function _n(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Nn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function $r(e) {
      if (Nn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function Wn(e, t) {
      if (Nn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function hr(e, t) {
      if (Nn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function Yr(e) {
      if (Nn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function mr(e) {
      if (Nn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    var fa = 0, nr = 1, Ir = 2, vn = 3, wr = 4, ci = 5, da = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _e = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", et = new RegExp("^[" + J + "][" + _e + "]*$"), Mt = {}, Ut = {};
    function Dn(e) {
      return Qn.call(Ut, e) ? !0 : Qn.call(Mt, e) ? !1 : et.test(e) ? (Ut[e] = !0, !0) : (Mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === fa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === fa)
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
    function Bt(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case wr:
            return t === !1;
          case ci:
            return isNaN(t);
          case da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xr(e) {
      return Ft.hasOwnProperty(e) ? Ft[e] : null;
    }
    function At(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === vn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ft = {}, Za = [
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
    Za.forEach(function(e) {
      Ft[e] = new At(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ft[t] = new At(
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
      Ft[e] = new At(
        e,
        Ir,
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
      Ft[e] = new At(
        e,
        Ir,
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
      Ft[e] = new At(
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
      Ft[e] = new At(
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
      Ft[e] = new At(
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
      Ft[e] = new At(
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
    }), ["rowSpan", "start"].forEach(function(e) {
      Ft[e] = new At(
        e,
        ci,
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
    var _a = /[\-\:]([a-z])/g, ul = function(e) {
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
      var t = e.replace(_a, ul);
      Ft[t] = new At(
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
      var t = e.replace(_a, ul);
      Ft[t] = new At(
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
      var t = e.replace(_a, ul);
      Ft[t] = new At(
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
      Ft[e] = new At(
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
    var Il = "xlinkHref";
    Ft[Il] = new At(
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
      Ft[e] = new At(
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
    var Mu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Li = !1;
    function ol(e) {
      !Li && Mu.test(e) && (Li = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && ol("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Bt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          f = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function fi(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = xr(t);
      if (!hn(t, u, i)) {
        if (Bt(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
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
          b === vn || b === wr && a === !0 ? w = "" : (Br(a, y), w = "" + a, u.sanitizeURL && ol(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Ja = Symbol.for("react.element"), br = Symbol.for("react.portal"), ha = Symbol.for("react.fragment"), di = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), Y = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), tt = Symbol.for("react.scope"), zn = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), gr = Symbol.for("react.cache"), vi = Symbol.for("react.tracing_marker"), _t = Symbol.iterator, Gn = "@@iterator";
    function _r(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _t && e[_t] || e[Gn];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, Da = 0, sl, Nu, cl, Qr, Io, Dr, Qo;
    function Wo() {
    }
    Wo.__reactDisabledLog = !0;
    function Ks() {
      {
        if (Da === 0) {
          sl = console.log, Nu = console.info, cl = console.warn, Qr = console.error, Io = console.group, Dr = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Wo,
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
            log: nt({}, e, {
              value: sl
            }),
            info: nt({}, e, {
              value: Nu
            }),
            warn: nt({}, e, {
              value: cl
            }),
            error: nt({}, e, {
              value: Qr
            }),
            group: nt({}, e, {
              value: Io
            }),
            groupCollapsed: nt({}, e, {
              value: Dr
            }),
            groupEnd: nt({}, e, {
              value: Qo
            })
          });
        }
        Da < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fl = A.ReactCurrentDispatcher, ei;
    function kr(e, t, a) {
      {
        if (ei === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ei = i && i[1] || "";
          }
        return `
` + ei + e;
      }
    }
    var dl = !1, pl;
    {
      var vl = typeof WeakMap == "function" ? WeakMap : Map;
      pl = new vl();
    }
    function Uu(e, t) {
      if (!e || dl)
        return "";
      {
        var a = pl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      dl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = fl.current, fl.current = null, Ks();
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
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && pl.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        dl = !1, fl.current = s, zu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? kr(w) : "";
      return typeof e == "function" && pl.set(e, M), M;
    }
    function Au(e, t, a) {
      return Uu(e, !0);
    }
    function Mi(e, t, a) {
      return Uu(e, !1);
    }
    function Bf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function hi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Uu(e, Bf(e));
      if (typeof e == "string")
        return kr(e);
      switch (e) {
        case Te:
          return kr("Suspense");
        case ft:
          return kr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return Mi(e.render);
          case yt:
            return hi(e.type, t, a);
          case Ue: {
            var i = e, u = i._payload, s = i._init;
            try {
              return hi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Dt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return kr(e.type);
        case tn:
          return kr("Lazy");
        case ke:
          return kr("Suspense");
        case bt:
          return kr("SuspenseList");
        case ve:
        case ut:
        case He:
          return Mi(e.type);
        case We:
          return Mi(e.type.render);
        case de:
          return Au(e.type);
        default:
          return "";
      }
    }
    function Fu(e) {
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
    function ju(e) {
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
        case ha:
          return "Fragment";
        case br:
          return "Portal";
        case pi:
          return "Profiler";
        case di:
          return "StrictMode";
        case Te:
          return "Suspense";
        case ft:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            var t = e;
            return ju(t) + ".Consumer";
          case R:
            var a = e;
            return ju(a._context) + ".Provider";
          case G:
            return Ql(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : gt(e.type) || "Memo";
          case Ue: {
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
    function Hu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Pu(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case zt:
          return "Cache";
        case dn:
          var i = a;
          return Pu(i) + ".Consumer";
        case rt:
          var u = a;
          return Pu(u._context) + ".Provider";
        case It:
          return "DehydratedFragment";
        case We:
          return Hu(a, a.render, "ForwardRef");
        case Tt:
          return "Fragment";
        case ue:
          return a;
        case he:
          return "Portal";
        case re:
          return "Root";
        case Be:
          return "Text";
        case tn:
          return gt(a);
        case dt:
          return a === di ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case pt:
          return "Profiler";
        case En:
          return "Scope";
        case ke:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case wt:
          return "TracingMarker";
        case de:
        case ve:
        case bn:
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
    var Wl = A.ReactDebugCurrentFrame, mn = null, Wr = !1;
    function Or() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function hl() {
      return mn === null ? "" : Fu(mn);
    }
    function Cn() {
      Wl.getCurrentStack = null, mn = null, Wr = !1;
    }
    function jt(e) {
      Wl.getCurrentStack = e === null ? null : hl, mn = e, Wr = !1;
    }
    function Zs() {
      return mn;
    }
    function Gr(e) {
      Wr = e;
    }
    function qn(e) {
      return "" + e;
    }
    function mi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mr(e), e;
        default:
          return "";
      }
    }
    var Js = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ni(e, t) {
      Js[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ml(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ec(e) {
      return e._valueTracker;
    }
    function ka(e) {
      e._valueTracker = null;
    }
    function yl(e) {
      var t = "";
      return e && (ml(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function zi(e) {
      var t = ml(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            mr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            mr(p), i = "" + p;
          },
          stopTracking: function() {
            ka(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      ec(e) || (e._valueTracker = zi(e));
    }
    function Vu(e) {
      if (!e)
        return !1;
      var t = ec(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = yl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function gl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Sl = !1, Gl = !1, Bu = !1, Go = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Ni("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Gl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), Gl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Sl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), Sl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: mi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !Go && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Go = !0), a._wrapperState.controlled && !i && !Bu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bu = !0);
      }
      N(e, t);
      var u = mi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = qn(u)) : a.value !== qn(u) && (a.value = qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, mi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
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
    function Ae(e, t) {
      var a = e;
      F(a, t), ie(a, t);
    }
    function ie(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vu(f), F(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || gl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var st = !1, xt = !1, qt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ne.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || xt || (xt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (qt || (qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", qn(mi(t.value)));
    }
    var Jt = Array.isArray;
    function St(e) {
      return Jt(e);
    }
    var Ui;
    Ui = !1;
    function $u() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var qo = ["value", "defaultValue"];
    function $f(e) {
      {
        Ni("select", e);
        for (var t = 0; t < qo.length; t++) {
          var a = qo[t];
          if (e[a] != null) {
            var i = St(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, $u()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, $u());
          }
        }
      }
    }
    function ni(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = qn(mi(a)), b = null, w = 0; w < u.length; w++) {
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
      return nt({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      $f(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ui && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ui = !0);
    }
    function Yf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ni(a, !!t.multiple, i, !1) : t.defaultValue != null && ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ni(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ni(a, !!t.multiple, t.defaultValue, !0) : ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Bm(e, t) {
      var a = e, i = t.value;
      i != null && ni(a, !!t.multiple, i, !1);
    }
    var If = !1;
    function Qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Gp(e, t) {
      var a = e;
      Ni("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !If && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), If = !0);
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
        initialValue: mi(i)
      };
    }
    function qp(e, t) {
      var a = e, i = mi(t.value), u = mi(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = qn(u));
    }
    function Xp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Wf(e, t) {
      qp(e, t);
    }
    var Ai = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", Gf = "http://www.w3.org/2000/svg";
    function tc(e) {
      switch (e) {
        case "svg":
          return Gf;
        case "math":
          return $m;
        default:
          return Ai;
      }
    }
    function qf(e, t) {
      return e == null || e === Ai ? tc(t) : e === Gf && t === "foreignObject" ? Ai : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, nc, Kp = Ym(function(e, t) {
      if (e.namespaceURI === Gf && !("innerHTML" in e)) {
        nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Fi = 3, Un = 8, ri = 9, ql = 11, rc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zp = {
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
    }, Yu = {
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
    function Jp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yu).forEach(function(e) {
      ev.forEach(function(t) {
        Yu[Jp(t, e)] = Yu[e];
      });
    });
    function ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Yu.hasOwnProperty(e) && Yu[e]) ? t + "px" : (hr(t, e), ("" + t).trim());
    }
    var Iu = /([A-Z])/g, Im = /^ms-/;
    function Qm(e) {
      return e.replace(Iu, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var tv = function() {
    };
    {
      var nv = /^(?:webkit|moz|o)[A-Z]/, rv = /^-ms-/, Zo = /-(.)/g, Qu = /;\s*$/, Wu = {}, Gu = {}, av = !1, Xf = !1, Kf = function(e) {
        return e.replace(Zo, function(t, a) {
          return a.toUpperCase();
        });
      }, Zf = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kf(e.replace(rv, "ms-"))
        ));
      }, iv = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, lv = function(e, t) {
        Gu.hasOwnProperty(t) && Gu[t] || (Gu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Qu, "")));
      }, uv = function(e, t) {
        av || (av = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Wm = function(e, t) {
        Xf || (Xf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      tv = function(e, t) {
        e.indexOf("-") > -1 ? Zf(e) : nv.test(e) ? iv(e) : Qu.test(t) && lv(e, t), typeof t == "number" && (isNaN(t) ? uv(e, t) : isFinite(t) || Wm(e, t));
      };
    }
    var Gm = tv;
    function qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qm(i)) + ":", t += ac(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Gm(i, t[i]);
          var s = ac(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Xm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function La(e) {
      var t = {};
      for (var a in e)
        for (var i = Zp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Jo(e, t) {
      {
        if (!t)
          return;
        var a = La(e), i = La(t), u = {};
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
    var sv = {
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
    }, cv = nt({
      menuitem: !0
    }, sv), fv = "__html";
    function ic(e, t) {
      if (t) {
        if (cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ji(e, t) {
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
    var lc = {
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
    }, dv = {
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
    }, ai = {}, Jf = new RegExp("^(aria)-[" + _e + "]*$"), es = new RegExp("^(aria)[A-Z][" + _e + "]*$");
    function ed(e, t) {
      {
        if (Qn.call(ai, t) && ai[t])
          return !0;
        if (es.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ai[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ai[t] = !0, !0;
        }
        if (Jf.test(t)) {
          var u = t.toLowerCase(), s = dv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ai[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ai[t] = !0, !0;
        }
      }
      return !0;
    }
    function pv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ed(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function uc(e, t) {
      ji(e, t) || pv(e, t);
    }
    var Xl = !1;
    function td(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xl && (Xl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var nd = function() {
    };
    {
      var Xn = {}, rd = /^on./, vv = /^on[^A-Z]/, hv = new RegExp("^(aria)-[" + _e + "]*$"), mv = new RegExp("^(aria)[A-Z][" + _e + "]*$");
      nd = function(e, t, a, i) {
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
          if (rd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (rd.test(t))
          return vv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (hv.test(t) || mv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = xr(t), y = v !== null && v.type === fa;
        if (lc.hasOwnProperty(u)) {
          var g = lc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : yr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var yv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = nd(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function gv(e, t, a) {
      ji(e, t) || yv(e, t, a);
    }
    var Hi = 1, ts = 2, Kl = 4, Km = Hi | ts | Kl, ns = null;
    function rs(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function Zm() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function Sv(e) {
      return e === ns;
    }
    function oc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fi ? t.parentNode : t;
    }
    var Kt = null, El = null, Pi = null;
    function qu(e) {
      var t = ko(e);
      if (t) {
        if (typeof Kt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          Kt(t.stateNode, t.type, i);
        }
      }
    }
    function Ev(e) {
      Kt = e;
    }
    function sc(e) {
      El ? Pi ? Pi.push(e) : Pi = [e] : El = e;
    }
    function as() {
      return El !== null || Pi !== null;
    }
    function is() {
      if (El) {
        var e = El, t = Pi;
        if (El = null, Pi = null, qu(e), t)
          for (var a = 0; a < t.length; a++)
            qu(t[a]);
      }
    }
    var Zl = function(e, t) {
      return e(t);
    }, ad = function() {
    }, id = !1;
    function Jm() {
      var e = as();
      e && (ad(), is());
    }
    function ld(e, t, a) {
      if (id)
        return e(t, a);
      id = !0;
      try {
        return Zl(e, t, a);
      } finally {
        id = !1, Jm();
      }
    }
    function cc(e, t, a) {
      Zl = e, ad = a;
    }
    function fc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ud(e, t, a) {
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
          return !!(a.disabled && fc(t));
        default:
          return !1;
      }
    }
    function Jl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ud(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (pn)
      try {
        var eu = {};
        Object.defineProperty(eu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", eu, eu), window.removeEventListener("test", eu, eu);
      } catch {
        ls = !1;
      }
    function Cv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var od = Cv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var sd = document.createElement("react");
      od = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          sd.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Le() {
          b = !0, j(), a.apply(i, le), w = !1;
        }
        var xe, Rt = !1, ht = !1;
        function k(O) {
          if (xe = O.error, Rt = !0, xe === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), sd.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), sd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && w && (Rt ? ht && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !b)
          return j(), Cv.apply(this, arguments);
      };
    }
    var ey = od, Cl = !1, ii = null, us = !1, Rl = null, yi = {
      onError: function(e) {
        Cl = !0, ii = e;
      }
    };
    function tu(e, t, a, i, u, s, f, p, v) {
      Cl = !1, ii = null, ey.apply(yi, arguments);
    }
    function Vi(e, t, a, i, u, s, f, p, v) {
      if (tu.apply(this, arguments), Cl) {
        var y = fd();
        us || (us = !0, Rl = y);
      }
    }
    function cd() {
      if (us) {
        var e = Rl;
        throw us = !1, Rl = null, e;
      }
    }
    function ty() {
      return Cl;
    }
    function fd() {
      if (Cl) {
        var e = ii;
        return Cl = !1, ii = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ma(e) {
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
    ), Tl = (
      /*                */
      1
    ), rn = (
      /*                    */
      2
    ), Ke = (
      /*                       */
      4
    ), Nt = (
      /*                */
      16
    ), Ht = (
      /*                 */
      32
    ), gi = (
      /*                     */
      64
    ), $e = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), sn = (
      /*                      */
      2048
    ), za = (
      /*                    */
      4096
    ), wl = (
      /*                   */
      8192
    ), ss = (
      /*             */
      16384
    ), dc = sn | Ke | gi | Xr | Na | ss, Rv = (
      /*               */
      32767
    ), ma = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), cs = (
      /* */
      131072
    ), dd = (
      /*                       */
      1048576
    ), pd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), xl = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), nu = (
      /*              */
      33554432
    ), Ku = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ke | Na | 0
    ), Jr = rn | Ke | Nt | Ht | Xr | za | wl, Sr = Ke | gi | Xr | wl, Ua = sn | Nt, rr = Kr | xl | pd, Bi = A.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (rn | za)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function vd(e) {
      if (e.tag === ke) {
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
    function pc(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function hd(e) {
      return ya(e) === e;
    }
    function ga(e) {
      {
        var t = Bi.current;
        if (t !== null && t.tag === de) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ma(e);
      return u ? ya(u) === u : !1;
    }
    function ea(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function an(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
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
              return ea(s), e;
            if (v === u)
              return ea(s), t;
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
    function Aa(e) {
      var t = an(e);
      return t !== null ? md(t) : null;
    }
    function md(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = md(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Tv(e) {
      var t = an(e);
      return t !== null ? vc(t) : null;
    }
    function vc(e) {
      if (e.tag === ue || e.tag === Be)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hc = Z.unstable_scheduleCallback, wv = Z.unstable_cancelCallback, mc = Z.unstable_shouldYield, xv = Z.unstable_requestPaint, yn = Z.unstable_now, yd = Z.unstable_getCurrentPriorityLevel, yc = Z.unstable_ImmediatePriority, ru = Z.unstable_UserBlockingPriority, Si = Z.unstable_NormalPriority, bv = Z.unstable_LowPriority, gc = Z.unstable_IdlePriority, Zu = Z.unstable_yieldValue, _v = Z.unstable_setDisableYieldValue, $i = null, Pn = null, ee = null, Fa = !1, Sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Je && (e = nt({}, e, {
          getLaneLabelMap: Yi,
          injectProfilingHooks: Dv
        })), $i = t.inject(e), Pn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (Pn && typeof Pn.onScheduleFiberRoot == "function")
        try {
          Pn.onScheduleFiberRoot($i, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ju(e, t) {
      if (Pn && typeof Pn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & $e) === $e;
          if (Ze) {
            var i;
            switch (t) {
              case On:
                i = yc;
                break;
              case Qi:
                i = ru;
                break;
              case Ei:
                i = Si;
                break;
              case fo:
                i = gc;
                break;
              default:
                i = Si;
                break;
            }
            Pn.onCommitFiberRoot($i, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function ja(e) {
      if (Pn && typeof Pn.onPostCommitFiberRoot == "function")
        try {
          Pn.onPostCommitFiberRoot($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function au(e) {
      if (Pn && typeof Pn.onCommitFiberUnmount == "function")
        try {
          Pn.onCommitFiberUnmount($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Zu == "function" && (_v(e), on(e)), Pn && typeof Pn.setStrictMode == "function")
        try {
          Pn.setStrictMode($i, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Dv(e) {
      ee = e;
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
    function bl(e) {
      ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(e);
    }
    function Sc() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function eo(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function ta() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function _l(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function Ec() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function kv(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function Cc() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function Ov(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function fs() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function li(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function to() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function iu(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function Ed(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function no() {
      ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
    }
    function Lv(e) {
      ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(e);
    }
    function Cd() {
      ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped();
    }
    function cn(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function Rc() {
      ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded();
    }
    function Tc() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function Rd(e) {
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(e);
    }
    function wc(e, t) {
      ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), we = (
      /*                 */
      1
    ), Ye = (
      /*                    */
      2
    ), ct = (
      /*               */
      8
    ), Ea = (
      /*              */
      16
    ), ro = Math.clz32 ? Math.clz32 : Er, vs = Math.log, ny = Math.LN2;
    function Er(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (vs(t) / ny | 0) | 0;
    }
    var hs = 31, B = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), De = (
      /*                        */
      1
    ), ar = (
      /*    */
      2
    ), Ca = (
      /*             */
      4
    ), Ii = (
      /*            */
      8
    ), Ha = (
      /*                     */
      16
    ), ao = (
      /*                */
      32
    ), lu = (
      /*                       */
      4194240
    ), io = (
      /*                        */
      64
    ), xc = (
      /*                        */
      128
    ), bc = (
      /*                        */
      256
    ), _c = (
      /*                        */
      512
    ), Dc = (
      /*                        */
      1024
    ), kc = (
      /*                        */
      2048
    ), uu = (
      /*                        */
      4096
    ), Oc = (
      /*                        */
      8192
    ), lo = (
      /*                        */
      16384
    ), uo = (
      /*                       */
      32768
    ), Lc = (
      /*                       */
      65536
    ), ms = (
      /*                       */
      131072
    ), Mc = (
      /*                       */
      262144
    ), Nc = (
      /*                       */
      524288
    ), zc = (
      /*                       */
      1048576
    ), Uc = (
      /*                       */
      2097152
    ), oo = (
      /*                            */
      130023424
    ), ou = (
      /*                             */
      4194304
    ), Ac = (
      /*                             */
      8388608
    ), Fc = (
      /*                             */
      16777216
    ), Td = (
      /*                             */
      33554432
    ), jc = (
      /*                             */
      67108864
    ), Mv = ou, ys = (
      /*          */
      134217728
    ), wd = (
      /*                          */
      268435455
    ), so = (
      /*               */
      268435456
    ), Dl = (
      /*                        */
      536870912
    ), Cr = (
      /*                   */
      1073741824
    );
    function ry(e) {
      {
        if (e & De)
          return "Sync";
        if (e & ar)
          return "InputContinuousHydration";
        if (e & Ca)
          return "InputContinuous";
        if (e & Ii)
          return "DefaultHydration";
        if (e & Ha)
          return "Default";
        if (e & ao)
          return "TransitionHydration";
        if (e & lu)
          return "Transition";
        if (e & oo)
          return "Retry";
        if (e & ys)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & Cr)
          return "Offscreen";
      }
    }
    var en = -1, Hc = io, na = ou;
    function su(e) {
      switch (kn(e)) {
        case De:
          return De;
        case ar:
          return ar;
        case Ca:
          return Ca;
        case Ii:
          return Ii;
        case Ha:
          return Ha;
        case ao:
          return ao;
        case io:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case uu:
        case Oc:
        case lo:
        case uo:
        case Lc:
        case ms:
        case Mc:
        case Nc:
        case zc:
        case Uc:
          return e & lu;
        case ou:
        case Ac:
        case Fc:
        case Td:
        case jc:
          return e & oo;
        case ys:
          return ys;
        case so:
          return so;
        case Dl:
          return Dl;
        case Cr:
          return Cr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cu(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & wd;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = su(p);
        else {
          var v = f & s;
          v !== B && (i = su(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = su(y) : s !== B && (i = su(s));
      }
      if (i === B)
        return B;
      if (t !== B && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === B) {
        var g = kn(i), b = kn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Ha && (b & lu) !== B
        )
          return t;
      }
      (i & Ca) !== B && (i |= a & Ha);
      var w = e.entangledLanes;
      if (w !== B)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var j = Ol(U), le = 1 << j;
          i |= M[j], U &= ~le;
        }
      return i;
    }
    function Nv(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var u = Ol(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zv(e, t) {
      switch (e) {
        case De:
        case ar:
        case Ca:
          return t + 250;
        case Ii:
        case Ha:
        case ao:
        case io:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case uu:
        case Oc:
        case lo:
        case uo:
        case Lc:
        case ms:
        case Mc:
        case Nc:
        case zc:
        case Uc:
          return t + 5e3;
        case ou:
        case Ac:
        case Fc:
        case Td:
        case jc:
          return en;
        case ys:
        case so:
        case Dl:
        case Cr:
          return en;
        default:
          return S("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function Uv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p, y = s[p];
        y === en ? ((v & i) === B || (v & u) !== B) && (s[p] = zv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function xd(e) {
      return su(e.pendingLanes);
    }
    function kl(e) {
      var t = e.pendingLanes & ~Cr;
      return t !== B ? t : t & Cr ? Cr : B;
    }
    function bd(e) {
      return (e & De) !== B;
    }
    function gs(e) {
      return (e & wd) !== B;
    }
    function Av(e) {
      return (e & oo) === e;
    }
    function Fv(e) {
      var t = De | Ca | Ha;
      return (e & t) === B;
    }
    function jv(e) {
      return (e & lu) === e;
    }
    function Ss(e, t) {
      var a = ar | Ca | Ii | Ha;
      return (t & a) !== B;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function _d(e) {
      return (e & lu) !== B;
    }
    function Pv() {
      var e = Hc;
      return Hc <<= 1, (Hc & lu) === B && (Hc = io), e;
    }
    function ra() {
      var e = na;
      return na <<= 1, (na & oo) === B && (na = ou), e;
    }
    function kn(e) {
      return e & -e;
    }
    function co(e) {
      return kn(e);
    }
    function Ol(e) {
      return 31 - ro(e);
    }
    function Pc(e) {
      return Ol(e);
    }
    function aa(e, t) {
      return (e & t) !== B;
    }
    function fu(e, t) {
      return (e & t) === t;
    }
    function qe(e, t) {
      return e | t;
    }
    function Es(e, t) {
      return e & ~t;
    }
    function Vc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Vv(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Cs(e) {
      for (var t = [], a = 0; a < hs; a++)
        t.push(e);
      return t;
    }
    function du(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = Pc(t);
      i[u] = a;
    }
    function Bv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ol(i), s = 1 << u;
        a[u] = en, i &= ~s;
      }
    }
    function Bc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function $c(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p;
        i[p] = B, u[p] = en, s[p] = en, f &= ~v;
      }
    }
    function Dd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ol(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function $v(e, t) {
      var a = kn(t), i;
      switch (a) {
        case Ca:
          i = ar;
          break;
        case Ha:
          i = Ii;
          break;
        case io:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case uu:
        case Oc:
        case lo:
        case uo:
        case Lc:
        case ms:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case ou:
        case Ac:
        case Fc:
        case Td:
        case jc:
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
      if (Sa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function kd(e, t) {
      if (Sa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Pc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Rs(e, t) {
      return null;
    }
    var On = De, Qi = Ca, Ei = Ha, fo = Dl, po = Fn;
    function Pa() {
      return po;
    }
    function Tn(e) {
      po = e;
    }
    function Rr(e, t) {
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
    function ir(e) {
      var t = kn(e);
      return vo(On, t) ? vo(Qi, t) ? gs(t) ? Ei : fo : Qi : On;
    }
    function Ic(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pe;
    function ho(e) {
      pe = e;
    }
    function Od(e) {
      pe(e);
    }
    var Qc;
    function uy(e) {
      Qc = e;
    }
    var mo;
    function Wc(e) {
      mo = e;
    }
    var Gc;
    function Yv(e) {
      Gc = e;
    }
    var Ld;
    function Iv(e) {
      Ld = e;
    }
    var Ts = !1, yo = [], fn = null, Zn = null, Lr = null, go = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Jn = [], Qv = [
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
    function Ci(e) {
      return Qv.indexOf(e) > -1;
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
    function Md(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fn = null;
          break;
        case "dragenter":
        case "dragleave":
          Zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Lr = null;
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
          var p = ko(t);
          p !== null && Qc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return fn = Eo(fn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Zn = Eo(Zn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Lr = Eo(Lr, e, t, a, i, p), !0;
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
    function Nd(e) {
      var t = Us(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ke) {
            var u = vd(a);
            if (u !== null) {
              e.blockedOn = u, Ld(e.priority, function() {
                mo(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (Ic(s)) {
              e.blockedOn = pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function sy(e) {
      for (var t = Gc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Jn.length && vo(t, Jn[i].priority); i++)
        ;
      Jn.splice(i, 0, a), i === 0 && Nd(a);
    }
    function pu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          rs(s), u.target.dispatchEvent(s), Zm();
        } else {
          var f = ko(i);
          return f !== null && Qc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function qc(e, t, a) {
      pu(e) && a.delete(t);
    }
    function Va() {
      Ts = !1, fn !== null && pu(fn) && (fn = null), Zn !== null && pu(Zn) && (Zn = null), Lr !== null && pu(Lr) && (Lr = null), go.forEach(qc), So.forEach(qc);
    }
    function vt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ts || (Ts = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, Va)));
    }
    function wn(e) {
      if (yo.length > 0) {
        vt(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fn !== null && vt(fn, e), Zn !== null && vt(Zn, e), Lr !== null && vt(Lr, e);
      var i = function(p) {
        return vt(p, e);
      };
      go.forEach(i), So.forEach(i);
      for (var u = 0; u < Jn.length; u++) {
        var s = Jn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Jn.length > 0; ) {
        var f = Jn[0];
        if (f.blockedOn !== null)
          break;
        Nd(f), f.blockedOn === null && Jn.shift();
      }
    }
    var ln = A.ReactCurrentBatchConfig, Vn = !0;
    function ia(e) {
      Vn = !!e;
    }
    function Co() {
      return Vn;
    }
    function Bn(e, t, a) {
      var i = Xc(t), u;
      switch (i) {
        case On:
          u = ws;
          break;
        case Qi:
          u = vu;
          break;
        case Ei:
        default:
          u = Ro;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ws(e, t, a, i) {
      var u = Pa(), s = ln.transition;
      ln.transition = null;
      try {
        Tn(On), Ro(e, t, a, i);
      } finally {
        Tn(u), ln.transition = s;
      }
    }
    function vu(e, t, a, i) {
      var u = Pa(), s = ln.transition;
      ln.transition = null;
      try {
        Tn(Qi), Ro(e, t, a, i);
      } finally {
        Tn(u), ln.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      Vn && zd(e, t, a, i);
    }
    function zd(e, t, a, i) {
      var u = Tr(e, t, a, i);
      if (u === null) {
        by(e, t, i, Ll, a), Md(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Md(e, i), t & Kl && Ci(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && Od(s);
          var f = Tr(e, t, a, i);
          if (f === null && by(e, t, i, Ll, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Ll = null;
    function Tr(e, t, a, i) {
      Ll = null;
      var u = oc(i), s = Us(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ke) {
            var v = vd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (Ic(y))
              return pc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function Xc(e) {
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
          return On;
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
          var t = yd();
          switch (t) {
            case yc:
              return On;
            case ru:
              return Qi;
            case Si:
            case bv:
              return Ei;
            case gc:
              return fo;
            default:
              return Ei;
          }
        }
        default:
          return Ei;
      }
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Wi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Kc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ud(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ba = null, wo = null, $a = null;
    function Zc(e) {
      return Ba = e, wo = bs(), !0;
    }
    function xs() {
      Ba = null, wo = null, $a = null;
    }
    function Jc() {
      if ($a)
        return $a;
      var e, t = wo, a = t.length, i, u = bs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $a = u.slice(e, p), $a;
    }
    function bs() {
      return "value" in Ba ? Ba.value : Ba.textContent;
    }
    function hu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function er() {
      return !0;
    }
    function Gi() {
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
        return y ? this.isDefaultPrevented = er : this.isDefaultPrevented = Gi, this.isPropagationStopped = Gi, this;
      }
      return nt(t.prototype, {
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
    }, ef = gn($n), mu = nt({}, $n, {
      view: 0,
      detail: 0
    }), Ad = gn(mu), Fd, Ri, xo;
    function jd(e) {
      e !== xo && (xo && e.type === "mousemove" ? (Fd = e.screenX - xo.screenX, Ri = e.screenY - xo.screenY) : (Fd = 0, Ri = 0), xo = e);
    }
    var Ti = nt({}, mu, {
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
      getModifierState: Hd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (jd(e), Fd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), tf = gn(Ti), yu = nt({}, Ti, {
      dataTransfer: 0
    }), Gv = gn(yu), qv = nt({}, mu, {
      relatedTarget: 0
    }), _s = gn(qv), nf = nt({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = gn(nf), fy = nt({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Xv = gn(fy), Kv = nt({}, $n, {
      data: 0
    }), Ml = gn(Kv), dy = Ml, bo = {
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
    }, Zv = {
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
    function xn(e) {
      if (e.key) {
        var t = bo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = hu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Zv[e.keyCode] || "Unidentified" : "";
    }
    var py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Jv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = py[e];
      return i ? !!a[i] : !1;
    }
    function Hd(e) {
      return Jv;
    }
    var vy = nt({}, mu, {
      key: xn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? hu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? hu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), eh = gn(vy), th = nt({}, Ti, {
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
    }), nh = gn(th), Ya = nt({}, mu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hd
    }), Pd = gn(Ya), hy = nt({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Nl = gn(hy), rf = nt({}, Ti, {
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
    }), gu = gn(rf), af = [9, 13, 27, 32], lf = 229, Ds = pn && "CompositionEvent" in window, ks = null;
    pn && "documentMode" in document && (ks = document.documentMode);
    var Vd = pn && "TextEvent" in window && !ks, rh = pn && (!Ds || ks && ks > 8 && ks <= 11), Bd = 32, $d = String.fromCharCode(Bd);
    function uf() {
      vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Os = !1;
    function ah(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Yd(e) {
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
      return e === "keydown" && t.keyCode === lf;
    }
    function Id(e, t) {
      switch (e) {
        case "keyup":
          return af.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function of(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ls(e) {
      return e.locale === "ko";
    }
    var zl = !1;
    function sf(e, t, a, i, u) {
      var s, f;
      if (Ds ? s = Yd(t) : zl ? Id(t, i) && (s = "onCompositionEnd") : my(t, i) && (s = "onCompositionStart"), !s)
        return null;
      rh && !Ls(i) && (!zl && s === "onCompositionStart" ? zl = Zc(u) : s === "onCompositionEnd" && zl && (f = Jc()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Ml(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = of(i);
          y !== null && (v.data = y);
        }
      }
    }
    function ih(e, t) {
      switch (e) {
        case "compositionend":
          return of(t);
        case "keypress":
          var a = t.which;
          return a !== Bd ? null : (Os = !0, $d);
        case "textInput":
          var i = t.data;
          return i === $d && Os ? null : i;
        default:
          return null;
      }
    }
    function yy(e, t) {
      if (zl) {
        if (e === "compositionend" || !Ds && Id(e, t)) {
          var a = Jc();
          return xs(), zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ah(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rh && !Ls(t) ? null : t.data;
        default:
          return null;
      }
    }
    function cf(e, t, a, i, u) {
      var s;
      if (Vd ? s = ih(t, i) : s = yy(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new dy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      sf(e, t, a, i, u), cf(e, t, a, i, u);
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
    function lh(e) {
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
    function ff(e) {
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
      vr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      sc(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new ef("onChange", "change", null, a, i);
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
      r(t, o, e, oc(e)), ld(m, t);
    }
    function m(e) {
      _0(e, 0);
    }
    function E(e) {
      var t = yf(e);
      if (Vu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    pn && (z = ff("input") && (!document.documentMode || document.documentMode > 9));
    function I(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", $);
    }
    function Q() {
      l && (l.detachEvent("onpropertychange", $), l = null, o = null);
    }
    function $(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (Q(), I(t, a)) : e === "focusout" && Q();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ee(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
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
      var p = a ? yf(a) : window, v, y;
      if (c(p) ? v = T : lh(p) ? z ? v = D : (v = ye, y = se) : Ee(p) && (v = Ln), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function X() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Sv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Us(y) || ip(y)))
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
            var j = ya(M);
            (M !== j || M.tag !== ue && M.tag !== Be) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var le = tf, Le = "onMouseLeave", xe = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = nh, Le = "onPointerLeave", xe = "onPointerEnter", Rt = "pointer");
          var ht = w == null ? g : yf(w), k = M == null ? g : yf(M), H = new le(Le, Rt + "leave", w, i, u);
          H.target = ht, H.relatedTarget = k;
          var O = null, W = Us(u);
          if (W === a) {
            var fe = new le(xe, Rt + "enter", M, i, u);
            fe.target = k, fe.relatedTarget = ht, O = fe;
          }
          LR(e, H, O, w, M);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Fe;
    function je(e, t) {
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
    function kt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Fi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(kt(a));
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
      return fR(e, u, s, f, p);
    }
    function fR(e, t, a, i, u) {
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
    function dR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = qi(e, f), g = qi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function h0(e) {
      return e && e.nodeType === Fi;
    }
    function m0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : h0(e) ? !1 : h0(t) ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pR(e) {
      return e && e.ownerDocument && m0(e.ownerDocument.documentElement, e);
    }
    function vR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function y0() {
      for (var e = window, t = gl(); t instanceof e.HTMLIFrameElement; ) {
        if (vR(t))
          e = t.contentWindow;
        else
          return t;
        t = gl(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function hR() {
      var e = y0();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? yR(e) : null
      };
    }
    function mR(e) {
      var t = y0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && pR(a)) {
        i !== null && Ey(a) && gR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
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
    function yR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Sy(e), t || {
        start: 0,
        end: 0
      };
    }
    function gR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : dR(e, t);
    }
    var SR = pn && "documentMode" in document && document.documentMode <= 11;
    function ER() {
      vr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var df = null, Cy = null, Qd = null, Ry = !1;
    function CR(e) {
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
    function RR(e) {
      return e.window === e ? e.document : e.nodeType === ri ? e : e.ownerDocument;
    }
    function g0(e, t, a) {
      var i = RR(a);
      if (!(Ry || df == null || df !== gl(i))) {
        var u = CR(df);
        if (!Qd || !je(Qd, u)) {
          Qd = u;
          var s = ch(Cy, "onSelect");
          if (s.length > 0) {
            var f = new ef("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = df;
          }
        }
      }
    }
    function TR(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window;
      switch (t) {
        case "focusin":
          (lh(p) || p.contentEditable === "true") && (df = p, Cy = a, Qd = null);
          break;
        case "focusout":
          df = null, Cy = null, Qd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, g0(e, i, u);
          break;
        case "selectionchange":
          if (SR)
            break;
        case "keydown":
        case "keyup":
          g0(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var pf = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, Ty = {}, S0 = {};
    pn && (S0 = document.createElement("div").style, "AnimationEvent" in window || (delete pf.animationend.animation, delete pf.animationiteration.animation, delete pf.animationstart.animation), "TransitionEvent" in window || delete pf.transitionend.transition);
    function oh(e) {
      if (Ty[e])
        return Ty[e];
      if (!pf[e])
        return e;
      var t = pf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in S0)
          return Ty[e] = t[a];
      return e;
    }
    var E0 = oh("animationend"), C0 = oh("animationiteration"), R0 = oh("animationstart"), T0 = oh("transitionend"), w0 = /* @__PURE__ */ new Map(), x0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      w0.set(e, t), vr(t, [e]);
    }
    function wR() {
      for (var e = 0; e < x0.length; e++) {
        var t = x0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(E0, "onAnimationEnd"), _o(C0, "onAnimationIteration"), _o(R0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(T0, "onTransitionEnd");
    }
    function xR(e, t, a, i, u, s, f) {
      var p = w0.get(t);
      if (p !== void 0) {
        var v = ef, y = t;
        switch (t) {
          case "keypress":
            if (hu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = eh;
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
            v = tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Pd;
            break;
          case E0:
          case C0:
          case R0:
            v = cy;
            break;
          case T0:
            v = Nl;
            break;
          case "scroll":
            v = Ad;
            break;
          case "wheel":
            v = gu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = nh;
            break;
        }
        var g = (s & Kl) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = kR(a, p, i.type, g, b);
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
    wR(), X(), n(), ER(), uf();
    function bR(e, t, a, i, u, s, f) {
      xR(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (Re(e, t, a, i, u), L(e, t, a, i, u), TR(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Wd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Vi(i, t, void 0, e), e.currentTarget = null;
    }
    function _R(e, t, a) {
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
      for (var a = (t & Kl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        _R(s, f, a);
      }
      cd();
    }
    function DR(e, t, a, i, u) {
      var s = oc(a), f = [];
      bR(f, e, i, a, s, t), _0(f, t);
    }
    function Sn(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = aw(t), u = MR(e);
      i.has(u) || (D0(t, e, ts, a), i.add(u));
    }
    function xy(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Kl), D0(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function Gd(e) {
      if (!e[sh]) {
        e[sh] = !0, at.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === ri ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function D0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Kc(e, t, s, f) : Wi(e, t, s) : f !== void 0 ? Ud(e, t, s, f) : To(e, t, s);
    }
    function k0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & Hi) && !(t & ts)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === re || v === he) {
              var y = p.stateNode.containerInfo;
              if (k0(y, f))
                break;
              if (v === he)
                for (var g = p.return; g !== null; ) {
                  var b = g.tag;
                  if (b === re || b === he) {
                    var w = g.stateNode.containerInfo;
                    if (k0(w, f))
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
      ld(function() {
        return DR(e, t, a, s);
      });
    }
    function qd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, M = b.tag;
        if (M === ue && w !== null && (g = w, p !== null)) {
          var U = Jl(y, p);
          U != null && v.push(qd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = Jl(u, a);
          y != null && i.unshift(qd(u, y, v));
          var g = Jl(u, t);
          g != null && i.push(qd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function vf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function OR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = vf(s))
        u++;
      for (var f = 0, p = i; p; p = vf(p))
        f++;
      for (; u - f > 0; )
        a = vf(a), u--;
      for (; f - u > 0; )
        i = vf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = vf(a), i = vf(i);
      }
      return null;
    }
    function O0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var M = Jl(p, s);
            M != null && f.unshift(qd(p, M, w));
          } else if (!u) {
            var U = Jl(p, s);
            U != null && f.push(qd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function LR(e, t, a, i, u) {
      var s = i && u ? OR(i, u) : null;
      i !== null && O0(e, t, i, s, !1), u !== null && a !== null && O0(e, a, u, s, !0);
    }
    function MR(e, t) {
      return e + "__bubble";
    }
    var Ia = !1, Xd = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", L0 = "autoFocus", Ns = "children", zs = "style", dh = "__html", _y, ph, Kd, M0, vh, N0, z0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      uc(e, t), td(e, t), gv(e, t, {
        registrationNameDependencies: it,
        possibleRegistrationNames: Zt
      });
    }, N0 = pn && !document.documentMode, Kd = function(e, t, a) {
      if (!Ia) {
        var i = hh(a), u = hh(t);
        u !== i && (Ia = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, z0 = function(e, t) {
      var a = e.namespaceURI === Ai ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var NR = /\r\n?/g, zR = /\u0000|\uFFFD/g;
    function hh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(NR, `
`).replace(zR, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (Ia || (Ia = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && me))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function U0(e) {
      return e.nodeType === ri ? e : e.ownerDocument;
    }
    function UR() {
    }
    function yh(e) {
      e.onclick = UR;
    }
    function AR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === zs)
            f && Object.freeze(f), ov(t, f);
          else if (s === Xd) {
            var p = f ? f[dh] : void 0;
            p != null && Kp(t, p);
          } else if (s === Ns)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && rc(t, f);
            } else typeof f == "number" && rc(t, "" + f);
          else s === fh || s === Do || s === L0 || (it.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function FR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === zs ? ov(e, f) : s === Xd ? Kp(e, f) : s === Ns ? rc(e, f) : va(e, s, f, i);
      }
    }
    function jR(e, t, a, i) {
      var u, s = U0(a), f, p = i;
      if (p === Ai && (p = tc(e)), p === Ai) {
        if (u = ji(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Ai && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function HR(e, t) {
      return U0(t).createTextNode(e);
    }
    function PR(e, t, a, i) {
      var u = ji(t, a);
      ph(t, a);
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
          for (var f = 0; f < Wd.length; f++)
            Sn(Wd[f], e);
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
          $t(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Gp(e, a), s = Qf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ic(t, s), AR(t, e, i, s, u), t) {
        case "input":
          Oa(e), q(e, a, !1);
          break;
        case "textarea":
          Oa(e), Xp(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Yf(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function VR(e, t, a, i, u) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = Qf(e, a), p = Qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ic(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === zs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Xd || v === Ns || v === fh || v === Do || v === L0 || (it.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
          else if (v === Xd) {
            var U = w ? w[dh] : void 0, j = M ? M[dh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ns ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === fh || v === Do || (it.hasOwnProperty(v) ? (w != null && (typeof w != "function" && vh(v, w), v === "onScroll" && Sn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Jo(g, p[zs]), (s = s || []).push(zs, g)), s;
    }
    function BR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = ji(a, i), f = ji(a, u);
      switch (FR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          qp(e, u);
          break;
        case "select":
          Vm(e, u);
          break;
      }
    }
    function $R(e) {
      {
        var t = e.toLowerCase();
        return lc.hasOwnProperty(t) && lc[t] || null;
      }
    }
    function YR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ji(t, a), ph(t, a), t) {
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
          for (var y = 0; y < Wd.length; y++)
            Sn(Wd[y], e);
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
          $t(e, a);
          break;
        case "select":
          Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Gp(e, a), Sn("invalid", e);
          break;
      }
      ic(t, a);
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
          if (U === Ns)
            typeof j == "string" ? e.textContent !== j && (a[Do] !== !0 && mh(e.textContent, j, s, f), M = [Ns, j]) : typeof j == "number" && e.textContent !== "" + j && (a[Do] !== !0 && mh(e.textContent, j, s, f), M = [Ns, "" + j]);
          else if (it.hasOwnProperty(U))
            j != null && (typeof j != "function" && vh(U, j), U === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Le = p && ze ? null : xr(U);
            if (a[Do] !== !0) {
              if (!(U === fh || U === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Xd) {
                  var xe = e.innerHTML, Rt = j ? j[dh] : void 0;
                  if (Rt != null) {
                    var ht = z0(e, Rt);
                    ht !== xe && Kd(U, xe, ht);
                  }
                } else if (U === zs) {
                  if (v.delete(U), N0) {
                    var k = qm(j);
                    le = e.getAttribute("style"), k !== le && Kd(U, le, k);
                  }
                } else if (p && !ze)
                  v.delete(U.toLowerCase()), le = fi(e, U, j), j !== le && Kd(U, le, j);
                else if (!hn(U, Le, p) && !Bt(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), le = pa(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Ai && (O = tc(t)), O === Ai)
                      v.delete(U.toLowerCase());
                    else {
                      var W = $R(U);
                      W !== null && W !== U && (H = !0, v.delete(W)), v.delete(U);
                    }
                    le = fi(e, U, j);
                  }
                  var fe = ze;
                  !fe && j !== le && !H && Kd(U, le, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && M0(v), t) {
        case "input":
          Oa(e), q(e, a, !0);
          break;
        case "textarea":
          Oa(e), Xp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return M;
    }
    function IR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function QR(e, t, a) {
      switch (t) {
        case "input":
          Ae(e, a);
          return;
        case "textarea":
          Wf(e, a);
          return;
        case "select":
          Bm(e, a);
          return;
      }
    }
    var Zd = function() {
    }, Jd = function() {
    };
    {
      var WR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], A0 = [
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
      ], GR = A0.concat(["button"]), qR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Jd = function(e, t) {
        var a = nt({}, e || F0), i = {
          tag: t
        };
        return A0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var XR = function(e, t) {
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
            return qR.indexOf(t) === -1;
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
      }, KR = function(e, t) {
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
      Zd = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = XR(e, u) ? null : i, f = s ? null : KR(e, a), p = s || f;
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
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", ep = "$?", tp = "$!", ZR = "style", My = null, Ny = null;
    function JR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ri:
        case ql: {
          t = i === ri ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : qf(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Jd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function eT(e, t, a) {
      {
        var i = e, u = qf(i.namespace, t), s = Jd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function pD(e) {
      return e;
    }
    function tT(e) {
      My = Co(), Ny = hR();
      var t = null;
      return ia(!1), t;
    }
    function nT(e) {
      mR(Ny), ia(My), My = null, Ny = null;
    }
    function rT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Zd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Jd(f.ancestorInfo, e);
          Zd(null, p, v);
        }
        s = f.namespace;
      }
      var y = jR(e, t, a, s);
      return ap(u, y), Vy(y, t), y;
    }
    function aT(e, t) {
      e.appendChild(t);
    }
    function iT(e, t, a, i, u) {
      switch (PR(e, t, a, i), t) {
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
    function lT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Jd(f.ancestorInfo, t);
          Zd(null, p, v);
        }
      }
      return VR(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function uT(e, t, a, i) {
      {
        var u = a;
        Zd(null, e, u.ancestorInfo);
      }
      var s = HR(e, t);
      return ap(i, s), s;
    }
    function oT() {
      var e = window.event;
      return e === void 0 ? Ei : Xc(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, sT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, H0 = typeof Promise == "function" ? Promise : void 0, cT = typeof queueMicrotask == "function" ? queueMicrotask : typeof H0 < "u" ? function(e) {
      return H0.resolve(null).then(e).catch(fT);
    } : Uy;
    function fT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function dT(e, t, a, i) {
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
    function pT(e, t, a, i, u, s) {
      BR(e, t, a, i, u), Vy(e, u);
    }
    function P0(e) {
      rc(e, "");
    }
    function vT(e, t, a) {
      e.nodeValue = a;
    }
    function hT(e, t) {
      e.appendChild(t);
    }
    function mT(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function yT(e, t, a) {
      e.insertBefore(t, a);
    }
    function gT(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ST(e, t) {
      e.removeChild(t);
    }
    function ET(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), wn(t);
              return;
            } else
              i--;
          else (s === Sh || s === ep || s === tp) && i++;
        }
        a = u;
      } while (a);
      wn(t);
    }
    function CT(e, t) {
      e.nodeType === Un ? Fy(e.parentNode, t) : e.nodeType === qr && Fy(e, t), wn(e);
    }
    function RT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function TT(e) {
      e.nodeValue = "";
    }
    function wT(e, t) {
      e = e;
      var a = t[ZR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ac("display", i);
    }
    function xT(e, t) {
      e.nodeValue = t;
    }
    function bT(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === ri && e.documentElement && e.removeChild(e.documentElement);
    }
    function _T(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function DT(e, t) {
      return t === "" || e.nodeType !== Fi ? null : e;
    }
    function kT(e) {
      return e.nodeType !== Un ? null : e;
    }
    function V0(e) {
      return e.data === ep;
    }
    function jy(e) {
      return e.data === tp;
    }
    function OT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function LT(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Fi)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Sh || a === tp || a === ep)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function np(e) {
      return Ch(e.nextSibling);
    }
    function MT(e) {
      return Ch(e.firstChild);
    }
    function NT(e) {
      return Ch(e.firstChild);
    }
    function zT(e) {
      return Ch(e.nextSibling);
    }
    function UT(e, t, a, i, u, s, f) {
      ap(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & we) !== Ce;
      return YR(e, t, a, p, i, y, f);
    }
    function AT(e, t, a, i) {
      return ap(a, e), a.mode & we, IR(e, t);
    }
    function FT(e, t) {
      ap(t, e);
    }
    function jT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return np(t);
            a--;
          } else (i === Sh || i === tp || i === ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function B0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Sh || i === tp || i === ep) {
            if (a === 0)
              return t;
            a--;
          } else i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function HT(e) {
      wn(e);
    }
    function PT(e) {
      wn(e);
    }
    function VT(e) {
      return e !== "head" && e !== "body";
    }
    function BT(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function $T(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function YT(e, t) {
      t.nodeType === qr ? Dy(e, t) : t.nodeType === Un || ky(e, t);
    }
    function IT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? Dy(a, t) : t.nodeType === Un || ky(a, t));
      }
    }
    function QT(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === qr ? Dy(a, i) : i.nodeType === Un || ky(a, i));
    }
    function WT(e, t, a) {
      Oy(e, t);
    }
    function GT(e, t) {
      Ly(e, t);
    }
    function qT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function XT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function KT(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && Oy(a, i);
    }
    function ZT(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ly(a, i);
    }
    function JT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ew(e) {
      Gd(e);
    }
    var hf = Math.random().toString(36).slice(2), mf = "__reactFiber$" + hf, Hy = "__reactProps$" + hf, rp = "__reactContainer$" + hf, Py = "__reactEvents$" + hf, tw = "__reactListeners$" + hf, nw = "__reactHandles$" + hf;
    function rw(e) {
      delete e[mf], delete e[Hy], delete e[Py], delete e[tw], delete e[nw];
    }
    function ap(e, t) {
      t[mf] = e;
    }
    function Rh(e, t) {
      t[rp] = e;
    }
    function $0(e) {
      e[rp] = null;
    }
    function ip(e) {
      return !!e[rp];
    }
    function Us(e) {
      var t = e[mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[rp] || a[mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = B0(e); u !== null; ) {
              var s = u[mf];
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
    function ko(e) {
      var t = e[mf] || e[rp];
      return t && (t.tag === ue || t.tag === Be || t.tag === ke || t.tag === re) ? t : null;
    }
    function yf(e) {
      if (e.tag === ue || e.tag === Be)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function aw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var Y0 = {}, I0 = A.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = hi(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in Y0) && (Y0[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var By = [], xh;
    xh = [];
    var Su = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Su < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== xh[Su] && S("Unexpected Fiber popped."), e.current = By[Su], By[Su] = null, xh[Su] = null, Su--;
    }
    function ua(e, t, a) {
      Su++, By[Su] = e.current, xh[Su] = a, e.current = t;
    }
    var $y;
    $y = {};
    var ui = {};
    Object.freeze(ui);
    var Eu = Oo(ui), Ul = Oo(!1), Yy = ui;
    function gf(e, t, a) {
      return a && Al(t) ? Yy : Eu.current;
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Sf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ie(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && Q0(e, t, s), s;
      }
    }
    function bh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      la(Ul, e), la(Eu, e);
    }
    function Iy(e) {
      la(Ul, e), la(Eu, e);
    }
    function W0(e, t, a) {
      {
        if (Eu.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Eu, t, e), ua(Ul, a, e);
      }
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return nt({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Yy = Eu.current, ua(Eu, a, e), ua(Ul, Ul.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = G0(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, la(Ul, e), la(Eu, e), ua(Eu, u, e), ua(Ul, a, e);
        } else
          la(Ul, e), ua(Ul, a, e);
      }
    }
    function iw(e) {
      {
        if (!hd(e) || e.tag !== de)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case de: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, kh = 1, Cu = null, Qy = !1, Wy = !1;
    function X0(e) {
      Cu === null ? Cu = [e] : Cu.push(e);
    }
    function lw(e) {
      Qy = !0, X0(e);
    }
    function K0() {
      Qy && Mo();
    }
    function Mo() {
      if (!Wy && Cu !== null) {
        Wy = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = Cu;
          for (Tn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Cu = null, Qy = !1;
        } catch (s) {
          throw Cu !== null && (Cu = Cu.slice(e + 1)), hc(yc, Mo), s;
        } finally {
          Tn(t), Wy = !1;
        }
      }
      return null;
    }
    var Ef = [], Cf = 0, Oh = null, Lh = 0, wi = [], xi = 0, As = null, Ru = 1, Tu = "";
    function uw(e) {
      return js(), (e.flags & dd) !== Oe;
    }
    function ow(e) {
      return js(), Lh;
    }
    function sw() {
      var e = Tu, t = Ru, a = t & ~cw(t);
      return a.toString(32) + e;
    }
    function Fs(e, t) {
      js(), Ef[Cf++] = Lh, Ef[Cf++] = Oh, Oh = e, Lh = t;
    }
    function Z0(e, t, a) {
      js(), wi[xi++] = Ru, wi[xi++] = Tu, wi[xi++] = As, As = e;
      var i = Ru, u = Tu, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, M = s - y, U = Mh(t) + M, j = p << M, le = j | w, Le = b + u;
        Ru = 1 << U | le, Tu = Le;
      } else {
        var xe = p << s, Rt = xe | f, ht = u;
        Ru = 1 << v | Rt, Tu = ht;
      }
    }
    function Gy(e) {
      js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Fs(e, a), Z0(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - ro(e);
    }
    function cw(e) {
      return 1 << Mh(e) - 1;
    }
    function qy(e) {
      for (; e === Oh; )
        Oh = Ef[--Cf], Ef[Cf] = null, Lh = Ef[--Cf], Ef[Cf] = null;
      for (; e === As; )
        As = wi[--xi], wi[xi] = null, Tu = wi[--xi], wi[xi] = null, Ru = wi[--xi], wi[xi] = null;
    }
    function fw() {
      return js(), As !== null ? {
        id: Ru,
        overflow: Tu
      } : null;
    }
    function dw(e, t) {
      js(), wi[xi++] = Ru, wi[xi++] = Tu, wi[xi++] = As, Ru = t.id, Tu = t.overflow, As = e;
    }
    function js() {
      Nr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mr = null, bi = null, Ki = !1, Hs = !1, No = null;
    function pw() {
      Ki && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function J0() {
      Hs = !0;
    }
    function vw() {
      return Hs;
    }
    function hw(e) {
      var t = e.stateNode.containerInfo;
      return bi = NT(t), Mr = e, Ki = !0, No = null, Hs = !1, !0;
    }
    function mw(e, t, a) {
      return bi = zT(t), Mr = e, Ki = !0, No = null, Hs = !1, a !== null && dw(e, a), !0;
    }
    function eE(e, t) {
      switch (e.tag) {
        case re: {
          YT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & we) !== Ce;
          QT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ke: {
          var i = e.memoizedState;
          i.dehydrated !== null && IT(i.dehydrated, t);
          break;
        }
      }
    }
    function tE(e, t) {
      eE(e, t);
      var a = E_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Nt) : i.push(a);
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
                t.pendingProps, WT(a, i);
                break;
              case Be:
                var u = t.pendingProps;
                GT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & we) !== Ce;
                KT(
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
                ZT(
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
          case ke: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var j = t.type;
                t.pendingProps, qT(U, j);
                break;
              case Be:
                var le = t.pendingProps;
                XT(U, le);
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
      t.flags = t.flags & ~za | rn, Xy(e, t);
    }
    function rE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = _T(t, a);
          return i !== null ? (e.stateNode = i, Mr = e, bi = MT(i), !0) : !1;
        }
        case Be: {
          var u = e.pendingProps, s = DT(t, u);
          return s !== null ? (e.stateNode = s, Mr = e, bi = null, !0) : !1;
        }
        case ke: {
          var f = kT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: fw(),
              retryLane: Cr
            };
            e.memoizedState = p;
            var v = C_(f);
            return v.return = e, e.child = v, Mr = e, bi = null, !0;
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
      if (Ki) {
        var t = bi;
        if (!t) {
          Ky(e) && (Xy(Mr, e), Zy()), nE(Mr, e), Ki = !1, Mr = e;
          return;
        }
        var a = t;
        if (!rE(e, t)) {
          Ky(e) && (Xy(Mr, e), Zy()), t = np(a);
          var i = Mr;
          if (!t || !rE(e, t)) {
            nE(Mr, e), Ki = !1, Mr = e;
            return;
          }
          tE(i, a);
        }
      }
    }
    function yw(e, t, a) {
      var i = e.stateNode, u = !Hs, s = UT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function gw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = AT(t, a, e);
      if (i) {
        var u = Mr;
        if (u !== null)
          switch (u.tag) {
            case re: {
              var s = u.stateNode.containerInfo, f = (u.mode & we) !== Ce;
              BT(
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
              $T(
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
    function Sw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      FT(a, e);
    }
    function Ew(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jT(a);
    }
    function aE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== re && t.tag !== ke; )
        t = t.return;
      Mr = t;
    }
    function Nh(e) {
      if (e !== Mr)
        return !1;
      if (!Ki)
        return aE(e), Ki = !0, !1;
      if (e.tag !== re && (e.tag !== ue || VT(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (Ky(e))
            iE(e), Zy();
          else
            for (; t; )
              tE(e, t), t = np(t);
      }
      return aE(e), e.tag === ke ? bi = Ew(e) : bi = Mr ? np(e.stateNode) : null, !0;
    }
    function Cw() {
      return Ki && bi !== null;
    }
    function iE(e) {
      for (var t = bi; t; )
        eE(e, t), t = np(t);
    }
    function Rf() {
      Mr = null, bi = null, Ki = !1, Hs = !1;
    }
    function lE() {
      No !== null && (JC(No), No = null);
    }
    function Nr() {
      return Ki;
    }
    function eg(e) {
      No === null ? No = [e] : No.push(e);
    }
    var Rw = A.ReactCurrentBatchConfig, Tw = null;
    function ww() {
      return Rw.transition;
    }
    var Zi = {
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
      var xw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ct && (t = a), a = a.return;
        return t;
      }, Ps = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, lp = [], up = [], op = [], sp = [], cp = [], fp = [], Vs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillMount == "function" && up.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & ct && typeof t.UNSAFE_componentWillReceiveProps == "function" && sp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & ct && typeof t.UNSAFE_componentWillUpdate == "function" && fp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(w) {
          e.add(Ie(w) || "Component"), Vs.add(w.type);
        }), lp = []);
        var t = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(w) {
          t.add(Ie(w) || "Component"), Vs.add(w.type);
        }), up = []);
        var a = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          a.add(Ie(w) || "Component"), Vs.add(w.type);
        }), op = []);
        var i = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          i.add(Ie(w) || "Component"), Vs.add(w.type);
        }), sp = []);
        var u = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          u.add(Ie(w) || "Component"), Vs.add(w.type);
        }), cp = []);
        var s = /* @__PURE__ */ new Set();
        if (fp.length > 0 && (fp.forEach(function(w) {
          s.add(Ie(w) || "Component"), Vs.add(w.type);
        }), fp = []), t.size > 0) {
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
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ps(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ps(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var zh = /* @__PURE__ */ new Map(), uE = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = xw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!uE.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), uE.add(s.type);
            });
            var u = Ps(i);
            try {
              jt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        lp = [], up = [], op = [], sp = [], cp = [], fp = [], zh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, oE = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, oE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function bw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function dp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ct || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== de) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !bw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ie(e) || "Component";
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
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = Ie(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
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
          O === null ? (k.deletions = [H], k.flags |= Nt) : O.push(H);
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
        var O = Xs(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= dd, H;
        var W = k.alternate;
        if (W !== null) {
          var fe = W.index;
          return fe < H ? (k.flags |= rn, H) : fe;
        } else
          return k.flags |= rn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= rn), k;
      }
      function p(k, H, O, W) {
        if (H === null || H.tag !== Be) {
          var fe = e0(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, W) {
        var fe = O.type;
        if (fe === ha)
          return g(k, H, O.props.children, W, O.key);
        if (H !== null && (H.elementType === fe || // Keep this check inline so it only runs on the false path:
        h1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof fe == "object" && fe !== null && fe.$$typeof === Ue && sE(fe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = dp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Ve = JS(O, k.mode, W);
        return Ve.ref = dp(k, H, O), Ve.return = k, Ve;
      }
      function y(k, H, O, W) {
        if (H === null || H.tag !== he || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var fe = t0(O, k.mode, W);
          return fe.return = k, fe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, W, fe) {
        if (H === null || H.tag !== Tt) {
          var oe = Yo(O, k.mode, W, fe);
          return oe.return = k, oe;
        } else {
          var Ve = u(H, O);
          return Ve.return = k, Ve;
        }
      }
      function b(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var W = e0("" + H, k.mode, O);
          return W.return = k, W;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Ja: {
              var fe = JS(H, k.mode, O);
              return fe.ref = dp(k, null, H), fe.return = k, fe;
            }
            case br: {
              var oe = t0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ue: {
              var Ve = H._payload, Ge = H._init;
              return b(k, Ge(Ve), O);
            }
          }
          if (St(H) || _r(H)) {
            var Wt = Yo(H, k.mode, O, null);
            return Wt.return = k, Wt;
          }
          Uh(k, H);
        }
        return typeof H == "function" && Ah(k), null;
      }
      function w(k, H, O, W) {
        var fe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return fe !== null ? null : p(k, H, "" + O, W);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Ja:
              return O.key === fe ? v(k, H, O, W) : null;
            case br:
              return O.key === fe ? y(k, H, O, W) : null;
            case Ue: {
              var oe = O._payload, Ve = O._init;
              return w(k, H, Ve(oe), W);
            }
          }
          if (St(O) || _r(O))
            return fe !== null ? null : g(k, H, O, W, null);
          Uh(k, O);
        }
        return typeof O == "function" && Ah(k), null;
      }
      function M(k, H, O, W, fe) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + W, fe);
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Ja: {
              var Ve = k.get(W.key === null ? O : W.key) || null;
              return v(H, Ve, W, fe);
            }
            case br: {
              var Ge = k.get(W.key === null ? O : W.key) || null;
              return y(H, Ge, W, fe);
            }
            case Ue:
              var Wt = W._payload, Ot = W._init;
              return M(k, H, O, Ot(Wt), fe);
          }
          if (St(W) || _r(W)) {
            var In = k.get(O) || null;
            return g(H, In, W, fe, null);
          }
          Uh(H, W);
        }
        return typeof W == "function" && Ah(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case Ja:
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
            case Ue:
              var fe = k._payload, oe = k._init;
              U(oe(fe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, W) {
        for (var fe = null, oe = 0; oe < O.length; oe++) {
          var Ve = O[oe];
          fe = U(Ve, fe, k);
        }
        for (var Ge = null, Wt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var sa = w(k, Ot, O[Lt], W);
          if (sa === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && sa.alternate === null && t(k, Ot), In = s(sa, In, Lt), Wt === null ? Ge = sa : Wt.sibling = sa, Wt = sa, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), Nr()) {
            var Pr = Lt;
            Fs(k, Pr);
          }
          return Ge;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var si = b(k, O[Lt], W);
            si !== null && (In = s(si, In, Lt), Wt === null ? Ge = si : Wt.sibling = si, Wt = si);
          }
          if (Nr()) {
            var xa = Lt;
            Fs(k, xa);
          }
          return Ge;
        }
        for (var ba = i(k, Ot); Lt < O.length; Lt++) {
          var ca = M(ba, k, Lt, O[Lt], W);
          ca !== null && (e && ca.alternate !== null && ba.delete(ca.key === null ? Lt : ca.key), In = s(ca, In, Lt), Wt === null ? Ge = ca : Wt.sibling = ca, Wt = ca);
        }
        if (e && ba.forEach(function(Vf) {
          return t(k, Vf);
        }), Nr()) {
          var Ou = Lt;
          Fs(k, Ou);
        }
        return Ge;
      }
      function le(k, H, O, W) {
        var fe = _r(O);
        if (typeof fe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), O.entries === fe && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var oe = fe.call(O);
          if (oe)
            for (var Ve = null, Ge = oe.next(); !Ge.done; Ge = oe.next()) {
              var Wt = Ge.value;
              Ve = U(Wt, Ve, k);
            }
        }
        var Ot = fe.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = H, sa = 0, Pr = 0, si = null, xa = Ot.next(); jn !== null && !xa.done; Pr++, xa = Ot.next()) {
          jn.index > Pr ? (si = jn, jn = null) : si = jn.sibling;
          var ba = w(k, jn, xa.value, W);
          if (ba === null) {
            jn === null && (jn = si);
            break;
          }
          e && jn && ba.alternate === null && t(k, jn), sa = s(ba, sa, Pr), Lt === null ? In = ba : Lt.sibling = ba, Lt = ba, jn = si;
        }
        if (xa.done) {
          if (a(k, jn), Nr()) {
            var ca = Pr;
            Fs(k, ca);
          }
          return In;
        }
        if (jn === null) {
          for (; !xa.done; Pr++, xa = Ot.next()) {
            var Ou = b(k, xa.value, W);
            Ou !== null && (sa = s(Ou, sa, Pr), Lt === null ? In = Ou : Lt.sibling = Ou, Lt = Ou);
          }
          if (Nr()) {
            var Vf = Pr;
            Fs(k, Vf);
          }
          return In;
        }
        for (var Yp = i(k, jn); !xa.done; Pr++, xa = Ot.next()) {
          var Yl = M(Yp, k, Pr, xa.value, W);
          Yl !== null && (e && Yl.alternate !== null && Yp.delete(Yl.key === null ? Pr : Yl.key), sa = s(Yl, sa, Pr), Lt === null ? In = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && Yp.forEach(function(Z_) {
          return t(k, Z_);
        }), Nr()) {
          var K_ = Pr;
          Fs(k, K_);
        }
        return In;
      }
      function Le(k, H, O, W) {
        if (H !== null && H.tag === Be) {
          a(k, H.sibling);
          var fe = u(H, O);
          return fe.return = k, fe;
        }
        a(k, H);
        var oe = e0(O, k.mode, W);
        return oe.return = k, oe;
      }
      function xe(k, H, O, W) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe) {
            var Ve = O.type;
            if (Ve === ha) {
              if (oe.tag === Tt) {
                a(k, oe.sibling);
                var Ge = u(oe, O.props.children);
                return Ge.return = k, Ge._debugSource = O._source, Ge._debugOwner = O._owner, Ge;
              }
            } else if (oe.elementType === Ve || // Keep this check inline so it only runs on the false path:
            h1(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ue && sE(Ve) === oe.type) {
              a(k, oe.sibling);
              var Wt = u(oe, O.props);
              return Wt.ref = dp(k, oe, O), Wt.return = k, Wt._debugSource = O._source, Wt._debugOwner = O._owner, Wt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === ha) {
          var Ot = Yo(O.props.children, k.mode, W, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = JS(O, k.mode, W);
          return In.ref = dp(k, H, O), In.return = k, In;
        }
      }
      function Rt(k, H, O, W) {
        for (var fe = O.key, oe = H; oe !== null; ) {
          if (oe.key === fe)
            if (oe.tag === he && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Ve = u(oe, O.children || []);
              return Ve.return = k, Ve;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var Ge = t0(O, k.mode, W);
        return Ge.return = k, Ge;
      }
      function ht(k, H, O, W) {
        var fe = typeof O == "object" && O !== null && O.type === ha && O.key === null;
        if (fe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Ja:
              return f(xe(k, H, O, W));
            case br:
              return f(Rt(k, H, O, W));
            case Ue:
              var oe = O._payload, Ve = O._init;
              return ht(k, H, Ve(oe), W);
          }
          if (St(O))
            return j(k, H, O, W);
          if (_r(O))
            return le(k, H, O, W);
          Uh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, W)) : (typeof O == "function" && Ah(k), a(k, H));
      }
      return ht;
    }
    var Tf = cE(!0), fE = cE(!1);
    function _w(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Xs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Xs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Dw(e, t) {
      for (var a = e.child; a !== null; )
        h_(a, t), a = a.sibling;
    }
    var lg = Oo(null), ug;
    ug = {};
    var Fh = null, wf = null, og = null, jh = !1;
    function Hh() {
      Fh = null, wf = null, og = null, jh = !1;
    }
    function dE() {
      jh = !0;
    }
    function pE() {
      jh = !1;
    }
    function vE(e, t, a) {
      ua(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      la(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (fu(i.childLanes, t) ? u !== null && !fu(u.childLanes, t) && (u.childLanes = qe(u.childLanes, t)) : (i.childLanes = qe(i.childLanes, t), u !== null && (u.childLanes = qe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      Ow(e, t, a);
    }
    function Ow(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === de) {
                var p = co(a), v = wu(en, p);
                v.tag = Vh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = qe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = qe(w.lanes, a)), cg(i.return, a, e), s.lanes = qe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === It) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = qe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = qe(U.lanes, a)), cg(M, a, e), u = i.sibling;
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
    function xf(e, t) {
      Fh = e, wf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function tr(e) {
      jh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (wf === null) {
          if (Fh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          wf = a, Fh.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          wf = wf.next = a;
      }
      return t;
    }
    var Bs = null;
    function fg(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function Lw() {
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
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ph(e, i);
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Nw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ph(e, i);
    }
    function Qa(e, t) {
      return Ph(e, t);
    }
    var zw = Ph;
    function Ph(e, t) {
      e.lanes = qe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = qe(a.lanes, t)), a === null && (e.flags & (rn | za)) !== Oe && f1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = qe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = qe(a.childLanes, t) : (u.flags & (rn | za)) !== Oe && f1(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, Vh = 2, dg = 3, Bh = !1, pg, $h;
    pg = !1, $h = null;
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
    function wu(e, t) {
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
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if ($h === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Mb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, zw(e, a);
      } else
        return Nw(e, u, t, a);
    }
    function Yh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (_d(a)) {
          var s = u.lanes;
          s = Vc(s, e.pendingLanes);
          var f = qe(s, a);
          u.lanes = f, Dd(e, f);
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
    function Uw(e, t, a, i, u, s) {
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
        case dg:
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
          return y == null ? i : nt({}, i, y);
        }
        case Vh:
          return Bh = !0, i;
      }
      return i;
    }
    function Ih(e, t, a, i) {
      var u = e.updateQueue;
      Bh = !1, $h = u.shared;
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
        var M = u.baseState, U = B, j = null, le = null, Le = null, xe = s;
        do {
          var Rt = xe.lane, ht = xe.eventTime;
          if (fu(i, Rt)) {
            if (Le !== null) {
              var H = {
                eventTime: ht,
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
            M = Uw(e, u, xe, M, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Fn) {
              e.flags |= gi;
              var W = u.effects;
              W === null ? u.effects = [xe] : W.push(xe);
            }
          } else {
            var k = {
              eventTime: ht,
              lane: Rt,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Le === null ? (le = Le = k, j = M) : Le = Le.next = k, U = qe(U, Rt);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var fe = p, oe = fe.next;
            fe.next = null, xe = oe, u.lastBaseUpdate = fe, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = M), u.baseState = j, u.firstBaseUpdate = le, u.lastBaseUpdate = Le;
        var Ve = u.shared.interleaved;
        if (Ve !== null) {
          var Ge = Ve;
          do
            U = qe(U, Ge.lane), Ge = Ge.next;
          while (Ge !== Ve);
        } else s === null && (u.shared.lanes = B);
        Hp(U), e.lanes = U, e.memoizedState = M;
      }
      $h = null;
    }
    function Aw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Bh = !1;
    }
    function Qh() {
      return Bh;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Aw(f, a));
        }
    }
    var pp = {}, Uo = Oo(pp), vp = Oo(pp), Wh = Oo(pp);
    function Gh(e) {
      if (e === pp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function CE() {
      var e = Gh(Wh.current);
      return e;
    }
    function mg(e, t) {
      ua(Wh, t, e), ua(vp, e, e), ua(Uo, pp, e);
      var a = JR(t);
      la(Uo, e), ua(Uo, a, e);
    }
    function bf(e) {
      la(Uo, e), la(vp, e), la(Wh, e);
    }
    function yg() {
      var e = Gh(Uo.current);
      return e;
    }
    function RE(e) {
      Gh(Wh.current);
      var t = Gh(Uo.current), a = eT(t, e.type);
      t !== a && (ua(vp, e, e), ua(Uo, a, e));
    }
    function gg(e) {
      vp.current === e && (la(Uo, e), la(vp, e));
    }
    var Fw = 0, TE = 1, wE = 1, hp = 2, Ji = Oo(Fw);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function _f(e) {
      return e & TE;
    }
    function Eg(e, t) {
      return e & TE | t;
    }
    function jw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ua(Ji, t, e);
    }
    function Df(e) {
      la(Ji, e);
    }
    function Hw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ke) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || V0(i) || jy(i))
              return t;
          }
        } else if (t.tag === bt && // revealOrder undefined can't be trusted because it don't
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
    var Wa = (
      /*   */
      0
    ), lr = (
      /* */
      1
    ), Fl = (
      /*  */
      2
    ), ur = (
      /*    */
      4
    ), zr = (
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
    function Pw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = A.ReactCurrentDispatcher, mp = A.ReactCurrentBatchConfig, Tg, kf;
    Tg = /* @__PURE__ */ new Set();
    var $s = B, Qt = null, or = null, sr = null, Xh = !1, yp = !1, gp = 0, Vw = 0, Bw = 25, V = null, _i = null, Fo = -1, wg = !1;
    function Pt() {
      {
        var e = V;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function te() {
      {
        var e = V;
        _i !== null && (Fo++, _i[Fo] !== e && $w(e));
      }
    }
    function Of(e) {
      e != null && !St(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function $w(e) {
      {
        var t = Ie(Qt);
        if (!Tg.has(t) && (Tg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = _i[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function oa() {
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
    function Lf(e, t, a, i, u, s) {
      $s = s, Qt = t, _i = e !== null ? e._debugHookTypes : null, Fo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? ce.current = QE : _i !== null ? ce.current = IE : ce.current = YE;
      var f = a(i, u);
      if (yp) {
        var p = 0;
        do {
          if (yp = !1, gp = 0, p >= Bw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, or = null, sr = null, t.updateQueue = null, Fo = -1, ce.current = WE, f = a(i, u);
        } while (yp);
      }
      ce.current = sm, t._debugHookTypes = _i;
      var v = or !== null && or.next !== null;
      if ($s = B, Qt = null, or = null, sr = null, V = null, _i = null, Fo = -1, e !== null && (e.flags & rr) !== (t.flags & rr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & we) !== Ce && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Mf() {
      var e = gp !== 0;
      return gp = 0, e;
    }
    function xE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ea) !== Ce ? t.flags &= ~(nu | Zr | sn | Ke) : t.flags &= ~(sn | Ke), e.lanes = Es(e.lanes, a);
    }
    function bE() {
      if (ce.current = sm, Xh) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      $s = B, Qt = null, or = null, sr = null, _i = null, Fo = -1, V = null, HE = !1, yp = !1, gp = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sr === null ? Qt.memoizedState = sr = e : sr = sr.next = e, sr;
    }
    function Di() {
      var e;
      if (or === null) {
        var t = Qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = or.next;
      var a;
      if (sr === null ? a = Qt.memoizedState : a = sr.next, a !== null)
        sr = a, a = sr.next, or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        or = e;
        var i = {
          memoizedState: or.memoizedState,
          baseState: or.baseState,
          baseQueue: or.baseQueue,
          queue: or.queue,
          next: null
        };
        sr === null ? Qt.memoizedState = sr = i : sr = sr.next = i;
      }
      return sr;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = jl(), u;
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
      var f = s.dispatch = Ww.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function Dg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = or, f = s.baseQueue, p = u.pending;
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
          var le = j.lane;
          if (fu($s, le)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (j.hasEagerState)
              b = j.eagerState;
            else {
              var Rt = j.action;
              b = e(b, Rt);
            }
          } else {
            var Le = {
              lane: le,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (M = U = Le, w = b) : U = U.next = Le, Qt.lanes = qe(Qt.lanes, le), Hp(le);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = b : U.next = M, ge(b, i.memoizedState) || _p(), i.memoizedState = b, i.baseState = w, i.baseQueue = U, u.lastRenderedState = b;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var k = ht;
        do {
          var H = k.lane;
          Qt.lanes = qe(Qt.lanes, H), Hp(H), k = k.next;
        } while (k !== ht);
      } else f === null && (u.lanes = B);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function kg(e, t, a) {
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
        ge(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function vD(e, t, a) {
    }
    function hD(e, t, a) {
    }
    function Og(e, t, a) {
      var i = Qt, u = jl(), s, f = Nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), kf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (s = t(), !kf) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, $s) || DE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(OE.bind(null, i, y, e), [e]), i.flags |= sn, Sp(lr | zr, kE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = Qt, u = Di(), s = t();
      if (!kf) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (Cp(OE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= sn, Sp(lr | zr, kE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
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
      }, u = Qt.updateQueue;
      if (u === null)
        u = _E(), Qt.updateQueue = u, u.stores = [i];
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
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Qa(e, De);
      t !== null && pr(t, e, De, en);
    }
    function Zh(e) {
      var t = jl();
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
      var i = a.dispatch = Gw.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return Dg(bg);
    }
    function Mg(e) {
      return kg(bg);
    }
    function Sp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Qt.updateQueue;
      if (s === null)
        s = _E(), Qt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Ep(e, t, a, i) {
      var u = jl(), s = i === void 0 ? null : i;
      Qt.flags |= e, u.memoizedState = Sp(lr | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = Sp(t, a, f, s);
            return;
          }
        }
      }
      Qt.flags |= e, u.memoizedState = Sp(lr | t, a, f, s);
    }
    function tm(e, t) {
      return (Qt.mode & Ea) !== Ce ? Ep(nu | sn | xl, zr, e, t) : Ep(sn | xl, zr, e, t);
    }
    function Cp(e, t) {
      return em(sn, zr, e, t);
    }
    function zg(e, t) {
      return Ep(Ke, Fl, e, t);
    }
    function nm(e, t) {
      return em(Ke, Fl, e, t);
    }
    function Ug(e, t) {
      var a = Ke;
      return a |= Kr, (Qt.mode & Ea) !== Ce && (a |= Zr), Ep(a, ur, e, t);
    }
    function rm(e, t) {
      return em(Ke, ur, e, t);
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
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ke;
      return u |= Kr, (Qt.mode & Ea) !== Ce && (u |= Zr), Ep(u, ur, NE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(Ke, ur, NE.bind(null, t, e), i);
    }
    function Yw(e, t) {
    }
    var im = Yw;
    function Fg(e, t) {
      var a = jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function jg(e, t) {
      var a = jl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
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
      var t = jl();
      return t.memoizedState = e, e;
    }
    function zE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return AE(t, i, e);
    }
    function UE(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return AE(t, a, e);
    }
    function AE(e, t, a) {
      var i = !Fv($s);
      if (i) {
        if (!ge(a, t)) {
          var u = Pv();
          Qt.lanes = qe(Qt.lanes, u), Hp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function Iw(e, t, a) {
      var i = Pa();
      Tn(iy(i, Qi)), e(!0);
      var u = mp.transition;
      mp.transition = {};
      var s = mp.transition;
      mp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), mp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Iw.bind(null, a), u = jl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Lg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function jE() {
      var e = Mg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var HE = !1;
    function Qw() {
      return HE;
    }
    function Vg() {
      var e = jl(), t = Dm(), a = t.identifierPrefix, i;
      if (Nr()) {
        var u = sw();
        i = ":" + a + "R" + u;
        var s = gp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Vw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Ww(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        VE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          pr(s, e, i, f), BE(s, t, i);
        }
      }
      $E(e, i);
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        VE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                Mw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = hE(e, t, u, i);
        if (g !== null) {
          var b = wa();
          pr(g, e, i, b), BE(g, t, i);
        }
      }
      $E(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function VE(e, t) {
      yp = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function BE(e, t, a) {
      if (_d(a)) {
        var i = t.lanes;
        i = Vc(i, e.pendingLanes);
        var u = qe(i, a);
        t.lanes = u, Dd(e, u);
      }
    }
    function $E(e, t, a) {
      ps(e, t);
    }
    var sm = {
      readContext: tr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: K
    }, YE = null, IE = null, QE = null, WE = null, Hl = null, el = null, cm = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      YE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), Of(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), Of(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), Of(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), Of(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), Of(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), Of(t);
          var a = ce.current;
          ce.current = Hl;
          try {
            return jg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = ce.current;
          ce.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = ce.current;
          ce.current = Hl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Vg();
        },
        unstable_isNewReconciler: K
      }, IE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = Hl;
          try {
            return jg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Ng(e);
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = Hl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", te(), Vg();
        },
        unstable_isNewReconciler: K
      }, QE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = el;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = el;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Jh();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = el;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", te(), om();
        },
        unstable_isNewReconciler: K
      }, WE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", te(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", te(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", te(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", te(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", te(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", te();
          var a = ce.current;
          ce.current = cm;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", te();
          var i = ce.current;
          ce.current = cm;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", te(), Jh();
        },
        useState: function(e) {
          V = "useState", te();
          var t = ce.current;
          ce.current = cm;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", te(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", te(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", te(), om();
        },
        unstable_isNewReconciler: K
      }, Hl = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), Pt(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), Pt(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), Pt(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), Pt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), Pt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), Pt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), Pt();
          var a = ce.current;
          ce.current = Hl;
          try {
            return jg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), Pt();
          var i = ce.current;
          ce.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), Pt(), Ng(e);
        },
        useState: function(e) {
          V = "useState", Qe(), Pt();
          var t = ce.current;
          ce.current = Hl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), Pt(), Hg(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), Pt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), Pt(), Og(e, t, a);
        },
        useId: function() {
          return V = "useId", Qe(), Pt(), Vg();
        },
        unstable_isNewReconciler: K
      }, el = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), te(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), te(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), te(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), te(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), te(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), te();
          var a = ce.current;
          ce.current = el;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), te();
          var i = ce.current;
          ce.current = el;
          try {
            return Dg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), te(), Jh();
        },
        useState: function(e) {
          V = "useState", Qe(), te();
          var t = ce.current;
          ce.current = el;
          try {
            return Lg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), te(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), te(), zE(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), te(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), te(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), te(), om();
        },
        unstable_isNewReconciler: K
      }, cm = {
        readContext: function(e) {
          return Bg(), tr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), te(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), te(), tr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), te(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), te(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), te(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), te(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), te();
          var a = ce.current;
          ce.current = el;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), te();
          var i = ce.current;
          ce.current = el;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), te(), Jh();
        },
        useState: function(e) {
          V = "useState", Qe(), te();
          var t = ce.current;
          ce.current = el;
          try {
            return Mg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), te(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), te(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), te(), jE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), te(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), te(), om();
        },
        unstable_isNewReconciler: K
      };
    }
    var jo = Z.unstable_now, GE = 0, fm = -1, Rp = -1, dm = -1, $g = !1, pm = !1;
    function qE() {
      return $g;
    }
    function qw() {
      pm = !0;
    }
    function Xw() {
      $g = !1, pm = !1;
    }
    function Kw() {
      $g = pm, pm = !1;
    }
    function XE() {
      return GE;
    }
    function KE() {
      GE = jo();
    }
    function Yg(e) {
      Rp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function ZE(e) {
      Rp = -1;
    }
    function vm(e, t) {
      if (Rp >= 0) {
        var a = jo() - Rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Rp = -1;
      }
    }
    function Pl(e) {
      if (fm >= 0) {
        var t = jo() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
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
    function Ig(e) {
      if (dm >= 0) {
        var t = jo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
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
    function Vl() {
      fm = jo();
    }
    function Qg() {
      dm = jo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = nt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Gg = {}, qg, Xg, Kg, Zg, Jg, JE, hm, eS, tS, nS, Tp;
    {
      qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Tp = /* @__PURE__ */ new Set();
      var eC = /* @__PURE__ */ new Set();
      hm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          eC.has(a) || (eC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JE = function(e, t) {
        if (t === void 0) {
          var a = gt(e) || "Component";
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
          An(!0);
          try {
            s = a(i, u);
          } finally {
            An(!1);
          }
        }
        JE(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: ga,
      enqueueSetState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Bo(i), f = wu(u, s);
        f.payload = t, a != null && (hm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (pr(p, i, s, u), Yh(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Bo(i), f = wu(u, s);
        f.tag = yE, f.payload = t, a != null && (hm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (pr(p, i, s, u), Yh(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ma(e), i = wa(), u = Bo(a), s = wu(i, u);
        s.tag = Vh, t != null && (hm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (pr(f, a, u, i), Yh(f, a, u)), wc(a, u);
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
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(u, s) : !0;
    }
    function Zw(e, t, a) {
      var i = e.stateNode;
      {
        var u = gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Tp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (Tp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Tp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ct) === Ce && (Tp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || St(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function nC(e, t) {
      t.updater = aS, e.stateNode = t, Xu(t, e), t._reactInternalInstance = Gg;
    }
    function rC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Y && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = gf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Sf(e, u) : ui;
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
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), M !== null || U !== null || j !== null) {
            var le = gt(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(le) || (Zg.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Le, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && Q0(e, u, s), g;
    }
    function Jw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function aC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      Zw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = gf(e, t, !0);
        u.context = Sf(e, f);
      }
      {
        if (u.state === a) {
          var p = gt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ct && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Jw(e, u), Ih(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ke;
        y |= Kr, (e.mode & Ea) !== Ce && (y |= Zr), e.flags |= y;
      }
    }
    function ex(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = gf(e, t, !0);
        v = Sf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && aC(e, u, a, v), SE();
      var w = e.memoizedState, M = u.state = w;
      if (Ih(e, a, u, i), M = e.memoizedState, s === a && w === M && !bh() && !Qh()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ke;
          U |= Kr, (e.mode & Ea) !== Ce && (U |= Zr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), M = e.memoizedState);
      var j = Qh() || tC(e, t, s, a, w, M, v);
      if (j) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Ke;
          le |= Kr, (e.mode & Ea) !== Ce && (le |= Zr), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ke;
          Le |= Kr, (e.mode & Ea) !== Ce && (Le |= Zr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, j;
    }
    function tx(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = ui;
      if (typeof g == "object" && g !== null)
        b = tr(g);
      else {
        var w = gf(t, a, !0);
        b = Sf(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && aC(t, s, i, b), SE();
      var j = t.memoizedState, le = s.state = j;
      if (Ih(t, i, s, u), le = t.memoizedState, f === v && j === le && !bh() && !Qh() && !be)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), !1;
      typeof M == "function" && (rS(t, a, M, i), le = t.memoizedState);
      var Le = Qh() || tC(t, a, p, i, j, le, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      be;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Ke), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = b, Le;
    }
    function Ys(e, t) {
      return {
        value: e,
        source: t,
        stack: Fu(t),
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
    function nx(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = nx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === de)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
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
    var rx = typeof WeakMap == "function" ? WeakMap : Map;
    function iC(e, t, a) {
      var i = wu(en, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        qb(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = wu(en, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          m1(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        m1(e), uS(e, t), typeof u != "function" && Wb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (aa(e.lanes, De) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function lC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new rx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Xb.bind(null, e, t, a);
        Sa && Pp(e, a), t.then(s, s);
      }
    }
    function ax(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ix(e, t) {
      var a = e.tag;
      if ((e.mode & we) === Ce && (a === ve || a === We || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function uC(e) {
      var t = e;
      do {
        if (t.tag === ke && Hw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function oC(e, t, a, i, u) {
      if ((e.mode & we) === Ce) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= $e, a.flags |= cs, a.flags &= ~(dc | ma), a.tag === de) {
            var s = a.alternate;
            if (s === null)
              a.tag = bn;
            else {
              var f = wu(en, De);
              f.tag = Vh, zo(a, f, De);
            }
          }
          a.lanes = qe(a.lanes, De);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function lx(e, t, a, i, u) {
      if (a.flags |= ma, Sa && Pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ix(a), Nr() && a.mode & we && J0();
        var f = uC(t);
        if (f !== null) {
          f.flags &= ~Rn, oC(f, t, a, e, u), f.mode & we && lC(e, s, u), ax(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            lC(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nr() && a.mode & we) {
        J0();
        var v = uC(t);
        if (v !== null) {
          (v.flags & Kn) === Oe && (v.flags |= Rn), oC(v, t, a, e, u), eg(Ys(i, a));
          return;
        }
      }
      i = Ys(i, a), Hb(i);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= Kn;
            var b = co(u);
            y.lanes = qe(y.lanes, b);
            var w = iC(y, g, b);
            hg(y, w);
            return;
          }
          case de:
            var M = i, U = y.type, j = y.stateNode;
            if ((y.flags & $e) === Oe && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !u1(j))) {
              y.flags |= Kn;
              var le = co(u);
              y.lanes = qe(y.lanes, le);
              var Le = oS(y, M, le);
              hg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ux() {
      return null;
    }
    var wp = A.ReactCurrentOwner, nl = !1, sS, xp, cS, fS, dS, Is, pS, mm, bp;
    sS = {}, xp = {}, cS = {}, fS = {}, dS = {}, Is = !1, pS = {}, mm = {}, bp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = fE(t, null, a, i) : t.child = Tf(t, e.child, a, i);
    }
    function ox(e, t, a, i) {
      t.child = Tf(t, e.child, null, i), t.child = Tf(t, null, a, i);
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      xf(t, u), eo(t);
      {
        if (wp.current = t, Gr(!0), v = Lf(e, t, f, i, p, u), y = Mf(), t.mode & ct) {
          An(!0);
          try {
            v = Lf(e, t, f, i, p, u), y = Mf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !nl ? (xE(e, t, u), xu(e, t, u)) : (Nr() && y && Gy(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function cC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (p_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Pf(s), t.tag = He, t.type = f, mS(t, s), fC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            gt(s)
          ), a.defaultProps !== void 0) {
            var v = gt(s) || "Unknown";
            bp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), bp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, b = g.propTypes;
        b && Xi(
          b,
          i,
          // Resolved props
          "prop",
          gt(g)
        );
      }
      var w = e.child, M = RS(e, u);
      if (!M) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : je, j(U, i) && e.ref === t.ref)
          return xu(e, t, u);
      }
      t.flags |= Tl;
      var le = Xs(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function fC(e, t, a, i, u) {
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
          y && Xi(
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
        if (je(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & cs) !== Oe && (nl = !0);
          else return t.lanes = e.lanes, xu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function dC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ae)
        if ((t.mode & we) === Ce) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (aa(a, Cr)) {
          var b = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          km(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = qe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Cr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = qe(s.baseLanes, a), t.memoizedState = null) : M = a, km(t, M);
      }
      return Ra(e, t, u, a), t.child;
    }
    function sx(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function cx(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function fx(e, t, a) {
      {
        t.flags |= Ke;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function pC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= pd);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          gt(a)
        );
      }
      var f;
      {
        var p = gf(t, a, !0);
        f = Sf(t, p);
      }
      var v, y;
      xf(t, u), eo(t);
      {
        if (wp.current = t, Gr(!0), v = Lf(e, t, a, i, f, u), y = Mf(), t.mode & ct) {
          An(!0);
          try {
            v = Lf(e, t, a, i, f, u), y = Mf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !nl ? (xE(e, t, u), xu(e, t, u)) : (Nr() && y && Gy(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function vC(e, t, a, i, u) {
      {
        switch (D_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= $e, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = co(u);
            t.lanes = qe(t.lanes, g);
            var b = oS(t, Ys(y, t), g);
            hg(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Xi(
            w,
            i,
            // Resolved props
            "prop",
            gt(a)
          );
        }
      }
      var M;
      Al(a) ? (M = !0, Dh(t)) : M = !1, xf(t, u);
      var U = t.stateNode, j;
      U === null ? (gm(e, t), rC(t, a, i), iS(t, a, i, u), j = !0) : e === null ? j = ex(t, a, i, u) : j = tx(e, t, a, i, u);
      var le = hS(e, t, a, j, M, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Is || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), Is = !0);
      }
      return le;
    }
    function hS(e, t, a, i, u, s) {
      pC(e, t);
      var f = (t.flags & $e) !== Oe;
      if (!i && !f)
        return u && q0(t, a, !1), xu(e, t, s);
      var p = t.stateNode;
      wp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        eo(t);
        {
          if (Gr(!0), v = p.render(), t.mode & ct) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          Gr(!1);
        }
        ta();
      }
      return t.flags |= Tl, e !== null && f ? ox(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function hC(e) {
      var t = e.stateNode;
      t.pendingContext ? W0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && W0(e, t.context, !1), mg(e, t.containerInfo);
    }
    function dx(e, t, a) {
      if (hC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), Ih(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Ys(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return mC(e, t, p, a, g);
        } else if (p !== s) {
          var b = Ys(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return mC(e, t, p, a, b);
        } else {
          hw(t);
          var w = fE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~rn | za, M = M.sibling;
        }
      } else {
        if (Rf(), p === s)
          return xu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function mC(e, t, a, i, u) {
      return Rf(), eg(u), t.flags |= Rn, Ra(e, t, a, i), t.child;
    }
    function px(e, t, a) {
      RE(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= Ht), pC(e, t), Ra(e, t, f, a), t.child;
    }
    function vx(e, t) {
      return e === null && Jy(t), null;
    }
    function hx(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = v_(v), g = tl(v, u), b;
      switch (y) {
        case ve:
          return mS(t, v), t.type = v = Pf(v), b = vS(null, t, v, g, i), b;
        case de:
          return t.type = v = QS(v), b = vC(null, t, v, g, i), b;
        case We:
          return t.type = v = WS(v), b = sC(null, t, v, g, i), b;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Xi(
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
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ue && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function mx(e, t, a, i, u) {
      gm(e, t), t.tag = de;
      var s;
      return Al(a) ? (s = !0, Dh(t)) : s = !1, xf(t, u), rC(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function yx(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = gf(t, a, !1);
        s = Sf(t, f);
      }
      xf(t, i);
      var p, v;
      eo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = gt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & ct && Zi.recordLegacyContextWarning(t, null), Gr(!0), wp.current = t, p = Lf(null, t, a, u, s, i), v = Mf(), Gr(!1);
      }
      if (ta(), t.flags |= Tl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = gt(a) || "Unknown";
        xp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), xp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = gt(a) || "Unknown";
          xp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), xp[b] = !0);
        }
        t.tag = de, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Al(a) ? (w = !0, Dh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), nC(t, p), iS(t, a, u, i), hS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ve, t.mode & ct) {
          An(!0);
          try {
            p = Lf(null, t, a, u, s, i), v = Mf();
          } finally {
            An(!1);
          }
        }
        return Nr() && v && Gy(t), Ra(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = gt(t) || "Unknown";
          bp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), bp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = gt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = gt(t) || "Unknown";
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
        cachePool: ux(),
        transitions: null
      };
    }
    function gx(e, t) {
      var a = null;
      return {
        baseLanes: qe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Sx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, hp);
    }
    function Ex(e, t) {
      return Es(e.childLanes, t);
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= $e);
      var u = Ji.current, s = !1, f = (t.flags & $e) !== Oe;
      if (f || Sx(u, e) ? (s = !0, t.flags &= ~$e) : (e === null || e.memoizedState !== null) && (u = jw(u, wE)), u = _f(u), Ao(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return xx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Cx(t, y, g, a), w = t.child;
          return w.memoizedState = gS(a), t.memoizedState = yS, b;
        } else
          return SS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return bx(e, t, f, i, U, M, a);
        }
        if (s) {
          var j = i.fallback, le = i.children, Le = Tx(e, t, le, j, a), xe = t.child, Rt = e.child.memoizedState;
          return xe.memoizedState = Rt === null ? gS(a) : gx(Rt, a), xe.childLanes = Ex(e, a), t.memoizedState = yS, Le;
        } else {
          var ht = i.children, k = Rx(e, t, ht, a);
          return t.memoizedState = null, k;
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
    function Cx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & we) === Ce && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & Ye && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = ES(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return g1(e, t, B, null);
    }
    function gC(e, t) {
      return Xs(e, t);
    }
    function Rx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = gC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & we) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Nt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Tx(e, t, a, i, u) {
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
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & Ye && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = gC(f, v), y.subtreeFlags = f.subtreeFlags & rr;
      var b;
      return p !== null ? b = Xs(p, i) : (b = Yo(i, s, u, null), b.flags |= rn), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function ym(e, t, a, i) {
      i !== null && eg(i), Tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= rn, t.memoizedState = null, f;
    }
    function wx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Yo(i, s, u, null);
      return v.flags |= rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & we) !== Ce && Tf(t, e.child, null, u), v;
    }
    function xx(e, t, a) {
      return (e.mode & we) === Ce ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : jy(t) ? e.lanes = Ii : e.lanes = Cr, null;
    }
    function bx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var k = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= $e, null;
          var H = i.children, O = i.fallback, W = wx(e, t, H, O, f), fe = t.child;
          return fe.memoizedState = gS(f), t.memoizedState = yS, W;
        }
      else {
        if (pw(), (t.mode & we) === Ce)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (jy(u)) {
          var p, v, y;
          {
            var g = OT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = lS(b, p, y);
          return ym(e, t, f, w);
        }
        var M = aa(f, e.childLanes);
        if (nl || M) {
          var U = Dm();
          if (U !== null) {
            var j = $v(U, f);
            if (j !== Fn && j !== s.retryLane) {
              s.retryLane = j;
              var le = en;
              Qa(e, j), pr(U, e, j, le);
            }
          }
          VS();
          var Le = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, Le);
        } else if (V0(u)) {
          t.flags |= $e, t.child = e.child;
          var xe = Kb.bind(null, e);
          return LT(u, xe), null;
        } else {
          mw(t, u, s.treeContext);
          var Rt = i.children, ht = SS(t, Rt);
          return ht.flags |= za, ht;
        }
      }
    }
    function SC(e, t, a) {
      e.lanes = qe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = qe(i.lanes, t)), cg(e.return, t, a);
    }
    function _x(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ke) {
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
    function Dx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kx(e) {
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
    function Ox(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function EC(e, t) {
      {
        var a = St(e), i = !a && typeof _r(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Lx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!EC(e[a], a))
              return;
        } else {
          var i = _r(e);
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
    function CC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      kx(u), Ox(s, u), Lx(f, u), Ra(e, t, f, a);
      var p = Ji.current, v = Sg(p, hp);
      if (v)
        p = Eg(p, hp), t.flags |= $e;
      else {
        var y = e !== null && (e.flags & $e) !== Oe;
        y && _x(t, t.child, a), p = _f(p);
      }
      if (Ao(t, p), (t.mode & we) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Dx(t.child), b;
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
              if (U !== null && qh(U) === null) {
                t.child = M;
                break;
              }
              var j = M.sibling;
              M.sibling = w, w = M, M = j;
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
    function Mx(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Tf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var RC = !1;
    function Nx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !bh())
            return xu(e, t, a);
        } else
          kw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var TC = !1;
    function zx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (TC || (TC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = tr(i);
      eo(t);
      var p;
      return wp.current = t, Gr(!0), p = s(f), Gr(!1), ta(), t.flags |= Tl, Ra(e, t, p, a), t.child;
    }
    function _p() {
      nl = !0;
    }
    function gm(e, t) {
      (t.mode & we) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= rn);
    }
    function xu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), Hp(t.lanes), aa(a, t.childLanes) ? (_w(e, t), t.child) : null;
    }
    function Ux(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Nt) : s.push(e), a.flags |= rn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Ax(e, t, a) {
      switch (t.tag) {
        case re:
          hC(t), t.stateNode, Rf();
          break;
        case ue:
          RE(t);
          break;
        case de: {
          var i = t.type;
          Al(i) && Dh(t);
          break;
        }
        case he:
          mg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
          break;
        }
        case pt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Ke);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ke: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, _f(Ji.current)), t.flags |= $e, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return yC(e, t, a);
            Ao(t, _f(Ji.current));
            var b = xu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Ao(t, _f(Ji.current));
          break;
        }
        case bt: {
          var w = (e.flags & $e) !== Oe, M = aa(a, t.childLanes);
          if (w) {
            if (M)
              return CC(e, t, a);
            t.flags |= $e;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ao(t, Ji.current), M)
            break;
          return null;
        }
        case Ne:
        case Xe:
          return t.lanes = B, dC(e, t, a);
      }
      return xu(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ux(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & $e) === Oe)
            return nl = !1, Ax(e, t, a);
          (e.flags & cs) !== Oe ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Nr() && uw(t)) {
        var f = t.index, p = ow();
        Z0(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case ut:
          return yx(e, t, t.type, a);
        case tn: {
          var v = t.elementType;
          return hx(e, t, v, a);
        }
        case ve: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : tl(y, g);
          return vS(e, t, y, b, a);
        }
        case de: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : tl(w, M);
          return vC(e, t, w, U, a);
        }
        case re:
          return dx(e, t, a);
        case ue:
          return px(e, t, a);
        case Be:
          return vx(e, t);
        case ke:
          return yC(e, t, a);
        case he:
          return Mx(e, t, a);
        case We: {
          var j = t.type, le = t.pendingProps, Le = t.elementType === j ? le : tl(j, le);
          return sC(e, t, j, Le, a);
        }
        case Tt:
          return sx(e, t, a);
        case dt:
          return cx(e, t, a);
        case pt:
          return fx(e, t, a);
        case rt:
          return Nx(e, t, a);
        case dn:
          return zx(e, t, a);
        case ot: {
          var xe = t.type, Rt = t.pendingProps, ht = tl(xe, Rt);
          if (t.type !== t.elementType) {
            var k = xe.propTypes;
            k && Xi(
              k,
              ht,
              // Resolved for outer only
              "prop",
              gt(xe)
            );
          }
          return ht = tl(xe.type, ht), cC(e, t, xe, ht, a);
        }
        case He:
          return fC(e, t, t.type, t.pendingProps, a);
        case bn: {
          var H = t.type, O = t.pendingProps, W = t.elementType === H ? O : tl(H, O);
          return mx(e, t, H, W, a);
        }
        case bt:
          return CC(e, t, a);
        case En:
          break;
        case Ne:
          return dC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nf(e) {
      e.flags |= Ke;
    }
    function xC(e) {
      e.flags |= Xr, e.flags |= pd;
    }
    var bC, TS, _C, DC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Be)
          aT(e, u.stateNode);
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
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = lT(f, a, s, i, u, p);
        t.updateQueue = v, v && Nf(t);
      }
    }, DC = function(e, t, a, i) {
      a !== i && Nf(t);
    };
    function Dp(e, t) {
      if (!Nr())
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
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = Oe;
      if (t) {
        if ((e.mode & Ye) !== Ce) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = qe(a, qe(y.lanes, y.childLanes)), i |= y.subtreeFlags & rr, i |= y.flags & rr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = qe(a, qe(g.lanes, g.childLanes)), i |= g.subtreeFlags & rr, i |= g.flags & rr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ye) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = qe(a, qe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = qe(a, qe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Fx(e, t, a) {
      if (Cw() && (t.mode & we) !== Ce && (t.flags & $e) === Oe)
        return iE(t), Rf(), t.flags |= Rn | ma | Kn, !1;
      var i = Nh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Sw(t), Ur(t), (t.mode & Ye) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Rf(), (t.flags & $e) === Oe && (t.memoizedState = null), t.flags |= Ke, Ur(t), (t.mode & Ye) !== Ce) {
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
      switch (qy(t), t.tag) {
        case ut:
        case tn:
        case He:
        case ve:
        case We:
        case Tt:
        case dt:
        case pt:
        case dn:
        case ot:
          return Ur(t), null;
        case de: {
          var u = t.type;
          return Al(u) && _h(t), Ur(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (bf(t), Iy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Nh(t);
            if (f)
              Nf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== Oe) && (t.flags |= Na, lE());
            }
          }
          return TS(e, t), Ur(t), null;
        }
        case ue: {
          gg(t);
          var v = CE(), y = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, y, i, v), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var g = yg(), b = Nh(t);
            if (b)
              yw(t, v, g) && Nf(t);
            else {
              var w = rT(y, i, v, g, t);
              bC(w, t, !1, !1), t.stateNode = w, iT(w, y, i, v) && Nf(t);
            }
            t.ref !== null && xC(t);
          }
          return Ur(t), null;
        }
        case Be: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            DC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = CE(), le = yg(), Le = Nh(t);
            Le ? gw(t) && Nf(t) : t.stateNode = uT(M, j, le, t);
          }
          return Ur(t), null;
        }
        case ke: {
          Df(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Fx(e, t, xe);
            if (!Rt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & $e) !== Oe)
            return t.lanes = a, (t.mode & Ye) !== Ce && Wg(t), t;
          var ht = xe !== null, k = e !== null && e.memoizedState !== null;
          if (ht !== k && ht) {
            var H = t.child;
            if (H.flags |= wl, (t.mode & we) !== Ce) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !_);
              O || Sg(Ji.current, wE) ? jb() : VS();
            }
          }
          var W = t.updateQueue;
          if (W !== null && (t.flags |= Ke), Ur(t), (t.mode & Ye) !== Ce && ht) {
            var fe = t.child;
            fe !== null && (t.treeBaseDuration -= fe.treeBaseDuration);
          }
          return null;
        }
        case he:
          return bf(t), TS(e, t), e === null && ew(t.stateNode.containerInfo), Ur(t), null;
        case rt:
          var oe = t.type._context;
          return sg(oe, t), Ur(t), null;
        case bn: {
          var Ve = t.type;
          return Al(Ve) && _h(t), Ur(t), null;
        }
        case bt: {
          Df(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return Ur(t), null;
          var Wt = (t.flags & $e) !== Oe, Ot = Ge.rendering;
          if (Ot === null)
            if (Wt)
              Dp(Ge, !1);
            else {
              var In = Pb() && (e === null || (e.flags & $e) === Oe);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = qh(Lt);
                  if (jn !== null) {
                    Wt = !0, t.flags |= $e, Dp(Ge, !1);
                    var sa = jn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= Ke), t.subtreeFlags = Oe, Dw(t, a), Ao(t, Eg(Ji.current, hp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              Ge.tail !== null && yn() > XC() && (t.flags |= $e, Wt = !0, Dp(Ge, !1), t.lanes = Mv);
            }
          else {
            if (!Wt) {
              var Pr = qh(Ot);
              if (Pr !== null) {
                t.flags |= $e, Wt = !0;
                var si = Pr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Ke), Dp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Ot.alternate && !Nr())
                  return Ur(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              yn() * 2 - Ge.renderingStartTime > XC() && a !== Cr && (t.flags |= $e, Wt = !0, Dp(Ge, !1), t.lanes = Mv);
            }
            if (Ge.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var xa = Ge.last;
              xa !== null ? xa.sibling = Ot : t.child = Ot, Ge.last = Ot;
            }
          }
          if (Ge.tail !== null) {
            var ba = Ge.tail;
            Ge.rendering = ba, Ge.tail = ba.sibling, Ge.renderingStartTime = yn(), ba.sibling = null;
            var ca = Ji.current;
            return Wt ? ca = Eg(ca, hp) : ca = _f(ca), Ao(t, ca), ba;
          }
          return Ur(t), null;
        }
        case En:
          break;
        case Ne:
        case Xe: {
          PS(t);
          var Ou = t.memoizedState, Vf = Ou !== null;
          if (e !== null) {
            var Yp = e.memoizedState, Yl = Yp !== null;
            Yl !== Vf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= wl);
          }
          return !Vf || (t.mode & we) === Ce ? Ur(t) : aa($l, Cr) && (Ur(t), t.subtreeFlags & (rn | Ke) && (t.flags |= wl)), null;
        }
        case zt:
          return null;
        case wt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jx(e, t, a) {
      switch (qy(t), t.tag) {
        case de: {
          var i = t.type;
          Al(i) && _h(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | $e, (t.mode & Ye) !== Ce && Wg(t), t) : null;
        }
        case re: {
          t.stateNode, bf(t), Iy(t), Rg();
          var s = t.flags;
          return (s & Kn) !== Oe && (s & $e) === Oe ? (t.flags = s & ~Kn | $e, t) : null;
        }
        case ue:
          return gg(t), null;
        case ke: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Rf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | $e, (t.mode & Ye) !== Ce && Wg(t), t) : null;
        }
        case bt:
          return Df(t), null;
        case he:
          return bf(t), null;
        case rt:
          var v = t.type._context;
          return sg(v, t), null;
        case Ne:
        case Xe:
          return PS(t), null;
        case zt:
          return null;
        default:
          return null;
      }
    }
    function OC(e, t, a) {
      switch (qy(t), t.tag) {
        case de: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case re: {
          t.stateNode, bf(t), Iy(t), Rg();
          break;
        }
        case ue: {
          gg(t);
          break;
        }
        case he:
          bf(t);
          break;
        case ke:
          Df(t);
          break;
        case bt:
          Df(t);
          break;
        case rt:
          var u = t.type._context;
          sg(u, t);
          break;
        case Ne:
        case Xe:
          PS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var Sm = !1, Ar = !1, Hx = typeof WeakSet == "function" ? WeakSet : Set, Se = null, zf = null, Uf = null;
    function Px(e) {
      tu(null, function() {
        throw e;
      }), fd();
    }
    var Vx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ye)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Ho(ur, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function wS(e, t, a) {
      try {
        Vx(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Bx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function NC(e, t) {
      try {
        UC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function Af(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ze && mt && e.mode & Ye)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var zC = !1;
    function $x(e, t) {
      tT(e.containerInfo), Se = t, Yx();
      var a = zC;
      return zC = !1, a;
    }
    function Yx() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Ku) !== Oe && t !== null ? (t.return = e, Se = t) : Ix();
      }
    }
    function Ix() {
      for (; Se !== null; ) {
        var e = Se;
        jt(e);
        try {
          Qx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Qx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== Oe) {
        switch (jt(e), e.tag) {
          case ve:
          case We:
          case He:
            break;
          case de: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Is && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              bT(v.containerInfo);
            }
            break;
          }
          case ue:
          case Be:
          case he:
          case bn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Wa ? kv(t) : (e & ur) !== Wa && li(t), (e & Fl) !== Wa && Vp(!0), Em(t, a, p), (e & Fl) !== Wa && Vp(!1), (e & zr) !== Wa ? Cc() : (e & ur) !== Wa && to());
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
            (e & zr) !== Wa ? _l(t) : (e & ur) !== Wa && Ov(t);
            var f = s.create;
            (e & Fl) !== Wa && Vp(!0), s.destroy = f(), (e & Fl) !== Wa && Vp(!1), (e & zr) !== Wa ? Ec() : (e & ur) !== Wa && fs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== Oe ? v = "useLayoutEffect" : (s.tag & Fl) !== Oe ? v = "useInsertionEffect" : v = "useEffect";
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
    function Wx(e, t) {
      if ((t.flags & Ke) !== Oe)
        switch (t.tag) {
          case pt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case re:
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
    function Gx(e, t, a, i) {
      if ((a.flags & Sr) !== Oe)
        switch (a.tag) {
          case ve:
          case We:
          case He: {
            if (!Ar)
              if (a.mode & Ye)
                try {
                  Vl(), Ho(ur | lr, a);
                } finally {
                  Pl(a);
                }
              else
                Ho(ur | lr, a);
            break;
          }
          case de: {
            var u = a.stateNode;
            if (a.flags & Ke && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ye)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & Ye)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), EE(a, p, u));
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
              EE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Ke) {
              var b = a.type, w = a.memoizedProps;
              dT(g, b, w);
            }
            break;
          }
          case Be:
            break;
          case he:
            break;
          case pt: {
            {
              var M = a.memoizedProps, U = M.onCommit, j = M.onRender, le = a.stateNode.effectDuration, Le = XE(), xe = t === null ? "mount" : "update";
              qE() && (xe = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, le, Le), Ib(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case re:
                      var ht = Rt.stateNode;
                      ht.effectDuration += le;
                      break e;
                    case pt:
                      var k = Rt.stateNode;
                      k.effectDuration += le;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case ke: {
            nb(e, a);
            break;
          }
          case bt:
          case bn:
          case En:
          case Ne:
          case Xe:
          case wt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && UC(a);
    }
    function qx(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          if (e.mode & Ye)
            try {
              Vl(), MC(e, e.return);
            } finally {
              Pl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case de: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Bx(e, e.return, t), NC(e, e.return);
          break;
        }
        case ue: {
          NC(e, e.return);
          break;
        }
      }
    }
    function Xx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? RT(u) : wT(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === Be) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? TT(s) : xT(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
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
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ye)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function Kx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function AC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, AC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && rw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Zx(e) {
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
    function jC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Be && t.tag !== It; ) {
          if (t.flags & rn || t.child === null || t.tag === he)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & rn))
          return t.stateNode;
      }
    }
    function Jx(e) {
      var t = Zx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Ht && (P0(a), t.flags &= ~Ht);
          var i = jC(e);
          bS(e, i, a);
          break;
        }
        case re:
        case he: {
          var u = t.stateNode.containerInfo, s = jC(e);
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
        t ? gT(a, s, t) : mT(a, s);
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
        t ? yT(a, s, t) : hT(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, al = !1;
    function eb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Fr = i.stateNode, al = !1;
              break e;
            }
            case re: {
              Fr = i.stateNode.containerInfo, al = !0;
              break e;
            }
            case he: {
              Fr = i.stateNode.containerInfo, al = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        HC(e, t, a), Fr = null, al = !1;
      }
      Kx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        HC(e, t, i), i = i.sibling;
    }
    function HC(e, t, a) {
      switch (au(a), a.tag) {
        case ue:
          Ar || Af(a, t);
        case Be: {
          {
            var i = Fr, u = al;
            Fr = null, Po(e, t, a), Fr = i, al = u, Fr !== null && (al ? ET(Fr, a.stateNode) : ST(Fr, a.stateNode));
          }
          return;
        }
        case It: {
          Fr !== null && (al ? CT(Fr, a.stateNode) : Fy(Fr, a.stateNode));
          return;
        }
        case he: {
          {
            var s = Fr, f = al;
            Fr = a.stateNode.containerInfo, al = !0, Po(e, t, a), Fr = s, al = f;
          }
          return;
        }
        case ve:
        case We:
        case ot:
        case He: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, M = b.tag;
                  w !== void 0 && ((M & Fl) !== Wa ? Em(a, t, w) : (M & ur) !== Wa && (li(a), a.mode & Ye ? (Vl(), Em(a, t, w), Pl(a)) : Em(a, t, w), to())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case de: {
          if (!Ar) {
            Af(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && wS(a, t, U);
          }
          Po(e, t, a);
          return;
        }
        case En: {
          Po(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & we
          ) {
            var j = Ar;
            Ar = j || a.memoizedState !== null, Po(e, t, a), Ar = j;
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
    function tb(e) {
      e.memoizedState;
    }
    function nb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && PT(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Hx()), t.forEach(function(i) {
          var u = Zb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Sa)
              if (zf !== null && Uf !== null)
                Pp(Uf, zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function rb(e, t, a) {
      zf = a, Uf = e, jt(t), VC(t, e), jt(t), zf = null, Uf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            eb(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = Zs();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          jt(p), VC(p, e), p = p.sibling;
      jt(f);
    }
    function VC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ve:
        case We:
        case ot:
        case He: {
          if (il(t, e), Bl(e), u & Ke) {
            try {
              rl(Fl | lr, e, e.return), Ho(Fl | lr, e);
            } catch (Ve) {
              un(e, e.return, Ve);
            }
            if (e.mode & Ye) {
              try {
                Vl(), rl(ur | lr, e, e.return);
              } catch (Ve) {
                un(e, e.return, Ve);
              }
              Pl(e);
            } else
              try {
                rl(ur | lr, e, e.return);
              } catch (Ve) {
                un(e, e.return, Ve);
              }
          }
          return;
        }
        case de: {
          il(t, e), Bl(e), u & Xr && i !== null && Af(i, i.return);
          return;
        }
        case ue: {
          il(t, e), Bl(e), u & Xr && i !== null && Af(i, i.return);
          {
            if (e.flags & Ht) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (Ve) {
                un(e, e.return, Ve);
              }
            }
            if (u & Ke) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    pT(f, g, y, v, p, e);
                  } catch (Ve) {
                    un(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case Be: {
          if (il(t, e), Bl(e), u & Ke) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              vT(b, M, w);
            } catch (Ve) {
              un(e, e.return, Ve);
            }
          }
          return;
        }
        case re: {
          if (il(t, e), Bl(e), u & Ke && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                HT(t.containerInfo);
              } catch (Ve) {
                un(e, e.return, Ve);
              }
          }
          return;
        }
        case he: {
          il(t, e), Bl(e);
          return;
        }
        case ke: {
          il(t, e), Bl(e);
          var j = e.child;
          if (j.flags & wl) {
            var le = j.stateNode, Le = j.memoizedState, xe = Le !== null;
            if (le.isHidden = xe, xe) {
              var Rt = j.alternate !== null && j.alternate.memoizedState !== null;
              Rt || Fb();
            }
          }
          if (u & Ke) {
            try {
              tb(e);
            } catch (Ve) {
              un(e, e.return, Ve);
            }
            PC(e);
          }
          return;
        }
        case Ne: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & we
          ) {
            var k = Ar;
            Ar = k || ht, il(t, e), Ar = k;
          } else
            il(t, e);
          if (Bl(e), u & wl) {
            var H = e.stateNode, O = e.memoizedState, W = O !== null, fe = e;
            if (H.isHidden = W, W && !ht && (fe.mode & we) !== Ce) {
              Se = fe;
              for (var oe = fe.child; oe !== null; )
                Se = oe, ib(oe), oe = oe.sibling;
            }
            Xx(fe, W);
          }
          return;
        }
        case bt: {
          il(t, e), Bl(e), u & Ke && PC(e);
          return;
        }
        case En:
          return;
        default: {
          il(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & rn) {
        try {
          Jx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~rn;
      }
      t & za && (e.flags &= ~za);
    }
    function ab(e, t, a) {
      zf = a, Uf = t, Se = e, BC(e, t, a), zf = null, Uf = null;
    }
    function BC(e, t, a) {
      for (var i = (e.mode & we) !== Ce; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, b = Sm, w = Ar;
            Sm = p, Ar = g, Ar && !w && (Se = u, lb(u));
            for (var M = s; M !== null; )
              Se = M, BC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Sm = b, Ar = w, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sr) !== Oe && s !== null ? (s.return = u, Se = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Sr) !== Oe) {
          var u = i.alternate;
          jt(i);
          try {
            Gx(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          Cn();
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
    function ib(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ve:
          case We:
          case ot:
          case He: {
            if (t.mode & Ye)
              try {
                Vl(), rl(ur, t, t.return);
              } finally {
                Pl(t);
              }
            else
              rl(ur, t, t.return);
            break;
          }
          case de: {
            Af(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wS(t, t.return, i);
            break;
          }
          case ue: {
            Af(t, t.return);
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
        a !== null ? (a.return = t, Se = a) : $C(e);
      }
    }
    function $C(e) {
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
    function lb(e) {
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
        jt(t);
        try {
          qx(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (Cn(), t === e) {
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
    function ub(e, t, a, i) {
      Se = t, ob(t, e, a, i);
    }
    function ob(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Ua) !== Oe && s !== null ? (s.return = u, Se = s) : sb(e, t, a, i);
      }
    }
    function sb(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & sn) !== Oe) {
          jt(u);
          try {
            cb(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          Cn();
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
    function cb(e, t, a, i) {
      switch (t.tag) {
        case ve:
        case We:
        case He: {
          if (t.mode & Ye) {
            Qg();
            try {
              Ho(zr | lr, t);
            } finally {
              Ig(t);
            }
          } else
            Ho(zr | lr, t);
          break;
        }
      }
    }
    function fb(e) {
      Se = e, db();
    }
    function db() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Nt) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, hb(u, e);
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
        (e.subtreeFlags & Ua) !== Oe && t !== null ? (t.return = e, Se = t) : pb();
      }
    }
    function pb() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & sn) !== Oe && (jt(e), vb(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function vb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & Ye ? (Qg(), rl(zr | lr, e, e.return), Ig(e)) : rl(zr | lr, e, e.return);
          break;
        }
      }
    }
    function hb(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        jt(a), yb(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : mb(e);
      }
    }
    function mb(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (AC(t), t === e) {
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
    function yb(e, t) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          e.mode & Ye ? (Qg(), rl(zr, e, t), Ig(e)) : rl(zr, e, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            Ho(ur | lr, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case de: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function Sb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            Ho(zr | lr, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function Eb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He: {
          try {
            rl(ur | lr, e, e.return);
          } catch (a) {
            un(e, e.return, a);
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
    function Cb(e) {
      switch (e.tag) {
        case ve:
        case We:
        case He:
          try {
            rl(zr | lr, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var kp = Symbol.for;
      kp("selector.component"), kp("selector.has_pseudo_class"), kp("selector.role"), kp("selector.test_id"), kp("selector.text");
    }
    var Rb = [];
    function Tb() {
      Rb.forEach(function(e) {
        return e();
      });
    }
    var wb = A.ReactCurrentActQueue;
    function xb(e) {
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
        return !e && wb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var bb = Math.ceil, DS = A.ReactCurrentDispatcher, kS = A.ReactCurrentOwner, jr = A.ReactCurrentBatchConfig, ll = A.ReactCurrentActQueue, cr = (
      /*             */
      0
    ), QC = (
      /*               */
      1
    ), Hr = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), bu = 0, Op = 1, Qs = 2, Cm = 3, Lp = 4, WC = 5, OS = 6, Ct = cr, Ta = null, Mn = null, fr = B, $l = B, LS = Oo(B), dr = bu, Mp = null, Rm = B, Np = B, Tm = B, zp = null, Ga = null, MS = 0, GC = 500, qC = 1 / 0, _b = 500, _u = null;
    function Up() {
      qC = yn() + _b;
    }
    function XC() {
      return qC;
    }
    var wm = !1, NS = null, Ff = null, Ws = !1, Vo = null, Ap = B, zS = [], US = null, Db = 50, Fp = 0, AS = null, FS = !1, xm = !1, kb = 50, jf = 0, bm = null, jp = en, _m = B, KC = !1;
    function Dm() {
      return Ta;
    }
    function wa() {
      return (Ct & (Hr | ki)) !== cr ? yn() : (jp !== en || (jp = yn()), jp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & we) === Ce)
        return De;
      if ((Ct & Hr) !== cr && fr !== B)
        return co(fr);
      var a = ww() !== Tw;
      if (a) {
        if (jr.transition !== null) {
          var i = jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === Fn && (_m = Pv()), _m;
      }
      var u = Pa();
      if (u !== Fn)
        return u;
      var s = oT();
      return s;
    }
    function Ob(e) {
      var t = e.mode;
      return (t & we) === Ce ? De : ra();
    }
    function pr(e, t, a, i) {
      e_(), KC && S("useInsertionEffect must not schedule updates."), FS && (xm = !0), du(e, a, i), (Ct & Hr) !== B && e === Ta ? r_(t) : (Sa && Yc(e, t, a), a_(t), e === Ta && ((Ct & Hr) === cr && (Np = qe(Np, a)), dr === Lp && $o(e, fr)), qa(e, i), a === De && Ct === cr && (t.mode & we) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (Up(), K0()));
    }
    function Lb(e, t, a) {
      var i = e.current;
      i.lanes = t, du(e, t, a), qa(e, a);
    }
    function Mb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & Hr) !== cr
      );
    }
    function qa(e, t) {
      var a = e.callbackNode;
      Uv(e, t);
      var i = cu(e, e === Ta ? fr : B);
      if (i === B) {
        a !== null && p1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = kn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== YS)) {
        a == null && s !== De && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && p1(a);
      var f;
      if (u === De)
        e.tag === Lo ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), lw(e1.bind(null, e))) : X0(e1.bind(null, e)), ll.current !== null ? ll.current.push(Mo) : cT(function() {
          (Ct & (Hr | ki)) === cr && Mo();
        }), f = null;
      else {
        var p;
        switch (ir(i)) {
          case On:
            p = yc;
            break;
          case Qi:
            p = ru;
            break;
          case Ei:
            p = Si;
            break;
          case fo:
            p = gc;
            break;
          default:
            p = Si;
            break;
        }
        f = IS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (Xw(), jp = en, _m = B, (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ku();
      if (i && e.callbackNode !== a)
        return null;
      var u = cu(e, e === Ta ? fr : B);
      if (u === B)
        return null;
      var s = !Ss(e, u) && !Hv(e, u) && !t, f = s ? Bb(e, u) : Om(e, u);
      if (f !== bu) {
        if (f === Qs) {
          var p = kl(e);
          p !== B && (u = p, f = jS(e, p));
        }
        if (f === Op) {
          var v = Mp;
          throw Gs(e, B), $o(e, u), qa(e, yn()), v;
        }
        if (f === OS)
          $o(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !zb(g)) {
            if (f = Om(e, u), f === Qs) {
              var b = kl(e);
              b !== B && (u = b, f = jS(e, b));
            }
            if (f === Op) {
              var w = Mp;
              throw Gs(e, B), $o(e, u), qa(e, yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Nb(e, f, u);
        }
      }
      return qa(e, yn()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function jS(e, t) {
      var a = zp;
      if (Ic(e)) {
        var i = Gs(e, t);
        i.flags |= Rn, JT(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== Qs) {
        var s = Ga;
        Ga = a, s !== null && JC(s);
      }
      return u;
    }
    function JC(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function Nb(e, t, a) {
      switch (t) {
        case bu:
        case Op:
          throw new Error("Root did not complete. This is a bug in React.");
        case Qs: {
          qs(e, Ga, _u);
          break;
        }
        case Cm: {
          if ($o(e, a), Av(a) && // do not delay if we're inside an act() scope
          !v1()) {
            var i = MS + GC - yn();
            if (i > 10) {
              var u = cu(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!fu(s, a)) {
                wa(), Bc(e, s);
                break;
              }
              e.timeoutHandle = Uy(qs.bind(null, e, Ga, _u), i);
              break;
            }
          }
          qs(e, Ga, _u);
          break;
        }
        case Lp: {
          if ($o(e, a), jv(a))
            break;
          if (!v1()) {
            var f = Nv(e, a), p = f, v = yn() - p, y = Jb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(qs.bind(null, e, Ga, _u), y);
              break;
            }
          }
          qs(e, Ga, _u);
          break;
        }
        case WC: {
          qs(e, Ga, _u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function zb(e) {
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
      t = Es(t, Tm), t = Es(t, Np), Bv(e, t);
    }
    function e1(e) {
      if (Kw(), (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      ku();
      var t = cu(e, B);
      if (!aa(t, De))
        return qa(e, yn()), null;
      var a = Om(e, t);
      if (e.tag !== Lo && a === Qs) {
        var i = kl(e);
        i !== B && (t = i, a = jS(e, i));
      }
      if (a === Op) {
        var u = Mp;
        throw Gs(e, B), $o(e, t), qa(e, yn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, qs(e, Ga, _u), qa(e, yn()), null;
    }
    function Ub(e, t) {
      t !== B && (Dd(e, qe(t, De)), qa(e, yn()), (Ct & (Hr | ki)) === cr && (Up(), Mo()));
    }
    function HS(e, t) {
      var a = Ct;
      Ct |= QC;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (Up(), K0());
      }
    }
    function Ab(e, t, a, i, u) {
      var s = Pa(), f = jr.transition;
      try {
        return jr.transition = null, Tn(On), e(t, a, i, u);
      } finally {
        Tn(s), jr.transition = f, Ct === cr && Up();
      }
    }
    function Du(e) {
      Vo !== null && Vo.tag === Lo && (Ct & (Hr | ki)) === cr && ku();
      var t = Ct;
      Ct |= QC;
      var a = jr.transition, i = Pa();
      try {
        return jr.transition = null, Tn(On), e ? e() : void 0;
      } finally {
        Tn(i), jr.transition = a, Ct = t, (Ct & (Hr | ki)) === cr && Mo();
      }
    }
    function t1() {
      return (Ct & (Hr | ki)) !== cr;
    }
    function km(e, t) {
      ua(LS, $l, e), $l = qe($l, t);
    }
    function PS(e) {
      $l = LS.current, la(LS, e);
    }
    function Gs(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, sT(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          OC(u, i), i = i.return;
        }
      Ta = e;
      var s = Xs(e.current, null);
      return Mn = s, fr = $l = t, dr = bu, Mp = null, Rm = B, Np = B, Tm = B, zp = null, Ga = null, Lw(), Zi.discardPendingWarnings(), s;
    }
    function n1(e, t) {
      do {
        var a = Mn;
        try {
          if (Hh(), bE(), Cn(), kS.current = null, a === null || a.return === null) {
            dr = Op, Mp = t, Mn = null;
            return;
          }
          if (Ze && a.mode & Ye && vm(a, !0), Je)
            if (ta(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              iu(a, i, fr);
            } else
              ds(a, t, fr);
          lx(e, a.return, a, t, fr), l1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function r1() {
      var e = DS.current;
      return DS.current = sm, e === null ? sm : e;
    }
    function a1(e) {
      DS.current = e;
    }
    function Fb() {
      MS = yn();
    }
    function Hp(e) {
      Rm = qe(e, Rm);
    }
    function jb() {
      dr === bu && (dr = Cm);
    }
    function VS() {
      (dr === bu || dr === Cm || dr === Qs) && (dr = Lp), Ta !== null && (gs(Rm) || gs(Np)) && $o(Ta, fr);
    }
    function Hb(e) {
      dr !== Lp && (dr = Qs), zp === null ? zp = [e] : zp.push(e);
    }
    function Pb() {
      return dr === bu;
    }
    function Om(e, t) {
      var a = Ct;
      Ct |= Hr;
      var i = r1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, fr), u.clear()), kd(e, t);
        }
        _u = Rs(), Gs(e, t);
      }
      cn(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      if (Hh(), Ct = a, a1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Tc(), Ta = null, fr = B, dr;
    }
    function Vb() {
      for (; Mn !== null; )
        i1(Mn);
    }
    function Bb(e, t) {
      var a = Ct;
      Ct |= Hr;
      var i = r1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, fr), u.clear()), kd(e, t);
        }
        _u = Rs(), Up(), Gs(e, t);
      }
      cn(t);
      do
        try {
          $b();
          break;
        } catch (s) {
          n1(e, s);
        }
      while (!0);
      return Hh(), a1(i), Ct = a, Mn !== null ? (Rc(), bu) : (Tc(), Ta = null, fr = B, dr);
    }
    function $b() {
      for (; Mn !== null && !mc(); )
        i1(Mn);
    }
    function i1(e) {
      var t = e.alternate;
      jt(e);
      var a;
      (e.mode & Ye) !== Ce ? (Yg(e), a = BS(t, e, $l), vm(e, !0)) : a = BS(t, e, $l), Cn(), e.memoizedProps = e.pendingProps, a === null ? l1(e) : Mn = a, kS.current = null;
    }
    function l1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ma) === Oe) {
          jt(t);
          var u = void 0;
          if ((t.mode & Ye) === Ce ? u = kC(a, t, $l) : (Yg(t), u = kC(a, t, $l), vm(t, !1)), Cn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = jx(a, t);
          if (s !== null) {
            s.flags &= Rv, Mn = s;
            return;
          }
          if ((t.mode & Ye) !== Ce) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ma, i.subtreeFlags = Oe, i.deletions = null;
          else {
            dr = OS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      dr === bu && (dr = WC);
    }
    function qs(e, t, a) {
      var i = Pa(), u = jr.transition;
      try {
        jr.transition = null, Tn(On), Yb(e, t, a, i);
      } finally {
        jr.transition = u, Tn(i);
      }
      return null;
    }
    function Yb(e, t, a, i) {
      do
        ku();
      while (Vo !== null);
      if (t_(), (Ct & (Hr | ki)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bl(s), u === null)
        return Sc(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = qe(u.lanes, u.childLanes);
      $c(e, f), e === Ta && (Ta = null, Mn = null, fr = B), ((u.subtreeFlags & Ua) !== Oe || (u.flags & Ua) !== Oe) && (Ws || (Ws = !0, US = a, IS(Si, function() {
        return ku(), null;
      })));
      var p = (u.subtreeFlags & (Ku | Jr | Sr | Ua)) !== Oe, v = (u.flags & (Ku | Jr | Sr | Ua)) !== Oe;
      if (p || v) {
        var y = jr.transition;
        jr.transition = null;
        var g = Pa();
        Tn(On);
        var b = Ct;
        Ct |= ki, kS.current = null, $x(e, u), KE(), rb(e, u, s), nT(e.containerInfo), e.current = u, Ed(s), ab(u, e, s), no(), xv(), Ct = b, Tn(g), jr.transition = y;
      } else
        e.current = u, KE();
      var w = Ws;
      if (Ws ? (Ws = !1, Vo = e, Ap = s) : (jf = 0, bm = null), f = e.pendingLanes, f === B && (Ff = null), w || c1(e.current, !1), Ju(u.stateNode, i), Sa && e.memoizedUpdaters.clear(), Tb(), qa(e, yn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], le = j.stack, Le = j.digest;
          M(j.value, {
            componentStack: le,
            digest: Le
          });
        }
      if (wm) {
        wm = !1;
        var xe = NS;
        throw NS = null, xe;
      }
      return aa(Ap, De) && e.tag !== Lo && ku(), f = e.pendingLanes, aa(f, De) ? (qw(), e === AS ? Fp++ : (Fp = 0, AS = e)) : Fp = 0, Mo(), Sc(), null;
    }
    function ku() {
      if (Vo !== null) {
        var e = ir(Ap), t = ly(Ei, e), a = jr.transition, i = Pa();
        try {
          return jr.transition = null, Tn(t), Qb();
        } finally {
          Tn(i), jr.transition = a;
        }
      }
      return !1;
    }
    function Ib(e) {
      zS.push(e), Ws || (Ws = !0, IS(Si, function() {
        return ku(), null;
      }));
    }
    function Qb() {
      if (Vo === null)
        return !1;
      var e = US;
      US = null;
      var t = Vo, a = Ap;
      if (Vo = null, Ap = B, (Ct & (Hr | ki)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, xm = !1, Lv(a);
      var i = Ct;
      Ct |= ki, fb(t.current), ub(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Wx(t, f);
        }
      }
      Cd(), c1(t.current, !0), Ct = i, Mo(), xm ? t === bm ? jf++ : (jf = 0, bm = t) : jf = 0, FS = !1, xm = !1, ja(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function u1(e) {
      return Ff !== null && Ff.has(e);
    }
    function Wb(e) {
      Ff === null ? Ff = /* @__PURE__ */ new Set([e]) : Ff.add(e);
    }
    function Gb(e) {
      wm || (wm = !0, NS = e);
    }
    var qb = Gb;
    function o1(e, t, a) {
      var i = Ys(a, t), u = iC(e, i, De), s = zo(e, u, De), f = wa();
      s !== null && (du(s, De, f), qa(s, f));
    }
    function un(e, t, a) {
      if (Px(a), Vp(!1), e.tag === re) {
        o1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          o1(i, e, a);
          return;
        } else if (i.tag === de) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !u1(s)) {
            var f = Ys(a, e), p = oS(i, f, De), v = zo(i, p, De), y = wa();
            v !== null && (du(v, De, y), qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Bc(e, a), i_(e), Ta === e && fu(fr, a) && (dr === Lp || dr === Cm && Av(fr) && yn() - MS < GC ? Gs(e, B) : Tm = qe(Tm, a)), qa(e, u);
    }
    function s1(e, t) {
      t === Fn && (t = Ob(e));
      var a = wa(), i = Qa(e, t);
      i !== null && (du(i, t, a), qa(i, a));
    }
    function Kb(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), s1(e, a);
    }
    function Zb(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case ke:
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
    function Jb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : bb(e / 1960) * 1960;
    }
    function e_() {
      if (Fp > Db)
        throw Fp = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      jf > kb && (jf = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function t_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function c1(e, t) {
      jt(e), Lm(e, Zr, Eb), t && Lm(e, nu, Cb), Lm(e, Zr, gb), t && Lm(e, nu, Sb), Cn();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function f1(e) {
      {
        if ((Ct & Hr) !== cr || !(e.mode & we))
          return;
        var t = e.tag;
        if (t !== ut && t !== re && t !== de && t !== ve && t !== We && t !== ot && t !== He)
          return;
        var a = Ie(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          jt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? jt(e) : Cn();
        }
      }
    }
    var BS;
    {
      var n_ = null;
      BS = function(e, t, a) {
        var i = S1(n_, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (vw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Hh(), bE(), OC(e, t), S1(t, i), t.mode & Ye && Yg(t), tu(null, wC, null, e, t, a), ty()) {
            var u = fd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var d1 = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function r_(e) {
      if (Wr && !Qw())
        switch (e.tag) {
          case ve:
          case We:
          case He: {
            var t = Mn && Ie(Mn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case de: {
            d1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), d1 = !0);
            break;
          }
        }
    }
    function Pp(e, t) {
      if (Sa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Yc(e, i, t);
        });
      }
    }
    var YS = {};
    function IS(e, t) {
      {
        var a = ll.current;
        return a !== null ? (a.push(t), YS) : hc(e, t);
      }
    }
    function p1(e) {
      if (e !== YS)
        return wv(e);
    }
    function v1() {
      return ll.current !== null;
    }
    function a_(e) {
      {
        if (e.mode & we) {
          if (!IC())
            return;
        } else if (!xb() || Ct !== cr || e.tag !== ve && e.tag !== We && e.tag !== He)
          return;
        if (ll.current === null) {
          var t = mn;
          try {
            jt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? jt(e) : Cn();
          }
        }
      }
    }
    function i_(e) {
      e.tag !== Lo && IC() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Oi = null, Hf = null, l_ = function(e) {
      Oi = e;
    };
    function Pf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function QS(e) {
      return Pf(e);
    }
    function WS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Pf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
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
        if (Oi === null)
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
          case We: {
            (s === G || s === Ue) && (u = !0);
            break;
          }
          case ot:
          case He: {
            (s === yt || s === Ue) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function m1(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Hf === null && (Hf = /* @__PURE__ */ new WeakSet()), Hf.add(e);
      }
    }
    var u_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ku(), Du(function() {
          GS(e.current, i, a);
        });
      }
    }, o_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        ku(), Du(function() {
          Bp(t, e, null, null);
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
          case We:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Oi(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === de ? g = !0 : y = !0));
        }
        if (Hf !== null && (Hf.has(e) || i !== null && Hf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Qa(e, De);
          w !== null && pr(w, e, De, en);
        }
        u !== null && !g && GS(u, t, a), s !== null && GS(s, t, a);
      }
    }
    var s_ = function(e, t) {
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
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? c_(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function c_(e, t) {
      {
        var a = f_(e, t);
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
    function f_(e, t) {
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
        var y1 = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function d_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new d_(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function p_(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function v_(e) {
      if (typeof e == "function")
        return KS(e) ? de : ve;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return We;
        if (t === yt)
          return ot;
      }
      return ut;
    }
    function Xs(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & rr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ut:
        case ve:
        case He:
          a.type = Pf(e.type);
          break;
        case de:
          a.type = QS(e.type);
          break;
        case We:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function h_(e, t) {
      e.flags &= rr | rn;
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
    function m_(e, t, a) {
      var i;
      return e === kh ? (i = we, t === !0 && (i |= ct, i |= Ea)) : i = Ce, Sa && (i |= Ye), oi(re, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = ut, p = e;
      if (typeof e == "function")
        KS(e) ? (f = de, p = QS(p)) : p = Pf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case ha:
            return Yo(a.children, u, s, t);
          case di:
            f = dt, u |= ct, (u & we) !== Ce && (u |= Ea);
            break;
          case pi:
            return y_(a, u, s, t);
          case Te:
            return g_(a, u, s, t);
          case ft:
            return S_(a, u, s, t);
          case Gt:
            return g1(a, u, s, t);
          case nn:
          case tt:
          case gr:
          case vi:
          case zn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = rt;
                  break e;
                case Y:
                  f = dn;
                  break e;
                case G:
                  f = We, p = WS(p);
                  break e;
                case yt:
                  f = ot;
                  break e;
                case Ue:
                  f = tn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ie(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = oi(Tt, e, i, t);
      return u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(pt, e, i, t | Ye);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function g_(e, t, a, i) {
      var u = oi(ke, e, i, t);
      return u.elementType = Te, u.lanes = a, u;
    }
    function S_(e, t, a, i) {
      var u = oi(bt, e, i, t);
      return u.elementType = ft, u.lanes = a, u;
    }
    function g1(e, t, a, i) {
      var u = oi(Ne, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function e0(e, t, a) {
      var i = oi(Be, e, null, t);
      return i.lanes = a, i;
    }
    function E_() {
      var e = oi(ue, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function C_(e) {
      var t = oi(It, null, null, Ce);
      return t.stateNode = e, t;
    }
    function t0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function S1(e, t) {
      return e === null && (e = oi(ut, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function R_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Cs(B), this.expirationTimes = Cs(en), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Cs(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < hs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = new R_(e, t, a, p, v), b = m_(t, s);
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
    function T_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var r0, a0;
    r0 = !1, a0 = {};
    function C1(e) {
      if (!e)
        return ui;
      var t = Ma(e), a = iw(t);
      if (t.tag === de) {
        var i = t.type;
        if (Al(i))
          return G0(t, i, a);
      }
      return a;
    }
    function w_(e, t) {
      {
        var a = Ma(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Aa(a);
        if (u === null)
          return null;
        if (u.mode & ct) {
          var s = Ie(a) || "Component";
          if (!a0[s]) {
            a0[s] = !0;
            var f = mn;
            try {
              jt(u), a.mode & ct ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? jt(f) : Cn();
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
      var w = b.current, M = wa(), U = Bo(w), j = wu(M, U);
      return j.callback = t ?? null, zo(w, j, U), Lb(b, U, M), b;
    }
    function Bp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = wa(), f = Bo(u);
      Rd(f);
      var p = C1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && mn !== null && !r0 && (r0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(mn) || "Unknown"));
      var v = wu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (pr(y, u, f, s), Yh(y, u, f)), f;
    }
    function Nm(e) {
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
    function x_(e) {
      switch (e.tag) {
        case re: {
          var t = e.stateNode;
          if (Ic(t)) {
            var a = xd(t);
            Ub(t, a);
          }
          break;
        }
        case ke: {
          Du(function() {
            var u = Qa(e, De);
            if (u !== null) {
              var s = wa();
              pr(u, e, De, s);
            }
          });
          var i = De;
          i0(e, i);
          break;
        }
      }
    }
    function w1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vv(a.retryLane, t));
    }
    function i0(e, t) {
      w1(e, t);
      var a = e.alternate;
      a && w1(a, t);
    }
    function b_(e) {
      if (e.tag === ke) {
        var t = ys, a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function __(e) {
      if (e.tag === ke) {
        var t = Bo(e), a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        i0(e, t);
      }
    }
    function x1(e) {
      var t = Tv(e);
      return t === null ? null : t.stateNode;
    }
    var b1 = function(e) {
      return null;
    };
    function D_(e) {
      return b1(e);
    }
    var _1 = function(e) {
      return !1;
    };
    function k_(e) {
      return _1(e);
    }
    var D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null;
    {
      var F1 = function(e, t, a) {
        var i = t[a], u = St(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = F1(e[i], t, a + 1), u);
      }, j1 = function(e, t) {
        return F1(e, t, 0);
      }, H1 = function(e, t, a, i) {
        var u = t[i], s = St(e) ? e.slice() : nt({}, e);
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
      }, P1 = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return H1(e, t, a, 0);
      }, V1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = St(e) ? e.slice() : nt({}, e);
        return s[u] = V1(e[u], t, a + 1, i), s;
      }, B1 = function(e, t, a) {
        return V1(e, t, 0, a);
      }, l0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      D1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = B1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, en);
        }
      }, k1 = function(e, t, a) {
        var i = l0(e, t);
        if (i !== null) {
          var u = j1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Qa(e, De);
          s !== null && pr(s, e, De, en);
        }
      }, O1 = function(e, t, a, i) {
        var u = l0(e, t);
        if (u !== null) {
          var s = P1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, en);
        }
      }, L1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, en);
      }, M1 = function(e, t) {
        e.pendingProps = j1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, De);
        a !== null && pr(a, e, De, en);
      }, N1 = function(e, t, a) {
        e.pendingProps = P1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, en);
      }, z1 = function(e) {
        var t = Qa(e, De);
        t !== null && pr(t, e, De, en);
      }, U1 = function(e) {
        b1 = e;
      }, A1 = function(e) {
        _1 = e;
      };
    }
    function O_(e) {
      var t = Aa(e);
      return t === null ? null : t.stateNode;
    }
    function L_(e) {
      return null;
    }
    function M_() {
      return mn;
    }
    function N_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return gd({
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
        findHostInstanceByFiber: O_,
        findFiberByHostInstance: t || L_,
        // React Refresh
        findHostInstancesForRefresh: s_,
        scheduleRefresh: u_,
        scheduleRoot: o_,
        setRefreshHandler: l_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: M_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: n0
      });
    }
    var $1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function u0(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = u0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = x1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Bp(e, t, null, null);
    }, zm.prototype.unmount = u0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        t1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Bp(null, e, null, null);
        }), $0(t);
      }
    };
    function z_(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Y1(e);
      var a = !1, i = !1, u = "", s = $1;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ja && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = R1(e, kh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Gd(p), new u0(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function U_(e) {
      e && sy(e);
    }
    zm.prototype.unstable_scheduleHydration = U_;
    function A_(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Y1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = $1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = T1(t, null, e, kh, i, s, f, p, v);
      if (Rh(y.current, e), Gd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Pw(y, b);
        }
      return new zm(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === ql || !P));
    }
    function $p(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === ql || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function Y1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ip(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var F_ = A.ReactCurrentOwner, I1;
    I1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = x1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = o0(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function o0(e) {
      return e ? e.nodeType === ri ? e.documentElement : e.firstChild : null;
    }
    function Q1() {
    }
    function j_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Nm(f);
            s.call(w);
          };
        }
        var f = T1(
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
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return Gd(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Nm(g);
            y.call(w);
          };
        }
        var g = R1(
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
        e._reactRootContainer = g, Rh(g.current, e);
        var b = e.nodeType === Un ? e.parentNode : e;
        return Gd(b), Du(function() {
          Bp(t, g, a, i);
        }), g;
      }
    }
    function H_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, u) {
      I1(a), H_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = j_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Nm(f);
            p.call(v);
          };
        }
        Bp(t, f, e, u);
      }
      return Nm(f);
    }
    var W1 = !1;
    function P_(e) {
      {
        W1 || (W1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = F_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : w_(e, "findDOMNode");
    }
    function V_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ip(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function B_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ip(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function $_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !os(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    var G1 = !1;
    function Y_(e) {
      if (G1 || (G1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ip(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = o0(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, $0(e);
          });
        }), !0;
      } else {
        {
          var u = o0(e), s = !!(u && ko(u)), f = e.nodeType === qr && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ho(x_), uy(b_), Wc(__), Yv(Pa), Iv(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ev(QR), cc(HS, Ab, Du);
    function I_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return T_(e, t, null, a);
    }
    function Q_(e, t, a, i) {
      return $_(e, t, a, i);
    }
    var s0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, yf, Th, sc, is, HS]
    };
    function W_(e, t) {
      return s0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t);
    }
    function G_(e, t, a) {
      return s0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), A_(e, t, a);
    }
    function q_(e) {
      return t1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var X_ = N_({
      findFiberByHostInstance: Us,
      bundleType: 1,
      version: n0,
      rendererPackageName: "react-dom"
    });
    if (!X_ && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var q1 = window.location.protocol;
      /^(https?|file):$/.test(q1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (q1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s0, Ka.createPortal = I_, Ka.createRoot = W_, Ka.findDOMNode = P_, Ka.flushSync = q_, Ka.hydrate = V_, Ka.hydrateRoot = G_, Ka.render = B_, Ka.unmountComponentAtNode = Y_, Ka.unstable_batchedUpdates = HS, Ka.unstable_renderSubtreeIntoContainer = Q_, Ka.version = n0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ka;
}
function cR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cR);
    } catch (ne) {
      console.error(ne);
    }
  }
}
process.env.NODE_ENV === "production" ? (cR(), v0.exports = iD()) : v0.exports = lD();
var uD = v0.exports, Hm, jm = uD;
if (process.env.NODE_ENV === "production")
  Hm = jm.createRoot, jm.hydrateRoot;
else {
  var iR = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Hm = function(ne, Z) {
    iR.usingClientEntryPoint = !0;
    try {
      return jm.createRoot(ne, Z);
    } finally {
      iR.usingClientEntryPoint = !1;
    }
  };
}
const oD = () => /* @__PURE__ */ Lu.jsx(Lu.Fragment, { children: /* @__PURE__ */ Lu.jsx("h1", { children: "A COMPONENT" }) }), sD = ({ title: ne, subtitle: Z }) => /* @__PURE__ */ Lu.jsxs(Lu.Fragment, { children: [
  /* @__PURE__ */ Lu.jsx("h1", { children: ne }),
  /* @__PURE__ */ Lu.jsx("span", { children: Z })
] }), cD = ["module-id"], lR = ["title"], uR = "liferay-a-simple-web-component", oR = "liferay-b-simple-web-component";
class fD extends HTMLElement {
  static get observedAttributes() {
    return cD;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = Hm(this)), this.renderComponent();
  }
  renderComponent() {
    this.root && this.root.render(
      /* @__PURE__ */ Lu.jsx(oD, {})
    );
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
class dD extends HTMLElement {
  static get observedAttributes() {
    return lR;
  }
  constructor() {
    super(), this.root = null;
  }
  connectedCallback() {
    this.root || (this.root = Hm(this)), this.renderComponent();
  }
  attributeChangedCallback(Z, A, Vt) {
    lR.includes(Z) && A !== Vt && this.renderComponent(Vt);
  }
  renderComponent() {
    if (this.root) {
      let Z = this.getAttribute("subtitle") || "", A = this.getAttribute("title") || "";
      this.root.render(
        /* @__PURE__ */ Lu.jsx(sD, { title: A, subtitle: Z })
      );
    }
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
}
customElements.get(uR) || customElements.define(uR, fD);
customElements.get(oR) || customElements.define(oR, dD);
