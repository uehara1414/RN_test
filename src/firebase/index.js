import firebase from 'react-native-firebase';
import {syncCount} from '../actions'

const firebaseDb = firebase.database().ref('count');

export const loadCount = () => {

  return dispatch => {
    firebaseDb.on('value',
      (snapshot) => {
        dispatch(syncCount(snapshot.val()))
      },
      (error) => {
        dispatch(() => {})
      }
    )
  }
}

export const addCount = (count) => {
  return dispatch => {
    firebaseDb.set(count + 1)
  }
}