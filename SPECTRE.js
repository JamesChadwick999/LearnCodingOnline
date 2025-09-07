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


const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

let current = 0;
 
function showSlide(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    dots[i].classList.remove('active');
  });

  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  current = index;
}

function nextSlide() {
  let next = (current + 1) % testimonials.length;
  showSlide(next);
}

function goTo(index) {
  showSlide(index);
}

setInterval(nextSlide, 3000);


