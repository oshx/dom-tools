(function checkRuntime(_window: Window | typeof globalThis | undefined): true {
  if (!_window || typeof _window === typeof void 0 || !_window.document) {
    throw new Error(`[@oshx/dom-tools] requires a browser environment.`);
  }
  return true;
})(window || globalThis);
