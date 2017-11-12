'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _moduleSelector = require('./moduleSelector');

var _moduleSelector2 = _interopRequireDefault(_moduleSelector);

var _changesetArea = require('./changesetArea');

var _changesetArea2 = _interopRequireDefault(_changesetArea);

var _resultArea = require('./resultArea');

var _resultArea2 = _interopRequireDefault(_resultArea);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\bj\\homokozo\\wxsupdate\\next\\pages\\index.js?entry';


var muiTheme = (0, _getMuiTheme2.default)({});

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.startQuery = function () {
      var updatedState = (0, _assign2.default)({}, _this.state, {
        result: "waiting for result...",
        queryDisabled: true,
        selectedRows: _this.state.lastSelectedRows
      });
      _this.setState(updatedState);
      var css = [];
      for (var i = 0; i < _this.state.lastSelectedRows.length; i++) {
        css.push(_this.state.changesets[_this.state.lastSelectedRows[i]].id);
      }
      var changesets = css.join();
      fetch('/tf/wxsimpact?module=' + _this.state.modules[_this.state.module] + '&changesets=' + changesets).then(function (response) {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError('Oops, we haven\'t got JSON as response to the history query! We have got ' + contentType);
      }).then(function (json) {
        console.log(json.result);
        updatedState = (0, _assign2.default)({}, _this.state, {
          result: json.result,
          queryDisabled: false
        });
        _this.setState(updatedState);
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.state = {
      modules: ["foundations", "foundations\\options\\database", "foundations\\options\\licensing", "aim", "findings", "hl7", "service", "core", "service\\options\\licensing", "workflow", "datastorage", "dicom", "imaging", "lco", "organizer", "cip", "itf"],
      module: "foundations",
      changesets: [],
      selectedRows: [],
      lastSelectedRows: [],
      queryDisabled: true,
      result: ""
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'handleModuleChange',
    value: function handleModuleChange(event, index, value) {
      var _this2 = this;

      var updatedState = (0, _assign2.default)({}, this.state, {
        module: value,
        changesets: [],
        queryDisabled: true,
        selectedRows: [],
        result: "waiting for changesets..."
      });
      this.setState(updatedState);
      console.log('querying history for ' + this.state.modules[value]);
      fetch('/tf/history?module=' + this.state.modules[value]).then(function (response) {
        var contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError('Oops, we haven\'t got JSON as response to the history query! We have got ' + contentType);
      }).then(function (json) {
        var changesets = json.changesets;
        console.log(changesets.length + ' changesets received');
        updatedState = (0, _assign2.default)({}, _this2.state, {
          changesets: json.changesets,
          result: ""
        });
        _this2.setState(updatedState);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'handleChangesetSelection',
    value: function handleChangesetSelection(selectedRows) {
      var last = selectedRows;
      if (selectedRows.length === 0) last = this.state.selectedRows;
      console.log(last);
      this.setState({
        selectedRows: selectedRows,
        lastSelectedRows: last,
        queryDisabled: selectedRows.length < 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log(this.state.result);
      return _react2.default.createElement(_MuiThemeProvider2.default, { muiTheme: muiTheme, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', { className: 'App', __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_moduleSelector2.default, {
        modules: this.state.modules,
        value: this.state.module,
        handleChange: function handleChange(e, i, v) {
          return _this3.handleModuleChange(e, i, v);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_changesetArea2.default, {
        changesets: this.state.changesets,
        selectedRows: this.state.selectedRows,
        handleSelection: function handleSelection(s) {
          return _this3.handleChangesetSelection(s);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement(_resultArea2.default, {
        disabled: this.queryDisabled,
        startQuery: function startQuery() {
          return _this3.startQuery();
        },
        result: this.state.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1vZHVsZVNlbGVjdG9yIiwiQ2hhbmdlc2V0QXJlYSIsIlJlc3VsdEFyZWEiLCJnZXRNdWlUaGVtZSIsIk11aVRoZW1lUHJvdmlkZXIiLCJtdWlUaGVtZSIsIkFwcCIsInByb3BzIiwic3RhcnRRdWVyeSIsInVwZGF0ZWRTdGF0ZSIsInN0YXRlIiwicmVzdWx0IiwicXVlcnlEaXNhYmxlZCIsInNlbGVjdGVkUm93cyIsImxhc3RTZWxlY3RlZFJvd3MiLCJzZXRTdGF0ZSIsImNzcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiY2hhbmdlc2V0cyIsImlkIiwiam9pbiIsImZldGNoIiwibW9kdWxlcyIsIm1vZHVsZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnRlbnRUeXBlIiwiaGVhZGVycyIsImdldCIsImluY2x1ZGVzIiwianNvbiIsIlR5cGVFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZXZlbnQiLCJpbmRleCIsInZhbHVlIiwibGFzdCIsImUiLCJ2IiwiaGFuZGxlTW9kdWxlQ2hhbmdlIiwicyIsImhhbmRsZUNoYW5nZXNldFNlbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWdCOzs7O0FBRXZCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsMkJBQWpCLEFBQWlCLEFBQVk7O0lBSVIsQTsrQkFDbkI7O2VBQUEsQUFBWSxPQUFPO3dDQUFBOztnSUFBQSxBQUNYOztVQURXLEFBd0VuQixhQUFhLFlBQU0sQUFDakI7VUFBSSxxQ0FBZSxBQUFjLElBQUksTUFBbEIsQUFBdUI7Z0JBQU8sQUFDdkMsQUFDUjt1QkFGK0MsQUFFaEMsQUFDZjtzQkFBYyxN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UyxBQUNkO1lBQUksYUFBYSxLQUFqQixBQUFzQixBQUN0QjtnQkFBQSxBQUFRLElBQU8sV0FBZixBQUEwQixTQUMxQjs2Q0FBZSxBQUFjLElBQUksT0FBbEIsQUFBdUI7c0JBQ3hCLEtBRCtCLEFBQzFCLEFBQ2pCO2tCQUZGLEFBQWUsQUFBOEIsQUFFbkMsQUFFVjtBQUo2QyxBQUMzQyxTQURhO2VBSWYsQUFBSyxTQUFMLEFBQWMsQUFDZjtBQWhCSCxTQUFBLEFBaUJHLE1BQU0sVUFBQSxBQUFDLE9BQVUsQUFBRTtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUFTO0FBakIzQyxBQWtCRDs7Ozs2QyxBQUV3QixjQUFjLEFBQ3JDO1VBQUksT0FBSixBQUFXLEFBQ1g7VUFBSSxhQUFBLEFBQWEsV0FBakIsQUFBNEIsR0FBRyxPQUFPLEtBQUEsQUFBSyxNQUFaLEFBQWtCLEFBQ2pEO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtXQUFBLEFBQUs7c0JBQVMsQUFDRSxBQUNkOzBCQUZZLEFBRU0sQUFDbEI7dUJBQWUsYUFBQSxBQUFhLFNBSDlCLEFBQWMsQUFHeUIsQUFFeEM7QUFMZSxBQUNaOzs7OzZCQXFDSzttQkFDUDs7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCOzZCQUNFLEFBQUMsNENBQWlCLFVBQWxCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2lCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO3NCQUFjLHNCQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxHQUFQO2lCQUFhLE9BQUEsQUFBSyxtQkFBTCxBQUF3QixHQUF4QixBQUEyQixHQUF4QyxBQUFhLEFBQThCO0FBSDNEOztvQkFBQTtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUM7b0JBQ2EsS0FBQSxBQUFLLE1BRG5CLEFBQ3lCLEFBQ3ZCO3NCQUFjLEtBQUEsQUFBSyxNQUZyQixBQUUyQixBQUN6Qjt5QkFBaUIseUJBQUEsQUFBQyxHQUFEO2lCQUFPLE9BQUEsQUFBSyx5QkFBWixBQUFPLEFBQThCO0FBSHhEOztvQkFBQTtzQkFORixBQU1FLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO29CQUFZLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRnpCLEFBR0U7Z0JBQVEsS0FBQSxBQUFLLE1BSGYsQUFHcUI7O29CQUhyQjtzQkFiTixBQUNFLEFBQ0UsQUFXRSxBQVFQO0FBUk87QUFDRTs7Ozs7QUF4SHFCLEE7O2tCQUFaLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiYzovYmovaG9tb2tvem8vd3hzdXBkYXRlL25leHQifQ==