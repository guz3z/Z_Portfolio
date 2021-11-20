//scroll seamlessly between sections




//hover tech over
const techContainer = document.querySelectorAll('.techContainer');
const techName = document.querySelector('#techName');

techContainer.forEach(tech => {
    tech.addEventListener('mouseover', e => {
        techName.textContent = e.target.getAttribute('value');
    });
});


