
let soundboard = document.querySelector('.soundboard');
let soundBoxes = [];

let numberOfBoxes = 12;
for (let i = 0; i < numberOfBoxes; i++) {
    let box = document.createElement('div');
    box.className = 'soundboard__box';
    box.innerHTML = `box${i}`;
    soundboard.appendChild(box);
    soundBoxes.push(box);
}

console.log(soundBoxes);
