import React from 'react'
import Pic6 from '../assets/Pic6.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons'
import '../Styles/About.css'

function About() {
  return (
    <div className='min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 gap-5 px-[8%] pb-10' id='about'>
        <div className='my-20 text-white'>
            <ul >
                <li><h4 className='text-blue-500 text-lg lg:text-xl'>:About Me</h4></li>
            </ul>
            <div className='mt-10 text-xs lg:text-base'>
                <p className='text-white'>Hey There! My name is Victor Jack I am a problem solver, a leader and a critical thinker,
                    I enjoy turning complex problems into beautiful designs. My tech journey started in 2020, with me messing around
                    different programming languages and making games. My passion for games and trying to make one introduced me to the Tech space.
                </p> 
                <br />
                <p>
                    Fast forward to 4 years later (today) I've had the privilege to work with multiple people across the Tech space includnig the game development industry.
                    Building a game community has also exposed me to different skills that I didn't really value, like communication, leadership, event organzation, networking, etc.
                </p>
                <br />
                <div>
                    <p>Programming languages I use: </p>
                    <div className='flex flex-wrap mt-10'>
                        <div className='icons'>
    	                    <FontAwesomeIcon icon={faAmazonPay} className='text-white'/>
                            <p className='text-xs'>AmazonPay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid place-content-center px-10'>
            <div className='border-4 rounded-lg border-dotted border-white p-3'>
                <div className='h-[350px] w-[350px] lg:h-[500px] lg:w-[500px] overflow-hidden group'>
                    <img src={Pic6} alt="" className='group-hover:scale-125 -translate-y-10 lg:-translate-y-20 transition-all duration-300'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About