export default Ember.Component.extend({
  color: 'red',

  fillStyle: function() {
    return 'background-color:'+this.get('color');
  }.property('color')



});
