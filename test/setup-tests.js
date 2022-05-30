import "babel-polyfill";
import "@testing-library/jest-dom";

afterEach(() => {
  jest.clearAllMocks();
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
Object.defineProperty(window, "scroll", { value: noop, writable: true });
