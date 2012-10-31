window.Agenda.Collection.Assignments = Backbone.Collection.extend({
    model:          Agenda.Model.Assignment,
    localStorage:   new Store("agenda-assignments")
});
