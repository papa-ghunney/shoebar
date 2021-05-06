import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import SingleProductPage from './pages/SingleProductPage'


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={Shop} />
                <Route path="/shop/:productId" component={SingleProductPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
