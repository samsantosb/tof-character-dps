const getByid = document.getElementById.bind(document);
const loadItem = localStorage.getItem.bind(localStorage);
const saveItem = localStorage.setItem.bind(localStorage);

const character = {
    critical: "character_critical",
    eAttack: "character_elemental_attack",
    totalDamage: "character_total_damage",
    statusAnalysis: "status_analysis"
}

function load() {
    getByid(character.critical).value = loadItem(character.critical);
    getByid(character.eAttack).value = loadItem(character.eAttack);
} load()

function createVariables() {
    return {
        characterCritical: Number(getByid(character.critical).value),
        characterElementalAttack: Number(getByid(character.critical).value),
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
        return 'Elemental Attack gives you 5 times more damage than Critical Rate ';
    }

    if (input.characterElementalAttack > 6000 && input.characterElementalAttack <= 10000) {
        return 'Eelemental Rate gives you 4 times more damage than Critical Rate ';
    }

    if (input.characterElementalAttack > 10000 && input.characterElementalAttack <= 15000) {
        return 'Eelemental Attack gives you 1.5 times more damage than Crtical Rate ';
    }

    if (input.characterElementalAttack > 20000) {
        return 'Elemental Attack gives you 1.35 times more damage than Critical Rate ';
    }

    return;
}

function submit() {
    const totalDamageRounded = calculateDamage();
    const bestType = statusHint();

    if (totalDamageRounded) {
        getByid(character.totalDamage).innerText = totalDamageRounded;
        saveItem(character.critical, getByid(character.critical).value);
        saveItem(character.eAttack, getByid(character.eAttack).value);
    }

    if (bestType) {
        getByid(character.statusAnalysis).innerText = bestType;
    }

    if (!totalDamageRounded || !bestType) {
        alert('Please enter a valid number');
    }
}

function run() {
    getByid("submit").addEventListener("click", submit);
} run();