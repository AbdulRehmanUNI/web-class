import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import store from './store/store'
import { Provider } from 'react-redux'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>

       <Header/>

    </Provider>          
    </>
  )
}

export default App
