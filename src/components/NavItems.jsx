import React, { Component, Fragment } from 'react'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class NavItems extends Component {
  render() {
    return (
      <Fragment>        <li className="p-3"><a href="#exprience"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">
      Experience</a></li>
<li className="p-3"><a href="#"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">Works</a>
</li>
<li className="p-3"><a href="#"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">Companies</a>
</li>
<li className="p-3"><a href="#"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">About</a>
</li>
<li className="p-3"><a href="#"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">Contact</a>
</li>

<ul className="flex justify-between items-center">
  <li className="p-2"><a href="#"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faFacebook} />
      </a></li>
  <li className="p-2"><a href="#"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faTwitter} />
      </a></li>
  <li className="p-2"><a href="#"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faGithub} />
      </a></li>
</ul></Fragment>
    )
  }
}

export default NavItems