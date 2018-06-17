import {SYNC_STATUS} from '../types'


const status = (state = [], action) => {
  switch (action.type) {
    case SYNC_STATUS:
      return action.text;
    default:
      return state
  }
};

export default status
