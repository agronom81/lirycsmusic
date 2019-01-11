import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Error() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div className="alert alert-info text-center" role="alert">
        Nothing found
      </div>
    </CSSTransition>
    
  )
}

