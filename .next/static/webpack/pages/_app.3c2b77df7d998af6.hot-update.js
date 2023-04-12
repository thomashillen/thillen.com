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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/ThemeContext */ \"./contexts/ThemeContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { theme , toggleTheme  } = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (!event.target.closest(\"nav\")) {\n                setDropdownOpen(false);\n            }\n        };\n        if (dropdownOpen) {\n            document.addEventListener(\"click\", handleClickOutside);\n        } else {\n            document.removeEventListener(\"click\", handleClickOutside);\n        }\n        return ()=>{\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        dropdownOpen\n    ]);\n    const scrollToSection = (event, id)=>{\n        event.preventDefault();\n        closeDropdown();\n        if (router.pathname === \"/\") {\n            const section = document.getElementById(id);\n            section.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        } else {\n            router.push(\"/\").then(()=>{\n                setTimeout(()=>{\n                    const section = document.getElementById(id);\n                    section.scrollIntoView({\n                        behavior: \"smooth\"\n                    });\n                }, 100);\n            });\n        }\n    };\n    const closeDropdown = ()=>{\n        setDropdownOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const body = document.querySelector(\"body\");\n        body.classList.toggle(\"dark\", theme === \"dark\");\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-800 dark:bg-gray-900 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md lg:hidden\",\n                        onClick: ()=>setDropdownOpen(!dropdownOpen),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-bars\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md lg:hidden focus:outline-none\",\n                        onClick: toggleTheme,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas \".concat(theme === \"light\" ? \"fa-moon\" : \"fa-sun\")\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat(dropdownOpen ? \"block\" : \"hidden\", \" lg:flex lg:justify-around transition duration-300\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/projects\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/contact\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg\",\n                                onClick: closeDropdown,\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/blog\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white cursor-pointer bg-gray-800 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md my-2 lg:my-0 lg:mx-4 lg:text-lg \".concat(dropdownOpen ? \"\" : \"border border-gray-700\"),\n                                onClick: closeDropdown,\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hidden lg:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white cursor-pointer bg-gray-800 border border-gray-700 rounded-md px-3 py-2 hover:bg-gray-700 shadow-md focus:outline-none\",\n                            onClick: toggleTheme,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fas \".concat(theme === \"light\" ? \"fa-moon\" : \"fa-sun\")\n                            }, void 0, false, {\n                                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomashillenmeyer/Documents/GitHub/thillen.com/components/Navbar.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"w5FiCuCHvCm1oc7BW6uDbA2iEAg=\", false, function() {\n    return [\n        _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsa0RBQUlBOzRCQUFDd0MsTUFBSzs0QkFBV0MsUUFBUTtzQ0FDNUIsNEVBQUNOO2dDQUFPRixXQUFVO2dDQUFnSkcsU0FBU2pCOzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUs5TCw4REFBQ29CO2tDQUNDLDRFQUFDdkMsa0RBQUlBOzRCQUFDd0MsTUFBSzs0QkFBUUMsUUFBUTtzQ0FDekIsNEVBQUNOO2dDQUFPRixXQUFXLDBIQUF1SyxPQUE3QzdCLGVBQWUsS0FBSyx3QkFBd0I7Z0NBQUlnQyxTQUFTakI7MENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT3pOLDhEQUFDb0I7d0JBQUdOLFdBQVU7a0NBQ1osNEVBQUNFOzRCQUNERixXQUFVOzRCQUNWRyxTQUFTN0I7c0NBRVQsNEVBQUM4QjtnQ0FBRUosV0FBVyxPQUFnRCxPQUF6QzNCLFVBQVUsVUFBVSxZQUFZLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkU7R0FySE1IOztRQUUyQkQsNERBQVFBO1FBQ3hCRCxrREFBU0E7OztLQUhwQkU7QUF1SE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vY29udGV4dHMvVGhlbWVDb250ZXh0JztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ25hdicpKSB7XG4gICAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkcm9wZG93bk9wZW4pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfTtcbiAgfSwgW2Ryb3Bkb3duT3Blbl0pO1xuXG4gIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChldmVudCwgaWQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlRHJvcGRvd24oKTtcblxuICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJykudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycsIHRoZW1lID09PSAnZGFyaycpO1xuICB9LCBbdGhlbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgZGFyazpiZy1ncmF5LTkwMCBwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIGxnOmhpZGRlblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtMyBweS0yIGhvdmVyOmJnLWdyYXktNzAwIHNoYWRvdy1tZCBsZzpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhcyAke3RoZW1lID09PSAnbGlnaHQnID8gJ2ZhLW1vb24nIDogJ2ZhLXN1bid9YH0+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17YCR7ZHJvcGRvd25PcGVuID8gJ2Jsb2NrJyA6ICdoaWRkZW4nXG4gICAgICAgICAgfSBsZzpmbGV4IGxnOmp1c3RpZnktYXJvdW5kIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwYH1cbiAgICAgID5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgbXktMiBsZzpteS0wIGxnOm14LTQgbGc6dGV4dC1sZ1wiIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTMgcHktMiBob3ZlcjpiZy1ncmF5LTcwMCBzaGFkb3ctbWQgbXktMiBsZzpteS0wIGxnOm14LTQgbGc6dGV4dC1sZ1wiIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259PlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC00IGxnOnRleHQtbGdcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC00IGxnOnRleHQtbGdcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS04MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIG15LTIgbGc6bXktMCBsZzpteC00IGxnOnRleHQtbGcgJHtkcm9wZG93bk9wZW4gPyAnJyA6ICdib3JkZXIgYm9yZGVyLWdyYXktNzAwJ31gfSBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cblxuXG4gICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIGJnLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBweC0zIHB5LTIgaG92ZXI6YmctZ3JheS03MDAgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgID5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYXMgJHt0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdmYS1tb29uJyA6ICdmYS1zdW4nfWB9PjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZVJvdXRlciIsInVzZVRoZW1lIiwiTmF2YmFyIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsInJvdXRlciIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1NlY3Rpb24iLCJpZCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VEcm9wZG93biIsInBhdGhuYW1lIiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInB1c2giLCJ0aGVuIiwic2V0VGltZW91dCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImkiLCJ1bCIsImxpIiwiaHJlZiIsInBhc3NIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});