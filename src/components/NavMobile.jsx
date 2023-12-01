import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavItems } from './NavItems';

class NavMobile extends Component {

    constructor(){
        super();
        this.state={
            navOpen:false,
        }
    }
    handleClick=()=> {
        this.setState(prevState => ({
          navOpen: !prevState.navOpen
        }));
      }

  render() {   

    return (
        <Fragment>
        <nav className="flex justify-between items-start p-5 px-10 overflow-hidden">
    <h1 className="text-yellow-400 font-sofia font-bold text-3xl">RR.</h1>
    {this.state.navOpen ?     <button className='text-zinc-400 p-[2px] px-[7px] text-3xl hover:text-yellow-400 transition duration-300' onClick={this.handleClick}>
        <FontAwesomeIcon icon={faTimes} />
    </button>:<button className='text-zinc-400 p-[2px] px-[7px] text-3xl hover:text-yellow-400 transition duration-300' onClick={this.handleClick}>
        <FontAwesomeIcon icon={faBars} />
    </button>}

    
    <ul className={`${this.state.navOpen ? 'top-20':'-top-1/2'} flex justify-between items-center flex-col absolute left-1/2  transform -translate-x-1/2 bg-zinc-700 w-full transition-all duration-300`}>
        <NavItems/>
    </ul>
</nav>
</Fragment>
    )
  }
}

export default NavMobile