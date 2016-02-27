const { Link, State, RouteHandler } = ReactRouter;

App = React.createClass({

  render() {
    return (
      <div className="page-wrapper">
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
});
