const url = " https://api.dictionaryapi.dev/api/v2/entries/en/";
let searchInp = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let speech1 = document.querySelector(".speech1");
let meaning1 = document.querySelector(".meaning1");
let synonyms1 = document.querySelector(".synonyms1");
let antonyms1 = document.querySelector(".antonyms1");
let speech2 = document.querySelector(".speech2");
let meaning2 = document.querySelector(".meaning2");
let synonyms2 = document.querySelector(".synonyms2");
let antonyms2 = document.querySelector(".antonyms2");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

async function search(word) {
    const res = await fetch(url + word);
    const data = await res.json();
    box1.style.display = "block";
    box2.style.display = "block";
    // console.log(data);
    speech1.value = data[0].meanings[0].partOfSpeech;
    meaning1.value = data[0].meanings[0].definitions[0].definition;
    synonyms1.value = data[0].meanings[0].synonyms[0];
    antonyms1.value = data[0].meanings[0].antonyms[0];
    speech2.value = data[0].meanings[1].partOfSpeech;
    meaning2.value = data[0].meanings[1].definitions[0].definition;
    synonyms2.value = data[0].meanings[1].synonyms[0];
    antonyms2.value = data[0].meanings[1].antonyms[0];
}   

searchBtn.addEventListener("click" , () => {
    if(searchInp.value == ""){
        alert("invalid input");
    }
    else {
        search(searchInp.value);        
    }
})


searchInp.addEventListener("keypress" , (e) => {
    if(e.key === "Enter"){
        if(searchInp.value == ""){
            alert("invalid input");
        }
        else {
            search(searchInp.value);        
        }
    }
    
})