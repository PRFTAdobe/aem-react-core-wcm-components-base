import U, { createElement as W, useRef as Se, useEffect as Ae, forwardRef as De } from "react";
import x from "classnames";
import { AuthoringUtils as Oe } from "@adobe/aem-spa-page-model-manager";
import { NavLink as Ie } from "react-router-dom";
import { ComponentMapping as ae } from "@adobe/aem-react-editable-components";
import ie from "dompurify";
import S, { Element as Fe, domToReact as He } from "html-react-parser";
var L = { exports: {} }, R = {};
var Q;
function Ye() {
  if (Q) return R;
  Q = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(i, a, l) {
    var c = null;
    if (l !== void 0 && (c = "" + l), a.key !== void 0 && (c = "" + a.key), "key" in a) {
      l = {};
      for (var u in a)
        u !== "key" && (l[u] = a[u]);
    } else l = a;
    return a = l.ref, {
      $$typeof: e,
      type: i,
      key: c,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return R.Fragment = t, R.jsx = n, R.jsxs = n, R;
}
var P = {};
var K;
function Be() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === we ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case T:
          return "Fragment";
        case A:
          return "Profiler";
        case p:
          return "StrictMode";
        case Re:
          return "Suspense";
        case Pe:
          return "SuspenseList";
        case pe:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case M:
            return "Portal";
          case Te:
            return r.displayName || "Context";
          case $e:
            return (r._context.displayName || "Context") + ".Consumer";
          case Ne:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Me:
            return o = r.displayName || null, o !== null ? o : e(r.type) || "Memo";
          case D:
            o = r._payload, r = r._init;
            try {
              return e(r(o));
            } catch {
            }
        }
      return null;
    }
    function t(r) {
      return "" + r;
    }
    function n(r) {
      try {
        t(r);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var m = o.error, f = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return m.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), t(r);
      }
    }
    function i(r) {
      if (r === T) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === D)
        return "<...>";
      try {
        var o = e(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var r = O.A;
      return r === null ? null : r.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (q.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function u(r, o) {
      function m() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: m,
        configurable: !0
      });
    }
    function y() {
      var r = e(this.type);
      return V[r] || (V[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function d(r, o, m, f, w, F) {
      var g = m.ref;
      return r = {
        $$typeof: C,
        type: r,
        key: o,
        props: m,
        _owner: f
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function h(r, o, m, f, w, F) {
      var g = o.children;
      if (g !== void 0)
        if (f)
          if (Le(g)) {
            for (f = 0; f < g.length; f++)
              b(g[f]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(g);
      if (q.call(o, "key")) {
        g = e(r);
        var N = Object.keys(o).filter(function(ke) {
          return ke !== "key";
        });
        f = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", X[g + f] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          g,
          N,
          g
        ), X[g + f] = !0);
      }
      if (g = null, m !== void 0 && (n(m), g = "" + m), c(o) && (n(o.key), g = "" + o.key), "key" in o) {
        m = {};
        for (var H in o)
          H !== "key" && (m[H] = o[H]);
      } else m = o;
      return g && u(
        m,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), d(
        r,
        g,
        m,
        a(),
        w,
        F
      );
    }
    function b(r) {
      _(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === D && (r._payload.status === "fulfilled" ? _(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function _(r) {
      return typeof r == "object" && r !== null && r.$$typeof === C;
    }
    var j = U, C = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), $e = Symbol.for("react.consumer"), Te = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), Me = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), pe = Symbol.for("react.activity"), we = Symbol.for("react.client.reference"), O = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, Le = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var J, V = {}, G = j.react_stack_bottom_frame.bind(
      j,
      l
    )(), Z = I(i(l)), X = {};
    P.Fragment = T, P.jsx = function(r, o, m) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        r,
        o,
        m,
        !1,
        f ? Error("react-stack-top-frame") : G,
        f ? I(i(r)) : Z
      );
    }, P.jsxs = function(r, o, m) {
      var f = 1e4 > O.recentlyCreatedOwnerStacks++;
      return h(
        r,
        o,
        m,
        !0,
        f ? Error("react-stack-top-frame") : G,
        f ? I(i(r)) : Z
      );
    };
  })()), P;
}
var ee;
function Ue() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? L.exports = Ye() : L.exports = Be()), L.exports;
}
var s = Ue();
const $ = (e) => {
  const { className: t, href: n, isRouted: i, baseCssClass: a, valid: l, ...c } = e, u = (d = "cmp-link", h = "", b = !1) => {
    const _ = [d];
    return b && _.push(`${d}--active`), h.length && _.push(h), _;
  };
  return n === void 0 || n.trim().length === 0 ? /* @__PURE__ */ s.jsx(
    "a",
    {
      className: u(a, t, !1).join(" "),
      href: "#",
      ...c
    }
  ) : /^https?:\/\//.test(n) || i === !1 || Oe.isInEditor() ? /* @__PURE__ */ s.jsx(
    "a",
    {
      className: u(a, t, !1).join(" "),
      href: n,
      ...c
    }
  ) : /* @__PURE__ */ s.jsx(
    Ie,
    {
      className: ({ isActive: d }) => u(a, t, d).join(" "),
      to: n,
      ...c
    }
  );
}, We = "Please configure the component", E = ({
  componentTitle: e,
  emptyTextAppend: t,
  classAppend: n
}) => {
  const l = (e && e.length > 0 ? `${e} - ` : "") + (t ?? We);
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: x("cq-placeholder", {
        [n]: n !== null
      }),
      children: l
    }
  );
}, le = (e) => typeof e > "u" || e === null || e.length === 0, oe = ({
  title: e,
  current: t = !1
}) => {
  const n = {
    itemProp: "name"
  };
  return t && (n["aria-current"] = "page"), /* @__PURE__ */ s.jsx("span", { ...n, children: e });
}, ze = ({
  baseCssClass: e,
  link: t,
  routed: n,
  title: i
}) => {
  const { url: a, ...l } = t;
  return /* @__PURE__ */ s.jsx(
    $,
    {
      className: `${e}__item-link`,
      href: a,
      isRouted: n ?? !0,
      itemProp: "item",
      ...l,
      children: /* @__PURE__ */ s.jsx(oe, { title: i })
    }
  );
}, qe = (e) => {
  const t = e.index ? e.index.toString(2) : "noindex";
  return /* @__PURE__ */ s.jsxs(
    "li",
    {
      className: x(`${e.baseCssClass}__item`, {
        [`${e.baseCssClass}__item--active`]: e.active
      }),
      itemProp: "itemListElement",
      itemScope: !0,
      itemType: "http://schema.org/ListItem",
      children: [
        !e.active && /* @__PURE__ */ s.jsx(ze, { ...e }),
        e.active && /* @__PURE__ */ s.jsx(oe, { current: !0, title: e.title }),
        /* @__PURE__ */ s.jsx("meta", { content: t, itemProp: "position" })
      ]
    }
  );
}, qt = ({
  ariaLabel: e,
  hidePlaceHolder: t,
  id: n,
  isInEditor: i,
  items: a,
  baseCssClass: l = "cmp-breadcrumb"
}) => le(a) ? i && !t ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Breadcrumb" }) : null : /* @__PURE__ */ s.jsx(
  "nav",
  {
    "aria-label": e || "BreadCrumb",
    className: l,
    id: n,
    children: /* @__PURE__ */ s.jsx(
      "ol",
      {
        className: `${l}__list`,
        itemScope: !0,
        itemType: "http://schema.org/BreadcrumbList",
        children: a.map((c, u) => /* @__PURE__ */ W(
          qe,
          {
            ...c,
            baseCssClass: l,
            index: u,
            key: `crumbitem-${u}`
          }
        ))
      }
    )
  }
), ce = (e) => typeof e > "u" || e === null || e?.length === 0, te = ({ baseCssClass: e, icon: t, text: n }) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  t && /* @__PURE__ */ s.jsx(
    "span",
    {
      className: x(
        `${e}__icon`,
        `${e}__icon--${t}`
      )
    }
  ),
  /* @__PURE__ */ s.jsx("span", { className: `${e}__text`, children: n })
] }), ue = ({
  ariaLabel: e,
  buttonLink: t,
  className: n,
  hidePlaceHolder: i,
  id: a,
  icon: l,
  isInEditor: c,
  text: u,
  handleOnClick: y,
  routed: d,
  baseCssClass: h = "cmp-button",
  type: b = "button"
}) => {
  const _ = (C) => {
    y && y(C);
  }, j = !!t?.url;
  return ce(u) ? c && !i ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Button" }) : null : j ? /* @__PURE__ */ s.jsx(
    $,
    {
      "aria-label": e,
      className: x(h, n),
      href: t?.url,
      id: a,
      isRouted: d,
      onClick: _,
      children: /* @__PURE__ */ s.jsx(
        te,
        {
          baseCssClass: h,
          icon: l,
          isInEditor: c,
          text: u
        }
      )
    }
  ) : /* @__PURE__ */ s.jsx(
    "button",
    {
      className: x(h, n),
      id: a,
      onClick: _,
      type: b,
      children: /* @__PURE__ */ s.jsx(
        te,
        {
          baseCssClass: h,
          icon: l,
          isInEditor: c,
          text: u
        }
      )
    }
  );
}, de = ({
  url: e,
  handleOnClick: t
}) => (typeof e > "u" || e === null || e?.length === 0) && (typeof t > "u" || t === null), Je = ({ url: e }) => e && e.length > 0 ? e : "#", Y = (e, t, n, i) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: x(
      `${i}__property`,
      `${i}__property--${n}`
    ),
    children: [
      /* @__PURE__ */ s.jsx("dt", { className: `${i}__property-label`, children: e }),
      /* @__PURE__ */ s.jsx("dd", { className: `${i}__property-content`, children: t })
    ]
  }
), Ve = ({
  baseCssClass: e,
  title: t,
  url: n,
  handleOnClick: i
}) => {
  const a = (l) => {
    i && i(l);
  };
  return (n && n?.length !== 0) ?? i ? /* @__PURE__ */ s.jsx(
    $,
    {
      className: `${e}__title-link`,
      href: Je({ url: n }),
      isRouted: !1,
      onClick: a,
      children: t
    }
  ) : t;
}, Ge = ({
  handleOnClick: e,
  url: t,
  baseCssClass: n,
  title: i,
  titleType: a = "h3"
}) => U.createElement(
  `${a}`,
  {
    className: `${n}__title`
  },
  /* @__PURE__ */ s.jsx(
    Ve,
    {
      baseCssClass: n,
      handleOnClick: e,
      title: i,
      url: t
    }
  )
), Ze = ({
  baseCssClass: e,
  displayFilename: t,
  displayFormat: n,
  displaySize: i,
  filename: a,
  format: l,
  size: c
}) => /* @__PURE__ */ s.jsxs("dl", { className: `${e}__properties`, children: [
  t && Y("Filename", a, "filename", e),
  i && Y("Size", c, "size", e),
  n && Y("Format", l, "format", e)
] }), Xe = ({
  baseCssClass: e,
  description: t
}) => {
  const n = String(t) || "";
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${e}__description`,
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}, Qe = ({
  actionText: e = "Download",
  baseCssClass: t,
  cqType: n,
  componentMapping: i,
  handleOnClick: a,
  isInEditor: l,
  url: c
}) => {
  const u = i ?? ae;
  let y = ue;
  n?.endsWith("/download") && (y = u.get(
    n.replace("/download", "/button")
  ));
  const d = (h) => {
    a && a(h);
  };
  return /* @__PURE__ */ s.jsx(
    y,
    {
      buttonLink: { url: c ?? "#" },
      className: `${t}__action`,
      handleOnClick: d,
      isInEditor: l,
      routed: !1,
      text: e
    }
  );
}, Jt = ({
  actionText: e,
  componentMapping: t,
  cqType: n,
  description: i,
  filename: a,
  format: l,
  handleOnClick: c,
  hidePlaceHolder: u,
  id: y,
  isInEditor: d,
  size: h,
  title: b,
  titleType: _,
  url: j,
  baseCssClass: C = "cmp-download",
  displayFilename: M = !1,
  displayFormat: T = !1,
  displaySize: p = !1
}) => {
  const A = M || p || T;
  return de({ handleOnClick: c, url: j }) ? d && !u ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Download" }) : null : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: x(C, { "cq-dd-file": d }),
      id: y,
      children: [
        !!b && /* @__PURE__ */ s.jsx(
          Ge,
          {
            baseCssClass: C,
            handleOnClick: c,
            title: b,
            titleType: _,
            url: j
          }
        ),
        !!i && /* @__PURE__ */ s.jsx(Xe, { baseCssClass: C, description: i }),
        A && /* @__PURE__ */ s.jsx(
          Ze,
          {
            baseCssClass: C,
            displayFilename: M,
            displayFormat: T,
            displaySize: p,
            filename: a,
            format: l,
            size: h
          }
        ),
        /* @__PURE__ */ s.jsx(
          Qe,
          {
            actionText: e,
            baseCssClass: C,
            componentMapping: t,
            cqType: n,
            handleOnClick: c,
            isInEditor: d,
            url: j
          }
        )
      ]
    }
  );
}, me = (e) => {
  let t = !1;
  return e.type === "URL" ? t = typeof e.url < "u" && typeof e.result?.processor < "u" : e.type === "EMBEDDABLE" ? t = typeof e.youTubeProps?.youtubeVideoId < "u" : e.type === "HTML" && (t = !!e.html), !e || !t;
}, Ke = (e) => {
  let t;
  if (e === "Twitter" ? t = "//platform.twitter.com/widgets.js" : e === "Pinterest" && (t = "//assets.pinterest.com/js/pinit.js"), t) {
    let n = document.querySelector(`script[src="${t}"]`);
    n ? n.dataset.loaded === "true" ? typeof window.PinUtils?.build == "function" && window.PinUtils.build() : n.addEventListener("load", () => {
      typeof window.PinUtils?.build == "function" && window.PinUtils.build();
    }) : et(t).then(() => {
      typeof window.PinUtils?.build == "function" && window.PinUtils.build(), n = document.querySelector(`script[src="${t}"]`), n.dataset.loaded = "true";
    }).catch((i) => {
      console.error(i);
    });
  }
}, et = (e, t = !0, n = "text/javascript") => new Promise((i, a) => {
  try {
    const l = document.createElement("script");
    l.type = n, l.async = t, l.src = e, l.addEventListener("load", () => {
      i({ status: !0 });
    }), l.addEventListener("error", () => {
      a({
        message: "Failed to load the script ＄{FILE_URL}",
        status: !1
      });
    }), document.body.appendChild(l);
  } catch (l) {
    a(l);
  }
}), tt = (e) => {
  if (e?.options?.response) {
    const { response: t } = e.options;
    return t.type;
  }
}, st = (e) => {
  if (e?.options?.response)
    return e.options.response.url;
}, nt = (e) => {
  if (e?.options?.response)
    return e.options.response.title;
}, k = (e) => {
  if (e?.options?.response) {
    const { response: t } = e.options;
    return t.html;
  }
}, fe = (e) => ie.sanitize(e), rt = (e) => {
  const t = e?.youtubeVideoId, n = e?.youtubeAutoPlay, i = e?.youtubeLoop, a = e?.youtubeMute, l = e?.youtubePlaysInline, c = e?.youtubeRel, u = `https://www.youtube.com/embed/${t}`, y = {
    autoplay: `${+n}`,
    loop: `${+i}`,
    mute: `${+a}`,
    playlist: `${t}`,
    playsinline: `${+l}`,
    rel: `${+c}`
  }, d = new URLSearchParams(y).toString();
  return `${u}?${d}`;
}, at = (e) => {
  if (e.type === "HTML")
    return S(fe(e.html));
  if (e.type === "EMBEDDABLE")
    return e.youTubeProps?.layout === "responsive" ? /* @__PURE__ */ s.jsx(
      "div",
      {
        className: `${e.baseCssClass}__embeddable-wrapper`,
        style: {
          paddingBottom: e.youTubeProps?.layout === "responsive" ? `${e.youTubeProps?.youtubeAspectRatio}%` : 0
        },
        children: /* @__PURE__ */ s.jsx(se, { ...e })
      }
    ) : /* @__PURE__ */ s.jsx(se, { ...e });
  if (e.type === "URL")
    return e.result?.processor === "pinterest" ? /* @__PURE__ */ s.jsx("a", { "data-pin-build": "doBuild", "data-pin-do": "embedPin", href: e.url, children: e.url }) : /* @__PURE__ */ s.jsx(lt, { ...e });
}, se = (e) => /* @__PURE__ */ s.jsx(
  "iframe",
  {
    allow: e.youTubeProps?.youtubeAutoPlay ? "autoplay; fullscreen;" : "fullscreen;",
    allowFullScreen: !0,
    "aria-label": "YouTube Video",
    className: `${e.baseCssClass}__embeddable-iframe`,
    frameBorder: 0,
    height: e.youTubeProps?.layout === "responsive" ? "100%" : e.youTubeProps?.youtubeHeight,
    src: rt(e.youTubeProps),
    title: "YouTube Video",
    type: "text/html",
    width: e.youTubeProps?.layout === "responsive" ? "100%" : e.youTubeProps?.youtubeWidth
  }
), it = (e) => e?.options?.response ? (
  // biome-ignore lint/a11y/useAltText: This is fine.
  /* @__PURE__ */ s.jsx(
    "img",
    {
      alt: e?.options?.response?.title,
      height: e?.options?.response?.height,
      src: e?.options?.response?.url,
      title: e?.options?.response?.title,
      width: e?.options?.response?.width
    }
  )
) : null, lt = (e) => {
  const t = tt(e.result);
  if (t === "photo")
    return /* @__PURE__ */ s.jsx(it, { ...e.result });
  if (t === "link")
    return /* @__PURE__ */ s.jsx("a", { href: st(e.result), children: nt(e.result) });
  if (t === "video")
    return k(e.result) ? S(k(e.result)) : null;
  if (t === "rich")
    return k(e.result) ? S(fe(k(e.result))) : null;
}, Vt = (e) => {
  const t = e.baseCssClass ?? "cmp-embed", n = { ...e, baseCssClass: t }, i = Se(null);
  let a;
  return Ae(() => {
    if (i.current) {
      const l = i.current.dataset?.provider;
      l && Ke(l);
    }
  }, []), e.result?.processor === "oembed" && e.result?.options?.provider && (a = e.result?.options?.provider), e.result?.processor === "pinterest" && (a = "Pinterest"), me(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Embed" }) : null : /* @__PURE__ */ s.jsx(
    "div",
    {
      className: x(e.baseCssClass ?? "cmp-embed", {
        "cq-dd-embed": e.isInEditor ?? !1
      }),
      id: e.id,
      ref: i,
      ...a ? { "data-provider": a } : {},
      children: /* @__PURE__ */ s.jsx(at, { ...n })
    }
  );
}, ge = (e) => !e || e.trim().length === 0, ot = (e) => {
  let t = "px";
  return /^(\d+|(\.\d+))(\.\d+)?%$/.test(e) && (t = ""), {
    "--asset-max-inline-size": `${e}${t}`
  };
}, ne = (e) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  /* @__PURE__ */ s.jsx(
    "img",
    {
      alt: e.alt,
      className: x(`${e.baseCssClass}__image`, {
        "cmp-asset": typeof e.width < "u"
      }),
      src: e.src
    }
  ),
  !!e.title && /* @__PURE__ */ s.jsx(
    "figcaption",
    {
      className: `${e.baseCssClass}__title`,
      itemProp: "caption",
      children: e.title
    }
  ),
  e.displayPopupTitle && !!e.title && /* @__PURE__ */ s.jsx("meta", { content: e.title, itemProp: "caption" })
] }), ct = ({
  alt: e,
  baseCssClass: t,
  isInEditor: n,
  imageLink: i,
  routed: a,
  src: l,
  title: c,
  width: u
}) => i && i.url.trim().length > 0 ? /* @__PURE__ */ s.jsx(
  $,
  {
    className: `${t}__link`,
    href: i.url,
    isRouted: a,
    children: /* @__PURE__ */ s.jsx(
      ne,
      {
        alt: e,
        baseCssClass: t,
        imageLink: i,
        isInEditor: n,
        routed: a,
        src: l,
        title: c,
        width: u
      }
    )
  }
) : /* @__PURE__ */ s.jsx(
  ne,
  {
    alt: e,
    baseCssClass: t,
    imageLink: i,
    isInEditor: n,
    routed: a,
    src: l,
    title: c,
    width: u
  }
), he = De(
  ({
    alt: e,
    baseCssClass: t = "cmp-image",
    hidePlaceHolder: n,
    id: i,
    isInEditor: a = !1,
    imageLink: l,
    routed: c,
    src: u,
    title: y,
    width: d
  }, h) => {
    const b = {
      className: x(t, { "cq-dd-image": a }),
      id: i
    };
    return d && (b.style = ot(d)), ge(u) ? a && !n ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Image" }) : null : /* @__PURE__ */ s.jsx("div", { ...b, ref: h, children: /* @__PURE__ */ s.jsx(
      ct,
      {
        alt: e,
        baseCssClass: t,
        imageLink: l,
        isInEditor: a,
        routed: c,
        src: u,
        title: y,
        width: d
      }
    ) });
  }
);
he.displayName = "CoreImage";
const be = (e) => e.items === null || e.items?.length === 0, ut = (e) => /* @__PURE__ */ s.jsxs(
  "li",
  {
    className: x(
      `${e.baseCssClass}__item`,
      `${e.baseCssClass}__item--level-${e.level}`,
      {
        [`${e.baseCssClass}__item--active`]: e.active
      }
    ),
    children: [
      /* @__PURE__ */ s.jsx(
        $,
        {
          "aria-current": e.active && "page",
          className: `${e.baseCssClass}__item-link`,
          href: e.link.url,
          isRouted: e.routed,
          title: e.title,
          children: e.title
        }
      ),
      !!e.children && e.children.length > 0 && /* @__PURE__ */ s.jsx(z, { ...e, baseCssClass: e.baseCssClass })
    ]
  }
), z = (e) => /* @__PURE__ */ s.jsx(s.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ s.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, n) => /* @__PURE__ */ s.jsx(
  ut,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: n,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  },
  `${e.baseCssClass}__item-${n}`
)) }) }), Gt = (e) => be(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Navigation" }) : null : /* @__PURE__ */ s.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-navigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    children: /* @__PURE__ */ s.jsx(
      z,
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
), ye = (e) => e.items === null || e.items?.length === 0, dt = (e) => e.level > 0 ? /* @__PURE__ */ s.jsx(
  $,
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
) : /* @__PURE__ */ s.jsx(
  "span",
  {
    className: `${e.baseCssClass}__item-title`,
    lang: e.language,
    children: e.title
  }
), mt = (e) => /* @__PURE__ */ s.jsxs(
  "li",
  {
    className: x(
      `${e.baseCssClass}__item`,
      `${e.baseCssClass}__item--level-${e.level}`,
      `${e.baseCssClass}__item--countrycode-${e.country}`,
      `${e.baseCssClass}__item--langcode-${e.language}`,
      {
        [`${e.baseCssClass}__item--active`]: e.active
      }
    ),
    children: [
      /* @__PURE__ */ s.jsx(dt, { ...e }),
      !!e.children && e.children.length > 0 && /* @__PURE__ */ s.jsx(z, { ...e })
    ]
  }
), ft = (e) => /* @__PURE__ */ s.jsx(s.Fragment, { children: !!e.children && e.children.length > 0 && /* @__PURE__ */ s.jsx("ul", { className: `${e.baseCssClass}__group`, children: e.children.map((t, n) => /* @__PURE__ */ W(
  mt,
  {
    ...t,
    baseCssClass: e.baseCssClass,
    index: n,
    key: `${e.baseCssClass}__item-${n}`,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed
  }
)) }) }), Zt = (e) => ye(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Language Navigation" }) : null : /* @__PURE__ */ s.jsx(
  "nav",
  {
    "aria-label": e.accessibilityLabel,
    className: e.baseCssClass ?? "cmp-languagenavigation",
    id: e.id,
    itemScope: !0,
    itemType: "http://schema.org/SiteNavigationElement",
    children: /* @__PURE__ */ s.jsx(
      ft,
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
const gt = /\\\[/g, ht = /\\\]/g, bt = /\uE000/g, yt = /\uE001/g, xt = /\[(?:[^[\]]|\[[^[\]]*])*]|([A-Za-z])\1*|\.{3}|./g, _t = (e) => {
  const t = e.replace(gt, "").replace(ht, "").match(xt) || [];
  return [e, ...t.map((n) => n.replace(bt, "[").replace(yt, "]"))];
};
class jt {
}
const B = (e, t) => e.getFullYear() + (t === "buddhist" ? 543 : 0), Et = new class extends jt {
  YYYY(e, t) {
    return `000${B(e, t.calendar)}`.slice(-4);
  }
  YY(e, t) {
    return `0${B(e, t.calendar)}`.slice(-2);
  }
  Y(e, t) {
    return `${B(e, t.calendar)}`;
  }
  MMMM(e, t, n) {
    return t.locale.getMonthList({ style: "long", compiledObj: n })[e.getMonth()] || "";
  }
  MMM(e, t, n) {
    return t.locale.getMonthList({ style: "short", compiledObj: n })[e.getMonth()] || "";
  }
  MM(e) {
    return `0${e.getMonth() + 1}`.slice(-2);
  }
  M(e) {
    return `${e.getMonth() + 1}`;
  }
  DD(e) {
    return `0${e.getDate()}`.slice(-2);
  }
  D(e) {
    return `${e.getDate()}`;
  }
  HH(e, t) {
    return `0${e.getHours() || (t.hour24 === "h24" ? 24 : 0)}`.slice(-2);
  }
  H(e, t) {
    return `${e.getHours() || (t.hour24 === "h24" ? 24 : 0)}`;
  }
  AA(e, t, n) {
    return t.locale.getMeridiemList({ style: "long", compiledObj: n, case: "uppercase" })[+(e.getHours() > 11)] || "";
  }
  A(e, t, n) {
    return t.locale.getMeridiemList({ style: "short", compiledObj: n, case: "uppercase" })[+(e.getHours() > 11)] || "";
  }
  aa(e, t, n) {
    return t.locale.getMeridiemList({ style: "long", compiledObj: n, case: "lowercase" })[+(e.getHours() > 11)] || "";
  }
  a(e, t, n) {
    return t.locale.getMeridiemList({ style: "short", compiledObj: n, case: "lowercase" })[+(e.getHours() > 11)] || "";
  }
  hh(e, t) {
    return `0${e.getHours() % 12 || (t.hour12 === "h12" ? 12 : 0)}`.slice(-2);
  }
  h(e, t) {
    return `${e.getHours() % 12 || (t.hour12 === "h12" ? 12 : 0)}`;
  }
  mm(e) {
    return `0${e.getMinutes()}`.slice(-2);
  }
  m(e) {
    return `${e.getMinutes()}`;
  }
  ss(e) {
    return `0${e.getSeconds()}`.slice(-2);
  }
  s(e) {
    return `${e.getSeconds()}`;
  }
  SSS(e) {
    return `00${e.getMilliseconds()}`.slice(-3);
  }
  SS(e) {
    return `00${e.getMilliseconds()}`.slice(-3, -1);
  }
  S(e) {
    return `00${e.getMilliseconds()}`.slice(-3, -2);
  }
  dddd(e, t, n) {
    return t.locale.getDayOfWeekList({ style: "long", compiledObj: n })[e.getDay()] || "";
  }
  ddd(e, t, n) {
    return t.locale.getDayOfWeekList({ style: "short", compiledObj: n })[e.getDay()] || "";
  }
  dd(e, t, n) {
    return t.locale.getDayOfWeekList({ style: "narrow", compiledObj: n })[e.getDay()] || "";
  }
  Z(e) {
    const t = e.getTimezoneOffset(), n = Math.abs(t);
    return `${t > 0 ? "-" : "+"}${("0" + (n / 60 | 0)).slice(-2)}${("0" + n % 60).slice(-2)}`;
  }
  ZZ(e) {
    const t = e.getTimezoneOffset(), n = Math.abs(t);
    return `${t > 0 ? "-" : "+"}${("0" + (n / 60 | 0)).slice(-2)}:${("0" + n % 60).slice(-2)}`;
  }
}(), v = { MMMM: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dddd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], A: ["AM", "PM"], AA: ["A.M.", "P.M."], a: ["am", "pm"], aa: ["a.m.", "p.m."] };
var Ct = new class {
  getLocale() {
    return "en";
  }
  getMonthList(e) {
    return e.style === "long" ? v.MMMM : v.MMM;
  }
  getDayOfWeekList(e) {
    return e.style === "long" ? v.dddd : e.style === "short" ? v.ddd : v.dd;
  }
  getMeridiemList(e) {
    return e.style === "long" ? e.case === "lowercase" ? v.aa : v.AA : e.case === "lowercase" ? v.a : v.A;
  }
}(), vt = { encode: (e) => e, decode: (e) => e };
const re = /^\[(.*)\]$/;
function $t(e, t, n) {
  const i = (typeof t == "string" ? _t(t) : t).slice(1), a = void 0, l = e, c = { hour12: "h12", hour24: "h23", numeral: vt, calendar: "gregory", timeZone: a, locale: Ct }, u = [Et], y = c.numeral.encode;
  return i.reduce((d, h) => d + ((b, _) => {
    for (const j of u) if (j[b]) return y(j[b](l, c, _));
    return re.test(b) ? b.replace(re, "$1") : b;
  })(h, i), "");
}
const xe = (e) => e === null || e?.trim().length === 0, _e = (e) => e.nested ? "-" : "__", Tt = (e) => /* @__PURE__ */ s.jsx(
  $,
  {
    className: `${e.baseCssClass}${_e(e)}link`,
    href: e.link?.url,
    isRouted: e.routed,
    children: e.text
  }
), Nt = (e) => e.linkDisabled ? /* @__PURE__ */ s.jsx(s.Fragment, { children: e.text }) : /* @__PURE__ */ s.jsx(Tt, { ...e }), Rt = (e) => xe(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Title" }) : null : /* @__PURE__ */ s.jsx("div", { className: e.baseCssClass ?? "cmp-title", children: U.createElement(
  e.type ?? "h3",
  {
    className: `${e.baseCssClass ?? "cmp-title"}${_e(e)}text`
  },
  /* @__PURE__ */ s.jsx(Nt, { ...e })
) }), je = (e) => !e.title && !e.imagePath && !e.description && e.actions.length === 0, Pt = (e) => /* @__PURE__ */ s.jsx("div", { className: `${e.baseCssClass}__image`, children: /* @__PURE__ */ s.jsx(
  he,
  {
    alt: e.imageAlt,
    isInEditor: e.isInEditor,
    src: e.imagePath
  }
) }), Mt = (e) => /* @__PURE__ */ s.jsx("div", { className: `${e.baseCssClass}__pretitle`, children: e.pretitle }), pt = (e) => /* @__PURE__ */ s.jsx(
  Rt,
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
), wt = (e) => {
  const t = e.description;
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `${e.baseCssClass}__description`,
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}, Lt = (e) => /* @__PURE__ */ s.jsx("div", { className: `${e.baseCssClass}__action-container`, children: e.actions.map((t, n) => {
  const i = e.componentMapping ?? ae;
  let a = ue;
  return e.cqType?.endsWith("/teaser") && (a = i.get(
    e.cqType.replace("/teaser", "/button")
  )), /* @__PURE__ */ s.jsx(
    a,
    {
      buttonLink: t.link,
      className: `${e.baseCssClass}__action-link`,
      isInEditor: e.isInEditor,
      routed: e.routed,
      text: e.title
    },
    `link-${n}`
  );
}) }), kt = (e) => {
  const t = {
    ...e,
    baseCssClass: e.baseCssClass ?? "cmp-teaser"
  };
  return je(e) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Teaser" }) : null : /* @__PURE__ */ s.jsx(
    "div",
    {
      className: x(
        t.baseCssClass,
        {
          [`${t.baseCssClass}--with-image`]: e.imagePath
        },
        {
          "cq-dd-image": t.isInEditor
        }
      ),
      id: e.id,
      children: /* @__PURE__ */ s.jsxs("section", { children: [
        /* @__PURE__ */ s.jsxs("div", { className: `${t.baseCssClass}__content`, children: [
          e.pretitle && /* @__PURE__ */ s.jsx(Mt, { ...t }),
          e.title && /* @__PURE__ */ s.jsx(pt, { ...t }),
          e.description && /* @__PURE__ */ s.jsx(wt, { ...t }),
          e.actions.length > 0 && t.actionsEnabled && /* @__PURE__ */ s.jsx(Lt, { ...t })
        ] }),
        e.imagePath && /* @__PURE__ */ s.jsx(Pt, { ...t })
      ] })
    }
  );
}, Ee = (e) => e === null || e.length === 0, St = (e) => {
  const t = e.lastModifiedFormatted ? e.lastModifiedFormatted : (
    // biome-ignore lint/style/noNestedTernary: This is fine
    e.lastModified && e.dateFormatString ? $t(new Date(e.lastModified), e.dateFormatString.toUpperCase()) : ""
  );
  return /* @__PURE__ */ s.jsx("span", { className: `${e.baseCssClass}__item-date`, children: t });
}, Ce = (e) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  /* @__PURE__ */ s.jsx("span", { className: `${e.baseCssClass}__item-title`, children: e.title }),
  e.showModificationDate && /* @__PURE__ */ s.jsx(St, { ...e })
] }), At = (e) => /* @__PURE__ */ s.jsx(
  $,
  {
    className: `${e.baseCssClass}__item-link`,
    href: e.link?.url,
    isRouted: e.routed,
    children: /* @__PURE__ */ s.jsx(Ce, { ...e })
  }
), Dt = (e) => /* @__PURE__ */ s.jsx("span", { className: `${e.baseCssClass}__item-description`, children: e.description }), Ot = (e) => /* @__PURE__ */ s.jsx("li", { className: `${e.baseCssClass}__item`, children: /* @__PURE__ */ s.jsxs("article", { children: [
  e.linkItems && !!e.link?.url && /* @__PURE__ */ s.jsx(At, { ...e }),
  !e.linkItems && /* @__PURE__ */ s.jsx(Ce, { ...e, index: e.index }),
  e.showDescription && /* @__PURE__ */ s.jsx(Dt, { ...e })
] }) }), Xt = (e) => Ee(e.items) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "List" }) : null : e.displayItemAsTeaser ? /* @__PURE__ */ s.jsx(
  "div",
  {
    className: x(
      e.baseCssClass ?? "cmp-list",
      `${e.baseCssClass ?? "cmp-list"}--as-teasers`
    ),
    id: e.id,
    children: e.items.map((t, n) => /* @__PURE__ */ s.jsx(
      kt,
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
      `cmp-list-${n}`
    ))
  }
) : /* @__PURE__ */ s.jsx("ul", { className: e.baseCssClass ?? "cmp-list", id: e.id, children: e.items.map((t, n) => /* @__PURE__ */ W(
  Ot,
  {
    ...t,
    baseCssClass: e.baseCssClass ?? "cmp-list",
    dateFormatString: e.dateFormatString,
    linkItems: e.linkItems,
    routed: typeof t.routed == "boolean" ? t.routed : e.routed,
    showDescription: e.showDescription,
    showModificationDate: e.showModificationDate,
    index: n,
    key: `cmp-list-${n}`
  }
)) }), ve = (e) => e === null || e?.length === 0, It = (e) => ie.sanitize(e), Qt = (e) => {
  let { text: t } = e;
  if (e.richText) {
    const n = {
      replace(i) {
        if (i instanceof Fe && i.tagName === "a") {
          const { attribs: a } = i, l = {
            ...a,
            className: a.class
          };
          return delete l.class, /* @__PURE__ */ s.jsx($, { ...l, children: He(i.children, n) });
        }
      }
    };
    t = S(It(t), n);
  }
  return ve(e.text) ? e.isInEditor && !e.hidePlaceHolder ? /* @__PURE__ */ s.jsx(E, { componentTitle: "Text" }) : null : e.richText ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: e.baseCssClass ?? "cmp-text",
      "data-rte-editelement": !0,
      id: e.id,
      children: t
    }
  ) : /* @__PURE__ */ s.jsx("div", { className: e.baseCssClass ?? "cmp-text", id: e.id, children: /* @__PURE__ */ s.jsx("p", { className: "cmp-text__paragraph", children: t }) });
}, Kt = {
  emptyLabel: "Breadcrumb",
  isEmpty(e) {
    return le(e.items);
  }
}, es = {
  emptyLabel: "Button",
  isEmpty(e) {
    return ce(e.text);
  }
}, ts = {
  emptyLabel: "Download",
  isEmpty(e) {
    const { url: t, handleOnClick: n } = e;
    return de({
      handleOnClick: n,
      url: t
    });
  }
}, ss = {
  emptyLabel: "Embed",
  isEmpty(e) {
    return me(e);
  }
}, ns = {
  emptyLabel: "Image",
  isEmpty({ src: e }) {
    return ge(e);
  }
}, rs = {
  emptyLabel: "Language Navigation",
  isEmpty(e) {
    return ye(e);
  }
}, as = {
  emptyLabel: "List",
  isEmpty(e) {
    return Ee(e.items);
  }
}, is = {
  emptyLabel: "Navigation",
  isEmpty(e) {
    return be(e);
  }
}, ls = {
  emptyLabel: "Teaser",
  isEmpty(e) {
    return je(e);
  }
}, os = {
  emptyLabel: "Title",
  isEmpty(e) {
    return xe(e.text);
  }
}, cs = {
  emptyLabel: "Text",
  isEmpty(e) {
    return ve(e.text);
  }
}, us = (e) => /* @__PURE__ */ s.jsx("div", { className: e.baseCssClass ?? "cmp-separator", id: e.id, children: /* @__PURE__ */ s.jsx(
  "hr",
  {
    className: `${e.baseCssClass ?? "cmp-separator"}__horizontal-rule`
  }
) });
export {
  Kt as BreadCrumbEditConfig,
  es as ButtonEditConfig,
  qt as CoreBreadCrumb,
  ue as CoreButton,
  Jt as CoreDownload,
  Vt as CoreEmbed,
  he as CoreImage,
  Zt as CoreLanguageNavigation,
  $ as CoreLink,
  Xt as CoreList,
  Gt as CoreNavigation,
  us as CoreSeparator,
  kt as CoreTeaser,
  Qt as CoreText,
  Rt as CoreTitle,
  ts as DownloadEditConfig,
  ss as EmbedEditConfig,
  ns as ImageEditConfig,
  rs as LanguageNavigationEditConfig,
  as as ListEditConfig,
  is as NavigationEditConfig,
  ls as TeaserEditConfig,
  cs as TextEditConfig,
  os as TitleEditConfig
};
