
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
      <div className="row">
        <div className="column column-60 large-text">How much do you have?</div>
        <input type="text" className="column column-20 large-input-text"/>
        <span className="column column-10 large-text">USD</span>
      </div>
    );
  }
});

Target = React.createClass({

  render() {
    return (
      <div className="big-text">
        <a className="large-link" href="/Map">Buying?</a>
        <span className="vertical-seperator"></span>
        <a className="large-link" href="/Amount">Selling?</a>
      </div>
    );
  }
});
