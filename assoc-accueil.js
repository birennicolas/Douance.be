const thierry = document.querySelector('.thierry');
const aurore = document.querySelector('.aurore');
const antoine = document.querySelector('.antoine');
const david = document.querySelector('.david');

window.addEventListener('scroll', () => {


    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    console.log(scrollValue);

    if (scrollValue > 0.58){
        thierry.classList.add('relocthierry');
    }

    if (scrollValue > 0.70){
        aurore.classList.add('relocaurore');
    }

    if (scrollValue > 0.85){
        antoine.classList.add('relocantoine');
    }

    if (scrollValue > 0.93){
        david.classList.add('relocdavid');
    }

});