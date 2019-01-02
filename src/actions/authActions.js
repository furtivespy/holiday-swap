//import * as types from './actionTypes';
import { isLoaded, isEmpty } from 'react-redux-firebase'

export function logoutClick() {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase()
		firebase.logout()
	}
}

export function loginClick(provider) {
	return (dispatch, getState, getFirebase) => {
		const firebase = getFirebase()
		const state = getState()
		if (isLoaded(state.firebase.auth) && isEmpty(state.firebase.auth))
			firebase.login({ provider: provider, type: 'popup'})
	}

/*
	return dispatch =>  {
		dispatch({ type: types.LOGIN_BEGIN })
		let authProvider
		switch (provider) {
			case 'TWITTER':
			authProvider = new Firebase.auth.TwitterAuthProvider()
			break
			case 'FACEBOOK':
			authProvider = new Firebase.auth.FacebookAuthProvider()
			break
			case 'GOOGLE':
			authProvider = new Firebase.auth.GoogleAuthProvider()
			break
		}

		Firebase.auth().signInWithPopup(authProvider).then( results => 
			dispatch({ 
				type: types.LOGIN_COMPLETE,
				user: results.user
			})
		).catch(error =>
			dispatch({
				type: types.LOGIN_ERROR,
				error
			})
		)
	}
	*/
}