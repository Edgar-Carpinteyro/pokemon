import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { SWRConfig } from 'swr'
import App from './App.jsx'
import './App.css'
import './index.css'

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <SWRConfig value={options}>
  //   <Component/>
  // </SWRConfig>
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />      
    </SWRConfig>
  </React.StrictMode>,
)
