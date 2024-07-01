declare type SourceString = string;

declare interface InnerDOMRequired {
  root: HTMLElement;
  head: HTMLHeadElement;
  body: HTMLBodyElement;
}

declare interface InnerDOMOptional {
  inlineFrame: HTMLIFrameElement;
  inlineFrameSource: SourceString;
  script: HTMLScriptElement;
  scriptSource: SourceString;
}

declare type InnerDOM = InnerDOMRequired & Partial<InnerDOMOptional>;
