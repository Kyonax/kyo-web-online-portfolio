import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import HackerEffect from '../../misc/functions/HackerEffect';

import './NavBar.css'

interface NavBarProps {
    colorPalette: any,
    setIndexPalette: any
}

const NavBar: React.FC<NavBarProps> = ({ colorPalette, setIndexPalette }) => {
    useEffect(() => { const hackerEffect = HackerEffect('hacker', 7) }, [])
    
    return (
        <div style={{ backgroundColor: colorPalette.background, color: colorPalette.text,
                      borderColor: colorPalette.text }} className="main-container">

            <div style={{ borderColor: colorPalette.text }} className="container">
                <div className="link-container">
                    <Link className="link group" to="/" >
                        <div className="bg-reveal"/>
                        <p className="link-ghost" id="hacker" data-value="ABOUT">ABOUT</p> 
                        <p id="hacker" data-value="ABOUT">ABOUT</p> 
                    </Link>
                    <Link className="link group" to="/" >
                        <div className="bg-reveal"/>
                        <p className="link-ghost" id="hacker" data-value="WORK">WORK</p> 
                        <p id="hacker" data-value="WORK">WORK</p> 
                    </Link>
                    <Link className="link group" to="/" >
                        <div className="bg-reveal"/>
                        <p className="link-ghost" id="hacker" data-value="CONTACT">CONTACT</p> 
                        <p id="hacker" data-value="CONTACT">CONTACT</p> 
                    </Link>
                </div>
                <div className="w-2/3"></div>
            </div>
        </div>
    )
}

export default NavBar
