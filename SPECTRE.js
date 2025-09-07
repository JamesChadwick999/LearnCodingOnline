function createFireworkInBox() {
    const container = document.getElementById('spark-zone');
    const originX = container.clientWidth - 40;
    const originY = container.clientHeight - 40;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 1000 + 150;
        const x = Math.cos(angle) * distance + 'px';
        const y = Math.sin(angle) * distance + 'px';
        const colors = ['white', 'gold', 'black', 'grey', 'blue', 'green', 'red', 'yellow', 'brown', 'indigo', 'cyan', 'pink', 'orange', 'doggerblue', 'wheat']
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        particle.style.left = originX + 'px';
        particle.style.top = originY + 'px';
        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);

        container.appendChild(particle);
          
          setTimeout(() => {
            particle.remove();
          }, 1000);
        }
}

setInterval(createFireworkInBox, 1200);


    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Auto slide every 4s
    setInterval(nextSlide, 6000);

    // Dot click functionality
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });




const floatBoxes = document.querySelectorAll('.one');

const observer = new
IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.5});

floatBoxes.forEach(box =>
observer.observe(box));