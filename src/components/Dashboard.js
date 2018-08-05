import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../actions/cat-actions.js';

import CatList from './cat-list.js';
import CatForm from './cat-form.js';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h1>Manage Your Budget</h1>
      <h2>Create A Category:</h2>
      <CatForm name="create"></CatForm>
      <CatList></CatList>
    </div>
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: () => dispatch(categoryCreate()),
    categoryUpdate: values => dispatch(categoryUpdate(values)),
    categoryDestroy: id => dispatch(categoryDestroy(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);