const GLYPHS = '.:-=+*#%@/\\<>[]01';
const SCRAMBLE_MS = 650;
const REVEAL_STAGGER_MS = 70;

const running = new WeakMap<HTMLElement, number>();

/** Resolves an element's text left to right out of random ASCII glyphs. */
function scramble(element: HTMLElement) {
  const text = element.dataset.scrambleText ?? '';
  const start = performance.now();
  cancelAnimationFrame(running.get(element) ?? 0);

  const tick = (now: number) => {
    const progress = Math.min((now - start) / SCRAMBLE_MS, 1);
    const resolved = Math.floor(progress * text.length);
    let output = text.slice(0, resolved);
    for (let i = resolved; i < text.length; i++) {
      output += text[i] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    element.textContent = output;
    if (progress < 1) running.set(element, requestAnimationFrame(tick));
  };
  running.set(element, requestAnimationFrame(tick));
}

function initScramble(): HTMLElement[] {
  const elements = [...document.querySelectorAll<HTMLElement>('[data-scramble]')];
  for (const element of elements) {
    const text = element.textContent?.trim() ?? '';
    element.dataset.scrambleText = text;
    // Screen readers keep the real text while glyphs are cycling.
    element.setAttribute('aria-label', text);
    const trigger = element.closest<HTMLElement>('a, header') ?? element;
    trigger.addEventListener('pointerenter', () => scramble(element));
  }
  return elements;
}

function initReveal(scrambleTargets: HTMLElement[]) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        .forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          const delay = index * REVEAL_STAGGER_MS;
          element.style.animationDelay = `${delay}ms`;
          element.classList.add('is-revealed');
          observer.unobserve(element);
          for (const target of scrambleTargets) {
            if (element.contains(target)) setTimeout(() => scramble(target), delay);
          }
        });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  initReveal(initScramble());
}
