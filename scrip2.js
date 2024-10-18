
const lawLinks = document.querySelectorAll('.law-link');
const homeButton = document.getElementById('home-button');


lawLinks.forEach(item => {
    item.addEventListener('click', function(event) {
        
        event.preventDefault(); 
        const targetUrl = this.getAttribute('href'); 

   
        document.getElementById('loadingScreen').style.display = 'flex'; 

   
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1500); 
    });
});


homeButton.addEventListener('click', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex'; 

   
    setTimeout(() => {
        window.location.href = '/index.html'; 
    }, 2200); 
});
