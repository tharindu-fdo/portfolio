// ============================================
// Footer year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Nav scroll state + mobile toggle
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Submit the contact form without opening an email application.
const contactForm = document.getElementById('contactForm');
const contactFormStatus = document.getElementById('contactFormStatus');
const contactSubmit = contactForm.querySelector('.contact__submit');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  contactSubmit.disabled = true;
  contactSubmit.firstChild.textContent = 'Sending...';
  contactFormStatus.textContent = '';

  const formData = new FormData(contactForm);
  formData.append('_subject', `Portfolio message from ${formData.get('name')}`);
  formData.append('_captcha', 'false');

  try {
    const response = await fetch('https://formsubmit.co/ajax/tharindudarshana856@gmail.com', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Message could not be sent');
    contactForm.reset();
    contactFormStatus.textContent = 'Message sent successfully.';
  } catch (error) {
    contactFormStatus.textContent = 'Something went wrong. Please try again.';
  } finally {
    contactSubmit.disabled = false;
    contactSubmit.firstChild.textContent = 'Send message';
  }
});

// ============================================
// Scroll reveal (IntersectionObserver)
// ============================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================
// Hero terminal typing sequence
// ============================================
const typeCmd = document.getElementById('typeCmd');
const typeCursor = document.getElementById('typeCursor');
const terminalOutput = document.getElementById('terminalOutput');

const command = 'whoami --full';
const outputLines = [
  { label: 'name', value: 'P T D Fernando' },
  { label: 'role', value: 'Computer Science Undergraduate' },
  { label: 'university', value: 'Kotelawala Defence University (KDU)' },
  { label: 'status', value: 'compiling the future...' },
];

function typeText(el, text, speed, callback) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

function printOutputLines(lines, index = 0) {
  if (index >= lines.length) {
    typeCursor.style.display = 'none';
    return;
  }
  const line = document.createElement('p');
  line.innerHTML = `<span class="key">${line_key(lines[index].label)}</span> ${lines[index].value}`;
  terminalOutput.appendChild(line);
  requestAnimationFrame(() => {
    line.style.transition = 'opacity 0.4s ease';
    line.style.opacity = '1';
  });
  setTimeout(() => printOutputLines(lines, index + 1), 260);
}

function line_key(label) {
  return label.padEnd(11, ' ').replace(/ /g, '&nbsp;') + ':';
}

const terminal = document.getElementById('terminal');
const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeText(typeCmd, command, 70, () => {
        setTimeout(() => printOutputLines(outputLines), 300);
      });
      terminalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
terminalObserver.observe(terminal);

// ============================================
// Animated counters (stats)
// ============================================
const statEls = document.querySelectorAll('.stat__value');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      let current = 0;
      const duration = 900;
      const stepTime = Math.max(Math.floor(duration / target), 60);
      const step = () => {
        current++;
        el.textContent = current;
        if (current < target) setTimeout(step, stepTime);
      };
      step();
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.6 });
statEls.forEach(el => statObserver.observe(el));

// ============================================
// Ambient grid canvas background
// ============================================
const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');
let w, h, points = [];
const spacing = 46;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  buildPoints();
}

function buildPoints() {
  points = [];
  const cols = Math.ceil(w / spacing) + 1;
  const rows = Math.ceil(h / spacing) + 1;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({
        x: x * spacing,
        y: y * spacing,
        baseY: y * spacing,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }
}

let mouseX = -9999, mouseY = -9999;
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
window.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

let t = 0;
function draw() {
  t += 0.006;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(57, 255, 20, 0.55)';

  for (const p of points) {
    const dx = p.x - mouseX;
    const dy = p.baseY - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const influence = Math.max(0, 1 - dist / 160);
    const drift = Math.sin(t + p.phase) * 2;
    const y = p.baseY + drift - influence * 14;
    const size = 1 + influence * 1.8;
    const alpha = 0.18 + influence * 0.6;

    ctx.beginPath();
    ctx.globalAlpha = alpha;
    ctx.arc(p.x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize, { passive: true });
resize();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  requestAnimationFrame(draw);
} else {
  canvas.style.display = 'none';
}
