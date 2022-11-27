var list = [1,2,3,4,5,6,7,8,9,10];
var chos = ["germania","Inghilterra","italia","olanda","polonia","brazile","portogallo","georgia","azerbaijan","svezia"];
var nat = 0;
var cella;
var move = 0;


    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
        end = new Date().getTime();
    }
    }


            list = list.sort(function() {
            return Math.random() - 0.5;});
            window.onload = function() {
                alert(list);
            };
    function game(){
    var number = list[nat];
    if(number == 1){
        alert("funziona 1");
        germany();
    }
    if(number == 2){
        alert("funziona 2");
        england();
    }
    if(number == 3){
        alert("funziona 3");
        italy(); 
    }
    if(number == 4){
        alert("funziona 4");
        olanda();
    }
    if(number == 5){
        alert("funziona 5");
        poland();
    }
    if(number == 6){
        alert("funziona 6");
        bazil();
    }
    if(number == 7){
        alert("funziona 7");
        portogallo();
    }
    if(number == 8){
        alert("funziona 8");
        georgia();
    }
    if(number == 9){
        alert("funziona 9");
        azerbaijan();
    }
    if(number == 10){
        alert("funziona 10");
        svezia();
    }}

    chos = chos.sort(function() {
        return Math.random() - 0.5;});
        window.onload = function() {
            alert(chos);
        };
        let enter;
    var mossa = id;

    function germany(){
        var germani;
        if(move == 0){
        germani = Math.round(Math.random()*3+1);
        document.getElementById(germani).innerHTML = 'Germania';
        move = 1;
        }
        if(move == 1){
            if(document.getElementById(enter).innerHTML == "Germania"){
                document.getElementById(enter).element.classList.add("Correct");
                alert("see you");
                wait(5000);
                alert("fuck you");
            }else{
                for(let i = 1; i < 5; i++){
                    console.log(i);
                }
                if(document.getElementById(i).innerHTML != "Germania"){
                    document.getElementById(enter).element.classList.add("Wrong");
                }
                if (document.getElementById(i).innerHTML == "Germania") {
                    document.getElementById(enter).element.classList.add("Correct");
                }
            }
        }
    }