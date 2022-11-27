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

        document.getElementById('scritta').innerHTML = "Buon Natale";
    }
},1000)

var countDown2 = new Date("Jan 1, 2023 00:00:00").getTime();
var x2 = setInterval(function(){
    var now2 = new Date().getTime();
    var distance2 = countDown2 - now2;
    
    console.log(distance2);

    var giorni2 = Math.floor(distance2 / (1000*60*60*24));
    var ore2 = Math.floor((distance2 % (1000*60*60*24)) / (1000*60*60));
    var minuti2 = Math.floor((distance2  % (1000*60*60)) / (1000*60));
    var secondi2 = Math.floor((distance2  % (1000*60)) / 1000);

    document.getElementById("giorni2").innerHTML = giorni2;
    document.getElementById("ore2").innerHTML = ore2;
    document.getElementById("minuti2").innerHTML = minuti2;
    document.getElementById("secondi2").innerHTML = secondi2;

    if(distance2 < 0){
        clearInterval(x2);

        document.getElementById("giorni2").innerHTML = "00";
        document.getElementById("ore2").innerHTML = "00";
        document.getElementById("minuti2").innerHTML = "00";
        document.getElementById("secondi2").innerHTML = "00";

        document.getElementById('scritta2').innerHTML = "Buon Anno";
    }
},1000)
