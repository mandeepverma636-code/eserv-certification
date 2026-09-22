const menu = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.querySelector('.form-message').textContent = 'Thank you — your callback request has been received.'; event.currentTarget.reset(); });
document.querySelectorAll('.iso-trigger').forEach(trigger => trigger.addEventListener('click', () => { const item = trigger.closest('.iso-item'); const isOpen = item.classList.toggle('open'); trigger.setAttribute('aria-expanded', isOpen); }));
