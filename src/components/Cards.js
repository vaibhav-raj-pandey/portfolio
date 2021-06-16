import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="projects" id="projects">
            <h1 className="head">Check out my projects</h1>
            <div className="cards__container">
                <div className="/connect">
                    
                    <ul className='cards__items'>
                    <Carditem className="be"
                        src='images/img-1.jpg'
                        text='A Profile site, 
                        also made a Face Recognition site, 
                         my favourite Flash Card Web-App'
                        label='Web'
                        path='/connect'
                    />
                    <Carditem
                        src='images/img-9.jpg'
                        text='Implemented various DL and ML algorithms also have 2 kernels , 1 competition in Kaggle '
                        label='ML'
                        path='/connect'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
