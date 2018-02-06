



document.addEventListener("DOMContentLoaded", function() {


const countDownDate = new Date('Feb 6, 2018 22:59:59').getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date()
  const utcnow = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()).getTime();


  // Find the distance between now an the count down date
  const distance = countDownDate - utcnow;
  console.log(distance)
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 10) days = '0' + days;
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  // Display the result in the element with id="demo"
  document.getElementById('days').innerText = days + " : ";
  document.getElementById('hours').innerText = "  " + hours + " : ";
  document.getElementById('minutes').innerText = "  " + minutes + " : ";
  document.getElementById('seconds').innerText ="  "+ seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
 
    const goodLuck = document.querySelector('.count-down-container').innerHTML = "<h1 class='count-down-container__time'> Good Luck </h1><p style='text-align: center; font-size: 3rem; color: #fff;'> For Phase 2 <p>";

  }
}, 1000);

// mobile navigation

const navMobile = document.querySelector('.nav-mobile');

const mobileOpenButton = document.querySelector('.mobile-open-btn');

const mobileCloseButton = document.querySelector('.mobile-close-btn');


 function hideIt() {
   return navMobile.setAttribute('style', 'width: 0;');
 }

 function showIt() {
   return navMobile.setAttribute('style', 'width: 70%; padding-left: 7rem;');
}

mobileOpenButton.addEventListener('click', showIt);

mobileCloseButton.addEventListener('click', hideIt);

// quizlist - SHAME


let lesson2List = document.querySelector('.lesson-2');
lesson2List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


let lesson3List = document.querySelector('.lesson-3');
lesson3List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let lesson4List = document.querySelector('.lesson-4');
lesson4List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let lesson6List = document.querySelector('.lesson-6');
lesson6List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let lesson7List = document.querySelector('.lesson-7');
lesson7List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let lesson8List = document.querySelector('.lesson-8');
lesson8List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let lesson9List = document.querySelector('.lesson-9');
lesson9List.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

});







// service worker

if ('serviceWorker' in navigator) {

  window.addEventListener('load', function() {
    navigator.serviceWorker
        .register('/sw.js', {scope: './'})
        .then(function(registration) {
      // If registration is successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      //If registration is failed :(
      console.log('ServiceWorker registration failed:', err);
    });
  });
} 
