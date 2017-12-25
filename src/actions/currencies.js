// @flow

const SELECT_CURRENCY = 'SELECT_CURRENCY'
const ADD_TRACKER = 'ADD_TRACKER'
const REMOVE_TRACKER = 'REMOVE_TRACKER'

const selectCurrency = (currency: string): { type: string, payload: string} => {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  }
}

const addTracker = (currency: string): { type: string, payload: string} => {
  return {
    type: ADD_TRACKER,
    payload: currency
  }
}

const removeTracker = (currency: string): { type: string, payload: string} => {
  return {
    type: REMOVE_TRACKER,
    payload: currency
  }
}

export {
  SELECT_CURRENCY,
  ADD_TRACKER,
  REMOVE_TRACKER,
  selectCurrency,
  addTracker,
  removeTracker
}