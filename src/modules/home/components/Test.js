import React from 'react'
import { TestContext } from '../../../context'

const Test = () => {
  return (
  <div>
    <TestContext.Consumer>
      { value => (
        <div>{value}</div>
      ) }
    </TestContext.Consumer>
  </div>
  )
}

export default Test;
