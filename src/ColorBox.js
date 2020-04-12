import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

const styles = {
  ColorBox: {
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s',
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    width: '60px',
    height: '30px',
    position: 'absolute',
    bottom: '0',
    right: '0',
    textAlign: 'center',
    lineHeight: '30px',
    border: 'none',
    textTransform: 'uppercase',
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7
        ? 'rgba(0, 0, 0, 0.5)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-15px',
    marginLeft: '-50px',
    display: 'inline-block',
    textAlign: 'center',
    outline: 'none',
    lineHeight: '30px',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: '0',
  },
};

class ColorBox extends Component {
  constructor() {
    super();
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  render() {
    const {
      background,
      name,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'} `}
          />
          <div className={`copy-msg ${copied && 'show'} `}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
