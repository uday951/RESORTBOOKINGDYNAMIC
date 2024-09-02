"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProductCollection.jsx":
/*!**************************************************!*\
  !*** ./src/app/components/ProductCollection.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"(app-pages-browser)/./node_modules/react-loader-spinner/dist/module.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProductCollection = ()=>{\n    _s();\n    const [collections, setCollections] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const collectionHandler = async ()=>{\n        setLoading(true);\n        try {\n            // const response = await fetch(`https://next-resort-project.vercel.app/api/admin/add-product`)\n            const response1 = await fetch(\"http://localhost:3001//api/admin/add-product\");\n            const newData = await response1.json();\n            console.log(\"productData:\", newData);\n            setCollections(newData.data);\n        } catch (error) {\n            setError(response.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        collectionHandler();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"productSection\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                align: \"center\",\n                children: \"Select your Stay\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            collections ? collections.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"proDetail\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image,\n                                    alt: item.title,\n                                    className: \"roomImage\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pamen\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"price\",\n                                            children: [\n                                                \"Rs. \",\n                                                item.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Amenities\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                item.amen.map((serve, i)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"amenities\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: [\n                                                                \"*\",\n                                                                serve\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 25\n                                                    }, undefined);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/detail/\".concat(item._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"detail\",\n                                            children: \"Details \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, undefined);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    height: \"50vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__.Circles, {\n                    height: \"80\",\n                    width: \"80\",\n                    color: \"#4fa94d\",\n                    ariaLabel: \"circles-loading\",\n                    wrapperStyle: {},\n                    wrapperClass: \"\",\n                    visible: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\Next_Resort\\\\resort_booking\\\\src\\\\app\\\\components\\\\ProductCollection.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductCollection, \"UotMu/9uXdEgzBwM5XgdDycaFEk=\");\n_c = ProductCollection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCollection);\nvar _c;\n$RefreshReg$(_c, \"ProductCollection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0Q29sbGVjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNkI7QUFDc0I7QUFDSjtBQUUvQyxNQUFNSyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLG9CQUFvQjtRQUN4QkQsV0FBVztRQUNYLElBQUk7WUFDRiwrRkFBK0Y7WUFDL0YsTUFBTUUsWUFBVyxNQUFNQyxNQUNwQjtZQUVILE1BQU1DLFVBQVUsTUFBTUYsVUFBU0csSUFBSTtZQUVuQ0MsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkg7WUFFNUJSLGVBQWVRLFFBQVFJLElBQUk7UUFDN0IsRUFBRSxPQUFPWCxPQUFPO1lBQ2RDLFNBQVNJLFNBQVNPLE9BQU87UUFDM0IsU0FBVTtZQUNSVCxXQUFXO1FBQ2I7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSVTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdDLE9BQU07MEJBQVM7Ozs7OztZQUNsQmxCLGNBQ0NBLFlBQVltQixHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2YscUJBQ0UsOERBQUNMO29CQUFtQkMsV0FBVTs7c0NBQzVCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFTSSxLQUFLQyxLQUFLOzs7Ozs7OENBQ2xDLDhEQUFDQzs7Ozs7OENBQ0QsOERBQUNDO29DQUFJQyxLQUFLSixLQUFLSyxLQUFLO29DQUFFQyxLQUFLTixLQUFLQyxLQUFLO29DQUFFTCxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRW5ELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1c7NENBQUdYLFdBQVU7O2dEQUFRO2dEQUFLSSxLQUFLUSxLQUFLOzs7Ozs7O3NEQUNyQyw4REFBQ2I7OzhEQUNDLDhEQUFDYzs4REFBRzs7Ozs7O2dEQUNIVCxLQUFLVSxJQUFJLENBQUNYLEdBQUcsQ0FBQyxDQUFDWSxPQUFPQztvREFDckIscUJBQ0UsOERBQUNqQjt3REFBSUMsV0FBVTtrRUFDYiw0RUFBQ0Q7O2dFQUFJO2dFQUFFZ0I7Ozs7Ozs7dURBRHVCQzs7Ozs7Z0RBSXBDOzs7Ozs7Ozs7Ozs7OzhDQUdKLDhEQUFDakI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUN0QixpREFBSUE7d0NBQUN1QyxNQUFNLFdBQW9CLE9BQVRiLEtBQUtjLEdBQUc7a0RBQzdCLDRFQUFDQzs0Q0FBT25CLFdBQVU7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXRCekJJLEtBQUtjLEdBQUc7Ozs7O1lBNEJ0QixtQkFFQSw4REFBQ25CO2dCQUNDcUIsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsWUFBWTtvQkFDWkMsUUFBUTtnQkFDVjswQkFFQSw0RUFBQzFDLHlEQUFPQTtvQkFDTjBDLFFBQU87b0JBQ1BDLE9BQU07b0JBQ05DLE9BQU07b0JBQ05DLFdBQVU7b0JBQ1ZDLGNBQWMsQ0FBQztvQkFDZkMsY0FBYTtvQkFDYkMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7R0FyRk0vQztLQUFBQTtBQXVGTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0Q29sbGVjdGlvbi5qc3g/MGVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2lyY2xlcyB9IGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbGxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbGxlY3Rpb25zLCBzZXRDb2xsZWN0aW9uc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY29sbGVjdGlvbkhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9uZXh0LXJlc29ydC1wcm9qZWN0LnZlcmNlbC5hcHAvYXBpL2FkbWluL2FkZC1wcm9kdWN0YClcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAxLy9hcGkvYWRtaW4vYWRkLXByb2R1Y3RgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3REYXRhOlwiLCBuZXdEYXRhKTtcclxuXHJcbiAgICAgIHNldENvbGxlY3Rpb25zKG5ld0RhdGEuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihyZXNwb25zZS5tZXNzYWdlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb2xsZWN0aW9uSGFuZGxlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFNlY3Rpb25cIj5cclxuICAgICAgPGgxIGFsaWduPVwiY2VudGVyXCI+U2VsZWN0IHlvdXIgU3RheTwvaDE+XHJcbiAgICAgIHtjb2xsZWN0aW9ucyA/IChcclxuICAgICAgICBjb2xsZWN0aW9ucy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0gY2xhc3NOYW1lPVwicHJvRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cInJvb21JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFtZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByaWNlXCI+UnMuIHtpdGVtLnByaWNlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkFtZW5pdGllczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uYW1lbi5tYXAoKHNlcnZlLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFtZW5pdGllc1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4qe3NlcnZlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsLyR7aXRlbS5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXRhaWxcIj5EZXRhaWxzIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2lyY2xlc1xyXG4gICAgICAgICAgICBoZWlnaHQ9XCI4MFwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiODBcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIiM0ZmE5NGRcIlxyXG4gICAgICAgICAgICBhcmlhTGFiZWw9XCJjaXJjbGVzLWxvYWRpbmdcIlxyXG4gICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29sbGVjdGlvbjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2lyY2xlcyIsIlByb2R1Y3RDb2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJzZXRDb2xsZWN0aW9ucyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbGxlY3Rpb25IYW5kbGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm5ld0RhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhbGlnbiIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsImJyIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMiIsInByaWNlIiwiaDMiLCJhbWVuIiwic2VydmUiLCJpIiwiaHJlZiIsIl9pZCIsImJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJhcmlhTGFiZWwiLCJ3cmFwcGVyU3R5bGUiLCJ3cmFwcGVyQ2xhc3MiLCJ2aXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProductCollection.jsx\n"));

/***/ })

});