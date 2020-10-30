import React, {Component} from 'react';
import completeLogo from '../images/Health-Track-Logo.svg'
import '../styles/Header.css'

class Header extends Component{
    render(){
        return(
            <div id='header'>
                <a href='andrelara2002.github.io'><img src={completeLogo} alt='Logo' ></img> </a>
            </div>
        )
    }
}

export default Header;