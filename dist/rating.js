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
        t.r(n), t.d(n, { Rating: () => X });
        var e = t(12),
          r = t.n(e);
        const o = '-';
        function l(e) {
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
                  a(o, t, e, r);
                }),
                t
              );
            })(e),
            { conflictingClassGroups: t, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: function (e) {
              const t = e.split(o);
              return (
                '' === t[0] && 1 !== t.length && t.shift(),
                i(t, r) ||
                  (function (e) {
                    if (s.test(e)) {
                      const r = s.exec(e)[1],
                        o = r?.substring(0, r.indexOf(':'));
                      if (o) return 'arbitrary..' + o;
                    }
                  })(e)
              );
            },
            getConflictingClassGroupIds: function (e, r) {
              const o = t[e] || [];
              return r && n[e] ? [...o, ...n[e]] : o;
            },
          };
        }
        function i(e, r) {
          if (0 === e.length) return r.classGroupId;
          const t = e[0],
            n = r.nextPart.get(t),
            l = n ? i(e.slice(1), n) : void 0;
          if (l) return l;
          if (0 === r.validators.length) return;
          const s = e.join(o);
          return r.validators.find(({ validator: e }) => e(s))?.classGroupId;
        }
        const s = /^\[(.+)\]$/;
        function a(e, r, o, t) {
          e.forEach((e) => {
            if ('string' != typeof e) {
              if ('function' == typeof e)
                return e.isThemeGetter
                  ? void a(e(t), r, o, t)
                  : void r.validators.push({ validator: e, classGroupId: o });
              Object.entries(e).forEach(([e, n]) => {
                a(n, c(r, e), o, t);
              });
            } else {
              ('' === e ? r : c(r, e)).classGroupId = o;
            }
          });
        }
        function c(e, r) {
          let t = e;
          return (
            r.split(o).forEach((e) => {
              t.nextPart.has(e) ||
                t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (t = t.nextPart.get(e));
            }),
            t
          );
        }
        function d(e) {
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
        const u = '!';
        function p(e) {
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
              d = c.startsWith(u);
            return {
              modifiers: l,
              hasImportantModifier: d,
              baseClassName: d ? c.substring(1) : c,
              maybePostfixModifierPosition: i && i > a ? i - a : void 0,
            };
          };
        }
        const f = /\s+/;
        function b() {
          let e,
            r,
            o = 0,
            t = '';
          for (; o < arguments.length; )
            (e = arguments[o++]) && (r = m(e)) && (t && (t += ' '), (t += r));
          return t;
        }
        function m(e) {
          if ('string' == typeof e) return e;
          let r,
            o = '';
          for (let t = 0; t < e.length; t++)
            e[t] && (r = m(e[t])) && (o && (o += ' '), (o += r));
          return o;
        }
        function g(e, ...r) {
          let o,
            t,
            n,
            i = function (a) {
              const c = r.reduce((e, r) => r(e), e());
              return (
                (o = (function (e) {
                  return {
                    cache: d(e.cacheSize),
                    splitModifiers: p(e),
                    ...l(e),
                  };
                })(c)),
                (t = o.cache.get),
                (n = o.cache.set),
                (i = s),
                s(a)
              );
            };
          function s(e) {
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
                .split(f)
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
                    modifierId: n ? c + u : c,
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
            return i(b.apply(null, arguments));
          };
        }
        function h(e) {
          const r = (r) => r[e] || [];
          return (r.isThemeGetter = !0), r;
        }
        const v = /^\[(?:([a-z-]+):)?(.+)\]$/i,
          y = /^\d+\/\d+$/,
          x = new Set(['px', 'full', 'screen']),
          w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
          k =
            /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
          z = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
          C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
          j =
            /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function E(e) {
          return I(e) || x.has(e) || y.test(e);
        }
        function M(e) {
          return D(e, 'length', q);
        }
        function I(e) {
          return Boolean(e) && !Number.isNaN(Number(e));
        }
        function S(e) {
          return D(e, 'number', I);
        }
        function G(e) {
          return Boolean(e) && Number.isInteger(Number(e));
        }
        function P(e) {
          return e.endsWith('%') && I(e.slice(0, -1));
        }
        function N(e) {
          return v.test(e);
        }
        function O(e) {
          return w.test(e);
        }
        const T = new Set(['length', 'size', 'percentage']);
        function R(e) {
          return D(e, T, K);
        }
        function L(e) {
          return D(e, 'position', K);
        }
        const $ = new Set(['image', 'url']);
        function W(e) {
          return D(e, $, F);
        }
        function _(e) {
          return D(e, '', A);
        }
        function B() {
          return !0;
        }
        function D(e, r, o) {
          const t = v.exec(e);
          return (
            !!t &&
            (t[1] ? ('string' == typeof r ? t[1] === r : r.has(t[1])) : o(t[2]))
          );
        }
        function q(e) {
          return k.test(e) && !z.test(e);
        }
        function K() {
          return !1;
        }
        function A(e) {
          return C.test(e);
        }
        function F(e) {
          return j.test(e);
        }
        Symbol.toStringTag;
        function H() {
          const e = h('colors'),
            r = h('spacing'),
            o = h('blur'),
            t = h('brightness'),
            n = h('borderColor'),
            l = h('borderRadius'),
            i = h('borderSpacing'),
            s = h('borderWidth'),
            a = h('contrast'),
            c = h('grayscale'),
            d = h('hueRotate'),
            u = h('invert'),
            p = h('gap'),
            f = h('gradientColorStops'),
            b = h('gradientColorStopPositions'),
            m = h('inset'),
            g = h('margin'),
            v = h('opacity'),
            y = h('padding'),
            x = h('saturate'),
            w = h('scale'),
            k = h('sepia'),
            z = h('skew'),
            C = h('space'),
            j = h('translate'),
            T = () => ['auto', N, r],
            $ = () => [N, r],
            D = () => ['', E, M],
            q = () => ['auto', I, N],
            K = () => ['', '0', N],
            A = () => [I, S],
            F = () => [I, N];
          return {
            cacheSize: 500,
            separator: ':',
            theme: {
              colors: [B],
              spacing: [E, M],
              blur: ['none', '', O, N],
              brightness: A(),
              borderColor: [e],
              borderRadius: ['none', '', 'full', O, N],
              borderSpacing: $(),
              borderWidth: D(),
              contrast: A(),
              grayscale: K(),
              hueRotate: F(),
              invert: K(),
              gap: $(),
              gradientColorStops: [e],
              gradientColorStopPositions: [P, M],
              inset: T(),
              margin: T(),
              opacity: A(),
              padding: $(),
              saturate: A(),
              scale: A(),
              sepia: K(),
              skew: F(),
              space: $(),
              translate: $(),
            },
            classGroups: {
              aspect: [{ aspect: ['auto', 'square', 'video', N] }],
              container: ['container'],
              columns: [{ columns: [O] }],
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
                    N,
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
              z: [{ z: ['auto', G, N] }],
              basis: [{ basis: T() }],
              'flex-direction': [
                { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
              ],
              'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
              flex: [{ flex: ['1', 'auto', 'initial', 'none', N] }],
              grow: [{ grow: K() }],
              shrink: [{ shrink: K() }],
              order: [{ order: ['first', 'last', 'none', G, N] }],
              'grid-cols': [{ 'grid-cols': [B] }],
              'col-start-end': [{ col: ['auto', { span: ['full', G, N] }, N] }],
              'col-start': [{ 'col-start': q() }],
              'col-end': [{ 'col-end': q() }],
              'grid-rows': [{ 'grid-rows': [B] }],
              'row-start-end': [{ row: ['auto', { span: [G, N] }, N] }],
              'row-start': [{ 'row-start': q() }],
              'row-end': [{ 'row-end': q() }],
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
              'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', N] }],
              'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', N] }],
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
                { w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', N, r] },
              ],
              'min-w': [{ 'min-w': [N, r, 'min', 'max', 'fit'] }],
              'max-w': [
                {
                  'max-w': [
                    N,
                    r,
                    'none',
                    'full',
                    'min',
                    'max',
                    'fit',
                    'prose',
                    { screen: [O] },
                    O,
                  ],
                },
              ],
              h: [
                { h: [N, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              'min-h': [
                { 'min-h': [N, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              'max-h': [
                { 'max-h': [N, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
              ],
              size: [{ size: [N, r, 'auto', 'min', 'max', 'fit'] }],
              'font-size': [{ text: ['base', O, M] }],
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
                    S,
                  ],
                },
              ],
              'font-family': [{ font: [B] }],
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
                    N,
                  ],
                },
              ],
              'line-clamp': [{ 'line-clamp': ['none', I, S] }],
              leading: [
                {
                  leading: [
                    'none',
                    'tight',
                    'snug',
                    'normal',
                    'relaxed',
                    'loose',
                    E,
                    N,
                  ],
                },
              ],
              'list-image': [{ 'list-image': ['none', N] }],
              'list-style-type': [{ list: ['none', 'disc', 'decimal', N] }],
              'list-style-position': [{ list: ['inside', 'outside'] }],
              'placeholder-color': [{ placeholder: [e] }],
              'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
              'text-alignment': [
                {
                  text: ['left', 'center', 'right', 'justify', 'start', 'end'],
                },
              ],
              'text-color': [{ text: [e] }],
              'text-opacity': [{ 'text-opacity': [v] }],
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
                { decoration: ['auto', 'from-font', E, M] },
              ],
              'underline-offset': [{ 'underline-offset': ['auto', E, N] }],
              'text-decoration-color': [{ decoration: [e] }],
              'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case',
              ],
              'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
              'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
              indent: [{ indent: $() }],
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
                    N,
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
              content: [{ content: ['none', N] }],
              'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
              'bg-clip': [
                { 'bg-clip': ['border', 'padding', 'content', 'text'] },
              ],
              'bg-opacity': [{ 'bg-opacity': [v] }],
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
                    L,
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
              'bg-size': [{ bg: ['auto', 'cover', 'contain', R] }],
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
                    W,
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
              'border-opacity': [{ 'border-opacity': [v] }],
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
              'divide-opacity': [{ 'divide-opacity': [v] }],
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
              'outline-offset': [{ 'outline-offset': [E, N] }],
              'outline-w': [{ outline: [E, M] }],
              'outline-color': [{ outline: [e] }],
              'ring-w': [{ ring: D() }],
              'ring-w-inset': ['ring-inset'],
              'ring-color': [{ ring: [e] }],
              'ring-opacity': [{ 'ring-opacity': [v] }],
              'ring-offset-w': [{ 'ring-offset': [E, M] }],
              'ring-offset-color': [{ 'ring-offset': [e] }],
              shadow: [{ shadow: ['', 'inner', 'none', O, _] }],
              'shadow-color': [{ shadow: [B] }],
              opacity: [{ opacity: [v] }],
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
              'drop-shadow': [{ 'drop-shadow': ['', 'none', O, N] }],
              grayscale: [{ grayscale: [c] }],
              'hue-rotate': [{ 'hue-rotate': [d] }],
              invert: [{ invert: [u] }],
              saturate: [{ saturate: [x] }],
              sepia: [{ sepia: [k] }],
              'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
              'backdrop-blur': [{ 'backdrop-blur': [o] }],
              'backdrop-brightness': [{ 'backdrop-brightness': [t] }],
              'backdrop-contrast': [{ 'backdrop-contrast': [a] }],
              'backdrop-grayscale': [{ 'backdrop-grayscale': [c] }],
              'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
              'backdrop-invert': [{ 'backdrop-invert': [u] }],
              'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
              'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
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
                    N,
                  ],
                },
              ],
              duration: [{ duration: F() }],
              ease: [{ ease: ['linear', 'in', 'out', 'in-out', N] }],
              delay: [{ delay: F() }],
              animate: [
                { animate: ['none', 'spin', 'ping', 'pulse', 'bounce', N] },
              ],
              transform: [{ transform: ['', 'gpu', 'none'] }],
              scale: [{ scale: [w] }],
              'scale-x': [{ 'scale-x': [w] }],
              'scale-y': [{ 'scale-y': [w] }],
              rotate: [{ rotate: [G, N] }],
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
                    N,
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
                    N,
                  ],
                },
              ],
              'caret-color': [{ caret: [e] }],
              'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
              resize: [{ resize: ['none', 'y', 'x', ''] }],
              'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
              'scroll-m': [{ 'scroll-m': $() }],
              'scroll-mx': [{ 'scroll-mx': $() }],
              'scroll-my': [{ 'scroll-my': $() }],
              'scroll-ms': [{ 'scroll-ms': $() }],
              'scroll-me': [{ 'scroll-me': $() }],
              'scroll-mt': [{ 'scroll-mt': $() }],
              'scroll-mr': [{ 'scroll-mr': $() }],
              'scroll-mb': [{ 'scroll-mb': $() }],
              'scroll-ml': [{ 'scroll-ml': $() }],
              'scroll-p': [{ 'scroll-p': $() }],
              'scroll-px': [{ 'scroll-px': $() }],
              'scroll-py': [{ 'scroll-py': $() }],
              'scroll-ps': [{ 'scroll-ps': $() }],
              'scroll-pe': [{ 'scroll-pe': $() }],
              'scroll-pt': [{ 'scroll-pt': $() }],
              'scroll-pr': [{ 'scroll-pr': $() }],
              'scroll-pb': [{ 'scroll-pb': $() }],
              'scroll-pl': [{ 'scroll-pl': $() }],
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
                  'will-change': ['auto', 'scroll', 'contents', 'transform', N],
                },
              ],
              fill: [{ fill: [e, 'none'] }],
              'stroke-w': [{ stroke: [E, M, S] }],
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
        const J = g(H);
        var Q = function () {
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
          U = function () {
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
          V = function () {
            return r().createElement('span', null, '✖');
          };
        const X = (0, e.forwardRef)(function (o, t) {
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
            v = o.offIcon,
            y = o.cancelIcon,
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
            M = function (e) {
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
              className: J(
                'inline-flex items-center gap-1.5 text-yellow-500',
                b
              ),
              title: m,
            },
            (function () {
              if (u) {
                var e = y || r().createElement(V, null);
                return r().createElement(
                  'div',
                  {
                    ref: t,
                    tabIndex: j,
                    onClick: E,
                    onKeyDown: M,
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
                  ? h || r().createElement(U, null)
                  : v || r().createElement(Q, null);
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