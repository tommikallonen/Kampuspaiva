// Interaktiiviset toiminnot ja modaalinkäsittely

document.addEventListener('DOMContentLoaded', () => {
    // Navigaation taustaväri muuttuu skrollatessa
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.classList.remove('shadow');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Modaalisisällön dynaaminen päivitseminen nappia painettaessa
    const infoModal = document.getElementById('infoModal');
    if (infoModal) {
        infoModal.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            const title = button.getAttribute('data-title');
            const text = button.getAttribute('data-text');
            const img = button.getAttribute('data-img');

            const modalTitle = infoModal.querySelector('.modal-title');
            const modalText = infoModal.querySelector('#modalText');
            const modalImg = infoModal.querySelector('#modalImg');

            modalTitle.textContent = title;
            modalText.textContent = text;
            modalImg.src = img;
            modalImg.alt = title;
        });
    }

    // Uutiskirjeen lähetyslomakkeen käsittely
    const newsletterForm = document.getElementById('newsletterForm');
    const formAlert = document.getElementById('formAlert');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            if (emailInput.value.trim() !== '') {
                formAlert.classList.remove('d-none');
                newsletterForm.reset();
                setTimeout(() => {
                    formAlert.classList.add('d-none');
                }, 5000);
            }
        });
    }

    // Pehmeä vieritys (Smooth scroll) navigaatiolinkeille
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Sulje mobiilivalikko klikkauksen jälkeen
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
});
