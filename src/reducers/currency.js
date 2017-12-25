import {SELECT_CURRENCY} from '../actions'

const initialState = {
  selected: 'PLN',
  tracking: [
    'BTC'
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CURRENCY:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state
  }
}