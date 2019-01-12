import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import PropTypes from 'prop-types'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class GamePage extends React.Component {
    render() {
        if (!isLoaded(this.props.games)){
            return(<div>Loading...</div>)
        }
        if (isEmpty(this.props.games)){
            return(<div>Game Doesn't Exist</div>)
        }
        const game = Object.values(this.props.games)[0]
        return (
        <div>
            <h1>{game.swapName}</h1>
            {this.props.match.params.gameId}
        </div>
        );
    }
}

GamePage.propTypes = {
    match: PropTypes.object,
    games: PropTypes.object
}



const mapStateToProps = (state) => {
    return {
        games: state.firebase.data.games
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default compose(firebaseConnect((props) => ([{
    path: 'games',
    queryParams: ['orderByChild=shareId', `equalTo=${props.match.params.gameId}`]
  }])),
  connect(mapStateToProps, mapDispatchToProps)
  )(GamePage)