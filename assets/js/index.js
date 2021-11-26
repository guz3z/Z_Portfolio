//scroll seamlessly between sections




//hover tech over
const techContainer = document.querySelectorAll('.techContainer');
const techName = document.querySelector('#techName');

techContainer.forEach(tech => {
    tech.addEventListener('mouseover', e => {
        techName.textContent = e.target.getAttribute('value');
    });
});

//transfer to github
function githubRoute(){
    location.href = "www.github.com/guz3z"
}



