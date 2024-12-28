// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea');

    if (name.value.trim() === '' || !/\S+@\S+\.\S+/.test(email.value) || message.value.trim() === '') {
        alert('Please fill in all fields correctly.');
    } else {
        alert('Your message has been sent!');
        name.value = '';
        email.value = '';
        message.value = '';
    }
});
