window.addEventListener('hashchange', () => {
    
    for(let i = 0; i < CONFIG.HASH.length; i++) {
        
        if(CONFIG.HASH[i] === window.location.hash.slice(1)) {
            
            for(let j = 0; j < CONFIG.ROUTER.length; j++) {
                
                CONFIG.ROUTER[j].style.display = "none"
                
            }
            
            CONFIG.ROUTER[i].style.display = "block"
            
            document.getElementById('title').innerHTML = CONFIG.TITLES[i]
            
        }
        
    }
    
})