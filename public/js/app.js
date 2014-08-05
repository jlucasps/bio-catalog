'use strict';


requirejs.config( {
    paths: {

        jquery: '../components/jquery/dist/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
    },
    shim: {
        'underscore': {
          exports: '_'
        },
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
} );


require( [ 'jquery', 'backbone', 'underscore' ],
function ( $, backbone, _ ) {

    var app = {
        initialize: function () {
            console.log( $, backbone, _ );
        }
    };

    app.initialize();

} );
