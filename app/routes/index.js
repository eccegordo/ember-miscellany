export default Ember.Route.extend({
  model: function() {
    var links = [
        'show-the-box',
        'color-swatches',
        'component-test',
        'helper-test'
        ];

    return links;
  }
});
