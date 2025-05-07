      // Script per il pulsante "Torna su"
      const backToTopBtn = document.getElementById('backToTop');
      
      window.addEventListener('scroll', () => {
          if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
              backToTopBtn.classList.add('active');
          } else {
              backToTopBtn.classList.remove('active');
          }
      });
      
      backToTopBtn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
      
      // Animazione quando gli elementi del footer diventano visibili
      document.addEventListener('DOMContentLoaded', () => {
          // Funzione per controllare se un elemento è nel viewport
          function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                  rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.bottom >= 0
              );
          }
          
          // Animazione per gli elementi all'ingresso nel viewport
          function animateOnScroll() {
              const footer = document.querySelector('footer');
              
              if (isInViewport(footer)) {
                  footer.classList.add('visible');
              }
          }
          
          // Check iniziale e listener per lo scroll
          animateOnScroll();
          window.addEventListener('scroll', animateOnScroll);
          
          // Effetto hover per i link del menu di navigazione
          const navLinks = document.querySelectorAll('nav a');
          
          navLinks.forEach(link => {
              link.addEventListener('mouseenter', () => {
                  link.style.transition = 'all 0.3s';
                  link.style.transform = 'translateY(-3px)';
              });
              
              link.addEventListener('mouseleave', () => {
                  link.style.transform = 'translateY(0)';
              });
          });
      });

      document.addEventListener('DOMContentLoaded', function() {
        // Gestione delle FAQ
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Chiudi tutti gli altri elementi
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Apri/chiudi l'elemento corrente
                item.classList.toggle('active');
            });
        });
        
        // Gestione del form di contatto
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Qui andrebbe l'invio del form, per ora solo un feedback visivo
                const submitBtn = this.querySelector('.btn-submit');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Invio in corso...';
                submitBtn.disabled = true;
                
                // Simulazione di invio
                setTimeout(() => {
                    submitBtn.textContent = 'Messaggio Inviato!';
                    submitBtn.style.backgroundColor = '#27ae60';
                    
                    // Reset del form dopo l'invio
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                    }, 2000);
                }, 1500);
            });
        }
    });
    
    // Gestione globale degli errori
window.addEventListener('error', function (event) {
  // Puoi anche loggare l'errore su un server prima del redirect, se necessario
  console.error('Errore catturato:', event.message);

  // Reindirizzamento alla pagina di errore
  window.location.href = 'error.html';
});

// Gestione errori promesse non gestite (es. async/await)
window.addEventListener('unhandledrejection', function (event) {
  console.error('Promessa non gestita:', event.reason);
  window.location.href = './404.html';
});
