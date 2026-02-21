gsap.registerPlugin(ScrollTrigger);

// title animation
gsap.to(".title", {
  opacity: 1,
  y: -20,
  duration: 1
});

// stats animation
gsap.to(".stat", {
  opacity: 1,
  y: -10,
  delay: 0.5,
  stagger: 0.3
});

// number counter
let nums = document.querySelectorAll(".num");

nums.forEach((num) => {
  let target = parseInt(num.getAttribute("data-target"));
  let count = 0;

  let update = () => {
    count += target / 50;

    if (count < target) {
      num.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      num.innerText = target;
    }
  };

  update();
});

// scroll animation
gsap.to(".hero-img", {
  y: 200,
  scale: 1.3,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});