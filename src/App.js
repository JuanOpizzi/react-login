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


  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainers} />
          <Switch>
            <Route path="/customers/new" component={this.renderCustomNewContainer} />
            <Route path="/customers/:dni" component={CustomerContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
