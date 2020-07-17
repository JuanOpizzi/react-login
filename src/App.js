import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainers from './containers/CustomersContainer';
import { Component } from 'react';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>;

  renderCustomContainer = () => <h1>Customers Container</h1>

  renderCustomListContainer = () => <h1>Customers List Container</h1>

//* Utilizo `render` y no `component` en <Route> porque me permite evitar que por ejemplo,
//* CustomerContainer conozca la estructura de la URL, y asi poderle pasar los parametros
//* de la URL sin que el container conozca internamente el formato de la misma.
//* Ademas en este punto conocemos el formato de la URL, mirar `path=...`
//* Los parametros de la URL estan dentro de props.match.params
//* Con  `{...props}` le paso al container todos los props (histroy, location, match)
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainers} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomNewContainer} />
            <Route path="/customers/:dni"
                  render={props => <CustomerContainer dni={props.match.params.dni}/> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
