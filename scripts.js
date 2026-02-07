document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll for Navigation Links (e.g., Home, About, Skills, Projects)
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeightOffset = 80; // Compensate for the fixed navbar height

            if (targetElement) {
                window.scrollTo({
                    // Scrolls to the top of the element minus the height of the fixed navbar
                    top: targetElement.offsetTop - navbarHeightOffset, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Smooth Scroll for Logo/Project Button (Assumes button has id="project-scroll-btn")
    const projectScrollBtn = document.getElementById('project-scroll-btn');
    
    if (projectScrollBtn) {
        projectScrollBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default if the button is a link
            
            const projectsSection = document.getElementById('projects');
            const navbarHeightOffset = 80;

            if (projectsSection) {
                window.scrollTo({
                    top: projectsSection.offsetTop - navbarHeightOffset, 
                    behavior: 'smooth'
                });
            }
        });
    }

    // 3. Project Links - Click to open live project
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const liveUrl = this.getAttribute('data-live');
            const githubUrl = this.getAttribute('data-github');

            if (liveUrl && liveUrl !== 'https://your-' && !liveUrl.includes('your-')) {
                e.preventDefault();
                window.open(liveUrl, '_blank');
            } else if (githubUrl) {
                e.preventDefault();
                window.open(githubUrl, '_blank');
            } else {
                // No data attributes present — allow default anchor behavior (uses href and target)
            }
        });
    });
});