import gsap from 'gsap';

const CENTER = 0.5;
const Y_INFLUENCE = 0.22;

interface GlowState {
  gx: number;
  gy: number;
  gi: number;
}

function applyGlowVars(section: HTMLElement, state: GlowState): void {
  section.style.setProperty('--gx', state.gx.toFixed(4));
  section.style.setProperty('--gy', state.gy.toFixed(4));
  section.style.setProperty('--g-intensity', state.gi.toFixed(4));
}

export function initCursorGlowFollow(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-glow-follow]').forEach((section) => {
    const state: GlowState = { gx: CENTER, gy: CENTER, gi: 0 };
    applyGlowVars(section, state);

    const toGx = gsap.quickTo(state, 'gx', {
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => applyGlowVars(section, state),
    });
    const toGy = gsap.quickTo(state, 'gy', {
      duration: 0.55,
      ease: 'power2.out',
      onUpdate: () => applyGlowVars(section, state),
    });
    const toGi = gsap.quickTo(state, 'gi', {
      duration: 0.35,
      ease: 'power2.out',
      onUpdate: () => applyGlowVars(section, state),
    });

    const reset = (): void => {
      toGx(CENTER);
      toGy(CENTER);
      toGi(0);
    };

    section.addEventListener(
      'pointermove',
      (event: PointerEvent) => {
        const rect = section.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const nx = Math.max(0.08, Math.min(0.92, (event.clientX - rect.left) / rect.width));
        const ny = Math.max(0.08, Math.min(0.92, (event.clientY - rect.top) / rect.height));

        toGx(nx);
        toGy(CENTER + (ny - CENTER) * Y_INFLUENCE);
        toGi(1);
      },
      { passive: true },
    );

    section.addEventListener('pointerleave', reset, { passive: true });
    section.addEventListener('pointercancel', reset, { passive: true });
  });
}
