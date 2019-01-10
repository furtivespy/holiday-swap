import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Card, Elevation } from "@blueprintjs/core";

const ColumnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const BigColumn = styled.div`
    flex: 1;
`
const SmallColumn = styled.div`
    flex: 0 0 100px;
`

class GameCard extends React.Component {
    render() {
        const { titleText, buttonText } = this.props
        return (
        <Card elevation={Elevation.TWO}>
            <ColumnContainer>
                <BigColumn><h4>{titleText}</h4></BigColumn>
                <SmallColumn><Button type="submit">{buttonText}</Button></SmallColumn>
            </ColumnContainer>
        </Card>
        )
    }
}
GameCard.defaultProps = {
    titleText: "Game Name",
    buttonText:  "Join"
}
GameCard.propTypes = {
    titleText: PropTypes.string,
    buttonText: PropTypes.string
}

export default GameCard