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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownToReactComponents = require('markdown-to-react-components');

var _markdownToReactComponents2 = _interopRequireDefault(_markdownToReactComponents);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _theme = require('./theme');

var _markdown = require('./markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerStyles = {
  h1: {
    margin: '20px 0 0 0',
    padding: 0,
    fontSize: '35px'
  },
  h2: {
    margin: '0 0 10px 0',
    padding: 0,
    fontWeight: 400,
    fontSize: '22px'
  },
  body: {
    'marginBottom': 10
  }
};

var styles = {
  info: {
    position: 'absolute',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 40px',
    overflow: 'auto'
  },
  children: {
    position: 'relative',
    zIndex: 0
  },
  infoPage: {},
  infoBody: (0, _extends3.default)({}, _theme.baseFonts, {
    lineHeight: 1.6,
    fontSize: '16px'
  }),
  infoContent: {
    marginBottom: 40
  },
  sourceH1: {
    margin: '20px 0 0 0',
    padding: '0 0 5px 0',
    fontSize: '25px'
  },
  storyWrapper: {
    marginTop: 40,
    marginBottom: 40,
    border: '1px dashed #ddd'
  }
};

var Story = function (_React$Component) {
  (0, _inherits3.default)(Story, _React$Component);

  function Story() {
    var _ref;

    (0, _classCallCheck3.default)(this, Story);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Story.__proto__ || (0, _getPrototypeOf2.default)(Story)).call.apply(_ref, [this].concat(args)));

    _this.state = { open: false };
    _markdownToReactComponents2.default.configure(_this.props.mtrcConf);
    return _this;
  }

  (0, _createClass3.default)(Story, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: styles.infoPage },
          _react2.default.createElement(
            'div',
            { style: styles.infoBody },
            this._renderInfoHeader(),
            this._renderInfoContent()
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          this._renderStory()
        ),
        _react2.default.createElement(
          'div',
          { style: styles.infoPage },
          _react2.default.createElement(
            'div',
            { style: styles.infoBody },
            this._renderSourceCode()
          )
        )
      );
    }
  }, {
    key: '_renderStory',
    value: function _renderStory() {
      return _react2.default.createElement(
        'div',
        { style: styles.storyWrapper },
        this.props.children
      );
    }
  }, {
    key: '_renderInfoHeader',
    value: function _renderInfoHeader() {
      if (!this.props.context || !this.props.showHeader) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: headerStyles.body },
        _react2.default.createElement(
          'h1',
          { style: headerStyles.h1 },
          this.props.context.kind
        ),
        _react2.default.createElement(
          'h2',
          { style: headerStyles.h2 },
          this.props.context.story
        )
      );
    }
  }, {
    key: '_renderInfoContent',
    value: function _renderInfoContent() {
      if (!this.props.info) {
        return '';
      }
      var lines = this.props.info.split('\n');
      while (lines[0].trim() === '') {
        lines.shift();
      }
      var padding = 0;
      var matches = lines[0].match(/^ */);
      if (matches) {
        padding = matches[0].length;
      }
      var source = lines.map(function (s) {
        return s.slice(padding);
      }).join('\n');
      return _react2.default.createElement(
        'div',
        { style: styles.infoContent },
        (0, _markdownToReactComponents2.default)(source).tree
      );
    }
  }, {
    key: '_renderSourceCode',
    value: function _renderSourceCode() {
      if (!this.props.showSource) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _markdown.Pre,
          null,
          _react2.default.Children.map(this.props.children, function (root, idx) {
            return _react2.default.createElement(_Node2.default, { key: idx, depth: 0, node: root });
          })
        )
      );
    }
  }]);
  return Story;
}(_react2.default.Component);

exports.default = Story;


Story.propTypes = {
  context: _react2.default.PropTypes.object,
  info: _react2.default.PropTypes.string,
  propTables: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
  showInline: _react2.default.PropTypes.bool,
  showHeader: _react2.default.PropTypes.bool,
  showSource: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  mtrcConf: _react2.default.PropTypes.object
};

Story.defaultProps = {
  showInline: false,
  showHeader: true,
  showSource: true,
  mtrcConf: {}
};