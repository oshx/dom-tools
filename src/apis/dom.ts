import { InnerDOM, SourceString } from '@/@types';

const innerDOM: InnerDOM = {
  root: window.document.documentElement,
  head: window.document.head || window.document.getElementsByTagName('head')[0],
  body: <HTMLBodyElement>(
    (window.document.body || window.document.getElementsByTagName('body')[0])
  ),
};

export function onceInlineFrame(
  src: SourceString,
  timer: EpochTimeStamp = 300
): NodeJS.Timeout {
  if (!innerDOM?.inlineFrame) {
    innerDOM.inlineFrame = window.document.createElement('iframe');
  }
  if (innerDOM.inlineFrameSource !== src) {
    innerDOM.inlineFrameSource = src;
  }
  innerDOM.inlineFrame.src = innerDOM.inlineFrameSource;
  innerDOM.inlineFrame.style.position = 'absolute';
  innerDOM.inlineFrame.style.visibility = 'hidden';
  innerDOM.inlineFrame.style.maxWidth = '0';
  innerDOM.inlineFrame.style.maxHeight = '0';
  innerDOM.inlineFrame.style.opacity = '0';
  innerDOM.body.appendChild(innerDOM.inlineFrame);
  return setTimeout(function removeEffect(): void {
    if (!innerDOM?.inlineFrame) {
      return;
    }
    innerDOM.body.removeChild(innerDOM?.inlineFrame);
  }, timer);
}

export function onceScript(
  src: SourceString,
  async = false,
  defer = false
): HTMLScriptElement {
  if (innerDOM.script && innerDOM.scriptSource === src) {
    return innerDOM.script;
  }
  innerDOM.scriptSource = src;
  innerDOM.script = window.document.createElement('script');
  innerDOM.script.src = innerDOM.scriptSource;
  innerDOM.script.async = async;
  innerDOM.script.defer = defer;
  innerDOM.head.appendChild(innerDOM.script);
  return innerDOM.script;
}
