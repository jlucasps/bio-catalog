'use strict';


requirejs.config( {
    paths: {

        jquery: 'vendor/jquery/jquery.min'
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
