let channel1 = [], channel2 = [], channel3 = [], channel4 = [];
let recStartOne = 0, recStartTwo = 0, recStartThree = 0, recStartFour = 0;
let isRecordingOne = false, isRecordingTwo = false, isRecordingThree = false, isRecordingFour = false;

let audioDOMOne = document.querySelector('#audioDOMOne');
let audioDOMTwo = document.querySelector('#audioDOMTwo');
let audioDOMThree = document.querySelector('#audioDOMThree');
let audioDOMFour = document.querySelector('#audioDOMFour');
let audioName = '';
let soundboard = document.querySelector('.soundboard');
let soundBoxes = [];

//https://blogs.longwin.com.tw/lifetype/key_codes.html key codes
let sounds = [
    {key: '110', src: 'sounds/hats2.wav', name: 'hat'},
    {key: '98', src: 'sounds/kick2.wav', name: 'kick'},
    {key: '99', src: 'sounds/snare2.mp3', name: 'snare'},
    {key: '118', src: 'sounds/snare2.mp3', name: 'snare'},
    {key: '101', src: 'sounds/crash1.wav', name: 'crash1'},
    {key: '114', src: 'sounds/crash3.wav', name: 'crash2'},
    {key: '117', src: 'sounds/chant.wav', name: 'chant'},
    {key: '111', src: 'sounds/gun.wav', name: 'gun'},
    {key: '102', src: 'sounds/clap.WAV', name: 'clap'}
    ];

let numberOfBoxes = 9;

function recordChannelOne() {
    recStartOne = Date.now();
    isRecordingOne = !isRecordingOne;
    if (isRecordingOne) {
        channel1 = [];
        document.querySelector('#channel1').style.color = 'red';
    } else {
        document.querySelector('#channel1').style.color = 'white';
    }
}
function recordChannelTwo() {
    recStartTwo = Date.now();
    isRecordingTwo = !isRecordingTwo;
    if (isRecordingTwo) {
        channel2 = [];
        document.querySelector('#channel2').style.color = 'red';
    } else {
        document.querySelector('#channel2').style.color = 'white';
    }
}
function recordChannelThree() {
    recStartThree = Date.now();
    isRecordingThree = !isRecordingThree;
    if (isRecordingThree) {
        channel3 = [];
        document.querySelector('#channel3').style.color = 'red';
    } else {
        document.querySelector('#channel3').style.color = 'white';
    }
}
function recordChannelFour() {
    recStartFour = Date.now();
    isRecordingFour = !isRecordingFour;
    if (isRecordingFour) {
        channel4 = [];
        document.querySelector('#channel4').style.color = 'red';
    } else {
        document.querySelector('#channel4').style.color = 'white';
    }
}
document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
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

    if(isRecordingOne) {
        let timer = Date.now() - recStartOne;
        channel1.push(
            {
                name: key,
                time: timer
            }
        );
    }
    if(isRecordingTwo) {
        let timer = Date.now() - recStartTwo;
        channel2.push(
            {
                name: key,
                time: timer
            }
        );
    }
    if(isRecordingThree) {
        let timer = Date.now() - recStartThree;
        channel3.push(
            {
                name: key,
                time: timer
            }
        );
    }
    if(isRecordingFour) {
        let timer = Date.now() - recStartFour;
        channel4.push(
            {
                name: key,
                time: timer
            }
        );
    }
}

function playChannelOne() {
    channel1.forEach(sound => {
        setTimeout(
            () => {
                audioDOMOne = document.querySelector(`#audio${sound.name}`);
                audioDOMOne.currentTime = 0;
                audioDOMOne.play()
            }
            , sound.time
        )
    })
}

function playChannelTwo() {
    channel2.forEach(sound => {
        setTimeout(
            () => {
                audioDOMTwo = document.querySelector(`#audio${sound.name}`);
                audioDOMTwo.currentTime = 0;
                audioDOMTwo.play()
            }
            , sound.time
        )
    })
}

function playChannelThree() {
    channel3.forEach(sound => {
        setTimeout(
            () => {
                audioDOMThree = document.querySelector(`#audio${sound.name}`);
                audioDOMThree.currentTime = 0;
                audioDOMThree.play()
            }
            , sound.time
        )
    })
}

function playChannelFour() {
    channel4.forEach(sound => {
        setTimeout(
            () => {
                audioDOMFour = document.querySelector(`#audio${sound.name}`);
                audioDOMFour.currentTime = 0;
                audioDOMFour.play()
            }
            , sound.time
        )
    })
}