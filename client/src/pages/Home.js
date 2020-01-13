import React from 'react'

const Home = props => {
    return(
        <div style={{padding:'0 12pt'}}>

            <div>
            <h1>Instructions on how to use this!!!</h1>
            <h2>Navigation Buttons</h2>
            <ul>
                <li><i className='material-icons'>home</i>: Home Page</li>
                <li><i className='material-icons'>mic</i>: Add a Recording</li>
                <li><i className='material-icons'>fastfood</i>: Add Food Log</li>
                <li><i className='material-icons'>chrome_reader_mode</i>: Add Context (e.g poop, energy and sleep)</li>
            </ul>
            </div>

            It's also OKAY to switch between different tabs - even out of the browser!!! State management has you covered 😁😁😁

        </div>
    )
}

export default Home