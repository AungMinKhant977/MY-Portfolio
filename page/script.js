document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    //Get form values 
    const name=
    document.getElementById("name").value;
    const email =
    document.getElementById("email").value;
    const message =
    document.getElementById("message").value;
    //Basic validation 
    if (name && email && message) 
    {
        alert('Thank you, $ {name}! Your message has been sent.');
        // Clear form
        document.getElementById("contactForm").reset();
    }
    else{
        alert("Please fill in all the fields.");
    }
})