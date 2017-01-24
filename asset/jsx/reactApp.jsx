console.log("Hello world!!");

var React = require('react');
var ReactDOM = require('react-dom');

let Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!');
  },
  render: function () {
    return (
      <div class="container">
      <button type="button" className="btn btn-default" onClick={this.scream}><a href='#' class="btn btn-default">Scream!</a></button>
      </div>
    );
  }
});

ReactDOM.render(<Button />, document.getElementById('app') );
