import React from 'react'
import Styles from './Navbar.module.css';
import IconsNavbar from '../IconsNavbar'

let Navbar = () => {
    
    return (
        <div>
            <div className={Styles.container_Navbar}>
                <IconsNavbar />
            </div>

        </div>
    );
}


export default Navbar;