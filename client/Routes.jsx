const {Router, Route, IndexRoute, Link, history} = ReactRouter;

// A history object must be created to maintain the history for our router
const browserHistory = history.createHistory();


function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

Meteor.startup(function() {

  console.log("Starting...");

  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let GlobalState = Redux.createStore(counter);

  // You can subscribe to the updates manually, or use bindings to your view layer.
  GlobalState.subscribe(function() {
    console.log(GlobalState.getState());
  });

  // The only way to mutate the internal state is to dispatch an action.
  // The actions can be serialized, logged or stored and later replayed.
  GlobalState.dispatch({ type: 'INCREMENT' });
  // 1
  GlobalState.dispatch({ type: 'INCREMENT' });
  // 2
  GlobalState.dispatch({ type: 'DECREMENT' });
  // 1

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Intention} GlobalState={GlobalState} />
        <Route path="login" component={Login} />
        <Route path="amount" component={Amount} />
        <Route path="target" component={Target} />
        <Route path="bids" component={Bids} />
        <Route path="listings" component={Listings} />
      </Route>
    </Router>
  ), document.getElementById("app"));
});
