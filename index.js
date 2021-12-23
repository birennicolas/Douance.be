const cardsss = document.querySelector('.cards');


window.addEventListener('scroll', () => {


    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    console.log(scrollValue);

    if (scrollValue > 0.50){
        cardsss.classList.add('relocards');
    }

});