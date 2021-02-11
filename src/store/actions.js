import Api from "../api";

export const ACTION_GET_DATA = "ACTION_GET_DATA";
export function getData() {
  return {
    type: ACTION_GET_DATA,
  };
}

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

export const ACTION_REMOVE_ROW = "ACTION_REMOVE_ROW";
export function removeRow(id) {
  return {
    type: ACTION_REMOVE_ROW,
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

export const ACTION_ADD_ROW = "ACTION_ADD_ROW";
export function addRow() {
  return {
    type: ACTION_ADD_ROW,
  };
}

export const ACTION_UPDATE_ROW = "ACTION_UPDATE_ROW";
export function updateRow(row) {
  return {
    type: ACTION_UPDATE_ROW,
    payload: row,
  };
}

export const ACTION_UPD_ROW = "ACTION_UPD_ROW";
export function updRow(row) {
  return {
    type: ACTION_UPD_ROW,
    row: row,
  };
}

export const ACTION_LOADING_DATA = "ACTION_LOADING_DATA";
export function loadingData(isLoading) {
  return {
    type: ACTION_LOADING_DATA,
    payload: isLoading,
  };
}