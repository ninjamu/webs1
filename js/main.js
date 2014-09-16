document.getElementById("date").innerHTML = Date();
function myfunction () {
	var name = document.form["forms1"]["name"].value;
	if(name="")
	{
		alert("Name not null!");
		return false;
	}
	var Email = document.form["forms1"]["email"].value;
	var acong = Email.indexOf("@");
	var daucham=Email.lastIndexOf(".");
	if(Email="")
	{
		alert("Email not null");
		return false;
	}
	else if ((acong<1) || (daucham<acong+2) || (daucham+2>email.length)) {
		alert("Email Not validate");
		return false;
	};
	var subject = document.form["forms1"]["subject"].value;
	if(subject="")
	{
		alert("subject not null")
		return false;
	}
}