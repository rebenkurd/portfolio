import React, { Component, Fragment } from 'react'
import { NavItems } from './NavItems';

class NavDesktop extends Component {
  render() {
    return (
      <Fragment>
                <nav className="flex justify-between items-center p-5 px-10">
            <h1 className="text-yellow-400 font-sofia font-bold text-3xl">RR.</h1>
            <ul className="flex justify-between items-center">
            <NavItems/>

            </ul>
        </nav>
      </Fragment>
    )
  }
}

export default NavDesktop