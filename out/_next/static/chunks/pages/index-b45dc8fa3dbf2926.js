(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7913:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(2199),c=n(1587),i=n(7215);var f={};function l(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,g=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,_=i.useIntersection({rootMargin:"200px"}),E=r(_,2),L=E[0],w=E[1],M=a.default.useCallback((function(e){L(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,L]);a.default.useEffect((function(){var e=w&&n&&u.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=f[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,w,y,n,o]);var k={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,o,d,p,h,g,b,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&l(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof y?y:o&&o.locale,I=o&&o.isLocaleDomain&&u.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);k.href=I||u.addBasePath(u.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=s},7215:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,l=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),g=r(h,2),b=g[0],y=g[1],m=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),f||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),i.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:n}))}),[f,b,n,p]);return o.useEffect((function(){if(!u&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&y(t.current)}),[t]),[m,p]};var o=n(7294),a=n(8065),u="undefined"!==typeof IntersectionObserver;var c=new Map,i=[]},8265:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(1664),o=n(5893);function a(){return(0,o.jsxs)("div",{children:["Hello World."," ",(0,o.jsx)(r.default,{href:"/about",as:"/nextjs-github-pages-template/about",children:(0,o.jsx)("a",{children:"About"})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},1664:function(e,t,n){e.exports=n(7913)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);