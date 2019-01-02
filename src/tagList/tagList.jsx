import React from 'react'
import {Tag} from '@blueprintjs/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TagHolder = styled.span`
    margin: 2px;
    margin-bottom: 3px;
`

const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class TagList extends React.Component {
    render() {
        const {tags, click, canSelect, canRemove, onRemove} = this.props
        return (
            <FlexDiv>
                {tags.map((tag) => {
                    return(<TagHolder key={tag.name}><Tag interactive={canSelect} onRemove={canRemove ? () => onRemove(tag.name) : undefined } intent={tag.selected ? 'Success' : 'None'} onClick={() => click(tag.name)} >{tag.name}</Tag></TagHolder>)
                })}
            </FlexDiv>
        );
    }
}

TagList.propTypes = {
    tags: PropTypes.array.isRequired,
    click: PropTypes.func,
    canSelect: PropTypes.bool,
    canRemove: PropTypes.bool,
    onRemove: PropTypes.func
}

TagList.defaultProps = {
    click: () => {},
    canSelect: true,
    canRemove: false,
    onRemove: () => {}
}

export default TagList;
