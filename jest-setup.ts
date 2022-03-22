import "@testing-library/jest-dom";

import { mockWindow } from "./test/mock-window";
import { tearDown } from "./test/utils";

beforeAll(() => {
  // Mock `window.location` API
  mockWindow.setup();
});

afterEach(() => {
  // Reset `window.location` mocks
  mockWindow.clear();

  // clear the jsdom
  tearDown();
});

afterAll(() => {
  // Restore `window.location` API
  mockWindow.restore();
});
