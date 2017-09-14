import * as ActionTypes from '../constants/actionTypes';

const initState = {};

const entityReducer = (state = initState, { type, payload = {} }) => {
  if (type === ActionTypes.ENTITIES_CHANGED) {
    return Object.keys(payload).reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          ...acc[key],
          ...payload[key]
        }
      }),
      state
    );
  }

  return state;
};

export default entityReducer;