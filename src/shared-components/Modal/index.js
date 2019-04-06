import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {DialogTitle, List, ListItem, ListItemText, Dialog} from '@material-ui/core';
import {changeActiveScreen} from '../../actions/screens';

class ScreenDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  handleItemClick = screen => e => {
    this.props.changeActiveScreen(screen);
    this.props.onClose();
  }

  render() {
    const { open, screens } = this.props;

    return (
      <Dialog aria-labelledby="choice-a-screen" open={open}>
        <DialogTitle id="simple-dialog-title">Choice a screen:</DialogTitle>

        <List component="nav">
          {screens ? screens.map(screen => (
            <ListItem button key={screen._id} onClick={this.handleItemClick(screen)}>
              <ListItemText 
                primary={screen.label}
              />
            </ListItem> 
          )) : (
            <ListItem>
              <ListItemText primary="Carregando screens..." />
            </ListItem>
          )}
        </List>
      </Dialog>
    );
  }
}

const mapStateToProps = ({activeScreen}) => ({
  activeScreen
})

const mapDispatchToProps = dispatch => ({
  changeActiveScreen: newData => dispatch(changeActiveScreen(newData))
})

ScreenDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDialog);
