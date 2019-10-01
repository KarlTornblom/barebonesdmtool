var divId = 0;
window.onload = onloadFunctions();
setInterval(saveNotes, 1000);

function onloadFunctions(){
    loadNotes();
}

function rollDice(){
    var d4 = document.getElementById("rollD4").value;
    var d6 = document.getElementById("rollD6").value;
    var d8 = document.getElementById("rollD8").value;
    var d10 = document.getElementById("rollD10").value;
    var d12 = document.getElementById("rollD12").value;
    var d20 = document.getElementById("rollD20").value;
    var d100 = document.getElementById("rollD100").value;
    var dCustomTimes = document.getElementById("rollDCustomTimes").value;
    var dCustomSides = document.getElementById("rollDCustomSides").value;
    var div = document.getElementById("rollResult");
    var modifier = document.getElementById("rollModifier").value;
    var rollResult = [];
    var total = 0;
    
    //clear previous result
    div.innerHTML = " ";


    for(var i = 0; d4 > i; ++i){
        var x = rollD4();
        rollResult.push(x);
    }
    for(var i = 0; d6 > i; ++i){
        var x = rollD6();
        rollResult.push(x);
    }
    for(var i = 0; d8 > i; ++i){
        var x = rollD8();
        rollResult.push(x);
    }
    for(var i = 0; d10 > i; ++i){
        var x = rollD10();
        rollResult.push(x);
    }
    for(var i = 0; d12 > i; ++i){
        var x = rollD12();
        rollResult.push(x);
    }
    for(var i = 0; d20 > i; ++i){
        var x = rollD20();
        rollResult.push(x);
    }
    for(var i = 0; d100 > i; ++i){
        var x = rollD100();
        rollResult.push(x);
    }
    for(var i = 0; dCustomTimes > i; ++i){
        var x = rollDCustom(dCustomSides);
        rollResult.push(x);
    }

    for(var i = 0; rollResult.length > i; ++i){
        div.innerHTML += " " + rollResult[i];
        total += rollResult[i];
    }
    total += Number(modifier);
    document.getElementById("rollTotalResult").innerHTML = total;
    
}

function generate() {
    
    var healthDie = null;
    var healthDieOptions = document.getElementsByName("health");
    var stopper = healthDieOptions.length;

    for(var i=0; stopper>i; ++i){
        if(healthDieOptions[i].checked){
            healthDie = healthDieOptions[i].value;
        }
    }


    var numberOfDice = document.getElementById("numberofdie").value;
    var numberOfEnemies = document.getElementById("numberofenemies").value;
    var modifier = document.getElementById("modifier").value;
    var enemyName = document.getElementById("enemyname").value;
    var armorClass = document.getElementById("armorClass").value;
    var initiativeMod = document.getElementById("initiativeMod").value;
    var initiative = null;



    var health = null;
    var enemyNumber = 1;
    for(var i=0; numberOfEnemies>i; ++i){
        health = 0;
        //rullar hp dice och lägger till det till hp-poolen
        for(var x=0; x < numberOfDice; ++x){
            var roll = Math.floor(Math.random() * healthDie) + 1;
            health += roll;
        }
        // lägger till modifier till hp
        health += Number(modifier);
        
        initiative = rollD20() + Number(initiativeMod);
        console.log("Initiative " + initiative);

        var div = document.getElementById("enemies");
        div.innerHTML +=    
            "<div id='" + enemyName + divId + "' class='enemy'>" + 
                enemyName + "  " + enemyNumber + "<span style='cursor: pointer;float:right' onclick='removeEnemy(this);' class='removeButton'>Remove</span></br>" + 
                "HP <input type='number' value='" + health + "'>" +
                " AC <input type='number' value='" + armorClass + "'></br>" +
                "Intiative: " + initiative +
            "</div>"
        ;
        ++divId;
        ++enemyNumber;
    }
}

function removeEnemy(element) {
    var id = element.parentNode;
    id.remove();
}

function saveRoll() {
    var d4 = document.getElementById("rollD4").value;
    var d6 = document.getElementById("rollD6").value;
    var d8 = document.getElementById("rollD8").value;
    var d10 = document.getElementById("rollD10").value;
    var d12 = document.getElementById("rollD12").value;
    var d20 = document.getElementById("rollD20").value;
    var d100 = document.getElementById("rollD100").value;
    var dCustomTimes = document.getElementById("rollDCustomTimes").value;
    var dCustomSides = document.getElementById("rollDCustomSides").value;
    var modifier = document.getElementById("rollModifier").value;
    var dice=[d4, d6, d8, d10, d12, d20, d100, dCustomTimes, dCustomSides, modifier];
    var savedRollName = document.getElementById("savedRollName").value;
    window.localStorage.setItem(savedRollName, JSON.stringify(dice));

    var div = document.getElementById("savedRolls");

    div.innerHTML +=
        "<div>" + 
            "<button name='" + savedRollName + "' onclick='savedRoll(this)'>" + savedRollName + "</button><span style='cursor: pointer' onclick='removeEnemy(this)'> X </span>" + 
        "</div>"
    ;

}

function savedRoll(element){
    var savedRollName = element.getAttribute("name");
    var savedRoll = JSON.parse(window.localStorage.getItem(savedRollName));
    var rollResult = [];
    var total = 0;
    
    document.getElementById("rollResult").innerHTML = " ";

    for(var i = 0; savedRoll[0] > i; ++i){
        var x = rollD4();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[1] > i; ++i){
        var x = rollD6();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[2] > i; ++i){
        var x = rollD8();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[3] > i; ++i){
        var x = rollD10();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[4] > i; ++i){
        var x = rollD12();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[5] > i; ++i){
        var x = rollD20();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[6] > i; ++i){
        var x = rollD100();
        rollResult.push(x);
    }
    for(var i = 0; savedRoll[7] > i; ++i){
        var x = rollDCustom(savedRoll[8]);
        rollResult.push(x);
    }

    for(var i = 0; rollResult.length > i; ++i){
        document.getElementById("rollResult").innerHTML += " " + rollResult[i];
        total += rollResult[i];
    }
    total += Number(savedRoll[9]);
    console.log(total);
    document.getElementById("rollTotalResult").innerHTML = total;
}

function loadNotes(){
    var savedNotes = window.localStorage.getItem('notes');
    console.log('Notes loaded')
    document.getElementById("noteArea").innerText = savedNotes;
}

function saveNotes(){
    var notesValue = document.getElementById("noteArea").value;
    console.log('Notes saved')
    window.localStorage.setItem('notes', notesValue);
}

function hideElement(Element){
    var contentDiv = Element.nextElementSibling;
    var chevronIcon = Element.firstElementChild;
    console.log(contentDiv);
    if(contentDiv.style.display == " " || contentDiv.style.display == "none"){
        contentDiv.style.display = "block";
        chevronIcon.className = "fas fa-chevron-down";
    } else{
        contentDiv.style.display = "none";
        chevronIcon.className = "fas fa-chevron-up";
    }

}

function themeMode(element){
    if(element.checked == true){
        setDarkTheme();
    } else{
        setLightTheme();
    }
    function setLightTheme(){
        $('#body, textarea, .slider')
        .css('background-color','var(--lightTheme-bg-color)');

        $('.col-sm-4, textarea, .col-sm-3, .col-sm-5, .col-sm-12')
        .css('color', 'var(--lightTheme-txt-color)');

        $('.slider:before, .col-sm-4, .col-sm-3, .col-sm-5, .col-sm-12, .enemy')
        .css('background-color','var(--lightTheme-element-color');
        }
    function setDarkTheme(){
        $('#body, textarea, .slider')
        .css('background-color','var(--darkTheme-bg-color)');

        $('.col-sm-4, textarea, .col-sm-3, .col-sm-5, .col-sm-12')
        .css('color', 'var(--darkTheme-txt-color)');

        $('.slider:before, .col-sm-4, .col-sm-3, .col-sm-5, .col-sm-12, .enemy')
        .css('background-color','var(--darkTheme-element-color');
    } 
}
