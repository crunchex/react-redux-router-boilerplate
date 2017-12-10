import { combineReducers } from 'redux-immutable'
import user, { Selectors as UserSelectors } from './user'

const selectors = {
  ...UserSelectors
}

// Special selectors with some cross-state derivation here:
// e.g. with 'reselect' package
// const getCrossStateSelector = createSelector(
//   selectors.selector1,
//   selectors.selector2,
//   (x, y) => {
//     return z
//   }
// )

export const Selectors = {
  ...selectors
  // Add special selectors here.
}

export default combineReducers({
  user
})
