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

export const setStatus = (id, text) => {
  const updatedAt = new Date().toString();
  return dispatch => {
    firebaseDb.child('status').child(id).set(
      {
        text,
        updatedAt
      }
    )
  }
}

export const addStatus = (text) => {
  return dispatch => {
    let id = uuidv4();
    const updatedAt = new Date().toString();
    firebaseDb.child('status').child(id).set({
      text,
      updatedAt
    })
  }
}

export const addCount = (count) => {
  return dispatch => {
    firebaseDb.set(count + 1)
  }
}