import {SYNC_COUNT} from '../types'

const count = (state = 0, action) => {
  switch (action.type) {
    case SYNC_COUNT:
      return action.count;
    default:
      return state
  }
};

export default count
