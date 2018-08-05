import React from 'react';
import {connect} from 'react-redux';

import PlayerItem from './player-item.js';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAll = this.displayAll.bind(this);
  }

  displayAll() {
    
    return this.props.players.map(player => {
      return <PlayerItem key={player.id} id={player.id} name={player.name} position={player.position} isEditing={player.isEditing}></PlayerItem>
    });
  }

  render() {
    return (
      <div>
        <h2>Current player list:</h2>
        <ul>{this.displayAll()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    playerCreate: val => dispatch(playerCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);