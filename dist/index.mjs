#!/usr/bin/env node
import { SolanaAgentKit as Tn, ACTIONS as ve, startMcpServer as En } from "solana-agent-kit";
import * as Sn from "dotenv";
function Vt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Rn } = Object.prototype, { getPrototypeOf: wt } = Object, Qe = /* @__PURE__ */ ((t) => (e) => {
  const n = Rn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), V = (t) => (t = t.toLowerCase(), (e) => Qe(e) === t), et = (t) => (e) => typeof e === t, { isArray: ge } = Array, ke = et("undefined");
function An(t) {
  return t !== null && !ke(t) && t.constructor !== null && !ke(t.constructor) && U(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const zt = V("ArrayBuffer");
function On(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && zt(t.buffer), e;
}
const Cn = et("string"), U = et("function"), qt = et("number"), tt = (t) => t !== null && typeof t == "object", Nn = (t) => t === !0 || t === !1, Be = (t) => {
  if (Qe(t) !== "object")
    return !1;
  const e = wt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Pn = V("Date"), In = V("File"), jn = V("Blob"), Zn = V("FileList"), Ln = (t) => tt(t) && U(t.pipe), Dn = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || U(t.append) && ((e = Qe(t)) === "formdata" || // detect form-data instance
  e === "object" && U(t.toString) && t.toString() === "[object FormData]"));
}, Un = V("URLSearchParams"), [Fn, Mn, Bn, $n] = ["ReadableStream", "Request", "Response", "Headers"].map(V), Vn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function De(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), ge(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const a = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = a.length;
    let o;
    for (r = 0; r < i; r++)
      o = a[r], e.call(null, t[o], o, t);
  }
}
function Ht(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const se = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wt = (t) => !ke(t) && t !== se;
function lt() {
  const { caseless: t } = Wt(this) && this || {}, e = {}, n = (r, s) => {
    const a = t && Ht(e, s) || s;
    Be(e[a]) && Be(r) ? e[a] = lt(e[a], r) : Be(r) ? e[a] = lt({}, r) : ge(r) ? e[a] = r.slice() : e[a] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && De(arguments[r], n);
  return e;
}
const zn = (t, e, n, { allOwnKeys: r } = {}) => (De(e, (s, a) => {
  n && U(s) ? t[a] = Vt(s, n) : t[a] = s;
}, { allOwnKeys: r }), t), qn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Hn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Wn = (t, e, n, r) => {
  let s, a, i;
  const o = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      i = s[a], (!r || r(i, t, e)) && !o[i] && (e[i] = t[i], o[i] = !0);
    t = n !== !1 && wt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Jn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Kn = (t) => {
  if (!t) return null;
  if (ge(t)) return t;
  let e = t.length;
  if (!qt(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Yn = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && wt(Uint8Array)), Gn = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    e.call(t, a[0], a[1]);
  }
}, Xn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Qn = V("HTMLFormElement"), er = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), St = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), tr = V("RegExp"), Jt = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  De(n, (s, a) => {
    let i;
    (i = e(s, a, t)) !== !1 && (r[a] = i || s);
  }), Object.defineProperties(t, r);
}, nr = (t) => {
  Jt(t, (e, n) => {
    if (U(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (U(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, rr = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return ge(t) ? r(t) : r(String(t).split(e)), n;
}, sr = () => {
}, ar = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function ir(t) {
  return !!(t && U(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const or = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (tt(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const a = ge(r) ? [] : {};
        return De(r, (i, o) => {
          const d = n(i, s + 1);
          !ke(d) && (a[o] = d);
        }), e[s] = void 0, a;
      }
    }
    return r;
  };
  return n(t, 0);
}, cr = V("AsyncFunction"), ur = (t) => t && (tt(t) || U(t)) && U(t.then) && U(t.catch), Kt = ((t, e) => t ? setImmediate : e ? ((n, r) => (se.addEventListener("message", ({ source: s, data: a }) => {
  s === se && a === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), se.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  U(se.postMessage)
), dr = typeof queueMicrotask < "u" ? queueMicrotask.bind(se) : typeof process < "u" && process.nextTick || Kt, u = {
  isArray: ge,
  isArrayBuffer: zt,
  isBuffer: An,
  isFormData: Dn,
  isArrayBufferView: On,
  isString: Cn,
  isNumber: qt,
  isBoolean: Nn,
  isObject: tt,
  isPlainObject: Be,
  isReadableStream: Fn,
  isRequest: Mn,
  isResponse: Bn,
  isHeaders: $n,
  isUndefined: ke,
  isDate: Pn,
  isFile: In,
  isBlob: jn,
  isRegExp: tr,
  isFunction: U,
  isStream: Ln,
  isURLSearchParams: Un,
  isTypedArray: Yn,
  isFileList: Zn,
  forEach: De,
  merge: lt,
  extend: zn,
  trim: Vn,
  stripBOM: qn,
  inherits: Hn,
  toFlatObject: Wn,
  kindOf: Qe,
  kindOfTest: V,
  endsWith: Jn,
  toArray: Kn,
  forEachEntry: Gn,
  matchAll: Xn,
  isHTMLForm: Qn,
  hasOwnProperty: St,
  hasOwnProp: St,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jt,
  freezeMethods: nr,
  toObjectSet: rr,
  toCamelCase: er,
  noop: sr,
  toFiniteNumber: ar,
  findKey: Ht,
  global: se,
  isContextDefined: Wt,
  isSpecCompliantForm: ir,
  toJSONObject: or,
  isAsyncFn: cr,
  isThenable: ur,
  setImmediate: Kt,
  asap: dr
};
function w(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
u.inherits(w, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Yt = w.prototype, Gt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Gt[t] = { value: t };
});
Object.defineProperties(w, Gt);
Object.defineProperty(Yt, "isAxiosError", { value: !0 });
w.from = (t, e, n, r, s, a) => {
  const i = Object.create(Yt);
  return u.toFlatObject(t, i, function(d) {
    return d !== Error.prototype;
  }, (o) => o !== "isAxiosError"), w.call(i, t.message, e, n, r, s), i.cause = t, i.name = t.name, a && Object.assign(i, a), i;
};
const lr = null;
function ft(t) {
  return u.isPlainObject(t) || u.isArray(t);
}
function Xt(t) {
  return u.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Rt(t, e, n) {
  return t ? t.concat(e).map(function(s, a) {
    return s = Xt(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function fr(t) {
  return u.isArray(t) && !t.some(ft);
}
const hr = u.toFlatObject(u, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function nt(t, e, n) {
  if (!u.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = u.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(k, _) {
    return !u.isUndefined(_[k]);
  });
  const r = n.metaTokens, s = n.visitor || l, a = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(e);
  if (!u.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (u.isDate(g))
      return g.toISOString();
    if (!d && u.isBlob(g))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(g) || u.isTypedArray(g) ? d && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function l(g, k, _) {
    let O = g;
    if (g && !_ && typeof g == "object") {
      if (u.endsWith(k, "{}"))
        k = r ? k : k.slice(0, -2), g = JSON.stringify(g);
      else if (u.isArray(g) && fr(g) || (u.isFileList(g) || u.endsWith(k, "[]")) && (O = u.toArray(g)))
        return k = Xt(k), O.forEach(function(P, J) {
          !(u.isUndefined(P) || P === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Rt([k], J, a) : i === null ? k : k + "[]",
            c(P)
          );
        }), !1;
    }
    return ft(g) ? !0 : (e.append(Rt(_, k, a), c(g)), !1);
  }
  const p = [], S = Object.assign(hr, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: ft
  });
  function R(g, k) {
    if (!u.isUndefined(g)) {
      if (p.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + k.join("."));
      p.push(g), u.forEach(g, function(O, N) {
        (!(u.isUndefined(O) || O === null) && s.call(
          e,
          O,
          u.isString(N) ? N.trim() : N,
          k,
          S
        )) === !0 && R(O, k ? k.concat(N) : [N]);
      }), p.pop();
    }
  }
  if (!u.isObject(t))
    throw new TypeError("data must be an object");
  return R(t), e;
}
function At(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function xt(t, e) {
  this._pairs = [], t && nt(t, this, e);
}
const Qt = xt.prototype;
Qt.append = function(e, n) {
  this._pairs.push([e, n]);
};
Qt.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, At);
  } : At;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function pr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function en(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || pr;
  u.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let a;
  if (s ? a = s(e, n) : a = u.isURLSearchParams(e) ? e.toString() : new xt(e, n).toString(r), a) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Ot {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    u.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const tn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mr = typeof URLSearchParams < "u" ? URLSearchParams : xt, yr = typeof FormData < "u" ? FormData : null, gr = typeof Blob < "u" ? Blob : null, _r = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mr,
    FormData: yr,
    Blob: gr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, kt = typeof window < "u" && typeof document < "u", ht = typeof navigator == "object" && navigator || void 0, vr = kt && (!ht || ["ReactNative", "NativeScript", "NS"].indexOf(ht.product) < 0), br = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wr = kt && window.location.href || "http://localhost", xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: kt,
  hasStandardBrowserEnv: vr,
  hasStandardBrowserWebWorkerEnv: br,
  navigator: ht,
  origin: wr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...xr,
  ..._r
};
function kr(t, e) {
  return nt(t, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, a) {
      return I.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Tr(t) {
  return u.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Er(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], e[a] = t[a];
  return e;
}
function nn(t) {
  function e(n, r, s, a) {
    let i = n[a++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), d = a >= n.length;
    return i = !i && u.isArray(s) ? s.length : i, d ? (u.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !o) : ((!s[i] || !u.isObject(s[i])) && (s[i] = []), e(n, r, s[i], a) && u.isArray(s[i]) && (s[i] = Er(s[i])), !o);
  }
  if (u.isFormData(t) && u.isFunction(t.entries)) {
    const n = {};
    return u.forEachEntry(t, (r, s) => {
      e(Tr(r), s, n, 0);
    }), n;
  }
  return null;
}
function Sr(t, e, n) {
  if (u.isString(t))
    try {
      return (e || JSON.parse)(t), u.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ue = {
  transitional: tn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = u.isObject(e);
    if (a && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e))
      return s ? JSON.stringify(nn(e)) : e;
    if (u.isArrayBuffer(e) || u.isBuffer(e) || u.isStream(e) || u.isFile(e) || u.isBlob(e) || u.isReadableStream(e))
      return e;
    if (u.isArrayBufferView(e))
      return e.buffer;
    if (u.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let o;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return kr(e, this.formSerializer).toString();
      if ((o = u.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return nt(
          o ? { "files[]": e } : e,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Sr(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ue.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (u.isResponse(e) || u.isReadableStream(e))
      return e;
    if (e && u.isString(e) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (o) {
        if (i)
          throw o.name === "SyntaxError" ? w.from(o, w.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ue.headers[t] = {};
});
const Rr = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ar = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || e[n] && Rr[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Ct = Symbol("internals");
function be(t) {
  return t && String(t).trim().toLowerCase();
}
function $e(t) {
  return t === !1 || t == null ? t : u.isArray(t) ? t.map($e) : String(t);
}
function Or(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Cr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function it(t, e, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!u.isString(e)) {
    if (u.isString(r))
      return e.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(e);
  }
}
function Nr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Pr(t, e) {
  const n = u.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, a, i) {
        return this[r].call(this, e, s, a, i);
      },
      configurable: !0
    });
  });
}
let D = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function a(o, d, c) {
      const l = be(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = u.findKey(s, l);
      (!p || s[p] === void 0 || c === !0 || c === void 0 && s[p] !== !1) && (s[p || d] = $e(o));
    }
    const i = (o, d) => u.forEach(o, (c, l) => a(c, l, d));
    if (u.isPlainObject(e) || e instanceof this.constructor)
      i(e, n);
    else if (u.isString(e) && (e = e.trim()) && !Cr(e))
      i(Ar(e), n);
    else if (u.isHeaders(e))
      for (const [o, d] of e.entries())
        a(d, o, r);
    else
      e != null && a(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = be(e), e) {
      const r = u.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Or(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = be(e), e) {
      const r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || it(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function a(i) {
      if (i = be(i), i) {
        const o = u.findKey(r, i);
        o && (!n || it(r, r[o], o, n)) && (delete r[o], s = !0);
      }
    }
    return u.isArray(e) ? e.forEach(a) : a(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!e || it(this, this[a], a, e, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return u.forEach(this, (s, a) => {
      const i = u.findKey(r, a);
      if (i) {
        n[i] = $e(s), delete n[a];
        return;
      }
      const o = e ? Nr(a) : String(a).trim();
      o !== a && delete n[a], n[o] = $e(s), r[o] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Ct] = this[Ct] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const o = be(i);
      r[o] || (Pr(s, i), r[o] = !0);
    }
    return u.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
D.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(D.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(D);
function ot(t, e) {
  const n = this || Ue, r = e || n, s = D.from(r.headers);
  let a = r.data;
  return u.forEach(t, function(o) {
    a = o.call(n, a, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), a;
}
function rn(t) {
  return !!(t && t.__CANCEL__);
}
function _e(t, e, n) {
  w.call(this, t ?? "canceled", w.ERR_CANCELED, e, n), this.name = "CanceledError";
}
u.inherits(_e, w, {
  __CANCEL__: !0
});
function sn(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new w(
    "Request failed with status code " + n.status,
    [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ir(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function jr(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(d) {
    const c = Date.now(), l = r[a];
    i || (i = c), n[s] = d, r[s] = c;
    let p = a, S = 0;
    for (; p !== s; )
      S += n[p++], p = p % t;
    if (s = (s + 1) % t, s === a && (a = (a + 1) % t), c - i < e)
      return;
    const R = l && c - l;
    return R ? Math.round(S * 1e3 / R) : void 0;
  };
}
function Zr(t, e) {
  let n = 0, r = 1e3 / e, s, a;
  const i = (c, l = Date.now()) => {
    n = l, s = null, a && (clearTimeout(a), a = null), t.apply(null, c);
  };
  return [(...c) => {
    const l = Date.now(), p = l - n;
    p >= r ? i(c, l) : (s = c, a || (a = setTimeout(() => {
      a = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const ze = (t, e, n = 3) => {
  let r = 0;
  const s = jr(50, 250);
  return Zr((a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, d = i - r, c = s(d), l = i <= o;
    r = i;
    const p = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && o && l ? (o - i) / c : void 0,
      event: a,
      lengthComputable: o != null,
      [e ? "download" : "upload"]: !0
    };
    t(p);
  }, n);
}, Nt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Pt = (t) => (...e) => u.asap(() => t(...e)), Lr = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, I.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, Dr = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, a) {
      const i = [t + "=" + encodeURIComponent(e)];
      u.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), u.isString(r) && i.push("path=" + r), u.isString(s) && i.push("domain=" + s), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ur(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Fr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function an(t, e, n) {
  let r = !Ur(e);
  return t && (r || n == !1) ? Fr(t, e) : e;
}
const It = (t) => t instanceof D ? { ...t } : t;
function oe(t, e) {
  e = e || {};
  const n = {};
  function r(c, l, p, S) {
    return u.isPlainObject(c) && u.isPlainObject(l) ? u.merge.call({ caseless: S }, c, l) : u.isPlainObject(l) ? u.merge({}, l) : u.isArray(l) ? l.slice() : l;
  }
  function s(c, l, p, S) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(c))
        return r(void 0, c, p, S);
    } else return r(c, l, p, S);
  }
  function a(c, l) {
    if (!u.isUndefined(l))
      return r(void 0, l);
  }
  function i(c, l) {
    if (u.isUndefined(l)) {
      if (!u.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, l);
  }
  function o(c, l, p) {
    if (p in e)
      return r(c, l);
    if (p in t)
      return r(void 0, c);
  }
  const d = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: o,
    headers: (c, l, p) => s(It(c), It(l), p, !0)
  };
  return u.forEach(Object.keys(Object.assign({}, t, e)), function(l) {
    const p = d[l] || s, S = p(t[l], e[l], l);
    u.isUndefined(S) && p !== o || (n[l] = S);
  }), n;
}
const on = (t) => {
  const e = oe({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: a, headers: i, auth: o } = e;
  e.headers = i = D.from(i), e.url = en(an(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), o && i.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let d;
  if (u.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [c, ...l] = d ? d.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(e)), r || r !== !1 && Lr(e.url))) {
    const c = s && a && Dr.read(a);
    c && i.set(s, c);
  }
  return e;
}, Mr = typeof XMLHttpRequest < "u", Br = Mr && function(t) {
  return new Promise(function(n, r) {
    const s = on(t);
    let a = s.data;
    const i = D.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: d, onDownloadProgress: c } = s, l, p, S, R, g;
    function k() {
      R && R(), g && g(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let _ = new XMLHttpRequest();
    _.open(s.method.toUpperCase(), s.url, !0), _.timeout = s.timeout;
    function O() {
      if (!_)
        return;
      const P = D.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), L = {
        data: !o || o === "text" || o === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: P,
        config: t,
        request: _
      };
      sn(function(re) {
        n(re), k();
      }, function(re) {
        r(re), k();
      }, L), _ = null;
    }
    "onloadend" in _ ? _.onloadend = O : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, _.onabort = function() {
      _ && (r(new w("Request aborted", w.ECONNABORTED, t, _)), _ = null);
    }, _.onerror = function() {
      r(new w("Network Error", w.ERR_NETWORK, t, _)), _ = null;
    }, _.ontimeout = function() {
      let J = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || tn;
      s.timeoutErrorMessage && (J = s.timeoutErrorMessage), r(new w(
        J,
        L.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
        t,
        _
      )), _ = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in _ && u.forEach(i.toJSON(), function(J, L) {
      _.setRequestHeader(L, J);
    }), u.isUndefined(s.withCredentials) || (_.withCredentials = !!s.withCredentials), o && o !== "json" && (_.responseType = s.responseType), c && ([S, g] = ze(c, !0), _.addEventListener("progress", S)), d && _.upload && ([p, R] = ze(d), _.upload.addEventListener("progress", p), _.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (l = (P) => {
      _ && (r(!P || P.type ? new _e(null, t, _) : P), _.abort(), _ = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const N = Ir(s.url);
    if (N && I.protocols.indexOf(N) === -1) {
      r(new w("Unsupported protocol " + N + ":", w.ERR_BAD_REQUEST, t));
      return;
    }
    _.send(a || null);
  });
}, $r = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const a = function(c) {
      if (!s) {
        s = !0, o();
        const l = c instanceof Error ? c : this.reason;
        r.abort(l instanceof w ? l : new _e(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new w(`timeout ${e} of ms exceeded`, w.ETIMEDOUT));
    }, e);
    const o = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", a));
    const { signal: d } = r;
    return d.unsubscribe = () => u.asap(o), d;
  }
}, Vr = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, zr = async function* (t, e) {
  for await (const n of qr(t))
    yield* Vr(n, e);
}, qr = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, jt = (t, e, n, r) => {
  const s = zr(t, e);
  let a = 0, i, o = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: c, value: l } = await s.next();
        if (c) {
          o(), d.close();
          return;
        }
        let p = l.byteLength;
        if (n) {
          let S = a += p;
          n(S);
        }
        d.enqueue(new Uint8Array(l));
      } catch (c) {
        throw o(c), c;
      }
    },
    cancel(d) {
      return o(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, rt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", cn = rt && typeof ReadableStream == "function", Hr = rt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), un = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Wr = cn && un(() => {
  let t = !1;
  const e = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Zt = 64 * 1024, pt = cn && un(() => u.isReadableStream(new Response("").body)), qe = {
  stream: pt && ((t) => t.body)
};
rt && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !qe[e] && (qe[e] = u.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new w(`Response type '${e}' is not supported`, w.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jr = async (t) => {
  if (t == null)
    return 0;
  if (u.isBlob(t))
    return t.size;
  if (u.isSpecCompliantForm(t))
    return (await new Request(I.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(t) || u.isArrayBuffer(t))
    return t.byteLength;
  if (u.isURLSearchParams(t) && (t = t + ""), u.isString(t))
    return (await Hr(t)).byteLength;
}, Kr = async (t, e) => {
  const n = u.toFiniteNumber(t.getContentLength());
  return n ?? Jr(e);
}, Yr = rt && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: o,
    onUploadProgress: d,
    responseType: c,
    headers: l,
    withCredentials: p = "same-origin",
    fetchOptions: S
  } = on(t);
  c = c ? (c + "").toLowerCase() : "text";
  let R = $r([s, a && a.toAbortSignal()], i), g;
  const k = R && R.unsubscribe && (() => {
    R.unsubscribe();
  });
  let _;
  try {
    if (d && Wr && n !== "get" && n !== "head" && (_ = await Kr(l, r)) !== 0) {
      let L = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), X;
      if (u.isFormData(r) && (X = L.headers.get("content-type")) && l.setContentType(X), L.body) {
        const [re, Me] = Nt(
          _,
          ze(Pt(d))
        );
        r = jt(L.body, Zt, re, Me);
      }
    }
    u.isString(p) || (p = p ? "include" : "omit");
    const O = "credentials" in Request.prototype;
    g = new Request(e, {
      ...S,
      signal: R,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: O ? p : void 0
    });
    let N = await fetch(g);
    const P = pt && (c === "stream" || c === "response");
    if (pt && (o || P && k)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((Et) => {
        L[Et] = N[Et];
      });
      const X = u.toFiniteNumber(N.headers.get("content-length")), [re, Me] = o && Nt(
        X,
        ze(Pt(o), !0)
      ) || [];
      N = new Response(
        jt(N.body, Zt, re, () => {
          Me && Me(), k && k();
        }),
        L
      );
    }
    c = c || "text";
    let J = await qe[u.findKey(qe, c) || "text"](N, t);
    return !P && k && k(), await new Promise((L, X) => {
      sn(L, X, {
        data: J,
        headers: D.from(N.headers),
        status: N.status,
        statusText: N.statusText,
        config: t,
        request: g
      });
    });
  } catch (O) {
    throw k && k(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(
      new w("Network Error", w.ERR_NETWORK, t, g),
      {
        cause: O.cause || O
      }
    ) : w.from(O, O && O.code, t, g);
  }
}), mt = {
  http: lr,
  xhr: Br,
  fetch: Yr
};
u.forEach(mt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Lt = (t) => `- ${t}`, Gr = (t) => u.isFunction(t) || t === null || t === !1, dn = {
  getAdapter: (t) => {
    t = u.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let a = 0; a < e; a++) {
      n = t[a];
      let i;
      if (r = n, !Gr(n) && (r = mt[(i = String(n)).toLowerCase()], r === void 0))
        throw new w(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(s).map(
        ([o, d]) => `adapter ${o} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? a.length > 1 ? `since :
` + a.map(Lt).join(`
`) : " " + Lt(a[0]) : "as no adapter specified";
      throw new w(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: mt
};
function ct(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new _e(null, t);
}
function Dt(t) {
  return ct(t), t.headers = D.from(t.headers), t.data = ot.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), dn.getAdapter(t.adapter || Ue.adapter)(t).then(function(r) {
    return ct(t), r.data = ot.call(
      t,
      t.transformResponse,
      r
    ), r.headers = D.from(r.headers), r;
  }, function(r) {
    return rn(r) || (ct(t), r && r.response && (r.response.data = ot.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = D.from(r.response.headers))), Promise.reject(r);
  });
}
const ln = "1.8.4", st = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  st[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ut = {};
st.transitional = function(e, n, r) {
  function s(a, i) {
    return "[Axios v" + ln + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, o) => {
    if (e === !1)
      throw new w(
        s(i, " has been removed" + (n ? " in " + n : "")),
        w.ERR_DEPRECATED
      );
    return n && !Ut[i] && (Ut[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(a, i, o) : !0;
  };
};
st.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Xr(t, e, n) {
  if (typeof t != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], i = e[a];
    if (i) {
      const o = t[a], d = o === void 0 || i(o, a, t);
      if (d !== !0)
        throw new w("option " + a + " must be " + d, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new w("Unknown option " + a, w.ERR_BAD_OPTION);
  }
}
const Ve = {
  assertOptions: Xr,
  validators: st
}, z = Ve.validators;
let ae = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Ot(),
      response: new Ot()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = oe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && Ve.assertOptions(r, {
      silentJSONParsing: z.transitional(z.boolean),
      forcedJSONParsing: z.transitional(z.boolean),
      clarifyTimeoutError: z.transitional(z.boolean)
    }, !1), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ve.assertOptions(s, {
      encode: z.function,
      serialize: z.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ve.assertOptions(n, {
      baseUrl: z.spelling("baseURL"),
      withXsrfToken: z.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && u.merge(
      a.common,
      a[n.method]
    );
    a && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete a[g];
      }
    ), n.headers = D.concat(i, a);
    const o = [];
    let d = !0;
    this.interceptors.request.forEach(function(k) {
      typeof k.runWhen == "function" && k.runWhen(n) === !1 || (d = d && k.synchronous, o.unshift(k.fulfilled, k.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(k) {
      c.push(k.fulfilled, k.rejected);
    });
    let l, p = 0, S;
    if (!d) {
      const g = [Dt.bind(this), void 0];
      for (g.unshift.apply(g, o), g.push.apply(g, c), S = g.length, l = Promise.resolve(n); p < S; )
        l = l.then(g[p++], g[p++]);
      return l;
    }
    S = o.length;
    let R = n;
    for (p = 0; p < S; ) {
      const g = o[p++], k = o[p++];
      try {
        R = g(R);
      } catch (_) {
        k.call(this, _);
        break;
      }
    }
    try {
      l = Dt.call(this, R);
    } catch (g) {
      return Promise.reject(g);
    }
    for (p = 0, S = c.length; p < S; )
      l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(e) {
    e = oe(this.defaults, e);
    const n = an(e.baseURL, e.url, e.allowAbsoluteUrls);
    return en(n, e.params, e.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(e) {
  ae.prototype[e] = function(n, r) {
    return this.request(oe(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(a, i, o) {
      return this.request(oe(o || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  ae.prototype[e] = n(), ae.prototype[e + "Form"] = n(!0);
});
let Qr = class fn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((o) => {
        r.subscribe(o), a = o;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, e(function(a, i, o) {
      r.reason || (r.reason = new _e(a, i, o), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new fn(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function es(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function ts(t) {
  return u.isObject(t) && t.isAxiosError === !0;
}
const yt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(yt).forEach(([t, e]) => {
  yt[e] = t;
});
function hn(t) {
  const e = new ae(t), n = Vt(ae.prototype.request, e);
  return u.extend(n, ae.prototype, e, { allOwnKeys: !0 }), u.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return hn(oe(t, s));
  }, n;
}
const C = hn(Ue);
C.Axios = ae;
C.CanceledError = _e;
C.CancelToken = Qr;
C.isCancel = rn;
C.VERSION = ln;
C.toFormData = nt;
C.AxiosError = w;
C.Cancel = C.CanceledError;
C.all = function(e) {
  return Promise.all(e);
};
C.spread = es;
C.isAxiosError = ts;
C.mergeConfig = oe;
C.AxiosHeaders = D;
C.formToJSON = (t) => nn(u.isHTMLForm(t) ? new FormData(t) : t);
C.getAdapter = dn.getAdapter;
C.HttpStatusCode = yt;
C.default = C;
const {
  Axios: ya,
  AxiosError: ga,
  CanceledError: _a,
  isCancel: va,
  CancelToken: ba,
  VERSION: wa,
  all: xa,
  Cancel: ka,
  isAxiosError: Ta,
  spread: Ea,
  toFormData: Sa,
  AxiosHeaders: Ra,
  HttpStatusCode: Aa,
  formToJSON: Oa,
  getAdapter: Ca,
  mergeConfig: Na
} = C;
var E;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function n(s) {
    throw new Error();
  }
  t.assertNever = n, t.arrayToEnum = (s) => {
    const a = {};
    for (const i of s)
      a[i] = i;
    return a;
  }, t.getValidEnumValues = (s) => {
    const a = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), i = {};
    for (const o of a)
      i[o] = s[o];
    return t.objectValues(i);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(a) {
    return s[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a;
  }, t.find = (s, a) => {
    for (const i of s)
      if (a(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function r(s, a = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  t.joinValues = r, t.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(E || (E = {}));
var gt;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(gt || (gt = {}));
const m = E.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Y = (t) => {
  switch (typeof t) {
    case "undefined":
      return m.undefined;
    case "string":
      return m.string;
    case "number":
      return isNaN(t) ? m.nan : m.number;
    case "boolean":
      return m.boolean;
    case "function":
      return m.function;
    case "bigint":
      return m.bigint;
    case "symbol":
      return m.symbol;
    case "object":
      return Array.isArray(t) ? m.array : t === null ? m.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? m.promise : typeof Map < "u" && t instanceof Map ? m.map : typeof Set < "u" && t instanceof Set ? m.set : typeof Date < "u" && t instanceof Date ? m.date : m.object;
    default:
      return m.unknown;
  }
}, f = E.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), ns = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class F extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const n = e || function(a) {
      return a.message;
    }, r = { _errors: [] }, s = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(n(i));
        else {
          let o = r, d = 0;
          for (; d < i.path.length; ) {
            const c = i.path[d];
            d === i.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(n(i))) : o[c] = o[c] || { _errors: [] }, o = o[c], d++;
          }
        }
    };
    return s(this), r;
  }
  static assert(e) {
    if (!(e instanceof F))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, E.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, r = [];
    for (const s of this.issues)
      s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(e(s))) : r.push(e(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
F.create = (t) => new F(t);
const pe = (t, e) => {
  let n;
  switch (t.code) {
    case f.invalid_type:
      t.received === m.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case f.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, E.jsonStringifyReplacer)}`;
      break;
    case f.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${E.joinValues(t.keys, ", ")}`;
      break;
    case f.invalid_union:
      n = "Invalid input";
      break;
    case f.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${E.joinValues(t.options)}`;
      break;
    case f.invalid_enum_value:
      n = `Invalid enum value. Expected ${E.joinValues(t.options)}, received '${t.received}'`;
      break;
    case f.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case f.invalid_return_type:
      n = "Invalid function return type";
      break;
    case f.invalid_date:
      n = "Invalid date";
      break;
    case f.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : E.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case f.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case f.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case f.custom:
      n = "Invalid input";
      break;
    case f.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case f.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case f.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, E.assertNever(t);
  }
  return { message: n };
};
let pn = pe;
function rs(t) {
  pn = t;
}
function He() {
  return pn;
}
const We = (t) => {
  const { data: e, path: n, errorMaps: r, issueData: s } = t, a = [...n, ...s.path || []], i = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let o = "";
  const d = r.filter((c) => !!c).slice().reverse();
  for (const c of d)
    o = c(i, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: a,
    message: o
  };
}, ss = [];
function h(t, e) {
  const n = He(), r = We({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      // contextual error map is first priority
      t.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === pe ? void 0 : pe
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(r);
}
class j {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted")
        return b;
      s.status === "dirty" && e.dirty(), r.push(s.value);
    }
    return { status: e.value, value: r };
  }
  static async mergeObjectAsync(e, n) {
    const r = [];
    for (const s of n) {
      const a = await s.key, i = await s.value;
      r.push({
        key: a,
        value: i
      });
    }
    return j.mergeObjectSync(e, r);
  }
  static mergeObjectSync(e, n) {
    const r = {};
    for (const s of n) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return b;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (r[a.value] = i.value);
    }
    return { status: e.value, value: r };
  }
}
const b = Object.freeze({
  status: "aborted"
}), fe = (t) => ({ status: "dirty", value: t }), Z = (t) => ({ status: "valid", value: t }), _t = (t) => t.status === "aborted", vt = (t) => t.status === "dirty", ce = (t) => t.status === "valid", Te = (t) => typeof Promise < "u" && t instanceof Promise;
function Je(t, e, n, r) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(t);
}
function mn(t, e, n, r, s) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, n), n;
}
var y;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e?.message;
})(y || (y = {}));
var we, xe;
class H {
  constructor(e, n, r, s) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = r, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ft = (t, e) => {
  if (ce(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new F(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function x(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: r, description: s } = t;
  if (e && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, o) => {
    var d, c;
    const { message: l } = t;
    return i.code === "invalid_enum_value" ? { message: l ?? o.defaultError } : typeof o.data > "u" ? { message: (d = l ?? r) !== null && d !== void 0 ? d : o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: (c = l ?? n) !== null && c !== void 0 ? c : o.defaultError };
  }, description: s };
}
class T {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Y(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: Y(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new j(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Y(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Te(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const r = this.safeParse(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(e, n) {
    var r;
    const s = {
      common: {
        issues: [],
        async: (r = n?.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n?.errorMap
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    }, a = this._parseSync({ data: e, path: s.path, parent: s });
    return Ft(s, a);
  }
  "~validate"(e) {
    var n, r;
    const s = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: s });
        return ce(a) ? {
          value: a.value
        } : {
          issues: s.common.issues
        };
      } catch (a) {
        !((r = (n = a?.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = !0), s.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: s }).then((a) => ce(a) ? {
      value: a.value
    } : {
      issues: s.common.issues
    });
  }
  async parseAsync(e, n) {
    const r = await this.safeParseAsync(e, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(e, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n?.errorMap,
        async: !0
      },
      path: n?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Y(e)
    }, s = this._parse({ data: e, path: r.path, parent: r }), a = await (Te(s) ? s : Promise.resolve(s));
    return Ft(r, a);
  }
  refine(e, n) {
    const r = (s) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(s) : n;
    return this._refinement((s, a) => {
      const i = e(s), o = () => a.addIssue({
        code: f.custom,
        ...r(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((d) => d ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((r, s) => e(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1));
  }
  _refinement(e) {
    return new $({
      schema: this,
      typeName: v.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return q.create(this, this._def);
  }
  nullable() {
    return ne.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return B.create(this);
  }
  promise() {
    return ye.create(this, this._def);
  }
  or(e) {
    return Ae.create([this, e], this._def);
  }
  and(e) {
    return Oe.create(this, e, this._def);
  }
  transform(e) {
    return new $({
      ...x(this._def),
      schema: this,
      typeName: v.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new je({
      ...x(this._def),
      innerType: this,
      defaultValue: n,
      typeName: v.ZodDefault
    });
  }
  brand() {
    return new Tt({
      typeName: v.ZodBranded,
      type: this,
      ...x(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Ze({
      ...x(this._def),
      innerType: this,
      catchValue: n,
      typeName: v.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Fe.create(this, e);
  }
  readonly() {
    return Le.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const as = /^c[^\s-]{8,}$/i, is = /^[0-9a-z]+$/, os = /^[0-9A-HJKMNP-TV-Z]{26}$/i, cs = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, us = /^[a-z0-9_-]{21}$/i, ds = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ls = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, fs = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, hs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ut;
const ps = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ms = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ys = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, gs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _s = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, vs = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, yn = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", bs = new RegExp(`^${yn}$`);
function gn(t) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function ws(t) {
  return new RegExp(`^${gn(t)}$`);
}
function _n(t) {
  let e = `${yn}T${gn(t)}`;
  const n = [];
  return n.push(t.local ? "Z?" : "Z"), t.offset && n.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${n.join("|")})`, new RegExp(`^${e}$`);
}
function xs(t, e) {
  return !!((e === "v4" || !e) && ps.test(t) || (e === "v6" || !e) && ys.test(t));
}
function ks(t, e) {
  if (!ds.test(t))
    return !1;
  try {
    const [n] = t.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), s = JSON.parse(atob(r));
    return !(typeof s != "object" || s === null || !s.typ || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function Ts(t, e) {
  return !!((e === "v4" || !e) && ms.test(t) || (e === "v6" || !e) && gs.test(t));
}
class M extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== m.string) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: f.invalid_type,
        expected: m.string,
        received: a.parsedType
      }), b;
    }
    const r = new j();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), h(s, {
          code: f.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), h(s, {
          code: f.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, o = e.data.length < a.value;
        (i || o) && (s = this._getOrReturnCtx(e, s), i ? h(s, {
          code: f.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : o && h(s, {
          code: f.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        fs.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "email",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        ut || (ut = new RegExp(hs, "u")), ut.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "emoji",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        cs.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "uuid",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        us.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "nanoid",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        as.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        is.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "cuid2",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        os.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
          validation: "ulid",
          code: f.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), h(s, {
            validation: "url",
            code: f.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "regex",
        code: f.invalid_string,
        message: a.message
      }), r.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), r.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), r.dirty()) : a.kind === "datetime" ? _n(a).test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: "datetime",
        message: a.message
      }), r.dirty()) : a.kind === "date" ? bs.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: "date",
        message: a.message
      }), r.dirty()) : a.kind === "time" ? ws(a).test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.invalid_string,
        validation: "time",
        message: a.message
      }), r.dirty()) : a.kind === "duration" ? ls.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "duration",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "ip" ? xs(e.data, a.version) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "ip",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "jwt" ? ks(e.data, a.alg) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "jwt",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "cidr" ? Ts(e.data, a.version) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "cidr",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64" ? _s.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "base64",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : a.kind === "base64url" ? vs.test(e.data) || (s = this._getOrReturnCtx(e, s), h(s, {
        validation: "base64url",
        code: f.invalid_string,
        message: a.message
      }), r.dirty()) : E.assertNever(a);
    return { status: r.value, value: e.data };
  }
  _regex(e, n, r) {
    return this.refinement((s) => e.test(s), {
      validation: n,
      code: f.invalid_string,
      ...y.errToObj(r)
    });
  }
  _addCheck(e) {
    return new M({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...y.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...y.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...y.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...y.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...y.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...y.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...y.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...y.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...y.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...y.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...y.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...y.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...y.errToObj(e) });
  }
  datetime(e) {
    var n, r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: (n = e?.offset) !== null && n !== void 0 ? n : !1,
      local: (r = e?.local) !== null && r !== void 0 ? r : !1,
      ...y.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...y.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...y.errToObj(e) });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...y.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n?.position,
      ...y.errToObj(n?.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...y.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...y.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...y.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...y.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...y.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, y.errToObj(e));
  }
  trim() {
    return new M({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new M({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new M({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
M.create = (t) => {
  var e;
  return new M({
    checks: [],
    typeName: v.ZodString,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...x(t)
  });
};
function Es(t, e) {
  const n = (t.toString().split(".")[1] || "").length, r = (e.toString().split(".")[1] || "").length, s = n > r ? n : r, a = parseInt(t.toFixed(s).replace(".", "")), i = parseInt(e.toFixed(s).replace(".", ""));
  return a % i / Math.pow(10, s);
}
class Q extends T {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== m.number) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: f.invalid_type,
        expected: m.number,
        received: a.parsedType
      }), b;
    }
    let r;
    const s = new j();
    for (const a of this._def.checks)
      a.kind === "int" ? E.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? Es(e.data, a.value) !== 0 && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.not_finite,
        message: a.message
      }), s.dirty()) : E.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, y.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, y.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, y.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, y.toString(n));
  }
  setLimit(e, n, r, s) {
    return new Q({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: y.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: y.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: y.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: y.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: y.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: y.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: y.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: y.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: y.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: y.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && E.isInteger(e.value));
  }
  get isFinite() {
    let e = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
Q.create = (t) => new Q({
  checks: [],
  typeName: v.ZodNumber,
  coerce: t?.coerce || !1,
  ...x(t)
});
class ee extends T {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== m.bigint)
      return this._getInvalidInput(e);
    let r;
    const s = new j();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), h(r, {
        code: f.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : E.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const n = this._getOrReturnCtx(e);
    return h(n, {
      code: f.invalid_type,
      expected: m.bigint,
      received: n.parsedType
    }), b;
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, y.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, y.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, y.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, y.toString(n));
  }
  setLimit(e, n, r, s) {
    return new ee({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: r,
          message: y.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ee({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: y.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: y.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: y.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
ee.create = (t) => {
  var e;
  return new ee({
    checks: [],
    typeName: v.ZodBigInt,
    coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
    ...x(t)
  });
};
class Ee extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.boolean,
        received: r.parsedType
      }), b;
    }
    return Z(e.data);
  }
}
Ee.create = (t) => new Ee({
  typeName: v.ZodBoolean,
  coerce: t?.coerce || !1,
  ...x(t)
});
class ue extends T {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== m.date) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: f.invalid_type,
        expected: m.date,
        received: a.parsedType
      }), b;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return h(a, {
        code: f.invalid_date
      }), b;
    }
    const r = new j();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), h(s, {
        code: f.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : E.assertNever(a);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new ue({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: y.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: y.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
}
ue.create = (t) => new ue({
  checks: [],
  coerce: t?.coerce || !1,
  typeName: v.ZodDate,
  ...x(t)
});
class Ke extends T {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.symbol,
        received: r.parsedType
      }), b;
    }
    return Z(e.data);
  }
}
Ke.create = (t) => new Ke({
  typeName: v.ZodSymbol,
  ...x(t)
});
class Se extends T {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.undefined,
        received: r.parsedType
      }), b;
    }
    return Z(e.data);
  }
}
Se.create = (t) => new Se({
  typeName: v.ZodUndefined,
  ...x(t)
});
class Re extends T {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.null,
        received: r.parsedType
      }), b;
    }
    return Z(e.data);
  }
}
Re.create = (t) => new Re({
  typeName: v.ZodNull,
  ...x(t)
});
class me extends T {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Z(e.data);
  }
}
me.create = (t) => new me({
  typeName: v.ZodAny,
  ...x(t)
});
class ie extends T {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Z(e.data);
  }
}
ie.create = (t) => new ie({
  typeName: v.ZodUnknown,
  ...x(t)
});
class G extends T {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return h(n, {
      code: f.invalid_type,
      expected: m.never,
      received: n.parsedType
    }), b;
  }
}
G.create = (t) => new G({
  typeName: v.ZodNever,
  ...x(t)
});
class Ye extends T {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.void,
        received: r.parsedType
      }), b;
    }
    return Z(e.data);
  }
}
Ye.create = (t) => new Ye({
  typeName: v.ZodVoid,
  ...x(t)
});
class B extends T {
  _parse(e) {
    const { ctx: n, status: r } = this._processInputParams(e), s = this._def;
    if (n.parsedType !== m.array)
      return h(n, {
        code: f.invalid_type,
        expected: m.array,
        received: n.parsedType
      }), b;
    if (s.exactLength !== null) {
      const i = n.data.length > s.exactLength.value, o = n.data.length < s.exactLength.value;
      (i || o) && (h(n, {
        code: i ? f.too_big : f.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), r.dirty());
    }
    if (s.minLength !== null && n.data.length < s.minLength.value && (h(n, {
      code: f.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), r.dirty()), s.maxLength !== null && n.data.length > s.maxLength.value && (h(n, {
      code: f.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, o) => s.type._parseAsync(new H(n, i, n.path, o)))).then((i) => j.mergeArray(r, i));
    const a = [...n.data].map((i, o) => s.type._parseSync(new H(n, i, n.path, o)));
    return j.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new B({
      ...this._def,
      minLength: { value: e, message: y.toString(n) }
    });
  }
  max(e, n) {
    return new B({
      ...this._def,
      maxLength: { value: e, message: y.toString(n) }
    });
  }
  length(e, n) {
    return new B({
      ...this._def,
      exactLength: { value: e, message: y.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
B.create = (t, e) => new B({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: v.ZodArray,
  ...x(e)
});
function le(t) {
  if (t instanceof A) {
    const e = {};
    for (const n in t.shape) {
      const r = t.shape[n];
      e[n] = q.create(le(r));
    }
    return new A({
      ...t._def,
      shape: () => e
    });
  } else return t instanceof B ? new B({
    ...t._def,
    type: le(t.element)
  }) : t instanceof q ? q.create(le(t.unwrap())) : t instanceof ne ? ne.create(le(t.unwrap())) : t instanceof W ? W.create(t.items.map((e) => le(e))) : t;
}
class A extends T {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = E.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      const c = this._getOrReturnCtx(e);
      return h(c, {
        code: f.invalid_type,
        expected: m.object,
        received: c.parsedType
      }), b;
    }
    const { status: r, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof G && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        i.includes(c) || o.push(c);
    const d = [];
    for (const c of i) {
      const l = a[c], p = s.data[c];
      d.push({
        key: { status: "valid", value: c },
        value: l._parse(new H(s, p, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof G) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of o)
          d.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: s.data[l] }
          });
      else if (c === "strict")
        o.length > 0 && (h(s, {
          code: f.unrecognized_keys,
          keys: o
        }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of o) {
        const p = s.data[l];
        d.push({
          key: { status: "valid", value: l },
          value: c._parse(
            new H(s, p, s.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const l of d) {
        const p = await l.key, S = await l.value;
        c.push({
          key: p,
          value: S,
          alwaysSet: l.alwaysSet
        });
      }
      return c;
    }).then((c) => j.mergeObjectSync(r, c)) : j.mergeObjectSync(r, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return y.errToObj, new A({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, r) => {
          var s, a, i, o;
          const d = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (o = y.errToObj(e).message) !== null && o !== void 0 ? o : d
          } : {
            message: d
          };
        }
      } : {}
    });
  }
  strip() {
    return new A({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new A({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new A({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new A({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: v.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, n) {
    return this.augment({ [e]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new A({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return E.objectKeys(e).forEach((r) => {
      e[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new A({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return E.objectKeys(this.shape).forEach((r) => {
      e[r] || (n[r] = this.shape[r]);
    }), new A({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return le(this);
  }
  partial(e) {
    const n = {};
    return E.objectKeys(this.shape).forEach((r) => {
      const s = this.shape[r];
      e && !e[r] ? n[r] = s : n[r] = s.optional();
    }), new A({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return E.objectKeys(this.shape).forEach((r) => {
      if (e && !e[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof q; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new A({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return vn(E.objectKeys(this.shape));
  }
}
A.create = (t, e) => new A({
  shape: () => t,
  unknownKeys: "strip",
  catchall: G.create(),
  typeName: v.ZodObject,
  ...x(e)
});
A.strictCreate = (t, e) => new A({
  shape: () => t,
  unknownKeys: "strict",
  catchall: G.create(),
  typeName: v.ZodObject,
  ...x(e)
});
A.lazycreate = (t, e) => new A({
  shape: t,
  unknownKeys: "strip",
  catchall: G.create(),
  typeName: v.ZodObject,
  ...x(e)
});
class Ae extends T {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = this._def.options;
    function s(a) {
      for (const o of a)
        if (o.result.status === "valid")
          return o.result;
      for (const o of a)
        if (o.result.status === "dirty")
          return n.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new F(o.ctx.common.issues));
      return h(n, {
        code: f.invalid_union,
        unionErrors: i
      }), b;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const i = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let a;
      const i = [];
      for (const d of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, l = d._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !a && (a = { result: l, ctx: c }), c.common.issues.length && i.push(c.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((d) => new F(d));
      return h(n, {
        code: f.invalid_union,
        unionErrors: o
      }), b;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ae.create = (t, e) => new Ae({
  options: t,
  typeName: v.ZodUnion,
  ...x(e)
});
const K = (t) => t instanceof Ne ? K(t.schema) : t instanceof $ ? K(t.innerType()) : t instanceof Pe ? [t.value] : t instanceof te ? t.options : t instanceof Ie ? E.objectValues(t.enum) : t instanceof je ? K(t._def.innerType) : t instanceof Se ? [void 0] : t instanceof Re ? [null] : t instanceof q ? [void 0, ...K(t.unwrap())] : t instanceof ne ? [null, ...K(t.unwrap())] : t instanceof Tt || t instanceof Le ? K(t.unwrap()) : t instanceof Ze ? K(t._def.innerType) : [];
class at extends T {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== m.object)
      return h(n, {
        code: f.invalid_type,
        expected: m.object,
        received: n.parsedType
      }), b;
    const r = this.discriminator, s = n.data[r], a = this.optionsMap.get(s);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (h(n, {
      code: f.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), b);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, n, r) {
    const s = /* @__PURE__ */ new Map();
    for (const a of n) {
      const i = K(a.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, a);
      }
    }
    return new at({
      typeName: v.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: s,
      ...x(r)
    });
  }
}
function bt(t, e) {
  const n = Y(t), r = Y(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === m.object && r === m.object) {
    const s = E.objectKeys(e), a = E.objectKeys(t).filter((o) => s.indexOf(o) !== -1), i = { ...t, ...e };
    for (const o of a) {
      const d = bt(t[o], e[o]);
      if (!d.valid)
        return { valid: !1 };
      i[o] = d.data;
    }
    return { valid: !0, data: i };
  } else if (n === m.array && r === m.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], o = e[a], d = bt(i, o);
      if (!d.valid)
        return { valid: !1 };
      s.push(d.data);
    }
    return { valid: !0, data: s };
  } else return n === m.date && r === m.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Oe extends T {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = (a, i) => {
      if (_t(a) || _t(i))
        return b;
      const o = bt(a.value, i.value);
      return o.valid ? ((vt(a) || vt(i)) && n.dirty(), { status: n.value, value: o.data }) : (h(r, {
        code: f.invalid_intersection_types
      }), b);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Oe.create = (t, e, n) => new Oe({
  left: t,
  right: e,
  typeName: v.ZodIntersection,
  ...x(n)
});
class W extends T {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.array)
      return h(r, {
        code: f.invalid_type,
        expected: m.array,
        received: r.parsedType
      }), b;
    if (r.data.length < this._def.items.length)
      return h(r, {
        code: f.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), b;
    !this._def.rest && r.data.length > this._def.items.length && (h(r, {
      code: f.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((i, o) => {
      const d = this._def.items[o] || this._def.rest;
      return d ? d._parse(new H(r, i, r.path, o)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(a).then((i) => j.mergeArray(n, i)) : j.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new W({
      ...this._def,
      rest: e
    });
  }
}
W.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new W({
    items: t,
    typeName: v.ZodTuple,
    rest: null,
    ...x(e)
  });
};
class Ce extends T {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.object)
      return h(r, {
        code: f.invalid_type,
        expected: m.object,
        received: r.parsedType
      }), b;
    const s = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in r.data)
      s.push({
        key: a._parse(new H(r, o, r.path, o)),
        value: i._parse(new H(r, r.data[o], r.path, o)),
        alwaysSet: o in r.data
      });
    return r.common.async ? j.mergeObjectAsync(n, s) : j.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, r) {
    return n instanceof T ? new Ce({
      keyType: e,
      valueType: n,
      typeName: v.ZodRecord,
      ...x(r)
    }) : new Ce({
      keyType: M.create(),
      valueType: e,
      typeName: v.ZodRecord,
      ...x(n)
    });
  }
}
class Ge extends T {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.map)
      return h(r, {
        code: f.invalid_type,
        expected: m.map,
        received: r.parsedType
      }), b;
    const s = this._def.keyType, a = this._def.valueType, i = [...r.data.entries()].map(([o, d], c) => ({
      key: s._parse(new H(r, o, r.path, [c, "key"])),
      value: a._parse(new H(r, d, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const d of i) {
          const c = await d.key, l = await d.value;
          if (c.status === "aborted" || l.status === "aborted")
            return b;
          (c.status === "dirty" || l.status === "dirty") && n.dirty(), o.set(c.value, l.value);
        }
        return { status: n.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const d of i) {
        const c = d.key, l = d.value;
        if (c.status === "aborted" || l.status === "aborted")
          return b;
        (c.status === "dirty" || l.status === "dirty") && n.dirty(), o.set(c.value, l.value);
      }
      return { status: n.value, value: o };
    }
  }
}
Ge.create = (t, e, n) => new Ge({
  valueType: e,
  keyType: t,
  typeName: v.ZodMap,
  ...x(n)
});
class de extends T {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.parsedType !== m.set)
      return h(r, {
        code: f.invalid_type,
        expected: m.set,
        received: r.parsedType
      }), b;
    const s = this._def;
    s.minSize !== null && r.data.size < s.minSize.value && (h(r, {
      code: f.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), n.dirty()), s.maxSize !== null && r.data.size > s.maxSize.value && (h(r, {
      code: f.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function i(d) {
      const c = /* @__PURE__ */ new Set();
      for (const l of d) {
        if (l.status === "aborted")
          return b;
        l.status === "dirty" && n.dirty(), c.add(l.value);
      }
      return { status: n.value, value: c };
    }
    const o = [...r.data.values()].map((d, c) => a._parse(new H(r, d, r.path, c)));
    return r.common.async ? Promise.all(o).then((d) => i(d)) : i(o);
  }
  min(e, n) {
    return new de({
      ...this._def,
      minSize: { value: e, message: y.toString(n) }
    });
  }
  max(e, n) {
    return new de({
      ...this._def,
      maxSize: { value: e, message: y.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
de.create = (t, e) => new de({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: v.ZodSet,
  ...x(e)
});
class he extends T {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== m.function)
      return h(n, {
        code: f.invalid_type,
        expected: m.function,
        received: n.parsedType
      }), b;
    function r(o, d) {
      return We({
        data: o,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          He(),
          pe
        ].filter((c) => !!c),
        issueData: {
          code: f.invalid_arguments,
          argumentsError: d
        }
      });
    }
    function s(o, d) {
      return We({
        data: o,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          He(),
          pe
        ].filter((c) => !!c),
        issueData: {
          code: f.invalid_return_type,
          returnTypeError: d
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, i = n.data;
    if (this._def.returns instanceof ye) {
      const o = this;
      return Z(async function(...d) {
        const c = new F([]), l = await o._def.args.parseAsync(d, a).catch((R) => {
          throw c.addIssue(r(d, R)), c;
        }), p = await Reflect.apply(i, this, l);
        return await o._def.returns._def.type.parseAsync(p, a).catch((R) => {
          throw c.addIssue(s(p, R)), c;
        });
      });
    } else {
      const o = this;
      return Z(function(...d) {
        const c = o._def.args.safeParse(d, a);
        if (!c.success)
          throw new F([r(d, c.error)]);
        const l = Reflect.apply(i, this, c.data), p = o._def.returns.safeParse(l, a);
        if (!p.success)
          throw new F([s(l, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new he({
      ...this._def,
      args: W.create(e).rest(ie.create())
    });
  }
  returns(e) {
    return new he({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, n, r) {
    return new he({
      args: e || W.create([]).rest(ie.create()),
      returns: n || ie.create(),
      typeName: v.ZodFunction,
      ...x(r)
    });
  }
}
class Ne extends T {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ne.create = (t, e) => new Ne({
  getter: t,
  typeName: v.ZodLazy,
  ...x(e)
});
class Pe extends T {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return h(n, {
        received: n.data,
        code: f.invalid_literal,
        expected: this._def.value
      }), b;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Pe.create = (t, e) => new Pe({
  value: t,
  typeName: v.ZodLiteral,
  ...x(e)
});
function vn(t, e) {
  return new te({
    values: t,
    typeName: v.ZodEnum,
    ...x(e)
  });
}
class te extends T {
  constructor() {
    super(...arguments), we.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return h(n, {
        expected: E.joinValues(r),
        received: n.parsedType,
        code: f.invalid_type
      }), b;
    }
    if (Je(this, we) || mn(this, we, new Set(this._def.values)), !Je(this, we).has(e.data)) {
      const n = this._getOrReturnCtx(e), r = this._def.values;
      return h(n, {
        received: n.data,
        code: f.invalid_enum_value,
        options: r
      }), b;
    }
    return Z(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  extract(e, n = this._def) {
    return te.create(e, {
      ...this._def,
      ...n
    });
  }
  exclude(e, n = this._def) {
    return te.create(this.options.filter((r) => !e.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
we = /* @__PURE__ */ new WeakMap();
te.create = vn;
class Ie extends T {
  constructor() {
    super(...arguments), xe.set(this, void 0);
  }
  _parse(e) {
    const n = E.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(e);
    if (r.parsedType !== m.string && r.parsedType !== m.number) {
      const s = E.objectValues(n);
      return h(r, {
        expected: E.joinValues(s),
        received: r.parsedType,
        code: f.invalid_type
      }), b;
    }
    if (Je(this, xe) || mn(this, xe, new Set(E.getValidEnumValues(this._def.values))), !Je(this, xe).has(e.data)) {
      const s = E.objectValues(n);
      return h(r, {
        received: r.data,
        code: f.invalid_enum_value,
        options: s
      }), b;
    }
    return Z(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
xe = /* @__PURE__ */ new WeakMap();
Ie.create = (t, e) => new Ie({
  values: t,
  typeName: v.ZodNativeEnum,
  ...x(e)
});
class ye extends T {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== m.promise && n.common.async === !1)
      return h(n, {
        code: f.invalid_type,
        expected: m.promise,
        received: n.parsedType
      }), b;
    const r = n.parsedType === m.promise ? n.data : Promise.resolve(n.data);
    return Z(r.then((s) => this._def.type.parseAsync(s, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ye.create = (t, e) => new ye({
  type: t,
  typeName: v.ZodPromise,
  ...x(e)
});
class $ extends T {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === v.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: (i) => {
        h(r, i), i.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (n.value === "aborted")
            return b;
          const d = await this._def.schema._parseAsync({
            data: o,
            path: r.path,
            parent: r
          });
          return d.status === "aborted" ? b : d.status === "dirty" || n.value === "dirty" ? fe(d.value) : d;
        });
      {
        if (n.value === "aborted")
          return b;
        const o = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? b : o.status === "dirty" || n.value === "dirty" ? fe(o.value) : o;
      }
    }
    if (s.type === "refinement") {
      const i = (o) => {
        const d = s.refinement(o, a);
        if (r.common.async)
          return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? b : (o.status === "dirty" && n.dirty(), i(o.value), { status: n.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((o) => o.status === "aborted" ? b : (o.status === "dirty" && n.dirty(), i(o.value).then(() => ({ status: n.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!ce(i))
          return i;
        const o = s.transform(i.value, a);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => ce(i) ? Promise.resolve(s.transform(i.value, a)).then((o) => ({ status: n.value, value: o })) : i);
    E.assertNever(s);
  }
}
$.create = (t, e, n) => new $({
  schema: t,
  typeName: v.ZodEffects,
  effect: e,
  ...x(n)
});
$.createWithPreprocess = (t, e, n) => new $({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: v.ZodEffects,
  ...x(n)
});
class q extends T {
  _parse(e) {
    return this._getType(e) === m.undefined ? Z(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
q.create = (t, e) => new q({
  innerType: t,
  typeName: v.ZodOptional,
  ...x(e)
});
class ne extends T {
  _parse(e) {
    return this._getType(e) === m.null ? Z(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ne.create = (t, e) => new ne({
  innerType: t,
  typeName: v.ZodNullable,
  ...x(e)
});
class je extends T {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let r = n.data;
    return n.parsedType === m.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
je.create = (t, e) => new je({
  innerType: t,
  typeName: v.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...x(e)
});
class Ze extends T {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Te(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new F(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new F(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ze.create = (t, e) => new Ze({
  innerType: t,
  typeName: v.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...x(e)
});
class Xe extends T {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      const r = this._getOrReturnCtx(e);
      return h(r, {
        code: f.invalid_type,
        expected: m.nan,
        received: r.parsedType
      }), b;
    }
    return { status: "valid", value: e.data };
  }
}
Xe.create = (t) => new Xe({
  typeName: v.ZodNaN,
  ...x(t)
});
const Ss = Symbol("zod_brand");
class Tt extends T {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Fe extends T {
  _parse(e) {
    const { status: n, ctx: r } = this._processInputParams(e);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? b : a.status === "dirty" ? (n.dirty(), fe(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return s.status === "aborted" ? b : s.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(e, n) {
    return new Fe({
      in: e,
      out: n,
      typeName: v.ZodPipeline
    });
  }
}
class Le extends T {
  _parse(e) {
    const n = this._def.innerType._parse(e), r = (s) => (ce(s) && (s.value = Object.freeze(s.value)), s);
    return Te(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Le.create = (t, e) => new Le({
  innerType: t,
  typeName: v.ZodReadonly,
  ...x(e)
});
function Mt(t, e) {
  const n = typeof t == "function" ? t(e) : typeof t == "string" ? { message: t } : t;
  return typeof n == "string" ? { message: n } : n;
}
function bn(t, e = {}, n) {
  return t ? me.create().superRefine((r, s) => {
    var a, i;
    const o = t(r);
    if (o instanceof Promise)
      return o.then((d) => {
        var c, l;
        if (!d) {
          const p = Mt(e, r), S = (l = (c = p.fatal) !== null && c !== void 0 ? c : n) !== null && l !== void 0 ? l : !0;
          s.addIssue({ code: "custom", ...p, fatal: S });
        }
      });
    if (!o) {
      const d = Mt(e, r), c = (i = (a = d.fatal) !== null && a !== void 0 ? a : n) !== null && i !== void 0 ? i : !0;
      s.addIssue({ code: "custom", ...d, fatal: c });
    }
  }) : me.create();
}
const Rs = {
  object: A.lazycreate
};
var v;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(v || (v = {}));
const As = (t, e = {
  message: `Input not instance of ${t.name}`
}) => bn((n) => n instanceof t, e), wn = M.create, xn = Q.create, Os = Xe.create, Cs = ee.create, kn = Ee.create, Ns = ue.create, Ps = Ke.create, Is = Se.create, js = Re.create, Zs = me.create, Ls = ie.create, Ds = G.create, Us = Ye.create, Fs = B.create, Ms = A.create, Bs = A.strictCreate, $s = Ae.create, Vs = at.create, zs = Oe.create, qs = W.create, Hs = Ce.create, Ws = Ge.create, Js = de.create, Ks = he.create, Ys = Ne.create, Gs = Pe.create, Xs = te.create, Qs = Ie.create, ea = ye.create, Bt = $.create, ta = q.create, na = ne.create, ra = $.createWithPreprocess, sa = Fe.create, aa = () => wn().optional(), ia = () => xn().optional(), oa = () => kn().optional(), ca = {
  string: (t) => M.create({ ...t, coerce: !0 }),
  number: (t) => Q.create({ ...t, coerce: !0 }),
  boolean: (t) => Ee.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => ee.create({ ...t, coerce: !0 }),
  date: (t) => ue.create({ ...t, coerce: !0 })
}, ua = b;
var $t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pe,
  setErrorMap: rs,
  getErrorMap: He,
  makeIssue: We,
  EMPTY_PATH: ss,
  addIssueToContext: h,
  ParseStatus: j,
  INVALID: b,
  DIRTY: fe,
  OK: Z,
  isAborted: _t,
  isDirty: vt,
  isValid: ce,
  isAsync: Te,
  get util() {
    return E;
  },
  get objectUtil() {
    return gt;
  },
  ZodParsedType: m,
  getParsedType: Y,
  ZodType: T,
  datetimeRegex: _n,
  ZodString: M,
  ZodNumber: Q,
  ZodBigInt: ee,
  ZodBoolean: Ee,
  ZodDate: ue,
  ZodSymbol: Ke,
  ZodUndefined: Se,
  ZodNull: Re,
  ZodAny: me,
  ZodUnknown: ie,
  ZodNever: G,
  ZodVoid: Ye,
  ZodArray: B,
  ZodObject: A,
  ZodUnion: Ae,
  ZodDiscriminatedUnion: at,
  ZodIntersection: Oe,
  ZodTuple: W,
  ZodRecord: Ce,
  ZodMap: Ge,
  ZodSet: de,
  ZodFunction: he,
  ZodLazy: Ne,
  ZodLiteral: Pe,
  ZodEnum: te,
  ZodNativeEnum: Ie,
  ZodPromise: ye,
  ZodEffects: $,
  ZodTransformer: $,
  ZodOptional: q,
  ZodNullable: ne,
  ZodDefault: je,
  ZodCatch: Ze,
  ZodNaN: Xe,
  BRAND: Ss,
  ZodBranded: Tt,
  ZodPipeline: Fe,
  ZodReadonly: Le,
  custom: bn,
  Schema: T,
  ZodSchema: T,
  late: Rs,
  get ZodFirstPartyTypeKind() {
    return v;
  },
  coerce: ca,
  any: Zs,
  array: Fs,
  bigint: Cs,
  boolean: kn,
  date: Ns,
  discriminatedUnion: Vs,
  effect: Bt,
  enum: Xs,
  function: Ks,
  instanceof: As,
  intersection: zs,
  lazy: Ys,
  literal: Gs,
  map: Ws,
  nan: Os,
  nativeEnum: Qs,
  never: Ds,
  null: js,
  nullable: na,
  number: xn,
  object: Ms,
  oboolean: oa,
  onumber: ia,
  optional: ta,
  ostring: aa,
  pipeline: sa,
  preprocess: ra,
  promise: ea,
  record: Hs,
  set: Js,
  strictObject: Bs,
  string: wn,
  symbol: Ps,
  transformer: Bt,
  tuple: qs,
  undefined: Is,
  union: $s,
  unknown: Ls,
  void: Us,
  NEVER: ua,
  ZodIssueCode: f,
  quotelessJson: ns,
  ZodError: F
});
const dt = new Map(
  Object.entries({
    SOL: "So11111111111111111111111111111111111111112",
    USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
  })
), da = {
  name: "GET_TOKEN_ADDRESS_BY_SYMBOL",
  similes: [
    "get token address",
    "get token details",
    "get token info",
    "get token address by symbol",
    "get token mint address",
    "get token mint address by symbol"
  ],
  description: "Get the token address by symbol. Used for trading (buying/selling) tokens.",
  examples: [
    [
      {
        input: {
          symbol: "SOL"
        },
        output: {
          status: "success",
          result: "So11111111111111111111111111111111111111112",
          message: "Token address for SOL: So11111111111111111111111111111111111111112"
        },
        explanation: "Get the token address for SOL"
      }
    ]
  ],
  schema: $t.object({
    symbol: $t.string().min(1, "Token symbol is required")
  }),
  handler: async (t, e) => {
    const r = e.symbol.toUpperCase();
    if (dt.has(r)) {
      const s = dt.get(r);
      return {
        status: "success",
        result: s,
        message: `Token address for ${r}: ${s}`
      };
    }
    if (!process.env.COINMARKETCAP_API_KEY)
      return {
        status: "error"
      };
    try {
      const s = await C.get(
        "https://pro-api.coinmarketcap.com/v2/cryptocurrency/info",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY
          },
          params: {
            symbol: r
          }
        }
      );
      if (s.data && s.data.data && s.data.data[r]) {
        const a = s.data.data[r];
        for (const i of a)
          if (i.platform && (i.platform.name.toLowerCase() === "solana" || i.platform.symbol.toLowerCase() === "sol")) {
            const o = i.platform.token_address;
            return dt.set(r, o), {
              status: "success",
              result: o,
              message: `Token address for ${r}: ${o}`
            };
          }
      }
    } catch (s) {
      return console.error("Error fetching token details:", s), {
        status: "error",
        message: `Failed to fetch token details: ${s?.message}`
      };
    }
    return {
      status: "error",
      message: `Token details not found for symbol: ${r}`
    };
  }
};
Sn.config();
function la() {
  const t = {
    SOLANA_PRIVATE_KEY: process.env.SOLANA_PRIVATE_KEY,
    RPC_URL: process.env.RPC_URL
  }, e = Object.entries(t).filter(([n, r]) => !r).map(([n]) => n);
  if (e.length > 0)
    throw new Error(
      `Missing required environment variables: ${e.join(", ")}`
    );
}
async function fa() {
  try {
    la();
    const t = new Tn(
      process.env.SOLANA_PRIVATE_KEY,
      process.env.RPC_URL,
      {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
        PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || ""
      }
    ), e = {
      FETCH_PRICE_ACTION: ve.FETCH_PRICE_ACTION,
      WALLET_ADDRESS_ACTION: ve.WALLET_ADDRESS_ACTION,
      BALANCE_ACTION: ve.BALANCE_ACTION,
      TRANSFER_ACTION: ve.TRANSFER_ACTION,
      TRADE_ACTION: ve.TRADE_ACTION,
      GET_TOKEN_ADDRESS_BY_SYMBOL_ACTION: da
    };
    await En(e, t, {
      name: "solana-agent",
      version: "0.0.1"
    });
  } catch (t) {
    console.error(
      "Failed to start MCP server:",
      t instanceof Error ? t.message : String(t)
    ), process.exit(1);
  }
}
process.on("uncaughtException", (t) => {
  console.error("Uncaught Exception:", t), process.exit(1);
});
process.on("unhandledRejection", (t, e) => {
  console.error("Unhandled Rejection at:", e, "reason:", t), process.exit(1);
});
fa();
//# sourceMappingURL=index.mjs.map
