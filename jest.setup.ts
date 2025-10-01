import '@testing-library/jest-dom'

if (typeof window.HTMLElement.prototype.hasPointerCapture === 'undefined') {
  window.HTMLElement.prototype.hasPointerCapture = () => false;
}
if (typeof window.HTMLElement.prototype.releasePointerCapture === 'undefined') {
  window.HTMLElement.prototype.releasePointerCapture = () => {};
}

window.HTMLElement.prototype.scrollIntoView = jest.fn();