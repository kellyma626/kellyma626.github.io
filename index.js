$(".girl").click(function() {
    $(".dialogue").text("\"Hi! I'm Kelly, a Computer Science student at the University of California, Riverside. I'm currently exploring full-stack development and artificial intelligence/machine learning.\"")
});

$(".headphones").click(function() {
    $(".dialogue").html(`"I love music. I’ve played the clarinet and guitar! My on-repeat artists are 
    <a target="_blank" href="https://www.youtube.com/watch?v=8sgycukafqQ&ab_channel=LinkinPark">Linkin Park</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=gGdGFtwCNBE&list=PLKTZHUmUvnmIDAk4eJqGF6vJ3krJvLojU&index=2&ab_channel=TheKillersVEVO">The Killers</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=nnvqfucTs0o&ab_channel=KidCudi-Topic">Kid Cudi</a>, 
    <a target="_blank" href="https://www.youtube.com/watch?v=F6VfsJ7LAlE&ab_channel=LIVELOVEASAPVEVO">A$AP Rocky</a>, and 
    <a target="_blank" href="https://www.youtube.com/watch?v=Gl83mI69nX4&ab_channel=AtlanticRecords">Lupe Fiasco</a>. Currently, my favorite song is '<a target="_blank" href="https://www.youtube.com/watch?v=2s3KNE_9qRU&ab_channel=LyricalMuse-ic">iloveyou</a>' by BETWEEN FRIENDS."`);
});

$(".laptop").click(function() {
    $(".dialogue").text("“I use my MacBook for classes and independent learning... and, you know, bingeing shows and movies. I watch everything from rom-coms to psychological thrillers.”")
});

$(".cat").click(function() {
    $(".dialogue").text("“My aunt and I found a stray kitten in El Monte and took him in. His name is Monty. He’s a really affectionate and adorable lil guy, but he also scratched me a lot.”")
});

$(".research").click(function() {
    $(".screen1").html('<div class="topic">Undergraduate Research Assistant</div><div class="thin">University of California, Riverside</div><div class="thin">October 2024 - December 2024</div>');
    $(".screen2").html('<li>Collaborated with Ph.D. students and Professor Mariam Salloum to research machine learning methods for detecting AI-generated code in introductory computer science courses</li>');
    $(".screen3").html('<ul><li>Implemented models like Support Vector Machines (SVM) and XGBoost to understand their use in classifying code authenticity based on beginner coding patterns and mistakes</li><li>Learned Natural Language Processing techniques, including tokenization and feature extraction, to explore their potential in analyzing student coding patterns</li><li>Conducted literature reviews and analyzed research papers to assess existing solutions and identify gaps in AI detection for education</li></ul>');
});

$(".teacher").click(function() {
    $(".screen1").html('<div class="topic">Coding Instructor</div><div class="thin">Whizara</div><div class="thin">March 2025 - April 2025</div>');
    $(".screen2").html('<li>Taught 15 sixth-grade students during a week-long Scratch camp by leading lessons, guiding projects, and supporting understanding of core programming concepts</li><li>Helped students build Asteroid Game using event blocks, variables, and control structures, reinforcing skills through hands-on learning</li>');
    $(".screen3").html('<ul><li>Encouraged engagement and progress by providing real-time feedback, helping debug code, and celebrating student achievements</li></ul><img class="pic" src="pics/babies.png" style="height: 130px"/>');
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