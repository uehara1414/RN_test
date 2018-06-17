import {SYNC_COUNT, SYNC_STATUS} from '../types'


export const syncStatus = (val) => {
  return {
    type: SYNC_STATUS,
    text: val ? val : [],
  }
};
