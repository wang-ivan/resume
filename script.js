// 進場滑入動畫
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
            entry.target.classList.add("visible");
      }
    });
}, { threshold: 0.1 });
  
document.querySelectorAll(".content").forEach(el => observer.observe(el));
  

const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
  
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
  

document.querySelectorAll(".nav-scroll").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
            target.scrollIntoView({ behavior: "smooth" });
      }
  
      const offcanvasEl = document.querySelector('.offcanvas.show');
      if (offcanvasEl) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            bsOffcanvas.hide();
      }
    });
});
  


document.addEventListener('DOMContentLoaded', function () {

    const scrollToTopBtn = document.getElementById('scrollToTop');
    scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  

    document.querySelectorAll('.nav-scroll').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
  

const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});

  