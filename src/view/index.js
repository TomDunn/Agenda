/*  TODO
    this should not be the class which instantiates the notes view.
    that should be handled by a route, the index... should just be an index
*/

window.Agenda.View.Index = Backbone.View.extend({
    initialize: function(options) {
        this.template   = _.template($('#template-agenda-index').html());

        this.notesView  = new Agenda.View.Notes({
            collection:     window.notes
        });
    },

    events: {
        "submit form": "addNote"
    },

    addNote: function(e) {
        e.preventDefault();

        var name        = this.$('.note-name-input').val();
        var description = this.$('.note-description-input').val();

        if (name == '' || description == '') { return; }

        var date = new Date();
        var createTime = date.getTime();

        window.notes.create({
            name:           name,
            description:    description,
            createTime:     createTime,
            lastEditTime:   createTime
        });

        this.$('.note-name-input').val('');
        this.$('.note-description-input').val('');
    },

    render: function() {
        this.$el.html(this.template());
        this.$('#content').append(this.notesView.render().$el);

        return this;
    }
});
