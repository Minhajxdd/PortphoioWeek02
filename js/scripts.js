/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Js code to sent the form to the excel and mail

$("#submit-form").submit((e)=>{
    e.preventDefault()
    if(errorValidate()){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx3b_72jUeOi-KrcIpIZDsAHS5y-BLTMIcFAJ5ii633aY2rQKyNRxuG1bcyqoXWrGBAqg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something failed")

        }
    })
    }
})

//Funciton for form validation Purpose

function errorValidate(){
    const name =  document.getElementById('Formname').value;
    let name_error = document.getElementById('name_error');
    const email = document.getElementById('Formemail').value;
    let mail_error = document.getElementById('mail_error');
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numSymValidate = /[0123456789!@#$%^&*()]/;
 
 
    if(name === "" || name == null){
         name_error.innerHTML = "Please enter a valid name";
         return false;
     }else if(name.match(numSymValidate)){
        name_error.innerHTML = "Name Should't include Number or Symbol!!";
        return false;
    }else{
         name_error.innerHTML = "";
     }
 
     if(!email.match(emailValidate)){
         mail_error.innerHTML = "Please Enter a valid email";
         return false;
     }else{
         mail_error.innerHTML = "";
     }
 
     return true;
 
 }
