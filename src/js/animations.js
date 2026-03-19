/* Portfolio Animations — scroll reveal + stats counter */

// ── Scroll reveal ────────────────────────────────────────────
function initScrollReveal() {
  var targets = document.querySelectorAll(
    '.expertise-card, .project-card, .user-details'
  );

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('revealed'); });
    return;
  }

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
}

// ── Stats counter ────────────────────────────────────────────
function parseStatNum(text) {
  var match = text.trim().match(/^([\d,.]+)(.*)$/);
  if (!match) return null;
  var numStr = match[1].replace(/,/g, '');
  return {
    value: parseFloat(numStr),
    suffix: match[2] || '',
    decimals: numStr.indexOf('.') !== -1
  };
}

function animateCounter(el, parsed, duration) {
  var start = null;
  var target = parsed.value;

  function format(n) {
    if (parsed.decimals) return n.toFixed(1) + parsed.suffix;
    return Math.floor(n).toLocaleString() + parsed.suffix;
  }

  el.textContent = format(0);

  function step(ts) {
    if (!start) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = format(target * ease);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function initStatsCounter() {
  var els = document.querySelectorAll('.stat-num');
  els.forEach(function (el) {
    var parsed = parseStatNum(el.textContent);
    if (parsed) animateCounter(el, parsed, 1800);
  });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initStatsCounter();
});
