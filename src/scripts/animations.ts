import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { StatItem } from '../data/site';
import { initCursorGlowFollow } from './cursor-glow';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const REVEAL_DEFAULTS = {
  y: 28,
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out' as const,
};

const REVEAL_START = 'top 85%';

let lenisInstance: Lenis | null = null;

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

function getScrollOffset(): number {
  const announcement = document.getElementById('announcement-bar');
  const nav = document.getElementById('main-nav');
  let offset = 16;

  if (announcement && !announcement.classList.contains('hidden')) {
    offset += announcement.offsetHeight;
  }
  if (nav) {
    offset += nav.offsetHeight;
  }

  return offset;
}

function isPastRevealStart(trigger: Element): boolean {
  const rect = trigger.getBoundingClientRect();
  const threshold = window.innerHeight * 0.85;
  return rect.top <= threshold;
}

function setRevealVisible(elements: gsap.TweenTarget): void {
  gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' });
}

function flushInViewReveals(): void {
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    if (!isPastRevealStart(group)) return;
    setRevealVisible(group.querySelectorAll('[data-reveal]'));
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.closest('[data-reveal-group]')) return;
    if (isPastRevealStart(el)) {
      setRevealVisible(el);
    }
  });
}

/** Catch any reveal still hidden while its trigger zone is already passed */
function hardenReveals(): void {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const opacity = parseFloat(window.getComputedStyle(el).opacity);
    if (opacity < 0.1 && isPastRevealStart(el)) {
      setRevealVisible(el);
    }
  });
}

function closeMobileMenu(): void {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!menu?.classList.contains('open')) return;

  toggle?.classList.remove('open');
  menu.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initAnchorScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      event.preventDefault();
      closeMobileMenu();

      const offset = -getScrollOffset();

      if (lenisInstance) {
        lenisInstance.scrollTo(target, { offset, duration: 1.1, easing: (t) => 1 - (1 - t) ** 3 });
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }

      history.pushState(null, '', href);
    });
  });
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

  lenisInstance = lenis;
  return lenis;
}

function initHeroGlowEnhancement(): void {
  if (prefersReducedMotion) return;

  gsap.set('.hero-glow__bloom', { transformOrigin: '50% 100%' });
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
    const alreadyVisible = isPastRevealStart(group);

    if (alreadyVisible) {
      setRevealVisible(items);
      return;
    }

    gsap.from(items, {
      ...REVEAL_DEFAULTS,
      stagger,
      scrollTrigger: {
        trigger: group,
        start: REVEAL_START,
        toggleActions: 'play none none none',
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.closest('[data-reveal-group]')) return;

    if (isPastRevealStart(el)) {
      setRevealVisible(el);
      return;
    }

    gsap.from(el, {
      ...REVEAL_DEFAULTS,
      scrollTrigger: {
        trigger: el,
        start: REVEAL_START,
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
      start: REVEAL_START,
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
      start: REVEAL_START,
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

function refreshScrollTriggers(): void {
  ScrollTrigger.refresh();
  flushInViewReveals();
  hardenReveals();
}

function scrollToHash(immediate = false): void {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;

  const offset = -getScrollOffset();

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, immediate, duration: immediate ? 0 : 1.1 });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: immediate || prefersReducedMotion ? 'auto' : 'smooth' });
  }
}

export function initAnimations(): void {
  gsap.registerPlugin(ScrollTrigger);

  initLenis();
  initAnchorScroll();
  initHeroAnimations();
  initScrollReveals();
  initTriangleAnimation();
  initMediaAmbient();
  initStatCounters();
  initCursorGlowFollow();

  refreshScrollTriggers();
  scrollToHash(true);

  window.addEventListener('load', () => {
    refreshScrollTriggers();
    scrollToHash(true);
  });
  window.addEventListener('resize', () => ScrollTrigger.refresh());
  window.addEventListener('announcement-dismissed', refreshScrollTriggers);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
