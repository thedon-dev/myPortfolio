import React from 'react'
import Pic1 from '../assets/Pic1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function Hero() {

    const divStyle = {
        backgroundImage: `linear-gradient( 0deg, rgba(34, 33, 34, 0.6), rgba(30, 30, 31, 0.5)), url(${Pic1})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    
  return (
    <div className='flex flex-col justify-center min-h-[100vh] gap-4 py-10 px-10 md:px-40'
        style={divStyle}
    >
        <div className='flex flex-col justify-center content-center py-5 text-center mt-20'>
            <h2 className=' text-sm text-black'>
                My name is <br /> <span className='text-5xl md:text-8xl text-blue-500 font-semibold'>Victor Jack</span>
            </h2>
            <p className='text-black'>
                I am a software Engineer
            </p>
            <div className='flex justify-center content-center p-5 gap-5 w-1/2 mx-auto mt-20'>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faFacebook} size='' className='text-gray-800 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] hover:-mt-40 my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faInstagram} size='lg' className='text-gray-800 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] hover:-mt-40 my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faTiktok} size='lg' className='text-gray-800 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] hover:-mt-40 my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='text-gray-800 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] hover:-mt-40 my-auto transition-all duration-300' color=''/>
                </a>
            </div>
            <div className='w-full flex justify-center'>
                <a href='#Whatwedo' className='absolute right-5 cursor-pointer md:left-[48%] bottom-5 md:bottom-10 border-spacing-10 border-black w-[50px] h-[50px] md:w-[70px] md:h-[70px] border-dashed rounded-full border-[3px] flex justify-center content-center z-20'>
                    <FontAwesomeIcon icon={faArrowDownLong} size='1x' className='my-auto w-10 animate-bounce text-black'/>
                </a>
            </div>
            
        </div> 
        

        {/* <div className='w-full border border-red-500 grid place-content-center'>
            <div className='border w-[50%] border-blue-500 rounded-xl mx-auto overflow-hidden'>
                <img src={Pic1} alt="" />
            </div>
        </div> */}
    </div>
    
  )
}

export default Hero