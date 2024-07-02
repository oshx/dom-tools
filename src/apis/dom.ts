import '../@types';

export const uniqueDOM: UniqueDOM = {
  root: window.document.documentElement,
  head: window.document.head || window.document.getElementsByTagName('head')[0],
  body: <HTMLBodyElement>(
    (window.document.body || window.document.getElementsByTagName('body')[0])
  ),
};

export function onceIframe(
  src: SourceString,
  timer: EpochTimeStamp = 300
): ReturnType<typeof setTimeout> | HTMLIFrameElement {
  if (!uniqueDOM?.iframe) {
    uniqueDOM.iframe = {};
  }
  if (uniqueDOM.iframe[src]) {
    return uniqueDOM.iframe[src];
  }
  uniqueDOM.iframe[src] = window.document.createElement('iframe');
  uniqueDOM.iframe[src].src = src;
  uniqueDOM.iframe[src].style.position = 'absolute';
  uniqueDOM.iframe[src].style.visibility = 'hidden';
  uniqueDOM.iframe[src].style.maxWidth = '0';
  uniqueDOM.iframe[src].style.maxHeight = '0';
  uniqueDOM.iframe[src].style.opacity = '0';
  uniqueDOM.body.appendChild(uniqueDOM.iframe[src]);
  return setTimeout(function removeEffect(): void {
    if (!uniqueDOM.iframe?.[src]) {
      return;
    }
    uniqueDOM.body.removeChild(uniqueDOM.iframe[src]);
  }, timer);
}

export function onceScript(
  src: SourceString,
  async = false,
  defer = false
): HTMLScriptElement {
  if (!uniqueDOM.script) {
    uniqueDOM.script = {};
  }
  if (!uniqueDOM.script?.[src]) {
    uniqueDOM.script[src] = window.document.createElement('script');
    uniqueDOM.script[src].src = src;
    uniqueDOM.script[src].async = async;
    uniqueDOM.script[src].defer = defer;
    uniqueDOM.head.appendChild(uniqueDOM.script[src]);
  }
  return uniqueDOM.script[src];
}
