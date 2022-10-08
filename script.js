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

    //critical formula
    const criticalPercent = input.characterCritical * 0.006276
    const criticalDamage = 0.5;
    const criticalDamageBuff = criticalDamage * (criticalPercent / 100) + 1;

    //damage formula
    const damage = input.characterElementalAttack * criticalDamageBuff;
    const totalDamageRounded = damage.toFixed(2);

    if (isNaN(totalDamageRounded)) {
        return;
    }

    return totalDamageRounded
}

function statusHint() {
    const input = createVariables()

    if (input.characterElementalAttack <= 6000) {
        return 'Elemental Attack gives 5 times more damage than Critical Rate ';
    }

    if (input.characterElementalAttack > 6000 && input.characterElementalAttack <= 10000) {
        return 'Eelemental Rate gives 4 times more damage than Critical Rate ';
    }

    if (input.characterElementalAttack > 10000 && input.characterElementalAttack <= 15000) {
        return 'Eelemental Attack gives 1.5 times more damage than Crtical Rate ';
    }

    if (input.characterElementalAttack > 20000) {
        return 'Elemental Attack 1.35 times more damage than Critical Rate ';
    }

    return;
}


function submit() {
    const totalDamageRounded = calculateDamage();
    const bestType = statusHint();

    if (totalDamageRounded) {
        document.getElementById('character_total_damage').innerText = totalDamageRounded;
        localStorage.setItem('character_critical', document.getElementById('character_critical').value);
        localStorage.setItem('character_elemental_attack', document.getElementById('character_elemental_attack').value);
    }

    if (bestType) {
        document.getElementById('status_hint').innerText = bestType;
    }

    if (!totalDamageRounded || !bestType) {
        alert('Please enter a valid number');
    }
}

function run() {
    document.getElementById("submit").addEventListener("click", submit);
} run();