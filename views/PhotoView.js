var PhotoView = Backbone.View.extend({

  tagName: 'img',

  template: _.template('<img src=(<%= imageSrc %>)>'),

  initialize: function() {
    this.render();
  },

  setPhoto: function(photo) {
    // photo is TableEntryModel
    this.model = photo;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model.get('src')); // src???
  }

});