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


// Aggiungo funzionalità ai bottoni next e prev che cambieranno l'immagine


//Creo le funzioni per stampare gli oggetti all'interno del dom dinamicamente
readCities();
function readCities(){
  cities.forEach( (city) => {
    printCities(city);
  })
}

function printCities(city){
  
let sliderContent = sliderContainer.innerHTML; 

cityName = city.name;
description= city.description;
picture = city.picture;

 sliderContent =
`
<div class="slide">
<div class="text-content">
  <h2>${cityName}</h2>
  <p>${description}</p>
</div>
<img class="slider-image" src="${picture}" alt="${cityName}">
</div>
`
let thumbContent = thumbContainer.innerHTML;

cityName = city.name;
picture = city.picture;

thumbContent =
`
<div class="thumb unactive">
<img class="thumbnail-image" src="${picture}" alt="${cityName}">
</div>

`
thumbContainer.innerHTML += thumbContent ;
sliderContainer.innerHTML += sliderContent;
}

// Rendo visibili solo i primi elementi dei container slider & thumb
const showedPicture = document.querySelector('.slide').classList.add('active');
const showedThumb = document.querySelector('.thumb').classList.add('active');
const arrayOfPicture = document.getElementsByClassName('slide');
const arraOfThumbNail = document.getElementsByClassName('thumb')
// creo l'event listener dei bottoni
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

btnNext.addEventListener('click', function() {
  switchPicture(true)
});

btnPrev.addEventListener('click', function() {
  switchPicture(false)
});

//creo una funzione generica per cambiare immagine al click del bottone
let counter = 0;

function switchPicture(isNext){
 
  arrayOfPicture[counter].classList.remove('active');
  arraOfThumbNail[counter].classList.remove('active');
  if(isNext){
    counter++;
    if(counter === arrayOfPicture.length){counter=0;}
  }else{
    counter--;
    if(counter < 0){counter = arrayOfPicture.length -1;}
  }
  arrayOfPicture[counter].classList.add('active');
  arraOfThumbNail[counter].classList.add('active');
}

setInterval()
