(function(){
    emailjs.init("Tu2tvh3rf0Co-2vZ5"); // EmailJS public key
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_15z6c5t", "template_mp2xaoj", this)
    .then(function() {
        alert("Message Sent Successfully!");

        // WhatsApp Notification
        let name = document.querySelector('[name="name"]').value;
        let message = document.querySelector('[name="message"]').value;

        let whatsappURL = `https://wa.me/919015044003?text=New Lead from Portfolio:%0AName:${name}%0AMessage:${message}`;
        window.open(whatsappURL, "_blank");

    }, function(error) {
        alert("Failed to send message");
    });
});
