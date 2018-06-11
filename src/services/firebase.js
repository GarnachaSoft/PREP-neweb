import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

console.log(process.env)
firebase.initializeApp(process.env)

const db = firebase.database()
const st = firebase.storage()

export {
	db,
	st
}
