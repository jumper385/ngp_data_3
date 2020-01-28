import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

const Home = props => {

    const getData = async () => {
        const instructionPath = require('../instructions.md')
        const fetchedData = await (await fetch(instructionPath)).text()
        setState({instructions:fetchedData})
    }

    let [state, setState] = useState({instructions:''})

    getData()

    return(
        <div style={{padding:'0 12pt'}}>

            <ReactMarkdown source={state.instructions}/>

        </div>
    )
}

export default Home