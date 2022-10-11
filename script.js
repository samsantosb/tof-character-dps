/*custom html getters*/
const getByid = document.getElementById.bind(document);
const loadItem = localStorage.getItem.bind(localStorage);
const saveItem = (itemId) => {
    localStorage.setItem(itemId, getByid(itemId).value);
};



/*enums*/
const character = {
    criticalDamage: "character_critical_damage",
    critical: "character_critical",
    eAttack: "character_elemental_attack",
    totalDamage: "character_total_damage",
    statusAnalysis: "status_analysis",
}



/*LocalStorage */
function save() {
    const characterKeys = Object.keys(character);
    const nonSaveable = ["statusAnalysis", "totalDamage"];
    for (const key of characterKeys) {
        if (nonSaveable.includes(key)) {
            continue;
        }
        saveItem(character[key]);
    }
}

function load() {
    const characterKeys = Object.keys(character);
    for (const key of characterKeys) {
        getByid(character[key]).value = loadItem(character[key]);
    }
} load()



/*input-validator*/
function isNumber(data) {
    if (isNaN(data)) {
        alert('Please enter a valid number');
        return false;
    }
    return true;
}



/*instance varaibles*/
function createVariables() {
    return {
        characterCritical: function () {
            return Number(getByid(character.critical).value)
        }(),

        characterCriticalDamage: function () {
            const criticalPercent = getByid(character.criticalDamage).value;

            if (criticalPercent.includes('%')) {
                return Number(criticalPercent.replace('%', '')) / 100;
            }

            return Number(getByid(character.criticalDamage).value) / 100;
        }(),

        characterElementalAttack: function () {
            return Number(getByid(character.eAttack).value);
        }(),
    }
}



/*damage formula*/
function calculateDamage() {
    const input = createVariables()

    //crtical buff calculus
    const criticalPercent = input.characterCritical * 0.006276
    const criticalDamage = input.characterCriticalDamage;
    const criticalDamageBuff = criticalDamage * (criticalPercent / 100) + 1;

    //damage calculus
    const damage = input.characterElementalAttack * criticalDamageBuff;
    const totalDamageRounded = damage.toFixed(2);

    return totalDamageRounded
}



/*Status Hint based on critical/elemental attack*/
function statusHint() {
    const input = createVariables()

    //crtical buff calculus
    const criticalPercent = input.characterCritical * 0.006276
    const criticalDamage = input.characterCriticalDamage;
    const criticalDamageBuff = criticalDamage * criticalPercent;

    //coefficient calculus
    const criticalCoeficient = criticalDamageBuff / input.characterCritical
    const elementalCoeficient = 100 / input.characterElementalAttack

    //poportion
    const attackToCritPropotion = elementalCoeficient / criticalCoeficient

    return `One unit of your Elemental Attack is equivalent to ${attackToCritPropotion.toFixed(2)} of Critical`
}



/*submit/calculate button*/
function submit() {
    const totalDamageRounded = calculateDamage();
    const statusAnalysis = statusHint();

    if (!isNumber(totalDamageRounded)) return;

    if (totalDamageRounded && statusAnalysis) {
        getByid(character.totalDamage).innerText = totalDamageRounded;
        getByid(character.statusAnalysis).innerText = statusAnalysis;
        save();
    }
}



/*run*/
function run() {
    getByid("submit").addEventListener("click", submit);
} run();