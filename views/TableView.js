var TableView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    // collection is TableCollection
    // model is TableEntryModel
    this.$el.html('<th>Images</th>').append(
      this.collection.map(function(tableEntry) {
        return new TableEntryView({model: tableEntry}).render();
      })
    );
  }

});