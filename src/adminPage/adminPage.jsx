import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {sortBy} from 'lodash'
import CategoryColumn from './categoryColumn'
import TagsColumn from './tagsColumn'
import {SelectCategory, AddCategory, AddCategoryTag, RemoveCategoryTag} from '../actions/tagActions.js'
import { firebaseConnect, isLoaded } from 'react-redux-firebase'


const MainContainer = styled.div`
  display: flex;
`

class AdminPage extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Categorize Tags</h2>
        <MainContainer>
           <CategoryColumn categories={this.props.categories} selected={this.props.selectedCat} onSelect={this.props.catClick} onAdd={this.props.addCategory} />
          <TagsColumn tags={this.props.tags} selected={this.props.selectedCat} onAdd={this.props.addTag} onRemove={this.props.removeTag} />
        </MainContainer>
      </div>
    )
  }
}

AdminPage.propTypes = {
  categories: PropTypes.array,
  tags: PropTypes.array,
  selectedCat: PropTypes.string,
  catClick: PropTypes.func,
  addCategory: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
      tags: (state.tags.selectedCategory === "") ? [] : sortBy(state.firebase.data.categories[state.tags.selectedCategory].tags, ["name"]),
      //categories: sortBy(state.tags.categorizedTags, ["categoryName"]).map((c) => c.categoryName),
      categories: !isLoaded(state.firebase.data.categories) ? [] : Object.entries(state.firebase.data.categories).map(([key, val]) => Object.assign({}, val, {key: key}) ),
      selectedCat: state.tags.selectedCategory,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      catClick: (cat) => dispatch(SelectCategory(cat)),
      addCategory: (data) => dispatch(AddCategory(data)),
      addTag: (data) => dispatch(AddCategoryTag(data)),
      removeTag: (tag) => dispatch(RemoveCategoryTag(tag))
  }
}

export default compose(
  firebaseConnect([{
    path: 'categories'
  }]),
  connect(mapStateToProps, mapDispatchToProps)
  )(AdminPage)
