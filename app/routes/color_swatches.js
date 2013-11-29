import WebColor from 'appkit/models/web_color';

export default Ember.Route.extend({
  model: function() {
    var colorModel = WebColor.create();
    return colorModel.get('allcolors');
  }
});


