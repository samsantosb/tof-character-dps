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
    statusAnalysis: "status_analysis"
}



/*LocalStorage */
function save() {
    const characterKeys = Object.keys(character);
    for (const key of characterKeys) {
        if (key) {
            saveItem(character[key]);
        }
    }
}

function load() {
    const characterKeys = Object.keys(character);
    for (const key of characterKeys) {
        if (key) {
            getByid(character[key]).value = loadItem(character[key]);
        }
    }
} load()




/*instance varaibles*/
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

    if (isNaN(totalDamageRounded)) {
        return;
    }

    return totalDamageRounded
}




/*Status Hint based on critical/elemental attack*/
function statusHint() {
    const input = createVariables()

    const criticalPercent = input.characterCritical * 0.006276
    const criticalDamage = input.characterCriticalDamage;
    const criticalDamageBuff = criticalDamage * criticalPercent;


    const criticalCoeficient = criticalDamageBuff / input.characterCritical
    const elementalCoeficient = 100 / input.characterElementalAttack

    const attackToCritPropotion = elementalCoeficient / criticalCoeficient

    return `One unit of you Elemental Attack is equivalent to ${attackToCritPropotion.toFixed(2)} of Critical Damage`
}



/*submit/calculate button*/
function submit() {
    const totalDamageRounded = calculateDamage();
    const statusAnalysis = statusHint();

    if (!totalDamageRounded || !statusAnalysis) {
        alert('Please enter a valid number');
        return;
    }

    if (totalDamageRounded) {
        getByid(character.totalDamage).innerText = totalDamageRounded;
        save();

    }

    if (statusAnalysis) {
        getByid(character.statusAnalysis).innerText = statusAnalysis;
        save();
    }
}



/*run*/
function run() {
    getByid("submit").addEventListener("click", submit);
} run();