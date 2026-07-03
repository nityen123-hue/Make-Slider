let images = [
    "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",

    "https://us.123rf.com/450wm/kotenko/kotenko1304/kotenko130400095/18909232-beautiful-pink-flowers-of-rhododendron-glade-mountain-landscape-bright-sunny-day.jpg?ver=6",

    "https://png.pngtree.com/thumb_back/fh260/background/20241010/pngtree-the-bengal-tiger-emblem-of-wild-image_16362570.jpg",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhltdXAhkQSqCetdG4i_7e9xZ9QQ3sQ8mSmQ&s",

    "https://i.pinimg.com/236x/3b/3b/ab/3b3bab5841a875786e1314cb9809e569.jpg"
];

let image = document.getElementById("image");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let current = document.getElementById("current");
let total = document.getElementById("total");
let dots = document.querySelector(".points");

let index = 0;

total.innerHTML = images.length;

for(let i = 0; i < images.length; i++){
    dots.innerHTML += `<div class="do"></div>`;
}

let allDots = document.querySelectorAll(".do");


function showImage(){

    image.src = images[index];
    current.innerHTML = index + 1;

    allDots.forEach(function(dot){
        dot.classList.remove("active");
    });

    allDots[index].classList.add("active");
}

showImage();


next.onclick = function(){
    index++;
    if(index == images.length){
        index = 0;
    }
    showImage();
}

prev.onclick = function(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();
}

allDots.forEach(function(dot, i){
    dot.onclick = function(){

        index = i;
        showImage();

    }
});


setInterval(function(){
    index++;
    if(index == images.length){
        index = 0;
    }
    showImage();
},5000);