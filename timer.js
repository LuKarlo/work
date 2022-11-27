var countDown = new Date("Dec 25, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    
    var giorni = Math.floor(distance / (1000*60*60*24));
    var ore = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minuti = Math.floor((distance  % (1000*60*60)) / (1000*60));
    var secondi = Math.floor((distance  % (1000*60)) / 1000);

    document.getElementById("giorni").innerHTML = giorni;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("minuti").innerHTML = minuti;
    document.getElementById("secondi").innerHTML = secondi;

    if(distance < 0){
        clearInterval(x);

        document.getElementById("giorni").innerHTML = "00";
        document.getElementById("ore").innerHTML = "00";
        document.getElementById("minuti").innerHTML = "00";
        document.getElementById("secondi").innerHTML = "00";

        var element = document.getElementById('scritta');
        var element2 = document.getElementById('scritta2')
        element.classList.add("Natale");
        element.classList.remove("Natale");
    }
},1000)