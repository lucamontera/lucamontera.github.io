
document.addEventListener('DOMContentLoaded', function(){

    const button = document.getElementById('provami'); 

    button.addEventListener('click', () => {
        console.log('Button clicked');
        const p = document.createElement('p');
        p.textContent = 'This is a newly-added paragraph';
        document.body.appendChild(p);
        
    }); 
    
    
}) 