var michel = new Object();
michel.pseudo = "michel";
michel.life = 100;
michel.dmg = 0;
michel.heal = 0;
michel.boost = 0;
michel.shield = 0;
michel.itemDps = 0;
michel.itemHeal = 0;
michel.itemShield = 0;



var quentin = new Object();
quentin.pseudo = "quentin";
quentin.life = 100;
quentin.dmg = 0;
quentin.heal = 0;
quentin.boost = 0;
quentin.shield = 0;
quentin.itemDps = 0;
quentin.itemHeal = 0;
quentin.itemShield = 0;

var canPlay;

document.getElementById("heroes1").innerHTML = michel.pseudo;
document.getElementById("life1").innerHTML = michel.life;
document.getElementById("heroes2").innerHTML = quentin.pseudo;
document.getElementById("life2").innerHTML = quentin.life;
// need to correct heal with canPlay
var healQuentin = function() {
    if (quentin.life <= 0 || quentin.life >= 90) {
        window.alert("U can't use heal now !");
    } else {
        quentin.heal = Math.floor(Math.random() * 10) + 1;
        var hp = quentin.itemHeal + quentin.life + quentin.heal;
        quentin.life = hp;
        document.getElementById("life2").innerHTML = hp;
        document.getElementById("round").innerHTML = "michel it's your round";
        canPlay++;
    }
};

var healMichel = function() {
    if (michel.life <= 0 || michel.life >= 90) {
        window.alert("U can't use heal now !");
    } else {
        michel.heal = Math.floor(Math.random() * 10) + 1;
        var hp2 = michel.itemHeal + michel.life + michel.heal;
        michel.life = hp2;
        document.getElementById("life1").innerHTML = hp2;
        document.getElementById("round").innerHTML = "Quentin it's your round";
        canPlay--;
    }
};

var attackMichel = function() {
    if (quentin.life > 0 && michel.life > 0 && canPlay == 2) {
        michel.dmg = michel.itemDps + michel.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg1").innerHTML = michel.dmg + " DPS";
        // document.getElementById("dmg1").style.fontSize = '100px';
        var hp = (quentin.life + quentin.shield) - michel.dmg;
        quentin.life = hp;
        document.getElementById("life2").innerHTML = hp;
        document.getElementById("round").innerHTML = "Quentin it's your round";
        canPlay--;
        if (quentin.life <= 0) {
            window.alert("Michel win");
            document.getElementById("life2").innerHTML = "0";
        }
    } else if (quentin.life <= 0) {
        window.alert("Fuck u little bitch !");
    }
};

var attackQuentin = function() {
    if (michel.life > 0 && quentin.life > 0 && canPlay == 1) {
        quentin.dmg = quentin.itemDps + quentin.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg2").innerHTML = quentin.dmg + " DPS";
        var hp2 = (michel.life + michel.shield) - quentin.dmg;
        michel.life = hp2;
        document.getElementById("life1").innerHTML = hp2;
        document.getElementById("round").innerHTML = "michel it's your round";
        canPlay++;
        if (michel.life <= 0) {
            window.alert("Quentin win");
            document.getElementById("life1").innerHTML = "0";
        }
    } else if (quentin.life <= 0) {
        window.alert("Fuck u little bitch !");
    }
};

var boostQuentin = function() {
    if (michel.life > 0 && quentin.life > 0 && canPlay == 1) {
        var boost = quentin.boost + Math.floor(Math.random() * 10) + 1;
        quentin.boost = boost;
        document.getElementById("round").innerHTML = "michel it's your round";
        canPlay++;
    }
};

var boostMichel = function() {
    if (quentin.life > 0 && michel.life > 0 && canPlay == 2) {
        var boosted = michel.boost + Math.floor(Math.random() * 10) + 1;
        michel.boost = boosted;
        document.getElementById("round").innerHTML = "Quentin it's your round";
        canPlay--;
    }
};

var shieldQuentin = function() {
    if (quentin.life > 0 && michel.life > 0 && canPlay == 1) {
        var shield = quentin.shield + Math.floor(Math.random() * 5) + 1;
        quentin.shield = quentin.itemShield + shield;
        document.getElementById("round").innerHTML = "Michel it's your round";
        document.getElementById("shield1").innerHTML = quentin.shield;
        canPlay++;
    }
};

var shieldMichel = function() {
    if (michel.life > 0 && quentin.life > 0 && canPlay == 2) {
        var shield1 = michel.shield + Math.floor(Math.random() * 5) + 1;
        michel.shield = michel.itemShield + shield1;
        document.getElementById("round").innerHTML = "Quentin it's your round";
        document.getElementById("shield").innerHTML = michel.shield;
        canPlay--;
    }
};

// function for starter item
function addDpsQuentin() {
    var dpsAddPlayer = 5;
    quentin.itemDps = dpsAddPlayer;
    document.getElementById("item1").innerHTML = '<p class=\"btn btn-danger btn-lg btn-block\">+5 dps</p>';
}

function addDpsMichel() {
    var dpsAddPlayer = 5;
    michel.itemDps = dpsAddPlayer;
    document.getElementById("item2").innerHTML = '<p class=\"btn btn-danger btn-lg btn-block\">+5 dps</p>';
}
// Item add Heal boost at player
function addHealMichel() {
    var healAddPlayer = 5;
    michel.itemHeal = healAddPlayer;
    document.getElementById("item2").innerHTML = '<p class=\"btn btn-primary btn-lg btn-block\">+5 Heal</p>';
}

function addHealQuentin() {
    var healAddPlayer = 5;
    quentin.itemHeal = healAddPlayer;
    document.getElementById("item1").innerHTML = '<p class=\"btn btn-primary btn-lg btn-block\">+5 Heal</p>';
}
// Item add life at player
function addLifeMichel() {
    var lifeAddPlayer = 125;
    michel.life = lifeAddPlayer;
    document.getElementById("item2").innerHTML = '<p class="btn btn-success btn-lg btn-block">+25 life</p>';
    document.getElementById("life1").innerHTML = michel.life;
}

function addLifeQuentin() {
    var lifeAddPlayer = 125;
    quentin.life = lifeAddPlayer;
    document.getElementById("item1").innerHTML = '<p class="btn btn-success btn-lg btn-block">+25 life</p>';
    document.getElementById("life2").innerHTML = quentin.life;
}

function addShieldMichel() {
    var shieldAddPlayer = 3;
    michel.itemShield = shieldAddPlayer;
    document.getElementById("item2").innerHTML = '<p class="btn btn-warning btn-lg btn-block">+3 shield</p>';
    document.getElementById("shield").innerHTML = michel.itemShield;
}

function addShieldQuentin() {
    var shieldAddPlayer = 3;
    quentin.itemShield = shieldAddPlayer;
    document.getElementById("item1").innerHTML = '<p class="btn btn-warning btn-lg btn-block">+3 shield</p>';
    document.getElementById("shield1").innerHTML = quentin.itemShield;
}

function getcanPlay() {
    canPlay = Math.floor(Math.random() * 2) + 1;
    if (canPlay == 1) {
        document.getElementById("round").innerHTML = "Quentin it's your round";
    } else if (canPlay == 2) {
        document.getElementById("round").innerHTML = "michel it's your round";
    }
    return canPlay;
}

var reset = function() {
    michel.life = 100;
    quentin.life = 100;
    quentin.dmg = 0;
    michel.dmg = 0;
    michel.shield = 0;
    quentin.shield = 0;
    document.getElementById("life1").innerHTML = michel.life;
    document.getElementById("life2").innerHTML = quentin.life;
    document.getElementById("dmg1").innerHTML = michel.dmg;
    document.getElementById("dmg2").innerHTML = quentin.dmg;
    document.getElementById("shield").innerHTML = michel.shield;
    document.getElementById("shield1").innerHTML = quentin.shield;
    getcanPlay();
};
