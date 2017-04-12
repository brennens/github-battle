var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/battle">Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/popular">Popular</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
