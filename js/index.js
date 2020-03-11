// using camelCase id as variable in the code
// to work on the home link

// function clickEventHandler(event) {
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.currentTarget);
// }

// homeLink.addEventListener('click', clickEventHandler)

// document.querySelector('nav').addEventListener('click',clickEventHandler
// )

// document.querySelector('header').addEventListener('click', clickEventHandler
// )

// document.body.addEventListener('click',clickEventHandler)

// Above was from today's lesson. My code begions now.


// Makes any H2 you hover over bold for a moment
const allH2s = document.querySelectorAll('h2');
for (let i = 0; i < allH2s.length; i++) {
  allH2s[i].addEventListener('mouseover', makeItBold);
}

function makeItBold(event) {
  event.target.style.fontWeight = 'bold';
  setTimeout(function () {
    event.target.style.fontWeight = 'normal';
  }, 500)
}

// Alert the user only once to start the bus 
funBusImg.addEventListener('mouseleave', startMe);

function startMe(event) {
  event.target.removeEventListener(event.type, arguments.callee);
  alert('Click the van to start it!');
}

// If you click the fun bus img it plays a sound
document.querySelector(".intro > img").addEventListener('click', playSound);

function playSound(event) {
  const audio = new Audio("../audio/carstartgarage.mp3");
  audio.play();
  event.stopPropagation();
}

// Double clicking an image hides it temporarily
adventureImage.addEventListener('dblclick', function (event) {
  event.target.style.display = 'none';
  setTimeout(function () {
    event.target.style.display = 'block';
  }, 700)
})

// Nav Items will no longer refresh and they go bold on hover
const navItems = document.querySelectorAll('.nav-link');
console.log(navItems);
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('mouseenter', function (event) {
    event.target.style.fontWeight = 'bold';
    console.log('hovering')
  });
  navItems[i].addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = 'normal';
    console.log('leaving');
  });
  navItems[i].addEventListener('mousedown', function (event) {
    event.target.style.color = 'lightblue';
    event.target.style.fontWeight = 'normal';
    console.log('mouse down');
  });
  navItems[i].addEventListener('mouseup', function (event) {
    event.target.style.color = 'black';
    console.log('mouse up');
  });
  navItems[i].addEventListener('click', function (event) {
    event.preventDefault();
  })
}