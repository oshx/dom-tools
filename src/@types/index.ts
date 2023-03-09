export type SourceString = string;

export interface InnerDOMRequired {
  root: HTMLElement;
  head: HTMLHeadElement;
  body: HTMLBodyElement;
}

export interface InnerDOMOptional {
  inlineFrame: HTMLIFrameElement;
  inlineFrameSource: SourceString;
  script: HTMLScriptElement;
  scriptSource: SourceString;
}

export type InnerDOM = InnerDOMRequired & Partial<InnerDOMOptional>;
