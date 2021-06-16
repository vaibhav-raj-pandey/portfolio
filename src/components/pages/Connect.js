import { Button } from '@material-ui/core';
import React from 'react'
import "../../App.css"
import "./Connect.css"

function Connect() {
    return (
        <div className="connect">
        <div className="gh">
        <h2>Github</h2>
        <a href="https://github.com/vaibhav-raj-pandey">
            <Button>
                Github <i class="fa fa-github" aria-hidden="true"></i>
            </Button>
            </a>
            </div>
<div className ="tw">
            <h2>Twitter</h2>
        <a href="https://twitter.com/vaibhavrajpande">
            <Button>
                Twitter <i class="fa fa-twitter" aria-hidden="true"></i>
            </Button>
            </a>
            </div>
            <div className ="ln">
            <h2>Linkedin</h2>
        <a href="https://www.linkedin.com/in/vaibhav-raj-pandey-1827801a4/">
            <Button>
                Linkedin <i class="fa fa-linkedin" aria-hidden="true"></i>
            </Button>
            </a>
            </div>

        </div>
        
    )
}

export default Connect
