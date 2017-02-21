(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("rsuite"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "rsuite"], factory);
	else if(typeof exports === 'object')
		exports["RsuiteDaterangepicker"] = factory(require("react"), require("react-dom"), require("rsuite"));
	else
		root["RsuiteDaterangepicker"] = factory(root["React"], root["ReactDOM"], root["rsuite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_49__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var className = __webpack_require__(30);
var style = __webpack_require__(17);
var query = __webpack_require__(5);
var events = __webpack_require__(32);
var transition = __webpack_require__(38);
var animation = __webpack_require__(29);
var getVendorPrefixedName = __webpack_require__(14);
var BrowserSupportCore = __webpack_require__(27);
var DOMMouseMoveTracker = __webpack_require__(28);

module.exports = _extends({}, className, style, query, events, animation, {
    transition: transition,
    getVendorPrefixedName: getVendorPrefixedName,
    BrowserSupportCore: BrowserSupportCore,
    DOMMouseMoveTracker: DOMMouseMoveTracker
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function hasClass(target, className) {
    if (target.classList) {
        return !!className && target.classList.contains(className);
    }
    return (" " + target.className + " ").indexOf(" " + className + " ") !== -1;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ReactDOM = __webpack_require__(1);

var _require = __webpack_require__(17);

var getStyle = _require.getStyle;


function ownerDocument(componentOrElement) {
    var node = ReactDOM.findDOMNode(componentOrElement);
    return node && node.ownerDocument || document;
}

function ownerWindow(componentOrElement) {
    var doc = ownerDocument(componentOrElement);
    return doc && doc.defaultView || doc.parentWindow;
}

function getWindow(node) {
    return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(container) || defaultContainer;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var contains = function () {
    var root = canUseDOM && document.documentElement;

    return root && root.contains ? function (context, node) {
        return context.contains(node);
    } : root && root.compareDocumentPosition ? function (context, node) {
        return context === node || !!(context.compareDocumentPosition(node) & 16);
    } : function (context, node) {
        if (node) {
            do {
                if (node === context) {
                    return true;
                }
            } while (node = node.parentNode);
        }
        return false;
    };
}();

function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
}

function scrollTop(node, val) {
    var win = getWindow(node);
    var top = win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
    var left = win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : 0;

    if (val === undefined) {
        return top;
    }

    win ? win.scrollTo(left, val) : node.scrollTop = val;
}

function scrollLeft(node, val) {

    var win = getWindow(node);
    var left = win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
    var top = win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : 0;

    if (val === undefined) {
        return left;
    }

    win ? win.scrollTo(val, top) : node.scrollLeft = val;
}

function getOffset(node) {
    var doc = ownerDocument(node);
    var win = getWindow(doc);
    var docElem = doc && doc.documentElement;
    var box = {
        top: 0,
        left: 0,
        height: 0,
        width: 0
    };

    if (!doc) {
        return;
    }

    // Make sure it's not a disconnected DOM node
    if (!contains(docElem, node)) {
        return box;
    }

    if (node.getBoundingClientRect !== undefined) {
        box = node.getBoundingClientRect();
    }

    if (box.width || box.height) {

        box = {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
            width: (box.width === null ? node.offsetWidth : box.width) || 0,
            height: (box.height === null ? node.offsetHeight : box.height) || 0
        };
    }

    return box;
}

function getOffsetParent(node) {
    var doc = ownerDocument(node),
        offsetParent = node && node.offsetParent;

    while (offsetParent && nodeName(node) !== 'html' && getStyle(offsetParent, 'position') === 'static') {
        offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || doc.documentElement;
}

function getPosition(node, _offsetParent) {
    var _parentOffset = {
        top: 0,
        left: 0
    },
        _offset;

    // Fixed elements are offset from window (_parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if (getStyle(node, 'position') === 'fixed') {
        _offset = node.getBoundingClientRect();
    } else {

        _offsetParent = _offsetParent || getOffsetParent(node);
        _offset = getOffset(node);

        if (nodeName(_offsetParent) !== 'html') {
            _parentOffset = getOffset(_offsetParent);
        }

        _parentOffset.top += parseInt(getStyle(_offsetParent, 'borderTopWidth'), 10) - scrollTop(_offsetParent) || 0;
        _parentOffset.left += parseInt(getStyle(_offsetParent, 'borderLeftWidth'), 10) - scrollLeft(_offsetParent) || 0;
    }

    // Subtract parent offsets and node margins
    return _extends({}, _offset, {
        top: _offset.top - _parentOffset.top - (parseInt(getStyle(node, 'marginTop'), 10) || 0),
        left: _offset.left - _parentOffset.left - (parseInt(getStyle(node, 'marginLeft'), 10) || 0)
    });
}

function isOverflowing(container) {
    var win = getWindow(container);
    var isBody = container && container.tagName.toLowerCase() === 'body';

    function bodyIsOverflowing(node) {
        var doc = ownerDocument(node);
        var win = getWindow(doc);
        var fullWidth = win.innerWidth;

        // Support: ie8, no innerWidth
        if (!fullWidth) {
            var documentElementRect = doc.documentElement.getBoundingClientRect();
            fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        return doc.body.clientWidth < fullWidth;
    }

    return win || isBody ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

function activeElement() {
    var doc = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

    return doc.activeElement;
}

function getScrollbarSize(recalc) {
    var size = void 0;
    if (!size || recalc) {
        if (canUseDOM) {
            var scrollDiv = document.createElement('div');

            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            scrollDiv.style.width = '50px';
            scrollDiv.style.height = '50px';
            scrollDiv.style.overflow = 'scroll';

            document.body.appendChild(scrollDiv);
            size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
    }

    return size;
}

function getHeight(node, client) {
    var win = getWindow(node);
    return win ? win.innerHeight : client ? node.clientHeight : getOffset(node).height;
}

function getWidth(node, client) {
    var win = getWindow(node);
    return win ? win.innerWidth : client ? node.clientWidth : getOffset(node).width;
}

module.exports = {
    ownerDocument: ownerDocument,
    ownerWindow: ownerWindow,
    getWindow: getWindow,
    getContainer: getContainer,
    canUseDOM: canUseDOM,
    contains: contains,
    nodeName: nodeName,
    scrollTop: scrollTop,
    scrollLeft: scrollLeft,
    getOffset: getOffset,
    getOffsetParent: getOffsetParent,
    getPosition: getPosition,
    isOverflowing: isOverflowing,
    activeElement: activeElement,
    getScrollbarSize: getScrollbarSize,
    getHeight: getHeight,
    getWidth: getWidth
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @example
 * underscoreName('getList');
 * => get_list
 */
function underscore(string) {
    return string.replace(/([A-Z])/g, '_$1').toLowerCase();
}

/**
 * @example
 * camelize('font-size');
 * => fontSize
 */
function camelize(string) {
    return string.replace(/\-(\w)/g, function (char) {
        return char.slice(1).toUpperCase();
    });
}

/**
 * @example
 * camelize('fontSize');
 * => font-size
 */
function hyphenate(string) {
    return string.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * @example
 * merge('{0} - A front-end {1} ','Suite','framework');
 * => Suite - A front-end framework
 */
function merge(pattern) {
    var pointer = 0,
        i;
    for (i = 1; i < arguments.length; i++) {
        pattern = pattern.split('{' + pointer + '}').join(arguments[i]);
        pointer++;
    }
    return pattern;
}

module.exports = {
    underscore: underscore,
    camelize: camelize,
    hyphenate: hyphenate,
    merge: merge
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var cancelAnimationFrame = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;

module.exports = cancelAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

module.exports = nativeRequestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var nativeRequestAnimationFrame = __webpack_require__(9);
var emptyFunction = function emptyFunction() {};
var lastTime = 0;

/**
 * Here is the native and polyfill version of requestAnimationFrame.
 * Please don't use it directly and use requestAnimationFrame module instead.
 */
var requestAnimationFrame = nativeRequestAnimationFrame && nativeRequestAnimationFrame.bind(global) || function (callback) {
    var currTime = Date.now();
    var timeDelay = Math.max(0, 16 - (currTime - lastTime));
    lastTime = currTime + timeDelay;
    return global.setTimeout(function () {
        callback(Date.now());
    }, timeDelay);
};

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(emptyFunction);

module.exports = requestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasClass = __webpack_require__(4);

module.exports = function addClass(target, className) {
    if (className) {
        if (target.classList) {
            target.classList.add(className);
        } else if (!hasClass(className, target)) {
            target.className = target.className + ' ' + className;
        }
    }
    return target;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasClass = __webpack_require__(4);

module.exports = function removeClass(target, className) {
    if (className) {
        if (target.classList) {
            target.classList.remove(className);
        } else {
            target.className = target.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
            .replace(/^\s*|\s*$/g, ''); // trim the ends
        }
    }
    return target;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
var unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
var eventPrefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `target` event `eventName`'s callback `listener`.
 * @param  {Element} target
 * @param  {String} eventName
 * @param  {Function} listener
 * @param  {Boolean} capture
 * @return {Object}
 */
module.exports = function on(target, eventName, listener) {
    var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

    target[bind](eventPrefix + eventName, listener, capture);
    return {
        off: function off() {
            target[unbind](eventPrefix + eventName, listener, capture);
        }
    };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _query = __webpack_require__(5);

var _stringFormatter = __webpack_require__(6);

var memoized = {};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
var testStyle = _query.canUseDOM ? document.createElement('div').style : {};

function getWithPrefix(name) {
    for (var i = 0; i < prefixes.length; i++) {
        var prefixedName = prefixes[i] + name;
        if (prefixedName in testStyle) {
            return prefixedName;
        }
    }
    return null;
}

/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */
function getVendorPrefixedName(property) {
    var name = (0, _stringFormatter.camelize)(property);
    if (memoized[name] === undefined) {
        var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        if (prefixRegex.test(capitalizedName)) {
            throw new Error('getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property);
        }
        memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
    }
    return memoized[name];
}

module.exports = getVendorPrefixedName;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getComputedStyle(node) {
    if (!node) {
        throw new TypeError('No Element passed to `getComputedStyle()`');
    }

    var doc = node.ownerDocument;

    if ('defaultView' in doc) {
        if (doc.defaultView.opener) {
            return node.ownerDocument.defaultView.getComputedStyle(node, null);
        }
        return window.getComputedStyle(node, null);
    }
    return {
        getPropertyValue: function getPropertyValue(prop) {

            var style = node.style;

            prop = camelize(prop);

            if (prop === 'float') {
                prop = 'styleFloat';
            }

            var current = node.currentStyle[prop] || null;

            if (current === null && style && style[prop]) {
                current = style[prop];
            }

            if (rnumnonpx.test(current) && !rposition.test(prop)) {
                // Remember the original values
                var left = style.left;
                var runStyle = node.runtimeStyle;
                var rsLeft = runStyle && runStyle.left;

                // Put in the new values to get a computed value out
                if (rsLeft) {
                    runStyle.left = node.currentStyle.left;
                }

                style.left = prop === 'fontSize' ? '1em' : current;
                current = style.pixelLeft + 'px';

                // Revert the changed values
                style.left = left;
                if (rsLeft) {
                    runStyle.left = rsLeft;
                }
            }

            return current;
        }
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6);

var hyphenate = _require.hyphenate;

var msPattern = /^ms-/;

module.exports = function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    getStyle: __webpack_require__(37),
    removeStyle: __webpack_require__(18),
    addStyle: __webpack_require__(35),
    getComputedStyle: __webpack_require__(15)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeStyle(node, key) {
    return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createChainableTypeChecker;
/**
 * Create chain-able isRequired validator
 *
 * Largely copied directly from:
 * https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
 */
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName) {
        componentName = componentName || '<<anonymous>>';
        if (props[propName] === null || typeof props[propName] === 'undefined') {
            if (isRequired) {
                return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
            }
        } else {
            return validate(props, propName, componentName);
        }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(19);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

var _stringFormatter = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether a prop provides a type of element.
 *
 * The type of element can be provided in two forms:
 * - tag name (string)
 * - a return value of React.createClass(...)
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */

function validate(props, propName, componentName) {

    if (typeof props[propName] !== 'function') {

        var errMsg = void 0;

        if (_react2.default.isValidElement(props[propName])) {
            errMsg = 'Invalid prop `{0}` of value `{1}` supplied to `{2}`. Expected an Element `type` , not an actual Element';
        }

        if (typeof props[propName] !== 'string') {
            errMsg = 'Invalid prop `{0}` of value `{1}` supplied to `{2}`. Expected an Element `type` , such as a tag name or return value of React.createClass(...)';
        }

        if (errMsg) {
            return new Error((0, _stringFormatter.merge)(errMsg, propName, props[propName], componentName));
        }
    }
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createChainableTypeChecker = __webpack_require__(19);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

var _stringFormatter = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether a prop provides a DOM element
 *
 * The element can be provided in two forms:
 * - Directly passed
 * - Or passed an object that has a `render` method
 *
 * @param props
 * @param propName
 * @param componentName
 * @returns {Error|undefined}
 */

function validate(props, propName, componentName) {
    if (_typeof(props[propName]) !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {

        return new Error((0, _stringFormatter.merge)('Invalid prop `{0}` of value `{1}` supplied to `{2}` , expected a DOM element or an object that has a `render` method', propName, props[propName], componentName));
    }
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.underscore = underscore;
exports.camelize = camelize;
exports.hyphenate = hyphenate;
exports.merge = merge;
/**
 * @example
 * underscoreName('getList');
 * => get_list
 */
function underscore(string) {
    return string.replace(/([A-Z])/g, '_$1').toLowerCase();
}

/**
 * @example
 * camelize('font-size');
 * => fontSize
 */
function camelize(string) {
    return string.replace(/\-(\w)/g, function (char) {
        return char.slice(1).toUpperCase();
    });
}

/**
 * @example
 * camelize('fontSize');
 * => font-size
 */
function hyphenate(string) {
    return string.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * @example
 * merge('{0} - A front-end {1} ','Suite','framework');
 * => Suite - A front-end framework
 */
function merge(pattern) {
    var pointer = 0,
        i;
    for (i = 1; i < arguments.length; i++) {
        pattern = pattern.split('{' + pointer + '}').join(arguments[i]);
        pointer++;
    }
    return pattern;
}

exports.default = {
    merge: merge,
    underscore: underscore,
    camelize: camelize
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Overlay = __webpack_require__(41);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Calendar = __webpack_require__(24);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _moment = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"moment\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _rsuite = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SLIDING_LEFT = 'SLIDING_L';
var SLIDING_RIGHT = 'SLIDING_R';
var EDITING = 'EDITING';
var WAITING = 'WAITING';

var CalendarState = {
    SLIDING_LEFT: SLIDING_LEFT,
    SLIDING_RIGHT: SLIDING_RIGHT,
    EDITING: EDITING,
    WAITING: WAITING
};

var ListButton = function ListButton(_ref) {
    var className = _ref.className,
        label = _ref.label,
        onClick = _ref.onClick,
        disabled = _ref.disabled,
        rest = _objectWithoutProperties(_ref, ['className', 'label', 'onClick', 'disabled']);

    var btnClass = (0, _classnames2.default)({
        'btn': true,
        'disabled': disabled
    }, className);
    return _react2.default.createElement(
        _rsuite.Button,
        _extends({
            className: btnClass,
            title: label,
            onClick: !disabled && onClick
        }, rest),
        label
    );
};

ListButton.propTypes = {
    className: _react.PropTypes.string,
    label: _react.PropTypes.any,
    onClick: _react.PropTypes.func,
    disabled: _react.PropTypes.bool
};

var SingleDatePicker = _react2.default.createClass({
    displayName: 'SingleDatePicker',

    propTypes: {
        date: _react.PropTypes.instanceOf(Date).isRequired,
        minDate: _react.PropTypes.instanceOf(Date),
        maxDate: _react.PropTypes.instanceOf(Date),
        onSelect: _react.PropTypes.func,
        ranges: _react.PropTypes.array
    },

    getInitialState: function getInitialState() {
        var date = this.props.date;

        var pageDate = (0, _moment2.default)(date).startOf('month').toDate();
        return {
            calendarState: CalendarState.WAITING,
            pageDate: pageDate
        };
    },
    componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
        var _this = this;

        var calendarState = this.state.calendarState;

        if (calendarState === CalendarState.SLIDING_LEFT || calendarState === CalendarState.SLIDING_RIGHT) {
            setTimeout(function () {
                return _this.setCalendarState(CalendarState.WAITING);
            }, 0);
        }
    },
    setCalendarState: function setCalendarState(calendarState) {
        this.setState({ calendarState: calendarState });
    },
    setPageDate: function setPageDate(pageDate) {
        this.setState({ pageDate: (0, _moment2.default)(pageDate).startOf('month').toDate() });
        this.setCalendarState(CalendarState.WAITING);
    },
    goNextMonth: function goNextMonth() {
        var pageDate = this.state.pageDate;

        this.setPageDate((0, _moment2.default)(pageDate).add(1, 'M').toDate());
        this.setCalendarState(CalendarState.SLIDING_LEFT);
    },
    goPrevMonth: function goPrevMonth() {
        var pageDate = this.state.pageDate;

        this.setPageDate((0, _moment2.default)(pageDate).subtract(1, 'M').toDate());
        this.setCalendarState(CalendarState.SLIDING_RIGHT);
    },
    toggleSwitchPanel: function toggleSwitchPanel() {
        var calendarState = this.state.calendarState;

        if (calendarState === CalendarState.WAITING) {
            this.setCalendarState(CalendarState.EDITING);
        }

        if (calendarState === CalendarState.EDITING) {
            this.setCalendarState(CalendarState.WAITING);
        }
    },
    render: function render() {
        var _this2 = this;

        var _props = this.props,
            date = _props.date,
            minDate = _props.minDate,
            maxDate = _props.maxDate,
            onSelect = _props.onSelect;
        var _state = this.state,
            calendarState = _state.calendarState,
            pageDate = _state.pageDate;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Calendar2.default, {
                calendarState: calendarState,
                selectedDate: date,
                pageDate: pageDate,
                minDate: minDate,
                maxDate: maxDate,
                onMoveForword: this.goNextMonth,
                onMoveBackward: this.goPrevMonth,
                onSelect: onSelect,
                onClickTitle: this.toggleSwitchPanel,
                onChangePageDate: this.setPageDate,
                refs: function refs(ref) {
                    _this2.calendar = ref;
                }
            })
        );
    }
});

exports.default = _react2.default.createClass({
    displayName: 'src',

    propTypes: {
        defaultStartDate: _react.PropTypes.instanceOf(Date),
        defaultEndDate: _react.PropTypes.instanceOf(Date),
        minDate: _react.PropTypes.instanceOf(Date),
        maxDate: _react.PropTypes.instanceOf(Date),
        attachTo: _react.PropTypes.element,
        ranges: _react.PropTypes.array,
        onChange: _react.PropTypes.func
    },

    getDefaultProps: function getDefaultProps() {
        var ranges = [{ label: '今天', range: [(0, _moment2.default)(), (0, _moment2.default)()] }, { label: '昨天', range: [(0, _moment2.default)().subtract(1, 'd'), (0, _moment2.default)()] }, { label: '本周', range: [(0, _moment2.default)().startOf('week'), (0, _moment2.default)()] }, { label: '本月', range: [(0, _moment2.default)().startOf('month'), (0, _moment2.default)()] }];
        function noop() {}
        return {
            ranges: ranges,
            onChange: noop
        };
    },
    getInitialState: function getInitialState() {
        var _props2 = this.props,
            defaultStartDate = _props2.defaultStartDate,
            defaultEndDate = _props2.defaultEndDate;

        var startDate = defaultStartDate || new Date();
        var endDate = defaultEndDate || new Date((0, _moment2.default)(startDate).add(1, 'days'));
        return {
            startDate: startDate,
            shownStartDate: startDate,
            endDate: endDate,
            shownEndDate: endDate,
            show: false
        };
    },
    reset: function reset() {
        var _props3 = this.props,
            defaultStartDate = _props3.defaultStartDate,
            defaultEndDate = _props3.defaultEndDate;

        if (defaultStartDate) this.setState({ shownStartDate: defaultStartDate });
        if (defaultEndDate) this.setState({ shownEndDate: defaultEndDate });
    },
    show: function show() {
        this.setState({ show: true });
    },
    hide: function hide() {
        this.setState({ show: false });
    },
    toggle: function toggle() {
        var show = this.state.show;

        if (show) this.hide();else this.show();
    },
    apply: function apply() {
        var _state2 = this.state,
            shownStartDate = _state2.shownStartDate,
            shownEndDate = _state2.shownEndDate;

        this.setState({ startDate: shownStartDate, endDate: shownEndDate });
        this.props.onChange(shownStartDate, shownEndDate);
        this.hide();
    },
    discardChanges: function discardChanges() {
        var _state3 = this.state,
            startDate = _state3.startDate,
            endDate = _state3.endDate;

        this.setState({
            shownStartDate: startDate,
            shownEndDate: endDate
        });
        this.hide();
    },
    getContainerEl: function getContainerEl() {
        var attachTo = this.props.attachTo;

        if (attachTo) return attachTo;
        return _reactDom2.default.findDOMNode(this.container);
    },
    getTargetEl: function getTargetEl() {
        return _reactDom2.default.findDOMNode(this.target);
    },
    handleStartDateChange: function handleStartDateChange(shownStartDate) {
        this.setState({ shownStartDate: shownStartDate });
    },
    handleEndDateChange: function handleEndDateChange(shownEndDate) {
        this.setState({ shownEndDate: shownEndDate });
    },
    handleRangesClick: function handleRangesClick(range) {
        if (!range) return;

        if (range.length !== 2) return;

        var startMoment = range[0].clone();
        var endMoment = range[1].clone();

        this.setState({
            shownStartDate: startMoment.toDate(),
            shownEndDate: endMoment.toDate()
        });

        var startPageDate = startMoment.startOf('month').toDate();
        var endPageDate = endMoment.startOf('month').toDate();
        this.startDatePicker.setPageDate(startPageDate);
        this.endDatePicker.setPageDate(endPageDate);
    },
    renderStartDatePicker: function renderStartDatePicker() {
        var _this3 = this;

        var _props4 = this.props,
            minDate = _props4.minDate,
            maxDate = _props4.maxDate;
        var shownStartDate = this.state.shownStartDate;

        return _react2.default.createElement(
            'div',
            { className: 'DateRangePicker-start' },
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-start-title' },
                _react2.default.createElement(
                    'p',
                    { className: '' },
                    '\u5F00\u59CB\u65F6\u95F4'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-start-container' },
                _react2.default.createElement(SingleDatePicker, {
                    minDate: minDate,
                    maxDate: maxDate,
                    date: shownStartDate,
                    onSelect: this.handleStartDateChange,
                    ref: function ref(_ref2) {
                        _this3.startDatePicker = _ref2;
                    }
                })
            )
        );
    },
    renderEndDatePicker: function renderEndDatePicker() {
        var _this4 = this;

        var _props5 = this.props,
            minDate = _props5.minDate,
            maxDate = _props5.maxDate;
        var shownEndDate = this.state.shownEndDate;

        return _react2.default.createElement(
            'div',
            { className: 'DateRangePicker-end' },
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-end-title' },
                _react2.default.createElement(
                    'p',
                    { className: '' },
                    '\u7ED3\u675F\u65F6\u95F4'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-end-container' },
                _react2.default.createElement(SingleDatePicker, {
                    minDate: minDate,
                    maxDate: maxDate,
                    date: shownEndDate,
                    onSelect: this.handleEndDateChange,
                    ref: function ref(_ref3) {
                        _this4.endDatePicker = _ref3;
                    }
                })
            )
        );
    },
    renderRanges: function renderRanges() {
        var ranges = this.props.ranges;

        return _react2.default.createElement(
            'div',
            { className: 'DateRangePicker-ranges' },
            _react2.default.createElement(
                _rsuite.Dropdown,
                { title: '预设', shape: 'primary', onSelect: this.handleRangesClick },
                ranges.map(function (i) {
                    return _react2.default.createElement(
                        _rsuite.Dropdown.Item,
                        {
                            key: i.label,
                            label: i.label,
                            eventKey: i.range
                        },
                        i.label
                    );
                })
            )
        );
    },
    renderActions: function renderActions() {
        var _props6 = this.props,
            defaultStartDate = _props6.defaultStartDate,
            defaultEndDate = _props6.defaultEndDate;
        var _state4 = this.state,
            shownStartDate = _state4.shownStartDate,
            shownEndDate = _state4.shownEndDate;

        var shouldRenderResetButton = defaultStartDate || defaultEndDate;
        var isValidRange = shownStartDate <= shownEndDate;
        return _react2.default.createElement(
            'div',
            { className: 'DateRangePicker-actions' },
            shouldRenderResetButton && _react2.default.createElement(ListButton, {
                shape: 'default',
                label: '\u91CD\u7F6E',
                onClick: this.reset
            }),
            _react2.default.createElement(ListButton, {
                shape: 'primary',
                className: 'ml10',
                disabled: !isValidRange,
                onClick: this.apply,
                label: '\u786E\u5B9A'
            })
        );
    },
    renderDatePicker: function renderDatePicker() {
        var _this5 = this;

        return _react2.default.createElement(
            'div',
            { className: 'DateRangePicker noselect', ref: function ref(_ref4) {
                    _this5.target = _ref4;
                } },
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-controlPanel' },
                this.renderRanges()
            ),
            _react2.default.createElement(
                'div',
                { className: 'DateRangePicker-container' },
                this.renderStartDatePicker(),
                this.renderEndDatePicker(),
                this.renderActions()
            ),
            _react2.default.createElement('div', { style: { clear: 'both' } })
        );
    },
    renderContainer: function renderContainer() {
        var _this6 = this;

        var attachTo = this.props.attachTo;
        var _state5 = this.state,
            startDate = _state5.startDate,
            endDate = _state5.endDate;

        if (attachTo) return null;
        var format = 'YYYY/MM/DD';
        return _react2.default.createElement(
            'div',
            { ref: function ref(_ref5) {
                    _this6.container = _ref5;
                } },
            _react2.default.createElement(
                'div',
                { className: 'DateRangeContainer', onClick: this.toggle },
                (0, _moment2.default)(startDate).format(format),
                _react2.default.createElement(
                    'span',
                    { className: 'text-muted' },
                    ' - '
                ),
                (0, _moment2.default)(endDate).format(format)
            )
        );
    },
    render: function render() {
        var show = this.state.show;

        return _react2.default.createElement(
            'div',
            { className: 'DateRangeWrapper' },
            this.renderContainer(),
            _react2.default.createElement(
                _Overlay2.default,
                {
                    show: show,
                    rootClose: true,
                    onHide: this.discardChanges,
                    target: this.getContainerEl,
                    containerPadding: 40,
                    placement: 'top'
                },
                this.renderDatePicker()
            )
        );
    }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _MonthHeader = __webpack_require__(25);

var _MonthHeader2 = _interopRequireDefault(_MonthHeader);

var _WeekHeader = __webpack_require__(26);

var _WeekHeader2 = _interopRequireDefault(_WeekHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Week = function Week(_ref) {
    var weekendDate = _ref.weekendDate,
        _ref$selected = _ref.selected,
        selected = _ref$selected === undefined ? new Date() : _ref$selected,
        onClick = _ref.onClick,
        dateFilter = _ref.dateFilter;
    return _react2.default.createElement(
        'div',
        { className: 'week' },
        function () {
            var days = [];
            for (var i = 0; i < 7; i++) {
                var thisDate = new Date(weekendDate);
                thisDate.setDate(weekendDate.getDate() + i);
                var className = 'week-day';
                className += dateFilter(thisDate) ? '' : ' disable';
                className += thisDate.toDateString() === new Date().toDateString() ? ' is-today' : '';
                className += thisDate.toDateString() === selected.toDateString() ? ' selected' : '';
                days.push(_react2.default.createElement(
                    'div',
                    {
                        className: className,
                        onClick: onClick && dateFilter(thisDate) && onClick.bind(null, thisDate),
                        key: i
                    },
                    thisDate.getDate()
                ));
            }
            return days;
        }()
    );
};

Week.propTypes = {
    weekendDate: _react.PropTypes.instanceOf(Date),
    selected: _react.PropTypes.instanceOf(Date),
    onClick: _react.PropTypes.func,
    dateFilter: _react.PropTypes.func
};

var Weeks = function Weeks(_ref2) {
    var weeks = _ref2.weeks,
        selected = _ref2.selected,
        onClick = _ref2.onClick,
        dateFilter = _ref2.dateFilter;
    return _react2.default.createElement(
        'div',
        { className: 'weeks' },
        weeks.map(function (week, i) {
            return _react2.default.createElement(Week, {
                key: i,
                weekendDate: week,
                selected: selected,
                onClick: onClick,
                dateFilter: dateFilter
            });
        })
    );
};

Weeks.propTypes = {
    weeks: _react.PropTypes.array,
    selected: _react.PropTypes.instanceOf(Date),
    onClick: _react.PropTypes.func,
    dateFilter: _react.PropTypes.func
};

var MonthView = function MonthView(_ref3) {
    var date = _ref3.date,
        selected = _ref3.selected,
        onClick = _ref3.onClick,
        _dateFilter = _ref3.dateFilter;

    /**
     * Get all weeks of this month
     * @params date
     * @return date[]
     */
    function getMonthView(date) {
        var thisMonth = date.getMonth();
        var firstDayOfMonth = date.getDay();
        var distance = 0 - firstDayOfMonth;
        var firstWeekendDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + distance);
        var weeks = [firstWeekendDate];
        var nextWeekendDate = new Date(firstWeekendDate);
        nextWeekendDate.setDate(nextWeekendDate.getDate() + 7);
        while (thisMonth === nextWeekendDate.getMonth()) {
            weeks.push(nextWeekendDate);
            nextWeekendDate = new Date(nextWeekendDate);
            nextWeekendDate.setDate(nextWeekendDate.getDate() + 7);
        }
        return weeks;
    }

    // is two date in the same month
    function inSameMonth(dateA, dateB) {
        return dateA.getMonth() === dateB.getMonth();
    }

    var thisMonthDate = new Date(date);
    var prevMonthDate = new Date(thisMonthDate);
    prevMonthDate.setMonth(thisMonthDate.getMonth() - 1);
    var nextMonthDate = new Date(thisMonthDate);
    nextMonthDate.setMonth(thisMonthDate.getMonth() + 1);
    return _react2.default.createElement(
        'div',
        { className: 'monthView' },
        _react2.default.createElement(
            'div',
            { className: 'monthView-weeksWrapper' },
            _react2.default.createElement(Weeks, {
                weeks: getMonthView(prevMonthDate),
                selected: selected,
                dateFilter: function dateFilter(date) {
                    return inSameMonth(date, prevMonthDate) && _dateFilter(date);
                }
            }),
            _react2.default.createElement(Weeks, {
                weeks: getMonthView(thisMonthDate),
                selected: selected,
                onClick: onClick,
                dateFilter: function dateFilter(date) {
                    return inSameMonth(date, thisMonthDate) && _dateFilter(date);
                }
            }),
            _react2.default.createElement(Weeks, {
                weeks: getMonthView(nextMonthDate),
                selected: selected,
                dateFilter: function dateFilter(date) {
                    return inSameMonth(date, nextMonthDate) && _dateFilter(date);
                }
            })
        )
    );
};

MonthView.propTypes = {
    date: _react.PropTypes.instanceOf(Date),
    selected: _react.PropTypes.instanceOf(Date),
    onClick: _react.PropTypes.func,
    dateFilter: _react.PropTypes.func
};

var EditPanel = _react2.default.createClass({
    displayName: 'EditPanel',

    propTypes: {
        date: _react.PropTypes.instanceOf(Date),
        onClick: _react.PropTypes.func
    },

    scrollTo: function scrollTo(date) {
        var year = date.getFullYear();
        var topSpacing = 10;
        var blockHeight = 64;
        var startYear = 2010;
        var el = (0, _reactDom.findDOMNode)(this.refs.content);
        var scrollTop = (year - startYear) * blockHeight + topSpacing;
        el.scrollTop = scrollTop;
    },
    componentDidMount: function componentDidMount() {
        var date = this.props.date;

        date && this.scrollTo(date);
    },
    render: function render() {
        var _props = this.props,
            date = _props.date,
            onClick = _props.onClick;

        return _react2.default.createElement(
            'div',
            { className: 'editPanel' },
            _react2.default.createElement(
                'div',
                { className: 'editPanel-content', ref: 'content' },
                _react2.default.createElement(
                    'div',
                    { className: 'editPanel-scroll' },
                    function () {
                        var ret = [];
                        var selectedMonth = date.getMonth();
                        var selectedYear = date.getFullYear();
                        var startYear = 2010;
                        var range = 20;

                        var _loop = function _loop(i) {
                            var curYear = startYear + i;
                            var isSelectedYear = curYear === selectedYear;
                            var yearBlock = _react2.default.createElement(
                                'div',
                                { className: 'editPanel-yearBlock', key: i },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'editPanel-yearTitle' + (isSelectedYear ? ' selected' : '') },
                                    curYear
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'editPanel-monthBlock' },
                                    [].concat(_toConsumableArray(Array(12).keys())).map(function (dateMonth) {
                                        return _react2.default.createElement(
                                            'div',
                                            {
                                                className: 'editPanel-monthCell' + (isSelectedYear && dateMonth === selectedMonth ? ' selected' : ''),
                                                onClick: onClick.bind(null, new Date(curYear, dateMonth)),
                                                key: dateMonth
                                            },
                                            dateMonth + 1
                                        );
                                    })
                                )
                            );
                            ret.push(yearBlock);
                        };

                        for (var i = 0; i < range; i++) {
                            _loop(i);
                        }
                        return ret;
                    }()
                )
            )
        );
    }
});

var Calendar = _react2.default.createClass({
    displayName: 'Calendar',

    propTypes: {
        calendarState: _react.PropTypes.string,
        selectedDate: _react.PropTypes.instanceOf(Date),
        pageDate: _react.PropTypes.instanceOf(Date),
        minDate: _react.PropTypes.instanceOf(Date),
        maxDate: _react.PropTypes.instanceOf(Date),
        onMoveForword: _react.PropTypes.func,
        onMoveBackward: _react.PropTypes.func,
        onSelect: _react.PropTypes.func,
        onClickTitle: _react.PropTypes.func,
        onChangePageDate: _react.PropTypes.func,
        dateFilter: _react.PropTypes.func
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        var props = this.props;
        return nextProps.calendarState !== props.calendarState || this.isDayChanged(nextProps.selectedDate, props.selectedDate) || this.isDayChanged(nextProps.pageDate, props.pageDate) || this.isDayChanged(nextProps.minDate, props.minDate) || this.isDayChanged(nextProps.maxDate, props.maxDate);
    },
    isDayChanged: function isDayChanged(dateA, dateB) {
        if (dateA && dateB) {
            return dateA.toDateString() !== dateB.toDateString();
        } else if (!dateA && !dateB) {
            return false;
        } else {
            return true;
        }
    },
    onMoveForword: function onMoveForword() {
        var _props2 = this.props,
            onMoveForword = _props2.onMoveForword,
            pageDate = _props2.pageDate;

        var nextPageDate = new Date(pageDate.getFullYear(), pageDate.getMonth() + 1);
        onMoveForword && onMoveForword(nextPageDate);
    },
    onMoveBackward: function onMoveBackward() {
        var _props3 = this.props,
            onMoveBackward = _props3.onMoveBackward,
            pageDate = _props3.pageDate;

        var nextPageDate = new Date(pageDate.getFullYear(), pageDate.getMonth() - 1);
        onMoveBackward && onMoveBackward(nextPageDate);
    },
    render: function render() {
        var _props4 = this.props,
            calendarState = _props4.calendarState,
            selectedDate = _props4.selectedDate,
            pageDate = _props4.pageDate,
            onSelect = _props4.onSelect,
            onClickTitle = _props4.onClickTitle,
            onChangePageDate = _props4.onChangePageDate;

        var stateClassname = {
            'SLIDING_L': ' sliding-left',
            'SLIDING_R': ' sliding-right',
            'EDITING': ' is-editing'
        }[calendarState] || '';

        var isEditingPageDate = calendarState === 'EDITING';
        return _react2.default.createElement(
            'div',
            { className: 'calendar' + stateClassname },
            _react2.default.createElement(_MonthHeader2.default, {
                date: pageDate,
                onMoveForword: this.onMoveForword,
                onMoveBackward: this.onMoveBackward,
                onClickTitle: onClickTitle
            }),
            isEditingPageDate && _react2.default.createElement(EditPanel, {
                date: pageDate,
                onClick: onChangePageDate
            }),
            _react2.default.createElement(_WeekHeader2.default, null),
            _react2.default.createElement(MonthView, {
                date: pageDate,
                selected: selectedDate,
                onClick: onSelect,
                dateFilter: this.dateFilter
            })
        );
    },
    dateFilter: function dateFilter(date) {
        var _props5 = this.props,
            minDate = _props5.minDate,
            maxDate = _props5.maxDate,
            dateFilter = _props5.dateFilter;

        if (minDate && date.getTime() < minDate.getTime()) return false;
        if (maxDate && date.getTime() > maxDate.getTime()) return false;
        if (dateFilter && !dateFilter(date)) return false;
        return true;
    }
});

exports.default = Calendar;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthHeader = function MonthHeader(_ref) {
    var date = _ref.date,
        onMoveForword = _ref.onMoveForword,
        onMoveBackward = _ref.onMoveBackward,
        onClickTitle = _ref.onClickTitle;
    return _react2.default.createElement(
        "div",
        { className: "monthHeader" },
        _react2.default.createElement("i", { className: "monthHeader-backward fa fa-chevron-left",
            onClick: onMoveBackward
        }),
        _react2.default.createElement(
            "span",
            { className: "monthHeader-title", onClick: onClickTitle },
            date.getFullYear() + ' - ' + (date.getMonth() + 1)
        ),
        _react2.default.createElement("i", { className: "monthHeader-forward fa fa-chevron-right",
            onClick: onMoveForword
        })
    );
};

MonthHeader.propTypes = {
    date: _react.PropTypes.instanceOf(Date),
    onMoveForword: _react.PropTypes.func,
    onMoveBackward: _react.PropTypes.func,
    onClickTitle: _react.PropTypes.func
};

exports.default = MonthHeader;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeekHeader = function WeekHeader() {
    return _react2.default.createElement(
        "div",
        { className: "weekHeader" },
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Sun"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Mon"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Tue"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Wed"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Thu"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Fri"
        ),
        _react2.default.createElement(
            "span",
            { className: "weekHeader-day" },
            "Sat"
        )
    );
};

exports.default = WeekHeader;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getVendorPrefixedName = __webpack_require__(14);

var _getVendorPrefixedName2 = _interopRequireDefault(_getVendorPrefixedName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserSupportCore = {
    /**
     * @return {bool} True if browser supports css animations.
     */
    hasCSSAnimations: function hasCSSAnimations() {
        return !!(0, _getVendorPrefixedName2.default)('animationName');
    },

    /**
     * @return {bool} True if browser supports css transforms.
     */
    hasCSSTransforms: function hasCSSTransforms() {
        return !!(0, _getVendorPrefixedName2.default)('transform');
    },

    /**
     * @return {bool} True if browser supports css 3d transforms.
     */
    hasCSS3DTransforms: function hasCSS3DTransforms() {
        return !!(0, _getVendorPrefixedName2.default)('perspective');
    },

    /**
     * @return {bool} True if browser supports css transitions.
     */
    hasCSSTransitions: function hasCSSTransitions() {
        return !!(0, _getVendorPrefixedName2.default)('transition');
    }
};

module.exports = BrowserSupportCore;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var on = __webpack_require__(13);
var cancelAnimationFramePolyfill = __webpack_require__(8);
var requestAnimationFramePolyfill = __webpack_require__(10);

var DOMMouseMoveTracker = function () {
    /**
     * onMove is the callback that will be called on every mouse move.
     * onMoveEnd is called on mouse up when movement has ended.
     */
    function DOMMouseMoveTracker(onMove, onMoveEnd, domNode) {
        _classCallCheck(this, DOMMouseMoveTracker);

        this._isDragging = false;
        this._animationFrameID = null;
        this._domNode = domNode;
        this._onMove = onMove;
        this._onMoveEnd = onMoveEnd;
        this._onMouseMove = this._onMouseMove.bind(this);
        this._onMouseUp = this._onMouseUp.bind(this);
        this._didMouseMove = this._didMouseMove.bind(this);
    }

    /**
     * This is to set up the listeners for listening to mouse move
     * and mouse up signaling the movement has ended. Please note that these
     * listeners are added at the document.body level. It takes in an event
     * in order to grab inital state.
     */


    DOMMouseMoveTracker.prototype.captureMouseMoves = function captureMouseMoves(event) {

        if (!this._eventMoveToken && !this._eventUpToken) {
            this._eventMoveToken = on(this._domNode, 'mousemove', this._onMouseMove);
            this._eventUpToken = on(this._domNode, 'mouseup', this._onMouseUp);
        }

        if (!this._isDragging) {
            this._deltaX = 0;
            this._deltaY = 0;
            this._isDragging = true;
            this._x = event.clientX;
            this._y = event.clientY;
        }

        event.preventDefault();
    };

    /**
     * These releases all of the listeners on document.body.
     */


    DOMMouseMoveTracker.prototype.releaseMouseMoves = function releaseMouseMoves() {

        if (this._eventMoveToken && this._eventUpToken) {

            this._eventMoveToken.off();
            this._eventMoveToken = null;
            this._eventUpToken.off();
            this._eventUpToken = null;
        }

        if (this._animationFrameID !== null) {
            cancelAnimationFramePolyfill(this._animationFrameID);
            this._animationFrameID = null;
        }

        if (this._isDragging) {
            this._isDragging = false;
            this._x = null;
            this._y = null;
        }
    };

    /**
     * Returns whether or not if the mouse movement is being tracked.
     */


    DOMMouseMoveTracker.prototype.isDragging = function isDragging() /*boolean*/{
        return this._isDragging;
    };

    /**
     * Calls onMove passed into constructor and updates internal state.
     */


    DOMMouseMoveTracker.prototype._onMouseMove = function _onMouseMove( /*object*/event) {

        var x = event.clientX;
        var y = event.clientY;

        this._deltaX += x - this._x;
        this._deltaY += y - this._y;

        if (this._animationFrameID === null) {
            // The mouse may move faster then the animation frame does.
            // Use `requestAnimationFramePolyfill` to avoid over-updating.
            this._animationFrameID = requestAnimationFramePolyfill(this._didMouseMove);
        }

        this._x = x;
        this._y = y;
        this._moveEvent = event;
        event.preventDefault();
    };

    DOMMouseMoveTracker.prototype._didMouseMove = function _didMouseMove() {
        this._animationFrameID = null;
        this._onMove(this._deltaX, this._deltaY, this._moveEvent);
        this._deltaX = 0;
        this._deltaY = 0;
    };
    /**
     * Calls onMoveEnd passed into constructor and updates internal state.
     */


    DOMMouseMoveTracker.prototype._onMouseUp = function _onMouseUp() {

        if (this._animationFrameID) {
            this._didMouseMove();
        }
        this._onMoveEnd();
    };

    return DOMMouseMoveTracker;
}();

module.exports = DOMMouseMoveTracker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    cancelAnimationFramePolyfill: __webpack_require__(8),
    nativeRequestAnimationFrame: __webpack_require__(9),
    requestAnimationFramePolyfill: __webpack_require__(10)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    addClass: __webpack_require__(11),
    hasClass: __webpack_require__(4),
    removeClass: __webpack_require__(12),
    toggleClass: __webpack_require__(31)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasClass = __webpack_require__(4);
var addClass = __webpack_require__(11);
var removeClass = __webpack_require__(12);

module.exports = function toggleClass(target, className) {
    if (hasClass(target, className)) {
        return removeClass(target, className);
    }
    return addClass(target, className);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    on: __webpack_require__(13),
    off: __webpack_require__(33),
    onFocus: __webpack_require__(34)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
var unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
var eventPrefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Unbind `target` event `eventName`'s callback `listener`.
 *
 * @param {Element} target
 * @param {String} eventName
 * @param {Function} listener
 * @param {Boolean} capture
 * @api public
 */
module.exports = function off(target, eventName, listener) {
  var capture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  target[unbind](eventPrefix + eventName, listener, capture);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function onFocus(listener) {
    var useFocusin = !document.addEventListener;
    var off = void 0;

    if (useFocusin) {
        document.attachEvent('onfocusin', listener);
        off = function off() {
            return document.detachEvent('onfocusin', listener);
        };
    } else {
        document.addEventListener('focus', listener, true);
        off = function off() {
            return document.removeEventListener('focus', listener, true);
        };
    }

    return {
        off: off
    };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyphenateStyleName = __webpack_require__(16);
var removeStyle = __webpack_require__(18);

module.exports = function addStyle(node, property, value) {
    var css = '';
    var props = property;

    if (typeof property === 'string') {
        if (value === undefined) {
            new Error('value is undefined');
        }
        (props = {})[property] = value;
    }

    for (var key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            !props[key] && props[key] !== 0 ? removeStyle(node, hyphenateStyleName(key)) : css += hyphenateStyleName(key) + ':' + props[key] + ';';
        }
    }

    node.style.cssText += ';' + css;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(6);

var camelize = _require.camelize;

var msPattern = /^ms-/;

module.exports = function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camelizeStyleName = __webpack_require__(36);
var getComputedStyle = __webpack_require__(15);
var hyphenateStyleName = __webpack_require__(16);

module.exports = function getStyle(node, property) {
    return node.style[camelizeStyleName(property)] || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _query = __webpack_require__(5);

var has = Object.prototype.hasOwnProperty,
    transform = 'transform',
    transition = {},
    transitionTiming,
    transitionDuration,
    transitionProperty,
    transitionDelay,
    backfaceVisibility;

if (_query.canUseDOM) {
    transition = getTransitionProperties();

    transform = transition.prefix + transform;

    transitionProperty = transition.prefix + 'transition-property';
    transitionDuration = transition.prefix + 'transition-duration';
    transitionDelay = transition.prefix + 'transition-delay';
    transitionTiming = transition.prefix + 'transition-timing-function';
    backfaceVisibility = transition.prefix + 'backface-visibility';
}

function getTransitionProperties() {
    var endEvent,
        prefix = '',
        transitions = {
        O: 'otransitionend',
        Moz: 'transitionend',
        Webkit: 'webkitTransitionEnd',
        ms: 'MSTransitionEnd'
    };

    var element = document.createElement('div');

    for (var vendor in transitions) {
        if (has.call(transitions, vendor)) {
            if (element.style[vendor + 'TransitionProperty'] !== undefined) {
                prefix = '-' + vendor.toLowerCase() + '-';
                endEvent = transitions[vendor];
                break;
            }
        }
    }

    if (!endEvent && element.style.transitionProperty !== undefined) {
        endEvent = 'transitionend';
    }

    return { end: endEvent, prefix: prefix };
}

module.exports = {
    backfaceVisibility: backfaceVisibility,
    transform: transform,
    end: transition.end,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Portal = __webpack_require__(42);

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = __webpack_require__(43);

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = __webpack_require__(44);

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

var _elementType = __webpack_require__(20);

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay(props, context) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).call(this, props, context));

        _this.state = { exited: !props.show };
        _this.onHiddenListener = _this.handleHidden.bind(_this);
        return _this;
    }

    _createClass(Overlay, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.show) {
                this.setState({ exited: false });
            } else if (!nextProps.transition) {
                // Otherwise let handleHidden take care of marking exited.
                this.setState({ exited: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var container = _props.container;
            var containerPadding = _props.containerPadding;
            var target = _props.target;
            var placement = _props.placement;
            var shouldUpdatePosition = _props.shouldUpdatePosition;
            var rootClose = _props.rootClose;
            var children = _props.children;
            var Transition = _props.transition;

            var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']);

            // Don't un-render the overlay while it's transitioning out.

            var mountOverlay = props.show || Transition && !this.state.exited;

            if (!mountOverlay) {
                // Don't bother showing anything if we don't have to.
                return null;
            }

            var child = children;

            // Position is be inner-most because it adds inline styles into the child,
            // which the other wrappers don't forward correctly.
            child = _react2.default.createElement(
                _Position2.default,
                { container: container, containerPadding: containerPadding, target: target, placement: placement, shouldUpdatePosition: shouldUpdatePosition },
                child
            );

            if (Transition) {
                var onExit = props.onExit;
                var onExiting = props.onExiting;
                var onEnter = props.onEnter;
                var onEntering = props.onEntering;
                var onEntered = props.onEntered;

                // This animates the child node by injecting props, so it must precede
                // anything that adds a wrapping div.

                child = _react2.default.createElement(
                    Transition,
                    {
                        'in': props.show,
                        transitionAppear: true,
                        onExit: onExit,
                        onExiting: onExiting,
                        onExited: this.onHiddenListener,
                        onEnter: onEnter,
                        onEntering: onEntering,
                        onEntered: onEntered
                    },
                    child
                );
            }

            // This goes after everything else because it adds a wrapping div.
            if (rootClose) {
                child = _react2.default.createElement(
                    _RootCloseWrapper2.default,
                    { onRootClose: props.onHide },
                    child
                );
            }

            return _react2.default.createElement(
                _Portal2.default,
                { container: container },
                child
            );
        }
    }, {
        key: 'handleHidden',
        value: function handleHidden() {
            this.setState({ exited: true });

            if (this.props.onExited) {
                var _props2;

                (_props2 = this.props).onExited.apply(_props2, arguments);
            }
        }
    }]);

    return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {

    /**
     * Set the visibility of the Overlay
     */
    show: _react2.default.PropTypes.bool,

    /**
     * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
     */
    rootClose: _react2.default.PropTypes.bool,

    /**
     * A Callback fired by the Overlay when it wishes to be hidden.
     *
     * __required__ when `rootClose` is `true`.
     *
     * @type func
     */
    onHide: function onHide(props, name, cname) {
        var pt = _react2.default.PropTypes.func;
        if (props.rootClose) {
            pt = pt.isRequired;
        }
        return pt(props, name, cname);
    },


    /**
     * A `<Transition/>` component used to animate the overlay changes visibility.
     */
    transition: _elementType2.default,

    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter: _react2.default.PropTypes.func,

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering: _react2.default.PropTypes.func,

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered: _react2.default.PropTypes.func,

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit: _react2.default.PropTypes.func,

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting: _react2.default.PropTypes.func,

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited: _react2.default.PropTypes.func
});

exports.default = Overlay;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Transition = __webpack_require__(45);

var _Transition2 = _interopRequireDefault(_Transition);

var _deprecated = __webpack_require__(46);

var _deprecated2 = _interopRequireDefault(_deprecated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    _classCallCheck(this, Fade);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Fade).apply(this, arguments));
  }

  _createClass(Fade, [{
    key: 'render',
    value: function render() {
      var timeout = this.props.timeout || this.props.duration;

      return _react2.default.createElement(
        _Transition2.default,
        _extends({}, this.props, {
          timeout: timeout,
          className: (0, _classnames2.default)(this.props.className, 'fade'),
          enteredClassName: 'in',
          enteringClassName: 'in' }),
        this.props.children
      );
    }
  }]);

  return Fade;
}(_react2.default.Component);

// Explicitly copied from Transition for doc generation.
// TODO: Remove duplication once #977 is resolved.


Fade.propTypes = {
  /**
  * Show the component; triggers the fade in or fade out animation
  */in: _react2.default.PropTypes.bool,

  /**
  * Unmount the component (remove it from the DOM) when it is faded out
  */
  unmountOnExit: _react2.default.PropTypes.bool,

  /**
  * Run the fade in animation when the component mounts, if it is initially
  * shown
  */
  transitionAppear: _react2.default.PropTypes.bool,

  /**
  * Duration of the fade animation in milliseconds, to ensure that finishing
  * callbacks are fired even if the original browser transition end events are
  * canceled
  */
  timeout: _react2.default.PropTypes.number,

  /**
  * duration
  * @private
  */
  duration: (0, _deprecated2.default)(_react2.default.PropTypes.number, 'Use `timeout`.'),

  /**
  * Callback fired before the component fades in
  */
  onEnter: _react2.default.PropTypes.func,
  /**
  * Callback fired after the component starts to fade in
  */
  onEntering: _react2.default.PropTypes.func,
  /**
  * Callback fired after the has component faded in
  */
  onEntered: _react2.default.PropTypes.func,
  /**
  * Callback fired before the component fades out
  */
  onExit: _react2.default.PropTypes.func,
  /**
  * Callback fired after the component starts to fade out
  */
  onExiting: _react2.default.PropTypes.func,
  /**
  * Callback fired after the component has faded out
  */
  onExited: _react2.default.PropTypes.func
};

Fade.defaultProps = {
  in: false,
  timeout: 300,
  unmountOnExit: false,
  transitionAppear: false
};

exports.default = Fade;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = __webpack_require__(20);

var _elementType2 = _interopRequireDefault(_elementType);

var _BaseOverlay = __webpack_require__(39);

var _BaseOverlay2 = _interopRequireDefault(_BaseOverlay);

var _Fade = __webpack_require__(40);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay() {
        _classCallCheck(this, Overlay);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
    }

    _createClass(Overlay, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var child = _props.children;
            var transition = _props.animation;

            var props = _objectWithoutProperties(_props, ['children', 'animation']);

            if (transition === true) {
                transition = _Fade2.default;
            }

            if (transition === false) {
                transition = null;
            }

            if (!transition) {
                child = (0, _react.cloneElement)(child, {
                    className: (0, _classnames2.default)('in', child.props.className)
                });
            }

            return _react2.default.createElement(
                _BaseOverlay2.default,
                _extends({}, props, { transition: transition }),
                child
            );
        }
    }]);

    return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _BaseOverlay2.default.propTypes, {

    /**
     * Set the visibility of the Overlay
     */
    show: _react2.default.PropTypes.bool,
    /**
     * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
     */
    rootClose: _react2.default.PropTypes.bool,
    /**
     * A callback invoked by the overlay when it wishes to be hidden. Required if
     * `rootClose` is specified.
     */
    onHide: _react2.default.PropTypes.func,

    /**
    * Use animation
    */
    animation: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _elementType2.default])
});

Overlay.defaultProps = {
    animation: _Fade2.default,
    rootClose: false,
    show: false
};

exports.default = Overlay;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domLib = __webpack_require__(2);

var _mountable = __webpack_require__(21);

var _mountable2 = _interopRequireDefault(_mountable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portal = _react2.default.createClass({
    displayName: 'Portal',

    propTypes: {
        /**
         * A Node, Component instance, or function that returns either. The `container` will have the Portal children
         * appended to it.
         */
        container: _react2.default.PropTypes.oneOfType([_mountable2.default, _react2.default.PropTypes.func])
    },

    componentDidMount: function componentDidMount() {
        this._renderOverlay();
    },
    componentDidUpdate: function componentDidUpdate() {
        this._renderOverlay();
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {

        if (this._overlayTarget && nextProps.container !== this.props.container) {
            this._portalContainerNode.removeChild(this._overlayTarget);
            this._portalContainerNode = (0, _domLib.getContainer)(nextProps.container, (0, _domLib.ownerDocument)(this).body);
            this._portalContainerNode.appendChild(this._overlayTarget);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        this._unrenderOverlay();
        this._unmountOverlayTarget();
    },
    _mountOverlayTarget: function _mountOverlayTarget() {
        if (!this._overlayTarget) {
            this._overlayTarget = document.createElement('div');
            this._portalContainerNode = (0, _domLib.getContainer)(this.props.container, (0, _domLib.ownerDocument)(this).body);
            this._portalContainerNode.appendChild(this._overlayTarget);
        }
    },
    _unmountOverlayTarget: function _unmountOverlayTarget() {
        if (this._overlayTarget) {
            this._portalContainerNode.removeChild(this._overlayTarget);
            this._overlayTarget = null;
        }
        this._portalContainerNode = null;
    },
    _renderOverlay: function _renderOverlay() {

        var overlay = !this.props.children ? null : _react2.default.Children.only(this.props.children);

        // Save reference for future access.
        if (overlay !== null) {
            this._mountOverlayTarget();
            this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
        } else {
            // Unrender if the component is null for transitions to null
            this._unrenderOverlay();
            this._unmountOverlayTarget();
        }
    },
    _unrenderOverlay: function _unrenderOverlay() {
        if (this._overlayTarget) {
            _reactDom2.default.unmountComponentAtNode(this._overlayTarget);
            this._overlayInstance = null;
        }
    },
    render: function render() {
        return null;
    },
    getMountNode: function getMountNode() {
        return this._overlayTarget;
    },
    getOverlayDOMNode: function getOverlayDOMNode() {
        if (!this.isMounted()) {
            throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
        }

        if (this._overlayInstance) {
            if (this._overlayInstance.getWrappedDOMNode) {
                return this._overlayInstance.getWrappedDOMNode();
            } else {
                return _reactDom2.default.findDOMNode(this._overlayInstance);
            }
        }

        return null;
    }
});

exports.default = Portal;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _domLib = __webpack_require__(2);

var _mountable = __webpack_require__(21);

var _mountable2 = _interopRequireDefault(_mountable);

var _overlayPositionUtils = __webpack_require__(47);

var _overlayPositionUtils2 = _interopRequireDefault(_overlayPositionUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Position component calculates the coordinates for its child, to
 * position it relative to a `target` component or node. Useful for creating callouts and tooltips,
 * the Position component injects a `style` props with `left` and `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows for giving your components
 * a sense of directionality.
 */

var Position = function (_React$Component) {
    _inherits(Position, _React$Component);

    function Position(props, context) {
        _classCallCheck(this, Position);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Position).call(this, props, context));

        _this.state = {
            positionLeft: 0,
            positionTop: 0,
            arrowOffsetLeft: null,
            arrowOffsetTop: null
        };

        _this._needsFlush = false;
        _this._lastTarget = null;
        return _this;
    }

    _createClass(Position, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updatePosition();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this._needsFlush = true;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this._needsFlush) {
                this._needsFlush = false;
                this.updatePosition(prevProps.placement !== this.props.placement);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Probably not necessary, but just in case holding a reference to the
            // target causes problems somewhere.
            this._lastTarget = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;

            var props = _objectWithoutProperties(_props, ['children', 'className']);

            var _state = this.state;
            var positionLeft = _state.positionLeft;
            var positionTop = _state.positionTop;

            var arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

            // These should not be forwarded to the child.


            delete props.target;
            delete props.container;
            delete props.containerPadding;

            var child = _react2.default.Children.only(children);
            return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
                //do we need to also forward positionLeft and positionTop if they are set to style?
                positionLeft: positionLeft,
                positionTop: positionTop,
                className: (0, _classnames2.default)(className, child.props.className),
                style: _extends({}, child.props.style, {
                    left: positionLeft,
                    top: positionTop
                })
            }));
        }
    }, {
        key: 'getTargetSafe',
        value: function getTargetSafe() {
            if (!this.props.target) {
                return null;
            }

            var target = this.props.target(this.props);
            if (!target) {
                // This is so we can just use === check below on all falsy targets.
                return null;
            }

            return target;
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition(placementChanged) {
            var target = this.getTargetSafe();

            if (!this.props.shouldUpdatePosition && target === this._lastTarget && !placementChanged) {
                return;
            }

            this._lastTarget = target;

            if (!target) {
                this.setState({ positionLeft: 0, positionTop: 0, arrowOffsetLeft: null, arrowOffsetTop: null });

                return;
            }

            var overlay = _reactDom2.default.findDOMNode(this);
            var container = (0, _domLib.getContainer)(this.props.container, (0, _domLib.ownerDocument)(this).body);

            this.setState(_overlayPositionUtils2.default.calcOverlayPosition(this.props.placement, overlay, target, container, this.props.containerPadding));
        }
    }]);

    return Position;
}(_react2.default.Component);

Position.propTypes = {
    /**
    * Function mapping props to a DOM node the component is positioned next to
    *
    */
    target: _react2.default.PropTypes.func,

    /**
    * "offsetParent" of the component
    */
    container: _react2.default.PropTypes.oneOfType([_mountable2.default, _react2.default.PropTypes.func]),
    /**
    * Minimum spacing in pixels between container border and component border
    */
    containerPadding: _react2.default.PropTypes.number,
    /**
    * How to position the component relative to the target
    */
    placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
    * Whether the position should be changed on each update
    */
    shouldUpdatePosition: _react2.default.PropTypes.bool
};

Position.displayName = 'Position';

Position.defaultProps = {
    containerPadding: 0,
    placement: 'right',
    shouldUpdatePosition: false
};

exports.default = Position;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domLib = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLeftClickEvent(event) {
    return event.button === 0;
} /**
   * modified version of:
   * https://github.com/react-bootstrap/react-overlays/blob/f1528af806236627df49e0f661aec7cb48980863/src/RootCloseWrapper.js
   */


function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var counter = 0;

function getSuppressRootClose() {
    var id = '__click_was_inside_' + counter++;
    return {
        id: id,
        suppressRootClose: function suppressRootClose(event) {
            // Tag the native event to prevent the root close logic on document click.
            // This seems safer than using event.nativeEvent.stopImmediatePropagation(),
            // which is only supported in IE >= 9.
            event.nativeEvent[id] = true;
        }
    };
}

var RootCloseWrapper = _react2.default.createClass({
    displayName: 'RootCloseWrapper',

    propTypes: {
        onRootClose: _react2.default.PropTypes.func.isRequired
    },
    componentWillMount: function componentWillMount() {
        var _getSuppressRootClose = getSuppressRootClose();

        var id = _getSuppressRootClose.id;
        var suppressRootClose = _getSuppressRootClose.suppressRootClose;

        this._suppressRootId = id;
        this._suppressRootCloseHandler = suppressRootClose;
    },
    componentDidMount: function componentDidMount() {
        this.bindRootCloseHandlers();
    },
    componentWillUnmount: function componentWillUnmount() {
        this.unbindRootCloseHandlers();
    },
    bindRootCloseHandlers: function bindRootCloseHandlers() {
        var doc = window.document;
        this._onDocumentClickListener = (0, _domLib.on)(doc, 'click', this.handleDocumentClick);
        this._onDocumentKeyupListener = (0, _domLib.on)(doc, 'keyup', this.handleDocumentKeyUp);
    },
    handleDocumentClick: function handleDocumentClick(event) {
        if (event[this._suppressRootId]) {
            return;
        }
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
            return;
        }
        this.props.onRootClose();
    },
    handleDocumentKeyUp: function handleDocumentKeyUp(event) {
        if (event.keyCode === 27) {
            this.props.onRootClose();
        }
    },
    unbindRootCloseHandlers: function unbindRootCloseHandlers() {
        if (this._onDocumentClickListener) {
            this._onDocumentClickListener.off();
        }

        if (this._onDocumentKeyupListener) {
            this._onDocumentKeyupListener.off();
        }
    },
    getWrappedDOMNode: function getWrappedDOMNode() {
        return _reactDom2.default.findDOMNode(this);
    },
    render: function render() {
        var children = this.props.children;

        var child = _react2.default.Children.only(children);

        return _react2.default.cloneElement(child, {
            onClick: this._suppressRootCloseHandler || child.props.onClick
        });
    }
});

exports.default = RootCloseWrapper;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitionProperties = __webpack_require__(48);

var _transitionProperties2 = _interopRequireDefault(_transitionProperties);

var _domLib = __webpack_require__(2);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionEndEvent = _transitionProperties2.default.end;

var UNMOUNTED = exports.UNMOUNTED = 0;
var EXITED = exports.EXITED = 1;
var ENTERING = exports.ENTERING = 2;
var ENTERED = exports.ENTERED = 3;
var EXITING = exports.EXITING = 4;

/**
 * The Transition component lets you define and run css transitions with a simple declarative api.
 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
 * but is specifically optimized for transitioning a single child "in" or "out".
 *
 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
 * The extensive set of lifecyle callbacks means you have control over
 * the transitioning now at each step of the way.
 */

var Transition = function (_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
        _classCallCheck(this, Transition);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Transition).call(this, props, context));

        var initialStatus = void 0;
        if (props.in) {
            // Start enter transition in componentDidMount.
            initialStatus = props.transitionAppear ? EXITED : ENTERED;
        } else {
            initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
        }
        _this.state = {
            status: initialStatus
        };

        _this.nextCallback = null;
        return _this;
    }

    _createClass(Transition, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.transitionAppear && this.props.in) {
                this.performEnter(this.props);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.in && this.props.unmountOnExit) {
                if (this.state.status === UNMOUNTED) {
                    // Start enter transition in componentDidUpdate.
                    this.setState({ status: EXITED });
                }
            } else {
                this._needsUpdate = true;
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var status = this.state.status;

            if (this.props.unmountOnExit && status === EXITED) {
                // EXITED is always a transitional state to either ENTERING or UNMOUNTED
                // when using unmountOnExit.
                if (this.props.in) {
                    this.performEnter(this.props);
                } else {
                    this.setState({ status: UNMOUNTED });
                }

                return;
            }

            // guard ensures we are only responding to prop changes
            if (this._needsUpdate) {
                this._needsUpdate = false;

                if (this.props.in) {
                    if (status === EXITING) {
                        this.performEnter(this.props);
                    } else if (status === EXITED) {
                        this.performEnter(this.props);
                    }
                    // Otherwise we're already entering or entered.
                } else {
                    if (status === ENTERING || status === ENTERED) {
                        this.performExit(this.props);
                    }
                    // Otherwise we're already exited or exiting.
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.cancelNextCallback();
        }
    }, {
        key: 'performEnter',
        value: function performEnter(props) {
            var _this2 = this;

            this.cancelNextCallback();
            var node = _reactDom2.default.findDOMNode(this);

            // Not this.props, because we might be about to receive new props.
            props.onEnter(node);

            this.safeSetState({
                status: ENTERING
            }, function () {
                _this2.props.onEntering(node);

                _this2.onTransitionEnd(node, function () {
                    _this2.safeSetState({
                        status: ENTERED
                    }, function () {
                        _this2.props.onEntered(node);
                    });
                });
            });
        }
    }, {
        key: 'performExit',
        value: function performExit(props) {
            var _this3 = this;

            this.cancelNextCallback();
            var node = _reactDom2.default.findDOMNode(this);

            // Not this.props, because we might be about to receive new props.
            props.onExit(node);

            this.safeSetState({
                status: EXITING
            }, function () {
                _this3.props.onExiting(node);

                _this3.onTransitionEnd(node, function () {
                    _this3.safeSetState({
                        status: EXITED
                    }, function () {
                        _this3.props.onExited(node);
                    });
                });
            });
        }
    }, {
        key: 'cancelNextCallback',
        value: function cancelNextCallback() {
            if (this.nextCallback !== null) {
                this.nextCallback.cancel();
                this.nextCallback = null;
            }
        }
    }, {
        key: 'safeSetState',
        value: function safeSetState(nextState, callback) {
            // This shouldn't be necessary, but there are weird race conditions with
            // setState callbacks and unmounting in testing, so always make sure that
            // we can cancel any pending setState callbacks after we unmount.
            this.setState(nextState, this.setNextCallback(callback));
        }
    }, {
        key: 'setNextCallback',
        value: function setNextCallback(callback) {
            var _this4 = this;

            var active = true;

            this.nextCallback = function (event) {
                if (active) {
                    active = false;
                    _this4.nextCallback = null;

                    callback(event);
                }
            };

            this.nextCallback.cancel = function () {
                active = false;
            };

            return this.nextCallback;
        }
    }, {
        key: 'onTransitionEnd',
        value: function onTransitionEnd(node, handler) {
            this.setNextCallback(handler);

            if (node) {
                (0, _domLib.on)(node, transitionEndEvent, this.nextCallback);
                setTimeout(this.nextCallback, this.props.timeout);
            } else {
                setTimeout(this.nextCallback, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var status = this.state.status;
            if (status === UNMOUNTED) {
                return null;
            }

            var _props = this.props;
            var children = _props.children;
            var className = _props.className;

            var childProps = _objectWithoutProperties(_props, ['children', 'className']);

            Object.keys(Transition.propTypes).forEach(function (key) {
                return delete childProps[key];
            });

            var transitionClassName = void 0;
            if (status === EXITED) {
                transitionClassName = this.props.exitedClassName;
            } else if (status === ENTERING) {
                transitionClassName = this.props.enteringClassName;
            } else if (status === ENTERED) {
                transitionClassName = this.props.enteredClassName;
            } else if (status === EXITING) {
                transitionClassName = this.props.exitingClassName;
            }

            var child = _react2.default.Children.only(children);
            return _react2.default.cloneElement(child, _extends({}, childProps, {
                className: (0, _classnames2.default)(child.props.className, className, transitionClassName)
            }));
        }
    }]);

    return Transition;
}(_react2.default.Component);

Transition.propTypes = {
    /**
    * Show the component; triggers the enter or exit animation
    */in: _react2.default.PropTypes.bool,

    /**
    * Unmount the component (remove it from the DOM) when it is not shown
    */
    unmountOnExit: _react2.default.PropTypes.bool,

    /**
    * Run the enter animation when the component mounts, if it is initially
    * shown
    */
    transitionAppear: _react2.default.PropTypes.bool,

    /**
    * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
    * transition indefinately if the browser transitionEnd events are
    * canceled or interrupted.
    *
    * By default this is set to a high number (5 seconds) as a failsafe. You should consider
    * setting this to the duration of your animation (or a bit above it).
    */
    timeout: _react2.default.PropTypes.number,

    /**
    * CSS class or classes applied when the component is exited
    */
    exitedClassName: _react2.default.PropTypes.string,
    /**
    * CSS class or classes applied while the component is exiting
    */
    exitingClassName: _react2.default.PropTypes.string,
    /**
    * CSS class or classes applied when the component is entered
    */
    enteredClassName: _react2.default.PropTypes.string,
    /**
    * CSS class or classes applied while the component is entering
    */
    enteringClassName: _react2.default.PropTypes.string,

    /**
    * Callback fired before the "entering" classes are applied
    */
    onEnter: _react2.default.PropTypes.func,
    /**
    * Callback fired after the "entering" classes are applied
    */
    onEntering: _react2.default.PropTypes.func,
    /**
    * Callback fired after the "enter" classes are applied
    */
    onEntered: _react2.default.PropTypes.func,
    /**
    * Callback fired before the "exiting" classes are applied
    */
    onExit: _react2.default.PropTypes.func,
    /**
    * Callback fired after the "exiting" classes are applied
    */
    onExiting: _react2.default.PropTypes.func,
    /**
    * Callback fired after the "exited" classes are applied
    */
    onExited: _react2.default.PropTypes.func
};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.displayName = 'Transition';

Transition.defaultProps = { in: false,
    unmountOnExit: false,
    transitionAppear: false,

    timeout: 5000,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop
};

exports.default = Transition;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = deprecated;
function deprecated(propType, explanation) {
    return function validate(props, propName, componentName) {
        if (props[propName] !== null) {
            new Error("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
        }

        return propType(props, propName, componentName);
    };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domLib = __webpack_require__(2);

var utils = {
    getContainerDimensions: function getContainerDimensions(containerNode) {
        var width = void 0,
            height = void 0,
            scroll = void 0;
        if (containerNode.tagName === 'BODY') {
            width = window.innerWidth;
            height = window.innerHeight;
            scroll = (0, _domLib.scrollTop)((0, _domLib.ownerDocument)(containerNode).documentElement) || (0, _domLib.scrollTop)(containerNode);
        } else {
            var _getOffset = (0, _domLib.getOffset)(containerNode);

            width = _getOffset.width;
            height = _getOffset.height;

            scroll = (0, _domLib.scrollTop)(containerNode);
        }
        return { width: width, height: height, scroll: scroll };
    },
    getPosition: function getPosition(target, container) {
        var offset = container.tagName === 'BODY' ? (0, _domLib.getOffset)(target) : (0, _domLib.getPosition)(target, container);
        return offset;
    },
    calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {

        var childOffset = utils.getPosition(target, container);

        var _getOffset2 = (0, _domLib.getOffset)(overlayNode);

        var overlayHeight = _getOffset2.height;
        var overlayWidth = _getOffset2.width;


        var positionLeft = void 0,
            positionTop = void 0,
            arrowOffsetLeft = void 0,
            arrowOffsetTop = void 0;

        if (placement === 'left' || placement === 'right') {
            positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

            if (placement === 'left') {
                positionLeft = childOffset.left - overlayWidth;
            } else {
                positionLeft = childOffset.left + childOffset.width;
            }

            var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

            positionTop += topDelta;
            arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
            arrowOffsetLeft = void 0;
        } else if (placement === 'top' || placement === 'bottom') {
            positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

            if (placement === 'top') {
                positionTop = childOffset.top - overlayHeight;
            } else {
                positionTop = childOffset.top + childOffset.height;
            }

            var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
            positionLeft += leftDelta;
            arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
            arrowOffsetTop = void 0;
        } else {
            throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
        }

        return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
    }
};

function getTopDelta(top, overlayHeight, container, padding) {
    var containerDimensions = utils.getContainerDimensions(container);
    var containerScroll = containerDimensions.scroll;
    var containerHeight = containerDimensions.height;

    var topEdgeOffset = top - padding - containerScroll;
    var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

    if (topEdgeOffset < 0) {
        return -topEdgeOffset;
    } else if (bottomEdgeOffset > containerHeight) {
        return containerHeight - bottomEdgeOffset;
    } else {
        return 0;
    }
}

function getLeftDelta(left, overlayWidth, container, padding) {
    var containerDimensions = utils.getContainerDimensions(container);
    var containerWidth = containerDimensions.width;

    var leftEdgeOffset = left - padding;
    var rightEdgeOffset = left + padding + overlayWidth;

    if (leftEdgeOffset < 0) {
        return -leftEdgeOffset;
    } else if (rightEdgeOffset > containerWidth) {
        return containerWidth - rightEdgeOffset;
    } else {
        return 0;
    }
}

exports.default = utils;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _domLib = __webpack_require__(2);

var has = Object.prototype.hasOwnProperty,
    transform = 'transform',
    transition = {},
    transitionTiming,
    transitionDuration,
    transitionProperty,
    transitionDelay;

if (_domLib.canUseDOM) {
    transition = getTransitionProperties();

    transform = transition.prefix + transform;

    transitionProperty = transition.prefix + 'transition-property';
    transitionDuration = transition.prefix + 'transition-duration';
    transitionDelay = transition.prefix + 'transition-delay';
    transitionTiming = transition.prefix + 'transition-timing-function';
}

function getTransitionProperties() {
    var endEvent,
        prefix = '',
        transitions = {
        O: 'otransitionend',
        Moz: 'transitionend',
        Webkit: 'webkitTransitionEnd',
        ms: 'MSTransitionEnd'
    };

    var element = document.createElement('div');

    for (var vendor in transitions) {
        if (has.call(transitions, vendor)) {
            if (element.style[vendor + 'TransitionProperty'] !== undefined) {
                prefix = '-' + vendor.toLowerCase() + '-';
                endEvent = transitions[vendor];
                break;
            }
        }
    }

    if (!endEvent && element.style.transitionProperty !== undefined) {
        endEvent = 'transitionend';
    }

    return { end: endEvent, prefix: prefix };
}

exports.default = {
    transform: transform,
    end: transition.end,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ })
/******/ ]);
});