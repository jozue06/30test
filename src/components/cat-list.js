import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './cat-item.js';

class CatList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
  }

  displayAllCategories() {
    return this.props.categories.map(category => {
      return <CategoryItem key={category.id} id={category.id} name={category.name} budget={category.budget} isEditing={category.isEditing}></CategoryItem>
    });
  }

  render() {
    return (
      <div>
        <h2>Current budget list:</h2>
        <ul>{this.displayAllCategories()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);