Navbar = React.createClass({
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a href={'/'} className="brand-logo orange-text darken-4">
            Filus<span className="lime-text accent-4">na</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href='/Login' className="grey-text text-darken-3">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
})
