window.Agenda.Collection.Notes = Backbone.Collection.extend({
    localStorage:   new Store("agenda-notes"),
    comparator:     function(model) {
        // we want descending order
        return -model.get('lastEditTime');
    }
});
