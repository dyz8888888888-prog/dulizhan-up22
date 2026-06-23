// Minimal utilities used by the about page.
// Only $ and $$ are actually referenced by the live code path.

function $(selector, context = document) {
  return context.querySelector(selector);
}

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}
