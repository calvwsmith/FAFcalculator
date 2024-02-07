


var ele = document.getElementById("para");
ele.onclick = myFunction()
function myFunction() {
    var ele = document.getElementById("para");
    if (ele.style.display === "none"){
        ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
}
db.style.display = "block";
sim.style.display = "none";
acu.style.display = "none";
old.style.display = "none";
function simSwitch() {
    var db = document.getElementById("db");
    var sim = document.getElementById("sim");
    var acu = document.getElementById("acu");
    var old = document.getElementById("old");
    db.style.display = "none";
    sim.style.display = "block";
    acu.style.display = "none";
    old.style.display = "none";
}
function dbSwitch() {
    var db = document.getElementById("db");
    var sim = document.getElementById("sim");
    var acu = document.getElementById("acu");
    var old = document.getElementById("old");
    db.style.display = "block";
    sim.style.display = "none";
    acu.style.display = "none";
    old.style.display = "none";
}
function acuSwitch() {
    var db = document.getElementById("db");
    var sim = document.getElementById("sim");
    var acu = document.getElementById("acu");
    var old = document.getElementById("old");
    db.style.display = "none";
    sim.style.display = "none";
    acu.style.display = "block";
    old.style.display = "none";
    
}
function oldSwitch() {
    var db = document.getElementById("db");
    var sim = document.getElementById("sim");
    var acu = document.getElementById("acu");
    var old = document.getElementById("old");
    db.style.display = "none";
    sim.style.display = "none";
    acu.style.display = "none";
    old.style.display = "block";
    
}
document.getElementById("uefComImg").style.display = "block";
document.getElementById("cybranComImg").style.display = "none";
document.getElementById("aeonComImg").style.display = "none";
document.getElementById("seraComImg").style.display = "none";

async function acuSelect(val){
    var uef = document.getElementById("uefComImg");
    var cybran = document.getElementById("cybranComImg");
    var aeon = document.getElementById("aeonComImg");
    var sera = document.getElementById("seraComImg");
    if (val === "uef"){
        uef.style.display = "block";
        cybran.style.display = "none";
        aeon.style.display = "none";
        sera.style.display = "none";
    }
    else if (val === "cybran"){
        uef.style.display = "none";
        cybran.style.display = "block";
        aeon.style.display = "none";
        sera.style.display = "none";
    }
    else if (val === "aeon"){
        uef.style.display = "none";
        cybran.style.display = "none";
        aeon.style.display = "block";
        sera.style.display = "none";
    }
    else {
        uef.style.display = "none";
        cybran.style.display = "none";
        aeon.style.display = "none";
        sera.style.display = "block"; 
    }
    document.getElementById("testdiv").textContent = val;
}
document.getElementById("myPara").innerHTML = "titan.getDps()";
titan = new Unit(weapons = [new weapon(damage = 5, ROF = 5)]);



async function getBlueprint(){
    var bpText =  await ((await fetch("https://raw.githubusercontent.com/FAForever/fa/develop/units/UEL0303/UEL0303_unit.bp")).text());
    document.getElementById("test").textContent = bpText;
}


class Unit {
    constructor(name, tier, operation, health, armor, shield, shieldRegen, regen, massCost, energyCost, eYield, mYield, buildTime, speed, vision, radar, weapons, abilities, sonar, omni, waterVision, turnRate){
        this.name = name;
        this.tier = tier;
        this.operation = operation;
        this.health = health;
        this.armor = armor;
        this.shield = shield;
        this.shieldRegen = shieldRegen;
        this.regen = regen;
        this.massCost = massCost;
        this.energyCost = energyCost;
        this.eYield = eYield;
        this.mYield = mYield;
        this.buildTime = buildTime;
        this.speed = speed;
        this.vision = vision;
        this.radar = radar;
        this.weapons = weapons;
        this.abilities = abilities;
        this.sonar = sonar;
        this.omni = omni;
        this.waterVision = waterVision;
        this.turnRate = turnRate;
    }
    getDps(){
        let dps = 0;
        for (x in weapons){
            dps += x.damage * x.ROF;
        }
        return dps;
    }
}

class weapon {
    constructor(rangeMin, rangeMax, damage, operation, ROF, name, tPri){
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
        this.damage = damage;
        this.operation = operation;
        this.ROF = ROF;
        this.name = name;
        this.tPri = tPri;
    }
}