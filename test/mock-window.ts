const originalLocation = window.location;
const originalOpen = window.open;

const openFn = jest.fn();
const assignFn = jest.fn();
const reloadFn = jest.fn();
const replaceFn = jest.fn();

function setup(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.location;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(originalLocation),
      assign: {
        configurable: true,
        value: assignFn,
      },
      reload: {
        configurable: true,
        value: reloadFn,
      },
      replace: {
        configurable: true,
        value: replaceFn,
      },
    }
  );
  window.open = openFn;
}

function clear(): void {
  assignFn.mockClear();
  reloadFn.mockClear();
  replaceFn.mockClear();
  openFn.mockClear();
}

function restore(): void {
  window.location = originalLocation;
  window.open = originalOpen;
}

/**
 * Mock window location helpers.
 */
export const mockWindow = { clear, restore, setup };
