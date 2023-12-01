import React, { Component, Fragment } from 'react'
import Project1 from '../assets/images/proj1.jpg'
import Project2 from '../assets/images/proj2.jpg'
import Project3 from '../assets/images/proj3.jpg'
import Project4 from '../assets/images/proj4.jpg'
class Projects extends Component {
  render() {
    return (
        <Fragment>

        <div className="bg-zinc-800 h-full p-20">
        <div className='text-center'>
                <h5 className='section-title'>Projects
                </h5>
                <h2 className="section-subtitle">
                    What is My Projects
                </h2>
                <p className='section-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet minima, nemo Neque eveniet minima, nemo 
                </p>
            </div>


            <div className="display-flex">
                {/* Card-1 */}
            <div className="project-card">
                <img src={Project1} className='w-full block h-full' alt="" />
                </div>
                {/* Card-1 */}
            <div className="project-card">
                <img src={Project2} className='w-full block h-full' alt="" />
                </div>
                {/* Card-1 */}
            <div className="project-card">
                <img src={Project3} className='w-full block h-full' alt="" />
                </div>
                {/* Card-1 */}
            <div className="project-card">
                <img src={Project4} className='w-full block h-full' alt="" />
                </div>
           
            </div>
        </div>


      </Fragment>
    )
  }
}

export default Projects