
const countDownDate = new Date('Feb 6, 2018 23:59:59').getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = countDownDate - now;

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
    document.getElementById('cd-app').innerText = 'EXPIRED';
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