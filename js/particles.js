const initParticles = () => {
    particleground(document.getElementById('particles-foreground'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 4, // Dot size
    });
  
    particleground(document.getElementById('particles-background'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 2, // Dot size
    });
    
    particleground(document.getElementById('particles-foreground-slide1'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 4, // Dot size
    });
        
    particleground(document.getElementById('particles-background-slide1'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 2, // Dot size
    });

    particleground(document.getElementById('particles-foreground-slide2'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 4, // Dot size
    });
        
    particleground(document.getElementById('particles-background-slide2'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 2, // Dot size
    });
      
    particleground(document.getElementById('particles-foreground-slide3'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.1)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 5, // Dot size
      lineWidth: 5
    });
        
    particleground(document.getElementById('particles-background-slide3'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 3, // Dot size
    });
      
    particleground(document.getElementById('particles-foreground-slide4'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.1)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 5, // Dot size
    });
        
    particleground(document.getElementById('particles-background-slide4'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 3, // Dot size
    });
  
      
    particleground(document.getElementById('particles-foreground-slide5'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.1)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 5, // Dot size
    });
        
    particleground(document.getElementById('particles-background-slide5'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 3, // Dot size
    });

    particleground(document.getElementById('particles-background-slide6'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.1)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 5, // Dot size
    });
        
    particleground(document.getElementById('particles-foreground-slide6'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 3, // Dot size
    });
}

export {
    initParticles
}