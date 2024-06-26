import ae, { createElement as _e, useRef as Kt, useEffect as Xt, forwardRef as Qt } from "react";
import w from "classnames";
import { NavLink as en } from "react-router-dom";
import { AuthoringUtils as tn } from "@adobe/aem-spa-page-model-manager";
import { ComponentMapping as qe } from "@adobe/aem-react-editable-components";
import Ge from "dompurify";
import ne, { Element as nn, domToReact as rn } from "html-react-parser";
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
function an() {
  if (We)
    return V;
  We = 1;
  var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, g, v) {
    var _, h = {}, f = null, R = null;
    v !== void 0 && (f = "" + v), g.key !== void 0 && (f = "" + g.key), g.ref !== void 0 && (R = g.ref);
    for (_ in g)
      a.call(g, _) && !s.hasOwnProperty(_) && (h[_] = g[_]);
    if (m && m.defaultProps)
      for (_ in g = m.defaultProps, g)
        h[_] === void 0 && (h[_] = g[_]);
    return { $$typeof: t, type: m, key: f, ref: R, props: h, _owner: o.current };
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
function sn() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ae, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), P = Symbol.iterator, Z = "@@iterator";
    function q(n) {
      if (n === null || typeof n != "object")
        return null;
      var l = P && n[P] || n[Z];
      return typeof l == "function" ? l : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(n) {
      {
        for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          c[d - 1] = arguments[d];
        vt("error", n, c);
      }
    }
    function vt(n, l, c) {
      {
        var d = O.ReactDebugCurrentFrame, b = d.getStackAddendum();
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
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === s || Ct || n === o || n === v || n === _ || bt || n === R || _t || yt || xt || typeof n == "object" && n !== null && (n.$$typeof === f || n.$$typeof === h || n.$$typeof === u || n.$$typeof === m || n.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === be || n.getModuleId !== void 0));
    }
    function jt(n, l, c) {
      var d = n.displayName;
      if (d)
        return d;
      var b = l.displayName || l.name || "";
      return b !== "" ? c + "(" + b + ")" : c;
    }
    function Ce(n) {
      return n.displayName || "Context";
    }
    function L(n) {
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
        case v:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            var l = n;
            return Ce(l) + ".Consumer";
          case u:
            var c = n;
            return Ce(c._context) + ".Provider";
          case g:
            return jt(n, n.render, "ForwardRef");
          case h:
            var d = n.displayName || null;
            return d !== null ? d : L(n.type) || "Memo";
          case f: {
            var b = n, E = b._payload, x = b._init;
            try {
              return L(x(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, H = 0, Ee, je, pe, Te, Me, Re, $e;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function pt() {
      {
        if (H === 0) {
          Ee = console.log, je = console.info, pe = console.warn, Te = console.error, Me = console.group, Re = console.groupCollapsed, $e = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
              value: je
            }),
            warn: F({}, n, {
              value: pe
            }),
            error: F({}, n, {
              value: Te
            }),
            group: F({}, n, {
              value: Me
            }),
            groupCollapsed: F({}, n, {
              value: Re
            }),
            groupEnd: F({}, n, {
              value: $e
            })
          });
        }
        H < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = O.ReactCurrentDispatcher, se;
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
      E = ie.current, ie.current = null, pt();
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
            } catch (S) {
              d = S;
            }
            Reflect.construct(n, [], x);
          } else {
            try {
              x.call();
            } catch (S) {
              d = S;
            }
            n.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            d = S;
          }
          n();
        }
      } catch (S) {
        if (S && d && typeof S.stack == "string") {
          for (var y = S.stack.split(`
`), $ = d.stack.split(`
`), p = y.length - 1, T = $.length - 1; p >= 1 && T >= 0 && y[p] !== $[T]; )
            T--;
          for (; p >= 1 && T >= 0; p--, T--)
            if (y[p] !== $[T]) {
              if (p !== 1 || T !== 1)
                do
                  if (p--, T--, T < 0 || y[p] !== $[T]) {
                    var D = `
` + y[p].replace(" at new ", " at ");
                    return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), typeof n == "function" && K.set(n, D), D;
                  }
                while (p >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ie.current = E, Tt(), Error.prepareStackTrace = b;
      }
      var U = n ? n.displayName || n.name : "", I = U ? G(U) : "";
      return typeof n == "function" && K.set(n, I), I;
    }
    function Rt(n, l, c) {
      return we(n, !1);
    }
    function $t(n) {
      var l = n.prototype;
      return !!(l && l.isReactComponent);
    }
    function X(n, l, c) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return we(n, $t(n));
      if (typeof n == "string")
        return G(n);
      switch (n) {
        case v:
          return G("Suspense");
        case _:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case g:
            return Rt(n.render);
          case h:
            return X(n.type, l, c);
          case f: {
            var d = n, b = d._payload, E = d._init;
            try {
              return X(E(b), l, c);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, De = {}, Ne = O.ReactDebugCurrentFrame;
    function Q(n) {
      if (n) {
        var l = n._owner, c = X(n.type, n._source, l ? l.type : null);
        Ne.setExtraStackFrame(c);
      } else
        Ne.setExtraStackFrame(null);
    }
    function St(n, l, c, d, b) {
      {
        var E = Function.call.bind(B);
        for (var x in n)
          if (E(n, x)) {
            var y = void 0;
            try {
              if (typeof n[x] != "function") {
                var $ = Error((d || "React class") + ": " + c + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              y = n[x](l, x, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              y = p;
            }
            y && !(y instanceof Error) && (Q(b), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, x, typeof y), Q(null)), y instanceof Error && !(y.message in De) && (De[y.message] = !0, Q(b), M("Failed %s type: %s", c, y.message), Q(null));
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
    var W = O.ReactCurrentOwner, Pt = {
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
        var c = L(W.current.type);
        ce[c] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(W.current.type), n.ref), ce[c] = !0);
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
      var y = {
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
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Yt(n, l, c, d, b) {
      {
        var E, x = {}, y = null, $ = null;
        c !== void 0 && (Le(c), y = "" + c), Ot(l) && (Le(l.key), y = "" + l.key), Lt(l) && ($ = l.ref, kt(l, b));
        for (E in l)
          B.call(l, E) && !Pt.hasOwnProperty(E) && (x[E] = l[E]);
        if (n && n.defaultProps) {
          var p = n.defaultProps;
          for (E in p)
            x[E] === void 0 && (x[E] = p[E]);
        }
        if (y || $) {
          var T = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          y && At(x, T), $ && Ft(x, T);
        }
        return It(n, y, $, b, d, W.current, x);
      }
    }
    var ue = O.ReactCurrentOwner, Ae = O.ReactDebugCurrentFrame;
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
          var n = L(ue.current.type);
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
        n && n._owner && n._owner !== ue.current && (d = " It was passed a child from " + L(n._owner.type) + "."), Y(n), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, d), Y(null);
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
        else if (typeof l == "object" && (l.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === h))
          c = l.propTypes;
        else
          return;
        if (c) {
          var d = L(l);
          St(c, n.props, "prop", d, n);
        } else if (l.PropTypes !== void 0 && !de) {
          de = !0;
          var b = L(l);
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
          var y = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Ut();
          $ ? y += $ : y += Fe();
          var p;
          n === null ? p = "null" : le(n) ? p = "array" : n !== void 0 && n.$$typeof === t ? (p = "<" + (L(n.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : p = typeof n, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, y);
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
          var I = L(n), S = Object.keys(l).filter(function(Gt) {
            return Gt !== "key";
          }), me = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[I + me]) {
            var qt = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
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
process.env.NODE_ENV === "production" ? ge.exports = an() : ge.exports = sn();
var i = ge.exports;
const k = (e) => {
  const { className: t, href: r, isRouted: a, baseCssClass: o, valid: s, ...u } = e, m = (v = "cmp-link", _ = "", h = !1) => {
    const f = [v];
    return h && f.push(`${v}--active`), _.length && f.push(_), f;
  };
  return r === void 0 || r.trim().length === 0 ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: m(o, t, !1).join(" "),
      href: "#",
      ...u
    }
  ) : /^https?:\/\//.test(r) || a === !1 || tn.isInEditor() ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: m(o, t, !1).join(" "),
      href: r,
      ...u
    }
  ) : /* @__PURE__ */ i.jsx(
    en,
    {
      className: ({ isActive: v }) => m(o, t, v).join(" "),
      to: r,
      ...u
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
}, Ke = (e) => typeof e > "u" || e === null || e.length === 0, Xe = ({
  title: e,
  current: t = !1
}) => {
  const r = {
    itemProp: "name"
  };
  return t && (r["aria-current"] = "page"), /* @__PURE__ */ i.jsx("span", { ...r, children: e });
}, ln = ({
  baseCssClass: e,
  link: t,
  routed: r,
  title: a
}) => {
  const { url: o, ...s } = t;
  return /* @__PURE__ */ i.jsx(
    k,
    {
      className: `${e}__item-link`,
      href: o,
      isRouted: r ?? !0,
      itemProp: "item",
      ...s,
      children: /* @__PURE__ */ i.jsx(Xe, { title: a })
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
        e.active && /* @__PURE__ */ i.jsx(Xe, { current: !0, title: e.title }),
        /* @__PURE__ */ i.jsx("meta", { content: t, itemProp: "position" })
      ]
    }
  );
}, Qn = ({
  ariaLabel: e,
  hidePlaceHolder: t,
  id: r,
  isInEditor: a,
  items: o,
  baseCssClass: s = "cmp-breadcrumb"
}) => Ke(o) ? a && !t ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Breadcrumb" }) : null : /* @__PURE__ */ i.jsx(
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
        children: o.map((u, m) => /* @__PURE__ */ _e(
          cn,
          {
            ...u,
            baseCssClass: s,
            index: m,
            key: `crumbitem-${m}`
          }
        ))
      }
    )
  }
), Qe = (e) => typeof e > "u" || e === null || (e == null ? void 0 : e.length) === 0, ze = ({ baseCssClass: e, icon: t, text: r }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
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
] }), et = ({
  ariaLabel: e,
  buttonLink: t,
  className: r,
  hidePlaceHolder: a,
  id: o,
  icon: s,
  isInEditor: u,
  text: m,
  handleOnClick: g,
  routed: v,
  baseCssClass: _ = "cmp-button",
  type: h = "button"
}) => {
  const f = (P) => {
    g && g(P);
  }, R = !!(t != null && t.url);
  return Qe(m) ? u && !a ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Button" }) : null : R ? /* @__PURE__ */ i.jsx(
    k,
    {
      "aria-label": e,
      className: w(_, r),
      href: t == null ? void 0 : t.url,
      id: o,
      isRouted: v,
      onClick: f,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: _,
          icon: s,
          isInEditor: u,
          text: m
        }
      )
    }
  ) : /* @__PURE__ */ i.jsx(
    "button",
    {
      className: w(_, r),
      id: o,
      onClick: f,
      type: h,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: _,
          icon: s,
          isInEditor: u,
          text: m
        }
      )
    }
  );
}, tt = ({
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
  return (r && (r == null ? void 0 : r.length) !== 0) ?? a ? /* @__PURE__ */ i.jsx(
    k,
    {
      className: `${e}__title-link`,
      href: un({ url: r }),
      isRouted: !1,
      onClick: o,
      children: t
    }
  ) : /* @__PURE__ */ i.jsx(i.Fragment, { children: t });
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
  actionText: e = "Download",
  baseCssClass: t,
  cqType: r,
  componentMapping: a,
  handleOnClick: o,
  isInEditor: s,
  url: u
}) => {
  const m = a ?? qe;
  let g = et;
  r != null && r.endsWith("/download") && (g = m.get(
    r.replace("/download", "/button")
  ));
  const v = (_) => {
    o && o(_);
  };
  return /* @__PURE__ */ i.jsx(
    g,
    {
      buttonLink: { url: u ?? "#" },
      className: `${t}__action`,
      handleOnClick: v,
      isInEditor: s,
      routed: !1,
      text: e
    }
  );
}, er = ({
  actionText: e,
  componentMapping: t,
  cqType: r,
  description: a,
  filename: o,
  format: s,
  handleOnClick: u,
  hidePlaceHolder: m,
  id: g,
  isInEditor: v,
  size: _,
  title: h,
  titleType: f,
  url: R,
  baseCssClass: P = "cmp-download",
  displayFilename: Z = !1,
  displayFormat: q = !1,
  displaySize: O = !1
}) => {
  const M = Z || O || q;
  return tt({ handleOnClick: u, url: R }) ? v && !m ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Download" }) : null : /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: w(P, { "cq-dd-file": v }),
      id: g,
      children: [
        !!h && /* @__PURE__ */ i.jsx(
          fn,
          {
            baseCssClass: P,
            handleOnClick: u,
            title: h,
            titleType: f,
            url: R
          }
        ),
        !!a && /* @__PURE__ */ i.jsx(hn, { baseCssClass: P, description: a }),
        M && /* @__PURE__ */ i.jsx(
          mn,
          {
            baseCssClass: P,
            displayFilename: Z,
            displayFormat: q,
            displaySize: O,
            filename: o,
            format: s,
            size: _
          }
        ),
        /* @__PURE__ */ i.jsx(
          gn,
          {
            actionText: e,
            baseCssClass: P,
            componentMapping: t,
            cqType: r,
            handleOnClick: u,
            isInEditor: v,
            url: R
          }
        )
      ]
    }
  );
}, nt = (e) => {
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
}, rt = (e) => Ge.sanitize(e), Cn = (e) => {
  const t = e == null ? void 0 : e.youtubeVideoId, r = e == null ? void 0 : e.youtubeAutoPlay, a = e == null ? void 0 : e.youtubeLoop, o = e == null ? void 0 : e.youtubeMute, s = e == null ? void 0 : e.youtubePlaysInline, u = e == null ? void 0 : e.youtubeRel, m = `https://www.youtube.com/embed/${t}`, g = {
    autoplay: `${+r}`,
    loop: `${+a}`,
    mute: `${+o}`,
    playlist: `${t}`,
    playsinline: `${+s}`,
    rel: `${+u}`
  }, v = new URLSearchParams(g).toString();
  return `${m}?${v}`;
}, En = (e) => {
  var t, r, a, o;
  if (e.type === "HTML")
    return ne(rt(e.html));
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
    return ((o = e.result) == null ? void 0 : o.processor) === "pinterest" ? /* @__PURE__ */ i.jsx("a", { "data-pin-build": "doBuild", "data-pin-do": "embedPin", href: e.url, children: e.url }) : /* @__PURE__ */ i.jsx(pn, { ...e });
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
}, jn = (e) => {
  var t, r, a, o, s, u, m, g, v, _, h;
  return (t = e == null ? void 0 : e.options) != null && t.response ? /* @__PURE__ */ i.jsx(
    "img",
    {
      alt: (a = (r = e == null ? void 0 : e.options) == null ? void 0 : r.response) == null ? void 0 : a.title,
      height: (s = (o = e == null ? void 0 : e.options) == null ? void 0 : o.response) == null ? void 0 : s.height,
      src: (m = (u = e == null ? void 0 : e.options) == null ? void 0 : u.response) == null ? void 0 : m.url,
      title: (v = (g = e == null ? void 0 : e.options) == null ? void 0 : g.response) == null ? void 0 : v.title,
      width: (h = (_ = e == null ? void 0 : e.options) == null ? void 0 : _.response) == null ? void 0 : h.width
    }
  ) : null;
}, pn = (e) => {
  const t = yn(e.result);
  if (t === "photo")
    return /* @__PURE__ */ i.jsx(jn, { ...e.result });
  if (t === "link")
    return /* @__PURE__ */ i.jsx("a", { href: xn(e.result), children: bn(e.result) });
  if (t === "video")
    return ee(e.result) ? ne(ee(e.result)) : null;
  if (t === "rich")
    return ee(e.result) ? ne(rt(ee(e.result))) : null;
}, tr = (e) => {
  var s, u, m, g, v, _;
  const t = e.baseCssClass ?? "cmp-embed", r = { ...e, baseCssClass: t }, a = Kt(null);
  let o;
  return Xt(() => {
    var h;
    if (a.current) {
      const f = (h = a.current.dataset) == null ? void 0 : h.provider;
      f && vn(f);
    }
  }, []), ((s = e.result) == null ? void 0 : s.processor) === "oembed" && ((m = (u = e.result) == null ? void 0 : u.options) != null && m.provider) && (o = (v = (g = e.result) == null ? void 0 : g.options) == null ? void 0 : v.provider), ((_ = e.result) == null ? void 0 : _.processor) === "pinterest" && (o = "Pinterest"), nt(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Embed" }) : null : /* @__PURE__ */ i.jsx(
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
}, at = (e) => !e || e.trim().length === 0, Tn = (e) => {
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
  !!e.title && /* @__PURE__ */ i.jsx(
    "figcaption",
    {
      className: `${e.baseCssClass}__title`,
      itemProp: "caption",
      children: e.title
    }
  ),
  e.displayPopupTitle && !!e.title && /* @__PURE__ */ i.jsx("meta", { content: e.title, itemProp: "caption" })
] }), Mn = ({
  alt: e,
  baseCssClass: t,
  isInEditor: r,
  imageLink: a,
  routed: o,
  src: s,
  title: u,
  width: m
}) => a && a.url.trim().length > 0 ? /* @__PURE__ */ i.jsx(
  k,
  {
    className: `${t}__link`,
    href: a.url,
    isRouted: o,
    children: /* @__PURE__ */ i.jsx(
      Ze,
      {
        alt: e,
        baseCssClass: t,
        imageLink: a,
        isInEditor: r,
        routed: o,
        src: s,
        title: u,
        width: m
      }
    )
  }
) : /* @__PURE__ */ i.jsx(
  Ze,
  {
    alt: e,
    baseCssClass: t,
    imageLink: a,
    isInEditor: r,
    routed: o,
    src: s,
    title: u,
    width: m
  }
), it = Qt(
  ({
    alt: e,
    baseCssClass: t = "cmp-image",
    hidePlaceHolder: r,
    id: a,
    isInEditor: o = !1,
    imageLink: s,
    routed: u,
    src: m,
    title: g,
    width: v
  }, _) => {
    const h = {
      className: w(t, { "cq-dd-image": o }),
      id: a
    };
    return v && (h.style = Tn(v)), at(m) ? o && !r ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Image" }) : null : /* @__PURE__ */ i.jsx("div", { ...h, ref: _, children: /* @__PURE__ */ i.jsx(
      Mn,
      {
        alt: e,
        baseCssClass: t,
        imageLink: s,
        isInEditor: o,
        routed: u,
        src: m,
        title: g,
        width: v
      }
    ) });
  }
);
it.displayName = "CoreImage";
const st = (e) => {
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
        k,
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
)) }) }), nr = (e) => st(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Navigation" }) : null : /* @__PURE__ */ i.jsx(
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
  k,
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
), Sn = (e) => /* @__PURE__ */ i.jsxs(
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
), wn = (e) => /* @__PURE__ */ i.jsx(i.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, r) => /* @__PURE__ */ _e(
  Sn,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: r,
    key: `${e.baseCssClass}__item-${r}`,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  }
)) }) }), rr = (e) => ot(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Language Navigation" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-languagenavigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    role: "navigation",
    children: /* @__PURE__ */ i.jsx(
      wn,
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
}, A = function(e, t, r, a) {
  var o = {}, s;
  for (s in e)
    o[s] = e[s];
  for (s in t || {})
    !!r ^ !!o[s] || (o[s] = t[s]);
  return a && (o.res = a), o;
}, j = {
  _formatter: lt,
  _parser: ct
}, re, C;
j.compile = function(e) {
  return [e].concat(e.match(/\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g) || []);
};
j.format = function(e, t, r) {
  for (var a = this || C, o = typeof t == "string" ? a.compile(t) : t, s = a._formatter, u = function() {
    if (r) {
      var f = new Date(e.getTime());
      return f.getFullYear = f.getUTCFullYear, f.getMonth = f.getUTCMonth, f.getDate = f.getUTCDate, f.getHours = f.getUTCHours, f.getMinutes = f.getUTCMinutes, f.getSeconds = f.getUTCSeconds, f.getMilliseconds = f.getUTCMilliseconds, f.getDay = f.getUTCDay, f.getTimezoneOffset = function() {
        return 0;
      }, f;
    }
    return e;
  }(), m = /^\[(.*)\]$/, g = "", v = 1, _ = o.length, h; v < _; v++)
    h = o[v], g += s[h] ? s.post(s[h](u, o[0])) : h.replace(m, "$1");
  return g;
};
j.preparse = function(e, t) {
  var r = this || C, a = typeof t == "string" ? r.compile(t) : t, o = r._parser, s = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, u = " ", m = /^\[(.*)\]$/, g = "...";
  e = o.pre(e);
  for (var v = 1, _ = a.length, h, f, R; v < _; v++)
    if (h = a[v], f = e.slice(s._index), o[h]) {
      if (R = o[h](f, a[0]), !R.length)
        break;
      s[R.token || h.charAt(0)] = R.value, s._index += R.length, s._match++;
    } else if (h === f.charAt(0) || h === u)
      s._index++;
    else if (m.test(h) && !f.indexOf(h.replace(m, "$1")))
      s._index += h.length - 2;
    else if (h === g) {
      s._index = e.length;
      break;
    } else
      break;
  return s.H = s.H || o.h12(s.h, s.A), s._length = e.length, s;
};
j.parse = function(e, t, r) {
  var a = this || C, o = typeof t == "string" ? a.compile(t) : t, s = a.preparse(e, o);
  return a.isValid(s) ? (s.M -= s.Y < 100 ? 22801 : 1, r || ~a._parser.find(o, "ZZ").value ? new Date(Date.UTC(s.Y, s.M, s.D, s.H, s.m + s.Z, s.s, s.S)) : new Date(s.Y, s.M, s.D, s.H, s.m, s.s, s.S)) : /* @__PURE__ */ new Date(NaN);
};
j.isValid = function(e, t) {
  var r = this || C, a = typeof e == "string" ? r.preparse(e, t) : e, o = [31, 28 + r.isLeapYear(a.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a.M - 1];
  return !(a._index < 1 || a._length < 1 || a._index - a._length || a._match < 1 || a.Y < 1 || a.Y > 9999 || a.M < 1 || a.M > 12 || a.D < 1 || a.D > o || a.H < 0 || a.H > 23 || a.m < 0 || a.m > 59 || a.s < 0 || a.s > 59 || a.S < 0 || a.S > 999 || a.Z < -840 || a.Z > 720);
};
j.transform = function(e, t, r, a) {
  const o = this || C;
  return o.format(o.parse(e, t), r, a);
};
j.addYears = function(e, t, r) {
  return (this || C).addMonths(e, t * 12, r);
};
j.addMonths = function(e, t, r) {
  var a = new Date(e.getTime());
  if (r) {
    if (a.setUTCMonth(a.getUTCMonth() + t), a.getUTCDate() < e.getUTCDate())
      return (this || C).addDays(a, -a.getUTCDate(), r);
  } else if (a.setMonth(a.getMonth() + t), a.getDate() < e.getDate())
    return (this || C).addDays(a, -a.getDate(), r);
  return a;
};
j.addDays = function(e, t, r) {
  return (this || C).addHours(e, t * 24, r);
};
j.addHours = function(e, t, r) {
  return (this || C).addMinutes(e, t * 60, r);
};
j.addMinutes = function(e, t, r) {
  return (this || C).addSeconds(e, t * 60, r);
};
j.addSeconds = function(e, t, r) {
  return (this || C).addMilliseconds(e, t * 1e3, r);
};
j.addMilliseconds = function(e, t, r) {
  var a = new Date(e.getTime());
  return r ? a.setUTCMilliseconds(a.getUTCMilliseconds() + t) : a.setMilliseconds(a.getMilliseconds() + t), a;
};
j.subtract = function(e, t) {
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
j.isLeapYear = function(e) {
  return !(e % 4) && !!(e % 100) || !(e % 400);
};
j.isSameDay = function(e, t) {
  return e.toDateString() === t.toDateString();
};
j.locale = function(e, t) {
  ve[e] || (ve[e] = t);
};
j.plugin = function(e, t) {
  J[e] || (J[e] = t);
};
re = A(j);
C = A(j);
C.locale = function(e) {
  var t = typeof e == "function" ? e : C.locale[e];
  if (!t)
    return te;
  te = t(j);
  var r = ve[te] || {}, a = A(xe, r.res, !0), o = A(lt, r.formatter, !0, a), s = A(ct, r.parser, !0, a);
  C._formatter = re._formatter = o, C._parser = re._parser = s;
  for (var u in J)
    C.extend(J[u]);
  return te;
};
C.extend = function(e) {
  var t = A(C._parser.res, e.res), r = e.extender || {};
  C._formatter = A(C._formatter, e.formatter, !1, t), C._parser = A(C._parser, e.parser, !1, t);
  for (var a in r)
    C[a] || (C[a] = r[a]);
};
C.plugin = function(e) {
  var t = typeof e == "function" ? e : C.plugin[e];
  t && C.extend(J[t(j, re)] || {});
};
var Dn = C;
const ut = (e) => e === null || (e == null ? void 0 : e.trim().length) === 0, dt = (e) => e.nested ? "-" : "__", Nn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    k,
    {
      className: `${e.baseCssClass}${dt(e)}link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: e.text
    }
  );
}, Pn = (e) => e.linkDisabled ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e.text }) : /* @__PURE__ */ i.jsx(Nn, { ...e }), Ln = (e) => ut(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Title" }) : null : /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-title", children: ae.createElement(
  e.type ?? "h3",
  {
    className: `${e.baseCssClass ?? "cmp-title"}${dt(e)}text`
  },
  /* @__PURE__ */ i.jsx(Pn, { ...e })
) }), ft = (e) => !e.title && !e.imagePath && !e.description && e.actions.length === 0, On = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__image`, children: /* @__PURE__ */ i.jsx(
  it,
  {
    alt: e.imageAlt,
    isInEditor: e.isInEditor,
    src: e.imagePath
  }
) }), kn = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__pretitle`, children: e.pretitle }), An = (e) => /* @__PURE__ */ i.jsx(
  Ln,
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
), Fn = (e) => {
  const t = e.description;
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${e.baseCssClass}__description`,
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}, In = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__action-container`, children: e.actions.map((t, r) => {
  var s;
  const a = e.componentMapping ?? qe;
  let o = et;
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
}) }), Yn = (e) => {
  const t = {
    ...e,
    baseCssClass: e.baseCssClass ?? "cmp-teaser"
  };
  return ft(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Teaser" }) : null : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: w(
        t.baseCssClass,
        {
          [`${t.baseCssClass}--with-image`]: e.imagePath
        },
        {
          "cq-dd-image": t.isInEditor
        }
      ),
      id: e.id,
      children: /* @__PURE__ */ i.jsxs("section", { children: [
        /* @__PURE__ */ i.jsxs("div", { className: `${t.baseCssClass}__content`, children: [
          e.pretitle && /* @__PURE__ */ i.jsx(kn, { ...t }),
          e.title && /* @__PURE__ */ i.jsx(An, { ...t }),
          e.description && /* @__PURE__ */ i.jsx(Fn, { ...t }),
          e.actions.length > 0 && t.actionsEnabled && /* @__PURE__ */ i.jsx(In, { ...t })
        ] }),
        e.imagePath && /* @__PURE__ */ i.jsx(On, { ...t })
      ] })
    }
  );
}, mt = (e) => e === null || e.length === 0, Un = (e) => {
  const t = e.lastModifiedFormatted ? e.lastModifiedFormatted : e.lastModified && e.dateFormatString ? Dn.format(
    new Date(e.lastModified),
    e.dateFormatString.toUpperCase()
  ) : "";
  return /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-date`, children: t });
}, ht = (e) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-title`, children: e.title }),
  e.showModificationDate && /* @__PURE__ */ i.jsx(Un, { ...e })
] }), Hn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    k,
    {
      className: `${e.baseCssClass}__item-link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: /* @__PURE__ */ i.jsx(ht, { ...e })
    }
  );
}, Bn = (e) => /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-description`, children: e.description }), Wn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx("li", { className: `${e.baseCssClass}__item`, children: /* @__PURE__ */ i.jsxs("article", { children: [
    e.linkItems && !!((t = e.link) != null && t.url) && /* @__PURE__ */ i.jsx(Hn, { ...e }),
    !e.linkItems && /* @__PURE__ */ i.jsx(ht, { ...e, index: e.index }),
    e.showDescription && /* @__PURE__ */ i.jsx(Bn, { ...e })
  ] }) });
}, ar = (e) => mt(e.items) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "List" }) : null : e.displayItemAsTeaser ? /* @__PURE__ */ i.jsx(
  "div",
  {
    className: w(
      e.baseCssClass ?? "cmp-list",
      `${e.baseCssClass ?? "cmp-list"}--as-teasers`
    ),
    id: e.id,
    children: e.items.map((t, r) => /* @__PURE__ */ i.jsx(
      Yn,
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
  Wn,
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
)) }), gt = (e) => e === null || (e == null ? void 0 : e.length) === 0, Vn = (e) => Ge.sanitize(e), ir = (e) => {
  let { text: t } = e;
  if (e.richText) {
    const r = {
      replace(a) {
        if (a instanceof nn && a.tagName === "a") {
          const { attribs: o } = a, s = {
            ...o,
            className: o.class
          };
          return delete s.class, /* @__PURE__ */ i.jsx(k, { ...s, children: rn(a.children, r) });
        }
      }
    };
    t = ne(Vn(t), r);
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
}, sr = {
  emptyLabel: "Breadcrumb",
  isEmpty(e) {
    return Ke(e.items);
  }
}, or = {
  emptyLabel: "Button",
  isEmpty(e) {
    return Qe(e.text);
  }
}, lr = {
  emptyLabel: "Download",
  isEmpty(e) {
    const { url: t, handleOnClick: r } = e;
    return tt({
      handleOnClick: r,
      url: t
    });
  }
}, cr = {
  emptyLabel: "Embed",
  isEmpty(e) {
    return nt(e);
  }
}, ur = {
  emptyLabel: "Image",
  isEmpty({ src: e }) {
    return at(e);
  }
}, dr = {
  emptyLabel: "Language Navigation",
  isEmpty(e) {
    return ot(e);
  }
}, fr = {
  emptyLabel: "List",
  isEmpty(e) {
    return mt(e.items);
  }
}, mr = {
  emptyLabel: "Navigation",
  isEmpty(e) {
    return st(e);
  }
}, hr = {
  emptyLabel: "Teaser",
  isEmpty(e) {
    return ft(e);
  }
}, gr = {
  emptyLabel: "Title",
  isEmpty(e) {
    return ut(e.text);
  }
}, vr = {
  emptyLabel: "Text",
  isEmpty(e) {
    return gt(e.text);
  }
}, _r = (e) => /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-separator", id: e.id, children: /* @__PURE__ */ i.jsx(
  "hr",
  {
    className: `${e.baseCssClass ?? "cmp-separator"}__horizontal-rule`
  }
) });
export {
  sr as BreadCrumbEditConfig,
  or as ButtonEditConfig,
  Qn as CoreBreadCrumb,
  et as CoreButton,
  er as CoreDownload,
  tr as CoreEmbed,
  it as CoreImage,
  rr as CoreLanguageNavigation,
  k as CoreLink,
  ar as CoreList,
  nr as CoreNavigation,
  _r as CoreSeparator,
  Yn as CoreTeaser,
  ir as CoreText,
  Ln as CoreTitle,
  lr as DownloadEditConfig,
  cr as EmbedEditConfig,
  ur as ImageEditConfig,
  dr as LanguageNavigationEditConfig,
  fr as ListEditConfig,
  mr as NavigationEditConfig,
  hr as TeaserEditConfig,
  vr as TextEditConfig,
  gr as TitleEditConfig
};
