function rollD4(){
    var roll = Math.floor(Math.random() * 4) + 1;
    return roll;
}

function rollD6(){
    var roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

function rollD8(){
    var roll = Math.floor(Math.random() * 8) + 1;
    return roll;
}

function rollD10(){
    var roll = Math.floor(Math.random() * 10) + 1;
    return roll;
}

function rollD12(){
    var roll = Math.floor(Math.random() * 12) + 1;
    return roll;
}

function rollD20(){
    var roll = Math.floor(Math.random() * 20) + 1;
    return roll;
}

function rollD100(){
    var roll = Math.floor(Math.random() * 100) + 1;
    return roll;
}

function rollDCustom(dCustomSides){
    var roll = Math.floor(Math.random() * dCustomSides + 1);
    console.log(roll)
    return roll;
}