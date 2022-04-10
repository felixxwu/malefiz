import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './db/firebase'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)
