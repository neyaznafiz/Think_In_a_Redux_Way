import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes.filters";

export const colorChanged = (color, changeType) => {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (statusValue) => {
  return {
    type: STATUS_CHANGED,
    payload: statusValue,
  };
};
