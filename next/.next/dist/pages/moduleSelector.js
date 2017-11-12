'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\bj\\homokozo\\wxsupdate\\next\\pages\\moduleSelector.js';


var ModuleSelector = function (_Component) {
    (0, _inherits3.default)(ModuleSelector, _Component);

    function ModuleSelector() {
        (0, _classCallCheck3.default)(this, ModuleSelector);

        return (0, _possibleConstructorReturn3.default)(this, (ModuleSelector.__proto__ || (0, _getPrototypeOf2.default)(ModuleSelector)).apply(this, arguments));
    }

    (0, _createClass3.default)(ModuleSelector, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_SelectField2.default, {
                value: this.props.value,
                onChange: this.props.handleChange,
                maxHeight: 200,
                floatingLabelText: 'Module',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, this.props.modules.map(function (name, idx) {
                return _react2.default.createElement(_MenuItem2.default, { key: idx, value: idx, primaryText: name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                });
            }));
        }
    }]);

    return ModuleSelector;
}(_react.Component);

exports.default = ModuleSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxtb2R1bGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlNlbGVjdEZpZWxkIiwiTWVudUl0ZW0iLCJNb2R1bGVTZWxlY3RvciIsInByb3BzIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJtb2R1bGVzIiwibWFwIiwibmFtZSIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7O2lDQUNSLEFBQ0w7bUNBQ0ksQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUsS0FBQSxBQUFLLE1BRm5CLEFBRXlCLEFBQ3JCOzJCQUhKLEFBR2UsQUFDWDttQ0FKSixBQUlzQjs7OEJBSnRCO2dDQUFBLEFBTUs7QUFOTDtBQUNJLGFBREosT0FNSyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxLQUFQO3VDQUNwQixBQUFDLG9DQUFTLEtBQVYsQUFBZSxLQUFLLE9BQXBCLEFBQTJCLEtBQUssYUFBaEMsQUFBNkM7a0NBQTdDO29DQURvQixBQUNwQjtBQUFBO2lCQUFBO0FBUlosQUFDSSxBQU1LLEFBS1o7Ozs7O0FBZHVDLEE7O2tCQUF2QixBIiwiZmlsZSI6Im1vZHVsZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6ImM6L2JqL2hvbW9rb3pvL3d4c3VwZGF0ZS9uZXh0In0=