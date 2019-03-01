import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './component/Nav/Nav'
import {withRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav location={this.props.location} />
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
