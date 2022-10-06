//find character_critical and character_damage id, sum them and display in character_total_damage id

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
    console.log(input.characterElementalAttack)
    const damage = input.characterElementalAttack * criticalDamageBuff;
    const totalDamageRounded = damage.toFixed(2);
    console.log(totalDamageRounded);

}

function submit() {
    createVariables();
    calculateDamage();
}

function init() {
    document.getElementById("submit").addEventListener("click", submit);
} init();