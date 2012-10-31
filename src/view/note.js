Agenda.View.Note = Backbone.View.extend({

    tagName: 'li',
    className: 'note',

    events: {
        'click .toolbar .remove': 'remove',
        'change .toolbar .color-dropdown': 'setColor',
        'change .select': 'updateSelected'
    },

    initialize: function(options) {
        this.template = _.template($('#template-note').html());
        this.selectedCollection = options.selectedCollection;

        this.model.on('removed', this.remove, this);
        this.model.on('change:color', this.setColor, this);
        this.setColor();
    },

    updateSelected: function(e) {
        console.log(e);
        if (e.target.checked) {
            this.selectedCollection.add(this.model);
            return;
        }

        this.selectedCollection.remove(this.model);
    },

    setColor: function() {
        var color       = this.model.get('color');
        var colorClass  = color ? color : 'yellow';

        this.$el.addClass(colorClass);
    },

    click: function(e) {
        e.preventDefault();
        console.log('i');
    },

    render: function() {
        this.$el.html(this.template({model: this.model}));
        return this;
    }
});
