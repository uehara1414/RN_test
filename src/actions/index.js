import {SYNC_COUNT} from '../types'

export const syncCount = (count) => {
  return {
    type: SYNC_COUNT,
    count: count,
  }
};

