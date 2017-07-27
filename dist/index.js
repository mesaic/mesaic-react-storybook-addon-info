'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Story = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.setDefaults = setDefaults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Story2 = require('./components/Story');

var _Story3 = _interopRequireDefault(_Story2);

var _markdown = require('./components/markdown');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Story = exports.Story = _Story3.default;

var defaultOptions = {
  inline: false,
  header: true,
  source: true
};

var defaultMtrcConf = {
  h1: _markdown.H1,
  h2: _markdown.H2,
  h3: _markdown.H3,
  h4: _markdown.H4,
  h5: _markdown.H5,
  h6: _markdown.H6,
  code: _markdown.Code,
  codespan: _markdown.CodeSpan,
  p: _markdown.P,
  a: _markdown.A,
  li: _markdown.LI,
  ul: _markdown.UL
};

exports.default = {
  addWithInfo: function addWithInfo(storyName, info, storyFn, _options) {
    if (typeof storyFn !== 'function') {
      if (typeof info === 'function') {
        _options = storyFn;
        storyFn = info;
        info = '';
      } else {
        throw new Error('No story defining function has been specified');
      }
    }

    var options = (0, _extends3.default)({}, defaultOptions, _options);

    var mtrcConf = (0, _extends3.default)({}, defaultMtrcConf);
    if (options && options.mtrcConf) {
      Object.assign(mtrcConf, options.mtrcConf);
    }

    return this.add(storyName, function (context) {
      var props = {
        info: info,
        context: context,
        showInline: Boolean(options.inline),
        showHeader: Boolean(options.header),
        showSource: Boolean(options.source),
        mtrcConf: mtrcConf
      };

      return _react2.default.createElement(
        Story,
        props,
        storyFn(context)
      );
    });
  }
};
function setDefaults(newDefaults) {
  return Object.assign(defaultOptions, newDefaults);
}