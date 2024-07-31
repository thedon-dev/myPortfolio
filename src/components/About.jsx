import React from 'react'
import Pic4 from '../assets/Pic4.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazonPay } from '@fortawesome/free-brands-svg-icons'
import '../Styles/About.css'
import { siJavascript } from 'simple-icons'

function About() {
  return (
    <div className='min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 gap-5 px-[8%] pb-10' id='about'>
        <div className='my-20 text-white'>

            <div className='flex content-center justify-start'>
                <div className='w-[80px] h-[1px] border border-blue-500 my-auto me-5'></div>
                <h4 className='text-blue-500 text-lg lg:text-xl'>About Me</h4>
            </div>

            <div className='mt-10 text-xs lg:text-base'>
                <p className='text-white'>Hey There! My name is Victor Jack I am a problem solver, a leader and a critical thinker,
                    I enjoy turning complex problems into beautiful designs. My tech journey started in 2020, with me messing around
                    different programming languages and making games. My passion for games and trying to make one introduced me to the Tech space.
                </p> 
                <br />
                <p>
                    Fast forward to 4 years later (today) I've had the privilege to work with multiple people across the Tech space includnig the game development industry.
                    Building a game community has also exposed me to different skills that I didn't really expect to learn, like communication, leadership, event organzation, networking, etc.
                </p>
                <br />
                <div>
                    <p>Programming languages I use: </p>
                    <div className='flex flex-wrap mt-10'>
                        <div className='icons'>
    	                    {/* <FontAwesomeIcon icon={siJavascript} className='text-white'/> */}
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
                            <p className='text-xs'>AmazonPay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='grid place-content-center px-10'>
            <div className='border-4 rounded-lg border-dotted border-white p-3'>
                <div className='h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] overflow-hidden group'>
                    <img src={Pic4} alt="" className='group-hover:scale-125 -translate-y-10 lg:-translate-y-20 transition-all duration-300'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About