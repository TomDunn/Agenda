/* TODO: pull out some re-usable junk for the CARTILAGE project */

Agenda.View.NoteSelectedContext = Backbone.View.extend({

    initialize: function(options) {
        this.template   = _.template($('#template-note-selected-context').html());

        this.collection = options.collection    || (new Backbone.Collection());
        this.actions    = options.actions       || {};

        this.collection.on('add remove', this.update, this);
    },

    events: {
        'click': 'click'
    },

    update: function() {
        if (this.collection.length == 0) {
            this.trigger('no-selections', 'no-selections');
            return;
        }

        this.trigger('selections', 'selections');
    },

    click: function(e) {
        e.preventDefault();

        var length = e.target.classList.length;
        var action = e.target.classList[ length - 1];

        this.trigger(action, action, this.collection);
    },

    getCollection: function() {
        return this.collection;
    },

    render: function() {
        this.$el.html( this.template({collection: this.collection}));
        return this;
    },

    show: function()  {
        this.$el.show();
    },

    hide: function() {
        this.$el.hide();
    }

});
