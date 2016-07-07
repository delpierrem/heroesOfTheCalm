var michel = new Object();
michel.pseudo = "michel";
michel.life = 100;
michel.dmg = 0;
michel.heal = 0;
michel.boost = 0;

var quentin = new Object();
quentin.pseudo = "quentin";
quentin.life = 100;
quentin.dmg = 0;
quentin.heal = 0;
quentin.boost = 0;

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
        var hp = quentin.life + quentin.heal;
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
        var hp2 = michel.life + michel.heal;
        michel.life = hp2;
        document.getElementById("life1").innerHTML = hp2;
        document.getElementById("round").innerHTML = "Quentin it's your round";
        canPlay--;
    }
};

var attackMichel = function() {
    if (quentin.life > 0 && michel.life > 0 && canPlay == 2) {
        michel.dmg = michel.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg1").innerHTML = michel.dmg + " DPS";
        // document.getElementById("dmg1").style.fontSize = '100px';
        var hp = quentin.life - michel.dmg;
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
        quentin.dmg = quentin.boost + Math.floor(Math.random() * 10) + 1;
        document.getElementById("dmg2").innerHTML = quentin.dmg + " DPS";
        var hp2 = michel.life - quentin.dmg;
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

var reset = function() {
    michel.life = 100;
    quentin.life = 100;
    quentin.dmg = 0;
    michel.dmg = 0;
    document.getElementById("life1").innerHTML = michel.life;
    document.getElementById("life2").innerHTML = quentin.life;
    document.getElementById("dmg1").innerHTML = michel.dmg;
    document.getElementById("dmg2").innerHTML = quentin.dmg;
    getcanPlay();
};


function getcanPlay() {
    canPlay = Math.floor(Math.random() * 2) + 1;
    if (canPlay == 1) {
        document.getElementById("round").innerHTML = "Quentin it's your round";
    } else if (canPlay == 2) {
        document.getElementById("round").innerHTML = "michel it's your round";

    }
    return canPlay;
}
