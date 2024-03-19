var hor = 0;
var min = 0;
var seg = 0;
var id;


function start() {

    id = setInterval(function () {
        seg++;

        if (seg >= 59) {
            seg = 0;
            min++
        }

        if (min >= 59) {
            min = 0;
            hor++
        }

        if (seg < 10 ) {

            document.getElementById('time').innerHTML = "0" + hor + ":0" + min +
                ":0" + seg;

        } else if(min < 10){
            document.getElementById('time').innerHTML = "0" + hor + ":0" + min +
                ":" + seg;
        }else if(hor < 10){
            document.getElementById('time').innerHTML = "0" + hor + ":" + min +
            ":" + seg;
        }else{

            document.getElementById('time').innerHTML = hor + ":" + min + ":" + seg;
        }

        document.getElementById('comecar').disabled = true;

    }, 1000);

}

function stop() {

    clearInterval(id);
    document.getElementById('parar').disabled = false;

}

function reset() {

    hor = 0;
    min = 0;
    seg = 0;

}