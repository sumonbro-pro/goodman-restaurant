const ageInput = document.getElementById('ageInput');
const getRes = document.getElementById('getRes');
const ageResHeading = document.getElementById('ageResHeading');
const ageResContainer = document.getElementById('ageResContainer');

ageInput.addEventListener('focusout', () => {
    if (ageInput.value == 0) {
        ageInput.classList.add('inputWarning');
        ageInput.placeholder = 'You must fill age.';
    }

    let ageInputValue = ageInput.value;
    let numValue = parseInt(ageInputValue);

    getRes.addEventListener('click', () => {
        if (numValue <= 0) {
            ageResHeading.innerHTML = `You're${numValue} 😂`
            ageResContainer.innerHTML = `Age can't be ${numValue} years old. 😂`;
        } else if (numValue < 18 && numValue > !17) {
            ageResHeading.textContent = `You're ${numValue} years old(a child), tables for you:`;
            let tables = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7'];
            ageResContainer.innerHTML = '';
            for (let i = 0; i < tables.length; i++) {
                ageResContainer.innerHTML += `<button class="tableStyle">${tables[i]}</button>`;
            }
        } else if (numValue < 100 && numValue >= 18) {
            ageResHeading.innerHTML = `You're ${numValue} years old(an adult), tables for you:`;
            let tables = ['VIP 1', 'VIP 2', 'VIP 3', 'VIP 4', 'VIP 5'];
            ageResContainer.innerHTML = '';
            for (let i = 0; i < tables.length; i++) {
                ageResContainer.innerHTML += `<button class="tableStyle">${tables[i]}</button>`;
            }
        } else if (numValue >= 100 && numValue <= 120) {
            ageResHeading.innerHTML = `Enough! You're already ${numValue}`;
            ageResContainer.innerHTML = `We don't allow ${numValue} years old.`;
        } else if (numValue > 120) {
            ageResHeading.innerHTML = `Don't lie 😂`
            ageResContainer.innerHTML = `Don't lie that you're ${numValue} years old. 😂`;
        } else {
            ageInput.placeholder = 'Something wrong!';
        }
        console.log(numValue);
    })
})


