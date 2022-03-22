import userEvent from "@testing-library/user-event";

/**
 * Helper function that adds a custom element to the DOM
 */
function renderWC(component: string): void {
  const container = document.createElement("div");

  container.innerHTML = component;
  document.body.appendChild(container);
}

/**
 * Helper to clear the jsdom since the jdom instance
 * is shared across test cases in a single file
 */
function tearDown(): void {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

// Re-export everything from testing library
export * from "testing-library__dom";

export { renderWC, userEvent, tearDown };
