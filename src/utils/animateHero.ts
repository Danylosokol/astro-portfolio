import gsap from "gsap";

// Function to animate social links when they come into view
const animateSocials = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const socialLinks = entry.target.querySelectorAll(".social-link");

      // Animate the social links to slide in one by one
      gsap.fromTo(
        socialLinks,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.5, ease: "power2.out" }
      );

      // Stop observing after animation is done
      socialsObserver.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer instance for social links
const socialsObserver = new IntersectionObserver(animateSocials, {
  threshold: 0.3, // Trigger when 30% of the section is visible
});

// Observe the hero section for social links
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    socialsObserver.observe(heroSection);
  }
});
