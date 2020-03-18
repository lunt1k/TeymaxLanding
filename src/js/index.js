import '../style/style.css';
import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 186
  }).mount();

console.log("Welcome! Greetings from app.js. Let's learn Webpack2");