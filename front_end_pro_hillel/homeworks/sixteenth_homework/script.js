'use strict';

let formEl = document.getElementById('form')

let spritesSelect = document.getElementById('sprites-select')
let seedInput = document.getElementById('seed-input')
let bgInput = document.getElementById('background-input')
let downloadEl = document.getElementById('downoload')


let imgEl = document.getElementById('img')

changeAvatar()

function changeAvatar() {
    let sprite = spritesSelect.value
    let seed = seedInput.value
    let background = bgInput.value.slice(1)


    let src = `https://avatars.dicebear.com/api/${sprite}/${seed}.svg?background=%23${background}`

    imgEl.src = src
}

async function downoloadAvatar() {
    await fetch(imgEl.src)
        .then((res) => {
            return res.blob();
        })
        .then((data) => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(data);
            let downoloadText;
            if(seedInput.value == ''){
                downoloadText = 'noname'
            }else {
                downoloadText = seedInput.value
            }
            a.download = downoloadText;
            a.click();
        });
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    downoloadAvatar()
})

downloadEl.addEventListener('click', (e) => {
    downoloadAvatar()
})


seedInput.addEventListener('keyup', (e) => {
    changeAvatar()
})

bgInput.addEventListener('change', (e) => {
    changeAvatar()
})

spritesSelect.addEventListener('change', (e) => {
    changeAvatar()
})

console.log(seedInput.value);