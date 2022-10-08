//find character_critical and character_damage id, sum them and display in character_total_damage id

function load() {
    document.getElementById('character_critical').value = localStorage.getItem('character_critical');
    document.getElementById('character_elemental_attack').value = localStorage.getItem('character_elemental_attack');
} load()

function createVariables() {
    return {
        characterCritical: Number(document.getElementById("character_critical").value),
        characterElementalAttack: Number(document.getElementById("character_elemental_attack").value),
    }
}

function calculateDamage() {
    const input = createVariables()

    const criticalPercent = input.characterCritical * 0.006276
    console.log(criticalPercent)

    const criticalDamage = 0.5;
    const criticalDamageBuff = criticalDamage * (criticalPercent / 100) + 1;

    //damage calculus

    const damage = input.characterElementalAttack * criticalDamageBuff;
    const totalDamageRounded = damage.toFixed(2);

    if (isNaN(totalDamageRounded)) {
        return 'Please enter a number in the fields';
    }

    return totalDamageRounded
}

function statusHint() {
    const input = createVariables()

    if (input.characterElementalAttack <= 6000) {
        return 'Elemental Attack gives 500% more damage than Critical Rate (in 1:1 ratio)';
    }

    if (input.characterElementalAttack > 6000 && input.characterElementalAttack <= 10000) {
        return 'Eelemental Rate gives 400% more damage than Critical Rate (in 1:1 ratio)';
    }

    if (input.characterElementalAttack > 10000 && input.characterElementalAttack <= 15000) {
        return 'Eelemental Attack gives 50% more damage than Crtical Rate (in 1:1 ratio)';
    }

    if (input.characterElementalAttack > 20000) {
        return 'Elemental Attack 35% more damage than Critical Rate (in 1:1 ratio)';
    }
}

function submit() {
    createVariables();
    const totalDamageRounded = calculateDamage();
    const bestType = statusHint();
    document.getElementById('character_total_damage').innerText = totalDamageRounded;
    document.getElementById('status_hint').innerText = bestType;
    localStorage.setItem('character_critical', document.getElementById('character_critical').value);
    localStorage.setItem('character_elemental_attack', document.getElementById('character_elemental_attack').value);
}

function run() {
    document.getElementById("submit").addEventListener("click", submit);
} run();