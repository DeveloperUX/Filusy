const { Link, State, RouteHandler } = ReactRouter;

App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    var data = {};
    var sub = Meteor.subscribe('users');

    if( sub.ready() ) {
      // Check if this user exists
      var existing = Users.findOne({deviceId: Session.get("DeviceID")});
      // If so get their name
      if( existing ) {
        Session.set("GivenName", existing.name);
      }
      // If not add them
      else {
        var newUser = {
          deviceId: Session.get("DeviceID"),
          name: chance.first({gender: "male"})
        };
        Meteor.call('addUser', newUser);
        // Users.insert(newUser);
        Session.set("GivenName", newUser.name);
      }
    }

    return data;
  },

  render() {
    return (
      <div className="page-wrapper">
        <Navbar></Navbar>
          {this.props.children}
      </div>
    );
  }
});
