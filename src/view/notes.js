var NotesView = BackboneLib.View.getCollectionView('div', 'note-container', Agenda.View.Note, '#template-notes', '.notes');

Agenda.View.Notes = NotesView.extend({
    initialize: function(options) {
        this.selectedCntxtView = new Agenda.View.NoteSelectedContext({
            id: 'note-selected-context-footer'
        });

        console.log(this.selectedCntxtView);

        this.collection.on('reset', this.render, this);

        this.selectedCntxtView.on('delete tag edit change-color',    this.handleCntxtAction, this);
        this.selectedCntxtView.on('no-selections',      this.hideCntxtMenu,     this);
        this.selectedCntxtView.on('selections',         this.showCntxtMenu,     this);

        NotesView.prototype.initialize.call(this,options);
    },

    handleCntxtAction: function(eventName,collection) {
        console.log(eventName);

        var handler = "cntxt" + eventName.charAt(0).toUpperCase() + eventName.slice(1);

        if (this[handler]) {
            this[handler](collection);
            console.log(handler);
        }
    },

    cntxtDelete: function(collection) {
        var models = collection.models.slice(0);
        _.each(models, function(model) {
            collection.remove(model);
            this.collection.localStorage.destroy(model);
            this.collection.remove(model);
            model.trigger('removed');
        }, this);
    },

    showCntxtMenu: function(eventName) {
        this.selectedCntxtView.show();
    },

    hideCntxtMenu: function(eventName) {
        this.selectedCntxtView.hide();
    },

    render: function() {
        NotesView.prototype.render.call(this);
        this.$el.append(this.selectedCntxtView.render().$el);
        return this;
    },

    getNewModelView: function(mView, options) {
        options.selectedCollection = this.selectedCntxtView.getCollection();
        return new mView(options);
    }

});
