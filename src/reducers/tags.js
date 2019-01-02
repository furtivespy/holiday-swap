import * as types from '../actions/actionTypes'
import initialState from './initialState';
import { findIndex, filter, shuffle, take, join } from 'lodash'

const select = (tag) => { return Object.assign({}, tag, {selected: true})}
const unselect = (tag) => { return Object.assign({}, tag, {selected: false})}

export default function tagsReducer(state = initialState, action) {
  var ind = -1
  switch (action.type) {
    case types.RANDOMIZE_TAGS:
      var selected = filter(state.tags, 'selected')
      var shuffledList = shuffle(selected)
      var snipped = take(shuffledList, state.randomCount).map(a => a.name)
      var text = "#" + join(snipped, " #")
      return Object.assign({}, state, { randomList: text })
    case types.TOGGLE_TAG:
      ind = findIndex(state.tags, ["name", action.tag] )
      if (ind === -1) { return state }
      return Object.assign({}, state, {tags:
       [
          ...state.tags.slice(0, ind),
          Object.assign({}, state.tags[ind], {selected: !state.tags[ind].selected}) ,
          ...state.tags.slice(ind+1)
        ]})
    case types.SELECT_ALL_TAGS:
      if (action.select) {
        return Object.assign({}, state, {tags: state.tags.map(s => select(s))})
      } else {
        return Object.assign({}, state, {tags: state.tags.map(s => unselect(s))})
      }
    case types.RANDOM_COUNTER_CHANGE:
      return Object.assign({}, state, {randomCount: action.count})
    case types.SELECT_TAG_CATEGORY:
      return Object.assign({}, state, {selectedCategory: action.newCategory})
    case types.TAGS_ADD_CATEGORY:
      return Object.assign({}, state, {categorizedTags: [...state.categorizedTags, {categoryName: action.newCategory, tags: []}]})
    case types.TAGS_ADD_CATEGORY_TAG:
      ind = findIndex(state.categorizedTags, ["categoryName",state.selectedCategory])
      if (ind === -1) { return state }
      return Object.assign({}, state, {
        categorizedTags: [
          ...state.categorizedTags.slice(0,ind),
          Object.assign({}, state.categorizedTags[ind], {tags: [...state.categorizedTags[ind].tags, {media_count: 1, name: action.newTag, selected: false}]}),
          ...state.categorizedTags.slice(ind+1)
        ]
      })
    case types.TAGS_REMOVE_CATEGORY_TAG:
      ind = findIndex(state.categorizedTags, ["categoryName",state.selectedCategory])
      if (ind === -1) { return state }
      var ind2 = findIndex(state.categorizedTags[ind].tags, ["name", action.tag])
      if (ind2 === -1) {return state }
      return Object.assign({}, state, {
        categorizedTags: [
          ...state.categorizedTags.slice(0,ind),
          Object.assign({}, state.categorizedTags[ind], {tags: [
            ...state.categorizedTags[ind].tags.slice(0,ind2),
            ...state.categorizedTags[ind].tags.slice(ind2+1)
          ]}),
          ...state.categorizedTags.slice(ind+1)
        ]
      })

    default:
      return state
  }
}
