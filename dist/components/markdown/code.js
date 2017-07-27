'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blockquote = exports.Pre = exports.Code = exports.CodeSpan = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeSpan = exports.CodeSpan = function (_React$Component) {
  (0, _inherits3.default)(CodeSpan, _React$Component);

  function CodeSpan() {
    (0, _classCallCheck3.default)(this, CodeSpan);
    return (0, _possibleConstructorReturn3.default)(this, (CodeSpan.__proto__ || Object.getPrototypeOf(CodeSpan)).apply(this, arguments));
  }

  (0, _createClass3.default)(CodeSpan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: 'render',
    value: function render() {
      var codeStyle = {
        'display': 'inline-block',
        'fontFamily': 'Menlo, Monaco, "Courier New", monospace',
        'backgroundColor': 'rgb(247, 247, 247)',
        'borderRadius': 3,
        'fontSize': 14,
        'padding': '0 0.3em',
        'margin': 0
      };

      return _react2.default.createElement(
        'code',
        { style: codeStyle },
        this.props.children
      );
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      // eslint-disable-line
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll(); // eslint-disable-line
      }
    }
  }]);
  return CodeSpan;
}(_react2.default.Component);

var Code = exports.Code = function (_React$Component2) {
  (0, _inherits3.default)(Code, _React$Component2);

  function Code() {
    (0, _classCallCheck3.default)(this, Code);
    return (0, _possibleConstructorReturn3.default)(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  (0, _createClass3.default)(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: 'render',
    value: function render() {
      var codeStyle = {
        'fontFamily': 'Menlo, Monaco, "Courier New", monospace',
        'backgroundColor': '#fafafa'
      };

      var preStyle = {
        'fontFamily': 'Menlo, Monaco, "Courier New", monospace',
        'padding': '.5rem',
        'overflowX': 'auto',
        'border': 'none'
      };

      var className = this.props.language ? 'language-' + this.props.language : '';

      return _react2.default.createElement(
        'pre',
        { style: preStyle, className: className },
        _react2.default.createElement(
          'code',
          { style: codeStyle, className: className },
          this.props.code
        )
      );
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      // eslint-disable-line
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll(); // eslint-disable-line
      }
    }
  }]);
  return Code;
}(_react2.default.Component);

var Pre = exports.Pre = function (_React$Component3) {
  (0, _inherits3.default)(Pre, _React$Component3);

  function Pre() {
    (0, _classCallCheck3.default)(this, Pre);
    return (0, _possibleConstructorReturn3.default)(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pre, [{
    key: 'render',
    value: function render() {
      var style = {
        'fontSize': 14,
        'fontFamily': 'Menlo, Monaco, "Courier New", monospace',
        'backgroundColor': 'rgb(252, 252, 252)',
        'padding': '20px 5px',
        'overflowX': 'auto',
        'borderRadius': 3,
        'border': 'none'
      };

      return _react2.default.createElement(
        'pre',
        { style: style },
        this.props.children
      );
    }
  }]);
  return Pre;
}(_react2.default.Component);

var Blockquote = exports.Blockquote = function (_React$Component4) {
  (0, _inherits3.default)(Blockquote, _React$Component4);

  function Blockquote() {
    (0, _classCallCheck3.default)(this, Blockquote);
    return (0, _possibleConstructorReturn3.default)(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blockquote, [{
    key: 'render',
    value: function render() {
      var style = {
        'fontSize': '1.88em',
        'fontFamily': 'Menlo, Monaco, "Courier New", monospace',
        'borderLeft': '8px solid #fafafa',
        'padding': '1rem'
      };

      return _react2.default.createElement(
        'blockquote',
        { style: style },
        this.props.children
      );
    }
  }]);
  return Blockquote;
}(_react2.default.Component);