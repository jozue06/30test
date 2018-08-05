import React from 'react';
import {connect} from 'react-redux';
import {
  playerCreate,
  playerUpdate,
} from '../actions/player-actions.js';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: 0,
      isEditing: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    let newState = {
      name: event.target.value
    }
    this.setState(newState);
  }

  handlePositionChange(event) {
    let newState = {
      position: event.target.value
    }
    this.setState(newState);
  }

  handleSubmit(event) {
    let submitFormName = this.props.name;
    event.preventDefault();
    if (this.props.name === 'create') {
      this.props.playerCreate(this.state);
    } else if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
      this.props.playerUpdate(this.state);
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleNameChange} type="text" placeholder="player name" required="true"/>
        <input onChange={this.handlePositionChange} name="position" type="text" placeholder="player position" required="true"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerCreate: val => dispatch(playerCreate(val)),
    playerUpdate: val => dispatch(playerUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);