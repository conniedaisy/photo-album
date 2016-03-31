var TableEntryModel = Backbone.Model.extend({

  // triggered by TableEntryView
  // triggers AppModel
  displayImage: function() {
    this.trigger('setPhoto', this);
  }

});