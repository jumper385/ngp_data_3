import React from 'react'

const Home = props => {
    return(
        <div>

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

        </div>
    )
}

export default Home