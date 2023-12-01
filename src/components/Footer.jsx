import React, { Component,Fragment } from 'react'

class Footer extends Component {
  render() {
    return (
        <Fragment>

        <div className="bg-zinc-800 h-full pb-1">
        <div className='text-center'>
            <div className="bg-yellow-400 h-[2px] w-full"></div>
                <p className='text-zinc-400 my-2 text-sm pt-1 md:w-[450px] mx-auto'>
                &copy; Copyright . Rebin Rafiq | All Reserved
                </p>
            </div>
        </div>
  
  
      </Fragment>
    )
  }
}

export default Footer