export const SET_LOT_FIELDS = '@@CRUD/SET_LOT_FIELDS';
export const SET_FORM_DATA = '@@CRUD/SET_FORM_DATA';
export const SET_LOT_DATA = '@@CRUD/SET_LOT_DATA';
export const ADD_LOT = '@@CRUD/ADD_LOT';
export const EDIT_LOT = '@@CRUD/EDIT_LOT';
export const DELETE_LOT = '@@CRUD/DELETE_LOT';
export const RESET_FORM = '@@CRUD/RESET_FORM';

export function setLotFields(name, value) {
  return {
    type: SET_LOT_FIELDS,
    name,
    value,
  };
}

export function setFormData(lot) {
  return {
    type: SET_FORM_DATA,
    lot,
  };
}

export function setLotData(lots) {
  return {
    type: SET_LOT_DATA,
    lots,
  };
}

export function addLot(lot) {
  return {
    type: ADD_LOT,
    lot,
  };
}

export function editLot(lot) {
  return {
    type: EDIT_LOT,
    lot,
  };
}

export function deleteLot(id) {
  return {
    type: DELETE_LOT,
    id,
  };
}

export function resetForm() {
  return {
    type: RESET_FORM,
  };
}
