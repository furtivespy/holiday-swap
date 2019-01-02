import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagList from '../tagList/tagList'
import AddItem from './addItem'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
`

const PaddedDiv = styled.div`
    padding: 2px;
`

const TagsColumn = (props) => {
    return (
        <Column>
        <h4>Tags</h4>
        <PaddedDiv>
            <TagList tags={props.tags} canSelect={false} canRemove={true} onRemove={props.onRemove}/>
        </PaddedDiv>
        <AddItem form="addTags" placeholder="Add New Tag" onSubmit={props.onAdd}/>
        </Column>
    )
}

TagsColumn.defaultProps = {
    onAdd: () => {},
    onRemove: () => {}
}

TagsColumn.propTypes = {
    tags: PropTypes.array,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func
}


export default TagsColumn