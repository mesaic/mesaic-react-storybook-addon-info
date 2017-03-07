import React from 'react';
import MTRC from 'markdown-to-react-components';
import Node from './Node';
import {baseFonts} from './theme';
import {Pre} from './markdown';

const headerStyles = {
  h1: {
    margin: '20px 0 0 0',
    padding: 0,
    fontSize: '35px',
  },
  h2: {
    margin: '0 0 10px 0',
    padding: 0,
    fontWeight: 400,
    fontSize: '22px',
  },
  body: {
    marginBottom: 10,
  },
};

const styles = {
  info: {
    position: 'absolute',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 40px',
    overflow: 'auto',
  },
  children: {
    position: 'relative',
    zIndex: 0,
  },
  infoPage: {},
  infoBody: {
    ...baseFonts,
    lineHeight: 1.6,
    fontSize: '16px',
  },
  infoContent: {
    marginBottom: 40,
  },
  sourceH1: {
    margin: '20px 0 0 0',
    padding: '0 0 5px 0',
    fontSize: '25px',
  },
  storyWrapper: {
    marginTop: 40,
    marginBottom: 40,
    border: '1px dashed #ddd',
  },
};

export default class Story extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {open: false};
    MTRC.configure(this.props.mtrcConf);
  }

  render() {
    return (
      <div>
        <div style={styles.infoPage}>
          <div style={styles.infoBody}>
            {this._renderInfoHeader()}
            {this._renderInfoContent()}
          </div>
        </div>
        <div>
          {this._renderStory()}
        </div>
        <div style={styles.infoPage}>
          <div style={styles.infoBody}>
            {this._renderSourceCode()}
          </div>
        </div>
      </div>
    );
  }

  _renderStory() {
    return (
      <div style={styles.storyWrapper}>
        {this.props.children}
      </div>
    );
  }

  _renderInfoHeader() {
    if (!this.props.context || !this.props.showHeader) {
      return null;
    }

    return (
      <div style={headerStyles.body}>
        <h1 style={headerStyles.h1}>{this.props.context.kind}</h1>
        <h2 style={headerStyles.h2}>{this.props.context.story}</h2>
      </div>
    );
  }

  _renderInfoContent() {
    if (!this.props.info) {
      return '';
    }
    const lines = this.props.info.split('\n');
    while (lines[0].trim() === '') {
      lines.shift();
    }
    let padding = 0;
    const matches = lines[0].match(/^ */);
    if (matches) {
      padding = matches[0].length;
    }
    const source = lines.map((s) => s.slice(padding)).join('\n');
    return (
      <div style={styles.infoContent}>
        {MTRC(source).tree}
      </div>
    );
  }

  _renderSourceCode() {
    if (!this.props.showSource) {
      return null;
    }

    return (
      <div>
        <Pre>
          {React.Children.map(this.props.children, (root, idx) => (
            <Node key={idx} depth={0} node={root} />
          ))}
        </Pre>
      </div>
    );
  }

}

Story.propTypes = {
  context: React.PropTypes.object,
  info: React.PropTypes.string,
  propTables: React.PropTypes.arrayOf(React.PropTypes.func),
  showInline: React.PropTypes.bool,
  showHeader: React.PropTypes.bool,
  showSource: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
  mtrcConf: React.PropTypes.object,
};

Story.defaultProps = {
  showInline: false,
  showHeader: true,
  showSource: true,
  mtrcConf: {},
};
