console.log("Hello world!");

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  render () {
    return (
      <div className="container">
        <h1>It Works! Ehehehehehe?</h1>
        <p>And this is how you template out a React app</p>
        <p className="mom">Yo mama joke here</p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);


/*
var React = require('react');
var ReactDOM = require('react-dom');

//Routing
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

let Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!');
  },
  render: function () {
    return (
      <div className="container">
      <button type="button" className="btn btn-default" onClick={this.scream}><a href='#'>Scream!</a></button>
      </div>
    );
  }
});

ReactDOM.render(<Button />, document.getElementById('app') );
*/
