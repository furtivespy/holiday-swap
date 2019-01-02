import { findIndex } from 'lodash'
import {reset} from 'redux-form';
import * as types from './actionTypes'

export function ToggleTag(tag) {
    return {
        type: types.TOGGLE_TAG,
        tag: tag
    }
}

export function SelectAll() {
    return {
        type: types.SELECT_ALL_TAGS,
        select: true
    }
}

export function SelectNone() {
    return {
        type: types.SELECT_ALL_TAGS,
        select: false
    }
}

export function RandomSelect() {
    return {
        type: types.RANDOMIZE_TAGS
    }
}

export function RandomCountChange(num) {
    return {
        type: types.RANDOM_COUNTER_CHANGE,
        count: num
    }
}

export function SelectCategory(category){
    return{
        type: types.SELECT_TAG_CATEGORY,
        newCategory: category
    }
}

export function AddCategory(formData){
    return function (dispatch, getState, getFirebase) {
        var firebase = getFirebase()
        var existingState = getState()
        firebase.push('categories', {
            categoryName: formData.itemInput, 
            uid: existingState.firebase.auth.uid,
            tags: []
        })
        // var existing = existingState.tags.categorizedTags
        // var ind = findIndex(existing, ["categoryName", formData.itemInput])
        // if (ind === -1 && formData.itemInput && formData.itemInput.trim().length > 0){
        //     dispatch({
        //         type: types.TAGS_ADD_CATEGORY,
        //         newCategory: formData.itemInput
        //     })
        //     dispatch(reset("addCategory"))
        // }
    }
}

export function AddCategoryTag(tagForm){
    return function (dispatch, getState, getFirebase) {
        var firebase = getFirebase();
        var state = getState();
        if (state.tags.selectedCategory) {    
            var currentTags = state.firebase.data.categories[state.tags.selectedCategory].tags || [];
            firebase.update(
                `categories/${state.tags.selectedCategory}`,
                {tags: [...currentTags, {media_count: 1, name: tagForm.itemInput, selected: false}]}
            ).then(
                dispatch(reset("addTags"))
            )
        }
        // var selectedCategory = getState().tags.selectedCategory
        // if (selectedCategory === undefined || selectedCategory.trim().length < 1) return
        // var existing = find(getState().tags.categorizedTags,["categoryName", selectedCategory]).tags
        // var ind = findIndex(existing, ["categoryName", tagForm.itemInput])
        // if (ind === -1 && tagForm.itemInput && tagForm.itemInput.trim().length > 0){
        //     dispatch({
        //         type: types.TAGS_ADD_CATEGORY_TAG,
        //         newTag: tagForm.itemInput
        //     })
        //     dispatch(reset("addTags"))
        // }
    }
}

export function RemoveCategoryTag(tag){
    return function (dispatch, getState, getFirebase) {
        var firebase = getFirebase();
        var state = getState();
        if (state.tags.selectedCategory) {
            var currentTags = state.firebase.data.categories[state.tags.selectedCategory].tags || [];
            var ind = findIndex(currentTags, ["name", tag])
            if (ind === -1) {return}
            firebase.update(
                `categories/${state.tags.selectedCategory}`,
                {tags: [...currentTags.slice(0,ind), ...currentTags.slice(ind+1)]}
            )
        }
    }
    // return{
    //     type: types.TAGS_REMOVE_CATEGORY_TAG,
    //     tag: tag
    // }
}