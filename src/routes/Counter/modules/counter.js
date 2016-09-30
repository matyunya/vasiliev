// ------------------------------------
// Constants
// ------------------------------------
export const SWITCH_PLAYER = 'SWITCH_PLAYER'
export const INCREMENT = 'INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function switchPlayer (value = "visible") {
  return {
    type: SWITCH_PLAYER,
    payload: value
  }
}

export function increment () {
  return {
    type: INCREMENT,
    payload: 1
  }
}

export const actions = {
  switchPlayer,
  increment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_PLAYER] : (state, action) => {
    console.log(state.counter, "STATE")
    const textClass = action.payload === "semi" ? "text back-to-visible" : "text hidden";
    return {playerClass: action.payload, textClass: textClass, counter: state.counter}
  },
  [INCREMENT] : (state, action) => {
    return {playerClass: state.playerClass, textClass: state.textClass, counter: state.counter + action.payload}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {playerClass: "hidden", textClass: "hidden", counter: -1}
export default function playerClassReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
