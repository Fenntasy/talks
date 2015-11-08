import { SLIDE_LEFT, SLIDE_RIGHT } from './actionTypes'

const initialState = {
  currentSlide: 0
}

export function presentationApp(state = initialState, action) {
  switch(action.type) {
    case SLIDE_LEFT:
      return {
        ...state,
        currentSlide: Math.max(0, state.currentSlide - 1)
      }
    case SLIDE_RIGHT:
      return {
        ...state,
        currentSlide: state.currentSlide + 1
      }
    default:
      return state
  }
}