import { Map, List } from 'immutable';
import { SET_LOT_DATA, SET_FORM_DATA, SET_LOT_FIELDS, ADD_LOT, EDIT_LOT, DELETE_LOT, RESET_FORM } from '../actions';

const initialState = Map({
  fields: Map({
    descripcion: '',
    vehicleId: 0,
    auctionId: 0,
    odometer: 0,
    highlightsId: 0,
    interiorColorId: 0,
    interiorTypeId: 0,
    colorId: 0,
    keysId: 0,
    plates: '',
    userId: 0,
    notes: '',
    maoPrice: 0,
    bit: 0,
    mao: 0,
    platesState: 0,
    countryId: 0,
    stateId: 0,
    cityId: 0,
    saleTypeId: 0,
    registrationNumber: '',
    salePrice: 0,
  }),
  data: List([]),
});

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOT_DATA:
      return state.merge(state.set('data', List(action.lots)));
    case SET_LOT_FIELDS:
      return state.merge(state.setIn(['fields', action.name], action.value));
    case SET_FORM_DATA:
      return state.merge(state.set('fields', Map(action.lot)));
    case ADD_LOT: {
      const data = state.get('data');
      return state.merge(state.set('data', data.push(action.lot)));
    }
    case EDIT_LOT: {
      const data = state.get('data');
      const index = data.findIndex(item => item.id === action.lot.id);
      return state.merge(state.set('data', data.update(index, () => action.lot)));
    }
    case DELETE_LOT: {
      const data = state.get('data');
      const index = data.findIndex(item => item.id === action.id);
      return state.merge(state.set('data', data.delete(index)));
    }
    case RESET_FORM:
      return state.merge(state.setIn(['fields'], initialState.get('fields')));
    default:
      return state;
  }
}

