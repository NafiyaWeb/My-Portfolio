document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar a');
    
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(link => link.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
});
