import React from 'react';
import {connect} from 'react-redux';
import {
  playerCreate,
  playerUpdate,
  playerDestroy,
} from '../actions/player-actions.js';

import PlayerList from './player-list.js';
import PlayerForm from './player-form.js';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h1>Ping Pong Leader Board</h1>
      <h2>Add a Player Name and Position</h2>
      <PlayerForm name="create"></PlayerForm>
      <PlayerList />
    </div>
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerCreate: () => dispatch(playerCreate()),
    playerUpdate: values => dispatch(playerUpdate(values)),
    playerDestroy: id => dispatch(playerDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);