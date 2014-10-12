var guestListRef = new Firebase("https://wedding-rsvp.firebaseio.com/guest-list");
 
$("#submit-btn").bind("click", function() {

	mixpanel.track(
    "RSVP",
    { "RSVP": $.trim($("#name").val()) }
	);

	guestListRef.push({ 
		name: $.trim($("#name").val()), 
		guests: $.trim($("#guests").val()), 
		location: $.trim($("#location").val()),
		email: $.trim($("#email").val()), 
		address: $.trim($("#address").val())});
});
 