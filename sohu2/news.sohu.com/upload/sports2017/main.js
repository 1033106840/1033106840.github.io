/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Apple on 17/2/15.
	 */

	__webpack_require__(1);
	var test_comp = __webpack_require__(5);
	(function (sohu_mp, Backbone, jQuery) {
	  var plugin_name = "sports_index_component";
	  sohu_mp.plugin.define(plugin_name, test_comp);
	})(window.sohu_mp, window.Backbone, window.jQuery);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("https://news.sohu.com/upload/sports2017/node_modules/css-loader/node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("https://news.sohu.com/upload/sports2017/node_modules/css-loader/node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#sports_component #sport2017 {\n  width: 340px;\n  height: auto;\n  background: #f9f9f9;\n  color: #191919;\n  padding-bottom: 15px;\n}\n#sports_component #sport2017 .sport2017_tab div.active {\n  border-bottom: 2px solid #fdd000;\n}\n#sports_component #sport2017 .sport2017_tab div {\n  width: 60px;\n  height: 28px;\n  font-size: 14px;\n  cursor: pointer;\n}\n#sports_component #sport2017Live {\n  float: left;\n  text-align: center;\n}\n#sports_component #sport2017Old {\n  float: right;\n  text-align: center;\n}\n#sports_component #sport2017 .sport2017-list.none {\n  display: none;\n}\n#sports_component #sport2017 .sport2017-list {\n  width: 100%;\n  margin-top: 10px;\n}\n#sports_component #sport2017 .sport2017-list a {\n  text-decoration: none;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item {\n  position: relative;\n  width: 100%;\n  height: 62px;\n  margin-bottom: 3px;\n  cursor: pointer;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item:hover .sport2017-f {\n  display: block;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content {\n  position: relative;\n  width: 300px;\n  height: 100%;\n  margin: 0 auto;\n  color: #191919;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017pic {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin-top: 15px;\n  display: inline-block;\n  vertical-align: top;\n  float: left;\n  overflow: hidden;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017home {\n  display: inline-block;\n  vertical-align: middle;\n  width: 70px;\n  height: 40px;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: 6px;\n  float: left;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017home div {\n  line-height: 22px;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017away {\n  display: inline-block;\n  vertical-align: middle;\n  width: 70px;\n  height: 40px;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: 0px;\n  margin-right: 6px;\n  float: left;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017away div {\n  line-height: 22px;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017score {\n  color: #f43d60;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017vs {\n  width: 60px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: 700;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 0px;\n  line-height: 20px;\n  float: left;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017vs div {\n  font-size: 14px;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017vs .sport2017type {\n  font-size: 12px;\n  color: #666666;\n  font-weight: 500;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017pic:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  display: block;\n  background: url(http://i0.itc.cn/20170327/366b_4668e365_e1ef_1288_e80a_16f0cba37d06_1.png) center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-f {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  text-align: center;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content:hover.sport2017-f {\n  display: block;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-content .sport2017tip {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 17px;\n  text-align: center;\n  height: 58px;\n  padding: 2px 3px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f {\n  color: #fa2f6d;\n  background: url(http://i0.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_2.png) repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f .live-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #fa2f6d;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(http://i0.itc.cn/20170306/366b_dfcfc505_51ae_d67f_98bd_0c13b6f6865b_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f .live-data {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #fa2f6d;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  background: url(http://i3.itc.cn/20170306/366b_47ea2754_57d3_3d24_9e6f_c33ae3778ca6_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f .will-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #0b63dd;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n  padding-right: 30px;\n  background: url(http://i1.itc.cn/20170306/366b_6ce0d448_d88c_94ae_26f8_aa7abbe4dd72_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f .will-data {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #0b63dd;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  background: url(http://i1.itc.cn/20170306/366b_2fa51434_63fb_8fba_ea5e_38c0d8dfe355_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(http://i3.itc.cn/20170306/366b_bedf33b8_f77a_8a0d_71e4_5eff28a7a44c_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-data {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(http://i3.itc.cn/20170306/366b_a9d402dc_210d_c65e_342b_350c4a2d1692_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-result {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 20px;\n  display: inline-block;\n  background: url(http://i2.itc.cn/20170306/366b_62a5b9e1_977d_e9e4_6caf_2dfd317f53e5_1.png) left center no-repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f {\n  color: #0b62dc;\n  background: url(http://i1.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_1.png) repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f {\n  color: #191919;\n  background: url(http://i3.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_3.png) repeat;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017score {\n  color: #999999;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-content .sport2017tip {\n  background: #e2eeff;\n  color: #5094f1;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-content .sport2017tip {\n  background: #ffe3e8;\n  color: #fa2f6d;\n  height: 42px;\n  padding: 10px 3px;\n  font-size: 12px;\n  line-height: 14px;\n}\n#sports_component #sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-content .sport2017tip {\n  background: #e9e9e9;\n  color: #999999;\n  height: 42px;\n  padding: 10px 3px;\n  font-size: 12px;\n  line-height: 14px;\n}\n#sports_component #sport2017 .menu li {\n  font-size: 14px;\n  float: left;\n  height: 29px;\n  line-height: 24px;\n  width: 33.3%;\n  text-align: center;\n  cursor: pointer;\n}\n#sports_component #sport2017 .menuC2 li {\n  width: 50%;\n}\n#sports_component #sport2017 .menu {\n  margin: 15px auto 0;\n  height: 31px;\n  padding: 0 20px;\n}\n#sports_component #sport2017 .menu li.active {\n  border-bottom: 2px solid #fdd000;\n  color: #191919;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {

	  render: function (data) {

	    console.log(data);
	    var template = __webpack_require__(6);
	    this.template = _.template(template);
	    console.log(data.start);
	    var data = this.fixItem(data);
	    this.$el.html(this.template(data));
	  },
	  nextTick: function (fn) {
	    setTimeout(fn, 0);
	  },
	  xdomainrequest: function ($) {
	    if ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) {
	      return;
	    }
	    var n = /^https?:\/\//i;
	    var o = /^get|post$/i;
	    var p = new RegExp('^' + location.protocol, 'i');
	    $.ajaxTransport('* text html xml json', function (j, k, l) {
	      if (!j.crossDomain || !j.async || !o.test(j.type) || !n.test(j.url) || !p.test(j.url)) {
	        return;
	      }
	      var m = null;
	      return {
	        send: function (f, g) {
	          var h = '';
	          var i = (k.dataType || '').toLowerCase();
	          m = new XDomainRequest();
	          if (/^\d+$/.test(k.timeout)) {
	            m.timeout = k.timeout;
	          }
	          m.ontimeout = function () {
	            g(500, 'timeout');
	          };
	          m.onload = function () {
	            var a = 'Content-Length: ' + m.responseText.length + '\r\nContent-Type: ' + m.contentType;
	            var b = {
	              code: 200,
	              message: 'success'
	            };
	            var c = {
	              text: m.responseText
	            };
	            try {
	              if (i === 'html' || /text\/html/i.test(m.contentType)) {
	                c.html = m.responseText;
	              } else if (i === 'json' || i !== 'text' && /\/json/i.test(m.contentType)) {
	                try {
	                  c.json = $.parseJSON(m.responseText);
	                } catch (e) {
	                  b.code = 500;
	                  b.message = 'parseerror';
	                }
	              } else if (i === 'xml' || i !== 'text' && /\/xml/i.test(m.contentType)) {
	                var d = new ActiveXObject('Microsoft.XMLDOM');
	                d.async = false;
	                try {
	                  d.loadXML(m.responseText);
	                } catch (e) {
	                  d = undefined;
	                }
	                if (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) {
	                  b.code = 500;
	                  b.message = 'parseerror';
	                  throw 'Invalid XML: ' + m.responseText;
	                }
	                c.xml = d;
	              }
	            } catch (parseMessage) {
	              throw parseMessage;
	            } finally {
	              g(b.code, b.message, c, a);
	            }
	          };
	          m.onprogress = function () {};
	          m.onerror = function () {
	            g(500, 'error', {
	              text: m.responseText
	            });
	          };
	          if (k.data) {
	            h = $.type(k.data) === 'string' ? k.data : $.param(k.data);
	          }
	          m.open(j.type, j.url);
	          m.send(h);
	        },
	        abort: function () {
	          if (m) {
	            m.abort();
	          }
	        }
	      };
	    });
	  },
	  initialize: function (opts) {
	    //  	jQuery.support.cors=true;
	    //  	$.ajaxSetup({ cache: false }); 
	    this.xdomainrequest(jQuery);
	    this.pullData(opts);
	  },
	  sportsDataUrl: 'http://ydgf.sohu.com/schedule/index.json',
	  headerUrl: "http://apiv2.sohu.com/apiV2/re/headers?channelId=17",
	  events: {
	    "mousemove #sport2017Live": "showLive",
	    "mousemove #sport2017Old": "showOld"
	  },
	  pullData: function (opts) {
	    var that = this;
	    $.ajax({
	      url: that.sportsDataUrl,
	      dataType: "json",
	      type: "GET",
	      //          crossDomain: true,
	      // 			contentType: 'text/plain',
	      success: function (data) {
	        //        
	        that.render(data);
	        that.pullSwiperData(opts);

	        //             $.ajaxSetup({ cache: true }); 
	      },
	      error: function (e) {
	        that.$el.find("#sport2017EndList").html("暂无数据……");
	        that.$el.find("#sport2017LiveList").html("暂无数据……");
	        console.log("比赛数据加载失败！");
	        console.log(e);
	      }
	    });
	  },
	  fixItem: function (data) {
	    data.start.forEach(function (o) {
	      o.ttt = new Date(Date.parse(o.match_date.replace(/-/g, "/")));
	    });
	    return data;
	  },
	  showLive: function () {
	    var className = 'active';
	    this.$el.find("#sport2017Live").attr('class', 'active');
	    console.log(this.$el.find("#sport2017Live").attr('class'));
	    this.$el.find("#sport2017Old").attr('class', '');
	    this.$el.find("#sport2017EndList").attr('class', 'sport2017-list none');
	    this.$el.find("#sport2017LiveList").attr('class', 'sport2017-list');
	  },
	  showOld: function () {
	    var className = 'active';
	    this.$el.find("#sport2017Old").attr('class', 'active');
	    this.$el.find("#sport2017Live").attr('class', '');
	    this.$el.find("#sport2017LiveList").attr('class', 'sport2017-list none');
	    this.$el.find("#sport2017EndList").attr('class', 'sport2017-list');
	  },
	  pullSwiperData: function (opts) {
	    var that = this;
	    $.ajax({
	      url: this.headerUrl,
	      dataType: "jsonp",
	      type: "GET",
	      success: function (data) {
	        var new_data = [];
	        data.list.forEach(function (o) {
	          new_data.push({
	            focusImg: o.focusImg,
	            path: o.path,
	            title: o.title
	          });
	        });
	        opts && opts.api("create_swiper", {
	          el: that.$el.find(".swiper"),
	          data: new_data
	        });
	      },
	      error: function (e) {
	        console.log("体育头图加载失败");
	      }
	    });
	  }

	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"titleR\"> <span class=\"tt\"><a href=\"https://sports.sohu.com/\">体育</a></span> </div>\r\n<div class=\"swiper\">\r\n</div>\r\n   <div id=\"sport2017\" class=\"clearfix\">\r\n         <!--<div class=\"sport2017_tab\">\r\n        <div id=\"sport2017Live\" class=\"active\">赛事直播</div>\r\n        <div id=\"sport2017Old\" class=\"\">精彩回放</div>\r\n    </div>-->\r\n    <div class=\"sport2017_tab menu menuC2\"> <ul> <li id=\"sport2017Live\" class=\"active\">赛事直播</li> <li id=\"sport2017Old\" class=\"\">精彩回放</li> </ul> </div>\r\n    <div id=\"sport2017LiveList\" class=\"sport2017-list\">\r\n    <%  for (var i=0;i<start.length;i++){ %>\r\n    <% if(start[i].status==\"0\"){%>\r\n    \r\n  <div class=\"sport2017-item sport2017-will\">\r\n            <div class=\"sport2017-content\">\r\n                <div class=\"sport2017pic\"><img src=\"<%= start[i].home.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n                <div class=\"sport2017home\">\r\n                    <div>\r\n                        <%= start[i].home.name %>\r\n                    </div>\r\n                    <div class=\"sport2017score\">\r\n                        <%= start[i].ttt.getMonth()+1 %>月<%= start[i].ttt.getDate() %>日</div>\r\n                </div> <div class=\"sport2017vs\">\r\n                    <div>v.s</div>\r\n                    <div class=\"sport2017type\">\r\n                        <%= start[i].gametype %>\r\n                    </div>\r\n                </div>\r\n                <div class=\"sport2017away\">\r\n                    <div>\r\n                        <%= start[i].away.name %>\r\n                    </div>\r\n                    <div class=\"sport2017score\">\r\n                        <%= start[i].ttt.getHours() %>:\n                        <%= start[i].ttt.getMinutes()==\"0\"?\"00\":start[i].ttt.getMinutes() %>\r\n                        \r\n                            </div> </div>  \r\n        <div class=\"sport2017pic\"><img src=\"<%= start[i].away.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n                    <div class=\"sport2017tip\" style=\"line-height: 13px;height: 50px;padding: 6px 3px;\">即将开始</div></div>\r\n                <div class=\"sport2017-f\">\r\n                \t<% if(start[i].url.live !=\"\") {%>\r\n                \t<a href=\"<%= start[i].url.live %>\" target=\"_blank\" class=\"will-link\">直播</a>\r\n                \t<%}%>\r\n                \t<% if(start[i].url.stat !=\"\") {%>\r\n                \t<a href=\"<%= start[i].url.stat %>\" target=\"_blank\" class=\"will-data\">数据</a>\r\n                \t<%}%>\r\n\r\n                </div>\r\n            </div>\r\n              \r\n                \r\n    <%}%>\r\n    <% if(start[i].status==\"1\"){%>\r\n             <div class=\"sport2017-item sport2017-live\">\r\n                        <div class=\"sport2017-content\">\r\n                            <div class=\"sport2017pic\"><img src=\"<%= start[i].home.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n                            <div class=\"sport2017home\">\r\n                                <div><%= start[i].home.name %></div>\r\n                                <div class=\"sport2017score\"><%= start[i].home.score %></div>\r\n                            </div>\r\n                            <div class=\"sport2017vs\">\r\n                                <div>v.s</div>\r\n                                <div class=\"sport2017type\"><%= start[i].gametype %></div>\r\n                            </div>\r\n                            <div class=\"sport2017away\">\r\n                                <div><%= start[i].away.name %></div>\r\n                                <div class=\"sport2017score\"><%= start[i].away.score %></div>\r\n                            </div>\r\n                            <div class=\"sport2017pic\"><img src=\"<%= start[i].away.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n                            <div class=\"sport2017tip\">直播中</div>\r\n                        </div>\r\n                        <div class=\"sport2017-f\">\r\n                        \t<% if(start[i].url.live !=\"\") {%>\r\n                        \t<a href=\"<%= start[i].url.live %>\" target=\"_blank\" class=\"live-link\">直播</a>\r\n                        \t<%}%>\r\n                        \t<% if(start[i].url.stat !=\"\") {%>\r\n                        \t<a href=\"<%= start[i].url.stat %>\" target=\"_blank\" class=\"live-data\">数据</a>\r\n                        \t<%}%>\r\n                        </div>\r\n                    </div>\r\n    <%}%>\r\n\r\n    \r\n<%}%>\r\n</div>\r\n<div id=\"sport2017EndList\" class=\"sport2017-list none\">\r\n    <%  for (var i=0;i<end.length;i++){ %>\r\n        <% if(end[i].status==\"2\"){%>\r\n             \r\n<div class=\"sport2017-item sport2017-end\">\r\n    <div class=\"sport2017-content\">\r\n        <div class=\"sport2017pic\"><img src=\"<%= end[i].home.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n        <div class=\"sport2017home\">\r\n            <div><%= end[i].home.name %></div>\r\n            <div class=\"sport2017score\"><%= end[i].home.score %></div></div>\r\n        <div class=\"sport2017vs\">\r\n            <div>v.s</div>\r\n            <div class=\"sport2017type\"><%= end[i].gametype %></div>\r\n        </div>\r\n        <div class=\"sport2017away\">\r\n            <div><%= end[i].away.name %></div>\r\n            <div class=\"sport2017score\"><%= end[i].away.score %></div></div>\r\n        <div class=\"sport2017pic\"><img src=\"<%= end[i].away.pic %>\" width=\"30\" height=\"30\" alt=\"\" /></div>\r\n        <div class=\"sport2017tip\">已结束</div></div>\r\n    <div class=\"sport2017-f\">\r\n    \t<%if(end[i].url.photos !='') {%>\r\n    \t<a href=\"<%= end[i].url.photos %>\" target=\"_blank\" class=\"end-link\" <%= (end[i].url.stat =='')&&(end[i].url.stat =='')?\"style='padding-right:0'\":\"\"%>>图集</a>\r\n    \t<%}%>\r\n    \t<%if(end[i].url.stat !='') {%>\r\n    \t<a href=\"<%= end[i].url.stat %>\" target=\"_blank\" class=\"end-data\" <%= (end[i].url.photos =='')&&(end[i].url.news =='')?\"style='padding-right:0'\":\"\"%>>数据</a>\r\n    \t<%}%>\r\n    \t<%if(end[i].url.news !='') {%>\r\n        <a href=\"<%= end[i].url.news %>\" target=\"_blank\" class=\"end-result\" <%= (end[i].url.photos =='')&&(end[i].url.stat =='')?\"style='padding-right:0'\":\"\"%>>战报</a>\r\n        <%}%>\r\n    </div>\r\n</div>\r\n        <%}%>\r\n    <%}%>\r\n</div>\r\n</div>\r\n\r\n\r\n  ";

/***/ }
/******/ ]);