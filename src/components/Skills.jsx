import { faBootstrap, faCss3, faHtml5, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'

class Skills extends Component {
  render() {
    return (
      <Fragment>

        <div className="bg-zinc-700 h-full p-20">
        <div className='text-center'>
                <h5 className='section-title'>Skills
                </h5>
                <h2 className="section-subtitle">
                    What I Am Great At
                </h2>
                <p className='section-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet minima, nemo Neque eveniet minima, nemo 
                </p>
            </div>


            <div className="display-flex">
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faHtml5} className='text-4xl text-orange-400' />
                <h1 className='text-orange-400 font-roboto text-2xl'>HTML</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faCss3} className='text-4xl text-blue-400' />
                <h1 className='text-blue-400 font-roboto text-2xl'>CSS</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faJs} className='text-4xl text-yellow-400' />
                <h1 className='text-yellow-400 font-roboto text-2xl'>JavaScript</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faLaravel} className='text-4xl text-red-500' />
                <h1 className='text-red-500 font-roboto text-2xl'>Laravel</h1>
                </div>
                {/* Card-1 */}

            <div className="skills-card">
                <FontAwesomeIcon icon={faReact} className='text-4xl text-sky-500' />
                <h1 className='text-sky-500 font-roboto text-2xl'>ReactJs</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faBootstrap} className='text-4xl text-purple-500' />
                <h1 className='text-purple-500 font-roboto text-2xl'>Bootstrap</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faPhp} className='text-4xl text-blue-500' />
                <h1 className='text-blue-500 font-roboto text-2xl'>PHP</h1>
                </div>
                {/* Card-1 */}
            <div className="skills-card">
                <FontAwesomeIcon icon={faCode} className='text-4xl text-blue-400' />
                <h1 className='text-blue-400 font-roboto text-2xl'>Tailwind</h1>
                </div>
            </div>
        </div>


      </Fragment>
    )
  }
}

export default Skills