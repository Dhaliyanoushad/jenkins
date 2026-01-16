function greet(name = 'dools') {
  return `Hello, ${name}!`;
}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests

