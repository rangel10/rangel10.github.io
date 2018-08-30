function sendMail() {
    var link = "mailto:ra.angel10@uniandes.edu.co"
             + "&subject=" + escape(document.getElementById('subject').value)
             + "&cc=" + escape(document.getElementById('email').value)
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}
