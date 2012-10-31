Agenda.View.NoteEdit = Backbone.View.extend({
    className: 'note-editor',
    events: {
        'submit form':'updateNote',
        'click .btn .cancel': 'cancelUpdate'
    },

    initialize: function(options) {
        this.template = _.template($('#template-note-edit').html());
    },

    updateNote: function(e) {
        e.preventDefault();

        var date = new Date();
        var time = date.getTime();

        this.model.set({
            name: this.$('#note-edit-name').val(),
            description: $.trim(this.$('#note-edit-description').val()),
            lastEditTime: time
        });

        this.model.save();
        this.model.collection.sort();

        router.navigate("", {trigger:true, replace: false});
    },

    cancelUpdate: function(e) {
        e.preventDefault();
        console.log("cancel");
        router.navigate("", {trigger:true, replace: false});
    },

    render: function() {
        this.$el.html(this.template({model: this.model}));
        return this;
    }
});
