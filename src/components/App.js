import { connect } from '@cerebral/react'
import { css } from 'react-emotion'
import { state, signal } from 'cerebral/tags'
import React from 'react'

import InputLength from './InputLength'
import PressMeButton from './PressMeButton'
import Title from './Title'

export default connect(
  {
    title: state`title`,
    inputChanged: signal`inputChanged`
  },
  ({ title, inputChanged }) => {
    const wrapperStyle = css`
      padding: 4em;
      background: papayawhip;
      width: 300px;
      word-wrap: break-word;
      text-align: center;
    `

    return (
      <div className={wrapperStyle}>
        <Title />
        <input
          placeholder='Type your name'
          onChange={event => inputChanged({ inputValue: event.target.value })}
        />
        <InputLength />
        <PressMeButton />
      </div>
    )
  }
)
