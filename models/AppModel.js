var AppModel = Backbone.Model.extend({

  initialize: function(parameters) {

    // set 'currentPhoto' attribute to be the first photo ???
    this.set('currentPhoto', new TableEntryModel());

    // parameters is {table: new TableCollection(tableData)}
    // setPhoto is triggered by TableEntryModel
    // photo parameter is 'this' from TableEntryModel, 'this' is the clicked photo
    parameters.table.on('setPhoto', function(photo) {
      this.set('currentPhoto', photo);
    }, this);
  }

});
