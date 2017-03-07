import React from 'react';

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
      color: 'red',
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

  highlight() {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

}

export class Pre extends React.Component {
  render() {
    const style = {
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      backgroundColor: 'rgb(250, 250, 250)',
      padding: '20px 5px',
      overflowX: 'auto',
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
