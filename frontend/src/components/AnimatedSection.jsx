import { useEffect, useRef } from 'react';

function AnimatedSection({ children, className = '', threshold = 0.15, rootMargin = '0px 0px -50px 0px', ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} {...props}>
      {children}
    </div>
  );
}

export default AnimatedSection;
