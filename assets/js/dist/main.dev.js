"use strict";

// Script per il pulsante "Torna su"
var backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});
backToTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); // Animazione quando gli elementi del footer diventano visibili

document.addEventListener('DOMContentLoaded', function () {
  // Funzione per controllare se un elemento è nel viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
  } // Animazione per gli elementi all'ingresso nel viewport


  function animateOnScroll() {
    var footer = document.querySelector('footer');

    if (isInViewport(footer)) {
      footer.classList.add('visible');
    }
  } // Check iniziale e listener per lo scroll


  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll); // Effetto hover per i link del menu di navigazione

  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      link.style.transition = 'all 0.3s';
      link.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseleave', function () {
      link.style.transform = 'translateY(0)';
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Gestione delle FAQ
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      // Chiudi tutti gli altri elementi
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      }); // Apri/chiudi l'elemento corrente

      item.classList.toggle('active');
    });
  }); // Gestione del form di contatto

  var contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Qui andrebbe l'invio del form, per ora solo un feedback visivo

      var submitBtn = this.querySelector('.btn-submit');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Invio in corso...';
      submitBtn.disabled = true; // Simulazione di invio

      setTimeout(function () {
        submitBtn.textContent = 'Messaggio Inviato!';
        submitBtn.style.backgroundColor = '#27ae60'; // Reset del form dopo l'invio

        setTimeout(function () {
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.backgroundColor = '';
        }, 2000);
      }, 1500);
    });
  }
}); // Gestione globale degli errori

window.addEventListener('error', function (event) {
  // Puoi anche loggare l'errore su un server prima del redirect, se necessario
  console.error('Errore catturato:', event.message); // Reindirizzamento alla pagina di errore

  window.location.href = 'error.html';
}); // Gestione errori promesse non gestite (es. async/await)

window.addEventListener('unhandledrejection', function (event) {
  console.error('Promessa non gestita:', event.reason);
  window.location.href = './404.html';
});
//# sourceMappingURL=main.dev.js.map
