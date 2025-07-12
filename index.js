const girl = document.querySelector('.girl');
const questPoint = document.querySelector('.quest-point');

let x = 0;
let y = 0;
let questTriggered = false;
const speed = 10;

const limits = {
  left: -330,
  right: 240,
  up: -150,
  down: 60
};

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  if (key === 'arrowup' || key === 'w') {
    y = Math.max(limits.up, y - speed);
  } else if (key === 'arrowdown' || key === 's') {
    y = Math.min(limits.down, y + speed);
  } else if (key === 'arrowleft' || key === 'a') {
    x = Math.max(limits.left, x - speed);
  } else if (key === 'arrowright' || key === 'd') {
    x = Math.min(limits.right, x + speed);
  }

  girl.style.transform = `translate(${x}px, ${y}px)`;
  checkProximity();
});

function checkProximity() {
    if (questTriggered) return;

    const girlBox = girl.getBoundingClientRect();
    const questBox = questPoint.getBoundingClientRect();

    const girlCenterX = girlBox.left + girlBox.width / 2;
    const girlCenterY = girlBox.top + girlBox.height / 2;
    const questCenterX = questBox.left + questBox.width / 2;
    const questCenterY = questBox.top + questBox.height / 2;

    const dx = girlCenterX - questCenterX;
    const dy = girlCenterY - questCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const threshold = 40;

    if (distance < threshold) {
      questTriggered = true;
      questPoint.remove();
      showPopup();
    }
  }

  function showPopup() {
    const popup = document.getElementById('custom-popup');
    popup.style.display = 'block';
  }
  
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('custom-popup').style.display = 'none';
  });


  window.addEventListener("keydown", function(e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }
  });

$(".quest-point").click(function() {
    $(".dialogue").text("\"Hm? Is that... an envelope? Try walking over with WASD!\"")
});

$(".headphones").click(function() {
    $(".dialogue").html(`"I love music. I’ve played the clarinet and guitar! Currently, my favorite song is '<a target="_blank" href="https://www.youtube.com/watch?v=2s3KNE_9qRU&ab_channel=LyricalMuse-ic">iloveyou</a>' by BETWEEN FRIENDS."`);
});

$(".laptop").click(function() {
    $(".dialogue").text("“I use my MacBook for classes, independent learning, and bingeing shows/movies like Special A, Ouran High School Host Club, and Nana!”")
});

$(".cat").click(function() {
    $(".dialogue").text("“My aunt and I found a stray kitten in El Monte and took him in. His name is Monty. He’s cute, but I think he's getting a lil chunky.”")
});

$(".winc").click(function() {
    $(".screen1").html('<div class="topic">Women in Computing Website</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">October 2023 - December 2023</div>');
    $(".screen2").html('<li>Developed a responsive website for Women in Computing at UCR to showcase club info</li><li>Used GitHub Issues to organize work, and collaborated through weekly Agile scrum meetings</li>');
    $(".screen3").html('<ul><li>Identified recurring production inconsistencies caused by hardcoded event data; implemented dynamic component generation, removed 250+ lines of redundant code, and initiated a broader cleanup across the codebase</li></ul></div><a target="_blank" href="https://winc.cs.ucr.edu/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/winc-website"><img class="www bug" src="contact/gitcat.png"/></a></div>');
});

$(".hsp").click(function() {
    $(".screen1").html('<div class="topic">Highlander Space Program Website</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">January 2024 - March 2024</div>');
    $(".screen2").html('<li>Helped develop a static site for the Highlander Space Program to share projects, events, and contact info</li>');
    $(".screen3").html('<ul><li>Built a reusable Footer component with club logo, contact text, and social icons using a 2-column + 3-column nested grid layout in Tailwind</li><li>Prioritized consistent design and reusability—this footer was used across all pages of the site</li></ul></div><a target="_blank" href="https://hsp.ucrhighlanders.org/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/hsp-website"><img class="www bug" src="contact/gitcat.png"/></a></div>');
});

$(".bear").click(function() {
    $(".screen1").html('<div class="topic">BearCare</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">April 2024</div>');
    $(".screen2").html('<li>Built the frontend UI for a hospital-locator app that helps users find hospitals covered by their insurance</li><li>Pair-programmed the reusable Provider component, mapping insurance plan names from centralized data for cleaner, scalable code</li>');
    $(".screen3").html('<ul><li>Set up the React/Next.js project from scratch and organized files for clarity and rapid iteration</li><li>Delivered a functional MVP frontend in under 24 hours, laying the groundwork for full-stack integration with map-based hospital search</li><li>Gained experience collaborating across the stack and aligning UI behavior with backend data handling and routing</li></ul><div><a target="_blank" href="https://devpost.com/software/bearcare-18lzch"><img class="www" src="misc/devpost.jpg"/></a><a target="_blank" href="https://github.com/aditithanekar/bearhack"><img class="www" src="contact/gitcat.png"/></a></div>');
});

$(".cave").click(function() {
    $(".screen1").html('<div class="topic">Cave Adventure RPG</div><div class="thin">C++, GoogleTest, GitHub, Valgrind, GDB, Gcov, Lcov</div><div class="thin">October 2024 - December 2024</div>');
    $(".screen2").html('<li>Collaborated with a team of 5 to build a turn-based RPG game in C++ from scratch using Agile workflows and weekly scrums</li><li>Designed an abstract Item class and implemented Potion and Weapon subclasses to support flexible in-game item behavior using polymorphism</li>');
    $(".screen3").html('<ul><li>Developed a vector-based inventory system that managed Item* pointers with dynamic memory handling, custom destructors, and safe removal logic</li><li>Wrote 20+ unit tests with GoogleTest and integrated continuous testing using GitHub Actions and CMake</li></ul><div><a target="_blank" href="https://github.com/kellyma073/rpg-cave-game"><img class="www" src="contact/gitcat.png"/></a></div>');
});

$(".qwer").click(function() {
    $(".screen1").html('<div class="topic">Daily Dose</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">February 2024</div>');
    $(".screen2").html('<li>Built the frontend for a web app that lets users write and schedule time capsules to send to their future selves</li><li>Collaborated closely with teammates via GitHub and pair programming to ship a working MVP in 24 hrs</li>');
    $(".screen3").html('<ul><li>Won "Best Beginner" and "Best Use of MongoDB" at QWERHacks at UCLA 2024, Major League Hacking\'s first collegiate LGBTQ+ hackathon</li></ul><div><a target="_blank" href="https://devpost.com/software/daily-dose-7ks69p"><img class="www" src="misc/devpost.jpg"/></a></div>');
});

 var song = new Audio("music/sexypigeon.mp3");
 var isPlaying = false;
 
 song.addEventListener("ended", function() {
     song.play();
 });
 
 $(".play").click(function() {
     if (isPlaying) {
         song.pause();
         $(".play").attr("src", "misc/play.png");
         isPlaying = false;
     } else {
         song.play();
         $(".play").attr("src", "misc/pause.png");
         isPlaying = true;
     }
 });
 
 const track = document.getElementById("artGalleryTrack");
 let currentIndex = 0;
 
 function changeSlide(direction) {
   const slides = document.querySelectorAll(".art-gallery-slide");
   const total = slides.length;
   currentIndex = (currentIndex + direction + total) % total;
   track.style.transform = `translateX(-${currentIndex * 100}%)`;
 }
 
// code below is from https://pastebin.com/cYaZamTx

var b = document.body;
var imgurl = "misc/fairydust.png";
var size = [20, 30];
 
function rand(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}
 
function getSize() {
return rand(size[0], size[1]);
}
 
function lerp(a, b, f) {
return(b - a) * f + a;
}
 
function heart(x, y) {
var s = getSize();
x -= s / 2;
y -= s / 2;
x = Math.floor(x) + rand(-5, 5);Math.floor(x) + rand(-5, 5);
y = Math.floor(y) + rand(-5, 5);
var fx = x + rand(-40, 40);
var fy = y + rand(-40, 40);
var i = document.createElement("img");
i.src = imgurl;
i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${x}px; top: ${y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
b.appendChild(i);
var f = 0;
var interval;
interval = setInterval(function() {var _x = Math.floor(lerp(x, fx, f));
var _y = Math.floor(lerp(y, fy, f));
i.style = `pointer-events: none; position: fixed; width: ${s}px; left: ${_x}px; top: ${_y}px; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; z-index: 1000000;`;
i.style.opacity = 1 - f;
f += 0.01;
if(f > 1) {
clearInterval(interval);
b.removeChild(i);
}
}, 10);
}
 
function bro(x, y) {
for(var i = 0; i < 5; i++) {
heart(x, y);
}
}
b.addEventListener("click", function(event) {
var x = event.clientX;
var y = event.clientY;
bro(x, y);
});

var myIndex = 0;
carousel();
 
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for(i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
myIndex++;
if(myIndex > x.length) {
myIndex = 1
}
x[myIndex - 1].style.display = "block";
setTimeout(carousel, 2000);
}