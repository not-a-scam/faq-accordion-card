const arrowBtns = document.getElementsByClassName("arrow-btn")
for(let i = 0; i < arrowBtns.length; i++){
    arrowBtns[i].addEventListener("click", () => {
        const faqDropdowns = document.getElementsByClassName("faq-dropdown");
        const faqDropdown = faqDropdowns[i];
        if(faqDropdown.classList.contains("selected")){
            faqDropdown.classList.remove("selected");
        } else {
            for(let x = 0; x < faqDropdowns.length; x++){
                if(faqDropdowns[x].classList.contains("selected")){
                    faqDropdowns[x].classList.remove("selected");
                }
            }
            faqDropdown.classList.add("selected");
        }
    });
}