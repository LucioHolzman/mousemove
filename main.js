const card = document.querySelector('.card');
const container = document.querySelector('.container');
const img = document.querySelector('.card-img img');
const description = document.querySelector('.card-description');
const btn = document.querySelector('.card-btn');

container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    //PopOut
   
    img.style.transform = `translateZ(150px) `
    description.style.transform = `translateZ(125px)`
    btn.style.transform = `translateZ(100px) `
})
//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 1s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //PopBack
    img.style.transform = `translateZ(0px)`
    description.style.transform = `translateZ(0px)`
    btn.style.transform = `translateZ(0px)`
})