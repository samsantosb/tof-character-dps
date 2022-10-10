const getByid = document.getElementById.bind(document);
const loadItem = localStorage.getItem.bind(localStorage);
const saveItem = localStorage.setItem.bind(localStorage);

const character = {
    criticalDamage: "character_critical_damage",
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
        characterCriticalDamage: function () {
            const criticalPercent = getByid(character.criticalDamage).value;

            if (criticalPercent.includes('%')) {
                return Number(criticalPercent.replace('%', '')) / 100;
            }

            return Number(getByid(character.criticalDamage).value) / 100;
        }(),
        characterElementalAttack: Number(getByid(character.eAttack).value),
    }
}

function calculateDamage() {
    const input = createVariables()

    //critical formula
    const criticalPercent = input.characterCritical * 0.006276
    const criticalDamage = input.characterCriticalDamage;
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



    return input.characterCriticalDamage;
}

function submit() {

    const totalDamageRounded = calculateDamage();
    const statusAnalysis = statusHint();

    if (!totalDamageRounded || !statusAnalysis) {
        alert('Please enter a valid number');
        return;
    }

    if (totalDamageRounded) {
        getByid(character.totalDamage).innerText = totalDamageRounded;
        saveItem(character.critical, getByid(character.critical).value);
        saveItem(character.eAttack, getByid(character.eAttack).value);
    }

    if (statusAnalysis) {
        getByid(character.statusAnalysis).innerText = statusAnalysis;
    }
}

function run() {
    getByid("submit").addEventListener("click", submit);
} run();