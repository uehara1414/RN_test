import {SYNC_COUNT, SYNC_STATUS} from '../types'

export const syncCount = (count) => {
  return {
    type: SYNC_COUNT,
    count: count,
  }
};

export const syncStatus = (val) => {
  return {
    type: SYNC_STATUS,
    val: val,
  }
};
