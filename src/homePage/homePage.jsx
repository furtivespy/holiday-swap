import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MainCard from './mainCard'
import GameCard from './gameCard';

const ColumnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SmallColumn = styled.div`
    flex: 1 0 50%;
`

class HomePage extends React.Component {
    render() {
        return (
        <div>
            <h1>Woo Exchanging Things</h1>
            <ColumnContainer>
                <SmallColumn>
                    <MainCard headingText="Create a New Swap" placeholder="Swap Name"  buttonText="Create" form="maincard1"/>
                </SmallColumn>
                <SmallColumn>
                    <MainCard headingText="Join a Swap" placeholder="Password" buttonText="Join" form="maincard2"/>
                </SmallColumn>
            </ColumnContainer>
            <GameCard/>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
