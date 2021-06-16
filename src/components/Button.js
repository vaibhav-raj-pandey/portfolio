import React from 'react'
import './Button.css';

import { HashLink as Link } from 'react-router-hash-link';

const STYLES= ['btn--primary','btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children ,
                            type ,
                             onClick ,
                              buttonStyle, 
                              buttonSize})=>{
    const checkButtonStyles= STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <Link smooth to="/#intro" className='btnMobile'>
            <button className={`btn${checkButtonStyles} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}