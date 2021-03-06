$( document ).ready( function () {
	var SAMPLE_USER = {
		'test'  : 'password',
		'test2' : 'password2'
	};
	var has_error = window.location.search.substring( 1 ) === 'error';

	has_error && show_error();
	$( '.js_form-signin' ).submit( process_form );

	function show_error () {
		$( '.js_errormsg' ).text( 'Invalid username or password' );
		$( '.js_erroralert' ).removeClass( 'hidden' )
	}

	function process_form ( e ) {
		e.preventDefault();
		var username = $( '.js_user' ).val();
		var password = $( '.js_password' ).val();
		var url_path = '/?error';

		if ( SAMPLE_USER[ username ] && SAMPLE_USER[ username ] === password ) {
			url_path = '/success';
		}

		window.location = url_path;
	}
} );