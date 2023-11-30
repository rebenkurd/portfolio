import React, { Component, Fragment } from 'react'

class Header extends Component {
  render() {
    return (
        <Fragment>
            <div className="bg-slate-600">
            <nav className="flex justify-end p-5">
                <ul className="flex justify-between items-center">
                    <li className="p-3 text-emerald-400 font-roboto font-normal hover:text-emerald-100 transition duration-300"><a href="#exprience"> Experience</a></li>
                    <li>Works</li>
                    <li>Companies</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="grid grid-cols-2">
                <div>1</div>
                <div>2</div>
            </div>
            </div>
        </Fragment>
    )
  }
}

export default Header