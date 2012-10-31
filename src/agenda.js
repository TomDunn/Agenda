var Agenda          = {};
Agenda.View         = {};
Agenda.Model        = {};
Agenda.Collection   = {};
Agenda.html         = {};

Agenda.init = function(container) {
    /* ensure the container is jQuery wrapped */
    container = $(container);
    
    /* set up some data */
    window.assignments  = new Agenda.Collection.Assignments();
    window.assignments.fetch();

    window.notes = new Agenda.Collection.Notes();
    window.notes.fetch();

    var router          = new Agenda.Router({el:container});
    window.router       = router;
    Backbone.history.start();
};

window.Agenda = Agenda;
