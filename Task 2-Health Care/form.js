function validdata()
{
/*Name*/
	var Name=document.myform.name1.value;
	if(Name=="null" ||Name=="" ||Name==[    ])
	{
		alert("please enter proper name")
	return false
	}
	
	/*email*/
	var Email=document.myform.email.value
	var atposition=Email.indexOf("@")
	var dotposition=Email.lastIndexOf(".")
	if(atposition<1 || dotposition<atposition+2 || dotposition+2>=Email.length)
	{
		alert("enter proper emailId")
	return false
	}
	/*mobilenumber*/
	var Number=document.myform.number.value
	if(Number.length == 10)
	{
		return true
	}
	else
	{
		alert("enter 10 digit number")
		return false
	}
}