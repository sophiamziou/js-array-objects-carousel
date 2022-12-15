// DEFINISCO LA FUNZIONE NEXT E PREV
function goToNextSlide(){
    if(itemActive < items.length - 1){
        
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        itemActive++;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

    }
    else{

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        itemActive = 0;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

    }
};

function goToPrevSlide(){
    if(itemActive > 0){

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        itemActive--;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

    }

    else{

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        itemActive = items.length - 1;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

    }
};

//Creo array di oggetti
const carouselObjects  = 
[
    { 
        img : "01.webp",
        title : "Marvel Spiderman Miles Morale",
        intro : "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    },
    {
        img : "02.webp",
        title : "Ratchet Clank",
        intro : "Ratchet and Clank tells the story of two unlikely heroes as they struggle to stop a vile alien named Chairman Drek from destroying every planet in the Solana Galaxy."
    },
    {
        img : "03.webp",
        title : "Fortnite",
        intro : "Players collaborate to survive in an open-world environment, by battling other characters who are controlled either by the game itself, or by other players"
    },
    {
        img : "04.webp",
        title : "Stray",
        intro : "Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly."
    },
    {
        img : "05.webp",
        title : "Avengers",
        intro : "The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City"
    }
];

//Creiamo dinamicamente i div con le immagini e le info del carosello
let itemsContent = '';
let itemsThumbnails = '';

for(let i = 0; i < carouselObjects.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${carouselObjects[i].img}">
        <div class="info">
        <h3 class="titolo" >${carouselObjects[i].title}</h3>
        <p class="descrizione">${carouselObjects[i].intro}</p>
        </div>
    </div>`
    itemsThumbnails += `<div class="thumb"><img src="./img/${carouselObjects[i].img}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

// thumbnails
const thumbnailsPreview = document.querySelector('.thumbnails')
thumbnailsPreview.innerHTML += itemsThumbnails;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

const items = document.getElementsByClassName('item');
let itemActive = 0;
items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione
const circles = document.getElementsByClassName('circle');
circles[itemActive].classList.add('active');
const thumbnails = document.getElementsByClassName('thumb');

const next = document.querySelector('.prev');
const prev = document.querySelector('.next');

next.addEventListener('click', function(){
    goToNextSlide();
});

prev.addEventListener('click', function(){
    goToPrevSlide();
});

const autoplay_btn = document.getElementById("auto")
let myInterval = setInterval(goToNextSlide, 3000);

autoplay_btn.addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval = setInterval(goToNextSlide, 1000);
});

const stop_btn = document.getElementById("stop")
stop_btn.addEventListener('click', function(){
    clearInterval(myInterval);
});

const reverse_btn = document.getElementById("reverse")
reverse_btn.addEventListener('click', function(){
    clearInterval(myInterval);
    myInterval = setInterval(goToPrevSlide, 1000);
});