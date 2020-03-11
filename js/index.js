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
  // console.log(allH2s[i]);
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
  console.log('called startMe');
  event.target.removeEventListener(event.type, arguments.callee);
  alert('Click the van to start it!');
}

// If you click the fun bus img it plays a sound
document.querySelector(".intro > img").addEventListener('click', playSound);

function playSound(event) {
  const audio = new Audio("../audio/carstartgarage.mp3");
  audio.play();
  // console.log('called playSound');
  event.stopPropagation();
}

// Double clicking an image hides it temporarily
adventureImage.addEventListener('dblclick', function (event) {
  console.log('hide me')
  event.target.style.display = 'none';
  setTimeout(function () {
    event.target.style.display = 'block';
  }, 700)
})