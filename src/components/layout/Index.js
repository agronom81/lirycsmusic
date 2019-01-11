import React from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search'
import { CSSTransition } from 'react-transition-group'

export default function Index() {
  return (
    <React.Fragment>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
      >
        <Search />
      </CSSTransition>
      <Tracks />    
    </React.Fragment>
  )
}
