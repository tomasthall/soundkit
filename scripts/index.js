let channel1 = [], channel2 = [], channel3 = [], channel4 = [];
let recStart = 0;
let isRecording = false;

let audioDOM = document.querySelector('#audioDOMe');
let audioName = '';
let soundboard = document.querySelector('.soundboard');
let soundBoxes = [];
let sounds = [
    {key: '110', src: 'sounds/hats2.wav', name: 'hat'},
    {key: '98', src: 'sounds/kick2.wav', name: 'kick'},
    {key: '99', src: 'sounds/snare2.mp3', name: 'snare'}
    ];

let numberOfBoxes = 3;

function recordMusic(e) {
    recStart = Date.now();
    isRecording = !isRecording;
    if(isRecording) {
        channel1 = [];
        document.querySelector('#rec').classList = 'pink';
    } else {
        document.querySelector('#rec').style.color = 'white';
    }
}
document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
    document.querySelector('.record-button').addEventListener('click', recordMusic);

    for (let i = 0; i < numberOfBoxes; i++) {
        let box = document.createElement('div');
        box.className = 'soundboard__box';
        box.innerHTML = sounds[i].name;
        let audio = document.createElement('audio');
        audio.id = 'audio' + sounds[i].key;
        audio.style.display = 'none';
        let source = document.createElement('source');
        source.src = sounds[i].src;
        source.type = 'audio/mpeg';
        audio.appendChild(source);
        box.appendChild(audio);
        box.addEventListener('click', (e) => {
            document.getElementById('audio' + i).play();
        });
        soundboard.appendChild(box);
        soundBoxes.push(box);
    }
    window.addEventListener('keypress', playSound);
    document.querySelector('#play').addEventListener('click', playMusic);
}

function playSound(e) {
    let key = 0;
    audioName = sounds.filter( sound => {
        if(sound.key == e.charCode) {
            key = sound.key;
            return sound.key;
        }
    });
    audioDOM = document.querySelector(`#audio${key}`);
    audioDOM.currentTime = 0;
    audioDOM.play();

    if(isRecording) {
        let timer = Date.now() - recStart;
        channel1.push(
            {
                name: key,
                time: timer
            }
        );
    }
}

function playMusic() {
    channel1.forEach(sound => {
        setTimeout(
            () => {
                console.log(sound);
                audioDOM = document.querySelector(`#audio${sound.name}`);
                audioDOM.currentTime = 0;
                audioDOM.play()
            }
            , sound.time
        )
    })
}