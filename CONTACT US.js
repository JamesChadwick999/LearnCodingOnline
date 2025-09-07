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



function openModal(course) {
  let title = "";
  let description = "";
  let list1 = "";
  let list2 = "";
  let list3 = "";
  let list4 = "";
  let list5 = "";

  switch (course) {
    case "cod":
      title = "Coding Tutorial"
      description = "Get personalized coding lessons designed to fit your learning pace. Wheteher you're a beginner or improving your skills, we'll help you master programming languages, problem-solving techniques, and real-world projects. In addition to personalized lessons, you'll enjoy these benefits:";
      list1 = "Learn popular programming languages (Html & Css, Javascript, React, etc.) "
      list2 = "Build real projects while learning"
      list3 = "Get one-on-one guidance or group lessons"
      list4 = "Understand both theory and practical applications"
      list5 = "Prepare for exams, interviews, or tech careers"
    break;

    case "aca":
      title = "Academic Tutorial"
      description = "Personalized academic support designed to strengthen your understanding of school subjetcs. Whether you're struggling with tough concepts or aiming to excel, our tutoring sessions are tailored to meet your learning needs and pace.";
      list1 = "Guidance in core subjects like Mathematics, Chemistry, Physics, and more"
      list2 = "One-on-One or group lessons with step-by-step explanations"
      list3 = "Simplified approaches to break down difficult topics"
      list4 = "Help with assignments, homework, and exam preparations"
      list5 = "Build strong academic foundations for better grades and future studies"    
    break;

    case "tes":
      title = "Test Preparation"
      description = "Comprehensive support to help u excel in exams with confidence. Out tutoring sessions provide the right tools, resources, and guidance to prepare you effectively for any test or assessment";
      list1 = "Access to top-quality study guides and practice materials"
      list2 = "Regular practice test to track progress and build exam readiness"
      list3 = "Expert strategies for time management an answering tough questions"
      list4 = "Step-by-step review of key topics to strengthen weak areas"
      list5 = "Personalized preparation plans tailored to your exam goals"    
    break;


    case "hom":
      title = "Homework Help"
      description = "Get instant support whenever assignments feel overwhelming. Our tutors provide clear explanations and step-by-step guidance so students can complete homework with confidence and a deeper understanding of the subject.";
      list1 = "On-demand assistance across multiple subjects"
      list2  = "Simple, clear explanations of difficult questions"
      list3 = "Step-by-step breakdowns to improve understanding"
      list4 = "Encouragement to build independent problem-solving skills"
      list5 = "Quick turnaround to meet assignment deadlines"    
    break;
  }

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalList1").innerText = list1;
  document.getElementById("modalList2").innerText = list2;
  document.getElementById("modalList3").innerText = list3;
  document.getElementById("modalList4").innerText = list4;
  document.getElementById("modalList5").innerText = list5;
  document.getElementById("courseModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("courseModal").style.display = "none";
}



const floatBoxes = document.querySelectorAll('.hello');

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