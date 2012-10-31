window.Agenda.Router = Backbone.Router.extend({
    initialize: function(options) {
        this.el = options.el;
        console.log('router init');
    },

    routes: {
        "": "index",
        "note/edit/:noteId": 'editNote'
    },

    index: function() {
        console.log('index');
        var index  = new Agenda.View.Index();
        this.el.html(index.render().el);
    },

    editNote: function(noteId) {
        console.log('edit');
        var edit = new Agenda.View.NoteEdit({
            model: notes.get(noteId)
        });

        this.el.html(edit.render().el);
    }
});
