'use strict';


requirejs.config( {
    paths: {

        jquery: '../components/jquery/dist/jquery.min'
    }
} );


require( [ 'jquery' ], function ( $ ) {

    var app = {
        initialize: function () {
            console.log( $ );
        }
    };

    app.initialize();

} );
