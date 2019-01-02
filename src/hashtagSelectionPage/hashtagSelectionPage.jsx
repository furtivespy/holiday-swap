import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TagList from '../tagList/tagList'
import { ToggleTag, SelectAll, SelectNone, RandomSelect, RandomCountChange } from '../actions/tagActions'
import { Button, Callout, NumericInput } from '@blueprintjs/core'
import {sortBy} from 'lodash'
import styled from 'styled-components'

const Stretched = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    align-items: stretch;
`

const Spacer = styled.span`
    width: 1em;
`

const FlexRow = styled.div`
    display: flex;
`

const FullText = styled.textarea`
    width: 100%;
    height: 100%;
`

class HashtagSelectionPage extends React.Component {
    render() {
        return (
        <div>
            <TagList tags={this.props.tags} click={this.props.tagClick} />
            <p></p>
            <FlexRow>
            <Button icon="plus" intent="Primary" onClick={this.props.allClick}>Select All</Button>
            <Spacer/>
            <Button icon="minus" intent="Primary" onClick={this.props.noneClick}>Select None</Button>
            <Spacer/>
            <Button icon="send-to-graph" intent="Primary" onClick={this.props.randomClick}>Randomize</Button>
            <Spacer/>
            <NumericInput intent="Primary" value={this.props.randomCount} onValueChange={this.props.numberChange} />
            </FlexRow>
            <p></p>
            <div>
                <Callout >
                    <Stretched><FullText value={this.props.randomTags} /></Stretched>
                </Callout>
            </div>
        </div>
        );
    }
}

HashtagSelectionPage.propTypes = {
    tags: PropTypes.array.isRequired,
    randomTags: PropTypes.string,
    randomCount: PropTypes.number,
    tagClick: PropTypes.func,
    allClick: PropTypes.func,
    noneClick: PropTypes.func,
    randomClick: PropTypes.func,
    numberChange: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        tags: sortBy(state.tags.tags, ["name"]),
        randomTags: state.tags.randomList,
        randomCount: state.tags.randomCount
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        tagClick: (tag) => dispatch(ToggleTag(tag)),
        allClick: () => dispatch(SelectAll()),
        noneClick: () => dispatch(SelectNone()),
        randomClick: () => dispatch(RandomSelect()),
        numberChange: (asNumber) => dispatch(RandomCountChange(asNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HashtagSelectionPage);
