const {Router, Route, IndexRoute, Link, history} = ReactRouter;

// A history object must be created to maintain the history for our router
const browserHistory = history.createHistory();

Meteor.startup(function() {

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Intention} />
        <Route path="login" component={Login} />
        <Route path="amount" component={Amount} />
      </Route>
    </Router>
  ), document.getElementById("app"));
});
