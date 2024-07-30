import React from 'react'
import Pic1 from '../assets/Pic1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {

    const divStyle = {
        backgroundImage: `linear-gradient( 0deg, rgba(34, 33, 34, 0.7), rgba(30, 30, 31, 0.6)), url(${Pic1})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    }
    
  return (
    <div className='relative flex flex-col justify-center min-h-[100vh] gap-4 py-10 px-10 md:px-40'
        style={divStyle} id='hero'
    >
        <div className='flex flex-col justify-center content-center py-5 text-center mt-20'>
            <h2 className='text-sm text-white '>
                Hi, my name is <br /> <span className='text-4xl md:text-8xl text-blue-500 font-extrabold'>Victor Jack</span>
            </h2>
            <p className='text-white mt-2 w-full lg:w-1/2 mx-auto text-xs lg:text-base'>
                I am a software Engineer, a true definition of a Philomath and a Tech addict. I strive to bring innovative ideas to life. My goal is to craft seamless digital experiences that not only meet but exceed client expectations.
            </p>
            <div className='flex justify-center content-center p-5 gap-5 w-1/2 mx-auto mt-10'>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faFacebook} size='' className='text-gray-900 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] my-auto group-hover:text-blue-800 transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faInstagram} size='lg' className='text-gray-900 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] group-hover:text-red-400 my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faTiktok} size='lg' className='text-gray-900 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] group-hover:text-red-500 my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faXTwitter} size='lg' className='text-gray-900 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] group-hover:text-white my-auto transition-all duration-300' color=''/>
                </a>
                <a href="" className='hover:-mt-2 group'>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' className='text-gray-900 hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] group-hover:text-blue-500 my-auto transition-all duration-300' color=''/>
                </a>
            </div>
            <div className='w-full mt-10 flex justify-center'>
                <a href='#about' className='right-5 cursor-pointer lg:left-[48%] bottom-5 md:bottom-10 border-spacing-10 border-black w-[50px] h-[50px] md:w-[70px] md:h-[70px] border-dashed rounded-full border-[3px] flex justify-center content-center z-20'>
                    <FontAwesomeIcon icon={faArrowDownLong} size='1x' className='my-auto w-10 animate-bounce text-black'/>
                </a>
            </div>
            
        </div> 

        <div className='flex flex-col justify-end top-[40%] absolute bottom-0 left-0 lg:left-10'>
            <p className='text-blue-500 rotate-90 mb-20 md:mb-28 text-xs md:text-base'>vjack878@gmail.com</p>
            <div className='w-[1px] h-[50px] md:h-[200px] border border-gray-900 mx-auto '></div>
        </div>
    </div>
    
  )
}

export default Hero