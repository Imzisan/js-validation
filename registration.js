function isValid(){
	var falg=true;
	var fullname=document.getElementById("fullNameErr");
	var username=document.getElementById("username");
	var password=document.getElementById("passwordErr");
	var birthDate=document.getElementById("birthDateErr");
	var gender=document.getElementById("genderErr");
	var email=document.getElementById("emailErr");
	var mobileNo=document.getElementById("mobileNoErr");
	var presentAddress=document.getElementById("presentAddressErr");
	var permanentAddress=document.getElementById("permanentAddressErr");
	var fullname =document.forms["registrationForm"]["FullName"].value;
	var username =document.forms["registrationForm"]["username"].value;
	var pasasword =document.forms["registrationForm"]["password"].value;
	var birthDate =document.forms["registrationForm"]["birthDate"].value;
	var gender =document.forms["registrationForm"]["gender"].value;
	var email =document.forms["registrationForm"]["email"].value;
	var presentAddress =document.forms["registrationForm"]["presentAddress"].value;
	var permanentAddress =document.forms["registrationForm"]["permanentAddress"].value;
	fullNameErr.innerHTML ="";
	username.innerHTML="";
	password.innerHTML="";
	birthDate.innerHTML=""
	gender.innerHTML="";
	email.innerHTML="";
	mobileNo.innerHTML="";
	presentAddress.innerHTML="";
	permanentAddress.innerHTML="";


	if(firstname===""){
		flag=false;
		fullNameErr.innerHTML="Please fill up the name";

	}
	if(username===""){
		flag=false;
		usernameErr.innerHTML="Please fill up the username";
		
	}
	if(password===""){
		flag=false;
		passwordErr.innerHTML="Please fill up the password";
		
	}
	if(birthDate===""){
		flag=false;
		birthDateErr.innerHTML="Please fill up the birth date";
		
	}
	if(gender===""){
		flag=false;
		genderErr.innerHTML="Please fill up the gender";
		
	}
	if(email===""){
		flag=false;
		emailErr.innerHTML="Please fill up the email";
		
	}

	if(mobileNo===""){
		flag=false;
		mobileNoErr.innerHTML="Please fill up the mobile no";
		
	}
	if(presentAddress===""){
		flag=false;
		presentAddressErr.innerHTML="Please fill up the present address";
		
	}
	if(permanentAddress===""){
		flag=false;
		permanentAddressErr.innerHTML="Please fill up the permanent address";
		
	}
	return flag;




}