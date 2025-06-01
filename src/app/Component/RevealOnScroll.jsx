'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RevealOnScroll() {
  useEffect(() => {
    const animateFrom = (elem, direction = 1) => {
      let x = 0, y = direction * 50;
      if (elem.classList.contains('scroll_left')) x = -50;
      else if (elem.classList.contains('scroll_right')) x = 50;
      else if (elem.classList.contains('scroll_bottom')) {
        x = 0;
        y = 50;
      }

      gsap.fromTo(
        elem,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
            // markers: true, // uncomment to debug scroll positions
          }
        }
      );
    };

    gsap.utils.toArray(".scroll_left, .scroll_right, .scroll_bottom").forEach(elem => {
      animateFrom(elem);
    });

    // cleanup function to kill all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
