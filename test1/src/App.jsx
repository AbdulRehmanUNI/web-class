import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store = {store}>
      <Header/>

    </Provider>

    </>
  )
}

export default App
