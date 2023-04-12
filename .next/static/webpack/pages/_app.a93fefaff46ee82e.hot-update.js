"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme , toggleTheme  } = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (!event.target.closest(\"nav\")) {\n                setDropdownOpen(false);\n            }\n        };\n        if (dropdownOpen) {\n            document.addEventListener(\"click\", handleClickOutside);\n        } else {\n            document.removeEventListener(\"click\", handleClickOutside);\n        }\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        dropdownOpen\n    ]);\n    const scrollToSection = (event, id)=>{\n        event.preventDefault();\n        closeDropdown();\n        if (router.pathname === \"/\") {\n            const section = document.getElementById(id);\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        } else {\n            router.push(\"/\").then(()=>{\n                setTimeout(()=>{\n                    const section = document.getElementById(id);\n                    section.scrollIntoView({\n                        behavior: \"smooth\"\n                    });\n                }, 100);\n            });\n        }\n    };\n    const closeDropdown = ()=>{\n        setDropdownOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const body = document.querySelector(\"body\");\n        body.classList.toggle(\"dark\", theme === \"dark\");\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-800 dark:bg-gray-900 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md lg:hidden\",\n                        onClick: ()=>setDropdownOpen(!dropdownOpen),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-bars\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md lg:hidden focus:outline-none\",\n                        onClick: toggleTheme,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas \".concat(theme === \"light\" ? \"fa-moon\" : \"fa-sun\")\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat(dropdownOpen ? \"block\" : \"hidden\", \" lg:flex lg:justify-around transition duration-300 \").concat(!dropdownOpen ? \"flex lg:justify-center lg:items-center\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/projects\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/contact\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-auto lg:text-lg \".concat(dropdownOpen ? \"\" : \"border border-gray-700\", \" \"),\n                                onClick: closeDropdown,\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden lg:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md focus:outline-none\",\n                            onClick: toggleTheme,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas \".concat(theme === \"light\" ? \"fa-moon\" : \"fa-sun\")\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"w5FiCuCHvCm1oc7BW6uDbA2iEAg=\", false, function() {\n    return [\n        _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O2tDQUs5TCw4REFBQ29CO2tDQUNDLDRFQUFDdkMsa0RBQUlBOzRCQUFDd0MsTUFBSzs0QkFBV0MsUUFBUTtzQ0FDNUIsNEVBQUNOO2dDQUFPRixXQUFVO2dDQUFnSkcsU0FBU2pCOzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUs5TCw4REFBQ29CO2tDQUNDLDRFQUFDdkMsa0RBQUlBOzRCQUFDd0MsTUFBSzs0QkFBUUMsUUFBUTtzQ0FDekIsNEVBQUNOO2dDQUFPRixXQUFXLDZIQUEwSyxPQUE3QzdCLGVBQWUsS0FBSyx3QkFBd0IsRUFBQztnQ0FBSWdDLFNBQVNqQjswQ0FBZTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPN04sOERBQUNvQjt3QkFBR04sV0FBVTtrQ0FDWiw0RUFBQ0U7NEJBQ0RGLFdBQVU7NEJBQ1ZHLFNBQVM3QjtzQ0FFVCw0RUFBQzhCO2dDQUFFSixXQUFXLE9BQWdELE9BQXpDM0IsVUFBVSxVQUFVLFlBQVksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RTtHQXRITUg7O1FBRTJCRCw0REFBUUE7UUFDeEJELGtEQUFTQTs7O0tBSHBCRTtBQXdITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0cy9UaGVtZUNvbnRleHQnO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdGhlbWUsIHRvZ2dsZVRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdCgnbmF2JykpIHtcbiAgICAgICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRyb3Bkb3duT3Blbikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbZHJvcGRvd25PcGVuXSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKGV2ZW50LCBpZCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VEcm9wZG93bigpO1xuXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goJy8nKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgc2V0RHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJywgdGhlbWUgPT09ICdkYXJrJyk7XG4gIH0sIFt0aGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBkYXJrOmJnLWdyYXktOTAwIHAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgbGc6aGlkZGVuXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREcm9wZG93bk9wZW4oIWRyb3Bkb3duT3Blbil9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIGxnOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzICR7dGhlbWUgPT09ICdsaWdodCcgPyAnZmEtbW9vbicgOiAnZmEtc3VuJ31gfT48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtkcm9wZG93bk9wZW4gPyAnYmxvY2snIDogJ2hpZGRlbidcbiAgICAgIH0gbGc6ZmxleCBsZzpqdXN0aWZ5LWFyb3VuZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCAkeyFkcm9wZG93bk9wZW4gPyAnZmxleCBsZzpqdXN0aWZ5LWNlbnRlciBsZzppdGVtcy1jZW50ZXInIDogJyd9YH1cbiAgICAgID5cbiAgICAgICBcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgbXktMiBsZzpteS0wIGxnOm14LTQgbGc6dGV4dC1sZ1wiIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgbXktMiBsZzpteS0wIGxnOm14LTQgbGc6dGV4dC1sZ1wiIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259PlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC00IGxnOnRleHQtbGdcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC00IGxnOnRleHQtbGdcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC1hdXRvIGxnOnRleHQtbGcgJHtkcm9wZG93bk9wZW4gPyAnJyA6ICdib3JkZXIgYm9yZGVyLWdyYXktNzAwJ30gYH0gb25DbGljaz17Y2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cblxuXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtMyBweS0yIGhvdmVyOmJnLWdyYXktNzAwIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzICR7dGhlbWUgPT09ICdsaWdodCcgPyAnZmEtbW9vbicgOiAnZmEtc3VuJ31gfT48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VUaGVtZSIsIk5hdmJhciIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsInRoZW1lIiwidG9nZ2xlVGhlbWUiLCJyb3V0ZXIiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9TZWN0aW9uIiwiaWQiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlRHJvcGRvd24iLCJwYXRobmFtZSIsInNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJwdXNoIiwidGhlbiIsInNldFRpbWVvdXQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpIiwidWwiLCJsaSIsImhyZWYiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});