export default Ember.Route.extend({
  model: function() {
    //return [{color: 'red', height: 100, width: 50}, {color: 'blue', height: 50, width: 90}];
    return ['red', '#999', 'blue', 'green', 'purple'];
  }
});
