import React from 'react'
import PropTypes from 'prop-types'
import GamePage from './gamePage'

class TestPage extends React.Component {
    render() {
        return (
        <div>
            <h1>Test Page</h1>
            <GamePage {...this.props} />
        </div>
        );
    }
}

TestPage.propTypes = {
    match: PropTypes.object
}

export default TestPage