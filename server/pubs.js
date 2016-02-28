Meteor.publish('user', function(deviceId) {
  return Users.findOne({deviceId: deviceId});
});

Meteor.publish('users', function() {
  return Users.find();
});
