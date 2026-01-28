/* Swiper slider with autoplay */
const swiper = new Swiper('.review-slider', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// AJAX Formspree
document.querySelectorAll('.ajax-form').forEach(form=>{
  form.addEventListener('submit', async e=>{
    e.preventDefault();
    const res = await fetch(form.action,{
      method:'POST',
      body:new FormData(form),
      headers:{Accept:'application/json'}
    });
    if(res.ok){
      alert('Thank you! Message sent.');
      form.reset();
    } else {
      alert('Error. Try again.');
    }
  });
});

// Form submission with success message
const estimateForm = document.getElementById('estimate-form');
const successBox = document.getElementById('form-success');

estimateForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(estimateForm);

  const response = await fetch(estimateForm.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    successBox.style.display = 'block';
    estimateForm.reset();
  }
});



/* Star rating selector with animation */
const stars = document.querySelectorAll('.rating-stars span');
const ratingInput = document.getElementById('rating-value');

if (stars.length > 0 && ratingInput) {
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      ratingInput.value = index + 1;

      stars.forEach(s => s.classList.remove('active'));

      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('active');
      }
    });
  });
}

