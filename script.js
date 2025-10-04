const hero = document.getElementById('hero');
const images = 
[
    'images/1.avif',
    'images/4.jpg',
    'images/2.jpg',
    'images/1.jpg',
    'images/3.jpg'
];

let i = 0;
hero.style.backgroundImage = `url('${images[i]}')`;

setInterval(() => 
{
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url('${images[i]}')`;
}, 5000); 
