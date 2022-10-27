//1 Creo un array di oggetti : nome - descrizione - foto
const cities =
[
{
  name:"Bari",
  description:"Se Parigi avesse il mare sarebbe una piccola Bari",
  picture:"./assets/img/bari.jpg"
},

{
  name:"Roma",
  description:"Capitale italiana, è la città con più beni storici e architettonici al mondo",
  picture:"./assets/img/roma.jpg"
},

{
  name:"Milano",
  description:"Grande centro urbano, nonchè la capitale della moda e dell'economia italiana",
  picture:"./assets/img/milano.jpg"
},

{
  name:"Firenze",
  description:"Sviluppata sulle due sponde dell'Arno, è fra le città italiane una delle più rinominate per arte e storia ",
  picture:"./assets/img/firenze.jpg"
},

{
  name:"Napoli",
  description:"Ha uno dei più grandi centri storici del mondo e il suo orgoglio sono le 448 chiese storiche e monumentali",
  picture:"./assets/img/napoli.jpg"
},
]

// Dichiaro gli elementi del dom
const sliderContainer = document.querySelector('.slider-container');
const thumbContainer = document.querySelector('.thumb-container');
const mainWrapper = document.querySelector('.main-wrapper')


// Variabili globali 
let counterImages = 0;
let isOver = false;
let isForward = true;
let isPause = false;
init();

function init(){

  cities.forEach( (city, index) => {
    sliderContainer.innerHTML += getContentSlider(city);
    thumbContainer.innerHTML += getContentThumbnail(city, index);
  })
}

function getContentSlider(city){
  const{name, description, picture} = city;

  return`  <div class="slide">
  <div class="text-content">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
  <img class="slider-image" src="${picture}" alt="${name}">
  </div>  
  `
}

function getContentThumbnail(city, index){
const{name, picture} = city;

return `<div class="thumb" onclick="change(${index})">
<img class="thumbnail-image" src="${picture}" alt="${name}">
</div>
`
}


function activate(){
  document.getElementsByClassName('slide')[counterImages].classList.add('active');
  document.getElementsByClassName('thumb')[counterImages].classList.add('active');
}

function deactivate(){
  document.getElementsByClassName('slide')[counterImages].classList.remove('active');
  document.getElementsByClassName('thumb')[counterImages].classList.remove('active');
}

activate();

function change(index){
  console.log("click");
  deactivate();
  counterImages = index;
  activate();
}


const nextBtn= document.querySelector('.next');
const prevBtn= document.querySelector('.prev');
nextBtn.isNext = true;
prevBtn.isNext = false;

nextBtn.addEventListener('click', nextPrevImage);
prevBtn.addEventListener('click', nextPrevImage);

function nextPrevImage(){
  deactivate();
  nextOrPrev(this.isNext);
  activate()
}

function nextOrPrev(isNext){
if(isNext){
  counterImages++
  if(counterImages === cities.length)counterImages = 0;
}else{
  counterImages--;
  if(counterImages < 0) counterImages = cities.length - 1;
}
}

mainWrapper.addEventListener('mouseenter', () =>{
  isOver = true;
})
mainWrapper.addEventListener('mouseleave', () =>{
  isOver = false;
})


const stopBtn = document.querySelector('#stop-btn');
const playBtn = document.querySelector('#play-btn');
const backBtn = document.querySelector('#back-btn');
const forwardBtn = document.querySelector('#forward-btn');

stopBtn.addEventListener('click', () =>{
  isOver = !isOver ;
  stopBtn.classList.add('hide');
  playBtn.classList.remove('hide');
});

playBtn.addEventListener('click', () =>{
  isOver = !isOver;
  stopBtn.classList.remove('hide');
  playBtn.classList.add('hide');
})


backBtn.addEventListener('click', () =>{
  isForward = !isForward;
 
});

forwardBtn.addEventListener('click', () =>{
  isForward = !isForward;
 
});

setInterval(()=>{
  if(!isOver){
    deactivate();
    nextOrPrev(isForward);
    activate();
  }
}, 2000)
