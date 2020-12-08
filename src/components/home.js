import React from 'react'
import LaunchImg from '../assets/img/launch-home.png'
import LaunchList from './launchList'
function Home() {
    return (
        <>
        <div className='launch-container'>
            <div className='img-container'>
                <img src={LaunchImg} alt="launch"/>
           
            </div>

            <div className='launch-list-container'>
                <LaunchList/>
            </div>
        </div>
        </>
    )
}

export default Home
