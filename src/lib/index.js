import React from 'react'
import { Iterable } from 'immutable'

export const getVal = (state, absolutePath, key) => state.getIn([...absolutePath, key])

export const toJS = (WrappedComponent) => (wrappedComponentProps) => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] =
    Iterable.isIterable(wrappedComponentProp[VALUE])
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    return newProps
  }, {})

  return <WrappedComponent {...propsJS} />
}
