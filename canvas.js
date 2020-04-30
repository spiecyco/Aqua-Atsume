import Fish from "./modules/Fish.js";
import * as Util from "./modules/Util.js";

let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');

const SCREEN_X = 1080;
const SCREEN_Y = 720;

const Fishes = Fish.getFishes();

let baseClickerValue = 0;

if (localStorage.length == 0) {
    localStorage.setItem('myFish', JSON.stringify(['betta']));
    localStorage.setItem('myGold', JSON.stringify(0));
    localStorage.setItem('timesSpun', JSON.stringify(0));
    alert('Click anywhere to earn gold!')
}

c.setAttribute('width', SCREEN_X);
c.setAttribute('height', SCREEN_Y);

c.addEventListener('click', function clickerHandler() {
    let gold = JSON.parse(localStorage.getItem('myGold'));
    gold += baseClickerValue;
    localStorage.setItem('myGold', JSON.stringify(gold));
    console.log(baseClickerValue);
});



const {
    ian,
    betta,
    clown,
    gold,
    angel,
    angler,
    catfish,
    koi,
    blowfish,
    goldenKoi,
    mantaray,
    shark,
    ninja,
} = Fishes;

const backgroundImage = './src/background.png';



const fishKeys = Object.keys(Fishes);
const fishValues = Object.values(Fishes);
let toggle = 0

document.getElementById('spin').addEventListener('click', () => {
    let gold = JSON.parse(localStorage.getItem('myGold'));
    if (gold >= 15){
        let fishies = JSON.parse(localStorage.getItem('myFish'));
    localStorage.setItem('myGold', JSON.stringify(gold - 15));
    ctx.font = "30px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Gold: " + JSON.parse(localStorage.getItem('myGold')), 900, 50);

    let index = Math.floor(Math.random() * fishKeys.length);
    if (Math.random() > .5) {
        alert('You got rubbish');
    } else {
        let fish = fishValues[index];
        if (JSON.parse(localStorage.getItem('myFish')).includes(fishKeys[index])) {
            alert("You got rubbish");
        } else {
            fishies.push(fishKeys[index]);
            alert('You got a(n) ' + fish.name + '(' + fish.stars + ' stars)');
            localStorage.setItem('myFish', JSON.stringify(fishies));
            update();
        }
    }
    // localStorage.setItem('myFish', ['betta', 'goldenKoi', 'ian']);
    gold -= 15;
    localStorage.setItem('myGold', JSON.stringify(gold));

    } else {
        alert('You are broke');
    }
    
    
        // alert('You won a new fish!');
    
    // if (toggle == 0) {
    //     Util.addFish(ian);
    //     // localStorage.setItem('myGold', JSON.stringify(15));
    // }

    // if (toggle == 1) {
    //     // localStorage.setItem('myGold', JSON.stringify(0));
    // }
   
    // toggle++;
});

document.getElementById('toggleAll').addEventListener('click', ()=>{
    localStorage.clear();
    
    Util.addFish(goldenKoi)
    Util.addFish(angel);
    Util.addFish(ian);
    Util.addFish(shark);
    Util.addFish(clown);
    Util.addFish(angler);
    Util.addFish(koi);
    Util.addFish(catfish);
    Util.addFish(gold);
    betta.move();
    goldenKoi.move();
    ian.move();
    angel.move();
    shark.move();
})


console.log(fishKeys);
console.log(fishValues);


function update() {
    let amount1 = 0;
    let amount3 = 0;
    let amount4 = 0;
    let amount5 = 0;
    baseClickerValue = 0;

    for (let i = 0; i < fishKeys.length; i++) {
        if (JSON.parse(localStorage.getItem('myFish')).includes(fishKeys[i])) {
            Util.addFish(fishValues[i]);
            if (fishValues[i].stars == 3) {
                amount3++;
            } else if (fishValues[i].stars == 4) {
                amount4++;
            } else if (fishValues[i].stars == 5){
                amount5++
            }
        } 
    }
    
    baseClickerValue = baseClickerValue + amount3 * 1 + amount4 * 3 + amount5 * 5;
    
}

update();


function render() {

    // console.log(fishValues);
    

    Util.renderImage(backgroundImage, 0, 0, 1);
    for (let i = 0; i < fishKeys.length; i++) {
        if (JSON.parse(localStorage.getItem('myFish')).includes(fishKeys[i])) {
            Util.addFish(fishValues[i]);
            
            // console.log(JSON.parse(localStorage.getItem('myFish')).includes(fishKeys[i]));
        } else {
        }
    }
    // if (toggle == 1 || toggle == 2) {
    //     Util.addFish(ian);
    //     ian.move;
    // }

    // if (toggle == 2) {
    //     Util.addFish(goldenKoi);
    //     goldenKoi.move()
    // } 
    // if (toggle == 3) {
    //     Util.renderImage(backgroundImage, 0, 0, 1);
    //     Util.addFish(betta);
    //     Util.addFish(goldenKoi)
    //     Util.addFish(angel);
    //     Util.addFish(ian);
    //     Util.addFish(shark);
    //     Util.addFish(clown);
    //     Util.addFish(angler);
    //     Util.addFish(koi);
    //     Util.addFish(catfish);
    //     Util.addFish(gold);
    //     betta.move();
    //     goldenKoi.move();
    //     ian.move();
    //     angel.move();
    //     shark.move();
    // }
    

    ctx.font = "30px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Gold: " + JSON.parse(localStorage.getItem('myGold')), 900, 50);

    window.requestAnimationFrame(render);

    
}

render();

// window.requestAnimationFrame(render);


// interval(render, 1);

// let loop = setInterval(render, 1);

