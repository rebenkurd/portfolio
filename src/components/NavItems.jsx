import React, { Component, Fragment } from 'react'
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class NavItems extends Component {
  render() {
    return (
      <Fragment>        
<li className="p-3"><a href="#Skills"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">
      Skills</a></li>
<li className="p-3"><a href="#Projects"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">Projects</a>
</li>

<li className="p-3"><a href="#AboutMe"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">About Me</a>
</li>
<li className="p-3"><a href="#Contact"
      className="text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider">Contact</a>
</li>

<ul className="flex justify-between items-center">
  <li className="p-2"><a href="https://www.facebook.com/1amrebin"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faFacebook} />
      </a></li>
  <li className="p-2"><a href="https://twitter.com/1amrebin"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faTwitter} />
      </a></li>
  <li className="p-2"><a href="https://github.com/rebenkurd"
          className='text-gray-300 font-roboto font-thin hover:text-amber-300 transition duration-300 tracking-wider'>
          <FontAwesomeIcon icon={faGithub} />
      </a></li>
</ul></Fragment>
    )
  }
}

export default NavItems