//find character_critical and character_damage id, sum them and display in character_total_damage id


/*validators*/


function calculateDamage() {
    const critical = document.getElementById("character_critical").value;
    const damage = document.getElementById("character_attack").value;
    const totalDamage = parseInt(critical) + parseInt(damage);
    console.log(totalDamage)
    document.getElementById("character_total").value = totalDamage;
}


//find glove_critical and glove_damage id, sum them and display in glove_total_damage id
function calculateGloveDamage() {
    const critical = document.getElementById("glove_critical").value;
    const damage = document.getElementById("glove_attack").value;
    const totalDamage = parseInt(critical) + parseInt(damage);
    document.getElementById("glove_total").value = totalDamage;
    console.log(totalDamage);
}

//find weapon_critical and weapon_damage id, sum them and display in weapon_total_damage id
function calculateWeaponDamage() {
    const critical = document.getElementById("boot_critical").value;
    const damage = document.getElementById("boot_attack").value;
    const totalDamage = parseInt(critical) + parseInt(damage);
    document.getElementById("boot_total").value = totalDamage;
    console.log(totalDamage)
}

//create a function that trigger the functions when submit is clicked
function submit() {
    calculateDamage();
    calculateGloveDamage();
    calculateWeaponDamage();
}

//create a function that trigger subbmit function when button is clicked
function init() {
    document.getElementById("submit").addEventListener("click", submit);
} init();