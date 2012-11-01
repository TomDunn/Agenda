/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    concat: {
        html: {
            src: [
                'index-src.html',
                'templates/index.html',
                'templates/notes.html',
                'templates/note.html',
                'templates/note-edit.html',
                'templates/color-chooser.html',
                'templates/menu-color-chooser.html',
                'templates/note-selected-context.html',
                '<close-html-tag>'
            ],
            dest: 'index.html'
        },
        lib: {
            src: [
                '<start-self-invoke>',
                'lib/backbone-helpers.js',
                'lib/backbone-helpers/views/collection.js',
                'lib/backbone-helpers/views/menu.js',
                '<end-self-invoke>'
            ],
            dest: 'output/lib.js'
        },
        app: {
            src: [
                '<start-self-invoke>',
                'src/agenda.js',
                'src/router.js',
                'src/model/assignment.js',
                'src/collection/assignments.js',
                'src/collection/notes.js',
                'src/view/index.js',
                'src/view/note.js',
                'src/view/note-context-selected.js',
                'src/view/notes.js',
                'src/view/note-edit.js',
                'src/view/color-chooser-menu.js',
                '<end-self-invoke>'
            ],
            dest: 'output/agenda.js'
        }
    },
    uglify: {}
  });

    // Default task.
    grunt.registerTask('default', 'lint concat');
    grunt.registerHelper('start-self-invoke', function() {
        return "(function(){\n";
    });
    grunt.registerHelper('end-self-invoke', function() {
        return "\n})();\n";
    });
    grunt.registerHelper('close-html-tag', function() {
        return "\n</html>\n";
    });

};
