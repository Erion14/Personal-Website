const REVEAL_STAGGER_MS = 70;

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        .forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          element.style.animationDelay = `${index * REVEAL_STAGGER_MS}ms`;
          element.classList.add('is-revealed');
          observer.unobserve(element);
        });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
}

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  initReveal();
}
