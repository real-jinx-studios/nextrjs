import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {
  lastUpdate: 0,
  items: [{id:0,qty:0}],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        items: [...(state.items), action.item]
      }
    case 'INCREMENT':
      const index=state.items.findIndex(x => x.id == action.id)
      // state.items[index].qty=+1
      return {
        ...state,
        items: [...state.items,{id:action.id, qty: 2}],
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'REMOVE':
      return {
        ...state,
        count: initialState.count,
      }
    case 'CLEAR':
      return {
        ...state,
        items: [],
      }
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,

      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
