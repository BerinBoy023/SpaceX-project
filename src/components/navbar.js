import React from 'react'
import logo from '../assets/spacex-logo.png'
import ReloadIcon from '../assets/icon/refresh.png'
import {useGlobalContext} from '../context'

function Navbar() {
    const {reloadData} = useGlobalContext();
    return (
        <nav className='navbar'>
            <div className='nav-center'>
              
                <figure>
                <img src={logo} alt="logo" className='spacex-logo'/>

                    <figcaption>LAUNCHES</figcaption>
                </figure>
                <button className='reload-btn' onClick={reloadData}>Reload Data <img src={ReloadIcon} alt="reload"/> </button>
            </div>
        </nav>
    )
}

export default Navbar
