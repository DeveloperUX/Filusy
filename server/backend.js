
Meteor.startup(function () {

  // Since we can't use NPM modules on the client side
  // we'll reveal the objects through Meteor methods
  Meteor.methods({
    'getRandomName': function() {
      var names = Meteor.npmRequire('arabic-personal-names');
      console.log(names.male[Math.random() * 100]);
      return names.male[Math.random() * 100];
    },
    'addUser': function(user) {
      Users.insert(user);
    }
  });

});
