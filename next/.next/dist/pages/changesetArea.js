'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('material-ui/Table');

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