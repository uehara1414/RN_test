import {SYNC_STATUS} from '../types'


const status = (state = null, action) => {
  switch (action.type) {
    case SYNC_STATUS:
      const newState = {
        sex: action.val.sex,
        height: action.val.height,
        weight: action.val.weight,
        age: action.val.age,
      }
      return newState;
    default:
      return state
  }
};

export default status
