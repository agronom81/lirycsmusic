import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Spinner() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div>
        <div className="d-table mx-auto spinner-wrapper">
          <i className="fas fa-spinner fa-pulse"></i>
        </div>
      </div>
    </CSSTransition>
    
  )
}
