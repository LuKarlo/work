var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var clad = ["destra","centro-destra","centro-sinistra","sinistra"];

num = num.sort(function() {
    return Math.random() - 0.5;});
    window.onload = function() {
        console.log(num);
    };
clad = clad.sort(function() {
    return Math.random() - 0.5;});
    window.onload = function() {
        console.log(clad[0]);
    };

for(i = 1;i < 25;i++){
    var ce = 0;
    document.getElementById(i).innerHTML = num[i-1];
}

var ctrl = 0;

for(c = 1;c < 25;c++){
    if(ctrl < 4){
        ctrl++;
    }else{
        ctrl = 0;
    }
    document.getElementById(c).classList.add(clad[ctrl]);
}

var countDown = new Date("Dec 25, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;
    
    var giorni = Math.floor(distance / (1000*60*60*24));

    for(d = 1;d <25;d++){
        var bnt = 24 - giorni;
        if(document.getElementById(d).innerHTML == bnt){
            document.getElementById(d).classList.add("oggi");
            console.log(bnt);
        }
    }

    if(distance < 0){
        clearInterval(x);
    }
}, 1000)

    