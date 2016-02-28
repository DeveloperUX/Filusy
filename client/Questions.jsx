
const { Link, State, RouteHandler } = ReactRouter;

Intention = React.createClass({

  render() {
    return (
      <div className="centered-text">
        <a className="large-link" href="/map">
          <h1><u>buy</u> dollars</h1>
        </a>
        <div className="or-spacer">
          <div className="mask"></div>
          <span><i>or</i></span>
        </div>
        <a className="large-link" href="/amount">
          <h1><u>sell</u> dollars</h1>
        </a>
      </div>
    );
  }
});

Amount = React.createClass({

  render() {
    return (
      <form className="app-box" action="/target">
        <div className="row large-text">
          <div className="col s12 m12 l7 ">How much would you like to sell?</div>
          <input type="text" className="col s8 m8 l3 large-input-text"/>
          <span className="col s4 m4 l2">USD</span>
        </div>
        <div className="row">
          <div className="column column-20 column-offset-80">
            <a type="submit" href="/target">Next</a>
          </div>
        </div>
      </form>
    );
  }
});

Target = React.createClass({

  render() {
    return (
      <form className="app-box" action="/target">
        <div className="row large-text">
          <div className="col s12 m12 l12">What is the <u>minimum</u> you will accept per Dollar?</div>
          <input type="text" className="col s8 m8 l6 large-input-text"/>
          <span className="col s4 m2 l4">EGP</span>
        </div>
        <div className="row">
          <div className="column column-20 column-offset-80">
            <button className="waves-effect waves-teal btn-flat" type="submit">Next</button>
          </div>
        </div>
      </form>
    );
  }
});
