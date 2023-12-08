import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './components/Home/index'
import About from './components/About'
import ToursEvents from './components/ToursEvents'
import OilLoversClub from './components/OilLoversClub'
import Shop from './components/Shop'
import Blog from './components/Blog'
import Contact from './components/Contact'

export {Home}

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/tours-events" component={ToursEvents}></Route>
        <Route path="/oil-lovers-club" component={OilLoversClub}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </main>
  );
}

export default App;
