//varibales 
let sq = document.querySelector('#square');

//changeCSS function
function changeCSS(bg, radius) {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
} //changeCSS

//changeImg function 
function changeImg() {
    sq.style.borderRadius = '90%';
    sq.style.width = '200px';
    sq.style.height = '200px';
    sq.style.left = '200px';
    sq.style.top = '200px';
    sq.style.backgroundImage = "url('../Project1/html5up-phantom/images/Small_vampire_pics/soul.jpg')";

}