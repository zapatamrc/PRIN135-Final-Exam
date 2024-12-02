const numSnowflakes = 100;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    
    const size = Math.random() * 5 + 5; 
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    
  
    snowflake.style.left = `${Math.random() * 100}vw`;
    
    
    const duration = Math.random() * 3 + 5; 
    snowflake.style.animationDuration = `${duration}s`;
    
   
    const delay = Math.random() * 5;
    snowflake.style.animationDelay = `${delay}s`;

    
    document.querySelector('.snow').appendChild(snowflake);
}


window.onload = function() {
    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }
};