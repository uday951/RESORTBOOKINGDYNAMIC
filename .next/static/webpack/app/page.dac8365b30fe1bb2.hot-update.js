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

/***/ "(app-pages-browser)/./src/app/components/AddProduct.jsx":
/*!*******************************************!*\
  !*** ./src/app/components/AddProduct.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/components/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AddProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [offer, setOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [amen, setAmen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const recordHandler = async (e)=>{\n        e.preventDefault();\n        const recordDetails = {\n            title,\n            price,\n            offer,\n            amen,\n            desc,\n            image\n        };\n        console.log(recordDetails);\n        const data = new FormData();\n        data.append(\"title\", title);\n        data.append(\"price\", price);\n        data.append(\"offer\", offer);\n        data.append(\"desc\", desc);\n        data.append(\"amen\", amen);\n        data.append(\"image\", image);\n        try {\n            const response = await fetch(\"https://resortbookingdynamic-jureca2ir-udaykirans-projects-040e3fd3.vercel.app/api/admin/add-product\", {\n                method: \"POST\",\n                body: data\n            });\n            const result = await response.json();\n            if (result.success) {\n                alert(\"Record Added Successfully\");\n                setTitle(\"\");\n                setPrice(\"\");\n                setOffer(\"\");\n                setDesc(\"\");\n                setAmen(\"\");\n                setImage(\"\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add Record\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                lineNumber: 54,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: recordHandler,\n                encType: \"multipart/form-data\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().fields),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: title,\n                                        onChange: (e)=>setTitle(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: price,\n                                        onChange: (e)=>setPrice(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 6\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().fields),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Offer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: offer,\n                                        onChange: (e)=>setOffer(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Amenities\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: amen,\n                                        onChange: (e)=>setAmen(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().textField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                type: \"text\",\n                                rows: \"5\",\n                                value: desc,\n                                onChange: (e)=>setDesc(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().textField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Upload Image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                onChange: (e)=>setImage(e.target.files[0])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Udayk\\\\Desktop\\\\resort booking 2\\\\Next_Resort_Project\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProduct, \"WQLRTpT5NdD8DoJyUl/YaU3RGYw=\");\n_c = AddProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProduct);\nvar _c;\n$RefreshReg$(_c, \"AddProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUl1QztBQUNJO0FBRTNDLE1BQU1HLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFFTiwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUVWLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWUsZ0JBQWdCLE9BQU1DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLGdCQUFnQjtZQUFDZjtZQUFPRTtZQUFPRTtZQUFPRTtZQUFNRTtZQUFNRTtRQUFLO1FBQzdETSxRQUFRQyxHQUFHLENBQUNGO1FBRVYsTUFBTUcsT0FBTyxJQUFJQztRQUNqQkQsS0FBS0UsTUFBTSxDQUFDLFNBQVNwQjtRQUNyQmtCLEtBQUtFLE1BQU0sQ0FBQyxTQUFTbEI7UUFDckJnQixLQUFLRSxNQUFNLENBQUMsU0FBU2hCO1FBQ3JCYyxLQUFLRSxNQUFNLENBQUMsUUFBUVo7UUFDcEJVLEtBQUtFLE1BQU0sQ0FBQyxRQUFRZDtRQUNwQlksS0FBS0UsTUFBTSxDQUFDLFNBQVNWO1FBRXJCLElBQUk7WUFDQSxNQUFNVyxXQUFXLE1BQU1DLE1BQU8sd0dBQXNHO2dCQUNsSUMsUUFBTztnQkFDUEMsTUFBS047WUFDUDtZQUNBLE1BQU1PLFNBQVMsTUFBTUosU0FBU0ssSUFBSTtZQUNsQyxJQUFHRCxPQUFPRSxPQUFPLEVBQUM7Z0JBQ2hCQyxNQUFNO2dCQUNOM0IsU0FBUztnQkFDVEUsU0FBUztnQkFDVEUsU0FBUztnQkFDVEksUUFBUTtnQkFDUkYsUUFBUTtnQkFDUkksU0FBUztZQUNYO1FBQ0osRUFBRSxPQUFPa0IsT0FBTztZQUNaYixRQUFRQyxHQUFHLENBQUNZO1FBQ2hCO0lBR047SUFFRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2pDLHlFQUFlOzswQkFDL0IsOERBQUNtQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVXZCO2dCQUFld0IsU0FBUTs7a0NBQ3RDLDhEQUFDTjt3QkFBSUMsV0FBV2pDLHNFQUFZOzswQ0FDN0IsOERBQUNnQztnQ0FBSUMsV0FBVTs7a0RBQ2YsOERBQUNPO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFPQyxPQUFPekM7d0NBQU8wQyxVQUFVLENBQUM3QixJQUFJWixTQUFTWSxFQUFFOEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MENBRXRFLDhEQUFDWDs7a0RBQ0QsOERBQUNRO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFTQyxPQUFPdkM7d0NBQU93QyxVQUFVLENBQUM3QixJQUFJVixTQUFTVSxFQUFFOEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pFLDhEQUFDWDt3QkFBS0MsV0FBV2pDLHNFQUFZOzswQ0FDOUIsOERBQUNnQztnQ0FBSUMsV0FBVTs7a0RBQ2YsOERBQUNPO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFTQyxPQUFPckM7d0NBQU9zQyxVQUFVLENBQUM3QixJQUFJUixTQUFTUSxFQUFFOEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MENBRXZFLDhEQUFDWDtnQ0FBSUMsV0FBVTs7a0RBQ2YsOERBQUNPO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFPQyxPQUFPbkM7d0NBQU1vQyxVQUFVLENBQUM3QixJQUFJTixRQUFRTSxFQUFFOEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3ZFLDhEQUFDWDt3QkFBSUMsV0FBV2pDLHlFQUFlOzswQ0FDL0IsOERBQUN3QzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTztnQ0FBU0wsTUFBSztnQ0FBT00sTUFBSztnQ0FBSUwsT0FBT2pDO2dDQUFNa0MsVUFBVSxDQUFDN0IsSUFBSUosUUFBUUksRUFBRThCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUVoRiw4REFBQ1g7d0JBQUlDLFdBQVdqQyx5RUFBZTs7MENBQy9CLDhEQUFDd0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9PLFFBQU87Z0NBQVVMLFVBQVUsQ0FBQzdCLElBQUlGLFNBQVNFLEVBQUU4QixNQUFNLENBQUNLLEtBQUssQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0NBRTlFLDhEQUFDbEI7d0JBQUlDLFdBQVdqQyxzRUFBWTtrQ0FDNUIsNEVBQUNvRDs0QkFBT1YsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7R0FwRk16QztLQUFBQTtBQXNGTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkUHJvZHVjdC5qc3g/NGZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFkbWluIGZyb20gJy4vY29tcG9uZW50cy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbb2ZmZXIsIHNldE9mZmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FtZW4sIHNldEFtZW5dPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IHJlY29yZEhhbmRsZXIgPSBhc3luYyhlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCByZWNvcmREZXRhaWxzID0ge3RpdGxlLCBwcmljZSwgb2ZmZXIsIGFtZW4sIGRlc2MsIGltYWdlfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY29yZERldGFpbHMpXHJcblxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICBkYXRhLmFwcGVuZCgndGl0bGUnLCB0aXRsZSk7XHJcbiAgICAgICAgICBkYXRhLmFwcGVuZCgncHJpY2UnLCBwcmljZSk7XHJcbiAgICAgICAgICBkYXRhLmFwcGVuZCgnb2ZmZXInLCBvZmZlcik7XHJcbiAgICAgICAgICBkYXRhLmFwcGVuZCgnZGVzYycsIGRlc2MpO1xyXG4gICAgICAgICAgZGF0YS5hcHBlbmQoJ2FtZW4nLCBhbWVuKTtcclxuICAgICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcclxuICAgICAgXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzb3J0Ym9va2luZ2R5bmFtaWMtanVyZWNhMmlyLXVkYXlraXJhbnMtcHJvamVjdHMtMDQwZTNmZDMudmVyY2VsLmFwcC9hcGkvYWRtaW4vYWRkLXByb2R1Y3RgLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgICB9KSAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgIGlmKHJlc3VsdC5zdWNjZXNzKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVjb3JkIEFkZGVkIFN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUoXCJcIilcclxuICAgICAgICAgICAgICAgIHNldFByaWNlKFwiXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRPZmZlcihcIlwiKVxyXG4gICAgICAgICAgICAgICAgc2V0RGVzYyhcIlwiKVxyXG4gICAgICAgICAgICAgICAgc2V0QW1lbihcIlwiKVxyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2UoXCJcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4uY29udGFpbmVyfT5cclxuICAgIDxoMT5BZGQgUmVjb3JkPC9oMT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtyZWNvcmRIYW5kbGVyfSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJz5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4uZmllbGRzfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8aDM+VGl0bGU8L2gzPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5zZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgPGgzPlByaWNlPC9oMz5cclxuICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9eyhlKT0+c2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiAgY2xhc3NOYW1lPXthZG1pbi5maWVsZHN9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgIDxoMz5PZmZlcjwvaDM+XHJcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtvZmZlcn0gb25DaGFuZ2U9eyhlKT0+c2V0T2ZmZXIoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGgzPkFtZW5pdGllczwvaDM+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXthbWVufSBvbkNoYW5nZT17KGUpPT5zZXRBbWVuKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXthZG1pbi50ZXh0RmllbGR9PlxyXG4gICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCI1XCIgdmFsdWU9e2Rlc2N9IG9uQ2hhbmdlPXsoZSk9PnNldERlc2MoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4udGV4dEZpZWxkfT5cclxuICAgICA8aDM+VXBsb2FkIEltYWdlPC9oMz5cclxuICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9J2ltYWdlLyonIG9uQ2hhbmdlPXsoZSk9PnNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0vPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2FkbWluLnN1Ym1pdH0+XHJcbiAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgIFN1Ym1pdFxyXG4gICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9kdWN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJhZG1pbiIsIkFkZFByb2R1Y3QiLCJ0aXRsZSIsInNldFRpdGxlIiwicHJpY2UiLCJzZXRQcmljZSIsIm9mZmVyIiwic2V0T2ZmZXIiLCJhbWVuIiwic2V0QW1lbiIsImRlc2MiLCJzZXREZXNjIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInJlY29yZEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWNvcmREZXRhaWxzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzdWx0IiwianNvbiIsInN1Y2Nlc3MiLCJhbGVydCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJlbmNUeXBlIiwiZmllbGRzIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dEZpZWxkIiwidGV4dGFyZWEiLCJyb3dzIiwiYWNjZXB0IiwiZmlsZXMiLCJzdWJtaXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddProduct.jsx\n"));

/***/ })

});