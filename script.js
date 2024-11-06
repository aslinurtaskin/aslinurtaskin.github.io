window.addEventListener('scroll', function() {
    const blackBar = document.querySelector('.black-bar');
    const projectGrid = document.querySelector('.project-grid');
    
    if (window.scrollY > 100) {
        blackBar.style.transform = 'translateY(-100%)'; // Move the black bar up
        projectGrid.style.display = 'grid'; // Reveal the project grid
    } else {
        blackBar.style.transform = 'translateY(0)'; // Reset the black bar position
        projectGrid.style.display = 'none'; // Hide the project grid
    }
});

document.getElementById('robotics').addEventListener('click', function() {
    window.location.href = 'robotics.html'; // Redirect to Robotics page
});

document.getElementById('professional-projects').addEventListener('click', function() {
    window.location.href = 'professional-projects.html'; // Redirect to Professional Projects page
});
