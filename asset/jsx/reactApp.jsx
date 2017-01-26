var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return (<div className="container">
      <h1>Hello There!</h1>
      <h3>This is justa jest...uh test..jest test</h3>
      <button className="btn btn-default" onClick={this.scream}>Click Me!</button>
    </div>
    );
  }
});

var app = document.getElementById('app');
ReactDOM.render(<Button />, app);
