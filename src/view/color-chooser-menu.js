Agenda.View.ColorChooserMenu = BackboneLib.View.Menu.extend({

    id: 'note-color-chooser-context-menu',

    initialize: function(options) {
        this.template = _.template($('#template-color-chooser-menu').html());
        BackboneLib.View.Menu.prototype.initialize.call(this,options);
    }

});
