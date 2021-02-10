import {
  ACTION_SET_DATA,
  ACTION_DELETE_ROW,
  ACTION_LOADING_DATA,
  ACTION_CREATE_ROW,
  ACTION_UPDATE_ROW,
} from "./actions";

const initialState = {
  headers: ["Id", "Name", "Surname", "City"],
  rows: [],
  isLoading: false,
};

function updateRow(list, data) {
  return list.map((item) => (item.id === data.id ? data : item));
}

function createRow(list, item) {
  return [...list, item];
}

const RootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_DATA:
      return {
        ...state,
        rows: payload,
      };

    case ACTION_DELETE_ROW:
      return {
        ...state,
        rows: state.rows.filter((item) => item.id !== payload),
      };

    case ACTION_UPDATE_ROW:
      return {
        ...state,
        rows: updateRow(state.rows, payload),
      };

    case ACTION_CREATE_ROW:
      return {
        ...state,
        rows: createRow(state.rows, payload),
      };

    case ACTION_LOADING_DATA:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};

export default RootReducer;
