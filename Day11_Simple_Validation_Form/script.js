function validateForm(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
     
    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';

    if(name ===''){
        document.getElementById('nameError').innerHTML='Name is required';
        return false;
    }
    var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML='Invalid email format';
        return false;
    }
    alert('Form submitted Successfully');
    return true;
}
