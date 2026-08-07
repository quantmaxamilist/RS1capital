import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { StatItem } from '../data/site';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const REVEAL_DEFAULTS = {
  y: 28,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out' as const,
};

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

function initLenis(): Lenis | null {
  if (prefersReducedMotion) return null;

  document.documentElement.classList.add('lenis', 'lenis-smooth');

  const lenis = new Lenis({
    lerp: 0.09,
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
  if (prefersReducedMotion) return;

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
  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ delay: 0.15 });
  tl.from('.hero-eyebrow', {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power2.out',
  })
    .from(
      '.hero-line',
      { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out', stagger: 0.12 },
      '-=0.45',
    )
    .from('.hero-sub', { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' }, '-=0.4');
}

function initScrollReveals(): void {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!items.length) return;

    const stagger = parseFloat(group.dataset.revealStagger ?? '0.09');

    gsap.from(items, {
      ...REVEAL_DEFAULTS,
      stagger,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.closest('[data-reveal-group]')) return;

    gsap.from(el, {
      ...REVEAL_DEFAULTS,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function initTriangleAnimation(): void {
  const triangle = document.getElementById('triangle-shape');
  const vertices = document.querySelectorAll<SVGElement>('.vertex-glow');
  const arcs = document.querySelectorAll<SVGElement>('.triangle-arc');

  if (!triangle) return;

  if (prefersReducedMotion) return;

  gsap.from(triangle, {
    strokeDashoffset: 800,
    duration: 1.8,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '#triangle-wrap',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });

  vertices.forEach((vertex, i) => {
    gsap.fromTo(
      vertex,
      { opacity: 0.4 },
      {
        opacity: 0.8,
        duration: 4 + i,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * 0.8,
      },
    );
  });

  if (arcs.length) {
    gsap.to(arcs[0], {
      rotation: 8,
      transformOrigin: '50% 50%',
      duration: 12,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
    if (arcs[1]) {
      gsap.to(arcs[1], {
        rotation: -6,
        transformOrigin: '50% 50%',
        duration: 16,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }
  }
}

function initMediaAmbient(): void {
  const panel = document.querySelector<HTMLElement>('.growth-media-inner');
  if (!panel || prefersReducedMotion) return;

  gsap.to(panel, {
    scale: 1.025,
    duration: 10,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });

  const overlay = document.querySelector<HTMLElement>('.growth-media-overlay');
  if (overlay) {
    gsap.to(overlay, {
      opacity: 0.85,
      duration: 8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }
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
      trigger: '#stats-grid',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      valueEl.textContent = formatNumber(Math.round(obj.val));
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
      animateStatCounter(el, stat, 1.2);
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
  initMediaAmbient();
  initStatCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
