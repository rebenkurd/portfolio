
import React, { Component, Fragment } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
class Header extends Component {
render() {
return (
<Fragment>
    <div className="bg-zinc-800 h-[60vh]">
        <div className="block lg:hidden">
        <NavMobile/>
        </div>
        <div className="hidden lg:block">
        
        <NavDesktop/>
        </div>
        <div className="text-center items-center px-10 mt-10 md:px-10 ">

            {/* Col 1 */}
            <div className='mt-20'>
                <h1 className='text-4xl md:text-6xl sm:text-5xl text-gray-300 font-bold'>
                    Rebin Rafiq<span className='text-yellow-400'>.</span>
                </h1>
                <h2 className="text-2xl md:text-4xl sm:text-3xl mt-3 font-bold text-zinc-300">
                    Full Stack Web Developer
                </h2>
                <p className='text-zinc-400 my-2 text-sm w-96 mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet minima, nemo 
                </p>
                <a href="#" className="text-sm text-yellow-400 hover:text-zinc-300 transition duration-300">See More</a>
                <div className='mb-4 mt-10'>
                    <a href='#'
                        className='px-8 md:px-10 py-2 border-2 bg-transparent border-yellow-400 text-yellow-400 hover:text-zinc-800 hover:bg-yellow-400  duration-300 transition font-bold '>Contact
                        Me</a>
                </div>
            </div>
        </div>
    </div>
</Fragment>
)
}
}

export default Header