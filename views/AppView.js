var AppView = Backbone.View.extend({

  initialize: function(parameters) {
    // this.model is AppModel
    this.photoView = new PhotoView({model: this.model.get('currentPhoto')}); // ???
    this.tableView = new TableView({collection: this.model.get('table')});
    
    this.model.on('change:currentPhoto', function(model) {
      this.photoView.setPhoto(model.get('currentPhoto')); // ???
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.photoView.$el,
      this.tableView.$el
    ]);
  }

});