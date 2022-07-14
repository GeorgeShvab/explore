import React from 'react'

import './styles/custom.css'
import './styles/reset.css'
import './styles/bootstrap.min.css'

import Header from './components/Header'
import Images from './components/Images'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Images />
            </div>
        )
    }
}

export default App
