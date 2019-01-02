import {LOGIN_BEGIN, LOGIN_COMPLETE, LOGIN_ERROR, LOGOUT} from '../actions/actionTypes'

const initialState = {}

export default function user(state = initialState, action) {
	switch (action.type) {
        case LOGIN_BEGIN:
            return state
		case LOGIN_COMPLETE:
            return action.user
        case LOGIN_ERROR:
            return state
		case LOGOUT:
			return initialState
		default:
			return state
	}
}