export default Ember.Component.extend({
  classNames: ['the-box'],
  attributeBindings: ['style'],
  bw: 100,
  bh: 100,
  bcolor: 'red',

  style: function(){
    var width = 0;
    var height = 0;
    width = this.get('bw');
    height = this.get('bh');
    return 'border: 1px solid; margin: 10px; display: block;' + 
    'width: ' + width + 'px;' + 
    'height: ' + height + 'px;' + 
    'background-color: ' + this.get('bcolor') + ';' +
    'color: ' + this.get('bcolor') + ';';
  }.property('bcolor', 'bw', 'bh')

});
