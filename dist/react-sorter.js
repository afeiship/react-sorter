!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactSorter=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactSorter=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,i,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(6),d=n(p),v=r(5),y=n(v),b=r(2),h=n(b),m=r(3),j=n(m),_=r(4),g=(n(_),i=c=function(e){function t(e){a(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onClick=function(e){var t=r.props.onChange;r.calcValue(function(){t({target:{value:r.state.value}})})},r.state={value:e.value},r}return s(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t})}},{key:"calcValue",value:function(e){var t=this.state.value,r="none"===t||"desc"===t?"asc":"desc";this.setState({value:r},e)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=(e.value,o(e,["className","children","value"]));return d.default.createElement("span",l({},n,{"data-value":this.state.value,className:(0,h.default)("react-sorter",t),onClick:this._onClick}),r)}}]),t}(p.Component),c.propTypes={className:y.default.string,value:y.default.string,onChange:y.default.func},c.defaultProps={value:"none",onChange:j.default},i);t.default=g},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-sorter.js.map