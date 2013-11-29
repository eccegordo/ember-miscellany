var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('show-the-box');
  this.route('color-swatches');
  this.route('component-test');
  this.route('helper-test');
});

export default Router;
