// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// newsletter submit (placeholder)
const form = document.getElementById('newsletter-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    alert('Thanks! If this were connected, ' + email + ' would be subscribed.');
    form.reset();
  });
}
