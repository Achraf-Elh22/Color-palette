import React, { Component } from 'react';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';

import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: '', formShowing: false };
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  showForm() {
    this.setState({ formShowing: true });
  }
  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const {
      classes,
      open,
      handleSubmit,
      palettes,
      handleDrawerOpen,
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A palette
            </Typography>
          </Toolbar>
          <div className={classes.NavBtns}>
            <Link to='/'>
              <Button
                variant='contained'
                className={classes.button}
                color='secondary'
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              className={classes.button}
              color='primary'
              onClick={this.showForm}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            palettes={palettes}
            hideForm={this.hideForm}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
