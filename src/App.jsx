import { useState } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import MainPageContent from './components/Main-page/MainPageContent'
import OrderPageContent from './components/order-page/order-page'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Switch>
        <Route path="/" exact>
        <MainPageContent/>
       </Route>
        <Route path="/order">
        <OrderPageContent/>
          </Route>
        </Switch>

      
    </>
  )
}

export default App
