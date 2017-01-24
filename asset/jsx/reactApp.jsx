console.log("Hello world!!");

var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!! lulz');
  },
  render: function () {
    return (
      <button type="button" onClick={this.scream}>Scream! </button>
    );
  }
});

ReactDOM.render(<Button />, document.getElementById('app') );
