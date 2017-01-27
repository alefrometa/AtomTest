var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return (<div className="container">
      <h1>Hello There!</h1>
      <h3>Well damn this continous deployment thing kind of works</h3>
      <h2>Thus I am way stronger</h2>
      <button className="btn btn-default" onClick={this.scream}>Click Me!</button>
    </div>
    );
  }
});

var app = document.getElementById('app');
ReactDOM.render(<Button />, app);
