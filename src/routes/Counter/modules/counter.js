// ------------------------------------
// Constants
// ------------------------------------
export const SWITCH_PLAYER = 'SWITCH_PLAYER'

// ------------------------------------
// Actions
// ------------------------------------
export function switchPlayer (value = "visible") {
  return {
    type: SWITCH_PLAYER,
    payload: value
  }
}

export const actions = {
  switchPlayer
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_PLAYER] : (state, action) => {
    const textClass = action.payload === "semi" ? "text back-to-visible" : "text hidden";
    return {playerClass: action.payload, textClass: textClass}
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {playerClass: "hidden", textClass: "hidden"}
export default function playerClassReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
