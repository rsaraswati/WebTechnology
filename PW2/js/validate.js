$(document).ready(function() {
	// Insert span tag
	$("#username").after("<span>Please enter only letters or numbers</span>");
	$("#password").after("<span>The password should be 8 characters minimum</span>");
	$("#email").after("<span>Should be a valid email</span>");
	$("span").hide();

    // Get Focus of the input and display that the field is being currently edited
	$('#username').focus('input', function() {
	$( this ).next( "span" ).text("The username must contain only letters or numbers").show().addClass("info");
});
  	$('#password').focus('input', function() {
	$( this ).next( "span" ).text("The password should be 8 characters minimum").show().addClass("info");
});
    $('#email').focus('input', function() {
	$( this ).next( "span" ).text("Should be a valid email").show().addClass("info");
});

    // All operations of the Username field
    $('#username').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");   // Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var username_name=input.val();
	var str=/^[a-zA-Z0-9]+$/;   // Checking if username has only characters or numbers
	if(username_name.match(str)){
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	else if(!username_name){
		    $( this ).next( "span" ).hide();  // If username is blank, only "The username must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error");  //If username is invalid, error should be displayed
		
	}
});


    $('#password').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");// Removes ok class from span
    $( this ).next( "span" ).removeClass("error");// Removes error class from span
	var input=$(this);
	var user_pass=input.val();
	if(user_pass.length > 7){  
		$( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok"); //If password is greatr than 7 characters then , ok class should be assigned
		
	}
	else if(!user_pass){
		    $( this ).next( "span" ).hide(); // If password is blank, only "The password should be 8 characters minimum" should be displayed
	
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error");  //If password is invalid, error should be displayed
	}
});


    $('#email').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");// Removes ok class from span
    $( this ).next( "span" ).removeClass("error");// Removes error class from span
	var input=$(this);
	var user_email=input.val();
	if (validateEmail(user_email)){
        $( this ).next( "span" ).text("ok");
		$( this ).next( "span" ).show().addClass("ok");
	}
            
	else if(!user_email){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text("Error!");
		$( this ).next( "span" ).show().addClass("error");
	}
function validateEmail(user_email) {
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (filter.test(user_email)) {
return true;
}
else {
return false;
}
}
});
var validator = $( "#signup" ).validate();  // Validating the form
validator.form();   
});
