// Import the original function
const { get_available_solutions } = require("./practice_test");

// Polyfill for TextEncoder and TextDecoder
require('util').TextEncoder = require('util').TextDecoder = require('text-encoding').TextEncoder;

test("Convert available solutions correctly", () => {
  // Create a mock DOM environment
  const { JSDOM } = require('jsdom');
  const { document } = new JSDOM('<html><body></body></html>').window;
  global.document = document;

  // Set up the necessary DOM elements
  document.getElementById = jest.fn((id) => {
    if (id === "solution1") {
      return { value: 2 };
    } else if (id === "solution1_unit") {
      return { value: 1 };
    }
    // Mock other cases if needed
  });

  // Call the original function
  const solution_converted = get_available_solutions();

  // Assert the expected results
  expect(solution_converted[1]).toBe(2000000);
  // Add more expect statements for other indices if needed
});
