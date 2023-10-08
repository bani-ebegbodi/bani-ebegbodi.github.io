let seriesObj = {"Persona": "Boy with Earring",
"Persona 2": "Tatsuya Suou & Maya Amano",
"Persona 3": "Makoto Yuki",
"Persona 4": "Yu Narukami",
"Persona 5": "Ren Amamiya"}

let nameArray = ["Persona", "Persona 2", "Persona 3", "Persona 4", "Persona 5"];
//let nameList = document.querySelector('#button');

for (i = 0; i < nameArray.length; i++) {
    button.innerHTML += "<button onclick= 'characters(\"" + nameArray[i] + "\")'>" + nameArray[i] + "</button>";
} //for 

//characters
function characters(id) {
    document.querySelector('#characterName').innerHTML = seriesObj[id];
    document.querySelector('#image').innerHTML = "<img = src = persona_characters/" + id + ".png>";
}