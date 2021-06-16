import React from 'react'
import '../../App.css'
import './Intro.css'
import { HashLink as Link } from 'react-router-hash-link';

function Intro() {
    return (
        <>
        <div id="intro" className="intro">
        <div className="intro-container">
        <h1 className="hd"> This is me </h1>
        <div>
        <div className="im">
                        <img 
                        src="https://avatars.githubusercontent.com/u/54008352?s=400&u=c80552234cd094a57f382fa86a16b4db0c3a2933&v=4"
                        />
                       </div>
                           <p>
                                 I am a third year undergraduate at National Institute of Technology, Patna majoring in Electronics and Communication Engineering. I am a passionate programmer and have strong fundamentals of data structures, algorithms and object oriented programming. I love to solving questions on various coding platforms.

                                 My interest also lies in web development. I like to build things. I am familiar with javascript and its frameworks like React.js and Node.js. I have worked on a couple of projects on React.js and currently working on one using Node.js. Apart from this, I also have good knowledge of various ML and DL algorithms , have worked on many classification, regression, EDA, NLP projects
                                I also have intrest in Web Security.
                           </p>
                   </div>
                   </div>
                   <div className="btn-proj">
                   
                <Link smooth to="/#projects" className='btnMobile'>
                <button className='btnss' >
                    Projects
                </button>
        </Link>

                   </div>
        </div>
        </>
    )
}

export default Intro
