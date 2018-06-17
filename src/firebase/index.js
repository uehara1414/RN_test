import firebase from 'react-native-firebase';
import {syncCount, syncStatus} from '../actions'
import uuidv4 from 'uuid/v4';

const firebaseDb = firebase.database().ref('sampleUserID');

export const loadCount = () => {

  return dispatch => {
    firebaseDb.on('value',
      (snapshot) => {
        dispatch(syncCount(snapshot.val()))
      },
      (error) => {
        dispatch(() => {
        })
      }
    )
  }
}

export const loadStatus = () => {
  return dispatch => {
    firebaseDb.child('status').on('value',
      (snapshot) => {
        dispatch(syncStatus(snapshot.val()))
      },
      (error) => {
        dispatch(() => {
        })
      }
    )
  }
}

export const setStatus = (text) => {
  return dispatch => {
    firebaseDb.child('status').set(
      {
        text
      }
    )
  }
}

export const addStatus = (text) => {
  return dispatch => {
    let id = uuidv4();
    firebaseDb.child(id).set({
      text
    })
  }
}

export const addCount = (count) => {
  return dispatch => {
    firebaseDb.set(count + 1)
  }
}