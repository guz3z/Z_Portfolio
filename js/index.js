//scroll seamlessly between sections



//click timeline for experience
// const datesLi = document.querySelectorAll('.datesLi');
// const exTitle = document.getElementById('exTitle');
// const years = document.getElementById('years');
// const exPara = document.getElementById('exPara');

// datesLi.forEach(period => {
//     period.addEventListener('click', e => {
//         exTitle.textContent = e.target.getAttribute('value');
//     });
// });


//for 2018 experience



//hover tech over
const techContainer = document.querySelectorAll('.techContainer');
const techName = document.querySelector('#techName');

techContainer.forEach(tech => {
    tech.addEventListener('mouseover', e => {
        techName.textContent = e.target.getAttribute('value');
    });
});



