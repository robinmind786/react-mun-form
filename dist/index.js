!(function (e, r) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = r(require('react'));
  else if ('function' == typeof define && define.amd) define(['react'], r);
  else {
    var o = 'object' == typeof exports ? r(require('react')) : r(e.React);
    for (var t in o) ('object' == typeof exports ? exports : e)[t] = o[t];
  }
})(self, (e) =>
  (() => {
    'use strict';
    var r = {
        12: (r) => {
          r.exports = e;
        },
      },
      o = {};
    function t(e) {
      var n = o[e];
      if (void 0 !== n) return n.exports;
      var l = (o[e] = { exports: {} });
      return r[e](l, l.exports, t), l.exports;
    }
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
      (t.d = (e, r) => {
        for (var o in r)
          t.o(r, o) &&
            !t.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
      }),
      (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var n = {};
    return (
      (() => {
        t.r(n), t.d(n, { Button: () => i, Rating: () => ee });
        var e = t(12),
          r = t.n(e),
          o = function () {
            return (
              (o =
                Object.assign ||
                function (e) {
                  for (var r, o = 1, t = arguments.length; o < t; o++)
                    for (var n in (r = arguments[o]))
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
                  return e;
                }),
              o.apply(this, arguments)
            );
          },
          l = function (e, r) {
            var o = {};
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) &&
                r.indexOf(t) < 0 &&
                (o[t] = e[t]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (t = Object.getOwnPropertySymbols(e); n < t.length; n++)
                r.indexOf(t[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, t[n]) &&
                  (o[t[n]] = e[t[n]]);
            }
            return o;
          };
        const i = function (e) {
            var t = e.children,
              n = e.className,
              i =
                void 0 === n
                  ? 'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
                  : n,
              s = e.style,
              a = void 0 === s ? {} : s,
              c = e.onClick,
              d = e.title,
              u = void 0 === d ? '' : d,
              p = e.type,
              f = void 0 === p ? 'button' : p,
              b = l(e, [
                'children',
                'className',
                'style',
                'onClick',
                'title',
                'type',
              ]);
            return r().createElement(
              'button',
              o({ className: i, style: a, onClick: c, title: u, type: f }, b),
              t
            );
          },
          s = '-';
        function a(e) {
          const r = (function (e) {
              const { theme: r, prefix: o } = e,
                t = { nextPart: new Map(), validators: [] },
                n = (function (e, r) {
                  if (!r) return e;
                  return e.map(([e, o]) => [
                    e,
                    o.map((e) =>
                      'string' == typeof e
                        ? r + e
                        : 'object' == typeof e
                          ? Object.fromEntries(
                              Object.entries(e).map(([e, o]) => [r + e, o])
                            )
                          : e
                    ),
                  ]);
                })(Object.entries(e.classGroups), o);
              return (
                n.forEach(([e, o]) => {
                  u(o, t, e, r);
                }),
                t
              );
            })(e),
            { conflictingClassGroups: o, conflictingClassGroupModifiers: t } =
              e;
          return {
            getClassGroupId: function (e) {
              const o = e.split(s);
              return (
                '' === o[0] && 1 !== o.length && o.shift(),
                c(o, r) ||
                  (function (e) {
                    if (d.test(e)) {
                      const r = d.exec(e)[1],
                        o = r?.substring(0, r.indexOf(':'));
                      if (o) return 'arbitrary..' + o;
                    }
                  })(e)
              );
            },
            getConflictingClassGroupIds: function (e, r) {
              const n = o[e] || [];
              return r && t[e] ? [...n, ...t[e]] : n;
            },
          };
        }
        function c(e, r) {
          if (0 === e.length) return r.classGroupId;
          const o = e[0],
            t = r.nextPart.get(o),
            n = t ? c(e.slice(1), t) : void 0;
          if (n) return n;
          if (0 === r.validators.length) return;
          const l = e.join(s);
          return r.validators.find(({ validator: e }) => e(l))?.classGroupId;
        }
        const d = /^\[(.+)\]$/;
        function u(e, r, o, t) {
          e.forEach((e) => {
            if ('string' != typeof e) {
              if ('function' == typeof e)
                return e.isThemeGetter
                  ? void u(e(t), r, o, t)
                  : void r.validators.push({ validator: e, classGroupId: o });
              Object.entries(e).forEach(([e, n]) => {
                u(n, p(r, e), o, t);
              });
            } else {
              ('' === e ? r : p(r, e)).classGroupId = o;
            }
          });
        }
        function p(e, r) {
          let o = e;
          return (
            r.split(s).forEach((e) => {
              o.nextPart.has(e) ||
                o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (o = o.nextPart.get(e));
            }),
            o
          );
        }
        function f(e) {
          if (e < 1) return { get: () => {}, set: () => {} };
          let r = 0,
            o = new Map(),
            t = new Map();
          function n(n, l) {
            o.set(n, l), r++, r > e && ((r = 0), (t = o), (o = new Map()));
          }
          return {
            get(e) {
              let r = o.get(e);
              return void 0 !== r
                ? r
                : void 0 !== (r = t.get(e))
                  ? (n(e, r), r)
                  : void 0;
            },
            set(e, r) {
              o.has(e) ? o.set(e, r) : n(e, r);
            },
          };
        }
        const b = '!';
        function m(e) {
          const r = e.separator,
            o = 1 === r.length,
            t = r[0],
            n = r.length;
          return function (e) {
            const l = [];
            let i,
              s = 0,
              a = 0;
            for (let c = 0; c < e.length; c++) {
              let d = e[c];
              if (0 === s) {
                if (d === t && (o || e.slice(c, c + n) === r)) {
                  l.push(e.slice(a, c)), (a = c + n);
                  continue;
                }
                if ('/' === d) {
                  i = c;
                  continue;
                }
              }
              '[' === d ? s++ : ']' === d && s--;
            }
            const c = 0 === l.length ? e : e.substring(a),
              d = c.startsWith(b);
            return {
              modifiers: l,
              hasImportantModifier: d,
              baseClassName: d ? c.substring(1) : c,
              maybePostfixModifierPosition: i && i > a ? i - a : void 0,
            };
          };
        }
        const g = /\s+/;
        function h() {
          let e,
            r,
            o = 0,
            t = '';
          for (; o < arguments.length; )
            (e = arguments[o++]) && (r = y(e)) && (t && (t += ' '), (t += r));
          return t;
        }
        function y(e) {
          if ('string' == typeof e) return e;
          let r,
            o = '';
          for (let t = 0; t < e.length; t++)
            e[t] && (r = y(e[t])) && (o && (o += ' '), (o += r));
          return o;
        }
        function v(e, ...r) {
          let o,
            t,
            n,
            l = function (s) {
              const c = r.reduce((e, r) => r(e), e());
              return (
                (o = (function (e) {
                  return {
                    cache: f(e.cacheSize),
                    splitModifiers: m(e),
                    ...a(e),
                  };
                })(c)),
                (t = o.cache.get),
                (n = o.cache.set),
                (l = i),
                i(s)
              );
            };
          function i(e) {
            const r = t(e);
            if (r) return r;
            const l = (function (e, r) {
              const {
                  splitModifiers: o,
                  getClassGroupId: t,
                  getConflictingClassGroupIds: n,
                } = r,
                l = new Set();
              return e
                .trim()
                .split(g)
                .map((e) => {
                  const {
                    modifiers: r,
                    hasImportantModifier: n,
                    baseClassName: l,
                    maybePostfixModifierPosition: i,
                  } = o(e);
                  let s = t(i ? l.substring(0, i) : l),
                    a = Boolean(i);
                  if (!s) {
                    if (!i)
                      return { isTailwindClass: !1, originalClassName: e };
                    if (((s = t(l)), !s))
                      return { isTailwindClass: !1, originalClassName: e };
                    a = !1;
                  }
                  const c = (function (e) {
                    if (e.length <= 1) return e;
                    const r = [];
                    let o = [];
                    return (
                      e.forEach((e) => {
                        '[' === e[0]
                          ? (r.push(...o.sort(), e), (o = []))
                          : o.push(e);
                      }),
                      r.push(...o.sort()),
                      r
                    );
                  })(r).join(':');
                  return {
                    isTailwindClass: !0,
                    modifierId: n ? c + b : c,
                    classGroupId: s,
                    originalClassName: e,
                    hasPostfixModifier: a,
                  };
                })
                .reverse()
                .filter((e) => {
                  if (!e.isTailwindClass) return !0;
                  const {
                      modifierId: r,
                      classGroupId: o,
                      hasPostfixModifier: t,
                    } = e,
                    i = r + o;
                  return (
                    !l.has(i) &&
                    (l.add(i), n(o, t).forEach((e) => l.add(r + e)), !0)
                  );
                })
                .reverse()
                .map((e) => e.originalClassName)
                .join(' ');
            })(e, o);
            return n(e, l), l;
          }
          return function () {
            return l(h.apply(null, arguments));
          };
        }
        function x(e) {
          const r = (r) => r[e] || [];
          return (r.isThemeGetter = !0), r;
        }
        const w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
          k = /^\d+\/\d+$/,
          z = new Set(['px', 'full', 'screen']),
          C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          j =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
          O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          P =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function S(e) {
          return M(e) || z.has(e) || k.test(e);
        }
        function I(e) {
          return A(e, 'length', F);
        }
        function M(e) {
          return Boolean(e) && !Number.isNaN(Number(e));
        }
        function G(e) {
          return A(e, 'number', M);
        }
        function N(e) {
          return Boolean(e) && Number.isInteger(Number(e));
        }
        function T(e) {
          return e.endsWith('%') && M(e.slice(0, -1));
        }
        function R(e) {
          return w.test(e);
        }
        function L(e) {
          return C.test(e);
        }
        const $ = new Set(['length', 'size', 'percentage']);
        function B(e) {
          return A(e, $, H);
        }
        function W(e) {
          return A(e, 'position', H);
        }
        const _ = new Set(['image', 'url']);
        function D(e) {
          return A(e, _, Q);
        }
        function q(e) {
          return A(e, '', J);
        }
        function K() {
          return !0;
        }
        function A(e, r, o) {
          const t = w.exec(e);
          return (
            !!t &&
            (t[1] ? ('string' == typeof r ? t[1] === r : r.has(t[1])) : o(t[2]))
          );
        }
        function F(e) {
          return j.test(e) && !E.test(e);
        }
        function H() {
          return !1;
        }
        function J(e) {
          return O.test(e);
        }
        function Q(e) {
          return P.test(e);
        }
        Symbol.toStringTag;
        function U() {
          const e = x('colors'),
            r = x('spacing'),
            o = x('blur'),
            t = x('brightness'),
            n = x('borderColor'),
            l = x('borderRadius'),
            i = x('borderSpacing'),
            s = x('borderWidth'),
            a = x('contrast'),
            c = x('grayscale'),
            d = x('hueRotate'),
            u = x('invert'),
            p = x('gap'),
            f = x('gradientColorStops'),
            b = x('gradientColorStopPositions'),
            m = x('inset'),
            g = x('margin'),
            h = x('opacity'),
            y = x('padding'),
            v = x('saturate'),
            w = x('scale'),
            k = x('sepia'),
            z = x('skew'),
            C = x('space'),
            j = x('translate'),
            E = () => ['auto', R, r],
            O = () => [R, r],
            P = () => ['', S, I],
            $ = () => ['auto', M, R],
            _ = () => ['', '0', R],
            A = () => [M, G],
            F = () => [M, R];
          return {
            cacheSize: 500,
            separator: ':',
            theme: {
              colors: [K],
              spacing: [S, I],
              blur: ['none', '', L, R],
              brightness: A(),
              borderColor: [e],
              borderRadius: ['none', '', 'full', L, R],
              borderSpacing: O(),
              borderWidth: P(),
              contrast: A(),
              grayscale: _(),
              hueRotate: F(),
              invert: _(),
              gap: O(),
              gradientColorStops: [e],
              gradientColorStopPositions: [T, I],
              inset: E(),
              margin: E(),
              opacity: A(),
              padding: O(),
              saturate: A(),
              scale: A(),
              sepia: _(),
              skew: F(),
              space: O(),
              translate: O(),
            },
            classGroups: {
              aspect: [{ aspect: ['auto', 'square', 'video', R] }],
              container: ['container'],
              columns: [{ columns: [L] }],
              'break-after': [
                {
                  'break-after': [
                    'auto',
                    'avoid',
                    'all',
                    'avoid-page',
                    'page',
                    'left',
                    'right',
                    'column',
                  ],
                },
              ],
              'break-before': [
                {
                  'break-before': [
                    'auto',
                    'avoid',
                    'all',
                    'avoid-page',
                    'page',
                    'left',
                    'right',
                    'column',
                  ],
                },
              ],
              'break-inside': [
                {
                  'break-inside': [
                    'auto',
                    'avoid',
                    'avoid-page',
                    'avoid-column',
                  ],
                },
              ],
              'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
              box: [{ box: ['border', 'content'] }],
              display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden',
              ],
              float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
              clear: [
                { clear: ['left', 'right', 'both', 'none', 'start', 'end'] },
              ],
              isolation: ['isolate', 'isolation-auto'],
              'object-fit': [
                { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
              ],
              'object-position': [
                {
                  object: [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                    R,
                  ],
                },
              ],
              overflow: [
                { overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'] },
              ],
              'overflow-x': [
                {
                  'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'],
                },
              ],
              'overflow-y': [
                {
                  'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'],
                },
              ],
              overscroll: [{ overscroll: ['auto', 'contain', 'none'] }],
              'overscroll-x': [{ 'overscroll-x': ['auto', 'contain', 'none'] }],
              'overscroll-y': [{ 'overscroll-y': ['auto', 'contain', 'none'] }],
              position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
              inset: [{ inset: [m] }],
              'inset-x': [{ 'inset-x': [m] }],
              'inset-y': [{ 'inset-y': [m] }],
              start: [{ start: [m] }],
              end: [{ end: [m] }],
              top: [{ top: [m] }],
              right: [{ right: [m] }],
              bottom: [{ bottom: [m] }],
              left: [{ left: [m] }],
              visibility: ['visible', 'invisible', 'collapse'],
              z: [{ z: ['auto', N, R] }],
              basis: [{ basis: E() }],
              'flex-direction': [
                { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
              ],
              'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
              flex: [{ flex: ['1', 'auto', 'initial', 'none', R] }],
              grow: [{ grow: _() }],
              shrink: [{ shrink: _() }],
              order: [{ order: ['first', 'last', 'none', N, R] }],
              'grid-cols': [{ 'grid-cols': [K] }],
              'col-start-end': [{ col: ['auto', { span: ['full', N, R] }, R] }],
              'col-start': [{ 'col-start': $() }],
              'col-end': [{ 'col-end': $() }],
              'grid-rows': [{ 'grid-rows': [K] }],
              'row-start-end': [{ row: ['auto', { span: [N, R] }, R] }],
              'row-start': [{ 'row-start': $() }],
              'row-end': [{ 'row-end': $() }],
              'grid-flow': [
                {
                  'grid-flow': [
                    'row',
                    'col',
                    'dense',
                    'row-dense',
                    'col-dense',
                  ],
                },
              ],
              'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', R] }],
              'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', R] }],
              gap: [{ gap: [p] }],
              'gap-x': [{ 'gap-x': [p] }],
              'gap-y': [{ 'gap-y': [p] }],
              'justify-content': [
                {
                  justify: [
                    'normal',
                    'start',
                    'end',
                    'center',
                    'between',
                    'around',
                    'evenly',
                    'stretch',
                  ],
                },
              ],
              'justify-items': [
                { 'justify-items': ['start', 'end', 'center', 'stretch'] },
              ],
              'justify-self': [
                {
                  'justify-self': ['auto', 'start', 'end', 'center', 'stretch'],
                },
              ],
              'align-content': [
                {
                  content: [
                    'normal',
                    'start',
                    'end',
                    'center',
                    'between',
                    'around',
                    'evenly',
                    'stretch',
                    'baseline',
                  ],
                },
              ],
              'align-items': [
                { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
              ],
              'align-self': [
                {
                  self: [
                    'auto',
                    'start',
                    'end',
                    'center',
                    'stretch',
                    'baseline',
                  ],
                },
              ],
              'place-content': [
                {
                  'place-content': [
                    'start',
                    'end',
                    'center',
                    'between',
                    'around',
                    'evenly',
                    'stretch',
                    'baseline',
                  ],
                },
              ],
              'place-items': [
                {
                  'place-items': [
                    'start',
                    'end',
                    'center',
                    'baseline',
                    'stretch',
                  ],
                },
              ],
              'place-self': [
                { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
              ],
              p: [{ p: [y] }],
              px: [{ px: [y] }],
              py: [{ py: [y] }],
              ps: [{ ps: [y] }],
              pe: [{ pe: [y] }],
              pt: [{ pt: [y] }],
              pr: [{ pr: [y] }],
              pb: [{ pb: [y] }],
              pl: [{ pl: [y] }],
              m: [{ m: [g] }],
              mx: [{ mx: [g] }],
              my: [{ my: [g] }],
              ms: [{ ms: [g] }],
              me: [{ me: [g] }],
              mt: [{ mt: [g] }],
              mr: [{ mr: [g] }],
              mb: [{ mb: [g] }],
              ml: [{ ml: [g] }],
              'space-x': [{ 'space-x': [C] }],
              'space-x-reverse': ['space-x-reverse'],
              'space-y': [{ 'space-y': [C] }],
              'space-y-reverse': ['space-y-reverse'],
              w: [
                { w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', R, r] },
              ],
              'min-w': [{ 'min-w': [R, r, 'min', 'max', 'fit'] }],
              'max-w': [
                {
                  'max-w': [
                    R,
                    r,
                    'none',
                    'full',
                    'min',
                    'max',
                    'fit',
                    'prose',
                    { screen: [L] },
                    L,
                  ],
                },
              ],
              h: [
                { h: [R, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              'min-h': [
                { 'min-h': [R, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              'max-h': [
                { 'max-h': [R, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              size: [{ size: [R, r, 'auto', 'min', 'max', 'fit'] }],
              'font-size': [{ text: ['base', L, I] }],
              'font-smoothing': ['antialiased', 'subpixel-antialiased'],
              'font-style': ['italic', 'not-italic'],
              'font-weight': [
                {
                  font: [
                    'thin',
                    'extralight',
                    'light',
                    'normal',
                    'medium',
                    'semibold',
                    'bold',
                    'extrabold',
                    'black',
                    G,
                  ],
                },
              ],
              'font-family': [{ font: [K] }],
              'fvn-normal': ['normal-nums'],
              'fvn-ordinal': ['ordinal'],
              'fvn-slashed-zero': ['slashed-zero'],
              'fvn-figure': ['lining-nums', 'oldstyle-nums'],
              'fvn-spacing': ['proportional-nums', 'tabular-nums'],
              'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
              tracking: [
                {
                  tracking: [
                    'tighter',
                    'tight',
                    'normal',
                    'wide',
                    'wider',
                    'widest',
                    R,
                  ],
                },
              ],
              'line-clamp': [{ 'line-clamp': ['none', M, G] }],
              leading: [
                {
                  leading: [
                    'none',
                    'tight',
                    'snug',
                    'normal',
                    'relaxed',
                    'loose',
                    S,
                    R,
                  ],
                },
              ],
              'list-image': [{ 'list-image': ['none', R] }],
              'list-style-type': [{ list: ['none', 'disc', 'decimal', R] }],
              'list-style-position': [{ list: ['inside', 'outside'] }],
              'placeholder-color': [{ placeholder: [e] }],
              'placeholder-opacity': [{ 'placeholder-opacity': [h] }],
              'text-alignment': [
                {
                  text: ['left', 'center', 'right', 'justify', 'start', 'end'],
                },
              ],
              'text-color': [{ text: [e] }],
              'text-opacity': [{ 'text-opacity': [h] }],
              'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline',
              ],
              'text-decoration-style': [
                {
                  decoration: [
                    'solid',
                    'dashed',
                    'dotted',
                    'double',
                    'none',
                    'wavy',
                  ],
                },
              ],
              'text-decoration-thickness': [
                { decoration: ['auto', 'from-font', S, I] },
              ],
              'underline-offset': [{ 'underline-offset': ['auto', S, R] }],
              'text-decoration-color': [{ decoration: [e] }],
              'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case',
              ],
              'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
              'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
              indent: [{ indent: O() }],
              'vertical-align': [
                {
                  align: [
                    'baseline',
                    'top',
                    'middle',
                    'bottom',
                    'text-top',
                    'text-bottom',
                    'sub',
                    'super',
                    R,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    'normal',
                    'nowrap',
                    'pre',
                    'pre-line',
                    'pre-wrap',
                    'break-spaces',
                  ],
                },
              ],
              break: [{ break: ['normal', 'words', 'all', 'keep'] }],
              hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
              content: [{ content: ['none', R] }],
              'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
              'bg-clip': [
                { 'bg-clip': ['border', 'padding', 'content', 'text'] },
              ],
              'bg-opacity': [{ 'bg-opacity': [h] }],
              'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
              'bg-position': [
                {
                  bg: [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                    W,
                  ],
                },
              ],
              'bg-repeat': [
                {
                  bg: [
                    'no-repeat',
                    { repeat: ['', 'x', 'y', 'round', 'space'] },
                  ],
                },
              ],
              'bg-size': [{ bg: ['auto', 'cover', 'contain', B] }],
              'bg-image': [
                {
                  bg: [
                    'none',
                    {
                      'gradient-to': [
                        't',
                        'tr',
                        'r',
                        'br',
                        'b',
                        'bl',
                        'l',
                        'tl',
                      ],
                    },
                    D,
                  ],
                },
              ],
              'bg-color': [{ bg: [e] }],
              'gradient-from-pos': [{ from: [b] }],
              'gradient-via-pos': [{ via: [b] }],
              'gradient-to-pos': [{ to: [b] }],
              'gradient-from': [{ from: [f] }],
              'gradient-via': [{ via: [f] }],
              'gradient-to': [{ to: [f] }],
              rounded: [{ rounded: [l] }],
              'rounded-s': [{ 'rounded-s': [l] }],
              'rounded-e': [{ 'rounded-e': [l] }],
              'rounded-t': [{ 'rounded-t': [l] }],
              'rounded-r': [{ 'rounded-r': [l] }],
              'rounded-b': [{ 'rounded-b': [l] }],
              'rounded-l': [{ 'rounded-l': [l] }],
              'rounded-ss': [{ 'rounded-ss': [l] }],
              'rounded-se': [{ 'rounded-se': [l] }],
              'rounded-ee': [{ 'rounded-ee': [l] }],
              'rounded-es': [{ 'rounded-es': [l] }],
              'rounded-tl': [{ 'rounded-tl': [l] }],
              'rounded-tr': [{ 'rounded-tr': [l] }],
              'rounded-br': [{ 'rounded-br': [l] }],
              'rounded-bl': [{ 'rounded-bl': [l] }],
              'border-w': [{ border: [s] }],
              'border-w-x': [{ 'border-x': [s] }],
              'border-w-y': [{ 'border-y': [s] }],
              'border-w-s': [{ 'border-s': [s] }],
              'border-w-e': [{ 'border-e': [s] }],
              'border-w-t': [{ 'border-t': [s] }],
              'border-w-r': [{ 'border-r': [s] }],
              'border-w-b': [{ 'border-b': [s] }],
              'border-w-l': [{ 'border-l': [s] }],
              'border-opacity': [{ 'border-opacity': [h] }],
              'border-style': [
                {
                  border: [
                    'solid',
                    'dashed',
                    'dotted',
                    'double',
                    'none',
                    'hidden',
                  ],
                },
              ],
              'divide-x': [{ 'divide-x': [s] }],
              'divide-x-reverse': ['divide-x-reverse'],
              'divide-y': [{ 'divide-y': [s] }],
              'divide-y-reverse': ['divide-y-reverse'],
              'divide-opacity': [{ 'divide-opacity': [h] }],
              'divide-style': [
                { divide: ['solid', 'dashed', 'dotted', 'double', 'none'] },
              ],
              'border-color': [{ border: [n] }],
              'border-color-x': [{ 'border-x': [n] }],
              'border-color-y': [{ 'border-y': [n] }],
              'border-color-t': [{ 'border-t': [n] }],
              'border-color-r': [{ 'border-r': [n] }],
              'border-color-b': [{ 'border-b': [n] }],
              'border-color-l': [{ 'border-l': [n] }],
              'divide-color': [{ divide: [n] }],
              'outline-style': [
                {
                  outline: ['', 'solid', 'dashed', 'dotted', 'double', 'none'],
                },
              ],
              'outline-offset': [{ 'outline-offset': [S, R] }],
              'outline-w': [{ outline: [S, I] }],
              'outline-color': [{ outline: [e] }],
              'ring-w': [{ ring: P() }],
              'ring-w-inset': ['ring-inset'],
              'ring-color': [{ ring: [e] }],
              'ring-opacity': [{ 'ring-opacity': [h] }],
              'ring-offset-w': [{ 'ring-offset': [S, I] }],
              'ring-offset-color': [{ 'ring-offset': [e] }],
              shadow: [{ shadow: ['', 'inner', 'none', L, q] }],
              'shadow-color': [{ shadow: [K] }],
              opacity: [{ opacity: [h] }],
              'mix-blend': [
                {
                  'mix-blend': [
                    'normal',
                    'multiply',
                    'screen',
                    'overlay',
                    'darken',
                    'lighten',
                    'color-dodge',
                    'color-burn',
                    'hard-light',
                    'soft-light',
                    'difference',
                    'exclusion',
                    'hue',
                    'saturation',
                    'color',
                    'luminosity',
                    'plus-lighter',
                    'plus-darker',
                  ],
                },
              ],
              'bg-blend': [
                {
                  'bg-blend': [
                    'normal',
                    'multiply',
                    'screen',
                    'overlay',
                    'darken',
                    'lighten',
                    'color-dodge',
                    'color-burn',
                    'hard-light',
                    'soft-light',
                    'difference',
                    'exclusion',
                    'hue',
                    'saturation',
                    'color',
                    'luminosity',
                  ],
                },
              ],
              filter: [{ filter: ['', 'none'] }],
              blur: [{ blur: [o] }],
              brightness: [{ brightness: [t] }],
              contrast: [{ contrast: [a] }],
              'drop-shadow': [{ 'drop-shadow': ['', 'none', L, R] }],
              grayscale: [{ grayscale: [c] }],
              'hue-rotate': [{ 'hue-rotate': [d] }],
              invert: [{ invert: [u] }],
              saturate: [{ saturate: [v] }],
              sepia: [{ sepia: [k] }],
              'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
              'backdrop-blur': [{ 'backdrop-blur': [o] }],
              'backdrop-brightness': [{ 'backdrop-brightness': [t] }],
              'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
              'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
              'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
              'backdrop-invert': [{ 'backdrop-invert': [u] }],
              'backdrop-opacity': [{ 'backdrop-opacity': [h] }],
              'backdrop-saturate': [{ 'backdrop-saturate': [v] }],
              'backdrop-sepia': [{ 'backdrop-sepia': [k] }],
              'border-collapse': [{ border: ['collapse', 'separate'] }],
              'border-spacing': [{ 'border-spacing': [i] }],
              'border-spacing-x': [{ 'border-spacing-x': [i] }],
              'border-spacing-y': [{ 'border-spacing-y': [i] }],
              'table-layout': [{ table: ['auto', 'fixed'] }],
              caption: [{ caption: ['top', 'bottom'] }],
              transition: [
                {
                  transition: [
                    'none',
                    'all',
                    '',
                    'colors',
                    'opacity',
                    'shadow',
                    'transform',
                    R,
                  ],
                },
              ],
              duration: [{ duration: F() }],
              ease: [{ ease: ['linear', 'in', 'out', 'in-out', R] }],
              delay: [{ delay: F() }],
              animate: [
                { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', R] },
              ],
              transform: [{ transform: ['', 'gpu', 'none'] }],
              scale: [{ scale: [w] }],
              'scale-x': [{ 'scale-x': [w] }],
              'scale-y': [{ 'scale-y': [w] }],
              rotate: [{ rotate: [N, R] }],
              'translate-x': [{ 'translate-x': [j] }],
              'translate-y': [{ 'translate-y': [j] }],
              'skew-x': [{ 'skew-x': [z] }],
              'skew-y': [{ 'skew-y': [z] }],
              'transform-origin': [
                {
                  origin: [
                    'center',
                    'top',
                    'top-right',
                    'right',
                    'bottom-right',
                    'bottom',
                    'bottom-left',
                    'left',
                    'top-left',
                    R,
                  ],
                },
              ],
              accent: [{ accent: ['auto', e] }],
              appearance: [{ appearance: ['none', 'auto'] }],
              cursor: [
                {
                  cursor: [
                    'auto',
                    'default',
                    'pointer',
                    'wait',
                    'text',
                    'move',
                    'help',
                    'not-allowed',
                    'none',
                    'context-menu',
                    'progress',
                    'cell',
                    'crosshair',
                    'vertical-text',
                    'alias',
                    'copy',
                    'no-drop',
                    'grab',
                    'grabbing',
                    'all-scroll',
                    'col-resize',
                    'row-resize',
                    'n-resize',
                    'e-resize',
                    's-resize',
                    'w-resize',
                    'ne-resize',
                    'nw-resize',
                    'se-resize',
                    'sw-resize',
                    'ew-resize',
                    'ns-resize',
                    'nesw-resize',
                    'nwse-resize',
                    'zoom-in',
                    'zoom-out',
                    R,
                  ],
                },
              ],
              'caret-color': [{ caret: [e] }],
              'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
              resize: [{ resize: ['none', 'y', 'x', ''] }],
              'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
              'scroll-m': [{ 'scroll-m': O() }],
              'scroll-mx': [{ 'scroll-mx': O() }],
              'scroll-my': [{ 'scroll-my': O() }],
              'scroll-ms': [{ 'scroll-ms': O() }],
              'scroll-me': [{ 'scroll-me': O() }],
              'scroll-mt': [{ 'scroll-mt': O() }],
              'scroll-mr': [{ 'scroll-mr': O() }],
              'scroll-mb': [{ 'scroll-mb': O() }],
              'scroll-ml': [{ 'scroll-ml': O() }],
              'scroll-p': [{ 'scroll-p': O() }],
              'scroll-px': [{ 'scroll-px': O() }],
              'scroll-py': [{ 'scroll-py': O() }],
              'scroll-ps': [{ 'scroll-ps': O() }],
              'scroll-pe': [{ 'scroll-pe': O() }],
              'scroll-pt': [{ 'scroll-pt': O() }],
              'scroll-pr': [{ 'scroll-pr': O() }],
              'scroll-pb': [{ 'scroll-pb': O() }],
              'scroll-pl': [{ 'scroll-pl': O() }],
              'snap-align': [
                { snap: ['start', 'end', 'center', 'align-none'] },
              ],
              'snap-stop': [{ snap: ['normal', 'always'] }],
              'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
              'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
              touch: [{ touch: ['auto', 'none', 'manipulation'] }],
              'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
              'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
              'touch-pz': ['touch-pinch-zoom'],
              select: [{ select: ['none', 'text', 'all', 'auto'] }],
              'will-change': [
                {
                  'will-change': ['auto', 'scroll', 'contents', 'transform', R],
                },
              ],
              fill: [{ fill: [e, 'none'] }],
              'stroke-w': [{ stroke: [S, I, G] }],
              stroke: [{ stroke: [e, 'none'] }],
              sr: ['sr-only', 'not-sr-only'],
              'forced-color-adjust': [
                { 'forced-color-adjust': ['auto', 'none'] },
              ],
            },
            conflictingClassGroups: {
              overflow: ['overflow-x', 'overflow-y'],
              overscroll: ['overscroll-x', 'overscroll-y'],
              inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left',
              ],
              'inset-x': ['right', 'left'],
              'inset-y': ['top', 'bottom'],
              flex: ['basis', 'grow', 'shrink'],
              gap: ['gap-x', 'gap-y'],
              p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
              px: ['pr', 'pl'],
              py: ['pt', 'pb'],
              m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
              mx: ['mr', 'ml'],
              my: ['mt', 'mb'],
              size: ['w', 'h'],
              'font-size': ['leading'],
              'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction',
              ],
              'fvn-ordinal': ['fvn-normal'],
              'fvn-slashed-zero': ['fvn-normal'],
              'fvn-figure': ['fvn-normal'],
              'fvn-spacing': ['fvn-normal'],
              'fvn-fraction': ['fvn-normal'],
              'line-clamp': ['display', 'overflow'],
              rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl',
              ],
              'rounded-s': ['rounded-ss', 'rounded-es'],
              'rounded-e': ['rounded-se', 'rounded-ee'],
              'rounded-t': ['rounded-tl', 'rounded-tr'],
              'rounded-r': ['rounded-tr', 'rounded-br'],
              'rounded-b': ['rounded-br', 'rounded-bl'],
              'rounded-l': ['rounded-tl', 'rounded-bl'],
              'border-spacing': ['border-spacing-x', 'border-spacing-y'],
              'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l',
              ],
              'border-w-x': ['border-w-r', 'border-w-l'],
              'border-w-y': ['border-w-t', 'border-w-b'],
              'border-color': [
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l',
              ],
              'border-color-x': ['border-color-r', 'border-color-l'],
              'border-color-y': ['border-color-t', 'border-color-b'],
              'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml',
              ],
              'scroll-mx': ['scroll-mr', 'scroll-ml'],
              'scroll-my': ['scroll-mt', 'scroll-mb'],
              'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl',
              ],
              'scroll-px': ['scroll-pr', 'scroll-pl'],
              'scroll-py': ['scroll-pt', 'scroll-pb'],
              touch: ['touch-x', 'touch-y', 'touch-pz'],
              'touch-x': ['touch'],
              'touch-y': ['touch'],
              'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
          };
        }
        const V = v(U);
        var X = function () {
            return r().createElement(
              'svg',
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 576 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              r().createElement('path', {
                d: 'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z',
              })
            );
          },
          Y = function () {
            return r().createElement(
              'svg',
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: 0,
                viewBox: '0 0 576 512',
                height: '1em',
                width: '1em',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              r().createElement('path', {
                d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
              })
            );
          },
          Z = function () {
            return r().createElement('span', null, '✖');
          };
        const ee = (0, e.forwardRef)(function (o, t) {
          var n = o.id,
            l = o.value,
            i = o.disabled,
            s = o.readOnly,
            a = o.stars,
            c = void 0 === a ? 5 : a,
            d = o.cancel,
            u = void 0 === d || d,
            p = o.style,
            f = o.className,
            b = void 0 === f ? '' : f,
            m = o.tooltip,
            g = o.onChange,
            h = o.onIcon,
            y = o.offIcon,
            v = o.cancelIcon,
            x = (0, e.useRef)(null),
            w = (0, e.useState)(null != l ? l : null),
            k = w[0],
            z = w[1],
            C = !i && !s,
            j = C ? 0 : -1,
            E = function (e) {
              C &&
                (z(null),
                g && g({ value: null, originalEvent: e }),
                e.preventDefault());
            },
            O = function (e) {
              !C ||
                ('Enter' !== e.key && ' ' !== e.key) ||
                (z(null),
                g && g({ value: null, originalEvent: e }),
                e.preventDefault());
            };
          return r().createElement(
            'div',
            {
              ref: x,
              id: n,
              style: p,
              className: V(
                'inline-flex items-center gap-1.5 text-yellow-500',
                b
              ),
              title: m,
            },
            (function () {
              if (u) {
                var e = v || r().createElement(Z, null);
                return r().createElement(
                  'div',
                  {
                    ref: t,
                    tabIndex: j,
                    onClick: E,
                    onKeyDown: O,
                    role: 'button',
                    'aria-label': 'Cancel rating',
                    style: { display: 'inline-block' },
                  },
                  e
                );
              }
              return null;
            })(),
            Array.from({ length: c }, function (e, r) {
              return r + 1;
            }).map(function (e) {
              var o =
                e <= (null != k ? k : 0)
                  ? h || r().createElement(Y, null)
                  : y || r().createElement(X, null);
              return r().createElement(
                'button',
                {
                  key: e,
                  onClick: function (r) {
                    return (function (e, r) {
                      C && (z(r), g && g({ value: r, originalEvent: e }));
                    })(r, e);
                  },
                  onKeyDown: function (r) {
                    return (function (e, r) {
                      !C ||
                        ('Enter' !== e.key && '' !== e.key) ||
                        (e.preventDefault(),
                        z(r),
                        g && g({ value: r, originalEvent: e }));
                    })(r, e);
                  },
                  tabIndex: j,
                  className: 'border-none outline-none',
                  type: 'button',
                },
                o
              );
            })
          );
        });
      })(),
      n
    );
  })()
);
