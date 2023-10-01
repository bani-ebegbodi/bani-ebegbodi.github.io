let buildList = document.querySelector('#userInput');

for (var i=0; i < 100; i++) {
    buildList.innerHTML += "<option value=" + i + ">" + i + "</option>";
}


//Compare function 
function compare() {
    //variables 
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    answer = Number(answer);
    let reaction = document.querySelector('#response');

    //switch case
    switch(true) {
        case (answer == 24):
            reaction.innerHTML = "correct";
            break;
        case (answer <= 19):
            reaction.innerHTML = answer + " is way too low";
            break;
        case (answer >= 28):
            reaction.innerHTML = answer + " is way too high";
            break;
        case (answer > 24 && answer < 28):
            reaction.innerHTML = answer + " is too high, but close";
            break;
        case (answer > 19 && answer < 24):
            reaction.innerHTML = answer + " is too low, but close";
            break;
    } //switch

    //if statements 
    /*
    if (answer === 24) {
        reaction.innerHTML = "correct";
    } //if
    
    if (answer <= 19) {
        reaction.innerHTML = answer + " is way too low";
    }

    if (answer >= 28) {
        reaction.innerHTML = answer + " is way too high";
    }

    if (answer > 24 && answer < 28) {
        reaction.innerHTML = answer + " is too high, but close";
    }

    if (answer > 19 && answer < 24) {
        reaction.innerHTML = answer + " is too low, but close";
    }
    */
} //compare 