//find character_critical and character_damage id, sum them and display in character_total_damage id

function calculateDamage() {
    const critical = Number(document.getElementById("character_critical").value);
    const criticalPercent = critical * 0.006276


    const criticalDamage = 0.5;
    const criticalDamageBuff = criticalDamage * (criticalPercent / 100) + 1;

    const damage = Number(document.getElementById("character_elemental_attack").value);

    const totalDamage = damage * criticalDamageBuff;

    const totalDamageRounded = totalDamage.toFixed(2);
    console.log(totalDamageRounded, 'dano total do personagem');

    document.getElementById("character_total").value = totalDamage;
}


//find glove_critical and glove_damage id, sum them and display in glove_total_damage id
function calculateGloveDamage() {
    const critical = document.getElementById("glove_critical").value;

    const elementalAttack = document.getElementById("glove_elemental_attack").value;

    const attack = document.getElementById("glove_attack").value;

    const totalDamage = Number(critical) + Number(attack) + Number(elementalAttack);
    console.log(totalDamage, 'dano total do luva');

    document.getElementById("glove_total").value = totalDamage;
}

//find weapon_critical and weapon_damage id, sum them and display in weapon_total_damage id
function calculateBootDamage() {
    const critical = document.getElementById("boot_critical").value;

    const elementalAttack = document.getElementById("boot_elemental_attack").value;

    const attack = document.getElementById("boot_attack").value;

    const totalDamage = Number(critical) + Number(attack) + Number(elementalAttack);
    console.log(totalDamage, 'dano total da bota');

    document.getElementById("boot_total").value = totalDamage;
}

//create a function that trigger the functions when submit is clicked
function submit() {
    calculateDamage();
    calculateGloveDamage();
    calculateBootDamage();
}

//create a function that trigger subbmit function when button is clicked
function init() {
    document.getElementById("submit").addEventListener("click", submit);
} init();