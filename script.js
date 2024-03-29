var form = document.querySelector(".myform");
form.addEventListener("submit", function(event) {
    // Získání dat z formuláře
    
    var vek = form.pohlavi.value;
    document.getElementById("result").innerText = vek;
    event.preventDefault();
});

