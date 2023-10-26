import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';

import HackerEffect from '../../misc/functions/HackerEffect';
import SlideAnimation from '../../misc/functions/SlideAnimation';

import './NavBar.css'

interface NavBarProps {
    colorPalette: any,
    setIndexPalette: any
}

const NavBar: React.FC<NavBarProps> = ({ colorPalette, setIndexPalette }) => {
    const { animationControls } = SlideAnimation(useAnimation);
    
    useEffect(() => { const hackerEffect = HackerEffect('hacker', 7) }, [])    
    return (
        <div style={{ backgroundColor: colorPalette.background, color: colorPalette.text,
                      borderColor: colorPalette.text }} className="main-container">

            <div style={{ borderColor: colorPalette.text }} className="container">
                <div className="link-container">

                    <Link className="link" to="/" >
                        <motion.div
                            animate={ animationControls }
                            className="bg-reveal"/>
                        <p id="hacker" data-value="ABOUT">ABOUT</p> 
                    </Link>

                    <Link className="link" to="/" >
                        <motion.div className="bg-reveal"/>
                        <p id="hacker" data-value="WORK">WORK</p> 
                    </Link>

                    <Link className="link" to="/" >
                        <motion.div className="bg-reveal"/>
                        <p id="hacker" data-value="CONTACT">CONTACT</p> 
                    </Link>

                </div>
                <div className="w-2/3"></div>
            </div>
        </div>
    )
}

export default NavBar
