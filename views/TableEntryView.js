var TableEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td> <%= imageName %> </td>'),

  events: {
    // model is TableEntryModel
    'click': function() {
      this.model.displayImage();
    }
  },

  render: function() {
    // imageName = this.model.attributes.name;
    // return this.$el.html(this.template({this.model.attributes.name})); // ???
    var entry = this.template({
      imageName: this.model.attributes.name
    }); // ???
    return this.$el.html(entry); // ???
  }

});
