import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCjsHet7RDswg38ly_Z2o3sLQXuxxUptC8",
	authDomain: "koo-react-boilerplate.firebaseapp.com",
	databaseURL: "https://koo-react-boilerplate.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth