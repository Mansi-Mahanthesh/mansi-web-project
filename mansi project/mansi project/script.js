document.addEventListener('DOMContentLoaded', () => {
    const navLinks = {
        home: document.getElementById('nav-home'),
        causes: document.getElementById('nav-causes'),
        getInvolved: document.getElementById('nav-get-involved'),
        blog: document.getElementById('nav-blog'),
        contact: document.getElementById('nav-contact')
    };

    const sections = {
        home: document.getElementById('home-section'),
        causes: document.getElementById('causes-section'),
        getInvolved: document.getElementById('get-involved-section'),
        blog: document.getElementById('blog-section'),
        contact: document.getElementById('contact-section')
    };

    
    Object.keys(navLinks).forEach(key => {
        navLinks[key].addEventListener('click', (e) => {
            e.preventDefault();

            
            Object.values(sections).forEach(section => {
                section.classList.remove('active-section');
            });

            
            sections[key].classList.add('active-section');
        });
    });
});