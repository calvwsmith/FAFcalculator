


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
{
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
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();