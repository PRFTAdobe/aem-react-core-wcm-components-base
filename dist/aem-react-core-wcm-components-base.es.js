import ae, { createElement as _e, useRef as Kt, useEffect as Xt, forwardRef as Qt } from "react";
import w from "classnames";
import { NavLink as en } from "react-router-dom";
import { ComponentMapping as qe } from "@adobe/aem-react-editable-components";
import Ge from "dompurify";
import ne, { Element as tn, domToReact as nn } from "html-react-parser";
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
  var e = ae, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(g, m, h) {
    var x, f = {}, v = null, R = null;
    h !== void 0 && (v = "" + h), m.key !== void 0 && (v = "" + m.key), m.ref !== void 0 && (R = m.ref);
    for (x in m)
      r.call(m, x) && !s.hasOwnProperty(x) && (f[x] = m[x]);
    if (g && g.defaultProps)
      for (x in m = g.defaultProps, m)
        f[x] === void 0 && (f[x] = m[x]);
    return { $$typeof: t, type: g, key: v, ref: R, props: f, _owner: o.current };
  }
  return V.Fragment = a, V.jsx = u, V.jsxs = u, V;
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
    var e = ae, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), O = Symbol.iterator, Z = "@@iterator";
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
        var E = c.map(function(y) {
          return String(y);
        });
        E.unshift("Warning: " + l), Function.prototype.apply.call(console[n], console, E);
      }
    }
    var _t = !1, yt = !1, xt = !1, bt = !1, Ct = !1, be;
    be = Symbol.for("react.module.reference");
    function Et(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === r || n === s || Ct || n === o || n === h || n === x || bt || n === R || _t || yt || xt || typeof n == "object" && n !== null && (n.$$typeof === v || n.$$typeof === f || n.$$typeof === u || n.$$typeof === g || n.$$typeof === m || // This needs to include all possible module reference object
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
    function P(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case r:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case g:
            var l = n;
            return Ce(l) + ".Consumer";
          case u:
            var c = n;
            return Ce(c._context) + ".Provider";
          case m:
            return jt(n, n.render, "ForwardRef");
          case f:
            var d = n.displayName || null;
            return d !== null ? d : P(n.type) || "Memo";
          case v: {
            var b = n, E = b._payload, y = b._init;
            try {
              return P(y(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, H = 0, Ee, je, pe, Te, Me, Re, $e;
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
            log: A({}, n, {
              value: Ee
            }),
            info: A({}, n, {
              value: je
            }),
            warn: A({}, n, {
              value: pe
            }),
            error: A({}, n, {
              value: Te
            }),
            group: A({}, n, {
              value: Me
            }),
            groupCollapsed: A({}, n, {
              value: Re
            }),
            groupEnd: A({}, n, {
              value: $e
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
      E = ie.current, ie.current = null, pt();
      try {
        if (l) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (S) {
              d = S;
            }
            Reflect.construct(n, [], y);
          } else {
            try {
              y.call();
            } catch (S) {
              d = S;
            }
            n.call(y.prototype);
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
          for (var _ = S.stack.split(`
`), $ = d.stack.split(`
`), p = _.length - 1, T = $.length - 1; p >= 1 && T >= 0 && _[p] !== $[T]; )
            T--;
          for (; p >= 1 && T >= 0; p--, T--)
            if (_[p] !== $[T]) {
              if (p !== 1 || T !== 1)
                do
                  if (p--, T--, T < 0 || _[p] !== $[T]) {
                    var D = `
` + _[p].replace(" at new ", " at ");
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
        case h:
          return G("Suspense");
        case x:
          return G("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            return Rt(n.render);
          case f:
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
    function St(n, l, c, d, b) {
      {
        var E = Function.call.bind(B);
        for (var y in n)
          if (E(n, y)) {
            var _ = void 0;
            try {
              if (typeof n[y] != "function") {
                var $ = Error((d || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              _ = n[y](l, y, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              _ = p;
            }
            _ && !(_ instanceof Error) && (Q(b), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, y, typeof _), Q(null)), _ instanceof Error && !(_.message in De) && (De[_.message] = !0, Q(b), M("Failed %s type: %s", c, _.message), Q(null));
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
    function Ft(n, l) {
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
    function At(n, l) {
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
    var It = function(n, l, c, d, b, E, y) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: l,
        ref: c,
        props: y,
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
        var E, y = {}, _ = null, $ = null;
        c !== void 0 && (Le(c), _ = "" + c), Ot(l) && (Le(l.key), _ = "" + l.key), Lt(l) && ($ = l.ref, kt(l, b));
        for (E in l)
          B.call(l, E) && !Pt.hasOwnProperty(E) && (y[E] = l[E]);
        if (n && n.defaultProps) {
          var p = n.defaultProps;
          for (E in p)
            y[E] === void 0 && (y[E] = p[E]);
        }
        if (_ || $) {
          var T = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          _ && Ft(y, T), $ && At(y, T);
        }
        return It(n, _, $, b, d, W.current, y);
      }
    }
    var ue = L.ReactCurrentOwner, Fe = L.ReactDebugCurrentFrame;
    function Y(n) {
      if (n) {
        var l = n._owner, c = X(n.type, n._source, l ? l.type : null);
        Fe.setExtraStackFrame(c);
      } else
        Fe.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Ae() {
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
        var l = Ae();
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
            for (var E = b.call(n), y; !(y = E.next()).done; )
              fe(y.value) && Ye(y.value, l);
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
        l.$$typeof === f))
          c = l.propTypes;
        else
          return;
        if (c) {
          var d = P(l);
          St(c, n.props, "prop", d, n);
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
        var y = Et(n);
        if (!y) {
          var _ = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = Ut();
          $ ? _ += $ : _ += Ae();
          var p;
          n === null ? p = "null" : le(n) ? p = "array" : n !== void 0 && n.$$typeof === t ? (p = "<" + (P(n.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : p = typeof n, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, _);
        }
        var T = Yt(n, l, c, b, E);
        if (T == null)
          return T;
        if (y) {
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
          var I = P(n), S = Object.keys(l).filter(function(Gt) {
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
        return n === r ? Wt(T) : Bt(T), T;
      }
    }
    function Vt(n, l, c) {
      return Be(n, l, c, !0);
    }
    function zt(n, l, c) {
      return Be(n, l, c, !1);
    }
    var Jt = zt, Zt = Vt;
    z.Fragment = r, z.jsx = Jt, z.jsxs = Zt;
  }()), z;
}
process.env.NODE_ENV === "production" ? ge.exports = rn() : ge.exports = an();
var i = ge.exports;
const F = (e) => {
  const { className: t, href: a, isRouted: r, baseCssClass: o, ...s } = e, u = (m = "cmp-link", h = "", x = !1) => {
    const f = [m];
    return x && f.push(`${m}--active`), h.length && f.push(h), f;
  };
  return a === void 0 || a.trim().length === 0 ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: u(o, t, !1).join(" "),
      href: "#",
      ...s
    }
  ) : /^https?:\/\//.test(a) || r === !1 ? /* @__PURE__ */ i.jsx(
    "a",
    {
      className: u(o, t, !1).join(" "),
      href: a,
      ...s
    }
  ) : /* @__PURE__ */ i.jsx(
    en,
    {
      className: ({ isActive: m }) => u(o, t, m).join(" "),
      to: a,
      ...s
    }
  );
}, sn = "Please configure the component", N = ({
  componentTitle: e,
  emptyTextAppend: t,
  classAppend: a
}) => {
  const s = (e && e.length > 0 ? `${e} - ` : "") + (t ?? sn);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: w("cq-placeholder", {
        [a]: a !== null
      }),
      children: s
    }
  );
}, Ke = (e) => typeof e > "u" || e === null || e.length === 0, Xe = ({ title: e }) => /* @__PURE__ */ i.jsx("span", { itemProp: "name", children: e }), on = ({
  baseCssClass: e,
  link: t,
  routed: a,
  title: r
}) => {
  const { url: o, ...s } = t;
  return /* @__PURE__ */ i.jsx(
    F,
    {
      className: `${e}__item-link`,
      href: o,
      isRouted: a ?? !0,
      itemProp: "item",
      ...s,
      children: /* @__PURE__ */ i.jsx(Xe, { title: r })
    }
  );
}, ln = (e) => {
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
        !e.active && /* @__PURE__ */ i.jsx(on, { ...e }),
        e.active && /* @__PURE__ */ i.jsx(Xe, { title: e.title }),
        /* @__PURE__ */ i.jsx("meta", { content: t, itemProp: "position" })
      ]
    }
  );
}, Kn = ({
  ariaLabel: e,
  hidePlaceHolder: t,
  id: a,
  isInEditor: r,
  items: o,
  baseCssClass: s = "cmp-breadcrumb"
}) => Ke(o) ? r && !t ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Breadcrumb" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e || "BreadCrumb",
    className: s,
    id: a,
    children: /* @__PURE__ */ i.jsx(
      "ol",
      {
        className: `${s}__list`,
        itemScope: !0,
        itemType: "http://schema.org/BreadcrumbList",
        children: o.map((u, g) => /* @__PURE__ */ _e(
          ln,
          {
            ...u,
            baseCssClass: s,
            index: g,
            key: `crumbitem-${g}`
          }
        ))
      }
    )
  }
), Qe = (e) => typeof e > "u" || e === null || (e == null ? void 0 : e.length) === 0, ze = ({ baseCssClass: e, icon: t, text: a }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  t && /* @__PURE__ */ i.jsx(
    "span",
    {
      className: w(
        `${e}__icon`,
        `${e}__icon--${t}`
      )
    }
  ),
  /* @__PURE__ */ i.jsx("span", { className: `${e}__text`, children: a })
] }), et = ({
  ariaLabel: e,
  buttonLink: t,
  className: a,
  hidePlaceHolder: r,
  id: o,
  icon: s,
  isInEditor: u,
  text: g,
  handleOnClick: m,
  baseCssClass: h = "cmp-button",
  type: x = "button"
}) => {
  const f = (R) => {
    m && m(R);
  }, v = !!(t != null && t.url);
  return Qe(g) ? u && !r ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Button" }) : null : v ? /* @__PURE__ */ i.jsx(
    F,
    {
      "aria-label": e,
      className: w(h, a),
      href: t == null ? void 0 : t.url,
      id: o,
      onClick: f,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: h,
          icon: s,
          isInEditor: u,
          text: g
        }
      )
    }
  ) : /* @__PURE__ */ i.jsx(
    "button",
    {
      className: w(h, a),
      id: o,
      onClick: f,
      type: x,
      children: /* @__PURE__ */ i.jsx(
        ze,
        {
          baseCssClass: h,
          icon: s,
          isInEditor: u,
          text: g
        }
      )
    }
  );
}, tt = ({
  url: e,
  handleOnClick: t
}) => (typeof e > "u" || e === null || (e == null ? void 0 : e.length) === 0) && (typeof t > "u" || t === null), cn = ({ url: e }) => e && e.length > 0 ? e : "#", he = (e, t, a, r) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: w(
      `${r}__property`,
      `${r}__property--${a}`
    ),
    children: [
      /* @__PURE__ */ i.jsx("dt", { className: `${r}__property-label`, children: e }),
      /* @__PURE__ */ i.jsx("dd", { className: `${r}__property-content`, children: t })
    ]
  }
), un = ({
  baseCssClass: e,
  title: t,
  url: a,
  handleOnClick: r
}) => {
  const o = (s) => {
    r && r(s);
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    !!a || !!r && /* @__PURE__ */ i.jsx(
      "a",
      {
        className: `${e}__title-link`,
        href: cn({ url: a }),
        onClick: o,
        children: t
      }
    ),
    !a && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      " ",
      t,
      " "
    ] })
  ] });
}, dn = ({
  handleOnClick: e,
  url: t,
  baseCssClass: a,
  title: r,
  titleType: o = "h3"
}) => ae.createElement(
  `${o}`,
  {
    className: `${a}__title`
  },
  /* @__PURE__ */ i.jsx(
    un,
    {
      baseCssClass: a,
      handleOnClick: e,
      title: r,
      url: t
    }
  )
), fn = ({
  baseCssClass: e,
  displayFilename: t,
  displayFormat: a,
  displaySize: r,
  filename: o,
  format: s,
  size: u
}) => /* @__PURE__ */ i.jsxs("dl", { className: `${e}__properties`, children: [
  t && he("Filename", o, "filename", e),
  r && he("Size", u, "size", e),
  a && he("Format", s, "format", e)
] }), mn = ({
  baseCssClass: e,
  description: t
}) => {
  const a = String(t) || "";
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `${e}__description`,
      dangerouslySetInnerHTML: { __html: a }
    }
  );
}, hn = ({
  actionText: e,
  baseCssClass: t,
  cqType: a,
  componentMapping: r,
  handleOnClick: o,
  isInEditor: s,
  url: u
}) => {
  const g = r ?? qe;
  let m = et;
  a != null && a.endsWith("/download") && (m = g.get(
    a.replace("/download", "/button")
  ));
  const h = (x) => {
    o && o(x);
  };
  return /* @__PURE__ */ i.jsx(
    m,
    {
      buttonLink: { url: u ?? "#" },
      className: `${t}__action`,
      handleOnClick: h,
      isInEditor: s,
      text: e
    }
  );
}, Xn = ({
  actionText: e,
  componentMapping: t,
  cqType: a,
  description: r,
  filename: o,
  format: s,
  handleOnClick: u,
  hidePlaceHolder: g,
  id: m,
  isInEditor: h,
  size: x,
  title: f,
  titleType: v,
  url: R,
  baseCssClass: O = "cmp-download",
  displayFilename: Z = !1,
  displayFormat: q = !1,
  displaySize: L = !1
}) => {
  const M = Z || L || q;
  return tt({ handleOnClick: u, url: R }) ? h && !g ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Download" }) : null : /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: w(O, { "cq-dd-file": h }),
      id: m,
      children: [
        !!f && /* @__PURE__ */ i.jsx(
          dn,
          {
            baseCssClass: O,
            handleOnClick: u,
            title: f,
            titleType: v,
            url: R
          }
        ),
        !!r && /* @__PURE__ */ i.jsx(mn, { baseCssClass: O, description: r }),
        M && /* @__PURE__ */ i.jsx(
          fn,
          {
            baseCssClass: O,
            displayFilename: Z,
            displayFormat: q,
            displaySize: L,
            filename: o,
            format: s,
            size: x
          }
        ),
        /* @__PURE__ */ i.jsx(
          hn,
          {
            actionText: e,
            baseCssClass: O,
            componentMapping: t,
            cqType: a,
            handleOnClick: u,
            isInEditor: h,
            url: R
          }
        )
      ]
    }
  );
}, nt = (e) => {
  var a, r;
  let t = !1;
  return e.type === "URL" ? t = typeof e.url < "u" && typeof ((a = e.result) == null ? void 0 : a.processor) < "u" : e.type === "EMBEDDABLE" ? t = typeof ((r = e.youTubeProps) == null ? void 0 : r.youtubeVideoId) < "u" : e.type === "HTML" && (t = !!e.html), !e || !t;
}, gn = (e) => {
  var a;
  let t;
  if (e === "Twitter" ? t = "//platform.twitter.com/widgets.js" : e === "Pinterest" && (t = "//assets.pinterest.com/js/pinit.js"), t) {
    let r = document.querySelector(`script[src="${t}"]`);
    r ? r.dataset.loaded === "true" ? typeof ((a = window.PinUtils) == null ? void 0 : a.build) == "function" && window.PinUtils.build() : r.addEventListener("load", () => {
      var o;
      typeof ((o = window.PinUtils) == null ? void 0 : o.build) == "function" && window.PinUtils.build();
    }) : vn(t).then(() => {
      var o;
      typeof ((o = window.PinUtils) == null ? void 0 : o.build) == "function" && window.PinUtils.build(), r = document.querySelector(`script[src="${t}"]`), r.dataset.loaded = "true";
    }).catch((o) => {
      console.error(o);
    });
  }
}, vn = (e, t = !0, a = "text/javascript") => new Promise((r, o) => {
  try {
    const s = document.createElement("script");
    s.type = a, s.async = t, s.src = e, s.addEventListener("load", () => {
      r({ status: !0 });
    }), s.addEventListener("error", () => {
      o({
        message: "Failed to load the script ＄{FILE_URL}",
        status: !1
      });
    }), document.body.appendChild(s);
  } catch (s) {
    o(s);
  }
}), _n = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response) {
    const { response: a } = e.options;
    return a.type;
  }
}, yn = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response)
    return e.options.response.url;
}, xn = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response)
    return e.options.response.title;
}, ee = (e) => {
  var t;
  if ((t = e == null ? void 0 : e.options) != null && t.response) {
    const { response: a } = e.options;
    return a.html;
  }
}, rt = (e) => Ge.sanitize(e), bn = (e) => {
  const t = e == null ? void 0 : e.youtubeVideoId, a = e == null ? void 0 : e.youtubeAutoPlay, r = e == null ? void 0 : e.youtubeLoop, o = e == null ? void 0 : e.youtubeMute, s = e == null ? void 0 : e.youtubePlaysInline, u = e == null ? void 0 : e.youtubeRel, g = `https://www.youtube.com/embed/${t}`, m = {
    autoplay: `${+a}`,
    loop: `${+r}`,
    mute: `${+o}`,
    playlist: `${t}`,
    playsinline: `${+s}`,
    rel: `${+u}`
  }, h = new URLSearchParams(m).toString();
  return `${g}?${h}`;
}, Cn = (e) => {
  var t, a, r, o;
  if (e.type === "HTML")
    return ne(rt(e.html));
  if (e.type === "EMBEDDABLE")
    return ((t = e.youTubeProps) == null ? void 0 : t.layout) === "responsive" ? /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `${e.baseCssClass}__embeddable-wrapper`,
        style: {
          paddingBottom: ((a = e.youTubeProps) == null ? void 0 : a.layout) === "responsive" ? `${(r = e.youTubeProps) == null ? void 0 : r.youtubeAspectRatio}%` : 0
        },
        children: /* @__PURE__ */ i.jsx(Je, { ...e })
      }
    ) : /* @__PURE__ */ i.jsx(Je, { ...e });
  if (e.type === "URL")
    return ((o = e.result) == null ? void 0 : o.processor) === "pinterest" ? /* @__PURE__ */ i.jsx("a", { "data-pin-build": "doBuild", "data-pin-do": "embedPin", href: e.url, children: e.url }) : /* @__PURE__ */ i.jsx(jn, { ...e });
}, Je = (e) => {
  var t, a, r, o, s;
  return /* @__PURE__ */ i.jsx(
    "iframe",
    {
      allow: (t = e.youTubeProps) != null && t.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
      allowFullScreen: !0,
      "aria-label": "YouTube Video",
      className: `${e.baseCssClass}__embeddable-iframe`,
      frameBorder: 0,
      height: ((a = e.youTubeProps) == null ? void 0 : a.layout) === "responsive" ? "100%" : (r = e.youTubeProps) == null ? void 0 : r.youtubeHeight,
      src: bn(e.youTubeProps),
      title: "YouTube Video",
      type: "text/html",
      width: ((o = e.youTubeProps) == null ? void 0 : o.layout) === "responsive" ? "100%" : (s = e.youTubeProps) == null ? void 0 : s.youtubeWidth
    }
  );
}, En = (e) => {
  var t, a, r, o, s, u, g, m, h, x, f;
  return (t = e == null ? void 0 : e.options) != null && t.response ? /* @__PURE__ */ i.jsx(
    "img",
    {
      alt: (r = (a = e == null ? void 0 : e.options) == null ? void 0 : a.response) == null ? void 0 : r.title,
      height: (s = (o = e == null ? void 0 : e.options) == null ? void 0 : o.response) == null ? void 0 : s.height,
      src: (g = (u = e == null ? void 0 : e.options) == null ? void 0 : u.response) == null ? void 0 : g.url,
      title: (h = (m = e == null ? void 0 : e.options) == null ? void 0 : m.response) == null ? void 0 : h.title,
      width: (f = (x = e == null ? void 0 : e.options) == null ? void 0 : x.response) == null ? void 0 : f.width
    }
  ) : null;
}, jn = (e) => {
  const t = _n(e.result);
  if (t === "photo")
    return /* @__PURE__ */ i.jsx(En, { ...e.result });
  if (t === "link")
    return /* @__PURE__ */ i.jsx("a", { href: yn(e.result), children: xn(e.result) });
  if (t === "video")
    return ee(e.result) ? ne(ee(e.result)) : null;
  if (t === "rich")
    return ee(e.result) ? ne(rt(ee(e.result))) : null;
}, Qn = (e) => {
  var s, u, g, m, h, x;
  const t = e.baseCssClass ?? "cmp-embed", a = { ...e, baseCssClass: t }, r = Kt(null);
  let o;
  return Xt(() => {
    var f;
    if (r.current) {
      const v = (f = r.current.dataset) == null ? void 0 : f.provider;
      v && gn(v);
    }
  }, []), ((s = e.result) == null ? void 0 : s.processor) === "oembed" && ((g = (u = e.result) == null ? void 0 : u.options) != null && g.provider) && (o = (h = (m = e.result) == null ? void 0 : m.options) == null ? void 0 : h.provider), ((x = e.result) == null ? void 0 : x.processor) === "pinterest" && (o = "Pinterest"), nt(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Embed" }) : null : /* @__PURE__ */ i.jsx(
    "div",
    {
      className: w(e.baseCssClass ?? "cmp-embed", {
        "cq-dd-embed": e.isInEditor ?? !1
      }),
      id: e.id,
      ref: r,
      ...o ? { "data-provider": o } : {},
      children: /* @__PURE__ */ i.jsx(Cn, { ...a })
    }
  );
}, at = (e) => !e || e.trim().length === 0, pn = (e) => {
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
] }), Tn = ({
  alt: e,
  baseCssClass: t,
  isInEditor: a,
  link: r,
  routed: o,
  src: s,
  title: u,
  width: g
}) => r && r.trim().length > 0 ? /* @__PURE__ */ i.jsx(
  F,
  {
    className: `${t}__link`,
    href: r,
    isRouted: o,
    children: /* @__PURE__ */ i.jsx(
      Ze,
      {
        alt: e,
        baseCssClass: t,
        isInEditor: a,
        link: r,
        routed: o,
        src: s,
        title: u,
        width: g
      }
    )
  }
) : /* @__PURE__ */ i.jsx(
  Ze,
  {
    alt: e,
    baseCssClass: t,
    isInEditor: a,
    link: r,
    routed: o,
    src: s,
    title: u,
    width: g
  }
), it = Qt(
  ({
    alt: e,
    baseCssClass: t = "cmp-image",
    hidePlaceHolder: a,
    id: r,
    isInEditor: o = !1,
    link: s,
    routed: u,
    src: g,
    title: m,
    width: h
  }, x) => {
    const f = {
      className: w(t, { "cq-dd-image": o }),
      id: r
    };
    return h && (f.style = pn(h)), at(g) ? o && !a ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Image" }) : null : /* @__PURE__ */ i.jsx("div", { ...f, ref: x, children: /* @__PURE__ */ i.jsx(
      Tn,
      {
        alt: e,
        baseCssClass: t,
        isInEditor: o,
        link: s,
        routed: u,
        src: g,
        title: m,
        width: h
      }
    ) });
  }
);
it.displayName = "CoreImage";
const st = (e) => {
  var t;
  return e.items === null || ((t = e.items) == null ? void 0 : t.length) === 0;
}, Mn = (e) => /* @__PURE__ */ i.jsxs(
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
        F,
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
), ye = (e) => /* @__PURE__ */ i.jsx(i.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, a) => /* @__PURE__ */ i.jsx(
  Mn,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: a,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  },
  `${e.baseCssClass}__item-${a}`
)) }) }), er = (e) => st(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Navigation" }) : null : /* @__PURE__ */ i.jsx(
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
}, Rn = (e) => e.level > 0 ? /* @__PURE__ */ i.jsx(
  F,
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
), $n = (e) => /* @__PURE__ */ i.jsxs(
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
      /* @__PURE__ */ i.jsx(Rn, { ...e }),
      !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx(ye, { ...e })
    ]
  }
), Sn = (e) => /* @__PURE__ */ i.jsx(i.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ i.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, a) => /* @__PURE__ */ _e(
  $n,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: a,
    key: `${e.baseCssClass}__item-${a}`,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  }
)) }) }), tr = (e) => ot(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Language Navigation" }) : null : /* @__PURE__ */ i.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-languagenavigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    role: "navigation",
    children: /* @__PURE__ */ i.jsx(
      Sn,
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
    var t = e.getTimezoneOffset(), a = Math.abs(t);
    return (t > 0 ? "-" : "+") + ("0" + (a / 60 | 0)).slice(-2) + ":" + ("0" + a % 60).slice(-2);
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
    var a = (e.exec(t) || [""])[0];
    return { value: a | 0, length: a.length };
  },
  find: function(e, t) {
    for (var a = -1, r = 0, o = 0, s = e.length, u; o < s; o++)
      u = e[o], !t.indexOf(u) && u.length > r && (a = o, r = u.length);
    return { value: a, length: r };
  },
  pre: function(e) {
    return e;
  },
  res: xe
}, k = function(e, t, a, r) {
  var o = {}, s;
  for (s in e)
    o[s] = e[s];
  for (s in t || {})
    !!a ^ !!o[s] || (o[s] = t[s]);
  return r && (o.res = r), o;
}, j = {
  _formatter: lt,
  _parser: ct
}, re, C;
j.compile = function(e) {
  return [e].concat(e.match(/\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g) || []);
};
j.format = function(e, t, a) {
  for (var r = this || C, o = typeof t == "string" ? r.compile(t) : t, s = r._formatter, u = function() {
    if (a) {
      var v = new Date(e.getTime());
      return v.getFullYear = v.getUTCFullYear, v.getMonth = v.getUTCMonth, v.getDate = v.getUTCDate, v.getHours = v.getUTCHours, v.getMinutes = v.getUTCMinutes, v.getSeconds = v.getUTCSeconds, v.getMilliseconds = v.getUTCMilliseconds, v.getDay = v.getUTCDay, v.getTimezoneOffset = function() {
        return 0;
      }, v;
    }
    return e;
  }(), g = /^\[(.*)\]$/, m = "", h = 1, x = o.length, f; h < x; h++)
    f = o[h], m += s[f] ? s.post(s[f](u, o[0])) : f.replace(g, "$1");
  return m;
};
j.preparse = function(e, t) {
  var a = this || C, r = typeof t == "string" ? a.compile(t) : t, o = a._parser, s = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 }, u = " ", g = /^\[(.*)\]$/, m = "...";
  e = o.pre(e);
  for (var h = 1, x = r.length, f, v, R; h < x; h++)
    if (f = r[h], v = e.slice(s._index), o[f]) {
      if (R = o[f](v, r[0]), !R.length)
        break;
      s[R.token || f.charAt(0)] = R.value, s._index += R.length, s._match++;
    } else if (f === v.charAt(0) || f === u)
      s._index++;
    else if (g.test(f) && !v.indexOf(f.replace(g, "$1")))
      s._index += f.length - 2;
    else if (f === m) {
      s._index = e.length;
      break;
    } else
      break;
  return s.H = s.H || o.h12(s.h, s.A), s._length = e.length, s;
};
j.parse = function(e, t, a) {
  var r = this || C, o = typeof t == "string" ? r.compile(t) : t, s = r.preparse(e, o);
  return r.isValid(s) ? (s.M -= s.Y < 100 ? 22801 : 1, a || ~r._parser.find(o, "ZZ").value ? new Date(Date.UTC(s.Y, s.M, s.D, s.H, s.m + s.Z, s.s, s.S)) : new Date(s.Y, s.M, s.D, s.H, s.m, s.s, s.S)) : /* @__PURE__ */ new Date(NaN);
};
j.isValid = function(e, t) {
  var a = this || C, r = typeof e == "string" ? a.preparse(e, t) : e, o = [31, 28 + a.isLeapYear(r.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r.M - 1];
  return !(r._index < 1 || r._length < 1 || r._index - r._length || r._match < 1 || r.Y < 1 || r.Y > 9999 || r.M < 1 || r.M > 12 || r.D < 1 || r.D > o || r.H < 0 || r.H > 23 || r.m < 0 || r.m > 59 || r.s < 0 || r.s > 59 || r.S < 0 || r.S > 999 || r.Z < -840 || r.Z > 720);
};
j.transform = function(e, t, a, r) {
  const o = this || C;
  return o.format(o.parse(e, t), a, r);
};
j.addYears = function(e, t, a) {
  return (this || C).addMonths(e, t * 12, a);
};
j.addMonths = function(e, t, a) {
  var r = new Date(e.getTime());
  if (a) {
    if (r.setUTCMonth(r.getUTCMonth() + t), r.getUTCDate() < e.getUTCDate())
      return (this || C).addDays(r, -r.getUTCDate(), a);
  } else if (r.setMonth(r.getMonth() + t), r.getDate() < e.getDate())
    return (this || C).addDays(r, -r.getDate(), a);
  return r;
};
j.addDays = function(e, t, a) {
  return (this || C).addHours(e, t * 24, a);
};
j.addHours = function(e, t, a) {
  return (this || C).addMinutes(e, t * 60, a);
};
j.addMinutes = function(e, t, a) {
  return (this || C).addSeconds(e, t * 60, a);
};
j.addSeconds = function(e, t, a) {
  return (this || C).addMilliseconds(e, t * 1e3, a);
};
j.addMilliseconds = function(e, t, a) {
  var r = new Date(e.getTime());
  return a ? r.setUTCMilliseconds(r.getUTCMilliseconds() + t) : r.setMilliseconds(r.getMilliseconds() + t), r;
};
j.subtract = function(e, t) {
  var a = e.getTime() - t.getTime();
  return {
    toMilliseconds: function() {
      return a;
    },
    toSeconds: function() {
      return a / 1e3;
    },
    toMinutes: function() {
      return a / 6e4;
    },
    toHours: function() {
      return a / 36e5;
    },
    toDays: function() {
      return a / 864e5;
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
re = k(j);
C = k(j);
C.locale = function(e) {
  var t = typeof e == "function" ? e : C.locale[e];
  if (!t)
    return te;
  te = t(j);
  var a = ve[te] || {}, r = k(xe, a.res, !0), o = k(lt, a.formatter, !0, r), s = k(ct, a.parser, !0, r);
  C._formatter = re._formatter = o, C._parser = re._parser = s;
  for (var u in J)
    C.extend(J[u]);
  return te;
};
C.extend = function(e) {
  var t = k(C._parser.res, e.res), a = e.extender || {};
  C._formatter = k(C._formatter, e.formatter, !1, t), C._parser = k(C._parser, e.parser, !1, t);
  for (var r in a)
    C[r] || (C[r] = a[r]);
};
C.plugin = function(e) {
  var t = typeof e == "function" ? e : C.plugin[e];
  t && C.extend(J[t(j, re)] || {});
};
var wn = C;
const ut = (e) => e === null || (e == null ? void 0 : e.trim().length) === 0, dt = (e) => e.nested ? "-" : "__", Dn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    F,
    {
      className: `${e.baseCssClass}${dt(e)}link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: e.text
    }
  );
}, Nn = (e) => e.linkDisabled ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e.text }) : /* @__PURE__ */ i.jsx(Dn, { ...e }), Pn = (e) => ut(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "Title" }) : null : /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-title", children: ae.createElement(
  e.type ?? "h3",
  {
    className: `${e.baseCssClass ?? "cmp-title"}${dt(e)}text`
  },
  /* @__PURE__ */ i.jsx(Nn, { ...e })
) }), ft = (e) => !e.imagePath && !e.description && e.actions.length === 0, Ln = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__image`, children: /* @__PURE__ */ i.jsx(
  it,
  {
    alt: e.imageAlt,
    isInEditor: e.isInEditor,
    src: e.imagePath
  }
) }), On = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__pretitle`, children: e.pretitle }), kn = (e) => /* @__PURE__ */ i.jsx(
  Pn,
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
}, An = (e) => /* @__PURE__ */ i.jsx("div", { className: `${e.baseCssClass}__action-container`, children: e.actions.map((t, a) => {
  var s;
  const r = e.componentMapping ?? qe;
  let o = et;
  return (s = e.cqType) != null && s.endsWith("/teaser") && (o = r.get(
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
    `link-${a}`
  );
}) }), In = (e) => {
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
        e.imagePath && /* @__PURE__ */ i.jsx(Ln, { ...t }),
        /* @__PURE__ */ i.jsxs("div", { className: `${t.baseCssClass}__content`, children: [
          e.pretitle && /* @__PURE__ */ i.jsx(On, { ...t }),
          e.title && /* @__PURE__ */ i.jsx(kn, { ...t }),
          e.description && /* @__PURE__ */ i.jsx(Fn, { ...t }),
          e.actions.length > 0 && t.actionsEnabled && /* @__PURE__ */ i.jsx(An, { ...t })
        ] })
      ]
    }
  );
}, mt = (e) => e === null || e.length === 0, Yn = (e) => {
  const t = e.lastModifiedFormatted ? e.lastModifiedFormatted : e.lastModified && e.dateFormatString ? wn.format(
    new Date(e.lastModified),
    e.dateFormatString.toUpperCase()
  ) : "";
  return /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-date`, children: t });
}, ht = (e) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-title`, children: e.title }),
  e.showModificationDate && /* @__PURE__ */ i.jsx(Yn, { ...e })
] }), Un = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx(
    F,
    {
      className: `${e.baseCssClass}__item-link`,
      href: (t = e.link) == null ? void 0 : t.url,
      isRouted: e.routed,
      children: /* @__PURE__ */ i.jsx(ht, { ...e })
    }
  );
}, Hn = (e) => /* @__PURE__ */ i.jsx("span", { className: `${e.baseCssClass}__item-description`, children: e.description }), Bn = (e) => {
  var t;
  return /* @__PURE__ */ i.jsx("li", { className: `${e.baseCssClass}__item`, children: /* @__PURE__ */ i.jsxs("article", { children: [
    e.linkItems && !!((t = e.link) != null && t.url) && /* @__PURE__ */ i.jsx(Un, { ...e }),
    !e.linkItems && /* @__PURE__ */ i.jsx(ht, { ...e, index: e.index }),
    e.showDescription && /* @__PURE__ */ i.jsx(Hn, { ...e })
  ] }) });
}, nr = (e) => mt(e.items) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ i.jsx(N, { componentTitle: "List" }) : null : e.displayItemAsTeaser ? /* @__PURE__ */ i.jsx(
  "div",
  {
    className: w(
      e.baseCssClass ?? "cmp-list",
      `${e.baseCssClass ?? "cmp-list"}--as-teasers`
    ),
    id: e.id,
    children: e.items.map((t, a) => /* @__PURE__ */ i.jsx(
      In,
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
      `cmp-list-${a}`
    ))
  }
) : /* @__PURE__ */ i.jsx("ul", { className: e.baseCssClass ?? "cmp-list", id: e.id, children: e.items.map((t, a) => /* @__PURE__ */ _e(
  Bn,
  {
    ...t,
    baseCssClass: e.baseCssClass ?? "cmp-list",
    dateFormatString: e.dateFormatString,
    linkItems: e.linkItems,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed,
    showDescription: e.showDescription,
    showModificationDate: e.showModificationDate,
    index: a,
    key: `cmp-list-${a}`
  }
)) }), gt = (e) => e === null || (e == null ? void 0 : e.length) === 0, Wn = (e) => Ge.sanitize(e), rr = (e) => {
  let { text: t } = e;
  if (e.richText) {
    const a = {
      replace(r) {
        if (r instanceof tn && r.tagName === "a") {
          const { attribs: o } = r, s = {
            ...o,
            className: o.class
          };
          return delete s.class, /* @__PURE__ */ i.jsx(F, { ...s, children: nn(r.children, a) });
        }
      }
    };
    t = ne(Wn(t), a);
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
}, ar = {
  emptyLabel: "Breadcrumb",
  isEmpty(e) {
    return Ke(e.items);
  }
}, ir = {
  emptyLabel: "Button",
  isEmpty(e) {
    return Qe(e.text);
  }
}, sr = {
  emptyLabel: "Download",
  isEmpty(e) {
    const { url: t, handleOnClick: a } = e;
    return tt({
      handleOnClick: a,
      url: t
    });
  }
}, or = {
  emptyLabel: "Embed",
  isEmpty(e) {
    return nt(e);
  }
}, lr = {
  emptyLabel: "Image",
  isEmpty({ src: e }) {
    return at(e);
  }
}, cr = {
  emptyLabel: "Language Navigation",
  isEmpty(e) {
    return ot(e);
  }
}, ur = {
  emptyLabel: "List",
  isEmpty(e) {
    return mt(e.items);
  }
}, dr = {
  emptyLabel: "Navigation",
  isEmpty(e) {
    return st(e);
  }
}, fr = {
  emptyLabel: "Teaser",
  isEmpty(e) {
    return ft(e);
  }
}, mr = {
  emptyLabel: "Title",
  isEmpty(e) {
    return ut(e.text);
  }
}, hr = {
  emptyLabel: "Text",
  isEmpty(e) {
    return gt(e.text);
  }
}, gr = (e) => /* @__PURE__ */ i.jsx("div", { className: e.baseCssClass ?? "cmp-separator", id: e.id, children: /* @__PURE__ */ i.jsx(
  "hr",
  {
    className: `${e.baseCssClass ?? "cmp-separator"}__horizontal-rule`
  }
) });
export {
  ar as BreadCrumbEditConfig,
  ir as ButtonEditConfig,
  Kn as CoreBreadCrumb,
  et as CoreButton,
  Xn as CoreDownload,
  Qn as CoreEmbed,
  it as CoreImage,
  tr as CoreLanguageNavigation,
  F as CoreLink,
  nr as CoreList,
  er as CoreNavigation,
  gr as CoreSeparator,
  In as CoreTeaser,
  rr as CoreText,
  Pn as CoreTitle,
  sr as DownloadEditConfig,
  or as EmbedEditConfig,
  lr as ImageEditConfig,
  cr as LanguageNavigationEditConfig,
  ur as ListEditConfig,
  dr as NavigationEditConfig,
  fr as TeaserEditConfig,
  hr as TextEditConfig,
  mr as TitleEditConfig
};
