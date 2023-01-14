// Open and Close Navbar Men
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});


async function send(){
   var email = document.getElementById("email").value;
   var name = document.getElementById("name").value;
   var object = document.getElementById("object").value;
   var message = document.getElementById("message").value;
   Email.send({
      SecureToken : "fea854bc-7e94-4e12-918d-bf2ac3983b67",
      To : 'Bastien.marbaud@gmail.com',
      From : "portfolio.contact001@gmail.com",
      Subject : object,
      Body : "De : " + name + "\n Mail de contact : " + email + "\n Message : \n" + message
   }).then(
   message => alert(message)
   );
}
 

var contact = document.getElementById("contact")
var button = document.getElementById("corner-button")

function buttonclick(){
   contact.style.display = "block"
   button.style.display="none"
   setTimeout (window.scrollTo(0, document.getElementById('bottom-of-page').offsetTop),200)
}

(function() {
   'use strict';
   window.addEventListener('load', function() {
       // Fetch all the forms we want to apply custom Bootstrap validation styles to
       var forms = document.getElementsByClassName('contact-form');
       
       // Loop over them and prevent submission
       var validation = Array.prototype.filter.call(forms, function(form) {
           form.addEventListener('submit', function(event) {
               if (form.checkValidity() === false) {
                   event.preventDefault();
                   event.stopPropagation();
               }
               send()
           }, false);
       });
   }, false);
})();

