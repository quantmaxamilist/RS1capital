import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { StatItem } from '../data/site';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

function initLenis(): Lenis | null {
  if (prefersReducedMotion) return null;

  const lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

function initHeroGlowEnhancement(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.set('.hero-glow__bloom', { xPercent: -50, transformOrigin: '50% 100%' });
  gsap.to('.hero-glow__bloom', {
    opacity: 0.6,
    scaleY: 1.12,
    transformOrigin: '50% 100%',
    duration: 5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });
}

function initHeroAnimations(): void {
  initHeroGlowEnhancement();

  if (prefersReducedMotion) {
    gsap.set('.hero-eyebrow', { opacity: 1, letterSpacing: '0.2em' });
    gsap.set(['.hero-line', '.hero-sub'], { opacity: 1, y: 0 });
    gsap.set('.hero-line', { letterSpacing: '-0.015em' });
    return;
  }

  gsap.set('.hero-eyebrow', { opacity: 0, letterSpacing: '0.5em' });
  gsap.set('.hero-line', { opacity: 0, y: 40, letterSpacing: '-0.015em' });
  gsap.set('.hero-sub', { opacity: 0, y: 20 });

  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('.hero-eyebrow', {
    opacity: 1,
    letterSpacing: '0.2em',
    duration: 1,
    ease: 'power3.out',
  })
    .to(
      '.hero-line',
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' },
      '-=0.6',
    )
    .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5');
}

function initScrollReveals(): void {
  if (prefersReducedMotion) return;

  gsap.utils.toArray<HTMLElement>('.reveal-item').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      },
    );
  });

  const growthMedia = document.getElementById('growth-media');
  if (growthMedia) {
    gsap.to(growthMedia, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: growthMedia,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }
}

function initTriangleAnimation(): void {
  const triangle = document.getElementById('triangle-shape');
  const vertices = document.querySelectorAll<SVGElement>('.vertex-glow');
  const pillars = document.querySelectorAll<HTMLElement>('.pillar-item');

  if (!triangle) return;

  if (prefersReducedMotion) {
    triangle.style.strokeDashoffset = '0';
    vertices.forEach((v) => v.classList.remove('opacity-0'));
    pillars.forEach((p) => {
      p.style.opacity = '1';
    });
    return;
  }

  gsap.to(triangle, {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '#triangle-wrap',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });

  gsap.to(vertices, {
    opacity: 1,
    duration: 0.6,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
      trigger: '#triangle-wrap',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  });

  gsap.fromTo(
    pillars,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#triangle-wrap',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    },
  );
}

function animateStatCounter(
  el: HTMLElement,
  stat: StatItem,
  duration: number,
): void {
  const valueEl = el.querySelector('.stat-value');
  if (!valueEl) return;

  const target = stat.numericTarget ?? 0;
  const obj = { val: 0 };

  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      const rounded = Math.round(obj.val);
      valueEl.textContent = formatNumber(rounded);
    },
  });
}

function initStatCounters(): void {
  document.querySelectorAll<HTMLElement>('.stat-item').forEach((el) => {
    if (el.getAttribute('data-placeholder') === 'true') return;

    const raw = el.getAttribute('data-stat');
    if (!raw) return;

    try {
      const stat = JSON.parse(raw) as StatItem;
      if (stat.placeholder || stat.numericTarget === undefined) return;

      if (prefersReducedMotion) {
        const valueEl = el.querySelector('.stat-value');
        if (valueEl) {
          valueEl.textContent = formatNumber(stat.numericTarget);
        }
        return;
      }
      animateStatCounter(el, stat, 2);
    } catch {
      /* ignore malformed data */
    }
  });
}

export function initAnimations(): void {
  gsap.registerPlugin(ScrollTrigger);

  initLenis();
  initHeroAnimations();
  initScrollReveals();
  initTriangleAnimation();
  initStatCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
