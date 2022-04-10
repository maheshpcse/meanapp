function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\" [ngClass]=\"{'page-container': spinner === true}\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"container\">\n                <div class=\"row\" id=\"main\">\n                    <div class=\"col-md-4 offset-4\">\n                        <form #loginForm=\"ngForm\">\n                            <p class=\"text-center title\">Login</p>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"userInputName\" id=\"userInputId\" placeholder=\"Enter email or username\" [(ngModel)]=\"userInput\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"password\" name=\"pwdName\" id=\"pwdId\" placeholder=\"Enter password\" [(ngModel)]=\"password\" required>\n                            </div>\n                            <br>\n                            <div class=\"form-group\">\n                                <input class=\"form-control offset-4\" type=\"button\" value=\"Login\" (click)=\"loginUser()\">\n                            </div>\n                        </form>\n                        <div class=\"text-center\">\n                            New User?\n                            <a [routerLink]=\"['/signup']\" class=\"sub-link\">Sign Up</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"loader\" *ngIf=\"spinner\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/access/signup/signup.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access/signup/signup.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\" [ngClass]=\"{'page-container': spinner === true}\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"container\">\n                <div class=\"row\" id=\"main\">\n                    <div class=\"col-md-4 offset-4\">\n                        <form #signupForm=\"ngForm\">\n                            <p class=\"text-center title\">Sign Up</p>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"firstName\" id=\"firstNameId\" placeholder=\"Enter fullname\" [(ngModel)]=\"fullName\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"emailName\" id=\"emailId\" placeholder=\"Enter email\" [(ngModel)]=\"email\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"text\" name=\"userName\" id=\"userId\" placeholder=\"Enter username\" [(ngModel)]=\"username\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"number\" name=\"mobileName\" id=\"mobileId\" placeholder=\"Enter mobile number\" [(ngModel)]=\"mobileNumber\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"password\" name=\"pwdName\" id=\"pwdId\" placeholder=\"Enter password\" [(ngModel)]=\"password\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" type=\"password\" name=\"confirmpwdName\" id=\"confirmpwdId\" placeholder=\"Enter Confirm password\" [(ngModel)]=\"confirmPassword\" required>\n                            </div>\n                            <br>\n                            <div class=\"form-group\">\n                                <input class=\"form-control offset-4\" type=\"button\" value=\"Submit\" (click)=\"signupUser()\">\n                            </div>\n                        </form>\n                        <div class=\"text-center\">\n                            Already a user?\n                            <a [routerLink]=\"['/login']\" class=\"sub-link\">Login</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"loader\" *ngIf=\"spinner\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-forms/add-forms.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-forms/add-forms.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddFormsAddFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-4\">\n            <div class=\"card add-card\" (click)=\"onAddAction('beautician')\">\n                <p class=\"text-center\">ADD BEAUTICIAN</p>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card add-card\" (click)=\"onAddAction('beautyparlour')\">\n                <p class=\"text-center\">ADD BEAUTY PARLOUR</p>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card add-card\" (click)=\"onAddAction('beautyservices')\">\n                <p class=\"text-center\">ADD BEAUTY SERVICES</p>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-9\">\n            <p class=\"titles\">\n                Hi <b>{{ fullName }}</b>, Welcome To\n                <span class=\"sub-titles\">Online Beautician Booking System</span>\n            </p>\n            <hr />\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"alerts-data\">\n                <span class=\"alerts-info\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-bell-o notify\" aria-hidden=\"false\"></i>\n                </span>\n                <div class=\"dropdown-menu dropdown-menu-right notify-dropdown\" aria-labelledby=\"dropdownMenuButton\">\n                    <div class=\"page-content page-container\" id=\"page-content\">\n                        <div class=\"padding\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"list list-row block\">\n                                        <div class=\"list-item\" data-id=\"19\">\n                                            <div><a href=\"#\" class=\"list-item-link\" data-abc=\"true\"><span class=\"w-48 avatar gd-warning\">S</span></a></div>\n                                            <div class=\"flex\"> <a href=\"#\" class=\"item-author text-color\" data-abc=\"true\">Sam Kuran</a>\n                                                <div class=\"item-except text-muted text-sm h-1x\">For what reason would it be advisable for me to think about business content?</div>\n                                            </div>\n                                            <div class=\"no-wrap\">\n                                                <div class=\"item-date text-muted text-sm d-none d-md-block\">13/12 18</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"list-item\" data-id=\"7\">\n                                            <div><a href=\"#\" class=\"list-item-link\" data-abc=\"true\"><span class=\"w-48 avatar gd-primary\"><img src=\"https://img.icons8.com/color/48/000000/administrator-male.png\" alt=\".\"></span></a></div>\n                                            <div class=\"flex\"> <a href=\"#\" class=\"item-author text-color\" data-abc=\"true\">Kinley Adolf</a>\n                                                <div class=\"item-except text-muted text-sm h-1x\">For what reason would it be advisable for me to think about business content?</div>\n                                            </div>\n                                            <div class=\"no-wrap\">\n                                                <div class=\"item-date text-muted text-sm d-none d-md-block\">21 July</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"list-item\" data-id=\"17\">\n                                            <div><a href=\"#\" class=\"list-item-link\" data-abc=\"true\"><span class=\"w-48 avatar gd-warning\">H</span></a></div>\n                                            <div class=\"flex\"> <a href=\"#\" class=\"item-author text-color\" data-abc=\"true\">Velden Kamut</a>\n                                                <div class=\"item-except text-muted text-sm h-1x\">For what reason would it be advisable for me to think about business content?</div>\n                                            </div>\n                                            <div class=\"no-wrap\">\n                                                <div class=\"item-date text-muted text-sm d-none d-md-block\">13/3/19</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"list-item\" data-id=\"16\">\n                                            <div><a href=\"#\" class=\"list-item-link\" data-abc=\"true\"><span class=\"w-48 avatar gd-info\">F</span></a></div>\n                                            <div class=\"flex\"> <a href=\"#\" class=\"item-author text-color\" data-abc=\"true\">Stuart Kim</a>\n                                                <div class=\"item-except text-muted text-sm h-1x\">For what reason would it be advisable for me to think about business content?</div>\n                                            </div>\n                                            <div class=\"no-wrap\">\n                                                <div class=\"item-date text-muted text-sm d-none d-md-block\">03/1/19</div>\n                                            </div>\n                                        </div>\n                                        <div class=\"list-item\" data-id=\"4\">\n                                            <div><a href=\"#\" class=\"list-item-link\" data-abc=\"true\"><span class=\"w-48 avatar gd-success\"><img src=\"https://img.icons8.com/color/48/000000/guest-male.png\" alt=\".\"></span></a></div>\n                                            <div class=\"flex\"> <a href=\"#\" class=\"item-author text-color\" data-abc=\"true\">Simply Fry</a>\n                                                <div class=\"item-except text-muted text-sm h-1x\">For what reason would it be advisable for me to think about business content?</div>\n                                            </div>\n                                            <div class=\"no-wrap\">\n                                                <div class=\"item-date text-muted text-sm d-none d-md-block\">2 hours ago</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"view-link text-center\">\n                            <a>View All Notifications</a>\n                        </div>\n                    </div>\n                </div>\n                <span class=\"alerts-info\">\n                    <i class=\"fa fa-commenting-o\" aria-hidden=\"false\"></i>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"!spinner\">\n        <div class=\"col-md-3\">\n            <div class=\"card card-one\">\n                <div class=\"div1\">\n                    <p>USERS</p>\n                    <span><i class=\"fa fa-user-o\" aria-hidden=\"false\"></i></span>\n                </div>\n                <hr>\n                <p class=\"p1 text-center\">{{allData.length ? allData[0] : 0}}</p>\n            </div>\n        </div>\n        <div class=\"col-md-3 left-card\">\n            <div class=\"card card-one\">\n                <div class=\"div1\">\n                    <p>BEAUTICIANS</p>\n                    <span><i class=\"fa fa-users\" aria-hidden=\"false\"></i></span>\n                </div>\n                <hr>\n                <p class=\"p1 text-center\">{{allData.length ? allData[1] : 0}}</p>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"card card-two\">\n                <div class=\"div2\">\n                    <p>BEAUTY PARLOURS</p>\n                    <span><i class=\"fa fa-building-o\" aria-hidden=\"false\"></i></span>\n                </div>\n                <hr>\n                <p class=\"p2 text-center\">{{allData.length ? allData[2] : 0}}</p>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"card card-two\">\n                <div class=\"div2\">\n                    <p>BEAUTY SERVICES</p>\n                    <span><i class=\"fa fa-server\" aria-hidden=\"false\"></i></span>\n                </div>\n                <hr>\n                <p class=\"p2 text-center\">{{allData.length ? allData[3] : 0}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"spinner\">\n        <div class=\"col-md-3\" [ngClass]=\"{'left-card' : item === 2}\" *ngFor=\"let item of [1,2,3,4]; let i=index;\">\n            <div class=\"card\" [ngClass]=\"item <= 2 ? 'card-one' : 'card-two'\">\n                <div [ngClass]=\"item <= 2 ? 'div1' : 'div2'\">\n                    <p *ngIf=\"!spinner\">USERS</p>\n                    <span *ngIf=\"!spinner\"><i class=\"fa fa-user-o\" aria-hidden=\"false\"></i></span>\n                    <p class=\"box1 shine\" *ngIf=\"spinner\"></p>\n                    <span class=\"box2 shine mt-\" *ngIf=\"spinner\"></span>\n                </div>\n                <hr>\n                <div class=\"text-center\" *ngIf=\"spinner\">\n                    <p class=\"box shine\" [ngClass]=\"item <= 2 ? 'p1' : 'p2'\"></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-profile/admin-profile.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-profile/admin-profile.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminProfileAdminProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-4 img-col\">\n            <div class=\"img-view\">\n                <img src=\"../../../assets/images/admin-avatar.png\" alt=\"_profile\"\n                    class=\"img-responsive rounded-image text-center\" width=\"250\" height=\"250\">\n                <p class=\"p1 mt-5 text-center\">Pachapalam Mahesh</p>\n                <p class=\"p2 mt-2 text-center\">master</p>\n            </div>\n        </div>\n        <div class=\"col-md-4 profile-col\">\n            <p class=\"p3\">Personal Details :</p>\n            <div class=\"profile-view\">\n                <div class=\"card-one\">\n                    <span>maheshpm1599@gmail.com</span>\n                    <span><i class=\"fa fa-envelope\" aria-hidden=\"false\"></i></span>\n                </div>\n                <div class=\"card-two mt-3\">\n                    <span>+91 8886197968</span>\n                    <span><i class=\"fa fa-phone\" aria-hidden=\"false\"></i></span>\n                </div>\n                <div class=\"card-three mt-3\">\n                    <span>BEAUTICIAN</span>\n                    <span><i class=\"fa fa-user-secret\" aria-hidden=\"false\"></i></span>\n                </div>\n                <div class=\"card-three mt-3\">\n                    <span>Active</span>\n                    <span><i class=\"fa fa-exclamation-circle\" aria-hidden=\"false\"></i></span>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 service-col\">\n            <p class=\"p4\">Service Details :</p>\n            <div id=\"accordion\" class=\"myaccordion\">\n                <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                        <h2 class=\"mb-0\">\n                            <button class=\"d-flex align-items-center justify-content-between btn btn-link collapsed\"\n                                data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\"\n                                aria-controls=\"collapseOne\">\n                                Beautician Form\n                                <span>\n                                    <i class=\"fa fa-angle-down\"></i>\n                                </span>\n                            </button>\n                        </h2>\n                    </div>\n                    <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Add Beautician</li>\n                                <li class=\"list-group-item\">View Beautician</li>\n                                <li class=\"list-group-item\">Update Beautician</li>\n                                <li class=\"list-group-item\">Delete Beautician</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card mt-3\">\n                    <div class=\"card-header\" id=\"headingTwo\">\n                        <h2 class=\"mb-0\">\n                            <button class=\"d-flex align-items-center justify-content-between btn btn-link collapsed\"\n                                data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\n                                aria-controls=\"collapseTwo\">\n                                Beauty Parlour Form\n                                <span>\n                                    <i class=\"fa fa-angle-down\"></i>\n                                </span>\n                            </button>\n                        </h2>\n                    </div>\n                    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Add Beauty Parlour</li>\n                                <li class=\"list-group-item\">View Beauty Parlour</li>\n                                <li class=\"list-group-item\">Update Beauty Parlour</li>\n                                <li class=\"list-group-item\">Delete Beauty Parlour</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card mt-3\">\n                    <div class=\"card-header\" id=\"headingThree\">\n                        <h2 class=\"mb-0\">\n                            <button class=\"d-flex align-items-center justify-content-between btn btn-link collapsed\"\n                                data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\"\n                                aria-controls=\"collapseThree\">\n                                Beauty Parlour Services & Sub Services\n                                <span>\n                                    <i class=\"fa fa-angle-down\"></i>\n                                </span>\n                            </button>\n                        </h2>\n                    </div>\n                    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">Add Beauty Parlour Services</li>\n                                <li class=\"list-group-item\">View Beauty Parlour Services</li>\n                                <li class=\"list-group-item\">Update Beauty Parlour Services</li>\n                                <li class=\"list-group-item\">Delete Beauty Parlour Services</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminSettingsAdminSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<p class=\"page-title\">Update Admin Profile && Information settings :</p>\n\t\t\t<div class=\"accordion\" id=\"accordionExample\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\" id=\"headingOne\">\n\t\t\t\t\t\t<h2 class=\"clearfix mb-0\">\n\t\t\t\t\t\t\t<a class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"><i class=\"fa fa-chevron-circle-down\"></i> CHANGE USER PROFILE</a>\t\t\t\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group col-md-9\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" name=\"fileName\" id=\"fileId\" required>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-action-upload ml-2\" type=\"submit\">Upload</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\" id=\"headingTwo\">\n\t\t\t\t\t\t<h2 class=\"mb-0\">\n\t\t\t\t\t\t\t<a class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\"><i class=\"fa fa-chevron-circle-down\"></i> CHANGE USER DETAILS</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstname\" id=\"firstnameId\" placeholder=\"Enter fullname\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" id=\"usernameId\" placeholder=\"Enter username\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"emailname\" id=\"emailId\" placeholder=\"Enter email address\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"phonenumber\" id=\"phonenumberId\" placeholder=\"Enter phone number\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group col-md-6 mt-3\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-action-cancel\" type=\"submit\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-action-update ml-2\" type=\"submit\">Update</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-header\" id=\"headingThree\">\n\t\t\t\t\t\t<h2 class=\"mb-0\">\n\t\t\t\t\t\t\t<a class=\"btn btn-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\"><i class=\"fa fa-chevron-circle-down\"></i> CHANGE USER PASSWORD</a>                     \n\t\t\t\t\t\t</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"pwdName\" id=\"pwdNameId\" placeholder=\"Enter new password\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"phonenumber\" id=\"phonenumberId\" placeholder=\"Enter confirm password\" required>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group col-md-6 mt-3\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-action-cancel\" type=\"submit\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-action-update ml-2\" type=\"submit\">Update</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<p class=\"page-title\">Alerts && Notifications :</p>\n\t\t\t<div class=\"div1\">\n\t\t\t\t<p>Latest Notifications :</p>\n\t\t\t\t<button class=\"btn btn-action-view\">View All Notifications</button>\n\t\t\t</div>\n\t\t\t<ul class=\"timeline\">\n\t\t\t\t<li>\n\t\t\t\t\t<a target=\"_blank\">New Web Design</a>\n\t\t\t\t\t<a class=\"float-right\">21 March, 2014</a>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>\n\t\t\t\t\t<button class=\"btn btn-action-read\">Read More</button>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">21 000 Job Seekers</a>\n\t\t\t\t\t<a class=\"float-right\">4 March, 2014</a>\n\t\t\t\t\t<p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>\n\t\t\t\t\t<button class=\"btn btn-action-read\">Read More</button>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\">Awesome Employers</a>\n\t\t\t\t\t<a class=\"float-right\">1 April, 2014</a>\n\t\t\t\t\t<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>\n\t\t\t\t\t<button class=\"btn btn-action-read\">Read More</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beautician-form/beautician-form.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beautician-form/beautician-form.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminBeauticianFormBeauticianFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\" *ngIf=\"viewPage === 'form'\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"titles\">\n                <p>Add Beautician</p>\n                <button class=\"btn btn-action\" (click)=\"onClickView('table')\">\n                    <i class=\"fa fa-angle-left\"></i>\n                    <span class=\"ml-2\">Back</span>\n                </button>\n            </div>\n            <hr>\n        </div>\n        <div class=\"col-md-12\">\n            <form #beauticianForm=\"ngForm\">\n                <p class=\"para1\">Enter Personal Details :</p>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"firstname\">Full Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"firstname\" id=\"firstnameId\"\n                                placeholder=\"Enter fullname\" [(ngModel)]=\"fullName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"username\">User Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"username\" id=\"usernameId\"\n                                placeholder=\"Enter username\" [(ngModel)]=\"userName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"email\">Email Address</label>\n                            <input class=\"form-control\" type=\"email\" name=\"emailname\" id=\"emailId\"\n                                placeholder=\"Enter email address\" [(ngModel)]=\"emailName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"password\">Password</label>\n                            <div class=\"input-group\">\n                                <button class=\"btn btn-action-generate\" type=\"submit\"\n                                    (click)=\"generatePassword()\">Generate Password</button>\n                                <input class=\"form-control\" type=\"password\" name=\"pwdName\" id=\"pwdId\"\n                                    placeholder=\"i.e. abcxyz\" [(ngModel)]=\"passWord\" disabled required>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"mobilenumber\">Phone Number</label>\n                            <input class=\"form-control\" type=\"number\" name=\"phoneNum\" id=\"phoneNumId\"\n                                placeholder=\"Enter mobile number\" [(ngModel)]=\"mobileNumber\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"profile\">Profile</label>\n                            <input class=\"form-control\" type=\"file\" name=\"profileName\" id=\"profileId\" accept=\"*\"\n                                #fileInput (change)=\"selectedFile($event)\" required>\n                        </div>\n                    </div>\n                </div>\n                <p class=\"para1 mt-3\">Enter Service Details :</p>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"age\">Age</label>\n                            <input type=\"number\" class=\"form-control\" name=\"ageName\" id=\"ageId\" [(ngModel)]=\"age\"\n                                placeholder=\"Enter age\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"experience\">Experience</label>\n                            <input type=\"number\" class=\"form-control\" name=\"expName\" id=\"expId\" [(ngModel)]=\"experience\"\n                                placeholder=\"Enter experience\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"rating\">Rating</label>\n                            <select class=\"form-control select\" name=\"ratingName\" id=\"ratingId\" [(ngModel)]=\"rating\"\n                                required>\n                                <option value=\"null\" disabled>Select Rating :</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"service\">Service Name</label>\n                            <div id=\"accordion\">\n                                <div class=\"card\" *ngFor=\"let item of servicesList; let j=index;\">\n                                    <div class=\"card-header label-title\"\n                                        [ngClass]=\"{'isActive': selectAll[j] === true}\">\n                                        <input class=\"form-control col-md-1\" type=\"checkbox\" name=\"serviceName-{{j}}\"\n                                            id=\"serviceId-{{j}}\" (input)=\"onInputAction(item, j, $event.target.checked)\"\n                                            [checked]=\"selectAll[j]\">\n                                        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\"\n                                            (click)=\"onCollapseBody(item, j)\">\n                                            {{ item.service_name | titlecase }}\n                                        </a>\n                                    </div>\n                                    <div id=\"collapseOne-{{j}}\" class=\"collapse-{{j}}\" data-parent=\"#accordion\"\n                                        [ngClass]=\"{'show': j===currentIndex}\">\n                                        <div class=\"card-body\">\n                                            <angular2-multiselect class=\"form-control col-md-4\"\n                                                [data]=\"allSubServices[j]\" [(ngModel)]=\"selectedSubServices[j]\"\n                                                [ngModelOptions]=\"{standalone: true}\" [settings]=\"subSettings[j]\"\n                                                (onSelect)=\"onSubServiceSelect($event)\"\n                                                (onDeSelect)=\"OnSubServiceDeSelect($event)\"\n                                                (onSelectAll)=\"onSelectAllSubService($event)\"\n                                                (onDeSelectAll)=\"onDeSelectAllSubService($event)\">\n                                            </angular2-multiselect>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"container\">\n                    <div class=\"row mt-5\">\n                        <div class=\"form-group col-md-4\">\n                            <button class=\"btn btn-action-cancel\" type=\"submit\" (click)=\"onClickView('table')\">Cancel</button>\n                            <button class=\"btn btn-action-add ml-2\" type=\"submit\" (click)=\"saveBeauticianData()\"\n                                [disabled]=\"beauticianForm.invalid || setDisableModal()\">{{btnType |\n                                titlecase}}</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\" *ngIf=\"viewPage === 'table'\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"titles\">\n                <div class=\"main-title\">\n                    <p>Beauticians List</p>\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"false\"></i></span>\n                    <button class=\"btn btn-action-addnew ml-3\" (click)=\"onClickView('form')\">\n                        <i class=\"fa fa-plus\" aria-hidden=\"false\"></i>\n                        <span class=\"ml-2\">Add New</span>\n                    </button>\n                </div>\n                <div class=\"search-fields\">\n                    <button class=\"btn btn-action-back mr-2\" (click)=\"onActionBack()\">\n                        <span><i class=\"fa fa-angle-left\" aria-hidden=\"false\"></i> Back</span>\n                    </button>\n                    <select class=\"form-control width-50\" name=\"statusName\" id=\"statusId\" [(ngModel)]=\"statusQuery\"\n                        (change)=\"onSelectStatus()\">\n                        <option value=\"null\">All Status</option>\n                        <option value=\"1\">Active</option>\n                        <option value=\"0\">In Active</option>\n                    </select>\n                    <div class=\"form-group input-group ml-2\">\n                        <input class=\"form-control width-100\" type=\"text\" name=\"searchName\" id=\"searchId\"\n                            placeholder=\"Quick search...\" [(ngModel)]=\"searchQuery\" (input)=\"onInputSearch()\">\n                        <button class=\"btn btn-action-search\" type=\"submit\" (click)=\"onSearchData()\">\n                            <i class=\"fa fa-search\" aria-hidden=\"false\" *ngIf=\"!searchQuery || searchQuery === ''\"></i>\n                            <i class=\"fa fa-check\" aria-hidden=\"false\" *ngIf=\"searchQuery || searchQuery !== ''\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <table class=\"table table-hover\" id=\"main\">\n                <thead class=\"thead-light table-head\">\n                    <tr>\n                        <th>Full Name</th>\n                        <th>User Name</th>\n                        <th>Email Address</th>\n                        <th>Phone Number</th>\n                        <th>Status</th>\n                        <th class=\"text-center\">Action</th>\n                    </tr>\n                </thead>\n                <tbody class=\"table-body\" *ngIf=\"!spinner\">\n                    <tr *ngFor=\"let item of beauticians; let i=index;\">\n                        <td class=\"table-profile\">\n                            <img src=\"../../../assets/images/admin-avatar.png\" alt=\"_profilepic\"\n                                class=\"img-responsive rounded-image\" width=\"50\" height=\"50\">\n                            <span class=\"ml-2\">{{ item.fullname |titlecase }}</span>\n                        </td>\n                        <td>{{ item.username | titlecase }}</td>\n                        <td>{{ item.email }}</td>\n                        <td>{{ item.mobile }}</td>\n                        <td class=\"bg-status\">\n                            <span *ngIf=\"item.status === 1\" class=\"is-active\"><i class=\"fa fa-check-circle-o\"\n                                    aria-hidden=\"false\"></i> Active</span>\n                            <span *ngIf=\"item.status === 0\" class=\"is-inactive\"><i class=\"fa fa-circle\"\n                                    aria-hidden=\"false\"></i> Inactive</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <button class=\"btn btn-action-view\" type=\"submit\" *ngIf=\"item.status === 1\"\n                                (click)=\"onClickAction(item, i, 'view')\">\n                                <i class=\"fa fa-eye\" aria-hidden=\"false\"></i>\n                            </button>\n                            <button class=\"btn btn-action-update ml-2\" type=\"submit\" *ngIf=\"item.status === 1\"\n                                (click)=\"onClickAction(item, i, 'update')\">\n                                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"false\"></i>\n                            </button>\n                            <button class=\"btn btn-action-delete ml-2\" type=\"submit\" *ngIf=\"item.status === 1\"\n                                data-toggle=\"modal\" data-target=\"#deleteRestore\"\n                                (click)=\"onClickAction(item, i, 'delete')\">\n                                <i class=\"fa fa-trash\" aria-hidden=\"false\"></i>\n                            </button>\n                            <button class=\"btn btn-action-restore\" type=\"submit\" *ngIf=\"item.status === 0\"\n                                data-toggle=\"modal\" data-target=\"#deleteRestore\"\n                                (click)=\"onClickAction(item, i, 'restore')\">\n                                <i class=\"fa fa-undo\" aria-hidden=\"false\"></i>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n                <tbody class=\"table-body\" *ngIf=\"spinner\">\n                    <tr *ngFor=\"let item of [1,2,3,4,5,6]; let i=index;\">\n                        <td><span class=\"box shine\"></span></td>\n                        <td><span class=\"box shine\"></span></td>\n                        <td><span class=\"box shine\"></span></td>\n                        <td><span class=\"box shine\"></span></td>\n                        <td><span class=\"box shine\"></span></td>\n                        <td class=\"text-center\"><span class=\"box shine\"></span></td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <td colspan=\"6\">\n                            <div class=\"pagination_rounded mt-5\" *ngIf=\"beauticians.length !== 0 && totalPages.length !== 0\">\n                                <ul *ngFor=\"let item of totalPages; let i=index\">\n                                    <li [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\"\n                                        *ngIf=\"item === 'Prev'\"> <a class=\"prev\"> <i class=\"fa fa-angle-left\"\n                                                aria-hidden=\"true\"></i> Prev </a> </li>\n                                    <li class=\"hidden-xs\" [ngClass]=\"{'active': page === item}\" (click)=\"getPage(item)\"\n                                        *ngIf=\"item !== 'Prev' && item !== 'Next'\"><a>{{item}}</a> </li>\n                                    <li [ngClass]=\"{'isDisable': page === temptotalPages.length}\"\n                                        (click)=\"getPage(page + 1)\" *ngIf=\"item === 'Next'\"><a class=\"next\"> Next <i\n                                                class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a> </li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n        <div class=\"col-md-12\">\n            <div id=\"mySidenav\" class=\"sidenav\">\n                <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n                <p class=\"text-center add-user-title\">View Beautician Details</p>\n                <hr>\n                <div class=\"profile-details\">\n                    <img src=\"../../../assets/images/admin-avatar.png\" alt=\"_profile\"\n                        class=\"img-responsive rounded-image text-center\" width=\"100\" height=\"100\">\n                    <p class=\"p1 text-center mt-3\">{{ viewItem?.fullname | titlecase }}</p>\n                    <p class=\"p2 text-center\">{{ viewItem?.username }}</p>\n                </div>\n                <hr>\n                <p class=\"para2\">Personal Details :</p>\n                <div>\n                    <table class=\"table table-borderless table-data\">\n                        <tbody>\n                            <tr class=\"tr1\">\n                                <th><i class=\"fa fa-user-secret\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Age</th>\n                                <td>{{ viewItem?.age }}</td>\n                            </tr>\n                            <tr class=\"tr2\">\n                                <th><i class=\"fa fa-envelope\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Email</th>\n                                <td>{{ viewItem?.email }}</td>\n                            </tr>\n                            <tr class=\"tr3\">\n                                <th><i class=\"fa fa-phone\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Mobile</th>\n                                <td>{{ viewItem?.mobile }}</td>\n                            </tr>\n                            <tr class=\"tr4\">\n                                <th><i class=\"fa fa-user-secret\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Role</th>\n                                <td>{{ viewItem?.role | uppercase }}</td>\n                            </tr>\n                            <tr class=\"tr5\">\n                                <th><i class=\"fa fa-exclamation-circle\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Status</th>\n                                <td>{{ viewItem?.status === 0 ? 'Active' : 'Inactive' }}</td>\n                            </tr>\n                            <tr class=\"tr6\">\n                                <th><i class=\"fa fa-briefcase\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Experience</th>\n                                <td>{{ viewItem?.experience}}</td>\n                            </tr>\n                            <tr class=\"tr7\">\n                                <th><i class=\"fa fa-star-half-o\" aria-hidden=\"false\"></i></th>\n                                <th class=\"th1\">Rating</th>\n                                <td>\n                                    <span class=\"fa fa-star\" [ngClass]=\"{'checked': item <= viewItem?.rating}\" *ngFor=\"let item of [1,2,3,4,5]; let i=index\"></span>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <p class=\"para3\">Service Details :</p>\n                <div class=\"div2 p-2\" *ngFor=\"let item of SUBSERVICES; let i=index;\">\n                    <span class=\"ml-2\">{{ item }}</span>\n                </div>\n                <!-- <div class=\"div2 p-2\">\n                    <ul class=\"list-group list-group-flush\" *ngFor=\"let item of SUBSERVICES; let i=index;\">\n                        <li class=\"list-group-item\">{{ item }}</li>\n                        <br>\n                    </ul>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- delete or restore beautician confirmation Modal -->\n<div class=\"modal fade\" id=\"deleteRestore\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteRestoreModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"deleteRestoreModalLabel\">{{ viewItem.status === 1 ? 'Delete' : 'Restore' }}\n                    beautician confirmation ?</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are you sure, you want to {{ viewItem.status === 1 ? 'delete' : 'restore' }} this beautician ?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-action-cancel\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-action-add\" (click)=\"deleteRestoreBeautician()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminBeautyParlourFormBeautyParlourFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"titles\">\n                <p>Add Beauty Parlour</p>\n                <button class=\"btn btn-action\" (click)=\"onActionBack()\">\n                    <i class=\"fa fa-angle-left\"></i>\n                    <span class=\"ml-2\">Back</span>\n                </button>\n            </div>\n            <hr>\n        </div>\n        <div class=\"col-md-12\">\n            <form #beautyParlourForm=\"ngForm\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"owner\">Owner Name</label>\n                            <select class=\"form-control\" name=\"ownerName\" id=\"ownerId\" [(ngModel)]=\"userId\" required>\n                                <option value=\"null\" disabled>Select Owner :</option>\n                                <option *ngFor=\"let item of usersList; let i=index\" [value]=\"item.user_id\">{{\n                                    item.fullname }}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"beauticianname\">Beautician Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"beauticianname\" id=\"beauticiannameId\"\n                                placeholder=\"Enter beautician name\" [(ngModel)]=\"beauticianName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"experience\">Experience</label>\n                            <input class=\"form-control\" type=\"number\" name=\"expName\" id=\"expId\"\n                                placeholder=\"Enter experience\" [(ngModel)]=\"experience\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"parlourname\">Beauty Parlour Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"parlournamename\" id=\"parlournameId\"\n                                placeholder=\"Enter beauty parlour name\" [(ngModel)]=\"parlourName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"lawfirmname\">Law Firm Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"lawfirmname\" id=\"lawfirmnameId\"\n                                placeholder=\"Enter law firm name\" [(ngModel)]=\"lawFirmName\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"place\">Address</label>\n                            <input class=\"form-control\" type=\"text\" name=\"placeName\" id=\"palceId\"\n                                placeholder=\"Enter address\" [(ngModel)]=\"parlourAddress\" required>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"rating\">Rating</label>\n                            <select class=\"form-control\" name=\"ratingName\" id=\"ratingId\" [(ngModel)]=\"rating\" required>\n                                <option value=\"null\" disabled>Select Rating :</option>\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                            </select>\n                        </div>\n                        <!-- <div class=\"form-group col-md-4\">\n                            <label for=\"service\">Service Name</label>\n                            <angular2-multiselect class=\"form-control\" [data]=\"servicesList\"\n                                [(ngModel)]=\"selectedServices\" [ngModelOptions]=\"{standalone: true}\"\n                                [settings]=\"servicesSettings\" (onSelect)=\"onSerivceSelect($event)\"\n                                (onDeSelect)=\"OnSerivceDeSelect($event)\" (onSelectAll)=\"onSelectAllSerivce($event)\"\n                                (onDeSelectAll)=\"onDeSelectAllSerivce($event)\"></angular2-multiselect>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"subservice\">Sub Service Name</label>\n                            <angular2-multiselect class=\"form-control\" [data]=\"subServicesList\"\n                                [(ngModel)]=\"selectedSubServices\" [ngModelOptions]=\"{standalone: true}\"\n                                [settings]=\"subServicesSettings\" (onSelect)=\"onSubServiceSelect($event)\"\n                                (onDeSelect)=\"OnSubServiceDeSelect($event)\"\n                                (onSelectAll)=\"onSelectAllSubService($event)\"\n                                (onDeSelectAll)=\"onDeSelectAllSubService($event)\"></angular2-multiselect>\n                        </div> -->\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"starttime\">Start Time</label>\n                            <p-calendar class=\"form-control\" [(ngModel)]=\"selectStartTime\" [ngModelOptions]=\"{standalone: true}\" [showIcon]=\"true\" [timeOnly]=\"true\" inputId=\"timeonly\" placeholder=\"Select Start Time\" (onSelect)=\"onInputEventStartTime()\"></p-calendar>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"endtime\">End Time</label>\n                            <p-calendar class=\"form-control\" [(ngModel)]=\"selectEndTime\" [ngModelOptions]=\"{standalone: true}\" [showIcon]=\"true\" [timeOnly]=\"true\" inputId=\"timeonly\" placeholder=\"Select End Time\" (onSelect)=\"onInputEventEndTime()\"></p-calendar>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"userslimit\">User Appointments Limit</label>\n                            <input class=\"form-control\" type=\"number\" name=\"limitName\" id=\"limitId\"\n                                placeholder=\"Enter user appointments limit\" [(ngModel)]=\"usersLimit\" required>\n                        </div>\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"service\">Service Name</label>\n                            <div id=\"accordion\">\n                                <div class=\"card\" *ngFor=\"let item of servicesList; let j=index;\">\n                                    <div class=\"card-header label-title\" [ngClass]=\"{'isActive': selectAll[j] === true}\">\n                                        <input class=\"form-control col-md-1\" type=\"checkbox\" name=\"serviceName-{{j}}\" id=\"serviceId-{{j}}\" (input)=\"onInputAction(item, j, $event.target.checked)\" [checked]=\"selectAll[j]\">\n                                        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\" (click)=\"onCollapseBody(item, j)\">\n                                            {{ item.service_name | titlecase }}\n                                        </a>\n                                    </div>\n                                    <div id=\"collapseOne-{{j}}\" class=\"collapse-{{j}}\" data-parent=\"#accordion\" [ngClass]=\"{'show': j===currentIndex}\">\n                                        <div class=\"card-body\">\n                                            <angular2-multiselect class=\"form-control col-md-4\" [data]=\"allSubServices[j]\"\n                                                [(ngModel)]=\"selectedSubServices[j]\" [ngModelOptions]=\"{standalone: true}\"\n                                                [settings]=\"subSettings[j]\" (onSelect)=\"onSubServiceSelect($event)\"\n                                                (onDeSelect)=\"OnSubServiceDeSelect($event)\"\n                                                (onSelectAll)=\"onSelectAllSubService($event)\"\n                                                (onDeSelectAll)=\"onDeSelectAllSubService($event)\"></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-5\">\n                        <div class=\"form-group col-md-4\">\n                            <button class=\"btn btn-action-cancel\" type=\"submit\" (click)=\"onActionBack()\">Cancel</button>\n                            <button class=\"btn btn-action-add ml-2\" type=\"submit\" (click)=\"saveBeautyParlourData()\"\n                                [disabled]=\"beautyParlourForm.invalid || setDisableModal()\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-services-form/beauty-services-form.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-services-form/beauty-services-form.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminBeautyServicesFormBeautyServicesFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"titles\">\n                <p>Add Beauty Parlour Services</p>\n                <button class=\"btn btn-action\" (click)=\"onActionBack()\">\n                    <i class=\"fa fa-angle-left\"></i>\n                    <span class=\"ml-2\">Back</span>\n                </button>\n            </div>\n            <hr>\n        </div>\n        <div class=\"col-md-12\">\n            <form #beautyServiceForm=\"ngForm\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-4\">\n                            <label for=\"servicename\">Service Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"servicename\" id=\"servicenameId\" placeholder=\"Enter service name\" [(ngModel)]=\"serviceName\" required>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <form [formGroup]=\"beautySubServiceForm\" enctype=\"multipart/form-data\" method=\"POST\">\n                                <div formArrayName=\"serivcesArr\">\n                                    <div class=\"row\" *ngFor=\"let item of beautySubServiceForm['controls']['serivcesArr']['controls']; let i=index\"\n                                    [formGroupName]=\"i\">\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"subservicename\">Sub Service Name</label>\n                                            <input class=\"form-control\" type=\"text\" name=\"subservicename\" id=\"subservicenameId\" placeholder=\"Enter sub service name\" formControlName=\"subServiceName\" required>\n                                        </div>\n                                        <div class=\"form-group col-md-4\">\n                                            <label for=\"subserviceamount\">Sub Service Amount</label>\n                                            <input class=\"form-control\" type=\"number\" name=\"subserviceamount\" id=\"subserviceamountId\" placeholder=\"Enter sub service amount\" formControlName=\"subServiceAmount\" required>\n                                        </div>\n                                        <div class=\"form-group input-group col-md-2\">\n                                            <button class=\"btn btn-action-plus ml-2\" type=\"submit\" *ngIf=\"beautySubServiceForm['controls']['serivcesArr']['controls'].length <= i+1\"\n                                            (click)=\"addForm(i)\">\n                                                <i class=\"fa fa-plus\" aria-hidden=\"false\"></i>\n                                            </button>\n                                            <button class=\"btn btn-action-minus ml-2\" type=\"submit\" *ngIf=\"beautySubServiceForm['controls']['serivcesArr']['controls'].length > 1\"\n                                                (click)=\"removeForm(i)\">\n                                                <i class=\"fa fa-minus\" aria-hidden=\"false\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    <div class=\"row mt-5\">\n                        <div class=\"form-group col-md-4\">\n                            <button class=\"btn btn-action-cancel\" type=\"submit\" (click)=\"onActionBack()\">Cancel</button>\n                            <button class=\"btn btn-action-add ml-2\" type=\"submit\" (click)=\"saveBeauticianData()\" [disabled]=\"(!serviceName || serviceName === '') || beautySubServiceForm.invalid\">Submit</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-dashboard/beautician-dashboard.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-dashboard/beautician-dashboard.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBeauticianDashboardBeauticianDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <p class=\"titles\">Hi <b>{{fullName}}</b>, Welcome To <span class=\"sub-titles\">Online Beautician Booking System</span></p>\n            <hr>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-reports/beautician-reports.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-reports/beautician-reports.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBeauticianReportsBeauticianReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-8\">\n            <div class=\"container\">\n                <div class=\"titles\">\n                    <p>All User Appointment List</p>\n                    <div class=\"search-fields\">\n                        <select class=\"form-control width-50\" name=\"statusName\" id=\"statusId\" [(ngModel)]=\"statusQuery\"\n                            (change)=\"onSelectStatus()\">\n                            <option value=\"null\">All Status</option>\n                            <option value=\"1\">Active</option>\n                            <option value=\"0\">In Active</option>\n                        </select>\n                        <div class=\"form-group input-group ml-2\">\n                            <input class=\"form-control width-100\" type=\"text\" name=\"searchName\" id=\"searchId\"\n                                placeholder=\"Quick search...\" [(ngModel)]=\"searchQuery\" (input)=\"onInputSearch()\">\n                            <button class=\"btn btn-action-search\" type=\"submit\" (click)=\"onSearchData()\">\n                                <i class=\"fa fa-search\" aria-hidden=\"false\"\n                                    *ngIf=\"!searchQuery || searchQuery === ''\"></i>\n                                <i class=\"fa fa-check\" aria-hidden=\"false\"\n                                    *ngIf=\"searchQuery || searchQuery !== ''\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row\" id=\"main\">\n                    <div class=\"col-md-3\" *ngFor=\"let item of usersList; let i=index\">\n                        <div class=\"card beauty-card\" (click)=\"openNav(item, i)\"\n                            [ngClass]=\"{'active-card': i + 1 == currentIndex && currentIndex + 1}\">\n                            <div class=\"details-card p-0\">\n                                <div class=\"text-center mt-3\">\n                                    <img src=\"../../assets/images/user-avatar.png\" alt=\"_profile\"\n                                        class=\"img-responsive rounded-image\" width=\"50\" height=\"50\">\n                                </div>\n                                <div class=\"title text-center mt-3\">\n                                    <span>{{item.fullname}}</span>\n                                </div>\n                                <div class=\"sub-titles text-center mt-3\">\n                                    <p>{{item.date | date:'yyyy-MM-dd'}}</p>\n                                    <p>{{item.time}}</p>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div id=\"mySidenav\" class=\"sidenav\">\n                            <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n                            <div class=\"text-center appointment-card\">\n                                <span class=\"text-center add-title\">Add/Update Report</span>\n                                <hr>\n                                <div class=\"user-data mt-5\">\n                                    <div class=\"user-name\">\n                                        <img src=\"../../assets/images/user-avatar.png\" alt=\"_profile\"\n                                            class=\"img-responsive rounded-image\" width=\"50\" height=\"50\">\n                                        <p>{{ viewItem?.fullname }}</p>\n                                    </div>\n                                    <div class=\"date-show\">\n                                        <span><i class=\"fa fa-calendar\" aria-hidden=\"false\"></i></span>\n                                        <p>{{ viewItem?.date | date }}</p>\n                                    </div>\n                                </div>\n                                <div class=\"text-center time-show mt-5\">\n                                    <span><i class=\"fa fa-clock-o\" aria-hidden=\"false\"></i></span>\n                                    <p>{{ viewItem?.time }}</p>\n                                </div>\n                                <div class=\"text-center p-3 mt-5\">\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" class=\"form-control amount-input\" name=\"amountName\"\n                                            id=\"amountid\" placeholder=\"Enter the amount\" [(ngModel)]=\"amount\" required>\n                                    </div>\n                                    <div class=\"form-group mt-3\">\n                                        <textarea class=\"form-control\" name=\"billName\" id=\"billid\" cols=\"20\" rows=\"5\"\n                                            placeholder=\"Enter the Bill details here\" [(ngModel)]=\"bills\"\n                                            required></textarea>\n                                    </div>\n                                    <div class=\"form-group mt-5\">\n                                        <button class=\"btn btn-action col-md-9\" type=\"submit\"\n                                            [disabled]=\"!amount || !bills\" (click)=\"saveUserReport()\">SUBMIT</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"usersList.length === 0\">\n                        <p class=\"text-center\">No user appointments list found.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"pagination\" *ngIf=\"usersList.length !== 0\">\n                            <!-- <a>&laquo; Prev</a>\n                            <a class=\"active\">1</a>\n                            <a>2</a>\n                            <a>3</a>\n                            <a>4</a>\n                            <a>5</a>\n                            <a>Next &raquo;</a> -->\n                            <a [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\">&laquo; Prev</a>\n                            <ul class=\"list-group list-group-flush\" *ngFor=\"let item of totalPages; let i=index\">\n                                <li class=\"list-group-item\" [ngClass]=\"{'active': page === item}\"\n                                    (click)=\"getPage(item)\">{{ item }}</li>\n                            </ul>\n                            <a [ngClass]=\"{'isDisable': page === totalPages.length}\" (click)=\"getPage(page + 1)\">Next\n                                &raquo;</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-users/beautician-users.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-users/beautician-users.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBeauticianUsersBeauticianUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-8\">\n            <div class=\"container\">\n                <div class=\"titles\">\n                    <p>All User Bookings List</p>\n                    <div class=\"search-fields\">\n                        <select class=\"form-control width-50\" name=\"statusName\" id=\"statusId\" [(ngModel)]=\"statusQuery\"\n                            (change)=\"onSelectStatus()\">\n                            <option value=\"null\">All Status</option>\n                            <option value=\"1\">Active</option>\n                            <option value=\"0\">In Active</option>\n                        </select>\n                        <div class=\"form-group input-group ml-2\">\n                            <input class=\"form-control width-100\" type=\"text\" name=\"searchName\" id=\"searchId\"\n                                placeholder=\"Quick search...\" [(ngModel)]=\"searchQuery\" (input)=\"onInputSearch()\">\n                            <button class=\"btn btn-action-search\" type=\"submit\" (click)=\"onSearchData()\">\n                                <i class=\"fa fa-search\" aria-hidden=\"false\"\n                                    *ngIf=\"!searchQuery || searchQuery === ''\"></i>\n                                <i class=\"fa fa-check\" aria-hidden=\"false\"\n                                    *ngIf=\"searchQuery || searchQuery !== ''\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row\" id=\"main\">\n                    <!-- (click)=\"openNav(item, i) -->\n                    <div class=\"col-md-3\" *ngFor=\"let item of usersList; let i=index\">\n                        <div class=\"card beauty-card\" (click)=\"openNav(item, i)\"\n                            [ngClass]=\"{'active-card': i + 1 == currentIndex && currentIndex + 1}\">\n                            <div class=\"details-card p-0\">\n                                <div class=\"text-center mt-3\">\n                                    <img src=\"../../assets/images/user-avatar.png\" alt=\"_profile\"\n                                        class=\"img-responsive rounded-image\" width=\"50\" height=\"50\">\n                                </div>\n                                <div class=\"title text-center mt-3\">\n                                    <span>{{item.fullname}}</span>\n                                </div>\n                                <div class=\"sub-titles text-center mt-3\">\n                                    <p>{{item.date | date:'yyyy-MM-dd'}}</p>\n                                    <p>{{item.time}}</p>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                    </div>\n                    <div class=\"col-md-12\" *ngIf=\"usersList.length === 0\">\n                        <p class=\"text-center\">No user bookings list found.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"pagination\" *ngIf=\"usersList.length !== 0\">\n                            <!-- <a>&laquo; Prev</a>\n                            <a class=\"active\">1</a>\n                            <a>2</a>\n                            <a>3</a>\n                            <a>4</a>\n                            <a>5</a>\n                            <a>Next &raquo;</a> -->\n                            <a [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\">&laquo; Prev</a>\n                            <ul class=\"list-group list-group-flush\" *ngFor=\"let item of totalPages; let i=index\">\n                                <li class=\"list-group-item\" [ngClass]=\"{'active': page === item}\"\n                                    (click)=\"getPage(item)\">{{ item }}</li>\n                            </ul>\n                            <a [ngClass]=\"{'isDisable': page === totalPages.length}\" (click)=\"getPage(page + 1)\">Next\n                                &raquo;</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"sidenavlist\">\n                <!-- <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a> -->\n                <p class=\"text-center add-user-title\">Appointment List</p>\n                <hr>\n                <div class=\"p-3\" *ngFor=\"let item of pendingUsers; let i=index\">\n                    <div class=\"users-card p-2\">\n                        <p><img src=\"../../assets/images/user-avatar.png\" alt=\"_profile\"\n                                class=\"img-responsive rounded-image\" width=\"50\" height=\"50\"></p>\n                        <p class=\"title\">{{item.fullname}}</p>\n                        <p>{{item.date | date:'yyyy-MM-dd'}}</p>\n                        <p>{{item.time}}</p>\n                        <p class=\"accept\" (click)=\"onSelectUser(item, 1)\" data-toggle=\"modal\"\n                            data-target=\"#confirmModal\"><i class=\"fa fa-check\" aria-hidden=\"false\"></i></p>\n                        <p class=\"reject\" (click)=\"onSelectUser(item, 0)\" data-toggle=\"modal\"\n                            data-target=\"#confirmModal\"><i class=\"fa fa-close\" aria-hidden=\"false\"></i></p>\n                    </div>\n                </div>\n                <p class=\"text-center\" *ngIf=\"pendingUsers.length == 0\">No pending users found.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- user status update confirmation Modal -->\n<div class=\"modal fade\" id=\"confirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"confirmModalLabel\">User request confirmation</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetForm()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p *ngIf=\"selectStatus === 1\">Are you sure, you want to accept a user request ?</p>\n                <p *ngIf=\"selectStatus === 0\">Are you sure, you want to reject a user request ?</p>\n                <form #reasonForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"reason\">Reason :</label>\n                        <textarea class=\"form-control\" name=\"reasonName\" id=\"reasonId\" cols=\"5\" rows=\"5\" [(ngModel)]=\"description\" placeholder=\"Enter reason\" required></textarea>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-action-cancel\" data-dismiss=\"modal\" (click)=\"resetForm()\">No</button>\n                <button type=\"button\" class=\"btn btn-action-add\" [disabled]=\"reasonForm.invalid\" (click)=\"addRejectUserAppointment()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician/beautician-profile/beautician-profile.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beautician/beautician-profile/beautician-profile.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBeauticianBeauticianProfileBeauticianProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/beauticians-list/beauticians-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/beauticians-list/beauticians-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBeauticiansListBeauticiansListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"container\">\n                <div class=\"titles\">\n                    <p>All Beauticians List</p>\n                    <div class=\"search-fields\">\n                        <select class=\"form-control width-50\" name=\"statusName\" id=\"statusId\" [(ngModel)]=\"statusQuery\" (change)=\"onSelectStatus()\">\n                            <option value=\"null\">All Status</option>\n                            <option value=\"1\">Active</option>\n                            <option value=\"0\">In Active</option>\n                        </select>\n                        <div class=\"form-group input-group ml-2\">\n                            <input class=\"form-control width-100\" type=\"text\" name=\"searchName\" id=\"searchId\" placeholder=\"Quick search...\" [(ngModel)]=\"searchQuery\" (input)=\"onInputSearch()\">\n                            <button class=\"btn btn-action-search\" type=\"submit\" (click)=\"onSearchData()\">\n                                <i class=\"fa fa-search\" aria-hidden=\"false\" *ngIf=\"!searchQuery || searchQuery === ''\"></i>\n                                <i class=\"fa fa-check\" aria-hidden=\"false\" *ngIf=\"searchQuery || searchQuery !== ''\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n                <div class=\"row\" id=\"main\">\n                    <div class=\"col-md-3\" *ngFor=\"let item of beautyParlours;let i=index\">\n                        <div class=\"card beauty-card\" (click)=\"openNav(item, i)\" [ngClass]=\"{'active-card': i + 1 == currentIndex && currentIndex + 1}\">\n                            <span class=\"active-status mr-3 mt-2\" *ngIf=\"item.status === 1\"><i class=\"fa fa-circle\" aria-hidden=\"false\"></i></span>\n                            <span class=\"inactive-status mr-3 mt-2\" *ngIf=\"item.status === 0\"><i class=\"fa fa-circle\" aria-hidden=\"false\"></i></span>\n                            <div class=\"details-card p-0\">\n                                <div class=\"text-center mt-3\">\n                                    <img src=\"../../assets/images/admin-avatar.png\" alt=\"_profile\"\n                                        class=\"img-responsive rounded-image\" width=\"50\" height=\"50\">\n                                </div>\n                                <div class=\"title text-center mt-3\">\n                                    <span>{{item.beautician_name}}</span>\n                                </div>\n                                <div class=\"sub-titles text-center\">\n                                    <p>{{item.experience}} Years</p>\n                                    <p>{{item.parlour_name}}</p>\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div id=\"mySidenav\" class=\"sidenav\">\n                            <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n                            <div class=\"appointment-card\">\n                                <span class=\"text-center add-title\">Add Appointment</span>\n                                <div class=\"text-center mt-5\">\n                                    <img src=\"../../assets/images/admin-avatar.png\" alt=\"_profile\"\n                                        class=\"img-responsive rounded-image\" width=\"100\" height=\"100\">\n                                </div>\n                                <div class=\"title text-center mt-5\">\n                                    <span>Dr {{viewItem?.beautician_name}}</span>\n                                </div>\n                                <div class=\"sub-titles text-center mt-3\">\n                                    <p>{{viewItem?.experience}} Years</p>\n                                    <p>{{viewItem?.parlour_name}}</p>\n                                </div>\n                                <div class=\"text-center mt-5\">\n                                    <div class=\"form-group\">\n                                        <!-- <input type=\"text\" class=\"form-control\" name=\"date\" id=\"dateid\" placeholder=\"Select Date\"> -->\n                                        <p-calendar [(ngModel)]=\"selectDate\" [showIcon]=\"true\" dateFormat=\"mm-dd-yy\" inputId=\"icon\" placeholder=\"Select Date\"></p-calendar>\n                                    </div>\n                                    <div class=\"form-group mt-3\">\n                                        <!-- <input type=\"text\" class=\"form-control\" name=\"time\" id=\"timeid\" placeholder=\"Select Time\"> -->\n                                        <p-calendar [(ngModel)]=\"selectTime\" [showIcon]=\"true\" [timeOnly]=\"true\" inputId=\"timeonly\" placeholder=\"Select Time\" (onSelect)=\"onInputEvent()\"></p-calendar>\n                                    </div>\n                                    <div class=\"form-group mt-5\">\n                                        <button class=\"btn btn-action col-md-9\" type=\"submit\" [disabled]=\"!selectDate || !selectTime\" data-toggle=\"modal\" data-target=\"#bookAppModal\" (click)=\"onActionBookSlot()\">Book Slot</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"pagination\" *ngIf=\"beautyParlours.length !== 0\">\n                            <!-- <a>&laquo; Prev</a>\n                            <a class=\"active\">1</a>\n                            <a>2</a>\n                            <a>3</a>\n                            <a>4</a>\n                            <a>5</a>\n                            <a>Next &raquo;</a> -->\n                            <a [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\">&laquo; Prev</a>\n                            <ul class=\"list-group list-group-flush\" *ngFor=\"let item of totalPages; let i=index\">\n                                <li class=\"list-group-item\" [ngClass]=\"{'active': page === item}\" (click)=\"getPage(item)\">{{ item }}</li>\n                            </ul>\n                            <a [ngClass]=\"{'isDisable': page === totalPages.length}\" (click)=\"getPage(page + 1)\">Next &raquo;</a>\n                          </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- user book an appointment Modal -->\n<div class=\"modal fade\" id=\"bookAppModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"bookAppModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title\" id=\"bookAppModalLabel\">Book appointment confirmation ?</h6>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"resetModal()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-12\">\n                            <label for=\"service\">Add Services</label>\n                            <div id=\"accordion\">\n                                <div class=\"card\" *ngFor=\"let item of servicesList; let j=index;\">\n                                    <div class=\"card-header label-title\" [ngClass]=\"{'isActive': selectAll[j] === true}\">\n                                        <input class=\"form-control col-md-1\" type=\"checkbox\" name=\"serviceName-{{j}}\" id=\"serviceId-{{j}}\" (input)=\"onInputAction(item, j, $event.target.checked)\" [checked]=\"selectAll[j]\">\n                                        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\" (click)=\"onCollapseBody(item, j)\">\n                                            {{ item | titlecase }}\n                                        </a>\n                                    </div>\n                                    <div id=\"collapseOne-{{j}}\" class=\"collapse-{{j}}\" data-parent=\"#accordion\" [ngClass]=\"{'show': j===currentId}\">\n                                        <div class=\"card-body\">\n                                            <angular2-multiselect class=\"form-control col-md-4\" [data]=\"allSubServices[j]\"\n                                                [(ngModel)]=\"selectedSubServices[j]\" [ngModelOptions]=\"{standalone: true}\"\n                                                [settings]=\"subSettings[j]\" (onSelect)=\"onSubServiceSelect($event)\"\n                                                (onDeSelect)=\"OnSubServiceDeSelect($event)\"\n                                                (onSelectAll)=\"onSelectAllSubService($event)\"\n                                                (onDeSelectAll)=\"onDeSelectAllSubService($event)\"></angular2-multiselect>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-action-cancel\" data-dismiss=\"modal\" (click)=\"resetModal()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-action-add\" (click)=\"addBookingData()\" [disabled]=\"setDisableModal()\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-pages/games-list/games-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-pages/games-list/games-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonPagesGamesListGamesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" *ngIf=\"viewPage === 'table'\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"table-titles\">\r\n                <div class=\"table-names\">\r\n                    <span class=\"span1\">PC Games List</span>\r\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"false\"></i></span>\r\n                    <span class=\"span3 ml-3\">View New Games</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-action-add\" (click)=\"onSelectPageView('form')\">\r\n                        <i class=\"fa fa-plus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Add New Game</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <hr style=\"margin: 0 !important;\">\r\n            <div class=\"table-actions mt-3\">\r\n                <span>\r\n                    <div class=\"form-group input-group search-input\">\r\n                        <button class=\"btn btn-action-filter\" data-toggle=\"dropdown\">\r\n                            Filter<span class=\"ml-2\"><i class=\"fa fa-filter\" aria-hidden=\"false\"></i></span>\r\n                        </button>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\">\r\n                            <a class=\"dropdown-item\" href=\"#\">Link 1</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Link 2</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Link 3</a>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" name=\"searchName\" id=\"searchId\"\r\n                            placeholder=\"Quick search\" [(ngModel)]=\"searchQuery\">\r\n                        <button class=\"btn btn-action-search\" [disabled]=\"!searchQuery || searchQuery == ''\">\r\n                            <i class=\"fa fa-search\" aria-hidden=\"false\"></i><span class=\"ml-2\">Search</span>\r\n                        </button>\r\n                    </div>\r\n                </span>\r\n                <span>\r\n                    <div class=\"form-group input-group\">\r\n                        <button class=\"btn btn-action-one\" [ngClass]=\"{'isAll': filterList === 'all'}\"\r\n                            (click)=\"onSelectFilterList('all')\">\r\n                            <i class=\"fa fa-server\" aria-hidden=\"false\"></i><span class=\"ml-2\">All</span>\r\n                        </button>\r\n                        <button class=\"btn btn-action-two\" [ngClass]=\"{'isPending': filterList === 'pending'}\"\r\n                            (click)=\"onSelectFilterList('pending')\">\r\n                            <i class=\"fa fa-clone\" aria-hidden=\"false\"></i><span class=\"ml-2\">Pending</span>\r\n                        </button>\r\n                        <button class=\"btn btn-action-three\" [ngClass]=\"{'isComplete': filterList === 'complete'}\"\r\n                            (click)=\"onSelectFilterList('complete')\">\r\n                            <i class=\"fa fa-square-o\" aria-hidden=\"false\"></i><span class=\"ml-2\">Completed</span>\r\n                        </button>\r\n                        <button class=\"btn btn-action-four\" [ngClass]=\"{'isNotStart': filterList === 'not-start'}\"\r\n                            (click)=\"onSelectFilterList('not-start')\">\r\n                            <i class=\"fa fa-square\" aria-hidden=\"false\"></i><span class=\"ml-2\">Not started</span>\r\n                        </button>\r\n                    </div>\r\n                </span>\r\n                <!-- <span>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-action-add\" (click)=\"onSelectPageView('form')\">\r\n                            <i class=\"fa fa-plus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Add New Game</span>\r\n                        </button>\r\n                    </div>\r\n                </span> -->\r\n            </div>\r\n            <div class=\"table-data\">\r\n                <table class=\"table table-borderless table-hover main-table\" style=\"width: 100%;\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>\r\n                                <input type=\"checkbox\" name=\"gameNames\" id=\"gameIds\" [checked]=\"false\">\r\n                            </th>\r\n                            <th>Index</th>\r\n                            <th>Title of Game</th>\r\n                            <th>Subtitle of Game</th>\r\n                            <th>Size of Game</th>\r\n                            <th>Available Website</th>\r\n                            <th>Download URL</th>\r\n                            <th>Download Progress</th>\r\n                            <th>Status</th>\r\n                            <th class=\"text-center\">Action Center</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let item of gamesList; let i=index;\"\r\n                            [ngClass]=\"{'isHighlight': i === currentIndex}\">\r\n                            <td>\r\n                                <input type=\"checkbox\" name=\"gameName-{{ i }}\" id=\"gameId-{{ i }}\"\r\n                                    [checked]=\"item.selected\">\r\n                            </td>\r\n                            <td>{{ i+1 }}</td>\r\n                            <td>{{ item.title }}</td>\r\n                            <td>\r\n                                <button (click)=\"myFunction('demo', i)\"\r\n                                    class=\"btn btn-action-open w3-btn w3-block w3-left-align\"\r\n                                    [ngClass]=\"{'isActive': i === currentIndex}\">\r\n                                    <i class=\"fa fa-table\" aria-hidden=\"false\"></i><span class=\"ml-2\">View Sub\r\n                                        Games</span>\r\n                                </button>\r\n                                <div id=\"demo-{{ i }}\" class=\"w3-hide\" style=\"width: 100px;\">\r\n                                    <table class=\"table table-borderless table-hover sub-table mt-3\"\r\n                                        style=\"width: 90.5em;\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>Index</th>\r\n                                                <th>Name</th>\r\n                                                <th>Actual Size</th>\r\n                                                <th>Webiste</th>\r\n                                                <th>Download URL</th>\r\n                                                <th>Actual Progress</th>\r\n                                                <th>Status</th>\r\n                                                <th class=\"text-center\">Action Center</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of item.sub_title; let j=index;\">\r\n                                                <td>{{ i+1 }}.{{ j+1 }}</td>\r\n                                                <td>{{ data.name }}</td>\r\n                                                <td>{{ data.actual_size }}</td>\r\n                                                <td>{{ data.website }}</td>\r\n                                                <td>{{ data.url_download }}</td>\r\n                                                <td>{{ data.download_progress }}</td>\r\n                                                <td>{{ data.status === 0 ? 'Active' : 'Inactive' }}</td>\r\n                                                <td class=\"text-center\">\r\n                                                    <div class=\"action-td\">\r\n                                                        <span><i class=\"fa fa-eye span1\" aria-hidden=\"false\"></i></span>\r\n                                                        <span><i class=\"fa fa-edit ml-2 span2\"\r\n                                                                aria-hidden=\"false\"></i></span>\r\n                                                        <span><i class=\"fa fa-trash ml-2 span3\"\r\n                                                                aria-hidden=\"false\"></i></span>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </td>\r\n                            <td>{{ item.total_size }}</td>\r\n                            <td>{{ item.websites[0] + ',...' }}</td>\r\n                            <td>{{ item.download_urls[0] + ',...' }}</td>\r\n                            <td>\r\n                                <div class=\"c100 p{{ item.total_progress }} small\" style=\"font-size: 50px !important;\">\r\n                                    <span>{{ item.total_progress }}%</span>\r\n                                    <div class=\"slice\">\r\n                                        <div class=\"bar\"></div>\r\n                                        <div class=\"fill\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </td>\r\n                            <td>{{ item.status === 1 ? 'Active' : 'Inactive' }}</td>\r\n                            <td class=\"text-center\">\r\n                                <div class=\"action-td\">\r\n                                    <span><i class=\"fa fa-eye span1\" aria-hidden=\"false\"></i></span>\r\n                                    <span><i class=\"fa fa-edit span2\" aria-hidden=\"false\"></i></span>\r\n                                    <span><i class=\"fa fa-trash span3\" aria-hidden=\"false\"></i></span>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\" *ngIf=\"viewPage === 'form'\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-titles\">\r\n                <div class=\"form-names\">\r\n                    <span class=\"span1\">PC Games List</span>\r\n                    <span class=\"ml-3\"><i class=\"fa fa-angle-right\" aria-hidden=\"false\"></i></span>\r\n                    <span class=\"span3 ml-3\">Add New Game</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button class=\"btn btn-action-back\" (click)=\"onSelectPageView('table')\">\r\n                        <i class=\"fa fa-angle-left\" aria-hidden=\"false\"></i><span class=\"ml-2\">Back To Games</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <hr style=\"margin: 0 !important;\">\r\n            <div class=\"form-actions mt-3\">\r\n                <div class=\"form-group col-md-4\">\r\n                    <label for=\"configName\" class=\"field-required\">Select Game Config</label>\r\n                    <div class=\"config-box mt-3\">\r\n                        <p class=\"p1\" [ngClass]=\"{'isConfig': viewForm === 'single'}\" (click)=\"onSelectConfig('single')\"><i class=\"fa fa-gear\" aria-hidden=\"false\"></i> <span class=\"ml-2\">Single\r\n                                Game</span></p>\r\n                        <p class=\"p2\" [ngClass]=\"{'isConfig': viewForm === 'multiple'}\" (click)=\"onSelectConfig('multiple')\"><i class=\"fa fa-gears\" aria-hidden=\"false\"></i> <span class=\"ml-2\">Multiple\r\n                                Game</span></p>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <form #singleGameForm=\"ngForm\" *ngIf=\"viewForm === 'single'\">\r\n                    <div class=\"form-group input-group\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"gameName\" class=\"field-required\">Add Game Name</label>\r\n                            <input type=\"text\" class=\"form-control mt-3\" name=\"gameName\" id=\"gameId\"\r\n                                placeholder=\"Enter game name\" [(ngModel)]=\"gameName\" required>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"gameSize\" class=\"field-required\">Add Game Size</label>\r\n                            <div class=\"form-group input-group\">\r\n                                <select class=\"form-control mt-3\" name=\"sizeConfigName\" id=\"sizeConfigNameId\"\r\n                                    [(ngModel)]=\"sizeConfigName\">\r\n                                    <option value=\"null\" selected disabled>Select Size Config :</option>\r\n                                    <option value=\"kb\">Bytes - (1024 Bits)</option>\r\n                                    <option value=\"kb\">KiloBytes - (1024 Bytes)</option>\r\n                                    <option value=\"mb\">MegaBytes - (1024 KB)</option>\r\n                                    <option value=\"gb\">GigaBytes - (1024 MB)</option>\r\n                                </select>\r\n                                <input type=\"number\" class=\"form-control mt-3\" name=\"gameSizeName\" id=\"gameSizeId\"\r\n                                    placeholder=\"Enter game size\" [(ngModel)]=\"gameSize\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"gameProgress\" class=\"field-required\">Add Game Progress</label>\r\n                            <input type=\"range\" class=\"form-control mt-3\" name=\"gameProgressName\" id=\"gameProgressId\"\r\n                                [(ngModel)]=\"gameProgress\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group input-group\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"gameSite\" class=\"field-required\">Add Game Website</label>\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"gameUrl\" class=\"field-required\">Add Game Download Url</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <form [formGroup]=\"siteUrlForm\" enctype=\"multipart/form-data\" method=\"POST\">\r\n                            <div formArrayName=\"siteUrlArr\">\r\n                                <div class=\"row\"\r\n                                    *ngFor=\"let item of siteUrlForm['controls']['siteUrlArr']['controls']; let i=index\"\r\n                                    [formGroupName]=\"i\">\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"gameSiteName\" id=\"gameSiteId\"\r\n                                            placeholder=\"Enter game website\" formControlName=\"siteName\" required>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"gameUrlName\" id=\"gameUrlId\"\r\n                                            placeholder=\"Enter game download url\" formControlName=\"downloadUrl\"\r\n                                            required>\r\n                                    </div>\r\n                                    <div class=\"form-group input-group col-md-4\">\r\n                                        <button class=\"btn btn-action-addnew\"\r\n                                            *ngIf=\"siteUrlForm['controls']['siteUrlArr']['controls'].length <= i+1\"\r\n                                            (click)=\"addForm(i, 'single')\">\r\n                                            <i class=\"fa fa-plus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Add Site\r\n                                                Url</span>\r\n                                        </button>\r\n                                        <button class=\"btn btn-action-delete\"\r\n                                            *ngIf=\"siteUrlForm['controls']['siteUrlArr']['controls'].length > 1\"\r\n                                            (click)=\"removeForm(i, 'single')\"\r\n                                            [ngClass]=\"{'ml-2': i === formIndex || i > 0}\">\r\n                                            <i class=\"fa fa-minus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Delete\r\n                                                Site Url</span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"form-group input-group mt-5\">\r\n                        <button class=\"btn btn-action-cancel col-md-2\" (click)=\"onSelectPageView('table')\">\r\n                            <i class=\"fa fa-times\" aria-hidden=\"false\"></i><span class=\"ml-2\">Cancel Game</span>\r\n                        </button>\r\n                        <button class=\"btn btn-action-save ml-2 col-md-2\" [disabled]=\"singleGameForm.invalid || siteUrlForm.invalid\" (click)=\"saveGameDetails('single')\">\r\n                            <i class=\"fa fa-save\" aria-hidden=\"false\"></i><span class=\"ml-2\">Save Game</span>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n                <form #multipleGameForm=\"ngForm\" *ngIf=\"viewForm === 'multiple'\">\r\n                    <div class=\"form-group input-group\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <label for=\"subGameTitle\" class=\"field-required\">Add Game Name</label>\r\n                            <input type=\"text\" class=\"form-control mt-3\" name=\"subGameTitle\" id=\"subGameTitleId\"\r\n                                placeholder=\"Enter sub game name\" [(ngModel)]=\"subGameName\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-12\">\r\n                        <form [formGroup]=\"seriesGameForm\" enctype=\"multipart/form-data\" method=\"POST\">\r\n                            <div formArrayName=\"seriesGameArr\">\r\n                                <div class=\"row\"\r\n                                    *ngFor=\"let item of seriesGameForm['controls']['seriesGameArr']['controls']; let i=index\"\r\n                                    [formGroupName]=\"i\">\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <label for=\"subGameName\" class=\"field-required\">Add Sub Game Name</label>\r\n                                        <input type=\"text\" class=\"form-control mt-3\" name=\"subGameName\" id=\"subGameId\"\r\n                                            placeholder=\"Enter sub game name\" formControlName=\"subSeriesName\" required>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <label for=\"subGameSizeConfig\" class=\"field-required\">Add Sub Game Size</label>\r\n                                        <div class=\"form-group input-group\">\r\n                                            <select class=\"form-control mt-3\" name=\"subGameSizeConfigName\"\r\n                                                id=\"subGameSizeConfigId\" formControlName=\"subGameSizeConfig\">\r\n                                                <option value=\"null\" selected disabled>Select Size Config :</option>\r\n                                                <option value=\"kb\">Bytes - (1024 Bits)</option>\r\n                                                <option value=\"kb\">KiloBytes - (1024 Bytes)</option>\r\n                                                <option value=\"mb\">MegaBytes - (1024 KB)</option>\r\n                                                <option value=\"gb\">GigaBytes - (1024 MB)</option>\r\n                                            </select>\r\n                                            <input type=\"number\" class=\"form-control mt-3\" name=\"subGameSizeName\"\r\n                                                id=\"subGameSizeId\" placeholder=\"Enter sub game size\" formControlName=\"subGameSize\"\r\n                                                required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <label for=\"subGameProgress\" class=\"field-required\">Add Sub Game Progress</label>\r\n                                        <input type=\"range\" class=\"form-control mt-3\" name=\"subGameProgressName\"\r\n                                            id=\"subGameProgressId\" formControlName=\"subGameProgress\" required>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <label for=\"subGameSite\" class=\"field-required\">Add Game Website</label>\r\n                                        <input type=\"text\" class=\"form-control mt-3\" name=\"subGameSiteName\" id=\"subGameSiteId\"\r\n                                            placeholder=\"Enter sub game website\" formControlName=\"webSiteName\" required>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-4\">\r\n                                        <label for=\"subGameUrl\" class=\"field-required\">Add Game Download Url</label>\r\n                                        <input type=\"text\" class=\"form-control mt-3\" name=\"subGameUrlName\" id=\"subGameUrlId\"\r\n                                        placeholder=\"Enter sub game download url\" formControlName=\"urlDownload\"\r\n                                        required>\r\n                                    </div>\r\n                                    <div class=\"form-group input-group col-md-4\" style=\"margin-top: 65px !important;\">\r\n                                        <button class=\"btn btn-action-addnew\"\r\n                                            *ngIf=\"seriesGameForm['controls']['seriesGameArr']['controls'].length <= i+1\"\r\n                                            (click)=\"addForm(i, 'multiple')\">\r\n                                            <i class=\"fa fa-plus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Add\r\n                                                Series</span>\r\n                                        </button>\r\n                                        <button class=\"btn btn-action-delete\"\r\n                                            *ngIf=\"seriesGameForm['controls']['seriesGameArr']['controls'].length > 1\"\r\n                                            (click)=\"removeForm(i, 'multiple')\"\r\n                                            [ngClass]=\"{'ml-2': i === formIndex || i > 0}\">\r\n                                            <i class=\"fa fa-minus\" aria-hidden=\"false\"></i><span class=\"ml-2\">Delete\r\n                                                Series</span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"form-group input-group mt-5\">\r\n                        <button class=\"btn btn-action-cancel col-md-2\">\r\n                            <i class=\"fa fa-times\" aria-hidden=\"false\"></i><span class=\"ml-2\">Cancel Game</span>\r\n                        </button>\r\n                        <button class=\"btn btn-action-save ml-2 col-md-2\" [disabled]=\"multipleGameForm.invalid\">\r\n                            <i class=\"fa fa-save\" aria-hidden=\"false\"></i><span class=\"ml-2\">Save Game</span>\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Grey with black text -->\r\n<nav class=\"navbar navbar-expand-sm sticky-top bg-light navbar-light justify-content-between\">\r\n    <span class=\"navbar-brand mb-0\">Beautician System</span>\r\n    <ul class=\"navbar-nav\">\r\n        <!-- <li class=\"nav-item active\" *ngFor=\"let item of navItems; let i=index;\">\r\n            <a class=\"nav-link\" *ngIf=\"!authUserService.isLoggedIn()\" [routerLink]=\"[item.path]\">{{item.name}}</a>\r\n            <a class=\"nav-link\" *ngIf=\"authUserService.isLoggedIn()\" [routerLink]=\"[item.path]\">{{item.name}}</a>\r\n        </li> -->\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'user-dashboard'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'user'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/user-dashboard']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'beauticians'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'user'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/beauticians']\">Beauticians</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'reports'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'user'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/reports']\">Reports</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'admin-dashboard'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'admin'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/admin-dashboard']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\"\r\n            [ngClass]=\"{'is-active': href === 'services' || href === 'add-beautician' || href === 'add-beauty-parlour' || href === 'add-beauty-services'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'admin'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/services']\">Services</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'beautician-dashboard'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'beautician'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/beautician-dashboard']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'beautician-users'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'beautician'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/beautician-users']\">Appointments</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'beautician-reports'}\"\r\n            *ngIf=\"authUserService.isLoggedIn() && role == 'beautician'\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/beautician-reports']\">Reports</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'login'}\" *ngIf=\"!authUserService.isLoggedIn()\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" [ngClass]=\"{'is-active': href === 'signup'}\" *ngIf=\"!authUserService.isLoggedIn()\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/signup']\">Signup</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item logout-link\" *ngIf=\"authUserService.isLoggedIn()\">\r\n            <a class=\"nav-link\" (click)=\"userLogout()\">Logout</a>\r\n        </li> -->\r\n        <li class=\"nav-item\" *ngIf=\"authUserService.isLoggedIn()\">\r\n            <a class=\"nav-link\">\r\n                <div class=\"dropdown\">\r\n                    <!-- <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      Dropdown button\r\n                    </button> -->\r\n                    <img src=\"../../assets/images/admin-avatar.png\" alt=\"_profile\" class=\"img-responsive rounded-image dropdown-toggle\" type=\"button\"\r\n                        id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n                        width=\"30\" height=\"30\">\r\n                    <div class=\"dropdown-menu dropdown-menu-right p-0\" aria-labelledby=\"dropdownMenuButton\">\r\n                        <a class=\"dropdown-item\">\r\n                            <div class=\"div1\">\r\n                                <img src=\"../../assets/images/admin-avatar.png\" alt=\"_pic\" class=\"img-responsive rounded-image\" width=\"60\" height=\"60\">\r\n                                <div class=\"div2 ml-2\">\r\n                                    <p class=\"p1 mt-3\">{{fullName}}</p>\r\n                                    <p class=\"p2\">{{userName}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                        <a class=\"dropdown-item link\" (click)=\"onClickView('profile')\" [ngClass]=\"{'is-active1': href === 'admin-profile' || href === 'user-profile' || href === 'beautician-profile'}\">\r\n                            <i class=\"fa fa-user-o\" aria-hidden=\"false\"></i><span class=\"ml-2\">My Profile</span>\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"onClickView('settings')\" *ngIf=\"authUserService.isLoggedIn() && role == 'admin'\" [ngClass]=\"{'is-active1': href === 'admin-settings'}\">\r\n                            <i class=\"fa fa-gear\" aria-hidden=\"false\"></i><span class=\"ml-2\">Settings</span>\r\n                        </a>\r\n                        <a class=\"dropdown-item\" (click)=\"userLogout()\">\r\n                            <i class=\"fa fa-sign-out\" aria-hidden=\"false\"></i><span class=\"ml-2\">Logout</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n<ng-container *ngIf=\"authUserService.isLoggedIn()\">\r\n    <div class=\"modal fade logout-modal\" id=\"autoLogoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"autoLogoutModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h6 class=\"modal-title\" id=\"autoLogoutModalLabel\">Profile Logout or Stay confirmation ?</h6>\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"userLogout()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p class=\"text-center\">Your profile session become to ends in</p>\r\n                    <p class=\"text-center\" [ngClass]=\"{'isSuccess': (seconds <= 60 && seconds >= 30), 'isPrimary': (seconds <= 30 && seconds >= 20), 'isDanger': (seconds <= 20 && seconds >= 00)}\">{{ showTime }}</p>\r\n                    <div class=\"form-group input-group justify-content-center\">\r\n                        <button type=\"button\" class=\"btn btn-action-in\" (click)=\"userReLogIn()\">Stay</button>\r\n                        <button type=\"button\" class=\"btn btn-action-out ml-2\" (click)=\"userLogout()\">Logout</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-md-12\">\r\n            \r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-5\">\n        <div class=\"col-md-12\">\n            <form #dateForm=\"ngForm\">\n                <div class=\"form-group input-group\">\n                    <input type=\"number\" class=\"form-control\" name=\"yearName\" id=\"yearId\" [(ngModel)]=\"selectYear\" placeholder=\"Type year\" required>\n                    <input type=\"number\" class=\"form-control ml-2\" name=\"monthName\" id=\"monthId\" [(ngModel)]=\"selectMonth\" placeholder=\"Type month\" required>\n                    <input type=\"number\" class=\"form-control ml-2\" name=\"dateName\" id=\"dateId\" [(ngModel)]=\"selectDate\" placeholder=\"Type date\" required>\n                    <button class=\"btn btn-action-search ml-2\" type=\"submit\" [disabled]=\"dateForm.invalid\" (click)=\"onSearchFullDate()\">Search</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"title\">\n                <span class=\"span1 text-center\" (click)=\"getAllDates('prev')\"><i class=\"fa fa-angle-left\"></i></span>\n                <span class=\"span2\">\n                    <p class=\"p1\">{{currentFullMonth}}</p>\n                    <p class=\"p2 ml-3\">{{currentDate}},</p>\n                    <p class=\"p3 ml-3\">{{currentYear}}</p>\n                </span>\n                <span class=\"span3 text-center\" (click)=\"getAllDates('next')\"><i class=\"fa fa-angle-right\"></i></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 week-col\">\n            <div class=\"days text-center\" *ngFor=\"let item of days; let i=index;\">\n                {{item}}\n            </div>\n        </div>\n        <div class=\"col-md-12 dates-col\" *ngFor=\"let date of dates; let i=index;\">\n            <div class=\"nums\" *ngFor=\"let num of date; let j=index\" [ngClass]=\"{'isDisable': setDisableDates(num, i), 'isCurrent': setCurrentDateColour(num, i)}\">\n                <div class=\"text-center\" [ngClass]=\"{'isSunday': setSundayColour(num, j)}\">{{ num }}</div>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <br>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"reports-page\">\r\n    <div class=\"container-fluid p-3\">\r\n        <div class=\"row mt-3\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"titles\">\r\n                    <p>All Booking Reports</p>\r\n                    <div class=\"search-fields\">\r\n                        <select class=\"form-control width-50\" name=\"statusName\" id=\"statusId\" [(ngModel)]=\"statusQuery\" (change)=\"onSelectStatus()\">\r\n                            <option value=\"null\">All Status</option>\r\n                            <option value=\"1\">Active</option>\r\n                            <option value=\"0\">In Active</option>\r\n                        </select>\r\n                        <div class=\"form-group input-group ml-2\">\r\n                            <input class=\"form-control width-100\" type=\"text\" name=\"searchName\" id=\"searchId\" placeholder=\"Quick search...\" [(ngModel)]=\"searchQuery\" (input)=\"onInputSearch()\">\r\n                            <button class=\"btn btn-action-search\" type=\"submit\" (click)=\"onSearchData()\">\r\n                                <i class=\"fa fa-search\" aria-hidden=\"false\" *ngIf=\"!searchQuery || searchQuery === ''\"></i>\r\n                                <i class=\"fa fa-check\" aria-hidden=\"false\" *ngIf=\"searchQuery || searchQuery !== ''\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <table class=\"table table-hover booking-table\">\r\n                    <thead class=\"thead-light table-head\">\r\n                        <tr>\r\n                            <th>Booking ID</th>\r\n                            <th>Beautician</th>\r\n                            <th>Date</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class=\"table-body\">\r\n                        <tr *ngFor=\"let item of reports; let i=index;\" (click)=\"onViewBill(item, i)\">\r\n                            <td>{{ item.booking_id }}</td>\r\n                            <td>{{ item.beautician_name }}</td>\r\n                            <td>{{ item.date | date:'yyyy-MM-dd' }}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"3\">\r\n                                <div class=\"pagination_rounded mt-5\" *ngIf=\"reports.length !== 0\">\r\n                                    <!-- <ul>\r\n                                        <li [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\"> <a href=\"#\" class=\"prev\"> <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Prev </a> </li>\r\n                                        <ul *ngFor=\"let item of totalPages; let i=index\">\r\n                                            <li class=\"hidden-xs\" [ngClass]=\"{'active': page === item}\"\r\n                                            (click)=\"getPage(item)\"><a href=\"#\">{{item}}</a> </li>\r\n                                        </ul>\r\n                                        <li [ngClass]=\"{'isDisable': page === totalPages.length}\" (click)=\"getPage(page + 1)\"><a href=\"#\" class=\"next\"> Next <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a> </li>\r\n                                    </ul> -->\r\n                                    <ul *ngFor=\"let item of totalPages; let i=index\">\r\n                                        <li [ngClass]=\"{'isDisable': page === 1}\" (click)=\"getPage(page - 1)\" *ngIf=\"item === 'Prev'\"> <a class=\"prev\"> <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Prev </a> </li>\r\n                                        <li class=\"hidden-xs\" [ngClass]=\"{'active': page === item}\"\r\n                                            (click)=\"getPage(item)\" *ngIf=\"item !== 'Prev' && item !== 'Next'\"><a>{{item}}</a> </li>\r\n                                        <li [ngClass]=\"{'isDisable': page === temptotalPages.length}\" (click)=\"getPage(page + 1)\" *ngIf=\"item === 'Next'\"><a class=\"next\"> Next <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a> </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-md-4\" *ngIf=\"viewItem?.booking_id\">\r\n                <div class=\"card bill-card p-3\">\r\n                    <div class=\"header-bill\">\r\n                        <span class=\"bill-title text-center\">{{viewItem?.beautician_name}} SPA Report</span>\r\n                        <span class=\"bill-download\"><i class=\"fa fa-cloud-download text-center\" aria-hidden=\"false\"></i></span>\r\n                    </div>\r\n                    <div class=\"body-bill mt-5\">\r\n                        <p class=\"body-title\">Mr.{{viewItem?.beautician_name}}</p>\r\n                        <p class=\"mr-5\">28</p>\r\n                        <p>{{viewItem?.date | date:'yyyy-MM-dd'}}</p>\r\n                    </div>\r\n                    <div class=\"bill-details\">\r\n                        <table class=\"table table-borderless\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Service Name</th>\r\n                                    <th>Amount</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of services; let i=index;\">\r\n                                    <td>{{ item.name | titlecase }}</td>\r\n                                    <td>{{ item.amount | number:'1.2-2' }}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"services.length === 0\">\r\n                                    <td class=\"text-center\">No user reports found.</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"total-bill\">\r\n                        <p class=\"text-center\">Total: {{viewItem?.amount}}</p>\r\n                        <p class=\"sign-data\">\r\n                            <span class=\"sign text-center\">Signature</span>\r\n                            <span>Digitally verified.</span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-4\" id=\"main\">\r\n                <div id=\"mySidenav\" class=\"sidenav\">\r\n                    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n                    <div class=\"appointment-card\">\r\n                        <span class=\"text-center\">Add Appointment</span>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDashboardUserDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-md-12\">\r\n            <p class=\"titles\">Hi <b>{{fullName}}</b>, Welcome To <span class=\"sub-titles\">Online Beautician Booking System</span></p>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFormUserFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-5\">\n        <div class=\"col-md-12\">\n            <p>User Registration Form :</p>\n            <hr>\n            <form #userForm=\"ngForm\">\n                <div class=\"container-fluid\">\n                    <div class=\"row mt-3\">\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"text\" class=\"form-control\" name=\"firstname\" id=\"firstnameId\"\n                                placeholder=\"Enter first name\" [(ngModel)]=\"firstName\" #firstname=\"ngModel\" required>\n                            <span class=\"error-note\"\n                                *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\">\n                                <span *ngIf=\"firstname?.errors.required\">First name is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"lastnameId\"\n                                placeholder=\"Enter last name\" [(ngModel)]=\"lastName\" #lastname=\"ngModel\" required>\n                            <span class=\"error-note\" *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\">\n                                <span *ngIf=\"lastname?.errors.required\">Last name is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"number\" class=\"form-control\" name=\"rollName\" id=\"rollId\"\n                                placeholder=\"Enter roll number\" [(ngModel)]=\"rollNumber\" #rollName=\"ngModel\" required>\n                            <span class=\"error-note\" *ngIf=\"rollName.invalid && (rollName.dirty || rollName.touched)\">\n                                <span *ngIf=\"rollName?.errors.required\">Roll number is required.</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"form-group col-md-4\">\n                            <select name=\"branchname\" id=\"branchnameId\" class=\"form-control\" [(ngModel)]=\"branchName\"\n                                #branchname=\"ngModel\" required>\n                                <option value=\"null\" selected disabled>Select Branch Name :</option>\n                                <option>ECE</option>\n                                <option>CSE</option>\n                                <option>MME</option>\n                                <option>CE</option>\n                                <option>CIVIL</option>\n                                <option>MECHANICAL</option>\n                                <option>EEE</option>\n                                <option>IT</option>\n                            </select>\n                            <span class=\"error-note\"\n                                *ngIf=\"branchname.invalid && (branchname.dirty || branchname.touched)\">\n                                <span *ngIf=\"branchname?.errors.required\">Branch name is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <select name=\"sectionname\" id=\"sectionnameId\" class=\"form-control\" [(ngModel)]=\"sectionName\"\n                                #sectionname=\"ngModel\" required>\n                                <option value=\"null\" selected disabled>Select Section Name :</option>\n                                <option>A</option>\n                                <option>B</option>\n                                <option>C</option>\n                                <option>D</option>\n                            </select>\n                            <span class=\"error-note\"\n                                *ngIf=\"sectionname.invalid && (sectionname.dirty || sectionname.touched)\">\n                                <span *ngIf=\"sectionname?.errors.required\">Section name is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-2 mt-2\">\n                            <div class=\"input-group radio-1\">\n                                <input type=\"radio\" class=\"form-control\" name=\"nametype\" id=\"studentId\" value=\"0\"\n                                    [(ngModel)]=\"personType\" required>\n                                <label for=\"studentId\">Student</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-md-2 mt-2\">\n                            <div class=\"input-group radio-2\">\n                                <input type=\"radio\" class=\"form-control\" name=\"nametype\" id=\"teacherId\" value=\"1\"\n                                    [(ngModel)]=\"personType\" required>\n                                <label for=\"teacherId\">Teacher</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"number\" class=\"form-control\" name=\"phoneName\" id=\"phoneId\"\n                                placeholder=\"Enter mobile number\" [(ngModel)]=\"mobile\" #phoneName=\"ngModel\" required>\n                            <span class=\"error-note\"\n                                *ngIf=\"phoneName.invalid && (phoneName.dirty || phoneName.touched)\">\n                                <span *ngIf=\"phoneName?.errors.required\">Mobile number is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"text\" class=\"form-control\" name=\"addressName\" id=\"addressId\"\n                                placeholder=\"Enter home address\" [(ngModel)]=\"address\" #addressName=\"ngModel\" required>\n                            <span class=\"error-note\"\n                                *ngIf=\"addressName.invalid && (addressName.dirty || addressName.touched)\">\n                                <span *ngIf=\"addressName?.errors.required\">Address is required.</span>\n                            </span>\n                        </div>\n                        <div class=\"form-group col-md-4\">\n                            <input type=\"file\" class=\"form-control\" name=\"profileName\" id=\"profileId\" accept=\"*\"\n                                (change)=\"onSelectFile($event)\" #fileInput required>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"form-group input-group col-md-4\">\n                            <button class=\"btn btn-action-cancel\" type=\"reset\" (click)=\"resetForm()\">Reset</button>\n                            <button class=\"btn btn-action-save ml-2\" type=\"submit\" [disabled]=\"userForm.invalid || !profile\"\n                                (click)=\"saveUserDetails()\">Save</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-profile/user-profile.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-profile/user-profile.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    <div class=\"row mt-3\">\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/access/login/login.component.css":
  /*!**************************************************!*\
    !*** ./src/app/access/login/login.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n  color: #6495ed;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.sub-link {\r\n  text-decoration: none;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  color: #6495ed !important;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */\r\n  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,\r\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n  height: 50px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"button\"] {\r\n  width: 25%;\r\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */\r\n  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,\r\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"button\"]:hover {\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n/* Center the loader */\r\n\r\n#loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: -32px 0 0 -32px;\r\n  border: 10px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 10px solid #1667af;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/* Add animation to \"page content\" */\r\n\r\n.animate-bottom {\r\n  position: relative;\r\n  -webkit-animation-name: animatebottom;\r\n  -webkit-animation-duration: 1s;\r\n  animation-name: animatebottom;\r\n  animation-duration: 1s\r\n}\r\n\r\n@-webkit-keyframes animatebottom {\r\n  from { bottom:-100px; opacity:0 } \r\n  to { bottom:0px; opacity:1 }\r\n}\r\n\r\n@keyframes animatebottom { \r\n  from{ bottom:-100px; opacity:0 } \r\n  to{ bottom:0; opacity:1 }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25COzswQkFFd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxnSEFBZ0g7RUFDaEg7b0RBQ2tEO0VBQ2xELFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0hBQWdIO0VBQ2hIO29EQUNrRDtFQUNsRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLE9BQU8sYUFBYSxFQUFFLFVBQVU7RUFDaEMsS0FBSyxVQUFVLEVBQUUsVUFBVTtBQUM3Qjs7QUFFQTtFQUNFLE1BQU0sYUFBYSxFQUFFLFVBQVU7RUFDL0IsSUFBSSxRQUFRLEVBQUUsVUFBVTtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uYmVhdXR5LWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdGUge1xyXG4gIGNvbG9yOiAjNTJiZTgwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCAuc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzY0OTVlZDtcclxufVxyXG5cclxuLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5zdWItbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNjQ5NWVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7ICovXHJcbiAgYm94LXNoYWRvdzogcmdiKDIwNCwgMjE5LCAyMzIpIDNweCAzcHggNnB4IDBweCBpbnNldCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgLyogYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDsgKi9cclxuICBib3gtc2hhZG93OiByZ2IoMjA0LCAyMTksIDIzMikgM3B4IDNweCA2cHggMHB4IGluc2V0LFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogLTMycHggMCAwIC0zMnB4O1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxNjY3YWY7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi8qIEFkZCBhbmltYXRpb24gdG8gXCJwYWdlIGNvbnRlbnRcIiAqL1xyXG4uYW5pbWF0ZS1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRlYm90dG9tO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZWJvdHRvbTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlYm90dG9tIHtcclxuICBmcm9tIHsgYm90dG9tOi0xMDBweDsgb3BhY2l0eTowIH0gXHJcbiAgdG8geyBib3R0b206MHB4OyBvcGFjaXR5OjEgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVib3R0b20geyBcclxuICBmcm9teyBib3R0b206LTEwMHB4OyBvcGFjaXR5OjAgfSBcclxuICB0b3sgYm90dG9tOjA7IG9wYWNpdHk6MSB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/access/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/access/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccessLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authUserService, toastr) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.toastr = toastr;
        this.userInput = null;
        this.password = null;
        this.spinner = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          if (!this.userInput || !this.password) {
            return this.toastr.errorToastr('Please enter required fields.');
          }

          if (!this.userInput) {
            return this.toastr.errorToastr('Email is required.');
          }

          if (!this.password) {
            return this.toastr.errorToastr('Password is required.');
          }

          this.spinner = true;
          var userLoginPayload = {
            userinput: this.userInput,
            password: this.password
          };
          console.log('Post payload to user login isss', userLoginPayload);
          this.authUserService.userLogin(userLoginPayload).subscribe(function (response) {
            console.log('User login response isss', response);

            if (response.success) {
              _this.toastr.successToastr(response.message);

              sessionStorage.setItem('token', response.data.token);
              sessionStorage.setItem('userid', response.data.user_id);
              sessionStorage.setItem('fullname', response.data.fullname);
              sessionStorage.setItem('username', response.data.username);
              sessionStorage.setItem('email', response.data.email);
              sessionStorage.setItem('mobile', response.data.mobile);
              sessionStorage.setItem('profile', response.data.profile);
              sessionStorage.setItem('role', response.data.role);
              sessionStorage.setItem('status', response.data.status);
              sessionStorage.setItem('created_at', moment__WEBPACK_IMPORTED_MODULE_5__(response.data.created_at).format('YYYY-MM-DD HH:mm:ss'));
              sessionStorage.setItem('updated_at', moment__WEBPACK_IMPORTED_MODULE_5__(response.data.updated_at).format('YYYY-MM-DD HH:mm:ss'));

              if (response.data.role === 'user') {
                _this.router.navigate(['/user-dashboard']);
              } else if (response.data.role === 'admin') {
                _this.router.navigate(['/admin-dashboard']);
              } else if (response.data.role === 'beautician') {
                _this.router.navigate(['/beautician-dashboard']);
              }
            } else {
              _this.toastr.errorToastr(response.message);
            }

            _this.resetForm();
          }, function (error) {
            _this.toastr.errorToastr('Network failed, Please try again.');

            _this.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.loginFormRef) {
            this.loginFormRef.reset();
          }

          this.userInput = null;
          this.password = null;
          this.spinner = false;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', {
      "static": false
    })], LoginComponent.prototype, "loginFormRef", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/access/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/access/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/access/signup/signup.component.css":
  /*!****************************************************!*\
    !*** ./src/app/access/signup/signup.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n      justify-content: center;\r\n      align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n  color: #6495ed;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.sub-link {\r\n  text-decoration: none;\r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  color: #6495ed !important;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"number\"] {\r\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */\r\n  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,\r\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n  height: 50px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"button\"] {\r\n  width: 25%;\r\n  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */\r\n  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,\r\n    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"button\"]:hover {\r\n  background-color: #f3f3f3;\r\n}\r\n\r\n/* Center the loader */\r\n\r\n#loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: -32px 0 0 -32px;\r\n  border: 10px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 10px solid #1667af;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n/* Add animation to \"page content\" */\r\n\r\n.animate-bottom {\r\n  position: relative;\r\n  -webkit-animation-name: animatebottom;\r\n  -webkit-animation-duration: 1s;\r\n  animation-name: animatebottom;\r\n  animation-duration: 1s\r\n}\r\n\r\n@-webkit-keyframes animatebottom {\r\n  from { bottom:-100px; opacity:0 } \r\n  to { bottom:0px; opacity:1 }\r\n}\r\n\r\n@keyframes animatebottom { \r\n  from{ bottom:-100px; opacity:0 } \r\n  to{ bottom:0; opacity:1 }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXNzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7OzRCQUUwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSxnSEFBZ0g7RUFDaEg7b0RBQ2tEO0VBQ2xELFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0hBQWdIO0VBQ2hIO29EQUNrRDtFQUNsRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7RUFDMUMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSywrQkFBK0IsRUFBRTtFQUN0QyxPQUFPLGlDQUFpQyxFQUFFO0FBQzVDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBLG9DQUFvQzs7QUFDcEM7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLE9BQU8sYUFBYSxFQUFFLFVBQVU7RUFDaEMsS0FBSyxVQUFVLEVBQUUsVUFBVTtBQUM3Qjs7QUFFQTtFQUNFLE1BQU0sYUFBYSxFQUFFLFVBQVU7RUFDL0IsSUFBSSxRQUFRLEVBQUUsVUFBVTtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5iZWF1dHktY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdGUge1xyXG4gIGNvbG9yOiAjNTJiZTgwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCAuc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzY0OTVlZDtcclxufVxyXG5cclxuLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5zdWItbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNjQ5NWVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIC8qIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7ICovXHJcbiAgYm94LXNoYWRvdzogcmdiKDIwNCwgMjE5LCAyMzIpIDNweCAzcHggNnB4IDBweCBpbnNldCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAtM3B4IC0zcHggNnB4IDFweCBpbnNldDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgLyogYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggMzBweCA2MHB4IC0xMnB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE4cHggMzZweCAtMThweCBpbnNldDsgKi9cclxuICBib3gtc2hhZG93OiByZ2IoMjA0LCAyMTksIDIzMikgM3B4IDNweCA2cHggMHB4IGluc2V0LFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIC0zcHggLTNweCA2cHggMXB4IGluc2V0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGxvYWRlciAqL1xyXG4jbG9hZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogLTMycHggMCAwIC0zMnB4O1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMxNjY3YWY7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi8qIEFkZCBhbmltYXRpb24gdG8gXCJwYWdlIGNvbnRlbnRcIiAqL1xyXG4uYW5pbWF0ZS1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRlYm90dG9tO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZWJvdHRvbTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzXHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlYm90dG9tIHtcclxuICBmcm9tIHsgYm90dG9tOi0xMDBweDsgb3BhY2l0eTowIH0gXHJcbiAgdG8geyBib3R0b206MHB4OyBvcGFjaXR5OjEgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVib3R0b20geyBcclxuICBmcm9teyBib3R0b206LTEwMHB4OyBvcGFjaXR5OjAgfSBcclxuICB0b3sgYm90dG9tOjA7IG9wYWNpdHk6MSB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/access/signup/signup.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/access/signup/signup.component.ts ***!
    \***************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAccessSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(router, authUserService, toastr) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.toastr = toastr;
        this.fullName = null;
        this.email = null;
        this.username = null;
        this.mobileNumber = null;
        this.password = null;
        this.confirmPassword = null;
        this.spinner = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signupUser",
        value: function signupUser() {
          var _this2 = this;

          if (!this.fullName && !this.email && !this.username && !this.mobileNumber && !this.password && !this.confirmPassword) {
            return this.toastr.errorToastr('Required fields are empty.');
          }

          if (!this.fullName) {
            return this.toastr.errorToastr('Fullname is required.');
          }

          if (!this.email) {
            return this.toastr.errorToastr('Email is required.');
          }

          if (!this.username) {
            return this.toastr.errorToastr('Username is required.');
          }

          if (!this.mobileNumber) {
            return this.toastr.errorToastr('Mobile Number is required.');
          }

          if (!this.password) {
            return this.toastr.errorToastr('Password is required.');
          }

          if (!this.confirmPassword) {
            return this.toastr.errorToastr('Confirm Password is required.');
          }

          if (this.password !== this.confirmPassword) {
            return this.toastr.errorToastr('Passwords are not matched.');
          }

          this.spinner = true;
          var userSignupPayload = {
            fullname: this.fullName,
            email: this.email,
            username: this.username,
            mobile: this.mobileNumber.toString(),
            password: this.password,
            profile: null,
            role: 'user',
            status: 1
          };
          console.log('Post payload to user login isss', userSignupPayload);
          this.authUserService.userSignup(userSignupPayload).subscribe(function (response) {
            console.log('User signup response isss', response);

            if (response.success) {
              _this2.toastr.successToastr(response.message);

              _this2.router.navigate(['/login']);
            } else {
              _this2.toastr.errorToastr(response.message);
            }

            _this2.resetForm();
          }, function (error) {
            _this2.toastr.errorToastr('Network failed, Please try again.');

            _this2.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.signupFormRef) {
            this.signupFormRef.reset();
          }

          this.fullName = null;
          this.email = null;
          this.username = null;
          this.mobileNumber = null;
          this.password = null;
          this.confirmPassword = null;
          this.spinner = false;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signupForm', {
      "static": false
    })], SignupComponent.prototype, "signupFormRef", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/access/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/access/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/admin/add-forms/add-forms.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/admin/add-forms/add-forms.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddFormsAddFormsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n      justify-content: center;\r\n      align-items: center; */\r\n}\r\n\r\n.add-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  top: 75%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n}\r\n\r\n.add-card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  color: gray;\r\n}\r\n\r\n.add-card p {\r\n  margin-top: 25%;\r\n  font-size: 1.3em;\r\n  color: gray;\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  /* display: grid;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n.add-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.user-data {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n}\r\n\r\n.user-name {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.date-show {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: baseline;\r\n}\r\n\r\n.time-show {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  background-color: lightblue;\r\n}\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenav styles */\r\n\r\n/* sidenavlist styles */\r\n\r\n.sidenavlist {\r\n  height: 100%;\r\n  width: 450px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  /* overflow-x: hidden; */\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenavlist .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.add-user-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.users-card {\r\n  background-color: lightblue;\r\n  width: 100%;\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 10px;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.accept {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: green;\r\n}\r\n\r\n.reject {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: maroon;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenavlist {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenavlist a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenavlist styles */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLWZvcm1zL2FkZC1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7OzRCQUUwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7MEJBRXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUNBLHVCQUF1Qjs7QUFFdkIsdUJBQXVCOztBQUN2QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQSwyQkFBMkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZGQtZm9ybXMvYWRkLWZvcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVhdXR5LWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi5hZGQtY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0b3A6IDc1JTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmFkZC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYWRkLWNhcmQgcCB7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5kZXRhaWxzLWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXRlIHtcclxuICBjb2xvcjogIzUyYmU4MDtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQgLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLyogc2lkZW5hdiBzdHlsZXMgKi9cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtY2FyZCB7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmFkZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDRweCA3cHggcmdiYSg4MSwgNjcsIDIxLCAwLjgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi51c2VyLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4udXNlci1uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmRhdGUtc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi50aW1lLXNob3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxudGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuLyogZW5kIHNpZGVuYXYgc3R5bGVzICovXHJcblxyXG4vKiBzaWRlbmF2bGlzdCBzdHlsZXMgKi9cclxuLnNpZGVuYXZsaXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNpZGVuYXZsaXN0IC5jbG9zZWJ0biB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYWRkLXVzZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgdGV4dC1zaGFkb3c6IDNweCA0cHggN3B4IHJnYmEoODEsIDY3LCAyMSwgMC44KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udXNlcnMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY2VwdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ucmVqZWN0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogbWFyb29uO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdmxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5zaWRlbmF2bGlzdCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuLyogZW5kIHNpZGVuYXZsaXN0IHN0eWxlcyAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/add-forms/add-forms.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/add-forms/add-forms.component.ts ***!
    \********************************************************/

  /*! exports provided: AddFormsComponent */

  /***/
  function srcAppAdminAddFormsAddFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFormsComponent", function () {
      return AddFormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddFormsComponent = /*#__PURE__*/function () {
      function AddFormsComponent(router) {
        _classCallCheck(this, AddFormsComponent);

        this.router = router;
      }

      _createClass(AddFormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddAction",
        value: function onAddAction(view) {
          console.log('Select view isss', view);

          if (view === 'beautician') {
            this.router.navigate(['/add-beautician']);
          } else if (view === 'beautyparlour') {
            this.router.navigate(['/add-beauty-parlour']);
          } else if (view === 'beautyservices') {
            this.router.navigate(['/add-beauty-services']);
          }
        }
      }]);

      return AddFormsComponent;
    }();

    AddFormsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AddFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-forms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-forms/add-forms.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-forms.component.css */
      "./src/app/admin/add-forms/add-forms.component.css"))["default"]]
    })], AddFormsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titles {\r\n  color: gray;\r\n  font-size: 1em;\r\n  background-color: lightgray;\r\n  border-left: 5px solid #6495ed;\r\n  padding: 2%;\r\n}\r\n\r\n.sub-titles {\r\n  color: #6495ed;\r\n  font-size: 1.2em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.alerts-data {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.alerts-info {\r\n  cursor: pointer;\r\n  color: gray;\r\n  background-color: lightgray;\r\n  border-left: 5px solid #6495ed;\r\n  padding: 3%;\r\n  width: 150px;\r\n  text-align: center;\r\n}\r\n\r\n.alerts-info:hover {\r\n  color: white;\r\n  background-color: lightslategray;\r\n}\r\n\r\n.alerts-info .fa {\r\n  font-size: 3em;\r\n}\r\n\r\n.left-card {\r\n  border-right: 5px solid #bfcbd6;\r\n}\r\n\r\n.card-one .div1 {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n}\r\n\r\n.card-one .div1 p {\r\n  color: #bfcbd6;\r\n  font-size: 1.5em;\r\n  /* margin: 2em 0 2em 0;  */\r\n}\r\n\r\n.card-one .div1 span {\r\n  color: #bfcbd6;\r\n  font-size: 2.5em;\r\n  /* margin: 2em 0 2em 0;  */\r\n}\r\n\r\n.card-one .p1 {\r\n  color: #6495ed;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-two .div2 {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n}\r\n\r\n.card-two .div2 p {\r\n  color: crimson;\r\n  font-size: 1.5em;\r\n  /* margin: 2em 0 2em 0;  */\r\n}\r\n\r\n.card-two .div2 span {\r\n  color: crimson;\r\n  font-size: 2.5em;\r\n  /* margin: 2em 0 2em 0;  */\r\n}\r\n\r\n.card-two .p2 {\r\n  color: #bfcbd6;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n/* calendar css styles */\r\n\r\n/* end calendar css styles */\r\n\r\n/* css shimmers styles */\r\n\r\n.shine {\r\n  background: #f6f7f8;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f6f7f8 0%,\r\n    #edeef1 20%,\r\n    #f6f7f8 40%,\r\n    #f6f7f8 100%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-size: 800px 104px;\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n  -webkit-animation-duration: 1s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-name: placeholderShimmer;\r\n  -webkit-animation-timing-function: linear;\r\n}\r\n\r\n.box {\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.box1 {\r\n  height: 30px;\r\n  width: 100px;\r\n}\r\n\r\n.box2 {\r\n  height: 50px;\r\n  width: 50px;\r\n  border-radius: 25px;\r\n}\r\n\r\n/* div {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  margin-left: 25px;\r\n  margin-top: 15px;\r\n  vertical-align: top;\r\n}\r\n\r\nlines {\r\n  height: 10px;\r\n  margin-top: 10px;\r\n  width: 200px;\r\n}\r\n\r\nphoto {\r\n  display: block !important;\r\n  width: 325px;\r\n  height: 100px;\r\n  margin-top: 15px;\r\n} */\r\n\r\n@-webkit-keyframes placeholderShimmer {\r\n  0% {\r\n    background-position: -468px 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 468px 0;\r\n  }\r\n}\r\n\r\n/* end css shimmers styles */\r\n\r\n/* #page-content {\r\n  margin-top: 100px;\r\n} */\r\n\r\n.notify-dropdown {\r\n  width: 150%;\r\n  margin-left: -190px;\r\n}\r\n\r\n.padding {\r\n  padding: 0;\r\n  width: 205%;\r\n}\r\n\r\n.view-link:hover {\r\n  cursor: pointer;\r\n  background-color: #edeef1;\r\n}\r\n\r\n.view-link a {\r\n  cursor: pointer;\r\n  color: #bfcbd6;\r\n  text-decoration: none;\r\n}\r\n\r\n.list-item:hover {\r\n  cursor: pointer;\r\n  background-color: #edeef1;\r\n}\r\n\r\n.item-author {\r\n  color: #448bff;\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.item-author:hover {\r\n  color: #005ef7;\r\n  text-decoration: underline;\r\n}\r\n\r\n.item-author:not([href]):not([tabindex]) {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.item-author:not([href]):not([tabindex]):focus,\r\n.item-author:not([href]):not([tabindex]):hover {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.item-author:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .col-sm {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .col-sm-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .col-sm-1 {\r\n    flex: 0 0 8.3333333333%;\r\n    max-width: 8.3333333333%;\r\n  }\r\n\r\n  .col-sm-2 {\r\n    flex: 0 0 16.6666666667%;\r\n    max-width: 16.6666666667%;\r\n  }\r\n\r\n  .col-sm-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n\r\n  .col-sm-4 {\r\n    flex: 0 0 33.3333333333%;\r\n    max-width: 33.3333333333%;\r\n  }\r\n\r\n  .col-sm-5 {\r\n    flex: 0 0 41.6666666667%;\r\n    max-width: 41.6666666667%;\r\n  }\r\n\r\n  .col-sm-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n\r\n  .col-sm-7 {\r\n    flex: 0 0 58.3333333333%;\r\n    max-width: 58.3333333333%;\r\n  }\r\n\r\n  .col-sm-8 {\r\n    flex: 0 0 66.6666666667%;\r\n    max-width: 66.6666666667%;\r\n  }\r\n\r\n  .col-sm-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n\r\n  .col-sm-10 {\r\n    flex: 0 0 83.3333333333%;\r\n    max-width: 83.3333333333%;\r\n  }\r\n\r\n  .col-sm-11 {\r\n    flex: 0 0 91.6666666667%;\r\n    max-width: 91.6666666667%;\r\n  }\r\n\r\n  .col-sm-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .order-sm-first {\r\n    order: -1;\r\n  }\r\n\r\n  .order-sm-last {\r\n    order: 13;\r\n  }\r\n\r\n  .order-sm-0 {\r\n    order: 0;\r\n  }\r\n\r\n  .order-sm-1 {\r\n    order: 1;\r\n  }\r\n\r\n  .order-sm-2 {\r\n    order: 2;\r\n  }\r\n\r\n  .order-sm-3 {\r\n    order: 3;\r\n  }\r\n\r\n  .order-sm-4 {\r\n    order: 4;\r\n  }\r\n\r\n  .order-sm-5 {\r\n    order: 5;\r\n  }\r\n\r\n  .order-sm-6 {\r\n    order: 6;\r\n  }\r\n\r\n  .order-sm-7 {\r\n    order: 7;\r\n  }\r\n\r\n  .order-sm-8 {\r\n    order: 8;\r\n  }\r\n\r\n  .order-sm-9 {\r\n    order: 9;\r\n  }\r\n\r\n  .order-sm-10 {\r\n    order: 10;\r\n  }\r\n\r\n  .order-sm-11 {\r\n    order: 11;\r\n  }\r\n\r\n  .order-sm-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .offset-sm-1 {\r\n    margin-left: 8.3333333333%;\r\n  }\r\n\r\n  .offset-sm-2 {\r\n    margin-left: 16.6666666667%;\r\n  }\r\n\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-sm-4 {\r\n    margin-left: 33.3333333333%;\r\n  }\r\n\r\n  .offset-sm-5 {\r\n    margin-left: 41.6666666667%;\r\n  }\r\n\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-sm-7 {\r\n    margin-left: 58.3333333333%;\r\n  }\r\n\r\n  .offset-sm-8 {\r\n    margin-left: 66.6666666667%;\r\n  }\r\n\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-sm-10 {\r\n    margin-left: 83.3333333333%;\r\n  }\r\n\r\n  .offset-sm-11 {\r\n    margin-left: 91.6666666667%;\r\n  }\r\n}\r\n\r\n.text-muted {\r\n  color: #99a0ac !important;\r\n}\r\n\r\n.block,\r\n.card {\r\n  background: #fff;\r\n  border-width: 0;\r\n  border-radius: 0.25rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.avatar {\r\n  position: relative;\r\n  line-height: 1;\r\n  border-radius: 500px;\r\n  white-space: nowrap;\r\n  font-weight: 700;\r\n  border-radius: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-shrink: 0;\r\n  border-radius: 500px;\r\n  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, 0.15);\r\n}\r\n\r\n.avatar img {\r\n  border-radius: inherit;\r\n  width: 100%;\r\n}\r\n\r\n.gd-primary {\r\n  color: #fff;\r\n  border: none;\r\n  background: #448bff linear-gradient(45deg, #448bff, #44e9ff);\r\n}\r\n\r\n.gd-success {\r\n  color: #fff;\r\n  border: none;\r\n  background: #31c971 linear-gradient(45deg, #31c971, #3dc931);\r\n}\r\n\r\n.gd-info {\r\n  color: #fff;\r\n  border: none;\r\n  background: #14bae4 linear-gradient(45deg, #14bae4, #14e4a6);\r\n}\r\n\r\n.gd-warning {\r\n  color: #fff;\r\n  border: none;\r\n  background: #f4c414 linear-gradient(45deg, #f4c414, #f45414);\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .page-container {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .page-sidenav {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n.list {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.list-item {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.list-row .list-item {\r\n  flex-direction: row;\r\n  align-items: center;\r\n  padding: 0.75rem 0.625rem;\r\n}\r\n\r\n.list-row .list-item > * {\r\n  padding-left: 0.625rem;\r\n  padding-right: 0.625rem;\r\n}\r\n\r\n.no-wrap {\r\n  white-space: nowrap;\r\n}\r\n\r\n.text-color {\r\n  color: #5e676f;\r\n}\r\n\r\n.text-gd {\r\n  -webkit-background-clip: text;\r\n  -moz-background-clip: text;\r\n  background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  -moz-text-fill-color: transparent;\r\n  text-fill-color: transparent;\r\n}\r\n\r\n.text-sm {\r\n  font-size: 0.825rem;\r\n}\r\n\r\n.h-1x {\r\n  height: 1.25rem;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 1;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.w-48 {\r\n  width: 48px !important;\r\n  height: 48px !important;\r\n}\r\n\r\n.flex a:link {\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4Qiw0QkFBNEI7O0FBRTVCLHdCQUF3Qjs7QUFDeEI7RUFDRSxtQkFBbUI7RUFDbkI7Ozs7OztHQUE2SDtFQUM3SCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQkFBa0I7O0VBRWxCLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsMkNBQTJDO0VBQzNDLDBDQUEwQztFQUMxQyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHOztBQUVIO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFDQSw0QkFBNEI7O0FBRTVCOztHQUVHOztBQUVIO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUVuQixhQUFhO0VBRWIsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUVuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNERBQTREO0FBQzlEOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsYUFBYTtFQUViLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBRUUsbUJBQW1CO0VBRW5CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNjQ5NWVkO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYWxlcnRzLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFsZXJ0cy1pbmZvIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzY0OTVlZDtcclxuICBwYWRkaW5nOiAzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnRzLWluZm86aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLmFsZXJ0cy1pbmZvIC5mYSB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5sZWZ0LWNhcmQge1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNiZmNiZDY7XHJcbn1cclxuXHJcbi5jYXJkLW9uZSAuZGl2MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5jYXJkLW9uZSAuZGl2MSBwIHtcclxuICBjb2xvcjogI2JmY2JkNjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIC8qIG1hcmdpbjogMmVtIDAgMmVtIDA7ICAqL1xyXG59XHJcblxyXG4uY2FyZC1vbmUgLmRpdjEgc3BhbiB7XHJcbiAgY29sb3I6ICNiZmNiZDY7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICAvKiBtYXJnaW46IDJlbSAwIDJlbSAwOyAgKi9cclxufVxyXG5cclxuLmNhcmQtb25lIC5wMSB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmQtdHdvIC5kaXYyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmNhcmQtdHdvIC5kaXYyIHAge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgLyogbWFyZ2luOiAyZW0gMCAyZW0gMDsgICovXHJcbn1cclxuXHJcbi5jYXJkLXR3byAuZGl2MiBzcGFuIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIC8qIG1hcmdpbjogMmVtIDAgMmVtIDA7ICAqL1xyXG59XHJcblxyXG4uY2FyZC10d28gLnAyIHtcclxuICBjb2xvcjogI2JmY2JkNjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBjYWxlbmRhciBjc3Mgc3R5bGVzICovXHJcblxyXG4vKiBlbmQgY2FsZW5kYXIgY3NzIHN0eWxlcyAqL1xyXG5cclxuLyogY3NzIHNoaW1tZXJzIHN0eWxlcyAqL1xyXG4uc2hpbmUge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY3Zjg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICAjZjZmN2Y4IDAlLFxyXG4gICAgI2VkZWVmMSAyMCUsXHJcbiAgICAjZjZmN2Y4IDQwJSxcclxuICAgICNmNmY3ZjggMTAwJVxyXG4gICk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG4uYm94IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5ib3gxIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYm94MiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi8qIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmxpbmVzIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbnBob3RvIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwbGFjZWhvbGRlclNoaW1tZXIge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xyXG4gIH1cclxufVxyXG4vKiBlbmQgY3NzIHNoaW1tZXJzIHN0eWxlcyAqL1xyXG5cclxuLyogI3BhZ2UtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn0gKi9cclxuXHJcbi5ub3RpZnktZHJvcGRvd24ge1xyXG4gIHdpZHRoOiAxNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTkwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMDUlO1xyXG59XHJcblxyXG4udmlldy1saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMTtcclxufVxyXG5cclxuLnZpZXctbGluayBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNiZmNiZDY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMTtcclxufVxyXG5cclxuLml0ZW0tYXV0aG9yIHtcclxuICBjb2xvcjogIzQ0OGJmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWF1dGhvcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDVlZjc7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5pdGVtLWF1dGhvcjpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0tYXV0aG9yOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyxcclxuLml0ZW0tYXV0aG9yOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlciB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaXRlbS1hdXRob3I6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuY29sLXNtIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLWF1dG8ge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2wtc20tMSB7XHJcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMzMzMzJTtcclxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtc20tMiB7XHJcbiAgICBmbGV4OiAwIDAgMTYuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1zbS0zIHtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC5jb2wtc20tNCB7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMzMzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1zbS01IHtcclxuICAgIGZsZXg6IDAgMCA0MS42NjY2NjY2NjY3JTtcclxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLTYge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1zbS03IHtcclxuICAgIGZsZXg6IDAgMCA1OC4zMzMzMzMzMzMzJTtcclxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLTgge1xyXG4gICAgZmxleDogMCAwIDY2LjY2NjY2NjY2NjclO1xyXG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5jb2wtc20tOSB7XHJcbiAgICBmbGV4OiAwIDAgNzUlO1xyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLTEwIHtcclxuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMzMzMzJTtcclxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLTExIHtcclxuICAgIGZsZXg6IDAgMCA5MS42NjY2NjY2NjY3JTtcclxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXNtLTEyIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXNtLWZpcnN0IHtcclxuICAgIG9yZGVyOiAtMTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS1sYXN0IHtcclxuICAgIG9yZGVyOiAxMztcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS0wIHtcclxuICAgIG9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXNtLTEge1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc20tMiB7XHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS0zIHtcclxuICAgIG9yZGVyOiAzO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXNtLTQge1xyXG4gICAgb3JkZXI6IDQ7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc20tNSB7XHJcbiAgICBvcmRlcjogNTtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS02IHtcclxuICAgIG9yZGVyOiA2O1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXNtLTcge1xyXG4gICAgb3JkZXI6IDc7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc20tOCB7XHJcbiAgICBvcmRlcjogODtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS05IHtcclxuICAgIG9yZGVyOiA5O1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXNtLTEwIHtcclxuICAgIG9yZGVyOiAxMDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1zbS0xMSB7XHJcbiAgICBvcmRlcjogMTE7XHJcbiAgfVxyXG5cclxuICAub3JkZXItc20tMTIge1xyXG4gICAgb3JkZXI6IDEyO1xyXG4gIH1cclxuXHJcbiAgLm9mZnNldC1zbS0wIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm9mZnNldC1zbS0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLm9mZnNldC1zbS0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5vZmZzZXQtc20tMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLm9mZnNldC1zbS00IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5vZmZzZXQtc20tNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG5cclxuICAub2Zmc2V0LXNtLTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5vZmZzZXQtc20tNyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG5cclxuICAub2Zmc2V0LXNtLTgge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjclO1xyXG4gIH1cclxuXHJcbiAgLm9mZnNldC1zbS05IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgfVxyXG5cclxuICAub2Zmc2V0LXNtLTEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5vZmZzZXQtc20tMTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjOTlhMGFjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibG9jayxcclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDUwLCA1MCwgNTAsIDAuMTUpO1xyXG59XHJcblxyXG4uYXZhdGFyIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdkLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjNDQ4YmZmIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ0OGJmZiwgIzQ0ZTlmZik7XHJcbn1cclxuXHJcbi5nZC1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzMxYzk3MSBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMWM5NzEsICMzZGM5MzEpO1xyXG59XHJcblxyXG4uZ2QtaW5mbyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMxNGJhZTQgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTRiYWU0LCAjMTRlNGE2KTtcclxufVxyXG5cclxuLmdkLXdhcm5pbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjRjNDE0IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y0YzQxNCwgI2Y0NTQxNCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Utc2lkZW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5saXN0LXJvdyAubGlzdC1pdGVtIHtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDAuNjI1cmVtO1xyXG59XHJcblxyXG4ubGlzdC1yb3cgLmxpc3QtaXRlbSA+ICoge1xyXG4gIHBhZGRpbmctbGVmdDogMC42MjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC42MjVyZW07XHJcbn1cclxuXHJcbi5uby13cmFwIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGV4dC1jb2xvciB7XHJcbiAgY29sb3I6ICM1ZTY3NmY7XHJcbn1cclxuXHJcbi50ZXh0LWdkIHtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGV4dC1zbSB7XHJcbiAgZm9udC1zaXplOiAwLjgyNXJlbTtcclxufVxyXG5cclxuLmgtMXgge1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4udy00OCB7XHJcbiAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXggYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AdminDashboardComponent = /*#__PURE__*/function () {
      function AdminDashboardComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, AdminDashboardComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userid = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
        this.fullName = sessionStorage.getItem('fullname');
        this.spinner = false;
        this.allData = [];
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.spinner = true;
          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(1000, 60000);
          this.subscription = source.subscribe(function (val) {
            _this3.spinner = true;
            setTimeout(function () {
              _this3.getDashboardCountsData();
            }, 5000);
          });
        }
      }, {
        key: "getDashboardCountsData",
        value: function getDashboardCountsData() {
          var _this4 = this;

          this.spinner = true;
          this.beauticianService.getAllDashboardCounts().subscribe(function (response) {
            console.log("Get all dashboard counts response isss", response);

            if (response.success) {
              _this4.allData = response.data;
            } else {
              _this4.toastr.errorToastr(response.message);
            }

            clearTimeout();
            _this4.spinner = false;
          }, function (error) {
            console.log('Error while getting dashboard counts', error);

            _this4.toastr.errorToastr("Network failed, Please try again.");

            _this4.spinner = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('Admin dashbaord component destroyed');

          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-dashboard.component.css */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.css"))["default"]]
    })], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-profile/admin-profile.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/admin-profile/admin-profile.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminProfileAdminProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-col {\r\n  border-right: 3px solid lightgray;\r\n}\r\n\r\n.img-view {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.img-view .p1 {\r\n  color: lightslategrey;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.img-view .p2 {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.profile-col {\r\n  padding: 10px;\r\n  border-right: 3px solid lightgray;\r\n}\r\n\r\n.profile-col .p3 {\r\n  color: gray;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.profile-view .fa {\r\n  color: #aab5c0;\r\n  font-size: 1.2em;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-view .card-one,\r\n.card-two,\r\n.card-three,\r\n.card-four {\r\n  background-color: white;\r\n  border-left: 5px solid #6495ed;\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.service-col {\r\n  padding: 10px;\r\n}\r\n\r\n.service-col .p4 {\r\n  color: gray;\r\n  font-size: 1.3em;\r\n}\r\n\r\n/* service css styles */\r\n\r\n.myaccordion {\r\n  /* max-width: 500px; */\r\n  /* margin: 50px auto; */\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.myaccordion .card {\r\n  padding: 5px;\r\n  border: none;\r\n}\r\n\r\n/* .myaccordion .card,\r\n.myaccordion .card:last-child .card-header {\r\n  border: none;\r\n} */\r\n\r\n.myaccordion .card-header {\r\n  border-bottom-color: #edeff0;\r\n  background: transparent;\r\n}\r\n\r\n.myaccordion .fa {\r\n  font-size: 1.2em;\r\n}\r\n\r\n.myaccordion .btn {\r\n  width: 100%;\r\n  font-weight: bold;\r\n  color: lightslategray;\r\n  padding: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n/* .myaccordion .btn-link:hover, */\r\n\r\n.myaccordion .btn-link:focus {\r\n  text-decoration: none;\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.myaccordion li + li {\r\n  margin-top: 10px;\r\n}\r\n\r\n.myaccordion li {\r\n  color: #aab5c0;\r\n  font-size: 1em;\r\n}\r\n\r\n/* end service css styles */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tcHJvZmlsZS9hZG1pbi1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTs7OztFQUlFLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBLGtDQUFrQzs7QUFDbEM7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQSwyQkFBMkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1wcm9maWxlL2FkbWluLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29sIHtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5pbWctdmlldyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLXZpZXcgLnAxIHtcclxuICBjb2xvcjogbGlnaHRzbGF0ZWdyZXk7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmltZy12aWV3IC5wMiB7XHJcbiAgY29sb3I6ICNhYWI1YzA7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29sIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29sIC5wMyB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtdmlldyAuZmEge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtdmlldyAuY2FyZC1vbmUsXHJcbi5jYXJkLXR3byxcclxuLmNhcmQtdGhyZWUsXHJcbi5jYXJkLWZvdXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzY0OTVlZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWNvbCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlcnZpY2UtY29sIC5wNCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLyogc2VydmljZSBjc3Mgc3R5bGVzICovXHJcbi5teWFjY29yZGlvbiB7XHJcbiAgLyogbWF4LXdpZHRoOiA1MDBweDsgKi9cclxuICAvKiBtYXJnaW46IDUwcHggYXV0bzsgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm15YWNjb3JkaW9uIC5jYXJkIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiAubXlhY2NvcmRpb24gLmNhcmQsXHJcbi5teWFjY29yZGlvbiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59ICovXHJcblxyXG4ubXlhY2NvcmRpb24gLmNhcmQtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWRlZmYwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubXlhY2NvcmRpb24gLmZhIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4ubXlhY2NvcmRpb24gLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiAubXlhY2NvcmRpb24gLmJ0bi1saW5rOmhvdmVyLCAqL1xyXG4ubXlhY2NvcmRpb24gLmJ0bi1saW5rOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm15YWNjb3JkaW9uIGxpICsgbGkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5teWFjY29yZGlvbiBsaSB7XHJcbiAgY29sb3I6ICNhYWI1YzA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuLyogZW5kIHNlcnZpY2UgY3NzIHN0eWxlcyAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-profile/admin-profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-profile/admin-profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminProfileComponent */

  /***/
  function srcAppAdminAdminProfileAdminProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function () {
      return AdminProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminProfileComponent = /*#__PURE__*/function () {
      function AdminProfileComponent() {
        _classCallCheck(this, AdminProfileComponent);
      }

      _createClass(AdminProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminProfileComponent;
    }();

    AdminProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-profile/admin-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-profile.component.css */
      "./src/app/admin/admin-profile/admin-profile.component.css"))["default"]]
    })], AdminProfileComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-settings/admin-settings.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/admin-settings/admin-settings.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminSettingsAdminSettingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* main accrodian css styles */\r\n.accordion {\r\n\tborder-right: 3px solid #aab5c0;\r\n}\r\n.accordion .card {\r\n  background: none;\r\n  border: none;\r\n}\r\n.accordion .card .card-header {\r\n  background: none;\r\n  border: none;\r\n  padding: 0.4rem 1rem;\r\n  /* font-family: \"Roboto\", sans-serif; */\r\n}\r\n.accordion .card-header h2 span {\r\n  float: left;\r\n  margin-top: 10px;\r\n}\r\n.accordion .card-header .btn {\r\n  color: #aab5c0;\r\n  font-size: 1.04rem;\r\n  text-align: left;\r\n  position: relative;\r\n  font-weight: 500;\r\n  padding-left: 2rem;\r\n}\r\n.accordion .card-header i {\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 9px;\r\n}\r\n.accordion .card-header .btn:hover {\r\n  color: #ff8300;\r\n}\r\n.accordion .card-body {\r\n  color: #324353;\r\n  padding: 0.5rem 3rem;\r\n}\r\n.page-title {\r\n  color: #324353;\r\n  font-size: 1.2em;\r\n  margin: 3rem 0 3rem 1rem;\r\n  /* font-family: \"Roboto\", sans-serif; */\r\n  position: relative;\r\n}\r\n.page-title::after {\r\n  content: \"\";\r\n  width: 80px;\r\n  position: absolute;\r\n  height: 3px;\r\n  border-radius: 1px;\r\n  background: #73bb2b;\r\n  left: 0;\r\n  bottom: -15px;\r\n}\r\n.accordion .highlight .btn {\r\n  color: #74bd30;\r\n}\r\n.accordion .highlight i {\r\n  transform: rotate(180deg);\r\n}\r\n/* end main accrodian css styles */\r\n/* form css styles */\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"number\"],\r\ninput[type=\"file\"],\r\ninput[type=\"password\"] {\r\n  height: 50px;\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n.btn-action-upload {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n.btn-action-upload:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n.btn-action-update {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n.btn-action-update:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n.btn-action-cancel {\r\n  background-color: #bfcbd6;\r\n}\r\n.btn-action-cancel:hover {\r\n  background-color: #aab5c0;\r\n}\r\n/* end form css styles */\r\n/* alerts && notifications css styles */\r\nul.timeline {\r\n  list-style-type: none;\r\n  position: relative;\r\n}\r\nul.timeline:before {\r\n  content: ' ';\r\n  background: #d4d9df;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 29px;\r\n  width: 2px;\r\n  height: 100%;\r\n  z-index: 400;\r\n}\r\nul.timeline > li {\r\n  margin: 20px 0;\r\n  padding-left: 20px;\r\n}\r\nul.timeline > li:before {\r\n  content: ' ';\r\n  background: white;\r\n  display: inline-block;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  border: 3px solid #6495ed;\r\n  left: 20px;\r\n  width: 20px;\r\n  height: 20px;\r\n  z-index: 400;\r\n}\r\n.timeline li a {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  color: #6495ed !important;\r\n}\r\n.timeline .btn-action-read {\r\n  color: white;\r\n  background-color: #aab5c0;\r\n}\r\n.timeline .btn-action-read:hover {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n.btn-action-view {\r\n  color: white;\r\n  background-color: #aab5c0;\r\n}\r\n.btn-action-view:hover {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n.div1 {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 3rem 0 0 1rem;\r\n}\r\n.div1 p {\r\n  color: lightslategray;\r\n  font-size: 1em;\r\n  text-decoration: underline;\r\n}\r\n/* end alerts && notifications css styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2V0dGluZ3MvYWRtaW4tc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7Q0FDQywrQkFBK0I7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLGtDQUFrQztBQUVsQyxvQkFBb0I7QUFDcEI7Ozs7O0VBS0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLHdCQUF3QjtBQUd4Qix1Q0FBdUM7QUFDdkM7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBQ0EsMkNBQTJDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tc2V0dGluZ3MvYWRtaW4tc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1haW4gYWNjcm9kaWFuIGNzcyBzdHlsZXMgKi9cclxuLmFjY29yZGlvbiB7XHJcblx0Ym9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2FhYjVjMDtcclxufVxyXG4uYWNjb3JkaW9uIC5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYWNjb3JkaW9uIC5jYXJkIC5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XHJcbiAgLyogZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7ICovXHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgaDIgc3BhbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYWNjb3JkaW9uIC5jYXJkLWhlYWRlciAuYnRuIHtcclxuICBjb2xvcjogI2FhYjVjMDtcclxuICBmb250LXNpemU6IDEuMDRyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgaSB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA5cHg7XHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZC1oZWFkZXIgLmJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZjgzMDA7XHJcbn1cclxuLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICBjb2xvcjogIzMyNDM1MztcclxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcclxufVxyXG4ucGFnZS10aXRsZSB7XHJcbiAgY29sb3I6ICMzMjQzNTM7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW46IDNyZW0gMCAzcmVtIDFyZW07XHJcbiAgLyogZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYWdlLXRpdGxlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICM3M2JiMmI7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xNXB4O1xyXG59XHJcbi5hY2NvcmRpb24gLmhpZ2hsaWdodCAuYnRuIHtcclxuICBjb2xvcjogIzc0YmQzMDtcclxufVxyXG4uYWNjb3JkaW9uIC5oaWdobGlnaHQgaSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4vKiBlbmQgbWFpbiBhY2Nyb2RpYW4gY3NzIHN0eWxlcyAqL1xyXG5cclxuLyogZm9ybSBjc3Mgc3R5bGVzICovXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi11cGxvYWQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi11cGxvYWQ6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2N2FmO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi11cGRhdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2N2FmO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi11cGRhdGU6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2OGFmO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1jYW5jZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmNiZDY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG4vKiBlbmQgZm9ybSBjc3Mgc3R5bGVzICovXHJcblxyXG5cclxuLyogYWxlcnRzICYmIG5vdGlmaWNhdGlvbnMgY3NzIHN0eWxlcyAqL1xyXG51bC50aW1lbGluZSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG51bC50aW1lbGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kOiAjZDRkOWRmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjlweDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA0MDA7XHJcbn1cclxudWwudGltZWxpbmUgPiBsaSB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbnVsLnRpbWVsaW5lID4gbGk6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzY0OTVlZDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB6LWluZGV4OiA0MDA7XHJcbn1cclxuXHJcbi50aW1lbGluZSBsaSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNjQ5NWVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSAuYnRuLWFjdGlvbi1yZWFkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC5idG4tYWN0aW9uLXJlYWQ6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi12aWV3IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tdmlldzpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5kaXYxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogM3JlbSAwIDAgMXJlbTtcclxufVxyXG5cclxuLmRpdjEgcCB7XHJcbiAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi8qIGVuZCBhbGVydHMgJiYgbm90aWZpY2F0aW9ucyBjc3Mgc3R5bGVzICovIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-settings/admin-settings.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-settings/admin-settings.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminSettingsComponent */

  /***/
  function srcAppAdminAdminSettingsAdminSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSettingsComponent", function () {
      return AdminSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdminSettingsComponent = /*#__PURE__*/function () {
      function AdminSettingsComponent() {
        _classCallCheck(this, AdminSettingsComponent);
      }

      _createClass(AdminSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
              $(this).prev(".card-header").addClass("highlight");
            }); // Highlight open collapsed element 

            $(".card-header .btn").click(function () {
              $(".card-header").not($(this).parents()).removeClass("highlight");
              $(this).parents(".card-header").toggleClass("highlight");
            });
          });
        }
      }]);

      return AdminSettingsComponent;
    }();

    AdminSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-settings/admin-settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-settings.component.css */
      "./src/app/admin/admin-settings/admin-settings.component.css"))["default"]]
    })], AdminSettingsComponent);
    /***/
  },

  /***/
  "./src/app/admin/beautician-form/beautician-form.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/beautician-form/beautician-form.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminBeauticianFormBeauticianFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* search and status fields css styles */\r\n.titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.titles p {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n.width-50 {\r\n  width: 150px;\r\n}\r\n.width-100 {\r\n  height: 40px !important;\r\n}\r\n.search-fields {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #1667af;\r\n  padding: 5px;\r\n  width: 50px;\r\n}\r\n/* end search and status fields css styles */\r\n/* table css styles starts */\r\n.main-title {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n}\r\n.btn-action-addnew {\r\n  background-color: #bfcbd6;\r\n}\r\n.btn-action-addnew:hover {\r\n  background-color: #aab5c0;\r\n}\r\n.btn-action-back {\r\n  background-color: #bfcbd6;\r\n  width: 100px;\r\n}\r\n.btn-action-back:hover {\r\n  background-color: #aab5c0;\r\n}\r\n.table-head tr th {\r\n  color: #6495ed;\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n}\r\n.table-body tr td {\r\n  color: gray;\r\n  font-weight: lighter;\r\n  font-size: 0.9em;\r\n  font-weight: 600;\r\n}\r\n.table-body .table-profile {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n/* .table-body tr td:hover {\r\n  color: crimson;\r\n} */\r\n.bg-status .is-active {\r\n  color: forestgreen;\r\n}\r\n.bg-status .is-inactive {\r\n  color: crimson;\r\n}\r\n.btn-action-view {\r\n  color: white;\r\n  border: 1px solid #6495ed;\r\n  background-color: #6495ed;\r\n}\r\n.btn-action-view:hover {\r\n  background-color: #1667af;\r\n}\r\n.btn-action-update {\r\n  color: white;\r\n  border: 1px solid #aab5c0;\r\n  background-color: #aab5c0;\r\n}\r\n.btn-action-update:hover {\r\n  background-color: gray;\r\n}\r\n.btn-action-delete {\r\n  color: white;\r\n  border: 1px solid lightcoral;\r\n  background-color: lightcoral;\r\n}\r\n.btn-action-delete:hover {\r\n  background-color: crimson;\r\n}\r\n.btn-action-restore {\r\n  color: white;\r\n  border: 1px solid lightgreen;\r\n  background-color: lightgreen;\r\n}\r\n.btn-action-restore:hover {\r\n  background-color: forestgreen;\r\n}\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  /* Position the tooltip */\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n}\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n/* end table css styles starts */\r\n/* table pagination styles */\r\n.pagination_rounded,\r\n.pagination_square {\r\n  display: flex;\r\n  justify-content: center;\r\n  /* margin-left: 400px;\r\n  margin-top: 300px; */\r\n}\r\n.pagination_rounded ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.pagination_rounded li:first-child {\r\n  margin-left: 0px;\r\n}\r\n.pagination_rounded ul li {\r\n  cursor: pointer;\r\n  float: left;\r\n  margin-left: 20px;\r\n}\r\n.pagination_rounded ul li a:hover {\r\n  background: #4285f4;\r\n  color: #fff;\r\n  border: 1px solid #4285f4;\r\n}\r\na:link {\r\n  text-decoration: none;\r\n}\r\n.pagination_rounded ul .hidden-xs a {\r\n  background: #4285f4;\r\n  color: #fff;\r\n  border: 1px solid #4285f4;\r\n}\r\n.pagination_rounded .prev {\r\n  margin-left: 0px !important;\r\n  border-radius: 35px !important;\r\n  width: 90px !important;\r\n  height: 34px !important;\r\n  line-height: 34px !important;\r\n}\r\n.pagination_rounded ul li a {\r\n  float: left;\r\n  color: #4285f4;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  height: 30px;\r\n  width: 30px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n  border: 1px solid #aab5c0;\r\n  text-decoration: none;\r\n}\r\n.pagination_rounded .prev i {\r\n  margin-right: 10px;\r\n}\r\n.pagination_rounded .next {\r\n  border-radius: 35px !important;\r\n  width: 90px !important;\r\n  height: 34px !important;\r\n  line-height: 34px !important;\r\n}\r\n.visible-xs {\r\n  display: none !important;\r\n}\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n/* end pagination styles */\r\n/* add form css styles starts */\r\n.btn-action {\r\n  background-color: #bfcbd6;\r\n}\r\n.btn-action:hover {\r\n  background-color: #aab5c0;\r\n}\r\n.para1 {\r\n  color: #aab5c0; \r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n  border-left: 3px solid #6495ED;\r\n  padding: 5px;\r\n}\r\nlabel {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"],\r\ninput[type=\"number\"],\r\ninput[type=\"file\"] {\r\n  height: 50px;\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n.select {\r\n  height: 50px;\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n.btn-action-generate {\r\n  color: white;\r\n  background-color: #6495ED;\r\n}\r\n.btn-action-generate:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n.btn-action-add {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n.btn-action-cancel {\r\n  background-color: #bfcbd6;\r\n}\r\n.btn-action-cancel:hover {\r\n  background-color: #aab5c0;\r\n}\r\n.label-title {\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.label-title .card-link {\r\n  cursor: pointer;\r\n  color: gray !important;\r\n  font-size: 1em;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  font-size: 0.5em;\r\n  margin-left: -20px;\r\n}\r\n.isActive {\r\n  background-color: lightgray;\r\n}\r\n/* end add form css styles starts */\r\n/* modal css styles starts */\r\n.btn-action-cancel {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #ccc;\r\n}\r\n.btn-action-cancel:hover {\r\n  color: white;\r\n  background-color: gray;\r\n}\r\n.btn-action-add {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n/* end modal css styles starts */\r\n/* sidenav styles */\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n.add-user-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n  margin-top: -45px;\r\n}\r\n.profile-details {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.profile-details .p1 {\r\n  font-size: 1em;\r\n}\r\n.profile-details .p2 {\r\n  color: #aab5c0;\r\n  font-size: 0.8em;\r\n}\r\n.table-data tbody .tr1 td {\r\n  color: #6495ed;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr2 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr3 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr4 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr5 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr6 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.table-data tbody .tr7 td {\r\n  color: #aab5c0;\r\n  font-size: 0.9em;\r\n}\r\n.checked {\r\n  color: orange;\r\n}\r\n.para2, .para3 {\r\n  color: lightcoral;\r\n  font-weight: bold;\r\n  border-left: 3px solid #6495ED;\r\n  padding: 5px;\r\n}\r\n.div2 span {\r\n  color: #aab5c0;\r\n  /* background-color: #6495ED; */\r\n  border: 1px solid #aab5c0;\r\n  border-radius: 10px;\r\n  font-size: 1em;\r\n  padding: 5px;\r\n}\r\n.div2 span:hover {\r\n  color: white;\r\n  background-color: #bfcbd6;\r\n}\r\n.div2 ul li {\r\n  color: #aab5c0;\r\n  /* background-color: #6495ED; */\r\n  border: 1px solid #aab5c0;\r\n  border-radius: 10px;\r\n  font-size: 1em;\r\n  padding: 5px;\r\n}\r\n.div2 ul li:hover {\r\n  color: white;\r\n  background-color: #bfcbd6;\r\n}\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n/* css shimmers styles */\r\n.shine {\r\n  background: #f6f7f8;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #f6f7f8 0%,\r\n    #edeef1 20%,\r\n    #f6f7f8 40%,\r\n    #f6f7f8 100%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-size: 800px 104px;\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n  -webkit-animation-duration: 1s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-name: placeholderShimmer;\r\n  -webkit-animation-timing-function: linear;\r\n}\r\n.box {\r\n  height: 10px;\r\n  width: 100px;\r\n}\r\n/* div {\r\n  display: inline-flex;\r\n  flex-direction: column;\r\n  margin-left: 25px;\r\n  margin-top: 15px;\r\n  vertical-align: top;\r\n}\r\n\r\nlines {\r\n  height: 10px;\r\n  margin-top: 10px;\r\n  width: 200px;\r\n}\r\n\r\nphoto {\r\n  display: block !important;\r\n  width: 325px;\r\n  height: 100px;\r\n  margin-top: 15px;\r\n} */\r\n@-webkit-keyframes placeholderShimmer {\r\n  0% {\r\n    background-position: -468px 0;\r\n  }\r\n\r\n  100% {\r\n    background-position: 468px 0;\r\n  }\r\n}\r\n/* end css shimmers styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVhdXRpY2lhbi1mb3JtL2JlYXV0aWNpYW4tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4QztFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0EsNENBQTRDO0FBRTVDLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUVBOztHQUVHO0FBRUg7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLGdDQUFnQztBQUVoQyw0QkFBNEI7QUFDNUI7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QjtzQkFDb0I7QUFDdEI7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBLDBCQUEwQjtBQUUxQiwrQkFBK0I7QUFDL0I7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQSxtQ0FBbUM7QUFFbkMsNEJBQTRCO0FBQzVCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0EsZ0NBQWdDO0FBRWhDLG1CQUFtQjtBQUNuQjtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsbUJBQW1CO0VBQ25COzs7Ozs7R0FBNkg7RUFDN0gsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsa0JBQWtCOztFQUVsQiw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLDJDQUEyQztFQUMzQywwQ0FBMEM7RUFDMUMseUNBQXlDO0FBQzNDO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFFSDtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFDQSw0QkFBNEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9iZWF1dGljaWFuLWZvcm0vYmVhdXRpY2lhbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzZWFyY2ggYW5kIHN0YXR1cyBmaWVsZHMgY3NzIHN0eWxlcyAqL1xyXG4udGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVzIHAge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53aWR0aC01MCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwIHtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi8qIGVuZCBzZWFyY2ggYW5kIHN0YXR1cyBmaWVsZHMgY3NzIHN0eWxlcyAqL1xyXG5cclxuLyogdGFibGUgY3NzIHN0eWxlcyBzdGFydHMgKi9cclxuLm1haW4tdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1hZGRuZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmNiZDY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZG5ldzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWJhY2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWI1YzA7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkIHRyIHRoIHtcclxuICBjb2xvcjogIzY0OTVlZDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGFibGUtYm9keSB0ciB0ZCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLnRhYmxlLWJvZHkgdHIgdGQ6aG92ZXIge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59ICovXHJcblxyXG4uYmctc3RhdHVzIC5pcy1hY3RpdmUge1xyXG4gIGNvbG9yOiBmb3Jlc3RncmVlbjtcclxufVxyXG5cclxuLmJnLXN0YXR1cyAuaXMtaW5hY3RpdmUge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi12aWV3IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0OTVlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi12aWV3OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2N2FmO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi11cGRhdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFiNWMwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWI1YzA7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXVwZGF0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tZGVsZXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXJlc3RvcmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXJlc3RvcmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLyogZW5kIHRhYmxlIGNzcyBzdHlsZXMgc3RhcnRzICovXHJcblxyXG4vKiB0YWJsZSBwYWdpbmF0aW9uIHN0eWxlcyAqL1xyXG4ucGFnaW5hdGlvbl9yb3VuZGVkLFxyXG4ucGFnaW5hdGlvbl9zcXVhcmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4OyAqL1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbl9yb3VuZGVkIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbl9yb3VuZGVkIGxpOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbl9yb3VuZGVkIHVsIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3JvdW5kZWQgdWwgbGkgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQyODVmNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDI4NWY0O1xyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCB1bCAuaGlkZGVuLXhzIGEge1xyXG4gIGJhY2tncm91bmQ6ICM0Mjg1ZjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyODVmNDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCAucHJldiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3JvdW5kZWQgdWwgbGkgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICM0Mjg1ZjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFiNWMwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCAucHJldiBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3JvdW5kZWQgLm5leHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmxlLXhzIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0Rpc2FibGUge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLyogZW5kIHBhZ2luYXRpb24gc3R5bGVzICovXHJcblxyXG4vKiBhZGQgZm9ybSBjc3Mgc3R5bGVzIHN0YXJ0cyAqL1xyXG4uYnRuLWFjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWI1YzA7XHJcbn1cclxuXHJcbi5wYXJhMSB7XHJcbiAgY29sb3I6ICNhYWI1YzA7IFxyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjQ5NUVEO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tZ2VuZXJhdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NUVEO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1nZW5lcmF0ZTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY4YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFiNWMwO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUgLmNhcmQtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5pc0FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi8qIGVuZCBhZGQgZm9ybSBjc3Mgc3R5bGVzIHN0YXJ0cyAqL1xyXG5cclxuLyogbW9kYWwgY3NzIHN0eWxlcyBzdGFydHMgKi9cclxuLmJ0bi1hY3Rpb24tY2FuY2VsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1hZGQ6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2N2FmO1xyXG59XHJcbi8qIGVuZCBtb2RhbCBjc3Mgc3R5bGVzIHN0YXJ0cyAqL1xyXG5cclxuLyogc2lkZW5hdiBzdHlsZXMgKi9cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYWRkLXVzZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgdGV4dC1zaGFkb3c6IDNweCA0cHggN3B4IHJnYmEoODEsIDY3LCAyMSwgMC44KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IC00NXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWRldGFpbHMgLnAxIHtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtZGV0YWlscyAucDIge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjEgdGQge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjIgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjMgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjQgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjUgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjYgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhIHRib2R5IC50cjcgdGQge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5jaGVja2VkIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4ucGFyYTIsIC5wYXJhMyB7XHJcbiAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNjQ5NUVEO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRpdjIgc3BhbiB7XHJcbiAgY29sb3I6ICNhYWI1YzA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzY0OTVFRDsgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFiNWMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZGl2MiBzcGFuOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxufVxyXG5cclxuLmRpdjIgdWwgbGkge1xyXG4gIGNvbG9yOiAjYWFiNWMwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM2NDk1RUQ7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYjVjMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRpdjIgdWwgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjYmQ2O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBjc3Mgc2hpbW1lcnMgc3R5bGVzICovXHJcbi5zaGluZSB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byByaWdodCxcclxuICAgICNmNmY3ZjggMCUsXHJcbiAgICAjZWRlZWYxIDIwJSxcclxuICAgICNmNmY3ZjggNDAlLFxyXG4gICAgI2Y2ZjdmOCAxMDAlXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODAwcHggMTA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi8qIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmxpbmVzIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbnBob3RvIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMjVweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0gKi9cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwbGFjZWhvbGRlclNoaW1tZXIge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NjhweCAwO1xyXG4gIH1cclxufVxyXG4vKiBlbmQgY3NzIHNoaW1tZXJzIHN0eWxlcyAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/beautician-form/beautician-form.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/beautician-form/beautician-form.component.ts ***!
    \********************************************************************/

  /*! exports provided: BeauticianFormComponent */

  /***/
  function srcAppAdminBeauticianFormBeauticianFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianFormComponent", function () {
      return BeauticianFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var BeauticianFormComponent = /*#__PURE__*/function () {
      function BeauticianFormComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, BeauticianFormComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
        this.fullName = null;
        this.userName = null;
        this.emailName = null;
        this.passWord = null;
        this.mobileNumber = null;
        this.profileImage = null;
        this.age = null;
        this.experience = null;
        this.rating = null;
        this.viewItem = {};
        this.SUBSERVICES = [];
        this.viewPage = 'table';
        this.btnType = 'submit';
        this.currentIndex = null;
        this.spinner = false;
        this.rowsOnPage = 10;
        this.limit = 10;
        this.page = 1;
        this.count = 0;
        this.pager = {};
        this.totalPages = [];
        this.temptotalPages = [];
        this.searchQuery = "";
        this.statusQuery = null;
        this.filterStatus = null;
        this.beauticians = [];
        this.servicesList = [];
        this.subSerivcesObj = {};
        this.subServicesList = [];
        this.selectedServices = [];
        this.servicesSettings = {};
        this.selectedSubServices = [];
        this.subServicesSettings = {};
        this.subSettings = [];
        this.allSubServices = [];
        this.selectAll = [];
        this.serviceIds = [];
      }

      _createClass(BeauticianFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spinner = true;
          this.getAllBeauticiansList();
          this.getAllBeautyServicesList();
          this.servicesSettings = {
            singleSelection: false,
            text: "Select Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2
          };
          this.subServicesSettings = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: true
          };
        }
      }, {
        key: "getAllBeautyServicesList",
        value: function getAllBeautyServicesList() {
          var _this5 = this;

          this.beauticianService.getAllBeautyServices().subscribe(function (response) {
            console.log("Get all beauty services response isss", response);

            if (response.success) {
              _this5.servicesList = response.data[0];
              _this5.subSerivcesObj = response.data[1];
              _this5.allSubServices = [];
              _this5.selectedSubServices = [];
              _this5.subSettings = [];
              _this5.selectAll = [];
              _this5.serviceIds = [];

              for (var _i = 0, _Object$keys = Object.keys(_this5.subSerivcesObj); _i < _Object$keys.length; _i++) {
                var item = _Object$keys[_i];

                _this5.allSubServices.push(_this5.subSerivcesObj[item]);

                _this5.selectedSubServices.push([]);

                _this5.subSettings.push(_this5.subServicesSettings);

                _this5.selectAll.push(false);

                _this5.serviceIds.push(Number(item));
              }

              console.log('all sub services isss', _this5.allSubServices);

              if (_this5.viewPage === 'form' && _this5.btnType === 'update') {
                _this5.selectedSubServices = _this5.viewItem.subservices;
                var id = 0;

                var _iterator = _createForOfIteratorHelper(_this5.selectedSubServices),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _item = _step.value;
                    _this5.selectAll[id] = _item.length !== 0 ? true : false;
                    _this5.subSettings[id] = {
                      singleSelection: false,
                      text: "Select Sub Services :",
                      selectAllText: "Select All",
                      unSelectAllText: "UnSelect All",
                      enableSearchFilter: true,
                      classes: "myclass custom-class",
                      badgeShowLimit: 2,
                      disabled: _item.length !== 0 ? false : true
                    };
                    id += 1;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            } else {
              _this5.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this5.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "onActionBack",
        value: function onActionBack() {
          this.router.navigate(['/services']);
        }
      }, {
        key: "onClickView",
        value: function onClickView(view) {
          console.log('Selected view isss', view);
          this.viewPage = view;
          this.resetForm();
        }
      }, {
        key: "openNav",
        value: function openNav(item, index) {
          this.viewItem = item;
          this.currentIndex = index + 1;
          document.getElementById("mySidenav").style.width = "500px";
          document.getElementById("main").style.marginRight = "250px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.viewItem = {};
          this.currentIndex = null;
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginRight = "0";
        }
      }, {
        key: "getAllBeauticiansList",
        value: function getAllBeauticiansList() {
          var _this6 = this;

          this.spinner = true;
          var beauticiansPayload = {
            limit: Number(this.limit),
            page: Number(this.page),
            query: this.searchQuery,
            status: !this.statusQuery || this.statusQuery === null ? "all" : Number(this.statusQuery)
          };
          console.log("Post payload to get all beauticians data isss", beauticiansPayload);
          this.beauticianService.getAllBeauticiansList(beauticiansPayload).subscribe(function (response) {
            console.log("Get all beauticians response isss", response);

            if (response.success) {
              _this6.beauticians = response.data;
              _this6.count = response.count;

              _this6.createPager();
            } else {
              _this6.toastr.errorToastr(response.message);
            }

            _this6.spinner = false;
          }, function (error) {
            _this6.toastr.errorToastr("Network failed, Please try again.");

            _this6.spinner = false;
          });
        }
      }, {
        key: "getPage",
        value: function getPage(event) {
          console.log("Selected page isss", event);
          this.page = Number(event);
          this.getAllBeauticiansList();
        }
      }, {
        key: "createPager",
        value: function createPager() {
          // this.pager.startCount = this.beauticians.length > 0 && Number(this.page) === 1 ? 1 : this.beauticians.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
          // this.pager.endCount = Number(this.rowsOnPage) === this.beauticians.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          // console.log(this.pager);
          // let endLimit: any =
          //   Math.round(this.count / this.limit) === 0
          //     ? Math.round(this.count / this.limit)
          //     : Math.round(this.count / this.limit) + 1;
          // endLimit = endLimit === 0 ? 1 : endLimit;
          // console.log("end limit isss", endLimit);
          var endLimit = 0;
          var totalNum = Number(this.count / this.limit);

          if (totalNum <= Math.round(Number(this.count / this.limit))) {
            endLimit = Math.round(totalNum);
          } else if (totalNum > Math.round(Number(this.count / this.limit))) {
            endLimit = Math.round(totalNum) + 1;
          }

          console.log('end limit isss', endLimit);
          this.totalPages = [];
          this.temptotalPages = [];
          this.totalPages.push('Prev');

          for (var num = 1; num <= Number(endLimit); num += 1) {
            this.totalPages.push(num);
            this.temptotalPages.push(num);
          }

          this.totalPages.push('Next');
          console.log('total pages isss', this.totalPages);
        }
      }, {
        key: "onSearchData",
        value: function onSearchData() {
          // console.log('search request data isss', this.searchQuery);
          if (this.searchQuery || this.searchQuery !== "") {
            this.getAllBeauticiansList();
          }
        }
      }, {
        key: "onInputSearch",
        value: function onInputSearch() {
          if (!this.searchQuery || this.searchQuery === "") {
            this.getAllBeauticiansList();
          }
        }
      }, {
        key: "onSelectStatus",
        value: function onSelectStatus() {
          this.getAllBeauticiansList();
        }
      }, {
        key: "onClickAction",
        value: function onClickAction(item, id, config) {
          console.log('Selected item and id and config isss', item, id, config);
          this.viewItem = item;
          var tempArr = [];

          var _iterator2 = _createForOfIteratorHelper(this.viewItem.subservices),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _item2 = _step2.value;
              tempArr.push(underscore__WEBPACK_IMPORTED_MODULE_6__["pluck"](_item2, 'sub_service_name'));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.SUBSERVICES = underscore__WEBPACK_IMPORTED_MODULE_6__["flatten"](tempArr);
          console.log('sub services isss', this.SUBSERVICES);

          if (config === 'update') {
            this.viewPage = 'form';
            this.btnType = 'update';
            this.fullName = item.fullname;
            this.userName = item.username;
            this.emailName = item.email;
            this.passWord = item.password;
            this.mobileNumber = Number(item.mobile);
            this.profileImage = item.profile;
            this.age = Number(item.age);
            this.experience = Number(item.experience);
            this.rating = item.rating.toString();
            this.getAllBeautyServicesList();
          } else if (config === 'view') {
            this.openNav(item, id);
          }
        }
      }, {
        key: "generatePassword",
        value: function generatePassword() {
          this.passWord = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYYMMDDHHMMss');
          console.log('generated password isss', this.passWord);
        }
      }, {
        key: "selectedFile",
        value: function selectedFile(event) {
          console.log('Selected file isss', event.target.files[0]);
          this.profileImage = event.target.files[0];
        }
      }, {
        key: "onInputAction",
        value: function onInputAction(item, id, event) {
          console.log('Selected event and item and id isss', event, item, id);
          this.selectAll[id] = event;
          console.log('selected checked isss', this.selectAll);
          this.subSettings[id] = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: !event
          };

          if (event === false) {
            this.subSettings[id] = {
              singleSelection: false,
              text: "Select Sub Services :",
              selectAllText: "Select All",
              unSelectAllText: "UnSelect All",
              enableSearchFilter: true,
              classes: "myclass custom-class",
              badgeShowLimit: 2,
              disabled: true
            };
            this.selectedSubServices[id] = [];
          }
        }
      }, {
        key: "onCollapseBody",
        value: function onCollapseBody(item, id) {
          console.log('Selected item and index isss', item, id);
          this.currentIndex = Number(id);
        } // select and de-select services

      }, {
        key: "onSerivceSelect",
        value: function onSerivceSelect(item) {
          console.log(item);
          this.subServicesList = [];
          this.subServicesList = this.subSerivcesObj[item.id];
          console.log(this.selectedServices);
        }
      }, {
        key: "OnSerivceDeSelect",
        value: function OnSerivceDeSelect(item) {
          console.log(item);
          this.subServicesList = [];
          console.log(this.selectedServices);
        }
      }, {
        key: "onSelectAllSerivce",
        value: function onSelectAllSerivce(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllSerivce",
        value: function onDeSelectAllSerivce(items) {
          console.log(items);
          this.subServicesList = [];
        } // select and de-select sub services

      }, {
        key: "onSubServiceSelect",
        value: function onSubServiceSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "OnSubServiceDeSelect",
        value: function OnSubServiceDeSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "onSelectAllSubService",
        value: function onSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllSubService",
        value: function onDeSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "saveBeauticianData",
        value: function saveBeauticianData() {
          var _this7 = this;

          var id = 0;
          var SERVICES = [];

          var _iterator3 = _createForOfIteratorHelper(this.selectedSubServices),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;

              var _iterator4 = _createForOfIteratorHelper(item),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var data = _step4.value;
                  SERVICES.push(data.sub_service_id);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              id += 1;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          console.log('all SERVICES isss', SERVICES);
          var beauticianPayload = {
            users: {
              user_id: this.btnType === 'update' ? this.viewItem.user_id : null,
              fullname: this.fullName,
              username: this.userName,
              email: this.emailName,
              password: this.passWord,
              mobile: this.mobileNumber.toString(),
              profile: null,
              role: 'beautician',
              status: 1
            },
            workers: {
              worker_id: this.btnType === 'update' ? this.viewItem.worker_id : null,
              owner_id: null,
              beautician_id: null,
              name: this.fullName,
              age: Number(this.age),
              experience: Number(this.experience),
              services: SERVICES.join(','),
              rating: Number(this.rating),
              status: 1
            }
          };
          console.log('Post payload to add/update beautician data isss', beauticianPayload);
          var formData = new FormData();
          formData.append('user_id', beauticianPayload.users.user_id);
          formData.append('fullname', this.fullName);
          formData.append('username', this.userName);
          formData.append('email', this.emailName);
          formData.append('password', this.passWord);
          formData.append('mobile', this.mobileNumber.toString());
          formData.append('profile', null);
          formData.append('role', 'beautician');
          formData.append('status', '1');
          formData.append('file', this.profileImage, this.profileImage.name);
          console.log(formData.get('file'));
          this.beauticianService.addBeautician(beauticianPayload).subscribe(function (response) {
            console.log('Get add/update beautician data response isss', response);

            if (response.success) {
              _this7.toastr.successToastr(response.message);

              _this7.viewPage = 'table';

              _this7.resetForm();
            } else {
              _this7.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this7.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "setDisableModal",
        value: function setDisableModal() {
          if (!this.selectAll.includes(true)) {
            return true;
          } else {
            var count = 0;

            var _iterator5 = _createForOfIteratorHelper(this.selectedSubServices),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var item = _step5.value;

                if (item.length === 0) {
                  count += 1;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (count === this.selectedSubServices.length) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "deleteRestoreBeautician",
        value: function deleteRestoreBeautician() {
          var _this8 = this;

          var beauticianPayload = {
            user_id: Number(this.viewItem.user_id),
            worker_id: Number(this.viewItem.worker_id),
            status: Number(this.viewItem.status) === 1 ? 0 : 1
          };
          console.log('Post payload to delete/restore beautician data isss', beauticianPayload);
          this.beauticianService.deleteRestoreBeauticianById(beauticianPayload).subscribe(function (response) {
            console.log('Get delete/restore beautician data response isss', response);

            if (response.success) {
              _this8.toastr.successToastr(response.message);

              $('#deleteRestore').modal('hide');
              _this8.viewPage = 'table';

              _this8.resetForm();
            } else {
              _this8.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this8.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.beauticianFormRef) {
            this.beauticianFormRef.reset();
          }

          this.fullName = null;
          this.userName = null;
          this.emailName = null;
          this.passWord = null;
          this.mobileNumber = null;
          this.profileImage = null;
          this.age = null;
          this.experience = null;
          this.rating = null;
          this.btnType = 'submit';

          if (this.viewPage === 'form') {
            this.servicesList = [];
            this.subSerivcesObj = {};
            this.allSubServices = [];
            this.selectedSubServices = [];
            this.subSettings = [];
            this.selectAll = [];
            this.serviceIds = [];
            this.getAllBeautyServicesList();
          }

          if (this.viewPage === 'table') {
            this.rowsOnPage = 10;
            this.limit = 10;
            this.page = 1;
            this.count = 0;
            this.pager = {};
            this.totalPages = [];
            this.temptotalPages = [];
            this.searchQuery = "";
            this.statusQuery = null;
            this.filterStatus = null;
            this.beauticians = [];
            this.getAllBeauticiansList();
          }
        }
      }]);

      return BeauticianFormComponent;
    }();

    BeauticianFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', {
      "static": false
    })], BeauticianFormComponent.prototype, "fileInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('beauticianForm', {
      "static": false
    })], BeauticianFormComponent.prototype, "beauticianFormRef", void 0);
    BeauticianFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beautician-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beautician-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beautician-form/beautician-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beautician-form.component.css */
      "./src/app/admin/beautician-form/beautician-form.component.css"))["default"]]
    })], BeauticianFormComponent);
    /***/
  },

  /***/
  "./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminBeautyParlourFormBeautyParlourFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  font-size: 1.2em;\r\n  color: gray;\r\n}\r\n\r\n.btn-action {\r\n  background-color: #bfcbd6;\r\n}\r\n\r\n.btn-action:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\nlabel {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"],\r\ninput[type=\"number\"],\r\ninput[type=\"file\"],\r\nselect {\r\n  height: 50px;\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n\r\ntextarea {\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n\r\n.btn-action-generate {\r\n  color: white;\r\n  background-color: #6495ED;\r\n}\r\n\r\n.btn-action-generate:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\n.btn-action-add {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n\r\n.btn-action-cancel {\r\n  background-color: #bfcbd6;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\n.label-title {\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.label-title .card-link {\r\n  cursor: pointer;\r\n  color: gray !important;\r\n  font-size: 1em;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  font-size: 0.5em;\r\n  margin-left: -20px;\r\n}\r\n\r\n.isActive {\r\n  background-color: lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVhdXR5LXBhcmxvdXItZm9ybS9iZWF1dHktcGFybG91ci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7O0VBTUUsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlYXV0eS1wYXJsb3VyLWZvcm0vYmVhdXR5LXBhcmxvdXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlcyBwIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWI1YzA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG5zZWxlY3Qge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tZ2VuZXJhdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NUVEO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1nZW5lcmF0ZTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY4YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmY2JkNjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFiNWMwO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUgLmNhcmQtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5pc0FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BeautyParlourFormComponent */

  /***/
  function srcAppAdminBeautyParlourFormBeautyParlourFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeautyParlourFormComponent", function () {
      return BeautyParlourFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var BeautyParlourFormComponent = /*#__PURE__*/function () {
      function BeautyParlourFormComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, BeautyParlourFormComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.beauticianName = null;
        this.experience = null;
        this.parlourName = null;
        this.lawFirmName = null;
        this.parlourAddress = null;
        this.rating = null;
        this.service = null;
        this.subService = null;
        this.usersLimit = null;
        this.servicesList = [];
        this.subSerivcesObj = {};
        this.subServicesList = [];
        this.usersList = [];
        this.userId = null;
        this.selectedServices = [];
        this.servicesSettings = {};
        this.selectedSubServices = [];
        this.subServicesSettings = {};
        this.subSettings = [];
        this.allSubServices = [];
        this.currentIndex = null;
        this.selectAll = [];
        this.serviceIds = [];
      }

      _createClass(BeautyParlourFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllUsersList();
          this.getAllBeautyServicesList();
          this.servicesSettings = {
            singleSelection: false,
            text: "Select Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2
          };
          this.subServicesSettings = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: true
          };
        }
      }, {
        key: "getAllUsersList",
        value: function getAllUsersList() {
          var _this9 = this;

          this.beauticianService.getAllUsers().subscribe(function (response) {
            console.log("Get all users response isss", response);

            if (response.success) {
              _this9.usersList = response.data;
            } else {
              _this9.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this9.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "getAllBeautyServicesList",
        value: function getAllBeautyServicesList() {
          var _this10 = this;

          this.beauticianService.getAllBeautyServices().subscribe(function (response) {
            console.log("Get all beauty services response isss", response);

            if (response.success) {
              _this10.servicesList = response.data[0];
              _this10.subSerivcesObj = response.data[1];

              for (var _i2 = 0, _Object$keys2 = Object.keys(_this10.subSerivcesObj); _i2 < _Object$keys2.length; _i2++) {
                var item = _Object$keys2[_i2];

                _this10.allSubServices.push(_this10.subSerivcesObj[item]);

                _this10.selectedSubServices.push([]);

                _this10.subSettings.push(_this10.subServicesSettings);

                _this10.selectAll.push(false);

                _this10.serviceIds.push(Number(item));
              }

              console.log('all sub services isss', _this10.allSubServices);
            } else {
              _this10.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this10.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "onInputAction",
        value: function onInputAction(item, id, event) {
          console.log('Selected event and item and id isss', event, item, id);
          this.selectAll[id] = event;
          console.log('selected checked isss', this.selectAll);
          this.subSettings[id] = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: !event
          };

          if (event === false) {
            this.subSettings[id] = {
              singleSelection: false,
              text: "Select Sub Services :",
              selectAllText: "Select All",
              unSelectAllText: "UnSelect All",
              enableSearchFilter: true,
              classes: "myclass custom-class",
              badgeShowLimit: 2,
              disabled: true
            };
            this.selectedSubServices[id] = [];
          }
        }
      }, {
        key: "onCollapseBody",
        value: function onCollapseBody(item, id) {
          console.log('Selected item and index isss', item, id);
          this.currentIndex = Number(id);
        } // select and de-select services

      }, {
        key: "onSerivceSelect",
        value: function onSerivceSelect(item) {
          console.log(item);
          this.subServicesList = [];
          this.subServicesList = this.subSerivcesObj[item.id];
          console.log(this.selectedServices);
        }
      }, {
        key: "OnSerivceDeSelect",
        value: function OnSerivceDeSelect(item) {
          console.log(item);
          this.subServicesList = [];
          console.log(this.selectedServices);
        }
      }, {
        key: "onSelectAllSerivce",
        value: function onSelectAllSerivce(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllSerivce",
        value: function onDeSelectAllSerivce(items) {
          console.log(items);
          this.subServicesList = [];
        } // select and de-select sub services

      }, {
        key: "onSubServiceSelect",
        value: function onSubServiceSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "OnSubServiceDeSelect",
        value: function OnSubServiceDeSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "onSelectAllSubService",
        value: function onSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllSubService",
        value: function onDeSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "onActionBack",
        value: function onActionBack() {
          this.router.navigate(["/services"]);
        }
      }, {
        key: "onInputEventStartTime",
        value: function onInputEventStartTime() {
          console.log(this.selectStartTime);
          console.log(moment__WEBPACK_IMPORTED_MODULE_7__(this.selectStartTime).format('LTS'));

          if (moment__WEBPACK_IMPORTED_MODULE_7__(this.selectEndTime).format('HH:MM:ss') < moment__WEBPACK_IMPORTED_MODULE_7__(this.selectStartTime).format('HH:MM:ss')) {
            this.toastr.errorToastr('Please select start time and end time correctly');
          }
        }
      }, {
        key: "onInputEventEndTime",
        value: function onInputEventEndTime() {
          console.log(this.selectEndTime);
          console.log(moment__WEBPACK_IMPORTED_MODULE_7__(this.selectEndTime).format('LTS'));

          if (moment__WEBPACK_IMPORTED_MODULE_7__(this.selectEndTime).format('HH:MM:ss') < moment__WEBPACK_IMPORTED_MODULE_7__(this.selectStartTime).format('HH:MM:ss')) {
            this.toastr.errorToastr('Please select start time and end time correctly');
          }
        }
      }, {
        key: "setDisableModal",
        value: function setDisableModal() {
          if (!this.selectAll.includes(true)) {
            return true;
          } else if (moment__WEBPACK_IMPORTED_MODULE_7__(this.selectEndTime).format('HH:MM:ss') < moment__WEBPACK_IMPORTED_MODULE_7__(this.selectStartTime).format('HH:MM:ss')) {
            return true;
          } else {
            var count = 0;

            var _iterator6 = _createForOfIteratorHelper(this.selectedSubServices),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (item.length === 0) {
                  count += 1;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            if (count === this.selectedSubServices.length) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "saveBeautyParlourData",
        value: function saveBeautyParlourData() {
          var _this11 = this;

          var id = 0;
          var SERVICES = {};

          var _iterator7 = _createForOfIteratorHelper(this.selectAll),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var item = _step7.value;

              if (item) {
                SERVICES[this.serviceIds[id]] = underscore__WEBPACK_IMPORTED_MODULE_6__["pluck"](this.selectedSubServices[id], 'sub_service_id');
              }

              id += 1;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          console.log('all SERVICES isss', SERVICES);
          var beautyParlourPayload = {
            owner_id: Number(this.userId),
            beautician_name: this.beauticianName,
            experience: Number(this.experience),
            parlour_name: this.parlourName,
            law_firm_name: this.lawFirmName,
            services: JSON.stringify(SERVICES),
            start_time: moment__WEBPACK_IMPORTED_MODULE_7__(this.selectStartTime).format('HH:MM:ss'),
            end_time: moment__WEBPACK_IMPORTED_MODULE_7__(this.selectEndTime).format('HH:MM:ss'),
            users_limit: Number(this.usersLimit),
            place: this.parlourAddress,
            rating: Number(this.rating),
            status: 1
          };
          console.log("Post payload to add beauty parlour data isss", beautyParlourPayload);
          this.beauticianService.addBeautyParlour(beautyParlourPayload).subscribe(function (response) {
            console.log("Get add beauty parlour data response isss", response);

            if (response.success) {
              _this11.toastr.successToastr(response.message);

              _this11.resetForm();
            } else {
              _this11.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this11.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.beautyParlourFormRef) {
            this.beautyParlourFormRef.reset();
          }

          this.beauticianName = null;
          this.experience = null;
          this.parlourName = null;
          this.lawFirmName = null;
          this.parlourAddress = null;
          this.rating = null;
          this.userId = null;
          this.servicesList = [];
          this.subSerivcesObj = {};
          this.allSubServices = [];
          this.selectedSubServices = [];
          this.subSettings = [];
          this.selectAll = [];
          this.serviceIds = [];
          this.selectDate = new Date();
          this.selectStartTime = new Date();
          this.selectEndTime = new Date();
          this.usersLimit = null;
          this.getAllBeautyServicesList();
        }
      }]);

      return BeautyParlourFormComponent;
    }();

    BeautyParlourFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("beautyParlourForm", {
      "static": false
    })], BeautyParlourFormComponent.prototype, "beautyParlourFormRef", void 0);
    BeautyParlourFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-beauty-parlour-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beauty-parlour-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beauty-parlour-form.component.css */
      "./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.css"))["default"]]
    })], BeautyParlourFormComponent);
    /***/
  },

  /***/
  "./src/app/admin/beauty-services-form/beauty-services-form.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/admin/beauty-services-form/beauty-services-form.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminBeautyServicesFormBeautyServicesFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  font-size: 1.2em;\r\n  color: gray;\r\n}\r\n\r\n.btn-action {\r\n  background-color: #bfcbd6;\r\n}\r\n\r\n.btn-action:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\nlabel {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"password\"],\r\ninput[type=\"number\"],\r\ninput[type=\"file\"] {\r\n  height: 50px;\r\n  padding: 10px;\r\n  font-size: 1em;\r\n  color: gray;\r\n}\r\n\r\n.btn-action-generate {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-generate:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\n.btn-action-add {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n\r\n.btn-action-cancel {\r\n  background-color: #bfcbd6;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\n.btn-action-plus {\r\n  cursor: pointer;\r\n  height: 50px;\r\n  margin-top: 33px;\r\n  color: white;\r\n  border: 1px solid #6495ed;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-plus:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n\r\n.btn-action-minus {\r\n  cursor: pointer;\r\n  height: 50px;\r\n  margin-top: 33px;\r\n  color: white;\r\n  border: 1px solid #bfcbd6;\r\n  background-color: #bfcbd6;\r\n}\r\n\r\n.btn-action-minus:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYmVhdXR5LXNlcnZpY2VzLWZvcm0vYmVhdXR5LXNlcnZpY2VzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JlYXV0eS1zZXJ2aWNlcy1mb3JtL2JlYXV0eS1zZXJ2aWNlcy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVzIHAge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjYmQ2O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1nZW5lcmF0ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWdlbmVyYXRlOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjhhZjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjYmQ2O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1jYW5jZWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWI1YzA7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXBsdXMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0OTVlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1wbHVzOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjhhZjtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tbWludXMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmY2JkNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjYmQ2O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1taW51czpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/beauty-services-form/beauty-services-form.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/beauty-services-form/beauty-services-form.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BeautyServicesFormComponent */

  /***/
  function srcAppAdminBeautyServicesFormBeautyServicesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeautyServicesFormComponent", function () {
      return BeautyServicesFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");

    var BeautyServicesFormComponent = /*#__PURE__*/function () {
      function BeautyServicesFormComponent(router, authUserService, beauticianService, toastr, fb) {
        _classCallCheck(this, BeautyServicesFormComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.fb = fb;
        this.serviceName = null;
      }

      _createClass(BeautyServicesFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.beautySubServiceForm = this.fb.group({
            serivcesArr: this.fb.array([this.initForm()])
          });
        }
      }, {
        key: "onActionBack",
        value: function onActionBack() {
          this.router.navigate(['/services']);
        }
      }, {
        key: "initForm",
        value: function initForm() {
          return this.fb.group({
            subServiceName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            subServiceAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "addForm",
        value: function addForm(id) {
          var control = this.beautySubServiceForm.controls['serivcesArr'];
          control.push(this.initForm());
        }
      }, {
        key: "removeForm",
        value: function removeForm(id) {
          var control = this.beautySubServiceForm.controls['serivcesArr'];
          control.removeAt(id);
        }
      }, {
        key: "saveBeauticianData",
        value: function saveBeauticianData() {
          var _this12 = this;

          console.log(this.beautySubServiceForm);
          var subServices = [];

          var _iterator8 = _createForOfIteratorHelper(this.beautySubServiceForm.value['serivcesArr']),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var item = _step8.value;
              subServices.push({
                sub_service_id: null,
                main_service_id: null,
                sub_service_name: item.subServiceName,
                service_amount: item.subServiceAmount.toString(),
                status: 1
              });
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          var beautyServicePayload = {
            services: {
              main_service_id: null,
              service_name: this.serviceName,
              status: 1
            },
            subservices: subServices
          };
          console.log('Post payload to add beauty services data isss', beautyServicePayload);
          this.beauticianService.addBeautyServices(beautyServicePayload).subscribe(function (response) {
            console.log('Get add beauty services data response isss', response);

            if (response.success) {
              _this12.toastr.successToastr(response.message);

              _this12.resetForm();
            } else {
              _this12.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this12.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.beautyServiceFormRef) {
            this.beautyServiceFormRef.reset();
          }

          this.serviceName = null;

          if (this.beautySubServiceForm) {
            this.beautySubServiceForm.reset();
          }

          this.initForm();
        }
      }]);

      return BeautyServicesFormComponent;
    }();

    BeautyServicesFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__["AuthUserService"]
      }, {
        type: src_app_api_services_beautician_service__WEBPACK_IMPORTED_MODULE_6__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('beautyServiceForm', {
      "static": false
    })], BeautyServicesFormComponent.prototype, "beautyServiceFormRef", void 0);
    BeautyServicesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beauty-services-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beauty-services-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/beauty-services-form/beauty-services-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beauty-services-form.component.css */
      "./src/app/admin/beauty-services-form/beauty-services-form.component.css"))["default"]]
    })], BeautyServicesFormComponent);
    /***/
  },

  /***/
  "./src/app/api-services/auth-guard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/api-services/auth-guard.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppApiServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(authUserService, router, toastr) {
        _classCallCheck(this, AuthGuardService);

        this.authUserService = authUserService;
        this.router = router;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authUserService.isLoggedIn()) {
            this.toastr.warningToastr('You are not authenticated or authorized user, Please login or signup.');
            this.authUserService.isLoggedOut();
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/api-services/auth-interceptor.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/api-services/auth-interceptor.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppApiServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptorService = /*#__PURE__*/function () {
      function AuthInterceptorService() {
        _classCallCheck(this, AuthInterceptorService);
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = sessionStorage.getItem('token');
          var id = sessionStorage.getItem('userid');
          var username = sessionStorage.getItem('username');
          var email = sessionStorage.getItem('email');
          var role = sessionStorage.getItem('role');

          if (!token) {
            return next.handle(req);
          }

          var req1 = req.clone({
            headers: req.headers.set('Authorization', ["Bearer ".concat(token), id, role]),
            setHeaders: {
              id: id,
              email: email,
              username: username
            }
          });
          return next.handle(req1);
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/api-services/auth-user.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/api-services/auth-user.service.ts ***!
    \***************************************************/

  /*! exports provided: AuthUserService */

  /***/
  function srcAppApiServicesAuthUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthUserService", function () {
      return AuthUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-connection.service */
    "./src/app/app-connection.service.ts");

    var AuthUserService = /*#__PURE__*/function () {
      function AuthUserService(http) {
        _classCallCheck(this, AuthUserService);

        this.http = http;
      }

      _createClass(AuthUserService, [{
        key: "userLogin",
        value: function userLogin(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].USER_LOGIN, data);
        }
      }, {
        key: "userSignup",
        value: function userSignup(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].USER_SIGNUP, data);
        }
      }, {
        key: "userReSignIn",
        value: function userReSignIn(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].USER_RESIGNIN, data);
        }
      }, {
        key: "getUserToken",
        value: function getUserToken() {
          return sessionStorage.getItem('token');
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return sessionStorage.getItem('userid');
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return sessionStorage.getItem('role');
        }
      }, {
        key: "getUserPayload",
        value: function getUserPayload() {
          var token = this.getUserToken();

          if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var userPayload = this.getUserPayload();

          if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }, {
        key: "isLoggedOut",
        value: function isLoggedOut() {
          localStorage.clear();
          sessionStorage.clear();
        }
      }, {
        key: "addNewUser",
        value: function addNewUser(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_NEW_USER, data);
        }
      }]);

      return AuthUserService;
    }();

    AuthUserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthUserService);
    /***/
  },

  /***/
  "./src/app/api-services/beautician.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/api-services/beautician.service.ts ***!
    \****************************************************/

  /*! exports provided: BeauticianService */

  /***/
  function srcAppApiServicesBeauticianServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianService", function () {
      return BeauticianService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app-connection.service */
    "./src/app/app-connection.service.ts");

    var BeauticianService = /*#__PURE__*/function () {
      function BeauticianService(http) {
        _classCallCheck(this, BeauticianService);

        this.http = http;
      } // user API services


      _createClass(BeauticianService, [{
        key: "getAllBeautyParlours",
        value: function getAllBeautyParlours(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_BEAUTY_PARLOURS, data);
        }
      }, {
        key: "getAllUserReportsById",
        value: function getAllUserReportsById(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_USER_REPORTS_BY_ID, data);
        }
      }, {
        key: "addBooking",
        value: function addBooking(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_BOOKING, data);
        } // admin API services

      }, {
        key: "getAllDashboardCounts",
        value: function getAllDashboardCounts() {
          return this.http.get(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_DASHBOARD_COUNTS);
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_USERS);
        }
      }, {
        key: "getAllBeautyServices",
        value: function getAllBeautyServices() {
          return this.http.get(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_BEAUTY_SERVICES);
        }
      }, {
        key: "getAllBeauticiansList",
        value: function getAllBeauticiansList(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_BEAUTICIANS, data);
        }
      }, {
        key: "addBeautician",
        value: function addBeautician(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_BEAUTICIAN, data);
        }
      }, {
        key: "deleteRestoreBeauticianById",
        value: function deleteRestoreBeauticianById(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].DELETE_RESTORE_BEAUTICIAN_BY_ID, data);
        }
      }, {
        key: "addBeautyParlour",
        value: function addBeautyParlour(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_BEAUTY_PARLOUR, data);
        }
      }, {
        key: "addBeautyServices",
        value: function addBeautyServices(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_BEAUTY_SERVICES, data);
        } // beautician API Services

      }, {
        key: "getAllUserBookings",
        value: function getAllUserBookings(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_USER_BOOKINGS, data);
        }
      }, {
        key: "getAllUserAppointments",
        value: function getAllUserAppointments(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].GET_ALL_USER_APPOINTMENTS, data);
        }
      }, {
        key: "updateBookingStatusById",
        value: function updateBookingStatusById(id) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].UPDATE_BOOKING_STATUS_BY_ID, id);
        }
      }, {
        key: "addUpdateUserReport",
        value: function addUpdateUserReport(data) {
          return this.http.post(_app_connection_service__WEBPACK_IMPORTED_MODULE_3__["APIURL"].ADD_REPORT, data);
        }
      }]);

      return BeauticianService;
    }();

    BeauticianService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BeauticianService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BeauticianService);
    /***/
  },

  /***/
  "./src/app/app-connection.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/app-connection.service.ts ***!
    \*******************************************/

  /*! exports provided: APIURL */

  /***/
  function srcAppAppConnectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIURL", function () {
      return APIURL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var APIURL = {
      // user authentication & authorization API URL's
      USER_LOGIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/login',
      USER_SIGNUP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/signup',
      USER_RESIGNIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/reSignIn',
      ADD_NEW_USER: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_new_user',
      // user bookings API URL's
      GET_ALL_USER_BOOKINGS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_user_bookings',
      GET_ALL_USER_APPOINTMENTS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_user_appointments',
      GET_BOOKINGS_BY_BEAUTICIAN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_bookings_by_beautician',
      GET_BOOKINGS_BY_ID: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_booking_by_id',
      UPDATE_BOOKING_STATUS_BY_ID: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/update_booking_status_by_id',
      ADD_BOOKING: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_booking',
      DELETE_BOOKING: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/delete_booking',
      // user appointments API URL's
      ADD_APPOINTMENT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_appointment',
      UPDATE_APPOINTMENT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/update_appointment',
      DELETE_APPOINTMENT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/delete_appointment',
      // user reports API URL's
      GET_CHECKUP_DETAILS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_checkup_details',
      GET_ALL_USER_REPORTS_BY_ID: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_user_reports_by_id',
      ADD_REPORT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_report',
      UPDATE_CHECKUP: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/update_checkup',
      // beauticians API URL's
      GET_ALL_BEAUTY_PARLOURS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_beauty_parlours',
      GET_ALL_USERS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_users',
      // admin services API URL's
      GET_ALL_DASHBOARD_COUNTS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_dashboard_counts',
      GET_ALL_BEAUTICIANS: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_beauticians',
      GET_ALL_BEAUTY_SERVICES: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/get_all_beauty_services',
      ADD_BEAUTICIAN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_beautician',
      DELETE_RESTORE_BEAUTICIAN_BY_ID: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/delete_restore_beautician',
      ADD_BEAUTY_PARLOUR: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_beauty_parlour',
      ADD_BEAUTY_SERVICES: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/add_beauty_services'
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _access_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./access/login/login.component */
    "./src/app/access/login/login.component.ts");
    /* harmony import */


    var _access_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./access/signup/signup.component */
    "./src/app/access/signup/signup.component.ts");
    /* harmony import */


    var _admin_add_forms_add_forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin/add-forms/add-forms.component */
    "./src/app/admin/add-forms/add-forms.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin-profile/admin-profile.component */
    "./src/app/admin/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/admin-settings/admin-settings.component */
    "./src/app/admin/admin-settings/admin-settings.component.ts");
    /* harmony import */


    var _admin_beautician_form_beautician_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/beautician-form/beautician-form.component */
    "./src/app/admin/beautician-form/beautician-form.component.ts");
    /* harmony import */


    var _admin_beauty_parlour_form_beauty_parlour_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/beauty-parlour-form/beauty-parlour-form.component */
    "./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.ts");
    /* harmony import */


    var _admin_beauty_services_form_beauty_services_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/beauty-services-form/beauty-services-form.component */
    "./src/app/admin/beauty-services-form/beauty-services-form.component.ts");
    /* harmony import */


    var _api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./api-services/auth-guard.service */
    "./src/app/api-services/auth-guard.service.ts");
    /* harmony import */


    var _beautician_dashboard_beautician_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./beautician-dashboard/beautician-dashboard.component */
    "./src/app/beautician-dashboard/beautician-dashboard.component.ts");
    /* harmony import */


    var _beautician_reports_beautician_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./beautician-reports/beautician-reports.component */
    "./src/app/beautician-reports/beautician-reports.component.ts");
    /* harmony import */


    var _beautician_users_beautician_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./beautician-users/beautician-users.component */
    "./src/app/beautician-users/beautician-users.component.ts");
    /* harmony import */


    var _beautician_beautician_profile_beautician_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./beautician/beautician-profile/beautician-profile.component */
    "./src/app/beautician/beautician-profile/beautician-profile.component.ts");
    /* harmony import */


    var _beauticians_list_beauticians_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./beauticians-list/beauticians-list.component */
    "./src/app/beauticians-list/beauticians-list.component.ts");
    /* harmony import */


    var _common_pages_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./common-pages/games-list/games-list.component */
    "./src/app/common-pages/games-list/games-list.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./user-dashboard/user-dashboard.component */
    "./src/app/user-dashboard/user-dashboard.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./user/user-profile/user-profile.component */
    "./src/app/user/user-profile/user-profile.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _access_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup',
      component: _access_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, // USER routes
    {
      path: 'user-profile',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"]
    }, {
      path: 'user-dashboard',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["UserDashboardComponent"]
    }, {
      path: 'beauticians',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _beauticians_list_beauticians_list_component__WEBPACK_IMPORTED_MODULE_17__["BeauticiansListComponent"]
    }, {
      path: 'reports',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"]
    }, // ADMIN routes
    {
      path: 'admin-profile',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_7__["AdminProfileComponent"]
    }, {
      path: 'admin-settings',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_8__["AdminSettingsComponent"]
    }, {
      path: 'admin-dashboard',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["AdminDashboardComponent"]
    }, {
      path: 'services',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_add_forms_add_forms_component__WEBPACK_IMPORTED_MODULE_5__["AddFormsComponent"]
    }, {
      path: 'add-beautician',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_beautician_form_beautician_form_component__WEBPACK_IMPORTED_MODULE_9__["BeauticianFormComponent"]
    }, {
      path: 'add-beauty-parlour',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_beauty_parlour_form_beauty_parlour_form_component__WEBPACK_IMPORTED_MODULE_10__["BeautyParlourFormComponent"]
    }, {
      path: 'add-beauty-services',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _admin_beauty_services_form_beauty_services_form_component__WEBPACK_IMPORTED_MODULE_11__["BeautyServicesFormComponent"]
    }, // BEAUTICIAN routes
    {
      path: 'beautician-profile',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _beautician_beautician_profile_beautician_profile_component__WEBPACK_IMPORTED_MODULE_16__["BeauticianProfileComponent"]
    }, {
      path: 'beautician-dashboard',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _beautician_dashboard_beautician_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["BeauticianDashboardComponent"]
    }, {
      path: 'beautician-users',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _beautician_users_beautician_users_component__WEBPACK_IMPORTED_MODULE_15__["BeauticianUsersComponent"]
    }, {
      path: 'beautician-reports',
      canActivate: [_api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      component: _beautician_reports_beautician_reports_component__WEBPACK_IMPORTED_MODULE_14__["BeauticianReportsComponent"]
    }, {
      path: 'user-form',
      component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_22__["UserFormComponent"]
    }, {
      path: 'pages/games-list',
      component: _common_pages_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_18__["GamesListComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'MeanUI';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/calendar.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reports/reports.component */
    "./src/app/reports/reports.component.ts");
    /* harmony import */


    var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-dashboard/user-dashboard.component */
    "./src/app/user-dashboard/user-dashboard.component.ts");
    /* harmony import */


    var _access_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./access/login/login.component */
    "./src/app/access/login/login.component.ts");
    /* harmony import */


    var _access_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./access/signup/signup.component */
    "./src/app/access/signup/signup.component.ts");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./api-services/auth-guard.service */
    "./src/app/api-services/auth-guard.service.ts");
    /* harmony import */


    var _api_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./api-services/auth-interceptor.service */
    "./src/app/api-services/auth-interceptor.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var _admin_beautician_form_beautician_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin/beautician-form/beautician-form.component */
    "./src/app/admin/beautician-form/beautician-form.component.ts");
    /* harmony import */


    var _admin_beauty_parlour_form_beauty_parlour_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/beauty-parlour-form/beauty-parlour-form.component */
    "./src/app/admin/beauty-parlour-form/beauty-parlour-form.component.ts");
    /* harmony import */


    var _admin_add_forms_add_forms_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/add-forms/add-forms.component */
    "./src/app/admin/add-forms/add-forms.component.ts");
    /* harmony import */


    var _beautician_dashboard_beautician_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./beautician-dashboard/beautician-dashboard.component */
    "./src/app/beautician-dashboard/beautician-dashboard.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _beauticians_list_beauticians_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./beauticians-list/beauticians-list.component */
    "./src/app/beauticians-list/beauticians-list.component.ts");
    /* harmony import */


    var _beautician_users_beautician_users_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./beautician-users/beautician-users.component */
    "./src/app/beautician-users/beautician-users.component.ts");
    /* harmony import */


    var _beautician_reports_beautician_reports_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./beautician-reports/beautician-reports.component */
    "./src/app/beautician-reports/beautician-reports.component.ts");
    /* harmony import */


    var _admin_beauty_services_form_beauty_services_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/beauty-services-form/beauty-services-form.component */
    "./src/app/admin/beauty-services-form/beauty-services-form.component.ts");
    /* harmony import */


    var _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/admin-profile/admin-profile.component */
    "./src/app/admin/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/admin-settings/admin-settings.component */
    "./src/app/admin/admin-settings/admin-settings.component.ts");
    /* harmony import */


    var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./user/user-profile/user-profile.component */
    "./src/app/user/user-profile/user-profile.component.ts");
    /* harmony import */


    var _beautician_beautician_profile_beautician_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./beautician/beautician-profile/beautician-profile.component */
    "./src/app/beautician/beautician-profile/beautician-profile.component.ts");
    /* harmony import */


    var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./user-form/user-form.component */
    "./src/app/user-form/user-form.component.ts");
    /* harmony import */


    var _common_pages_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./common-pages/games-list/games-list.component */
    "./src/app/common-pages/games-list/games-list.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["UserDashboardComponent"], _access_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _access_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"], _admin_beautician_form_beautician_form_component__WEBPACK_IMPORTED_MODULE_22__["BeauticianFormComponent"], _admin_beauty_parlour_form_beauty_parlour_form_component__WEBPACK_IMPORTED_MODULE_23__["BeautyParlourFormComponent"], _admin_add_forms_add_forms_component__WEBPACK_IMPORTED_MODULE_24__["AddFormsComponent"], _beautician_dashboard_beautician_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["BeauticianDashboardComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["AdminDashboardComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_27__["NotFoundComponent"], _beauticians_list_beauticians_list_component__WEBPACK_IMPORTED_MODULE_28__["BeauticiansListComponent"], _beautician_users_beautician_users_component__WEBPACK_IMPORTED_MODULE_29__["BeauticianUsersComponent"], _beautician_reports_beautician_reports_component__WEBPACK_IMPORTED_MODULE_30__["BeauticianReportsComponent"], _admin_beauty_services_form_beauty_services_form_component__WEBPACK_IMPORTED_MODULE_31__["BeautyServicesFormComponent"], _admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_32__["AdminProfileComponent"], _admin_admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_33__["AdminSettingsComponent"], _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_34__["UserProfileComponent"], _beautician_beautician_profile_beautician_profile_component__WEBPACK_IMPORTED_MODULE_35__["BeauticianProfileComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_36__["UserFormComponent"], _common_pages_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_37__["GamesListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"].withConfig({
        warnOnNgModelWithFormControl: 'never'
      }), primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(), angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["AngularMultiSelectModule"]],
      providers: [_api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_16__["AuthUserService"], _api_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"], _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_21__["BeauticianService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _api_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/beautician-dashboard/beautician-dashboard.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/beautician-dashboard/beautician-dashboard.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBeauticianDashboardBeauticianDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titles {\r\n  color: gray;\r\n  font-size: 1em;\r\n  background-color: lightgray;\r\n  border-left: 5px solid #6495ED;\r\n  padding: 2%;\r\n}\r\n\r\n.sub-titles {\r\n  color: #6495ED;\r\n  font-size: 1.2em;\r\n  text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVhdXRpY2lhbi1kYXNoYm9hcmQvYmVhdXRpY2lhbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2JlYXV0aWNpYW4tZGFzaGJvYXJkL2JlYXV0aWNpYW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNjQ5NUVEO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICM2NDk1RUQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/beautician-dashboard/beautician-dashboard.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/beautician-dashboard/beautician-dashboard.component.ts ***!
    \************************************************************************/

  /*! exports provided: BeauticianDashboardComponent */

  /***/
  function srcAppBeauticianDashboardBeauticianDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianDashboardComponent", function () {
      return BeauticianDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BeauticianDashboardComponent = /*#__PURE__*/function () {
      function BeauticianDashboardComponent() {
        _classCallCheck(this, BeauticianDashboardComponent);

        this.userid = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
        this.fullName = sessionStorage.getItem('fullname');
      }

      _createClass(BeauticianDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BeauticianDashboardComponent;
    }();

    BeauticianDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beautician-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beautician-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-dashboard/beautician-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beautician-dashboard.component.css */
      "./src/app/beautician-dashboard/beautician-dashboard.component.css"))["default"]]
    })], BeauticianDashboardComponent);
    /***/
  },

  /***/
  "./src/app/beautician-reports/beautician-reports.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/beautician-reports/beautician-reports.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBeauticianReportsBeauticianReportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n          justify-content: center;\r\n          align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  /* display: grid;\r\n        justify-content: center;\r\n        align-items: center; */\r\n  margin-top: -20px;\r\n}\r\n\r\n.add-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.user-data {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n}\r\n\r\n.user-name {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.date-show {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: baseline;\r\n}\r\n\r\n.time-show {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n}\r\n\r\n.amount-input,\r\ntextarea {\r\n  background-color: lightblue;\r\n}\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenav styles */\r\n\r\n/* sidenavlist styles */\r\n\r\n.sidenavlist {\r\n  height: 100%;\r\n  width: 450px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  /* overflow-x: hidden; */\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenavlist .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.add-user-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.users-card {\r\n  background-color: lightblue;\r\n  width: 100%;\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 10px;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.accept {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: green;\r\n}\r\n\r\n.reject {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: maroon;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenavlist {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenavlist a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenavlist styles */\r\n\r\n/* pagination styles */\r\n\r\n.pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.pagination a {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination a.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.pagination li {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination li.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination li:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.width-50 {\r\n  width: 150px;\r\n}\r\n\r\n/* .width-100 {\r\n    width: 50px;\r\n  } */\r\n\r\n.search-fields {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #1667af;\r\n  padding: 5px;\r\n  width: 50px;\r\n}\r\n\r\n.btn-action-cancel {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #ccc;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n  color: white;\r\n  background-color: gray;\r\n}\r\n\r\n.btn-action-add {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVhdXRpY2lhbi1yZXBvcnRzL2JlYXV0aWNpYW4tcmVwb3J0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7O2dDQUU4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7OzhCQUU0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0EsdUJBQXVCOztBQUV2Qix1QkFBdUI7O0FBQ3ZCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUNBLDJCQUEyQjs7QUFFM0Isc0JBQXNCOztBQUN0QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztLQUVLOztBQUVMO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmVhdXRpY2lhbi1yZXBvcnRzL2JlYXV0aWNpYW4tcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlYXV0eS1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi5kZXRhaWxzLWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXRlIHtcclxuICBjb2xvcjogIzUyYmU4MDtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQgLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLyogc2lkZW5hdiBzdHlsZXMgKi9cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtY2FyZCB7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uYWRkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIHRleHQtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDgxLCA2NywgMjEsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnVzZXItZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZGF0ZS1zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLnRpbWUtc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5hbW91bnQtaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTVlZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbi8qIGVuZCBzaWRlbmF2IHN0eWxlcyAqL1xyXG5cclxuLyogc2lkZW5hdmxpc3Qgc3R5bGVzICovXHJcbi5zaWRlbmF2bGlzdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2bGlzdCAuY2xvc2VidG4ge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmFkZC11c2VyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIHRleHQtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDgxLCA2NywgMjEsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnVzZXJzLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY2NlcHQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJlamVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXZsaXN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc2lkZW5hdmxpc3QgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbi8qIGVuZCBzaWRlbmF2bGlzdCBzdHlsZXMgKi9cclxuXHJcbi8qIHBhZ2luYXRpb24gc3R5bGVzICovXHJcbi5wYWdpbmF0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzE2NjdhZjtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhN2E3YTc7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMTY2N2FmO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3YTdhNztcclxuICBtYXJnaW46IDAgNHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmlzRGlzYWJsZSB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnRpdGxlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlcyBwIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud2lkdGgtNTAge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLyogLndpZHRoLTEwMCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9ICovXHJcblxyXG4uc2VhcmNoLWZpZWxkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1zZWFyY2gge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1jYW5jZWw6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1hZGQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTVlZDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/beautician-reports/beautician-reports.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/beautician-reports/beautician-reports.component.ts ***!
    \********************************************************************/

  /*! exports provided: BeauticianReportsComponent */

  /***/
  function srcAppBeauticianReportsBeauticianReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianReportsComponent", function () {
      return BeauticianReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var BeauticianReportsComponent = /*#__PURE__*/function () {
      function BeauticianReportsComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, BeauticianReportsComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('userid');
        this.username = sessionStorage.getItem('username');
        this.role = sessionStorage.getItem('role');
        this.tempArray = [];
        this.viewItem = {};
        this.currentIndex = null;
        this.rowsOnPage = 8;
        this.limit = 8;
        this.page = 1;
        this.count = 0;
        this.pager = {};
        this.totalPages = [];
        this.searchQuery = '';
        this.statusQuery = null;
        this.filterStatus = null;
        this.usersList = [];
        this.amount = null;
        this.bills = null;
      }

      _createClass(BeauticianReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // for (let i = 0; i < 6; i++) {
          //   this.tempArray.push({
          //     username: `user ${i+1}`,
          //     appointment_date: `2021-05-0${i+1}`,
          //     appointment_time: `0${i+1}:00 AM`
          //   });
          // }
          this.getAllUserAppointmentsData();
        }
      }, {
        key: "openNav",
        value: function openNav(item, index) {
          this.viewItem = item;
          this.currentIndex = index + 1;
          document.getElementById('mySidenav').style.width = '400px';
          document.getElementById('main').style.marginRight = '250px';
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.viewItem = {};
          this.currentIndex = null;
          this.amount = null;
          this.bills = null;
          document.getElementById('mySidenav').style.width = '0';
          document.getElementById('main').style.marginRight = '0';
        }
      }, {
        key: "getAllUserAppointmentsData",
        value: function getAllUserAppointmentsData() {
          var _this13 = this;

          var userBookingsPayload = {
            limit: Number(this.limit),
            page: Number(this.page),
            query: this.searchQuery,
            status: !this.statusQuery || this.statusQuery === null ? 'all' : Number(this.statusQuery),
            user_id: Number(this.userId)
          };
          console.log('Post payload to get all user appointments data isss', userBookingsPayload);
          this.beauticianService.getAllUserAppointments(userBookingsPayload).subscribe(function (response) {
            console.log('Get all user appointments response isss', response);

            if (response.success) {
              _this13.usersList = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](response.data, function (e) {
                return e.booking_status === 0 || e.booking_status === 1;
              });
              _this13.count = response.count;

              _this13.createPager();
            } else {
              _this13.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this13.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "getPage",
        value: function getPage(event) {
          console.log('Selected page isss', event);
          this.page = Number(event);
          this.getAllUserAppointmentsData();
        }
      }, {
        key: "createPager",
        value: function createPager() {
          // this.pager.startCount = this.beauticians.length > 0 && Number(this.page) === 1 ? 1 : this.beauticians.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
          // this.pager.endCount = Number(this.rowsOnPage) === this.beauticians.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          // console.log(this.pager);
          var endLimit = Math.round(this.count / this.limit) === 0 ? Math.round(this.count / this.limit) : Math.round(this.count / this.limit) + 1;
          endLimit = endLimit === 0 ? 1 : endLimit;
          console.log('end limit isss', endLimit);
          this.totalPages = [];

          for (var num = 1; num <= Number(endLimit); num += 1) {
            this.totalPages.push(num);
          }

          console.log('total pages isss', this.totalPages);
        }
      }, {
        key: "onSearchData",
        value: function onSearchData() {
          // console.log('search request data isss', this.searchQuery);
          if (this.searchQuery || this.searchQuery !== '') {
            this.getAllUserAppointmentsData();
          }
        }
      }, {
        key: "onInputSearch",
        value: function onInputSearch() {
          if (!this.searchQuery || this.searchQuery === '') {
            this.getAllUserAppointmentsData();
          }
        }
      }, {
        key: "onSelectStatus",
        value: function onSelectStatus() {
          this.getAllUserAppointmentsData();
        }
      }, {
        key: "saveUserReport",
        value: function saveUserReport() {
          var _this14 = this;

          var reportPayload = {
            report_id: null,
            appointment_id: Number(this.viewItem.app_id),
            user_id: Number(this.viewItem.user_id),
            date: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD'),
            amount: this.amount,
            report: this.bills,
            issued_by: this.username,
            status: 1
          };
          console.log('Post payload to add/update user report data isss', reportPayload);
          this.beauticianService.addUpdateUserReport(reportPayload).subscribe(function (response) {
            console.log('Get add/update user report data response isss', response);

            if (response.success) {
              _this14.toastr.successToastr(response.message);

              _this14.closeNav();

              _this14.getAllUserAppointmentsData();
            } else {
              _this14.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this14.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }]);

      return BeauticianReportsComponent;
    }();

    BeauticianReportsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    BeauticianReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beautician-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beautician-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-reports/beautician-reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beautician-reports.component.css */
      "./src/app/beautician-reports/beautician-reports.component.css"))["default"]]
    })], BeauticianReportsComponent);
    /***/
  },

  /***/
  "./src/app/beautician-users/beautician-users.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/beautician-users/beautician-users.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBeauticianUsersBeauticianUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n        justify-content: center;\r\n        align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  /* display: grid;\r\n      justify-content: center;\r\n      align-items: center; */\r\n}\r\n\r\n.add-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.user-data {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n}\r\n\r\n.user-name {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: flex-end;\r\n}\r\n\r\n.date-show {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: baseline;\r\n}\r\n\r\n.time-show {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n}\r\n\r\nlabel {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n/* .amount-input,\r\ntextarea {\r\n  background-color: lightblue;\r\n} */\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenav styles */\r\n\r\n/* sidenavlist styles */\r\n\r\n.sidenavlist {\r\n  height: 100%;\r\n  width: 450px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  /* overflow-x: hidden; */\r\n  transition: 0.5s;\r\n  padding-top: 30px;\r\n}\r\n\r\n.sidenavlist .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.add-user-title {\r\n  font-size: 1.3em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n  font-weight: 600;\r\n}\r\n\r\n.users-card {\r\n  background-color: lightblue;\r\n  width: 100%;\r\n  border: 1px solid #f1f1f1;\r\n  border-radius: 10px;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.accept {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: green;\r\n}\r\n\r\n.reject {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n  font-weight: 600;\r\n  color: maroon;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenavlist {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenavlist a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenavlist styles */\r\n\r\n/* pagination styles */\r\n\r\n.pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.pagination a {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination a.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.pagination li {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination li.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination li:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.width-50 {\r\n  width: 150px;\r\n}\r\n\r\n/* .width-100 {\r\n  width: 50px;\r\n} */\r\n\r\n.search-fields {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #1667af;\r\n  padding: 5px;\r\n  width: 50px;\r\n}\r\n\r\n.btn-action-cancel {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #ccc;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n  color: white;\r\n  background-color: gray;\r\n}\r\n\r\n.btn-action-add {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVhdXRpY2lhbi11c2Vycy9iZWF1dGljaWFuLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7OEJBRTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7NEJBRTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0EsdUJBQXVCOztBQUV2Qix1QkFBdUI7O0FBQ3ZCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUNBLDJCQUEyQjs7QUFHM0Isc0JBQXNCOztBQUN0QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmVhdXRpY2lhbi11c2Vycy9iZWF1dGljaWFuLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVhdXR5LWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0ZSB7XHJcbiAgY29sb3I6ICM1MmJlODA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZS1jYXJkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTVlZDtcclxufVxyXG5cclxuLmFjdGl2ZS1jYXJkIC5zdWItdGl0bGVzIHtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi8qIHNpZGVuYXYgc3R5bGVzICovXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmFwcG9pbnRtZW50LWNhcmQge1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uYWRkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIHRleHQtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDgxLCA2NywgMjEsIDAuOCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnVzZXItZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZGF0ZS1zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLnRpbWUtc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiAuYW1vdW50LWlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59ICovXHJcblxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4vKiBlbmQgc2lkZW5hdiBzdHlsZXMgKi9cclxuXHJcbi8qIHNpZGVuYXZsaXN0IHN0eWxlcyAqL1xyXG4uc2lkZW5hdmxpc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdmxpc3QgLmNsb3NlYnRuIHtcclxuICBjb2xvcjogIzY0OTVlZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hZGQtdXNlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDRweCA3cHggcmdiYSg4MSwgNjcsIDIxLCAwLjgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi51c2Vycy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjZXB0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWplY3Qge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiBtYXJvb247XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5zaWRlbmF2bGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGVuYXZsaXN0IGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4vKiBlbmQgc2lkZW5hdmxpc3Qgc3R5bGVzICovXHJcblxyXG5cclxuLyogcGFnaW5hdGlvbiBzdHlsZXMgKi9cclxuLnBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMTY2N2FmO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3YTdhNztcclxuICBtYXJnaW46IDAgNHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxNjY3YWY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGk6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uaXNEaXNhYmxlIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVzIHAge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53aWR0aC01MCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4vKiAud2lkdGgtMTAwIHtcclxuICB3aWR0aDogNTBweDtcclxufSAqL1xyXG5cclxuLnNlYXJjaC1maWVsZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1jYW5jZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/beautician-users/beautician-users.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/beautician-users/beautician-users.component.ts ***!
    \****************************************************************/

  /*! exports provided: BeauticianUsersComponent */

  /***/
  function srcAppBeauticianUsersBeauticianUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianUsersComponent", function () {
      return BeauticianUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var BeauticianUsersComponent = /*#__PURE__*/function () {
      function BeauticianUsersComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, BeauticianUsersComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('userid');
        this.username = sessionStorage.getItem('username');
        this.role = sessionStorage.getItem('role');
        this.tempArray = [];
        this.usersArray = [];
        this.viewItem = {};
        this.selectUser = {};
        this.selectStatus = null;
        this.currentIndex = null;
        this.rowsOnPage = 8;
        this.limit = 8;
        this.page = 1;
        this.count = 0;
        this.pager = {};
        this.totalPages = [];
        this.searchQuery = '';
        this.statusQuery = null;
        this.filterStatus = null;
        this.usersList = [];
        this.pendingUsers = [];
        this.amount = null;
        this.bills = null;
        this.description = null;
      }

      _createClass(BeauticianUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // for (let i = 0; i < 6; i++) {
          //   this.tempArray.push({
          //     username: `user ${i+1}`,
          //     appointment_date: `2021-05-0${i+1}`,
          //     appointment_time: `0${i+1}:00 AM`
          //   });
          // }
          // for (let i = 6; i < 9; i++) {
          //   this.usersArray.push({
          //     username: `user ${i}`,
          //     appointment_date: `2021-05-0${i+1}`,
          //     appointment_time: `0${i+1}:00 AM`
          //   });
          // }
          this.getAllUserBookingsData();
        }
      }, {
        key: "openNav",
        value: function openNav(item, index) {
          console.log('Selected item isss', item);
          this.viewItem = item;
          this.currentIndex = index + 1; // document.getElementById('mySidenav').style.width = '400px';
          // document.getElementById('main').style.marginRight = '250px';
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.viewItem = {};
          this.currentIndex = null;
          this.amount = null;
          this.bills = null;
          document.getElementById('mySidenav').style.width = '0';
          document.getElementById('main').style.marginRight = '0';
        }
      }, {
        key: "getAllUserBookingsData",
        value: function getAllUserBookingsData() {
          var _this15 = this;

          var userBookingsPayload = {
            limit: Number(this.limit),
            page: Number(this.page),
            query: this.searchQuery,
            status: !this.statusQuery || this.statusQuery === null ? 'all' : Number(this.statusQuery),
            user_id: Number(this.userId)
          };
          console.log('Post payload to get all user bookings data isss', userBookingsPayload);
          this.beauticianService.getAllUserBookings(userBookingsPayload).subscribe(function (response) {
            console.log('Get all user bookings response isss', response);

            if (response.success) {
              _this15.usersList = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](response.data, function (e) {
                return e.booking_status === 0 || e.booking_status === 1;
              });
              _this15.pendingUsers = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](response.data, function (e) {
                return e.booking_status === 2;
              });
              _this15.count = response.count;

              _this15.createPager();
            } else {
              _this15.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this15.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "getPage",
        value: function getPage(event) {
          console.log('Selected page isss', event);
          this.page = Number(event);
          this.getAllUserBookingsData();
        }
      }, {
        key: "createPager",
        value: function createPager() {
          // this.pager.startCount = this.beauticians.length > 0 && Number(this.page) === 1 ? 1 : this.beauticians.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
          // this.pager.endCount = Number(this.rowsOnPage) === this.beauticians.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          // console.log(this.pager);
          var endLimit = Math.round(this.count / this.limit) === 0 ? Math.round(this.count / this.limit) : Math.round(this.count / this.limit) + 1;
          endLimit = endLimit === 0 ? 1 : endLimit;
          console.log('end limit isss', endLimit);
          this.totalPages = [];

          for (var num = 1; num <= Number(endLimit); num += 1) {
            this.totalPages.push(num);
          }

          console.log('total pages isss', this.totalPages);
        }
      }, {
        key: "onSearchData",
        value: function onSearchData() {
          // console.log('search request data isss', this.searchQuery);
          if (this.searchQuery || this.searchQuery !== '') {
            this.getAllUserBookingsData();
          }
        }
      }, {
        key: "onInputSearch",
        value: function onInputSearch() {
          if (!this.searchQuery || this.searchQuery === '') {
            this.getAllUserBookingsData();
          }
        }
      }, {
        key: "onSelectStatus",
        value: function onSelectStatus() {
          this.getAllUserBookingsData();
        }
      }, {
        key: "onSelectUser",
        value: function onSelectUser(item, value) {
          console.log('Select user isss', item);
          this.selectUser = item;
          this.selectStatus = Number(value);
        }
      }, {
        key: "addRejectUserAppointment",
        value: function addRejectUserAppointment() {
          var _this16 = this;

          var statusPayload = {
            booking_id: Number(this.selectUser.book_id),
            booking_status: Number(this.selectStatus),
            user_id: Number(this.selectUser.user_id),
            date: moment__WEBPACK_IMPORTED_MODULE_7__(this.selectUser.date).format('YYYY-MM-DD'),
            description: this.description,
            services: this.selectUser.services,
            amounts: this.selectUser.amounts,
            issued_by: this.username
          };
          console.log('Post payload to update user booking status isss', statusPayload);
          this.beauticianService.updateBookingStatusById(statusPayload).subscribe(function (response) {
            console.log('Get update user booking status response isss', response);

            if (response.success) {
              _this16.toastr.successToastr(response.message);

              $('#confirmModal').modal('hide');
            } else {
              _this16.toastr.errorToastr(response.message);

              $('#confirmModal').modal('show');
            }

            _this16.getAllUserBookingsData();
          }, function (error) {
            _this16.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.reasonFormRef) {
            this.reasonFormRef.reset();
          }

          this.description = null;
        }
      }]);

      return BeauticianUsersComponent;
    }();

    BeauticianUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reasonForm', {
      "static": false
    })], BeauticianUsersComponent.prototype, "reasonFormRef", void 0);
    BeauticianUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beautician-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beautician-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician-users/beautician-users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beautician-users.component.css */
      "./src/app/beautician-users/beautician-users.component.css"))["default"]]
    })], BeauticianUsersComponent);
    /***/
  },

  /***/
  "./src/app/beautician/beautician-profile/beautician-profile.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/beautician/beautician-profile/beautician-profile.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBeauticianBeauticianProfileBeauticianProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlYXV0aWNpYW4vYmVhdXRpY2lhbi1wcm9maWxlL2JlYXV0aWNpYW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/beautician/beautician-profile/beautician-profile.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/beautician/beautician-profile/beautician-profile.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: BeauticianProfileComponent */

  /***/
  function srcAppBeauticianBeauticianProfileBeauticianProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticianProfileComponent", function () {
      return BeauticianProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BeauticianProfileComponent = /*#__PURE__*/function () {
      function BeauticianProfileComponent() {
        _classCallCheck(this, BeauticianProfileComponent);
      }

      _createClass(BeauticianProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BeauticianProfileComponent;
    }();

    BeauticianProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-beautician-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beautician-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/beautician/beautician-profile/beautician-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beautician-profile.component.css */
      "./src/app/beautician/beautician-profile/beautician-profile.component.css"))["default"]]
    })], BeauticianProfileComponent);
    /***/
  },

  /***/
  "./src/app/beauticians-list/beauticians-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/beauticians-list/beauticians-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBeauticiansListBeauticiansListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.active-status {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.inactive-status {\r\n  color: crimson;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-title {\r\n  color: #6495ed;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* pagination styles */\r\n\r\n.pagination {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.pagination a {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination a.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.pagination li {\r\n  cursor: pointer;\r\n  color: #1667af;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  transition: background-color 0.3s;\r\n  border: 1px solid #a7a7a7;\r\n  margin: 0 4px;\r\n}\r\n\r\n.pagination li.active {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  border: 1px solid #4caf50;\r\n}\r\n\r\n.pagination li:hover:not(.active) {\r\n  background-color: #ddd;\r\n}\r\n\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.width-50 {\r\n  width: 150px;\r\n}\r\n\r\n/* .width-100 {\r\n  width: 50px;\r\n} */\r\n\r\n.search-fields {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #1667af;\r\n  padding: 5px;\r\n  width: 50px;\r\n}\r\n\r\n.btn-action-cancel {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #ccc;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n  color: white;\r\n  background-color: gray;\r\n}\r\n\r\n.btn-action-add {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-add:hover {\r\n  color: white;\r\n  background-color: #1667af;\r\n}\r\n\r\nlabel {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.label-title {\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.label-title .card-link {\r\n  cursor: pointer;\r\n  color: gray !important;\r\n  font-size: 1em;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  font-size: 0.5em;\r\n  margin-left: -20px;\r\n}\r\n\r\n.isActive {\r\n  background-color: lightgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVhdXRpY2lhbnMtbGlzdC9iZWF1dGljaWFucy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7MEJBRXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9iZWF1dGljaWFucy1saXN0L2JlYXV0aWNpYW5zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWF1dHktY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUtc3RhdHVzIHtcclxuICBjb2xvcjogIzUyYmU4MDtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5hY3RpdmUtc3RhdHVzIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4uYWN0aXZlLWNhcmQgLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLyogc2lkZW5hdiBzdHlsZXMgKi9cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDU1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLXRpdGxlIHtcclxuICBjb2xvcjogIzY0OTVlZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogcGFnaW5hdGlvbiBzdHlsZXMgKi9cclxuLnBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMTY2N2FmO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3YTdhNztcclxuICBtYXJnaW46IDAgNHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxNjY3YWY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTdhN2E3O1xyXG4gIG1hcmdpbjogMCA0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjYWY1MDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gbGk6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uaXNEaXNhYmxlIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4udGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVzIHAge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53aWR0aC01MCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4vKiAud2lkdGgtMTAwIHtcclxuICB3aWR0aDogNTBweDtcclxufSAqL1xyXG5cclxuLnNlYXJjaC1maWVsZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1jYW5jZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWFkZDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWwtdGl0bGUgLmNhcmQtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5pc0FjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/beauticians-list/beauticians-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/beauticians-list/beauticians-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: BeauticiansListComponent */

  /***/
  function srcAppBeauticiansListBeauticiansListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BeauticiansListComponent", function () {
      return BeauticiansListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var BeauticiansListComponent = /*#__PURE__*/function () {
      function BeauticiansListComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, BeauticiansListComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem("userid");
        this.tempArray = [];
        this.viewItem = {};
        this.currentIndex = null;
        this.rowsOnPage = 8;
        this.limit = 8;
        this.page = 1;
        this.count = 0;
        this.pager = {};
        this.totalPages = [];
        this.searchQuery = "";
        this.statusQuery = null;
        this.filterStatus = null;
        this.beautyParlours = [];
        this.service = null;
        this.subService = null;
        this.servicesList = [];
        this.subSerivcesObj = {};
        this.subServicesList = [];
        this.selectedServices = [];
        this.servicesSettings = {};
        this.selectedSubServices = [];
        this.subServicesSettings = {};
        this.subSettings = [];
        this.allSubServices = [];
        this.currentId = null;
        this.selectAll = [];
      }

      _createClass(BeauticiansListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < 6; i++) {
            var start = i === 0 ? i * 3 : (i + 1) * 3 - 3;
            var end = 3;
            var alphabits = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var tempAlphabits = alphabits;
            var resultName = tempAlphabits.splice(start, end).join("");
            this.tempArray.push({
              name: resultName,
              exp: i
            });
          }

          this.getAllBeautyParloursData();
          this.servicesSettings = {
            singleSelection: false,
            text: "Select Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2
          };
          this.subServicesSettings = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: true
          };
        }
      }, {
        key: "openNav",
        value: function openNav(item, index) {
          this.viewItem = item;
          this.currentIndex = index + 1;
          document.getElementById("mySidenav").style.width = "400px";
          document.getElementById("main").style.marginRight = "250px";
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.viewItem = {};
          this.currentIndex = null;
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginRight = "0";
        }
      }, {
        key: "getAllBeautyParloursData",
        value: function getAllBeautyParloursData() {
          var _this17 = this;

          var beauticianPayload = {
            limit: Number(this.limit),
            page: Number(this.page),
            query: this.searchQuery,
            status: !this.statusQuery || this.statusQuery === null ? "all" : Number(this.statusQuery)
          };
          console.log("Post payload to get all beauticians data isss", beauticianPayload);
          this.beauticianService.getAllBeautyParlours(beauticianPayload).subscribe(function (response) {
            console.log("Get all beauticians response isss", response);

            if (response.success) {
              _this17.beautyParlours = response.data;
              _this17.count = response.count;

              _this17.createPager();
            } else {
              _this17.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this17.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "getPage",
        value: function getPage(event) {
          console.log("Selected page isss", event);
          this.page = Number(event);
          this.getAllBeautyParloursData();
        }
      }, {
        key: "createPager",
        value: function createPager() {
          // this.pager.startCount = this.beautyParlours.length > 0 && Number(this.page) === 1 ? 1 : this.beautyParlours.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
          // this.pager.endCount = Number(this.rowsOnPage) === this.beautyParlours.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          // console.log(this.pager);
          var endLimit = Math.round(this.count / this.limit) === 0 ? Math.round(this.count / this.limit) : Math.round(this.count / this.limit) + 1;
          endLimit = endLimit === 0 ? 1 : endLimit;
          console.log("end limit isss", endLimit);
          this.totalPages = [];

          for (var num = 1; num <= Number(endLimit); num += 1) {
            this.totalPages.push(num);
          }

          console.log("total pages isss", this.totalPages);
        }
      }, {
        key: "onActionBookSlot",
        value: function onActionBookSlot() {
          console.log("Selected item isss", this.viewItem);
          this.servicesList = Object.keys(this.viewItem.servicesList);
          this.subSerivcesObj = this.viewItem.servicesList;

          for (var _i3 = 0, _Object$keys3 = Object.keys(this.subSerivcesObj); _i3 < _Object$keys3.length; _i3++) {
            var item = _Object$keys3[_i3];
            this.allSubServices.push(this.subSerivcesObj[item]);
            this.selectedSubServices.push([]);
            this.subSettings.push(this.subServicesSettings);
            this.selectAll.push(false);
          }

          console.log("all sub services isss", this.allSubServices);
        }
      }, {
        key: "onInputAction",
        value: function onInputAction(item, id, event) {
          console.log("Selected event and item and id isss", event, item, id);
          this.selectAll[id] = event;
          console.log("selected checked isss", this.selectAll);
          this.subSettings[id] = {
            singleSelection: false,
            text: "Select Sub Services :",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            badgeShowLimit: 2,
            disabled: !event
          };
        }
      }, {
        key: "onCollapseBody",
        value: function onCollapseBody(item, id) {
          console.log("Selected item and index isss", item, id);
          this.currentId = Number(id);
        } // select and de-select sub services

      }, {
        key: "onSubServiceSelect",
        value: function onSubServiceSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "OnSubServiceDeSelect",
        value: function OnSubServiceDeSelect(item) {
          console.log(item);
          console.log(this.selectedSubServices);
        }
      }, {
        key: "onSelectAllSubService",
        value: function onSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "onDeSelectAllSubService",
        value: function onDeSelectAllSubService(items) {
          console.log(items);
        }
      }, {
        key: "resetModal",
        value: function resetModal() {
          this.currentId = null;
          this.selectAll = [];
          this.servicesList = [];
          this.subServicesList = [];
          this.subSerivcesObj = {};
          this.allSubServices = [];
          this.selectedSubServices = [];
          this.subSettings = [];
        }
      }, {
        key: "setDisableModal",
        value: function setDisableModal() {
          if (!this.selectAll.includes(true)) {
            return true;
          } else {
            var count = 0;

            var _iterator9 = _createForOfIteratorHelper(this.selectedSubServices),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var item = _step9.value;

                if (item.length === 0) {
                  count += 1;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            if (count === this.selectedSubServices.length) {
              return true;
            } else {
              return false;
            }
          }
        }
      }, {
        key: "onSearchData",
        value: function onSearchData() {
          // console.log('search request data isss', this.searchQuery);
          if (this.searchQuery || this.searchQuery !== "") {
            this.getAllBeautyParloursData();
          }
        }
      }, {
        key: "onInputSearch",
        value: function onInputSearch() {
          if (!this.searchQuery || this.searchQuery === "") {
            this.getAllBeautyParloursData();
          }
        }
      }, {
        key: "onSelectStatus",
        value: function onSelectStatus() {
          this.getAllBeautyParloursData();
        }
      }, {
        key: "onInputEvent",
        value: function onInputEvent() {
          console.log(this.selectTime);
          console.log(moment__WEBPACK_IMPORTED_MODULE_6__(this.selectTime).format('LTS'));
        }
      }, {
        key: "addBookingData",
        value: function addBookingData() {
          var _this18 = this;

          var SUBSERVICES = [];
          var AMOUNTS = [];

          var _iterator10 = _createForOfIteratorHelper(this.selectedSubServices),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var item = _step10.value;

              var _iterator11 = _createForOfIteratorHelper(item),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var data = _step11.value;
                  SUBSERVICES.push(data.sub_service_name);
                  AMOUNTS.push(data.service_amount);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          console.log('selected sub services and amounts isss', SUBSERVICES, AMOUNTS);
          var bookingPayload = {
            booking_id: null,
            user_id: Number(this.userId),
            beautician_id: Number(this.viewItem.beautician_id),
            owner_id: Number(this.viewItem.owner_id),
            law_firm_name: this.viewItem.law_firm_name,
            services: SUBSERVICES.join(','),
            amounts: AMOUNTS.join(','),
            date: moment__WEBPACK_IMPORTED_MODULE_6__(this.selectDate).format("YYYY-MM-DD"),
            time: moment__WEBPACK_IMPORTED_MODULE_6__(this.selectTime).format("HH:MM:ss"),
            booking_status: 2,
            users_limit: Number(this.viewItem.users_limit)
          };
          console.log("Post payload to add booking data isss", bookingPayload);
          this.beauticianService.addBooking(bookingPayload).subscribe(function (response) {
            console.log("Get add booking response isss", response);

            if (response.success) {
              _this18.toastr.successToastr(response.message);

              $('#bookAppModal').modal('hide');

              _this18.closeNav();

              _this18.resetModal();

              _this18.resetForm();
            } else {
              _this18.toastr.errorToastr(response.message);

              $('#bookAppModal').modal('show');
            }
          }, function (error) {
            _this18.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.selectDate = null;
          this.selectTime = null;
        }
      }]);

      return BeauticiansListComponent;
    }();

    BeauticiansListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    BeauticiansListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-beauticians-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./beauticians-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/beauticians-list/beauticians-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./beauticians-list.component.css */
      "./src/app/beauticians-list/beauticians-list.component.css"))["default"]]
    })], BeauticiansListComponent);
    /***/
  },

  /***/
  "./src/app/common-pages/games-list/games-list.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/common-pages/games-list/games-list.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonPagesGamesListGamesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* start table css styles */\r\n.table-titles {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.table-titles .table-names {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.table-names .span1 {\r\n    color: lightslategray;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n}\r\n.table-names .span3 {\r\n    color: #a3a3a3;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n}\r\ntable thead tr th {\r\n    /* padding: 1.5em; */\r\n    border-top: 1px solid lightslategray;\r\n    border-bottom: 1px solid lightslategray;\r\n    color: white;\r\n    font-weight: 600;\r\n    background-color: steelblue;\r\n}\r\n.main-table thead tr th:nth-child(1) {\r\n    cursor: pointer;\r\n    border-left: 1px solid lightslategray;\r\n    border-right: 1px solid white;\r\n}\r\n.main-table thead tr th:nth-child(10) {\r\n    border-left: 1px solid white;\r\n    border-right: 1px solid lightslategray;\r\n}\r\n.sub-table {\r\n    background-color: white;\r\n}\r\n.sub-table thead tr th:nth-child(1) {\r\n    cursor: pointer;\r\n    border-left: 1px solid lightslategray;\r\n    border-right: 1px solid white;\r\n}\r\n.sub-table thead tr th:nth-child(8) {\r\n    border-left: 1px solid white;\r\n    border-right: 1px solid lightslategray;\r\n}\r\ntable tbody tr td {\r\n    /* padding: 1.5em; */\r\n    color: #a3a3a3;\r\n    font-weight: 400;\r\n}\r\n.table-actions {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.btn-action-add {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: steelblue;\r\n}\r\n.btn-action-add:hover {\r\n    background-color: #1667af;\r\n}\r\n.table-actions .search-input {\r\n    width: 145% !important;\r\n}\r\n.table-actions .search-input input[type=\"text\"] {\r\n    width: 550px;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: #a3a3a3;\r\n}\r\n.btn-action-filter {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: lightgray;\r\n    border-top-right-radius: 0%;\r\n    border-bottom-right-radius: 0%;\r\n}\r\n.btn-action-filter:hover {\r\n    background-color: lightslategray;\r\n}\r\n.btn-action-search {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: steelblue;\r\n    border-top-left-radius: 0%;\r\n    border-bottom-left-radius: 0%;\r\n}\r\n.btn-action-search:hover {\r\n    background-color: #1667af;\r\n}\r\n.btn-action-one,  \r\n.btn-action-two, \r\n.btn-action-three, \r\n.btn-action-four {\r\n    cursor: pointer;\r\n    color: #a3a3a3;\r\n    height: 50px;\r\n    padding: 15px;\r\n    border: 1px solid lightgray;\r\n}\r\n.btn-action-one {\r\n    border-top-right-radius: 0%;\r\n    border-bottom-right-radius: 0%;\r\n}\r\n.btn-action-two, .btn-action-three {\r\n    border-radius: 0%;\r\n}\r\n.btn-action-four {\r\n    border-top-left-radius: 0%;\r\n    border-bottom-left-radius: 0%;\r\n}\r\n.btn-action-one:hover {\r\n    color: white;\r\n    background-color: lightseagreen;\r\n}\r\n.btn-action-two:hover {\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n.btn-action-three:hover {\r\n    color: white;\r\n    background-color: lightblue;\r\n}\r\n.btn-action-four:hover {\r\n    color: white;\r\n    background-color: crimson;\r\n}\r\ntable tbody tr td {\r\n    font-size: 0.9em;\r\n}\r\n.action-td {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: baseline;\r\n}\r\n.action-td .fa {\r\n    cursor: pointer;\r\n    padding: 0.5em;\r\n    border-radius: 5px;\r\n}\r\n.action-td .span1 {\r\n    color: #1667af;\r\n    border: 1px solid #1667af;\r\n}\r\n.action-td .span1:hover {\r\n    color: white;\r\n    background-color: #1667af;\r\n}\r\n.action-td .span2 {\r\n    color: lightslategray;\r\n    border: 1px solid lightslategray;\r\n}\r\n.action-td .span2:hover {\r\n    color: white;\r\n    background-color: lightslategray;\r\n}\r\n.action-td .span3 {\r\n    color: crimson;\r\n    border: 1px solid crimson;\r\n}\r\n.action-td .span3:hover {\r\n    color: white;\r\n    background-color: crimson;\r\n}\r\n.btn-action-open {\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n.btn-action-open:hover {\r\n    background-color: lightslategray;\r\n}\r\n.isActive {\r\n    background-color: lightslategray;\r\n}\r\n.isHighlight {\r\n    /* background-color: #dee2e6; */\r\n    background-color: #f1f1f1;\r\n}\r\n.isAll {\r\n    color: white;\r\n    background-color: lightseagreen;\r\n}\r\n.isPending {\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n.isComplete {\r\n    color: white;\r\n    background-color: lightblue;\r\n}\r\n.isNotStart {\r\n    color: white;\r\n    background-color: crimson;\r\n}\r\n/* end table css styles */\r\n/* start form css styles */\r\n.form-titles {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.form-titles .form-names {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n}\r\n.form-names .span1 {\r\n    color: lightslategray;\r\n    font-size: 1.1em;\r\n    font-weight: 600;\r\n}\r\n.form-titles .span3 {\r\n    color: #a3a3a3;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n}\r\n.btn-action-back {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n.btn-action-back:hover {\r\n    background-color: lightslategray;\r\n}\r\n.form-actions label {\r\n    color: lightgray;\r\n    font-size: 1em;\r\n    font-weight: 200;\r\n    border-left: 5px solid #1667af;\r\n    padding: 10px;\r\n}\r\n.form-actions .config-box {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: baseline;\r\n}\r\n.form-actions .config-box .p1 {\r\n    cursor: pointer;\r\n    color: #a3a3a3;\r\n    padding: 15px;\r\n    border: 1px solid #a3a3a3;\r\n    background-color: lightgray;\r\n    border-radius: 5px;\r\n}\r\n.form-actions .config-box .p1:hover {\r\n    color: white;\r\n    background-color: #1667af;\r\n}\r\n.form-actions .config-box .p2 {\r\n    cursor: pointer;\r\n    color: #a3a3a3;\r\n    padding: 15px;\r\n    border: 1px solid #a3a3a3;\r\n    background-color: lightgray;\r\n    border-radius: 5px;\r\n}\r\n.form-actions .config-box .p2:hover {\r\n    color: white;\r\n    background-color: #1667af;\r\n}\r\n.form-actions input[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"number\"],\r\ninput[type=\"password\"],\r\ninput[type=\"file\"],\r\ninput[type=\"range\"],\r\nselect,\r\ntextarea {\r\n    height: 50px;\r\n    padding: 10px;\r\n    color: #a3a3a3;\r\n    font-weight: 200;\r\n}\r\n.btn-action-cancel {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n.btn-action-cancel:hover {\r\n    background-color: lightslategray;\r\n}\r\n.btn-action-save {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: steelblue;\r\n}\r\n.btn-action-addnew {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: steelblue;\r\n}\r\n.btn-action-addnew:hover {\r\n    background-color: #1667af;\r\n}\r\n.btn-action-delete {\r\n    cursor: pointer;\r\n    height: 50px;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: lightcoral;\r\n}\r\n.btn-action-delete:hover {\r\n    background-color: crimson;\r\n}\r\n.isConfig {\r\n    color: white;\r\n    background-color: #1667af;\r\n}\r\n/* end form css styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLXBhZ2VzL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBOzs7O0lBSUksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0EseUJBQXlCO0FBRXpCLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7Ozs7Ozs7O0lBUUksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0Esd0JBQXdCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uLXBhZ2VzL2dhbWVzLWxpc3QvZ2FtZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3RhcnQgdGFibGUgY3NzIHN0eWxlcyAqL1xyXG4udGFibGUtdGl0bGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi50YWJsZS10aXRsZXMgLnRhYmxlLW5hbWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi50YWJsZS1uYW1lcyAuc3BhbjEge1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YWJsZS1uYW1lcyAuc3BhbjMge1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxudGFibGUgdGhlYWQgdHIgdGgge1xyXG4gICAgLyogcGFkZGluZzogMS41ZW07ICovXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4ubWFpbi10YWJsZSB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi10YWJsZSB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMTApIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLnN1Yi10YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Yi10YWJsZSB0aGVhZCB0ciB0aDpudGgtY2hpbGQoMSkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uc3ViLXRhYmxlIHRoZWFkIHRyIHRoOm50aC1jaGlsZCg4KSB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbnRhYmxlIHRib2R5IHRyIHRkIHtcclxuICAgIC8qIHBhZGRpbmc6IDEuNWVtOyAqL1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udGFibGUtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1hZGQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi50YWJsZS1hY3Rpb25zIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE0NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLWFjdGlvbnMgLnNlYXJjaC1pbnB1dCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWZpbHRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1maWx0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXNlYXJjaCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwJTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLW9uZSwgIFxyXG4uYnRuLWFjdGlvbi10d28sIFxyXG4uYnRuLWFjdGlvbi10aHJlZSwgXHJcbi5idG4tYWN0aW9uLWZvdXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1vbmUge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi10d28sIC5idG4tYWN0aW9uLXRocmVlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1mb3VyIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCU7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLW9uZTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG59XHJcbiBcclxuLmJ0bi1hY3Rpb24tdHdvOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4gXHJcbi5idG4tYWN0aW9uLXRocmVlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4gXHJcbi5idG4tYWN0aW9uLWZvdXI6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxudGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmFjdGlvbi10ZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5hY3Rpb24tdGQgLmZhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uLXRkIC5zcGFuMSB7XHJcbiAgICBjb2xvcjogIzE2NjdhZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNjY3YWY7XHJcbn1cclxuXHJcbi5hY3Rpb24tdGQgLnNwYW4xOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5hY3Rpb24tdGQgLnNwYW4yIHtcclxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4uYWN0aW9uLXRkIC5zcGFuMjpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLmFjdGlvbi10ZCAuc3BhbjMge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjcmltc29uO1xyXG59XHJcblxyXG4uYWN0aW9uLXRkIC5zcGFuMzpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1vcGVuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tb3Blbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLmlzQWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4uaXNIaWdobGlnaHQge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5pc0FsbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG59XHJcblxyXG4uaXNQZW5kaW5nIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmlzQ29tcGxldGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uaXNOb3RTdGFydCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcbi8qIGVuZCB0YWJsZSBjc3Mgc3R5bGVzICovXHJcblxyXG4vKiBzdGFydCBmb3JtIGNzcyBzdHlsZXMgKi9cclxuLmZvcm0tdGl0bGVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlcyAuZm9ybS1uYW1lcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uZm9ybS1uYW1lcyAuc3BhbjEge1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlcyAuc3BhbjMge1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYmFjayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1iYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIGxhYmVsIHtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxNjY3YWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIC5jb25maWctYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyAuY29uZmlnLWJveCAucDEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyAuY29uZmlnLWJveCAucDE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyAuY29uZmlnLWJveCAucDIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNhM2EzYTM7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyAuY29uZmlnLWJveCAucDI6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxyXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0sXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjYTNhM2EzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tY2FuY2VsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2F2ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbi1hZGRuZXcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tYWRkbmV3OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWRlbGV0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tZGVsZXRlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi5pc0NvbmZpZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2N2FmO1xyXG59XHJcbi8qIGVuZCBmb3JtIGNzcyBzdHlsZXMgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/common-pages/games-list/games-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/common-pages/games-list/games-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GamesListComponent */

  /***/
  function srcAppCommonPagesGamesListGamesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamesListComponent", function () {
      return GamesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var GamesListComponent = /*#__PURE__*/function () {
      function GamesListComponent(formBuilder) {
        _classCallCheck(this, GamesListComponent);

        this.formBuilder = formBuilder;
        this.limit = 10;
        this.rowsOnPage = 10;
        this.page = 1;
        this.pager = {};
        this.totalPages = 0;
        this.searchQuery = '';
        this.viewPage = 'table';
        this.gamesList = [{
          title: 'GTA Series',
          sub_title: [{
            name: 'GTA I',
            actual_size: '5 GB',
            website: 'www.thepcgames.net',
            url_download: 'https://www.thepcgames.net/gta/download',
            download_progress: 97,
            status: 1
          }, {
            name: 'GTA I',
            actual_size: '3.7 GB',
            website: 'www.oceanofgames.org',
            url_download: 'https://www.oceanofgames.org/gta/download',
            download_progress: 0,
            status: 0
          }, {
            name: 'GTA SanAndReas',
            actual_size: '8 GB',
            website: 'www.thepcgames.net',
            url_download: 'https://www.thepcgames.net/gta_sandandreas/download',
            download_progress: 0,
            status: 0
          }, {
            name: 'GTA SanAndReas',
            actual_size: '4.5 GB',
            website: 'www.oceanofgames.org',
            url_download: 'https://www.oceanofgames.org/gta_sandandreas/download',
            download_progress: 35,
            status: 1
          }, {
            name: 'GTA V',
            actual_size: '65 GB',
            website: 'www.thepcgames.net',
            url_download: 'https://www.thepcgames.net/gta5/download',
            download_progress: 86,
            status: 1
          }, {
            name: 'GTA V',
            actual_size: '53 GB',
            website: 'www.oceanofgames.org',
            url_download: 'https://www.oceanofgames.org/gta5/download',
            download_progress: 0,
            status: 0
          }],
          total_size: '139.2 GB',
          websites: ['www.thepcgames.net', 'www.oceanofgames.org', 'www.crackedgames.org'],
          download_urls: ['https://www.thepcgames.net/gta5/download', 'https://www.oceanofgames.org/gta5/download', 'https://www.crackedgames.org/gta5/download'],
          total_progress: 36,
          status: 1,
          selected: false
        }, {
          title: 'Forza Horizon Series',
          sub_title: [{
            name: 'Forza Horizon 3',
            actual_size: '35 GB',
            website: 'www.thepcgames.net',
            url_download: 'https://www.thepcgames.net/forza_horizon3/download',
            download_progress: 65,
            status: 1
          }, {
            name: 'Forza Horizon 3',
            actual_size: '23 GB',
            website: 'www.oceanofgames.org',
            url_download: 'https://www.oceanofgames.org/forza_horizon3/download',
            download_progress: 0,
            status: 0
          }, {
            name: 'Forza Horizon 4',
            actual_size: '65 GB',
            website: 'www.thepcgames.net',
            url_download: 'https://www.thepcgames.net/forza_horizon4/download',
            download_progress: 45,
            status: 1
          }, {
            name: 'Forza Horizon 4',
            actual_size: '55 GB',
            website: 'www.oceanofgames.org',
            url_download: 'https://www.oceanofgames.org/forza_horizon4/download',
            download_progress: 0,
            status: 0
          }],
          total_size: '178 GB',
          websites: ['www.thepcgames.net', 'www.oceanofgames.org', 'www.crackedgames.org'],
          download_urls: ['https://www.thepcgames.net/gta5/download', 'https://www.oceanofgames.org/gta5/download', 'https://www.crackedgames.org/gta5/download'],
          total_progress: 27,
          status: 1,
          selected: false
        }];
        this.viewGame = {};
        this.currentIndex = null;
        this.filterList = 'all';
        this.viewForm = '';
        this.gameName = null;
        this.sizeConfigName = null;
        this.gameSize = null;
        this.gameProgress = null;
        this.subGameName = null;
        this.formIndex = null;
      }

      _createClass(GamesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.siteUrlForm = this.formBuilder.group({
            siteUrlArr: this.formBuilder.array([this.initForm('single')])
          });
          this.seriesGameForm = this.formBuilder.group({
            seriesGameArr: this.formBuilder.array([this.initForm('multiple')])
          });
        }
      }, {
        key: "onSelectPageView",
        value: function onSelectPageView(view) {
          console.log('Selected page view isss', view);
          this.viewPage = view;
          this.viewForm = '';
          this.resetForm();
        }
      }, {
        key: "onSelectItem",
        value: function onSelectItem(item) {
          console.log('Selected item isss', item);
          this.viewGame = item;
        }
      }, {
        key: "myFunction",
        value: function myFunction(id, index) {
          var tableId = id + "-".concat(index);
          var x = document.getElementById(tableId);

          if (x.className.indexOf('w3-show') === -1) {
            x.className += ' w3-show';
            this.currentIndex = index;

            for (var i = 0; i < this.gamesList.length; i++) {
              if (i !== index) {
                var tableId1 = id + "-".concat(i);
                var y = document.getElementById(tableId1);
                y.className = y.className.replace(' w3-show', '');
              }
            }
          } else {
            x.className = x.className.replace(' w3-show', '');
            this.currentIndex = null;
          }
        }
      }, {
        key: "onSelectFilterList",
        value: function onSelectFilterList(list) {
          console.log('Select list isss', list);
          this.filterList = list;
        }
      }, {
        key: "onSelectConfig",
        value: function onSelectConfig(form) {
          console.log('Select form config isss', form);
          this.viewForm = form;
          this.resetForm();
        }
      }, {
        key: "initForm",
        value: function initForm(form) {
          if (form === 'single') {
            return this.formBuilder.group({
              siteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              downloadUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          } else if (form === 'multiple') {
            return this.formBuilder.group({
              subSeriesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              subGameSizeConfig: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              subGameSize: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              webSiteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              urlDownload: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              subGameProgress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }
        }
      }, {
        key: "addForm",
        value: function addForm(id, form) {
          this.formIndex = id;

          if (form === 'single') {
            var control = this.siteUrlForm.controls.siteUrlArr;
            control.push(this.initForm('single'));
          } else if (form === 'multiple') {
            var _control = this.seriesGameForm.controls.seriesGameArr;

            _control.push(this.initForm('multiple'));
          }
        }
      }, {
        key: "removeForm",
        value: function removeForm(id, form) {
          this.formIndex = id;

          if (form === 'single') {
            var control = this.siteUrlForm.controls.siteUrlArr;
            control.removeAt(id);
          } else if (form === 'multiple') {
            var _control2 = this.seriesGameForm.controls.seriesGameArr;

            _control2.removeAt(id);
          }
        } // ******* Save Single Game Form Details ******* //

      }, {
        key: "saveGameDetails",
        value: function saveGameDetails(form) {
          var gamePayload = {};

          if (form === 'single') {
            gamePayload = {
              gameName: this.gameName,
              sizeConfigName: this.sizeConfigName,
              gameSize: this.gameSize,
              gameProgress: this.gameProgress,
              gameSiteUrls: this.siteUrlForm.controls.siteUrlArr.value
            };
          } else if (form === 'multiple') {
            gamePayload = {
              gameName: this.gameName,
              subGameSeries: this.seriesGameForm.controls.seriesGameArr.value
            };
          }

          console.log('Post payload to add game data', gamePayload);
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.singleGameFormRef) {
            this.singleGameFormRef.reset();
          }

          if (this.multipleGameFormRef) {
            this.multipleGameFormRef.reset();
          }

          if (this.siteUrlForm) {
            this.siteUrlForm.reset();
          }

          if (this.seriesGameForm) {
            this.seriesGameForm.reset();
          }

          this.viewGame = {};
          this.currentIndex = null;
          this.filterList = 'all';
          this.gameName = null;
          this.sizeConfigName = null;
          this.gameSize = null;
          this.gameProgress = null;
          this.subGameName = null;
          this.formIndex = null;

          if (this.viewForm === 'single') {
            this.initForm('single');
          } else if (this.viewForm === 'multiple') {
            this.initForm('multiple');
          }
        }
      }]);

      return GamesListComponent;
    }();

    GamesListComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleGameForm', {
      "static": false
    })], GamesListComponent.prototype, "singleGameFormRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multipleGameForm', {
      "static": false
    })], GamesListComponent.prototype, "multipleGameFormRef", void 0);
    GamesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-games-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./games-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-pages/games-list/games-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./games-list.component.css */
      "./src/app/common-pages/games-list/games-list.component.css"))["default"]]
    })], GamesListComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-brand {\r\n  color: white !important;\r\n}\r\n\r\n.navbar-nav {\r\n  align-items: baseline;\r\n}\r\n\r\n.navbar-light {\r\n  background-color: #6495ed !important;\r\n}\r\n\r\n.nav-item .nav-link {\r\n  /* border-left: 2px white solid; */\r\n}\r\n\r\n.is-active a {\r\n  color: #ccc !important;\r\n  /* border-left: 2px #ccc solid !important; */\r\n}\r\n\r\n.is-active1 {\r\n  background-color: #ccc !important;\r\n}\r\n\r\n.nav-link {\r\n  color: white !important;\r\n}\r\n\r\n.logout-link {\r\n  cursor: pointer;\r\n  border: 2px white solid !important;\r\n}\r\n\r\n.dropdown-menu {\r\n  min-width: 15em;\r\n}\r\n\r\n.dropdown-menu a {\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-menu .link {\r\n  border-top: 1px solid #ccc;\r\n}\r\n\r\n.dropdown-menu .div1 {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown-menu .div2 {\r\n  display: grid;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.dropdown-menu .p1 {\r\n}\r\n\r\n.dropdown-menu .p2 {\r\n  font-size: 0.8em;\r\n  color: #6495ed;\r\n}\r\n\r\n/* css logout modal styles */\r\n\r\n.logout-modal {\r\n  border: none;\r\n}\r\n\r\n.btn-action-out {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-out:hover {\r\n  color: white;\r\n  background-color: #1668af;\r\n}\r\n\r\n.btn-action-in {\r\n  background-color: lightgray;\r\n}\r\n\r\n.btn-action-in:hover {\r\n  background-color: #aab5c0;\r\n}\r\n\r\n.isSuccess {\r\n  color: forestgreen !important;\r\n}\r\n\r\n.isPrimary {\r\n  color: #1667af !important;\r\n}\r\n\r\n.isDanger {\r\n  color: crimson !important;\r\n  animation: blink-animation 1s steps(5, start) infinite;\r\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\r\n}\r\n\r\n@keyframes blink-animation {\r\n  to {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes blink-animation {\r\n  to {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/* endd css logout modal styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLDRCQUE0Qjs7QUFDNUI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzREFBc0Q7RUFDdEQsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0EsaUNBQWlDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDJweCB3aGl0ZSBzb2xpZDsgKi9cclxufVxyXG5cclxuLmlzLWFjdGl2ZSBhIHtcclxuICBjb2xvcjogI2NjYyAhaW1wb3J0YW50O1xyXG4gIC8qIGJvcmRlci1sZWZ0OiAycHggI2NjYyBzb2xpZCAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uaXMtYWN0aXZlMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nb3V0LWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWluLXdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IC5saW5rIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLmRpdjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLmRpdjIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLnAxIHtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLnAyIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4vKiBjc3MgbG9nb3V0IG1vZGFsIHN0eWxlcyAqL1xyXG4ubG9nb3V0LW1vZGFsIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLW91dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLW91dDpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY4YWY7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWluOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFiNWMwO1xyXG59XHJcblxyXG4uaXNTdWNjZXNzIHtcclxuICBjb2xvcjogZm9yZXN0Z3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzUHJpbWFyeSB7XHJcbiAgY29sb3I6ICMxNjY3YWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzRGFuZ2VyIHtcclxuICBjb2xvcjogY3JpbXNvbiAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmstYW5pbWF0aW9uIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xyXG4gIHRvIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWFuaW1hdGlvbiB7XHJcbiAgdG8ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG4vKiBlbmRkIGNzcyBsb2dvdXQgbW9kYWwgc3R5bGVzICovIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authUserService, router, route, toastr) {
        _classCallCheck(this, HeaderComponent);

        this.authUserService = authUserService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.navItems = [{
          name: 'Home',
          path: '/user-dashboard'
        }, {
          name: 'Beauticians',
          path: '/beauticians'
        }, {
          name: 'Reports',
          path: '/reports'
        }, {
          name: 'Home',
          path: '/admin-dashboard'
        }, {
          name: 'Services',
          path: '/services'
        }, {
          name: 'Home',
          path: '/beautician-dashboard'
        }, {
          name: 'Appointments',
          path: '/beautician-users'
        }, {
          name: 'Reports',
          path: '/beautician-reports'
        }, {
          name: 'Login',
          path: '/login'
        }, {
          name: 'Signup',
          path: '/signup'
        }, {
          name: 'Logout',
          path: '/login'
        }];
        this.href = '';
        this.userid = sessionStorage.getItem('userid');
        this.fullName = sessionStorage.getItem('fullname');
        this.userName = sessionStorage.getItem('username');
        this.role = sessionStorage.getItem('role');
        this.showTime = moment__WEBPACK_IMPORTED_MODULE_5__(moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD') + ' 00:01:00').format('mm:ss');
        this.seconds = moment__WEBPACK_IMPORTED_MODULE_5__(moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD') + ' 00:00:59').format('ss');
        this.openModal = null;
        this.showPopup = null;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.href = this.route.snapshot.routeConfig.path;
          console.log('current page type issss ==>', this.href);

          if (this.authUserService.isLoggedIn()) {
            console.log('session start time:', moment__WEBPACK_IMPORTED_MODULE_5__().format('hh:mm:ss'));
            this.openLogoutModal();
          }
        }
      }, {
        key: "onClickView",
        value: function onClickView(view) {
          console.log('Selected view isss', view);

          if (view === 'profile') {
            this.router.navigate(["/".concat(this.role, "-profile")]);
          } else if (view === 'settings') {
            this.router.navigate(["/".concat(this.role, "-settings")]);
          }
        }
      }, {
        key: "openLogoutModal",
        value: function openLogoutModal() {
          var _this19 = this;

          console.log('seconds isss', this.seconds);

          if (this.authUserService.isLoggedIn()) {
            this.openModal = setTimeout(function () {
              $('#autoLogoutModal').modal('show');
              console.log('session end time:', moment__WEBPACK_IMPORTED_MODULE_5__().format('hh:mm:ss'));
              _this19.showPopup = setInterval(function () {
                _this19.seconds -= 1;
                _this19.showTime = moment__WEBPACK_IMPORTED_MODULE_5__(moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD') + " 00:00:".concat(_this19.seconds.toString().padStart(2, 0))).format('mm:ss');

                if (_this19.showTime === '00:00') {
                  _this19.userLogout();
                }
              }, 1000);
            }, 1740000);
          }
        }
      }, {
        key: "userReLogIn",
        value: function userReLogIn() {
          var _this20 = this;

          var token = sessionStorage.getItem('token');
          var userTokenPayload = JSON.parse(atob(token.split('.')[1]));
          delete userTokenPayload.exp;
          delete userTokenPayload.iat;
          console.log('Post payload to user re-signin isss', userTokenPayload);
          this.authUserService.userReSignIn(userTokenPayload).subscribe(function (response) {
            console.log('User login response isss', response);

            if (response.success) {
              sessionStorage.setItem('token', response.data.token);
              $('#autoLogoutModal').modal('hide');
              _this20.seconds = moment__WEBPACK_IMPORTED_MODULE_5__(moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD') + ' 00:00:59').format('ss');

              _this20.openLogoutModal();
            } else {
              _this20.toastr.errorToastr(response.message);

              $('#autoLogoutModal').modal('show');
            }
          }, function (error) {
            _this20.toastr.errorToastr('Network failed, Please try again.');

            $('#autoLogoutModal').modal('show');
          });
        }
      }, {
        key: "userLogout",
        value: function userLogout() {
          clearInterval(this.showPopup);
          clearTimeout(this.openModal);
          $('#autoLogoutModal').modal('hide');
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('Header component is destroyed');
          clearInterval(this.showPopup);
          clearTimeout(this.openModal);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n  justify-content: center;\r\n  align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52BE80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-title {\r\n  color: #6495ed;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjs7d0JBRXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVhdXR5LWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uZGV0YWlscy1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0ZSB7XHJcbiAgY29sb3I6ICM1MkJFODA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZS1jYXJkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTVlZDtcclxufVxyXG5cclxuLmFjdGl2ZS1jYXJkIC5zdWItdGl0bGVzIHtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLnN1Yi10aXRsZXMge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi8qIHNpZGVuYXYgc3R5bGVzICovXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmFwcG9pbnRtZW50LWNhcmQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC10aXRsZSB7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NWVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input[type=\"number\"] {\r\n  height: 50px;\r\n  padding: 1em;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid lightslategray;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.btn-action-search:hover {\r\n  background-color: #1667af;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  border-top: 2px solid lightgray;\r\n  border-bottom: 2px solid lightgray;\r\n}\r\n\r\n.title .fa {\r\n  cursor: pointer;\r\n  font-size: 2em;\r\n}\r\n\r\n.title .span1 {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #aab5c0;\r\n  padding: 20px;\r\n}\r\n\r\n.title .span1:hover {\r\n  background-color: lightslategray;\r\n}\r\n\r\n.title .span3 {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #aab5c0;\r\n  padding: 20px;\r\n}\r\n\r\n.title .span3:hover {\r\n  background-color: lightslategray;\r\n}\r\n\r\n.title .span2 {\r\n  font-size: 2em;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: baseline;\r\n}\r\n\r\n.title .span2 .p1 {\r\n  color: #6495ed;\r\n}\r\n\r\n.title .span2 .p1:hover {\r\n  color: #1667af;\r\n}\r\n\r\n.title .span2 .p2 {\r\n  color: #aab5c0;\r\n}\r\n\r\n.title .span2 .p2:hover {\r\n  color: lightslategray;\r\n}\r\n\r\n.title .span2 .p3 {\r\n  color: lightcoral;\r\n}\r\n\r\n.title .span2 .p3:hover {\r\n  color: crimson;\r\n}\r\n\r\n.week-col {\r\n  display: flex;\r\n}\r\n\r\n.days {\r\n  flex: 1;\r\n  padding: 30px;\r\n  border: 1px solid lightgray;\r\n  font-size: 1em;\r\n  /* color: lightgray; */\r\n  background-color: lightsteelblue;\r\n}\r\n\r\n.dates-col {\r\n  display: flex;\r\n}\r\n\r\n.nums {\r\n  flex: 1;\r\n  padding: 30px;\r\n  /* border: 1px solid lightgray; */\r\n  font-size: 1em;\r\n  color: lightsteelblue;\r\n  background-color: white;\r\n}\r\n\r\n.nums:hover {\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n.isSunday {\r\n  color: crimson !important;\r\n}\r\n\r\n.isDisable {\r\n  cursor: default !important;\r\n  pointer-events: none !important;\r\n  color: white !important;\r\n  background-color: lightgray !important;\r\n  opacity: 0.5 !important;\r\n  /* border: none !important; */\r\n  border: 1px solid lightslategray !important;\r\n}\r\n\r\n.isCurrent {\r\n  background-color: lightcoral !important;\r\n  color: white !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLXNlYXJjaDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NjdhZjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4udGl0bGUgLmZhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi50aXRsZSAuc3BhbjEge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYjVjMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUgLnNwYW4xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLnRpdGxlIC5zcGFuMyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFiNWMwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSAuc3BhbjM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4udGl0bGUgLnNwYW4yIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLnRpdGxlIC5zcGFuMiAucDEge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG59XHJcblxyXG4udGl0bGUgLnNwYW4yIC5wMTpob3ZlciB7XHJcbiAgY29sb3I6ICMxNjY3YWY7XHJcbn1cclxuXHJcbi50aXRsZSAuc3BhbjIgLnAyIHtcclxuICBjb2xvcjogI2FhYjVjMDtcclxufVxyXG5cclxuLnRpdGxlIC5zcGFuMiAucDI6aG92ZXIge1xyXG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLnRpdGxlIC5zcGFuMiAucDMge1xyXG4gIGNvbG9yOiBsaWdodGNvcmFsO1xyXG59XHJcblxyXG4udGl0bGUgLnNwYW4yIC5wMzpob3ZlciB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbn1cclxuXHJcbi53ZWVrLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRheXMge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgLyogY29sb3I6IGxpZ2h0Z3JheTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmRhdGVzLWNvbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm51bXMge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubnVtczpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uaXNTdW5kYXkge1xyXG4gIGNvbG9yOiBjcmltc29uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0Rpc2FibGUge1xyXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5ICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbiAgLyogYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRzbGF0ZWdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzQ3VycmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);

        this.weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        this.weekNames = [{
          id: 1,
          name: 'Sunday'
        }, {
          id: 2,
          name: 'Monday'
        }, {
          id: 1,
          name: 'Tuesday'
        }, {
          id: 1,
          name: 'Wednesday'
        }, {
          id: 1,
          name: 'Thursday'
        }, {
          id: 1,
          name: 'Friday'
        }, {
          id: 1,
          name: 'Saturday'
        }];
        this.dates = [// ['00','00','00','00','00','01','02'],
          // ['03','04','05','06','07','08','09'],
          // ['10','11','12','13','14','15','16'],
          // ['17','18','19','20','21','22','23'],
          // ['24','25','26','27','28','29','30'],
          // ['31','00','00','00','00','00','00']
        ];
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('DD').toString();
        this.currentFullMonth = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM').toString();
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_2__().format('MM').toString();
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY').toString();
        this.tempCurrentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('DD').toString();
        this.tempCurrentFullMonth = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM').toString();
        this.tempCurrentMonth = moment__WEBPACK_IMPORTED_MODULE_2__().format('MM').toString();
        this.tempCurrentYear = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY').toString();
        this.selectYear = null;
        this.selectMonth = null;
        this.selectDate = null;
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllDates('');
        }
      }, {
        key: "setSundayColour",
        value: function setSundayColour(item, id) {
          if (Number(id) / 7 === 0 || Number(id) / 6 === 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "setDisableDates",
        value: function setDisableDates(item, id) {
          var firstArr = [25, 26, 27, 28, 29, 30, 31];
          var lastArr = [1, 2, 3, 4, 5, 6, 7];

          if (Number(id) === 0 && firstArr.includes(Number(item))) {
            return true;
          } else if (Number(id) === this.dates.length - 1 && lastArr.includes(Number(item))) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "setCurrentDateColour",
        value: function setCurrentDateColour(item, id) {
          if (Number(item) === Number(this.currentDate)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onSearchFullDate",
        value: function onSearchFullDate() {
          this.currentYear = this.selectYear.toString().padStart(2, 0);
          this.currentMonth = this.selectMonth.toString().padStart(2, 0);
          this.currentFullMonth = moment__WEBPACK_IMPORTED_MODULE_2__("".concat(this.currentYear.toString(), "-").concat(this.currentMonth.toString().padStart(2, 0), "-01")).format('MMMM');
          this.currentDate = this.selectDate.toString().padStart(2, 0);
          this.getAllDates('search');
        }
      }, {
        key: "getAllDates",
        value: function getAllDates(view) {
          console.log('selected view isss', view);
          var currentMonth = null;

          if (view !== 'search') {
            if (view === 'prev') {
              currentMonth = (Number(this.currentMonth) - 1).toString();
            } else if (view === 'next') {
              currentMonth = (Number(this.currentMonth) + 1).toString();
            } else {
              currentMonth = this.tempCurrentMonth.toString();
            }
          } else {
            currentMonth = this.currentMonth.toString().padStart(2, 0);
            ;
          }

          console.log('current month isss', currentMonth);
          this.currentFullMonth = moment__WEBPACK_IMPORTED_MODULE_2__("".concat(this.currentYear.toString(), "-").concat(currentMonth.toString().padStart(2, 0), "-01")).format('MMMM');
          this.currentMonth = currentMonth.toString().padStart(2, 0);
          var weekDays = {
            'Sunday': 0,
            'Monday': 1,
            'Tuesday': 2,
            'Wednesday': 3,
            'Thursday': 4,
            'Friday': 5,
            'Saturday': 6
          };
          var startDay = 1;
          var selectedDate = moment__WEBPACK_IMPORTED_MODULE_2__("".concat(this.currentYear.toString(), "-").concat(currentMonth.toString().padStart(2, 0), "-01")).format('dddd');
          console.log('selected date isss', selectedDate);
          var lastIndex = weekDays[selectedDate];
          var days = moment__WEBPACK_IMPORTED_MODULE_2__("".concat(this.currentYear.toString(), "-").concat(currentMonth.toString().padStart(2, 0), "-01")).daysInMonth();
          this.dates = [];
          var weekDates = [];
          var firstIndex = 0;

          while (firstIndex < lastIndex) {
            weekDates.push('00');
            firstIndex += 1;
          }

          while (startDay <= days) {
            if (weekDates.length === 7) {
              this.dates.push(weekDates);
              weekDates = [];
            }

            weekDates.push(startDay.toString().padStart(2, 0));
            startDay += 1;
          }

          while (weekDates.length !== 7) {
            weekDates.push('00');
          }

          this.dates.push(weekDates);
          console.log('dates isss', this.dates);
          var firstDates = [];
          var prevMonth = (Number(currentMonth) - 1).toString();
          var previousMonthFullDate = moment__WEBPACK_IMPORTED_MODULE_2__("".concat(this.currentYear.toString(), "-").concat(prevMonth.padStart(2, 0), "-01")).daysInMonth();
          console.log('previous month full date isss', previousMonthFullDate);
          var previousDays = previousMonthFullDate + 1;

          for (var i = 0; i < this.dates[0].length; i++) {
            if (this.dates[0][i] === '00') {
              previousDays -= 1;
              firstDates.push(previousDays.toString().padStart(2, 0));
            }
          }

          console.log('previousDays isss', firstDates);
          var tempFirstDays = firstDates.reverse();

          for (var _i4 = 0; _i4 < this.dates[0].length; _i4++) {
            if (this.dates[0][_i4] === '00') {
              this.dates[0][_i4] = tempFirstDays[_i4];
            }
          }

          var lastDates = [];
          var nextDays = 0;

          for (var _i5 = 0; _i5 < this.dates[this.dates.length - 1].length; _i5++) {
            if (this.dates[this.dates.length - 1][_i5] === '00') {
              nextDays += 1;
              lastDates.push(nextDays.toString().padStart(2, 0));
              this.dates[this.dates.length - 1][_i5] = nextDays.toString().padStart(2, 0);
            }
          }

          console.log('nextDays isss', lastDates);
          console.log('final days isss', this.dates);
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/reports/reports.component.css":
  /*!***********************************************!*\
    !*** ./src/app/reports/reports.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportsReportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reports-page {\r\n  background-color: white !important;\r\n}\r\n\r\n.booking-table {\r\n  cursor: pointer;\r\n}\r\n\r\n.table-head tr th {\r\n  color: #6495ed;\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n}\r\n\r\n.table-body tr td {\r\n  color: darkslategray;\r\n  font-weight: lighter;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.table-body tr td:hover {\r\n  color: crimson;\r\n}\r\n\r\n.bill-card {\r\n  height: 180%;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  background-color: lightblue;\r\n  border: none;\r\n  border-radius: 20px;\r\n}\r\n\r\n.header-bill {\r\n  display: inline-flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.bill-download {\r\n  cursor: pointer;\r\n}\r\n\r\n.bill-title {\r\n  font-size: 1em;\r\n  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);\r\n}\r\n\r\n.body-bill {\r\n  display: inline-flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.body-title {\r\n}\r\n\r\n.total-bill {\r\n  display: grid;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.sign-data {\r\n  display: grid;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.sign {\r\n  font-size: 1.3em;\r\n  font-weight: 600;\r\n}\r\n\r\n.beauty-card {\r\n  cursor: pointer;\r\n  height: 220px;\r\n  border-radius: 20px;\r\n  /* display: grid;\r\n    justify-content: center;\r\n    align-items: center; */\r\n}\r\n\r\n.details-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.state {\r\n  color: #52be80;\r\n  text-align: right !important;\r\n}\r\n\r\n.active-card {\r\n  color: white;\r\n  background-color: #6495ed;\r\n}\r\n\r\n.active-card .sub-titles {\r\n  color: #ccc;\r\n}\r\n\r\n.title {\r\n  font-size: 1em;\r\n}\r\n\r\n.sub-titles {\r\n  color: #ccc;\r\n  font-size: 0.9em;\r\n}\r\n\r\n/* search and status fields css styles */\r\n\r\n.titles {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.titles p {\r\n  color: gray;\r\n  font-size: 1.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.width-50 {\r\n  width: 150px;\r\n}\r\n\r\n/* .width-100 {\r\n  width: 50px;\r\n} */\r\n\r\n.search-fields {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n}\r\n\r\n.btn-action-search {\r\n  cursor: pointer;\r\n  color: white;\r\n  background-color: #1667af;\r\n  padding: 5px;\r\n  width: 50px;\r\n}\r\n\r\n/* end search and status fields css styles */\r\n\r\n/* table pagination styles */\r\n\r\n.pagination_rounded,\r\n.pagination_square {\r\n  display: flex;\r\n  justify-content: center;\r\n  /* margin-left: 400px;\r\n  margin-top: 300px; */\r\n}\r\n\r\n.pagination_rounded ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.pagination_rounded li:first-child {\r\n  margin-left: 0px;\r\n}\r\n\r\n.pagination_rounded ul li {\r\n  cursor: pointer;\r\n  float: left;\r\n  margin-left: 20px;\r\n}\r\n\r\n.pagination_rounded ul li a:hover {\r\n  background: #4285f4;\r\n  color: #fff;\r\n  border: 1px solid #4285f4;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\n.pagination_rounded .prev {\r\n  margin-left: 0px !important;\r\n  border-radius: 35px !important;\r\n  width: 90px !important;\r\n  height: 34px !important;\r\n  line-height: 34px !important;\r\n}\r\n\r\n.pagination_rounded ul li a {\r\n  float: left;\r\n  color: #4285f4;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  height: 30px;\r\n  width: 30px;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n.pagination_rounded .prev i {\r\n  margin-right: 10px;\r\n}\r\n\r\n.pagination_rounded .next {\r\n  border-radius: 35px !important;\r\n  width: 90px !important;\r\n  height: 34px !important;\r\n  line-height: 34px !important;\r\n}\r\n\r\n.visible-xs {\r\n  display: none !important;\r\n}\r\n\r\n.isDisable {\r\n  cursor: default;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n/* end pagination styles */\r\n\r\n/* sidenav styles */\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 55px;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n\r\n.sidenav .closebtn {\r\n  color: #6495ed;\r\n  text-decoration: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.appointment-card {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.btn-action {\r\n  color: white;\r\n  background-color: #6495ed;\r\n  border-radius: 10px;\r\n}\r\n\r\n#main {\r\n  transition: margin-left 0.5s;\r\n  padding: 16px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* end sidenav styles */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25COzswQkFFd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUEsd0NBQXdDOztBQUN4QztFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0EsNENBQTRDOztBQUU1Qyw0QkFBNEI7O0FBQzVCOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkI7c0JBQ29CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBQ0EsMEJBQTBCOztBQUUxQixtQkFBbUI7O0FBQ25CO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUNBLHVCQUF1QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydHMtcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvb2tpbmctdGFibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhlYWQgdHIgdGgge1xyXG4gIGNvbG9yOiAjNjQ5NWVkO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IHRyIHRkIHtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IHRyIHRkOmhvdmVyIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmJpbGwtY2FyZCB7XHJcbiAgaGVpZ2h0OiAxODAlO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWJpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLmJpbGwtZG93bmxvYWQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJpbGwtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRleHQtc2hhZG93OiAzcHggNHB4IDdweCByZ2JhKDgxLCA2NywgMjEsIDAuOCk7XHJcbn1cclxuXHJcbi5ib2R5LWJpbGwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2R5LXRpdGxlIHtcclxufVxyXG5cclxuLnRvdGFsLWJpbGwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zaWduLWRhdGEge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYmVhdXR5LWNhcmQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLyogZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuLmRldGFpbHMtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdGUge1xyXG4gIGNvbG9yOiAjNTJiZTgwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDk1ZWQ7XHJcbn1cclxuXHJcbi5hY3RpdmUtY2FyZCAuc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5zdWItdGl0bGVzIHtcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4vKiBzZWFyY2ggYW5kIHN0YXR1cyBmaWVsZHMgY3NzIHN0eWxlcyAqL1xyXG4udGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVzIHAge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53aWR0aC01MCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4vKiAud2lkdGgtMTAwIHtcclxuICB3aWR0aDogNTBweDtcclxufSAqL1xyXG5cclxuLnNlYXJjaC1maWVsZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2VhcmNoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjY3YWY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi8qIGVuZCBzZWFyY2ggYW5kIHN0YXR1cyBmaWVsZHMgY3NzIHN0eWxlcyAqL1xyXG5cclxuLyogdGFibGUgcGFnaW5hdGlvbiBzdHlsZXMgKi9cclxuLnBhZ2luYXRpb25fcm91bmRlZCxcclxuLnBhZ2luYXRpb25fc3F1YXJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAzMDBweDsgKi9cclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCB1bCBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbl9yb3VuZGVkIHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0Mjg1ZjQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyODVmNDtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3JvdW5kZWQgLnByZXYge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbl9yb3VuZGVkIHVsIGxpIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjNDI4NWY0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25fcm91bmRlZCAucHJldiBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uX3JvdW5kZWQgLm5leHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmxlLXhzIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pc0Rpc2FibGUge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLyogZW5kIHBhZ2luYXRpb24gc3R5bGVzICovXHJcblxyXG4vKiBzaWRlbmF2IHN0eWxlcyAqL1xyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogNTVweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBjb2xvcjogIzY0OTVlZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1jYXJkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0OTVlZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbi8qIGVuZCBzaWRlbmF2IHN0eWxlcyAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reports/reports.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reports/reports.component.ts ***!
    \**********************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api-services/beautician.service */
    "./src/app/api-services/beautician.service.ts");

    var ReportsComponent = /*#__PURE__*/function () {
      function ReportsComponent(router, authUserService, beauticianService, toastr) {
        _classCallCheck(this, ReportsComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.beauticianService = beauticianService;
        this.toastr = toastr;
        this.userId = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
        this.tempArray = [{
          booking_id: 'W269N-WFGWX-YVC9B',
          beautician: 'ABC',
          date: '10-02-2021'
        }, {
          booking_id: 'MH37W-N47XK-V7XM9',
          beautician: 'DEF',
          date: '15-02-2021'
        }, {
          booking_id: 'F34E-RST1-OPQS',
          beautician: 'GHI',
          date: '25-02-2021'
        }, {
          booking_id: 'NPPR9-FWDCX-D2C8J',
          beautician: 'JKM',
          date: '05-03-2021'
        }, {
          booking_id: 'DPH2V-TTNVB-4X9Q3',
          beautician: 'NOP',
          date: '10-03-2021'
        }];
        this.viewItem = {};
        this.services = [];
        this.amounts = [];
        this.currentIndex = null;
        this.rowsOnPage = 10;
        this.limit = 10;
        this.page = 1;
        this.count = 0;
        this.pager = {};
        this.totalPages = [];
        this.temptotalPages = [];
        this.searchQuery = "";
        this.statusQuery = null;
        this.filterStatus = null;
        this.reports = [];
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllUserReports();
        }
      }, {
        key: "openNav",
        value: function openNav(item, index) {
          this.viewItem = item;
          this.currentIndex = index + 1;
          document.getElementById('mySidenav').style.width = '400px';
          document.getElementById('main').style.marginRight = '250px';
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          this.viewItem = {};
          this.currentIndex = null;
          document.getElementById('mySidenav').style.width = '0';
          document.getElementById('main').style.marginRight = '0';
        }
      }, {
        key: "onViewBill",
        value: function onViewBill(item, index) {
          console.log('selected item and index issss', item, index);
          this.viewItem = item;
          this.services = [];
          this.amounts = [];
          var tempArr = item.services.split(',');
          var tempArr1 = item.amounts.split(',');
          var id = 0;

          var _iterator12 = _createForOfIteratorHelper(tempArr),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _item3 = _step12.value;
              this.services.push({
                name: _item3,
                amount: tempArr1[id]
              });
              id += 1;
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      }, {
        key: "getAllUserReports",
        value: function getAllUserReports() {
          var _this21 = this;

          var userReportsPayload = {
            limit: Number(this.limit),
            page: Number(this.page),
            query: this.searchQuery,
            status: !this.statusQuery || this.statusQuery === null ? "all" : Number(this.statusQuery),
            user_id: Number(this.userId)
          };
          console.log("Post payload to get all user reports data isss", userReportsPayload);
          this.beauticianService.getAllUserReportsById(userReportsPayload).subscribe(function (response) {
            console.log("Get all user reports by id response isss", response);

            if (response.success) {
              _this21.reports = response.data;
              _this21.count = response.count;

              _this21.createPager();
            } else {
              _this21.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this21.toastr.errorToastr("Network failed, Please try again.");
          });
        }
      }, {
        key: "getPage",
        value: function getPage(event) {
          console.log("Selected page isss", event);
          this.page = Number(event);
          this.getAllUserReports();
        }
      }, {
        key: "createPager",
        value: function createPager() {
          // this.pager.startCount = this.beauticians.length > 0 && Number(this.page) === 1 ? 1 : this.beauticians.length > 0 ? (Number(this.rowsOnPage) * Number(this.page - 1)) + 1 : 0;
          // this.pager.endCount = Number(this.rowsOnPage) === this.beauticians.length ? Number(this.rowsOnPage) * Number(this.page) : Number(this.count);
          // console.log(this.pager);
          var endLimit = Math.round(this.count / this.limit) === 0 ? Math.round(this.count / this.limit) : Math.round(this.count / this.limit) + 1;
          endLimit = endLimit === 0 ? 1 : endLimit;
          console.log("end limit isss", endLimit);
          this.totalPages = [];
          this.temptotalPages = [];
          this.totalPages.push('Prev');

          for (var num = 1; num <= Number(endLimit); num += 1) {
            this.totalPages.push(num);
            this.temptotalPages.push(num);
          }

          this.totalPages.push('Next');
          console.log("total pages isss", this.totalPages);
        }
      }, {
        key: "onSearchData",
        value: function onSearchData() {
          // console.log('search request data isss', this.searchQuery);
          if (this.searchQuery || this.searchQuery !== "") {
            this.getAllUserReports();
          }
        }
      }, {
        key: "onInputSearch",
        value: function onInputSearch() {
          if (!this.searchQuery || this.searchQuery === "") {
            this.getAllUserReports();
          }
        }
      }, {
        key: "onSelectStatus",
        value: function onSelectStatus() {
          this.getAllUserReports();
        }
      }]);

      return ReportsComponent;
    }();

    ReportsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__["AuthUserService"]
      }, {
        type: _api_services_beautician_service__WEBPACK_IMPORTED_MODULE_5__["BeauticianService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
      }];
    };

    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reports.component.css */
      "./src/app/reports/reports.component.css"))["default"]]
    })], ReportsComponent);
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDashboardUserDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".titles {\r\n  color: gray;\r\n  font-size: 1em;\r\n  background-color: lightgray;\r\n  border-left: 5px solid #6495ED;\r\n  padding: 2%;\r\n}\r\n\r\n.sub-titles {\r\n  color: #6495ED;\r\n  font-size: 1.2em;\r\n  text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVzIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNjQ5NUVEO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlcyB7XHJcbiAgY29sb3I6ICM2NDk1RUQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user-dashboard/user-dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: UserDashboardComponent */

  /***/
  function srcAppUserDashboardUserDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
      return UserDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserDashboardComponent = /*#__PURE__*/function () {
      function UserDashboardComponent() {
        _classCallCheck(this, UserDashboardComponent);

        this.userid = sessionStorage.getItem('userid');
        this.role = sessionStorage.getItem('role');
        this.fullName = sessionStorage.getItem('fullname');
      }

      _createClass(UserDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserDashboardComponent;
    }();

    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-dashboard/user-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-dashboard.component.css */
      "./src/app/user-dashboard/user-dashboard.component.css"))["default"]]
    })], UserDashboardComponent);
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-form/user-form.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFormUserFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n    font-size: 1em;\r\n    color: lightslategray;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect {\r\n    height: 50px;\r\n    padding: 1em;\r\n    font-size: 0.8em;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-bottom: 1px solid crimson;\r\n}\r\n\r\ninput:focus, \r\nselect:focus, \r\ntextarea:focus {\r\n    outline: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.radio-1 {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.radio-1 input {\r\n    height: 25px !important;\r\n}\r\n\r\n.radio-2 {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n.radio-2 input {\r\n    height: 25px !important;\r\n}\r\n\r\n.btn-action-save {\r\n    width: 100px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: coral;\r\n}\r\n\r\n.btn-action-save:hover {\r\n    background-color: chocolate;\r\n}\r\n\r\n.btn-action-cancel {\r\n    width: 100px;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: lightgray;\r\n}\r\n\r\n.btn-action-cancel:hover {\r\n    background-color: lightslategray;\r\n}\r\n\r\n.error-note {\r\n    color: crimson;\r\n    font-size: 0.7em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNyaW1zb247XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLCBcclxuc2VsZWN0OmZvY3VzLCBcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5yYWRpby0xIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yYWRpby0xIGlucHV0IHtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmFkaW8tMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmFkaW8tMiBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2F2ZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24tc2F2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLWNhbmNlbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxufVxyXG5cclxuLmVycm9yLW5vdGUge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user-form/user-form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-form/user-form.component.ts ***!
    \**************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api-services/auth-user.service */
    "./src/app/api-services/auth-user.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    var UserFormComponent = /*#__PURE__*/function () {
      function UserFormComponent(router, authUserService, toastr) {
        _classCallCheck(this, UserFormComponent);

        this.router = router;
        this.authUserService = authUserService;
        this.toastr = toastr; // Name
        // Last name
        // Roll number
        // Branch -  selection
        // Section - selection
        // Student or teacher - radio
        // Phone number
        // Address
        // Pic - validate name and entered roll number are same or not

        this.firstName = null;
        this.lastName = null;
        this.rollNumber = null;
        this.branchName = null;
        this.sectionName = null;
        this.personType = null;
        this.mobile = null;
        this.address = null;
        this.profile = null;
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          console.log('selected file event isss', event);
          this.profile = event.target.files[0];
        }
      }, {
        key: "saveUserDetails",
        value: function saveUserDetails() {
          var _this22 = this;

          if (this.setDisableForm()) {
            return this.toastr.errorToastr('Profile is invalid.');
          }

          var formData = new FormData();
          formData.append('firstName', this.firstName);
          formData.append('lastName', this.lastName);
          formData.append('rollNumber', this.rollNumber);
          formData.append('branchName', this.branchName);
          formData.append('sectionName', this.sectionName);
          formData.append('personType', this.personType);
          formData.append('mobile', this.mobile);
          formData.append('address', this.address);
          formData.append('file', this.profile, this.profile.name);
          console.log('Post payload to user registration isss', formData.get('file'));
          this.authUserService.addNewUser(formData).subscribe(function (response) {
            console.log('Get user registration response isss', response);

            if (response.success) {
              _this22.toastr.successToastr(response.message);

              _this22.resetForm();
            } else {
              _this22.toastr.errorToastr(response.message);
            }
          }, function (error) {
            _this22.toastr.errorToastr('Network failed, Please try again.');
          });
        }
      }, {
        key: "setDisableForm",
        value: function setDisableForm() {
          if (this.profile && this.profile !== null) {
            if (Number(this.profile.name.split('.')[0]) !== Number(this.rollNumber)) {
              return true;
            }
          } else {
            return false;
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          if (this.userFormRef) {
            this.userFormRef.reset();
          }

          this.firstName = null;
          this.lastName = null;
          this.rollNumber = null;
          this.branchName = null;
          this.sectionName = null;
          this.personType = null;
          this.mobile = null;
          this.address = null;
          this.profile = null;
          this.fileInputRef.nativeElement.value = null;
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__["AuthUserService"]
      }, {
        type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userForm', {
      "static": false
    })], UserFormComponent.prototype, "userFormRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput', {
      "static": false
    })], UserFormComponent.prototype, "fileInputRef", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-form.component.css */
      "./src/app/user-form/user-form.component.css"))["default"]]
    })], UserFormComponent);
    /***/
  },

  /***/
  "./src/app/user/user-profile/user-profile.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/user/user-profile/user-profile.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-profile/user-profile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/user-profile/user-profile.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent() {
        _classCallCheck(this, UserProfileComponent);
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-profile/user-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/user/user-profile/user-profile.component.css"))["default"]]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/assets/env.ts":
  /*!***************************!*\
    !*** ./src/assets/env.ts ***!
    \***************************/

  /*! exports provided: serverIP */

  /***/
  function srcAssetsEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serverIP", function () {
      return serverIP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var serverIP = {
      // apiUrl: 'http://localhost:3003/api',
      apiUrl: '/api',
      imgUrl: ''
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _assets_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/env */
    "./src/assets/env.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: _assets_env__WEBPACK_IMPORTED_MODULE_1__["serverIP"].apiUrl
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\AKRIVIA\meanui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map