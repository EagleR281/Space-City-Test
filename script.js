const lawLinks = document.querySelectorAll('.law-link');
const homeButton = document.getElementById('home-button'); 
const loadingScreen = document.getElementById('loadingScreen'); 

lawLinks.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetUrl = this.getAttribute('href'); 

        loadingScreen.style.display = 'flex';

    
        setTimeout(() => {
            window.location = targetUrl; 
        }, 2000); 
    });
});

homeButton.addEventListener('click', function() {
    loadingScreen.style.display = 'flex';


    setTimeout(() => {
        window.location = '/index.html';
    }, 2000); 
});