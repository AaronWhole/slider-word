const container = document.querySelector(".container")



const verb = ["SABRET","ÇALIŞ","İSTE","SORGULA","KENDİNİ*SEV"]



let a = 0;
let indeks = 0

function updateText(){
    indeks++
    let disko = verb[a].slice(0,indeks)
    container.innerHTML=`<h1>Başarmak için ${disko}</h1>`
    
    

    if(indeks == verb[a].length){
        a++
        indeks=0
    }

    if(a==verb.length){
        a=0
    }
    

    setTimeout(() => {
        updateText()
    }, 300);
    
}

updateText()

