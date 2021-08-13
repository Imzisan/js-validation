function isValid(){
	var falg=true;
	
	var username=document.getElementById("username");
	var password=document.getElementById("passwordErr");
	var username =document.forms["registrationForm"]["username"].value;
	var pasasword =document.forms["registrationForm"]["password"].value;
	username.innerHTML="";
	password.innerHTML="";
	if(username===""){
		flag=false;
		usernameErr.innerHTML="Please fill up the username";
		
	}
	if(password===""){
		flag=false;
		passwordErr.innerHTML="Please fill up the password";
		
	}
	return flag;




}