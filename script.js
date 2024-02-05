function loadContent(page) {
    // Get the container element to load content
    const contentContainer = document.getElementById('content');

    // Load content based on the selected page
    switch (page) {
        case 'home':
            contentContainer.innerHTML = '<p>Welcome to the Home Page!</p>';
            break;
            
        case 'about':
            // Load content from about.html
            fetch('about.html')
                .then(response => response.text())
                .then(data => contentContainer.innerHTML = data);
            break;
        case 'animals':
            // Load content from animals.html
            fetch('animals.html')
                .then(response => response.text())
                .then(data => contentContainer.innerHTML = data);
            break;
        case 'contact':
            // Load content from contact.html
            fetch('contact.html')
                .then(response => response.text())
                .then(data => contentContainer.innerHTML = data);
            break;
        default:
            // Default to the Home page
            contentContainer.innerHTML = '<p>Welcome to the Home Page!</p>';
    }

    // Update the active class in the navigation bar
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    const selectedLink = document.querySelector(`nav a[href='#'][onclick="loadContent('${page}')"]`);
    selectedLink.classList.add('active');
}

// Initial load to the home page
loadContent('home');