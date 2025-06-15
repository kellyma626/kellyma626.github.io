$(".girl").click(function() {
    $(".dialogue").text("\"Hi! I'm Kelly, a Computer Science student at the University of California, Riverside. I'm currently exploring AI/ML through the Break Through Tech AI Program at Cornell Tech.\"")
});

$(".headphones").click(function() {
    $(".dialogue").html(`"I love music. I’ve played the clarinet and guitar! My on-repeat artists are 
    <a target="_blank" href="https://www.youtube.com/watch?v=aalRn01lMmg&ab_channel=beabadoobeeVEVO">beabadoobee</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=M5q8q9K4M14&ab_channel=Grimes-Topic">Grimes</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=NLi2v-Gq-5A&ab_channel=LastGangRadio">Crystal Castles</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=Q2tMQMQvpos&ab_channel=MattMaltese">Matt Maltese</a>, and 
    <a target="_blank" href="https://www.youtube.com/watch?v=Orlbo9WkZ2E&ab_channel=DeathGrips">Death Grips</a>. Currently, my favorite song is '<a target="_blank" href="https://www.youtube.com/watch?v=2s3KNE_9qRU&ab_channel=LyricalMuse-ic">iloveyou</a>' by BETWEEN FRIENDS."`);
});

$(".laptop").click(function() {
    $(".dialogue").text("“I use my MacBook for classes, independent learning, and bingeing shows/movies! Some of my favorites to watch are Gone Girl, Howl's Moving Castle, Special A, Ouran High School Host Club, and Nana.”")
});

$(".cat").click(function() {
    $(".dialogue").text("“My aunt and I found a stray kitten in El Monte and took him in. His name is Monty. He’s cute, but I think he's getting a lil chunky.”")
});

$(".winc").click(function() {
    $(".screen1").html('<div class="topic">Women in Computing Website</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">October 2023 - December 2023</div>');
    $(".screen2").html('<li>Collaborated with team of 8 developers to construct static site generation Next.js website for displaying club information</li><li><p class="gray-space">Eliminated codebase redundancy by 250 lines</p> by developing map data structure and mapping algorithm that converts club event metadata into a React component</li>');
    $(".screen3").html('<ul><li>Created <p class="gray-space">reusable components</p>, such as modal and picture frame, to streamline display of event details and images</li><li>Enhanced website functionality by resolving <p class="gray-space">mobile responsiveness</p> issues and implementing prioritized features, attending weekly scrum meetings and using <p class="gray-space">AGILE</p> methodologies for efficient task tracking</li></ul></div><a target="_blank" href="https://winc.cs.ucr.edu/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/winc-website"><img class="www bug" src="contact/gitcat.png"/></a></div>');
});

$(".hsp").click(function() {
    $(".screen1").html('<div class="topic">Highlander Space Program Website</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">January 2024 - March 2024</div>');
    $(".screen2").html('<li>Coordinated with team of 9 developers to construct static site generation Next.js website for presenting club information</li><li>Integrated React component to showcase contact information and social media links in the footer of all webpages</li>');
    $(".screen3").html('<ul><li>Mapped text and images on pages describing the club’s various projects and initiatives</li><li>Enhanced website functionality by resolving <p class="gray-space">mobile responsiveness</p> issues and implementing prioritized features, attending weekly scrum meetings and using <p class="gray-space">AGILE</p> methodologies for efficient task tracking</li></ul></div><a target="_blank" href="https://hsp.ucrhighlanders.org/"><img class="www" src="misc/www.png"/></a><a target="_blank" href="https://github.com/acm-ucr/hsp-website"><img class="www bug" src="contact/gitcat.png"/></a></div>');
});

$(".bear").click(function() {
    $(".screen1").html('<div class="topic">BearCare (BearHack @ UCR)</div><div class="thin">React.js, Next.js, Tailwind CSS, GitHub</div><div class="thin">April 2024</div>');
    $(".screen2").html('<li>Implemented the frontend for a web app that simplifies locating local hospitals covered by specific insurance providers during emergencies, improving user access to emergency healthcare</li><li>Created insurance plan selection buttons to streamline filtering, completing the project in 24 hours with 3 teammates</li>');
    $(".screen3").html('<div><a target="_blank" href="https://devpost.com/software/bearcare-18lzch"><img class="www" src="misc/devpost.jpg"/></a><a target="_blank" href="https://github.com/aditithanekar/bearhack"><img class="www" src="contact/gitcat.png"/></a></div>');
});

$(".cave").click(function() {
    $(".screen1").html('<div class="topic">Cave Adventure RPG</div><div class="thin">C++, GoogleTest, GitHub, Valgrind, GDB, Gcov, Lcov</div><div class="thin">October 2024 - December 2024</div>');
    $(".screen2").html('<li>Developed a terminal-based fantasy strategy game in a team of 5, implementing core mechanics and design features in C++</li><li>Built a dynamic <p class="gray-space">Inventory</p> system with vector-based storage to streamline item management</li>');
    $(".screen3").html('<ul><li>Designed and integrated <p class="gray-space">Item</p>, <p class="gray-space">Potion</p>, and <p class="gray-space">Weapon</p> classes, managing item usage and stat modifications to optimize gameplay dynamics</li><li>Validated functionality thru unit testing with <p class="gray-space">GoogleTest</p> and CI pipelines using <p class="gray-space">GitHub Actions</p>, while debugging and profiling with <p class="gray-space">Valgrind</p>, <p class="gray-space">GDB</p>, <p class="gray-space">Gcov</p>, and <p class="gray-space">Lcov</p> to ensure optimal performance</li></ul><div><a target="_blank" href="https://github.com/kellyma073/rpg-cave-game"><img class="www" src="contact/gitcat.png"/></a></div>');
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