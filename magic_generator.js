let spellArea = document.getElementById("spell-area");
let generateBtn = document.getElementById("generate-btn");
let resetButton = document.getElementById("reset-button");
let ingredientsList = document.querySelectorAll("#ingredients-list li");

// function generateBtn() {
//     alert("Generating a magical spell!");
//     let countdown = 4;
//     if (countdown > 0) {
//         countdown--;
//         spellArea.innerHTML = "Happy Birtday to yo x3 ♪♪♪";
//     }else {
//         spellArea.innerHTML = "It's not your birthday!!!";
//     } 1500;
// }

generateBtn.onclick = () => {
    let countdown = 4;
    let interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            spellArea.textContent = `Generating spell in ${countdown}...`;
        } else {
            clearInterval(interval);
            // spellArea.textContent = `✨ ${randomlySelectedIngredient}`;
            // spellArea.textContent = "✨ Your magical spell is ready! ✨";
            const randomlySelectedIngredient = ingredientsList[Math.floor(Math.random() * ingredientsList.length)].textContent;
            spellArea.textContent = randomlySelectedIngredient;
            console.log(randomlySelectedIngredient);
            
        }
    }, 1000);
}

resetButton.onclick = () => {
    spellArea.textContent = "Your magical spell will appear here.";
}