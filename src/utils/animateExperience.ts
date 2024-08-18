import gsap from "gsap";

// Function to animate skills when they come into view
const animateSkills = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skills = entry.target.querySelectorAll(".skill-item");

      // Animate the skills to pop up one by one
      gsap.fromTo(
        skills,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: "back.out(1.7)",
        }
      );

      // Stop observing after animation is done
      observer.unobserve(entry.target);
    }
  });
};

// Function to animate experience items when they come into view
const animateExperience = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const experienceItems = entry.target.querySelectorAll(".experience-item");

      // Animate the experience items to slide in with a bounce effect
      gsap.fromTo(
        experienceItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: "back.out(1.7)",
        }
      );

      // Stop observing after animation is done
      experienceObserver.unobserve(entry.target);
    }
  });
};

// Create Intersection Observer instances
const observer = new IntersectionObserver(animateSkills, {
  threshold: 0.1, // Trigger when 10% of the section is visible
});

const experienceObserver = new IntersectionObserver(animateExperience, {
  threshold: 0.1, // Trigger when 10% of the section is visible
});

// Observe the section containing skills and experience
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills-section");
  const experienceSection = document.querySelector(".experience-section");

  if (skillsSection) {
    observer.observe(skillsSection);
  }

  if (experienceSection) {
    experienceObserver.observe(experienceSection);
  }
});
