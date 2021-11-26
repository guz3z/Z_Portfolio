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
    window.location.replace = "www.github.com/guz3z"
}


//for the contact form 
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("success-msg");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Message Sent! Thank You";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your message"
      });
    }
    form.addEventListener("submit", handleSubmit)


