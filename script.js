 const mainCard = document.querySelector('.main-card');
    const rightBoxes = document.querySelectorAll('.right-box');
    let animating = false;

    mainCard.addEventListener('click', () => {
      if (animating) return;
      animating = true;
      mainCard.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-50');

      // Slide right-side boxes fully out to the LEFT
      rightBoxes.forEach(box => {
        box.style.transition = 'transform 0.8s ease';
        box.style.transform = 'translateX(-350%)';
      });

      // After sliding out, wait 1s then bring back in from right
      setTimeout(() => {
        // Prepare boxes off-screen at right
        rightBoxes.forEach(box => {
          box.style.transition = 'none';
          box.style.transform = 'translateX(600%)';
        });
        // Force reflow
        void rightBoxes[0].offsetWidth;
        // Slide back to original position
        rightBoxes.forEach(box => {
          box.style.transition = 'transform 0.7s ease';
          box.style.transform = 'translateX(0)';
        });
        // Cleanup after animation
        setTimeout(() => {
          mainCard.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-50');
          animating = false;
        }, 700);
      }, 1500); // 0.5s slide-out + 1s wait
    });
