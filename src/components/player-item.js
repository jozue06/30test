import React from 'react';
import {connect} from 'react-redux';
import {
  playerUpdate,
  playerDestroy,
} from '../actions/player-actions.js';

import PlayerForm from './player-form.js';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(event) {
    let id = event.target.id;
    this.props.playerUpdate({isEditing: true, id});;
  }

  toggleOffEdit(event) {
    let id = event.target.id;
    this.props.playerUpdate({isEditing: false, id});;
  }

  handleDelete(event) {
    event.preventDefault();
    let id = event.target.id;
    this.props.playerDestroy(id);
  }

  render() {
    if (this.props.isEditing === true) {
      return (
        <div>
          <PlayerForm name="update" id={this.props.id}></PlayerForm><button onClick={this.toggleOffEdit} id={this.props.id}>Cancel</button>
        </div>
      )
    }
    return (
      <li key={this.props.key} id={this.props.id}> Name: {this.props.name} Position:{this.props.position} <button id={this.props.id} onClick={this.handleDelete}>X</button> <button id={this.props.id} onClick={this.toggleEdit}>Edit</button></li>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerUpdate: (values) => dispatch(playerUpdate(values)),
    playerDestroy: id => dispatch(playerDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerItem);