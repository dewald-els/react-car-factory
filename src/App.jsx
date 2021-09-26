import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import CarFactory from './components/CarFactory/CarFactory'
import CarFactoryOuput from './components/CarFactory/CarFactoryOuput/CarFactoryOuput'

function App() {

  // Car Factory
  // Choose type: Hatchback, Sedan, Station Wagon, SUV
  // Choose colour: Some colours
  // Choose Engine Size: 1.6, 1.8, 2.0 and 4.0 or 4.7 (SUV Only)
  // Choose Rims: Standard or Fancy
  // Choose seat material: Leather or Pleather
  // Build Car


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/factory" exact component={ CarFactory } />
          <Route path="/factory/complete" component={ CarFactoryOuput } />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App
