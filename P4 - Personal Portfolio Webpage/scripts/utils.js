const WELCOME_TEXT = "Hello World!";
const BIRTHDAY = new Date(2005, 2, 16); // March 16, 2005

// typing effect on heading, typing "Hello World!"
async function typeEffect(txt) {
    const typeArea = document.getElementById('type-area');

    // append each letter in every .2s to create type effect
    for (let i = 0; i < txt.length; i++) {
        typeArea.innerHTML += txt[i];
        await new Promise(r => setTimeout(r, 200));
    }
}


// current age calculator
function calculateAge(birthday) {
    let difference = Date.now() - birthday.getTime();
    let ageDatetime = new Date(difference); 

    return Math.abs(ageDatetime.getUTCFullYear() - 1970);
}

function updateAgeSpan() {
    const container = document.getElementById('age');
    container.innerHTML = calculateAge(BIRTHDAY);
}

// call
typeEffect(WELCOME_TEXT);
updateAgeSpan();
