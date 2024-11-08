//Selecionar elementos
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
const progressBar = document.querySelector(".progress");

//Funções

let progress = 0;

function updateProgressBar() {
    progressBar.style.width = progress + "%";
}

function nextStep(){
    progress += 10;
    if(progress >=100) progress = 100;
    updateProgressBar();
}

nextBtn.addEventListener("click", nextStep);

function previousStep(){
    progress -= 10;
    if(progress < 0) progress = 0;
    updateProgressBar();
}

previousBtn.addEventListener("click", previousStep);