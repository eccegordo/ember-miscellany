export default Ember.Component.extend({
  classNames: ['pretty-color'],
  attributeBindings: ['style'],
  style: function(){
    return 'border: 5px solid; border-color: ' + this.get('name') + ';';
  }.property('name')
});
