//Candidate one 
let candidateNames1 = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore"]
let candidatePix1 = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg"]
let output1 = document.querySelector('#alsoRan1');
let next1 = document.querySelector('#next1');
let previous1 = document.querySelector('#previous1');

//Candidate two
let candidateNames2 = ["Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul"]
let candidatePix2 = ["graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg"]
let output2 = document.querySelector('#alsoRan2');
let next2 = document.querySelector('#next2');
let previous2 = document.querySelector('#previous2');

//Candidate three 
let candidateNames3 = ["Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]
let candidatePix3 = ["perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]
let output3 = document.querySelector('#alsoRan3');
let next3 = document.querySelector('#next3');
let previous3 = document.querySelector('#previous3');

//canidate one
let i = 0;
function canShow(plusMinus) {
    output1.innerHTML = "<div class='cand'>" + candidateNames1[i] + "<br><img src=pix/" + candidatePix1[i] + "></div>";
    i += plusMinus;
    if (i == candidateNames1.length) {
        i = 0;
    }
    if (i < 0) {
        i = candidateNames1.length - 1;
    }
}

//on click
next1.onclick = function() {
    canShow(1);
}
previous1.onclick = function() {
    canShow(-1);
}

//canidate two
let j = 0;
function canShow2(plusMinus) {
    output2.innerHTML = "<div class='cand'>" + candidateNames2[j] + "<br><img src=pix/" + candidatePix2[j] + "></div>";
    j += plusMinus;
    if (j == candidateNames2.length) {
        j = 0;
    }
    if (j < 0) {
        j = candidateNames2.length - 1;
    }
}

next2.onclick = function() {
    canShow2(1);
}
previous2.onclick = function() {
    canShow2(-1);
}

//canidate three
let k = 0;
function canShow3(plusMinus) {
    output3.innerHTML = "<div class='cand'>" + candidateNames3[k] + "<br><img src=pix/" + candidatePix3[k] + "></div>";
    k += plusMinus;
    if (k == candidateNames3.length) {
        k = 0;
    }
    if (k < 0) {
        k = candidateNames3.length - 1;
    }
}

next3.onclick = function() {
    canShow3(1);
}
previous3.onclick = function() {
    canShow3(-1);
}
