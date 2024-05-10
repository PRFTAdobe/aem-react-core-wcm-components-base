import ae, { createElement as _e, useRef as Kt, useEffect as Xt } from "react";
import { NavLink as Qt } from "react-router-dom";
import { ComponentMapping as qe } from "@adobe/aem-react-editable-components";
import Ge from "dompurify";
import ne, { Element as en, domToReact as tn } from "html-react-parser";
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function rn() {
  if (We)
    return V;
  We = 1;
  var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, m, g) {
    var y, h = {}, v = null, S = null;
    g !== void 0 && (v = "" + g), m.key !== void 0 && (v = "" + m.key), m.ref !== void 0 && (S = m.ref);
    for (y in m)
      a.call(m, y) && !s.hasOwnProperty(y) && (h[y] = m[y]);
    if (f && f.defaultProps)
      for (y in m = f.defaultProps, m)
        h[y] === void 0 && (h[y] = m[y]);
    return { $$typeof: t, type: f, key: v, ref: S, props: h, _owner: o.current };
  }
  return V.Fragment = r, V.jsx = u, V.jsxs = u, V;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function an() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, Z = "@@iterator";
    function q(n) {
      if (n === null || typeof n != "object")
        return null;
      var l = O && n[O] || n[Z];
      return typeof l == "function" ? l : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(n) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          c[d - 1] = arguments[d];
        vt("error", n, c);
      }
    }
    function vt(n, l, c) {
      {
        var d = L.ReactDebugCurrentFrame, b = d.getStackAddendum();
        b !== "" && (l += "%s", c = c.concat([b]));
        var E = c.map(function(x) {
          return String(x);
        });
        E.unshift("Warning: " + l), Function.prototype.apply.call(console[n], console, E);
      }
    }
    var _t = !1, yt = !1, xt = !1, bt = !1, Ct = !1, be;
    be = Symbol.for("react.module.reference");
    function Et(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === s || Ct || n === o || n === g || n === y || bt || n === S || _t || yt || xt || typeof n == "object" && n !== null && (n.$$typeof === v || n.$$typeof === h || n.$$typeof === u || n.$$typeof === f || n.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === be || n.getModuleId !== void 0));
    }
    function pt(n, l, c) {
      var d = n.displayName;
      if (d)
        return d;
      var b = l.displayName || l.name || "";
      return b !== "" ? c + "(" + b + ")" : c;
    }
    function Ce(n) {
      return n.displayName || "Context";
    }
    function P(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var l = n;
            return Ce(l) + ".Consumer";
          case u:
            var c = n;
            return Ce(c._context) + ".Provider";
          case m:
            return pt(n, n.render, "ForwardRef");
          case h:
            var d = n.displayName || null;
            return d !== null ? d : P(n.type) || "Memo";
          case v: {
            var b = n, E = b._payload, x = b._init;
            try {
              return P(x(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, H = 0, Ee, pe, je, Te, Me, Se, Re;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function jt() {
      {
        if (H === 0) {
          Ee = console.log, pe = console.info, je = console.warn, Te = console.error, Me = console.group, Se = console.groupCollapsed, Re = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        H++;
      }
    }
    function Tt() {
      {
        if (H--, H === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, n, {
              value: Ee
            }),
            info: F({}, n, {
              value: pe
            }),
            warn: F({}, n, {
              value: je
            }),
            error: F({}, n, {
              value: Te
            }),
            group: F({}, n, {
              value: Me
            }),
            groupCollapsed: F({}, n, {
              value: Se
            }),
            groupEnd: F({}, n, {
              value: Re
            })
          });
        }
        H < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = L.ReactCurrentDispatcher, se;
    function G(n, l, c) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (b) {
            var d = b.stack.trim().match(/\n( *(at )?)/);
            se = d && d[1] || "";
          }
        return `
` + se + n;
      }
    }
    var oe = !1, K;
    {
      var Mt = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Mt();
    }
    function we(n, l) {
      if (!n || oe)
        return "";
      {
        var c = K.get(n);
        if (c !== void 0)
          return c;
      }
      var d;
      oe = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ie.current, ie.current = null, jt();
      try {
        if (l) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch ($) {
              d = $;
            }
            Reflect.construct(n, [], x);
          } else {
            try {
              x.call();
            } catch ($) {
              d = $;
            }
            n.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            d = $;
          }
          n();
        }
      } catch ($) {
        if ($ && d && typeof $.stack == "string") {
          for (var _ = $.stack.split(`
`), R = d.stack.split(`
`), j = _.length - 1, T = R.length - 1; j >= 1 && T >= 0 && _[j] !== R[T]; )
            T--;
          for (; j >= 1 && T >= 0; j--, T--)
            if (_[j] !== R[T]) {
              if (j !== 1 || T !== 1)
                do
                  if (j--, T--, T < 0 || _[j] !== R[T]) {
                    var D = `
` + _[j].replace(" at new ", " at ");
                    return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, D), D;
                  }
                while (j >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ie.current = E, Tt(), Error.prepareStackTrace = b;
      }
      var U = n ? n.displayName || n.name : "", I = U ? G(U) : "";
      return typeof n == "function" && K.set(n, I), I;
    }
    function St(n, l, c) {
      return we(n, !1);
    }
    function Rt(n) {
      var l = n.prototype;
      return !!(l && l.isReactComponent);
    }
    function X(n, l, c) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return we(n, Rt(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case g:
          return G("Suspense");
        case y:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            return St(n.render);
          case h:
            return X(n.type, l, c);
          case v: {
            var d = n, b = d._payload, E = d._init;
            try {
              return X(E(b), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, De = {}, Ne = L.ReactDebugCurrentFrame;
    function Q(n) {
      if (n) {
        var l = n._owner, c = X(n.type, n._source, l ? l.type : null);
        Ne.setExtraStackFrame(c);
      } else
        Ne.setExtraStackFrame(null);
    }
    function $t(n, l, c, d, b) {
      {
        var E = Function.call.bind(B);
        for (var x in n)
          if (E(n, x)) {
            var _ = void 0;
            try {
              if (typeof n[x] != "function") {
                var R = Error((d || "React class") + ": " + c + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              _ = n[x](l, x, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              _ = j;
            }
            _ && !(_ instanceof Error) && (Q(b), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, x, typeof _), Q(null)), _ instanceof Error && !(_.message in De) && (De[_.message] = !0, Q(b), M("Failed %s type: %s", c, _.message), Q(null));
          }
      }
    }
    var wt = Array.isArray;
    function le(n) {
      return wt(n);
    }
    function Dt(n) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, c = l && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return c;
      }
    }
    function Nt(n) {
      try {
        return Pe(n), !1;
      } catch {
        return !0;
      }
    }
    function Pe(n) {
      return "" + n;
    }
    function Le(n) {
      if (Nt(n))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(n)), Pe(n);
    }
    var W = L.ReactCurrentOwner, Pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, ke, ce;
    ce = {};
    function Lt(n) {
      if (B.call(n, "ref")) {
        var l = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Ot(n) {
      if (B.call(n, "key")) {
        var l = Object.getOwnPropertyDescriptor(n, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function kt(n, l) {
      if (typeof n.ref == "string" && W.current && l && W.current.stateNode !== l) {
        var c = P(W.current.type);
        ce[c] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(W.current.type), n.ref), ce[c] = !0);
      }
    }
    function At(n, l) {
      {
        var c = function() {
          Oe || (Oe = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Ft(n, l) {
      {
        var c = function() {
          ke || (ke = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        c.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var It = function(n, l, c, d, b, E, x) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: l,
        ref: c,
        props: x,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Yt(n, l, c, d, b) {
      {
        var E, x = {}, _ = null, R = null;
        c !== void 0 && (Le(c), _ = "" + c), Ot(l) && (Le(l.key), _ = "" + l.key), Lt(l) && (R = l.ref, kt(l, b));
        for (E in l)
          B.call(l, E) && !Pt.hasOwnProperty(E) && (x[E] = l[E]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (E in j)
            x[E] === void 0 && (x[E] = j[E]);
        }
        if (_ || R) {
          var T = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          _ && At(x, T), R && Ft(x, T);
        }
        return It(n, _, R, b, d, W.current, x);
      }
    }
    var ue = L.ReactCurrentOwner, Ae = L.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var l = n._owner, c = X(n.type, n._source, l ? l.type : null);
        Ae.setExtraStackFrame(c);
      } else
        Ae.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Fe() {
      {
        if (ue.current) {
          var n = P(ue.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ut(n) {
      return "";
    }
    var Ie = {};
    function Ht(n) {
      {
        var l = Fe();
        if (!l) {
          var c = typeof n == "string" ? n : n.displayName || n.name;
          c && (l = `

Check the top-level render call using <` + c + ">.");
        }
        return l;
      }
    }
    function Ye(n, l) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var c = Ht(l);
        if (Ie[c])
          return;
        Ie[c] = !0;
        var d = "";
        n && n._owner && n._owner !== ue.current && (d = " It was passed a child from " + P(n._owner.type) + "."), Y(n), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, d), Y(null);
      }
    }
    function Ue(n, l) {
      {
        if (typeof n != "object")
          return;
        if (le(n))
          for (var c = 0; c < n.length; c++) {
            var d = n[c];
            fe(d) && Ye(d, l);
          }
        else if (fe(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var b = q(n);
          if (typeof b == "function" && b !== n.entries)
            for (var E = b.call(n), x; !(x = E.next()).done; )
              fe(x.value) && Ye(x.value, l);
        }
      }
    }
    function Bt(n) {
      {
        var l = n.type;
        if (l == null || typeof l == "string")
          return;
        var c;
        if (typeof l == "function")
          c = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === h))
          c = l.propTypes;
        else
          return;
        if (c) {
          var d = P(l);
          $t(c, n.props, "prop", d, n);
        } else if (l.PropTypes !== void 0 && !de) {
          de = !0;
          var b = P(l);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(n) {
      {
        for (var l = Object.keys(n.props), c = 0; c < l.length; c++) {
          var d = l[c];
          if (d !== "children" && d !== "key") {
            Y(n), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), Y(null);
            break;
          }
        }
        n.ref !== null && (Y(n), M("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var He = {};
    function Be(n, l, c, d, b, E) {
      {
        var x = Et(n);
        if (!x) {
          var _ = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Ut();
          R ? _ += R : _ += Fe();
          var j;
          n === null ? j = "null" : le(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (P(n.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, _);
        }
        var T = Yt(n, l, c, b, E);
        if (T == null)
          return T;
        if (x) {
          var D = l.children;
          if (D !== void 0)
            if (d)
              if (le(D)) {
                for (var U = 0; U < D.length; U++)
                  Ue(D[U], n);
                Object.freeze && Object.freeze(D);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(D, n);
        }
        if (B.call(l, "key")) {
          var I = P(n), $ = Object.keys(l).filter(function(Gt) {
            return Gt !== "key";
          }), me = $.length > 0 ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[I + me]) {
            var qt = $.length > 0 ? "{" + $.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, me, I, qt, I), He[I + me] = !0;
          }
        }
        return n === a ? Wt(T) : Bt(T), T;
      }
    }
    function Vt(n, l, c) {
      return Be(n, l, c, !0);
    }
    function zt(n, l, c) {
      return Be(n, l, c, !1);
    }
    var Jt = zt, Zt = Vt;
    z.Fragment = a, z.jsx = Jt, z.jsxs = Zt;
  }()), z;
}
process.env.NODE_ENV === "production" ? ge.exports = rn() : ge.exports = an();
var i = ge.exports, Ke = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", u = 0; u < arguments.length; u++) {
        var f = arguments[u];
        f && (s = o(s, a(f)));
      }
      return s;
    }
    function a(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return r.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var u = "";
      for (var f in s)
        t.call(s, f) && s[f] && (u = o(u, f));
      return u;
    }
    function o(s, u) {
      return u ? s ? s + " " + u : s + u : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ke);
var sn = Ke.exports;
const w = /* @__PURE__ */ nn(sn), A = (e) => {
  const { className: t, href: r, isRouted: a, baseCssClass: o, ...s } = e, u = (m = "cmp-link", g = "", y = !1) => {
    const h = [m];
    return y && h.push(`${m}--active`), g.length && h.push(g), h;
  };
  return r === void 0 || r.trim().length === 0 ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: u(o, t, !1).join(" "),
      href: "#",
      ...s
    }
  ) : /^https?:\/\//.test(r) || a === !1 ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: u(o, t, !1).join(" "),
      href: r,
      ...s
    }
  ) : /* @__PURE__ */ i.jsx(
    Qt,
    {
      className: ({ isActive: m }) => u(o, t, m).join(" "),
      to: r,
      ...s
    }
  );
}, on = "Please configure the component", N = ({
  componentTitle: e,
  emptyTextAppend: t,
  classAppend: r
}) => {
  const s = (e && e.length > 0 ? `${e} - ` : "") + (t ?? on);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: w("cq-placeholder", {
        [r]: r !== null
      }),
      children: s
    }
  );
}, Xe = (e) => e.items === null || e.items.length === 0, Qe = ({ title: e }) => /* @__PURE__ */ i.jsx("span", { itemProp: "name", children: e }), ln = ({
  baseCssClass: e,
  link: t,
  routed: r,
  title: a
}) => {
  const { url: o, ...s } = t;
  return /* @__PURE__ */ i.jsx(
    A,
    {
      className: `${e}__item-link`,
      href: o,
      isRouted: r ?? !0,
      itemProp: "item",
      ...s,
      children: /* @__PURE__ */ i.jsx(Qe, { title: a })
    }
  );
}, cn = (e) => {
  const t = e.index ? e.index.toString(2) : "noindex";
  return /* @__PURE__ */ i.jsxs(
    "li",
    {
      className: w(`${e.baseCssClass}__item`, {
        [`${e.baseCssClass}__item--active`]: e.active
      }),
      itemProp: "itemListElement",
      itemScope: !0,
      itemType: "http://schema.org/ListItem",
      children: [
        !e.active && /* @__PURE__ */ i.jsx(ln, { ...e }),
        e.active && /* @__PURE__ */ i.jsx(Qe, { title: e.title }),
        /* @__PURE__ */ i.jsx("meta", { content: t, itemProp: "position" })
      ]
    }
  );
}, Xn = ({
  ariaLabel: e,
  hidePlaceHolder: t,
  id: r,
  isInEditor: a,
  items: o,
  baseCssClass: s = "cmp-breadcrumb"
}) => Xe({ items: o }) ? a && !t ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Breadcrumb" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e || "BreadCrumb",
    className: s,
    id: r,
    children: /* @__PURE__ */ i.jsx(
      "ol",
      {
        className: `${s}__list`,
        itemScope: !0,
        itemType: "http://schema.org/BreadcrumbList",
        children: o.map((u, f) => /* @__PURE__ */ _e(
          cn,
          {
            ...u,
            baseCssClass: s,
            index: f,
            key: `crumbitem-${f}`
          }
        ))
      }
    )
  }
), et = (e) => typeof e > "u" || e === null || (e == null ? void 0 : e.length) === 0, ze = ({ baseCssClass: e, icon: t, text: r }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  t && /* @__PURE__ */ i.jsx(
    "span",
    {
      className: w(
        `${e}__icon`,
        `${e}__icon--${t}`
      )
    }
  ),
  /* @__PURE__ */ i.jsx("span", { className: `${e}__text`, children: r })
] }), tt = ({
  ariaLabel: e,
  buttonLink: t,
  className: r,
  hidePlaceHolder: a,
  id: o,
  icon: s,
  isInEditor: u,
  text: f,
  handleOnClick: m,
  baseCssClass: g = "cmp-button",
  type: y = "button"
}) => {
  const h = (S) => {
    m && m(S);
  }, v = !!(t != null && t.url);
  return et(f) ? u && !a ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Button" }) : null : v ? /* @__PURE__ */ i.jsx(
    A,
    {
      "aria-label": e,
      className: w(g, r),
      href: t == null ? void 0 : t.url,
      id: o,
      onClick: h,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: g,
          icon: s,
          isInEditor: u,
          text: f
        }
      )
    }
  ) : /* @__PURE__ */ i.jsx(
    "button",
    {
      className: w(g, r),
      id: o,
      onClick: h,
      type: y,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: g,
          icon: s,
          isInEditor: u,
          text: f
        }
      )
    }
  );
}, nt = ({
  url: e,
  handleOnClick: t
}) => (typeof e > "u" || e === null || (e == null ? void 0 : e.length) === 0) && (typeof t > "u" || t === null), un = ({ url: e }) => e && e.length > 0 ? e : "#", he = (e, t, r, a) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: w(
      `${a}__property`,
      `${a}__property--${r}`
    ),
    children: [
      /* @__PURE__ */ i.jsx("dt", { className: `${a}__property-label`, children: e }),
      /* @__PURE__ */ i.jsx("dd", { className: `${a}__property-content`, children: t })
    ]
  }
), dn = ({
  baseCssClass: e,
  title: t,
  url: r,
  handleOnClick: a
}) => {
  const o = (s) => {
    a && a(s);
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !!r || !!a && /* @__PURE__ */ i.jsx(
      "a",
      {
        className: `${e}__title-link`,
        href: un({ url: r }),
        onClick: o,
        children: t
      }
    ),
    !r && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      " ",
      t,
      " "
    ] })
  ] });
}, fn = ({
  handleOnClick: e,
  url: t,
  baseCssClass: r,
  title: a,
  titleType: o = "h3"
}) => ae.createElement(
  `${o}`,
  {
    className: `${r}__title`
  },
  /* @__PURE__ */ i.jsx(
    dn,
    {
      baseCssClass: r,
      handleOnClick: e,
      title: a,
      url: t
    }
  )
), mn = ({
  baseCssClass: e,
  displayFilename: t,
  displayFormat: r,
  displaySize: a,
  filename: o,
  format: s,
  size: u
}) => /* @__PURE__ */ i.jsxs("dl", { className: `${e}__properties`, children: [
  t && he("Filename", o, "filename", e),
  a && he("Size", u, "size", e),
  r && he("Format", s, "format", e)
] }), hn = ({
  baseCssClass: e,
  description: t
}) => {
  const r = String(t) || "";
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${e}__description`,
      dangerouslySetInnerHTML: { __html: r }
    }
  );
}, gn = ({
  actionText: e,
  baseCssClass: t,
  cqType: r,
  componentMapping: a,
  handleOnClick: o,
  isInEditor: s,
  url: u
}) => {
  const f = a ?? qe;
  let m = tt;
  r != null && r.endsWith("/download") && (m = f.get(
    r.replace("/download", "/button")
  ));
  const g = (y) => {
    o && o(y);
  };
  return /* @__PURE__ */ i.jsx(
    m,
    {
      buttonLink: { url: u ?? "#" },
      className: `${t}__action`,
      handleOnClick: g,
      isInEditor: s,
      text: e
    }
  );
}, Qn = ({
  actionText: e,
  componentMapping: t,
  cqType: r,
  description: a,
  filename: o,
  format: s,
  handleOnClick: u,
  hidePlaceHolder: f,
  id: m,
  isInEditor: g,
  size: y,
  title: h,
  titleType: v,
  url: S,
  baseCssClass: O = "cmp-download",
  displayFilename: Z = !1,
  displayFormat: q = !1,
  displaySize: L = !1
}) => {
  const M = Z || L || q;
  return nt({ handleOnClick: u, url: S }) ? g && !f ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Download" }) : null : /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: w(O, { "cq-dd-file": g }),
      id: m,
      children: [
        !!h && /* @__PURE__ */ i.jsx(
          fn,
          {
            baseCssClass: O,
            handleOnClick: u,
            title: h,
            titleType: v,
            url: S
          }
        ),
        !!a && /* @__PURE__ */ i.jsx(hn, { baseCssClass: O, description: a }),
        M && /* @__PURE__ */ i.jsx(
          mn,
          {
            baseCssClass: O,
            displayFilename: Z,
            displayFormat: q,
            displaySize: L,
            filename: o,
            format: s,
            size: y
          }
        ),
        /* @__PURE__ */ i.jsx(
          gn,
          {
            actionText: e,
            baseCssClass: O,
            componentMapping: t,
            cqType: r,
            handleOnClick: u,
            isInEditor: g,
            url: S
          }
        )
      ]
    }
  );
}, rt = (e) => {
  var r, a;
  let t = !1;
  return e.type === "URL" ? t = typeof e.url < "u" && typeof ((r = e.result) == null ? void 0 : r.processor) < "u" : e.type === "EMBEDDABLE" ? t = typeof ((a = e.youTubeProps) == null ? void 0 : a.youtubeVideoId) < "u" : e.type === "HTML" && (t = !!e.html), !e || !t;
}, vn = (e) => {
  var r;
  let t;
  if (e === "Twitter" ? t = "//platform.twitter.com/widgets.js" : e === "Pinterest" && (t = "//assets.pinterest.com/js/pinit.js"), t) {
    let a = document.querySelector(`script[src="${t}"]`);
    a ? a.dataset.loaded === "true" ? typeof ((r = window.PinUtils) == null ? void 0 : r.build) == "function" && window.PinUtils.build() : a.addEventListener("load", () => {
      var o;
      typeof ((o = window.PinUtils) == null ? void 0 : o.build) == "function" && window.PinUtils.build();
    }) : _n(t).then(() => {
      var o;
      typeof ((o = window.PinUtils) == null ? void 0 : o.build) == "function" && window.PinUtils.build(), a = document.querySelector(`script[src="${t}"]`), a.dataset.loaded = "true";
    }).catch((o) => {
      console.error(o);
    });
  }
}, _n = (e, t = !0, r = "text/javascript") => new Promise((a, o) => {
  try {
    const s = document.createElement("script");
    s.type = r, s.async = t, s.src = e, s.addEventListener("load", () => {
      a({ status: !0 });
    }), s.addEventListener("error", () => {
      o({
        message: "Failed to load the script ＄{FILE_URL}",
        status: !1
      });
    }), document.body.appendChild(s);
  } catch (s) {
    o(s);
  }
}), yn = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response) {
    const { response: r } = e.options;
    return r.type;
  }
}, xn = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response)
    return e.options.response.url;
}, bn = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response)
    return e.options.response.title;
}, ee = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response) {
    const { response: r } = e.options;
    return r.html;
  }
}, at = (e) => Ge.sanitize(e), Cn = (e) => {
  const t = e == null ? void 0 : e.youtubeVideoId, r = e == null ? void 0 : e.youtubeAutoPlay, a = e == null ? void 0 : e.youtubeLoop, o = e == null ? void 0 : e.youtubeMute, s = e == null ? void 0 : e.youtubePlaysInline, u = e == null ? void 0 : e.youtubeRel, f = `https://www.youtube.com/embed/${t}`, m = {
    autoplay: `${+r}`,
    loop: `${+a}`,
    mute: `${+o}`,
    playlist: `${t}`,
    playsinline: `${+s}`,
    rel: `${+u}`
  }, g = new URLSearchParams(m).toString();
  return `${f}?${g}`;
}, En = (e) => {
  var t, r, a, o;
  if (e.type === "HTML")
    return ne(at(e.html));
  if (e.type === "EMBEDDABLE")
    return ((t = e.youTubeProps) == null ? void 0 : t.layout) === "responsive" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `${e.baseCssClass}__embeddable-wrapper`,
        style: {
          paddingBottom: ((r = e.youTubeProps) == null ? void 0 : r.layout) === "responsive" ? `${(a = e.youTubeProps) == null ? void 0 : a.youtubeAspectRatio}%` : 0
        },
        children: /* @__PURE__ */ i.jsx(Je, { ...e })
      }
    ) : /* @__PURE__ */ i.jsx(Je, { ...e });
  if (e.type === "URL")
    return ((o = e.result) == null ? void 0 : o.processor) === "pinterest" ? /* @__PURE__ */ i.jsx("a", { "data-pin-build": "doBuild", "data-pin-do": "embedPin", href: e.url, children: e.url }) : /* @__PURE__ */ i.jsx(jn, { ...e });
}, Je = (e) => {
  var t, r, a, o, s;
  return /* @__PURE__ */ i.jsx(
    "iframe",
    {
      allow: (t = e.youTubeProps) != null && t.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
      allowFullScreen: !0,
      "aria-label": "YouTube Video",
      className: `${e.baseCssClass}__embeddable-iframe`,
      frameBorder: 0,
      height: ((r = e.youTubeProps) == null ? void 0 : r.layout) === "responsive" ? "100%" : (a = e.youTubeProps) == null ? void 0 : a.youtubeHeight,
      src: Cn(e.youTubeProps),
      title: "YouTube Video",
      type: "text/html",
      width: ((o = e.youTubeProps) == null ? void 0 : o.layout) === "responsive" ? "100%" : (s = e.youTubeProps) == null ? void 0 : s.youtubeWidth
    }
  );
}, pn = (e) => {
  var t, r, a, o, s, u, f, m, g, y, h;
  return (t = e == null ? void 0 : e.options) != null && t.response ? /* @__PURE__ */ i.jsx(
    "img",
    {
      alt: (a = (r = e == null ? void 0 : e.options) == null ? void 0 : r.response) == null ? void 0 : a.title,
      height: (s = (o = e == null ? void 0 : e.options) == null ? void 0 : o.response) == null ? void 0 : s.height,
      src: (f = (u = e == null ? void 0 : e.options) == null ? void 0 : u.response) == null ? void 0 : f.url,
      title: (g = (m = e == null ? void 0 : e.options) == null ? void 0 : m.response) == null ? void 0 : g.title,
      width: (h = (y = e == null ? void 0 : e.options) == null ? void 0 : y.response) == null ? void 0 : h.width
    }
  ) : null;
}, jn = (e) => {
  const t = yn(e.result);
  if (t === "photo")
    return /* @__PURE__ */ i.jsx(pn, { ...e.result });
  if (t === "link")
    return /* @__PURE__ */ i.jsx("a", { href: xn(e.result), children: bn(e.result) });
  if (t === "video")
    return ee(e.result) ? ne(ee(e.result)) : null;
  if (t === "rich")
    return ee(e.result) ? ne(at(ee(e.result))) : null;
}, er = (e) => {
  var s, u, f, m, g, y;
  const t = e.baseCssClass ?? "cmp-embed", r = { ...e, baseCssClass: t }, a = Kt(null);
  let o;
  return Xt(() => {
    var h;
    if (a.current) {
      const v = (h = a.current.dataset) == null ? void 0 : h.provider;
      v && vn(v);
    }
  }, []), ((s = e.result) == null ? void 0 : s.processor) === "oembed" && ((f = (u = e.result) == null ? void 0 : u.options) != null && f.provider) && (o = (g = (m = e.result) == null ? void 0 : m.options) == null ? void 0 : g.provider), ((y = e.result) == null ? void 0 : y.processor) === "pinterest" && (o = "Pinterest"), rt(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Embed" }) : null : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: w(e.baseCssClass ?? "cmp-embed", {
        "cq-dd-embed": e.isInEditor ?? !1
      }),
      id: e.id,
      ref: a,
      ...o ? { "data-provider": o } : {},
      children: /* @__PURE__ */ i.jsx(En, { ...r })
    }
  );
}, it = (e) => !e || e.trim().length === 0, Tn = (e) => {
  let t = "px";
  return /^(\d+|(\.\d+))(\.\d+)?%$/.test(e) && (t = ""), {
    "--asset-max-inline-size": `${e}${t}`
  };
}, Ze = (e) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx(
    "img",
    {
      alt: e.alt,
      className: w(`${e.baseCssClass}__image`, {
        "cmp-asset": typeof e.width < "u"
      }),
      src: e.src
    }
  ),
  !!e.title && /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__title`, itemProp: "caption", children: e.title }),
  e.displayPopupTitle && !!e.title && /* @__PURE__ */ i.jsx("meta", { content: e.title, itemProp: "caption" })
] }), Mn = ({
  alt: e,
  baseCssClass: t,
  isInEditor: r,
  link: a,
  routed: o,
  src: s,
  title: u,
  width: f
}) => a && a.trim().length > 0 ? /* @__PURE__ */ i.jsx(
  A,
  {
    className: `${t}__link`,
    href: a,
    isRouted: o,
    children: /* @__PURE__ */ i.jsx(
      Ze,
      {
        alt: e,
        baseCssClass: t,
        isInEditor: r,
        link: a,
        routed: o,
        src: s,
        title: u,
        width: f
      }
    )
  }
) : /* @__PURE__ */ i.jsx(
  Ze,
  {
    alt: e,
    baseCssClass: t,
    isInEditor: r,
    link: a,
    routed: o,
    src: s,
    title: u,
    width: f
  }
), Sn = ({
  alt: e,
  baseCssClass: t = "cmp-image",
  hidePlaceHolder: r,
  id: a,
  isInEditor: o = !1,
  link: s,
  routed: u,
  src: f,
  title: m,
  width: g
}) => {
  const y = {
    className: w(t, { "cq-dd-image": o }),
    id: a
  };
  return g && (y.style = Tn(g)), it(f) ? o && !r ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Image" }) : null : /* @__PURE__ */ i.jsx("div", { ...y, children: /* @__PURE__ */ i.jsx(
    Mn,
    {
      alt: e,
      baseCssClass: t,
      isInEditor: o,
      link: s,
      routed: u,
      src: f,
      title: m,
      width: g
    }
  ) });
}, st = (e) => {
  var t;
  return e.items === null || ((t = e.items) == null ? void 0 : t.length) === 0;
}, Rn = (e) => /* @__PURE__ */ i.jsxs(
  "li",
  {
    className: w(
      `${e.baseCssClass}__item`,
      `${e.baseCssClass}__item--level-${e.level}`,
      {
        [`${e.baseCssClass}__item--active`]: e.active
      }
    ),
    children: [
      /* @__PURE__ */ i.jsx(
        A,
        {
          "aria-current": e.active && "page",
          className: `${e.baseCssClass}__item-link`,
          href: e.link.url,
          isRouted: e.routed,
          title: e.title,
          children: e.title
        }
      ),
      !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx(ye, { ...e, baseCssClass: e.baseCssClass })
    ]
  }
), ye = (e) => /* @__PURE__ */ i.jsx(i.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, r) => /* @__PURE__ */ i.jsx(
  Rn,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: r,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  },
  `${e.baseCssClass}__item-${r}`
)) }) }), tr = (e) => st(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Navigation" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-navigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    role: "navigation",
    children: /* @__PURE__ */ i.jsx(
      ye,
      {
        active: !1,
        children: e.items,
        lastModified: 0,
        level: 0,
        link: {
          url: ""
        },
        path: "",
        routed: e.routed,
        title: "",
        baseCssClass: e.baseCssClass ?? "cmp-navigation"
      }
    )
  }
), ot = (e) => {
  var t;
  return e.items === null || ((t = e.items) == null ? void 0 : t.length) === 0;
}, $n = (e) => e.level > 0 ? /* @__PURE__ */ i.jsx(
  A,
  {
    className: `${e.baseCssClass}__item-link`,
    href: e.link.url,
    hrefLang: e.language,
    isRouted: e.routed,
    lang: e.language,
    rel: "alternate",
    title: e.title,
    children: e.title
  }
) : /* @__PURE__ */ i.jsx(
  "span",
  {
    className: `${e.baseCssClass}__item-title`,
    lang: e.language,
    children: e.title
  }
), wn = (e) => /* @__PURE__ */ i.jsxs(
  "li",
  {
    className: w(
      `${e.baseCssClass}__item`,
      `${e.baseCssClass}__item--level-${e.level}`,
      `${e.baseCssClass}__item--countrycode-${e.country}`,
      `${e.baseCssClass}__item--langcode-${e.language}`,
      {
        [`${e.baseCssClass}__item--active`]: e.active
      }
    ),
    children: [
      /* @__PURE__ */ i.jsx($n, { ...e }),
      !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx(ye, { ...e })
    ]
  }
), Dn = (e) => /* @__PURE__ */ i.jsx(i.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, r) => /* @__PURE__ */ _e(
  wn,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: r,
    key: `${e.baseCssClass}__item-${r}`,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  }
)) }) }), nr = (e) => ot(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Language Navigation" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-languagenavigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    role: "navigation",
    children: /* @__PURE__ */ i.jsx(
      Dn,
      {
        active: !1,
        children: e.items,
        country: "",
        language: "",
        lastModified: 0,
        level: 0,
        link: {
          url: ""
        },
        locale: "",
        path: "",
        routed: e.routed,
        title: "",
        baseCssClass: e.baseCssClass ?? "cmp-languagenavigation"
      }
    )
  }
);
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */
var ve = {}, J = {}, te = "en", xe = {
  MMMM: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  dddd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  A: ["AM", "PM"]
}, lt = {
  YYYY: function(e) {
    return ("000" + e.getFullYear()).slice(-4);
  },
  YY: function(e) {
    return ("0" + e.getFullYear()).slice(-2);
  },
  Y: function(e) {
    return "" + e.getFullYear();
  },
  MMMM: function(e) {
    return this.res.MMMM[e.getMonth()];
  },
  MMM: function(e) {
    return this.res.MMM[e.getMonth()];
  },
  MM: function(e) {
    return ("0" + (e.getMonth() + 1)).slice(-2);
  },
  M: function(e) {
    return "" + (e.getMonth() + 1);
  },
  DD: function(e) {
    return ("0" + e.getDate()).slice(-2);
  },
  D: function(e) {
    return "" + e.getDate();
  },
  HH: function(e) {
    return ("0" + e.getHours()).slice(-2);
  },
  H: function(e) {
    return "" + e.getHours();
  },
  A: function(e) {
    return this.res.A[e.getHours() > 11 | 0];
  },
  hh: function(e) {
    return ("0" + (e.getHours() % 12 || 12)).slice(-2);
  },
  h: function(e) {
    return "" + (e.getHours() % 12 || 12);
  },
  mm: function(e) {
    return ("0" + e.getMinutes()).slice(-2);
  },
  m: function(e) {
    return "" + e.getMinutes();
  },
  ss: function(e) {
    return ("0" + e.getSeconds()).slice(-2);
  },
  s: function(e) {
    return "" + e.getSeconds();
  },
  SSS: function(e) {
    return ("00" + e.getMilliseconds()).slice(-3);
  },
  SS: function(e) {
    return ("0" + (e.getMilliseconds() / 10 | 0)).slice(-2);
  },
  S: function(e) {
    return "" + (e.getMilliseconds() / 100 | 0);
  },
  dddd: function(e) {
    return this.res.dddd[e.getDay()];
  },
  ddd: function(e) {
    return this.res.ddd[e.getDay()];
  },
  dd: function(e) {
    return this.res.dd[e.getDay()];
  },
  Z: function(e) {
    var t = e.getTimezoneOffset() / 0.6 | 0;
    return (t > 0 ? "-" : "+") + ("000" + Math.abs(t - (t % 100 * 0.4 | 0))).slice(-4);
  },
  ZZ: function(e) {
    var t = e.getTimezoneOffset(), r = Math.abs(t);
    return (t > 0 ? "-" : "+") + ("0" + (r / 60 | 0)).slice(-2) + ":" + ("0" + r % 60).slice(-2);
  },
  post: function(e) {
    return e;
  },
  res: xe
}, ct = {
  YYYY: function(e) {
    return this.exec(/^\d{4}/, e);
  },
  Y: function(e) {
    return this.exec(/^\d{1,4}/, e);
  },
  MMMM: function(e) {
    var t = this.find(this.res.MMMM, e);
    return t.value++, t;
  },
  MMM: function(e) {
    var t = this.find(this.res.MMM, e);
    return t.value++, t;
  },
  MM: function(e) {
    return this.exec(/^\d\d/, e);
  },
  M: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  DD: function(e) {
    return this.exec(/^\d\d/, e);
  },
  D: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  HH: function(e) {
    return this.exec(/^\d\d/, e);
  },
  H: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  A: function(e) {
    return this.find(this.res.A, e);
  },
  hh: function(e) {
    return this.exec(/^\d\d/, e);
  },
  h: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  mm: function(e) {
    return this.exec(/^\d\d/, e);
  },
  m: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  ss: function(e) {
    return this.exec(/^\d\d/, e);
  },
  s: function(e) {
    return this.exec(/^\d\d?/, e);
  },
  SSS: function(e) {
    return this.exec(/^\d{1,3}/, e);
  },
  SS: function(e) {
    var t = this.exec(/^\d\d?/, e);
    return t.value *= 10, t;
  },
  S: function(e) {
    var t = this.exec(/^\d/, e);
    return t.value *= 100, t;
  },
  Z: function(e) {
    var t = this.exec(/^[+-]\d{2}[0-5]\d/, e);
    return t.value = (t.value / 100 | 0) * -60 - t.value % 100, t;
  },
  ZZ: function(e) {
    var t = /^([+-])(\d{2}):([0-5]\d)/.exec(e) || ["", "", "", ""];
    return { value: 0 - ((t[1] + t[2] | 0) * 60 + (t[1] + t[3] | 0)), length: t[0].length };
  },
  h12: function(e, t) {
    return (e === 12 ? 0 : e) + t * 12;
  },
  exec: function(e, t) {
    var r = (e.exec(t) || [""])[0];
    return { value: r | 0, length: r.length };
  },
  find: function(e, t) {
    for (var r = -1, a = 0, o = 0, s = e.length, u; o < s; o++)
      u = e[o], !t.indexOf(u) && u.length > a && (r = o, a = u.length);
    return { value: r, length: a };
  },
  pre: function(e) {
    return e;
  },
  res: xe
}, k = function(e, t, r, a) {
  var o = {}, s;
  for (s in e)
    o[s] = e[s];
  for (s in t || {})
    !!r ^ !!o[s] || (o[s] = t[s]);
  return a && (o.res = a), o;
}, p = {
  _formatter: lt,
  _parser: ct
}, re, C;
p.compile = function(e) {
  return [e].concat(e.match(/\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g) || []);
};
p.format = function(e, t, r) {
  for (var a = this || C, o = typeof t == "string" ? a.compile(t) : t, s = a._formatter, u = function() {
    if (r) {
      var v = new Date(e.getTime());
      return v.getFullYear = v.getUTCFullYear, v.getMonth = v.getUTCMonth, v.getDate = v.getUTCDate, v.getHours = v.getUTCHours, v.getMinutes = v.getUTCMinutes, v.getSeconds = v.getUTCSeconds, v.getMilliseconds = v.getUTCMilliseconds, v.getDay = v.getUTCDay, v.getTimezoneOffset = function() {
        return 0;
      }, v;
    }
    return e;
  }(), f = /^\[(.*)\]$/, m = "", g = 1, y = o.length, h; g < y; g++)
    h = o[g], m += s[h] ? s.post(s[h](u, o[0])) : h.replace(f, "$1");
  return m;
};
p.preparse = function(e, t) {
  var r = this || C, a = typeof t == "string" ? r.compile(t) : t, o = r._parser, s = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, u = " ", f = /^\[(.*)\]$/, m = "...";
  e = o.pre(e);
  for (var g = 1, y = a.length, h, v, S; g < y; g++)
    if (h = a[g], v = e.slice(s._index), o[h]) {
      if (S = o[h](v, a[0]), !S.length)
        break;
      s[S.token || h.charAt(0)] = S.value, s._index += S.length, s._match++;
    } else if (h === v.charAt(0) || h === u)
      s._index++;
    else if (f.test(h) && !v.indexOf(h.replace(f, "$1")))
      s._index += h.length - 2;
    else if (h === m) {
      s._index = e.length;
      break;
    } else
      break;
  return s.H = s.H || o.h12(s.h, s.A), s._length = e.length, s;
};
p.parse = function(e, t, r) {
  var a = this || C, o = typeof t == "string" ? a.compile(t) : t, s = a.preparse(e, o);
  return a.isValid(s) ? (s.M -= s.Y < 100 ? 22801 : 1, r || ~a._parser.find(o, "ZZ").value ? new Date(Date.UTC(s.Y, s.M, s.D, s.H, s.m + s.Z, s.s, s.S)) : new Date(s.Y, s.M, s.D, s.H, s.m, s.s, s.S)) : /* @__PURE__ */ new Date(NaN);
};
p.isValid = function(e, t) {
  var r = this || C, a = typeof e == "string" ? r.preparse(e, t) : e, o = [31, 28 + r.isLeapYear(a.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a.M - 1];
  return !(a._index < 1 || a._length < 1 || a._index - a._length || a._match < 1 || a.Y < 1 || a.Y > 9999 || a.M < 1 || a.M > 12 || a.D < 1 || a.D > o || a.H < 0 || a.H > 23 || a.m < 0 || a.m > 59 || a.s < 0 || a.s > 59 || a.S < 0 || a.S > 999 || a.Z < -840 || a.Z > 720);
};
p.transform = function(e, t, r, a) {
  const o = this || C;
  return o.format(o.parse(e, t), r, a);
};
p.addYears = function(e, t, r) {
  return (this || C).addMonths(e, t * 12, r);
};
p.addMonths = function(e, t, r) {
  var a = new Date(e.getTime());
  if (r) {
    if (a.setUTCMonth(a.getUTCMonth() + t), a.getUTCDate() < e.getUTCDate())
      return (this || C).addDays(a, -a.getUTCDate(), r);
  } else if (a.setMonth(a.getMonth() + t), a.getDate() < e.getDate())
    return (this || C).addDays(a, -a.getDate(), r);
  return a;
};
p.addDays = function(e, t, r) {
  return (this || C).addHours(e, t * 24, r);
};
p.addHours = function(e, t, r) {
  return (this || C).addMinutes(e, t * 60, r);
};
p.addMinutes = function(e, t, r) {
  return (this || C).addSeconds(e, t * 60, r);
};
p.addSeconds = function(e, t, r) {
  return (this || C).addMilliseconds(e, t * 1e3, r);
};
p.addMilliseconds = function(e, t, r) {
  var a = new Date(e.getTime());
  return r ? a.setUTCMilliseconds(a.getUTCMilliseconds() + t) : a.setMilliseconds(a.getMilliseconds() + t), a;
};
p.subtract = function(e, t) {
  var r = e.getTime() - t.getTime();
  return {
    toMilliseconds: function() {
      return r;
    },
    toSeconds: function() {
      return r / 1e3;
    },
    toMinutes: function() {
      return r / 6e4;
    },
    toHours: function() {
      return r / 36e5;
    },
    toDays: function() {
      return r / 864e5;
    }
  };
};
p.isLeapYear = function(e) {
  return !(e % 4) && !!(e % 100) || !(e % 400);
};
p.isSameDay = function(e, t) {
  return e.toDateString() === t.toDateString();
};
p.locale = function(e, t) {
  ve[e] || (ve[e] = t);
};
p.plugin = function(e, t) {
  J[e] || (J[e] = t);
};
re = k(p);
C = k(p);
C.locale = function(e) {
  var t = typeof e == "function" ? e : C.locale[e];
  if (!t)
    return te;
  te = t(p);
  var r = ve[te] || {}, a = k(xe, r.res, !0), o = k(lt, r.formatter, !0, a), s = k(ct, r.parser, !0, a);
  C._formatter = re._formatter = o, C._parser = re._parser = s;
  for (var u in J)
    C.extend(J[u]);
  return te;
};
C.extend = function(e) {
  var t = k(C._parser.res, e.res), r = e.extender || {};
  C._formatter = k(C._formatter, e.formatter, !1, t), C._parser = k(C._parser, e.parser, !1, t);
  for (var a in r)
    C[a] || (C[a] = r[a]);
};
C.plugin = function(e) {
  var t = typeof e == "function" ? e : C.plugin[e];
  t && C.extend(J[t(p, re)] || {});
};
var Nn = C;
const ut = (e) => e === null || (e == null ? void 0 : e.trim().length) === 0, dt = (e) => e.nested ? "-" : "__", Pn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    A,
    {
      className: `${e.baseCssClass}${dt(e)}link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: e.text
    }
  );
}, Ln = (e) => e.linkDisabled ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e.text }) : /* @__PURE__ */ i.jsx(Pn, { ...e }), On = (e) => ut(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Title" }) : null : /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-title", children: ae.createElement(
  e.type ?? "h3",
  {
    className: `${e.baseCssClass ?? "cmp-title"}${dt(e)}text`
  },
  /* @__PURE__ */ i.jsx(Ln, { ...e })
) }), ft = (e) => !e.imagePath && !e.description && e.actions.length === 0, kn = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__image`, children: /* @__PURE__ */ i.jsx(
  Sn,
  {
    alt: e.imageAlt,
    isInEditor: e.isInEditor,
    src: e.imagePath
  }
) }), An = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__pretitle`, children: e.pretitle }), Fn = (e) => /* @__PURE__ */ i.jsx(
  On,
  {
    baseCssClass: `${e.baseCssClass}__title`,
    isInEditor: e.isInEditor,
    link: e.link,
    linkDisabled: !1,
    nested: !0,
    routed: e.routed,
    text: e.title,
    type: e.titleType ?? "h2"
  }
), In = (e) => {
  const t = e.description;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${e.baseCssClass}__description`,
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}, Yn = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__action-container`, children: e.actions.map((t, r) => {
  var s;
  const a = e.componentMapping ?? qe;
  let o = tt;
  return (s = e.cqType) != null && s.endsWith("/teaser") && (o = a.get(
    e.cqType.replace("/teaser", "/button")
  )), /* @__PURE__ */ i.jsx(
    o,
    {
      buttonLink: t.link,
      className: `${e.baseCssClass}__action-link`,
      isInEditor: e.isInEditor,
      routed: e.routed,
      text: e.title
    },
    `link-${r}`
  );
}) }), Un = (e) => {
  const t = {
    ...e,
    baseCssClass: e.baseCssClass ?? "cmp-teaser"
  };
  return ft(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Teaser" }) : null : /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: w(t.baseCssClass, {
        "cq-dd-image": t.isInEditor
      }),
      id: e.id,
      children: [
        e.imagePath && /* @__PURE__ */ i.jsx(kn, { ...t }),
        /* @__PURE__ */ i.jsxs("div", { className: `${t.baseCssClass}__content`, children: [
          e.pretitle && /* @__PURE__ */ i.jsx(An, { ...t }),
          e.title && /* @__PURE__ */ i.jsx(Fn, { ...t }),
          e.description && /* @__PURE__ */ i.jsx(In, { ...t }),
          e.actions.length > 0 && t.actionsEnabled && /* @__PURE__ */ i.jsx(Yn, { ...t })
        ] })
      ]
    }
  );
}, mt = (e) => e === null || e.length === 0, Hn = (e) => {
  const t = e.lastModifiedFormatted ? e.lastModifiedFormatted : e.lastModified && e.dateFormatString ? Nn.format(
    new Date(e.lastModified),
    e.dateFormatString.toUpperCase()
  ) : "";
  return /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-date`, children: t });
}, ht = (e) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-title`, children: e.title }),
  e.showModificationDate && /* @__PURE__ */ i.jsx(Hn, { ...e })
] }), Bn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    A,
    {
      className: `${e.baseCssClass}__item-link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: /* @__PURE__ */ i.jsx(ht, { ...e })
    }
  );
}, Wn = (e) => /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-description`, children: e.description }), Vn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx("li", { className: `${e.baseCssClass}__item`, children: /* @__PURE__ */ i.jsxs("article", { children: [
    e.linkItems && !!((t = e.link) != null && t.url) && /* @__PURE__ */ i.jsx(Bn, { ...e }),
    !e.linkItems && /* @__PURE__ */ i.jsx(ht, { ...e, index: e.index }),
    e.showDescription && /* @__PURE__ */ i.jsx(Wn, { ...e })
  ] }) });
}, rr = (e) => mt(e.items) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "List" }) : null : e.displayItemAsTeaser ? /* @__PURE__ */ i.jsx(
  "div",
  {
    className: w(
      e.baseCssClass ?? "cmp-list",
      `${e.baseCssClass ?? "cmp-list"}--as-teasers`
    ),
    id: e.id,
    children: e.items.map((t, r) => /* @__PURE__ */ i.jsx(
      Un,
      {
        ...t,
        actions: [],
        actionsEnabled: !1,
        imageAlt: "",
        imageLinkHidden: !0,
        imagePath: "",
        isInEditor: e.isInEditor,
        titleLinkHidden: !1
      },
      `cmp-list-${r}`
    ))
  }
) : /* @__PURE__ */ i.jsx("ul", { className: e.baseCssClass ?? "cmp-list", id: e.id, children: e.items.map((t, r) => /* @__PURE__ */ _e(
  Vn,
  {
    ...t,
    baseCssClass: e.baseCssClass ?? "cmp-list",
    dateFormatString: e.dateFormatString,
    linkItems: e.linkItems,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed,
    showDescription: e.showDescription,
    showModificationDate: e.showModificationDate,
    index: r,
    key: `cmp-list-${r}`
  }
)) }), gt = (e) => e === null || (e == null ? void 0 : e.length) === 0, zn = (e) => Ge.sanitize(e), ar = (e) => {
  let { text: t } = e;
  if (e.richText) {
    const r = {
      replace(a) {
        if (a instanceof en && a.tagName === "a") {
          const { attribs: o } = a, s = {
            ...o,
            className: o.class
          };
          return delete s.class, /* @__PURE__ */ i.jsx(A, { ...s, children: tn(a.children, r) });
        }
      }
    };
    t = ne(zn(t), r);
  }
  return gt(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Text" }) : null : e.richText ? /* @__PURE__ */ i.jsx(
    "div",
    {
      className: e.baseCssClass ?? "cmp-text",
      "data-rte-editelement": !0,
      id: e.id,
      children: t
    }
  ) : /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-text", id: e.id, children: /* @__PURE__ */ i.jsx("p", { className: "cmp-text__paragraph", children: t }) });
}, ir = {
  emptyLabel: "Breadcrumb",
  isEmpty(e) {
    return Xe(e);
  }
}, sr = {
  emptyLabel: "Button",
  isEmpty(e) {
    return et(e.text);
  }
}, or = {
  emptyLabel: "Download",
  isEmpty(e) {
    const { url: t, handleOnClick: r } = e;
    return nt({
      handleOnClick: r,
      url: t
    });
  }
}, lr = {
  emptyLabel: "Embed",
  isEmpty(e) {
    return rt(e);
  }
}, cr = {
  emptyLabel: "Image",
  isEmpty({ src: e }) {
    return it(e);
  }
}, ur = {
  emptyLabel: "Language Navigation",
  isEmpty(e) {
    return ot(e);
  }
}, dr = {
  emptyLabel: "List",
  isEmpty(e) {
    return mt(e.items);
  }
}, fr = {
  emptyLabel: "Navigation",
  isEmpty(e) {
    return st(e);
  }
}, mr = {
  emptyLabel: "Teaser",
  isEmpty(e) {
    return ft(e);
  }
}, hr = {
  emptyLabel: "Title",
  isEmpty(e) {
    return ut(e.text);
  }
}, gr = {
  emptyLabel: "Text",
  isEmpty(e) {
    return gt(e.text);
  }
}, vr = (e) => /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-separator", id: e.id, children: /* @__PURE__ */ i.jsx(
  "hr",
  {
    className: `${e.baseCssClass ?? "cmp-separator"}__horizontal-rule`
  }
) });
export {
  ir as BreadcrumbEditConfig,
  sr as ButtonEditConfig,
  Xn as CoreBreadCrumb,
  tt as CoreButton,
  Qn as CoreDownload,
  er as CoreEmbed,
  Sn as CoreImage,
  nr as CoreLanguageNavigation,
  A as CoreLink,
  rr as CoreList,
  tr as CoreNavigation,
  vr as CoreSeparator,
  Un as CoreTeaser,
  ar as CoreText,
  On as CoreTitle,
  or as DownloadEditConfig,
  lr as EmbedEditConfig,
  cr as ImageEditConfig,
  ur as LanguageNavigationEditConfig,
  dr as ListEditConfig,
  fr as NavigationEditConfig,
  mr as TeaserEditConfig,
  gr as TextEditConfig,
  hr as TitleEditConfig
};
