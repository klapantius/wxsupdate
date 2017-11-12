webpackHotUpdate(5,{

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(485);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\bj\\homokozo\\wxsupdate\\next\\pages\\changesetArea.js';


var ChangesetArea = function ChangesetArea(props) {
    return _react2.default.createElement(_Table.Table, {
        multiSelectable: true,
        fixedHeader: true,
        height: "400px",
        onRowSelection: props.handleSelection,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_Table.TableHeader, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_Table.TableRow, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_Table.TableHeaderColumn, { style: { width: '10%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'ID'), _react2.default.createElement(_Table.TableHeaderColumn, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Submitter'), _react2.default.createElement(_Table.TableHeaderColumn, { style: { width: '10%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'Date'), _react2.default.createElement(_Table.TableHeaderColumn, { style: { width: '60%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, 'Comment'))), _react2.default.createElement(_Table.TableBody, {
        deselectOnClickaway: false,
        showRowHover: true,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, props.changesets.map(function (row, index) {
        return _react2.default.createElement(_Table.TableRow, { key: index, selected: props.selectedRows.indexOf(index) !== -1, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
            }
        }, _react2.default.createElement(_Table.TableRowColumn, { style: { width: '10%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 32
            }
        }, row.id), _react2.default.createElement(_Table.TableRowColumn, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 33
            }
        }, row.submitter), _react2.default.createElement(_Table.TableRowColumn, { style: { width: '10%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            }
        }, row.date), _react2.default.createElement(_Table.TableRowColumn, { style: { width: '60%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
            }
        }, row.comment));
    })));
};

exports.default = ChangesetArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFuZ2VzZXRBcmVhLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUhlYWRlciIsIlRhYmxlSGVhZGVyQ29sdW1uIiwiVGFibGVSb3ciLCJUYWJsZVJvd0NvbHVtbiIsIkNoYW5nZXNldEFyZWEiLCJwcm9wcyIsImhhbmRsZVNlbGVjdGlvbiIsIndpZHRoIiwiY2hhbmdlc2V0cyIsIm1hcCIsInJvdyIsImluZGV4Iiwic2VsZWN0ZWRSb3dzIiwiaW5kZXhPZiIsImlkIiwic3VibWl0dGVyIiwiZGF0ZSIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUNJLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7OztBQUdKLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGNBQUEsQUFBQyxPQUFEOzJCQUNsQixBQUFDO3lCQUFELEFBQ3FCLEFBQ2pCO3FCQUZKLEFBRWlCLEFBQ2I7Z0JBSEosQUFHWSxBQUNSO3dCQUFnQixNQUpwQixBQUkwQjs7c0JBSjFCO3dCQUFBLEFBTUk7QUFOSjtBQUNJLEtBREosa0JBTUksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQywwQ0FBa0IsT0FBTyxFQUFDLE9BQTNCLEFBQTBCLEFBQVE7c0JBQWxDO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0EsdUJBQUEsQUFBQzs7c0JBQUQ7d0JBQUE7QUFBQTtBQUFBLE9BRkosQUFFSSxBQUNBLDhCQUFBLEFBQUMsMENBQWtCLE9BQU8sRUFBQyxPQUEzQixBQUEwQixBQUFRO3NCQUFsQzt3QkFBQTtBQUFBO09BSEosQUFHSSxBQUNBLHlCQUFBLEFBQUMsMENBQWtCLE9BQU8sRUFBQyxPQUEzQixBQUEwQixBQUFRO3NCQUFsQzt3QkFBQTtBQUFBO09BWFosQUFNSSxBQUNJLEFBSUksQUFHUiw4QkFBQSxBQUFDOzZCQUFELEFBQ3lCLEFBQ3JCO3NCQUZKLEFBRWtCOztzQkFGbEI7d0JBQUEsQUFJSztBQUpMO0FBQ0ksYUFHQyxBQUFNLFdBQU4sQUFBaUIsSUFBSSxVQUFBLEFBQUMsS0FBRCxBQUFNLE9BQU47K0JBQ2xCLEFBQUMsaUNBQVMsS0FBVixBQUFlLE9BQU8sVUFBVSxNQUFBLEFBQU0sYUFBTixBQUFtQixRQUFuQixBQUEyQixXQUFXLENBQXRFLEFBQXVFOzBCQUF2RTs0QkFBQSxBQUNJO0FBREo7U0FBQSxrQkFDSSxBQUFDLHVDQUFlLE9BQU8sRUFBQyxPQUF4QixBQUF1QixBQUFROzBCQUEvQjs0QkFBQSxBQUF3QztBQUF4QztlQURKLEFBQ0ksQUFBNEMsQUFDNUMscUJBQUEsQUFBQzs7MEJBQUQ7NEJBQUEsQUFBaUI7QUFBakI7QUFBQSxlQUZKLEFBRUksQUFBcUIsQUFDckIsNEJBQUEsQUFBQyx1Q0FBZSxPQUFPLEVBQUMsT0FBeEIsQUFBdUIsQUFBUTswQkFBL0I7NEJBQUEsQUFBd0M7QUFBeEM7ZUFISixBQUdJLEFBQTRDLEFBQzVDLHVCQUFBLEFBQUMsdUNBQWUsT0FBTyxFQUFDLE9BQXhCLEFBQXVCLEFBQVE7MEJBQS9COzRCQUFBLEFBQXdDO0FBQXhDO2VBTGMsQUFDbEIsQUFJSSxBQUE0QztBQXhCMUMsQUFDbEIsQUFjSSxBQUlLO0FBbkJiLEFBK0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNoYW5nZXNldEFyZWEuanMiLCJzb3VyY2VSb290IjoiYzovYmovaG9tb2tvem8vd3hzdXBkYXRlL25leHQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "c:\\bj\\homokozo\\wxsupdate\\next\\pages\\changesetArea.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "c:\\bj\\homokozo\\wxsupdate\\next\\pages\\changesetArea.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/changesetArea")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jYTIyM2Q5YzhmODM5N2VlODIxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hhbmdlc2V0QXJlYS5qcz9lZDU1Y2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBUYWJsZSxcclxuICAgIFRhYmxlQm9keSxcclxuICAgIFRhYmxlSGVhZGVyLFxyXG4gICAgVGFibGVIZWFkZXJDb2x1bW4sXHJcbiAgICBUYWJsZVJvdyxcclxuICAgIFRhYmxlUm93Q29sdW1uLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL1RhYmxlJztcclxuXHJcbmNvbnN0IENoYW5nZXNldEFyZWEgPSAocHJvcHMpID0+IChcclxuICAgIDxUYWJsZVxyXG4gICAgICAgIG11bHRpU2VsZWN0YWJsZT17dHJ1ZX1cclxuICAgICAgICBmaXhlZEhlYWRlcj17dHJ1ZX1cclxuICAgICAgICBoZWlnaHQ9e1wiNDAwcHhcIn1cclxuICAgICAgICBvblJvd1NlbGVjdGlvbj17cHJvcHMuaGFuZGxlU2VsZWN0aW9ufVxyXG4gICAgPlxyXG4gICAgICAgIDxUYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uIHN0eWxlPXt7d2lkdGg6ICcxMCUnfX0+SUQ8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uPlN1Ym1pdHRlcjwvVGFibGVIZWFkZXJDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDb2x1bW4gc3R5bGU9e3t3aWR0aDogJzEwJSd9fT5EYXRlPC9UYWJsZUhlYWRlckNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNvbHVtbiBzdHlsZT17e3dpZHRoOiAnNjAlJ319PkNvbW1lbnQ8L1RhYmxlSGVhZGVyQ29sdW1uPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgPFRhYmxlQm9keVxyXG4gICAgICAgICAgICBkZXNlbGVjdE9uQ2xpY2thd2F5PXtmYWxzZX1cclxuICAgICAgICAgICAgc2hvd1Jvd0hvdmVyPXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmNoYW5nZXNldHMubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0gc2VsZWN0ZWQ9e3Byb3BzLnNlbGVjdGVkUm93cy5pbmRleE9mKGluZGV4KSAhPT0gLTF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiBzdHlsZT17e3dpZHRoOiAnMTAlJ319Pntyb3cuaWR9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+e3Jvdy5zdWJtaXR0ZXJ9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gc3R5bGU9e3t3aWR0aDogJzEwJSd9fT57cm93LmRhdGV9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gc3R5bGU9e3t3aWR0aDogJzYwJSd9fT57cm93LmNvbW1lbnR9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgPC9UYWJsZT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW5nZXNldEFyZWE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2hhbmdlc2V0QXJlYS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBTUE7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVlBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9