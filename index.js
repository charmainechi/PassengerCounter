//document.getElementById("count-el").innerText = count

//initialize count as 0
//listen for clicks onthe increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let count_new = `${count} - `;
    saveEl.textContent += count_new;
    countEl.textContent = 0;
    count = 0;
}