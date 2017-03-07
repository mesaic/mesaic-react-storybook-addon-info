import React from 'react';

export class CodeSpan extends React.Component {

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  render() {
    const codeStyle = {
      display: 'inline-block',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      backgroundColor: 'rgb(247, 247, 247)',
      borderRadius: 3,
      // fontSize: '85%',
      fontSize: 14,
      padding: '0 0.3em',
      margin: 0,
    };

    return (
      <code style={codeStyle}>{this.props.children}</code>
    );
  }

  highlight() { // eslint-disable-line
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll(); // eslint-disable-line
    }
  }

}

export class Code extends React.Component {

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  render() {
    const codeStyle = {
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      backgroundColor: '#fafafa',
    };

    const preStyle = {
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      padding: '.5rem',
      overflowX: 'auto',
      border: 'none',
    };

    const className = this.props.language ? `language-${this.props.language}` : '';

    return (
      <pre style={preStyle} className={className}>
        <code style={codeStyle} className={className}>
          { this.props.code }
        </code>
      </pre>
    );
  }

  highlight() { // eslint-disable-line
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll(); // eslint-disable-line
    }
  }

}

export class Pre extends React.Component {
  render() {
    const style = {
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      backgroundColor: 'rgb(252, 252, 252)',
      padding: '20px 5px',
      overflowX: 'auto',
      borderRadius: 3,
      border: 'none',
    };

    return <pre style={style}>{this.props.children}</pre>;
  }
}

export class Blockquote extends React.Component {
  render() {
    const style = {
      fontSize: '1.88em',
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      borderLeft: '8px solid #fafafa',
      padding: '1rem',
    };

    return <blockquote style={style}>{this.props.children}</blockquote>;
  }
}
