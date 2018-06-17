import {SYNC_STATUS} from '../types'


const status = (state = null, action) => {
  switch (action.type) {
    case SYNC_STATUS:
      const newState = {
        text: action.text
      }
      return newState;
    default:
      return state
  }
};

export default status
