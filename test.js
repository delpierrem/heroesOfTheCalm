var i = 0;
var a = 0;
var ready = 1;
var player1;
var player2;
var tablepop = ['Michel', 'Quentin', 'Jordan', 'Victor', "Kevin", "Tristan",
    "Baptiste", "Daniel", "FrançoisF", "Axel", "Antoine", "Bonsergent", "JessiCat",
    "Jessy", "Julie", "Kylian", "Hao", "Manon", "Paul", "El Pietro", "Raphaë", "Thimoty",
];

function load() {
    for (i; i < tablepop.length; i++) {
        document.getElementById("tablepop").innerHTML += "<div class =\"col-sm-6 col-md-2\" id=\"" + i + "\" onclick=\"selectFirst(this)\"></div>";
    }

    function Creatediv() {
        for (a; a < tablepop.length; a++) {
            document.getElementById(a).innerHTML = "<div class =\"thumbnail text-center\"><h3>" + tablepop[a] + "</h3><img src =\"" + a + ".jpg \" alt =\"...\"><br></div></div>";
        }
    }
    Creatediv();
}

function isReady() {
    if (ready == 1) {
        document.getElementById("player1").innerHTML = "<div class =\"thumbnail text-center\"><br><img src =\"" + player1 + ".jpg \" alt =\"...\"><div class=\"caption\"><p class=\"btn btn-success btn-lg btn-block\" type=\"submit\" role=\"button\" onclick=\"isReady()\">Player 1 is ready</p></div>";
        ready = 2;

    } else if (ready == 2) {
        document.getElementById("player2").innerHTML = "<div class =\"thumbnail text-center\"><br><img src =\"" + player2 + ".jpg \" alt =\"...\"><div class=\"caption\"><p class=\"btn btn-success btn-lg btn-block\" type=\"submit\" role=\"button\" onclick=\"isReady()\">Player 2 is ready</p></div>";
        ready = 3;
        document.getElementById("start").innerHTML = " <br><p class =\"btn btn-success btn-lg btn-block \"type = \"submit\" role = \"button\" onclick = \"()\">FIGHT</p> </div > ";


    }
}

function selectFirst(that) {

    if (ready == 1) {
        player1 = that.id;
        document.getElementById("player1").innerHTML = "<div class =\"thumbnail text-center\"><br><img src =\"" + player1 + ".jpg \" alt =\"...\"><div class=\"caption\"><p class=\"btn btn-danger btn-lg btn-block\" type=\"submit\" role=\"button\" onclick=\"isReady()\">Pret ?</p></div>";
        document.getElementById("readyPlayer1").innerHTML = "<h2>" + tablepop[player1] + "</h2>";
        return player1;
    } else if (ready == 2) {
        player2 = that.id;

        document.getElementById("player2").innerHTML = "<div class =\"thumbnail text-center\"><br><img src =\"" + player2 + ".jpg \" alt =\"...\"><div class=\"caption\"><p class=\"btn btn-danger btn-lg btn-block\" type=\"submit\" role=\"button\" onclick=\"isReady()\">Pret ?</p></div>";
        document.getElementById("readyPlayer2").innerHTML = "<h2>" + tablepop[player2] + "</h2>";
        return player2;
    }
}
