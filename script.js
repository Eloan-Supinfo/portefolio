document.querySelector("form").addEventListener("submit", function(e) {
    // e.preventDefault();  // Empêche le rechargement de la page
    var nom=document.getElementById("nom");
    var email=document.getElementById("email");
    //form.submit();
	alert("Merci "+nom.value+" de nous avoir contactés, nous vous joindrons sur le mail : "+email.value);
});