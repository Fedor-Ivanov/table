import Api from "../api";

export const ACTION_SET_DATA = "ACTION_SET_DATA";
export function setData(data) {
  return {
    type: ACTION_SET_DATA,
    payload: data,
  };
}

export const ACTION_DELETE_ROW = "ACTION_DELETE_ROW";
export function deleteRow(id) {
  return {
    type: ACTION_DELETE_ROW,
    payload: id,
  };
}

export const ACTION_CREATE_ROW = "ACTION_CREATE_ROW";
export function createRow(row) {
  return {
    type: ACTION_CREATE_ROW,
    payload: row,
  };
}

export const ACTION_UPDATE_ROW = "ACTION_UPDATE_ROW";
export function updateRow(row) {
  return {
    type: ACTION_UPDATE_ROW,
    payload: row,
  };
}

export const ACTION_LOADING_DATA = "ACTION_LOADING_DATA";
export function loadingData(isLoading) {
  return {
    type: ACTION_LOADING_DATA,
    payload: isLoading,
  };
}

export const THUNK_GET_TABLES = "THUNK_GET_TABLES";
export const getTableData = () => async (dispatch) => {
  dispatch(loadingData(true));
  try {
    const { data } = await Api.get();
    dispatch(setData(data));
    dispatch(loadingData(false));
  } catch (error) {
    console.log(error.response);
    dispatch(loadingData(false));
  }
};

export const THUNK_DELETE_ROW = "THUNK_DELETE_ROW";
export const deleteTableRow = (id) => async (dispatch) => {
  dispatch(loadingData(true));
  try {
    Api.delete(id).then((resp) => {
      dispatch(deleteRow(resp.data.id));
      dispatch(loadingData(false));
    });
  } catch (error) {
    console.log(error.response);
    dispatch(loadingData(false));
  }
};

export const THUNK_CREATE_ROW = "THUNK_CREATE_ROW";
export const newTableRow = () => async (dispatch) => {
  dispatch(loadingData(true));
  try {
    Api.post("", { name: "", surname: "", city: "" }).then((resp) => {
      dispatch(createRow(resp.data));
      dispatch(loadingData(false));
    });
  } catch (error) {
    console.log(error.response);
    dispatch(loadingData(false));
  }
};

export const THUNK_UPDATE_ROW = "THUNK_UPDATE_ROW";
export const updateTableRow = (item) => async (dispatch) => {
  dispatch(loadingData(true));
  try {
    Api.put(item.id, item).then((resp) => {
      dispatch(updateRow(resp.data));
      dispatch(loadingData(false));
    });
  } catch (error) {
    console.log(error.response);
    dispatch(loadingData(false));
  }
};

// export const THUNK_CLEAR_ROW = "THUNK_CLEAR_ROW";
// export const clearTableRow = () => async (dispatch) => {
//   dispatch(loadingData(true));
//   try {
//     Api.post().then((resp) => {
//       dispatch(createRow(resp.data));
//       dispatch(loadingData(false));
//     });
//   } catch (error) {
//     console.log(error.response);
//     dispatch(loadingData(false));
//   }
// };
