function sendMail() {
    var link = "mailto:ra.angel10@uniandes.edu.co"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('submit').value)
    ;

    window.location.href = link;
}
