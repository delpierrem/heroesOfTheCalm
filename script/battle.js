var player1id = localStorage.getItem("player1id");
var player2id = localStorage.getItem("player2id");
var player2Name = localStorage.getItem("player2Name");
var player1Name = localStorage.getItem("player1Name");

document.getElementById("player2img").innerHTML = "<img src=\"img/" + player2id + ".jpg\" alt=\"...\">";
document.getElementById("player1img").innerHTML = "<img src=\"img/" + player1id + ".jpg\" alt=\"...\">";


var Player = function() {
    this.pseudo = 'mystery';
    this.life = 100;
    this.dmg = 0;
    this.heal = 0;
    this.boost = 0;
    this.shield = 0;
    this.itemDps = 0;
    this.itemHeal = 0;
    this.itemShield = 0;

};

var player1 = new Player();
player1.pseudo = player1Name;

var player2 = new Player();
player2.pseudo = player2Name;

var canPlay;

document.getElementById("heroes1").innerHTML = player1.pseudo;
document.getElementById("life1").innerHTML = player1.life;
document.getElementById("dpsPlayer1").innerHTML = 'dps de ' + player1.pseudo;
document.getElementById("dpsPlayer2").innerHTML = 'dps de ' + player2.pseudo;
document.getElementById("heroes2").innerHTML = player2.pseudo;
document.getElementById("life2").innerHTML = player2.life;
// need to correct heal with canPlay
var healplayer2 = function() {
    if (player2.life <= 0 || player2.life >= 90) {
        window.alert("U can't use heal now !");
    } else {
        player2.heal = Math.floor(Math.random() * 10) + 1;
        var hp = player2.itemHeal + player2.life + player2.heal;
        player2.life = hp;
        document.getElementById("life2").innerHTML = hp;
        document.getElementById("round").innerHTML = player1.pseudo + "it's your round";
        canPlay++;
    }
};

var healplayer1 = function() {
    if (player1.life <= 0 || player1.life >= 90) {
        window.alert("U can't use heal now !");
    } else {
        player1.heal = Math.floor(Math.random() * 10) + 1;
        var hp2 = player1.itemHeal + player1.life + player1.heal;
        player1.life = hp2;
        document.getElementById("life1").innerHTML = hp2;
        document.getElementById("round").innerHTML = player2.pseudo + "it's your round";
        canPlay--;
    }
};

var attackplayer1 = function() {
    if (player2.life > 0 && player1.life > 0 && canPlay == 2) {
        player1.dmg = player1.itemDps + player1.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg1").innerHTML = player1.dmg + " DPS";
        // document.getElementById("dmg1").style.fontSize = '100px';
        var hp = (player2.life + player2.shield) - player1.dmg;
        player2.life = hp;
        document.getElementById("life2").innerHTML = hp;
        document.getElementById("round").innerHTML = player2.pseudo + " it's your round";
        canPlay--;
        if (player2.life <= 0) {
            window.alert("player1 win");
            document.getElementById("life2").innerHTML = "0";
        }
    } else if (player2.life <= 0) {
        window.alert("Fuck u little bitch !");
    }
};

var attackplayer2 = function() {
    if (player1.life > 0 && player2.life > 0 && canPlay == 1) {
        player2.dmg = player2.itemDps + player2.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg2").innerHTML = player2.dmg + " DPS";
        var hp2 = (player1.life + player1.shield) - player2.dmg;
        player1.life = hp2;
        document.getElementById("life1").innerHTML = hp2;
        document.getElementById("round").innerHTML = player1.pseudo + " it's your round";
        canPlay++;
        if (player1.life <= 0) {
            window.alert("player2 win");
            document.getElementById("life1").innerHTML = "0";
        }
    } else if (player2.life <= 0) {
        window.alert("Fuck u little bitch !");
    }
};

var boostplayer2 = function() {
    if (player1.life > 0 && player2.life > 0 && canPlay == 1) {
        var boost = player2.boost + Math.floor(Math.random() * 10) + 1;
        player2.boost = boost;
        document.getElementById("round").innerHTML = player1.pseudo + " it's your round";
        canPlay++;
    }
};

var boostplayer1 = function() {
    if (player2.life > 0 && player1.life > 0 && canPlay == 2) {
        var boosted = player1.boost + Math.floor(Math.random() * 10) + 1;
        player1.boost = boosted;
        document.getElementById("round").innerHTML = player2.pseudo + " it's your round";
        canPlay--;
    }
};

var shieldplayer2 = function() {
    if (player2.life > 0 && player1.life > 0 && canPlay == 1) {
        var shield = player2.shield + Math.floor(Math.random() * 5) + 1;
        player2.shield = player2.itemShield + shield;
        document.getElementById("round").innerHTML = player1.pseudo + " it's your round";
        document.getElementById("shield1").innerHTML = player2.shield;
        canPlay++;
    }
};

var shieldplayer1 = function() {
    if (player1.life > 0 && player2.life > 0 && canPlay == 2) {
        var shield1 = player1.shield + Math.floor(Math.random() * 5) + 1;
        player1.shield = player1.itemShield + shield1;
        document.getElementById("round").innerHTML = player2.pseudo + " it's your round";
        document.getElementById("shield").innerHTML = player1.shield;
        canPlay--;
    }
};

// function for starter item
function addDpsplayer2() {
    var dpsAddPlayer = 5;
    player2.itemDps = dpsAddPlayer;
    document.getElementById("item1").innerHTML = '<p class=\"btn btn-danger btn-lg btn-block\">+5 dps</p>';
}

function addDpsplayer1() {
    var dpsAddPlayer = 5;
    player1.itemDps = dpsAddPlayer;
    document.getElementById("item2").innerHTML = '<p class=\"btn btn-danger btn-lg btn-block\">+5 dps</p>';
}
// Item add Heal boost at player
function addHealplayer1() {
    var healAddPlayer = 5;
    player1.itemHeal = healAddPlayer;
    document.getElementById("item2").innerHTML = '<p class=\"btn btn-primary btn-lg btn-block\">+5 Heal</p>';
}

function addHealplayer2() {
    var healAddPlayer = 5;
    player2.itemHeal = healAddPlayer;
    document.getElementById("item1").innerHTML = '<p class=\"btn btn-primary btn-lg btn-block\">+5 Heal</p>';
}
// Item add life at player
function addLifeplayer1() {
    var lifeAddPlayer = 125;
    player1.life = lifeAddPlayer;
    document.getElementById("item2").innerHTML = '<p class="btn btn-success btn-lg btn-block">+25 life</p>';
    document.getElementById("life1").innerHTML = player1.life;
}

function addLifeplayer2() {
    var lifeAddPlayer = 125;
    player2.life = lifeAddPlayer;
    document.getElementById("item1").innerHTML = '<p class="btn btn-success btn-lg btn-block">+25 life</p>';
    document.getElementById("life2").innerHTML = player2.life;
}

function addShieldplayer1() {
    var shieldAddPlayer = 3;
    player1.itemShield = shieldAddPlayer;
    document.getElementById("item2").innerHTML = '<p class="btn btn-warning btn-lg btn-block">+3 shield</p>';
    document.getElementById("shield").innerHTML = player1.itemShield;
}

function addShieldplayer2() {
    var shieldAddPlayer = 3;
    player2.itemShield = shieldAddPlayer;
    document.getElementById("item1").innerHTML = '<p class="btn btn-warning btn-lg btn-block">+3 shield</p>';
    document.getElementById("shield1").innerHTML = player2.itemShield;
}

function getcanPlay() {
    canPlay = Math.floor(Math.random() * 2) + 1;
    if (canPlay == 1) {
        document.getElementById("round").innerHTML = player2.pseudo + " it's your round";
    } else if (canPlay == 2) {
        document.getElementById("round").innerHTML = player1.pseudo + " it's your round";
    }
    return canPlay;
}

var reset = function() {
    player1.life = 100;
    player2.life = 100;
    player2.dmg = 0;
    player1.dmg = 0;
    player1.shield = 0;
    player2.shield = 0;
    document.getElementById("life1").innerHTML = player1.life;
    document.getElementById("life2").innerHTML = player2.life;
    document.getElementById("dmg1").innerHTML = player1.dmg;
    document.getElementById("dmg2").innerHTML = player2.dmg;
    document.getElementById("shield").innerHTML = player1.shield;
    document.getElementById("shield1").innerHTML = player2.shield;
    getcanPlay();
};
