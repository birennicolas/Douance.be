const cadre = document.querySelector('.bienvenue');

window.addEventListener('scroll', () => {


    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    console.log(scrollValue);

    if (scrollValue > 0.90){
        cadre.classList.add('reloc');
    }

});