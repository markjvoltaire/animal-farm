// import functions and grab DOM elements

const tazImg = document.getElementById('taz');
const tazNoise = document.getElementById('tazSound');

const bugsImg = document.getElementById('bugs');
const bugsAudio = document.getElementById('bugsSound');

const daffyImg = document.getElementById('daffy');
const daffyAudio = document.getElementById('daffySound');
// initialize global state

// set event listeners 

tazImg.addEventListener('click', ()=>{
    tazNoise.play();
});

bugsImg.addEventListener('click', ()=>{
    bugsAudio.play();
});

daffyImg.addEventListener('click', ()=>{
    daffyAudio.play();
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
