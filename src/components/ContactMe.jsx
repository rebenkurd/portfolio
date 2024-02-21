import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component ,Fragment} from 'react'
import { Link } from 'react-router-dom'


class ContactMe extends Component {
  render() {
    return (
        <Fragment>

        <div className="bg-zinc-800 h-full p-20" id='Contact'>
        <div className='text-center'>
                <h5 className='text-md md:text-lg sm:text-xl text-yellow-400 font-roboto'>Contacts
                </h5>
                <h2 className="text-2xl md:text-4xl sm:text-3xl mt-2 font-bold text-zinc-300">
                    Ways To Contact Me
                </h2>
                <p className='text-zinc-400 my-2 text-sm  md:w-[450px] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet minima, nemo Neque eveniet minima, nemo 
                </p>
            </div>
            <div className="flex justify-center gap-3 mt-20 flex-wrap ">
                {/* Card-1 */}
            <Link to={"mailto:rebinrafiq980@gmail.com"} target='_blank' className="bg-zinc-700  p-7 w-full lg:w-auto h-5 flex justify-center gap-2 items-center hover:scale-105 transition duration-300 shadow-md shadow-zinc-900 rounded-md">
                <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-zinc-300' />
                <p className='text-yellow-400 font-roboto text-2x'>Rebinrafiq980@gmail.com</p>
            </Link>
                {/* Card-1 */}
                <Link to={"tel:07510481107"} target='_blank' className="bg-zinc-700  p-7 w-full lg:w-auto h-5 flex justify-center gap-2 items-center hover:scale-105 transition duration-300 shadow-md shadow-zinc-900 rounded-md">
                <FontAwesomeIcon icon={faPhoneAlt} className='text-2xl text-zinc-300' />
                <p className='text-yellow-400 font-roboto text-2x'>(+964) 751 048 1107</p>
                </Link>
                {/* Card-1 */}
            <Link to={"https://github.com/rebenkurd"} target='_blank' className="bg-zinc-700  p-7 w-full lg:w-auto h-5 flex justify-center gap-2 items-center hover:scale-105 transition duration-300 shadow-md shadow-zinc-900 rounded-md">
                <FontAwesomeIcon icon={faGithub} className='text-2xl text-zinc-300' />
                <p className='text-yellow-400 font-roboto text-2x'>Rebenkurd</p>
            </Link>
                {/* Card-1 */}
            <Link to={"https://www.facebook.com/1amrebin"} target='_blank' className="bg-zinc-700  p-7 w-full lg:w-auto h-5 flex justify-center gap-2 items-center hover:scale-105 transition duration-300 shadow-md shadow-zinc-900 rounded-md">
                <FontAwesomeIcon icon={faFacebook} className='text-2xl text-zinc-300' />
                <p className='text-yellow-400 font-roboto text-2x'>1amrebin</p>
            </Link>
                {/* Card-1 */}
            <Link to={"https://twitter.com/1amrebin"} target='_blank' className="bg-zinc-700  p-7 w-full lg:w-auto h-5 flex justify-center gap-2 items-center hover:scale-105 transition duration-300 shadow-md shadow-zinc-900 rounded-md">
                <FontAwesomeIcon icon={faTwitter} className='text-2xl text-zinc-300' />
                <p className='text-yellow-400 font-roboto text-2x'>1amrebin</p>
            </Link>

            </div>
        </div>
  
  
      </Fragment>
    )
  }
}

export default ContactMe