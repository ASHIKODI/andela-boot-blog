$(document).ready(function(){
		
	$('#post_button').click(function(){
		var user = ["emeka","bernard","stephen","kessiena","lois","susan","toyosi",+
		"chitech","jibola","kingsley","ashikodi","godson","taiwo"];
		var password = ["emeka1","bernard4","stephen14","kessiena1","lois19",+
		"susan14","toyosi9","chitech8","jibola1","kingsley25","ashikodi9","godson14","taiwo15"];
		var now = new Date();
		var newBlogchk = $('#txt_blog').val();
		var userNamechk = $('#username_txtbx').val();
		var userName = userNamechk.replace(/</g, "000");
		var newBlog = newBlogchk.replace(/</g, "000");
		var passcd = $('#password_txtbx').val();
		if(userName===""){
			alert("input username");
			document.reload();
			}
		else if (passcd==="") {
			alert("Confirm Password");
			document.reload();
		}
		else if (newBlog==="") {
			alert("Write a post");
			document.reload();
		}
		if(user.indexOf(userName)===-1){
			alert("Invalid Username");
			document.reload();
		}
		else {
			//var pass = prompt("confirm password");
			if(passcd===password[user.indexOf(userName)]){
				$('#content').prepend("<div class = 'user_blog'><span class = 'username_span'>"+
				userName+"</span> says: <br>"+newBlog+"</br><br> @"+now+
				"</br><br><div class = 'likediv'>"+
				"<img class = 'icons' src = 'http://cdn.flaticon.com/png/256/20664.png' />"+
				"<div></br></div>");
				var blogposts = $("#content").html();
				localStorage.setItem('savedpost', blogposts);
			}
			else {
				alert("wrong password");
				document.reload();
			}
		}
				
		$('#txt_blog').val('');
		$('#password_txtbx').val('');
		$('#username_txtbx').val('');
	});
	
	$('#content').html(localStorage.getItem('savedpost'));

	$(document).on('click', '.deleteicon', function(){
		var check = $('#content').html();
		if(check==""){
			alert("no post to delete");
		}
		else{
			var r = confirm("You're about to delete all post...");
			if(r===true){
				$('.user_blog').remove();
				var blogposts = $("#content").html();
        		localStorage.setItem('savedpost', blogposts);
        		document.reload();
			}
		}
		
       $('#content').html(localStorage.getItem('savedpost'));
    });

	$(document).on('click', '.likediv', function(){
    	$(this).html("<div class = 'spanlike'>1 Like</div>");
        var blogposts = $("#content").html();
        localStorage.setItem('savedpost', blogposts);
        document.reload();
    });
    $(document).on('click', '.spanlike', function(){
    	$(this).html("<img class = 'icons' src = 'http://cdn.flaticon.com/png/256/20664.png' />");
        var blogposts = $("#content").html();
        localStorage.setItem('savedpost', blogposts);
    });
});
