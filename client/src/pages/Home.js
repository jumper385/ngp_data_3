import React, {useState, useEffect} from 'react'
import {VictoryChart, VictoryBar, VictoryLine} from 'victory'
import { socket } from '../serverSocket'

const Home = props => {

    let [state, setState] = useState({getGraph:true})

    if(state.getGraph){
        socket.emit('client/grab/symptoms')
        setState({getGraph:false})
    }

    socket.on('res@client/grab/symptoms', data => {
        
        let cleaned = data.reduce((acc, object) => {
            let timestamp = new Date(object.timestamp)
            let seconds = timestamp.getSeconds()
            let y = object.symptom

            acc[seconds] = acc[seconds] ? acc[seconds] + 1 : 1

            return acc

        }, {})

        if(cleaned){
            
            setState({data:Object.keys(cleaned).reduce((acc, obj) => {
                return [...acc, {x:obj, y:cleaned[obj]}]
            }, [])})

        }

    })

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

            <div>
                <h1>Data Return</h1>
                <p>Hello World</p>
                <VictoryChart>
                    <VictoryLine data={state.data || null}/>
                </VictoryChart>
            </div>

        </div>
    )
}

export default Home