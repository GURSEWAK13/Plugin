(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{1186:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n(0),o=n(1),i=n.n(o),a=n(275),c=n.n(a),l=n(1653),u=n(539),s=n(39),p=n(38),f=n(16),d=n(28),h=n(1988),y=n.n(h);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _="1688",E="50",A="3376",R={width:"100%",height:280},B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(h,t);var e,n,o,a=k(h);function h(){var t;return g(this,h),(t=a.apply(this,arguments)).bannerWidget=null,t.handleActualImageLoad=function(e){return function(n){var r=e.tracking;if(r){for(var o=n;o&&o!==t.bannerWidget&&(!o.dataset||!o.dataset.clone);)o=o.parentElement;if(!o||!o.dataset||"true"!==o.dataset.clone){var i=r.impressionId,a=r.contentType,l=r.position;i&&n&&c.a.track(n,{en:"DCI",iid:i,ct:a,p:l})}}}},t.handleImgClick=function(t){return function(){var e=t.tracking,n=void 0===e?{}:e,r=n.impressionId,o=n.contentType,i=n.position;r&&f.a.trackEvent({en:"DCC",iid:r,ct:o,p:i},!0)}},t.renderBanner=function(e,n){var o=i()(e,["value","adCard","imageUrl"]);if(!o)return null;var a=m(Object(p.e)(o,{size:_,quality:E,height:"280"},{size:A,quality:E,height:"560"}),2),c=a[0],l=a[1],f=0===n?Object(p.c)(o,"844","50","140"):Object(p.c)(o,"50","50"),h=i()(e,["value","adCard","landingPagePath"]),v=i()(e,["value","adCard","thirdParty"]),b=i()(e,["value","adCard","title"])||"",g=i()(e,"tracking.otracker")||"";g&&(h=Object(s.b)(h,{otracker:g}));var w=i()(e,"tracking.impressionId");return r.createElement("div",{key:n,className:y.a.banner},r.createElement(d.a,{onClick:t.handleImgClick(e),className:y.a["banner-link"],to:h,target:v?"_blank":""},r.createElement(u.a,{preloadSrc:f,src:c,highResSrc:l,impressionId:w,containerStyle:R,initialBlur:0!==n,onImageLoad:t.handleActualImageLoad(e),alt:b})))},t.bannerWidgetRef=function(e){t.bannerWidget=e},t}return e=h,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.wid,n=t.widget,r=i()(n,["tracking","impressionId"]),o=i()(n,["tracking","position"]);r&&this.bannerWidget&&c.a.track(this.bannerWidget,{en:"DWI",iid:r,wk:e,p:o})}},{key:"render",value:function(){var t=this.props.widget,e=Array.isArray(t)?t:i()(t,"data.renderableComponents")||[];return e=void 0===window.document?[e[0]]:e,t?r.createElement(l.a,{innerRef:this.bannerWidgetRef,infinite:!0,autoplay:3e3,pauseOnHover:!0,className:y.a["banner-widget"]},e.map(this.renderBanner)):null}}])&&w(e.prototype,n),o&&w(e,o),h}(r.Component)},1653:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(0),o=n(5),i=n.n(o),a=n(217),c=n.n(a),l=n(24),u=n(1654),s=n.n(u);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(u,t);var e,n,o,a=h(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=a.call(this,t)).handleResize=function(){e.forceUpdate()},e.handleIntersection=function(t){var n=e.props.autoplay;"number"==typeof n&&n>0&&t.forEach((function(t){t.isIntersecting?e.startAutoplay():e.stopAutoplay()}))},e.startAutoplay=function(){var t=e.props.autoplay;"number"==typeof t&&t>0&&!e.timer&&(e.timer=window.setInterval(e.handleNext,t))},e.stopAutoplay=function(){e.timer&&(window.clearInterval(e.timer),e.timer=null)},e.handleMouseEnter=function(){e.stopAutoplay()},e.handleMouseLeave=function(){e.startAutoplay()},e.handleNext=function(){var t=e.activeSlide+1;(e.props.infinite||t!==e.count)&&(e.goToSlide(t),t===e.count?(t=0,e.jumpToSlide(t)):e.activeSlide=t)},e.handlePrev=function(){var t=e.activeSlide-1;(e.props.infinite||-1!==t)&&(e.goToSlide(t),-1===t?(t=e.count-1,e.jumpToSlide(t)):e.activeSlide=t)},e.goToSlide=function(t){e.stopAutoplay(),e.wrapper&&(e.wrapper.style.transform="translateX(".concat(e.getTranslate(t),"px)")),e.props.infinite||e.checkNavButtons(t)},e.checkNavButtons=function(t){t===e.count-1?e.rightBtn&&e.rightBtn.classList.add(s.a.disabled):e.rightBtn&&e.rightBtn.classList.remove(s.a.disabled),0===t?e.leftBtn&&e.leftBtn.classList.add(s.a.disabled):e.leftBtn&&e.leftBtn.classList.remove(s.a.disabled)},e.jumpToSlide=function(t){e.wrapper&&e.wrapper.addEventListener("transitionend",(function n(){window.requestAnimationFrame((function(){e.wrapper&&(e.wrapper.style.transition="none",e.wrapper.style.transform="translateX(".concat(e.getTranslate(t),"px)"),window.requestAnimationFrame((function(){e.wrapper&&(e.wrapper.style.removeProperty("transition"),e.wrapper.removeEventListener("transitionend",n))})))})),e.activeSlide=t}))},e.getContainerWidth=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.containerWidth&&!t.purgeCache)return e.containerWidth;if(e.root){var n=e.root.getBoundingClientRect(),r=n.width;return r}return e.width100Percentage},e.getTranslate=function(t){var n=e.getContainerWidth();return"string"==typeof n?0:(t+(e.props.infinite?1:0))*n*-1},e.getChildren=function(){var t=e.getContainerWidth(),n=i()(s.a.item,e.props.itemClass);if(r.Children.count(e.props.children)<2)return e.props.children;var o=r.Children.map(e.props.children,(function(e,o){return r.createElement("div",{key:"slide-".concat(o),className:n,style:{width:"string"==typeof t?"".concat(t):"".concat(t,"px")},"data-clone":"false"},e)}));if(o){e.props.infinite&&(o.unshift(r.cloneElement(o[e.count-1],{key:"preclone","data-clone":"true"})),o.push(r.cloneElement(o[1],{key:"postclone","data-clone":"true"})));var a="string"==typeof t?o.length*parseInt(t,10):o.length*t,c=e.getTranslate(e.activeSlide),l={width:"".concat(a,"string"==typeof t?"%":"px"),transform:"translateX(".concat(c,"px)")};return r.createElement("div",{ref:e.wrapperRef,style:l,className:s.a.wrapper},o)}},e.rootRef=function(t){e.root=t,"function"==typeof e.props.innerRef&&e.props.innerRef(t)},e.wrapperRef=function(t){return e.wrapper=t},e.leftBtnRef=function(t){return e.leftBtn=t},e.rightBtnRef=function(t){return e.rightBtn=t},e.count=r.Children.count(t.children),e.activeSlide="number"==typeof t.activeSlide&&t.activeSlide>-1?t.activeSlide:0,e.shouldSkipAnimation=!0,e.timer=null,e.width100Percentage="100%",e.handleNextThrottled=c()(e.handleNext,300),e.handlePrevThrottled=c()(e.handlePrev,300),e.handleResizeThrottled=c()(e.handleResize,300),e}return e=u,(n=[{key:"componentDidMount",value:function(){this.getContainerWidth({purgeCache:!0}),this.forceUpdate();var t=this.props.autoplay;this.props.infinite||this.checkNavButtons(this.activeSlide),t&&this.wrapper&&this.wrapper.addEventListener("transitionend",this.startAutoplay),window.addEventListener("resize",this.handleResizeThrottled),t&&this.root&&(this.ioObserver=new IntersectionObserver(this.handleIntersection),this.ioObserver.observe(this.root))}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.count=r.Children.count(t.children)}},{key:"componentDidUpdate",value:function(){var t=this;window.requestAnimationFrame((function(){t.shouldSkipAnimation&&(t.wrapper&&(t.wrapper.style.transition="none"),window.requestAnimationFrame((function(){t.wrapper&&t.wrapper.style.removeProperty("transition"),t.shouldSkipAnimation=!1})))}))}},{key:"componentWillUnmount",value:function(){this.stopAutoplay(),this.ioObserver&&this.root&&this.ioObserver.unobserve(this.root),window.removeEventListener("resize",this.handleResizeThrottled),this.wrapper&&this.wrapper.removeEventListener("transitionend",this.startAutoplay)}},{key:"render",value:function(){var t=this.props,e=t.pauseOnHover,n=t.children,o=t.className,a=t.arrowClass,c=t.arrowContainerClass,u=r.Children.count(n);return r.createElement("div",{onMouseEnter:e?this.handleMouseEnter:void 0,onMouseLeave:e?this.handleMouseLeave:void 0,ref:this.rootRef,className:i()(s.a["yet-another-carousel"],o)},this.getChildren(),u>1&&r.createElement("div",{ref:this.leftBtnRef,className:i()(s.a["left-btn"],c),onClick:this.handlePrevThrottled},r.createElement(l.k,{className:i()(s.a["chevron-icon-left"],a),pathClassName:s.a["chevron-icon"],width:14.6})),u>1&&r.createElement("div",{ref:this.rightBtnRef,className:i()(s.a["right-btn"],c),onClick:this.handleNextThrottled},r.createElement(l.k,{className:i()(s.a["chevron-icon-right"],a),pathClassName:s.a["chevron-icon"],width:14.6})))}}])&&f(e.prototype,n),o&&f(e,o),u}(r.Component)},1654:function(t,e,n){t.exports={"yet-another-carousel":"_3ChZRr",wrapper:"_3eARKq",item:"_1mIbUg","left-btn":"_24OVr-","right-btn":"_2t2dSp",disabled:"_3xzp_G","chevron-icon-right":"_2-wzdc","chevron-icon":"FXox6K"}},1988:function(t,e,n){t.exports={"banner-widget":"_1rs5Pv",banner:"_1ve3GO","banner-link":"_2a3TMW"}}}]);