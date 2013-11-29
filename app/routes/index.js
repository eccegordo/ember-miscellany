export default Ember.Route.extend({
  model: function() {
    var links = [
        'show-the-box',
        'component-test',
        'helper-test'
        ];

    return links;
  }
});
