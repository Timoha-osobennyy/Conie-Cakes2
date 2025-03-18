// Utility to handle scroll animations
export const setupScrollAnimations = () => {
  // Check if IntersectionObserver is available
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in view
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('animate-visible');
            // Stop observing the element
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use the viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust the trigger point
      }
    );

    // Select all elements with animation classes that should be triggered on scroll
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right'
    );

    // Add a class to initially hide the elements
    animatedElements.forEach((element) => {
      element.classList.add('opacity-0');
      animationObserver.observe(element);
    });
  }
};

// Helper to add animation classes with delay
export const getAnimationClass = (
  baseAnimation: string,
  delay: number = 0,
  duration: number = 800
) => {
  return `${baseAnimation} opacity-0 animate-visible` + 
    (delay ? ` delay-${delay}` : '') + 
    (duration !== 800 ? ` duration-${duration}` : '');
};