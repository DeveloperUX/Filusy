
const { Link, State, RouteHandler, History } = ReactRouter;
const { createStore } = Redux;

Intention = React.createClass({

  mixins: [History],

  /* Coming in Version 2.0 */
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },


  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    GlobalState: React.PropTypes.object
  },

  componentDidMount() {
    console.log("STORE: ", this.props.route.GlobalState);
  },

  render() {
    return (
      <div className="centered-text container">
        <a className="large-link" href="/listings">
          <h1><span className="blue-text text-darken-2">Buy</span> dollars</h1>
        </a>
        <div className="or-spacer">
          <div className="mask"></div>
          <span><i>or</i></span>
        </div>
        <a className="large-link" href="/amount">
          <h1><span className="orange-text text-darken-2">Sell</span> dollars</h1>
        </a>
      </div>
    );
  }
});

Amount = React.createClass({

  setQuantity() {
    event.preventDefault();

    let quantity = ReactDOM.findDOMNode(this.refs.quantity).value.trim();
    Reserves.insert({id: window.curUser.deviceId, amount: quantity});

    // this.context.router.push('/target'); /* Coming in Version 2.0 */
    this.props.history.pushState(null, '/target');  // PushState takes the path not Component name
  },

  render() {
    return (
      <form className="app-box container" onSubmit={this.setQuantity}>
        <div className="row large-text">
          <div className="col s12 m12 l7 ">How much would you like to sell?</div>
          <input type="number" pattern="\d*" oninput="this.value=this.value.replace(/[^0-9]/g,'');" ref="quantity" className="col s8 m8 l3 large-input-text"/>
          <span className="col s4 m4 l2">USD</span>
        </div>
        <button className="waves-effect waves-teal btn-flat" type="submit">Next</button>
      </form>
    );
  }
});

Target = React.createClass({

  setPrice() {
    event.preventDefault();

    let curSale = Reserves.findOne({id: window.curUser.deviceId});

    let price = this.refs.price.value.trim();
    curSale["price"] = price;

    Reserves.update(curSale._id, curSale);

    this.props.history.pushState(null, '/bids');
  },

  render() {
    return (
      <form className="app-box container" onSubmit={this.setPrice}>
        <div className="row large-text">
          <div className="col s12 m12 l12">What is the <u>minimum</u> you will accept per Dollar?</div>
          <input type="text" ref="price" pattern="^\d+(?:\.\d{0,2})$" className="col s8 m8 l6 large-input-text"/>
          <span className="col s4 m2 l4">EGP</span>
        </div>
        <button className="waves-effect waves-teal btn-flat" type="submit">Next</button>
      </form>
    );
  }
});
