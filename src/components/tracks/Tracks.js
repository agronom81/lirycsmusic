import React, { Component } from 'react'
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Error from '../layout/Error';
import Track from './Track';
import { CSSTransition } from 'react-transition-group'

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        { value => {
          const { track_list, heading, error } = value
          if((track_list === undefined || track_list.length === 0) && !error ) {
            return <Spinner/>
          } else if(error) {
            return <Error/>
          } else {
            return (
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade-in-top"
              >
                <div>
                  <h3 className="text-center mb-4 mt-4">{ heading }</h3>
                  <div className="row">
                    { track_list.map(item => (
                      <Track 
                        key={ item.track.track_id } 
                        track={ item.track } 
                      />
                    )) }
                  </div>
                </div>
              </CSSTransition>
            )
          }
        } }
      </Consumer>
    )
  }
}
